// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_open_cluster_management_io_klusterlet_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_open_cluster_management_io_klusterlet_v1_manifest#metadata DataK8SOperatorOpenClusterManagementIoKlusterletV1Manifest#metadata}
  */
  readonly metadata: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestMetadata;
  /**
  * Spec represents the desired deployment configuration of Klusterlet agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_open_cluster_management_io_klusterlet_v1_manifest#spec DataK8SOperatorOpenClusterManagementIoKlusterletV1Manifest#spec}
  */
  readonly spec?: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpec;
}
export interface DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_open_cluster_management_io_klusterlet_v1_manifest#annotations DataK8SOperatorOpenClusterManagementIoKlusterletV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_open_cluster_management_io_klusterlet_v1_manifest#labels DataK8SOperatorOpenClusterManagementIoKlusterletV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_open_cluster_management_io_klusterlet_v1_manifest#name DataK8SOperatorOpenClusterManagementIoKlusterletV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestMetadataToTerraform(struct?: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestMetadataToHclTerraform(struct?: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecDeployOption {
  /**
  * Mode can be Default, Hosted, Singleton or SingletonHosted. It is Default mode if not specified In Default mode, all klusterlet related resources are deployed on the managed cluster. In Hosted mode, only crd and configurations are installed on the spoke/managed cluster. Controllers run in another cluster (defined as management-cluster) and connect to the mangaged cluster with the kubeconfig in secret of 'external-managed-kubeconfig'(a kubeconfig of managed-cluster with cluster-admin permission). In Singleton mode, registration/work agent is started as a single deployment. In SingletonHosted mode, agent is started as a single deployment in hosted mode. Note: Do not modify the Mode field once it's applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_open_cluster_management_io_klusterlet_v1_manifest#mode DataK8SOperatorOpenClusterManagementIoKlusterletV1Manifest#mode}
  */
  readonly mode?: string;
}

