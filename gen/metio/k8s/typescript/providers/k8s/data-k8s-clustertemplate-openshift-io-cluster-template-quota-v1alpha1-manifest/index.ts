// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/clustertemplate_openshift_io_cluster_template_quota_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SClustertemplateOpenshiftIoClusterTemplateQuotaV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/clustertemplate_openshift_io_cluster_template_quota_v1alpha1_manifest#metadata DataK8SClustertemplateOpenshiftIoClusterTemplateQuotaV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SClustertemplateOpenshiftIoClusterTemplateQuotaV1Alpha1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/clustertemplate_openshift_io_cluster_template_quota_v1alpha1_manifest#spec DataK8SClustertemplateOpenshiftIoClusterTemplateQuotaV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SClustertemplateOpenshiftIoClusterTemplateQuotaV1Alpha1ManifestSpec;
}
export interface DataK8SClustertemplateOpenshiftIoClusterTemplateQuotaV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/clustertemplate_openshift_io_cluster_template_quota_v1alpha1_manifest#annotations DataK8SClustertemplateOpenshiftIoClusterTemplateQuotaV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/clustertemplate_openshift_io_cluster_template_quota_v1alpha1_manifest#labels DataK8SClustertemplateOpenshiftIoClusterTemplateQuotaV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/clustertemplate_openshift_io_cluster_template_quota_v1alpha1_manifest#name DataK8SClustertemplateOpenshiftIoClusterTemplateQuotaV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/clustertemplate_openshift_io_cluster_template_quota_v1alpha1_manifest#namespace DataK8SClustertemplateOpenshiftIoClusterTemplateQuotaV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SClustertemplateOpenshiftIoClusterTemplateQuotaV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SClustertemplateOpenshiftIoClusterTemplateQuotaV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SClustertemplateOpenshiftIoClusterTemplateQuotaV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SClustertemplateOpenshiftIoClusterTemplateQuotaV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SClustertemplateOpenshiftIoClusterTemplateQuotaV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClustertemplateOpenshiftIoClusterTemplateQuotaV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SClustertemplateOpenshiftIoClusterTemplateQuotaV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SClustertemplateOpenshiftIoClusterTemplateQuotaV1Alpha1ManifestSpecAllowedTemplates {
  /**
  * Defines how many instances of the ClusterTemplate can exist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/clustertemplate_openshift_io_cluster_template_quota_v1alpha1_manifest#count DataK8SClustertemplateOpenshiftIoClusterTemplateQuotaV1Alpha1Manifest#count}
  */
  readonly count?: number;
  /**
  * Template instance will be removed after specified time This is a Duration value; see https://pkg.go.dev/time#ParseDuration for accepted formats. Note: due to discrepancies in validation vs parsing, we use a Pattern instead of 'Format=duration'. See https://bugzilla.redhat.com/show_bug.cgi?id=2050332 https://github.com/kubernetes/apimachinery/issues/131 https://github.com/kubernetes/apiextensions-apiserver/issues/56
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/clustertemplate_openshift_io_cluster_template_quota_v1alpha1_manifest#delete_after DataK8SClustertemplateOpenshiftIoClusterTemplateQuotaV1Alpha1Manifest#delete_after}
  */
  readonly deleteAfter?: string;
  /**
  * Name of the ClusterTemplate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/clustertemplate_openshift_io_cluster_template_quota_v1alpha1_manifest#name DataK8SClustertemplateOpenshiftIoClusterTemplateQuotaV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SClustertemplateOpenshiftIoClusterTemplateQuotaV1Alpha1ManifestSpecAllowedTemplatesToTerraform(struct?: DataK8SClustertemplateOpenshiftIoClusterTemplateQuotaV1Alpha1ManifestSpecAllowedTemplates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    delete_after: cdktf.stringToTerraform(struct!.deleteAfter),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SClustertemplateOpenshiftIoClusterTemplateQuotaV1Alpha1ManifestSpecAllowedTemplatesToHclTerraform(struct?: DataK8SClustertemplateOpenshiftIoClusterTemplateQuotaV1Alpha1ManifestSpecAllowedTemplates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    delete_after: {
      value: cdktf.stringToHclTerraform(struct!.deleteAfter),
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

export class DataK8SClustertemplateOpenshiftIoClusterTemplateQuotaV1Alpha1ManifestSpecAllowedTemplatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SClustertemplateOpenshiftIoClusterTemplateQuotaV1Alpha1ManifestSpecAllowedTemplates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._deleteAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteAfter = this._deleteAfter;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClustertemplateOpenshiftIoClusterTemplateQuotaV1Alpha1ManifestSpecAllowedTemplates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._deleteAfter = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._deleteAfter = value.deleteAfter;
      this._name = value.name;
    }
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // delete_after - computed: false, optional: true, required: false
  private _deleteAfter?: string; 
  public get deleteAfter() {
    return this.getStringAttribute('delete_after');
  }
  public set deleteAfter(value: string) {
    this._deleteAfter = value;
  }
  public resetDeleteAfter() {
    this._deleteAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteAfterInput() {
    return this._deleteAfter;
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

export class DataK8SClustertemplateOpenshiftIoClusterTemplateQuotaV1Alpha1ManifestSpecAllowedTemplatesList extends cdktf.ComplexList {
  public internalValue? : DataK8SClustertemplateOpenshiftIoClusterTemplateQuotaV1Alpha1ManifestSpecAllowedTemplates[] | cdktf.IResolvable

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
  public get(index: number): DataK8SClustertemplateOpenshiftIoClusterTemplateQuotaV1Alpha1ManifestSpecAllowedTemplatesOutputReference {
    return new DataK8SClustertemplateOpenshiftIoClusterTemplateQuotaV1Alpha1ManifestSpecAllowedTemplatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SClustertemplateOpenshiftIoClusterTemplateQuotaV1Alpha1ManifestSpec {
  /**
  * Represents all ClusterTemplates which can be used in given namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/clustertemplate_openshift_io_cluster_template_quota_v1alpha1_manifest#allowed_templates DataK8SClustertemplateOpenshiftIoClusterTemplateQuotaV1Alpha1Manifest#allowed_templates}
  */
  readonly allowedTemplates: DataK8SClustertemplateOpenshiftIoClusterTemplateQuotaV1Alpha1ManifestSpecAllowedTemplates[] | cdktf.IResolvable;
  /**
  * Total budget for all clusters within given namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/clustertemplate_openshift_io_cluster_template_quota_v1alpha1_manifest#budget DataK8SClustertemplateOpenshiftIoClusterTemplateQuotaV1Alpha1Manifest#budget}
  */
  readonly budget?: number;
}

