// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#metadata DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestMetadata;
  /**
  * GrafanaDashboardSpec defines the desired state of GrafanaDashboard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#spec DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpec;
}
export interface DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#annotations DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#labels DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#name DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#namespace DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestMetadataToTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecConfigMapRef {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#key DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#name DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#optional DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecConfigMapRefToTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecConfigMapRef | cdktf.IResolvable): any {
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


export function dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecConfigMapRefToHclTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecConfigMapRef | cdktf.IResolvable): any {
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

export class DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecConfigMapRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecConfigMapRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecConfigMapRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecDatasources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#datasource_name DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest#datasource_name}
  */
  readonly datasourceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#input_name DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest#input_name}
  */
  readonly inputName: string;
}

export function dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecDatasourcesToTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecDatasources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource_name: cdktf.stringToTerraform(struct!.datasourceName),
    input_name: cdktf.stringToTerraform(struct!.inputName),
  }
}


export function dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecDatasourcesToHclTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecDatasources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datasource_name: {
      value: cdktf.stringToHclTerraform(struct!.datasourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_name: {
      value: cdktf.stringToHclTerraform(struct!.inputName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecDatasourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecDatasources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasourceName = this._datasourceName;
    }
    if (this._inputName !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputName = this._inputName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecDatasources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasourceName = undefined;
      this._inputName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasourceName = value.datasourceName;
      this._inputName = value.inputName;
    }
  }

  // datasource_name - computed: false, optional: false, required: true
  private _datasourceName?: string; 
  public get datasourceName() {
    return this.getStringAttribute('datasource_name');
  }
  public set datasourceName(value: string) {
    this._datasourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceNameInput() {
    return this._datasourceName;
  }

  // input_name - computed: false, optional: false, required: true
  private _inputName?: string; 
  public get inputName() {
    return this.getStringAttribute('input_name');
  }
  public set inputName(value: string) {
    this._inputName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputNameInput() {
    return this._inputName;
  }
}

export class DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecDatasourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecDatasources[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecDatasourcesOutputReference {
    return new DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecDatasourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvFromConfigMapKeyRef {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#key DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#name DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#optional DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvFromConfigMapKeyRefToTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvFromConfigMapKeyRef | cdktf.IResolvable): any {
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


export function dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvFromConfigMapKeyRefToHclTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvFromConfigMapKeyRef | cdktf.IResolvable): any {
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

export class DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvFromConfigMapKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvFromConfigMapKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#key DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#name DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#optional DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvFromSecretKeyRefToTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvFromSecretKeyRef | cdktf.IResolvable): any {
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


export function dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvFromSecretKeyRefToHclTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvFromSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvFromSecretKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvFromSecretKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvFrom {
  /**
  * Selects a key of a ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#config_map_key_ref DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvFromConfigMapKeyRef;
  /**
  * Selects a key of a Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#secret_key_ref DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvFromSecretKeyRef;
}

export function dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvFromToTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    secret_key_ref: dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvFromToHclTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvFromConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvFromConfigMapKeyRef",
    },
    secret_key_ref: {
      value: dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvFromOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapKeyRef = this._configMapKeyRef?.internalValue;
    }
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = undefined;
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
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // config_map_key_ref - computed: false, optional: true, required: false
  private _configMapKeyRef = new DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvFromConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvFromConfigMapKeyRef) {
    this._configMapKeyRef.internalValue = value;
  }
  public resetConfigMapKeyRef() {
    this._configMapKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapKeyRefInput() {
    return this._configMapKeyRef.internalValue;
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvFromSecretKeyRef) {
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

export class DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvFromList extends cdktf.ComplexList {
  public internalValue? : DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvFrom[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvFromOutputReference {
    return new DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvFromOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvsValueFromConfigMapKeyRef {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#key DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#name DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#optional DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvsValueFromConfigMapKeyRefToTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvsValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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


export function dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvsValueFromConfigMapKeyRefToHclTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvsValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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

export class DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvsValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvsValueFromConfigMapKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvsValueFromConfigMapKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvsValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#key DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#name DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#optional DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvsValueFromSecretKeyRefToTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvsValueFromSecretKeyRef | cdktf.IResolvable): any {
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


export function dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvsValueFromSecretKeyRefToHclTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvsValueFromSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvsValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvsValueFromSecretKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvsValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvsValueFrom {
  /**
  * Selects a key of a ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#config_map_key_ref DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvsValueFromConfigMapKeyRef;
  /**
  * Selects a key of a Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#secret_key_ref DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvsValueFromSecretKeyRef;
}

export function dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvsValueFromToTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvsValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvsValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    secret_key_ref: dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvsValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvsValueFromToHclTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvsValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvsValueFromConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvsValueFromConfigMapKeyRef",
    },
    secret_key_ref: {
      value: dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvsValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvsValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvsValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvsValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapKeyRef = this._configMapKeyRef?.internalValue;
    }
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvsValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = undefined;
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
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // config_map_key_ref - computed: false, optional: true, required: false
  private _configMapKeyRef = new DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvsValueFromConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvsValueFromConfigMapKeyRef) {
    this._configMapKeyRef.internalValue = value;
  }
  public resetConfigMapKeyRef() {
    this._configMapKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapKeyRefInput() {
    return this._configMapKeyRef.internalValue;
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvsValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvsValueFromSecretKeyRef) {
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
export interface DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#name DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Inline evn value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#value DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest#value}
  */
  readonly value?: string;
  /**
  * Reference on value source, might be the reference on a secret or config map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#value_from DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvsValueFrom;
}

export function dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvsToTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvsValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvsToHclTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvs | cdktf.IResolvable): any {
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
      value: dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvsValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvsValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvs | cdktf.IResolvable | undefined) {
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
  private _valueFrom = new DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvsValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvsValueFrom) {
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

export class DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvsList extends cdktf.ComplexList {
  public internalValue? : DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvsOutputReference {
    return new DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecGrafanaCom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#id DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#revision DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest#revision}
  */
  readonly revision?: number;
}

export function dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecGrafanaComToTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecGrafanaCom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    revision: cdktf.numberToTerraform(struct!.revision),
  }
}


export function dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecGrafanaComToHclTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecGrafanaCom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    revision: {
      value: cdktf.numberToHclTerraform(struct!.revision),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecGrafanaComOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecGrafanaCom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._revision !== undefined) {
      hasAnyValues = true;
      internalValueResult.revision = this._revision;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecGrafanaCom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._revision = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._revision = value.revision;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // revision - computed: false, optional: true, required: false
  private _revision?: number; 
  public get revision() {
    return this.getNumberAttribute('revision');
  }
  public set revision(value: number) {
    this._revision = value;
  }
  public resetRevision() {
    this._revision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision;
  }
}
export interface DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecInstanceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#key DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#operator DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#values DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecInstanceSelectorMatchExpressionsToTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecInstanceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecInstanceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecInstanceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecInstanceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecInstanceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecInstanceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecInstanceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecInstanceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecInstanceSelectorMatchExpressionsOutputReference {
    return new DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecInstanceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecInstanceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#match_expressions DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecInstanceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#match_labels DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecInstanceSelectorToTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecInstanceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecInstanceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecInstanceSelectorToHclTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecInstanceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecInstanceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecInstanceSelectorMatchExpressionsList",
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

export class DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecInstanceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecInstanceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecInstanceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecInstanceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecInstanceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecJsonnetLib {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#file_name DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest#file_name}
  */
  readonly fileName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#gzip_jsonnet_project DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest#gzip_jsonnet_project}
  */
  readonly gzipJsonnetProject: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#j_path DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest#j_path}
  */
  readonly jPath?: string[];
}

export function dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecJsonnetLibToTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecJsonnetLib | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_name: cdktf.stringToTerraform(struct!.fileName),
    gzip_jsonnet_project: cdktf.stringToTerraform(struct!.gzipJsonnetProject),
    j_path: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.jPath),
  }
}


export function dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecJsonnetLibToHclTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecJsonnetLib | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_name: {
      value: cdktf.stringToHclTerraform(struct!.fileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gzip_jsonnet_project: {
      value: cdktf.stringToHclTerraform(struct!.gzipJsonnetProject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    j_path: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.jPath),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecJsonnetLibOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecJsonnetLib | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileName = this._fileName;
    }
    if (this._gzipJsonnetProject !== undefined) {
      hasAnyValues = true;
      internalValueResult.gzipJsonnetProject = this._gzipJsonnetProject;
    }
    if (this._jPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.jPath = this._jPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecJsonnetLib | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileName = undefined;
      this._gzipJsonnetProject = undefined;
      this._jPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileName = value.fileName;
      this._gzipJsonnetProject = value.gzipJsonnetProject;
      this._jPath = value.jPath;
    }
  }

  // file_name - computed: false, optional: false, required: true
  private _fileName?: string; 
  public get fileName() {
    return this.getStringAttribute('file_name');
  }
  public set fileName(value: string) {
    this._fileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileNameInput() {
    return this._fileName;
  }

  // gzip_jsonnet_project - computed: false, optional: false, required: true
  private _gzipJsonnetProject?: string; 
  public get gzipJsonnetProject() {
    return this.getStringAttribute('gzip_jsonnet_project');
  }
  public set gzipJsonnetProject(value: string) {
    this._gzipJsonnetProject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gzipJsonnetProjectInput() {
    return this._gzipJsonnetProject;
  }

  // j_path - computed: false, optional: true, required: false
  private _jPath?: string[]; 
  public get jPath() {
    return this.getListAttribute('j_path');
  }
  public set jPath(value: string[]) {
    this._jPath = value;
  }
  public resetJPath() {
    this._jPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jPathInput() {
    return this._jPath;
  }
}
export interface DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecPlugins {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#name DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#version DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest#version}
  */
  readonly version: string;
}

export function dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecPluginsToTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecPlugins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecPluginsToHclTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecPlugins | cdktf.IResolvable): any {
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
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecPluginsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecPlugins | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecPlugins | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._version = value.version;
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

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecPluginsList extends cdktf.ComplexList {
  public internalValue? : DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecPlugins[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecPluginsOutputReference {
    return new DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecPluginsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecUrlAuthorizationBasicAuthPassword {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#key DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#name DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#optional DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecUrlAuthorizationBasicAuthPasswordToTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecUrlAuthorizationBasicAuthPassword | cdktf.IResolvable): any {
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


export function dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecUrlAuthorizationBasicAuthPasswordToHclTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecUrlAuthorizationBasicAuthPassword | cdktf.IResolvable): any {
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

export class DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecUrlAuthorizationBasicAuthPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecUrlAuthorizationBasicAuthPassword | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecUrlAuthorizationBasicAuthPassword | cdktf.IResolvable | undefined) {
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
export interface DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecUrlAuthorizationBasicAuthUsername {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#key DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#name DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#optional DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecUrlAuthorizationBasicAuthUsernameToTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecUrlAuthorizationBasicAuthUsername | cdktf.IResolvable): any {
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


export function dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecUrlAuthorizationBasicAuthUsernameToHclTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecUrlAuthorizationBasicAuthUsername | cdktf.IResolvable): any {
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

export class DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecUrlAuthorizationBasicAuthUsernameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecUrlAuthorizationBasicAuthUsername | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecUrlAuthorizationBasicAuthUsername | cdktf.IResolvable | undefined) {
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
export interface DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecUrlAuthorizationBasicAuth {
  /**
  * SecretKeySelector selects a key of a Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#password DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest#password}
  */
  readonly password?: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecUrlAuthorizationBasicAuthPassword;
  /**
  * SecretKeySelector selects a key of a Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#username DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest#username}
  */
  readonly username?: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecUrlAuthorizationBasicAuthUsername;
}

export function dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecUrlAuthorizationBasicAuthToTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecUrlAuthorizationBasicAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecUrlAuthorizationBasicAuthPasswordToTerraform(struct!.password),
    username: dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecUrlAuthorizationBasicAuthUsernameToTerraform(struct!.username),
  }
}


export function dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecUrlAuthorizationBasicAuthToHclTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecUrlAuthorizationBasicAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecUrlAuthorizationBasicAuthPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecUrlAuthorizationBasicAuthPassword",
    },
    username: {
      value: dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecUrlAuthorizationBasicAuthUsernameToHclTerraform(struct!.username),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecUrlAuthorizationBasicAuthUsername",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecUrlAuthorizationBasicAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecUrlAuthorizationBasicAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    if (this._username?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecUrlAuthorizationBasicAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password.internalValue = undefined;
      this._username.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password.internalValue = value.password;
      this._username.internalValue = value.username;
    }
  }

  // password - computed: false, optional: true, required: false
  private _password = new DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecUrlAuthorizationBasicAuthPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecUrlAuthorizationBasicAuthPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }

  // username - computed: false, optional: true, required: false
  private _username = new DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecUrlAuthorizationBasicAuthUsernameOutputReference(this, "username");
  public get username() {
    return this._username;
  }
  public putUsername(value: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecUrlAuthorizationBasicAuthUsername) {
    this._username.internalValue = value;
  }
  public resetUsername() {
    this._username.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username.internalValue;
  }
}
export interface DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecUrlAuthorization {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#basic_auth DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest#basic_auth}
  */
  readonly basicAuth?: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecUrlAuthorizationBasicAuth;
}

export function dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecUrlAuthorizationToTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecUrlAuthorization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    basic_auth: dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecUrlAuthorizationBasicAuthToTerraform(struct!.basicAuth),
  }
}


export function dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecUrlAuthorizationToHclTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecUrlAuthorization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    basic_auth: {
      value: dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecUrlAuthorizationBasicAuthToHclTerraform(struct!.basicAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecUrlAuthorizationBasicAuth",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecUrlAuthorizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecUrlAuthorization | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basicAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuth = this._basicAuth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecUrlAuthorization | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._basicAuth.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._basicAuth.internalValue = value.basicAuth;
    }
  }

  // basic_auth - computed: false, optional: true, required: false
  private _basicAuth = new DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecUrlAuthorizationBasicAuthOutputReference(this, "basic_auth");
  public get basicAuth() {
    return this._basicAuth;
  }
  public putBasicAuth(value: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecUrlAuthorizationBasicAuth) {
    this._basicAuth.internalValue = value;
  }
  public resetBasicAuth() {
    this._basicAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthInput() {
    return this._basicAuth.internalValue;
  }
}
export interface DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpec {
  /**
  * allow to import this resources from an operator in a different namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#allow_cross_namespace_import DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest#allow_cross_namespace_import}
  */
  readonly allowCrossNamespaceImport?: boolean | cdktf.IResolvable;
  /**
  * dashboard from configmap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#config_map_ref DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest#config_map_ref}
  */
  readonly configMapRef?: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecConfigMapRef;
  /**
  * Cache duration for dashboards fetched from URLs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#content_cache_duration DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest#content_cache_duration}
  */
  readonly contentCacheDuration?: string;
  /**
  * maps required data sources to existing ones
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#datasources DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest#datasources}
  */
  readonly datasources?: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecDatasources[] | cdktf.IResolvable;
  /**
  * environments variables from secrets or config maps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#env_from DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest#env_from}
  */
  readonly envFrom?: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvFrom[] | cdktf.IResolvable;
  /**
  * environments variables as a map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#envs DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest#envs}
  */
  readonly envs?: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvs[] | cdktf.IResolvable;
  /**
  * folder assignment for dashboard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#folder DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest#folder}
  */
  readonly folder?: string;
  /**
  * Name of a 'GrafanaFolder' resource in the same namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#folder_ref DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest#folder_ref}
  */
  readonly folderRef?: string;
  /**
  * UID of the target folder for this dashboard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#folder_uid DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest#folder_uid}
  */
  readonly folderUid?: string;
  /**
  * grafana.com/dashboards
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#grafana_com DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest#grafana_com}
  */
  readonly grafanaCom?: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecGrafanaCom;
  /**
  * GzipJson the dashboard's JSON compressed with Gzip. Base64-encoded when in YAML.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#gzip_json DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest#gzip_json}
  */
  readonly gzipJson?: string;
  /**
  * selects Grafanas for import
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#instance_selector DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest#instance_selector}
  */
  readonly instanceSelector: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecInstanceSelector;
  /**
  * dashboard json
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#json DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest#json}
  */
  readonly json?: string;
  /**
  * Jsonnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#jsonnet DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest#jsonnet}
  */
  readonly jsonnet?: string;
  /**
  * Jsonnet project build
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#jsonnet_lib DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest#jsonnet_lib}
  */
  readonly jsonnetLib?: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecJsonnetLib;
  /**
  * plugins
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#plugins DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest#plugins}
  */
  readonly plugins?: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecPlugins[] | cdktf.IResolvable;
  /**
  * how often the dashboard is refreshed, defaults to 5m if not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#resync_period DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest#resync_period}
  */
  readonly resyncPeriod?: string;
  /**
  * dashboard url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#url DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest#url}
  */
  readonly url?: string;
  /**
  * authorization options for dashboard from url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#url_authorization DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest#url_authorization}
  */
  readonly urlAuthorization?: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecUrlAuthorization;
}

export function dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecToTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_cross_namespace_import: cdktf.booleanToTerraform(struct!.allowCrossNamespaceImport),
    config_map_ref: dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecConfigMapRefToTerraform(struct!.configMapRef),
    content_cache_duration: cdktf.stringToTerraform(struct!.contentCacheDuration),
    datasources: cdktf.listMapper(dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecDatasourcesToTerraform, false)(struct!.datasources),
    env_from: cdktf.listMapper(dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvFromToTerraform, false)(struct!.envFrom),
    envs: cdktf.listMapper(dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvsToTerraform, false)(struct!.envs),
    folder: cdktf.stringToTerraform(struct!.folder),
    folder_ref: cdktf.stringToTerraform(struct!.folderRef),
    folder_uid: cdktf.stringToTerraform(struct!.folderUid),
    grafana_com: dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecGrafanaComToTerraform(struct!.grafanaCom),
    gzip_json: cdktf.stringToTerraform(struct!.gzipJson),
    instance_selector: dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecInstanceSelectorToTerraform(struct!.instanceSelector),
    json: cdktf.stringToTerraform(struct!.json),
    jsonnet: cdktf.stringToTerraform(struct!.jsonnet),
    jsonnet_lib: dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecJsonnetLibToTerraform(struct!.jsonnetLib),
    plugins: cdktf.listMapper(dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecPluginsToTerraform, false)(struct!.plugins),
    resync_period: cdktf.stringToTerraform(struct!.resyncPeriod),
    url: cdktf.stringToTerraform(struct!.url),
    url_authorization: dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecUrlAuthorizationToTerraform(struct!.urlAuthorization),
  }
}


