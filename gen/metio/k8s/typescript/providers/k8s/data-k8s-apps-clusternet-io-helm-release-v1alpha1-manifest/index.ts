// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_helm_release_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAppsClusternetIoHelmReleaseV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_helm_release_v1alpha1_manifest#metadata DataK8SAppsClusternetIoHelmReleaseV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SAppsClusternetIoHelmReleaseV1Alpha1ManifestMetadata;
  /**
  * HelmReleaseSpec defines the spec of HelmRelease
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_helm_release_v1alpha1_manifest#spec DataK8SAppsClusternetIoHelmReleaseV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SAppsClusternetIoHelmReleaseV1Alpha1ManifestSpec;
}
export interface DataK8SAppsClusternetIoHelmReleaseV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_helm_release_v1alpha1_manifest#annotations DataK8SAppsClusternetIoHelmReleaseV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_helm_release_v1alpha1_manifest#labels DataK8SAppsClusternetIoHelmReleaseV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_helm_release_v1alpha1_manifest#name DataK8SAppsClusternetIoHelmReleaseV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_helm_release_v1alpha1_manifest#namespace DataK8SAppsClusternetIoHelmReleaseV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAppsClusternetIoHelmReleaseV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SAppsClusternetIoHelmReleaseV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAppsClusternetIoHelmReleaseV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SAppsClusternetIoHelmReleaseV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAppsClusternetIoHelmReleaseV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsClusternetIoHelmReleaseV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsClusternetIoHelmReleaseV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsClusternetIoHelmReleaseV1Alpha1ManifestSpecChartPullSecret {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_helm_release_v1alpha1_manifest#name DataK8SAppsClusternetIoHelmReleaseV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_helm_release_v1alpha1_manifest#namespace DataK8SAppsClusternetIoHelmReleaseV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SAppsClusternetIoHelmReleaseV1Alpha1ManifestSpecChartPullSecretToTerraform(struct?: DataK8SAppsClusternetIoHelmReleaseV1Alpha1ManifestSpecChartPullSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SAppsClusternetIoHelmReleaseV1Alpha1ManifestSpecChartPullSecretToHclTerraform(struct?: DataK8SAppsClusternetIoHelmReleaseV1Alpha1ManifestSpecChartPullSecret | cdktf.IResolvable): any {
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

export class DataK8SAppsClusternetIoHelmReleaseV1Alpha1ManifestSpecChartPullSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsClusternetIoHelmReleaseV1Alpha1ManifestSpecChartPullSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SAppsClusternetIoHelmReleaseV1Alpha1ManifestSpecChartPullSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._namespace = value.namespace;
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
export interface DataK8SAppsClusternetIoHelmReleaseV1Alpha1ManifestSpec {
  /**
  * Atomic, for install case, if true, will uninstall failed release.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_helm_release_v1alpha1_manifest#atomic DataK8SAppsClusternetIoHelmReleaseV1Alpha1Manifest#atomic}
  */
  readonly atomic?: boolean | cdktf.IResolvable;
  /**
  * Chart is the name of a Helm Chart in the Repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_helm_release_v1alpha1_manifest#chart DataK8SAppsClusternetIoHelmReleaseV1Alpha1Manifest#chart}
  */
  readonly chart: string;
  /**
  * ChartPullSecret is the name of the secret that contains the auth information for the chart repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_helm_release_v1alpha1_manifest#chart_pull_secret DataK8SAppsClusternetIoHelmReleaseV1Alpha1Manifest#chart_pull_secret}
  */
  readonly chartPullSecret?: DataK8SAppsClusternetIoHelmReleaseV1Alpha1ManifestSpecChartPullSecret;
  /**
  * CreateNamespace create namespace when install helm release
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_helm_release_v1alpha1_manifest#create_namespace DataK8SAppsClusternetIoHelmReleaseV1Alpha1Manifest#create_namespace}
  */
  readonly createNamespace?: boolean | cdktf.IResolvable;
  /**
  * DisableHooks disables hook processing if set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_helm_release_v1alpha1_manifest#disable_hooks DataK8SAppsClusternetIoHelmReleaseV1Alpha1Manifest#disable_hooks}
  */
  readonly disableHooks?: boolean | cdktf.IResolvable;
  /**
  * Force will, if set to 'true', ignore certain warnings and perform the upgrade anyway. This should be used with caution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_helm_release_v1alpha1_manifest#force DataK8SAppsClusternetIoHelmReleaseV1Alpha1Manifest#force}
  */
  readonly force?: boolean | cdktf.IResolvable;
  /**
  * Overrides specifies the override values for this release.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_helm_release_v1alpha1_manifest#overrides DataK8SAppsClusternetIoHelmReleaseV1Alpha1Manifest#overrides}
  */
  readonly overrides?: string;
  /**
  * ReleaseName specifies the desired release name in child cluster. If nil, the default release name will be in the format of '{Description Name}-{HelmChart Namespace}-{HelmChart Name}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_helm_release_v1alpha1_manifest#release_name DataK8SAppsClusternetIoHelmReleaseV1Alpha1Manifest#release_name}
  */
  readonly releaseName?: string;
  /**
  * Replace will re-use the given name, only if that name is a deleted release that remains in the history. This is unsafe in production.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_helm_release_v1alpha1_manifest#replace DataK8SAppsClusternetIoHelmReleaseV1Alpha1Manifest#replace}
  */
  readonly replace?: boolean | cdktf.IResolvable;
  /**
  * ReplaceCRDs replace all crds in chart and sub charts before upgrade and install, not working when SkipCRDs true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_helm_release_v1alpha1_manifest#replace_cr_ds DataK8SAppsClusternetIoHelmReleaseV1Alpha1Manifest#replace_cr_ds}
  */
  readonly replaceCrDs?: boolean | cdktf.IResolvable;
  /**
  * a Helm Repository to be used. OCI-based registries are also supported. For example, https://charts.bitnami.com/bitnami or oci://localhost:5000/helm-charts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_helm_release_v1alpha1_manifest#repo DataK8SAppsClusternetIoHelmReleaseV1Alpha1Manifest#repo}
  */
  readonly repo: string;
  /**
  * SkipCRDs skips installing CRDs when install flag is enabled during upgrade
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_helm_release_v1alpha1_manifest#skip_cr_ds DataK8SAppsClusternetIoHelmReleaseV1Alpha1Manifest#skip_cr_ds}
  */
  readonly skipCrDs?: boolean | cdktf.IResolvable;
  /**
  * TargetNamespace specifies the namespace to install the chart
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_helm_release_v1alpha1_manifest#target_namespace DataK8SAppsClusternetIoHelmReleaseV1Alpha1Manifest#target_namespace}
  */
  readonly targetNamespace: string;
  /**
  * TimeoutSeconds is the timeout of the chart to be install/upgrade/rollback/uninstall
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_helm_release_v1alpha1_manifest#timeout_seconds DataK8SAppsClusternetIoHelmReleaseV1Alpha1Manifest#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * UpgradeAtomic, for upgrade case, if true, will roll back failed release.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_helm_release_v1alpha1_manifest#upgrade_atomic DataK8SAppsClusternetIoHelmReleaseV1Alpha1Manifest#upgrade_atomic}
  */
  readonly upgradeAtomic?: boolean | cdktf.IResolvable;
  /**
  * ChartVersion is the version of the chart to be deployed. It will be defaulted with current latest version if empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_helm_release_v1alpha1_manifest#version DataK8SAppsClusternetIoHelmReleaseV1Alpha1Manifest#version}
  */
  readonly version?: string;
  /**
  * Wait determines whether the wait operation should be performed after helm install, upgrade or uninstall is requested.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_helm_release_v1alpha1_manifest#wait DataK8SAppsClusternetIoHelmReleaseV1Alpha1Manifest#wait}
  */
  readonly wait?: boolean | cdktf.IResolvable;
  /**
  * WaitForJobs determines whether the wait operation for the Jobs should be performed after the upgrade is requested.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_helm_release_v1alpha1_manifest#wait_for_job DataK8SAppsClusternetIoHelmReleaseV1Alpha1Manifest#wait_for_job}
  */
  readonly waitForJob?: boolean | cdktf.IResolvable;
}

