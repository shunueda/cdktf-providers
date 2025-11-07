// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/crd_projectcalico_org_kube_controllers_configuration_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/crd_projectcalico_org_kube_controllers_configuration_v1_manifest#metadata DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1Manifest#metadata}
  */
  readonly metadata: DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestMetadata;
  /**
  * KubeControllersConfigurationSpec contains the values of the Kubernetes controllers configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/crd_projectcalico_org_kube_controllers_configuration_v1_manifest#spec DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1Manifest#spec}
  */
  readonly spec?: DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpec;
}
export interface DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/crd_projectcalico_org_kube_controllers_configuration_v1_manifest#annotations DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/crd_projectcalico_org_kube_controllers_configuration_v1_manifest#labels DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/crd_projectcalico_org_kube_controllers_configuration_v1_manifest#name DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestMetadataToTerraform(struct?: DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestMetadataToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersNamespace {
  /**
  * ReconcilerPeriod is the period to perform reconciliation with the Calico datastore. [Default: 5m]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/crd_projectcalico_org_kube_controllers_configuration_v1_manifest#reconciler_period DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1Manifest#reconciler_period}
  */
  readonly reconcilerPeriod?: string;
}

export function dataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersNamespaceToTerraform(struct?: DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersNamespace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reconciler_period: cdktf.stringToTerraform(struct!.reconcilerPeriod),
  }
}


export function dataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersNamespaceToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersNamespace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reconciler_period: {
      value: cdktf.stringToHclTerraform(struct!.reconcilerPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersNamespaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersNamespace | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reconcilerPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.reconcilerPeriod = this._reconcilerPeriod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersNamespace | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._reconcilerPeriod = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._reconcilerPeriod = value.reconcilerPeriod;
    }
  }

  // reconciler_period - computed: false, optional: true, required: false
  private _reconcilerPeriod?: string; 
  public get reconcilerPeriod() {
    return this.getStringAttribute('reconciler_period');
  }
  public set reconcilerPeriod(value: string) {
    this._reconcilerPeriod = value;
  }
  public resetReconcilerPeriod() {
    this._reconcilerPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reconcilerPeriodInput() {
    return this._reconcilerPeriod;
  }
}
export interface DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersNodeHostEndpoint {
  /**
  * AutoCreate enables automatic creation of host endpoints for every node. [Default: Disabled]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/crd_projectcalico_org_kube_controllers_configuration_v1_manifest#auto_create DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1Manifest#auto_create}
  */
  readonly autoCreate?: string;
}

export function dataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersNodeHostEndpointToTerraform(struct?: DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersNodeHostEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_create: cdktf.stringToTerraform(struct!.autoCreate),
  }
}


export function dataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersNodeHostEndpointToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersNodeHostEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_create: {
      value: cdktf.stringToHclTerraform(struct!.autoCreate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersNodeHostEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersNodeHostEndpoint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoCreate !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoCreate = this._autoCreate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersNodeHostEndpoint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoCreate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoCreate = value.autoCreate;
    }
  }

  // auto_create - computed: false, optional: true, required: false
  private _autoCreate?: string; 
  public get autoCreate() {
    return this.getStringAttribute('auto_create');
  }
  public set autoCreate(value: string) {
    this._autoCreate = value;
  }
  public resetAutoCreate() {
    this._autoCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCreateInput() {
    return this._autoCreate;
  }
}
export interface DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersNode {
  /**
  * HostEndpoint controls syncing nodes to host endpoints. Disabled by default, set to nil to disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/crd_projectcalico_org_kube_controllers_configuration_v1_manifest#host_endpoint DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1Manifest#host_endpoint}
  */
  readonly hostEndpoint?: DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersNodeHostEndpoint;
  /**
  * LeakGracePeriod is the period used by the controller to determine if an IP address has been leaked. Set to 0 to disable IP garbage collection. [Default: 15m]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/crd_projectcalico_org_kube_controllers_configuration_v1_manifest#leak_grace_period DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1Manifest#leak_grace_period}
  */
  readonly leakGracePeriod?: string;
  /**
  * ReconcilerPeriod is the period to perform reconciliation with the Calico datastore. [Default: 5m]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/crd_projectcalico_org_kube_controllers_configuration_v1_manifest#reconciler_period DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1Manifest#reconciler_period}
  */
  readonly reconcilerPeriod?: string;
  /**
  * SyncLabels controls whether to copy Kubernetes node labels to Calico nodes. [Default: Enabled]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/crd_projectcalico_org_kube_controllers_configuration_v1_manifest#sync_labels DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1Manifest#sync_labels}
  */
  readonly syncLabels?: string;
}

