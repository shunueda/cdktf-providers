// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_workload_group_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SNetworkingIstioIoWorkloadGroupV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_workload_group_v1_manifest#metadata DataK8SNetworkingIstioIoWorkloadGroupV1Manifest#metadata}
  */
  readonly metadata: DataK8SNetworkingIstioIoWorkloadGroupV1ManifestMetadata;
  /**
  * Describes a collection of workload instances. See more details at: https://istio.io/docs/reference/config/networking/workload-group.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_workload_group_v1_manifest#spec DataK8SNetworkingIstioIoWorkloadGroupV1Manifest#spec}
  */
  readonly spec?: DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpec;
}
export interface DataK8SNetworkingIstioIoWorkloadGroupV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_workload_group_v1_manifest#annotations DataK8SNetworkingIstioIoWorkloadGroupV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_workload_group_v1_manifest#labels DataK8SNetworkingIstioIoWorkloadGroupV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_workload_group_v1_manifest#name DataK8SNetworkingIstioIoWorkloadGroupV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_workload_group_v1_manifest#namespace DataK8SNetworkingIstioIoWorkloadGroupV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SNetworkingIstioIoWorkloadGroupV1ManifestMetadataToTerraform(struct?: DataK8SNetworkingIstioIoWorkloadGroupV1ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SNetworkingIstioIoWorkloadGroupV1ManifestMetadataToHclTerraform(struct?: DataK8SNetworkingIstioIoWorkloadGroupV1ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoWorkloadGroupV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoWorkloadGroupV1ManifestMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoWorkloadGroupV1ManifestMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._labels = value.labels;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

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
}
export interface DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_workload_group_v1_manifest#annotations DataK8SNetworkingIstioIoWorkloadGroupV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_workload_group_v1_manifest#labels DataK8SNetworkingIstioIoWorkloadGroupV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecMetadataToTerraform(struct?: DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecMetadataToHclTerraform(struct?: DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._labels = value.labels;
    }
  }

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
}
export interface DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbeExec {
  /**
  * Command to run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_workload_group_v1_manifest#command DataK8SNetworkingIstioIoWorkloadGroupV1Manifest#command}
  */
  readonly command?: string[];
}

export function dataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbeExecToTerraform(struct?: DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbeExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
  }
}


