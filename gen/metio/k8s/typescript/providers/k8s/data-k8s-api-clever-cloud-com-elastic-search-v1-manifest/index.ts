// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/api_clever_cloud_com_elastic_search_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SApiCleverCloudComElasticSearchV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/api_clever_cloud_com_elastic_search_v1_manifest#metadata DataK8SApiCleverCloudComElasticSearchV1Manifest#metadata}
  */
  readonly metadata: DataK8SApiCleverCloudComElasticSearchV1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/api_clever_cloud_com_elastic_search_v1_manifest#spec DataK8SApiCleverCloudComElasticSearchV1Manifest#spec}
  */
  readonly spec: DataK8SApiCleverCloudComElasticSearchV1ManifestSpec;
}
export interface DataK8SApiCleverCloudComElasticSearchV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/api_clever_cloud_com_elastic_search_v1_manifest#annotations DataK8SApiCleverCloudComElasticSearchV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/api_clever_cloud_com_elastic_search_v1_manifest#labels DataK8SApiCleverCloudComElasticSearchV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/api_clever_cloud_com_elastic_search_v1_manifest#name DataK8SApiCleverCloudComElasticSearchV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/api_clever_cloud_com_elastic_search_v1_manifest#namespace DataK8SApiCleverCloudComElasticSearchV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SApiCleverCloudComElasticSearchV1ManifestMetadataToTerraform(struct?: DataK8SApiCleverCloudComElasticSearchV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SApiCleverCloudComElasticSearchV1ManifestMetadataToHclTerraform(struct?: DataK8SApiCleverCloudComElasticSearchV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SApiCleverCloudComElasticSearchV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApiCleverCloudComElasticSearchV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SApiCleverCloudComElasticSearchV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SApiCleverCloudComElasticSearchV1ManifestSpecInstance {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/api_clever_cloud_com_elastic_search_v1_manifest#plan DataK8SApiCleverCloudComElasticSearchV1Manifest#plan}
  */
  readonly plan: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/api_clever_cloud_com_elastic_search_v1_manifest#region DataK8SApiCleverCloudComElasticSearchV1Manifest#region}
  */
  readonly region: string;
}