export function dataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersNodeToTerraform(struct?: DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersNode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_endpoint: dataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersNodeHostEndpointToTerraform(struct!.hostEndpoint),
    leak_grace_period: cdktf.stringToTerraform(struct!.leakGracePeriod),
    reconciler_period: cdktf.stringToTerraform(struct!.reconcilerPeriod),
    sync_labels: cdktf.stringToTerraform(struct!.syncLabels),
  }
}


export function dataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersNodeToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersNode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_endpoint: {
      value: dataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersNodeHostEndpointToHclTerraform(struct!.hostEndpoint),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersNodeHostEndpoint",
    },
    leak_grace_period: {
      value: cdktf.stringToHclTerraform(struct!.leakGracePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reconciler_period: {
      value: cdktf.stringToHclTerraform(struct!.reconcilerPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sync_labels: {
      value: cdktf.stringToHclTerraform(struct!.syncLabels),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersNodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersNode | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostEndpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostEndpoint = this._hostEndpoint?.internalValue;
    }
    if (this._leakGracePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.leakGracePeriod = this._leakGracePeriod;
    }
    if (this._reconcilerPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.reconcilerPeriod = this._reconcilerPeriod;
    }
    if (this._syncLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncLabels = this._syncLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersNode | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostEndpoint.internalValue = undefined;
      this._leakGracePeriod = undefined;
      this._reconcilerPeriod = undefined;
      this._syncLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostEndpoint.internalValue = value.hostEndpoint;
      this._leakGracePeriod = value.leakGracePeriod;
      this._reconcilerPeriod = value.reconcilerPeriod;
      this._syncLabels = value.syncLabels;
    }
  }

  // host_endpoint - computed: false, optional: true, required: false
  private _hostEndpoint = new DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersNodeHostEndpointOutputReference(this, "host_endpoint");
  public get hostEndpoint() {
    return this._hostEndpoint;
  }
  public putHostEndpoint(value: DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersNodeHostEndpoint) {
    this._hostEndpoint.internalValue = value;
  }
  public resetHostEndpoint() {
    this._hostEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostEndpointInput() {
    return this._hostEndpoint.internalValue;
  }

  // leak_grace_period - computed: false, optional: true, required: false
  private _leakGracePeriod?: string; 
  public get leakGracePeriod() {
    return this.getStringAttribute('leak_grace_period');
  }
  public set leakGracePeriod(value: string) {
    this._leakGracePeriod = value;
  }
  public resetLeakGracePeriod() {
    this._leakGracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leakGracePeriodInput() {
    return this._leakGracePeriod;
  }

  // reconciler_period - computed: false, optional: true, required: false
  private _reconcilerPeriod?: string; 
  public get reconcilerPeriod() {
    return this.getStringAttribute('reconciler_period');
  }
  public set reconcilerPeriod(value: string) {
    this._reconcilerPeriod = value;
  }
  public resetReconcilerPeriod() {
    this._reconcilerPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reconcilerPeriodInput() {
    return this._reconcilerPeriod;
  }

  // sync_labels - computed: false, optional: true, required: false
  private _syncLabels?: string; 
  public get syncLabels() {
    return this.getStringAttribute('sync_labels');
  }
  public set syncLabels(value: string) {
    this._syncLabels = value;
  }
  public resetSyncLabels() {
    this._syncLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncLabelsInput() {
    return this._syncLabels;
  }
}
export interface DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersPolicy {
  /**
  * ReconcilerPeriod is the period to perform reconciliation with the Calico datastore. [Default: 5m]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/crd_projectcalico_org_kube_controllers_configuration_v1_manifest#reconciler_period DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1Manifest#reconciler_period}
  */
  readonly reconcilerPeriod?: string;
}

export function dataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersPolicyToTerraform(struct?: DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reconciler_period: cdktf.stringToTerraform(struct!.reconcilerPeriod),
  }
}


export function dataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersPolicyToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reconciler_period: {
      value: cdktf.stringToHclTerraform(struct!.reconcilerPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reconcilerPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.reconcilerPeriod = this._reconcilerPeriod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._reconcilerPeriod = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._reconcilerPeriod = value.reconcilerPeriod;
    }
  }

  // reconciler_period - computed: false, optional: true, required: false
  private _reconcilerPeriod?: string; 
  public get reconcilerPeriod() {
    return this.getStringAttribute('reconciler_period');
  }
  public set reconcilerPeriod(value: string) {
    this._reconcilerPeriod = value;
  }
  public resetReconcilerPeriod() {
    this._reconcilerPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reconcilerPeriodInput() {
    return this._reconcilerPeriod;
  }
}
export interface DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersServiceAccount {
  /**
  * ReconcilerPeriod is the period to perform reconciliation with the Calico datastore. [Default: 5m]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/crd_projectcalico_org_kube_controllers_configuration_v1_manifest#reconciler_period DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1Manifest#reconciler_period}
  */
  readonly reconcilerPeriod?: string;
}

export function dataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersServiceAccountToTerraform(struct?: DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersServiceAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reconciler_period: cdktf.stringToTerraform(struct!.reconcilerPeriod),
  }
}


export function dataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersServiceAccountToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersServiceAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reconciler_period: {
      value: cdktf.stringToHclTerraform(struct!.reconcilerPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersServiceAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersServiceAccount | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reconcilerPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.reconcilerPeriod = this._reconcilerPeriod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersServiceAccount | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._reconcilerPeriod = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._reconcilerPeriod = value.reconcilerPeriod;
    }
  }

  // reconciler_period - computed: false, optional: true, required: false
  private _reconcilerPeriod?: string; 
  public get reconcilerPeriod() {
    return this.getStringAttribute('reconciler_period');
  }
  public set reconcilerPeriod(value: string) {
    this._reconcilerPeriod = value;
  }
  public resetReconcilerPeriod() {
    this._reconcilerPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reconcilerPeriodInput() {
    return this._reconcilerPeriod;
  }
}
export interface DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersWorkloadEndpoint {
  /**
  * ReconcilerPeriod is the period to perform reconciliation with the Calico datastore. [Default: 5m]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/crd_projectcalico_org_kube_controllers_configuration_v1_manifest#reconciler_period DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1Manifest#reconciler_period}
  */
  readonly reconcilerPeriod?: string;
}

export function dataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersWorkloadEndpointToTerraform(struct?: DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersWorkloadEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reconciler_period: cdktf.stringToTerraform(struct!.reconcilerPeriod),
  }
}


export function dataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersWorkloadEndpointToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersWorkloadEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reconciler_period: {
      value: cdktf.stringToHclTerraform(struct!.reconcilerPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersWorkloadEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersWorkloadEndpoint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reconcilerPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.reconcilerPeriod = this._reconcilerPeriod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersWorkloadEndpoint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._reconcilerPeriod = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._reconcilerPeriod = value.reconcilerPeriod;
    }
  }

  // reconciler_period - computed: false, optional: true, required: false
  private _reconcilerPeriod?: string; 
  public get reconcilerPeriod() {
    return this.getStringAttribute('reconciler_period');
  }
  public set reconcilerPeriod(value: string) {
    this._reconcilerPeriod = value;
  }
  public resetReconcilerPeriod() {
    this._reconcilerPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reconcilerPeriodInput() {
    return this._reconcilerPeriod;
  }
}
export interface DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllers {
  /**
  * Namespace enables and configures the namespace controller. Enabled by default, set to nil to disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/crd_projectcalico_org_kube_controllers_configuration_v1_manifest#namespace DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1Manifest#namespace}
  */
  readonly namespace?: DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersNamespace;
  /**
  * Node enables and configures the node controller. Enabled by default, set to nil to disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/crd_projectcalico_org_kube_controllers_configuration_v1_manifest#node DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1Manifest#node}
  */
  readonly nodeAttribute?: DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersNode;
  /**
  * Policy enables and configures the policy controller. Enabled by default, set to nil to disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/crd_projectcalico_org_kube_controllers_configuration_v1_manifest#policy DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1Manifest#policy}
  */
  readonly policy?: DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersPolicy;
  /**
  * ServiceAccount enables and configures the service account controller. Enabled by default, set to nil to disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/crd_projectcalico_org_kube_controllers_configuration_v1_manifest#service_account DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1Manifest#service_account}
  */
  readonly serviceAccount?: DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersServiceAccount;
  /**
  * WorkloadEndpoint enables and configures the workload endpoint controller. Enabled by default, set to nil to disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/crd_projectcalico_org_kube_controllers_configuration_v1_manifest#workload_endpoint DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1Manifest#workload_endpoint}
  */
  readonly workloadEndpoint?: DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersWorkloadEndpoint;
}

export function dataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersToTerraform(struct?: DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace: dataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersNamespaceToTerraform(struct!.namespace),
    node: dataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersNodeToTerraform(struct!.nodeAttribute),
    policy: dataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersPolicyToTerraform(struct!.policy),
    service_account: dataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersServiceAccountToTerraform(struct!.serviceAccount),
    workload_endpoint: dataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersWorkloadEndpointToTerraform(struct!.workloadEndpoint),
  }
}


export function dataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace: {
      value: dataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersNamespaceToHclTerraform(struct!.namespace),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersNamespace",
    },
    node: {
      value: dataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersNodeToHclTerraform(struct!.nodeAttribute),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersNode",
    },
    policy: {
      value: dataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersPolicyToHclTerraform(struct!.policy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersPolicy",
    },
    service_account: {
      value: dataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersServiceAccountToHclTerraform(struct!.serviceAccount),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersServiceAccount",
    },
    workload_endpoint: {
      value: dataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersWorkloadEndpointToHclTerraform(struct!.workloadEndpoint),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersWorkloadEndpoint",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace?.internalValue;
    }
    if (this._node?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAttribute = this._node?.internalValue;
    }
    if (this._policy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy?.internalValue;
    }
    if (this._serviceAccount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount?.internalValue;
    }
    if (this._workloadEndpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadEndpoint = this._workloadEndpoint?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespace.internalValue = undefined;
      this._node.internalValue = undefined;
      this._policy.internalValue = undefined;
      this._serviceAccount.internalValue = undefined;
      this._workloadEndpoint.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespace.internalValue = value.namespace;
      this._node.internalValue = value.nodeAttribute;
      this._policy.internalValue = value.policy;
      this._serviceAccount.internalValue = value.serviceAccount;
      this._workloadEndpoint.internalValue = value.workloadEndpoint;
    }
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace = new DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersNamespaceOutputReference(this, "namespace");
  public get namespace() {
    return this._namespace;
  }
  public putNamespace(value: DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersNamespace) {
    this._namespace.internalValue = value;
  }
  public resetNamespace() {
    this._namespace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace.internalValue;
  }

  // node - computed: false, optional: true, required: false
  private _node = new DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersNodeOutputReference(this, "node");
  public get nodeAttribute() {
    return this._node;
  }
  public putNodeAttribute(value: DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersNode) {
    this._node.internalValue = value;
  }
  public resetNodeAttribute() {
    this._node.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAttributeInput() {
    return this._node.internalValue;
  }

  // policy - computed: false, optional: true, required: false
  private _policy = new DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersPolicyOutputReference(this, "policy");
  public get policy() {
    return this._policy;
  }
  public putPolicy(value: DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersPolicy) {
    this._policy.internalValue = value;
  }
  public resetPolicy() {
    this._policy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy.internalValue;
  }

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount = new DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersServiceAccountOutputReference(this, "service_account");
  public get serviceAccount() {
    return this._serviceAccount;
  }
  public putServiceAccount(value: DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersServiceAccount) {
    this._serviceAccount.internalValue = value;
  }
  public resetServiceAccount() {
    this._serviceAccount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount.internalValue;
  }

  // workload_endpoint - computed: false, optional: true, required: false
  private _workloadEndpoint = new DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersWorkloadEndpointOutputReference(this, "workload_endpoint");
  public get workloadEndpoint() {
    return this._workloadEndpoint;
  }
  public putWorkloadEndpoint(value: DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersWorkloadEndpoint) {
    this._workloadEndpoint.internalValue = value;
  }
  public resetWorkloadEndpoint() {
    this._workloadEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadEndpointInput() {
    return this._workloadEndpoint.internalValue;
  }
}
export interface DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpec {
  /**
  * Controllers enables and configures individual Kubernetes controllers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/crd_projectcalico_org_kube_controllers_configuration_v1_manifest#controllers DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1Manifest#controllers}
  */
  readonly controllers: DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllers;
  /**
  * DebugProfilePort configures the port to serve memory and cpu profiles on. If not specified, profiling is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/crd_projectcalico_org_kube_controllers_configuration_v1_manifest#debug_profile_port DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1Manifest#debug_profile_port}
  */
  readonly debugProfilePort?: number;
  /**
  * EtcdV3CompactionPeriod is the period between etcdv3 compaction requests. Set to 0 to disable. [Default: 10m]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/crd_projectcalico_org_kube_controllers_configuration_v1_manifest#etcd_v3_compaction_period DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1Manifest#etcd_v3_compaction_period}
  */
  readonly etcdV3CompactionPeriod?: string;
  /**
  * HealthChecks enables or disables support for health checks [Default: Enabled]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/crd_projectcalico_org_kube_controllers_configuration_v1_manifest#health_checks DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1Manifest#health_checks}
  */
  readonly healthChecks?: string;
  /**
  * LogSeverityScreen is the log severity above which logs are sent to the stdout. [Default: Info]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/crd_projectcalico_org_kube_controllers_configuration_v1_manifest#log_severity_screen DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1Manifest#log_severity_screen}
  */
  readonly logSeverityScreen?: string;
  /**
  * PrometheusMetricsPort is the TCP port that the Prometheus metrics server should bind to. Set to 0 to disable. [Default: 9094]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/crd_projectcalico_org_kube_controllers_configuration_v1_manifest#prometheus_metrics_port DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1Manifest#prometheus_metrics_port}
  */
  readonly prometheusMetricsPort?: number;
}

export function dataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecToTerraform(struct?: DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    controllers: dataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersToTerraform(struct!.controllers),
    debug_profile_port: cdktf.numberToTerraform(struct!.debugProfilePort),
    etcd_v3_compaction_period: cdktf.stringToTerraform(struct!.etcdV3CompactionPeriod),
    health_checks: cdktf.stringToTerraform(struct!.healthChecks),
    log_severity_screen: cdktf.stringToTerraform(struct!.logSeverityScreen),
    prometheus_metrics_port: cdktf.numberToTerraform(struct!.prometheusMetricsPort),
  }
}


export function dataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    controllers: {
      value: dataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersToHclTerraform(struct!.controllers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllers",
    },
    debug_profile_port: {
      value: cdktf.numberToHclTerraform(struct!.debugProfilePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    etcd_v3_compaction_period: {
      value: cdktf.stringToHclTerraform(struct!.etcdV3CompactionPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health_checks: {
      value: cdktf.stringToHclTerraform(struct!.healthChecks),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_severity_screen: {
      value: cdktf.stringToHclTerraform(struct!.logSeverityScreen),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prometheus_metrics_port: {
      value: cdktf.numberToHclTerraform(struct!.prometheusMetricsPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controllers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllers = this._controllers?.internalValue;
    }
    if (this._debugProfilePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugProfilePort = this._debugProfilePort;
    }
    if (this._etcdV3CompactionPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.etcdV3CompactionPeriod = this._etcdV3CompactionPeriod;
    }
    if (this._healthChecks !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthChecks = this._healthChecks;
    }
    if (this._logSeverityScreen !== undefined) {
      hasAnyValues = true;
      internalValueResult.logSeverityScreen = this._logSeverityScreen;
    }
    if (this._prometheusMetricsPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheusMetricsPort = this._prometheusMetricsPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._controllers.internalValue = undefined;
      this._debugProfilePort = undefined;
      this._etcdV3CompactionPeriod = undefined;
      this._healthChecks = undefined;
      this._logSeverityScreen = undefined;
      this._prometheusMetricsPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._controllers.internalValue = value.controllers;
      this._debugProfilePort = value.debugProfilePort;
      this._etcdV3CompactionPeriod = value.etcdV3CompactionPeriod;
      this._healthChecks = value.healthChecks;
      this._logSeverityScreen = value.logSeverityScreen;
      this._prometheusMetricsPort = value.prometheusMetricsPort;
    }
  }

  // controllers - computed: false, optional: false, required: true
  private _controllers = new DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllersOutputReference(this, "controllers");
  public get controllers() {
    return this._controllers;
  }
  public putControllers(value: DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecControllers) {
    this._controllers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controllersInput() {
    return this._controllers.internalValue;
  }

  // debug_profile_port - computed: false, optional: true, required: false
  private _debugProfilePort?: number; 
  public get debugProfilePort() {
    return this.getNumberAttribute('debug_profile_port');
  }
  public set debugProfilePort(value: number) {
    this._debugProfilePort = value;
  }
  public resetDebugProfilePort() {
    this._debugProfilePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugProfilePortInput() {
    return this._debugProfilePort;
  }

  // etcd_v3_compaction_period - computed: false, optional: true, required: false
  private _etcdV3CompactionPeriod?: string; 
  public get etcdV3CompactionPeriod() {
    return this.getStringAttribute('etcd_v3_compaction_period');
  }
  public set etcdV3CompactionPeriod(value: string) {
    this._etcdV3CompactionPeriod = value;
  }
  public resetEtcdV3CompactionPeriod() {
    this._etcdV3CompactionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etcdV3CompactionPeriodInput() {
    return this._etcdV3CompactionPeriod;
  }

  // health_checks - computed: false, optional: true, required: false
  private _healthChecks?: string; 
  public get healthChecks() {
    return this.getStringAttribute('health_checks');
  }
  public set healthChecks(value: string) {
    this._healthChecks = value;
  }
  public resetHealthChecks() {
    this._healthChecks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthChecksInput() {
    return this._healthChecks;
  }

  // log_severity_screen - computed: false, optional: true, required: false
  private _logSeverityScreen?: string; 
  public get logSeverityScreen() {
    return this.getStringAttribute('log_severity_screen');
  }
  public set logSeverityScreen(value: string) {
    this._logSeverityScreen = value;
  }
  public resetLogSeverityScreen() {
    this._logSeverityScreen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSeverityScreenInput() {
    return this._logSeverityScreen;
  }

  // prometheus_metrics_port - computed: false, optional: true, required: false
  private _prometheusMetricsPort?: number; 
  public get prometheusMetricsPort() {
    return this.getNumberAttribute('prometheus_metrics_port');
  }
  public set prometheusMetricsPort(value: number) {
    this._prometheusMetricsPort = value;
  }
  public resetPrometheusMetricsPort() {
    this._prometheusMetricsPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusMetricsPortInput() {
    return this._prometheusMetricsPort;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/crd_projectcalico_org_kube_controllers_configuration_v1_manifest k8s_crd_projectcalico_org_kube_controllers_configuration_v1_manifest}
*/
export class DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_crd_projectcalico_org_kube_controllers_configuration_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1Manifest to import
  * @param importFromId The id of the existing DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/crd_projectcalico_org_kube_controllers_configuration_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_crd_projectcalico_org_kube_controllers_configuration_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/crd_projectcalico_org_kube_controllers_configuration_v1_manifest k8s_crd_projectcalico_org_kube_controllers_configuration_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_crd_projectcalico_org_kube_controllers_configuration_v1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.3'
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
  private _metadata = new DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpec) {
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
      metadata: dataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestMetadata",
      },
      spec: {
        value: dataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCrdProjectcalicoOrgKubeControllersConfigurationV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
