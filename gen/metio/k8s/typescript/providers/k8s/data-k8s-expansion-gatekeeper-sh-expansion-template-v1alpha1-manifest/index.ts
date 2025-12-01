// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/expansion_gatekeeper_sh_expansion_template_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/expansion_gatekeeper_sh_expansion_template_v1alpha1_manifest#metadata DataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1ManifestMetadata;
  /**
  * ExpansionTemplateSpec defines the desired state of ExpansionTemplate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/expansion_gatekeeper_sh_expansion_template_v1alpha1_manifest#spec DataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1ManifestSpec;
}
export interface DataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/expansion_gatekeeper_sh_expansion_template_v1alpha1_manifest#annotations DataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/expansion_gatekeeper_sh_expansion_template_v1alpha1_manifest#labels DataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/expansion_gatekeeper_sh_expansion_template_v1alpha1_manifest#name DataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1ManifestSpecApplyTo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/expansion_gatekeeper_sh_expansion_template_v1alpha1_manifest#groups DataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1Manifest#groups}
  */
  readonly groups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/expansion_gatekeeper_sh_expansion_template_v1alpha1_manifest#kinds DataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1Manifest#kinds}
  */
  readonly kinds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/expansion_gatekeeper_sh_expansion_template_v1alpha1_manifest#versions DataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1Manifest#versions}
  */
  readonly versions?: string[];
}

