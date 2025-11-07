// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ripsaw_cloudbulldozer_io_benchmark_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ripsaw_cloudbulldozer_io_benchmark_v1alpha1_manifest#metadata DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ripsaw_cloudbulldozer_io_benchmark_v1alpha1_manifest#spec DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpec;
}
export interface DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ripsaw_cloudbulldozer_io_benchmark_v1alpha1_manifest#annotations DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ripsaw_cloudbulldozer_io_benchmark_v1alpha1_manifest#labels DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ripsaw_cloudbulldozer_io_benchmark_v1alpha1_manifest#name DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ripsaw_cloudbulldozer_io_benchmark_v1alpha1_manifest#namespace DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecElasticsearch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ripsaw_cloudbulldozer_io_benchmark_v1alpha1_manifest#index_name DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1Manifest#index_name}
  */
  readonly indexName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ripsaw_cloudbulldozer_io_benchmark_v1alpha1_manifest#parallel DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1Manifest#parallel}
  */
  readonly parallel?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ripsaw_cloudbulldozer_io_benchmark_v1alpha1_manifest#url DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1Manifest#url}
  */
  readonly url?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ripsaw_cloudbulldozer_io_benchmark_v1alpha1_manifest#verify_cert DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1Manifest#verify_cert}
  */
  readonly verifyCert?: boolean | cdktf.IResolvable;
}

export function dataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecElasticsearchToTerraform(struct?: DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecElasticsearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index_name: cdktf.stringToTerraform(struct!.indexName),
    parallel: cdktf.booleanToTerraform(struct!.parallel),
    url: cdktf.stringToTerraform(struct!.url),
    verify_cert: cdktf.booleanToTerraform(struct!.verifyCert),
  }
}


