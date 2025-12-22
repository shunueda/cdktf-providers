// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_clusterpedia_io_pedia_cluster_v1alpha2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SClusterClusterpediaIoPediaClusterV1Alpha2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_clusterpedia_io_pedia_cluster_v1alpha2_manifest#metadata DataK8SClusterClusterpediaIoPediaClusterV1Alpha2Manifest#metadata}
  */
  readonly metadata: DataK8SClusterClusterpediaIoPediaClusterV1Alpha2ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_clusterpedia_io_pedia_cluster_v1alpha2_manifest#spec DataK8SClusterClusterpediaIoPediaClusterV1Alpha2Manifest#spec}
  */
  readonly spec?: DataK8SClusterClusterpediaIoPediaClusterV1Alpha2ManifestSpec;
}
export interface DataK8SClusterClusterpediaIoPediaClusterV1Alpha2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_clusterpedia_io_pedia_cluster_v1alpha2_manifest#annotations DataK8SClusterClusterpediaIoPediaClusterV1Alpha2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_clusterpedia_io_pedia_cluster_v1alpha2_manifest#labels DataK8SClusterClusterpediaIoPediaClusterV1Alpha2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_clusterpedia_io_pedia_cluster_v1alpha2_manifest#name DataK8SClusterClusterpediaIoPediaClusterV1Alpha2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SClusterClusterpediaIoPediaClusterV1Alpha2ManifestMetadataToTerraform(struct?: DataK8SClusterClusterpediaIoPediaClusterV1Alpha2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SClusterClusterpediaIoPediaClusterV1Alpha2ManifestMetadataToHclTerraform(struct?: DataK8SClusterClusterpediaIoPediaClusterV1Alpha2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SClusterClusterpediaIoPediaClusterV1Alpha2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterClusterpediaIoPediaClusterV1Alpha2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SClusterClusterpediaIoPediaClusterV1Alpha2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SClusterClusterpediaIoPediaClusterV1Alpha2ManifestSpecSyncResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_clusterpedia_io_pedia_cluster_v1alpha2_manifest#group DataK8SClusterClusterpediaIoPediaClusterV1Alpha2Manifest#group}
  */
  readonly group: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_clusterpedia_io_pedia_cluster_v1alpha2_manifest#resources DataK8SClusterClusterpediaIoPediaClusterV1Alpha2Manifest#resources}
  */
  readonly resources: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_clusterpedia_io_pedia_cluster_v1alpha2_manifest#versions DataK8SClusterClusterpediaIoPediaClusterV1Alpha2Manifest#versions}
  */
  readonly versions?: string[];
}

export function dataK8SClusterClusterpediaIoPediaClusterV1Alpha2ManifestSpecSyncResourcesToTerraform(struct?: DataK8SClusterClusterpediaIoPediaClusterV1Alpha2ManifestSpecSyncResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resources),
    versions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.versions),
  }
}


export function dataK8SClusterClusterpediaIoPediaClusterV1Alpha2ManifestSpecSyncResourcesToHclTerraform(struct?: DataK8SClusterClusterpediaIoPediaClusterV1Alpha2ManifestSpecSyncResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    versions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.versions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterClusterpediaIoPediaClusterV1Alpha2ManifestSpecSyncResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SClusterClusterpediaIoPediaClusterV1Alpha2ManifestSpecSyncResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    if (this._versions !== undefined) {
      hasAnyValues = true;
      internalValueResult.versions = this._versions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterClusterpediaIoPediaClusterV1Alpha2ManifestSpecSyncResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._resources = undefined;
      this._versions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._resources = value.resources;
      this._versions = value.versions;
    }
  }

  // group - computed: false, optional: false, required: true
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // resources - computed: false, optional: false, required: true
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }

  // versions - computed: false, optional: true, required: false
  private _versions?: string[]; 
  public get versions() {
    return this.getListAttribute('versions');
  }
  public set versions(value: string[]) {
    this._versions = value;
  }
  public resetVersions() {
    this._versions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionsInput() {
    return this._versions;
  }
}

