// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1beta1_manifest#metadata DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestMetadata;
  /**
  * VSphereClusterSpec defines the desired state of VSphereCluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1beta1_manifest#spec DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpec;
}
export interface DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1beta1_manifest#annotations DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1beta1_manifest#labels DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1beta1_manifest#name DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1beta1_manifest#namespace DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestMetadataToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecClusterModules {
  /**
  * ControlPlane indicates whether the referred object is responsible for control plane nodes. Currently, only the KubeadmControlPlane objects have this flag set to true. Only a single object in the slice can have this value set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1beta1_manifest#control_plane DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1Manifest#control_plane}
  */
  readonly controlPlane: boolean | cdktf.IResolvable;
  /**
  * ModuleUUID is the unique identifier of the 'ClusterModule' used by the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1beta1_manifest#module_uuid DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1Manifest#module_uuid}
  */
  readonly moduleUuid: string;
  /**
  * TargetObjectName points to the object that uses the Cluster Module information to enforce anti-affinity amongst its descendant VM objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1beta1_manifest#target_object_name DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1Manifest#target_object_name}
  */
  readonly targetObjectName: string;
}

export function dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecClusterModulesToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecClusterModules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    control_plane: cdktf.booleanToTerraform(struct!.controlPlane),
    module_uuid: cdktf.stringToTerraform(struct!.moduleUuid),
    target_object_name: cdktf.stringToTerraform(struct!.targetObjectName),
  }
}