export function dataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecElasticsearchToHclTerraform(struct?: DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecElasticsearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    index_name: {
      value: cdktf.stringToHclTerraform(struct!.indexName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parallel: {
      value: cdktf.booleanToHclTerraform(struct!.parallel),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verify_cert: {
      value: cdktf.booleanToHclTerraform(struct!.verifyCert),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecElasticsearchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecElasticsearch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._indexName !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexName = this._indexName;
    }
    if (this._parallel !== undefined) {
      hasAnyValues = true;
      internalValueResult.parallel = this._parallel;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._verifyCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyCert = this._verifyCert;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecElasticsearch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._indexName = undefined;
      this._parallel = undefined;
      this._url = undefined;
      this._verifyCert = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._indexName = value.indexName;
      this._parallel = value.parallel;
      this._url = value.url;
      this._verifyCert = value.verifyCert;
    }
  }

  // index_name - computed: false, optional: true, required: false
  private _indexName?: string; 
  public get indexName() {
    return this.getStringAttribute('index_name');
  }
  public set indexName(value: string) {
    this._indexName = value;
  }
  public resetIndexName() {
    this._indexName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexNameInput() {
    return this._indexName;
  }

  // parallel - computed: false, optional: true, required: false
  private _parallel?: boolean | cdktf.IResolvable; 
  public get parallel() {
    return this.getBooleanAttribute('parallel');
  }
  public set parallel(value: boolean | cdktf.IResolvable) {
    this._parallel = value;
  }
  public resetParallel() {
    this._parallel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelInput() {
    return this._parallel;
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

  // verify_cert - computed: false, optional: true, required: false
  private _verifyCert?: boolean | cdktf.IResolvable; 
  public get verifyCert() {
    return this.getBooleanAttribute('verify_cert');
  }
  public set verifyCert(value: boolean | cdktf.IResolvable) {
    this._verifyCert = value;
  }
  public resetVerifyCert() {
    this._verifyCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyCertInput() {
    return this._verifyCert;
  }
}
export interface DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ripsaw_cloudbulldozer_io_benchmark_v1alpha1_manifest#collection DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1Manifest#collection}
  */
  readonly collection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ripsaw_cloudbulldozer_io_benchmark_v1alpha1_manifest#force DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1Manifest#force}
  */
  readonly force?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ripsaw_cloudbulldozer_io_benchmark_v1alpha1_manifest#image DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1Manifest#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ripsaw_cloudbulldozer_io_benchmark_v1alpha1_manifest#label DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1Manifest#label}
  */
  readonly label?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ripsaw_cloudbulldozer_io_benchmark_v1alpha1_manifest#privileged DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1Manifest#privileged}
  */
  readonly privileged?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ripsaw_cloudbulldozer_io_benchmark_v1alpha1_manifest#ssl DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1Manifest#ssl}
  */
  readonly ssl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ripsaw_cloudbulldozer_io_benchmark_v1alpha1_manifest#stockpile_skip_tags DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1Manifest#stockpile_skip_tags}
  */
  readonly stockpileSkipTags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ripsaw_cloudbulldozer_io_benchmark_v1alpha1_manifest#stockpile_tags DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1Manifest#stockpile_tags}
  */
  readonly stockpileTags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ripsaw_cloudbulldozer_io_benchmark_v1alpha1_manifest#targeted DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1Manifest#targeted}
  */
  readonly targeted?: boolean | cdktf.IResolvable;
}

export function dataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecMetadataToTerraform(struct?: DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collection: cdktf.booleanToTerraform(struct!.collection),
    force: cdktf.booleanToTerraform(struct!.force),
    image: cdktf.stringToTerraform(struct!.image),
    label: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.label),
    privileged: cdktf.booleanToTerraform(struct!.privileged),
    ssl: cdktf.booleanToTerraform(struct!.ssl),
    stockpile_skip_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.stockpileSkipTags),
    stockpile_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.stockpileTags),
    targeted: cdktf.booleanToTerraform(struct!.targeted),
  }
}


export function dataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecMetadataToHclTerraform(struct?: DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collection: {
      value: cdktf.booleanToHclTerraform(struct!.collection),
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
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.label),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    privileged: {
      value: cdktf.booleanToHclTerraform(struct!.privileged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ssl: {
      value: cdktf.booleanToHclTerraform(struct!.ssl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    stockpile_skip_tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.stockpileSkipTags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    stockpile_tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.stockpileTags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    targeted: {
      value: cdktf.booleanToHclTerraform(struct!.targeted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collection !== undefined) {
      hasAnyValues = true;
      internalValueResult.collection = this._collection;
    }
    if (this._force !== undefined) {
      hasAnyValues = true;
      internalValueResult.force = this._force;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._privileged !== undefined) {
      hasAnyValues = true;
      internalValueResult.privileged = this._privileged;
    }
    if (this._ssl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssl = this._ssl;
    }
    if (this._stockpileSkipTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.stockpileSkipTags = this._stockpileSkipTags;
    }
    if (this._stockpileTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.stockpileTags = this._stockpileTags;
    }
    if (this._targeted !== undefined) {
      hasAnyValues = true;
      internalValueResult.targeted = this._targeted;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collection = undefined;
      this._force = undefined;
      this._image = undefined;
      this._label = undefined;
      this._privileged = undefined;
      this._ssl = undefined;
      this._stockpileSkipTags = undefined;
      this._stockpileTags = undefined;
      this._targeted = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collection = value.collection;
      this._force = value.force;
      this._image = value.image;
      this._label = value.label;
      this._privileged = value.privileged;
      this._ssl = value.ssl;
      this._stockpileSkipTags = value.stockpileSkipTags;
      this._stockpileTags = value.stockpileTags;
      this._targeted = value.targeted;
    }
  }

  // collection - computed: false, optional: true, required: false
  private _collection?: boolean | cdktf.IResolvable; 
  public get collection() {
    return this.getBooleanAttribute('collection');
  }
  public set collection(value: boolean | cdktf.IResolvable) {
    this._collection = value;
  }
  public resetCollection() {
    this._collection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionInput() {
    return this._collection;
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

  // label - computed: false, optional: true, required: false
  private _label?: { [key: string]: string }; 
  public get label() {
    return this.getStringMapAttribute('label');
  }
  public set label(value: { [key: string]: string }) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
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

  // ssl - computed: false, optional: true, required: false
  private _ssl?: boolean | cdktf.IResolvable; 
  public get ssl() {
    return this.getBooleanAttribute('ssl');
  }
  public set ssl(value: boolean | cdktf.IResolvable) {
    this._ssl = value;
  }
  public resetSsl() {
    this._ssl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInput() {
    return this._ssl;
  }

  // stockpile_skip_tags - computed: false, optional: true, required: false
  private _stockpileSkipTags?: string[]; 
  public get stockpileSkipTags() {
    return this.getListAttribute('stockpile_skip_tags');
  }
  public set stockpileSkipTags(value: string[]) {
    this._stockpileSkipTags = value;
  }
  public resetStockpileSkipTags() {
    this._stockpileSkipTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stockpileSkipTagsInput() {
    return this._stockpileSkipTags;
  }

  // stockpile_tags - computed: false, optional: true, required: false
  private _stockpileTags?: string[]; 
  public get stockpileTags() {
    return this.getListAttribute('stockpile_tags');
  }
  public set stockpileTags(value: string[]) {
    this._stockpileTags = value;
  }
  public resetStockpileTags() {
    this._stockpileTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stockpileTagsInput() {
    return this._stockpileTags;
  }

  // targeted - computed: false, optional: true, required: false
  private _targeted?: boolean | cdktf.IResolvable; 
  public get targeted() {
    return this.getBooleanAttribute('targeted');
  }
  public set targeted(value: boolean | cdktf.IResolvable) {
    this._targeted = value;
  }
  public resetTargeted() {
    this._targeted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetedInput() {
    return this._targeted;
  }
}
export interface DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecPrometheus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ripsaw_cloudbulldozer_io_benchmark_v1alpha1_manifest#es_parallel DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1Manifest#es_parallel}
  */
  readonly esParallel?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ripsaw_cloudbulldozer_io_benchmark_v1alpha1_manifest#es_url DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1Manifest#es_url}
  */
  readonly esUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ripsaw_cloudbulldozer_io_benchmark_v1alpha1_manifest#prom_token DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1Manifest#prom_token}
  */
  readonly promToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ripsaw_cloudbulldozer_io_benchmark_v1alpha1_manifest#prom_url DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1Manifest#prom_url}
  */
  readonly promUrl?: string;
}

export function dataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecPrometheusToTerraform(struct?: DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecPrometheus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    es_parallel: cdktf.booleanToTerraform(struct!.esParallel),
    es_url: cdktf.stringToTerraform(struct!.esUrl),
    prom_token: cdktf.stringToTerraform(struct!.promToken),
    prom_url: cdktf.stringToTerraform(struct!.promUrl),
  }
}


export function dataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecPrometheusToHclTerraform(struct?: DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecPrometheus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    es_parallel: {
      value: cdktf.booleanToHclTerraform(struct!.esParallel),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    es_url: {
      value: cdktf.stringToHclTerraform(struct!.esUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prom_token: {
      value: cdktf.stringToHclTerraform(struct!.promToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prom_url: {
      value: cdktf.stringToHclTerraform(struct!.promUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecPrometheusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecPrometheus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._esParallel !== undefined) {
      hasAnyValues = true;
      internalValueResult.esParallel = this._esParallel;
    }
    if (this._esUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.esUrl = this._esUrl;
    }
    if (this._promToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.promToken = this._promToken;
    }
    if (this._promUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.promUrl = this._promUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecPrometheus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._esParallel = undefined;
      this._esUrl = undefined;
      this._promToken = undefined;
      this._promUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._esParallel = value.esParallel;
      this._esUrl = value.esUrl;
      this._promToken = value.promToken;
      this._promUrl = value.promUrl;
    }
  }

  // es_parallel - computed: false, optional: true, required: false
  private _esParallel?: boolean | cdktf.IResolvable; 
  public get esParallel() {
    return this.getBooleanAttribute('es_parallel');
  }
  public set esParallel(value: boolean | cdktf.IResolvable) {
    this._esParallel = value;
  }
  public resetEsParallel() {
    this._esParallel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get esParallelInput() {
    return this._esParallel;
  }

  // es_url - computed: false, optional: true, required: false
  private _esUrl?: string; 
  public get esUrl() {
    return this.getStringAttribute('es_url');
  }
  public set esUrl(value: string) {
    this._esUrl = value;
  }
  public resetEsUrl() {
    this._esUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get esUrlInput() {
    return this._esUrl;
  }

  // prom_token - computed: false, optional: true, required: false
  private _promToken?: string; 
  public get promToken() {
    return this.getStringAttribute('prom_token');
  }
  public set promToken(value: string) {
    this._promToken = value;
  }
  public resetPromToken() {
    this._promToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promTokenInput() {
    return this._promToken;
  }

  // prom_url - computed: false, optional: true, required: false
  private _promUrl?: string; 
  public get promUrl() {
    return this.getStringAttribute('prom_url');
  }
  public set promUrl(value: string) {
    this._promUrl = value;
  }
  public resetPromUrl() {
    this._promUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promUrlInput() {
    return this._promUrl;
  }
}
export interface DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecSnappy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ripsaw_cloudbulldozer_io_benchmark_v1alpha1_manifest#password DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1Manifest#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ripsaw_cloudbulldozer_io_benchmark_v1alpha1_manifest#url DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1Manifest#url}
  */
  readonly url?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ripsaw_cloudbulldozer_io_benchmark_v1alpha1_manifest#user DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1Manifest#user}
  */
  readonly user?: string;
}

export function dataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecSnappyToTerraform(struct?: DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecSnappy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    url: cdktf.stringToTerraform(struct!.url),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecSnappyToHclTerraform(struct?: DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecSnappy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
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

export class DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecSnappyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecSnappy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecSnappy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._url = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._url = value.url;
      this._user = value.user;
    }
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
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
export interface DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecSystemMetrics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ripsaw_cloudbulldozer_io_benchmark_v1alpha1_manifest#collection DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1Manifest#collection}
  */
  readonly collection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ripsaw_cloudbulldozer_io_benchmark_v1alpha1_manifest#es_url DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1Manifest#es_url}
  */
  readonly esUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ripsaw_cloudbulldozer_io_benchmark_v1alpha1_manifest#image DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1Manifest#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ripsaw_cloudbulldozer_io_benchmark_v1alpha1_manifest#index_name DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1Manifest#index_name}
  */
  readonly indexName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ripsaw_cloudbulldozer_io_benchmark_v1alpha1_manifest#metrics_profile DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1Manifest#metrics_profile}
  */
  readonly metricsProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ripsaw_cloudbulldozer_io_benchmark_v1alpha1_manifest#prom_token DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1Manifest#prom_token}
  */
  readonly promToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ripsaw_cloudbulldozer_io_benchmark_v1alpha1_manifest#prom_url DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1Manifest#prom_url}
  */
  readonly promUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ripsaw_cloudbulldozer_io_benchmark_v1alpha1_manifest#step DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1Manifest#step}
  */
  readonly step?: string;
}

export function dataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecSystemMetricsToTerraform(struct?: DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecSystemMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collection: cdktf.booleanToTerraform(struct!.collection),
    es_url: cdktf.stringToTerraform(struct!.esUrl),
    image: cdktf.stringToTerraform(struct!.image),
    index_name: cdktf.stringToTerraform(struct!.indexName),
    metrics_profile: cdktf.stringToTerraform(struct!.metricsProfile),
    prom_token: cdktf.stringToTerraform(struct!.promToken),
    prom_url: cdktf.stringToTerraform(struct!.promUrl),
    step: cdktf.stringToTerraform(struct!.step),
  }
}


export function dataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecSystemMetricsToHclTerraform(struct?: DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecSystemMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collection: {
      value: cdktf.booleanToHclTerraform(struct!.collection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    es_url: {
      value: cdktf.stringToHclTerraform(struct!.esUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index_name: {
      value: cdktf.stringToHclTerraform(struct!.indexName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metrics_profile: {
      value: cdktf.stringToHclTerraform(struct!.metricsProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prom_token: {
      value: cdktf.stringToHclTerraform(struct!.promToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prom_url: {
      value: cdktf.stringToHclTerraform(struct!.promUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    step: {
      value: cdktf.stringToHclTerraform(struct!.step),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecSystemMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecSystemMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collection !== undefined) {
      hasAnyValues = true;
      internalValueResult.collection = this._collection;
    }
    if (this._esUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.esUrl = this._esUrl;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._indexName !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexName = this._indexName;
    }
    if (this._metricsProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsProfile = this._metricsProfile;
    }
    if (this._promToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.promToken = this._promToken;
    }
    if (this._promUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.promUrl = this._promUrl;
    }
    if (this._step !== undefined) {
      hasAnyValues = true;
      internalValueResult.step = this._step;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecSystemMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collection = undefined;
      this._esUrl = undefined;
      this._image = undefined;
      this._indexName = undefined;
      this._metricsProfile = undefined;
      this._promToken = undefined;
      this._promUrl = undefined;
      this._step = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collection = value.collection;
      this._esUrl = value.esUrl;
      this._image = value.image;
      this._indexName = value.indexName;
      this._metricsProfile = value.metricsProfile;
      this._promToken = value.promToken;
      this._promUrl = value.promUrl;
      this._step = value.step;
    }
  }

  // collection - computed: false, optional: true, required: false
  private _collection?: boolean | cdktf.IResolvable; 
  public get collection() {
    return this.getBooleanAttribute('collection');
  }
  public set collection(value: boolean | cdktf.IResolvable) {
    this._collection = value;
  }
  public resetCollection() {
    this._collection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionInput() {
    return this._collection;
  }

  // es_url - computed: false, optional: true, required: false
  private _esUrl?: string; 
  public get esUrl() {
    return this.getStringAttribute('es_url');
  }
  public set esUrl(value: string) {
    this._esUrl = value;
  }
  public resetEsUrl() {
    this._esUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get esUrlInput() {
    return this._esUrl;
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

  // index_name - computed: false, optional: true, required: false
  private _indexName?: string; 
  public get indexName() {
    return this.getStringAttribute('index_name');
  }
  public set indexName(value: string) {
    this._indexName = value;
  }
  public resetIndexName() {
    this._indexName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexNameInput() {
    return this._indexName;
  }

  // metrics_profile - computed: false, optional: true, required: false
  private _metricsProfile?: string; 
  public get metricsProfile() {
    return this.getStringAttribute('metrics_profile');
  }
  public set metricsProfile(value: string) {
    this._metricsProfile = value;
  }
  public resetMetricsProfile() {
    this._metricsProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsProfileInput() {
    return this._metricsProfile;
  }

  // prom_token - computed: false, optional: true, required: false
  private _promToken?: string; 
  public get promToken() {
    return this.getStringAttribute('prom_token');
  }
  public set promToken(value: string) {
    this._promToken = value;
  }
  public resetPromToken() {
    this._promToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promTokenInput() {
    return this._promToken;
  }

  // prom_url - computed: false, optional: true, required: false
  private _promUrl?: string; 
  public get promUrl() {
    return this.getStringAttribute('prom_url');
  }
  public set promUrl(value: string) {
    this._promUrl = value;
  }
  public resetPromUrl() {
    this._promUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promUrlInput() {
    return this._promUrl;
  }

  // step - computed: false, optional: true, required: false
  private _step?: string; 
  public get step() {
    return this.getStringAttribute('step');
  }
  public set step(value: string) {
    this._step = value;
  }
  public resetStep() {
    this._step = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepInput() {
    return this._step;
  }
}
export interface DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecWorkloadArgs {
  /**
  * Set debug log level in the workload
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ripsaw_cloudbulldozer_io_benchmark_v1alpha1_manifest#debug DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1Manifest#debug}
  */
  readonly debug?: boolean | cdktf.IResolvable;
  /**
  * Timeout used for jobs deployed by this benchmark
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ripsaw_cloudbulldozer_io_benchmark_v1alpha1_manifest#job_timeout DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1Manifest#job_timeout}
  */
  readonly jobTimeout?: number;
}

export function dataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecWorkloadArgsToTerraform(struct?: DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecWorkloadArgs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    debug: cdktf.booleanToTerraform(struct!.debug),
    job_timeout: cdktf.numberToTerraform(struct!.jobTimeout),
  }
}


export function dataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecWorkloadArgsToHclTerraform(struct?: DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecWorkloadArgs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    debug: {
      value: cdktf.booleanToHclTerraform(struct!.debug),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    job_timeout: {
      value: cdktf.numberToHclTerraform(struct!.jobTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecWorkloadArgsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecWorkloadArgs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._debug !== undefined) {
      hasAnyValues = true;
      internalValueResult.debug = this._debug;
    }
    if (this._jobTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobTimeout = this._jobTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecWorkloadArgs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._debug = undefined;
      this._jobTimeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._debug = value.debug;
      this._jobTimeout = value.jobTimeout;
    }
  }

  // debug - computed: false, optional: true, required: false
  private _debug?: boolean | cdktf.IResolvable; 
  public get debug() {
    return this.getBooleanAttribute('debug');
  }
  public set debug(value: boolean | cdktf.IResolvable) {
    this._debug = value;
  }
  public resetDebug() {
    this._debug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugInput() {
    return this._debug;
  }

  // job_timeout - computed: false, optional: true, required: false
  private _jobTimeout?: number; 
  public get jobTimeout() {
    return this.getNumberAttribute('job_timeout');
  }
  public set jobTimeout(value: number) {
    this._jobTimeout = value;
  }
  public resetJobTimeout() {
    this._jobTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTimeoutInput() {
    return this._jobTimeout;
  }
}
export interface DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecWorkload {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ripsaw_cloudbulldozer_io_benchmark_v1alpha1_manifest#args DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1Manifest#args}
  */
  readonly args?: DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecWorkloadArgs;
  /**
  * Workload name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ripsaw_cloudbulldozer_io_benchmark_v1alpha1_manifest#name DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecWorkloadToTerraform(struct?: DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecWorkload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: dataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecWorkloadArgsToTerraform(struct!.args),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecWorkloadToHclTerraform(struct?: DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecWorkload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: dataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecWorkloadArgsToHclTerraform(struct!.args),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecWorkloadArgs",
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

export class DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecWorkloadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecWorkload | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecWorkload | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._args.internalValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._args.internalValue = value.args;
      this._name = value.name;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args = new DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecWorkloadArgsOutputReference(this, "args");
  public get args() {
    return this._args;
  }
  public putArgs(value: DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecWorkloadArgs) {
    this._args.internalValue = value;
  }
  public resetArgs() {
    this._args.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args.internalValue;
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
export interface DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ripsaw_cloudbulldozer_io_benchmark_v1alpha1_manifest#cleanup DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1Manifest#cleanup}
  */
  readonly cleanup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ripsaw_cloudbulldozer_io_benchmark_v1alpha1_manifest#clustername DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1Manifest#clustername}
  */
  readonly clustername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ripsaw_cloudbulldozer_io_benchmark_v1alpha1_manifest#drop_cache_kernel DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1Manifest#drop_cache_kernel}
  */
  readonly dropCacheKernel?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ripsaw_cloudbulldozer_io_benchmark_v1alpha1_manifest#drop_cache_rook_ceph DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1Manifest#drop_cache_rook_ceph}
  */
  readonly dropCacheRookCeph?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ripsaw_cloudbulldozer_io_benchmark_v1alpha1_manifest#elasticsearch DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1Manifest#elasticsearch}
  */
  readonly elasticsearch?: DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecElasticsearch;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ripsaw_cloudbulldozer_io_benchmark_v1alpha1_manifest#global_overrides DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1Manifest#global_overrides}
  */
  readonly globalOverrides?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ripsaw_cloudbulldozer_io_benchmark_v1alpha1_manifest#hostpath DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1Manifest#hostpath}
  */
  readonly hostpath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ripsaw_cloudbulldozer_io_benchmark_v1alpha1_manifest#job_params DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1Manifest#job_params}
  */
  readonly jobParams?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ripsaw_cloudbulldozer_io_benchmark_v1alpha1_manifest#metadata DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1Manifest#metadata}
  */
  readonly metadata?: DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ripsaw_cloudbulldozer_io_benchmark_v1alpha1_manifest#prometheus DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1Manifest#prometheus}
  */
  readonly prometheus?: DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecPrometheus;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ripsaw_cloudbulldozer_io_benchmark_v1alpha1_manifest#snappy DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1Manifest#snappy}
  */
  readonly snappy?: DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecSnappy;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ripsaw_cloudbulldozer_io_benchmark_v1alpha1_manifest#system_metrics DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1Manifest#system_metrics}
  */
  readonly systemMetrics?: DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecSystemMetrics;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ripsaw_cloudbulldozer_io_benchmark_v1alpha1_manifest#test_user DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1Manifest#test_user}
  */
  readonly testUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ripsaw_cloudbulldozer_io_benchmark_v1alpha1_manifest#uuid DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1Manifest#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ripsaw_cloudbulldozer_io_benchmark_v1alpha1_manifest#workload DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1Manifest#workload}
  */
  readonly workload?: DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecWorkload;
}

export function dataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecToTerraform(struct?: DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cleanup: cdktf.booleanToTerraform(struct!.cleanup),
    clustername: cdktf.stringToTerraform(struct!.clustername),
    drop_cache_kernel: cdktf.booleanToTerraform(struct!.dropCacheKernel),
    drop_cache_rook_ceph: cdktf.booleanToTerraform(struct!.dropCacheRookCeph),
    elasticsearch: dataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecElasticsearchToTerraform(struct!.elasticsearch),
    global_overrides: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.globalOverrides),
    hostpath: cdktf.stringToTerraform(struct!.hostpath),
    job_params: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(struct!.jobParams),
    metadata: dataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecMetadataToTerraform(struct!.metadata),
    prometheus: dataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecPrometheusToTerraform(struct!.prometheus),
    snappy: dataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecSnappyToTerraform(struct!.snappy),
    system_metrics: dataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecSystemMetricsToTerraform(struct!.systemMetrics),
    test_user: cdktf.stringToTerraform(struct!.testUser),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    workload: dataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecWorkloadToTerraform(struct!.workload),
  }
}


export function dataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cleanup: {
      value: cdktf.booleanToHclTerraform(struct!.cleanup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    clustername: {
      value: cdktf.stringToHclTerraform(struct!.clustername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drop_cache_kernel: {
      value: cdktf.booleanToHclTerraform(struct!.dropCacheKernel),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    drop_cache_rook_ceph: {
      value: cdktf.booleanToHclTerraform(struct!.dropCacheRookCeph),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    elasticsearch: {
      value: dataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecElasticsearchToHclTerraform(struct!.elasticsearch),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecElasticsearch",
    },
    global_overrides: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.globalOverrides),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    hostpath: {
      value: cdktf.stringToHclTerraform(struct!.hostpath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    job_params: {
      value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(struct!.jobParams),
      isBlock: false,
      type: "list",
      storageClassType: "stringMapList",
    },
    metadata: {
      value: dataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecMetadata",
    },
    prometheus: {
      value: dataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecPrometheusToHclTerraform(struct!.prometheus),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecPrometheus",
    },
    snappy: {
      value: dataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecSnappyToHclTerraform(struct!.snappy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecSnappy",
    },
    system_metrics: {
      value: dataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecSystemMetricsToHclTerraform(struct!.systemMetrics),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecSystemMetrics",
    },
    test_user: {
      value: cdktf.stringToHclTerraform(struct!.testUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workload: {
      value: dataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecWorkloadToHclTerraform(struct!.workload),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecWorkload",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cleanup !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleanup = this._cleanup;
    }
    if (this._clustername !== undefined) {
      hasAnyValues = true;
      internalValueResult.clustername = this._clustername;
    }
    if (this._dropCacheKernel !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropCacheKernel = this._dropCacheKernel;
    }
    if (this._dropCacheRookCeph !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropCacheRookCeph = this._dropCacheRookCeph;
    }
    if (this._elasticsearch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.elasticsearch = this._elasticsearch?.internalValue;
    }
    if (this._globalOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalOverrides = this._globalOverrides;
    }
    if (this._hostpath !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostpath = this._hostpath;
    }
    if (this._jobParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobParams = this._jobParams;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._prometheus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheus = this._prometheus?.internalValue;
    }
    if (this._snappy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snappy = this._snappy?.internalValue;
    }
    if (this._systemMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemMetrics = this._systemMetrics?.internalValue;
    }
    if (this._testUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.testUser = this._testUser;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._workload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workload = this._workload?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cleanup = undefined;
      this._clustername = undefined;
      this._dropCacheKernel = undefined;
      this._dropCacheRookCeph = undefined;
      this._elasticsearch.internalValue = undefined;
      this._globalOverrides = undefined;
      this._hostpath = undefined;
      this._jobParams = undefined;
      this._metadata.internalValue = undefined;
      this._prometheus.internalValue = undefined;
      this._snappy.internalValue = undefined;
      this._systemMetrics.internalValue = undefined;
      this._testUser = undefined;
      this._uuid = undefined;
      this._workload.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cleanup = value.cleanup;
      this._clustername = value.clustername;
      this._dropCacheKernel = value.dropCacheKernel;
      this._dropCacheRookCeph = value.dropCacheRookCeph;
      this._elasticsearch.internalValue = value.elasticsearch;
      this._globalOverrides = value.globalOverrides;
      this._hostpath = value.hostpath;
      this._jobParams = value.jobParams;
      this._metadata.internalValue = value.metadata;
      this._prometheus.internalValue = value.prometheus;
      this._snappy.internalValue = value.snappy;
      this._systemMetrics.internalValue = value.systemMetrics;
      this._testUser = value.testUser;
      this._uuid = value.uuid;
      this._workload.internalValue = value.workload;
    }
  }

  // cleanup - computed: false, optional: true, required: false
  private _cleanup?: boolean | cdktf.IResolvable; 
  public get cleanup() {
    return this.getBooleanAttribute('cleanup');
  }
  public set cleanup(value: boolean | cdktf.IResolvable) {
    this._cleanup = value;
  }
  public resetCleanup() {
    this._cleanup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanupInput() {
    return this._cleanup;
  }

  // clustername - computed: false, optional: true, required: false
  private _clustername?: string; 
  public get clustername() {
    return this.getStringAttribute('clustername');
  }
  public set clustername(value: string) {
    this._clustername = value;
  }
  public resetClustername() {
    this._clustername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusternameInput() {
    return this._clustername;
  }

  // drop_cache_kernel - computed: false, optional: true, required: false
  private _dropCacheKernel?: boolean | cdktf.IResolvable; 
  public get dropCacheKernel() {
    return this.getBooleanAttribute('drop_cache_kernel');
  }
  public set dropCacheKernel(value: boolean | cdktf.IResolvable) {
    this._dropCacheKernel = value;
  }
  public resetDropCacheKernel() {
    this._dropCacheKernel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropCacheKernelInput() {
    return this._dropCacheKernel;
  }

  // drop_cache_rook_ceph - computed: false, optional: true, required: false
  private _dropCacheRookCeph?: boolean | cdktf.IResolvable; 
  public get dropCacheRookCeph() {
    return this.getBooleanAttribute('drop_cache_rook_ceph');
  }
  public set dropCacheRookCeph(value: boolean | cdktf.IResolvable) {
    this._dropCacheRookCeph = value;
  }
  public resetDropCacheRookCeph() {
    this._dropCacheRookCeph = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropCacheRookCephInput() {
    return this._dropCacheRookCeph;
  }

  // elasticsearch - computed: false, optional: true, required: false
  private _elasticsearch = new DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecElasticsearchOutputReference(this, "elasticsearch");
  public get elasticsearch() {
    return this._elasticsearch;
  }
  public putElasticsearch(value: DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecElasticsearch) {
    this._elasticsearch.internalValue = value;
  }
  public resetElasticsearch() {
    this._elasticsearch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchInput() {
    return this._elasticsearch.internalValue;
  }

  // global_overrides - computed: false, optional: true, required: false
  private _globalOverrides?: string[]; 
  public get globalOverrides() {
    return this.getListAttribute('global_overrides');
  }
  public set globalOverrides(value: string[]) {
    this._globalOverrides = value;
  }
  public resetGlobalOverrides() {
    this._globalOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalOverridesInput() {
    return this._globalOverrides;
  }

  // hostpath - computed: false, optional: true, required: false
  private _hostpath?: string; 
  public get hostpath() {
    return this.getStringAttribute('hostpath');
  }
  public set hostpath(value: string) {
    this._hostpath = value;
  }
  public resetHostpath() {
    this._hostpath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostpathInput() {
    return this._hostpath;
  }

  // job_params - computed: false, optional: true, required: false
  private _jobParams?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get jobParams() {
    return this.interpolationForAttribute('job_params');
  }
  public set jobParams(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._jobParams = value;
  }
  public resetJobParams() {
    this._jobParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobParamsInput() {
    return this._jobParams;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // prometheus - computed: false, optional: true, required: false
  private _prometheus = new DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecPrometheusOutputReference(this, "prometheus");
  public get prometheus() {
    return this._prometheus;
  }
  public putPrometheus(value: DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecPrometheus) {
    this._prometheus.internalValue = value;
  }
  public resetPrometheus() {
    this._prometheus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusInput() {
    return this._prometheus.internalValue;
  }

  // snappy - computed: false, optional: true, required: false
  private _snappy = new DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecSnappyOutputReference(this, "snappy");
  public get snappy() {
    return this._snappy;
  }
  public putSnappy(value: DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecSnappy) {
    this._snappy.internalValue = value;
  }
  public resetSnappy() {
    this._snappy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snappyInput() {
    return this._snappy.internalValue;
  }

  // system_metrics - computed: false, optional: true, required: false
  private _systemMetrics = new DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecSystemMetricsOutputReference(this, "system_metrics");
  public get systemMetrics() {
    return this._systemMetrics;
  }
  public putSystemMetrics(value: DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecSystemMetrics) {
    this._systemMetrics.internalValue = value;
  }
  public resetSystemMetrics() {
    this._systemMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemMetricsInput() {
    return this._systemMetrics.internalValue;
  }

  // test_user - computed: false, optional: true, required: false
  private _testUser?: string; 
  public get testUser() {
    return this.getStringAttribute('test_user');
  }
  public set testUser(value: string) {
    this._testUser = value;
  }
  public resetTestUser() {
    this._testUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testUserInput() {
    return this._testUser;
  }

  // uuid - computed: false, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // workload - computed: false, optional: true, required: false
  private _workload = new DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecWorkloadOutputReference(this, "workload");
  public get workload() {
    return this._workload;
  }
  public putWorkload(value: DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecWorkload) {
    this._workload.internalValue = value;
  }
  public resetWorkload() {
    this._workload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadInput() {
    return this._workload.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ripsaw_cloudbulldozer_io_benchmark_v1alpha1_manifest k8s_ripsaw_cloudbulldozer_io_benchmark_v1alpha1_manifest}
*/
export class DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_ripsaw_cloudbulldozer_io_benchmark_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ripsaw_cloudbulldozer_io_benchmark_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_ripsaw_cloudbulldozer_io_benchmark_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/ripsaw_cloudbulldozer_io_benchmark_v1alpha1_manifest k8s_ripsaw_cloudbulldozer_io_benchmark_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_ripsaw_cloudbulldozer_io_benchmark_v1alpha1_manifest',
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
  private _metadata = new DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpec) {
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
      metadata: dataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SRipsawCloudbulldozerIoBenchmarkV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