export class DataK8SClusterClusterpediaIoPediaClusterV1Alpha2ManifestSpecSyncResourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8SClusterClusterpediaIoPediaClusterV1Alpha2ManifestSpecSyncResources[] | cdktf.IResolvable

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
  public get(index: number): DataK8SClusterClusterpediaIoPediaClusterV1Alpha2ManifestSpecSyncResourcesOutputReference {
    return new DataK8SClusterClusterpediaIoPediaClusterV1Alpha2ManifestSpecSyncResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SClusterClusterpediaIoPediaClusterV1Alpha2ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_clusterpedia_io_pedia_cluster_v1alpha2_manifest#apiserver DataK8SClusterClusterpediaIoPediaClusterV1Alpha2Manifest#apiserver}
  */
  readonly apiserver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_clusterpedia_io_pedia_cluster_v1alpha2_manifest#ca_data DataK8SClusterClusterpediaIoPediaClusterV1Alpha2Manifest#ca_data}
  */
  readonly caData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_clusterpedia_io_pedia_cluster_v1alpha2_manifest#cert_data DataK8SClusterClusterpediaIoPediaClusterV1Alpha2Manifest#cert_data}
  */
  readonly certData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_clusterpedia_io_pedia_cluster_v1alpha2_manifest#key_data DataK8SClusterClusterpediaIoPediaClusterV1Alpha2Manifest#key_data}
  */
  readonly keyData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_clusterpedia_io_pedia_cluster_v1alpha2_manifest#kubeconfig DataK8SClusterClusterpediaIoPediaClusterV1Alpha2Manifest#kubeconfig}
  */
  readonly kubeconfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_clusterpedia_io_pedia_cluster_v1alpha2_manifest#sharding_name DataK8SClusterClusterpediaIoPediaClusterV1Alpha2Manifest#sharding_name}
  */
  readonly shardingName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_clusterpedia_io_pedia_cluster_v1alpha2_manifest#sync_all_custom_resources DataK8SClusterClusterpediaIoPediaClusterV1Alpha2Manifest#sync_all_custom_resources}
  */
  readonly syncAllCustomResources?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_clusterpedia_io_pedia_cluster_v1alpha2_manifest#sync_resources DataK8SClusterClusterpediaIoPediaClusterV1Alpha2Manifest#sync_resources}
  */
  readonly syncResources: DataK8SClusterClusterpediaIoPediaClusterV1Alpha2ManifestSpecSyncResources[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_clusterpedia_io_pedia_cluster_v1alpha2_manifest#sync_resources_ref_name DataK8SClusterClusterpediaIoPediaClusterV1Alpha2Manifest#sync_resources_ref_name}
  */
  readonly syncResourcesRefName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_clusterpedia_io_pedia_cluster_v1alpha2_manifest#token_data DataK8SClusterClusterpediaIoPediaClusterV1Alpha2Manifest#token_data}
  */
  readonly tokenData?: string;
}

export function dataK8SClusterClusterpediaIoPediaClusterV1Alpha2ManifestSpecToTerraform(struct?: DataK8SClusterClusterpediaIoPediaClusterV1Alpha2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apiserver: cdktf.stringToTerraform(struct!.apiserver),
    ca_data: cdktf.stringToTerraform(struct!.caData),
    cert_data: cdktf.stringToTerraform(struct!.certData),
    key_data: cdktf.stringToTerraform(struct!.keyData),
    kubeconfig: cdktf.stringToTerraform(struct!.kubeconfig),
    sharding_name: cdktf.stringToTerraform(struct!.shardingName),
    sync_all_custom_resources: cdktf.booleanToTerraform(struct!.syncAllCustomResources),
    sync_resources: cdktf.listMapper(dataK8SClusterClusterpediaIoPediaClusterV1Alpha2ManifestSpecSyncResourcesToTerraform, false)(struct!.syncResources),
    sync_resources_ref_name: cdktf.stringToTerraform(struct!.syncResourcesRefName),
    token_data: cdktf.stringToTerraform(struct!.tokenData),
  }
}