export function dataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbeExecToHclTerraform(struct?: DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbeExec | cdktf.IResolvable): any {
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

export class DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbeExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbeExec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbeExec | cdktf.IResolvable | undefined) {
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
export interface DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbeHttpGetHttpHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_workload_group_v1_manifest#name DataK8SNetworkingIstioIoWorkloadGroupV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_workload_group_v1_manifest#value DataK8SNetworkingIstioIoWorkloadGroupV1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbeHttpGetHttpHeadersToTerraform(struct?: DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbeHttpGetHttpHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbeHttpGetHttpHeadersToHclTerraform(struct?: DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbeHttpGetHttpHeaders | cdktf.IResolvable): any {
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

export class DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbeHttpGetHttpHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined) {
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

export class DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbeHttpGetHttpHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbeHttpGetHttpHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbeHttpGetHttpHeadersOutputReference {
    return new DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbeHttpGetHttpHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbeHttpGet {
  /**
  * Host name to connect to, defaults to the pod IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_workload_group_v1_manifest#host DataK8SNetworkingIstioIoWorkloadGroupV1Manifest#host}
  */
  readonly host?: string;
  /**
  * Headers the proxy will pass on to make the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_workload_group_v1_manifest#http_headers DataK8SNetworkingIstioIoWorkloadGroupV1Manifest#http_headers}
  */
  readonly httpHeaders?: DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbeHttpGetHttpHeaders[] | cdktf.IResolvable;
  /**
  * Path to access on the HTTP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_workload_group_v1_manifest#path DataK8SNetworkingIstioIoWorkloadGroupV1Manifest#path}
  */
  readonly path?: string;
  /**
  * Port on which the endpoint lives.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_workload_group_v1_manifest#port DataK8SNetworkingIstioIoWorkloadGroupV1Manifest#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_workload_group_v1_manifest#scheme DataK8SNetworkingIstioIoWorkloadGroupV1Manifest#scheme}
  */
  readonly scheme?: string;
}

export function dataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbeHttpGetToTerraform(struct?: DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbeHttpGet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    http_headers: cdktf.listMapper(dataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbeHttpGetHttpHeadersToTerraform, false)(struct!.httpHeaders),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
  }
}


export function dataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbeHttpGetToHclTerraform(struct?: DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbeHttpGet | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbeHttpGetHttpHeadersToHclTerraform, false)(struct!.httpHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbeHttpGetHttpHeadersList",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
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

export class DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbeHttpGetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbeHttpGet | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbeHttpGet | cdktf.IResolvable | undefined) {
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
  private _httpHeaders = new DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbeHttpGetHttpHeadersList(this, "http_headers", false);
  public get httpHeaders() {
    return this._httpHeaders;
  }
  public putHttpHeaders(value: DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbeHttpGetHttpHeaders[] | cdktf.IResolvable) {
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
export interface DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbeTcpSocket {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_workload_group_v1_manifest#host DataK8SNetworkingIstioIoWorkloadGroupV1Manifest#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_workload_group_v1_manifest#port DataK8SNetworkingIstioIoWorkloadGroupV1Manifest#port}
  */
  readonly port: number;
}

export function dataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbeTcpSocketToTerraform(struct?: DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbeTcpSocket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function dataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbeTcpSocketToHclTerraform(struct?: DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbeTcpSocket | cdktf.IResolvable): any {
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
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbeTcpSocketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbeTcpSocket | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbeTcpSocket | cdktf.IResolvable | undefined) {
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
}
export interface DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbe {
  /**
  * Health is determined by how the command that is executed exited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_workload_group_v1_manifest#exec DataK8SNetworkingIstioIoWorkloadGroupV1Manifest#exec}
  */
  readonly exec?: DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbeExec;
  /**
  * Minimum consecutive failures for the probe to be considered failed after having succeeded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_workload_group_v1_manifest#failure_threshold DataK8SNetworkingIstioIoWorkloadGroupV1Manifest#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * 'httpGet' is performed to a given endpoint and the status/able to connect determines health.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_workload_group_v1_manifest#http_get DataK8SNetworkingIstioIoWorkloadGroupV1Manifest#http_get}
  */
  readonly httpGet?: DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbeHttpGet;
  /**
  * Number of seconds after the container has started before readiness probes are initiated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_workload_group_v1_manifest#initial_delay_seconds DataK8SNetworkingIstioIoWorkloadGroupV1Manifest#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * How often (in seconds) to perform the probe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_workload_group_v1_manifest#period_seconds DataK8SNetworkingIstioIoWorkloadGroupV1Manifest#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Minimum consecutive successes for the probe to be considered successful after having failed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_workload_group_v1_manifest#success_threshold DataK8SNetworkingIstioIoWorkloadGroupV1Manifest#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * Health is determined by if the proxy is able to connect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_workload_group_v1_manifest#tcp_socket DataK8SNetworkingIstioIoWorkloadGroupV1Manifest#tcp_socket}
  */
  readonly tcpSocket?: DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbeTcpSocket;
  /**
  * Number of seconds after which the probe times out.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_workload_group_v1_manifest#timeout_seconds DataK8SNetworkingIstioIoWorkloadGroupV1Manifest#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
}

export function dataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbeToTerraform(struct?: DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: dataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbeExecToTerraform(struct!.exec),
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    http_get: dataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbeHttpGetToTerraform(struct!.httpGet),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    tcp_socket: dataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbeTcpSocketToTerraform(struct!.tcpSocket),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
  }
}


export function dataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbeToHclTerraform(struct?: DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exec: {
      value: dataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbeExecToHclTerraform(struct!.exec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbeExec",
    },
    failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.failureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_get: {
      value: dataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbeHttpGetToHclTerraform(struct!.httpGet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbeHttpGet",
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
      value: dataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbeTcpSocketToHclTerraform(struct!.tcpSocket),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbeTcpSocket",
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

export class DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbe | cdktf.IResolvable | undefined {
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
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbe | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exec.internalValue = undefined;
      this._failureThreshold = undefined;
      this._httpGet.internalValue = undefined;
      this._initialDelaySeconds = undefined;
      this._periodSeconds = undefined;
      this._successThreshold = undefined;
      this._tcpSocket.internalValue = undefined;
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
      this._httpGet.internalValue = value.httpGet;
      this._initialDelaySeconds = value.initialDelaySeconds;
      this._periodSeconds = value.periodSeconds;
      this._successThreshold = value.successThreshold;
      this._tcpSocket.internalValue = value.tcpSocket;
      this._timeoutSeconds = value.timeoutSeconds;
    }
  }

  // exec - computed: false, optional: true, required: false
  private _exec = new DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbeExecOutputReference(this, "exec");
  public get exec() {
    return this._exec;
  }
  public putExec(value: DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbeExec) {
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

  // http_get - computed: false, optional: true, required: false
  private _httpGet = new DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbeHttpGetOutputReference(this, "http_get");
  public get httpGet() {
    return this._httpGet;
  }
  public putHttpGet(value: DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbeHttpGet) {
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
  private _tcpSocket = new DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbeTcpSocketOutputReference(this, "tcp_socket");
  public get tcpSocket() {
    return this._tcpSocket;
  }
  public putTcpSocket(value: DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbeTcpSocket) {
    this._tcpSocket.internalValue = value;
  }
  public resetTcpSocket() {
    this._tcpSocket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSocketInput() {
    return this._tcpSocket.internalValue;
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
export interface DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecTemplate {
  /**
  * Address associated with the network endpoint without the port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_workload_group_v1_manifest#address DataK8SNetworkingIstioIoWorkloadGroupV1Manifest#address}
  */
  readonly address?: string;
  /**
  * One or more labels associated with the endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_workload_group_v1_manifest#labels DataK8SNetworkingIstioIoWorkloadGroupV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The locality associated with the endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_workload_group_v1_manifest#locality DataK8SNetworkingIstioIoWorkloadGroupV1Manifest#locality}
  */
  readonly locality?: string;
  /**
  * Network enables Istio to group endpoints resident in the same L3 domain/network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_workload_group_v1_manifest#network DataK8SNetworkingIstioIoWorkloadGroupV1Manifest#network}
  */
  readonly network?: string;
  /**
  * Set of ports associated with the endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_workload_group_v1_manifest#ports DataK8SNetworkingIstioIoWorkloadGroupV1Manifest#ports}
  */
  readonly ports?: { [key: string]: string };
  /**
  * The service account associated with the workload if a sidecar is present in the workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_workload_group_v1_manifest#service_account DataK8SNetworkingIstioIoWorkloadGroupV1Manifest#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * The load balancing weight associated with the endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_workload_group_v1_manifest#weight DataK8SNetworkingIstioIoWorkloadGroupV1Manifest#weight}
  */
  readonly weight?: number;
}

export function dataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecTemplateToTerraform(struct?: DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    locality: cdktf.stringToTerraform(struct!.locality),
    network: cdktf.stringToTerraform(struct!.network),
    ports: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.ports),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecTemplateToHclTerraform(struct?: DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    locality: {
      value: cdktf.stringToHclTerraform(struct!.locality),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ports: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.ports),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._locality !== undefined) {
      hasAnyValues = true;
      internalValueResult.locality = this._locality;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._labels = undefined;
      this._locality = undefined;
      this._network = undefined;
      this._ports = undefined;
      this._serviceAccount = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._labels = value.labels;
      this._locality = value.locality;
      this._network = value.network;
      this._ports = value.ports;
      this._serviceAccount = value.serviceAccount;
      this._weight = value.weight;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
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

  // locality - computed: false, optional: true, required: false
  private _locality?: string; 
  public get locality() {
    return this.getStringAttribute('locality');
  }
  public set locality(value: string) {
    this._locality = value;
  }
  public resetLocality() {
    this._locality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localityInput() {
    return this._locality;
  }

  // network - computed: false, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // ports - computed: false, optional: true, required: false
  private _ports?: { [key: string]: string }; 
  public get ports() {
    return this.getStringMapAttribute('ports');
  }
  public set ports(value: { [key: string]: string }) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
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

  // weight - computed: false, optional: true, required: false
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
}
export interface DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpec {
  /**
  * Metadata that will be used for all corresponding 'WorkloadEntries'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_workload_group_v1_manifest#metadata DataK8SNetworkingIstioIoWorkloadGroupV1Manifest#metadata}
  */
  readonly metadata?: DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecMetadata;
  /**
  * 'ReadinessProbe' describes the configuration the user must provide for healthchecking on their workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_workload_group_v1_manifest#probe DataK8SNetworkingIstioIoWorkloadGroupV1Manifest#probe}
  */
  readonly probe?: DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbe;
  /**
  * Template to be used for the generation of 'WorkloadEntry' resources that belong to this 'WorkloadGroup'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_workload_group_v1_manifest#template DataK8SNetworkingIstioIoWorkloadGroupV1Manifest#template}
  */
  readonly template: DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecTemplate;
}

export function dataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecToTerraform(struct?: DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: dataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecMetadataToTerraform(struct!.metadata),
    probe: dataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbeToTerraform(struct!.probe),
    template: dataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecTemplateToTerraform(struct!.template),
  }
}


export function dataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecToHclTerraform(struct?: DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: dataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecMetadata",
    },
    probe: {
      value: dataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbeToHclTerraform(struct!.probe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbe",
    },
    template: {
      value: dataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecTemplate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._probe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.probe = this._probe?.internalValue;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadata.internalValue = undefined;
      this._probe.internalValue = undefined;
      this._template.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadata.internalValue = value.metadata;
      this._probe.internalValue = value.probe;
      this._template.internalValue = value.template;
    }
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // probe - computed: false, optional: true, required: false
  private _probe = new DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbeOutputReference(this, "probe");
  public get probe() {
    return this._probe;
  }
  public putProbe(value: DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecProbe) {
    this._probe.internalValue = value;
  }
  public resetProbe() {
    this._probe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeInput() {
    return this._probe.internalValue;
  }

  // template - computed: false, optional: false, required: true
  private _template = new DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecTemplate) {
    this._template.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_workload_group_v1_manifest k8s_networking_istio_io_workload_group_v1_manifest}
*/
export class DataK8SNetworkingIstioIoWorkloadGroupV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_networking_istio_io_workload_group_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SNetworkingIstioIoWorkloadGroupV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SNetworkingIstioIoWorkloadGroupV1Manifest to import
  * @param importFromId The id of the existing DataK8SNetworkingIstioIoWorkloadGroupV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_workload_group_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SNetworkingIstioIoWorkloadGroupV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_networking_istio_io_workload_group_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_workload_group_v1_manifest k8s_networking_istio_io_workload_group_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SNetworkingIstioIoWorkloadGroupV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SNetworkingIstioIoWorkloadGroupV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_networking_istio_io_workload_group_v1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.15',
        providerVersionConstraint: '2025.12.15'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._metadata.internalValue = config.metadata;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8SNetworkingIstioIoWorkloadGroupV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SNetworkingIstioIoWorkloadGroupV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // yaml - computed: true, optional: false, required: false
  public get yaml() {
    return this.getStringAttribute('yaml');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: dataK8SNetworkingIstioIoWorkloadGroupV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SNetworkingIstioIoWorkloadGroupV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SNetworkingIstioIoWorkloadGroupV1ManifestMetadata",
      },
      spec: {
        value: dataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SNetworkingIstioIoWorkloadGroupV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