export function dataK8SClustertemplateOpenshiftIoClusterTemplateQuotaV1Alpha1ManifestSpecToTerraform(struct?: DataK8SClustertemplateOpenshiftIoClusterTemplateQuotaV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_templates: cdktf.listMapper(dataK8SClustertemplateOpenshiftIoClusterTemplateQuotaV1Alpha1ManifestSpecAllowedTemplatesToTerraform, false)(struct!.allowedTemplates),
    budget: cdktf.numberToTerraform(struct!.budget),
  }
}


export function dataK8SClustertemplateOpenshiftIoClusterTemplateQuotaV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SClustertemplateOpenshiftIoClusterTemplateQuotaV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_templates: {
      value: cdktf.listMapperHcl(dataK8SClustertemplateOpenshiftIoClusterTemplateQuotaV1Alpha1ManifestSpecAllowedTemplatesToHclTerraform, false)(struct!.allowedTemplates),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SClustertemplateOpenshiftIoClusterTemplateQuotaV1Alpha1ManifestSpecAllowedTemplatesList",
    },
    budget: {
      value: cdktf.numberToHclTerraform(struct!.budget),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClustertemplateOpenshiftIoClusterTemplateQuotaV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClustertemplateOpenshiftIoClusterTemplateQuotaV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedTemplates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedTemplates = this._allowedTemplates?.internalValue;
    }
    if (this._budget !== undefined) {
      hasAnyValues = true;
      internalValueResult.budget = this._budget;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClustertemplateOpenshiftIoClusterTemplateQuotaV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedTemplates.internalValue = undefined;
      this._budget = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedTemplates.internalValue = value.allowedTemplates;
      this._budget = value.budget;
    }
  }

  // allowed_templates - computed: false, optional: false, required: true
  private _allowedTemplates = new DataK8SClustertemplateOpenshiftIoClusterTemplateQuotaV1Alpha1ManifestSpecAllowedTemplatesList(this, "allowed_templates", false);
  public get allowedTemplates() {
    return this._allowedTemplates;
  }
  public putAllowedTemplates(value: DataK8SClustertemplateOpenshiftIoClusterTemplateQuotaV1Alpha1ManifestSpecAllowedTemplates[] | cdktf.IResolvable) {
    this._allowedTemplates.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedTemplatesInput() {
    return this._allowedTemplates.internalValue;
  }

  // budget - computed: false, optional: true, required: false
  private _budget?: number; 
  public get budget() {
    return this.getNumberAttribute('budget');
  }
  public set budget(value: number) {
    this._budget = value;
  }
  public resetBudget() {
    this._budget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get budgetInput() {
    return this._budget;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/clustertemplate_openshift_io_cluster_template_quota_v1alpha1_manifest k8s_clustertemplate_openshift_io_cluster_template_quota_v1alpha1_manifest}
*/
export class DataK8SClustertemplateOpenshiftIoClusterTemplateQuotaV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_clustertemplate_openshift_io_cluster_template_quota_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SClustertemplateOpenshiftIoClusterTemplateQuotaV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SClustertemplateOpenshiftIoClusterTemplateQuotaV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SClustertemplateOpenshiftIoClusterTemplateQuotaV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/clustertemplate_openshift_io_cluster_template_quota_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SClustertemplateOpenshiftIoClusterTemplateQuotaV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_clustertemplate_openshift_io_cluster_template_quota_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/clustertemplate_openshift_io_cluster_template_quota_v1alpha1_manifest k8s_clustertemplate_openshift_io_cluster_template_quota_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SClustertemplateOpenshiftIoClusterTemplateQuotaV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SClustertemplateOpenshiftIoClusterTemplateQuotaV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_clustertemplate_openshift_io_cluster_template_quota_v1alpha1_manifest',
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
  private _metadata = new DataK8SClustertemplateOpenshiftIoClusterTemplateQuotaV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SClustertemplateOpenshiftIoClusterTemplateQuotaV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SClustertemplateOpenshiftIoClusterTemplateQuotaV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SClustertemplateOpenshiftIoClusterTemplateQuotaV1Alpha1ManifestSpec) {
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
      metadata: dataK8SClustertemplateOpenshiftIoClusterTemplateQuotaV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SClustertemplateOpenshiftIoClusterTemplateQuotaV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SClustertemplateOpenshiftIoClusterTemplateQuotaV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SClustertemplateOpenshiftIoClusterTemplateQuotaV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SClustertemplateOpenshiftIoClusterTemplateQuotaV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SClustertemplateOpenshiftIoClusterTemplateQuotaV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