export function dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_cross_namespace_import: {
      value: cdktf.booleanToHclTerraform(struct!.allowCrossNamespaceImport),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    config_map_ref: {
      value: dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecConfigMapRefToHclTerraform(struct!.configMapRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecConfigMapRef",
    },
    content_cache_duration: {
      value: cdktf.stringToHclTerraform(struct!.contentCacheDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datasources: {
      value: cdktf.listMapperHcl(dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecDatasourcesToHclTerraform, false)(struct!.datasources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecDatasourcesList",
    },
    env_from: {
      value: cdktf.listMapperHcl(dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvFromToHclTerraform, false)(struct!.envFrom),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvFromList",
    },
    envs: {
      value: cdktf.listMapperHcl(dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvsToHclTerraform, false)(struct!.envs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvsList",
    },
    folder: {
      value: cdktf.stringToHclTerraform(struct!.folder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    folder_ref: {
      value: cdktf.stringToHclTerraform(struct!.folderRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    folder_uid: {
      value: cdktf.stringToHclTerraform(struct!.folderUid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grafana_com: {
      value: dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecGrafanaComToHclTerraform(struct!.grafanaCom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecGrafanaCom",
    },
    gzip_json: {
      value: cdktf.stringToHclTerraform(struct!.gzipJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_selector: {
      value: dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecInstanceSelectorToHclTerraform(struct!.instanceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecInstanceSelector",
    },
    json: {
      value: cdktf.stringToHclTerraform(struct!.json),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jsonnet: {
      value: cdktf.stringToHclTerraform(struct!.jsonnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jsonnet_lib: {
      value: dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecJsonnetLibToHclTerraform(struct!.jsonnetLib),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecJsonnetLib",
    },
    plugins: {
      value: cdktf.listMapperHcl(dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecPluginsToHclTerraform, false)(struct!.plugins),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecPluginsList",
    },
    resync_period: {
      value: cdktf.stringToHclTerraform(struct!.resyncPeriod),
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
    url_authorization: {
      value: dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecUrlAuthorizationToHclTerraform(struct!.urlAuthorization),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecUrlAuthorization",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowCrossNamespaceImport !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowCrossNamespaceImport = this._allowCrossNamespaceImport;
    }
    if (this._configMapRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapRef = this._configMapRef?.internalValue;
    }
    if (this._contentCacheDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentCacheDuration = this._contentCacheDuration;
    }
    if (this._datasources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasources = this._datasources?.internalValue;
    }
    if (this._envFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.envFrom = this._envFrom?.internalValue;
    }
    if (this._envs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.envs = this._envs?.internalValue;
    }
    if (this._folder !== undefined) {
      hasAnyValues = true;
      internalValueResult.folder = this._folder;
    }
    if (this._folderRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.folderRef = this._folderRef;
    }
    if (this._folderUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.folderUid = this._folderUid;
    }
    if (this._grafanaCom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grafanaCom = this._grafanaCom?.internalValue;
    }
    if (this._gzipJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.gzipJson = this._gzipJson;
    }
    if (this._instanceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceSelector = this._instanceSelector?.internalValue;
    }
    if (this._json !== undefined) {
      hasAnyValues = true;
      internalValueResult.json = this._json;
    }
    if (this._jsonnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonnet = this._jsonnet;
    }
    if (this._jsonnetLib?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonnetLib = this._jsonnetLib?.internalValue;
    }
    if (this._plugins?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.plugins = this._plugins?.internalValue;
    }
    if (this._resyncPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.resyncPeriod = this._resyncPeriod;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._urlAuthorization?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlAuthorization = this._urlAuthorization?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowCrossNamespaceImport = undefined;
      this._configMapRef.internalValue = undefined;
      this._contentCacheDuration = undefined;
      this._datasources.internalValue = undefined;
      this._envFrom.internalValue = undefined;
      this._envs.internalValue = undefined;
      this._folder = undefined;
      this._folderRef = undefined;
      this._folderUid = undefined;
      this._grafanaCom.internalValue = undefined;
      this._gzipJson = undefined;
      this._instanceSelector.internalValue = undefined;
      this._json = undefined;
      this._jsonnet = undefined;
      this._jsonnetLib.internalValue = undefined;
      this._plugins.internalValue = undefined;
      this._resyncPeriod = undefined;
      this._url = undefined;
      this._urlAuthorization.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowCrossNamespaceImport = value.allowCrossNamespaceImport;
      this._configMapRef.internalValue = value.configMapRef;
      this._contentCacheDuration = value.contentCacheDuration;
      this._datasources.internalValue = value.datasources;
      this._envFrom.internalValue = value.envFrom;
      this._envs.internalValue = value.envs;
      this._folder = value.folder;
      this._folderRef = value.folderRef;
      this._folderUid = value.folderUid;
      this._grafanaCom.internalValue = value.grafanaCom;
      this._gzipJson = value.gzipJson;
      this._instanceSelector.internalValue = value.instanceSelector;
      this._json = value.json;
      this._jsonnet = value.jsonnet;
      this._jsonnetLib.internalValue = value.jsonnetLib;
      this._plugins.internalValue = value.plugins;
      this._resyncPeriod = value.resyncPeriod;
      this._url = value.url;
      this._urlAuthorization.internalValue = value.urlAuthorization;
    }
  }

  // allow_cross_namespace_import - computed: false, optional: true, required: false
  private _allowCrossNamespaceImport?: boolean | cdktf.IResolvable; 
  public get allowCrossNamespaceImport() {
    return this.getBooleanAttribute('allow_cross_namespace_import');
  }
  public set allowCrossNamespaceImport(value: boolean | cdktf.IResolvable) {
    this._allowCrossNamespaceImport = value;
  }
  public resetAllowCrossNamespaceImport() {
    this._allowCrossNamespaceImport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCrossNamespaceImportInput() {
    return this._allowCrossNamespaceImport;
  }

  // config_map_ref - computed: false, optional: true, required: false
  private _configMapRef = new DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecConfigMapRefOutputReference(this, "config_map_ref");
  public get configMapRef() {
    return this._configMapRef;
  }
  public putConfigMapRef(value: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecConfigMapRef) {
    this._configMapRef.internalValue = value;
  }
  public resetConfigMapRef() {
    this._configMapRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapRefInput() {
    return this._configMapRef.internalValue;
  }

  // content_cache_duration - computed: false, optional: true, required: false
  private _contentCacheDuration?: string; 
  public get contentCacheDuration() {
    return this.getStringAttribute('content_cache_duration');
  }
  public set contentCacheDuration(value: string) {
    this._contentCacheDuration = value;
  }
  public resetContentCacheDuration() {
    this._contentCacheDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentCacheDurationInput() {
    return this._contentCacheDuration;
  }

  // datasources - computed: false, optional: true, required: false
  private _datasources = new DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecDatasourcesList(this, "datasources", false);
  public get datasources() {
    return this._datasources;
  }
  public putDatasources(value: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecDatasources[] | cdktf.IResolvable) {
    this._datasources.internalValue = value;
  }
  public resetDatasources() {
    this._datasources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourcesInput() {
    return this._datasources.internalValue;
  }

  // env_from - computed: false, optional: true, required: false
  private _envFrom = new DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvFromList(this, "env_from", false);
  public get envFrom() {
    return this._envFrom;
  }
  public putEnvFrom(value: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvFrom[] | cdktf.IResolvable) {
    this._envFrom.internalValue = value;
  }
  public resetEnvFrom() {
    this._envFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envFromInput() {
    return this._envFrom.internalValue;
  }

  // envs - computed: false, optional: true, required: false
  private _envs = new DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvsList(this, "envs", false);
  public get envs() {
    return this._envs;
  }
  public putEnvs(value: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecEnvs[] | cdktf.IResolvable) {
    this._envs.internalValue = value;
  }
  public resetEnvs() {
    this._envs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envsInput() {
    return this._envs.internalValue;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // folder_ref - computed: false, optional: true, required: false
  private _folderRef?: string; 
  public get folderRef() {
    return this.getStringAttribute('folder_ref');
  }
  public set folderRef(value: string) {
    this._folderRef = value;
  }
  public resetFolderRef() {
    this._folderRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderRefInput() {
    return this._folderRef;
  }

  // folder_uid - computed: false, optional: true, required: false
  private _folderUid?: string; 
  public get folderUid() {
    return this.getStringAttribute('folder_uid');
  }
  public set folderUid(value: string) {
    this._folderUid = value;
  }
  public resetFolderUid() {
    this._folderUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderUidInput() {
    return this._folderUid;
  }

  // grafana_com - computed: false, optional: true, required: false
  private _grafanaCom = new DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecGrafanaComOutputReference(this, "grafana_com");
  public get grafanaCom() {
    return this._grafanaCom;
  }
  public putGrafanaCom(value: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecGrafanaCom) {
    this._grafanaCom.internalValue = value;
  }
  public resetGrafanaCom() {
    this._grafanaCom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grafanaComInput() {
    return this._grafanaCom.internalValue;
  }

  // gzip_json - computed: false, optional: true, required: false
  private _gzipJson?: string; 
  public get gzipJson() {
    return this.getStringAttribute('gzip_json');
  }
  public set gzipJson(value: string) {
    this._gzipJson = value;
  }
  public resetGzipJson() {
    this._gzipJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gzipJsonInput() {
    return this._gzipJson;
  }

  // instance_selector - computed: false, optional: false, required: true
  private _instanceSelector = new DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecInstanceSelectorOutputReference(this, "instance_selector");
  public get instanceSelector() {
    return this._instanceSelector;
  }
  public putInstanceSelector(value: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecInstanceSelector) {
    this._instanceSelector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceSelectorInput() {
    return this._instanceSelector.internalValue;
  }

  // json - computed: false, optional: true, required: false
  private _json?: string; 
  public get json() {
    return this.getStringAttribute('json');
  }
  public set json(value: string) {
    this._json = value;
  }
  public resetJson() {
    this._json = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonInput() {
    return this._json;
  }

  // jsonnet - computed: false, optional: true, required: false
  private _jsonnet?: string; 
  public get jsonnet() {
    return this.getStringAttribute('jsonnet');
  }
  public set jsonnet(value: string) {
    this._jsonnet = value;
  }
  public resetJsonnet() {
    this._jsonnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonnetInput() {
    return this._jsonnet;
  }

  // jsonnet_lib - computed: false, optional: true, required: false
  private _jsonnetLib = new DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecJsonnetLibOutputReference(this, "jsonnet_lib");
  public get jsonnetLib() {
    return this._jsonnetLib;
  }
  public putJsonnetLib(value: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecJsonnetLib) {
    this._jsonnetLib.internalValue = value;
  }
  public resetJsonnetLib() {
    this._jsonnetLib.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonnetLibInput() {
    return this._jsonnetLib.internalValue;
  }

  // plugins - computed: false, optional: true, required: false
  private _plugins = new DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecPluginsList(this, "plugins", false);
  public get plugins() {
    return this._plugins;
  }
  public putPlugins(value: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecPlugins[] | cdktf.IResolvable) {
    this._plugins.internalValue = value;
  }
  public resetPlugins() {
    this._plugins.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginsInput() {
    return this._plugins.internalValue;
  }

  // resync_period - computed: false, optional: true, required: false
  private _resyncPeriod?: string; 
  public get resyncPeriod() {
    return this.getStringAttribute('resync_period');
  }
  public set resyncPeriod(value: string) {
    this._resyncPeriod = value;
  }
  public resetResyncPeriod() {
    this._resyncPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resyncPeriodInput() {
    return this._resyncPeriod;
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

  // url_authorization - computed: false, optional: true, required: false
  private _urlAuthorization = new DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecUrlAuthorizationOutputReference(this, "url_authorization");
  public get urlAuthorization() {
    return this._urlAuthorization;
  }
  public putUrlAuthorization(value: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecUrlAuthorization) {
    this._urlAuthorization.internalValue = value;
  }
  public resetUrlAuthorization() {
    this._urlAuthorization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlAuthorizationInput() {
    return this._urlAuthorization.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest k8s_grafana_integreatly_org_grafana_dashboard_v1beta1_manifest}
*/
export class DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_grafana_integreatly_org_grafana_dashboard_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_grafana_integreatly_org_grafana_dashboard_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/grafana_integreatly_org_grafana_dashboard_v1beta1_manifest k8s_grafana_integreatly_org_grafana_dashboard_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_grafana_integreatly_org_grafana_dashboard_v1beta1_manifest',
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
  private _metadata = new DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpec) {
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
      metadata: dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SGrafanaIntegreatlyOrgGrafanaDashboardV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