export function dataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1ManifestSpecApplyToToTerraform(struct?: DataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1ManifestSpecApplyTo | cdktf.IResolvable): any {
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


export function dataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1ManifestSpecApplyToToHclTerraform(struct?: DataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1ManifestSpecApplyTo | cdktf.IResolvable): any {
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

export class DataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1ManifestSpecApplyToOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1ManifestSpecApplyTo | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1ManifestSpecApplyTo | cdktf.IResolvable | undefined) {
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

export class DataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1ManifestSpecApplyToList extends cdktf.ComplexList {
  public internalValue? : DataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1ManifestSpecApplyTo[] | cdktf.IResolvable

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
  public get(index: number): DataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1ManifestSpecApplyToOutputReference {
    return new DataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1ManifestSpecApplyToOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1ManifestSpecGeneratedGvk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/expansion_gatekeeper_sh_expansion_template_v1alpha1_manifest#group DataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1Manifest#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/expansion_gatekeeper_sh_expansion_template_v1alpha1_manifest#kind DataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/expansion_gatekeeper_sh_expansion_template_v1alpha1_manifest#version DataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1ManifestSpecGeneratedGvkToTerraform(struct?: DataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1ManifestSpecGeneratedGvk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1ManifestSpecGeneratedGvkToHclTerraform(struct?: DataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1ManifestSpecGeneratedGvk | cdktf.IResolvable): any {
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
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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

export class DataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1ManifestSpecGeneratedGvkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1ManifestSpecGeneratedGvk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1ManifestSpecGeneratedGvk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._kind = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._kind = value.kind;
      this._version = value.version;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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
}
export interface DataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1ManifestSpec {
  /**
  * ApplyTo lists the specific groups, versions and kinds of generator resources which will be expanded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/expansion_gatekeeper_sh_expansion_template_v1alpha1_manifest#apply_to DataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1Manifest#apply_to}
  */
  readonly applyTo?: DataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1ManifestSpecApplyTo[] | cdktf.IResolvable;
  /**
  * EnforcementAction specifies the enforcement action to be used for resources matching the ExpansionTemplate. Specifying an empty value will use the enforcement action specified by the Constraint in violation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/expansion_gatekeeper_sh_expansion_template_v1alpha1_manifest#enforcement_action DataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1Manifest#enforcement_action}
  */
  readonly enforcementAction?: string;
  /**
  * GeneratedGVK specifies the GVK of the resources which the generator resource creates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/expansion_gatekeeper_sh_expansion_template_v1alpha1_manifest#generated_gvk DataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1Manifest#generated_gvk}
  */
  readonly generatedGvk?: DataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1ManifestSpecGeneratedGvk;
  /**
  * TemplateSource specifies the source field on the generator resource to use as the base for expanded resource. For Pod-creating generators, this is usually spec.template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/expansion_gatekeeper_sh_expansion_template_v1alpha1_manifest#template_source DataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1Manifest#template_source}
  */
  readonly templateSource?: string;
}

export function dataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1ManifestSpecToTerraform(struct?: DataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apply_to: cdktf.listMapper(dataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1ManifestSpecApplyToToTerraform, false)(struct!.applyTo),
    enforcement_action: cdktf.stringToTerraform(struct!.enforcementAction),
    generated_gvk: dataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1ManifestSpecGeneratedGvkToTerraform(struct!.generatedGvk),
    template_source: cdktf.stringToTerraform(struct!.templateSource),
  }
}


export function dataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apply_to: {
      value: cdktf.listMapperHcl(dataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1ManifestSpecApplyToToHclTerraform, false)(struct!.applyTo),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1ManifestSpecApplyToList",
    },
    enforcement_action: {
      value: cdktf.stringToHclTerraform(struct!.enforcementAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    generated_gvk: {
      value: dataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1ManifestSpecGeneratedGvkToHclTerraform(struct!.generatedGvk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1ManifestSpecGeneratedGvk",
    },
    template_source: {
      value: cdktf.stringToHclTerraform(struct!.templateSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applyTo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applyTo = this._applyTo?.internalValue;
    }
    if (this._enforcementAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforcementAction = this._enforcementAction;
    }
    if (this._generatedGvk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.generatedGvk = this._generatedGvk?.internalValue;
    }
    if (this._templateSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateSource = this._templateSource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applyTo.internalValue = undefined;
      this._enforcementAction = undefined;
      this._generatedGvk.internalValue = undefined;
      this._templateSource = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applyTo.internalValue = value.applyTo;
      this._enforcementAction = value.enforcementAction;
      this._generatedGvk.internalValue = value.generatedGvk;
      this._templateSource = value.templateSource;
    }
  }

  // apply_to - computed: false, optional: true, required: false
  private _applyTo = new DataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1ManifestSpecApplyToList(this, "apply_to", false);
  public get applyTo() {
    return this._applyTo;
  }
  public putApplyTo(value: DataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1ManifestSpecApplyTo[] | cdktf.IResolvable) {
    this._applyTo.internalValue = value;
  }
  public resetApplyTo() {
    this._applyTo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyToInput() {
    return this._applyTo.internalValue;
  }

  // enforcement_action - computed: false, optional: true, required: false
  private _enforcementAction?: string; 
  public get enforcementAction() {
    return this.getStringAttribute('enforcement_action');
  }
  public set enforcementAction(value: string) {
    this._enforcementAction = value;
  }
  public resetEnforcementAction() {
    this._enforcementAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcementActionInput() {
    return this._enforcementAction;
  }

  // generated_gvk - computed: false, optional: true, required: false
  private _generatedGvk = new DataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1ManifestSpecGeneratedGvkOutputReference(this, "generated_gvk");
  public get generatedGvk() {
    return this._generatedGvk;
  }
  public putGeneratedGvk(value: DataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1ManifestSpecGeneratedGvk) {
    this._generatedGvk.internalValue = value;
  }
  public resetGeneratedGvk() {
    this._generatedGvk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generatedGvkInput() {
    return this._generatedGvk.internalValue;
  }

  // template_source - computed: false, optional: true, required: false
  private _templateSource?: string; 
  public get templateSource() {
    return this.getStringAttribute('template_source');
  }
  public set templateSource(value: string) {
    this._templateSource = value;
  }
  public resetTemplateSource() {
    this._templateSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateSourceInput() {
    return this._templateSource;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/expansion_gatekeeper_sh_expansion_template_v1alpha1_manifest k8s_expansion_gatekeeper_sh_expansion_template_v1alpha1_manifest}
*/
export class DataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_expansion_gatekeeper_sh_expansion_template_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/expansion_gatekeeper_sh_expansion_template_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_expansion_gatekeeper_sh_expansion_template_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/expansion_gatekeeper_sh_expansion_template_v1alpha1_manifest k8s_expansion_gatekeeper_sh_expansion_template_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_expansion_gatekeeper_sh_expansion_template_v1alpha1_manifest',
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
  private _metadata = new DataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1ManifestSpec) {
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
      metadata: dataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SExpansionGatekeeperShExpansionTemplateV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
