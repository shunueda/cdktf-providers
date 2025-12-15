// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#metadata DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestMetadata;
  /**
  * Specification of the desired behavior of the VMAlertmanager cluster. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#spec DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#spec}
  */
  readonly spec: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpec;
}
export interface DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#annotations DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#labels DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#namespace DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestMetadataToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecDataSource {
  /**
  * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#api_group DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Kind is the type of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#kind DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecDataSourceToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecDataSourceToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_group: {
      value: cdktf.stringToHclTerraform(struct!.apiGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecDataSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecDataSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroup = this._apiGroup;
    }
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecDataSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiGroup = undefined;
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
      this._apiGroup = value.apiGroup;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // api_group - computed: false, optional: true, required: false
  private _apiGroup?: string; 
  public get apiGroup() {
    return this.getStringAttribute('api_group');
  }
  public set apiGroup(value: string) {
    this._apiGroup = value;
  }
  public resetApiGroup() {
    this._apiGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupInput() {
    return this._apiGroup;
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
export interface DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecDataSourceRef {
  /**
  * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#api_group DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Kind is the type of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#kind DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the namespace of resource being referenced Note that when a namespace is specified, a gateway.networking.k8s.io/ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details. (Alpha) This field requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#namespace DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecDataSourceRefToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecDataSourceRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecDataSourceRefToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecDataSourceRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_group: {
      value: cdktf.stringToHclTerraform(struct!.apiGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecDataSourceRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecDataSourceRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroup = this._apiGroup;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecDataSourceRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiGroup = undefined;
      this._kind = undefined;
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
      this._apiGroup = value.apiGroup;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // api_group - computed: false, optional: true, required: false
  private _apiGroup?: string; 
  public get apiGroup() {
    return this.getStringAttribute('api_group');
  }
  public set apiGroup(value: string) {
    this._apiGroup = value;
  }
  public resetApiGroup() {
    this._apiGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupInput() {
    return this._apiGroup;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecResources {
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#limits DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#requests DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecResourcesToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecResourcesToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecResources | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecResources | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#operator DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#values DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecSelectorMatchExpressionsToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecSelectorMatchExpressionsToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecSelectorMatchExpressionsOutputReference {
    return new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#match_expressions DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#match_labels DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecSelectorToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecSelectorToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecSelectorMatchExpressionsList",
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

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpec {
  /**
  * accessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#access_modes DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#access_modes}
  */
  readonly accessModes?: string[];
  /**
  * dataSource field can be used to specify either: * An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot) * An existing PVC (PersistentVolumeClaim) If the provisioner or an external controller can support the specified data source, it will create a new volume based on the contents of the specified data source. When the AnyVolumeDataSource feature gate is enabled, dataSource contents will be copied to dataSourceRef, and dataSourceRef contents will be copied to dataSource when dataSourceRef.namespace is not specified. If the namespace is specified, then dataSourceRef will not be copied to dataSource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#data_source DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#data_source}
  */
  readonly dataSource?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecDataSource;
  /**
  * dataSourceRef specifies the object from which to populate the volume with data, if a non-empty volume is desired. This may be any object from a non-empty API group (non core object) or a PersistentVolumeClaim object. When this field is specified, volume binding will only succeed if the type of the specified object matches some installed volume populator or dynamic provisioner. This field will replace the functionality of the dataSource field and as such if both fields are non-empty, they must have the same value. For backwards compatibility, when namespace isn't specified in dataSourceRef, both fields (dataSource and dataSourceRef) will be set to the same value automatically if one of them is empty and the other is non-empty. When namespace is specified in dataSourceRef, dataSource isn't set to the same value and must be empty. There are three important differences between dataSource and dataSourceRef: * While dataSource only allows two specific types of objects, dataSourceRef allows any non-core object, as well as PersistentVolumeClaim objects. * While dataSource ignores disallowed values (dropping them), dataSourceRef preserves all values, and generates an error if a disallowed value is specified. * While dataSource only allows local objects, dataSourceRef allows objects in any namespaces. (Beta) Using this field requires the AnyVolumeDataSource feature gate to be enabled. (Alpha) Using the namespace field of dataSourceRef requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#data_source_ref DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#data_source_ref}
  */
  readonly dataSourceRef?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecDataSourceRef;
  /**
  * resources represents the minimum resources the volume should have. If RecoverVolumeExpansionFailure feature is enabled users are allowed to specify resource requirements that are lower than previous value but must still be higher than capacity recorded in the status field of the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#resources DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#resources}
  */
  readonly resources?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecResources;
  /**
  * selector is a label query over volumes to consider for binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#selector DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#selector}
  */
  readonly selector?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecSelector;
  /**
  * storageClassName is the name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#storage_class_name DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#storage_class_name}
  */
  readonly storageClassName?: string;
  /**
  * volumeAttributesClassName may be used to set the VolumeAttributesClass used by this claim. If specified, the CSI driver will create or update the volume with the attributes defined in the corresponding VolumeAttributesClass. This has a different purpose than storageClassName, it can be changed after the claim is created. An empty string value means that no VolumeAttributesClass will be applied to the claim but it's not allowed to reset this field to empty string once it is set. If unspecified and the PersistentVolumeClaim is unbound, the default VolumeAttributesClass will be set by the persistentvolume controller if it exists. If the resource referred to by volumeAttributesClass does not exist, this PersistentVolumeClaim will be set to a Pending state, as reflected by the modifyVolumeStatus field, until such as a resource exists. More info: https://kubernetes.io/docs/concepts/storage/volume-attributes-classes/ (Alpha) Using this field requires the VolumeAttributesClass feature gate to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#volume_attributes_class_name DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#volume_attributes_class_name}
  */
  readonly volumeAttributesClassName?: string;
  /**
  * volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#volume_mode DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#volume_mode}
  */
  readonly volumeMode?: string;
  /**
  * volumeName is the binding reference to the PersistentVolume backing this claim.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#volume_name DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#volume_name}
  */
  readonly volumeName?: string;
}