export function dataK8SAppsClusternetIoHelmReleaseV1Alpha1ManifestSpecToTerraform(struct?: DataK8SAppsClusternetIoHelmReleaseV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    atomic: cdktf.booleanToTerraform(struct!.atomic),
    chart: cdktf.stringToTerraform(struct!.chart),
    chart_pull_secret: dataK8SAppsClusternetIoHelmReleaseV1Alpha1ManifestSpecChartPullSecretToTerraform(struct!.chartPullSecret),
    create_namespace: cdktf.booleanToTerraform(struct!.createNamespace),
    disable_hooks: cdktf.booleanToTerraform(struct!.disableHooks),
    force: cdktf.booleanToTerraform(struct!.force),
    overrides: cdktf.stringToTerraform(struct!.overrides),
    release_name: cdktf.stringToTerraform(struct!.releaseName),
    replace: cdktf.booleanToTerraform(struct!.replace),
    replace_cr_ds: cdktf.booleanToTerraform(struct!.replaceCrDs),
    repo: cdktf.stringToTerraform(struct!.repo),
    skip_cr_ds: cdktf.booleanToTerraform(struct!.skipCrDs),
    target_namespace: cdktf.stringToTerraform(struct!.targetNamespace),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    upgrade_atomic: cdktf.booleanToTerraform(struct!.upgradeAtomic),
    version: cdktf.stringToTerraform(struct!.version),
    wait: cdktf.booleanToTerraform(struct!.wait),
    wait_for_job: cdktf.booleanToTerraform(struct!.waitForJob),
  }
}


