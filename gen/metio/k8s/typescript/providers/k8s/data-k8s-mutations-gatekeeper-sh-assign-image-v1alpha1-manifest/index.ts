// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/mutations_gatekeeper_sh_assign_image_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/mutations_gatekeeper_sh_assign_image_v1alpha1_manifest#metadata DataK8SMutationsGatekeeperShAssignImageV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestMetadata;
  /**
  * AssignImageSpec defines the desired state of AssignImage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/mutations_gatekeeper_sh_assign_image_v1alpha1_manifest#spec DataK8SMutationsGatekeeperShAssignImageV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpec;
}
export interface DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/mutations_gatekeeper_sh_assign_image_v1alpha1_manifest#annotations DataK8SMutationsGatekeeperShAssignImageV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/mutations_gatekeeper_sh_assign_image_v1alpha1_manifest#labels DataK8SMutationsGatekeeperShAssignImageV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/mutations_gatekeeper_sh_assign_image_v1alpha1_manifest#name DataK8SMutationsGatekeeperShAssignImageV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecApplyTo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/mutations_gatekeeper_sh_assign_image_v1alpha1_manifest#groups DataK8SMutationsGatekeeperShAssignImageV1Alpha1Manifest#groups}
  */
  readonly groups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/mutations_gatekeeper_sh_assign_image_v1alpha1_manifest#kinds DataK8SMutationsGatekeeperShAssignImageV1Alpha1Manifest#kinds}
  */
  readonly kinds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/mutations_gatekeeper_sh_assign_image_v1alpha1_manifest#versions DataK8SMutationsGatekeeperShAssignImageV1Alpha1Manifest#versions}
  */
  readonly versions?: string[];
}

export function dataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecApplyToToTerraform(struct?: DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecApplyTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groups),
    kinds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.kinds),
    versions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.versions),
  }
}


export function dataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecApplyToToHclTerraform(struct?: DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecApplyTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    kinds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.kinds),
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