export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_modes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessModes),
    data_source: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecDataSourceToTerraform(struct!.dataSource),
    data_source_ref: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecDataSourceRefToTerraform(struct!.dataSourceRef),
    resources: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecResourcesToTerraform(struct!.resources),
    selector: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecSelectorToTerraform(struct!.selector),
    storage_class_name: cdktf.stringToTerraform(struct!.storageClassName),
    volume_attributes_class_name: cdktf.stringToTerraform(struct!.volumeAttributesClassName),
    volume_mode: cdktf.stringToTerraform(struct!.volumeMode),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_modes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessModes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    data_source: {
      value: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecDataSourceToHclTerraform(struct!.dataSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecDataSource",
    },
    data_source_ref: {
      value: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecDataSourceRefToHclTerraform(struct!.dataSourceRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecDataSourceRef",
    },
    resources: {
      value: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecResources",
    },
    selector: {
      value: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecSelector",
    },
    storage_class_name: {
      value: cdktf.stringToHclTerraform(struct!.storageClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_attributes_class_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeAttributesClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_mode: {
      value: cdktf.stringToHclTerraform(struct!.volumeMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessModes !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessModes = this._accessModes;
    }
    if (this._dataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource?.internalValue;
    }
    if (this._dataSourceRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceRef = this._dataSourceRef?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    if (this._storageClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClassName = this._storageClassName;
    }
    if (this._volumeAttributesClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeAttributesClassName = this._volumeAttributesClassName;
    }
    if (this._volumeMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMode = this._volumeMode;
    }
    if (this._volumeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeName = this._volumeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessModes = undefined;
      this._dataSource.internalValue = undefined;
      this._dataSourceRef.internalValue = undefined;
      this._resources.internalValue = undefined;
      this._selector.internalValue = undefined;
      this._storageClassName = undefined;
      this._volumeAttributesClassName = undefined;
      this._volumeMode = undefined;
      this._volumeName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessModes = value.accessModes;
      this._dataSource.internalValue = value.dataSource;
      this._dataSourceRef.internalValue = value.dataSourceRef;
      this._resources.internalValue = value.resources;
      this._selector.internalValue = value.selector;
      this._storageClassName = value.storageClassName;
      this._volumeAttributesClassName = value.volumeAttributesClassName;
      this._volumeMode = value.volumeMode;
      this._volumeName = value.volumeName;
    }
  }

  // access_modes - computed: false, optional: true, required: false
  private _accessModes?: string[]; 
  public get accessModes() {
    return this.getListAttribute('access_modes');
  }
  public set accessModes(value: string[]) {
    this._accessModes = value;
  }
  public resetAccessModes() {
    this._accessModes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessModesInput() {
    return this._accessModes;
  }

  // data_source - computed: false, optional: true, required: false
  private _dataSource = new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecDataSourceOutputReference(this, "data_source");
  public get dataSource() {
    return this._dataSource;
  }
  public putDataSource(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecDataSource) {
    this._dataSource.internalValue = value;
  }
  public resetDataSource() {
    this._dataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource.internalValue;
  }

  // data_source_ref - computed: false, optional: true, required: false
  private _dataSourceRef = new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecDataSourceRefOutputReference(this, "data_source_ref");
  public get dataSourceRef() {
    return this._dataSourceRef;
  }
  public putDataSourceRef(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecDataSourceRef) {
    this._dataSourceRef.internalValue = value;
  }
  public resetDataSourceRef() {
    this._dataSourceRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceRefInput() {
    return this._dataSourceRef.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }

  // storage_class_name - computed: false, optional: true, required: false
  private _storageClassName?: string; 
  public get storageClassName() {
    return this.getStringAttribute('storage_class_name');
  }
  public set storageClassName(value: string) {
    this._storageClassName = value;
  }
  public resetStorageClassName() {
    this._storageClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassNameInput() {
    return this._storageClassName;
  }

  // volume_attributes_class_name - computed: false, optional: true, required: false
  private _volumeAttributesClassName?: string; 
  public get volumeAttributesClassName() {
    return this.getStringAttribute('volume_attributes_class_name');
  }
  public set volumeAttributesClassName(value: string) {
    this._volumeAttributesClassName = value;
  }
  public resetVolumeAttributesClassName() {
    this._volumeAttributesClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeAttributesClassNameInput() {
    return this._volumeAttributesClassName;
  }

  // volume_mode - computed: false, optional: true, required: false
  private _volumeMode?: string; 
  public get volumeMode() {
    return this.getStringAttribute('volume_mode');
  }
  public set volumeMode(value: string) {
    this._volumeMode = value;
  }
  public resetVolumeMode() {
    this._volumeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeModeInput() {
    return this._volumeMode;
  }

  // volume_name - computed: false, optional: true, required: false
  private _volumeName?: string; 
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
  public set volumeName(value: string) {
    this._volumeName = value;
  }
  public resetVolumeName() {
    this._volumeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNameInput() {
    return this._volumeName;
  }
}
export interface DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesStatusConditions {
  /**
  * lastProbeTime is the time we probed the condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#last_probe_time DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#last_probe_time}
  */
  readonly lastProbeTime?: string;
  /**
  * lastTransitionTime is the time the condition transitioned from one status to another.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#last_transition_time DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#last_transition_time}
  */
  readonly lastTransitionTime?: string;
  /**
  * message is the human-readable message indicating details about last transition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#message DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#message}
  */
  readonly message?: string;
  /**
  * reason is a unique, this should be a short, machine understandable string that gives the reason for condition's last transition. If it reports 'Resizing' that means the underlying persistent volume is being resized.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#reason DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#reason}
  */
  readonly reason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#status DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#status}
  */
  readonly status: string;
  /**
  * PersistentVolumeClaimConditionType is a valid value of PersistentVolumeClaimCondition.Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#type DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesStatusConditionsToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesStatusConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    last_probe_time: cdktf.stringToTerraform(struct!.lastProbeTime),
    last_transition_time: cdktf.stringToTerraform(struct!.lastTransitionTime),
    message: cdktf.stringToTerraform(struct!.message),
    reason: cdktf.stringToTerraform(struct!.reason),
    status: cdktf.stringToTerraform(struct!.status),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesStatusConditionsToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesStatusConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    last_probe_time: {
      value: cdktf.stringToHclTerraform(struct!.lastProbeTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_transition_time: {
      value: cdktf.stringToHclTerraform(struct!.lastTransitionTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reason: {
      value: cdktf.stringToHclTerraform(struct!.reason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
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

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesStatusConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesStatusConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lastProbeTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastProbeTime = this._lastProbeTime;
    }
    if (this._lastTransitionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastTransitionTime = this._lastTransitionTime;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesStatusConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lastProbeTime = undefined;
      this._lastTransitionTime = undefined;
      this._message = undefined;
      this._reason = undefined;
      this._status = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lastProbeTime = value.lastProbeTime;
      this._lastTransitionTime = value.lastTransitionTime;
      this._message = value.message;
      this._reason = value.reason;
      this._status = value.status;
      this._type = value.type;
    }
  }

  // last_probe_time - computed: false, optional: true, required: false
  private _lastProbeTime?: string; 
  public get lastProbeTime() {
    return this.getStringAttribute('last_probe_time');
  }
  public set lastProbeTime(value: string) {
    this._lastProbeTime = value;
  }
  public resetLastProbeTime() {
    this._lastProbeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastProbeTimeInput() {
    return this._lastProbeTime;
  }

  // last_transition_time - computed: false, optional: true, required: false
  private _lastTransitionTime?: string; 
  public get lastTransitionTime() {
    return this.getStringAttribute('last_transition_time');
  }
  public set lastTransitionTime(value: string) {
    this._lastTransitionTime = value;
  }
  public resetLastTransitionTime() {
    this._lastTransitionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastTransitionTimeInput() {
    return this._lastTransitionTime;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // reason - computed: false, optional: true, required: false
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
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

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesStatusConditionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesStatusConditions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesStatusConditionsOutputReference {
    return new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesStatusConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesStatusModifyVolumeStatus {
  /**
  * status is the status of the ControllerModifyVolume operation. It can be in any of following states: - Pending Pending indicates that the PersistentVolumeClaim cannot be modified due to unmet requirements, such as the specified VolumeAttributesClass not existing. - InProgress InProgress indicates that the volume is being modified. - Infeasible Infeasible indicates that the request has been rejected as invalid by the CSI driver. To resolve the error, a valid VolumeAttributesClass needs to be specified. Note: New statuses can be added in the future. Consumers should check for unknown statuses and fail appropriately.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#status DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#status}
  */
  readonly status: string;
  /**
  * targetVolumeAttributesClassName is the name of the VolumeAttributesClass the PVC currently being reconciled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#target_volume_attributes_class_name DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#target_volume_attributes_class_name}
  */
  readonly targetVolumeAttributesClassName?: string;
}

export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesStatusModifyVolumeStatusToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesStatusModifyVolumeStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: cdktf.stringToTerraform(struct!.status),
    target_volume_attributes_class_name: cdktf.stringToTerraform(struct!.targetVolumeAttributesClassName),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesStatusModifyVolumeStatusToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesStatusModifyVolumeStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_volume_attributes_class_name: {
      value: cdktf.stringToHclTerraform(struct!.targetVolumeAttributesClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesStatusModifyVolumeStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesStatusModifyVolumeStatus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._targetVolumeAttributesClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetVolumeAttributesClassName = this._targetVolumeAttributesClassName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesStatusModifyVolumeStatus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._status = undefined;
      this._targetVolumeAttributesClassName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._status = value.status;
      this._targetVolumeAttributesClassName = value.targetVolumeAttributesClassName;
    }
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // target_volume_attributes_class_name - computed: false, optional: true, required: false
  private _targetVolumeAttributesClassName?: string; 
  public get targetVolumeAttributesClassName() {
    return this.getStringAttribute('target_volume_attributes_class_name');
  }
  public set targetVolumeAttributesClassName(value: string) {
    this._targetVolumeAttributesClassName = value;
  }
  public resetTargetVolumeAttributesClassName() {
    this._targetVolumeAttributesClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetVolumeAttributesClassNameInput() {
    return this._targetVolumeAttributesClassName;
  }
}
export interface DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesStatus {
  /**
  * accessModes contains the actual access modes the volume backing the PVC has. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#access_modes DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#access_modes}
  */
  readonly accessModes?: string[];
  /**
  * allocatedResourceStatuses stores status of resource being resized for the given PVC. Key names follow standard Kubernetes label syntax. Valid values are either: * Un-prefixed keys: - storage - the capacity of the volume. * Custom resources must use implementation-defined prefixed names such as 'example.com/my-custom-resource' Apart from above values - keys that are unprefixed or have kubernetes.io prefix are considered reserved and hence may not be used. ClaimResourceStatus can be in any of following states: - ControllerResizeInProgress: State set when resize controller starts resizing the volume in control-plane. - ControllerResizeFailed: State set when resize has failed in resize controller with a terminal error. - NodeResizePending: State set when resize controller has finished resizing the volume but further resizing of volume is needed on the node. - NodeResizeInProgress: State set when kubelet starts resizing the volume. - NodeResizeFailed: State set when resizing has failed in kubelet with a terminal error. Transient errors don't set NodeResizeFailed. For example: if expanding a PVC for more capacity - this field can be one of the following states: - pvc.status.allocatedResourceStatus['storage'] = 'ControllerResizeInProgress' - pvc.status.allocatedResourceStatus['storage'] = 'ControllerResizeFailed' - pvc.status.allocatedResourceStatus['storage'] = 'NodeResizePending' - pvc.status.allocatedResourceStatus['storage'] = 'NodeResizeInProgress' - pvc.status.allocatedResourceStatus['storage'] = 'NodeResizeFailed' When this field is not set, it means that no resize operation is in progress for the given PVC. A controller that receives PVC update with previously unknown resourceName or ClaimResourceStatus should ignore the update for the purpose it was designed. For example - a controller that only is responsible for resizing capacity of the volume, should ignore PVC updates that change other valid resources associated with PVC. This is an alpha field and requires enabling RecoverVolumeExpansionFailure feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#allocated_resource_statuses DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#allocated_resource_statuses}
  */
  readonly allocatedResourceStatuses?: { [key: string]: string };
  /**
  * allocatedResources tracks the resources allocated to a PVC including its capacity. Key names follow standard Kubernetes label syntax. Valid values are either: * Un-prefixed keys: - storage - the capacity of the volume. * Custom resources must use implementation-defined prefixed names such as 'example.com/my-custom-resource' Apart from above values - keys that are unprefixed or have kubernetes.io prefix are considered reserved and hence may not be used. Capacity reported here may be larger than the actual capacity when a volume expansion operation is requested. For storage quota, the larger value from allocatedResources and PVC.spec.resources is used. If allocatedResources is not set, PVC.spec.resources alone is used for quota calculation. If a volume expansion capacity request is lowered, allocatedResources is only lowered if there are no expansion operations in progress and if the actual volume capacity is equal or lower than the requested capacity. A controller that receives PVC update with previously unknown resourceName should ignore the update for the purpose it was designed. For example - a controller that only is responsible for resizing capacity of the volume, should ignore PVC updates that change other valid resources associated with PVC. This is an alpha field and requires enabling RecoverVolumeExpansionFailure feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#allocated_resources DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#allocated_resources}
  */
  readonly allocatedResources?: { [key: string]: string };
  /**
  * capacity represents the actual resources of the underlying volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#capacity DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#capacity}
  */
  readonly capacity?: { [key: string]: string };
  /**
  * conditions is the current Condition of persistent volume claim. If underlying persistent volume is being resized then the Condition will be set to 'Resizing'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#conditions DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#conditions}
  */
  readonly conditions?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesStatusConditions[] | cdktf.IResolvable;
  /**
  * currentVolumeAttributesClassName is the current name of the VolumeAttributesClass the PVC is using. When unset, there is no VolumeAttributeClass applied to this PersistentVolumeClaim This is an alpha field and requires enabling VolumeAttributesClass feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#current_volume_attributes_class_name DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#current_volume_attributes_class_name}
  */
  readonly currentVolumeAttributesClassName?: string;
  /**
  * ModifyVolumeStatus represents the status object of ControllerModifyVolume operation. When this is unset, there is no ModifyVolume operation being attempted. This is an alpha field and requires enabling VolumeAttributesClass feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#modify_volume_status DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#modify_volume_status}
  */
  readonly modifyVolumeStatus?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesStatusModifyVolumeStatus;
  /**
  * phase represents the current phase of PersistentVolumeClaim.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#phase DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#phase}
  */
  readonly phase?: string;
}

export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesStatusToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_modes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessModes),
    allocated_resource_statuses: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.allocatedResourceStatuses),
    allocated_resources: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.allocatedResources),
    capacity: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.capacity),
    conditions: cdktf.listMapper(dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesStatusConditionsToTerraform, false)(struct!.conditions),
    current_volume_attributes_class_name: cdktf.stringToTerraform(struct!.currentVolumeAttributesClassName),
    modify_volume_status: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesStatusModifyVolumeStatusToTerraform(struct!.modifyVolumeStatus),
    phase: cdktf.stringToTerraform(struct!.phase),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesStatusToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_modes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessModes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allocated_resource_statuses: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.allocatedResourceStatuses),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    allocated_resources: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.allocatedResources),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    capacity: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.capacity),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    conditions: {
      value: cdktf.listMapperHcl(dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesStatusConditionsToHclTerraform, false)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesStatusConditionsList",
    },
    current_volume_attributes_class_name: {
      value: cdktf.stringToHclTerraform(struct!.currentVolumeAttributesClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    modify_volume_status: {
      value: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesStatusModifyVolumeStatusToHclTerraform(struct!.modifyVolumeStatus),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesStatusModifyVolumeStatus",
    },
    phase: {
      value: cdktf.stringToHclTerraform(struct!.phase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesStatus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessModes !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessModes = this._accessModes;
    }
    if (this._allocatedResourceStatuses !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocatedResourceStatuses = this._allocatedResourceStatuses;
    }
    if (this._allocatedResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocatedResources = this._allocatedResources;
    }
    if (this._capacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacity = this._capacity;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    if (this._currentVolumeAttributesClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentVolumeAttributesClassName = this._currentVolumeAttributesClassName;
    }
    if (this._modifyVolumeStatus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modifyVolumeStatus = this._modifyVolumeStatus?.internalValue;
    }
    if (this._phase !== undefined) {
      hasAnyValues = true;
      internalValueResult.phase = this._phase;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesStatus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessModes = undefined;
      this._allocatedResourceStatuses = undefined;
      this._allocatedResources = undefined;
      this._capacity = undefined;
      this._conditions.internalValue = undefined;
      this._currentVolumeAttributesClassName = undefined;
      this._modifyVolumeStatus.internalValue = undefined;
      this._phase = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessModes = value.accessModes;
      this._allocatedResourceStatuses = value.allocatedResourceStatuses;
      this._allocatedResources = value.allocatedResources;
      this._capacity = value.capacity;
      this._conditions.internalValue = value.conditions;
      this._currentVolumeAttributesClassName = value.currentVolumeAttributesClassName;
      this._modifyVolumeStatus.internalValue = value.modifyVolumeStatus;
      this._phase = value.phase;
    }
  }

  // access_modes - computed: false, optional: true, required: false
  private _accessModes?: string[]; 
  public get accessModes() {
    return this.getListAttribute('access_modes');
  }
  public set accessModes(value: string[]) {
    this._accessModes = value;
  }
  public resetAccessModes() {
    this._accessModes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessModesInput() {
    return this._accessModes;
  }

  // allocated_resource_statuses - computed: false, optional: true, required: false
  private _allocatedResourceStatuses?: { [key: string]: string }; 
  public get allocatedResourceStatuses() {
    return this.getStringMapAttribute('allocated_resource_statuses');
  }
  public set allocatedResourceStatuses(value: { [key: string]: string }) {
    this._allocatedResourceStatuses = value;
  }
  public resetAllocatedResourceStatuses() {
    this._allocatedResourceStatuses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocatedResourceStatusesInput() {
    return this._allocatedResourceStatuses;
  }

  // allocated_resources - computed: false, optional: true, required: false
  private _allocatedResources?: { [key: string]: string }; 
  public get allocatedResources() {
    return this.getStringMapAttribute('allocated_resources');
  }
  public set allocatedResources(value: { [key: string]: string }) {
    this._allocatedResources = value;
  }
  public resetAllocatedResources() {
    this._allocatedResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocatedResourcesInput() {
    return this._allocatedResources;
  }

  // capacity - computed: false, optional: true, required: false
  private _capacity?: { [key: string]: string }; 
  public get capacity() {
    return this.getStringMapAttribute('capacity');
  }
  public set capacity(value: { [key: string]: string }) {
    this._capacity = value;
  }
  public resetCapacity() {
    this._capacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesStatusConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesStatusConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // current_volume_attributes_class_name - computed: false, optional: true, required: false
  private _currentVolumeAttributesClassName?: string; 
  public get currentVolumeAttributesClassName() {
    return this.getStringAttribute('current_volume_attributes_class_name');
  }
  public set currentVolumeAttributesClassName(value: string) {
    this._currentVolumeAttributesClassName = value;
  }
  public resetCurrentVolumeAttributesClassName() {
    this._currentVolumeAttributesClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentVolumeAttributesClassNameInput() {
    return this._currentVolumeAttributesClassName;
  }

  // modify_volume_status - computed: false, optional: true, required: false
  private _modifyVolumeStatus = new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesStatusModifyVolumeStatusOutputReference(this, "modify_volume_status");
  public get modifyVolumeStatus() {
    return this._modifyVolumeStatus;
  }
  public putModifyVolumeStatus(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesStatusModifyVolumeStatus) {
    this._modifyVolumeStatus.internalValue = value;
  }
  public resetModifyVolumeStatus() {
    this._modifyVolumeStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyVolumeStatusInput() {
    return this._modifyVolumeStatus.internalValue;
  }

  // phase - computed: false, optional: true, required: false
  private _phase?: string; 
  public get phase() {
    return this.getStringAttribute('phase');
  }
  public set phase(value: string) {
    this._phase = value;
  }
  public resetPhase() {
    this._phase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phaseInput() {
    return this._phase;
  }
}
export interface DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplates {
  /**
  * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#api_version DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#kind DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#metadata DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * spec defines the desired characteristics of a volume requested by a pod author. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#spec DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpec;
  /**
  * status represents the current information/status of a persistent volume claim. Read-only. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#status DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#status}
  */
  readonly status?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesStatus;
}

export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
    metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.metadata),
    spec: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecToTerraform(struct!.spec),
    status: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesStatusToTerraform(struct!.status),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplates | cdktf.IResolvable): any {
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
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.metadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    spec: {
      value: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpec",
    },
    status: {
      value: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesStatusToHclTerraform(struct!.status),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesStatus",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    if (this._status?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._kind = undefined;
      this._metadata = undefined;
      this._spec.internalValue = undefined;
      this._status.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._kind = value.kind;
      this._metadata = value.metadata;
      this._spec.internalValue = value.spec;
      this._status.internalValue = value.status;
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

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // status - computed: false, optional: true, required: false
  private _status = new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }
  public putStatus(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesStatus) {
    this._status.internalValue = value;
  }
  public resetStatus() {
    this._status.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status.internalValue;
  }
}

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplates[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesOutputReference {
    return new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#operator DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#values DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#match_expressions DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#match_labels DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigNamespaceSelectorToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigNamespaceSelectorToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigNamespaceSelectorMatchExpressionsList",
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

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigNamespaceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigNamespaceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigReloaderResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigReloaderResourcesClaimsToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigReloaderResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigReloaderResourcesClaimsToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigReloaderResourcesClaims | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigReloaderResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigReloaderResourcesClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigReloaderResourcesClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigReloaderResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigReloaderResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigReloaderResourcesClaimsOutputReference {
    return new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigReloaderResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigReloaderResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#claims DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#claims}
  */
  readonly claims?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigReloaderResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#limits DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#requests DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigReloaderResourcesToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigReloaderResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigReloaderResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigReloaderResourcesToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigReloaderResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigReloaderResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigReloaderResourcesClaimsList",
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

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigReloaderResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigReloaderResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigReloaderResources | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigReloaderResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigReloaderResourcesClaims[] | cdktf.IResolvable) {
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
export interface DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#operator DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#values DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigSelectorMatchExpressionsToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigSelectorMatchExpressionsToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigSelectorMatchExpressionsOutputReference {
    return new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#match_expressions DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#match_labels DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigSelectorToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigSelectorToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigSelectorMatchExpressionsList",
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

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecDnsConfigOptions {
  /**
  * Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#value DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecDnsConfigOptionsToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecDnsConfigOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecDnsConfigOptionsToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecDnsConfigOptions | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecDnsConfigOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecDnsConfigOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecDnsConfigOptions | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecDnsConfigOptionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecDnsConfigOptions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecDnsConfigOptionsOutputReference {
    return new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecDnsConfigOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecDnsConfig {
  /**
  * A list of DNS name server IP addresses. This will be appended to the base nameservers generated from DNSPolicy. Duplicated nameservers will be removed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#nameservers DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#nameservers}
  */
  readonly nameservers?: string[];
  /**
  * A list of DNS resolver options. This will be merged with the base options generated from DNSPolicy. Duplicated entries will be removed. Resolution options given in Options will override those that appear in the base DNSPolicy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#options DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#options}
  */
  readonly options?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecDnsConfigOptions[] | cdktf.IResolvable;
  /**
  * A list of DNS search domains for host-name lookup. This will be appended to the base search paths generated from DNSPolicy. Duplicated search paths will be removed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#searches DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#searches}
  */
  readonly searches?: string[];
}

export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecDnsConfigToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecDnsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nameservers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nameservers),
    options: cdktf.listMapper(dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecDnsConfigOptionsToTerraform, false)(struct!.options),
    searches: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.searches),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecDnsConfigToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecDnsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nameservers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nameservers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    options: {
      value: cdktf.listMapperHcl(dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecDnsConfigOptionsToHclTerraform, false)(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecDnsConfigOptionsList",
    },
    searches: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.searches),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecDnsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecDnsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nameservers !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameservers = this._nameservers;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    if (this._searches !== undefined) {
      hasAnyValues = true;
      internalValueResult.searches = this._searches;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecDnsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nameservers = undefined;
      this._options.internalValue = undefined;
      this._searches = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nameservers = value.nameservers;
      this._options.internalValue = value.options;
      this._searches = value.searches;
    }
  }

  // nameservers - computed: false, optional: true, required: false
  private _nameservers?: string[]; 
  public get nameservers() {
    return this.getListAttribute('nameservers');
  }
  public set nameservers(value: string[]) {
    this._nameservers = value;
  }
  public resetNameservers() {
    this._nameservers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameserversInput() {
    return this._nameservers;
  }

  // options - computed: false, optional: true, required: false
  private _options = new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecDnsConfigOptionsList(this, "options", false);
  public get options() {
    return this._options;
  }
  public putOptions(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecDnsConfigOptions[] | cdktf.IResolvable) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // searches - computed: false, optional: true, required: false
  private _searches?: string[]; 
  public get searches() {
    return this.getListAttribute('searches');
  }
  public set searches(value: string[]) {
    this._searches = value;
  }
  public resetSearches() {
    this._searches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchesInput() {
    return this._searches;
  }
}
export interface DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsClientConfigCaSecretRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#optional DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsClientConfigCaSecretRefToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsClientConfigCaSecretRef | cdktf.IResolvable): any {
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


export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsClientConfigCaSecretRefToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsClientConfigCaSecretRef | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsClientConfigCaSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsClientConfigCaSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsClientConfigCaSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsClientConfigCertSecretRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#optional DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsClientConfigCertSecretRefToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsClientConfigCertSecretRef | cdktf.IResolvable): any {
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


export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsClientConfigCertSecretRefToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsClientConfigCertSecretRef | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsClientConfigCertSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsClientConfigCertSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsClientConfigCertSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsClientConfigKeySecretRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#optional DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsClientConfigKeySecretRefToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsClientConfigKeySecretRef | cdktf.IResolvable): any {
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


export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsClientConfigKeySecretRefToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsClientConfigKeySecretRef | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsClientConfigKeySecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsClientConfigKeySecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsClientConfigKeySecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsClientConfig {
  /**
  * CAFile defines path to the pre-mounted file with CA mutually exclusive with CASecretRef
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#ca_file DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#ca_file}
  */
  readonly caFile?: string;
  /**
  * CA defines reference for secret with CA content under given key mutually exclusive with CAFile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#ca_secret_ref DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#ca_secret_ref}
  */
  readonly caSecretRef?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsClientConfigCaSecretRef;
  /**
  * CertFile defines path to the pre-mounted file with certificate mutually exclusive with CertSecretRef
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#cert_file DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#cert_file}
  */
  readonly certFile?: string;
  /**
  * CertSecretRef defines reference for secret with certificate content under given key mutually exclusive with CertFile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#cert_secret_ref DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#cert_secret_ref}
  */
  readonly certSecretRef?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsClientConfigCertSecretRef;
  /**
  * Cert defines reference for secret with CA content under given key mutually exclusive with CertFile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#insecure_skip_verify DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#insecure_skip_verify}
  */
  readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * KeyFile defines path to the pre-mounted file with certificate key mutually exclusive with KeySecretRef
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#key_file DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#key_file}
  */
  readonly keyFile?: string;
  /**
  * Key defines reference for secret with certificate key content under given key mutually exclusive with KeyFile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#key_secret_ref DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#key_secret_ref}
  */
  readonly keySecretRef?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsClientConfigKeySecretRef;
  /**
  * ServerName indicates a name of a server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#server_name DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#server_name}
  */
  readonly serverName?: string;
}

export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsClientConfigToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsClientConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_file: cdktf.stringToTerraform(struct!.caFile),
    ca_secret_ref: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsClientConfigCaSecretRefToTerraform(struct!.caSecretRef),
    cert_file: cdktf.stringToTerraform(struct!.certFile),
    cert_secret_ref: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsClientConfigCertSecretRefToTerraform(struct!.certSecretRef),
    insecure_skip_verify: cdktf.booleanToTerraform(struct!.insecureSkipVerify),
    key_file: cdktf.stringToTerraform(struct!.keyFile),
    key_secret_ref: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsClientConfigKeySecretRefToTerraform(struct!.keySecretRef),
    server_name: cdktf.stringToTerraform(struct!.serverName),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsClientConfigToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsClientConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_file: {
      value: cdktf.stringToHclTerraform(struct!.caFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_secret_ref: {
      value: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsClientConfigCaSecretRefToHclTerraform(struct!.caSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsClientConfigCaSecretRef",
    },
    cert_file: {
      value: cdktf.stringToHclTerraform(struct!.certFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_secret_ref: {
      value: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsClientConfigCertSecretRefToHclTerraform(struct!.certSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsClientConfigCertSecretRef",
    },
    insecure_skip_verify: {
      value: cdktf.booleanToHclTerraform(struct!.insecureSkipVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_file: {
      value: cdktf.stringToHclTerraform(struct!.keyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_secret_ref: {
      value: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsClientConfigKeySecretRefToHclTerraform(struct!.keySecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsClientConfigKeySecretRef",
    },
    server_name: {
      value: cdktf.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsClientConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsClientConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.caFile = this._caFile;
    }
    if (this._caSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.caSecretRef = this._caSecretRef?.internalValue;
    }
    if (this._certFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.certFile = this._certFile;
    }
    if (this._certSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certSecretRef = this._certSecretRef?.internalValue;
    }
    if (this._insecureSkipVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureSkipVerify = this._insecureSkipVerify;
    }
    if (this._keyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyFile = this._keyFile;
    }
    if (this._keySecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keySecretRef = this._keySecretRef?.internalValue;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsClientConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caFile = undefined;
      this._caSecretRef.internalValue = undefined;
      this._certFile = undefined;
      this._certSecretRef.internalValue = undefined;
      this._insecureSkipVerify = undefined;
      this._keyFile = undefined;
      this._keySecretRef.internalValue = undefined;
      this._serverName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caFile = value.caFile;
      this._caSecretRef.internalValue = value.caSecretRef;
      this._certFile = value.certFile;
      this._certSecretRef.internalValue = value.certSecretRef;
      this._insecureSkipVerify = value.insecureSkipVerify;
      this._keyFile = value.keyFile;
      this._keySecretRef.internalValue = value.keySecretRef;
      this._serverName = value.serverName;
    }
  }

  // ca_file - computed: false, optional: true, required: false
  private _caFile?: string; 
  public get caFile() {
    return this.getStringAttribute('ca_file');
  }
  public set caFile(value: string) {
    this._caFile = value;
  }
  public resetCaFile() {
    this._caFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caFileInput() {
    return this._caFile;
  }

  // ca_secret_ref - computed: false, optional: true, required: false
  private _caSecretRef = new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsClientConfigCaSecretRefOutputReference(this, "ca_secret_ref");
  public get caSecretRef() {
    return this._caSecretRef;
  }
  public putCaSecretRef(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsClientConfigCaSecretRef) {
    this._caSecretRef.internalValue = value;
  }
  public resetCaSecretRef() {
    this._caSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caSecretRefInput() {
    return this._caSecretRef.internalValue;
  }

  // cert_file - computed: false, optional: true, required: false
  private _certFile?: string; 
  public get certFile() {
    return this.getStringAttribute('cert_file');
  }
  public set certFile(value: string) {
    this._certFile = value;
  }
  public resetCertFile() {
    this._certFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certFileInput() {
    return this._certFile;
  }

  // cert_secret_ref - computed: false, optional: true, required: false
  private _certSecretRef = new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsClientConfigCertSecretRefOutputReference(this, "cert_secret_ref");
  public get certSecretRef() {
    return this._certSecretRef;
  }
  public putCertSecretRef(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsClientConfigCertSecretRef) {
    this._certSecretRef.internalValue = value;
  }
  public resetCertSecretRef() {
    this._certSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certSecretRefInput() {
    return this._certSecretRef.internalValue;
  }

  // insecure_skip_verify - computed: false, optional: true, required: false
  private _insecureSkipVerify?: boolean | cdktf.IResolvable; 
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }
  public set insecureSkipVerify(value: boolean | cdktf.IResolvable) {
    this._insecureSkipVerify = value;
  }
  public resetInsecureSkipVerify() {
    this._insecureSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSkipVerifyInput() {
    return this._insecureSkipVerify;
  }

  // key_file - computed: false, optional: true, required: false
  private _keyFile?: string; 
  public get keyFile() {
    return this.getStringAttribute('key_file');
  }
  public set keyFile(value: string) {
    this._keyFile = value;
  }
  public resetKeyFile() {
    this._keyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFileInput() {
    return this._keyFile;
  }

  // key_secret_ref - computed: false, optional: true, required: false
  private _keySecretRef = new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsClientConfigKeySecretRefOutputReference(this, "key_secret_ref");
  public get keySecretRef() {
    return this._keySecretRef;
  }
  public putKeySecretRef(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsClientConfigKeySecretRef) {
    this._keySecretRef.internalValue = value;
  }
  public resetKeySecretRef() {
    this._keySecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySecretRefInput() {
    return this._keySecretRef.internalValue;
  }

  // server_name - computed: false, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }
}
export interface DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsServerConfigCertSecretRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#optional DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsServerConfigCertSecretRefToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsServerConfigCertSecretRef | cdktf.IResolvable): any {
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


export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsServerConfigCertSecretRefToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsServerConfigCertSecretRef | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsServerConfigCertSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsServerConfigCertSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsServerConfigCertSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsServerConfigClientCaSecretRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#optional DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsServerConfigClientCaSecretRefToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsServerConfigClientCaSecretRef | cdktf.IResolvable): any {
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


export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsServerConfigClientCaSecretRefToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsServerConfigClientCaSecretRef | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsServerConfigClientCaSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsServerConfigClientCaSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsServerConfigClientCaSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsServerConfigKeySecretRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#optional DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsServerConfigKeySecretRefToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsServerConfigKeySecretRef | cdktf.IResolvable): any {
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


export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsServerConfigKeySecretRefToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsServerConfigKeySecretRef | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsServerConfigKeySecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsServerConfigKeySecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsServerConfigKeySecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsServerConfig {
  /**
  * CertFile defines path to the pre-mounted file with certificate mutually exclusive with CertSecretRef
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#cert_file DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#cert_file}
  */
  readonly certFile?: string;
  /**
  * CertSecretRef defines reference for secret with certificate content under given key mutually exclusive with CertFile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#cert_secret_ref DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#cert_secret_ref}
  */
  readonly certSecretRef?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsServerConfigCertSecretRef;
  /**
  * CipherSuites defines list of supported cipher suites for TLS versions up to TLS 1.2 https://golang.org/pkg/crypto/tls/#pkg-constants
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#cipher_suites DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#cipher_suites}
  */
  readonly cipherSuites?: string[];
  /**
  * Cert defines reference for secret with CA content under given key mutually exclusive with CertFile ClientAuthType defines server policy for client authentication If you want to enable client authentication (aka mTLS), you need to use RequireAndVerifyClientCert Note, mTLS is supported only at enterprise version of VictoriaMetrics components
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#client_auth_type DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#client_auth_type}
  */
  readonly clientAuthType?: string;
  /**
  * ClientCAFile defines path to the pre-mounted file with CA mutually exclusive with ClientCASecretRef
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#client_ca_file DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#client_ca_file}
  */
  readonly clientCaFile?: string;
  /**
  * ClientCASecretRef defines reference for secret with CA content under given key mutually exclusive with ClientCAFile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#client_ca_secret_ref DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#client_ca_secret_ref}
  */
  readonly clientCaSecretRef?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsServerConfigClientCaSecretRef;
  /**
  * CurvePreferences defines elliptic curves that will be used in an ECDHE handshake, in preference order. https://golang.org/pkg/crypto/tls/#CurveID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#curve_preferences DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#curve_preferences}
  */
  readonly curvePreferences?: string[];
  /**
  * KeyFile defines path to the pre-mounted file with certificate key mutually exclusive with KeySecretRef
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#key_file DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#key_file}
  */
  readonly keyFile?: string;
  /**
  * Key defines reference for secret with certificate key content under given key mutually exclusive with KeyFile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#key_secret_ref DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#key_secret_ref}
  */
  readonly keySecretRef?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsServerConfigKeySecretRef;
  /**
  * MaxVersion maximum TLS version that is acceptable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#max_version DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#max_version}
  */
  readonly maxVersion?: string;
  /**
  * MinVersion minimum TLS version that is acceptable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#min_version DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#min_version}
  */
  readonly minVersion?: string;
  /**
  * PreferServerCipherSuites controls whether the server selects the client's most preferred ciphersuite
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#prefer_server_cipher_suites DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#prefer_server_cipher_suites}
  */
  readonly preferServerCipherSuites?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsServerConfigToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsServerConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_file: cdktf.stringToTerraform(struct!.certFile),
    cert_secret_ref: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsServerConfigCertSecretRefToTerraform(struct!.certSecretRef),
    cipher_suites: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cipherSuites),
    client_auth_type: cdktf.stringToTerraform(struct!.clientAuthType),
    client_ca_file: cdktf.stringToTerraform(struct!.clientCaFile),
    client_ca_secret_ref: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsServerConfigClientCaSecretRefToTerraform(struct!.clientCaSecretRef),
    curve_preferences: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.curvePreferences),
    key_file: cdktf.stringToTerraform(struct!.keyFile),
    key_secret_ref: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsServerConfigKeySecretRefToTerraform(struct!.keySecretRef),
    max_version: cdktf.stringToTerraform(struct!.maxVersion),
    min_version: cdktf.stringToTerraform(struct!.minVersion),
    prefer_server_cipher_suites: cdktf.booleanToTerraform(struct!.preferServerCipherSuites),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsServerConfigToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsServerConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_file: {
      value: cdktf.stringToHclTerraform(struct!.certFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_secret_ref: {
      value: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsServerConfigCertSecretRefToHclTerraform(struct!.certSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsServerConfigCertSecretRef",
    },
    cipher_suites: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cipherSuites),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    client_auth_type: {
      value: cdktf.stringToHclTerraform(struct!.clientAuthType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_ca_file: {
      value: cdktf.stringToHclTerraform(struct!.clientCaFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_ca_secret_ref: {
      value: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsServerConfigClientCaSecretRefToHclTerraform(struct!.clientCaSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsServerConfigClientCaSecretRef",
    },
    curve_preferences: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.curvePreferences),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    key_file: {
      value: cdktf.stringToHclTerraform(struct!.keyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_secret_ref: {
      value: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsServerConfigKeySecretRefToHclTerraform(struct!.keySecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsServerConfigKeySecretRef",
    },
    max_version: {
      value: cdktf.stringToHclTerraform(struct!.maxVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_version: {
      value: cdktf.stringToHclTerraform(struct!.minVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefer_server_cipher_suites: {
      value: cdktf.booleanToHclTerraform(struct!.preferServerCipherSuites),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsServerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsServerConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.certFile = this._certFile;
    }
    if (this._certSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certSecretRef = this._certSecretRef?.internalValue;
    }
    if (this._cipherSuites !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipherSuites = this._cipherSuites;
    }
    if (this._clientAuthType !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientAuthType = this._clientAuthType;
    }
    if (this._clientCaFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCaFile = this._clientCaFile;
    }
    if (this._clientCaSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCaSecretRef = this._clientCaSecretRef?.internalValue;
    }
    if (this._curvePreferences !== undefined) {
      hasAnyValues = true;
      internalValueResult.curvePreferences = this._curvePreferences;
    }
    if (this._keyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyFile = this._keyFile;
    }
    if (this._keySecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keySecretRef = this._keySecretRef?.internalValue;
    }
    if (this._maxVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxVersion = this._maxVersion;
    }
    if (this._minVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minVersion = this._minVersion;
    }
    if (this._preferServerCipherSuites !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferServerCipherSuites = this._preferServerCipherSuites;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsServerConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certFile = undefined;
      this._certSecretRef.internalValue = undefined;
      this._cipherSuites = undefined;
      this._clientAuthType = undefined;
      this._clientCaFile = undefined;
      this._clientCaSecretRef.internalValue = undefined;
      this._curvePreferences = undefined;
      this._keyFile = undefined;
      this._keySecretRef.internalValue = undefined;
      this._maxVersion = undefined;
      this._minVersion = undefined;
      this._preferServerCipherSuites = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certFile = value.certFile;
      this._certSecretRef.internalValue = value.certSecretRef;
      this._cipherSuites = value.cipherSuites;
      this._clientAuthType = value.clientAuthType;
      this._clientCaFile = value.clientCaFile;
      this._clientCaSecretRef.internalValue = value.clientCaSecretRef;
      this._curvePreferences = value.curvePreferences;
      this._keyFile = value.keyFile;
      this._keySecretRef.internalValue = value.keySecretRef;
      this._maxVersion = value.maxVersion;
      this._minVersion = value.minVersion;
      this._preferServerCipherSuites = value.preferServerCipherSuites;
    }
  }

  // cert_file - computed: false, optional: true, required: false
  private _certFile?: string; 
  public get certFile() {
    return this.getStringAttribute('cert_file');
  }
  public set certFile(value: string) {
    this._certFile = value;
  }
  public resetCertFile() {
    this._certFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certFileInput() {
    return this._certFile;
  }

  // cert_secret_ref - computed: false, optional: true, required: false
  private _certSecretRef = new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsServerConfigCertSecretRefOutputReference(this, "cert_secret_ref");
  public get certSecretRef() {
    return this._certSecretRef;
  }
  public putCertSecretRef(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsServerConfigCertSecretRef) {
    this._certSecretRef.internalValue = value;
  }
  public resetCertSecretRef() {
    this._certSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certSecretRefInput() {
    return this._certSecretRef.internalValue;
  }

  // cipher_suites - computed: false, optional: true, required: false
  private _cipherSuites?: string[]; 
  public get cipherSuites() {
    return this.getListAttribute('cipher_suites');
  }
  public set cipherSuites(value: string[]) {
    this._cipherSuites = value;
  }
  public resetCipherSuites() {
    this._cipherSuites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherSuitesInput() {
    return this._cipherSuites;
  }

  // client_auth_type - computed: false, optional: true, required: false
  private _clientAuthType?: string; 
  public get clientAuthType() {
    return this.getStringAttribute('client_auth_type');
  }
  public set clientAuthType(value: string) {
    this._clientAuthType = value;
  }
  public resetClientAuthType() {
    this._clientAuthType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthTypeInput() {
    return this._clientAuthType;
  }

  // client_ca_file - computed: false, optional: true, required: false
  private _clientCaFile?: string; 
  public get clientCaFile() {
    return this.getStringAttribute('client_ca_file');
  }
  public set clientCaFile(value: string) {
    this._clientCaFile = value;
  }
  public resetClientCaFile() {
    this._clientCaFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCaFileInput() {
    return this._clientCaFile;
  }

  // client_ca_secret_ref - computed: false, optional: true, required: false
  private _clientCaSecretRef = new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsServerConfigClientCaSecretRefOutputReference(this, "client_ca_secret_ref");
  public get clientCaSecretRef() {
    return this._clientCaSecretRef;
  }
  public putClientCaSecretRef(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsServerConfigClientCaSecretRef) {
    this._clientCaSecretRef.internalValue = value;
  }
  public resetClientCaSecretRef() {
    this._clientCaSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCaSecretRefInput() {
    return this._clientCaSecretRef.internalValue;
  }

  // curve_preferences - computed: false, optional: true, required: false
  private _curvePreferences?: string[]; 
  public get curvePreferences() {
    return this.getListAttribute('curve_preferences');
  }
  public set curvePreferences(value: string[]) {
    this._curvePreferences = value;
  }
  public resetCurvePreferences() {
    this._curvePreferences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get curvePreferencesInput() {
    return this._curvePreferences;
  }

  // key_file - computed: false, optional: true, required: false
  private _keyFile?: string; 
  public get keyFile() {
    return this.getStringAttribute('key_file');
  }
  public set keyFile(value: string) {
    this._keyFile = value;
  }
  public resetKeyFile() {
    this._keyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFileInput() {
    return this._keyFile;
  }

  // key_secret_ref - computed: false, optional: true, required: false
  private _keySecretRef = new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsServerConfigKeySecretRefOutputReference(this, "key_secret_ref");
  public get keySecretRef() {
    return this._keySecretRef;
  }
  public putKeySecretRef(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsServerConfigKeySecretRef) {
    this._keySecretRef.internalValue = value;
  }
  public resetKeySecretRef() {
    this._keySecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySecretRefInput() {
    return this._keySecretRef.internalValue;
  }

  // max_version - computed: false, optional: true, required: false
  private _maxVersion?: string; 
  public get maxVersion() {
    return this.getStringAttribute('max_version');
  }
  public set maxVersion(value: string) {
    this._maxVersion = value;
  }
  public resetMaxVersion() {
    this._maxVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVersionInput() {
    return this._maxVersion;
  }

  // min_version - computed: false, optional: true, required: false
  private _minVersion?: string; 
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }
  public set minVersion(value: string) {
    this._minVersion = value;
  }
  public resetMinVersion() {
    this._minVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minVersionInput() {
    return this._minVersion;
  }

  // prefer_server_cipher_suites - computed: false, optional: true, required: false
  private _preferServerCipherSuites?: boolean | cdktf.IResolvable; 
  public get preferServerCipherSuites() {
    return this.getBooleanAttribute('prefer_server_cipher_suites');
  }
  public set preferServerCipherSuites(value: boolean | cdktf.IResolvable) {
    this._preferServerCipherSuites = value;
  }
  public resetPreferServerCipherSuites() {
    this._preferServerCipherSuites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferServerCipherSuitesInput() {
    return this._preferServerCipherSuites;
  }
}
export interface DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfig {
  /**
  * TLSClientConfig defines client TLS configuration for alertmanager
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#tls_client_config DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#tls_client_config}
  */
  readonly tlsClientConfig?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsClientConfig;
  /**
  * TLSServerConfig defines server TLS configuration for alertmanager
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#tls_server_config DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#tls_server_config}
  */
  readonly tlsServerConfig?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsServerConfig;
}

export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tls_client_config: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsClientConfigToTerraform(struct!.tlsClientConfig),
    tls_server_config: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsServerConfigToTerraform(struct!.tlsServerConfig),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tls_client_config: {
      value: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsClientConfigToHclTerraform(struct!.tlsClientConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsClientConfig",
    },
    tls_server_config: {
      value: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsServerConfigToHclTerraform(struct!.tlsServerConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsServerConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tlsClientConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsClientConfig = this._tlsClientConfig?.internalValue;
    }
    if (this._tlsServerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsServerConfig = this._tlsServerConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tlsClientConfig.internalValue = undefined;
      this._tlsServerConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tlsClientConfig.internalValue = value.tlsClientConfig;
      this._tlsServerConfig.internalValue = value.tlsServerConfig;
    }
  }

  // tls_client_config - computed: false, optional: true, required: false
  private _tlsClientConfig = new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsClientConfigOutputReference(this, "tls_client_config");
  public get tlsClientConfig() {
    return this._tlsClientConfig;
  }
  public putTlsClientConfig(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsClientConfig) {
    this._tlsClientConfig.internalValue = value;
  }
  public resetTlsClientConfig() {
    this._tlsClientConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsClientConfigInput() {
    return this._tlsClientConfig.internalValue;
  }

  // tls_server_config - computed: false, optional: true, required: false
  private _tlsServerConfig = new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsServerConfigOutputReference(this, "tls_server_config");
  public get tlsServerConfig() {
    return this._tlsServerConfig;
  }
  public putTlsServerConfig(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigTlsServerConfig) {
    this._tlsServerConfig.internalValue = value;
  }
  public resetTlsServerConfig() {
    this._tlsServerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsServerConfigInput() {
    return this._tlsServerConfig.internalValue;
  }
}
export interface DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecHostAliases {
  /**
  * Hostnames for the above IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#hostnames DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#hostnames}
  */
  readonly hostnames?: string[];
  /**
  * IP address of the host file entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#ip DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#ip}
  */
  readonly ip: string;
}

export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecHostAliasesToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecHostAliases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostnames: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hostnames),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecHostAliasesToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecHostAliases | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecHostAliasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecHostAliases | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecHostAliases | cdktf.IResolvable | undefined) {
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

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }
}

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecHostAliasesList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecHostAliases[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecHostAliasesOutputReference {
    return new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecHostAliasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecImage {
  /**
  * PullPolicy describes how to pull docker image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#pull_policy DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#pull_policy}
  */
  readonly pullPolicy?: string;
  /**
  * Repository contains name of docker image + it's repository if needed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#repository DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#repository}
  */
  readonly repository?: string;
  /**
  * Tag contains desired docker image version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#tag DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#tag}
  */
  readonly tag?: string;
}

export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecImageToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pull_policy: cdktf.stringToTerraform(struct!.pullPolicy),
    repository: cdktf.stringToTerraform(struct!.repository),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecImageToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pull_policy: {
      value: cdktf.stringToHclTerraform(struct!.pullPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository: {
      value: cdktf.stringToHclTerraform(struct!.repository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullPolicy = this._pullPolicy;
    }
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pullPolicy = undefined;
      this._repository = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pullPolicy = value.pullPolicy;
      this._repository = value.repository;
      this._tag = value.tag;
    }
  }

  // pull_policy - computed: false, optional: true, required: false
  private _pullPolicy?: string; 
  public get pullPolicy() {
    return this.getStringAttribute('pull_policy');
  }
  public set pullPolicy(value: string) {
    this._pullPolicy = value;
  }
  public resetPullPolicy() {
    this._pullPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullPolicyInput() {
    return this._pullPolicy;
  }

  // repository - computed: false, optional: true, required: false
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  public resetRepository() {
    this._repository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}
export interface DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecImagePullSecrets {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecImagePullSecretsToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecImagePullSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecImagePullSecretsToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecImagePullSecrets | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecImagePullSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecImagePullSecrets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecImagePullSecrets | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecImagePullSecretsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecImagePullSecrets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecImagePullSecretsOutputReference {
    return new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecImagePullSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecPodDisruptionBudget {
  /**
  * An eviction is allowed if at most 'maxUnavailable' pods selected by 'selector' are unavailable after the eviction, i.e. even in absence of the evicted pod. For example, one can prevent all voluntary evictions by specifying 0. This is a mutually exclusive setting with 'minAvailable'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#max_unavailable DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#max_unavailable}
  */
  readonly maxUnavailable?: string;
  /**
  * An eviction is allowed if at least 'minAvailable' pods selected by 'selector' will still be available after the eviction, i.e. even in the absence of the evicted pod. So for example you can prevent all voluntary evictions by specifying '100%'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#min_available DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#min_available}
  */
  readonly minAvailable?: string;
  /**
  * replaces default labels selector generated by operator it's useful when you need to create custom budget
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#selector_labels DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#selector_labels}
  */
  readonly selectorLabels?: { [key: string]: string };
}

export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecPodDisruptionBudgetToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecPodDisruptionBudget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_unavailable: cdktf.stringToTerraform(struct!.maxUnavailable),
    min_available: cdktf.stringToTerraform(struct!.minAvailable),
    selector_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.selectorLabels),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecPodDisruptionBudgetToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecPodDisruptionBudget | cdktf.IResolvable): any {
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
    selector_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.selectorLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecPodDisruptionBudgetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecPodDisruptionBudget | cdktf.IResolvable | undefined {
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
    if (this._selectorLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectorLabels = this._selectorLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecPodDisruptionBudget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxUnavailable = undefined;
      this._minAvailable = undefined;
      this._selectorLabels = undefined;
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
      this._selectorLabels = value.selectorLabels;
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

  // selector_labels - computed: false, optional: true, required: false
  private _selectorLabels?: { [key: string]: string }; 
  public get selectorLabels() {
    return this.getStringMapAttribute('selector_labels');
  }
  public set selectorLabels(value: { [key: string]: string }) {
    this._selectorLabels = value;
  }
  public resetSelectorLabels() {
    this._selectorLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorLabelsInput() {
    return this._selectorLabels;
  }
}
export interface DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecPodMetadata {
  /**
  * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#annotations DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Labels Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#labels DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecPodMetadataToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecPodMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecPodMetadataToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecPodMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecPodMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecPodMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecPodMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
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
export interface DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecReadinessGates {
  /**
  * ConditionType refers to a condition in the pod's condition list with matching type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#condition_type DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#condition_type}
  */
  readonly conditionType: string;
}

export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecReadinessGatesToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecReadinessGates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition_type: cdktf.stringToTerraform(struct!.conditionType),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecReadinessGatesToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecReadinessGates | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecReadinessGatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecReadinessGates | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecReadinessGates | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecReadinessGatesList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecReadinessGates[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecReadinessGatesOutputReference {
    return new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecReadinessGatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecResourcesClaimsToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecResourcesClaimsToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecResourcesClaims | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecResourcesClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecResourcesClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecResourcesClaimsOutputReference {
    return new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#claims DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#claims}
  */
  readonly claims?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#limits DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#requests DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecResourcesToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecResourcesToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecResourcesClaimsList",
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

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecResources | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecResourcesClaims[] | cdktf.IResolvable) {
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
export interface DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecServiceSpecMetadata {
  /**
  * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#annotations DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Labels Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#labels DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecServiceSpecMetadataToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecServiceSpecMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecServiceSpecMetadataToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecServiceSpecMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecServiceSpecMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecServiceSpecMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecServiceSpecMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
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
export interface DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecServiceSpec {
  /**
  * EmbeddedObjectMetadata defines objectMeta for additional service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#metadata DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#metadata}
  */
  readonly metadata?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecServiceSpecMetadata;
  /**
  * ServiceSpec describes the attributes that a user creates on a service. More info: https://kubernetes.io/docs/concepts/services-networking/service/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#spec DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#spec}
  */
  readonly spec: { [key: string]: string };
  /**
  * UseAsDefault applies changes from given service definition to the main object Service Changing from headless service to clusterIP or loadbalancer may break cross-component communication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#use_as_default DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#use_as_default}
  */
  readonly useAsDefault?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecServiceSpecToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecServiceSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecServiceSpecMetadataToTerraform(struct!.metadata),
    spec: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.spec),
    use_as_default: cdktf.booleanToTerraform(struct!.useAsDefault),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecServiceSpecToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecServiceSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecServiceSpecMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecServiceSpecMetadata",
    },
    spec: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.spec),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    use_as_default: {
      value: cdktf.booleanToHclTerraform(struct!.useAsDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecServiceSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecServiceSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._spec !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec;
    }
    if (this._useAsDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.useAsDefault = this._useAsDefault;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecServiceSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadata.internalValue = undefined;
      this._spec = undefined;
      this._useAsDefault = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadata.internalValue = value.metadata;
      this._spec = value.spec;
      this._useAsDefault = value.useAsDefault;
    }
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecServiceSpecMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecServiceSpecMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec?: { [key: string]: string }; 
  public get spec() {
    return this.getStringMapAttribute('spec');
  }
  public set spec(value: { [key: string]: string }) {
    this._spec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec;
  }

  // use_as_default - computed: false, optional: true, required: false
  private _useAsDefault?: boolean | cdktf.IResolvable; 
  public get useAsDefault() {
    return this.getBooleanAttribute('use_as_default');
  }
  public set useAsDefault(value: boolean | cdktf.IResolvable) {
    this._useAsDefault = value;
  }
  public resetUseAsDefault() {
    this._useAsDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useAsDefaultInput() {
    return this._useAsDefault;
  }
}
export interface DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageEmptyDir {
  /**
  * medium represents what type of storage medium should back this directory. The default is '' which means to use the node's default medium. Must be an empty string (default) or Memory. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#medium DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#medium}
  */
  readonly medium?: string;
  /**
  * sizeLimit is the total amount of local storage required for this EmptyDir volume. The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers in a pod. The default is nil which means that the limit is undefined. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#size_limit DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#size_limit}
  */
  readonly sizeLimit?: string;
}

export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageEmptyDirToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageEmptyDir | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    medium: cdktf.stringToTerraform(struct!.medium),
    size_limit: cdktf.stringToTerraform(struct!.sizeLimit),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageEmptyDirToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageEmptyDir | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    medium: {
      value: cdktf.stringToHclTerraform(struct!.medium),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size_limit: {
      value: cdktf.stringToHclTerraform(struct!.sizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageEmptyDirOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageEmptyDir | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._medium !== undefined) {
      hasAnyValues = true;
      internalValueResult.medium = this._medium;
    }
    if (this._sizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeLimit = this._sizeLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageEmptyDir | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._medium = undefined;
      this._sizeLimit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._medium = value.medium;
      this._sizeLimit = value.sizeLimit;
    }
  }

  // medium - computed: false, optional: true, required: false
  private _medium?: string; 
  public get medium() {
    return this.getStringAttribute('medium');
  }
  public set medium(value: string) {
    this._medium = value;
  }
  public resetMedium() {
    this._medium = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediumInput() {
    return this._medium;
  }

  // size_limit - computed: false, optional: true, required: false
  private _sizeLimit?: string; 
  public get sizeLimit() {
    return this.getStringAttribute('size_limit');
  }
  public set sizeLimit(value: string) {
    this._sizeLimit = value;
  }
  public resetSizeLimit() {
    this._sizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeLimitInput() {
    return this._sizeLimit;
  }
}
export interface DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateMetadata {
  /**
  * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#annotations DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Labels Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#labels DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateMetadataToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateMetadataToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
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
export interface DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecDataSource {
  /**
  * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#api_group DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Kind is the type of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#kind DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecDataSourceToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecDataSourceToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_group: {
      value: cdktf.stringToHclTerraform(struct!.apiGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecDataSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecDataSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroup = this._apiGroup;
    }
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecDataSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiGroup = undefined;
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
      this._apiGroup = value.apiGroup;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // api_group - computed: false, optional: true, required: false
  private _apiGroup?: string; 
  public get apiGroup() {
    return this.getStringAttribute('api_group');
  }
  public set apiGroup(value: string) {
    this._apiGroup = value;
  }
  public resetApiGroup() {
    this._apiGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupInput() {
    return this._apiGroup;
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
export interface DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecDataSourceRef {
  /**
  * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#api_group DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Kind is the type of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#kind DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the namespace of resource being referenced Note that when a namespace is specified, a gateway.networking.k8s.io/ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details. (Alpha) This field requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#namespace DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecDataSourceRefToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecDataSourceRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecDataSourceRefToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecDataSourceRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_group: {
      value: cdktf.stringToHclTerraform(struct!.apiGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecDataSourceRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecDataSourceRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroup = this._apiGroup;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecDataSourceRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiGroup = undefined;
      this._kind = undefined;
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
      this._apiGroup = value.apiGroup;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // api_group - computed: false, optional: true, required: false
  private _apiGroup?: string; 
  public get apiGroup() {
    return this.getStringAttribute('api_group');
  }
  public set apiGroup(value: string) {
    this._apiGroup = value;
  }
  public resetApiGroup() {
    this._apiGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupInput() {
    return this._apiGroup;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecResources {
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#limits DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#requests DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecResourcesToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecResourcesToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecResources | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecResources | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#operator DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#values DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecSelectorMatchExpressionsToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecSelectorMatchExpressionsToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecSelectorMatchExpressionsOutputReference {
    return new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#match_expressions DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#match_labels DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecSelectorToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecSelectorToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecSelectorMatchExpressionsList",
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

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpec {
  /**
  * accessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#access_modes DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#access_modes}
  */
  readonly accessModes?: string[];
  /**
  * dataSource field can be used to specify either: * An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot) * An existing PVC (PersistentVolumeClaim) If the provisioner or an external controller can support the specified data source, it will create a new volume based on the contents of the specified data source. When the AnyVolumeDataSource feature gate is enabled, dataSource contents will be copied to dataSourceRef, and dataSourceRef contents will be copied to dataSource when dataSourceRef.namespace is not specified. If the namespace is specified, then dataSourceRef will not be copied to dataSource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#data_source DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#data_source}
  */
  readonly dataSource?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecDataSource;
  /**
  * dataSourceRef specifies the object from which to populate the volume with data, if a non-empty volume is desired. This may be any object from a non-empty API group (non core object) or a PersistentVolumeClaim object. When this field is specified, volume binding will only succeed if the type of the specified object matches some installed volume populator or dynamic provisioner. This field will replace the functionality of the dataSource field and as such if both fields are non-empty, they must have the same value. For backwards compatibility, when namespace isn't specified in dataSourceRef, both fields (dataSource and dataSourceRef) will be set to the same value automatically if one of them is empty and the other is non-empty. When namespace is specified in dataSourceRef, dataSource isn't set to the same value and must be empty. There are three important differences between dataSource and dataSourceRef: * While dataSource only allows two specific types of objects, dataSourceRef allows any non-core object, as well as PersistentVolumeClaim objects. * While dataSource ignores disallowed values (dropping them), dataSourceRef preserves all values, and generates an error if a disallowed value is specified. * While dataSource only allows local objects, dataSourceRef allows objects in any namespaces. (Beta) Using this field requires the AnyVolumeDataSource feature gate to be enabled. (Alpha) Using the namespace field of dataSourceRef requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#data_source_ref DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#data_source_ref}
  */
  readonly dataSourceRef?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecDataSourceRef;
  /**
  * resources represents the minimum resources the volume should have. If RecoverVolumeExpansionFailure feature is enabled users are allowed to specify resource requirements that are lower than previous value but must still be higher than capacity recorded in the status field of the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#resources DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#resources}
  */
  readonly resources?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecResources;
  /**
  * selector is a label query over volumes to consider for binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#selector DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#selector}
  */
  readonly selector?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecSelector;
  /**
  * storageClassName is the name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#storage_class_name DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#storage_class_name}
  */
  readonly storageClassName?: string;
  /**
  * volumeAttributesClassName may be used to set the VolumeAttributesClass used by this claim. If specified, the CSI driver will create or update the volume with the attributes defined in the corresponding VolumeAttributesClass. This has a different purpose than storageClassName, it can be changed after the claim is created. An empty string value means that no VolumeAttributesClass will be applied to the claim but it's not allowed to reset this field to empty string once it is set. If unspecified and the PersistentVolumeClaim is unbound, the default VolumeAttributesClass will be set by the persistentvolume controller if it exists. If the resource referred to by volumeAttributesClass does not exist, this PersistentVolumeClaim will be set to a Pending state, as reflected by the modifyVolumeStatus field, until such as a resource exists. More info: https://kubernetes.io/docs/concepts/storage/volume-attributes-classes/ (Alpha) Using this field requires the VolumeAttributesClass feature gate to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#volume_attributes_class_name DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#volume_attributes_class_name}
  */
  readonly volumeAttributesClassName?: string;
  /**
  * volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#volume_mode DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#volume_mode}
  */
  readonly volumeMode?: string;
  /**
  * volumeName is the binding reference to the PersistentVolume backing this claim.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#volume_name DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#volume_name}
  */
  readonly volumeName?: string;
}

export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_modes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessModes),
    data_source: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecDataSourceToTerraform(struct!.dataSource),
    data_source_ref: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecDataSourceRefToTerraform(struct!.dataSourceRef),
    resources: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecResourcesToTerraform(struct!.resources),
    selector: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecSelectorToTerraform(struct!.selector),
    storage_class_name: cdktf.stringToTerraform(struct!.storageClassName),
    volume_attributes_class_name: cdktf.stringToTerraform(struct!.volumeAttributesClassName),
    volume_mode: cdktf.stringToTerraform(struct!.volumeMode),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_modes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessModes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    data_source: {
      value: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecDataSourceToHclTerraform(struct!.dataSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecDataSource",
    },
    data_source_ref: {
      value: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecDataSourceRefToHclTerraform(struct!.dataSourceRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecDataSourceRef",
    },
    resources: {
      value: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecResources",
    },
    selector: {
      value: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecSelector",
    },
    storage_class_name: {
      value: cdktf.stringToHclTerraform(struct!.storageClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_attributes_class_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeAttributesClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_mode: {
      value: cdktf.stringToHclTerraform(struct!.volumeMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessModes !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessModes = this._accessModes;
    }
    if (this._dataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource?.internalValue;
    }
    if (this._dataSourceRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceRef = this._dataSourceRef?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    if (this._storageClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClassName = this._storageClassName;
    }
    if (this._volumeAttributesClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeAttributesClassName = this._volumeAttributesClassName;
    }
    if (this._volumeMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMode = this._volumeMode;
    }
    if (this._volumeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeName = this._volumeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessModes = undefined;
      this._dataSource.internalValue = undefined;
      this._dataSourceRef.internalValue = undefined;
      this._resources.internalValue = undefined;
      this._selector.internalValue = undefined;
      this._storageClassName = undefined;
      this._volumeAttributesClassName = undefined;
      this._volumeMode = undefined;
      this._volumeName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessModes = value.accessModes;
      this._dataSource.internalValue = value.dataSource;
      this._dataSourceRef.internalValue = value.dataSourceRef;
      this._resources.internalValue = value.resources;
      this._selector.internalValue = value.selector;
      this._storageClassName = value.storageClassName;
      this._volumeAttributesClassName = value.volumeAttributesClassName;
      this._volumeMode = value.volumeMode;
      this._volumeName = value.volumeName;
    }
  }

  // access_modes - computed: false, optional: true, required: false
  private _accessModes?: string[]; 
  public get accessModes() {
    return this.getListAttribute('access_modes');
  }
  public set accessModes(value: string[]) {
    this._accessModes = value;
  }
  public resetAccessModes() {
    this._accessModes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessModesInput() {
    return this._accessModes;
  }

  // data_source - computed: false, optional: true, required: false
  private _dataSource = new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecDataSourceOutputReference(this, "data_source");
  public get dataSource() {
    return this._dataSource;
  }
  public putDataSource(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecDataSource) {
    this._dataSource.internalValue = value;
  }
  public resetDataSource() {
    this._dataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource.internalValue;
  }

  // data_source_ref - computed: false, optional: true, required: false
  private _dataSourceRef = new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecDataSourceRefOutputReference(this, "data_source_ref");
  public get dataSourceRef() {
    return this._dataSourceRef;
  }
  public putDataSourceRef(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecDataSourceRef) {
    this._dataSourceRef.internalValue = value;
  }
  public resetDataSourceRef() {
    this._dataSourceRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceRefInput() {
    return this._dataSourceRef.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }

  // storage_class_name - computed: false, optional: true, required: false
  private _storageClassName?: string; 
  public get storageClassName() {
    return this.getStringAttribute('storage_class_name');
  }
  public set storageClassName(value: string) {
    this._storageClassName = value;
  }
  public resetStorageClassName() {
    this._storageClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassNameInput() {
    return this._storageClassName;
  }

  // volume_attributes_class_name - computed: false, optional: true, required: false
  private _volumeAttributesClassName?: string; 
  public get volumeAttributesClassName() {
    return this.getStringAttribute('volume_attributes_class_name');
  }
  public set volumeAttributesClassName(value: string) {
    this._volumeAttributesClassName = value;
  }
  public resetVolumeAttributesClassName() {
    this._volumeAttributesClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeAttributesClassNameInput() {
    return this._volumeAttributesClassName;
  }

  // volume_mode - computed: false, optional: true, required: false
  private _volumeMode?: string; 
  public get volumeMode() {
    return this.getStringAttribute('volume_mode');
  }
  public set volumeMode(value: string) {
    this._volumeMode = value;
  }
  public resetVolumeMode() {
    this._volumeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeModeInput() {
    return this._volumeMode;
  }

  // volume_name - computed: false, optional: true, required: false
  private _volumeName?: string; 
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
  public set volumeName(value: string) {
    this._volumeName = value;
  }
  public resetVolumeName() {
    this._volumeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNameInput() {
    return this._volumeName;
  }
}
export interface DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateStatusConditions {
  /**
  * lastProbeTime is the time we probed the condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#last_probe_time DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#last_probe_time}
  */
  readonly lastProbeTime?: string;
  /**
  * lastTransitionTime is the time the condition transitioned from one status to another.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#last_transition_time DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#last_transition_time}
  */
  readonly lastTransitionTime?: string;
  /**
  * message is the human-readable message indicating details about last transition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#message DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#message}
  */
  readonly message?: string;
  /**
  * reason is a unique, this should be a short, machine understandable string that gives the reason for condition's last transition. If it reports 'Resizing' that means the underlying persistent volume is being resized.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#reason DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#reason}
  */
  readonly reason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#status DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#status}
  */
  readonly status: string;
  /**
  * PersistentVolumeClaimConditionType is a valid value of PersistentVolumeClaimCondition.Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#type DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateStatusConditionsToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateStatusConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    last_probe_time: cdktf.stringToTerraform(struct!.lastProbeTime),
    last_transition_time: cdktf.stringToTerraform(struct!.lastTransitionTime),
    message: cdktf.stringToTerraform(struct!.message),
    reason: cdktf.stringToTerraform(struct!.reason),
    status: cdktf.stringToTerraform(struct!.status),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateStatusConditionsToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateStatusConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    last_probe_time: {
      value: cdktf.stringToHclTerraform(struct!.lastProbeTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_transition_time: {
      value: cdktf.stringToHclTerraform(struct!.lastTransitionTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reason: {
      value: cdktf.stringToHclTerraform(struct!.reason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
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

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateStatusConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateStatusConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lastProbeTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastProbeTime = this._lastProbeTime;
    }
    if (this._lastTransitionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastTransitionTime = this._lastTransitionTime;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateStatusConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lastProbeTime = undefined;
      this._lastTransitionTime = undefined;
      this._message = undefined;
      this._reason = undefined;
      this._status = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lastProbeTime = value.lastProbeTime;
      this._lastTransitionTime = value.lastTransitionTime;
      this._message = value.message;
      this._reason = value.reason;
      this._status = value.status;
      this._type = value.type;
    }
  }

  // last_probe_time - computed: false, optional: true, required: false
  private _lastProbeTime?: string; 
  public get lastProbeTime() {
    return this.getStringAttribute('last_probe_time');
  }
  public set lastProbeTime(value: string) {
    this._lastProbeTime = value;
  }
  public resetLastProbeTime() {
    this._lastProbeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastProbeTimeInput() {
    return this._lastProbeTime;
  }

  // last_transition_time - computed: false, optional: true, required: false
  private _lastTransitionTime?: string; 
  public get lastTransitionTime() {
    return this.getStringAttribute('last_transition_time');
  }
  public set lastTransitionTime(value: string) {
    this._lastTransitionTime = value;
  }
  public resetLastTransitionTime() {
    this._lastTransitionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastTransitionTimeInput() {
    return this._lastTransitionTime;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // reason - computed: false, optional: true, required: false
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
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

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateStatusConditionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateStatusConditions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateStatusConditionsOutputReference {
    return new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateStatusConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateStatusModifyVolumeStatus {
  /**
  * status is the status of the ControllerModifyVolume operation. It can be in any of following states: - Pending Pending indicates that the PersistentVolumeClaim cannot be modified due to unmet requirements, such as the specified VolumeAttributesClass not existing. - InProgress InProgress indicates that the volume is being modified. - Infeasible Infeasible indicates that the request has been rejected as invalid by the CSI driver. To resolve the error, a valid VolumeAttributesClass needs to be specified. Note: New statuses can be added in the future. Consumers should check for unknown statuses and fail appropriately.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#status DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#status}
  */
  readonly status: string;
  /**
  * targetVolumeAttributesClassName is the name of the VolumeAttributesClass the PVC currently being reconciled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#target_volume_attributes_class_name DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#target_volume_attributes_class_name}
  */
  readonly targetVolumeAttributesClassName?: string;
}

export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateStatusModifyVolumeStatusToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateStatusModifyVolumeStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: cdktf.stringToTerraform(struct!.status),
    target_volume_attributes_class_name: cdktf.stringToTerraform(struct!.targetVolumeAttributesClassName),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateStatusModifyVolumeStatusToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateStatusModifyVolumeStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_volume_attributes_class_name: {
      value: cdktf.stringToHclTerraform(struct!.targetVolumeAttributesClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateStatusModifyVolumeStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateStatusModifyVolumeStatus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._targetVolumeAttributesClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetVolumeAttributesClassName = this._targetVolumeAttributesClassName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateStatusModifyVolumeStatus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._status = undefined;
      this._targetVolumeAttributesClassName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._status = value.status;
      this._targetVolumeAttributesClassName = value.targetVolumeAttributesClassName;
    }
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // target_volume_attributes_class_name - computed: false, optional: true, required: false
  private _targetVolumeAttributesClassName?: string; 
  public get targetVolumeAttributesClassName() {
    return this.getStringAttribute('target_volume_attributes_class_name');
  }
  public set targetVolumeAttributesClassName(value: string) {
    this._targetVolumeAttributesClassName = value;
  }
  public resetTargetVolumeAttributesClassName() {
    this._targetVolumeAttributesClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetVolumeAttributesClassNameInput() {
    return this._targetVolumeAttributesClassName;
  }
}
export interface DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateStatus {
  /**
  * accessModes contains the actual access modes the volume backing the PVC has. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#access_modes DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#access_modes}
  */
  readonly accessModes?: string[];
  /**
  * allocatedResourceStatuses stores status of resource being resized for the given PVC. Key names follow standard Kubernetes label syntax. Valid values are either: * Un-prefixed keys: - storage - the capacity of the volume. * Custom resources must use implementation-defined prefixed names such as 'example.com/my-custom-resource' Apart from above values - keys that are unprefixed or have kubernetes.io prefix are considered reserved and hence may not be used. ClaimResourceStatus can be in any of following states: - ControllerResizeInProgress: State set when resize controller starts resizing the volume in control-plane. - ControllerResizeFailed: State set when resize has failed in resize controller with a terminal error. - NodeResizePending: State set when resize controller has finished resizing the volume but further resizing of volume is needed on the node. - NodeResizeInProgress: State set when kubelet starts resizing the volume. - NodeResizeFailed: State set when resizing has failed in kubelet with a terminal error. Transient errors don't set NodeResizeFailed. For example: if expanding a PVC for more capacity - this field can be one of the following states: - pvc.status.allocatedResourceStatus['storage'] = 'ControllerResizeInProgress' - pvc.status.allocatedResourceStatus['storage'] = 'ControllerResizeFailed' - pvc.status.allocatedResourceStatus['storage'] = 'NodeResizePending' - pvc.status.allocatedResourceStatus['storage'] = 'NodeResizeInProgress' - pvc.status.allocatedResourceStatus['storage'] = 'NodeResizeFailed' When this field is not set, it means that no resize operation is in progress for the given PVC. A controller that receives PVC update with previously unknown resourceName or ClaimResourceStatus should ignore the update for the purpose it was designed. For example - a controller that only is responsible for resizing capacity of the volume, should ignore PVC updates that change other valid resources associated with PVC. This is an alpha field and requires enabling RecoverVolumeExpansionFailure feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#allocated_resource_statuses DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#allocated_resource_statuses}
  */
  readonly allocatedResourceStatuses?: { [key: string]: string };
  /**
  * allocatedResources tracks the resources allocated to a PVC including its capacity. Key names follow standard Kubernetes label syntax. Valid values are either: * Un-prefixed keys: - storage - the capacity of the volume. * Custom resources must use implementation-defined prefixed names such as 'example.com/my-custom-resource' Apart from above values - keys that are unprefixed or have kubernetes.io prefix are considered reserved and hence may not be used. Capacity reported here may be larger than the actual capacity when a volume expansion operation is requested. For storage quota, the larger value from allocatedResources and PVC.spec.resources is used. If allocatedResources is not set, PVC.spec.resources alone is used for quota calculation. If a volume expansion capacity request is lowered, allocatedResources is only lowered if there are no expansion operations in progress and if the actual volume capacity is equal or lower than the requested capacity. A controller that receives PVC update with previously unknown resourceName should ignore the update for the purpose it was designed. For example - a controller that only is responsible for resizing capacity of the volume, should ignore PVC updates that change other valid resources associated with PVC. This is an alpha field and requires enabling RecoverVolumeExpansionFailure feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#allocated_resources DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#allocated_resources}
  */
  readonly allocatedResources?: { [key: string]: string };
  /**
  * capacity represents the actual resources of the underlying volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#capacity DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#capacity}
  */
  readonly capacity?: { [key: string]: string };
  /**
  * conditions is the current Condition of persistent volume claim. If underlying persistent volume is being resized then the Condition will be set to 'Resizing'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#conditions DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#conditions}
  */
  readonly conditions?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateStatusConditions[] | cdktf.IResolvable;
  /**
  * currentVolumeAttributesClassName is the current name of the VolumeAttributesClass the PVC is using. When unset, there is no VolumeAttributeClass applied to this PersistentVolumeClaim This is an alpha field and requires enabling VolumeAttributesClass feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#current_volume_attributes_class_name DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#current_volume_attributes_class_name}
  */
  readonly currentVolumeAttributesClassName?: string;
  /**
  * ModifyVolumeStatus represents the status object of ControllerModifyVolume operation. When this is unset, there is no ModifyVolume operation being attempted. This is an alpha field and requires enabling VolumeAttributesClass feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#modify_volume_status DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#modify_volume_status}
  */
  readonly modifyVolumeStatus?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateStatusModifyVolumeStatus;
  /**
  * phase represents the current phase of PersistentVolumeClaim.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#phase DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#phase}
  */
  readonly phase?: string;
}

export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateStatusToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_modes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessModes),
    allocated_resource_statuses: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.allocatedResourceStatuses),
    allocated_resources: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.allocatedResources),
    capacity: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.capacity),
    conditions: cdktf.listMapper(dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateStatusConditionsToTerraform, false)(struct!.conditions),
    current_volume_attributes_class_name: cdktf.stringToTerraform(struct!.currentVolumeAttributesClassName),
    modify_volume_status: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateStatusModifyVolumeStatusToTerraform(struct!.modifyVolumeStatus),
    phase: cdktf.stringToTerraform(struct!.phase),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateStatusToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_modes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessModes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allocated_resource_statuses: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.allocatedResourceStatuses),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    allocated_resources: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.allocatedResources),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    capacity: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.capacity),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    conditions: {
      value: cdktf.listMapperHcl(dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateStatusConditionsToHclTerraform, false)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateStatusConditionsList",
    },
    current_volume_attributes_class_name: {
      value: cdktf.stringToHclTerraform(struct!.currentVolumeAttributesClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    modify_volume_status: {
      value: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateStatusModifyVolumeStatusToHclTerraform(struct!.modifyVolumeStatus),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateStatusModifyVolumeStatus",
    },
    phase: {
      value: cdktf.stringToHclTerraform(struct!.phase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateStatus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessModes !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessModes = this._accessModes;
    }
    if (this._allocatedResourceStatuses !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocatedResourceStatuses = this._allocatedResourceStatuses;
    }
    if (this._allocatedResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocatedResources = this._allocatedResources;
    }
    if (this._capacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacity = this._capacity;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    if (this._currentVolumeAttributesClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentVolumeAttributesClassName = this._currentVolumeAttributesClassName;
    }
    if (this._modifyVolumeStatus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modifyVolumeStatus = this._modifyVolumeStatus?.internalValue;
    }
    if (this._phase !== undefined) {
      hasAnyValues = true;
      internalValueResult.phase = this._phase;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateStatus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessModes = undefined;
      this._allocatedResourceStatuses = undefined;
      this._allocatedResources = undefined;
      this._capacity = undefined;
      this._conditions.internalValue = undefined;
      this._currentVolumeAttributesClassName = undefined;
      this._modifyVolumeStatus.internalValue = undefined;
      this._phase = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessModes = value.accessModes;
      this._allocatedResourceStatuses = value.allocatedResourceStatuses;
      this._allocatedResources = value.allocatedResources;
      this._capacity = value.capacity;
      this._conditions.internalValue = value.conditions;
      this._currentVolumeAttributesClassName = value.currentVolumeAttributesClassName;
      this._modifyVolumeStatus.internalValue = value.modifyVolumeStatus;
      this._phase = value.phase;
    }
  }

  // access_modes - computed: false, optional: true, required: false
  private _accessModes?: string[]; 
  public get accessModes() {
    return this.getListAttribute('access_modes');
  }
  public set accessModes(value: string[]) {
    this._accessModes = value;
  }
  public resetAccessModes() {
    this._accessModes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessModesInput() {
    return this._accessModes;
  }

  // allocated_resource_statuses - computed: false, optional: true, required: false
  private _allocatedResourceStatuses?: { [key: string]: string }; 
  public get allocatedResourceStatuses() {
    return this.getStringMapAttribute('allocated_resource_statuses');
  }
  public set allocatedResourceStatuses(value: { [key: string]: string }) {
    this._allocatedResourceStatuses = value;
  }
  public resetAllocatedResourceStatuses() {
    this._allocatedResourceStatuses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocatedResourceStatusesInput() {
    return this._allocatedResourceStatuses;
  }

  // allocated_resources - computed: false, optional: true, required: false
  private _allocatedResources?: { [key: string]: string }; 
  public get allocatedResources() {
    return this.getStringMapAttribute('allocated_resources');
  }
  public set allocatedResources(value: { [key: string]: string }) {
    this._allocatedResources = value;
  }
  public resetAllocatedResources() {
    this._allocatedResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocatedResourcesInput() {
    return this._allocatedResources;
  }

  // capacity - computed: false, optional: true, required: false
  private _capacity?: { [key: string]: string }; 
  public get capacity() {
    return this.getStringMapAttribute('capacity');
  }
  public set capacity(value: { [key: string]: string }) {
    this._capacity = value;
  }
  public resetCapacity() {
    this._capacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateStatusConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateStatusConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // current_volume_attributes_class_name - computed: false, optional: true, required: false
  private _currentVolumeAttributesClassName?: string; 
  public get currentVolumeAttributesClassName() {
    return this.getStringAttribute('current_volume_attributes_class_name');
  }
  public set currentVolumeAttributesClassName(value: string) {
    this._currentVolumeAttributesClassName = value;
  }
  public resetCurrentVolumeAttributesClassName() {
    this._currentVolumeAttributesClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentVolumeAttributesClassNameInput() {
    return this._currentVolumeAttributesClassName;
  }

  // modify_volume_status - computed: false, optional: true, required: false
  private _modifyVolumeStatus = new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateStatusModifyVolumeStatusOutputReference(this, "modify_volume_status");
  public get modifyVolumeStatus() {
    return this._modifyVolumeStatus;
  }
  public putModifyVolumeStatus(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateStatusModifyVolumeStatus) {
    this._modifyVolumeStatus.internalValue = value;
  }
  public resetModifyVolumeStatus() {
    this._modifyVolumeStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyVolumeStatusInput() {
    return this._modifyVolumeStatus.internalValue;
  }

  // phase - computed: false, optional: true, required: false
  private _phase?: string; 
  public get phase() {
    return this.getStringAttribute('phase');
  }
  public set phase(value: string) {
    this._phase = value;
  }
  public resetPhase() {
    this._phase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phaseInput() {
    return this._phase;
  }
}
export interface DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplate {
  /**
  * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#api_version DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#kind DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * EmbeddedMetadata contains metadata relevant to an EmbeddedResource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#metadata DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#metadata}
  */
  readonly metadata?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateMetadata;
  /**
  * Spec defines the desired characteristics of a volume requested by a pod author. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#spec DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpec;
  /**
  * Status represents the current information/status of a persistent volume claim. Read-only. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#status DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#status}
  */
  readonly status?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateStatus;
}

export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
    metadata: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateMetadataToTerraform(struct!.metadata),
    spec: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecToTerraform(struct!.spec),
    status: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateStatusToTerraform(struct!.status),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplate | cdktf.IResolvable): any {
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
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateMetadata",
    },
    spec: {
      value: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpec",
    },
    status: {
      value: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateStatusToHclTerraform(struct!.status),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateStatus",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    if (this._status?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._kind = undefined;
      this._metadata.internalValue = undefined;
      this._spec.internalValue = undefined;
      this._status.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._kind = value.kind;
      this._metadata.internalValue = value.metadata;
      this._spec.internalValue = value.spec;
      this._status.internalValue = value.status;
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

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateMetadata) {
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
  private _spec = new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // status - computed: false, optional: true, required: false
  private _status = new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }
  public putStatus(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateStatus) {
    this._status.internalValue = value;
  }
  public resetStatus() {
    this._status.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status.internalValue;
  }
}
export interface DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorage {
  /**
  * Deprecated: subPath usage will be disabled by default in a future release, this option will become unnecessary. DisableMountSubPath allows to remove any subPath usage in volume mounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#disable_mount_sub_path DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#disable_mount_sub_path}
  */
  readonly disableMountSubPath?: boolean | cdktf.IResolvable;
  /**
  * EmptyDirVolumeSource to be used by the Prometheus StatefulSets. If specified, used in place of any volumeClaimTemplate. More info: https://kubernetes.io/docs/concepts/storage/volumes/#emptydir
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#empty_dir DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#empty_dir}
  */
  readonly emptyDir?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageEmptyDir;
  /**
  * A PVC spec to be used by the VMAlertManager StatefulSets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#volume_claim_template DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#volume_claim_template}
  */
  readonly volumeClaimTemplate?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplate;
}

export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_mount_sub_path: cdktf.booleanToTerraform(struct!.disableMountSubPath),
    empty_dir: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageEmptyDirToTerraform(struct!.emptyDir),
    volume_claim_template: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateToTerraform(struct!.volumeClaimTemplate),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_mount_sub_path: {
      value: cdktf.booleanToHclTerraform(struct!.disableMountSubPath),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    empty_dir: {
      value: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageEmptyDirToHclTerraform(struct!.emptyDir),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageEmptyDir",
    },
    volume_claim_template: {
      value: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateToHclTerraform(struct!.volumeClaimTemplate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableMountSubPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableMountSubPath = this._disableMountSubPath;
    }
    if (this._emptyDir?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.emptyDir = this._emptyDir?.internalValue;
    }
    if (this._volumeClaimTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeClaimTemplate = this._volumeClaimTemplate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableMountSubPath = undefined;
      this._emptyDir.internalValue = undefined;
      this._volumeClaimTemplate.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableMountSubPath = value.disableMountSubPath;
      this._emptyDir.internalValue = value.emptyDir;
      this._volumeClaimTemplate.internalValue = value.volumeClaimTemplate;
    }
  }

  // disable_mount_sub_path - computed: false, optional: true, required: false
  private _disableMountSubPath?: boolean | cdktf.IResolvable; 
  public get disableMountSubPath() {
    return this.getBooleanAttribute('disable_mount_sub_path');
  }
  public set disableMountSubPath(value: boolean | cdktf.IResolvable) {
    this._disableMountSubPath = value;
  }
  public resetDisableMountSubPath() {
    this._disableMountSubPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableMountSubPathInput() {
    return this._disableMountSubPath;
  }

  // empty_dir - computed: false, optional: true, required: false
  private _emptyDir = new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageEmptyDirOutputReference(this, "empty_dir");
  public get emptyDir() {
    return this._emptyDir;
  }
  public putEmptyDir(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageEmptyDir) {
    this._emptyDir.internalValue = value;
  }
  public resetEmptyDir() {
    this._emptyDir.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyDirInput() {
    return this._emptyDir.internalValue;
  }

  // volume_claim_template - computed: false, optional: true, required: false
  private _volumeClaimTemplate = new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplateOutputReference(this, "volume_claim_template");
  public get volumeClaimTemplate() {
    return this._volumeClaimTemplate;
  }
  public putVolumeClaimTemplate(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageVolumeClaimTemplate) {
    this._volumeClaimTemplate.internalValue = value;
  }
  public resetVolumeClaimTemplate() {
    this._volumeClaimTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeClaimTemplateInput() {
    return this._volumeClaimTemplate.internalValue;
  }
}
export interface DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecTemplates {
  /**
  * The ConfigMap key to refer to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecTemplatesToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecTemplates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecTemplatesToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecTemplates | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecTemplatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecTemplates | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecTemplates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
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
}

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecTemplatesList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecTemplates[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecTemplatesOutputReference {
    return new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecTemplatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecTolerations {
  /**
  * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#effect DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#effect}
  */
  readonly effect?: string;
  /**
  * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#key}
  */
  readonly key?: string;
  /**
  * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#operator DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#toleration_seconds DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#value DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecTolerationsToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecTolerations | cdktf.IResolvable): any {
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


export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecTolerationsToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecTolerations | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecTolerations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecTolerations | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecTolerationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecTolerations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecTolerationsOutputReference {
    return new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecVolumeMounts {
  /**
  * Path within the container at which the volume should be mounted. Must not contain ':'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#mount_path DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#mount_path}
  */
  readonly mountPath: string;
  /**
  * mountPropagation determines how mounts are propagated from the host to container and the other way around. When not set, MountPropagationNone is used. This field is beta in 1.10. When RecursiveReadOnly is set to IfPossible or to Enabled, MountPropagation must be None or unspecified (which defaults to None).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#mount_propagation DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#mount_propagation}
  */
  readonly mountPropagation?: string;
  /**
  * This must match the Name of a Volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#read_only DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * RecursiveReadOnly specifies whether read-only mounts should be handled recursively. If ReadOnly is false, this field has no meaning and must be unspecified. If ReadOnly is true, and this field is set to Disabled, the mount is not made recursively read-only. If this field is set to IfPossible, the mount is made recursively read-only, if it is supported by the container runtime. If this field is set to Enabled, the mount is made recursively read-only if it is supported by the container runtime, otherwise the pod will not be started and an error will be generated to indicate the reason. If this field is set to IfPossible or Enabled, MountPropagation must be set to None (or be unspecified, which defaults to None). If this field is not specified, it is treated as an equivalent of Disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#recursive_read_only DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#recursive_read_only}
  */
  readonly recursiveReadOnly?: string;
  /**
  * Path within the volume from which the container's volume should be mounted. Defaults to '' (volume's root).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#sub_path DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#sub_path}
  */
  readonly subPath?: string;
  /**
  * Expanded path within the volume from which the container's volume should be mounted. Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container's environment. Defaults to '' (volume's root). SubPathExpr and SubPath are mutually exclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#sub_path_expr DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#sub_path_expr}
  */
  readonly subPathExpr?: string;
}

export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecVolumeMountsToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecVolumeMounts | cdktf.IResolvable): any {
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


export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecVolumeMountsToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecVolumeMounts | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecVolumeMountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecVolumeMounts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecVolumeMounts | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecVolumeMountsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecVolumeMounts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecVolumeMountsOutputReference {
    return new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecVolumeMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigHttpServerConfig {
  /**
  * Headers defines list of headers that can be added to HTTP responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#headers DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * HTTP2 enables HTTP/2 support. Note that HTTP/2 is only supported with TLS. This can not be changed on the fly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#http2 DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#http2}
  */
  readonly http2?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigHttpServerConfigToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigHttpServerConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.headers),
    http2: cdktf.booleanToTerraform(struct!.http2),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigHttpServerConfigToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigHttpServerConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.headers),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigHttpServerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigHttpServerConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._http2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.http2 = this._http2;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigHttpServerConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headers = undefined;
      this._http2 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headers = value.headers;
      this._http2 = value.http2;
    }
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

  // http2 - computed: false, optional: true, required: false
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
}
export interface DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigTlsServerConfigCertSecretRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#optional DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigTlsServerConfigCertSecretRefToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigTlsServerConfigCertSecretRef | cdktf.IResolvable): any {
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


export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigTlsServerConfigCertSecretRefToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigTlsServerConfigCertSecretRef | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigTlsServerConfigCertSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigTlsServerConfigCertSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigTlsServerConfigCertSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigTlsServerConfigClientCaSecretRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#optional DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigTlsServerConfigClientCaSecretRefToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigTlsServerConfigClientCaSecretRef | cdktf.IResolvable): any {
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


export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigTlsServerConfigClientCaSecretRefToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigTlsServerConfigClientCaSecretRef | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigTlsServerConfigClientCaSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigTlsServerConfigClientCaSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigTlsServerConfigClientCaSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigTlsServerConfigKeySecretRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#optional DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigTlsServerConfigKeySecretRefToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigTlsServerConfigKeySecretRef | cdktf.IResolvable): any {
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


export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigTlsServerConfigKeySecretRefToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigTlsServerConfigKeySecretRef | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigTlsServerConfigKeySecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigTlsServerConfigKeySecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigTlsServerConfigKeySecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigTlsServerConfig {
  /**
  * CertFile defines path to the pre-mounted file with certificate mutually exclusive with CertSecretRef
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#cert_file DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#cert_file}
  */
  readonly certFile?: string;
  /**
  * CertSecretRef defines reference for secret with certificate content under given key mutually exclusive with CertFile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#cert_secret_ref DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#cert_secret_ref}
  */
  readonly certSecretRef?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigTlsServerConfigCertSecretRef;
  /**
  * CipherSuites defines list of supported cipher suites for TLS versions up to TLS 1.2 https://golang.org/pkg/crypto/tls/#pkg-constants
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#cipher_suites DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#cipher_suites}
  */
  readonly cipherSuites?: string[];
  /**
  * Cert defines reference for secret with CA content under given key mutually exclusive with CertFile ClientAuthType defines server policy for client authentication If you want to enable client authentication (aka mTLS), you need to use RequireAndVerifyClientCert Note, mTLS is supported only at enterprise version of VictoriaMetrics components
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#client_auth_type DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#client_auth_type}
  */
  readonly clientAuthType?: string;
  /**
  * ClientCAFile defines path to the pre-mounted file with CA mutually exclusive with ClientCASecretRef
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#client_ca_file DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#client_ca_file}
  */
  readonly clientCaFile?: string;
  /**
  * ClientCASecretRef defines reference for secret with CA content under given key mutually exclusive with ClientCAFile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#client_ca_secret_ref DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#client_ca_secret_ref}
  */
  readonly clientCaSecretRef?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigTlsServerConfigClientCaSecretRef;
  /**
  * CurvePreferences defines elliptic curves that will be used in an ECDHE handshake, in preference order. https://golang.org/pkg/crypto/tls/#CurveID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#curve_preferences DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#curve_preferences}
  */
  readonly curvePreferences?: string[];
  /**
  * KeyFile defines path to the pre-mounted file with certificate key mutually exclusive with KeySecretRef
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#key_file DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#key_file}
  */
  readonly keyFile?: string;
  /**
  * Key defines reference for secret with certificate key content under given key mutually exclusive with KeyFile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#key_secret_ref DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#key_secret_ref}
  */
  readonly keySecretRef?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigTlsServerConfigKeySecretRef;
  /**
  * MaxVersion maximum TLS version that is acceptable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#max_version DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#max_version}
  */
  readonly maxVersion?: string;
  /**
  * MinVersion minimum TLS version that is acceptable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#min_version DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#min_version}
  */
  readonly minVersion?: string;
  /**
  * PreferServerCipherSuites controls whether the server selects the client's most preferred ciphersuite
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#prefer_server_cipher_suites DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#prefer_server_cipher_suites}
  */
  readonly preferServerCipherSuites?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigTlsServerConfigToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigTlsServerConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_file: cdktf.stringToTerraform(struct!.certFile),
    cert_secret_ref: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigTlsServerConfigCertSecretRefToTerraform(struct!.certSecretRef),
    cipher_suites: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cipherSuites),
    client_auth_type: cdktf.stringToTerraform(struct!.clientAuthType),
    client_ca_file: cdktf.stringToTerraform(struct!.clientCaFile),
    client_ca_secret_ref: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigTlsServerConfigClientCaSecretRefToTerraform(struct!.clientCaSecretRef),
    curve_preferences: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.curvePreferences),
    key_file: cdktf.stringToTerraform(struct!.keyFile),
    key_secret_ref: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigTlsServerConfigKeySecretRefToTerraform(struct!.keySecretRef),
    max_version: cdktf.stringToTerraform(struct!.maxVersion),
    min_version: cdktf.stringToTerraform(struct!.minVersion),
    prefer_server_cipher_suites: cdktf.booleanToTerraform(struct!.preferServerCipherSuites),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigTlsServerConfigToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigTlsServerConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_file: {
      value: cdktf.stringToHclTerraform(struct!.certFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_secret_ref: {
      value: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigTlsServerConfigCertSecretRefToHclTerraform(struct!.certSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigTlsServerConfigCertSecretRef",
    },
    cipher_suites: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cipherSuites),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    client_auth_type: {
      value: cdktf.stringToHclTerraform(struct!.clientAuthType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_ca_file: {
      value: cdktf.stringToHclTerraform(struct!.clientCaFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_ca_secret_ref: {
      value: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigTlsServerConfigClientCaSecretRefToHclTerraform(struct!.clientCaSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigTlsServerConfigClientCaSecretRef",
    },
    curve_preferences: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.curvePreferences),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    key_file: {
      value: cdktf.stringToHclTerraform(struct!.keyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_secret_ref: {
      value: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigTlsServerConfigKeySecretRefToHclTerraform(struct!.keySecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigTlsServerConfigKeySecretRef",
    },
    max_version: {
      value: cdktf.stringToHclTerraform(struct!.maxVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_version: {
      value: cdktf.stringToHclTerraform(struct!.minVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefer_server_cipher_suites: {
      value: cdktf.booleanToHclTerraform(struct!.preferServerCipherSuites),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigTlsServerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigTlsServerConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.certFile = this._certFile;
    }
    if (this._certSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certSecretRef = this._certSecretRef?.internalValue;
    }
    if (this._cipherSuites !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipherSuites = this._cipherSuites;
    }
    if (this._clientAuthType !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientAuthType = this._clientAuthType;
    }
    if (this._clientCaFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCaFile = this._clientCaFile;
    }
    if (this._clientCaSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCaSecretRef = this._clientCaSecretRef?.internalValue;
    }
    if (this._curvePreferences !== undefined) {
      hasAnyValues = true;
      internalValueResult.curvePreferences = this._curvePreferences;
    }
    if (this._keyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyFile = this._keyFile;
    }
    if (this._keySecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keySecretRef = this._keySecretRef?.internalValue;
    }
    if (this._maxVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxVersion = this._maxVersion;
    }
    if (this._minVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minVersion = this._minVersion;
    }
    if (this._preferServerCipherSuites !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferServerCipherSuites = this._preferServerCipherSuites;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigTlsServerConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certFile = undefined;
      this._certSecretRef.internalValue = undefined;
      this._cipherSuites = undefined;
      this._clientAuthType = undefined;
      this._clientCaFile = undefined;
      this._clientCaSecretRef.internalValue = undefined;
      this._curvePreferences = undefined;
      this._keyFile = undefined;
      this._keySecretRef.internalValue = undefined;
      this._maxVersion = undefined;
      this._minVersion = undefined;
      this._preferServerCipherSuites = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certFile = value.certFile;
      this._certSecretRef.internalValue = value.certSecretRef;
      this._cipherSuites = value.cipherSuites;
      this._clientAuthType = value.clientAuthType;
      this._clientCaFile = value.clientCaFile;
      this._clientCaSecretRef.internalValue = value.clientCaSecretRef;
      this._curvePreferences = value.curvePreferences;
      this._keyFile = value.keyFile;
      this._keySecretRef.internalValue = value.keySecretRef;
      this._maxVersion = value.maxVersion;
      this._minVersion = value.minVersion;
      this._preferServerCipherSuites = value.preferServerCipherSuites;
    }
  }

  // cert_file - computed: false, optional: true, required: false
  private _certFile?: string; 
  public get certFile() {
    return this.getStringAttribute('cert_file');
  }
  public set certFile(value: string) {
    this._certFile = value;
  }
  public resetCertFile() {
    this._certFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certFileInput() {
    return this._certFile;
  }

  // cert_secret_ref - computed: false, optional: true, required: false
  private _certSecretRef = new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigTlsServerConfigCertSecretRefOutputReference(this, "cert_secret_ref");
  public get certSecretRef() {
    return this._certSecretRef;
  }
  public putCertSecretRef(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigTlsServerConfigCertSecretRef) {
    this._certSecretRef.internalValue = value;
  }
  public resetCertSecretRef() {
    this._certSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certSecretRefInput() {
    return this._certSecretRef.internalValue;
  }

  // cipher_suites - computed: false, optional: true, required: false
  private _cipherSuites?: string[]; 
  public get cipherSuites() {
    return this.getListAttribute('cipher_suites');
  }
  public set cipherSuites(value: string[]) {
    this._cipherSuites = value;
  }
  public resetCipherSuites() {
    this._cipherSuites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherSuitesInput() {
    return this._cipherSuites;
  }

  // client_auth_type - computed: false, optional: true, required: false
  private _clientAuthType?: string; 
  public get clientAuthType() {
    return this.getStringAttribute('client_auth_type');
  }
  public set clientAuthType(value: string) {
    this._clientAuthType = value;
  }
  public resetClientAuthType() {
    this._clientAuthType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthTypeInput() {
    return this._clientAuthType;
  }

  // client_ca_file - computed: false, optional: true, required: false
  private _clientCaFile?: string; 
  public get clientCaFile() {
    return this.getStringAttribute('client_ca_file');
  }
  public set clientCaFile(value: string) {
    this._clientCaFile = value;
  }
  public resetClientCaFile() {
    this._clientCaFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCaFileInput() {
    return this._clientCaFile;
  }

  // client_ca_secret_ref - computed: false, optional: true, required: false
  private _clientCaSecretRef = new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigTlsServerConfigClientCaSecretRefOutputReference(this, "client_ca_secret_ref");
  public get clientCaSecretRef() {
    return this._clientCaSecretRef;
  }
  public putClientCaSecretRef(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigTlsServerConfigClientCaSecretRef) {
    this._clientCaSecretRef.internalValue = value;
  }
  public resetClientCaSecretRef() {
    this._clientCaSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCaSecretRefInput() {
    return this._clientCaSecretRef.internalValue;
  }

  // curve_preferences - computed: false, optional: true, required: false
  private _curvePreferences?: string[]; 
  public get curvePreferences() {
    return this.getListAttribute('curve_preferences');
  }
  public set curvePreferences(value: string[]) {
    this._curvePreferences = value;
  }
  public resetCurvePreferences() {
    this._curvePreferences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get curvePreferencesInput() {
    return this._curvePreferences;
  }

  // key_file - computed: false, optional: true, required: false
  private _keyFile?: string; 
  public get keyFile() {
    return this.getStringAttribute('key_file');
  }
  public set keyFile(value: string) {
    this._keyFile = value;
  }
  public resetKeyFile() {
    this._keyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFileInput() {
    return this._keyFile;
  }

  // key_secret_ref - computed: false, optional: true, required: false
  private _keySecretRef = new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigTlsServerConfigKeySecretRefOutputReference(this, "key_secret_ref");
  public get keySecretRef() {
    return this._keySecretRef;
  }
  public putKeySecretRef(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigTlsServerConfigKeySecretRef) {
    this._keySecretRef.internalValue = value;
  }
  public resetKeySecretRef() {
    this._keySecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySecretRefInput() {
    return this._keySecretRef.internalValue;
  }

  // max_version - computed: false, optional: true, required: false
  private _maxVersion?: string; 
  public get maxVersion() {
    return this.getStringAttribute('max_version');
  }
  public set maxVersion(value: string) {
    this._maxVersion = value;
  }
  public resetMaxVersion() {
    this._maxVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVersionInput() {
    return this._maxVersion;
  }

  // min_version - computed: false, optional: true, required: false
  private _minVersion?: string; 
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }
  public set minVersion(value: string) {
    this._minVersion = value;
  }
  public resetMinVersion() {
    this._minVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minVersionInput() {
    return this._minVersion;
  }

  // prefer_server_cipher_suites - computed: false, optional: true, required: false
  private _preferServerCipherSuites?: boolean | cdktf.IResolvable; 
  public get preferServerCipherSuites() {
    return this.getBooleanAttribute('prefer_server_cipher_suites');
  }
  public set preferServerCipherSuites(value: boolean | cdktf.IResolvable) {
    this._preferServerCipherSuites = value;
  }
  public resetPreferServerCipherSuites() {
    this._preferServerCipherSuites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferServerCipherSuitesInput() {
    return this._preferServerCipherSuites;
  }
}
export interface DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfig {
  /**
  * BasicAuthUsers Usernames and hashed passwords that have full access to the web server Passwords must be hashed with bcrypt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#basic_auth_users DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#basic_auth_users}
  */
  readonly basicAuthUsers?: { [key: string]: string };
  /**
  * HTTPServerConfig defines http server configuration for alertmanager web server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#http_server_config DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#http_server_config}
  */
  readonly httpServerConfig?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigHttpServerConfig;
  /**
  * TLSServerConfig defines server TLS configuration for alertmanager
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#tls_server_config DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#tls_server_config}
  */
  readonly tlsServerConfig?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigTlsServerConfig;
}

export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    basic_auth_users: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.basicAuthUsers),
    http_server_config: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigHttpServerConfigToTerraform(struct!.httpServerConfig),
    tls_server_config: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigTlsServerConfigToTerraform(struct!.tlsServerConfig),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    basic_auth_users: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.basicAuthUsers),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    http_server_config: {
      value: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigHttpServerConfigToHclTerraform(struct!.httpServerConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigHttpServerConfig",
    },
    tls_server_config: {
      value: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigTlsServerConfigToHclTerraform(struct!.tlsServerConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigTlsServerConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basicAuthUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuthUsers = this._basicAuthUsers;
    }
    if (this._httpServerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpServerConfig = this._httpServerConfig?.internalValue;
    }
    if (this._tlsServerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsServerConfig = this._tlsServerConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._basicAuthUsers = undefined;
      this._httpServerConfig.internalValue = undefined;
      this._tlsServerConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._basicAuthUsers = value.basicAuthUsers;
      this._httpServerConfig.internalValue = value.httpServerConfig;
      this._tlsServerConfig.internalValue = value.tlsServerConfig;
    }
  }

  // basic_auth_users - computed: false, optional: true, required: false
  private _basicAuthUsers?: { [key: string]: string }; 
  public get basicAuthUsers() {
    return this.getStringMapAttribute('basic_auth_users');
  }
  public set basicAuthUsers(value: { [key: string]: string }) {
    this._basicAuthUsers = value;
  }
  public resetBasicAuthUsers() {
    this._basicAuthUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthUsersInput() {
    return this._basicAuthUsers;
  }

  // http_server_config - computed: false, optional: true, required: false
  private _httpServerConfig = new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigHttpServerConfigOutputReference(this, "http_server_config");
  public get httpServerConfig() {
    return this._httpServerConfig;
  }
  public putHttpServerConfig(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigHttpServerConfig) {
    this._httpServerConfig.internalValue = value;
  }
  public resetHttpServerConfig() {
    this._httpServerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpServerConfigInput() {
    return this._httpServerConfig.internalValue;
  }

  // tls_server_config - computed: false, optional: true, required: false
  private _tlsServerConfig = new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigTlsServerConfigOutputReference(this, "tls_server_config");
  public get tlsServerConfig() {
    return this._tlsServerConfig;
  }
  public putTlsServerConfig(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigTlsServerConfig) {
    this._tlsServerConfig.internalValue = value;
  }
  public resetTlsServerConfig() {
    this._tlsServerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsServerConfigInput() {
    return this._tlsServerConfig.internalValue;
  }
}
export interface DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpec {
  /**
  * AdditionalPeers allows injecting a set of additional Alertmanagers to peer with to form a highly available cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#additional_peers DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#additional_peers}
  */
  readonly additionalPeers?: string[];
  /**
  * Affinity If specified, the pod's scheduling constraints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#affinity DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#affinity}
  */
  readonly affinity?: { [key: string]: string };
  /**
  * ClaimTemplates allows adding additional VolumeClaimTemplates for StatefulSet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#claim_templates DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#claim_templates}
  */
  readonly claimTemplates?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplates[] | cdktf.IResolvable;
  /**
  * ClusterAdvertiseAddress is the explicit address to advertise in cluster. Needs to be provided for non RFC1918 [1] (public) addresses. [1] RFC1918: https://tools.ietf.org/html/rfc1918
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#cluster_advertise_address DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#cluster_advertise_address}
  */
  readonly clusterAdvertiseAddress?: string;
  /**
  * ClusterDomainName defines domain name suffix for in-cluster dns addresses aka .cluster.local used to build pod peer addresses for in-cluster communication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#cluster_domain_name DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#cluster_domain_name}
  */
  readonly clusterDomainName?: string;
  /**
  * ConfigMaps is a list of ConfigMaps in the same namespace as the Application object, which shall be mounted into the Application container at /etc/vm/configs/CONFIGMAP_NAME folder
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#config_maps DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#config_maps}
  */
  readonly configMaps?: string[];
  /**
  *  ConfigNamespaceSelector defines namespace selector for VMAlertmanagerConfig. Works in combination with Selector. NamespaceSelector nil - only objects at VMAlertmanager namespace. Selector nil - only objects at NamespaceSelector namespaces. If both nil - behaviour controlled by selectAllByDefault
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#config_namespace_selector DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#config_namespace_selector}
  */
  readonly configNamespaceSelector?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigNamespaceSelector;
  /**
  * ConfigRawYaml - raw configuration for alertmanager, it helps it to start without secret. priority -> hardcoded ConfigRaw -> ConfigRaw, provided by user -> ConfigSecret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#config_raw_yaml DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#config_raw_yaml}
  */
  readonly configRawYaml?: string;
  /**
  * ConfigReloaderExtraArgs that will be passed to VMAuths config-reloader container for example resyncInterval: '30s'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#config_reloader_extra_args DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#config_reloader_extra_args}
  */
  readonly configReloaderExtraArgs?: { [key: string]: string };
  /**
  * ConfigReloaderImageTag defines image:tag for config-reloader container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#config_reloader_image_tag DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#config_reloader_image_tag}
  */
  readonly configReloaderImageTag?: string;
  /**
  * ConfigReloaderResources config-reloader container resource request and limits, https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ if not defined default resources from operator config will be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#config_reloader_resources DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#config_reloader_resources}
  */
  readonly configReloaderResources?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigReloaderResources;
  /**
  * ConfigSecret is the name of a Kubernetes Secret in the same namespace as the VMAlertmanager object, which contains configuration for this VMAlertmanager, configuration must be inside secret key: alertmanager.yaml. It must be created by user. instance. Defaults to 'vmalertmanager-<alertmanager-name>' The secret is mounted into /etc/alertmanager/config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#config_secret DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#config_secret}
  */
  readonly configSecret?: string;
  /**
  * ConfigSelector defines selector for VMAlertmanagerConfig, result config will be merged with with Raw or Secret config. Works in combination with NamespaceSelector. NamespaceSelector nil - only objects at VMAlertmanager namespace. Selector nil - only objects at NamespaceSelector namespaces. If both nil - behaviour controlled by selectAllByDefault
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#config_selector DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#config_selector}
  */
  readonly configSelector?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigSelector;
  /**
  * Containers property allows to inject additions sidecars or to patch existing containers. It can be useful for proxies, backup, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#containers DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#containers}
  */
  readonly containers?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * DisableNamespaceMatcher disables top route namespace label matcher for VMAlertmanagerConfig It may be useful if alert doesn't have namespace label for some reason
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#disable_namespace_matcher DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#disable_namespace_matcher}
  */
  readonly disableNamespaceMatcher?: boolean | cdktf.IResolvable;
  /**
  * DisableRouteContinueEnforce cancel the behavior for VMAlertmanagerConfig that always enforce first-level route continue to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#disable_route_continue_enforce DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#disable_route_continue_enforce}
  */
  readonly disableRouteContinueEnforce?: boolean | cdktf.IResolvable;
  /**
  * DisableSelfServiceScrape controls creation of VMServiceScrape by operator for the application. Has priority over 'VM_DISABLESELFSERVICESCRAPECREATION' operator env variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#disable_self_service_scrape DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#disable_self_service_scrape}
  */
  readonly disableSelfServiceScrape?: boolean | cdktf.IResolvable;
  /**
  * Specifies the DNS parameters of a pod. Parameters specified here will be merged to the generated DNS configuration based on DNSPolicy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#dns_config DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#dns_config}
  */
  readonly dnsConfig?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecDnsConfig;
  /**
  * DNSPolicy sets DNS policy for the pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#dns_policy DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#dns_policy}
  */
  readonly dnsPolicy?: string;
  /**
  * EnforcedTopRouteMatchers defines label matchers to be added for the top route of VMAlertmanagerConfig It allows to make some set of labels required for alerts. https://prometheus.io/docs/alerting/latest/configuration/#matcher
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#enforced_top_route_matchers DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#enforced_top_route_matchers}
  */
  readonly enforcedTopRouteMatchers?: string[];
  /**
  * ExternalURL the VMAlertmanager instances will be available under. This is necessary to generate correct URLs. This is necessary if VMAlertmanager is not served from root of a DNS name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#external_url DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#external_url}
  */
  readonly externalUrl?: string;
  /**
  * ExtraArgs that will be passed to the application container for example remoteWrite.tmpDataPath: /tmp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#extra_args DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#extra_args}
  */
  readonly extraArgs?: { [key: string]: string };
  /**
  * ExtraEnvs that will be passed to the application container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#extra_envs DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#extra_envs}
  */
  readonly extraEnvs?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * GossipConfig defines gossip TLS configuration for Alertmanager cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#gossip_config DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#gossip_config}
  */
  readonly gossipConfig?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfig;
  /**
  * HostAliases provides mapping for ip and hostname, that would be propagated to pod, cannot be used with HostNetwork.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#host_aliases DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#host_aliases}
  */
  readonly hostAliases?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecHostAliases[] | cdktf.IResolvable;
  /**
  * HostNetwork controls whether the pod may use the node network namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#host_network DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#host_network}
  */
  readonly hostNetwork?: boolean | cdktf.IResolvable;
  /**
  * Image - docker image settings if no specified operator uses default version from operator config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#image DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#image}
  */
  readonly image?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecImage;
  /**
  * ImagePullSecrets An optional list of references to secrets in the same namespace to use for pulling images from registries see https://kubernetes.io/docs/concepts/containers/images/#referring-to-an-imagepullsecrets-on-a-pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#image_pull_secrets DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#image_pull_secrets}
  */
  readonly imagePullSecrets?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecImagePullSecrets[] | cdktf.IResolvable;
  /**
  * InitContainers allows adding initContainers to the pod definition. Any errors during the execution of an initContainer will lead to a restart of the Pod. More info: https://kubernetes.io/docs/concepts/workloads/pods/init-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#init_containers DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#init_containers}
  */
  readonly initContainers?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * ListenLocal makes the VMAlertmanager server listen on loopback, so that it does not bind against the Pod IP. Note this is only for the VMAlertmanager UI, not the gossip communication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#listen_local DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#listen_local}
  */
  readonly listenLocal?: boolean | cdktf.IResolvable;
  /**
  * LivenessProbe that will be added CRD pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#liveness_probe DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#liveness_probe}
  */
  readonly livenessProbe?: { [key: string]: string };
  /**
  * LogFormat for VMAlertmanager to be configured with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#log_format DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#log_format}
  */
  readonly logFormat?: string;
  /**
  * Log level for VMAlertmanager to be configured with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#log_level DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#log_level}
  */
  readonly logLevel?: string;
  /**
  * MinReadySeconds defines a minim number os seconds to wait before starting update next pod if previous in healthy state Has no effect for VLogs and VMSingle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#min_ready_seconds DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#min_ready_seconds}
  */
  readonly minReadySeconds?: number;
  /**
  * NodeSelector Define which Nodes the Pods are scheduled on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#node_selector DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Paused If set to true all actions on the underlying managed objects are not going to be performed, except for delete actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#paused DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#paused}
  */
  readonly paused?: boolean | cdktf.IResolvable;
  /**
  * PodDisruptionBudget created by operator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#pod_disruption_budget DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#pod_disruption_budget}
  */
  readonly podDisruptionBudget?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecPodDisruptionBudget;
  /**
  * PodMetadata configures Labels and Annotations which are propagated to the alertmanager pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#pod_metadata DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#pod_metadata}
  */
  readonly podMetadata?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecPodMetadata;
  /**
  * Port listen address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#port DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#port}
  */
  readonly port?: string;
  /**
  * PortName used for the pods and governing service. This defaults to web
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#port_name DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#port_name}
  */
  readonly portName?: string;
  /**
  * PriorityClassName class assigned to the Pods
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#priority_class_name DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#priority_class_name}
  */
  readonly priorityClassName?: string;
  /**
  * ReadinessGates defines pod readiness gates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#readiness_gates DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#readiness_gates}
  */
  readonly readinessGates?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecReadinessGates[] | cdktf.IResolvable;
  /**
  * ReadinessProbe that will be added CRD pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#readiness_probe DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#readiness_probe}
  */
  readonly readinessProbe?: { [key: string]: string };
  /**
  * ReplicaCount is the expected size of the Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#replica_count DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#replica_count}
  */
  readonly replicaCount?: number;
  /**
  * Resources container resource request and limits, https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ if not defined default resources from operator config will be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#resources DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#resources}
  */
  readonly resources?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecResources;
  /**
  * Retention Time duration VMAlertmanager shall retain data for. Default is '120h', and must match the regular expression '[0-9]+(ms|s|m|h)' (milliseconds seconds minutes hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#retention DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#retention}
  */
  readonly retention?: string;
  /**
  * The number of old ReplicaSets to retain to allow rollback in deployment or maximum number of revisions that will be maintained in the Deployment revision history. Has no effect at StatefulSets Defaults to 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#revision_history_limit_count DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#revision_history_limit_count}
  */
  readonly revisionHistoryLimitCount?: number;
  /**
  * RollingUpdateStrategy defines strategy for application updates Default is OnDelete, in this case operator handles update process Can be changed for RollingUpdate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#rolling_update_strategy DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#rolling_update_strategy}
  */
  readonly rollingUpdateStrategy?: string;
  /**
  * RoutePrefix VMAlertmanager registers HTTP handlers for. This is useful, if using ExternalURL and a proxy is rewriting HTTP routes of a request, and the actual ExternalURL is still true, but the server serves requests under a different route prefix. For example for use with 'kubectl proxy'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#route_prefix DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#route_prefix}
  */
  readonly routePrefix?: string;
  /**
  * RuntimeClassName - defines runtime class for kubernetes pod. https://kubernetes.io/docs/concepts/containers/runtime-class/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#runtime_class_name DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#runtime_class_name}
  */
  readonly runtimeClassName?: string;
  /**
  * SchedulerName - defines kubernetes scheduler name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#scheduler_name DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#scheduler_name}
  */
  readonly schedulerName?: string;
  /**
  * Secrets is a list of Secrets in the same namespace as the Application object, which shall be mounted into the Application container at /etc/vm/secrets/SECRET_NAME folder
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#secrets DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#secrets}
  */
  readonly secrets?: string[];
  /**
  * SecurityContext holds pod-level security attributes and common container settings. This defaults to the default PodSecurityContext.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#security_context DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#security_context}
  */
  readonly securityContext?: { [key: string]: string };
  /**
  * SelectAllByDefault changes default behavior for empty CRD selectors, such ConfigSelector. with selectAllByDefault: true and undefined ConfigSelector and ConfigNamespaceSelector Operator selects all exist alertManagerConfigs with selectAllByDefault: false - selects nothing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#select_all_by_default DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#select_all_by_default}
  */
  readonly selectAllByDefault?: boolean | cdktf.IResolvable;
  /**
  * ServiceAccountName is the name of the ServiceAccount to use to run the pods
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#service_account_name DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#service_account_name}
  */
  readonly serviceAccountName?: string;
  /**
  * ServiceScrapeSpec that will be added to vmalertmanager VMServiceScrape spec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#service_scrape_spec DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#service_scrape_spec}
  */
  readonly serviceScrapeSpec?: { [key: string]: string };
  /**
  * ServiceSpec that will be added to vmalertmanager service spec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#service_spec DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#service_spec}
  */
  readonly serviceSpec?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecServiceSpec;
  /**
  * StartupProbe that will be added to CRD pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#startup_probe DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#startup_probe}
  */
  readonly startupProbe?: { [key: string]: string };
  /**
  * Storage is the definition of how storage will be used by the VMAlertmanager instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#storage DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#storage}
  */
  readonly storage?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorage;
  /**
  * Templates is a list of ConfigMap key references for ConfigMaps in the same namespace as the VMAlertmanager object, which shall be mounted into the VMAlertmanager Pods. The Templates are mounted into /etc/vm/templates/<configmap-name>/<configmap-key>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#templates DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#templates}
  */
  readonly templates?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecTemplates[] | cdktf.IResolvable;
  /**
  * TerminationGracePeriodSeconds period for container graceful termination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#termination_grace_period_seconds DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#termination_grace_period_seconds}
  */
  readonly terminationGracePeriodSeconds?: number;
  /**
  * Tolerations If specified, the pod's tolerations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#tolerations DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#tolerations}
  */
  readonly tolerations?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecTolerations[] | cdktf.IResolvable;
  /**
  * TopologySpreadConstraints embedded kubernetes pod configuration option, controls how pods are spread across your cluster among failure-domains such as regions, zones, nodes, and other user-defined topology domains https://kubernetes.io/docs/concepts/workloads/pods/pod-topology-spread-constraints/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#topology_spread_constraints DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#topology_spread_constraints}
  */
  readonly topologySpreadConstraints?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * UseDefaultResources controls resource settings By default, operator sets built-in resource requirements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#use_default_resources DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#use_default_resources}
  */
  readonly useDefaultResources?: boolean | cdktf.IResolvable;
  /**
  * UseStrictSecurity enables strict security mode for component it restricts disk writes access uses non-root user out of the box drops not needed security permissions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#use_strict_security DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#use_strict_security}
  */
  readonly useStrictSecurity?: boolean | cdktf.IResolvable;
  /**
  * UseVMConfigReloader replaces prometheus-like config-reloader with vm one. It uses secrets watch instead of file watch which greatly increases speed of config updates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#use_vm_config_reloader DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#use_vm_config_reloader}
  */
  readonly useVmConfigReloader?: boolean | cdktf.IResolvable;
  /**
  * VolumeMounts allows configuration of additional VolumeMounts on the output Deployment/StatefulSet definition. VolumeMounts specified will be appended to other VolumeMounts in the Application container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#volume_mounts DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#volume_mounts}
  */
  readonly volumeMounts?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecVolumeMounts[] | cdktf.IResolvable;
  /**
  * Volumes allows configuration of additional volumes on the output Deployment/StatefulSet definition. Volumes specified will be appended to other volumes that are generated. / +optional
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#volumes DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#volumes}
  */
  readonly volumes?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * WebConfig defines configuration for webserver https://github.com/prometheus/alertmanager/blob/main/docs/https.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#web_config DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest#web_config}
  */
  readonly webConfig?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfig;
}

export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_peers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalPeers),
    affinity: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.affinity),
    claim_templates: cdktf.listMapper(dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesToTerraform, false)(struct!.claimTemplates),
    cluster_advertise_address: cdktf.stringToTerraform(struct!.clusterAdvertiseAddress),
    cluster_domain_name: cdktf.stringToTerraform(struct!.clusterDomainName),
    config_maps: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.configMaps),
    config_namespace_selector: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigNamespaceSelectorToTerraform(struct!.configNamespaceSelector),
    config_raw_yaml: cdktf.stringToTerraform(struct!.configRawYaml),
    config_reloader_extra_args: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configReloaderExtraArgs),
    config_reloader_image_tag: cdktf.stringToTerraform(struct!.configReloaderImageTag),
    config_reloader_resources: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigReloaderResourcesToTerraform(struct!.configReloaderResources),
    config_secret: cdktf.stringToTerraform(struct!.configSecret),
    config_selector: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigSelectorToTerraform(struct!.configSelector),
    containers: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(struct!.containers),
    disable_namespace_matcher: cdktf.booleanToTerraform(struct!.disableNamespaceMatcher),
    disable_route_continue_enforce: cdktf.booleanToTerraform(struct!.disableRouteContinueEnforce),
    disable_self_service_scrape: cdktf.booleanToTerraform(struct!.disableSelfServiceScrape),
    dns_config: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecDnsConfigToTerraform(struct!.dnsConfig),
    dns_policy: cdktf.stringToTerraform(struct!.dnsPolicy),
    enforced_top_route_matchers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enforcedTopRouteMatchers),
    external_url: cdktf.stringToTerraform(struct!.externalUrl),
    extra_args: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.extraArgs),
    extra_envs: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(struct!.extraEnvs),
    gossip_config: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigToTerraform(struct!.gossipConfig),
    host_aliases: cdktf.listMapper(dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecHostAliasesToTerraform, false)(struct!.hostAliases),
    host_network: cdktf.booleanToTerraform(struct!.hostNetwork),
    image: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecImageToTerraform(struct!.image),
    image_pull_secrets: cdktf.listMapper(dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecImagePullSecretsToTerraform, false)(struct!.imagePullSecrets),
    init_containers: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(struct!.initContainers),
    listen_local: cdktf.booleanToTerraform(struct!.listenLocal),
    liveness_probe: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.livenessProbe),
    log_format: cdktf.stringToTerraform(struct!.logFormat),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    min_ready_seconds: cdktf.numberToTerraform(struct!.minReadySeconds),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    paused: cdktf.booleanToTerraform(struct!.paused),
    pod_disruption_budget: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecPodDisruptionBudgetToTerraform(struct!.podDisruptionBudget),
    pod_metadata: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecPodMetadataToTerraform(struct!.podMetadata),
    port: cdktf.stringToTerraform(struct!.port),
    port_name: cdktf.stringToTerraform(struct!.portName),
    priority_class_name: cdktf.stringToTerraform(struct!.priorityClassName),
    readiness_gates: cdktf.listMapper(dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecReadinessGatesToTerraform, false)(struct!.readinessGates),
    readiness_probe: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.readinessProbe),
    replica_count: cdktf.numberToTerraform(struct!.replicaCount),
    resources: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecResourcesToTerraform(struct!.resources),
    retention: cdktf.stringToTerraform(struct!.retention),
    revision_history_limit_count: cdktf.numberToTerraform(struct!.revisionHistoryLimitCount),
    rolling_update_strategy: cdktf.stringToTerraform(struct!.rollingUpdateStrategy),
    route_prefix: cdktf.stringToTerraform(struct!.routePrefix),
    runtime_class_name: cdktf.stringToTerraform(struct!.runtimeClassName),
    scheduler_name: cdktf.stringToTerraform(struct!.schedulerName),
    secrets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.secrets),
    security_context: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.securityContext),
    select_all_by_default: cdktf.booleanToTerraform(struct!.selectAllByDefault),
    service_account_name: cdktf.stringToTerraform(struct!.serviceAccountName),
    service_scrape_spec: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.serviceScrapeSpec),
    service_spec: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecServiceSpecToTerraform(struct!.serviceSpec),
    startup_probe: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.startupProbe),
    storage: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageToTerraform(struct!.storage),
    templates: cdktf.listMapper(dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecTemplatesToTerraform, false)(struct!.templates),
    termination_grace_period_seconds: cdktf.numberToTerraform(struct!.terminationGracePeriodSeconds),
    tolerations: cdktf.listMapper(dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecTolerationsToTerraform, false)(struct!.tolerations),
    topology_spread_constraints: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(struct!.topologySpreadConstraints),
    use_default_resources: cdktf.booleanToTerraform(struct!.useDefaultResources),
    use_strict_security: cdktf.booleanToTerraform(struct!.useStrictSecurity),
    use_vm_config_reloader: cdktf.booleanToTerraform(struct!.useVmConfigReloader),
    volume_mounts: cdktf.listMapper(dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecVolumeMountsToTerraform, false)(struct!.volumeMounts),
    volumes: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(struct!.volumes),
    web_config: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigToTerraform(struct!.webConfig),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_peers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalPeers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    affinity: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.affinity),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    claim_templates: {
      value: cdktf.listMapperHcl(dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesToHclTerraform, false)(struct!.claimTemplates),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesList",
    },
    cluster_advertise_address: {
      value: cdktf.stringToHclTerraform(struct!.clusterAdvertiseAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_domain_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterDomainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_maps: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.configMaps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    config_namespace_selector: {
      value: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigNamespaceSelectorToHclTerraform(struct!.configNamespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigNamespaceSelector",
    },
    config_raw_yaml: {
      value: cdktf.stringToHclTerraform(struct!.configRawYaml),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_reloader_extra_args: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.configReloaderExtraArgs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    config_reloader_image_tag: {
      value: cdktf.stringToHclTerraform(struct!.configReloaderImageTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_reloader_resources: {
      value: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigReloaderResourcesToHclTerraform(struct!.configReloaderResources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigReloaderResources",
    },
    config_secret: {
      value: cdktf.stringToHclTerraform(struct!.configSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_selector: {
      value: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigSelectorToHclTerraform(struct!.configSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigSelector",
    },
    containers: {
      value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(struct!.containers),
      isBlock: false,
      type: "list",
      storageClassType: "stringMapList",
    },
    disable_namespace_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.disableNamespaceMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_route_continue_enforce: {
      value: cdktf.booleanToHclTerraform(struct!.disableRouteContinueEnforce),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_self_service_scrape: {
      value: cdktf.booleanToHclTerraform(struct!.disableSelfServiceScrape),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dns_config: {
      value: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecDnsConfigToHclTerraform(struct!.dnsConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecDnsConfig",
    },
    dns_policy: {
      value: cdktf.stringToHclTerraform(struct!.dnsPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enforced_top_route_matchers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.enforcedTopRouteMatchers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    external_url: {
      value: cdktf.stringToHclTerraform(struct!.externalUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extra_args: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.extraArgs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    extra_envs: {
      value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(struct!.extraEnvs),
      isBlock: false,
      type: "list",
      storageClassType: "stringMapList",
    },
    gossip_config: {
      value: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigToHclTerraform(struct!.gossipConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfig",
    },
    host_aliases: {
      value: cdktf.listMapperHcl(dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecHostAliasesToHclTerraform, false)(struct!.hostAliases),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecHostAliasesList",
    },
    host_network: {
      value: cdktf.booleanToHclTerraform(struct!.hostNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    image: {
      value: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecImageToHclTerraform(struct!.image),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecImage",
    },
    image_pull_secrets: {
      value: cdktf.listMapperHcl(dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecImagePullSecretsToHclTerraform, false)(struct!.imagePullSecrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecImagePullSecretsList",
    },
    init_containers: {
      value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(struct!.initContainers),
      isBlock: false,
      type: "list",
      storageClassType: "stringMapList",
    },
    listen_local: {
      value: cdktf.booleanToHclTerraform(struct!.listenLocal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    liveness_probe: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.livenessProbe),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    log_format: {
      value: cdktf.stringToHclTerraform(struct!.logFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_ready_seconds: {
      value: cdktf.numberToHclTerraform(struct!.minReadySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    paused: {
      value: cdktf.booleanToHclTerraform(struct!.paused),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pod_disruption_budget: {
      value: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecPodDisruptionBudgetToHclTerraform(struct!.podDisruptionBudget),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecPodDisruptionBudget",
    },
    pod_metadata: {
      value: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecPodMetadataToHclTerraform(struct!.podMetadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecPodMetadata",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_name: {
      value: cdktf.stringToHclTerraform(struct!.portName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority_class_name: {
      value: cdktf.stringToHclTerraform(struct!.priorityClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    readiness_gates: {
      value: cdktf.listMapperHcl(dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecReadinessGatesToHclTerraform, false)(struct!.readinessGates),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecReadinessGatesList",
    },
    readiness_probe: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.readinessProbe),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    replica_count: {
      value: cdktf.numberToHclTerraform(struct!.replicaCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resources: {
      value: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecResources",
    },
    retention: {
      value: cdktf.stringToHclTerraform(struct!.retention),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    revision_history_limit_count: {
      value: cdktf.numberToHclTerraform(struct!.revisionHistoryLimitCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rolling_update_strategy: {
      value: cdktf.stringToHclTerraform(struct!.rollingUpdateStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_prefix: {
      value: cdktf.stringToHclTerraform(struct!.routePrefix),
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
    secrets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.secrets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    security_context: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.securityContext),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    select_all_by_default: {
      value: cdktf.booleanToHclTerraform(struct!.selectAllByDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_account_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_scrape_spec: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.serviceScrapeSpec),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    service_spec: {
      value: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecServiceSpecToHclTerraform(struct!.serviceSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecServiceSpec",
    },
    startup_probe: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.startupProbe),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    storage: {
      value: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageToHclTerraform(struct!.storage),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorage",
    },
    templates: {
      value: cdktf.listMapperHcl(dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecTemplatesToHclTerraform, false)(struct!.templates),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecTemplatesList",
    },
    termination_grace_period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.terminationGracePeriodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecTolerationsList",
    },
    topology_spread_constraints: {
      value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(struct!.topologySpreadConstraints),
      isBlock: false,
      type: "list",
      storageClassType: "stringMapList",
    },
    use_default_resources: {
      value: cdktf.booleanToHclTerraform(struct!.useDefaultResources),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_strict_security: {
      value: cdktf.booleanToHclTerraform(struct!.useStrictSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_vm_config_reloader: {
      value: cdktf.booleanToHclTerraform(struct!.useVmConfigReloader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    volume_mounts: {
      value: cdktf.listMapperHcl(dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecVolumeMountsToHclTerraform, false)(struct!.volumeMounts),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecVolumeMountsList",
    },
    volumes: {
      value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(struct!.volumes),
      isBlock: false,
      type: "list",
      storageClassType: "stringMapList",
    },
    web_config: {
      value: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigToHclTerraform(struct!.webConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalPeers !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalPeers = this._additionalPeers;
    }
    if (this._affinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity;
    }
    if (this._claimTemplates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimTemplates = this._claimTemplates?.internalValue;
    }
    if (this._clusterAdvertiseAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterAdvertiseAddress = this._clusterAdvertiseAddress;
    }
    if (this._clusterDomainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterDomainName = this._clusterDomainName;
    }
    if (this._configMaps !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMaps = this._configMaps;
    }
    if (this._configNamespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configNamespaceSelector = this._configNamespaceSelector?.internalValue;
    }
    if (this._configRawYaml !== undefined) {
      hasAnyValues = true;
      internalValueResult.configRawYaml = this._configRawYaml;
    }
    if (this._configReloaderExtraArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.configReloaderExtraArgs = this._configReloaderExtraArgs;
    }
    if (this._configReloaderImageTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.configReloaderImageTag = this._configReloaderImageTag;
    }
    if (this._configReloaderResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configReloaderResources = this._configReloaderResources?.internalValue;
    }
    if (this._configSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.configSecret = this._configSecret;
    }
    if (this._configSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configSelector = this._configSelector?.internalValue;
    }
    if (this._containers !== undefined) {
      hasAnyValues = true;
      internalValueResult.containers = this._containers;
    }
    if (this._disableNamespaceMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableNamespaceMatcher = this._disableNamespaceMatcher;
    }
    if (this._disableRouteContinueEnforce !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableRouteContinueEnforce = this._disableRouteContinueEnforce;
    }
    if (this._disableSelfServiceScrape !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableSelfServiceScrape = this._disableSelfServiceScrape;
    }
    if (this._dnsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsConfig = this._dnsConfig?.internalValue;
    }
    if (this._dnsPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsPolicy = this._dnsPolicy;
    }
    if (this._enforcedTopRouteMatchers !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforcedTopRouteMatchers = this._enforcedTopRouteMatchers;
    }
    if (this._externalUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalUrl = this._externalUrl;
    }
    if (this._extraArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraArgs = this._extraArgs;
    }
    if (this._extraEnvs !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraEnvs = this._extraEnvs;
    }
    if (this._gossipConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gossipConfig = this._gossipConfig?.internalValue;
    }
    if (this._hostAliases?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostAliases = this._hostAliases?.internalValue;
    }
    if (this._hostNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostNetwork = this._hostNetwork;
    }
    if (this._image?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image?.internalValue;
    }
    if (this._imagePullSecrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullSecrets = this._imagePullSecrets?.internalValue;
    }
    if (this._initContainers !== undefined) {
      hasAnyValues = true;
      internalValueResult.initContainers = this._initContainers;
    }
    if (this._listenLocal !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenLocal = this._listenLocal;
    }
    if (this._livenessProbe !== undefined) {
      hasAnyValues = true;
      internalValueResult.livenessProbe = this._livenessProbe;
    }
    if (this._logFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.logFormat = this._logFormat;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._minReadySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.minReadySeconds = this._minReadySeconds;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._paused !== undefined) {
      hasAnyValues = true;
      internalValueResult.paused = this._paused;
    }
    if (this._podDisruptionBudget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podDisruptionBudget = this._podDisruptionBudget?.internalValue;
    }
    if (this._podMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podMetadata = this._podMetadata?.internalValue;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._portName !== undefined) {
      hasAnyValues = true;
      internalValueResult.portName = this._portName;
    }
    if (this._priorityClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityClassName = this._priorityClassName;
    }
    if (this._readinessGates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readinessGates = this._readinessGates?.internalValue;
    }
    if (this._readinessProbe !== undefined) {
      hasAnyValues = true;
      internalValueResult.readinessProbe = this._readinessProbe;
    }
    if (this._replicaCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaCount = this._replicaCount;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._retention !== undefined) {
      hasAnyValues = true;
      internalValueResult.retention = this._retention;
    }
    if (this._revisionHistoryLimitCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.revisionHistoryLimitCount = this._revisionHistoryLimitCount;
    }
    if (this._rollingUpdateStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollingUpdateStrategy = this._rollingUpdateStrategy;
    }
    if (this._routePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.routePrefix = this._routePrefix;
    }
    if (this._runtimeClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeClassName = this._runtimeClassName;
    }
    if (this._schedulerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulerName = this._schedulerName;
    }
    if (this._secrets !== undefined) {
      hasAnyValues = true;
      internalValueResult.secrets = this._secrets;
    }
    if (this._securityContext !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityContext = this._securityContext;
    }
    if (this._selectAllByDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectAllByDefault = this._selectAllByDefault;
    }
    if (this._serviceAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountName = this._serviceAccountName;
    }
    if (this._serviceScrapeSpec !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceScrapeSpec = this._serviceScrapeSpec;
    }
    if (this._serviceSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceSpec = this._serviceSpec?.internalValue;
    }
    if (this._startupProbe !== undefined) {
      hasAnyValues = true;
      internalValueResult.startupProbe = this._startupProbe;
    }
    if (this._storage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage?.internalValue;
    }
    if (this._templates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templates = this._templates?.internalValue;
    }
    if (this._terminationGracePeriodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminationGracePeriodSeconds = this._terminationGracePeriodSeconds;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    if (this._topologySpreadConstraints !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologySpreadConstraints = this._topologySpreadConstraints;
    }
    if (this._useDefaultResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDefaultResources = this._useDefaultResources;
    }
    if (this._useStrictSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.useStrictSecurity = this._useStrictSecurity;
    }
    if (this._useVmConfigReloader !== undefined) {
      hasAnyValues = true;
      internalValueResult.useVmConfigReloader = this._useVmConfigReloader;
    }
    if (this._volumeMounts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMounts = this._volumeMounts?.internalValue;
    }
    if (this._volumes !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes;
    }
    if (this._webConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webConfig = this._webConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalPeers = undefined;
      this._affinity = undefined;
      this._claimTemplates.internalValue = undefined;
      this._clusterAdvertiseAddress = undefined;
      this._clusterDomainName = undefined;
      this._configMaps = undefined;
      this._configNamespaceSelector.internalValue = undefined;
      this._configRawYaml = undefined;
      this._configReloaderExtraArgs = undefined;
      this._configReloaderImageTag = undefined;
      this._configReloaderResources.internalValue = undefined;
      this._configSecret = undefined;
      this._configSelector.internalValue = undefined;
      this._containers = undefined;
      this._disableNamespaceMatcher = undefined;
      this._disableRouteContinueEnforce = undefined;
      this._disableSelfServiceScrape = undefined;
      this._dnsConfig.internalValue = undefined;
      this._dnsPolicy = undefined;
      this._enforcedTopRouteMatchers = undefined;
      this._externalUrl = undefined;
      this._extraArgs = undefined;
      this._extraEnvs = undefined;
      this._gossipConfig.internalValue = undefined;
      this._hostAliases.internalValue = undefined;
      this._hostNetwork = undefined;
      this._image.internalValue = undefined;
      this._imagePullSecrets.internalValue = undefined;
      this._initContainers = undefined;
      this._listenLocal = undefined;
      this._livenessProbe = undefined;
      this._logFormat = undefined;
      this._logLevel = undefined;
      this._minReadySeconds = undefined;
      this._nodeSelector = undefined;
      this._paused = undefined;
      this._podDisruptionBudget.internalValue = undefined;
      this._podMetadata.internalValue = undefined;
      this._port = undefined;
      this._portName = undefined;
      this._priorityClassName = undefined;
      this._readinessGates.internalValue = undefined;
      this._readinessProbe = undefined;
      this._replicaCount = undefined;
      this._resources.internalValue = undefined;
      this._retention = undefined;
      this._revisionHistoryLimitCount = undefined;
      this._rollingUpdateStrategy = undefined;
      this._routePrefix = undefined;
      this._runtimeClassName = undefined;
      this._schedulerName = undefined;
      this._secrets = undefined;
      this._securityContext = undefined;
      this._selectAllByDefault = undefined;
      this._serviceAccountName = undefined;
      this._serviceScrapeSpec = undefined;
      this._serviceSpec.internalValue = undefined;
      this._startupProbe = undefined;
      this._storage.internalValue = undefined;
      this._templates.internalValue = undefined;
      this._terminationGracePeriodSeconds = undefined;
      this._tolerations.internalValue = undefined;
      this._topologySpreadConstraints = undefined;
      this._useDefaultResources = undefined;
      this._useStrictSecurity = undefined;
      this._useVmConfigReloader = undefined;
      this._volumeMounts.internalValue = undefined;
      this._volumes = undefined;
      this._webConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalPeers = value.additionalPeers;
      this._affinity = value.affinity;
      this._claimTemplates.internalValue = value.claimTemplates;
      this._clusterAdvertiseAddress = value.clusterAdvertiseAddress;
      this._clusterDomainName = value.clusterDomainName;
      this._configMaps = value.configMaps;
      this._configNamespaceSelector.internalValue = value.configNamespaceSelector;
      this._configRawYaml = value.configRawYaml;
      this._configReloaderExtraArgs = value.configReloaderExtraArgs;
      this._configReloaderImageTag = value.configReloaderImageTag;
      this._configReloaderResources.internalValue = value.configReloaderResources;
      this._configSecret = value.configSecret;
      this._configSelector.internalValue = value.configSelector;
      this._containers = value.containers;
      this._disableNamespaceMatcher = value.disableNamespaceMatcher;
      this._disableRouteContinueEnforce = value.disableRouteContinueEnforce;
      this._disableSelfServiceScrape = value.disableSelfServiceScrape;
      this._dnsConfig.internalValue = value.dnsConfig;
      this._dnsPolicy = value.dnsPolicy;
      this._enforcedTopRouteMatchers = value.enforcedTopRouteMatchers;
      this._externalUrl = value.externalUrl;
      this._extraArgs = value.extraArgs;
      this._extraEnvs = value.extraEnvs;
      this._gossipConfig.internalValue = value.gossipConfig;
      this._hostAliases.internalValue = value.hostAliases;
      this._hostNetwork = value.hostNetwork;
      this._image.internalValue = value.image;
      this._imagePullSecrets.internalValue = value.imagePullSecrets;
      this._initContainers = value.initContainers;
      this._listenLocal = value.listenLocal;
      this._livenessProbe = value.livenessProbe;
      this._logFormat = value.logFormat;
      this._logLevel = value.logLevel;
      this._minReadySeconds = value.minReadySeconds;
      this._nodeSelector = value.nodeSelector;
      this._paused = value.paused;
      this._podDisruptionBudget.internalValue = value.podDisruptionBudget;
      this._podMetadata.internalValue = value.podMetadata;
      this._port = value.port;
      this._portName = value.portName;
      this._priorityClassName = value.priorityClassName;
      this._readinessGates.internalValue = value.readinessGates;
      this._readinessProbe = value.readinessProbe;
      this._replicaCount = value.replicaCount;
      this._resources.internalValue = value.resources;
      this._retention = value.retention;
      this._revisionHistoryLimitCount = value.revisionHistoryLimitCount;
      this._rollingUpdateStrategy = value.rollingUpdateStrategy;
      this._routePrefix = value.routePrefix;
      this._runtimeClassName = value.runtimeClassName;
      this._schedulerName = value.schedulerName;
      this._secrets = value.secrets;
      this._securityContext = value.securityContext;
      this._selectAllByDefault = value.selectAllByDefault;
      this._serviceAccountName = value.serviceAccountName;
      this._serviceScrapeSpec = value.serviceScrapeSpec;
      this._serviceSpec.internalValue = value.serviceSpec;
      this._startupProbe = value.startupProbe;
      this._storage.internalValue = value.storage;
      this._templates.internalValue = value.templates;
      this._terminationGracePeriodSeconds = value.terminationGracePeriodSeconds;
      this._tolerations.internalValue = value.tolerations;
      this._topologySpreadConstraints = value.topologySpreadConstraints;
      this._useDefaultResources = value.useDefaultResources;
      this._useStrictSecurity = value.useStrictSecurity;
      this._useVmConfigReloader = value.useVmConfigReloader;
      this._volumeMounts.internalValue = value.volumeMounts;
      this._volumes = value.volumes;
      this._webConfig.internalValue = value.webConfig;
    }
  }

  // additional_peers - computed: false, optional: true, required: false
  private _additionalPeers?: string[]; 
  public get additionalPeers() {
    return this.getListAttribute('additional_peers');
  }
  public set additionalPeers(value: string[]) {
    this._additionalPeers = value;
  }
  public resetAdditionalPeers() {
    this._additionalPeers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPeersInput() {
    return this._additionalPeers;
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity?: { [key: string]: string }; 
  public get affinity() {
    return this.getStringMapAttribute('affinity');
  }
  public set affinity(value: { [key: string]: string }) {
    this._affinity = value;
  }
  public resetAffinity() {
    this._affinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity;
  }

  // claim_templates - computed: false, optional: true, required: false
  private _claimTemplates = new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplatesList(this, "claim_templates", false);
  public get claimTemplates() {
    return this._claimTemplates;
  }
  public putClaimTemplates(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecClaimTemplates[] | cdktf.IResolvable) {
    this._claimTemplates.internalValue = value;
  }
  public resetClaimTemplates() {
    this._claimTemplates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimTemplatesInput() {
    return this._claimTemplates.internalValue;
  }

  // cluster_advertise_address - computed: false, optional: true, required: false
  private _clusterAdvertiseAddress?: string; 
  public get clusterAdvertiseAddress() {
    return this.getStringAttribute('cluster_advertise_address');
  }
  public set clusterAdvertiseAddress(value: string) {
    this._clusterAdvertiseAddress = value;
  }
  public resetClusterAdvertiseAddress() {
    this._clusterAdvertiseAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterAdvertiseAddressInput() {
    return this._clusterAdvertiseAddress;
  }

  // cluster_domain_name - computed: false, optional: true, required: false
  private _clusterDomainName?: string; 
  public get clusterDomainName() {
    return this.getStringAttribute('cluster_domain_name');
  }
  public set clusterDomainName(value: string) {
    this._clusterDomainName = value;
  }
  public resetClusterDomainName() {
    this._clusterDomainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDomainNameInput() {
    return this._clusterDomainName;
  }

  // config_maps - computed: false, optional: true, required: false
  private _configMaps?: string[]; 
  public get configMaps() {
    return this.getListAttribute('config_maps');
  }
  public set configMaps(value: string[]) {
    this._configMaps = value;
  }
  public resetConfigMaps() {
    this._configMaps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapsInput() {
    return this._configMaps;
  }

  // config_namespace_selector - computed: false, optional: true, required: false
  private _configNamespaceSelector = new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigNamespaceSelectorOutputReference(this, "config_namespace_selector");
  public get configNamespaceSelector() {
    return this._configNamespaceSelector;
  }
  public putConfigNamespaceSelector(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigNamespaceSelector) {
    this._configNamespaceSelector.internalValue = value;
  }
  public resetConfigNamespaceSelector() {
    this._configNamespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configNamespaceSelectorInput() {
    return this._configNamespaceSelector.internalValue;
  }

  // config_raw_yaml - computed: false, optional: true, required: false
  private _configRawYaml?: string; 
  public get configRawYaml() {
    return this.getStringAttribute('config_raw_yaml');
  }
  public set configRawYaml(value: string) {
    this._configRawYaml = value;
  }
  public resetConfigRawYaml() {
    this._configRawYaml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configRawYamlInput() {
    return this._configRawYaml;
  }

  // config_reloader_extra_args - computed: false, optional: true, required: false
  private _configReloaderExtraArgs?: { [key: string]: string }; 
  public get configReloaderExtraArgs() {
    return this.getStringMapAttribute('config_reloader_extra_args');
  }
  public set configReloaderExtraArgs(value: { [key: string]: string }) {
    this._configReloaderExtraArgs = value;
  }
  public resetConfigReloaderExtraArgs() {
    this._configReloaderExtraArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configReloaderExtraArgsInput() {
    return this._configReloaderExtraArgs;
  }

  // config_reloader_image_tag - computed: false, optional: true, required: false
  private _configReloaderImageTag?: string; 
  public get configReloaderImageTag() {
    return this.getStringAttribute('config_reloader_image_tag');
  }
  public set configReloaderImageTag(value: string) {
    this._configReloaderImageTag = value;
  }
  public resetConfigReloaderImageTag() {
    this._configReloaderImageTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configReloaderImageTagInput() {
    return this._configReloaderImageTag;
  }

  // config_reloader_resources - computed: false, optional: true, required: false
  private _configReloaderResources = new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigReloaderResourcesOutputReference(this, "config_reloader_resources");
  public get configReloaderResources() {
    return this._configReloaderResources;
  }
  public putConfigReloaderResources(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigReloaderResources) {
    this._configReloaderResources.internalValue = value;
  }
  public resetConfigReloaderResources() {
    this._configReloaderResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configReloaderResourcesInput() {
    return this._configReloaderResources.internalValue;
  }

  // config_secret - computed: false, optional: true, required: false
  private _configSecret?: string; 
  public get configSecret() {
    return this.getStringAttribute('config_secret');
  }
  public set configSecret(value: string) {
    this._configSecret = value;
  }
  public resetConfigSecret() {
    this._configSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configSecretInput() {
    return this._configSecret;
  }

  // config_selector - computed: false, optional: true, required: false
  private _configSelector = new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigSelectorOutputReference(this, "config_selector");
  public get configSelector() {
    return this._configSelector;
  }
  public putConfigSelector(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecConfigSelector) {
    this._configSelector.internalValue = value;
  }
  public resetConfigSelector() {
    this._configSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configSelectorInput() {
    return this._configSelector.internalValue;
  }

  // containers - computed: false, optional: true, required: false
  private _containers?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get containers() {
    return this.interpolationForAttribute('containers');
  }
  public set containers(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._containers = value;
  }
  public resetContainers() {
    this._containers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containersInput() {
    return this._containers;
  }

  // disable_namespace_matcher - computed: false, optional: true, required: false
  private _disableNamespaceMatcher?: boolean | cdktf.IResolvable; 
  public get disableNamespaceMatcher() {
    return this.getBooleanAttribute('disable_namespace_matcher');
  }
  public set disableNamespaceMatcher(value: boolean | cdktf.IResolvable) {
    this._disableNamespaceMatcher = value;
  }
  public resetDisableNamespaceMatcher() {
    this._disableNamespaceMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableNamespaceMatcherInput() {
    return this._disableNamespaceMatcher;
  }

  // disable_route_continue_enforce - computed: false, optional: true, required: false
  private _disableRouteContinueEnforce?: boolean | cdktf.IResolvable; 
  public get disableRouteContinueEnforce() {
    return this.getBooleanAttribute('disable_route_continue_enforce');
  }
  public set disableRouteContinueEnforce(value: boolean | cdktf.IResolvable) {
    this._disableRouteContinueEnforce = value;
  }
  public resetDisableRouteContinueEnforce() {
    this._disableRouteContinueEnforce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableRouteContinueEnforceInput() {
    return this._disableRouteContinueEnforce;
  }

  // disable_self_service_scrape - computed: false, optional: true, required: false
  private _disableSelfServiceScrape?: boolean | cdktf.IResolvable; 
  public get disableSelfServiceScrape() {
    return this.getBooleanAttribute('disable_self_service_scrape');
  }
  public set disableSelfServiceScrape(value: boolean | cdktf.IResolvable) {
    this._disableSelfServiceScrape = value;
  }
  public resetDisableSelfServiceScrape() {
    this._disableSelfServiceScrape = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSelfServiceScrapeInput() {
    return this._disableSelfServiceScrape;
  }

  // dns_config - computed: false, optional: true, required: false
  private _dnsConfig = new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecDnsConfigOutputReference(this, "dns_config");
  public get dnsConfig() {
    return this._dnsConfig;
  }
  public putDnsConfig(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecDnsConfig) {
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

  // enforced_top_route_matchers - computed: false, optional: true, required: false
  private _enforcedTopRouteMatchers?: string[]; 
  public get enforcedTopRouteMatchers() {
    return this.getListAttribute('enforced_top_route_matchers');
  }
  public set enforcedTopRouteMatchers(value: string[]) {
    this._enforcedTopRouteMatchers = value;
  }
  public resetEnforcedTopRouteMatchers() {
    this._enforcedTopRouteMatchers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcedTopRouteMatchersInput() {
    return this._enforcedTopRouteMatchers;
  }

  // external_url - computed: false, optional: true, required: false
  private _externalUrl?: string; 
  public get externalUrl() {
    return this.getStringAttribute('external_url');
  }
  public set externalUrl(value: string) {
    this._externalUrl = value;
  }
  public resetExternalUrl() {
    this._externalUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalUrlInput() {
    return this._externalUrl;
  }

  // extra_args - computed: false, optional: true, required: false
  private _extraArgs?: { [key: string]: string }; 
  public get extraArgs() {
    return this.getStringMapAttribute('extra_args');
  }
  public set extraArgs(value: { [key: string]: string }) {
    this._extraArgs = value;
  }
  public resetExtraArgs() {
    this._extraArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraArgsInput() {
    return this._extraArgs;
  }

  // extra_envs - computed: false, optional: true, required: false
  private _extraEnvs?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get extraEnvs() {
    return this.interpolationForAttribute('extra_envs');
  }
  public set extraEnvs(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._extraEnvs = value;
  }
  public resetExtraEnvs() {
    this._extraEnvs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraEnvsInput() {
    return this._extraEnvs;
  }

  // gossip_config - computed: false, optional: true, required: false
  private _gossipConfig = new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfigOutputReference(this, "gossip_config");
  public get gossipConfig() {
    return this._gossipConfig;
  }
  public putGossipConfig(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecGossipConfig) {
    this._gossipConfig.internalValue = value;
  }
  public resetGossipConfig() {
    this._gossipConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gossipConfigInput() {
    return this._gossipConfig.internalValue;
  }

  // host_aliases - computed: false, optional: true, required: false
  private _hostAliases = new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecHostAliasesList(this, "host_aliases", false);
  public get hostAliases() {
    return this._hostAliases;
  }
  public putHostAliases(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecHostAliases[] | cdktf.IResolvable) {
    this._hostAliases.internalValue = value;
  }
  public resetHostAliases() {
    this._hostAliases.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostAliasesInput() {
    return this._hostAliases.internalValue;
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

  // image - computed: false, optional: true, required: false
  private _image = new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }
  public putImage(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecImage) {
    this._image.internalValue = value;
  }
  public resetImage() {
    this._image.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }

  // image_pull_secrets - computed: false, optional: true, required: false
  private _imagePullSecrets = new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecImagePullSecretsList(this, "image_pull_secrets", false);
  public get imagePullSecrets() {
    return this._imagePullSecrets;
  }
  public putImagePullSecrets(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecImagePullSecrets[] | cdktf.IResolvable) {
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
  private _initContainers?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get initContainers() {
    return this.interpolationForAttribute('init_containers');
  }
  public set initContainers(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._initContainers = value;
  }
  public resetInitContainers() {
    this._initContainers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initContainersInput() {
    return this._initContainers;
  }

  // listen_local - computed: false, optional: true, required: false
  private _listenLocal?: boolean | cdktf.IResolvable; 
  public get listenLocal() {
    return this.getBooleanAttribute('listen_local');
  }
  public set listenLocal(value: boolean | cdktf.IResolvable) {
    this._listenLocal = value;
  }
  public resetListenLocal() {
    this._listenLocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenLocalInput() {
    return this._listenLocal;
  }

  // liveness_probe - computed: false, optional: true, required: false
  private _livenessProbe?: { [key: string]: string }; 
  public get livenessProbe() {
    return this.getStringMapAttribute('liveness_probe');
  }
  public set livenessProbe(value: { [key: string]: string }) {
    this._livenessProbe = value;
  }
  public resetLivenessProbe() {
    this._livenessProbe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livenessProbeInput() {
    return this._livenessProbe;
  }

  // log_format - computed: false, optional: true, required: false
  private _logFormat?: string; 
  public get logFormat() {
    return this.getStringAttribute('log_format');
  }
  public set logFormat(value: string) {
    this._logFormat = value;
  }
  public resetLogFormat() {
    this._logFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFormatInput() {
    return this._logFormat;
  }

  // log_level - computed: false, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
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

  // pod_disruption_budget - computed: false, optional: true, required: false
  private _podDisruptionBudget = new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecPodDisruptionBudgetOutputReference(this, "pod_disruption_budget");
  public get podDisruptionBudget() {
    return this._podDisruptionBudget;
  }
  public putPodDisruptionBudget(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecPodDisruptionBudget) {
    this._podDisruptionBudget.internalValue = value;
  }
  public resetPodDisruptionBudget() {
    this._podDisruptionBudget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podDisruptionBudgetInput() {
    return this._podDisruptionBudget.internalValue;
  }

  // pod_metadata - computed: false, optional: true, required: false
  private _podMetadata = new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecPodMetadataOutputReference(this, "pod_metadata");
  public get podMetadata() {
    return this._podMetadata;
  }
  public putPodMetadata(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecPodMetadata) {
    this._podMetadata.internalValue = value;
  }
  public resetPodMetadata() {
    this._podMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podMetadataInput() {
    return this._podMetadata.internalValue;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // port_name - computed: false, optional: true, required: false
  private _portName?: string; 
  public get portName() {
    return this.getStringAttribute('port_name');
  }
  public set portName(value: string) {
    this._portName = value;
  }
  public resetPortName() {
    this._portName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portNameInput() {
    return this._portName;
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
  private _readinessGates = new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecReadinessGatesList(this, "readiness_gates", false);
  public get readinessGates() {
    return this._readinessGates;
  }
  public putReadinessGates(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecReadinessGates[] | cdktf.IResolvable) {
    this._readinessGates.internalValue = value;
  }
  public resetReadinessGates() {
    this._readinessGates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessGatesInput() {
    return this._readinessGates.internalValue;
  }

  // readiness_probe - computed: false, optional: true, required: false
  private _readinessProbe?: { [key: string]: string }; 
  public get readinessProbe() {
    return this.getStringMapAttribute('readiness_probe');
  }
  public set readinessProbe(value: { [key: string]: string }) {
    this._readinessProbe = value;
  }
  public resetReadinessProbe() {
    this._readinessProbe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessProbeInput() {
    return this._readinessProbe;
  }

  // replica_count - computed: false, optional: true, required: false
  private _replicaCount?: number; 
  public get replicaCount() {
    return this.getNumberAttribute('replica_count');
  }
  public set replicaCount(value: number) {
    this._replicaCount = value;
  }
  public resetReplicaCount() {
    this._replicaCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaCountInput() {
    return this._replicaCount;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // retention - computed: false, optional: true, required: false
  private _retention?: string; 
  public get retention() {
    return this.getStringAttribute('retention');
  }
  public set retention(value: string) {
    this._retention = value;
  }
  public resetRetention() {
    this._retention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInput() {
    return this._retention;
  }

  // revision_history_limit_count - computed: false, optional: true, required: false
  private _revisionHistoryLimitCount?: number; 
  public get revisionHistoryLimitCount() {
    return this.getNumberAttribute('revision_history_limit_count');
  }
  public set revisionHistoryLimitCount(value: number) {
    this._revisionHistoryLimitCount = value;
  }
  public resetRevisionHistoryLimitCount() {
    this._revisionHistoryLimitCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionHistoryLimitCountInput() {
    return this._revisionHistoryLimitCount;
  }

  // rolling_update_strategy - computed: false, optional: true, required: false
  private _rollingUpdateStrategy?: string; 
  public get rollingUpdateStrategy() {
    return this.getStringAttribute('rolling_update_strategy');
  }
  public set rollingUpdateStrategy(value: string) {
    this._rollingUpdateStrategy = value;
  }
  public resetRollingUpdateStrategy() {
    this._rollingUpdateStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollingUpdateStrategyInput() {
    return this._rollingUpdateStrategy;
  }

  // route_prefix - computed: false, optional: true, required: false
  private _routePrefix?: string; 
  public get routePrefix() {
    return this.getStringAttribute('route_prefix');
  }
  public set routePrefix(value: string) {
    this._routePrefix = value;
  }
  public resetRoutePrefix() {
    this._routePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routePrefixInput() {
    return this._routePrefix;
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

  // secrets - computed: false, optional: true, required: false
  private _secrets?: string[]; 
  public get secrets() {
    return this.getListAttribute('secrets');
  }
  public set secrets(value: string[]) {
    this._secrets = value;
  }
  public resetSecrets() {
    this._secrets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsInput() {
    return this._secrets;
  }

  // security_context - computed: false, optional: true, required: false
  private _securityContext?: { [key: string]: string }; 
  public get securityContext() {
    return this.getStringMapAttribute('security_context');
  }
  public set securityContext(value: { [key: string]: string }) {
    this._securityContext = value;
  }
  public resetSecurityContext() {
    this._securityContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityContextInput() {
    return this._securityContext;
  }

  // select_all_by_default - computed: false, optional: true, required: false
  private _selectAllByDefault?: boolean | cdktf.IResolvable; 
  public get selectAllByDefault() {
    return this.getBooleanAttribute('select_all_by_default');
  }
  public set selectAllByDefault(value: boolean | cdktf.IResolvable) {
    this._selectAllByDefault = value;
  }
  public resetSelectAllByDefault() {
    this._selectAllByDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectAllByDefaultInput() {
    return this._selectAllByDefault;
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

  // service_scrape_spec - computed: false, optional: true, required: false
  private _serviceScrapeSpec?: { [key: string]: string }; 
  public get serviceScrapeSpec() {
    return this.getStringMapAttribute('service_scrape_spec');
  }
  public set serviceScrapeSpec(value: { [key: string]: string }) {
    this._serviceScrapeSpec = value;
  }
  public resetServiceScrapeSpec() {
    this._serviceScrapeSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceScrapeSpecInput() {
    return this._serviceScrapeSpec;
  }

  // service_spec - computed: false, optional: true, required: false
  private _serviceSpec = new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecServiceSpecOutputReference(this, "service_spec");
  public get serviceSpec() {
    return this._serviceSpec;
  }
  public putServiceSpec(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecServiceSpec) {
    this._serviceSpec.internalValue = value;
  }
  public resetServiceSpec() {
    this._serviceSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceSpecInput() {
    return this._serviceSpec.internalValue;
  }

  // startup_probe - computed: false, optional: true, required: false
  private _startupProbe?: { [key: string]: string }; 
  public get startupProbe() {
    return this.getStringMapAttribute('startup_probe');
  }
  public set startupProbe(value: { [key: string]: string }) {
    this._startupProbe = value;
  }
  public resetStartupProbe() {
    this._startupProbe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupProbeInput() {
    return this._startupProbe;
  }

  // storage - computed: false, optional: true, required: false
  private _storage = new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecStorage) {
    this._storage.internalValue = value;
  }
  public resetStorage() {
    this._storage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }

  // templates - computed: false, optional: true, required: false
  private _templates = new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecTemplatesList(this, "templates", false);
  public get templates() {
    return this._templates;
  }
  public putTemplates(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecTemplates[] | cdktf.IResolvable) {
    this._templates.internalValue = value;
  }
  public resetTemplates() {
    this._templates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templatesInput() {
    return this._templates.internalValue;
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
  private _tolerations = new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecTolerations[] | cdktf.IResolvable) {
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
  private _topologySpreadConstraints?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get topologySpreadConstraints() {
    return this.interpolationForAttribute('topology_spread_constraints');
  }
  public set topologySpreadConstraints(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._topologySpreadConstraints = value;
  }
  public resetTopologySpreadConstraints() {
    this._topologySpreadConstraints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologySpreadConstraintsInput() {
    return this._topologySpreadConstraints;
  }

  // use_default_resources - computed: false, optional: true, required: false
  private _useDefaultResources?: boolean | cdktf.IResolvable; 
  public get useDefaultResources() {
    return this.getBooleanAttribute('use_default_resources');
  }
  public set useDefaultResources(value: boolean | cdktf.IResolvable) {
    this._useDefaultResources = value;
  }
  public resetUseDefaultResources() {
    this._useDefaultResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDefaultResourcesInput() {
    return this._useDefaultResources;
  }

  // use_strict_security - computed: false, optional: true, required: false
  private _useStrictSecurity?: boolean | cdktf.IResolvable; 
  public get useStrictSecurity() {
    return this.getBooleanAttribute('use_strict_security');
  }
  public set useStrictSecurity(value: boolean | cdktf.IResolvable) {
    this._useStrictSecurity = value;
  }
  public resetUseStrictSecurity() {
    this._useStrictSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useStrictSecurityInput() {
    return this._useStrictSecurity;
  }

  // use_vm_config_reloader - computed: false, optional: true, required: false
  private _useVmConfigReloader?: boolean | cdktf.IResolvable; 
  public get useVmConfigReloader() {
    return this.getBooleanAttribute('use_vm_config_reloader');
  }
  public set useVmConfigReloader(value: boolean | cdktf.IResolvable) {
    this._useVmConfigReloader = value;
  }
  public resetUseVmConfigReloader() {
    this._useVmConfigReloader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useVmConfigReloaderInput() {
    return this._useVmConfigReloader;
  }

  // volume_mounts - computed: false, optional: true, required: false
  private _volumeMounts = new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecVolumeMountsList(this, "volume_mounts", false);
  public get volumeMounts() {
    return this._volumeMounts;
  }
  public putVolumeMounts(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecVolumeMounts[] | cdktf.IResolvable) {
    this._volumeMounts.internalValue = value;
  }
  public resetVolumeMounts() {
    this._volumeMounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeMountsInput() {
    return this._volumeMounts.internalValue;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get volumes() {
    return this.interpolationForAttribute('volumes');
  }
  public set volumes(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._volumes = value;
  }
  public resetVolumes() {
    this._volumes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes;
  }

  // web_config - computed: false, optional: true, required: false
  private _webConfig = new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfigOutputReference(this, "web_config");
  public get webConfig() {
    return this._webConfig;
  }
  public putWebConfig(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecWebConfig) {
    this._webConfig.internalValue = value;
  }
  public resetWebConfig() {
    this._webConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webConfigInput() {
    return this._webConfig.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest k8s_operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest}
*/
export class DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest k8s_operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_operator_victoriametrics_com_vm_alertmanager_v1beta1_manifest',
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
  private _metadata = new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpec) {
    this._spec.internalValue = value;
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
      metadata: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SOperatorVictoriametricsComVmAlertmanagerV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