export function dataK8SApiCleverCloudComElasticSearchV1ManifestSpecInstanceToTerraform(struct?: DataK8SApiCleverCloudComElasticSearchV1ManifestSpecInstance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    plan: cdktf.stringToTerraform(struct!.plan),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function dataK8SApiCleverCloudComElasticSearchV1ManifestSpecInstanceToHclTerraform(struct?: DataK8SApiCleverCloudComElasticSearchV1ManifestSpecInstance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    plan: {
      value: cdktf.stringToHclTerraform(struct!.plan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApiCleverCloudComElasticSearchV1ManifestSpecInstanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApiCleverCloudComElasticSearchV1ManifestSpecInstance | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._plan !== undefined) {
      hasAnyValues = true;
      internalValueResult.plan = this._plan;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApiCleverCloudComElasticSearchV1ManifestSpecInstance | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._plan = undefined;
      this._region = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._plan = value.plan;
      this._region = value.region;
    }
  }

  // plan - computed: false, optional: false, required: true
  private _plan?: string; 
  public get plan() {
    return this.getStringAttribute('plan');
  }
  public set plan(value: string) {
    this._plan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface DataK8SApiCleverCloudComElasticSearchV1ManifestSpecOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/api_clever_cloud_com_elastic_search_v1_manifest#apm DataK8SApiCleverCloudComElasticSearchV1Manifest#apm}
  */
  readonly apm: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/api_clever_cloud_com_elastic_search_v1_manifest#encryption DataK8SApiCleverCloudComElasticSearchV1Manifest#encryption}
  */
  readonly encryption: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/api_clever_cloud_com_elastic_search_v1_manifest#kibana DataK8SApiCleverCloudComElasticSearchV1Manifest#kibana}
  */
  readonly kibana: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/api_clever_cloud_com_elastic_search_v1_manifest#version DataK8SApiCleverCloudComElasticSearchV1Manifest#version}
  */
  readonly version: number;
}

export function dataK8SApiCleverCloudComElasticSearchV1ManifestSpecOptionsToTerraform(struct?: DataK8SApiCleverCloudComElasticSearchV1ManifestSpecOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apm: cdktf.booleanToTerraform(struct!.apm),
    encryption: cdktf.booleanToTerraform(struct!.encryption),
    kibana: cdktf.booleanToTerraform(struct!.kibana),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function dataK8SApiCleverCloudComElasticSearchV1ManifestSpecOptionsToHclTerraform(struct?: DataK8SApiCleverCloudComElasticSearchV1ManifestSpecOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apm: {
      value: cdktf.booleanToHclTerraform(struct!.apm),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    encryption: {
      value: cdktf.booleanToHclTerraform(struct!.encryption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kibana: {
      value: cdktf.booleanToHclTerraform(struct!.kibana),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApiCleverCloudComElasticSearchV1ManifestSpecOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApiCleverCloudComElasticSearchV1ManifestSpecOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apm !== undefined) {
      hasAnyValues = true;
      internalValueResult.apm = this._apm;
    }
    if (this._encryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryption = this._encryption;
    }
    if (this._kibana !== undefined) {
      hasAnyValues = true;
      internalValueResult.kibana = this._kibana;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApiCleverCloudComElasticSearchV1ManifestSpecOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apm = undefined;
      this._encryption = undefined;
      this._kibana = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apm = value.apm;
      this._encryption = value.encryption;
      this._kibana = value.kibana;
      this._version = value.version;
    }
  }

  // apm - computed: false, optional: false, required: true
  private _apm?: boolean | cdktf.IResolvable; 
  public get apm() {
    return this.getBooleanAttribute('apm');
  }
  public set apm(value: boolean | cdktf.IResolvable) {
    this._apm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apmInput() {
    return this._apm;
  }

  // encryption - computed: false, optional: false, required: true
  private _encryption?: boolean | cdktf.IResolvable; 
  public get encryption() {
    return this.getBooleanAttribute('encryption');
  }
  public set encryption(value: boolean | cdktf.IResolvable) {
    this._encryption = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption;
  }

  // kibana - computed: false, optional: false, required: true
  private _kibana?: boolean | cdktf.IResolvable; 
  public get kibana() {
    return this.getBooleanAttribute('kibana');
  }
  public set kibana(value: boolean | cdktf.IResolvable) {
    this._kibana = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kibanaInput() {
    return this._kibana;
  }

  // version - computed: false, optional: false, required: true
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface DataK8SApiCleverCloudComElasticSearchV1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/api_clever_cloud_com_elastic_search_v1_manifest#instance DataK8SApiCleverCloudComElasticSearchV1Manifest#instance}
  */
  readonly instance: DataK8SApiCleverCloudComElasticSearchV1ManifestSpecInstance;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/api_clever_cloud_com_elastic_search_v1_manifest#options DataK8SApiCleverCloudComElasticSearchV1Manifest#options}
  */
  readonly options: DataK8SApiCleverCloudComElasticSearchV1ManifestSpecOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/api_clever_cloud_com_elastic_search_v1_manifest#organisation DataK8SApiCleverCloudComElasticSearchV1Manifest#organisation}
  */
  readonly organisation: string;
}

export function dataK8SApiCleverCloudComElasticSearchV1ManifestSpecToTerraform(struct?: DataK8SApiCleverCloudComElasticSearchV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance: dataK8SApiCleverCloudComElasticSearchV1ManifestSpecInstanceToTerraform(struct!.instance),
    options: dataK8SApiCleverCloudComElasticSearchV1ManifestSpecOptionsToTerraform(struct!.options),
    organisation: cdktf.stringToTerraform(struct!.organisation),
  }
}


export function dataK8SApiCleverCloudComElasticSearchV1ManifestSpecToHclTerraform(struct?: DataK8SApiCleverCloudComElasticSearchV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance: {
      value: dataK8SApiCleverCloudComElasticSearchV1ManifestSpecInstanceToHclTerraform(struct!.instance),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApiCleverCloudComElasticSearchV1ManifestSpecInstance",
    },
    options: {
      value: dataK8SApiCleverCloudComElasticSearchV1ManifestSpecOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApiCleverCloudComElasticSearchV1ManifestSpecOptions",
    },
    organisation: {
      value: cdktf.stringToHclTerraform(struct!.organisation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApiCleverCloudComElasticSearchV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApiCleverCloudComElasticSearchV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instance?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instance = this._instance?.internalValue;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    if (this._organisation !== undefined) {
      hasAnyValues = true;
      internalValueResult.organisation = this._organisation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApiCleverCloudComElasticSearchV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instance.internalValue = undefined;
      this._options.internalValue = undefined;
      this._organisation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instance.internalValue = value.instance;
      this._options.internalValue = value.options;
      this._organisation = value.organisation;
    }
  }

  // instance - computed: false, optional: false, required: true
  private _instance = new DataK8SApiCleverCloudComElasticSearchV1ManifestSpecInstanceOutputReference(this, "instance");
  public get instance() {
    return this._instance;
  }
  public putInstance(value: DataK8SApiCleverCloudComElasticSearchV1ManifestSpecInstance) {
    this._instance.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance.internalValue;
  }

  // options - computed: false, optional: false, required: true
  private _options = new DataK8SApiCleverCloudComElasticSearchV1ManifestSpecOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: DataK8SApiCleverCloudComElasticSearchV1ManifestSpecOptions) {
    this._options.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // organisation - computed: false, optional: false, required: true
  private _organisation?: string; 
  public get organisation() {
    return this.getStringAttribute('organisation');
  }
  public set organisation(value: string) {
    this._organisation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organisationInput() {
    return this._organisation;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/api_clever_cloud_com_elastic_search_v1_manifest k8s_api_clever_cloud_com_elastic_search_v1_manifest}
*/
export class DataK8SApiCleverCloudComElasticSearchV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_api_clever_cloud_com_elastic_search_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SApiCleverCloudComElasticSearchV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SApiCleverCloudComElasticSearchV1Manifest to import
  * @param importFromId The id of the existing DataK8SApiCleverCloudComElasticSearchV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/api_clever_cloud_com_elastic_search_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SApiCleverCloudComElasticSearchV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_api_clever_cloud_com_elastic_search_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/api_clever_cloud_com_elastic_search_v1_manifest k8s_api_clever_cloud_com_elastic_search_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SApiCleverCloudComElasticSearchV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SApiCleverCloudComElasticSearchV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_api_clever_cloud_com_elastic_search_v1_manifest',
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
  private _metadata = new DataK8SApiCleverCloudComElasticSearchV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SApiCleverCloudComElasticSearchV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SApiCleverCloudComElasticSearchV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SApiCleverCloudComElasticSearchV1ManifestSpec) {
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
      metadata: dataK8SApiCleverCloudComElasticSearchV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SApiCleverCloudComElasticSearchV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SApiCleverCloudComElasticSearchV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SApiCleverCloudComElasticSearchV1ManifestMetadata",
      },
      spec: {
        value: dataK8SApiCleverCloudComElasticSearchV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SApiCleverCloudComElasticSearchV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