export function dataK8SClusterClusterpediaIoPediaClusterV1Alpha2ManifestSpecToHclTerraform(struct?: DataK8SClusterClusterpediaIoPediaClusterV1Alpha2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apiserver: {
      value: cdktf.stringToHclTerraform(struct!.apiserver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_data: {
      value: cdktf.stringToHclTerraform(struct!.caData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_data: {
      value: cdktf.stringToHclTerraform(struct!.certData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_data: {
      value: cdktf.stringToHclTerraform(struct!.keyData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubeconfig: {
      value: cdktf.stringToHclTerraform(struct!.kubeconfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sharding_name: {
      value: cdktf.stringToHclTerraform(struct!.shardingName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sync_all_custom_resources: {
      value: cdktf.booleanToHclTerraform(struct!.syncAllCustomResources),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sync_resources: {
      value: cdktf.listMapperHcl(dataK8SClusterClusterpediaIoPediaClusterV1Alpha2ManifestSpecSyncResourcesToHclTerraform, false)(struct!.syncResources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SClusterClusterpediaIoPediaClusterV1Alpha2ManifestSpecSyncResourcesList",
    },
    sync_resources_ref_name: {
      value: cdktf.stringToHclTerraform(struct!.syncResourcesRefName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_data: {
      value: cdktf.stringToHclTerraform(struct!.tokenData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterClusterpediaIoPediaClusterV1Alpha2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterClusterpediaIoPediaClusterV1Alpha2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiserver !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiserver = this._apiserver;
    }
    if (this._caData !== undefined) {
      hasAnyValues = true;
      internalValueResult.caData = this._caData;
    }
    if (this._certData !== undefined) {
      hasAnyValues = true;
      internalValueResult.certData = this._certData;
    }
    if (this._keyData !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyData = this._keyData;
    }
    if (this._kubeconfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeconfig = this._kubeconfig;
    }
    if (this._shardingName !== undefined) {
      hasAnyValues = true;
      internalValueResult.shardingName = this._shardingName;
    }
    if (this._syncAllCustomResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncAllCustomResources = this._syncAllCustomResources;
    }
    if (this._syncResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncResources = this._syncResources?.internalValue;
    }
    if (this._syncResourcesRefName !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncResourcesRefName = this._syncResourcesRefName;
    }
    if (this._tokenData !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenData = this._tokenData;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterClusterpediaIoPediaClusterV1Alpha2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiserver = undefined;
      this._caData = undefined;
      this._certData = undefined;
      this._keyData = undefined;
      this._kubeconfig = undefined;
      this._shardingName = undefined;
      this._syncAllCustomResources = undefined;
      this._syncResources.internalValue = undefined;
      this._syncResourcesRefName = undefined;
      this._tokenData = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiserver = value.apiserver;
      this._caData = value.caData;
      this._certData = value.certData;
      this._keyData = value.keyData;
      this._kubeconfig = value.kubeconfig;
      this._shardingName = value.shardingName;
      this._syncAllCustomResources = value.syncAllCustomResources;
      this._syncResources.internalValue = value.syncResources;
      this._syncResourcesRefName = value.syncResourcesRefName;
      this._tokenData = value.tokenData;
    }
  }

  // apiserver - computed: false, optional: true, required: false
  private _apiserver?: string; 
  public get apiserver() {
    return this.getStringAttribute('apiserver');
  }
  public set apiserver(value: string) {
    this._apiserver = value;
  }
  public resetApiserver() {
    this._apiserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiserverInput() {
    return this._apiserver;
  }

  // ca_data - computed: false, optional: true, required: false
  private _caData?: string; 
  public get caData() {
    return this.getStringAttribute('ca_data');
  }
  public set caData(value: string) {
    this._caData = value;
  }
  public resetCaData() {
    this._caData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caDataInput() {
    return this._caData;
  }

  // cert_data - computed: false, optional: true, required: false
  private _certData?: string; 
  public get certData() {
    return this.getStringAttribute('cert_data');
  }
  public set certData(value: string) {
    this._certData = value;
  }
  public resetCertData() {
    this._certData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certDataInput() {
    return this._certData;
  }

  // key_data - computed: false, optional: true, required: false
  private _keyData?: string; 
  public get keyData() {
    return this.getStringAttribute('key_data');
  }
  public set keyData(value: string) {
    this._keyData = value;
  }
  public resetKeyData() {
    this._keyData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyDataInput() {
    return this._keyData;
  }

  // kubeconfig - computed: false, optional: true, required: false
  private _kubeconfig?: string; 
  public get kubeconfig() {
    return this.getStringAttribute('kubeconfig');
  }
  public set kubeconfig(value: string) {
    this._kubeconfig = value;
  }
  public resetKubeconfig() {
    this._kubeconfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeconfigInput() {
    return this._kubeconfig;
  }

  // sharding_name - computed: false, optional: true, required: false
  private _shardingName?: string; 
  public get shardingName() {
    return this.getStringAttribute('sharding_name');
  }
  public set shardingName(value: string) {
    this._shardingName = value;
  }
  public resetShardingName() {
    this._shardingName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardingNameInput() {
    return this._shardingName;
  }

  // sync_all_custom_resources - computed: false, optional: true, required: false
  private _syncAllCustomResources?: boolean | cdktf.IResolvable; 
  public get syncAllCustomResources() {
    return this.getBooleanAttribute('sync_all_custom_resources');
  }
  public set syncAllCustomResources(value: boolean | cdktf.IResolvable) {
    this._syncAllCustomResources = value;
  }
  public resetSyncAllCustomResources() {
    this._syncAllCustomResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncAllCustomResourcesInput() {
    return this._syncAllCustomResources;
  }

  // sync_resources - computed: false, optional: false, required: true
  private _syncResources = new DataK8SClusterClusterpediaIoPediaClusterV1Alpha2ManifestSpecSyncResourcesList(this, "sync_resources", false);
  public get syncResources() {
    return this._syncResources;
  }
  public putSyncResources(value: DataK8SClusterClusterpediaIoPediaClusterV1Alpha2ManifestSpecSyncResources[] | cdktf.IResolvable) {
    this._syncResources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get syncResourcesInput() {
    return this._syncResources.internalValue;
  }

  // sync_resources_ref_name - computed: false, optional: true, required: false
  private _syncResourcesRefName?: string; 
  public get syncResourcesRefName() {
    return this.getStringAttribute('sync_resources_ref_name');
  }
  public set syncResourcesRefName(value: string) {
    this._syncResourcesRefName = value;
  }
  public resetSyncResourcesRefName() {
    this._syncResourcesRefName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncResourcesRefNameInput() {
    return this._syncResourcesRefName;
  }

  // token_data - computed: false, optional: true, required: false
  private _tokenData?: string; 
  public get tokenData() {
    return this.getStringAttribute('token_data');
  }
  public set tokenData(value: string) {
    this._tokenData = value;
  }
  public resetTokenData() {
    this._tokenData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenDataInput() {
    return this._tokenData;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_clusterpedia_io_pedia_cluster_v1alpha2_manifest k8s_cluster_clusterpedia_io_pedia_cluster_v1alpha2_manifest}
*/
export class DataK8SClusterClusterpediaIoPediaClusterV1Alpha2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_cluster_clusterpedia_io_pedia_cluster_v1alpha2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SClusterClusterpediaIoPediaClusterV1Alpha2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SClusterClusterpediaIoPediaClusterV1Alpha2Manifest to import
  * @param importFromId The id of the existing DataK8SClusterClusterpediaIoPediaClusterV1Alpha2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_clusterpedia_io_pedia_cluster_v1alpha2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SClusterClusterpediaIoPediaClusterV1Alpha2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_cluster_clusterpedia_io_pedia_cluster_v1alpha2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cluster_clusterpedia_io_pedia_cluster_v1alpha2_manifest k8s_cluster_clusterpedia_io_pedia_cluster_v1alpha2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SClusterClusterpediaIoPediaClusterV1Alpha2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SClusterClusterpediaIoPediaClusterV1Alpha2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_cluster_clusterpedia_io_pedia_cluster_v1alpha2_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.22',
        providerVersionConstraint: '2025.12.22'
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
  private _metadata = new DataK8SClusterClusterpediaIoPediaClusterV1Alpha2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SClusterClusterpediaIoPediaClusterV1Alpha2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SClusterClusterpediaIoPediaClusterV1Alpha2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SClusterClusterpediaIoPediaClusterV1Alpha2ManifestSpec) {
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
      metadata: dataK8SClusterClusterpediaIoPediaClusterV1Alpha2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SClusterClusterpediaIoPediaClusterV1Alpha2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SClusterClusterpediaIoPediaClusterV1Alpha2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SClusterClusterpediaIoPediaClusterV1Alpha2ManifestMetadata",
      },
      spec: {
        value: dataK8SClusterClusterpediaIoPediaClusterV1Alpha2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SClusterClusterpediaIoPediaClusterV1Alpha2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