export function dataK8SAppsClusternetIoHelmReleaseV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SAppsClusternetIoHelmReleaseV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    atomic: {
      value: cdktf.booleanToHclTerraform(struct!.atomic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    chart: {
      value: cdktf.stringToHclTerraform(struct!.chart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    chart_pull_secret: {
      value: dataK8SAppsClusternetIoHelmReleaseV1Alpha1ManifestSpecChartPullSecretToHclTerraform(struct!.chartPullSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsClusternetIoHelmReleaseV1Alpha1ManifestSpecChartPullSecret",
    },
    create_namespace: {
      value: cdktf.booleanToHclTerraform(struct!.createNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_hooks: {
      value: cdktf.booleanToHclTerraform(struct!.disableHooks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    force: {
      value: cdktf.booleanToHclTerraform(struct!.force),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    overrides: {
      value: cdktf.stringToHclTerraform(struct!.overrides),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    release_name: {
      value: cdktf.stringToHclTerraform(struct!.releaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replace: {
      value: cdktf.booleanToHclTerraform(struct!.replace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    replace_cr_ds: {
      value: cdktf.booleanToHclTerraform(struct!.replaceCrDs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    repo: {
      value: cdktf.stringToHclTerraform(struct!.repo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_cr_ds: {
      value: cdktf.booleanToHclTerraform(struct!.skipCrDs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    target_namespace: {
      value: cdktf.stringToHclTerraform(struct!.targetNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    upgrade_atomic: {
      value: cdktf.booleanToHclTerraform(struct!.upgradeAtomic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wait: {
      value: cdktf.booleanToHclTerraform(struct!.wait),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    wait_for_job: {
      value: cdktf.booleanToHclTerraform(struct!.waitForJob),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsClusternetIoHelmReleaseV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsClusternetIoHelmReleaseV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._atomic !== undefined) {
      hasAnyValues = true;
      internalValueResult.atomic = this._atomic;
    }
    if (this._chart !== undefined) {
      hasAnyValues = true;
      internalValueResult.chart = this._chart;
    }
    if (this._chartPullSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.chartPullSecret = this._chartPullSecret?.internalValue;
    }
    if (this._createNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.createNamespace = this._createNamespace;
    }
    if (this._disableHooks !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableHooks = this._disableHooks;
    }
    if (this._force !== undefined) {
      hasAnyValues = true;
      internalValueResult.force = this._force;
    }
    if (this._overrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrides = this._overrides;
    }
    if (this._releaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.releaseName = this._releaseName;
    }
    if (this._replace !== undefined) {
      hasAnyValues = true;
      internalValueResult.replace = this._replace;
    }
    if (this._replaceCrDs !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceCrDs = this._replaceCrDs;
    }
    if (this._repo !== undefined) {
      hasAnyValues = true;
      internalValueResult.repo = this._repo;
    }
    if (this._skipCrDs !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipCrDs = this._skipCrDs;
    }
    if (this._targetNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetNamespace = this._targetNamespace;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    if (this._upgradeAtomic !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradeAtomic = this._upgradeAtomic;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._wait !== undefined) {
      hasAnyValues = true;
      internalValueResult.wait = this._wait;
    }
    if (this._waitForJob !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitForJob = this._waitForJob;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsClusternetIoHelmReleaseV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._atomic = undefined;
      this._chart = undefined;
      this._chartPullSecret.internalValue = undefined;
      this._createNamespace = undefined;
      this._disableHooks = undefined;
      this._force = undefined;
      this._overrides = undefined;
      this._releaseName = undefined;
      this._replace = undefined;
      this._replaceCrDs = undefined;
      this._repo = undefined;
      this._skipCrDs = undefined;
      this._targetNamespace = undefined;
      this._timeoutSeconds = undefined;
      this._upgradeAtomic = undefined;
      this._version = undefined;
      this._wait = undefined;
      this._waitForJob = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._atomic = value.atomic;
      this._chart = value.chart;
      this._chartPullSecret.internalValue = value.chartPullSecret;
      this._createNamespace = value.createNamespace;
      this._disableHooks = value.disableHooks;
      this._force = value.force;
      this._overrides = value.overrides;
      this._releaseName = value.releaseName;
      this._replace = value.replace;
      this._replaceCrDs = value.replaceCrDs;
      this._repo = value.repo;
      this._skipCrDs = value.skipCrDs;
      this._targetNamespace = value.targetNamespace;
      this._timeoutSeconds = value.timeoutSeconds;
      this._upgradeAtomic = value.upgradeAtomic;
      this._version = value.version;
      this._wait = value.wait;
      this._waitForJob = value.waitForJob;
    }
  }

  // atomic - computed: false, optional: true, required: false
  private _atomic?: boolean | cdktf.IResolvable; 
  public get atomic() {
    return this.getBooleanAttribute('atomic');
  }
  public set atomic(value: boolean | cdktf.IResolvable) {
    this._atomic = value;
  }
  public resetAtomic() {
    this._atomic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atomicInput() {
    return this._atomic;
  }

  // chart - computed: false, optional: false, required: true
  private _chart?: string; 
  public get chart() {
    return this.getStringAttribute('chart');
  }
  public set chart(value: string) {
    this._chart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get chartInput() {
    return this._chart;
  }

  // chart_pull_secret - computed: false, optional: true, required: false
  private _chartPullSecret = new DataK8SAppsClusternetIoHelmReleaseV1Alpha1ManifestSpecChartPullSecretOutputReference(this, "chart_pull_secret");
  public get chartPullSecret() {
    return this._chartPullSecret;
  }
  public putChartPullSecret(value: DataK8SAppsClusternetIoHelmReleaseV1Alpha1ManifestSpecChartPullSecret) {
    this._chartPullSecret.internalValue = value;
  }
  public resetChartPullSecret() {
    this._chartPullSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartPullSecretInput() {
    return this._chartPullSecret.internalValue;
  }

  // create_namespace - computed: false, optional: true, required: false
  private _createNamespace?: boolean | cdktf.IResolvable; 
  public get createNamespace() {
    return this.getBooleanAttribute('create_namespace');
  }
  public set createNamespace(value: boolean | cdktf.IResolvable) {
    this._createNamespace = value;
  }
  public resetCreateNamespace() {
    this._createNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createNamespaceInput() {
    return this._createNamespace;
  }

  // disable_hooks - computed: false, optional: true, required: false
  private _disableHooks?: boolean | cdktf.IResolvable; 
  public get disableHooks() {
    return this.getBooleanAttribute('disable_hooks');
  }
  public set disableHooks(value: boolean | cdktf.IResolvable) {
    this._disableHooks = value;
  }
  public resetDisableHooks() {
    this._disableHooks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableHooksInput() {
    return this._disableHooks;
  }

  // force - computed: false, optional: true, required: false
  private _force?: boolean | cdktf.IResolvable; 
  public get force() {
    return this.getBooleanAttribute('force');
  }
  public set force(value: boolean | cdktf.IResolvable) {
    this._force = value;
  }
  public resetForce() {
    this._force = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceInput() {
    return this._force;
  }

  // overrides - computed: false, optional: true, required: false
  private _overrides?: string; 
  public get overrides() {
    return this.getStringAttribute('overrides');
  }
  public set overrides(value: string) {
    this._overrides = value;
  }
  public resetOverrides() {
    this._overrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overridesInput() {
    return this._overrides;
  }

  // release_name - computed: false, optional: true, required: false
  private _releaseName?: string; 
  public get releaseName() {
    return this.getStringAttribute('release_name');
  }
  public set releaseName(value: string) {
    this._releaseName = value;
  }
  public resetReleaseName() {
    this._releaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseNameInput() {
    return this._releaseName;
  }

  // replace - computed: false, optional: true, required: false
  private _replace?: boolean | cdktf.IResolvable; 
  public get replace() {
    return this.getBooleanAttribute('replace');
  }
  public set replace(value: boolean | cdktf.IResolvable) {
    this._replace = value;
  }
  public resetReplace() {
    this._replace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInput() {
    return this._replace;
  }

  // replace_cr_ds - computed: false, optional: true, required: false
  private _replaceCrDs?: boolean | cdktf.IResolvable; 
  public get replaceCrDs() {
    return this.getBooleanAttribute('replace_cr_ds');
  }
  public set replaceCrDs(value: boolean | cdktf.IResolvable) {
    this._replaceCrDs = value;
  }
  public resetReplaceCrDs() {
    this._replaceCrDs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceCrDsInput() {
    return this._replaceCrDs;
  }

  // repo - computed: false, optional: false, required: true
  private _repo?: string; 
  public get repo() {
    return this.getStringAttribute('repo');
  }
  public set repo(value: string) {
    this._repo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repoInput() {
    return this._repo;
  }

  // skip_cr_ds - computed: false, optional: true, required: false
  private _skipCrDs?: boolean | cdktf.IResolvable; 
  public get skipCrDs() {
    return this.getBooleanAttribute('skip_cr_ds');
  }
  public set skipCrDs(value: boolean | cdktf.IResolvable) {
    this._skipCrDs = value;
  }
  public resetSkipCrDs() {
    this._skipCrDs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipCrDsInput() {
    return this._skipCrDs;
  }

  // target_namespace - computed: false, optional: false, required: true
  private _targetNamespace?: string; 
  public get targetNamespace() {
    return this.getStringAttribute('target_namespace');
  }
  public set targetNamespace(value: string) {
    this._targetNamespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNamespaceInput() {
    return this._targetNamespace;
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

  // upgrade_atomic - computed: false, optional: true, required: false
  private _upgradeAtomic?: boolean | cdktf.IResolvable; 
  public get upgradeAtomic() {
    return this.getBooleanAttribute('upgrade_atomic');
  }
  public set upgradeAtomic(value: boolean | cdktf.IResolvable) {
    this._upgradeAtomic = value;
  }
  public resetUpgradeAtomic() {
    this._upgradeAtomic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeAtomicInput() {
    return this._upgradeAtomic;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // wait - computed: false, optional: true, required: false
  private _wait?: boolean | cdktf.IResolvable; 
  public get wait() {
    return this.getBooleanAttribute('wait');
  }
  public set wait(value: boolean | cdktf.IResolvable) {
    this._wait = value;
  }
  public resetWait() {
    this._wait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitInput() {
    return this._wait;
  }

  // wait_for_job - computed: false, optional: true, required: false
  private _waitForJob?: boolean | cdktf.IResolvable; 
  public get waitForJob() {
    return this.getBooleanAttribute('wait_for_job');
  }
  public set waitForJob(value: boolean | cdktf.IResolvable) {
    this._waitForJob = value;
  }
  public resetWaitForJob() {
    this._waitForJob = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForJobInput() {
    return this._waitForJob;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_helm_release_v1alpha1_manifest k8s_apps_clusternet_io_helm_release_v1alpha1_manifest}
*/
export class DataK8SAppsClusternetIoHelmReleaseV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_apps_clusternet_io_helm_release_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAppsClusternetIoHelmReleaseV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAppsClusternetIoHelmReleaseV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SAppsClusternetIoHelmReleaseV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_helm_release_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAppsClusternetIoHelmReleaseV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_apps_clusternet_io_helm_release_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_clusternet_io_helm_release_v1alpha1_manifest k8s_apps_clusternet_io_helm_release_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAppsClusternetIoHelmReleaseV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAppsClusternetIoHelmReleaseV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_apps_clusternet_io_helm_release_v1alpha1_manifest',
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
  private _metadata = new DataK8SAppsClusternetIoHelmReleaseV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAppsClusternetIoHelmReleaseV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SAppsClusternetIoHelmReleaseV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAppsClusternetIoHelmReleaseV1Alpha1ManifestSpec) {
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
      metadata: dataK8SAppsClusternetIoHelmReleaseV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAppsClusternetIoHelmReleaseV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAppsClusternetIoHelmReleaseV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppsClusternetIoHelmReleaseV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SAppsClusternetIoHelmReleaseV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppsClusternetIoHelmReleaseV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