export function dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecClusterModulesToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecClusterModules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    control_plane: {
      value: cdktf.booleanToHclTerraform(struct!.controlPlane),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    module_uuid: {
      value: cdktf.stringToHclTerraform(struct!.moduleUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_object_name: {
      value: cdktf.stringToHclTerraform(struct!.targetObjectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecClusterModulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecClusterModules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controlPlane !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlane = this._controlPlane;
    }
    if (this._moduleUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moduleUuid = this._moduleUuid;
    }
    if (this._targetObjectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetObjectName = this._targetObjectName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecClusterModules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._controlPlane = undefined;
      this._moduleUuid = undefined;
      this._targetObjectName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._controlPlane = value.controlPlane;
      this._moduleUuid = value.moduleUuid;
      this._targetObjectName = value.targetObjectName;
    }
  }

  // control_plane - computed: false, optional: false, required: true
  private _controlPlane?: boolean | cdktf.IResolvable; 
  public get controlPlane() {
    return this.getBooleanAttribute('control_plane');
  }
  public set controlPlane(value: boolean | cdktf.IResolvable) {
    this._controlPlane = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneInput() {
    return this._controlPlane;
  }

  // module_uuid - computed: false, optional: false, required: true
  private _moduleUuid?: string; 
  public get moduleUuid() {
    return this.getStringAttribute('module_uuid');
  }
  public set moduleUuid(value: string) {
    this._moduleUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleUuidInput() {
    return this._moduleUuid;
  }

  // target_object_name - computed: false, optional: false, required: true
  private _targetObjectName?: string; 
  public get targetObjectName() {
    return this.getStringAttribute('target_object_name');
  }
  public set targetObjectName(value: string) {
    this._targetObjectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetObjectNameInput() {
    return this._targetObjectName;
  }
}

export class DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecClusterModulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecClusterModules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecClusterModulesOutputReference {
    return new DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecClusterModulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecControlPlaneEndpoint {
  /**
  * The hostname on which the API server is serving.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1beta1_manifest#host DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1Manifest#host}
  */
  readonly host: string;
  /**
  * The port on which the API server is serving.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1beta1_manifest#port DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1Manifest#port}
  */
  readonly port: number;
}

export function dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecControlPlaneEndpointToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecControlPlaneEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecControlPlaneEndpointToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecControlPlaneEndpoint | cdktf.IResolvable): any {
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

export class DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecControlPlaneEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecControlPlaneEndpoint | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecControlPlaneEndpoint | cdktf.IResolvable | undefined) {
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

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
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
export interface DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecFailureDomainSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1beta1_manifest#key DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1beta1_manifest#operator DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1beta1_manifest#values DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecFailureDomainSelectorMatchExpressionsToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecFailureDomainSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecFailureDomainSelectorMatchExpressionsToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecFailureDomainSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecFailureDomainSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecFailureDomainSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecFailureDomainSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecFailureDomainSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecFailureDomainSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecFailureDomainSelectorMatchExpressionsOutputReference {
    return new DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecFailureDomainSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecFailureDomainSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1beta1_manifest#match_expressions DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecFailureDomainSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1beta1_manifest#match_labels DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecFailureDomainSelectorToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecFailureDomainSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecFailureDomainSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecFailureDomainSelectorToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecFailureDomainSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecFailureDomainSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecFailureDomainSelectorMatchExpressionsList",
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

export class DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecFailureDomainSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecFailureDomainSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecFailureDomainSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecFailureDomainSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecFailureDomainSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecIdentityRef {
  /**
  * Kind of the identity. Can either be VSphereClusterIdentity or Secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1beta1_manifest#kind DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name of the identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1beta1_manifest#name DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecIdentityRefToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecIdentityRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecIdentityRefToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecIdentityRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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

export class DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecIdentityRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecIdentityRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecIdentityRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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
export interface DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpec {
  /**
  * ClusterModules hosts information regarding the anti-affinity vSphere constructs for each of the objects responsible for creation of VM objects belonging to the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1beta1_manifest#cluster_modules DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1Manifest#cluster_modules}
  */
  readonly clusterModules?: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecClusterModules[] | cdktf.IResolvable;
  /**
  * ControlPlaneEndpoint represents the endpoint used to communicate with the control plane.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1beta1_manifest#control_plane_endpoint DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1Manifest#control_plane_endpoint}
  */
  readonly controlPlaneEndpoint?: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecControlPlaneEndpoint;
  /**
  * FailureDomainSelector is the label selector to use for failure domain selection for the control plane nodes of the cluster. If not set ('nil'), selecting failure domains will be disabled. An empty value ('{}') selects all existing failure domains. A valid selector will select all failure domains which match the selector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1beta1_manifest#failure_domain_selector DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1Manifest#failure_domain_selector}
  */
  readonly failureDomainSelector?: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecFailureDomainSelector;
  /**
  * IdentityRef is a reference to either a Secret or VSphereClusterIdentity that contains the identity to use when reconciling the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1beta1_manifest#identity_ref DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1Manifest#identity_ref}
  */
  readonly identityRef?: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecIdentityRef;
  /**
  * Server is the address of the vSphere endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1beta1_manifest#server DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1Manifest#server}
  */
  readonly server?: string;
  /**
  * Thumbprint is the colon-separated SHA-1 checksum of the given vCenter server's host certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1beta1_manifest#thumbprint DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1Manifest#thumbprint}
  */
  readonly thumbprint?: string;
}

export function dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_modules: cdktf.listMapper(dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecClusterModulesToTerraform, false)(struct!.clusterModules),
    control_plane_endpoint: dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecControlPlaneEndpointToTerraform(struct!.controlPlaneEndpoint),
    failure_domain_selector: dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecFailureDomainSelectorToTerraform(struct!.failureDomainSelector),
    identity_ref: dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecIdentityRefToTerraform(struct!.identityRef),
    server: cdktf.stringToTerraform(struct!.server),
    thumbprint: cdktf.stringToTerraform(struct!.thumbprint),
  }
}


export function dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_modules: {
      value: cdktf.listMapperHcl(dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecClusterModulesToHclTerraform, false)(struct!.clusterModules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecClusterModulesList",
    },
    control_plane_endpoint: {
      value: dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecControlPlaneEndpointToHclTerraform(struct!.controlPlaneEndpoint),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecControlPlaneEndpoint",
    },
    failure_domain_selector: {
      value: dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecFailureDomainSelectorToHclTerraform(struct!.failureDomainSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecFailureDomainSelector",
    },
    identity_ref: {
      value: dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecIdentityRefToHclTerraform(struct!.identityRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecIdentityRef",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    thumbprint: {
      value: cdktf.stringToHclTerraform(struct!.thumbprint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterModules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterModules = this._clusterModules?.internalValue;
    }
    if (this._controlPlaneEndpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlaneEndpoint = this._controlPlaneEndpoint?.internalValue;
    }
    if (this._failureDomainSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureDomainSelector = this._failureDomainSelector?.internalValue;
    }
    if (this._identityRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityRef = this._identityRef?.internalValue;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._thumbprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.thumbprint = this._thumbprint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterModules.internalValue = undefined;
      this._controlPlaneEndpoint.internalValue = undefined;
      this._failureDomainSelector.internalValue = undefined;
      this._identityRef.internalValue = undefined;
      this._server = undefined;
      this._thumbprint = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterModules.internalValue = value.clusterModules;
      this._controlPlaneEndpoint.internalValue = value.controlPlaneEndpoint;
      this._failureDomainSelector.internalValue = value.failureDomainSelector;
      this._identityRef.internalValue = value.identityRef;
      this._server = value.server;
      this._thumbprint = value.thumbprint;
    }
  }

  // cluster_modules - computed: false, optional: true, required: false
  private _clusterModules = new DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecClusterModulesList(this, "cluster_modules", false);
  public get clusterModules() {
    return this._clusterModules;
  }
  public putClusterModules(value: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecClusterModules[] | cdktf.IResolvable) {
    this._clusterModules.internalValue = value;
  }
  public resetClusterModules() {
    this._clusterModules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterModulesInput() {
    return this._clusterModules.internalValue;
  }

  // control_plane_endpoint - computed: false, optional: true, required: false
  private _controlPlaneEndpoint = new DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecControlPlaneEndpointOutputReference(this, "control_plane_endpoint");
  public get controlPlaneEndpoint() {
    return this._controlPlaneEndpoint;
  }
  public putControlPlaneEndpoint(value: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecControlPlaneEndpoint) {
    this._controlPlaneEndpoint.internalValue = value;
  }
  public resetControlPlaneEndpoint() {
    this._controlPlaneEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneEndpointInput() {
    return this._controlPlaneEndpoint.internalValue;
  }

  // failure_domain_selector - computed: false, optional: true, required: false
  private _failureDomainSelector = new DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecFailureDomainSelectorOutputReference(this, "failure_domain_selector");
  public get failureDomainSelector() {
    return this._failureDomainSelector;
  }
  public putFailureDomainSelector(value: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecFailureDomainSelector) {
    this._failureDomainSelector.internalValue = value;
  }
  public resetFailureDomainSelector() {
    this._failureDomainSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureDomainSelectorInput() {
    return this._failureDomainSelector.internalValue;
  }

  // identity_ref - computed: false, optional: true, required: false
  private _identityRef = new DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecIdentityRefOutputReference(this, "identity_ref");
  public get identityRef() {
    return this._identityRef;
  }
  public putIdentityRef(value: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecIdentityRef) {
    this._identityRef.internalValue = value;
  }
  public resetIdentityRef() {
    this._identityRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityRefInput() {
    return this._identityRef.internalValue;
  }

  // server - computed: false, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // thumbprint - computed: false, optional: true, required: false
  private _thumbprint?: string; 
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }
  public set thumbprint(value: string) {
    this._thumbprint = value;
  }
  public resetThumbprint() {
    this._thumbprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thumbprintInput() {
    return this._thumbprint;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1beta1_manifest k8s_infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1beta1_manifest}
*/
export class DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1beta1_manifest k8s_infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_infrastructure_cluster_x_k8s_io_v_sphere_cluster_v1beta1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.17',
        providerVersionConstraint: '2025.11.17'
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
  private _metadata = new DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpec) {
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
      metadata: dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SInfrastructureClusterXK8SIoVSphereClusterV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