export class DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecApplyToOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecApplyTo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groups !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups;
    }
    if (this._kinds !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinds = this._kinds;
    }
    if (this._versions !== undefined) {
      hasAnyValues = true;
      internalValueResult.versions = this._versions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecApplyTo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groups = undefined;
      this._kinds = undefined;
      this._versions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groups = value.groups;
      this._kinds = value.kinds;
      this._versions = value.versions;
    }
  }

  // groups - computed: false, optional: true, required: false
  private _groups?: string[]; 
  public get groups() {
    return this.getListAttribute('groups');
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }

  // kinds - computed: false, optional: true, required: false
  private _kinds?: string[]; 
  public get kinds() {
    return this.getListAttribute('kinds');
  }
  public set kinds(value: string[]) {
    this._kinds = value;
  }
  public resetKinds() {
    this._kinds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindsInput() {
    return this._kinds;
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

export class DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecApplyToList extends cdktf.ComplexList {
  public internalValue? : DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecApplyTo[] | cdktf.IResolvable

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
  public get(index: number): DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecApplyToOutputReference {
    return new DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecApplyToOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchKinds {
  /**
  * APIGroups is the API groups the resources belong to. '*' is all groups. If '*' is present, the length of the slice must be one. Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/mutations_gatekeeper_sh_assign_image_v1alpha1_manifest#api_groups DataK8SMutationsGatekeeperShAssignImageV1Alpha1Manifest#api_groups}
  */
  readonly apiGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/mutations_gatekeeper_sh_assign_image_v1alpha1_manifest#kinds DataK8SMutationsGatekeeperShAssignImageV1Alpha1Manifest#kinds}
  */
  readonly kinds?: string[];
}

export function dataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchKindsToTerraform(struct?: DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchKinds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.apiGroups),
    kinds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.kinds),
  }
}


export function dataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchKindsToHclTerraform(struct?: DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchKinds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.apiGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    kinds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.kinds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchKindsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchKinds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroups = this._apiGroups;
    }
    if (this._kinds !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinds = this._kinds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchKinds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiGroups = undefined;
      this._kinds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiGroups = value.apiGroups;
      this._kinds = value.kinds;
    }
  }

  // api_groups - computed: false, optional: true, required: false
  private _apiGroups?: string[]; 
  public get apiGroups() {
    return this.getListAttribute('api_groups');
  }
  public set apiGroups(value: string[]) {
    this._apiGroups = value;
  }
  public resetApiGroups() {
    this._apiGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupsInput() {
    return this._apiGroups;
  }

  // kinds - computed: false, optional: true, required: false
  private _kinds?: string[]; 
  public get kinds() {
    return this.getListAttribute('kinds');
  }
  public set kinds(value: string[]) {
    this._kinds = value;
  }
  public resetKinds() {
    this._kinds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindsInput() {
    return this._kinds;
  }
}

export class DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchKindsList extends cdktf.ComplexList {
  public internalValue? : DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchKinds[] | cdktf.IResolvable

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
  public get(index: number): DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchKindsOutputReference {
    return new DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchKindsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/mutations_gatekeeper_sh_assign_image_v1alpha1_manifest#key DataK8SMutationsGatekeeperShAssignImageV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/mutations_gatekeeper_sh_assign_image_v1alpha1_manifest#operator DataK8SMutationsGatekeeperShAssignImageV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/mutations_gatekeeper_sh_assign_image_v1alpha1_manifest#values DataK8SMutationsGatekeeperShAssignImageV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/mutations_gatekeeper_sh_assign_image_v1alpha1_manifest#match_expressions DataK8SMutationsGatekeeperShAssignImageV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/mutations_gatekeeper_sh_assign_image_v1alpha1_manifest#match_labels DataK8SMutationsGatekeeperShAssignImageV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchLabelSelectorToTerraform(struct?: DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchLabelSelectorToHclTerraform(struct?: DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchLabelSelectorMatchExpressionsList",
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

export class DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/mutations_gatekeeper_sh_assign_image_v1alpha1_manifest#key DataK8SMutationsGatekeeperShAssignImageV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/mutations_gatekeeper_sh_assign_image_v1alpha1_manifest#operator DataK8SMutationsGatekeeperShAssignImageV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/mutations_gatekeeper_sh_assign_image_v1alpha1_manifest#values DataK8SMutationsGatekeeperShAssignImageV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/mutations_gatekeeper_sh_assign_image_v1alpha1_manifest#match_expressions DataK8SMutationsGatekeeperShAssignImageV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/mutations_gatekeeper_sh_assign_image_v1alpha1_manifest#match_labels DataK8SMutationsGatekeeperShAssignImageV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchNamespaceSelectorToTerraform(struct?: DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchNamespaceSelectorToHclTerraform(struct?: DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchNamespaceSelectorMatchExpressionsList",
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

export class DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchNamespaceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchNamespaceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatch {
  /**
  * ExcludedNamespaces is a list of namespace names. If defined, a constraint only applies to resources not in a listed namespace. ExcludedNamespaces also supports a prefix or suffix based glob. For example, 'excludedNamespaces: [kube-*]' matches both 'kube-system' and 'kube-public', and 'excludedNamespaces: [*-system]' matches both 'kube-system' and 'gatekeeper-system'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/mutations_gatekeeper_sh_assign_image_v1alpha1_manifest#excluded_namespaces DataK8SMutationsGatekeeperShAssignImageV1Alpha1Manifest#excluded_namespaces}
  */
  readonly excludedNamespaces?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/mutations_gatekeeper_sh_assign_image_v1alpha1_manifest#kinds DataK8SMutationsGatekeeperShAssignImageV1Alpha1Manifest#kinds}
  */
  readonly kinds?: DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchKinds[] | cdktf.IResolvable;
  /**
  * LabelSelector is the combination of two optional fields: 'matchLabels' and 'matchExpressions'. These two fields provide different methods of selecting or excluding k8s objects based on the label keys and values included in object metadata. All selection expressions from both sections are ANDed to determine if an object meets the cumulative requirements of the selector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/mutations_gatekeeper_sh_assign_image_v1alpha1_manifest#label_selector DataK8SMutationsGatekeeperShAssignImageV1Alpha1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchLabelSelector;
  /**
  * Name is the name of an object. If defined, it will match against objects with the specified name. Name also supports a prefix or suffix glob. For example, 'name: pod-*' would match both 'pod-a' and 'pod-b', and 'name: *-pod' would match both 'a-pod' and 'b-pod'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/mutations_gatekeeper_sh_assign_image_v1alpha1_manifest#name DataK8SMutationsGatekeeperShAssignImageV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * NamespaceSelector is a label selector against an object's containing namespace or the object itself, if the object is a namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/mutations_gatekeeper_sh_assign_image_v1alpha1_manifest#namespace_selector DataK8SMutationsGatekeeperShAssignImageV1Alpha1Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchNamespaceSelector;
  /**
  * Namespaces is a list of namespace names. If defined, a constraint only applies to resources in a listed namespace. Namespaces also supports a prefix or suffix based glob. For example, 'namespaces: [kube-*]' matches both 'kube-system' and 'kube-public', and 'namespaces: [*-system]' matches both 'kube-system' and 'gatekeeper-system'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/mutations_gatekeeper_sh_assign_image_v1alpha1_manifest#namespaces DataK8SMutationsGatekeeperShAssignImageV1Alpha1Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Scope determines if cluster-scoped and/or namespaced-scoped resources are matched. Accepts '*', 'Cluster', or 'Namespaced'. (defaults to '*')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/mutations_gatekeeper_sh_assign_image_v1alpha1_manifest#scope DataK8SMutationsGatekeeperShAssignImageV1Alpha1Manifest#scope}
  */
  readonly scope?: string;
  /**
  * Source determines whether generated or original resources are matched. Accepts 'Generated'|'Original'|'All' (defaults to 'All'). A value of 'Generated' will only match generated resources, while 'Original' will only match regular resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/mutations_gatekeeper_sh_assign_image_v1alpha1_manifest#source DataK8SMutationsGatekeeperShAssignImageV1Alpha1Manifest#source}
  */
  readonly source?: string;
}

export function dataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchToTerraform(struct?: DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedNamespaces),
    kinds: cdktf.listMapper(dataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchKindsToTerraform, false)(struct!.kinds),
    label_selector: dataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchLabelSelectorToTerraform(struct!.labelSelector),
    name: cdktf.stringToTerraform(struct!.name),
    namespace_selector: dataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchNamespaceSelectorToTerraform(struct!.namespaceSelector),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    scope: cdktf.stringToTerraform(struct!.scope),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function dataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchToHclTerraform(struct?: DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excluded_namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedNamespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    kinds: {
      value: cdktf.listMapperHcl(dataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchKindsToHclTerraform, false)(struct!.kinds),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchKindsList",
    },
    label_selector: {
      value: dataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchLabelSelector",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace_selector: {
      value: dataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchNamespaceSelector",
    },
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedNamespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedNamespaces = this._excludedNamespaces;
    }
    if (this._kinds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinds = this._kinds?.internalValue;
    }
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludedNamespaces = undefined;
      this._kinds.internalValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._name = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._namespaces = undefined;
      this._scope = undefined;
      this._source = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludedNamespaces = value.excludedNamespaces;
      this._kinds.internalValue = value.kinds;
      this._labelSelector.internalValue = value.labelSelector;
      this._name = value.name;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._namespaces = value.namespaces;
      this._scope = value.scope;
      this._source = value.source;
    }
  }

  // excluded_namespaces - computed: false, optional: true, required: false
  private _excludedNamespaces?: string[]; 
  public get excludedNamespaces() {
    return this.getListAttribute('excluded_namespaces');
  }
  public set excludedNamespaces(value: string[]) {
    this._excludedNamespaces = value;
  }
  public resetExcludedNamespaces() {
    this._excludedNamespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedNamespacesInput() {
    return this._excludedNamespaces;
  }

  // kinds - computed: false, optional: true, required: false
  private _kinds = new DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchKindsList(this, "kinds", false);
  public get kinds() {
    return this._kinds;
  }
  public putKinds(value: DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchKinds[] | cdktf.IResolvable) {
    this._kinds.internalValue = value;
  }
  public resetKinds() {
    this._kinds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindsInput() {
    return this._kinds.internalValue;
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
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

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}
export interface DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecParametersPathTests {
  /**
  * Condition describes whether the path either MustExist or MustNotExist in the original object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/mutations_gatekeeper_sh_assign_image_v1alpha1_manifest#condition DataK8SMutationsGatekeeperShAssignImageV1Alpha1Manifest#condition}
  */
  readonly condition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/mutations_gatekeeper_sh_assign_image_v1alpha1_manifest#sub_path DataK8SMutationsGatekeeperShAssignImageV1Alpha1Manifest#sub_path}
  */
  readonly subPath?: string;
}

export function dataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecParametersPathTestsToTerraform(struct?: DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecParametersPathTests | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    sub_path: cdktf.stringToTerraform(struct!.subPath),
  }
}


export function dataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecParametersPathTestsToHclTerraform(struct?: DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecParametersPathTests | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecParametersPathTestsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecParametersPathTests | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._subPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.subPath = this._subPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecParametersPathTests | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition = undefined;
      this._subPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition = value.condition;
      this._subPath = value.subPath;
    }
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
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
}

export class DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecParametersPathTestsList extends cdktf.ComplexList {
  public internalValue? : DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecParametersPathTests[] | cdktf.IResolvable

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
  public get(index: number): DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecParametersPathTestsOutputReference {
    return new DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecParametersPathTestsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecParameters {
  /**
  * AssignDomain sets the domain component on an image string. The trailing slash should not be included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/mutations_gatekeeper_sh_assign_image_v1alpha1_manifest#assign_domain DataK8SMutationsGatekeeperShAssignImageV1Alpha1Manifest#assign_domain}
  */
  readonly assignDomain?: string;
  /**
  * AssignPath sets the domain component on an image string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/mutations_gatekeeper_sh_assign_image_v1alpha1_manifest#assign_path DataK8SMutationsGatekeeperShAssignImageV1Alpha1Manifest#assign_path}
  */
  readonly assignPath?: string;
  /**
  * AssignImage sets the image component on an image string. It must start with a ':' or '@'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/mutations_gatekeeper_sh_assign_image_v1alpha1_manifest#assign_tag DataK8SMutationsGatekeeperShAssignImageV1Alpha1Manifest#assign_tag}
  */
  readonly assignTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/mutations_gatekeeper_sh_assign_image_v1alpha1_manifest#path_tests DataK8SMutationsGatekeeperShAssignImageV1Alpha1Manifest#path_tests}
  */
  readonly pathTests?: DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecParametersPathTests[] | cdktf.IResolvable;
}

export function dataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecParametersToTerraform(struct?: DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assign_domain: cdktf.stringToTerraform(struct!.assignDomain),
    assign_path: cdktf.stringToTerraform(struct!.assignPath),
    assign_tag: cdktf.stringToTerraform(struct!.assignTag),
    path_tests: cdktf.listMapper(dataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecParametersPathTestsToTerraform, false)(struct!.pathTests),
  }
}


export function dataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecParametersToHclTerraform(struct?: DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assign_domain: {
      value: cdktf.stringToHclTerraform(struct!.assignDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    assign_path: {
      value: cdktf.stringToHclTerraform(struct!.assignPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    assign_tag: {
      value: cdktf.stringToHclTerraform(struct!.assignTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_tests: {
      value: cdktf.listMapperHcl(dataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecParametersPathTestsToHclTerraform, false)(struct!.pathTests),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecParametersPathTestsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignDomain = this._assignDomain;
    }
    if (this._assignPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignPath = this._assignPath;
    }
    if (this._assignTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignTag = this._assignTag;
    }
    if (this._pathTests?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathTests = this._pathTests?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assignDomain = undefined;
      this._assignPath = undefined;
      this._assignTag = undefined;
      this._pathTests.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assignDomain = value.assignDomain;
      this._assignPath = value.assignPath;
      this._assignTag = value.assignTag;
      this._pathTests.internalValue = value.pathTests;
    }
  }

  // assign_domain - computed: false, optional: true, required: false
  private _assignDomain?: string; 
  public get assignDomain() {
    return this.getStringAttribute('assign_domain');
  }
  public set assignDomain(value: string) {
    this._assignDomain = value;
  }
  public resetAssignDomain() {
    this._assignDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignDomainInput() {
    return this._assignDomain;
  }

  // assign_path - computed: false, optional: true, required: false
  private _assignPath?: string; 
  public get assignPath() {
    return this.getStringAttribute('assign_path');
  }
  public set assignPath(value: string) {
    this._assignPath = value;
  }
  public resetAssignPath() {
    this._assignPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignPathInput() {
    return this._assignPath;
  }

  // assign_tag - computed: false, optional: true, required: false
  private _assignTag?: string; 
  public get assignTag() {
    return this.getStringAttribute('assign_tag');
  }
  public set assignTag(value: string) {
    this._assignTag = value;
  }
  public resetAssignTag() {
    this._assignTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignTagInput() {
    return this._assignTag;
  }

  // path_tests - computed: false, optional: true, required: false
  private _pathTests = new DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecParametersPathTestsList(this, "path_tests", false);
  public get pathTests() {
    return this._pathTests;
  }
  public putPathTests(value: DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecParametersPathTests[] | cdktf.IResolvable) {
    this._pathTests.internalValue = value;
  }
  public resetPathTests() {
    this._pathTests.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathTestsInput() {
    return this._pathTests.internalValue;
  }
}
export interface DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpec {
  /**
  * ApplyTo lists the specific groups, versions and kinds a mutation will be applied to. This is necessary because every mutation implies part of an object schema and object schemas are associated with specific GVKs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/mutations_gatekeeper_sh_assign_image_v1alpha1_manifest#apply_to DataK8SMutationsGatekeeperShAssignImageV1Alpha1Manifest#apply_to}
  */
  readonly applyTo?: DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecApplyTo[] | cdktf.IResolvable;
  /**
  * Location describes the path to be mutated, for example: 'spec.containers[name: main].image'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/mutations_gatekeeper_sh_assign_image_v1alpha1_manifest#location DataK8SMutationsGatekeeperShAssignImageV1Alpha1Manifest#location}
  */
  readonly location?: string;
  /**
  * Match allows the user to limit which resources get mutated. Individual match criteria are AND-ed together. An undefined match criteria matches everything.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/mutations_gatekeeper_sh_assign_image_v1alpha1_manifest#match DataK8SMutationsGatekeeperShAssignImageV1Alpha1Manifest#match}
  */
  readonly match?: DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatch;
  /**
  * Parameters define the behavior of the mutator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/mutations_gatekeeper_sh_assign_image_v1alpha1_manifest#parameters DataK8SMutationsGatekeeperShAssignImageV1Alpha1Manifest#parameters}
  */
  readonly parameters?: DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecParameters;
}

export function dataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecToTerraform(struct?: DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apply_to: cdktf.listMapper(dataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecApplyToToTerraform, false)(struct!.applyTo),
    location: cdktf.stringToTerraform(struct!.location),
    match: dataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchToTerraform(struct!.match),
    parameters: dataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecParametersToTerraform(struct!.parameters),
  }
}


export function dataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apply_to: {
      value: cdktf.listMapperHcl(dataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecApplyToToHclTerraform, false)(struct!.applyTo),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecApplyToList",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match: {
      value: dataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatch",
    },
    parameters: {
      value: dataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecParametersToHclTerraform(struct!.parameters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecParameters",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applyTo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applyTo = this._applyTo?.internalValue;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applyTo.internalValue = undefined;
      this._location = undefined;
      this._match.internalValue = undefined;
      this._parameters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applyTo.internalValue = value.applyTo;
      this._location = value.location;
      this._match.internalValue = value.match;
      this._parameters.internalValue = value.parameters;
    }
  }

  // apply_to - computed: false, optional: true, required: false
  private _applyTo = new DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecApplyToList(this, "apply_to", false);
  public get applyTo() {
    return this._applyTo;
  }
  public putApplyTo(value: DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecApplyTo[] | cdktf.IResolvable) {
    this._applyTo.internalValue = value;
  }
  public resetApplyTo() {
    this._applyTo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyToInput() {
    return this._applyTo.internalValue;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // match - computed: false, optional: true, required: false
  private _match = new DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecMatch) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecParameters) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/mutations_gatekeeper_sh_assign_image_v1alpha1_manifest k8s_mutations_gatekeeper_sh_assign_image_v1alpha1_manifest}
*/
export class DataK8SMutationsGatekeeperShAssignImageV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_mutations_gatekeeper_sh_assign_image_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SMutationsGatekeeperShAssignImageV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SMutationsGatekeeperShAssignImageV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SMutationsGatekeeperShAssignImageV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/mutations_gatekeeper_sh_assign_image_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SMutationsGatekeeperShAssignImageV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_mutations_gatekeeper_sh_assign_image_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/mutations_gatekeeper_sh_assign_image_v1alpha1_manifest k8s_mutations_gatekeeper_sh_assign_image_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_mutations_gatekeeper_sh_assign_image_v1alpha1_manifest',
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
  private _metadata = new DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpec) {
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
      metadata: dataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SMutationsGatekeeperShAssignImageV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
