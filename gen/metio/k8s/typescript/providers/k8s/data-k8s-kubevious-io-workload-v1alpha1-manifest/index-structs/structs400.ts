import * as cdktf from 'cdktf';
import { DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersEnv,
dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersEnvToTerraform,
dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersEnvToHclTerraform,
DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersEnvList,
DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersEnvFrom,
dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersEnvFromToTerraform,
dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersEnvFromToHclTerraform,
DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersEnvFromList,
DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLifecycle,
dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLifecycleToTerraform,
dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLifecycleToHclTerraform,
DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLifecycleOutputReference,
DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecAffinity,
dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecAffinityToTerraform,
dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecAffinityToHclTerraform,
DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecAffinityOutputReference,
DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecContainers,
dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecContainersToTerraform,
dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecContainersToHclTerraform,
DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecContainersList,
DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecDnsConfig,
dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecDnsConfigToTerraform,
dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecDnsConfigToHclTerraform,
DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecDnsConfigOutputReference,
DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateMetadata,
dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateMetadataToTerraform,
dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateMetadataToHclTerraform,
DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateMetadataOutputReference,
DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecSchedule,
dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecScheduleToTerraform,
dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecScheduleToHclTerraform,
DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecScheduleList,
DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecSelector,
dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecSelectorToTerraform,
dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecSelectorToHclTerraform,
DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecSelectorOutputReference,
DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecStrategy,
dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecStrategyToTerraform,
dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecStrategyToHclTerraform,
DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecStrategyOutputReference } from './structs0'
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeExec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#command DataK8SKubeviousIoWorkloadV1Alpha1Manifest#command}
  */
  readonly command?: string[];
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeExecToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeExecToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeExec | cdktf.IResolvable): any {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeExec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeExec | cdktf.IResolvable | undefined) {
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
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeGrpc {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#port DataK8SKubeviousIoWorkloadV1Alpha1Manifest#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#service DataK8SKubeviousIoWorkloadV1Alpha1Manifest#service}
  */
  readonly service?: string;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeGrpcToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeGrpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeGrpcToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeGrpc | cdktf.IResolvable): any {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeGrpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeGrpc | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeGrpc | cdktf.IResolvable | undefined) {
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
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeHttpGetHttpHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#name DataK8SKubeviousIoWorkloadV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#value DataK8SKubeviousIoWorkloadV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeHttpGetHttpHeadersToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeHttpGetHttpHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeHttpGetHttpHeadersToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeHttpGetHttpHeaders | cdktf.IResolvable): any {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeHttpGetHttpHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined) {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeHttpGetHttpHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeHttpGetHttpHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeHttpGetHttpHeadersOutputReference {
    return new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeHttpGetHttpHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeHttpGet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#host DataK8SKubeviousIoWorkloadV1Alpha1Manifest#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#http_headers DataK8SKubeviousIoWorkloadV1Alpha1Manifest#http_headers}
  */
  readonly httpHeaders?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeHttpGetHttpHeaders[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#path DataK8SKubeviousIoWorkloadV1Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#port DataK8SKubeviousIoWorkloadV1Alpha1Manifest#port}
  */
  readonly port: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#scheme DataK8SKubeviousIoWorkloadV1Alpha1Manifest#scheme}
  */
  readonly scheme?: string;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeHttpGetToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeHttpGet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    http_headers: cdktf.listMapper(dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeHttpGetHttpHeadersToTerraform, false)(struct!.httpHeaders),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeHttpGetToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeHttpGet | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeHttpGetHttpHeadersToHclTerraform, false)(struct!.httpHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeHttpGetHttpHeadersList",
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeHttpGetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeHttpGet | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeHttpGet | cdktf.IResolvable | undefined) {
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
  private _httpHeaders = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeHttpGetHttpHeadersList(this, "http_headers", false);
  public get httpHeaders() {
    return this._httpHeaders;
  }
  public putHttpHeaders(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeHttpGetHttpHeaders[] | cdktf.IResolvable) {
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
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeTcpSocket {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#host DataK8SKubeviousIoWorkloadV1Alpha1Manifest#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#port DataK8SKubeviousIoWorkloadV1Alpha1Manifest#port}
  */
  readonly port: string;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeTcpSocketToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeTcpSocket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.stringToTerraform(struct!.port),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeTcpSocketToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeTcpSocket | cdktf.IResolvable): any {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeTcpSocketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeTcpSocket | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeTcpSocket | cdktf.IResolvable | undefined) {
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
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbe {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#exec DataK8SKubeviousIoWorkloadV1Alpha1Manifest#exec}
  */
  readonly exec?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeExec;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#failure_threshold DataK8SKubeviousIoWorkloadV1Alpha1Manifest#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#grpc DataK8SKubeviousIoWorkloadV1Alpha1Manifest#grpc}
  */
  readonly grpc?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeGrpc;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#http_get DataK8SKubeviousIoWorkloadV1Alpha1Manifest#http_get}
  */
  readonly httpGet?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeHttpGet;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#initial_delay_seconds DataK8SKubeviousIoWorkloadV1Alpha1Manifest#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#period_seconds DataK8SKubeviousIoWorkloadV1Alpha1Manifest#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#success_threshold DataK8SKubeviousIoWorkloadV1Alpha1Manifest#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#tcp_socket DataK8SKubeviousIoWorkloadV1Alpha1Manifest#tcp_socket}
  */
  readonly tcpSocket?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeTcpSocket;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#termination_grace_period_seconds DataK8SKubeviousIoWorkloadV1Alpha1Manifest#termination_grace_period_seconds}
  */
  readonly terminationGracePeriodSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#timeout_seconds DataK8SKubeviousIoWorkloadV1Alpha1Manifest#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeExecToTerraform(struct!.exec),
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    grpc: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeGrpcToTerraform(struct!.grpc),
    http_get: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeHttpGetToTerraform(struct!.httpGet),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    tcp_socket: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeTcpSocketToTerraform(struct!.tcpSocket),
    termination_grace_period_seconds: cdktf.numberToTerraform(struct!.terminationGracePeriodSeconds),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exec: {
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeExecToHclTerraform(struct!.exec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeExec",
    },
    failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.failureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    grpc: {
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeGrpcToHclTerraform(struct!.grpc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeGrpc",
    },
    http_get: {
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeHttpGetToHclTerraform(struct!.httpGet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeHttpGet",
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
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeTcpSocketToHclTerraform(struct!.tcpSocket),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeTcpSocket",
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbe | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbe | cdktf.IResolvable | undefined) {
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
  private _exec = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeExecOutputReference(this, "exec");
  public get exec() {
    return this._exec;
  }
  public putExec(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeExec) {
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
  private _grpc = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeGrpcOutputReference(this, "grpc");
  public get grpc() {
    return this._grpc;
  }
  public putGrpc(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeGrpc) {
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
  private _httpGet = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeHttpGetOutputReference(this, "http_get");
  public get httpGet() {
    return this._httpGet;
  }
  public putHttpGet(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeHttpGet) {
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
  private _tcpSocket = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeTcpSocketOutputReference(this, "tcp_socket");
  public get tcpSocket() {
    return this._tcpSocket;
  }
  public putTcpSocket(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeTcpSocket) {
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
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#container_port DataK8SKubeviousIoWorkloadV1Alpha1Manifest#container_port}
  */
  readonly containerPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#host_ip DataK8SKubeviousIoWorkloadV1Alpha1Manifest#host_ip}
  */
  readonly hostIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#host_port DataK8SKubeviousIoWorkloadV1Alpha1Manifest#host_port}
  */
  readonly hostPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#name DataK8SKubeviousIoWorkloadV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#protocol DataK8SKubeviousIoWorkloadV1Alpha1Manifest#protocol}
  */
  readonly protocol?: string;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersPortsToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersPorts | cdktf.IResolvable): any {
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


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersPortsToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersPorts | cdktf.IResolvable): any {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersPorts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersPorts | cdktf.IResolvable | undefined) {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersPortsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersPorts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersPortsOutputReference {
    return new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeExec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#command DataK8SKubeviousIoWorkloadV1Alpha1Manifest#command}
  */
  readonly command?: string[];
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeExecToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeExecToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeExec | cdktf.IResolvable): any {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeExec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeExec | cdktf.IResolvable | undefined) {
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
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeGrpc {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#port DataK8SKubeviousIoWorkloadV1Alpha1Manifest#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#service DataK8SKubeviousIoWorkloadV1Alpha1Manifest#service}
  */
  readonly service?: string;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeGrpcToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeGrpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeGrpcToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeGrpc | cdktf.IResolvable): any {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeGrpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeGrpc | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeGrpc | cdktf.IResolvable | undefined) {
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
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeHttpGetHttpHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#name DataK8SKubeviousIoWorkloadV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#value DataK8SKubeviousIoWorkloadV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeHttpGetHttpHeadersToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeHttpGetHttpHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeHttpGetHttpHeadersToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeHttpGetHttpHeaders | cdktf.IResolvable): any {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeHttpGetHttpHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined) {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeHttpGetHttpHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeHttpGetHttpHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeHttpGetHttpHeadersOutputReference {
    return new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeHttpGetHttpHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeHttpGet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#host DataK8SKubeviousIoWorkloadV1Alpha1Manifest#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#http_headers DataK8SKubeviousIoWorkloadV1Alpha1Manifest#http_headers}
  */
  readonly httpHeaders?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeHttpGetHttpHeaders[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#path DataK8SKubeviousIoWorkloadV1Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#port DataK8SKubeviousIoWorkloadV1Alpha1Manifest#port}
  */
  readonly port: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#scheme DataK8SKubeviousIoWorkloadV1Alpha1Manifest#scheme}
  */
  readonly scheme?: string;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeHttpGetToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeHttpGet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    http_headers: cdktf.listMapper(dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeHttpGetHttpHeadersToTerraform, false)(struct!.httpHeaders),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeHttpGetToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeHttpGet | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeHttpGetHttpHeadersToHclTerraform, false)(struct!.httpHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeHttpGetHttpHeadersList",
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeHttpGetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeHttpGet | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeHttpGet | cdktf.IResolvable | undefined) {
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
  private _httpHeaders = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeHttpGetHttpHeadersList(this, "http_headers", false);
  public get httpHeaders() {
    return this._httpHeaders;
  }
  public putHttpHeaders(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeHttpGetHttpHeaders[] | cdktf.IResolvable) {
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
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeTcpSocket {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#host DataK8SKubeviousIoWorkloadV1Alpha1Manifest#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#port DataK8SKubeviousIoWorkloadV1Alpha1Manifest#port}
  */
  readonly port: string;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeTcpSocketToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeTcpSocket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.stringToTerraform(struct!.port),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeTcpSocketToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeTcpSocket | cdktf.IResolvable): any {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeTcpSocketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeTcpSocket | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeTcpSocket | cdktf.IResolvable | undefined) {
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
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbe {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#exec DataK8SKubeviousIoWorkloadV1Alpha1Manifest#exec}
  */
  readonly exec?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeExec;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#failure_threshold DataK8SKubeviousIoWorkloadV1Alpha1Manifest#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#grpc DataK8SKubeviousIoWorkloadV1Alpha1Manifest#grpc}
  */
  readonly grpc?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeGrpc;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#http_get DataK8SKubeviousIoWorkloadV1Alpha1Manifest#http_get}
  */
  readonly httpGet?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeHttpGet;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#initial_delay_seconds DataK8SKubeviousIoWorkloadV1Alpha1Manifest#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#period_seconds DataK8SKubeviousIoWorkloadV1Alpha1Manifest#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#success_threshold DataK8SKubeviousIoWorkloadV1Alpha1Manifest#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#tcp_socket DataK8SKubeviousIoWorkloadV1Alpha1Manifest#tcp_socket}
  */
  readonly tcpSocket?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeTcpSocket;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#termination_grace_period_seconds DataK8SKubeviousIoWorkloadV1Alpha1Manifest#termination_grace_period_seconds}
  */
  readonly terminationGracePeriodSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#timeout_seconds DataK8SKubeviousIoWorkloadV1Alpha1Manifest#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeExecToTerraform(struct!.exec),
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    grpc: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeGrpcToTerraform(struct!.grpc),
    http_get: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeHttpGetToTerraform(struct!.httpGet),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    tcp_socket: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeTcpSocketToTerraform(struct!.tcpSocket),
    termination_grace_period_seconds: cdktf.numberToTerraform(struct!.terminationGracePeriodSeconds),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exec: {
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeExecToHclTerraform(struct!.exec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeExec",
    },
    failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.failureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    grpc: {
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeGrpcToHclTerraform(struct!.grpc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeGrpc",
    },
    http_get: {
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeHttpGetToHclTerraform(struct!.httpGet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeHttpGet",
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
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeTcpSocketToHclTerraform(struct!.tcpSocket),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeTcpSocket",
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbe | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbe | cdktf.IResolvable | undefined) {
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
  private _exec = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeExecOutputReference(this, "exec");
  public get exec() {
    return this._exec;
  }
  public putExec(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeExec) {
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
  private _grpc = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeGrpcOutputReference(this, "grpc");
  public get grpc() {
    return this._grpc;
  }
  public putGrpc(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeGrpc) {
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
  private _httpGet = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeHttpGetOutputReference(this, "http_get");
  public get httpGet() {
    return this._httpGet;
  }
  public putHttpGet(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeHttpGet) {
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
  private _tcpSocket = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeTcpSocketOutputReference(this, "tcp_socket");
  public get tcpSocket() {
    return this._tcpSocket;
  }
  public putTcpSocket(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeTcpSocket) {
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
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#limits DataK8SKubeviousIoWorkloadV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#requests DataK8SKubeviousIoWorkloadV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersResourcesToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersResourcesToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._limits = value.limits;
      this._requests = value.requests;
    }
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
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersSecurityContextCapabilities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#add DataK8SKubeviousIoWorkloadV1Alpha1Manifest#add}
  */
  readonly add?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#drop DataK8SKubeviousIoWorkloadV1Alpha1Manifest#drop}
  */
  readonly drop?: string[];
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersSecurityContextCapabilitiesToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersSecurityContextCapabilities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.add),
    drop: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.drop),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersSecurityContextCapabilitiesToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersSecurityContextCapabilities | cdktf.IResolvable): any {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersSecurityContextCapabilitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersSecurityContextCapabilities | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersSecurityContextCapabilities | cdktf.IResolvable | undefined) {
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
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersSecurityContextSeLinuxOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#level DataK8SKubeviousIoWorkloadV1Alpha1Manifest#level}
  */
  readonly level?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#role DataK8SKubeviousIoWorkloadV1Alpha1Manifest#role}
  */
  readonly role?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#type DataK8SKubeviousIoWorkloadV1Alpha1Manifest#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#user DataK8SKubeviousIoWorkloadV1Alpha1Manifest#user}
  */
  readonly user?: string;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersSecurityContextSeLinuxOptionsToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersSecurityContextSeLinuxOptions | cdktf.IResolvable): any {
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


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersSecurityContextSeLinuxOptionsToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersSecurityContextSeLinuxOptions | cdktf.IResolvable): any {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersSecurityContextSeLinuxOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersSecurityContextSeLinuxOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersSecurityContextSeLinuxOptions | cdktf.IResolvable | undefined) {
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
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersSecurityContextSeccompProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#localhost_profile DataK8SKubeviousIoWorkloadV1Alpha1Manifest#localhost_profile}
  */
  readonly localhostProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#type DataK8SKubeviousIoWorkloadV1Alpha1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersSecurityContextSeccompProfileToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersSecurityContextSeccompProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    localhost_profile: cdktf.stringToTerraform(struct!.localhostProfile),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersSecurityContextSeccompProfileToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersSecurityContextSeccompProfile | cdktf.IResolvable): any {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersSecurityContextSeccompProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersSecurityContextSeccompProfile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersSecurityContextSeccompProfile | cdktf.IResolvable | undefined) {
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
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersSecurityContextWindowsOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#gmsa_credential_spec DataK8SKubeviousIoWorkloadV1Alpha1Manifest#gmsa_credential_spec}
  */
  readonly gmsaCredentialSpec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#gmsa_credential_spec_name DataK8SKubeviousIoWorkloadV1Alpha1Manifest#gmsa_credential_spec_name}
  */
  readonly gmsaCredentialSpecName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#host_process DataK8SKubeviousIoWorkloadV1Alpha1Manifest#host_process}
  */
  readonly hostProcess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#run_as_user_name DataK8SKubeviousIoWorkloadV1Alpha1Manifest#run_as_user_name}
  */
  readonly runAsUserName?: string;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersSecurityContextWindowsOptionsToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersSecurityContextWindowsOptions | cdktf.IResolvable): any {
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


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersSecurityContextWindowsOptionsToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersSecurityContextWindowsOptions | cdktf.IResolvable): any {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersSecurityContextWindowsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersSecurityContextWindowsOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersSecurityContextWindowsOptions | cdktf.IResolvable | undefined) {
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
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersSecurityContext {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#allow_privilege_escalation DataK8SKubeviousIoWorkloadV1Alpha1Manifest#allow_privilege_escalation}
  */
  readonly allowPrivilegeEscalation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#capabilities DataK8SKubeviousIoWorkloadV1Alpha1Manifest#capabilities}
  */
  readonly capabilities?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersSecurityContextCapabilities;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#privileged DataK8SKubeviousIoWorkloadV1Alpha1Manifest#privileged}
  */
  readonly privileged?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#proc_mount DataK8SKubeviousIoWorkloadV1Alpha1Manifest#proc_mount}
  */
  readonly procMount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#read_only_root_filesystem DataK8SKubeviousIoWorkloadV1Alpha1Manifest#read_only_root_filesystem}
  */
  readonly readOnlyRootFilesystem?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#run_as_group DataK8SKubeviousIoWorkloadV1Alpha1Manifest#run_as_group}
  */
  readonly runAsGroup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#run_as_non_root DataK8SKubeviousIoWorkloadV1Alpha1Manifest#run_as_non_root}
  */
  readonly runAsNonRoot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#run_as_user DataK8SKubeviousIoWorkloadV1Alpha1Manifest#run_as_user}
  */
  readonly runAsUser?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#se_linux_options DataK8SKubeviousIoWorkloadV1Alpha1Manifest#se_linux_options}
  */
  readonly seLinuxOptions?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersSecurityContextSeLinuxOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#seccomp_profile DataK8SKubeviousIoWorkloadV1Alpha1Manifest#seccomp_profile}
  */
  readonly seccompProfile?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersSecurityContextSeccompProfile;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#windows_options DataK8SKubeviousIoWorkloadV1Alpha1Manifest#windows_options}
  */
  readonly windowsOptions?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersSecurityContextWindowsOptions;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersSecurityContextToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_privilege_escalation: cdktf.booleanToTerraform(struct!.allowPrivilegeEscalation),
    capabilities: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersSecurityContextCapabilitiesToTerraform(struct!.capabilities),
    privileged: cdktf.booleanToTerraform(struct!.privileged),
    proc_mount: cdktf.stringToTerraform(struct!.procMount),
    read_only_root_filesystem: cdktf.booleanToTerraform(struct!.readOnlyRootFilesystem),
    run_as_group: cdktf.numberToTerraform(struct!.runAsGroup),
    run_as_non_root: cdktf.booleanToTerraform(struct!.runAsNonRoot),
    run_as_user: cdktf.numberToTerraform(struct!.runAsUser),
    se_linux_options: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersSecurityContextSeLinuxOptionsToTerraform(struct!.seLinuxOptions),
    seccomp_profile: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersSecurityContextSeccompProfileToTerraform(struct!.seccompProfile),
    windows_options: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersSecurityContextWindowsOptionsToTerraform(struct!.windowsOptions),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersSecurityContextToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersSecurityContext | cdktf.IResolvable): any {
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
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersSecurityContextCapabilitiesToHclTerraform(struct!.capabilities),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersSecurityContextCapabilities",
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
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersSecurityContextSeLinuxOptionsToHclTerraform(struct!.seLinuxOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersSecurityContextSeLinuxOptions",
    },
    seccomp_profile: {
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersSecurityContextSeccompProfileToHclTerraform(struct!.seccompProfile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersSecurityContextSeccompProfile",
    },
    windows_options: {
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersSecurityContextWindowsOptionsToHclTerraform(struct!.windowsOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersSecurityContextWindowsOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersSecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersSecurityContext | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersSecurityContext | cdktf.IResolvable | undefined) {
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
  private _capabilities = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersSecurityContextCapabilitiesOutputReference(this, "capabilities");
  public get capabilities() {
    return this._capabilities;
  }
  public putCapabilities(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersSecurityContextCapabilities) {
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
  private _seLinuxOptions = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersSecurityContextSeLinuxOptionsOutputReference(this, "se_linux_options");
  public get seLinuxOptions() {
    return this._seLinuxOptions;
  }
  public putSeLinuxOptions(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersSecurityContextSeLinuxOptions) {
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
  private _seccompProfile = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersSecurityContextSeccompProfileOutputReference(this, "seccomp_profile");
  public get seccompProfile() {
    return this._seccompProfile;
  }
  public putSeccompProfile(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersSecurityContextSeccompProfile) {
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
  private _windowsOptions = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersSecurityContextWindowsOptionsOutputReference(this, "windows_options");
  public get windowsOptions() {
    return this._windowsOptions;
  }
  public putWindowsOptions(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersSecurityContextWindowsOptions) {
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
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeExec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#command DataK8SKubeviousIoWorkloadV1Alpha1Manifest#command}
  */
  readonly command?: string[];
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeExecToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeExecToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeExec | cdktf.IResolvable): any {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeExec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeExec | cdktf.IResolvable | undefined) {
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
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeGrpc {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#port DataK8SKubeviousIoWorkloadV1Alpha1Manifest#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#service DataK8SKubeviousIoWorkloadV1Alpha1Manifest#service}
  */
  readonly service?: string;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeGrpcToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeGrpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeGrpcToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeGrpc | cdktf.IResolvable): any {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeGrpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeGrpc | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeGrpc | cdktf.IResolvable | undefined) {
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
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeHttpGetHttpHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#name DataK8SKubeviousIoWorkloadV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#value DataK8SKubeviousIoWorkloadV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeHttpGetHttpHeadersToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeHttpGetHttpHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeHttpGetHttpHeadersToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeHttpGetHttpHeaders | cdktf.IResolvable): any {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeHttpGetHttpHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined) {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeHttpGetHttpHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeHttpGetHttpHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeHttpGetHttpHeadersOutputReference {
    return new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeHttpGetHttpHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeHttpGet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#host DataK8SKubeviousIoWorkloadV1Alpha1Manifest#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#http_headers DataK8SKubeviousIoWorkloadV1Alpha1Manifest#http_headers}
  */
  readonly httpHeaders?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeHttpGetHttpHeaders[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#path DataK8SKubeviousIoWorkloadV1Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#port DataK8SKubeviousIoWorkloadV1Alpha1Manifest#port}
  */
  readonly port: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#scheme DataK8SKubeviousIoWorkloadV1Alpha1Manifest#scheme}
  */
  readonly scheme?: string;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeHttpGetToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeHttpGet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    http_headers: cdktf.listMapper(dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeHttpGetHttpHeadersToTerraform, false)(struct!.httpHeaders),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeHttpGetToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeHttpGet | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeHttpGetHttpHeadersToHclTerraform, false)(struct!.httpHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeHttpGetHttpHeadersList",
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeHttpGetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeHttpGet | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeHttpGet | cdktf.IResolvable | undefined) {
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
  private _httpHeaders = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeHttpGetHttpHeadersList(this, "http_headers", false);
  public get httpHeaders() {
    return this._httpHeaders;
  }
  public putHttpHeaders(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeHttpGetHttpHeaders[] | cdktf.IResolvable) {
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
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeTcpSocket {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#host DataK8SKubeviousIoWorkloadV1Alpha1Manifest#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#port DataK8SKubeviousIoWorkloadV1Alpha1Manifest#port}
  */
  readonly port: string;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeTcpSocketToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeTcpSocket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.stringToTerraform(struct!.port),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeTcpSocketToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeTcpSocket | cdktf.IResolvable): any {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeTcpSocketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeTcpSocket | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeTcpSocket | cdktf.IResolvable | undefined) {
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
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbe {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#exec DataK8SKubeviousIoWorkloadV1Alpha1Manifest#exec}
  */
  readonly exec?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeExec;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#failure_threshold DataK8SKubeviousIoWorkloadV1Alpha1Manifest#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#grpc DataK8SKubeviousIoWorkloadV1Alpha1Manifest#grpc}
  */
  readonly grpc?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeGrpc;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#http_get DataK8SKubeviousIoWorkloadV1Alpha1Manifest#http_get}
  */
  readonly httpGet?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeHttpGet;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#initial_delay_seconds DataK8SKubeviousIoWorkloadV1Alpha1Manifest#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#period_seconds DataK8SKubeviousIoWorkloadV1Alpha1Manifest#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#success_threshold DataK8SKubeviousIoWorkloadV1Alpha1Manifest#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#tcp_socket DataK8SKubeviousIoWorkloadV1Alpha1Manifest#tcp_socket}
  */
  readonly tcpSocket?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeTcpSocket;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#termination_grace_period_seconds DataK8SKubeviousIoWorkloadV1Alpha1Manifest#termination_grace_period_seconds}
  */
  readonly terminationGracePeriodSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#timeout_seconds DataK8SKubeviousIoWorkloadV1Alpha1Manifest#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeExecToTerraform(struct!.exec),
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    grpc: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeGrpcToTerraform(struct!.grpc),
    http_get: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeHttpGetToTerraform(struct!.httpGet),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    tcp_socket: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeTcpSocketToTerraform(struct!.tcpSocket),
    termination_grace_period_seconds: cdktf.numberToTerraform(struct!.terminationGracePeriodSeconds),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exec: {
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeExecToHclTerraform(struct!.exec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeExec",
    },
    failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.failureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    grpc: {
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeGrpcToHclTerraform(struct!.grpc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeGrpc",
    },
    http_get: {
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeHttpGetToHclTerraform(struct!.httpGet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeHttpGet",
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
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeTcpSocketToHclTerraform(struct!.tcpSocket),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeTcpSocket",
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbe | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbe | cdktf.IResolvable | undefined) {
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
  private _exec = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeExecOutputReference(this, "exec");
  public get exec() {
    return this._exec;
  }
  public putExec(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeExec) {
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
  private _grpc = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeGrpcOutputReference(this, "grpc");
  public get grpc() {
    return this._grpc;
  }
  public putGrpc(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeGrpc) {
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
  private _httpGet = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeHttpGetOutputReference(this, "http_get");
  public get httpGet() {
    return this._httpGet;
  }
  public putHttpGet(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeHttpGet) {
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
  private _tcpSocket = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeTcpSocketOutputReference(this, "tcp_socket");
  public get tcpSocket() {
    return this._tcpSocket;
  }
  public putTcpSocket(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeTcpSocket) {
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
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersVolumeDevices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#device_path DataK8SKubeviousIoWorkloadV1Alpha1Manifest#device_path}
  */
  readonly devicePath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#name DataK8SKubeviousIoWorkloadV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersVolumeDevicesToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersVolumeDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_path: cdktf.stringToTerraform(struct!.devicePath),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersVolumeDevicesToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersVolumeDevices | cdktf.IResolvable): any {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersVolumeDevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersVolumeDevices | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersVolumeDevices | cdktf.IResolvable | undefined) {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersVolumeDevicesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersVolumeDevices[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersVolumeDevicesOutputReference {
    return new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersVolumeDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersVolumeMounts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#mount_path DataK8SKubeviousIoWorkloadV1Alpha1Manifest#mount_path}
  */
  readonly mountPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#mount_propagation DataK8SKubeviousIoWorkloadV1Alpha1Manifest#mount_propagation}
  */
  readonly mountPropagation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#name DataK8SKubeviousIoWorkloadV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#read_only DataK8SKubeviousIoWorkloadV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#sub_path DataK8SKubeviousIoWorkloadV1Alpha1Manifest#sub_path}
  */
  readonly subPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#sub_path_expr DataK8SKubeviousIoWorkloadV1Alpha1Manifest#sub_path_expr}
  */
  readonly subPathExpr?: string;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersVolumeMountsToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersVolumeMounts | cdktf.IResolvable): any {
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


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersVolumeMountsToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersVolumeMounts | cdktf.IResolvable): any {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersVolumeMountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersVolumeMounts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersVolumeMounts | cdktf.IResolvable | undefined) {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersVolumeMountsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersVolumeMounts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersVolumeMountsOutputReference {
    return new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersVolumeMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#args DataK8SKubeviousIoWorkloadV1Alpha1Manifest#args}
  */
  readonly args?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#command DataK8SKubeviousIoWorkloadV1Alpha1Manifest#command}
  */
  readonly command?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#env DataK8SKubeviousIoWorkloadV1Alpha1Manifest#env}
  */
  readonly env?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersEnv[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#env_from DataK8SKubeviousIoWorkloadV1Alpha1Manifest#env_from}
  */
  readonly envFrom?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersEnvFrom[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#image DataK8SKubeviousIoWorkloadV1Alpha1Manifest#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#image_pull_policy DataK8SKubeviousIoWorkloadV1Alpha1Manifest#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#lifecycle DataK8SKubeviousIoWorkloadV1Alpha1Manifest#lifecycle}
  */
  readonly lifecycle?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLifecycle;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#liveness_probe DataK8SKubeviousIoWorkloadV1Alpha1Manifest#liveness_probe}
  */
  readonly livenessProbe?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbe;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#name DataK8SKubeviousIoWorkloadV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#ports DataK8SKubeviousIoWorkloadV1Alpha1Manifest#ports}
  */
  readonly ports?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersPorts[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#readiness_probe DataK8SKubeviousIoWorkloadV1Alpha1Manifest#readiness_probe}
  */
  readonly readinessProbe?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbe;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#resources DataK8SKubeviousIoWorkloadV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersResources;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#security_context DataK8SKubeviousIoWorkloadV1Alpha1Manifest#security_context}
  */
  readonly securityContext?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersSecurityContext;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#startup_probe DataK8SKubeviousIoWorkloadV1Alpha1Manifest#startup_probe}
  */
  readonly startupProbe?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbe;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#stdin DataK8SKubeviousIoWorkloadV1Alpha1Manifest#stdin}
  */
  readonly stdin?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#stdin_once DataK8SKubeviousIoWorkloadV1Alpha1Manifest#stdin_once}
  */
  readonly stdinOnce?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#target_container_name DataK8SKubeviousIoWorkloadV1Alpha1Manifest#target_container_name}
  */
  readonly targetContainerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#termination_message_path DataK8SKubeviousIoWorkloadV1Alpha1Manifest#termination_message_path}
  */
  readonly terminationMessagePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#termination_message_policy DataK8SKubeviousIoWorkloadV1Alpha1Manifest#termination_message_policy}
  */
  readonly terminationMessagePolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#tty DataK8SKubeviousIoWorkloadV1Alpha1Manifest#tty}
  */
  readonly tty?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#volume_devices DataK8SKubeviousIoWorkloadV1Alpha1Manifest#volume_devices}
  */
  readonly volumeDevices?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersVolumeDevices[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#volume_mounts DataK8SKubeviousIoWorkloadV1Alpha1Manifest#volume_mounts}
  */
  readonly volumeMounts?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersVolumeMounts[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#working_dir DataK8SKubeviousIoWorkloadV1Alpha1Manifest#working_dir}
  */
  readonly workingDir?: string;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
    env: cdktf.listMapper(dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersEnvToTerraform, false)(struct!.env),
    env_from: cdktf.listMapper(dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersEnvFromToTerraform, false)(struct!.envFrom),
    image: cdktf.stringToTerraform(struct!.image),
    image_pull_policy: cdktf.stringToTerraform(struct!.imagePullPolicy),
    lifecycle: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLifecycleToTerraform(struct!.lifecycle),
    liveness_probe: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeToTerraform(struct!.livenessProbe),
    name: cdktf.stringToTerraform(struct!.name),
    ports: cdktf.listMapper(dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersPortsToTerraform, false)(struct!.ports),
    readiness_probe: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeToTerraform(struct!.readinessProbe),
    resources: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersResourcesToTerraform(struct!.resources),
    security_context: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersSecurityContextToTerraform(struct!.securityContext),
    startup_probe: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeToTerraform(struct!.startupProbe),
    stdin: cdktf.booleanToTerraform(struct!.stdin),
    stdin_once: cdktf.booleanToTerraform(struct!.stdinOnce),
    target_container_name: cdktf.stringToTerraform(struct!.targetContainerName),
    termination_message_path: cdktf.stringToTerraform(struct!.terminationMessagePath),
    termination_message_policy: cdktf.stringToTerraform(struct!.terminationMessagePolicy),
    tty: cdktf.booleanToTerraform(struct!.tty),
    volume_devices: cdktf.listMapper(dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersVolumeDevicesToTerraform, false)(struct!.volumeDevices),
    volume_mounts: cdktf.listMapper(dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersVolumeMountsToTerraform, false)(struct!.volumeMounts),
    working_dir: cdktf.stringToTerraform(struct!.workingDir),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainers | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersEnvToHclTerraform, false)(struct!.env),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersEnvList",
    },
    env_from: {
      value: cdktf.listMapperHcl(dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersEnvFromToHclTerraform, false)(struct!.envFrom),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersEnvFromList",
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
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLifecycleToHclTerraform(struct!.lifecycle),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLifecycle",
    },
    liveness_probe: {
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeToHclTerraform(struct!.livenessProbe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbe",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ports: {
      value: cdktf.listMapperHcl(dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersPortsToHclTerraform, false)(struct!.ports),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersPortsList",
    },
    readiness_probe: {
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeToHclTerraform(struct!.readinessProbe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbe",
    },
    resources: {
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersResources",
    },
    security_context: {
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersSecurityContextToHclTerraform(struct!.securityContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersSecurityContext",
    },
    startup_probe: {
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeToHclTerraform(struct!.startupProbe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbe",
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
    target_container_name: {
      value: cdktf.stringToHclTerraform(struct!.targetContainerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
      value: cdktf.listMapperHcl(dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersVolumeDevicesToHclTerraform, false)(struct!.volumeDevices),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersVolumeDevicesList",
    },
    volume_mounts: {
      value: cdktf.listMapperHcl(dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersVolumeMountsToHclTerraform, false)(struct!.volumeMounts),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersVolumeMountsList",
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainers | cdktf.IResolvable | undefined {
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
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
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
    if (this._targetContainerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetContainerName = this._targetContainerName;
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainers | cdktf.IResolvable | undefined) {
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
      this._resources.internalValue = undefined;
      this._securityContext.internalValue = undefined;
      this._startupProbe.internalValue = undefined;
      this._stdin = undefined;
      this._stdinOnce = undefined;
      this._targetContainerName = undefined;
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
      this._resources.internalValue = value.resources;
      this._securityContext.internalValue = value.securityContext;
      this._startupProbe.internalValue = value.startupProbe;
      this._stdin = value.stdin;
      this._stdinOnce = value.stdinOnce;
      this._targetContainerName = value.targetContainerName;
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
  private _env = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersEnv[] | cdktf.IResolvable) {
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
  private _envFrom = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersEnvFromList(this, "env_from", false);
  public get envFrom() {
    return this._envFrom;
  }
  public putEnvFrom(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersEnvFrom[] | cdktf.IResolvable) {
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
  private _lifecycle = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLifecycleOutputReference(this, "lifecycle");
  public get lifecycle() {
    return this._lifecycle;
  }
  public putLifecycle(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLifecycle) {
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
  private _livenessProbe = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbeOutputReference(this, "liveness_probe");
  public get livenessProbe() {
    return this._livenessProbe;
  }
  public putLivenessProbe(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersLivenessProbe) {
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
  private _ports = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersPorts[] | cdktf.IResolvable) {
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
  private _readinessProbe = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbeOutputReference(this, "readiness_probe");
  public get readinessProbe() {
    return this._readinessProbe;
  }
  public putReadinessProbe(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersReadinessProbe) {
    this._readinessProbe.internalValue = value;
  }
  public resetReadinessProbe() {
    this._readinessProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessProbeInput() {
    return this._readinessProbe.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersResources) {
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
  private _securityContext = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersSecurityContext) {
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
  private _startupProbe = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbeOutputReference(this, "startup_probe");
  public get startupProbe() {
    return this._startupProbe;
  }
  public putStartupProbe(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersStartupProbe) {
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

  // target_container_name - computed: false, optional: true, required: false
  private _targetContainerName?: string; 
  public get targetContainerName() {
    return this.getStringAttribute('target_container_name');
  }
  public set targetContainerName(value: string) {
    this._targetContainerName = value;
  }
  public resetTargetContainerName() {
    this._targetContainerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetContainerNameInput() {
    return this._targetContainerName;
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
  private _volumeDevices = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersVolumeDevicesList(this, "volume_devices", false);
  public get volumeDevices() {
    return this._volumeDevices;
  }
  public putVolumeDevices(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersVolumeDevices[] | cdktf.IResolvable) {
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
  private _volumeMounts = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersVolumeMountsList(this, "volume_mounts", false);
  public get volumeMounts() {
    return this._volumeMounts;
  }
  public putVolumeMounts(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersVolumeMounts[] | cdktf.IResolvable) {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersList extends cdktf.ComplexList {
  public internalValue? : DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersOutputReference {
    return new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecHostAliases {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#hostnames DataK8SKubeviousIoWorkloadV1Alpha1Manifest#hostnames}
  */
  readonly hostnames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#ip DataK8SKubeviousIoWorkloadV1Alpha1Manifest#ip}
  */
  readonly ip?: string;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecHostAliasesToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecHostAliases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostnames: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hostnames),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecHostAliasesToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecHostAliases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostnames: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hostnames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecHostAliasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecHostAliases | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostnames !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnames = this._hostnames;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecHostAliases | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostnames = undefined;
      this._ip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostnames = value.hostnames;
      this._ip = value.ip;
    }
  }

  // hostnames - computed: false, optional: true, required: false
  private _hostnames?: string[]; 
  public get hostnames() {
    return this.getListAttribute('hostnames');
  }
  public set hostnames(value: string[]) {
    this._hostnames = value;
  }
  public resetHostnames() {
    this._hostnames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnamesInput() {
    return this._hostnames;
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }
}

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecHostAliasesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecHostAliases[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecHostAliasesOutputReference {
    return new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecHostAliasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecImagePullSecrets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#name DataK8SKubeviousIoWorkloadV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecImagePullSecretsToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecImagePullSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecImagePullSecretsToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecImagePullSecrets | cdktf.IResolvable): any {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecImagePullSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecImagePullSecrets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecImagePullSecrets | cdktf.IResolvable | undefined) {
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
}

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecImagePullSecretsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecImagePullSecrets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecImagePullSecretsOutputReference {
    return new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecImagePullSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvValueFromConfigMapKeyRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#key DataK8SKubeviousIoWorkloadV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#name DataK8SKubeviousIoWorkloadV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#optional DataK8SKubeviousIoWorkloadV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvValueFromConfigMapKeyRefToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvValueFromConfigMapKeyRefToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvValueFromConfigMapKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvValueFromConfigMapKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvValueFromFieldRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#api_version DataK8SKubeviousIoWorkloadV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#field_path DataK8SKubeviousIoWorkloadV1Alpha1Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvValueFromFieldRefToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvValueFromFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvValueFromFieldRefToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvValueFromFieldRef | cdktf.IResolvable): any {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvValueFromFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvValueFromFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvValueFromFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvValueFromResourceFieldRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#container_name DataK8SKubeviousIoWorkloadV1Alpha1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#divisor DataK8SKubeviousIoWorkloadV1Alpha1Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#resource DataK8SKubeviousIoWorkloadV1Alpha1Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvValueFromResourceFieldRefToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvValueFromResourceFieldRef | cdktf.IResolvable): any {
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


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvValueFromResourceFieldRefToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvValueFromResourceFieldRef | cdktf.IResolvable): any {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvValueFromResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvValueFromResourceFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvValueFromResourceFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvValueFromSecretKeyRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#key DataK8SKubeviousIoWorkloadV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#name DataK8SKubeviousIoWorkloadV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#optional DataK8SKubeviousIoWorkloadV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvValueFromSecretKeyRefToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvValueFromSecretKeyRef | cdktf.IResolvable): any {
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


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvValueFromSecretKeyRefToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvValueFromSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvValueFromSecretKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvValueFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#config_map_key_ref DataK8SKubeviousIoWorkloadV1Alpha1Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvValueFromConfigMapKeyRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#field_ref DataK8SKubeviousIoWorkloadV1Alpha1Manifest#field_ref}
  */
  readonly fieldRef?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvValueFromFieldRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#resource_field_ref DataK8SKubeviousIoWorkloadV1Alpha1Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvValueFromResourceFieldRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#secret_key_ref DataK8SKubeviousIoWorkloadV1Alpha1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvValueFromSecretKeyRef;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvValueFromToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    field_ref: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvValueFromFieldRefToTerraform(struct!.fieldRef),
    resource_field_ref: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvValueFromResourceFieldRefToTerraform(struct!.resourceFieldRef),
    secret_key_ref: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvValueFromToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvValueFromConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvValueFromConfigMapKeyRef",
    },
    field_ref: {
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvValueFromFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvValueFromFieldRef",
    },
    resource_field_ref: {
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvValueFromResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvValueFromResourceFieldRef",
    },
    secret_key_ref: {
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvValueFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvValueFrom | cdktf.IResolvable | undefined) {
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
  private _configMapKeyRef = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvValueFromConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvValueFromConfigMapKeyRef) {
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
  private _fieldRef = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvValueFromFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvValueFromFieldRef) {
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
  private _resourceFieldRef = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvValueFromResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvValueFromResourceFieldRef) {
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
  private _secretKeyRef = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvValueFromSecretKeyRef) {
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
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnv {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#name DataK8SKubeviousIoWorkloadV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#value DataK8SKubeviousIoWorkloadV1Alpha1Manifest#value}
  */
  readonly value?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#value_from DataK8SKubeviousIoWorkloadV1Alpha1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvValueFrom;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnv | cdktf.IResolvable): any {
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
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnv | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnv | cdktf.IResolvable | undefined) {
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
  private _valueFrom = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvValueFrom) {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvList extends cdktf.ComplexList {
  public internalValue? : DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnv[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvOutputReference {
    return new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvFromConfigMapRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#name DataK8SKubeviousIoWorkloadV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#optional DataK8SKubeviousIoWorkloadV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvFromConfigMapRefToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvFromConfigMapRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvFromConfigMapRefToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvFromConfigMapRef | cdktf.IResolvable): any {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvFromConfigMapRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvFromConfigMapRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvFromConfigMapRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._optional = value.optional;
    }
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
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvFromSecretRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#name DataK8SKubeviousIoWorkloadV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#optional DataK8SKubeviousIoWorkloadV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvFromSecretRefToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvFromSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvFromSecretRefToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvFromSecretRef | cdktf.IResolvable): any {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvFromSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvFromSecretRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvFromSecretRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._optional = value.optional;
    }
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
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#config_map_ref DataK8SKubeviousIoWorkloadV1Alpha1Manifest#config_map_ref}
  */
  readonly configMapRef?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvFromConfigMapRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#prefix DataK8SKubeviousIoWorkloadV1Alpha1Manifest#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#secret_ref DataK8SKubeviousIoWorkloadV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvFromSecretRef;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvFromToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_ref: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvFromConfigMapRefToTerraform(struct!.configMapRef),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    secret_ref: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvFromSecretRefToTerraform(struct!.secretRef),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvFromToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_ref: {
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvFromConfigMapRefToHclTerraform(struct!.configMapRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvFromConfigMapRef",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_ref: {
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvFromSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvFromSecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvFromOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapRef = this._configMapRef?.internalValue;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapRef.internalValue = undefined;
      this._prefix = undefined;
      this._secretRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMapRef.internalValue = value.configMapRef;
      this._prefix = value.prefix;
      this._secretRef.internalValue = value.secretRef;
    }
  }

  // config_map_ref - computed: false, optional: true, required: false
  private _configMapRef = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvFromConfigMapRefOutputReference(this, "config_map_ref");
  public get configMapRef() {
    return this._configMapRef;
  }
  public putConfigMapRef(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvFromConfigMapRef) {
    this._configMapRef.internalValue = value;
  }
  public resetConfigMapRef() {
    this._configMapRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapRefInput() {
    return this._configMapRef.internalValue;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvFromSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvFromSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }
}

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvFromList extends cdktf.ComplexList {
  public internalValue? : DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvFrom[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvFromOutputReference {
    return new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvFromOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStartExec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#command DataK8SKubeviousIoWorkloadV1Alpha1Manifest#command}
  */
  readonly command?: string[];
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStartExecToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStartExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStartExecToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStartExec | cdktf.IResolvable): any {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStartExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStartExec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStartExec | cdktf.IResolvable | undefined) {
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
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStartHttpGetHttpHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#name DataK8SKubeviousIoWorkloadV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#value DataK8SKubeviousIoWorkloadV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStartHttpGetHttpHeadersToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStartHttpGetHttpHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStartHttpGetHttpHeadersToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStartHttpGetHttpHeaders | cdktf.IResolvable): any {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStartHttpGetHttpHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStartHttpGetHttpHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStartHttpGetHttpHeaders | cdktf.IResolvable | undefined) {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStartHttpGetHttpHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStartHttpGetHttpHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStartHttpGetHttpHeadersOutputReference {
    return new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStartHttpGetHttpHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStartHttpGet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#host DataK8SKubeviousIoWorkloadV1Alpha1Manifest#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#http_headers DataK8SKubeviousIoWorkloadV1Alpha1Manifest#http_headers}
  */
  readonly httpHeaders?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStartHttpGetHttpHeaders[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#path DataK8SKubeviousIoWorkloadV1Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#port DataK8SKubeviousIoWorkloadV1Alpha1Manifest#port}
  */
  readonly port: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#scheme DataK8SKubeviousIoWorkloadV1Alpha1Manifest#scheme}
  */
  readonly scheme?: string;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStartHttpGetToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStartHttpGet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    http_headers: cdktf.listMapper(dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStartHttpGetHttpHeadersToTerraform, false)(struct!.httpHeaders),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStartHttpGetToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStartHttpGet | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStartHttpGetHttpHeadersToHclTerraform, false)(struct!.httpHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStartHttpGetHttpHeadersList",
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStartHttpGetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStartHttpGet | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStartHttpGet | cdktf.IResolvable | undefined) {
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
  private _httpHeaders = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStartHttpGetHttpHeadersList(this, "http_headers", false);
  public get httpHeaders() {
    return this._httpHeaders;
  }
  public putHttpHeaders(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStartHttpGetHttpHeaders[] | cdktf.IResolvable) {
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
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStartTcpSocket {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#host DataK8SKubeviousIoWorkloadV1Alpha1Manifest#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#port DataK8SKubeviousIoWorkloadV1Alpha1Manifest#port}
  */
  readonly port: string;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStartTcpSocketToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStartTcpSocket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.stringToTerraform(struct!.port),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStartTcpSocketToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStartTcpSocket | cdktf.IResolvable): any {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStartTcpSocketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStartTcpSocket | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStartTcpSocket | cdktf.IResolvable | undefined) {
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
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStart {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#exec DataK8SKubeviousIoWorkloadV1Alpha1Manifest#exec}
  */
  readonly exec?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStartExec;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#http_get DataK8SKubeviousIoWorkloadV1Alpha1Manifest#http_get}
  */
  readonly httpGet?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStartHttpGet;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#tcp_socket DataK8SKubeviousIoWorkloadV1Alpha1Manifest#tcp_socket}
  */
  readonly tcpSocket?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStartTcpSocket;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStartToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStartExecToTerraform(struct!.exec),
    http_get: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStartHttpGetToTerraform(struct!.httpGet),
    tcp_socket: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStartTcpSocketToTerraform(struct!.tcpSocket),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStartToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exec: {
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStartExecToHclTerraform(struct!.exec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStartExec",
    },
    http_get: {
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStartHttpGetToHclTerraform(struct!.httpGet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStartHttpGet",
    },
    tcp_socket: {
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStartTcpSocketToHclTerraform(struct!.tcpSocket),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStartTcpSocket",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStart | cdktf.IResolvable | undefined {
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
    if (this._tcpSocket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSocket = this._tcpSocket?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStart | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exec.internalValue = undefined;
      this._httpGet.internalValue = undefined;
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
      this._tcpSocket.internalValue = value.tcpSocket;
    }
  }

  // exec - computed: false, optional: true, required: false
  private _exec = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStartExecOutputReference(this, "exec");
  public get exec() {
    return this._exec;
  }
  public putExec(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStartExec) {
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
  private _httpGet = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStartHttpGetOutputReference(this, "http_get");
  public get httpGet() {
    return this._httpGet;
  }
  public putHttpGet(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStartHttpGet) {
    this._httpGet.internalValue = value;
  }
  public resetHttpGet() {
    this._httpGet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetInput() {
    return this._httpGet.internalValue;
  }

  // tcp_socket - computed: false, optional: true, required: false
  private _tcpSocket = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStartTcpSocketOutputReference(this, "tcp_socket");
  public get tcpSocket() {
    return this._tcpSocket;
  }
  public putTcpSocket(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStartTcpSocket) {
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
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStopExec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#command DataK8SKubeviousIoWorkloadV1Alpha1Manifest#command}
  */
  readonly command?: string[];
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStopExecToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStopExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStopExecToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStopExec | cdktf.IResolvable): any {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStopExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStopExec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStopExec | cdktf.IResolvable | undefined) {
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
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStopHttpGetHttpHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#name DataK8SKubeviousIoWorkloadV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#value DataK8SKubeviousIoWorkloadV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStopHttpGetHttpHeadersToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStopHttpGetHttpHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStopHttpGetHttpHeadersToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStopHttpGetHttpHeaders | cdktf.IResolvable): any {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStopHttpGetHttpHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStopHttpGetHttpHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStopHttpGetHttpHeaders | cdktf.IResolvable | undefined) {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStopHttpGetHttpHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStopHttpGetHttpHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStopHttpGetHttpHeadersOutputReference {
    return new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStopHttpGetHttpHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStopHttpGet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#host DataK8SKubeviousIoWorkloadV1Alpha1Manifest#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#http_headers DataK8SKubeviousIoWorkloadV1Alpha1Manifest#http_headers}
  */
  readonly httpHeaders?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStopHttpGetHttpHeaders[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#path DataK8SKubeviousIoWorkloadV1Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#port DataK8SKubeviousIoWorkloadV1Alpha1Manifest#port}
  */
  readonly port: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#scheme DataK8SKubeviousIoWorkloadV1Alpha1Manifest#scheme}
  */
  readonly scheme?: string;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStopHttpGetToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStopHttpGet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    http_headers: cdktf.listMapper(dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStopHttpGetHttpHeadersToTerraform, false)(struct!.httpHeaders),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStopHttpGetToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStopHttpGet | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStopHttpGetHttpHeadersToHclTerraform, false)(struct!.httpHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStopHttpGetHttpHeadersList",
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStopHttpGetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStopHttpGet | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStopHttpGet | cdktf.IResolvable | undefined) {
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
  private _httpHeaders = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStopHttpGetHttpHeadersList(this, "http_headers", false);
  public get httpHeaders() {
    return this._httpHeaders;
  }
  public putHttpHeaders(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStopHttpGetHttpHeaders[] | cdktf.IResolvable) {
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
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStopTcpSocket {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#host DataK8SKubeviousIoWorkloadV1Alpha1Manifest#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#port DataK8SKubeviousIoWorkloadV1Alpha1Manifest#port}
  */
  readonly port: string;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStopTcpSocketToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStopTcpSocket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.stringToTerraform(struct!.port),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStopTcpSocketToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStopTcpSocket | cdktf.IResolvable): any {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStopTcpSocketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStopTcpSocket | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStopTcpSocket | cdktf.IResolvable | undefined) {
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
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStop {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#exec DataK8SKubeviousIoWorkloadV1Alpha1Manifest#exec}
  */
  readonly exec?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStopExec;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#http_get DataK8SKubeviousIoWorkloadV1Alpha1Manifest#http_get}
  */
  readonly httpGet?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStopHttpGet;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#tcp_socket DataK8SKubeviousIoWorkloadV1Alpha1Manifest#tcp_socket}
  */
  readonly tcpSocket?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStopTcpSocket;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStopToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStopExecToTerraform(struct!.exec),
    http_get: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStopHttpGetToTerraform(struct!.httpGet),
    tcp_socket: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStopTcpSocketToTerraform(struct!.tcpSocket),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStopToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exec: {
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStopExecToHclTerraform(struct!.exec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStopExec",
    },
    http_get: {
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStopHttpGetToHclTerraform(struct!.httpGet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStopHttpGet",
    },
    tcp_socket: {
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStopTcpSocketToHclTerraform(struct!.tcpSocket),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStopTcpSocket",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStop | cdktf.IResolvable | undefined {
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
    if (this._tcpSocket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSocket = this._tcpSocket?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStop | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exec.internalValue = undefined;
      this._httpGet.internalValue = undefined;
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
      this._tcpSocket.internalValue = value.tcpSocket;
    }
  }

  // exec - computed: false, optional: true, required: false
  private _exec = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStopExecOutputReference(this, "exec");
  public get exec() {
    return this._exec;
  }
  public putExec(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStopExec) {
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
  private _httpGet = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStopHttpGetOutputReference(this, "http_get");
  public get httpGet() {
    return this._httpGet;
  }
  public putHttpGet(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStopHttpGet) {
    this._httpGet.internalValue = value;
  }
  public resetHttpGet() {
    this._httpGet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetInput() {
    return this._httpGet.internalValue;
  }

  // tcp_socket - computed: false, optional: true, required: false
  private _tcpSocket = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStopTcpSocketOutputReference(this, "tcp_socket");
  public get tcpSocket() {
    return this._tcpSocket;
  }
  public putTcpSocket(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStopTcpSocket) {
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
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecycle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#post_start DataK8SKubeviousIoWorkloadV1Alpha1Manifest#post_start}
  */
  readonly postStart?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStart;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#pre_stop DataK8SKubeviousIoWorkloadV1Alpha1Manifest#pre_stop}
  */
  readonly preStop?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStop;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecycleToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecycle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    post_start: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStartToTerraform(struct!.postStart),
    pre_stop: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStopToTerraform(struct!.preStop),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecycleToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecycle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    post_start: {
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStartToHclTerraform(struct!.postStart),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStart",
    },
    pre_stop: {
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStopToHclTerraform(struct!.preStop),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStop",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecycleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecycle | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecycle | cdktf.IResolvable | undefined) {
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
  private _postStart = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStartOutputReference(this, "post_start");
  public get postStart() {
    return this._postStart;
  }
  public putPostStart(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePostStart) {
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
  private _preStop = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStopOutputReference(this, "pre_stop");
  public get preStop() {
    return this._preStop;
  }
  public putPreStop(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecyclePreStop) {
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
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeExec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#command DataK8SKubeviousIoWorkloadV1Alpha1Manifest#command}
  */
  readonly command?: string[];
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeExecToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeExecToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeExec | cdktf.IResolvable): any {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeExec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeExec | cdktf.IResolvable | undefined) {
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
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeGrpc {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#port DataK8SKubeviousIoWorkloadV1Alpha1Manifest#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#service DataK8SKubeviousIoWorkloadV1Alpha1Manifest#service}
  */
  readonly service?: string;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeGrpcToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeGrpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeGrpcToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeGrpc | cdktf.IResolvable): any {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeGrpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeGrpc | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeGrpc | cdktf.IResolvable | undefined) {
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
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeHttpGetHttpHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#name DataK8SKubeviousIoWorkloadV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#value DataK8SKubeviousIoWorkloadV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeHttpGetHttpHeadersToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeHttpGetHttpHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeHttpGetHttpHeadersToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeHttpGetHttpHeaders | cdktf.IResolvable): any {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeHttpGetHttpHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined) {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeHttpGetHttpHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeHttpGetHttpHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeHttpGetHttpHeadersOutputReference {
    return new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeHttpGetHttpHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeHttpGet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#host DataK8SKubeviousIoWorkloadV1Alpha1Manifest#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#http_headers DataK8SKubeviousIoWorkloadV1Alpha1Manifest#http_headers}
  */
  readonly httpHeaders?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeHttpGetHttpHeaders[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#path DataK8SKubeviousIoWorkloadV1Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#port DataK8SKubeviousIoWorkloadV1Alpha1Manifest#port}
  */
  readonly port: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#scheme DataK8SKubeviousIoWorkloadV1Alpha1Manifest#scheme}
  */
  readonly scheme?: string;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeHttpGetToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeHttpGet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    http_headers: cdktf.listMapper(dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeHttpGetHttpHeadersToTerraform, false)(struct!.httpHeaders),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeHttpGetToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeHttpGet | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeHttpGetHttpHeadersToHclTerraform, false)(struct!.httpHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeHttpGetHttpHeadersList",
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeHttpGetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeHttpGet | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeHttpGet | cdktf.IResolvable | undefined) {
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
  private _httpHeaders = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeHttpGetHttpHeadersList(this, "http_headers", false);
  public get httpHeaders() {
    return this._httpHeaders;
  }
  public putHttpHeaders(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeHttpGetHttpHeaders[] | cdktf.IResolvable) {
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
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeTcpSocket {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#host DataK8SKubeviousIoWorkloadV1Alpha1Manifest#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#port DataK8SKubeviousIoWorkloadV1Alpha1Manifest#port}
  */
  readonly port: string;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeTcpSocketToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeTcpSocket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.stringToTerraform(struct!.port),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeTcpSocketToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeTcpSocket | cdktf.IResolvable): any {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeTcpSocketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeTcpSocket | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeTcpSocket | cdktf.IResolvable | undefined) {
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
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbe {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#exec DataK8SKubeviousIoWorkloadV1Alpha1Manifest#exec}
  */
  readonly exec?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeExec;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#failure_threshold DataK8SKubeviousIoWorkloadV1Alpha1Manifest#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#grpc DataK8SKubeviousIoWorkloadV1Alpha1Manifest#grpc}
  */
  readonly grpc?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeGrpc;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#http_get DataK8SKubeviousIoWorkloadV1Alpha1Manifest#http_get}
  */
  readonly httpGet?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeHttpGet;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#initial_delay_seconds DataK8SKubeviousIoWorkloadV1Alpha1Manifest#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#period_seconds DataK8SKubeviousIoWorkloadV1Alpha1Manifest#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#success_threshold DataK8SKubeviousIoWorkloadV1Alpha1Manifest#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#tcp_socket DataK8SKubeviousIoWorkloadV1Alpha1Manifest#tcp_socket}
  */
  readonly tcpSocket?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeTcpSocket;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#termination_grace_period_seconds DataK8SKubeviousIoWorkloadV1Alpha1Manifest#termination_grace_period_seconds}
  */
  readonly terminationGracePeriodSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#timeout_seconds DataK8SKubeviousIoWorkloadV1Alpha1Manifest#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeExecToTerraform(struct!.exec),
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    grpc: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeGrpcToTerraform(struct!.grpc),
    http_get: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeHttpGetToTerraform(struct!.httpGet),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    tcp_socket: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeTcpSocketToTerraform(struct!.tcpSocket),
    termination_grace_period_seconds: cdktf.numberToTerraform(struct!.terminationGracePeriodSeconds),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exec: {
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeExecToHclTerraform(struct!.exec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeExec",
    },
    failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.failureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    grpc: {
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeGrpcToHclTerraform(struct!.grpc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeGrpc",
    },
    http_get: {
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeHttpGetToHclTerraform(struct!.httpGet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeHttpGet",
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
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeTcpSocketToHclTerraform(struct!.tcpSocket),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeTcpSocket",
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbe | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbe | cdktf.IResolvable | undefined) {
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
  private _exec = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeExecOutputReference(this, "exec");
  public get exec() {
    return this._exec;
  }
  public putExec(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeExec) {
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
  private _grpc = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeGrpcOutputReference(this, "grpc");
  public get grpc() {
    return this._grpc;
  }
  public putGrpc(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeGrpc) {
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
  private _httpGet = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeHttpGetOutputReference(this, "http_get");
  public get httpGet() {
    return this._httpGet;
  }
  public putHttpGet(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeHttpGet) {
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
  private _tcpSocket = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeTcpSocketOutputReference(this, "tcp_socket");
  public get tcpSocket() {
    return this._tcpSocket;
  }
  public putTcpSocket(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeTcpSocket) {
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
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#container_port DataK8SKubeviousIoWorkloadV1Alpha1Manifest#container_port}
  */
  readonly containerPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#host_ip DataK8SKubeviousIoWorkloadV1Alpha1Manifest#host_ip}
  */
  readonly hostIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#host_port DataK8SKubeviousIoWorkloadV1Alpha1Manifest#host_port}
  */
  readonly hostPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#name DataK8SKubeviousIoWorkloadV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#protocol DataK8SKubeviousIoWorkloadV1Alpha1Manifest#protocol}
  */
  readonly protocol?: string;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersPortsToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersPorts | cdktf.IResolvable): any {
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


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersPortsToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersPorts | cdktf.IResolvable): any {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersPorts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersPorts | cdktf.IResolvable | undefined) {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersPortsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersPorts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersPortsOutputReference {
    return new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeExec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#command DataK8SKubeviousIoWorkloadV1Alpha1Manifest#command}
  */
  readonly command?: string[];
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeExecToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeExecToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeExec | cdktf.IResolvable): any {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeExec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeExec | cdktf.IResolvable | undefined) {
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
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeGrpc {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#port DataK8SKubeviousIoWorkloadV1Alpha1Manifest#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#service DataK8SKubeviousIoWorkloadV1Alpha1Manifest#service}
  */
  readonly service?: string;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeGrpcToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeGrpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeGrpcToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeGrpc | cdktf.IResolvable): any {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeGrpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeGrpc | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeGrpc | cdktf.IResolvable | undefined) {
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
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeHttpGetHttpHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#name DataK8SKubeviousIoWorkloadV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#value DataK8SKubeviousIoWorkloadV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeHttpGetHttpHeadersToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeHttpGetHttpHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeHttpGetHttpHeadersToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeHttpGetHttpHeaders | cdktf.IResolvable): any {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeHttpGetHttpHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined) {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeHttpGetHttpHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeHttpGetHttpHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeHttpGetHttpHeadersOutputReference {
    return new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeHttpGetHttpHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeHttpGet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#host DataK8SKubeviousIoWorkloadV1Alpha1Manifest#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#http_headers DataK8SKubeviousIoWorkloadV1Alpha1Manifest#http_headers}
  */
  readonly httpHeaders?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeHttpGetHttpHeaders[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#path DataK8SKubeviousIoWorkloadV1Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#port DataK8SKubeviousIoWorkloadV1Alpha1Manifest#port}
  */
  readonly port: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#scheme DataK8SKubeviousIoWorkloadV1Alpha1Manifest#scheme}
  */
  readonly scheme?: string;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeHttpGetToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeHttpGet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    http_headers: cdktf.listMapper(dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeHttpGetHttpHeadersToTerraform, false)(struct!.httpHeaders),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeHttpGetToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeHttpGet | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeHttpGetHttpHeadersToHclTerraform, false)(struct!.httpHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeHttpGetHttpHeadersList",
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeHttpGetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeHttpGet | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeHttpGet | cdktf.IResolvable | undefined) {
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
  private _httpHeaders = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeHttpGetHttpHeadersList(this, "http_headers", false);
  public get httpHeaders() {
    return this._httpHeaders;
  }
  public putHttpHeaders(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeHttpGetHttpHeaders[] | cdktf.IResolvable) {
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
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeTcpSocket {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#host DataK8SKubeviousIoWorkloadV1Alpha1Manifest#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#port DataK8SKubeviousIoWorkloadV1Alpha1Manifest#port}
  */
  readonly port: string;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeTcpSocketToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeTcpSocket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.stringToTerraform(struct!.port),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeTcpSocketToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeTcpSocket | cdktf.IResolvable): any {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeTcpSocketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeTcpSocket | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeTcpSocket | cdktf.IResolvable | undefined) {
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
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbe {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#exec DataK8SKubeviousIoWorkloadV1Alpha1Manifest#exec}
  */
  readonly exec?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeExec;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#failure_threshold DataK8SKubeviousIoWorkloadV1Alpha1Manifest#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#grpc DataK8SKubeviousIoWorkloadV1Alpha1Manifest#grpc}
  */
  readonly grpc?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeGrpc;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#http_get DataK8SKubeviousIoWorkloadV1Alpha1Manifest#http_get}
  */
  readonly httpGet?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeHttpGet;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#initial_delay_seconds DataK8SKubeviousIoWorkloadV1Alpha1Manifest#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#period_seconds DataK8SKubeviousIoWorkloadV1Alpha1Manifest#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#success_threshold DataK8SKubeviousIoWorkloadV1Alpha1Manifest#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#tcp_socket DataK8SKubeviousIoWorkloadV1Alpha1Manifest#tcp_socket}
  */
  readonly tcpSocket?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeTcpSocket;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#termination_grace_period_seconds DataK8SKubeviousIoWorkloadV1Alpha1Manifest#termination_grace_period_seconds}
  */
  readonly terminationGracePeriodSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#timeout_seconds DataK8SKubeviousIoWorkloadV1Alpha1Manifest#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeExecToTerraform(struct!.exec),
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    grpc: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeGrpcToTerraform(struct!.grpc),
    http_get: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeHttpGetToTerraform(struct!.httpGet),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    tcp_socket: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeTcpSocketToTerraform(struct!.tcpSocket),
    termination_grace_period_seconds: cdktf.numberToTerraform(struct!.terminationGracePeriodSeconds),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exec: {
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeExecToHclTerraform(struct!.exec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeExec",
    },
    failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.failureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    grpc: {
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeGrpcToHclTerraform(struct!.grpc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeGrpc",
    },
    http_get: {
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeHttpGetToHclTerraform(struct!.httpGet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeHttpGet",
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
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeTcpSocketToHclTerraform(struct!.tcpSocket),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeTcpSocket",
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbe | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbe | cdktf.IResolvable | undefined) {
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
  private _exec = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeExecOutputReference(this, "exec");
  public get exec() {
    return this._exec;
  }
  public putExec(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeExec) {
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
  private _grpc = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeGrpcOutputReference(this, "grpc");
  public get grpc() {
    return this._grpc;
  }
  public putGrpc(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeGrpc) {
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
  private _httpGet = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeHttpGetOutputReference(this, "http_get");
  public get httpGet() {
    return this._httpGet;
  }
  public putHttpGet(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeHttpGet) {
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
  private _tcpSocket = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeTcpSocketOutputReference(this, "tcp_socket");
  public get tcpSocket() {
    return this._tcpSocket;
  }
  public putTcpSocket(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeTcpSocket) {
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
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#limits DataK8SKubeviousIoWorkloadV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#requests DataK8SKubeviousIoWorkloadV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersResourcesToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersResourcesToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._limits = value.limits;
      this._requests = value.requests;
    }
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
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContextCapabilities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#add DataK8SKubeviousIoWorkloadV1Alpha1Manifest#add}
  */
  readonly add?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#drop DataK8SKubeviousIoWorkloadV1Alpha1Manifest#drop}
  */
  readonly drop?: string[];
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContextCapabilitiesToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContextCapabilities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.add),
    drop: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.drop),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContextCapabilitiesToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContextCapabilities | cdktf.IResolvable): any {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContextCapabilitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContextCapabilities | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContextCapabilities | cdktf.IResolvable | undefined) {
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
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContextSeLinuxOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#level DataK8SKubeviousIoWorkloadV1Alpha1Manifest#level}
  */
  readonly level?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#role DataK8SKubeviousIoWorkloadV1Alpha1Manifest#role}
  */
  readonly role?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#type DataK8SKubeviousIoWorkloadV1Alpha1Manifest#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#user DataK8SKubeviousIoWorkloadV1Alpha1Manifest#user}
  */
  readonly user?: string;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContextSeLinuxOptionsToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContextSeLinuxOptions | cdktf.IResolvable): any {
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


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContextSeLinuxOptionsToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContextSeLinuxOptions | cdktf.IResolvable): any {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContextSeLinuxOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContextSeLinuxOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContextSeLinuxOptions | cdktf.IResolvable | undefined) {
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
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContextSeccompProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#localhost_profile DataK8SKubeviousIoWorkloadV1Alpha1Manifest#localhost_profile}
  */
  readonly localhostProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#type DataK8SKubeviousIoWorkloadV1Alpha1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContextSeccompProfileToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContextSeccompProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    localhost_profile: cdktf.stringToTerraform(struct!.localhostProfile),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContextSeccompProfileToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContextSeccompProfile | cdktf.IResolvable): any {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContextSeccompProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContextSeccompProfile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContextSeccompProfile | cdktf.IResolvable | undefined) {
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
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContextWindowsOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#gmsa_credential_spec DataK8SKubeviousIoWorkloadV1Alpha1Manifest#gmsa_credential_spec}
  */
  readonly gmsaCredentialSpec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#gmsa_credential_spec_name DataK8SKubeviousIoWorkloadV1Alpha1Manifest#gmsa_credential_spec_name}
  */
  readonly gmsaCredentialSpecName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#host_process DataK8SKubeviousIoWorkloadV1Alpha1Manifest#host_process}
  */
  readonly hostProcess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#run_as_user_name DataK8SKubeviousIoWorkloadV1Alpha1Manifest#run_as_user_name}
  */
  readonly runAsUserName?: string;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContextWindowsOptionsToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContextWindowsOptions | cdktf.IResolvable): any {
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


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContextWindowsOptionsToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContextWindowsOptions | cdktf.IResolvable): any {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContextWindowsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContextWindowsOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContextWindowsOptions | cdktf.IResolvable | undefined) {
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
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContext {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#allow_privilege_escalation DataK8SKubeviousIoWorkloadV1Alpha1Manifest#allow_privilege_escalation}
  */
  readonly allowPrivilegeEscalation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#capabilities DataK8SKubeviousIoWorkloadV1Alpha1Manifest#capabilities}
  */
  readonly capabilities?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContextCapabilities;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#privileged DataK8SKubeviousIoWorkloadV1Alpha1Manifest#privileged}
  */
  readonly privileged?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#proc_mount DataK8SKubeviousIoWorkloadV1Alpha1Manifest#proc_mount}
  */
  readonly procMount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#read_only_root_filesystem DataK8SKubeviousIoWorkloadV1Alpha1Manifest#read_only_root_filesystem}
  */
  readonly readOnlyRootFilesystem?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#run_as_group DataK8SKubeviousIoWorkloadV1Alpha1Manifest#run_as_group}
  */
  readonly runAsGroup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#run_as_non_root DataK8SKubeviousIoWorkloadV1Alpha1Manifest#run_as_non_root}
  */
  readonly runAsNonRoot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#run_as_user DataK8SKubeviousIoWorkloadV1Alpha1Manifest#run_as_user}
  */
  readonly runAsUser?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#se_linux_options DataK8SKubeviousIoWorkloadV1Alpha1Manifest#se_linux_options}
  */
  readonly seLinuxOptions?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContextSeLinuxOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#seccomp_profile DataK8SKubeviousIoWorkloadV1Alpha1Manifest#seccomp_profile}
  */
  readonly seccompProfile?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContextSeccompProfile;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#windows_options DataK8SKubeviousIoWorkloadV1Alpha1Manifest#windows_options}
  */
  readonly windowsOptions?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContextWindowsOptions;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContextToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_privilege_escalation: cdktf.booleanToTerraform(struct!.allowPrivilegeEscalation),
    capabilities: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContextCapabilitiesToTerraform(struct!.capabilities),
    privileged: cdktf.booleanToTerraform(struct!.privileged),
    proc_mount: cdktf.stringToTerraform(struct!.procMount),
    read_only_root_filesystem: cdktf.booleanToTerraform(struct!.readOnlyRootFilesystem),
    run_as_group: cdktf.numberToTerraform(struct!.runAsGroup),
    run_as_non_root: cdktf.booleanToTerraform(struct!.runAsNonRoot),
    run_as_user: cdktf.numberToTerraform(struct!.runAsUser),
    se_linux_options: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContextSeLinuxOptionsToTerraform(struct!.seLinuxOptions),
    seccomp_profile: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContextSeccompProfileToTerraform(struct!.seccompProfile),
    windows_options: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContextWindowsOptionsToTerraform(struct!.windowsOptions),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContextToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContext | cdktf.IResolvable): any {
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
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContextCapabilitiesToHclTerraform(struct!.capabilities),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContextCapabilities",
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
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContextSeLinuxOptionsToHclTerraform(struct!.seLinuxOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContextSeLinuxOptions",
    },
    seccomp_profile: {
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContextSeccompProfileToHclTerraform(struct!.seccompProfile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContextSeccompProfile",
    },
    windows_options: {
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContextWindowsOptionsToHclTerraform(struct!.windowsOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContextWindowsOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContext | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContext | cdktf.IResolvable | undefined) {
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
  private _capabilities = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContextCapabilitiesOutputReference(this, "capabilities");
  public get capabilities() {
    return this._capabilities;
  }
  public putCapabilities(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContextCapabilities) {
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
  private _seLinuxOptions = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContextSeLinuxOptionsOutputReference(this, "se_linux_options");
  public get seLinuxOptions() {
    return this._seLinuxOptions;
  }
  public putSeLinuxOptions(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContextSeLinuxOptions) {
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
  private _seccompProfile = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContextSeccompProfileOutputReference(this, "seccomp_profile");
  public get seccompProfile() {
    return this._seccompProfile;
  }
  public putSeccompProfile(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContextSeccompProfile) {
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
  private _windowsOptions = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContextWindowsOptionsOutputReference(this, "windows_options");
  public get windowsOptions() {
    return this._windowsOptions;
  }
  public putWindowsOptions(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContextWindowsOptions) {
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
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeExec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#command DataK8SKubeviousIoWorkloadV1Alpha1Manifest#command}
  */
  readonly command?: string[];
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeExecToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeExecToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeExec | cdktf.IResolvable): any {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeExec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeExec | cdktf.IResolvable | undefined) {
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
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeGrpc {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#port DataK8SKubeviousIoWorkloadV1Alpha1Manifest#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#service DataK8SKubeviousIoWorkloadV1Alpha1Manifest#service}
  */
  readonly service?: string;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeGrpcToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeGrpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeGrpcToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeGrpc | cdktf.IResolvable): any {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeGrpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeGrpc | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeGrpc | cdktf.IResolvable | undefined) {
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
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeHttpGetHttpHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#name DataK8SKubeviousIoWorkloadV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#value DataK8SKubeviousIoWorkloadV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeHttpGetHttpHeadersToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeHttpGetHttpHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeHttpGetHttpHeadersToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeHttpGetHttpHeaders | cdktf.IResolvable): any {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeHttpGetHttpHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined) {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeHttpGetHttpHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeHttpGetHttpHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeHttpGetHttpHeadersOutputReference {
    return new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeHttpGetHttpHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeHttpGet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#host DataK8SKubeviousIoWorkloadV1Alpha1Manifest#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#http_headers DataK8SKubeviousIoWorkloadV1Alpha1Manifest#http_headers}
  */
  readonly httpHeaders?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeHttpGetHttpHeaders[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#path DataK8SKubeviousIoWorkloadV1Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#port DataK8SKubeviousIoWorkloadV1Alpha1Manifest#port}
  */
  readonly port: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#scheme DataK8SKubeviousIoWorkloadV1Alpha1Manifest#scheme}
  */
  readonly scheme?: string;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeHttpGetToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeHttpGet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    http_headers: cdktf.listMapper(dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeHttpGetHttpHeadersToTerraform, false)(struct!.httpHeaders),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeHttpGetToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeHttpGet | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeHttpGetHttpHeadersToHclTerraform, false)(struct!.httpHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeHttpGetHttpHeadersList",
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeHttpGetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeHttpGet | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeHttpGet | cdktf.IResolvable | undefined) {
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
  private _httpHeaders = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeHttpGetHttpHeadersList(this, "http_headers", false);
  public get httpHeaders() {
    return this._httpHeaders;
  }
  public putHttpHeaders(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeHttpGetHttpHeaders[] | cdktf.IResolvable) {
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
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeTcpSocket {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#host DataK8SKubeviousIoWorkloadV1Alpha1Manifest#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#port DataK8SKubeviousIoWorkloadV1Alpha1Manifest#port}
  */
  readonly port: string;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeTcpSocketToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeTcpSocket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.stringToTerraform(struct!.port),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeTcpSocketToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeTcpSocket | cdktf.IResolvable): any {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeTcpSocketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeTcpSocket | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeTcpSocket | cdktf.IResolvable | undefined) {
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
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbe {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#exec DataK8SKubeviousIoWorkloadV1Alpha1Manifest#exec}
  */
  readonly exec?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeExec;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#failure_threshold DataK8SKubeviousIoWorkloadV1Alpha1Manifest#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#grpc DataK8SKubeviousIoWorkloadV1Alpha1Manifest#grpc}
  */
  readonly grpc?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeGrpc;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#http_get DataK8SKubeviousIoWorkloadV1Alpha1Manifest#http_get}
  */
  readonly httpGet?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeHttpGet;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#initial_delay_seconds DataK8SKubeviousIoWorkloadV1Alpha1Manifest#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#period_seconds DataK8SKubeviousIoWorkloadV1Alpha1Manifest#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#success_threshold DataK8SKubeviousIoWorkloadV1Alpha1Manifest#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#tcp_socket DataK8SKubeviousIoWorkloadV1Alpha1Manifest#tcp_socket}
  */
  readonly tcpSocket?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeTcpSocket;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#termination_grace_period_seconds DataK8SKubeviousIoWorkloadV1Alpha1Manifest#termination_grace_period_seconds}
  */
  readonly terminationGracePeriodSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#timeout_seconds DataK8SKubeviousIoWorkloadV1Alpha1Manifest#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeExecToTerraform(struct!.exec),
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    grpc: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeGrpcToTerraform(struct!.grpc),
    http_get: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeHttpGetToTerraform(struct!.httpGet),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    tcp_socket: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeTcpSocketToTerraform(struct!.tcpSocket),
    termination_grace_period_seconds: cdktf.numberToTerraform(struct!.terminationGracePeriodSeconds),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exec: {
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeExecToHclTerraform(struct!.exec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeExec",
    },
    failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.failureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    grpc: {
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeGrpcToHclTerraform(struct!.grpc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeGrpc",
    },
    http_get: {
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeHttpGetToHclTerraform(struct!.httpGet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeHttpGet",
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
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeTcpSocketToHclTerraform(struct!.tcpSocket),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeTcpSocket",
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbe | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbe | cdktf.IResolvable | undefined) {
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
  private _exec = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeExecOutputReference(this, "exec");
  public get exec() {
    return this._exec;
  }
  public putExec(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeExec) {
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
  private _grpc = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeGrpcOutputReference(this, "grpc");
  public get grpc() {
    return this._grpc;
  }
  public putGrpc(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeGrpc) {
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
  private _httpGet = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeHttpGetOutputReference(this, "http_get");
  public get httpGet() {
    return this._httpGet;
  }
  public putHttpGet(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeHttpGet) {
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
  private _tcpSocket = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeTcpSocketOutputReference(this, "tcp_socket");
  public get tcpSocket() {
    return this._tcpSocket;
  }
  public putTcpSocket(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeTcpSocket) {
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
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersVolumeDevices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#device_path DataK8SKubeviousIoWorkloadV1Alpha1Manifest#device_path}
  */
  readonly devicePath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#name DataK8SKubeviousIoWorkloadV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersVolumeDevicesToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersVolumeDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_path: cdktf.stringToTerraform(struct!.devicePath),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersVolumeDevicesToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersVolumeDevices | cdktf.IResolvable): any {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersVolumeDevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersVolumeDevices | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersVolumeDevices | cdktf.IResolvable | undefined) {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersVolumeDevicesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersVolumeDevices[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersVolumeDevicesOutputReference {
    return new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersVolumeDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersVolumeMounts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#mount_path DataK8SKubeviousIoWorkloadV1Alpha1Manifest#mount_path}
  */
  readonly mountPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#mount_propagation DataK8SKubeviousIoWorkloadV1Alpha1Manifest#mount_propagation}
  */
  readonly mountPropagation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#name DataK8SKubeviousIoWorkloadV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#read_only DataK8SKubeviousIoWorkloadV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#sub_path DataK8SKubeviousIoWorkloadV1Alpha1Manifest#sub_path}
  */
  readonly subPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#sub_path_expr DataK8SKubeviousIoWorkloadV1Alpha1Manifest#sub_path_expr}
  */
  readonly subPathExpr?: string;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersVolumeMountsToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersVolumeMounts | cdktf.IResolvable): any {
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


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersVolumeMountsToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersVolumeMounts | cdktf.IResolvable): any {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersVolumeMountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersVolumeMounts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersVolumeMounts | cdktf.IResolvable | undefined) {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersVolumeMountsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersVolumeMounts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersVolumeMountsOutputReference {
    return new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersVolumeMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#args DataK8SKubeviousIoWorkloadV1Alpha1Manifest#args}
  */
  readonly args?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#command DataK8SKubeviousIoWorkloadV1Alpha1Manifest#command}
  */
  readonly command?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#env DataK8SKubeviousIoWorkloadV1Alpha1Manifest#env}
  */
  readonly env?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnv[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#env_from DataK8SKubeviousIoWorkloadV1Alpha1Manifest#env_from}
  */
  readonly envFrom?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvFrom[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#image DataK8SKubeviousIoWorkloadV1Alpha1Manifest#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#image_pull_policy DataK8SKubeviousIoWorkloadV1Alpha1Manifest#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#lifecycle DataK8SKubeviousIoWorkloadV1Alpha1Manifest#lifecycle}
  */
  readonly lifecycle?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecycle;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#liveness_probe DataK8SKubeviousIoWorkloadV1Alpha1Manifest#liveness_probe}
  */
  readonly livenessProbe?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbe;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#name DataK8SKubeviousIoWorkloadV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#ports DataK8SKubeviousIoWorkloadV1Alpha1Manifest#ports}
  */
  readonly ports?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersPorts[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#readiness_probe DataK8SKubeviousIoWorkloadV1Alpha1Manifest#readiness_probe}
  */
  readonly readinessProbe?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbe;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#resources DataK8SKubeviousIoWorkloadV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersResources;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#security_context DataK8SKubeviousIoWorkloadV1Alpha1Manifest#security_context}
  */
  readonly securityContext?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContext;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#startup_probe DataK8SKubeviousIoWorkloadV1Alpha1Manifest#startup_probe}
  */
  readonly startupProbe?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbe;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#stdin DataK8SKubeviousIoWorkloadV1Alpha1Manifest#stdin}
  */
  readonly stdin?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#stdin_once DataK8SKubeviousIoWorkloadV1Alpha1Manifest#stdin_once}
  */
  readonly stdinOnce?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#termination_message_path DataK8SKubeviousIoWorkloadV1Alpha1Manifest#termination_message_path}
  */
  readonly terminationMessagePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#termination_message_policy DataK8SKubeviousIoWorkloadV1Alpha1Manifest#termination_message_policy}
  */
  readonly terminationMessagePolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#tty DataK8SKubeviousIoWorkloadV1Alpha1Manifest#tty}
  */
  readonly tty?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#volume_devices DataK8SKubeviousIoWorkloadV1Alpha1Manifest#volume_devices}
  */
  readonly volumeDevices?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersVolumeDevices[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#volume_mounts DataK8SKubeviousIoWorkloadV1Alpha1Manifest#volume_mounts}
  */
  readonly volumeMounts?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersVolumeMounts[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#working_dir DataK8SKubeviousIoWorkloadV1Alpha1Manifest#working_dir}
  */
  readonly workingDir?: string;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
    env: cdktf.listMapper(dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvToTerraform, false)(struct!.env),
    env_from: cdktf.listMapper(dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvFromToTerraform, false)(struct!.envFrom),
    image: cdktf.stringToTerraform(struct!.image),
    image_pull_policy: cdktf.stringToTerraform(struct!.imagePullPolicy),
    lifecycle: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecycleToTerraform(struct!.lifecycle),
    liveness_probe: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeToTerraform(struct!.livenessProbe),
    name: cdktf.stringToTerraform(struct!.name),
    ports: cdktf.listMapper(dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersPortsToTerraform, false)(struct!.ports),
    readiness_probe: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeToTerraform(struct!.readinessProbe),
    resources: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersResourcesToTerraform(struct!.resources),
    security_context: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContextToTerraform(struct!.securityContext),
    startup_probe: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeToTerraform(struct!.startupProbe),
    stdin: cdktf.booleanToTerraform(struct!.stdin),
    stdin_once: cdktf.booleanToTerraform(struct!.stdinOnce),
    termination_message_path: cdktf.stringToTerraform(struct!.terminationMessagePath),
    termination_message_policy: cdktf.stringToTerraform(struct!.terminationMessagePolicy),
    tty: cdktf.booleanToTerraform(struct!.tty),
    volume_devices: cdktf.listMapper(dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersVolumeDevicesToTerraform, false)(struct!.volumeDevices),
    volume_mounts: cdktf.listMapper(dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersVolumeMountsToTerraform, false)(struct!.volumeMounts),
    working_dir: cdktf.stringToTerraform(struct!.workingDir),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainers | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvToHclTerraform, false)(struct!.env),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvList",
    },
    env_from: {
      value: cdktf.listMapperHcl(dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvFromToHclTerraform, false)(struct!.envFrom),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvFromList",
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
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecycleToHclTerraform(struct!.lifecycle),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecycle",
    },
    liveness_probe: {
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeToHclTerraform(struct!.livenessProbe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbe",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ports: {
      value: cdktf.listMapperHcl(dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersPortsToHclTerraform, false)(struct!.ports),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersPortsList",
    },
    readiness_probe: {
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeToHclTerraform(struct!.readinessProbe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbe",
    },
    resources: {
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersResources",
    },
    security_context: {
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContextToHclTerraform(struct!.securityContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContext",
    },
    startup_probe: {
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeToHclTerraform(struct!.startupProbe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbe",
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
      value: cdktf.listMapperHcl(dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersVolumeDevicesToHclTerraform, false)(struct!.volumeDevices),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersVolumeDevicesList",
    },
    volume_mounts: {
      value: cdktf.listMapperHcl(dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersVolumeMountsToHclTerraform, false)(struct!.volumeMounts),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersVolumeMountsList",
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainers | cdktf.IResolvable | undefined {
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
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainers | cdktf.IResolvable | undefined) {
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
      this._resources.internalValue = undefined;
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
      this._resources.internalValue = value.resources;
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
  private _env = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnv[] | cdktf.IResolvable) {
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
  private _envFrom = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvFromList(this, "env_from", false);
  public get envFrom() {
    return this._envFrom;
  }
  public putEnvFrom(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersEnvFrom[] | cdktf.IResolvable) {
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
  private _lifecycle = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecycleOutputReference(this, "lifecycle");
  public get lifecycle() {
    return this._lifecycle;
  }
  public putLifecycle(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLifecycle) {
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
  private _livenessProbe = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeOutputReference(this, "liveness_probe");
  public get livenessProbe() {
    return this._livenessProbe;
  }
  public putLivenessProbe(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbe) {
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
  private _ports = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersPorts[] | cdktf.IResolvable) {
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
  private _readinessProbe = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeOutputReference(this, "readiness_probe");
  public get readinessProbe() {
    return this._readinessProbe;
  }
  public putReadinessProbe(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbe) {
    this._readinessProbe.internalValue = value;
  }
  public resetReadinessProbe() {
    this._readinessProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessProbeInput() {
    return this._readinessProbe.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersResources) {
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
  private _securityContext = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContext) {
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
  private _startupProbe = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeOutputReference(this, "startup_probe");
  public get startupProbe() {
    return this._startupProbe;
  }
  public putStartupProbe(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbe) {
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
  private _volumeDevices = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersVolumeDevicesList(this, "volume_devices", false);
  public get volumeDevices() {
    return this._volumeDevices;
  }
  public putVolumeDevices(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersVolumeDevices[] | cdktf.IResolvable) {
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
  private _volumeMounts = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersVolumeMountsList(this, "volume_mounts", false);
  public get volumeMounts() {
    return this._volumeMounts;
  }
  public putVolumeMounts(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersVolumeMounts[] | cdktf.IResolvable) {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersList extends cdktf.ComplexList {
  public internalValue? : DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersOutputReference {
    return new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecOs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#name DataK8SKubeviousIoWorkloadV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecOsToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecOs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecOsToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecOs | cdktf.IResolvable): any {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecOsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecOs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecOs | cdktf.IResolvable | undefined) {
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
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecReadinessGates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#condition_type DataK8SKubeviousIoWorkloadV1Alpha1Manifest#condition_type}
  */
  readonly conditionType: string;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecReadinessGatesToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecReadinessGates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition_type: cdktf.stringToTerraform(struct!.conditionType),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecReadinessGatesToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecReadinessGates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition_type: {
      value: cdktf.stringToHclTerraform(struct!.conditionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecReadinessGatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecReadinessGates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionType = this._conditionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecReadinessGates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditionType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditionType = value.conditionType;
    }
  }

  // condition_type - computed: false, optional: false, required: true
  private _conditionType?: string; 
  public get conditionType() {
    return this.getStringAttribute('condition_type');
  }
  public set conditionType(value: string) {
    this._conditionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionTypeInput() {
    return this._conditionType;
  }
}

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecReadinessGatesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecReadinessGates[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecReadinessGatesOutputReference {
    return new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecReadinessGatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContextSeLinuxOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#level DataK8SKubeviousIoWorkloadV1Alpha1Manifest#level}
  */
  readonly level?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#role DataK8SKubeviousIoWorkloadV1Alpha1Manifest#role}
  */
  readonly role?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#type DataK8SKubeviousIoWorkloadV1Alpha1Manifest#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#user DataK8SKubeviousIoWorkloadV1Alpha1Manifest#user}
  */
  readonly user?: string;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContextSeLinuxOptionsToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContextSeLinuxOptions | cdktf.IResolvable): any {
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


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContextSeLinuxOptionsToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContextSeLinuxOptions | cdktf.IResolvable): any {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContextSeLinuxOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContextSeLinuxOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContextSeLinuxOptions | cdktf.IResolvable | undefined) {
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
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContextSeccompProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#localhost_profile DataK8SKubeviousIoWorkloadV1Alpha1Manifest#localhost_profile}
  */
  readonly localhostProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#type DataK8SKubeviousIoWorkloadV1Alpha1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContextSeccompProfileToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContextSeccompProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    localhost_profile: cdktf.stringToTerraform(struct!.localhostProfile),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContextSeccompProfileToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContextSeccompProfile | cdktf.IResolvable): any {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContextSeccompProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContextSeccompProfile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContextSeccompProfile | cdktf.IResolvable | undefined) {
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
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContextSysctls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#name DataK8SKubeviousIoWorkloadV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#value DataK8SKubeviousIoWorkloadV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContextSysctlsToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContextSysctls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContextSysctlsToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContextSysctls | cdktf.IResolvable): any {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContextSysctlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContextSysctls | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContextSysctls | cdktf.IResolvable | undefined) {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContextSysctlsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContextSysctls[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContextSysctlsOutputReference {
    return new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContextSysctlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContextWindowsOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#gmsa_credential_spec DataK8SKubeviousIoWorkloadV1Alpha1Manifest#gmsa_credential_spec}
  */
  readonly gmsaCredentialSpec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#gmsa_credential_spec_name DataK8SKubeviousIoWorkloadV1Alpha1Manifest#gmsa_credential_spec_name}
  */
  readonly gmsaCredentialSpecName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#host_process DataK8SKubeviousIoWorkloadV1Alpha1Manifest#host_process}
  */
  readonly hostProcess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#run_as_user_name DataK8SKubeviousIoWorkloadV1Alpha1Manifest#run_as_user_name}
  */
  readonly runAsUserName?: string;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContextWindowsOptionsToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContextWindowsOptions | cdktf.IResolvable): any {
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


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContextWindowsOptionsToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContextWindowsOptions | cdktf.IResolvable): any {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContextWindowsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContextWindowsOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContextWindowsOptions | cdktf.IResolvable | undefined) {
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
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContext {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#fs_group DataK8SKubeviousIoWorkloadV1Alpha1Manifest#fs_group}
  */
  readonly fsGroup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#fs_group_change_policy DataK8SKubeviousIoWorkloadV1Alpha1Manifest#fs_group_change_policy}
  */
  readonly fsGroupChangePolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#run_as_group DataK8SKubeviousIoWorkloadV1Alpha1Manifest#run_as_group}
  */
  readonly runAsGroup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#run_as_non_root DataK8SKubeviousIoWorkloadV1Alpha1Manifest#run_as_non_root}
  */
  readonly runAsNonRoot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#run_as_user DataK8SKubeviousIoWorkloadV1Alpha1Manifest#run_as_user}
  */
  readonly runAsUser?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#se_linux_options DataK8SKubeviousIoWorkloadV1Alpha1Manifest#se_linux_options}
  */
  readonly seLinuxOptions?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContextSeLinuxOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#seccomp_profile DataK8SKubeviousIoWorkloadV1Alpha1Manifest#seccomp_profile}
  */
  readonly seccompProfile?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContextSeccompProfile;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#supplemental_groups DataK8SKubeviousIoWorkloadV1Alpha1Manifest#supplemental_groups}
  */
  readonly supplementalGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#sysctls DataK8SKubeviousIoWorkloadV1Alpha1Manifest#sysctls}
  */
  readonly sysctls?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContextSysctls[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#windows_options DataK8SKubeviousIoWorkloadV1Alpha1Manifest#windows_options}
  */
  readonly windowsOptions?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContextWindowsOptions;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContextToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContext | cdktf.IResolvable): any {
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
    se_linux_options: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContextSeLinuxOptionsToTerraform(struct!.seLinuxOptions),
    seccomp_profile: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContextSeccompProfileToTerraform(struct!.seccompProfile),
    supplemental_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.supplementalGroups),
    sysctls: cdktf.listMapper(dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContextSysctlsToTerraform, false)(struct!.sysctls),
    windows_options: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContextWindowsOptionsToTerraform(struct!.windowsOptions),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContextToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContext | cdktf.IResolvable): any {
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
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContextSeLinuxOptionsToHclTerraform(struct!.seLinuxOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContextSeLinuxOptions",
    },
    seccomp_profile: {
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContextSeccompProfileToHclTerraform(struct!.seccompProfile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContextSeccompProfile",
    },
    supplemental_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.supplementalGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sysctls: {
      value: cdktf.listMapperHcl(dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContextSysctlsToHclTerraform, false)(struct!.sysctls),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContextSysctlsList",
    },
    windows_options: {
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContextWindowsOptionsToHclTerraform(struct!.windowsOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContextWindowsOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContext | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContext | cdktf.IResolvable | undefined) {
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
  private _seLinuxOptions = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContextSeLinuxOptionsOutputReference(this, "se_linux_options");
  public get seLinuxOptions() {
    return this._seLinuxOptions;
  }
  public putSeLinuxOptions(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContextSeLinuxOptions) {
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
  private _seccompProfile = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContextSeccompProfileOutputReference(this, "seccomp_profile");
  public get seccompProfile() {
    return this._seccompProfile;
  }
  public putSeccompProfile(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContextSeccompProfile) {
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
  private _sysctls = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContextSysctlsList(this, "sysctls", false);
  public get sysctls() {
    return this._sysctls;
  }
  public putSysctls(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContextSysctls[] | cdktf.IResolvable) {
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
  private _windowsOptions = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContextWindowsOptionsOutputReference(this, "windows_options");
  public get windowsOptions() {
    return this._windowsOptions;
  }
  public putWindowsOptions(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContextWindowsOptions) {
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
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecTolerations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#effect DataK8SKubeviousIoWorkloadV1Alpha1Manifest#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#key DataK8SKubeviousIoWorkloadV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#operator DataK8SKubeviousIoWorkloadV1Alpha1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#toleration_seconds DataK8SKubeviousIoWorkloadV1Alpha1Manifest#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#value DataK8SKubeviousIoWorkloadV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecTolerationsToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecTolerations | cdktf.IResolvable): any {
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


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecTolerationsToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecTolerations | cdktf.IResolvable): any {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecTolerations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecTolerations | cdktf.IResolvable | undefined) {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecTolerationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecTolerations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecTolerationsOutputReference {
    return new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#key DataK8SKubeviousIoWorkloadV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#operator DataK8SKubeviousIoWorkloadV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#values DataK8SKubeviousIoWorkloadV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#match_expressions DataK8SKubeviousIoWorkloadV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#match_labels DataK8SKubeviousIoWorkloadV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsLabelSelectorToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsLabelSelectorToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsList",
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#label_selector DataK8SKubeviousIoWorkloadV1Alpha1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsLabelSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#max_skew DataK8SKubeviousIoWorkloadV1Alpha1Manifest#max_skew}
  */
  readonly maxSkew: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#min_domains DataK8SKubeviousIoWorkloadV1Alpha1Manifest#min_domains}
  */
  readonly minDomains?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#topology_key DataK8SKubeviousIoWorkloadV1Alpha1Manifest#topology_key}
  */
  readonly topologyKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#when_unsatisfiable DataK8SKubeviousIoWorkloadV1Alpha1Manifest#when_unsatisfiable}
  */
  readonly whenUnsatisfiable: string;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsLabelSelectorToTerraform(struct!.labelSelector),
    max_skew: cdktf.numberToTerraform(struct!.maxSkew),
    min_domains: cdktf.numberToTerraform(struct!.minDomains),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    when_unsatisfiable: cdktf.stringToTerraform(struct!.whenUnsatisfiable),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsLabelSelector",
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._maxSkew !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSkew = this._maxSkew;
    }
    if (this._minDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.minDomains = this._minDomains;
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._maxSkew = undefined;
      this._minDomains = undefined;
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
      this._maxSkew = value.maxSkew;
      this._minDomains = value.minDomains;
      this._topologyKey = value.topologyKey;
      this._whenUnsatisfiable = value.whenUnsatisfiable;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
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

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraints[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsOutputReference {
    return new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#active_deadline_seconds DataK8SKubeviousIoWorkloadV1Alpha1Manifest#active_deadline_seconds}
  */
  readonly activeDeadlineSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#affinity DataK8SKubeviousIoWorkloadV1Alpha1Manifest#affinity}
  */
  readonly affinity?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecAffinity;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#automount_service_account_token DataK8SKubeviousIoWorkloadV1Alpha1Manifest#automount_service_account_token}
  */
  readonly automountServiceAccountToken?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#containers DataK8SKubeviousIoWorkloadV1Alpha1Manifest#containers}
  */
  readonly containers: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecContainers[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#dns_config DataK8SKubeviousIoWorkloadV1Alpha1Manifest#dns_config}
  */
  readonly dnsConfig?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecDnsConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#dns_policy DataK8SKubeviousIoWorkloadV1Alpha1Manifest#dns_policy}
  */
  readonly dnsPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#enable_service_links DataK8SKubeviousIoWorkloadV1Alpha1Manifest#enable_service_links}
  */
  readonly enableServiceLinks?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#ephemeral_containers DataK8SKubeviousIoWorkloadV1Alpha1Manifest#ephemeral_containers}
  */
  readonly ephemeralContainers?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainers[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#host_aliases DataK8SKubeviousIoWorkloadV1Alpha1Manifest#host_aliases}
  */
  readonly hostAliases?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecHostAliases[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#host_ipc DataK8SKubeviousIoWorkloadV1Alpha1Manifest#host_ipc}
  */
  readonly hostIpc?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#host_network DataK8SKubeviousIoWorkloadV1Alpha1Manifest#host_network}
  */
  readonly hostNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#host_pid DataK8SKubeviousIoWorkloadV1Alpha1Manifest#host_pid}
  */
  readonly hostPid?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#hostname DataK8SKubeviousIoWorkloadV1Alpha1Manifest#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#image_pull_secrets DataK8SKubeviousIoWorkloadV1Alpha1Manifest#image_pull_secrets}
  */
  readonly imagePullSecrets?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecImagePullSecrets[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#init_containers DataK8SKubeviousIoWorkloadV1Alpha1Manifest#init_containers}
  */
  readonly initContainers?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainers[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#node_name DataK8SKubeviousIoWorkloadV1Alpha1Manifest#node_name}
  */
  readonly nodeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#node_selector DataK8SKubeviousIoWorkloadV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#os DataK8SKubeviousIoWorkloadV1Alpha1Manifest#os}
  */
  readonly os?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecOs;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#overhead DataK8SKubeviousIoWorkloadV1Alpha1Manifest#overhead}
  */
  readonly overhead?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#preemption_policy DataK8SKubeviousIoWorkloadV1Alpha1Manifest#preemption_policy}
  */
  readonly preemptionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#priority DataK8SKubeviousIoWorkloadV1Alpha1Manifest#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#priority_class_name DataK8SKubeviousIoWorkloadV1Alpha1Manifest#priority_class_name}
  */
  readonly priorityClassName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#readiness_gates DataK8SKubeviousIoWorkloadV1Alpha1Manifest#readiness_gates}
  */
  readonly readinessGates?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecReadinessGates[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#restart_policy DataK8SKubeviousIoWorkloadV1Alpha1Manifest#restart_policy}
  */
  readonly restartPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#runtime_class_name DataK8SKubeviousIoWorkloadV1Alpha1Manifest#runtime_class_name}
  */
  readonly runtimeClassName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#scheduler_name DataK8SKubeviousIoWorkloadV1Alpha1Manifest#scheduler_name}
  */
  readonly schedulerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#security_context DataK8SKubeviousIoWorkloadV1Alpha1Manifest#security_context}
  */
  readonly securityContext?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContext;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#service_account DataK8SKubeviousIoWorkloadV1Alpha1Manifest#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#service_account_name DataK8SKubeviousIoWorkloadV1Alpha1Manifest#service_account_name}
  */
  readonly serviceAccountName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#set_hostname_as_fqdn DataK8SKubeviousIoWorkloadV1Alpha1Manifest#set_hostname_as_fqdn}
  */
  readonly setHostnameAsFqdn?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#share_process_namespace DataK8SKubeviousIoWorkloadV1Alpha1Manifest#share_process_namespace}
  */
  readonly shareProcessNamespace?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#subdomain DataK8SKubeviousIoWorkloadV1Alpha1Manifest#subdomain}
  */
  readonly subdomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#termination_grace_period_seconds DataK8SKubeviousIoWorkloadV1Alpha1Manifest#termination_grace_period_seconds}
  */
  readonly terminationGracePeriodSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#tolerations DataK8SKubeviousIoWorkloadV1Alpha1Manifest#tolerations}
  */
  readonly tolerations?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecTolerations[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#topology_spread_constraints DataK8SKubeviousIoWorkloadV1Alpha1Manifest#topology_spread_constraints}
  */
  readonly topologySpreadConstraints?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraints[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#volumes DataK8SKubeviousIoWorkloadV1Alpha1Manifest#volumes}
  */
  readonly volumes?: string[];
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_deadline_seconds: cdktf.numberToTerraform(struct!.activeDeadlineSeconds),
    affinity: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecAffinityToTerraform(struct!.affinity),
    automount_service_account_token: cdktf.booleanToTerraform(struct!.automountServiceAccountToken),
    containers: cdktf.listMapper(dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecContainersToTerraform, false)(struct!.containers),
    dns_config: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecDnsConfigToTerraform(struct!.dnsConfig),
    dns_policy: cdktf.stringToTerraform(struct!.dnsPolicy),
    enable_service_links: cdktf.booleanToTerraform(struct!.enableServiceLinks),
    ephemeral_containers: cdktf.listMapper(dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersToTerraform, false)(struct!.ephemeralContainers),
    host_aliases: cdktf.listMapper(dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecHostAliasesToTerraform, false)(struct!.hostAliases),
    host_ipc: cdktf.booleanToTerraform(struct!.hostIpc),
    host_network: cdktf.booleanToTerraform(struct!.hostNetwork),
    host_pid: cdktf.booleanToTerraform(struct!.hostPid),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    image_pull_secrets: cdktf.listMapper(dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecImagePullSecretsToTerraform, false)(struct!.imagePullSecrets),
    init_containers: cdktf.listMapper(dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersToTerraform, false)(struct!.initContainers),
    node_name: cdktf.stringToTerraform(struct!.nodeName),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    os: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecOsToTerraform(struct!.os),
    overhead: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.overhead),
    preemption_policy: cdktf.stringToTerraform(struct!.preemptionPolicy),
    priority: cdktf.numberToTerraform(struct!.priority),
    priority_class_name: cdktf.stringToTerraform(struct!.priorityClassName),
    readiness_gates: cdktf.listMapper(dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecReadinessGatesToTerraform, false)(struct!.readinessGates),
    restart_policy: cdktf.stringToTerraform(struct!.restartPolicy),
    runtime_class_name: cdktf.stringToTerraform(struct!.runtimeClassName),
    scheduler_name: cdktf.stringToTerraform(struct!.schedulerName),
    security_context: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContextToTerraform(struct!.securityContext),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
    service_account_name: cdktf.stringToTerraform(struct!.serviceAccountName),
    set_hostname_as_fqdn: cdktf.booleanToTerraform(struct!.setHostnameAsFqdn),
    share_process_namespace: cdktf.booleanToTerraform(struct!.shareProcessNamespace),
    subdomain: cdktf.stringToTerraform(struct!.subdomain),
    termination_grace_period_seconds: cdktf.numberToTerraform(struct!.terminationGracePeriodSeconds),
    tolerations: cdktf.listMapper(dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecTolerationsToTerraform, false)(struct!.tolerations),
    topology_spread_constraints: cdktf.listMapper(dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsToTerraform, false)(struct!.topologySpreadConstraints),
    volumes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.volumes),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_deadline_seconds: {
      value: cdktf.numberToHclTerraform(struct!.activeDeadlineSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    affinity: {
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecAffinity",
    },
    automount_service_account_token: {
      value: cdktf.booleanToHclTerraform(struct!.automountServiceAccountToken),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    containers: {
      value: cdktf.listMapperHcl(dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecContainersToHclTerraform, false)(struct!.containers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecContainersList",
    },
    dns_config: {
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecDnsConfigToHclTerraform(struct!.dnsConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecDnsConfig",
    },
    dns_policy: {
      value: cdktf.stringToHclTerraform(struct!.dnsPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_service_links: {
      value: cdktf.booleanToHclTerraform(struct!.enableServiceLinks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ephemeral_containers: {
      value: cdktf.listMapperHcl(dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersToHclTerraform, false)(struct!.ephemeralContainers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersList",
    },
    host_aliases: {
      value: cdktf.listMapperHcl(dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecHostAliasesToHclTerraform, false)(struct!.hostAliases),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecHostAliasesList",
    },
    host_ipc: {
      value: cdktf.booleanToHclTerraform(struct!.hostIpc),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    host_network: {
      value: cdktf.booleanToHclTerraform(struct!.hostNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    host_pid: {
      value: cdktf.booleanToHclTerraform(struct!.hostPid),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_pull_secrets: {
      value: cdktf.listMapperHcl(dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecImagePullSecretsToHclTerraform, false)(struct!.imagePullSecrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecImagePullSecretsList",
    },
    init_containers: {
      value: cdktf.listMapperHcl(dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersToHclTerraform, false)(struct!.initContainers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersList",
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
    os: {
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecOsToHclTerraform(struct!.os),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecOs",
    },
    overhead: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.overhead),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    preemption_policy: {
      value: cdktf.stringToHclTerraform(struct!.preemptionPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
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
    readiness_gates: {
      value: cdktf.listMapperHcl(dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecReadinessGatesToHclTerraform, false)(struct!.readinessGates),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecReadinessGatesList",
    },
    restart_policy: {
      value: cdktf.stringToHclTerraform(struct!.restartPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runtime_class_name: {
      value: cdktf.stringToHclTerraform(struct!.runtimeClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheduler_name: {
      value: cdktf.stringToHclTerraform(struct!.schedulerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_context: {
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContextToHclTerraform(struct!.securityContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContext",
    },
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set_hostname_as_fqdn: {
      value: cdktf.booleanToHclTerraform(struct!.setHostnameAsFqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    share_process_namespace: {
      value: cdktf.booleanToHclTerraform(struct!.shareProcessNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    subdomain: {
      value: cdktf.stringToHclTerraform(struct!.subdomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    termination_grace_period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.terminationGracePeriodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecTolerationsList",
    },
    topology_spread_constraints: {
      value: cdktf.listMapperHcl(dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsToHclTerraform, false)(struct!.topologySpreadConstraints),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsList",
    },
    volumes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.volumes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeDeadlineSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeDeadlineSeconds = this._activeDeadlineSeconds;
    }
    if (this._affinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity?.internalValue;
    }
    if (this._automountServiceAccountToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.automountServiceAccountToken = this._automountServiceAccountToken;
    }
    if (this._containers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containers = this._containers?.internalValue;
    }
    if (this._dnsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsConfig = this._dnsConfig?.internalValue;
    }
    if (this._dnsPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsPolicy = this._dnsPolicy;
    }
    if (this._enableServiceLinks !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableServiceLinks = this._enableServiceLinks;
    }
    if (this._ephemeralContainers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ephemeralContainers = this._ephemeralContainers?.internalValue;
    }
    if (this._hostAliases?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostAliases = this._hostAliases?.internalValue;
    }
    if (this._hostIpc !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostIpc = this._hostIpc;
    }
    if (this._hostNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostNetwork = this._hostNetwork;
    }
    if (this._hostPid !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostPid = this._hostPid;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._imagePullSecrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullSecrets = this._imagePullSecrets?.internalValue;
    }
    if (this._initContainers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initContainers = this._initContainers?.internalValue;
    }
    if (this._nodeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeName = this._nodeName;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._os?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.os = this._os?.internalValue;
    }
    if (this._overhead !== undefined) {
      hasAnyValues = true;
      internalValueResult.overhead = this._overhead;
    }
    if (this._preemptionPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.preemptionPolicy = this._preemptionPolicy;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._priorityClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityClassName = this._priorityClassName;
    }
    if (this._readinessGates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readinessGates = this._readinessGates?.internalValue;
    }
    if (this._restartPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.restartPolicy = this._restartPolicy;
    }
    if (this._runtimeClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeClassName = this._runtimeClassName;
    }
    if (this._schedulerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulerName = this._schedulerName;
    }
    if (this._securityContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityContext = this._securityContext?.internalValue;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    if (this._serviceAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountName = this._serviceAccountName;
    }
    if (this._setHostnameAsFqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.setHostnameAsFqdn = this._setHostnameAsFqdn;
    }
    if (this._shareProcessNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareProcessNamespace = this._shareProcessNamespace;
    }
    if (this._subdomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.subdomain = this._subdomain;
    }
    if (this._terminationGracePeriodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminationGracePeriodSeconds = this._terminationGracePeriodSeconds;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    if (this._topologySpreadConstraints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologySpreadConstraints = this._topologySpreadConstraints?.internalValue;
    }
    if (this._volumes !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activeDeadlineSeconds = undefined;
      this._affinity.internalValue = undefined;
      this._automountServiceAccountToken = undefined;
      this._containers.internalValue = undefined;
      this._dnsConfig.internalValue = undefined;
      this._dnsPolicy = undefined;
      this._enableServiceLinks = undefined;
      this._ephemeralContainers.internalValue = undefined;
      this._hostAliases.internalValue = undefined;
      this._hostIpc = undefined;
      this._hostNetwork = undefined;
      this._hostPid = undefined;
      this._hostname = undefined;
      this._imagePullSecrets.internalValue = undefined;
      this._initContainers.internalValue = undefined;
      this._nodeName = undefined;
      this._nodeSelector = undefined;
      this._os.internalValue = undefined;
      this._overhead = undefined;
      this._preemptionPolicy = undefined;
      this._priority = undefined;
      this._priorityClassName = undefined;
      this._readinessGates.internalValue = undefined;
      this._restartPolicy = undefined;
      this._runtimeClassName = undefined;
      this._schedulerName = undefined;
      this._securityContext.internalValue = undefined;
      this._serviceAccount = undefined;
      this._serviceAccountName = undefined;
      this._setHostnameAsFqdn = undefined;
      this._shareProcessNamespace = undefined;
      this._subdomain = undefined;
      this._terminationGracePeriodSeconds = undefined;
      this._tolerations.internalValue = undefined;
      this._topologySpreadConstraints.internalValue = undefined;
      this._volumes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activeDeadlineSeconds = value.activeDeadlineSeconds;
      this._affinity.internalValue = value.affinity;
      this._automountServiceAccountToken = value.automountServiceAccountToken;
      this._containers.internalValue = value.containers;
      this._dnsConfig.internalValue = value.dnsConfig;
      this._dnsPolicy = value.dnsPolicy;
      this._enableServiceLinks = value.enableServiceLinks;
      this._ephemeralContainers.internalValue = value.ephemeralContainers;
      this._hostAliases.internalValue = value.hostAliases;
      this._hostIpc = value.hostIpc;
      this._hostNetwork = value.hostNetwork;
      this._hostPid = value.hostPid;
      this._hostname = value.hostname;
      this._imagePullSecrets.internalValue = value.imagePullSecrets;
      this._initContainers.internalValue = value.initContainers;
      this._nodeName = value.nodeName;
      this._nodeSelector = value.nodeSelector;
      this._os.internalValue = value.os;
      this._overhead = value.overhead;
      this._preemptionPolicy = value.preemptionPolicy;
      this._priority = value.priority;
      this._priorityClassName = value.priorityClassName;
      this._readinessGates.internalValue = value.readinessGates;
      this._restartPolicy = value.restartPolicy;
      this._runtimeClassName = value.runtimeClassName;
      this._schedulerName = value.schedulerName;
      this._securityContext.internalValue = value.securityContext;
      this._serviceAccount = value.serviceAccount;
      this._serviceAccountName = value.serviceAccountName;
      this._setHostnameAsFqdn = value.setHostnameAsFqdn;
      this._shareProcessNamespace = value.shareProcessNamespace;
      this._subdomain = value.subdomain;
      this._terminationGracePeriodSeconds = value.terminationGracePeriodSeconds;
      this._tolerations.internalValue = value.tolerations;
      this._topologySpreadConstraints.internalValue = value.topologySpreadConstraints;
      this._volumes = value.volumes;
    }
  }

  // active_deadline_seconds - computed: false, optional: true, required: false
  private _activeDeadlineSeconds?: number; 
  public get activeDeadlineSeconds() {
    return this.getNumberAttribute('active_deadline_seconds');
  }
  public set activeDeadlineSeconds(value: number) {
    this._activeDeadlineSeconds = value;
  }
  public resetActiveDeadlineSeconds() {
    this._activeDeadlineSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDeadlineSecondsInput() {
    return this._activeDeadlineSeconds;
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecAffinity) {
    this._affinity.internalValue = value;
  }
  public resetAffinity() {
    this._affinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity.internalValue;
  }

  // automount_service_account_token - computed: false, optional: true, required: false
  private _automountServiceAccountToken?: boolean | cdktf.IResolvable; 
  public get automountServiceAccountToken() {
    return this.getBooleanAttribute('automount_service_account_token');
  }
  public set automountServiceAccountToken(value: boolean | cdktf.IResolvable) {
    this._automountServiceAccountToken = value;
  }
  public resetAutomountServiceAccountToken() {
    this._automountServiceAccountToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automountServiceAccountTokenInput() {
    return this._automountServiceAccountToken;
  }

  // containers - computed: false, optional: false, required: true
  private _containers = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecContainersList(this, "containers", false);
  public get containers() {
    return this._containers;
  }
  public putContainers(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecContainers[] | cdktf.IResolvable) {
    this._containers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containersInput() {
    return this._containers.internalValue;
  }

  // dns_config - computed: false, optional: true, required: false
  private _dnsConfig = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecDnsConfigOutputReference(this, "dns_config");
  public get dnsConfig() {
    return this._dnsConfig;
  }
  public putDnsConfig(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecDnsConfig) {
    this._dnsConfig.internalValue = value;
  }
  public resetDnsConfig() {
    this._dnsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsConfigInput() {
    return this._dnsConfig.internalValue;
  }

  // dns_policy - computed: false, optional: true, required: false
  private _dnsPolicy?: string; 
  public get dnsPolicy() {
    return this.getStringAttribute('dns_policy');
  }
  public set dnsPolicy(value: string) {
    this._dnsPolicy = value;
  }
  public resetDnsPolicy() {
    this._dnsPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsPolicyInput() {
    return this._dnsPolicy;
  }

  // enable_service_links - computed: false, optional: true, required: false
  private _enableServiceLinks?: boolean | cdktf.IResolvable; 
  public get enableServiceLinks() {
    return this.getBooleanAttribute('enable_service_links');
  }
  public set enableServiceLinks(value: boolean | cdktf.IResolvable) {
    this._enableServiceLinks = value;
  }
  public resetEnableServiceLinks() {
    this._enableServiceLinks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableServiceLinksInput() {
    return this._enableServiceLinks;
  }

  // ephemeral_containers - computed: false, optional: true, required: false
  private _ephemeralContainers = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainersList(this, "ephemeral_containers", false);
  public get ephemeralContainers() {
    return this._ephemeralContainers;
  }
  public putEphemeralContainers(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecEphemeralContainers[] | cdktf.IResolvable) {
    this._ephemeralContainers.internalValue = value;
  }
  public resetEphemeralContainers() {
    this._ephemeralContainers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralContainersInput() {
    return this._ephemeralContainers.internalValue;
  }

  // host_aliases - computed: false, optional: true, required: false
  private _hostAliases = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecHostAliasesList(this, "host_aliases", false);
  public get hostAliases() {
    return this._hostAliases;
  }
  public putHostAliases(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecHostAliases[] | cdktf.IResolvable) {
    this._hostAliases.internalValue = value;
  }
  public resetHostAliases() {
    this._hostAliases.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostAliasesInput() {
    return this._hostAliases.internalValue;
  }

  // host_ipc - computed: false, optional: true, required: false
  private _hostIpc?: boolean | cdktf.IResolvable; 
  public get hostIpc() {
    return this.getBooleanAttribute('host_ipc');
  }
  public set hostIpc(value: boolean | cdktf.IResolvable) {
    this._hostIpc = value;
  }
  public resetHostIpc() {
    this._hostIpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIpcInput() {
    return this._hostIpc;
  }

  // host_network - computed: false, optional: true, required: false
  private _hostNetwork?: boolean | cdktf.IResolvable; 
  public get hostNetwork() {
    return this.getBooleanAttribute('host_network');
  }
  public set hostNetwork(value: boolean | cdktf.IResolvable) {
    this._hostNetwork = value;
  }
  public resetHostNetwork() {
    this._hostNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNetworkInput() {
    return this._hostNetwork;
  }

  // host_pid - computed: false, optional: true, required: false
  private _hostPid?: boolean | cdktf.IResolvable; 
  public get hostPid() {
    return this.getBooleanAttribute('host_pid');
  }
  public set hostPid(value: boolean | cdktf.IResolvable) {
    this._hostPid = value;
  }
  public resetHostPid() {
    this._hostPid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPidInput() {
    return this._hostPid;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // image_pull_secrets - computed: false, optional: true, required: false
  private _imagePullSecrets = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecImagePullSecretsList(this, "image_pull_secrets", false);
  public get imagePullSecrets() {
    return this._imagePullSecrets;
  }
  public putImagePullSecrets(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecImagePullSecrets[] | cdktf.IResolvable) {
    this._imagePullSecrets.internalValue = value;
  }
  public resetImagePullSecrets() {
    this._imagePullSecrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullSecretsInput() {
    return this._imagePullSecrets.internalValue;
  }

  // init_containers - computed: false, optional: true, required: false
  private _initContainers = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainersList(this, "init_containers", false);
  public get initContainers() {
    return this._initContainers;
  }
  public putInitContainers(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecInitContainers[] | cdktf.IResolvable) {
    this._initContainers.internalValue = value;
  }
  public resetInitContainers() {
    this._initContainers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initContainersInput() {
    return this._initContainers.internalValue;
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

  // os - computed: false, optional: true, required: false
  private _os = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecOsOutputReference(this, "os");
  public get os() {
    return this._os;
  }
  public putOs(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecOs) {
    this._os.internalValue = value;
  }
  public resetOs() {
    this._os.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osInput() {
    return this._os.internalValue;
  }

  // overhead - computed: false, optional: true, required: false
  private _overhead?: { [key: string]: string }; 
  public get overhead() {
    return this.getStringMapAttribute('overhead');
  }
  public set overhead(value: { [key: string]: string }) {
    this._overhead = value;
  }
  public resetOverhead() {
    this._overhead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overheadInput() {
    return this._overhead;
  }

  // preemption_policy - computed: false, optional: true, required: false
  private _preemptionPolicy?: string; 
  public get preemptionPolicy() {
    return this.getStringAttribute('preemption_policy');
  }
  public set preemptionPolicy(value: string) {
    this._preemptionPolicy = value;
  }
  public resetPreemptionPolicy() {
    this._preemptionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptionPolicyInput() {
    return this._preemptionPolicy;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
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

  // readiness_gates - computed: false, optional: true, required: false
  private _readinessGates = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecReadinessGatesList(this, "readiness_gates", false);
  public get readinessGates() {
    return this._readinessGates;
  }
  public putReadinessGates(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecReadinessGates[] | cdktf.IResolvable) {
    this._readinessGates.internalValue = value;
  }
  public resetReadinessGates() {
    this._readinessGates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessGatesInput() {
    return this._readinessGates.internalValue;
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

  // runtime_class_name - computed: false, optional: true, required: false
  private _runtimeClassName?: string; 
  public get runtimeClassName() {
    return this.getStringAttribute('runtime_class_name');
  }
  public set runtimeClassName(value: string) {
    this._runtimeClassName = value;
  }
  public resetRuntimeClassName() {
    this._runtimeClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeClassNameInput() {
    return this._runtimeClassName;
  }

  // scheduler_name - computed: false, optional: true, required: false
  private _schedulerName?: string; 
  public get schedulerName() {
    return this.getStringAttribute('scheduler_name');
  }
  public set schedulerName(value: string) {
    this._schedulerName = value;
  }
  public resetSchedulerName() {
    this._schedulerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulerNameInput() {
    return this._schedulerName;
  }

  // security_context - computed: false, optional: true, required: false
  private _securityContext = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecSecurityContext) {
    this._securityContext.internalValue = value;
  }
  public resetSecurityContext() {
    this._securityContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityContextInput() {
    return this._securityContext.internalValue;
  }

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
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

  // set_hostname_as_fqdn - computed: false, optional: true, required: false
  private _setHostnameAsFqdn?: boolean | cdktf.IResolvable; 
  public get setHostnameAsFqdn() {
    return this.getBooleanAttribute('set_hostname_as_fqdn');
  }
  public set setHostnameAsFqdn(value: boolean | cdktf.IResolvable) {
    this._setHostnameAsFqdn = value;
  }
  public resetSetHostnameAsFqdn() {
    this._setHostnameAsFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setHostnameAsFqdnInput() {
    return this._setHostnameAsFqdn;
  }

  // share_process_namespace - computed: false, optional: true, required: false
  private _shareProcessNamespace?: boolean | cdktf.IResolvable; 
  public get shareProcessNamespace() {
    return this.getBooleanAttribute('share_process_namespace');
  }
  public set shareProcessNamespace(value: boolean | cdktf.IResolvable) {
    this._shareProcessNamespace = value;
  }
  public resetShareProcessNamespace() {
    this._shareProcessNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareProcessNamespaceInput() {
    return this._shareProcessNamespace;
  }

  // subdomain - computed: false, optional: true, required: false
  private _subdomain?: string; 
  public get subdomain() {
    return this.getStringAttribute('subdomain');
  }
  public set subdomain(value: string) {
    this._subdomain = value;
  }
  public resetSubdomain() {
    this._subdomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subdomainInput() {
    return this._subdomain;
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

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecTolerations[] | cdktf.IResolvable) {
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
  private _topologySpreadConstraints = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsList(this, "topology_spread_constraints", false);
  public get topologySpreadConstraints() {
    return this._topologySpreadConstraints;
  }
  public putTopologySpreadConstraints(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraints[] | cdktf.IResolvable) {
    this._topologySpreadConstraints.internalValue = value;
  }
  public resetTopologySpreadConstraints() {
    this._topologySpreadConstraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologySpreadConstraintsInput() {
    return this._topologySpreadConstraints.internalValue;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes?: string[]; 
  public get volumes() {
    return this.getListAttribute('volumes');
  }
  public set volumes(value: string[]) {
    this._volumes = value;
  }
  public resetVolumes() {
    this._volumes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes;
  }
}
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#metadata DataK8SKubeviousIoWorkloadV1Alpha1Manifest#metadata}
  */
  readonly metadata?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#spec DataK8SKubeviousIoWorkloadV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpec;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateMetadataToTerraform(struct!.metadata),
    spec: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecToTerraform(struct!.spec),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateMetadata",
    },
    spec: {
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplate | cdktf.IResolvable | undefined) {
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
  private _metadata = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateMetadata) {
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
  private _spec = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateSpec) {
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
export interface DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#min_ready_seconds DataK8SKubeviousIoWorkloadV1Alpha1Manifest#min_ready_seconds}
  */
  readonly minReadySeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#paused DataK8SKubeviousIoWorkloadV1Alpha1Manifest#paused}
  */
  readonly paused?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#progress_deadline_seconds DataK8SKubeviousIoWorkloadV1Alpha1Manifest#progress_deadline_seconds}
  */
  readonly progressDeadlineSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#replicas DataK8SKubeviousIoWorkloadV1Alpha1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#revision_history_limit DataK8SKubeviousIoWorkloadV1Alpha1Manifest#revision_history_limit}
  */
  readonly revisionHistoryLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#schedule DataK8SKubeviousIoWorkloadV1Alpha1Manifest#schedule}
  */
  readonly schedule?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecSchedule[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#selector DataK8SKubeviousIoWorkloadV1Alpha1Manifest#selector}
  */
  readonly selector?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#strategy DataK8SKubeviousIoWorkloadV1Alpha1Manifest#strategy}
  */
  readonly strategy?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecStrategy;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kubevious_io_workload_v1alpha1_manifest#template DataK8SKubeviousIoWorkloadV1Alpha1Manifest#template}
  */
  readonly template?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplate;
}

export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecToTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    min_ready_seconds: cdktf.numberToTerraform(struct!.minReadySeconds),
    paused: cdktf.booleanToTerraform(struct!.paused),
    progress_deadline_seconds: cdktf.numberToTerraform(struct!.progressDeadlineSeconds),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    revision_history_limit: cdktf.numberToTerraform(struct!.revisionHistoryLimit),
    schedule: cdktf.listMapper(dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecScheduleToTerraform, false)(struct!.schedule),
    selector: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecSelectorToTerraform(struct!.selector),
    strategy: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecStrategyToTerraform(struct!.strategy),
    template: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateToTerraform(struct!.template),
  }
}


export function dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    min_ready_seconds: {
      value: cdktf.numberToHclTerraform(struct!.minReadySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    paused: {
      value: cdktf.booleanToHclTerraform(struct!.paused),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    progress_deadline_seconds: {
      value: cdktf.numberToHclTerraform(struct!.progressDeadlineSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    revision_history_limit: {
      value: cdktf.numberToHclTerraform(struct!.revisionHistoryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    schedule: {
      value: cdktf.listMapperHcl(dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecScheduleToHclTerraform, false)(struct!.schedule),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecScheduleList",
    },
    selector: {
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecSelector",
    },
    strategy: {
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecStrategyToHclTerraform(struct!.strategy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecStrategy",
    },
    template: {
      value: dataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minReadySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.minReadySeconds = this._minReadySeconds;
    }
    if (this._paused !== undefined) {
      hasAnyValues = true;
      internalValueResult.paused = this._paused;
    }
    if (this._progressDeadlineSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.progressDeadlineSeconds = this._progressDeadlineSeconds;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._revisionHistoryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.revisionHistoryLimit = this._revisionHistoryLimit;
    }
    if (this._schedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule?.internalValue;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    if (this._strategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy?.internalValue;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._minReadySeconds = undefined;
      this._paused = undefined;
      this._progressDeadlineSeconds = undefined;
      this._replicas = undefined;
      this._revisionHistoryLimit = undefined;
      this._schedule.internalValue = undefined;
      this._selector.internalValue = undefined;
      this._strategy.internalValue = undefined;
      this._template.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._minReadySeconds = value.minReadySeconds;
      this._paused = value.paused;
      this._progressDeadlineSeconds = value.progressDeadlineSeconds;
      this._replicas = value.replicas;
      this._revisionHistoryLimit = value.revisionHistoryLimit;
      this._schedule.internalValue = value.schedule;
      this._selector.internalValue = value.selector;
      this._strategy.internalValue = value.strategy;
      this._template.internalValue = value.template;
    }
  }

  // min_ready_seconds - computed: false, optional: true, required: false
  private _minReadySeconds?: number; 
  public get minReadySeconds() {
    return this.getNumberAttribute('min_ready_seconds');
  }
  public set minReadySeconds(value: number) {
    this._minReadySeconds = value;
  }
  public resetMinReadySeconds() {
    this._minReadySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minReadySecondsInput() {
    return this._minReadySeconds;
  }

  // paused - computed: false, optional: true, required: false
  private _paused?: boolean | cdktf.IResolvable; 
  public get paused() {
    return this.getBooleanAttribute('paused');
  }
  public set paused(value: boolean | cdktf.IResolvable) {
    this._paused = value;
  }
  public resetPaused() {
    this._paused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pausedInput() {
    return this._paused;
  }

  // progress_deadline_seconds - computed: false, optional: true, required: false
  private _progressDeadlineSeconds?: number; 
  public get progressDeadlineSeconds() {
    return this.getNumberAttribute('progress_deadline_seconds');
  }
  public set progressDeadlineSeconds(value: number) {
    this._progressDeadlineSeconds = value;
  }
  public resetProgressDeadlineSeconds() {
    this._progressDeadlineSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progressDeadlineSecondsInput() {
    return this._progressDeadlineSeconds;
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

  // schedule - computed: false, optional: true, required: false
  private _schedule = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecScheduleList(this, "schedule", false);
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecSchedule[] | cdktf.IResolvable) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }

  // strategy - computed: false, optional: true, required: false
  private _strategy = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecStrategyOutputReference(this, "strategy");
  public get strategy() {
    return this._strategy;
  }
  public putStrategy(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecStrategy) {
    this._strategy.internalValue = value;
  }
  public resetStrategy() {
    this._strategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataK8SKubeviousIoWorkloadV1Alpha1ManifestSpecTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }
}