export function dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecDeployOptionToTerraform(struct?: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecDeployOption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecDeployOptionToHclTerraform(struct?: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecDeployOption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecDeployOptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecDeployOption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecDeployOption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
    }
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecExternalServerUrls {
  /**
  * CABundle is the ca bundle to connect to apiserver of the managed cluster. System certs are used if it is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_open_cluster_management_io_klusterlet_v1_manifest#ca_bundle DataK8SOperatorOpenClusterManagementIoKlusterletV1Manifest#ca_bundle}
  */
  readonly caBundle?: string;
  /**
  * URL is the url of apiserver endpoint of the managed cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_open_cluster_management_io_klusterlet_v1_manifest#url DataK8SOperatorOpenClusterManagementIoKlusterletV1Manifest#url}
  */
  readonly url?: string;
}

export function dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecExternalServerUrlsToTerraform(struct?: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecExternalServerUrls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_bundle: cdktf.stringToTerraform(struct!.caBundle),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecExternalServerUrlsToHclTerraform(struct?: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecExternalServerUrls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_bundle: {
      value: cdktf.stringToHclTerraform(struct!.caBundle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecExternalServerUrlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecExternalServerUrls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caBundle !== undefined) {
      hasAnyValues = true;
      internalValueResult.caBundle = this._caBundle;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecExternalServerUrls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caBundle = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caBundle = value.caBundle;
      this._url = value.url;
    }
  }

  // ca_bundle - computed: false, optional: true, required: false
  private _caBundle?: string; 
  public get caBundle() {
    return this.getStringAttribute('ca_bundle');
  }
  public set caBundle(value: string) {
    this._caBundle = value;
  }
  public resetCaBundle() {
    this._caBundle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caBundleInput() {
    return this._caBundle;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecExternalServerUrlsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecExternalServerUrls[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecExternalServerUrlsOutputReference {
    return new DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecExternalServerUrlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecHubApiServerHostAlias {
  /**
  * Hostname for the above IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_open_cluster_management_io_klusterlet_v1_manifest#hostname DataK8SOperatorOpenClusterManagementIoKlusterletV1Manifest#hostname}
  */
  readonly hostname: string;
  /**
  * IP address of the host file entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_open_cluster_management_io_klusterlet_v1_manifest#ip DataK8SOperatorOpenClusterManagementIoKlusterletV1Manifest#ip}
  */
  readonly ip: string;
}

export function dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecHubApiServerHostAliasToTerraform(struct?: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecHubApiServerHostAlias | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecHubApiServerHostAliasToHclTerraform(struct?: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecHubApiServerHostAlias | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecHubApiServerHostAliasOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecHubApiServerHostAlias | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecHubApiServerHostAlias | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname = undefined;
      this._ip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostname = value.hostname;
      this._ip = value.ip;
    }
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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
export interface DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecNodePlacementTolerations {
  /**
  * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_open_cluster_management_io_klusterlet_v1_manifest#effect DataK8SOperatorOpenClusterManagementIoKlusterletV1Manifest#effect}
  */
  readonly effect?: string;
  /**
  * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_open_cluster_management_io_klusterlet_v1_manifest#key DataK8SOperatorOpenClusterManagementIoKlusterletV1Manifest#key}
  */
  readonly key?: string;
  /**
  * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_open_cluster_management_io_klusterlet_v1_manifest#operator DataK8SOperatorOpenClusterManagementIoKlusterletV1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_open_cluster_management_io_klusterlet_v1_manifest#toleration_seconds DataK8SOperatorOpenClusterManagementIoKlusterletV1Manifest#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_open_cluster_management_io_klusterlet_v1_manifest#value DataK8SOperatorOpenClusterManagementIoKlusterletV1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecNodePlacementTolerationsToTerraform(struct?: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecNodePlacementTolerations | cdktf.IResolvable): any {
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


export function dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecNodePlacementTolerationsToHclTerraform(struct?: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecNodePlacementTolerations | cdktf.IResolvable): any {
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

export class DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecNodePlacementTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecNodePlacementTolerations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecNodePlacementTolerations | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecNodePlacementTolerationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecNodePlacementTolerations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecNodePlacementTolerationsOutputReference {
    return new DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecNodePlacementTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecNodePlacement {
  /**
  * NodeSelector defines which Nodes the Pods are scheduled on. The default is an empty list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_open_cluster_management_io_klusterlet_v1_manifest#node_selector DataK8SOperatorOpenClusterManagementIoKlusterletV1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Tolerations are attached by pods to tolerate any taint that matches the triple <key,value,effect> using the matching operator <operator>. The default is an empty list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_open_cluster_management_io_klusterlet_v1_manifest#tolerations DataK8SOperatorOpenClusterManagementIoKlusterletV1Manifest#tolerations}
  */
  readonly tolerations?: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecNodePlacementTolerations[] | cdktf.IResolvable;
}

export function dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecNodePlacementToTerraform(struct?: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecNodePlacement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    tolerations: cdktf.listMapper(dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecNodePlacementTolerationsToTerraform, false)(struct!.tolerations),
  }
}


export function dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecNodePlacementToHclTerraform(struct?: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecNodePlacement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecNodePlacementTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecNodePlacementTolerationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecNodePlacementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecNodePlacement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecNodePlacement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeSelector = undefined;
      this._tolerations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeSelector = value.nodeSelector;
      this._tolerations.internalValue = value.tolerations;
    }
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

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecNodePlacementTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecNodePlacementTolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
  }
}
export interface DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationBootstrapKubeConfigsLocalSecretsConfigKubeConfigSecrets {
  /**
  * Name is the name of the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_open_cluster_management_io_klusterlet_v1_manifest#name DataK8SOperatorOpenClusterManagementIoKlusterletV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationBootstrapKubeConfigsLocalSecretsConfigKubeConfigSecretsToTerraform(struct?: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationBootstrapKubeConfigsLocalSecretsConfigKubeConfigSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationBootstrapKubeConfigsLocalSecretsConfigKubeConfigSecretsToHclTerraform(struct?: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationBootstrapKubeConfigsLocalSecretsConfigKubeConfigSecrets | cdktf.IResolvable): any {
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

export class DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationBootstrapKubeConfigsLocalSecretsConfigKubeConfigSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationBootstrapKubeConfigsLocalSecretsConfigKubeConfigSecrets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationBootstrapKubeConfigsLocalSecretsConfigKubeConfigSecrets | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationBootstrapKubeConfigsLocalSecretsConfigKubeConfigSecretsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationBootstrapKubeConfigsLocalSecretsConfigKubeConfigSecrets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationBootstrapKubeConfigsLocalSecretsConfigKubeConfigSecretsOutputReference {
    return new DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationBootstrapKubeConfigsLocalSecretsConfigKubeConfigSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationBootstrapKubeConfigsLocalSecretsConfig {
  /**
  * HubConnectionTimeoutSeconds is used to set the timeout of connecting to the hub cluster. When agent loses the connection to the hub over the timeout seconds, the agent do a rebootstrap. By default is 10 mins.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_open_cluster_management_io_klusterlet_v1_manifest#hub_connection_timeout_seconds DataK8SOperatorOpenClusterManagementIoKlusterletV1Manifest#hub_connection_timeout_seconds}
  */
  readonly hubConnectionTimeoutSeconds?: number;
  /**
  * KubeConfigSecrets is a list of secret names. The secrets are in the same namespace where the agent controller runs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_open_cluster_management_io_klusterlet_v1_manifest#kube_config_secrets DataK8SOperatorOpenClusterManagementIoKlusterletV1Manifest#kube_config_secrets}
  */
  readonly kubeConfigSecrets?: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationBootstrapKubeConfigsLocalSecretsConfigKubeConfigSecrets[] | cdktf.IResolvable;
}

export function dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationBootstrapKubeConfigsLocalSecretsConfigToTerraform(struct?: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationBootstrapKubeConfigsLocalSecretsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hub_connection_timeout_seconds: cdktf.numberToTerraform(struct!.hubConnectionTimeoutSeconds),
    kube_config_secrets: cdktf.listMapper(dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationBootstrapKubeConfigsLocalSecretsConfigKubeConfigSecretsToTerraform, false)(struct!.kubeConfigSecrets),
  }
}


export function dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationBootstrapKubeConfigsLocalSecretsConfigToHclTerraform(struct?: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationBootstrapKubeConfigsLocalSecretsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hub_connection_timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.hubConnectionTimeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kube_config_secrets: {
      value: cdktf.listMapperHcl(dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationBootstrapKubeConfigsLocalSecretsConfigKubeConfigSecretsToHclTerraform, false)(struct!.kubeConfigSecrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationBootstrapKubeConfigsLocalSecretsConfigKubeConfigSecretsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationBootstrapKubeConfigsLocalSecretsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationBootstrapKubeConfigsLocalSecretsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hubConnectionTimeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.hubConnectionTimeoutSeconds = this._hubConnectionTimeoutSeconds;
    }
    if (this._kubeConfigSecrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeConfigSecrets = this._kubeConfigSecrets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationBootstrapKubeConfigsLocalSecretsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hubConnectionTimeoutSeconds = undefined;
      this._kubeConfigSecrets.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hubConnectionTimeoutSeconds = value.hubConnectionTimeoutSeconds;
      this._kubeConfigSecrets.internalValue = value.kubeConfigSecrets;
    }
  }

  // hub_connection_timeout_seconds - computed: false, optional: true, required: false
  private _hubConnectionTimeoutSeconds?: number; 
  public get hubConnectionTimeoutSeconds() {
    return this.getNumberAttribute('hub_connection_timeout_seconds');
  }
  public set hubConnectionTimeoutSeconds(value: number) {
    this._hubConnectionTimeoutSeconds = value;
  }
  public resetHubConnectionTimeoutSeconds() {
    this._hubConnectionTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hubConnectionTimeoutSecondsInput() {
    return this._hubConnectionTimeoutSeconds;
  }

  // kube_config_secrets - computed: false, optional: true, required: false
  private _kubeConfigSecrets = new DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationBootstrapKubeConfigsLocalSecretsConfigKubeConfigSecretsList(this, "kube_config_secrets", false);
  public get kubeConfigSecrets() {
    return this._kubeConfigSecrets;
  }
  public putKubeConfigSecrets(value: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationBootstrapKubeConfigsLocalSecretsConfigKubeConfigSecrets[] | cdktf.IResolvable) {
    this._kubeConfigSecrets.internalValue = value;
  }
  public resetKubeConfigSecrets() {
    this._kubeConfigSecrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeConfigSecretsInput() {
    return this._kubeConfigSecrets.internalValue;
  }
}
export interface DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationBootstrapKubeConfigs {
  /**
  * LocalSecretsConfig include a list of secrets that contains the kubeconfigs for ordered bootstrap kubeconifigs. The secrets must be in the same namespace where the agent controller runs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_open_cluster_management_io_klusterlet_v1_manifest#local_secrets_config DataK8SOperatorOpenClusterManagementIoKlusterletV1Manifest#local_secrets_config}
  */
  readonly localSecretsConfig?: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationBootstrapKubeConfigsLocalSecretsConfig;
  /**
  * Type specifies the type of priority bootstrap kubeconfigs. By default, it is set to None, representing no priority bootstrap kubeconfigs are set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_open_cluster_management_io_klusterlet_v1_manifest#type DataK8SOperatorOpenClusterManagementIoKlusterletV1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationBootstrapKubeConfigsToTerraform(struct?: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationBootstrapKubeConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_secrets_config: dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationBootstrapKubeConfigsLocalSecretsConfigToTerraform(struct!.localSecretsConfig),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationBootstrapKubeConfigsToHclTerraform(struct?: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationBootstrapKubeConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_secrets_config: {
      value: dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationBootstrapKubeConfigsLocalSecretsConfigToHclTerraform(struct!.localSecretsConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationBootstrapKubeConfigsLocalSecretsConfig",
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

export class DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationBootstrapKubeConfigsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationBootstrapKubeConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localSecretsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSecretsConfig = this._localSecretsConfig?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationBootstrapKubeConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localSecretsConfig.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localSecretsConfig.internalValue = value.localSecretsConfig;
      this._type = value.type;
    }
  }

  // local_secrets_config - computed: false, optional: true, required: false
  private _localSecretsConfig = new DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationBootstrapKubeConfigsLocalSecretsConfigOutputReference(this, "local_secrets_config");
  public get localSecretsConfig() {
    return this._localSecretsConfig;
  }
  public putLocalSecretsConfig(value: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationBootstrapKubeConfigsLocalSecretsConfig) {
    this._localSecretsConfig.internalValue = value;
  }
  public resetLocalSecretsConfig() {
    this._localSecretsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localSecretsConfigInput() {
    return this._localSecretsConfig.internalValue;
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
export interface DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationFeatureGates {
  /**
  * Feature is the key of feature gate. e.g. featuregate/Foo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_open_cluster_management_io_klusterlet_v1_manifest#feature DataK8SOperatorOpenClusterManagementIoKlusterletV1Manifest#feature}
  */
  readonly feature: string;
  /**
  * Mode is either Enable, Disable, '' where '' is Disable by default. In Enable mode, a valid feature gate 'featuregate/Foo' will be set to '--featuregate/Foo=true'. In Disable mode, a valid feature gate 'featuregate/Foo' will be set to '--featuregate/Foo=false'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_open_cluster_management_io_klusterlet_v1_manifest#mode DataK8SOperatorOpenClusterManagementIoKlusterletV1Manifest#mode}
  */
  readonly mode?: string;
}

export function dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationFeatureGatesToTerraform(struct?: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationFeatureGates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    feature: cdktf.stringToTerraform(struct!.feature),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationFeatureGatesToHclTerraform(struct?: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationFeatureGates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    feature: {
      value: cdktf.stringToHclTerraform(struct!.feature),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationFeatureGatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationFeatureGates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._feature !== undefined) {
      hasAnyValues = true;
      internalValueResult.feature = this._feature;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationFeatureGates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._feature = undefined;
      this._mode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._feature = value.feature;
      this._mode = value.mode;
    }
  }

  // feature - computed: false, optional: false, required: true
  private _feature?: string; 
  public get feature() {
    return this.getStringAttribute('feature');
  }
  public set feature(value: string) {
    this._feature = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureInput() {
    return this._feature;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}

export class DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationFeatureGatesList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationFeatureGates[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationFeatureGatesOutputReference {
    return new DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationFeatureGatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationRegistrationDriverAwsIrsa {
  /**
  * The arn of the hub cluster (ie: an EKS cluster). This will be required to pass information to hub, which hub will use to create IAM identities for this klusterlet. Example - arn:eks:us-west-2:12345678910:cluster/hub-cluster1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_open_cluster_management_io_klusterlet_v1_manifest#hub_cluster_arn DataK8SOperatorOpenClusterManagementIoKlusterletV1Manifest#hub_cluster_arn}
  */
  readonly hubClusterArn?: string;
  /**
  * The arn of the managed cluster (ie: an EKS cluster). This will be required to generate the md5hash which will be used as a suffix to create IAM role on hub as well as used by kluslerlet-agent, to assume role suffixed with the md5hash, on startup. Example - arn:eks:us-west-2:12345678910:cluster/managed-cluster1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_open_cluster_management_io_klusterlet_v1_manifest#managed_cluster_arn DataK8SOperatorOpenClusterManagementIoKlusterletV1Manifest#managed_cluster_arn}
  */
  readonly managedClusterArn?: string;
}

export function dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationRegistrationDriverAwsIrsaToTerraform(struct?: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationRegistrationDriverAwsIrsa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hub_cluster_arn: cdktf.stringToTerraform(struct!.hubClusterArn),
    managed_cluster_arn: cdktf.stringToTerraform(struct!.managedClusterArn),
  }
}


export function dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationRegistrationDriverAwsIrsaToHclTerraform(struct?: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationRegistrationDriverAwsIrsa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hub_cluster_arn: {
      value: cdktf.stringToHclTerraform(struct!.hubClusterArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managed_cluster_arn: {
      value: cdktf.stringToHclTerraform(struct!.managedClusterArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationRegistrationDriverAwsIrsaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationRegistrationDriverAwsIrsa | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hubClusterArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.hubClusterArn = this._hubClusterArn;
    }
    if (this._managedClusterArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedClusterArn = this._managedClusterArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationRegistrationDriverAwsIrsa | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hubClusterArn = undefined;
      this._managedClusterArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hubClusterArn = value.hubClusterArn;
      this._managedClusterArn = value.managedClusterArn;
    }
  }

  // hub_cluster_arn - computed: false, optional: true, required: false
  private _hubClusterArn?: string; 
  public get hubClusterArn() {
    return this.getStringAttribute('hub_cluster_arn');
  }
  public set hubClusterArn(value: string) {
    this._hubClusterArn = value;
  }
  public resetHubClusterArn() {
    this._hubClusterArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hubClusterArnInput() {
    return this._hubClusterArn;
  }

  // managed_cluster_arn - computed: false, optional: true, required: false
  private _managedClusterArn?: string; 
  public get managedClusterArn() {
    return this.getStringAttribute('managed_cluster_arn');
  }
  public set managedClusterArn(value: string) {
    this._managedClusterArn = value;
  }
  public resetManagedClusterArn() {
    this._managedClusterArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedClusterArnInput() {
    return this._managedClusterArn;
  }
}
export interface DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationRegistrationDriver {
  /**
  * Type of the authentication used by managedcluster to register as well as pull work from hub. Possible values are csr and awsirsa.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_open_cluster_management_io_klusterlet_v1_manifest#auth_type DataK8SOperatorOpenClusterManagementIoKlusterletV1Manifest#auth_type}
  */
  readonly authType?: string;
  /**
  * Contain the details required for registering with hub cluster (ie: an EKS cluster) using AWS IAM roles for service account. This is required only when the authType is awsirsa.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_open_cluster_management_io_klusterlet_v1_manifest#aws_irsa DataK8SOperatorOpenClusterManagementIoKlusterletV1Manifest#aws_irsa}
  */
  readonly awsIrsa?: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationRegistrationDriverAwsIrsa;
}

export function dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationRegistrationDriverToTerraform(struct?: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationRegistrationDriver | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_type: cdktf.stringToTerraform(struct!.authType),
    aws_irsa: dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationRegistrationDriverAwsIrsaToTerraform(struct!.awsIrsa),
  }
}


export function dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationRegistrationDriverToHclTerraform(struct?: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationRegistrationDriver | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_type: {
      value: cdktf.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_irsa: {
      value: dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationRegistrationDriverAwsIrsaToHclTerraform(struct!.awsIrsa),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationRegistrationDriverAwsIrsa",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationRegistrationDriverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationRegistrationDriver | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._awsIrsa?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsIrsa = this._awsIrsa?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationRegistrationDriver | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authType = undefined;
      this._awsIrsa.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authType = value.authType;
      this._awsIrsa.internalValue = value.awsIrsa;
    }
  }

  // auth_type - computed: false, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // aws_irsa - computed: false, optional: true, required: false
  private _awsIrsa = new DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationRegistrationDriverAwsIrsaOutputReference(this, "aws_irsa");
  public get awsIrsa() {
    return this._awsIrsa;
  }
  public putAwsIrsa(value: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationRegistrationDriverAwsIrsa) {
    this._awsIrsa.internalValue = value;
  }
  public resetAwsIrsa() {
    this._awsIrsa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsIrsaInput() {
    return this._awsIrsa.internalValue;
  }
}
export interface DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfiguration {
  /**
  * BootstrapKubeConfigs defines the ordered list of bootstrap kubeconfigs. The order decides which bootstrap kubeconfig to use first when rebootstrap. When the agent loses the connection to the current hub over HubConnectionTimeoutSeconds, or the managedcluster CR is set 'hubAcceptsClient=false' on the hub, the controller marks the related bootstrap kubeconfig as 'failed'. A failed bootstrapkubeconfig won't be used for the duration specified by SkipFailedBootstrapKubeConfigSeconds. But if the user updates the content of a failed bootstrapkubeconfig, the 'failed' mark will be cleared.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_open_cluster_management_io_klusterlet_v1_manifest#bootstrap_kube_configs DataK8SOperatorOpenClusterManagementIoKlusterletV1Manifest#bootstrap_kube_configs}
  */
  readonly bootstrapKubeConfigs?: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationBootstrapKubeConfigs;
  /**
  * clientCertExpirationSeconds represents the seconds of a client certificate to expire. If it is not set or 0, the default duration seconds will be set by the hub cluster. If the value is larger than the max signing duration seconds set on the hub cluster, the max signing duration seconds will be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_open_cluster_management_io_klusterlet_v1_manifest#client_cert_expiration_seconds DataK8SOperatorOpenClusterManagementIoKlusterletV1Manifest#client_cert_expiration_seconds}
  */
  readonly clientCertExpirationSeconds?: number;
  /**
  * ClusterAnnotations is annotations with the reserve prefix 'agent.open-cluster-management.io' set on ManagedCluster when creating only, other actors can update it afterwards.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_open_cluster_management_io_klusterlet_v1_manifest#cluster_annotations DataK8SOperatorOpenClusterManagementIoKlusterletV1Manifest#cluster_annotations}
  */
  readonly clusterAnnotations?: { [key: string]: string };
  /**
  * FeatureGates represents the list of feature gates for registration If it is set empty, default feature gates will be used. If it is set, featuregate/Foo is an example of one item in FeatureGates: 1. If featuregate/Foo does not exist, registration-operator will discard it 2. If featuregate/Foo exists and is false by default. It is now possible to set featuregate/Foo=[false|true] 3. If featuregate/Foo exists and is true by default. If a cluster-admin upgrading from 1 to 2 wants to continue having featuregate/Foo=false, he can set featuregate/Foo=false before upgrading. Let's say the cluster-admin wants featuregate/Foo=false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_open_cluster_management_io_klusterlet_v1_manifest#feature_gates DataK8SOperatorOpenClusterManagementIoKlusterletV1Manifest#feature_gates}
  */
  readonly featureGates?: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationFeatureGates[] | cdktf.IResolvable;
  /**
  * KubeAPIBurst indicates the maximum burst of the throttle while talking with apiserver of hub cluster from the spoke cluster. If it is set empty, use the default value: 100
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_open_cluster_management_io_klusterlet_v1_manifest#kube_api_burst DataK8SOperatorOpenClusterManagementIoKlusterletV1Manifest#kube_api_burst}
  */
  readonly kubeApiBurst?: number;
  /**
  * KubeAPIQPS indicates the maximum QPS while talking with apiserver of hub cluster from the spoke cluster. If it is set empty, use the default value: 50
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_open_cluster_management_io_klusterlet_v1_manifest#kube_apiqps DataK8SOperatorOpenClusterManagementIoKlusterletV1Manifest#kube_apiqps}
  */
  readonly kubeApiqps?: number;
  /**
  * This provides driver details required to register with hub
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_open_cluster_management_io_klusterlet_v1_manifest#registration_driver DataK8SOperatorOpenClusterManagementIoKlusterletV1Manifest#registration_driver}
  */
  readonly registrationDriver?: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationRegistrationDriver;
}

export function dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationToTerraform(struct?: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bootstrap_kube_configs: dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationBootstrapKubeConfigsToTerraform(struct!.bootstrapKubeConfigs),
    client_cert_expiration_seconds: cdktf.numberToTerraform(struct!.clientCertExpirationSeconds),
    cluster_annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.clusterAnnotations),
    feature_gates: cdktf.listMapper(dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationFeatureGatesToTerraform, false)(struct!.featureGates),
    kube_api_burst: cdktf.numberToTerraform(struct!.kubeApiBurst),
    kube_apiqps: cdktf.numberToTerraform(struct!.kubeApiqps),
    registration_driver: dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationRegistrationDriverToTerraform(struct!.registrationDriver),
  }
}


export function dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationToHclTerraform(struct?: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bootstrap_kube_configs: {
      value: dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationBootstrapKubeConfigsToHclTerraform(struct!.bootstrapKubeConfigs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationBootstrapKubeConfigs",
    },
    client_cert_expiration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.clientCertExpirationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cluster_annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.clusterAnnotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    feature_gates: {
      value: cdktf.listMapperHcl(dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationFeatureGatesToHclTerraform, false)(struct!.featureGates),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationFeatureGatesList",
    },
    kube_api_burst: {
      value: cdktf.numberToHclTerraform(struct!.kubeApiBurst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kube_apiqps: {
      value: cdktf.numberToHclTerraform(struct!.kubeApiqps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    registration_driver: {
      value: dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationRegistrationDriverToHclTerraform(struct!.registrationDriver),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationRegistrationDriver",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootstrapKubeConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootstrapKubeConfigs = this._bootstrapKubeConfigs?.internalValue;
    }
    if (this._clientCertExpirationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertExpirationSeconds = this._clientCertExpirationSeconds;
    }
    if (this._clusterAnnotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterAnnotations = this._clusterAnnotations;
    }
    if (this._featureGates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.featureGates = this._featureGates?.internalValue;
    }
    if (this._kubeApiBurst !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeApiBurst = this._kubeApiBurst;
    }
    if (this._kubeApiqps !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeApiqps = this._kubeApiqps;
    }
    if (this._registrationDriver?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.registrationDriver = this._registrationDriver?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bootstrapKubeConfigs.internalValue = undefined;
      this._clientCertExpirationSeconds = undefined;
      this._clusterAnnotations = undefined;
      this._featureGates.internalValue = undefined;
      this._kubeApiBurst = undefined;
      this._kubeApiqps = undefined;
      this._registrationDriver.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bootstrapKubeConfigs.internalValue = value.bootstrapKubeConfigs;
      this._clientCertExpirationSeconds = value.clientCertExpirationSeconds;
      this._clusterAnnotations = value.clusterAnnotations;
      this._featureGates.internalValue = value.featureGates;
      this._kubeApiBurst = value.kubeApiBurst;
      this._kubeApiqps = value.kubeApiqps;
      this._registrationDriver.internalValue = value.registrationDriver;
    }
  }

  // bootstrap_kube_configs - computed: false, optional: true, required: false
  private _bootstrapKubeConfigs = new DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationBootstrapKubeConfigsOutputReference(this, "bootstrap_kube_configs");
  public get bootstrapKubeConfigs() {
    return this._bootstrapKubeConfigs;
  }
  public putBootstrapKubeConfigs(value: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationBootstrapKubeConfigs) {
    this._bootstrapKubeConfigs.internalValue = value;
  }
  public resetBootstrapKubeConfigs() {
    this._bootstrapKubeConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapKubeConfigsInput() {
    return this._bootstrapKubeConfigs.internalValue;
  }

  // client_cert_expiration_seconds - computed: false, optional: true, required: false
  private _clientCertExpirationSeconds?: number; 
  public get clientCertExpirationSeconds() {
    return this.getNumberAttribute('client_cert_expiration_seconds');
  }
  public set clientCertExpirationSeconds(value: number) {
    this._clientCertExpirationSeconds = value;
  }
  public resetClientCertExpirationSeconds() {
    this._clientCertExpirationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertExpirationSecondsInput() {
    return this._clientCertExpirationSeconds;
  }

  // cluster_annotations - computed: false, optional: true, required: false
  private _clusterAnnotations?: { [key: string]: string }; 
  public get clusterAnnotations() {
    return this.getStringMapAttribute('cluster_annotations');
  }
  public set clusterAnnotations(value: { [key: string]: string }) {
    this._clusterAnnotations = value;
  }
  public resetClusterAnnotations() {
    this._clusterAnnotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterAnnotationsInput() {
    return this._clusterAnnotations;
  }

  // feature_gates - computed: false, optional: true, required: false
  private _featureGates = new DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationFeatureGatesList(this, "feature_gates", false);
  public get featureGates() {
    return this._featureGates;
  }
  public putFeatureGates(value: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationFeatureGates[] | cdktf.IResolvable) {
    this._featureGates.internalValue = value;
  }
  public resetFeatureGates() {
    this._featureGates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureGatesInput() {
    return this._featureGates.internalValue;
  }

  // kube_api_burst - computed: false, optional: true, required: false
  private _kubeApiBurst?: number; 
  public get kubeApiBurst() {
    return this.getNumberAttribute('kube_api_burst');
  }
  public set kubeApiBurst(value: number) {
    this._kubeApiBurst = value;
  }
  public resetKubeApiBurst() {
    this._kubeApiBurst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeApiBurstInput() {
    return this._kubeApiBurst;
  }

  // kube_apiqps - computed: false, optional: true, required: false
  private _kubeApiqps?: number; 
  public get kubeApiqps() {
    return this.getNumberAttribute('kube_apiqps');
  }
  public set kubeApiqps(value: number) {
    this._kubeApiqps = value;
  }
  public resetKubeApiqps() {
    this._kubeApiqps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeApiqpsInput() {
    return this._kubeApiqps;
  }

  // registration_driver - computed: false, optional: true, required: false
  private _registrationDriver = new DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationRegistrationDriverOutputReference(this, "registration_driver");
  public get registrationDriver() {
    return this._registrationDriver;
  }
  public putRegistrationDriver(value: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationRegistrationDriver) {
    this._registrationDriver.internalValue = value;
  }
  public resetRegistrationDriver() {
    this._registrationDriver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationDriverInput() {
    return this._registrationDriver.internalValue;
  }
}
export interface DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecResourceRequirementResourceRequirementsClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_open_cluster_management_io_klusterlet_v1_manifest#name DataK8SOperatorOpenClusterManagementIoKlusterletV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecResourceRequirementResourceRequirementsClaimsToTerraform(struct?: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecResourceRequirementResourceRequirementsClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecResourceRequirementResourceRequirementsClaimsToHclTerraform(struct?: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecResourceRequirementResourceRequirementsClaims | cdktf.IResolvable): any {
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

export class DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecResourceRequirementResourceRequirementsClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecResourceRequirementResourceRequirementsClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecResourceRequirementResourceRequirementsClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecResourceRequirementResourceRequirementsClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecResourceRequirementResourceRequirementsClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecResourceRequirementResourceRequirementsClaimsOutputReference {
    return new DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecResourceRequirementResourceRequirementsClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecResourceRequirementResourceRequirements {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_open_cluster_management_io_klusterlet_v1_manifest#claims DataK8SOperatorOpenClusterManagementIoKlusterletV1Manifest#claims}
  */
  readonly claims?: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecResourceRequirementResourceRequirementsClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_open_cluster_management_io_klusterlet_v1_manifest#limits DataK8SOperatorOpenClusterManagementIoKlusterletV1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_open_cluster_management_io_klusterlet_v1_manifest#requests DataK8SOperatorOpenClusterManagementIoKlusterletV1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecResourceRequirementResourceRequirementsToTerraform(struct?: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecResourceRequirementResourceRequirements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecResourceRequirementResourceRequirementsClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecResourceRequirementResourceRequirementsToHclTerraform(struct?: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecResourceRequirementResourceRequirements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecResourceRequirementResourceRequirementsClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecResourceRequirementResourceRequirementsClaimsList",
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

export class DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecResourceRequirementResourceRequirementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecResourceRequirementResourceRequirements | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecResourceRequirementResourceRequirements | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecResourceRequirementResourceRequirementsClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecResourceRequirementResourceRequirementsClaims[] | cdktf.IResolvable) {
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
export interface DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecResourceRequirement {
  /**
  * ResourceRequirements defines resource requests and limits when Type is ResourceQosClassResourceRequirement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_open_cluster_management_io_klusterlet_v1_manifest#resource_requirements DataK8SOperatorOpenClusterManagementIoKlusterletV1Manifest#resource_requirements}
  */
  readonly resourceRequirements?: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecResourceRequirementResourceRequirements;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_open_cluster_management_io_klusterlet_v1_manifest#type DataK8SOperatorOpenClusterManagementIoKlusterletV1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecResourceRequirementToTerraform(struct?: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecResourceRequirement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_requirements: dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecResourceRequirementResourceRequirementsToTerraform(struct!.resourceRequirements),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecResourceRequirementToHclTerraform(struct?: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecResourceRequirement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_requirements: {
      value: dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecResourceRequirementResourceRequirementsToHclTerraform(struct!.resourceRequirements),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecResourceRequirementResourceRequirements",
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

export class DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecResourceRequirementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecResourceRequirement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceRequirements?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceRequirements = this._resourceRequirements?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecResourceRequirement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceRequirements.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceRequirements.internalValue = value.resourceRequirements;
      this._type = value.type;
    }
  }

  // resource_requirements - computed: false, optional: true, required: false
  private _resourceRequirements = new DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecResourceRequirementResourceRequirementsOutputReference(this, "resource_requirements");
  public get resourceRequirements() {
    return this._resourceRequirements;
  }
  public putResourceRequirements(value: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecResourceRequirementResourceRequirements) {
    this._resourceRequirements.internalValue = value;
  }
  public resetResourceRequirements() {
    this._resourceRequirements.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceRequirementsInput() {
    return this._resourceRequirements.internalValue;
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
export interface DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecWorkConfigurationFeatureGates {
  /**
  * Feature is the key of feature gate. e.g. featuregate/Foo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_open_cluster_management_io_klusterlet_v1_manifest#feature DataK8SOperatorOpenClusterManagementIoKlusterletV1Manifest#feature}
  */
  readonly feature: string;
  /**
  * Mode is either Enable, Disable, '' where '' is Disable by default. In Enable mode, a valid feature gate 'featuregate/Foo' will be set to '--featuregate/Foo=true'. In Disable mode, a valid feature gate 'featuregate/Foo' will be set to '--featuregate/Foo=false'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_open_cluster_management_io_klusterlet_v1_manifest#mode DataK8SOperatorOpenClusterManagementIoKlusterletV1Manifest#mode}
  */
  readonly mode?: string;
}

export function dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecWorkConfigurationFeatureGatesToTerraform(struct?: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecWorkConfigurationFeatureGates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    feature: cdktf.stringToTerraform(struct!.feature),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecWorkConfigurationFeatureGatesToHclTerraform(struct?: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecWorkConfigurationFeatureGates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    feature: {
      value: cdktf.stringToHclTerraform(struct!.feature),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecWorkConfigurationFeatureGatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecWorkConfigurationFeatureGates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._feature !== undefined) {
      hasAnyValues = true;
      internalValueResult.feature = this._feature;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecWorkConfigurationFeatureGates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._feature = undefined;
      this._mode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._feature = value.feature;
      this._mode = value.mode;
    }
  }

  // feature - computed: false, optional: false, required: true
  private _feature?: string; 
  public get feature() {
    return this.getStringAttribute('feature');
  }
  public set feature(value: string) {
    this._feature = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureInput() {
    return this._feature;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}

export class DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecWorkConfigurationFeatureGatesList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecWorkConfigurationFeatureGates[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecWorkConfigurationFeatureGatesOutputReference {
    return new DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecWorkConfigurationFeatureGatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecWorkConfiguration {
  /**
  * AppliedManifestWorkEvictionGracePeriod is the eviction grace period the work agent will wait before evicting the AppliedManifestWorks, whose corresponding ManifestWorks are missing on the hub cluster, from the managed cluster. If not present, the default value of the work agent will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_open_cluster_management_io_klusterlet_v1_manifest#applied_manifest_work_eviction_grace_period DataK8SOperatorOpenClusterManagementIoKlusterletV1Manifest#applied_manifest_work_eviction_grace_period}
  */
  readonly appliedManifestWorkEvictionGracePeriod?: string;
  /**
  * FeatureGates represents the list of feature gates for work If it is set empty, default feature gates will be used. If it is set, featuregate/Foo is an example of one item in FeatureGates: 1. If featuregate/Foo does not exist, registration-operator will discard it 2. If featuregate/Foo exists and is false by default. It is now possible to set featuregate/Foo=[false|true] 3. If featuregate/Foo exists and is true by default. If a cluster-admin upgrading from 1 to 2 wants to continue having featuregate/Foo=false, he can set featuregate/Foo=false before upgrading. Let's say the cluster-admin wants featuregate/Foo=false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_open_cluster_management_io_klusterlet_v1_manifest#feature_gates DataK8SOperatorOpenClusterManagementIoKlusterletV1Manifest#feature_gates}
  */
  readonly featureGates?: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecWorkConfigurationFeatureGates[] | cdktf.IResolvable;
  /**
  * KubeAPIBurst indicates the maximum burst of the throttle while talking with apiserver of hub cluster from the spoke cluster. If it is set empty, use the default value: 100
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_open_cluster_management_io_klusterlet_v1_manifest#kube_api_burst DataK8SOperatorOpenClusterManagementIoKlusterletV1Manifest#kube_api_burst}
  */
  readonly kubeApiBurst?: number;
  /**
  * KubeAPIQPS indicates the maximum QPS while talking with apiserver of hub cluster from the spoke cluster. If it is set empty, use the default value: 50
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_open_cluster_management_io_klusterlet_v1_manifest#kube_apiqps DataK8SOperatorOpenClusterManagementIoKlusterletV1Manifest#kube_apiqps}
  */
  readonly kubeApiqps?: number;
}

export function dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecWorkConfigurationToTerraform(struct?: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecWorkConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    applied_manifest_work_eviction_grace_period: cdktf.stringToTerraform(struct!.appliedManifestWorkEvictionGracePeriod),
    feature_gates: cdktf.listMapper(dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecWorkConfigurationFeatureGatesToTerraform, false)(struct!.featureGates),
    kube_api_burst: cdktf.numberToTerraform(struct!.kubeApiBurst),
    kube_apiqps: cdktf.numberToTerraform(struct!.kubeApiqps),
  }
}


export function dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecWorkConfigurationToHclTerraform(struct?: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecWorkConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    applied_manifest_work_eviction_grace_period: {
      value: cdktf.stringToHclTerraform(struct!.appliedManifestWorkEvictionGracePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    feature_gates: {
      value: cdktf.listMapperHcl(dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecWorkConfigurationFeatureGatesToHclTerraform, false)(struct!.featureGates),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecWorkConfigurationFeatureGatesList",
    },
    kube_api_burst: {
      value: cdktf.numberToHclTerraform(struct!.kubeApiBurst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kube_apiqps: {
      value: cdktf.numberToHclTerraform(struct!.kubeApiqps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecWorkConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecWorkConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appliedManifestWorkEvictionGracePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.appliedManifestWorkEvictionGracePeriod = this._appliedManifestWorkEvictionGracePeriod;
    }
    if (this._featureGates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.featureGates = this._featureGates?.internalValue;
    }
    if (this._kubeApiBurst !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeApiBurst = this._kubeApiBurst;
    }
    if (this._kubeApiqps !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeApiqps = this._kubeApiqps;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecWorkConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appliedManifestWorkEvictionGracePeriod = undefined;
      this._featureGates.internalValue = undefined;
      this._kubeApiBurst = undefined;
      this._kubeApiqps = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appliedManifestWorkEvictionGracePeriod = value.appliedManifestWorkEvictionGracePeriod;
      this._featureGates.internalValue = value.featureGates;
      this._kubeApiBurst = value.kubeApiBurst;
      this._kubeApiqps = value.kubeApiqps;
    }
  }

  // applied_manifest_work_eviction_grace_period - computed: false, optional: true, required: false
  private _appliedManifestWorkEvictionGracePeriod?: string; 
  public get appliedManifestWorkEvictionGracePeriod() {
    return this.getStringAttribute('applied_manifest_work_eviction_grace_period');
  }
  public set appliedManifestWorkEvictionGracePeriod(value: string) {
    this._appliedManifestWorkEvictionGracePeriod = value;
  }
  public resetAppliedManifestWorkEvictionGracePeriod() {
    this._appliedManifestWorkEvictionGracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appliedManifestWorkEvictionGracePeriodInput() {
    return this._appliedManifestWorkEvictionGracePeriod;
  }

  // feature_gates - computed: false, optional: true, required: false
  private _featureGates = new DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecWorkConfigurationFeatureGatesList(this, "feature_gates", false);
  public get featureGates() {
    return this._featureGates;
  }
  public putFeatureGates(value: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecWorkConfigurationFeatureGates[] | cdktf.IResolvable) {
    this._featureGates.internalValue = value;
  }
  public resetFeatureGates() {
    this._featureGates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureGatesInput() {
    return this._featureGates.internalValue;
  }

  // kube_api_burst - computed: false, optional: true, required: false
  private _kubeApiBurst?: number; 
  public get kubeApiBurst() {
    return this.getNumberAttribute('kube_api_burst');
  }
  public set kubeApiBurst(value: number) {
    this._kubeApiBurst = value;
  }
  public resetKubeApiBurst() {
    this._kubeApiBurst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeApiBurstInput() {
    return this._kubeApiBurst;
  }

  // kube_apiqps - computed: false, optional: true, required: false
  private _kubeApiqps?: number; 
  public get kubeApiqps() {
    return this.getNumberAttribute('kube_apiqps');
  }
  public set kubeApiqps(value: number) {
    this._kubeApiqps = value;
  }
  public resetKubeApiqps() {
    this._kubeApiqps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeApiqpsInput() {
    return this._kubeApiqps;
  }
}
export interface DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpec {
  /**
  * ClusterName is the name of the managed cluster to be created on hub. The Klusterlet agent generates a random name if it is not set, or discovers the appropriate cluster name on OpenShift.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_open_cluster_management_io_klusterlet_v1_manifest#cluster_name DataK8SOperatorOpenClusterManagementIoKlusterletV1Manifest#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * DeployOption contains the options of deploying a klusterlet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_open_cluster_management_io_klusterlet_v1_manifest#deploy_option DataK8SOperatorOpenClusterManagementIoKlusterletV1Manifest#deploy_option}
  */
  readonly deployOption?: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecDeployOption;
  /**
  * ExternalServerURLs represents a list of apiserver urls and ca bundles that is accessible externally If it is set empty, managed cluster has no externally accessible url that hub cluster can visit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_open_cluster_management_io_klusterlet_v1_manifest#external_server_urls DataK8SOperatorOpenClusterManagementIoKlusterletV1Manifest#external_server_urls}
  */
  readonly externalServerUrls?: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecExternalServerUrls[] | cdktf.IResolvable;
  /**
  * HubApiServerHostAlias contains the host alias for hub api server. registration-agent and work-agent will use it to communicate with hub api server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_open_cluster_management_io_klusterlet_v1_manifest#hub_api_server_host_alias DataK8SOperatorOpenClusterManagementIoKlusterletV1Manifest#hub_api_server_host_alias}
  */
  readonly hubApiServerHostAlias?: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecHubApiServerHostAlias;
  /**
  * ImagePullSpec represents the desired image configuration of agent, it takes effect only when singleton mode is set. quay.io/open-cluster-management.io/registration-operator:latest will be used if unspecified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_open_cluster_management_io_klusterlet_v1_manifest#image_pull_spec DataK8SOperatorOpenClusterManagementIoKlusterletV1Manifest#image_pull_spec}
  */
  readonly imagePullSpec?: string;
  /**
  * Namespace is the namespace to deploy the agent on the managed cluster. The namespace must have a prefix of 'open-cluster-management-', and if it is not set, the namespace of 'open-cluster-management-agent' is used to deploy agent. In addition, the add-ons are deployed to the namespace of '{Namespace}-addon'. In the Hosted mode, this namespace still exists on the managed cluster to contain necessary resources, like service accounts, roles and rolebindings, while the agent is deployed to the namespace with the same name as klusterlet on the management cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_open_cluster_management_io_klusterlet_v1_manifest#namespace DataK8SOperatorOpenClusterManagementIoKlusterletV1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * NodePlacement enables explicit control over the scheduling of the deployed pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_open_cluster_management_io_klusterlet_v1_manifest#node_placement DataK8SOperatorOpenClusterManagementIoKlusterletV1Manifest#node_placement}
  */
  readonly nodePlacement?: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecNodePlacement;
  /**
  * PriorityClassName is the name of the PriorityClass that will be used by the deployed klusterlet agent. It will be ignored when the PriorityClass/v1 API is not available on the managed cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_open_cluster_management_io_klusterlet_v1_manifest#priority_class_name DataK8SOperatorOpenClusterManagementIoKlusterletV1Manifest#priority_class_name}
  */
  readonly priorityClassName?: string;
  /**
  * RegistrationConfiguration contains the configuration of registration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_open_cluster_management_io_klusterlet_v1_manifest#registration_configuration DataK8SOperatorOpenClusterManagementIoKlusterletV1Manifest#registration_configuration}
  */
  readonly registrationConfiguration?: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfiguration;
  /**
  * RegistrationImagePullSpec represents the desired image configuration of registration agent. quay.io/open-cluster-management.io/registration:latest will be used if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_open_cluster_management_io_klusterlet_v1_manifest#registration_image_pull_spec DataK8SOperatorOpenClusterManagementIoKlusterletV1Manifest#registration_image_pull_spec}
  */
  readonly registrationImagePullSpec?: string;
  /**
  * ResourceRequirement specify QoS classes of deployments managed by klusterlet. It applies to all the containers in the deployments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_open_cluster_management_io_klusterlet_v1_manifest#resource_requirement DataK8SOperatorOpenClusterManagementIoKlusterletV1Manifest#resource_requirement}
  */
  readonly resourceRequirement?: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecResourceRequirement;
  /**
  * WorkConfiguration contains the configuration of work
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_open_cluster_management_io_klusterlet_v1_manifest#work_configuration DataK8SOperatorOpenClusterManagementIoKlusterletV1Manifest#work_configuration}
  */
  readonly workConfiguration?: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecWorkConfiguration;
  /**
  * WorkImagePullSpec represents the desired image configuration of work agent. quay.io/open-cluster-management.io/work:latest will be used if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_open_cluster_management_io_klusterlet_v1_manifest#work_image_pull_spec DataK8SOperatorOpenClusterManagementIoKlusterletV1Manifest#work_image_pull_spec}
  */
  readonly workImagePullSpec?: string;
}

export function dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecToTerraform(struct?: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    deploy_option: dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecDeployOptionToTerraform(struct!.deployOption),
    external_server_urls: cdktf.listMapper(dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecExternalServerUrlsToTerraform, false)(struct!.externalServerUrls),
    hub_api_server_host_alias: dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecHubApiServerHostAliasToTerraform(struct!.hubApiServerHostAlias),
    image_pull_spec: cdktf.stringToTerraform(struct!.imagePullSpec),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    node_placement: dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecNodePlacementToTerraform(struct!.nodePlacement),
    priority_class_name: cdktf.stringToTerraform(struct!.priorityClassName),
    registration_configuration: dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationToTerraform(struct!.registrationConfiguration),
    registration_image_pull_spec: cdktf.stringToTerraform(struct!.registrationImagePullSpec),
    resource_requirement: dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecResourceRequirementToTerraform(struct!.resourceRequirement),
    work_configuration: dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecWorkConfigurationToTerraform(struct!.workConfiguration),
    work_image_pull_spec: cdktf.stringToTerraform(struct!.workImagePullSpec),
  }
}


export function dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecToHclTerraform(struct?: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deploy_option: {
      value: dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecDeployOptionToHclTerraform(struct!.deployOption),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecDeployOption",
    },
    external_server_urls: {
      value: cdktf.listMapperHcl(dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecExternalServerUrlsToHclTerraform, false)(struct!.externalServerUrls),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecExternalServerUrlsList",
    },
    hub_api_server_host_alias: {
      value: dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecHubApiServerHostAliasToHclTerraform(struct!.hubApiServerHostAlias),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecHubApiServerHostAlias",
    },
    image_pull_spec: {
      value: cdktf.stringToHclTerraform(struct!.imagePullSpec),
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
    node_placement: {
      value: dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecNodePlacementToHclTerraform(struct!.nodePlacement),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecNodePlacement",
    },
    priority_class_name: {
      value: cdktf.stringToHclTerraform(struct!.priorityClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registration_configuration: {
      value: dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationToHclTerraform(struct!.registrationConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfiguration",
    },
    registration_image_pull_spec: {
      value: cdktf.stringToHclTerraform(struct!.registrationImagePullSpec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_requirement: {
      value: dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecResourceRequirementToHclTerraform(struct!.resourceRequirement),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecResourceRequirement",
    },
    work_configuration: {
      value: dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecWorkConfigurationToHclTerraform(struct!.workConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecWorkConfiguration",
    },
    work_image_pull_spec: {
      value: cdktf.stringToHclTerraform(struct!.workImagePullSpec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    if (this._deployOption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployOption = this._deployOption?.internalValue;
    }
    if (this._externalServerUrls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalServerUrls = this._externalServerUrls?.internalValue;
    }
    if (this._hubApiServerHostAlias?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hubApiServerHostAlias = this._hubApiServerHostAlias?.internalValue;
    }
    if (this._imagePullSpec !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullSpec = this._imagePullSpec;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._nodePlacement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePlacement = this._nodePlacement?.internalValue;
    }
    if (this._priorityClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityClassName = this._priorityClassName;
    }
    if (this._registrationConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.registrationConfiguration = this._registrationConfiguration?.internalValue;
    }
    if (this._registrationImagePullSpec !== undefined) {
      hasAnyValues = true;
      internalValueResult.registrationImagePullSpec = this._registrationImagePullSpec;
    }
    if (this._resourceRequirement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceRequirement = this._resourceRequirement?.internalValue;
    }
    if (this._workConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workConfiguration = this._workConfiguration?.internalValue;
    }
    if (this._workImagePullSpec !== undefined) {
      hasAnyValues = true;
      internalValueResult.workImagePullSpec = this._workImagePullSpec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterName = undefined;
      this._deployOption.internalValue = undefined;
      this._externalServerUrls.internalValue = undefined;
      this._hubApiServerHostAlias.internalValue = undefined;
      this._imagePullSpec = undefined;
      this._namespace = undefined;
      this._nodePlacement.internalValue = undefined;
      this._priorityClassName = undefined;
      this._registrationConfiguration.internalValue = undefined;
      this._registrationImagePullSpec = undefined;
      this._resourceRequirement.internalValue = undefined;
      this._workConfiguration.internalValue = undefined;
      this._workImagePullSpec = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterName = value.clusterName;
      this._deployOption.internalValue = value.deployOption;
      this._externalServerUrls.internalValue = value.externalServerUrls;
      this._hubApiServerHostAlias.internalValue = value.hubApiServerHostAlias;
      this._imagePullSpec = value.imagePullSpec;
      this._namespace = value.namespace;
      this._nodePlacement.internalValue = value.nodePlacement;
      this._priorityClassName = value.priorityClassName;
      this._registrationConfiguration.internalValue = value.registrationConfiguration;
      this._registrationImagePullSpec = value.registrationImagePullSpec;
      this._resourceRequirement.internalValue = value.resourceRequirement;
      this._workConfiguration.internalValue = value.workConfiguration;
      this._workImagePullSpec = value.workImagePullSpec;
    }
  }

  // cluster_name - computed: false, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // deploy_option - computed: false, optional: true, required: false
  private _deployOption = new DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecDeployOptionOutputReference(this, "deploy_option");
  public get deployOption() {
    return this._deployOption;
  }
  public putDeployOption(value: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecDeployOption) {
    this._deployOption.internalValue = value;
  }
  public resetDeployOption() {
    this._deployOption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployOptionInput() {
    return this._deployOption.internalValue;
  }

  // external_server_urls - computed: false, optional: true, required: false
  private _externalServerUrls = new DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecExternalServerUrlsList(this, "external_server_urls", false);
  public get externalServerUrls() {
    return this._externalServerUrls;
  }
  public putExternalServerUrls(value: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecExternalServerUrls[] | cdktf.IResolvable) {
    this._externalServerUrls.internalValue = value;
  }
  public resetExternalServerUrls() {
    this._externalServerUrls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalServerUrlsInput() {
    return this._externalServerUrls.internalValue;
  }

  // hub_api_server_host_alias - computed: false, optional: true, required: false
  private _hubApiServerHostAlias = new DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecHubApiServerHostAliasOutputReference(this, "hub_api_server_host_alias");
  public get hubApiServerHostAlias() {
    return this._hubApiServerHostAlias;
  }
  public putHubApiServerHostAlias(value: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecHubApiServerHostAlias) {
    this._hubApiServerHostAlias.internalValue = value;
  }
  public resetHubApiServerHostAlias() {
    this._hubApiServerHostAlias.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hubApiServerHostAliasInput() {
    return this._hubApiServerHostAlias.internalValue;
  }

  // image_pull_spec - computed: false, optional: true, required: false
  private _imagePullSpec?: string; 
  public get imagePullSpec() {
    return this.getStringAttribute('image_pull_spec');
  }
  public set imagePullSpec(value: string) {
    this._imagePullSpec = value;
  }
  public resetImagePullSpec() {
    this._imagePullSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullSpecInput() {
    return this._imagePullSpec;
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

  // node_placement - computed: false, optional: true, required: false
  private _nodePlacement = new DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecNodePlacementOutputReference(this, "node_placement");
  public get nodePlacement() {
    return this._nodePlacement;
  }
  public putNodePlacement(value: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecNodePlacement) {
    this._nodePlacement.internalValue = value;
  }
  public resetNodePlacement() {
    this._nodePlacement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePlacementInput() {
    return this._nodePlacement.internalValue;
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

  // registration_configuration - computed: false, optional: true, required: false
  private _registrationConfiguration = new DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfigurationOutputReference(this, "registration_configuration");
  public get registrationConfiguration() {
    return this._registrationConfiguration;
  }
  public putRegistrationConfiguration(value: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecRegistrationConfiguration) {
    this._registrationConfiguration.internalValue = value;
  }
  public resetRegistrationConfiguration() {
    this._registrationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationConfigurationInput() {
    return this._registrationConfiguration.internalValue;
  }

  // registration_image_pull_spec - computed: false, optional: true, required: false
  private _registrationImagePullSpec?: string; 
  public get registrationImagePullSpec() {
    return this.getStringAttribute('registration_image_pull_spec');
  }
  public set registrationImagePullSpec(value: string) {
    this._registrationImagePullSpec = value;
  }
  public resetRegistrationImagePullSpec() {
    this._registrationImagePullSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationImagePullSpecInput() {
    return this._registrationImagePullSpec;
  }

  // resource_requirement - computed: false, optional: true, required: false
  private _resourceRequirement = new DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecResourceRequirementOutputReference(this, "resource_requirement");
  public get resourceRequirement() {
    return this._resourceRequirement;
  }
  public putResourceRequirement(value: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecResourceRequirement) {
    this._resourceRequirement.internalValue = value;
  }
  public resetResourceRequirement() {
    this._resourceRequirement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceRequirementInput() {
    return this._resourceRequirement.internalValue;
  }

  // work_configuration - computed: false, optional: true, required: false
  private _workConfiguration = new DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecWorkConfigurationOutputReference(this, "work_configuration");
  public get workConfiguration() {
    return this._workConfiguration;
  }
  public putWorkConfiguration(value: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecWorkConfiguration) {
    this._workConfiguration.internalValue = value;
  }
  public resetWorkConfiguration() {
    this._workConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workConfigurationInput() {
    return this._workConfiguration.internalValue;
  }

  // work_image_pull_spec - computed: false, optional: true, required: false
  private _workImagePullSpec?: string; 
  public get workImagePullSpec() {
    return this.getStringAttribute('work_image_pull_spec');
  }
  public set workImagePullSpec(value: string) {
    this._workImagePullSpec = value;
  }
  public resetWorkImagePullSpec() {
    this._workImagePullSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workImagePullSpecInput() {
    return this._workImagePullSpec;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_open_cluster_management_io_klusterlet_v1_manifest k8s_operator_open_cluster_management_io_klusterlet_v1_manifest}
*/
export class DataK8SOperatorOpenClusterManagementIoKlusterletV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_operator_open_cluster_management_io_klusterlet_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SOperatorOpenClusterManagementIoKlusterletV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SOperatorOpenClusterManagementIoKlusterletV1Manifest to import
  * @param importFromId The id of the existing DataK8SOperatorOpenClusterManagementIoKlusterletV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_open_cluster_management_io_klusterlet_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SOperatorOpenClusterManagementIoKlusterletV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_operator_open_cluster_management_io_klusterlet_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_open_cluster_management_io_klusterlet_v1_manifest k8s_operator_open_cluster_management_io_klusterlet_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_operator_open_cluster_management_io_klusterlet_v1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.1',
        providerVersionConstraint: '2025.12.1'
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
  private _metadata = new DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpec) {
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
      metadata: dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestMetadata",
      },
      spec: {
        value: dataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SOperatorOpenClusterManagementIoKlusterletV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
