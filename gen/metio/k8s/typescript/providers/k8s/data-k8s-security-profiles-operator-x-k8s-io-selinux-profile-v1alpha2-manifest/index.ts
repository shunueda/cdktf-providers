// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_profiles_operator_x_k8s_io_selinux_profile_v1alpha2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSecurityProfilesOperatorXK8SIoSelinuxProfileV1Alpha2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_profiles_operator_x_k8s_io_selinux_profile_v1alpha2_manifest#metadata DataK8SSecurityProfilesOperatorXK8SIoSelinuxProfileV1Alpha2Manifest#metadata}
  */
  readonly metadata: DataK8SSecurityProfilesOperatorXK8SIoSelinuxProfileV1Alpha2ManifestMetadata;
  /**
  * SelinuxProfileSpec defines the desired state of SelinuxProfile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_profiles_operator_x_k8s_io_selinux_profile_v1alpha2_manifest#spec DataK8SSecurityProfilesOperatorXK8SIoSelinuxProfileV1Alpha2Manifest#spec}
  */
  readonly spec?: DataK8SSecurityProfilesOperatorXK8SIoSelinuxProfileV1Alpha2ManifestSpec;
}
export interface DataK8SSecurityProfilesOperatorXK8SIoSelinuxProfileV1Alpha2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_profiles_operator_x_k8s_io_selinux_profile_v1alpha2_manifest#annotations DataK8SSecurityProfilesOperatorXK8SIoSelinuxProfileV1Alpha2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_profiles_operator_x_k8s_io_selinux_profile_v1alpha2_manifest#labels DataK8SSecurityProfilesOperatorXK8SIoSelinuxProfileV1Alpha2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_profiles_operator_x_k8s_io_selinux_profile_v1alpha2_manifest#name DataK8SSecurityProfilesOperatorXK8SIoSelinuxProfileV1Alpha2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_profiles_operator_x_k8s_io_selinux_profile_v1alpha2_manifest#namespace DataK8SSecurityProfilesOperatorXK8SIoSelinuxProfileV1Alpha2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SSecurityProfilesOperatorXK8SIoSelinuxProfileV1Alpha2ManifestMetadataToTerraform(struct?: DataK8SSecurityProfilesOperatorXK8SIoSelinuxProfileV1Alpha2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSecurityProfilesOperatorXK8SIoSelinuxProfileV1Alpha2ManifestMetadataToHclTerraform(struct?: DataK8SSecurityProfilesOperatorXK8SIoSelinuxProfileV1Alpha2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSecurityProfilesOperatorXK8SIoSelinuxProfileV1Alpha2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecurityProfilesOperatorXK8SIoSelinuxProfileV1Alpha2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSecurityProfilesOperatorXK8SIoSelinuxProfileV1Alpha2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SSecurityProfilesOperatorXK8SIoSelinuxProfileV1Alpha2ManifestSpecInherit {
  /**
  * The Kind of the policy that this inherits from. Can be a SelinuxProfile object Or 'System' if an already installed policy will be used. The allowed 'System' policies are available in the SecurityProfilesOperatorDaemon instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_profiles_operator_x_k8s_io_selinux_profile_v1alpha2_manifest#kind DataK8SSecurityProfilesOperatorXK8SIoSelinuxProfileV1Alpha2Manifest#kind}
  */
  readonly kind?: string;
  /**
  * The name of the policy that this inherits from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_profiles_operator_x_k8s_io_selinux_profile_v1alpha2_manifest#name DataK8SSecurityProfilesOperatorXK8SIoSelinuxProfileV1Alpha2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SSecurityProfilesOperatorXK8SIoSelinuxProfileV1Alpha2ManifestSpecInheritToTerraform(struct?: DataK8SSecurityProfilesOperatorXK8SIoSelinuxProfileV1Alpha2ManifestSpecInherit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SSecurityProfilesOperatorXK8SIoSelinuxProfileV1Alpha2ManifestSpecInheritToHclTerraform(struct?: DataK8SSecurityProfilesOperatorXK8SIoSelinuxProfileV1Alpha2ManifestSpecInherit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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

export class DataK8SSecurityProfilesOperatorXK8SIoSelinuxProfileV1Alpha2ManifestSpecInheritOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSecurityProfilesOperatorXK8SIoSelinuxProfileV1Alpha2ManifestSpecInherit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecurityProfilesOperatorXK8SIoSelinuxProfileV1Alpha2ManifestSpecInherit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kind = value.kind;
      this._name = value.name;
    }
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

export class DataK8SSecurityProfilesOperatorXK8SIoSelinuxProfileV1Alpha2ManifestSpecInheritList extends cdktf.ComplexList {
  public internalValue? : DataK8SSecurityProfilesOperatorXK8SIoSelinuxProfileV1Alpha2ManifestSpecInherit[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSecurityProfilesOperatorXK8SIoSelinuxProfileV1Alpha2ManifestSpecInheritOutputReference {
    return new DataK8SSecurityProfilesOperatorXK8SIoSelinuxProfileV1Alpha2ManifestSpecInheritOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSecurityProfilesOperatorXK8SIoSelinuxProfileV1Alpha2ManifestSpec {
  /**
  * Defines the allow policy for the profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_profiles_operator_x_k8s_io_selinux_profile_v1alpha2_manifest#allow DataK8SSecurityProfilesOperatorXK8SIoSelinuxProfileV1Alpha2Manifest#allow}
  */
  readonly allow?: { [key: string]: { [key: string]: string[] } | cdktf.IResolvable } | cdktf.IResolvable;
  /**
  * Whether the profile is disabled and should be skipped during reconciliation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_profiles_operator_x_k8s_io_selinux_profile_v1alpha2_manifest#disabled DataK8SSecurityProfilesOperatorXK8SIoSelinuxProfileV1Alpha2Manifest#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * A SELinuxProfile or set of profiles that this inherits from. Note that they need to be in the same namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_profiles_operator_x_k8s_io_selinux_profile_v1alpha2_manifest#inherit DataK8SSecurityProfilesOperatorXK8SIoSelinuxProfileV1Alpha2Manifest#inherit}
  */
  readonly inherit?: DataK8SSecurityProfilesOperatorXK8SIoSelinuxProfileV1Alpha2ManifestSpecInherit[] | cdktf.IResolvable;
  /**
  * Permissive, when true will cause the SELinux profile to only log violations instead of enforcing them.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_profiles_operator_x_k8s_io_selinux_profile_v1alpha2_manifest#permissive DataK8SSecurityProfilesOperatorXK8SIoSelinuxProfileV1Alpha2Manifest#permissive}
  */
  readonly permissive?: boolean | cdktf.IResolvable;
}

export function dataK8SSecurityProfilesOperatorXK8SIoSelinuxProfileV1Alpha2ManifestSpecToTerraform(struct?: DataK8SSecurityProfilesOperatorXK8SIoSelinuxProfileV1Alpha2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow: cdktf.hashMapper(cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false)))(struct!.allow),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    inherit: cdktf.listMapper(dataK8SSecurityProfilesOperatorXK8SIoSelinuxProfileV1Alpha2ManifestSpecInheritToTerraform, false)(struct!.inherit),
    permissive: cdktf.booleanToTerraform(struct!.permissive),
  }
}


export function dataK8SSecurityProfilesOperatorXK8SIoSelinuxProfileV1Alpha2ManifestSpecToHclTerraform(struct?: DataK8SSecurityProfilesOperatorXK8SIoSelinuxProfileV1Alpha2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow: {
      value: cdktf.hashMapperHcl(cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)))(struct!.allow),
      isBlock: false,
      type: "map",
      storageClassType: "stringListMapMap",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inherit: {
      value: cdktf.listMapperHcl(dataK8SSecurityProfilesOperatorXK8SIoSelinuxProfileV1Alpha2ManifestSpecInheritToHclTerraform, false)(struct!.inherit),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSecurityProfilesOperatorXK8SIoSelinuxProfileV1Alpha2ManifestSpecInheritList",
    },
    permissive: {
      value: cdktf.booleanToHclTerraform(struct!.permissive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecurityProfilesOperatorXK8SIoSelinuxProfileV1Alpha2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecurityProfilesOperatorXK8SIoSelinuxProfileV1Alpha2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allow !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._inherit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inherit = this._inherit?.internalValue;
    }
    if (this._permissive !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissive = this._permissive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecurityProfilesOperatorXK8SIoSelinuxProfileV1Alpha2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allow = undefined;
      this._disabled = undefined;
      this._inherit.internalValue = undefined;
      this._permissive = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allow = value.allow;
      this._disabled = value.disabled;
      this._inherit.internalValue = value.inherit;
      this._permissive = value.permissive;
    }
  }

  // allow - computed: false, optional: true, required: false
  private _allow?: { [key: string]: { [key: string]: string[] } | cdktf.IResolvable } | cdktf.IResolvable; 
  public get allow() {
    return this.interpolationForAttribute('allow');
  }
  public set allow(value: { [key: string]: { [key: string]: string[] } | cdktf.IResolvable } | cdktf.IResolvable) {
    this._allow = value;
  }
  public resetAllow() {
    this._allow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // inherit - computed: false, optional: true, required: false
  private _inherit = new DataK8SSecurityProfilesOperatorXK8SIoSelinuxProfileV1Alpha2ManifestSpecInheritList(this, "inherit", false);
  public get inherit() {
    return this._inherit;
  }
  public putInherit(value: DataK8SSecurityProfilesOperatorXK8SIoSelinuxProfileV1Alpha2ManifestSpecInherit[] | cdktf.IResolvable) {
    this._inherit.internalValue = value;
  }
  public resetInherit() {
    this._inherit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritInput() {
    return this._inherit.internalValue;
  }

  // permissive - computed: false, optional: true, required: false
  private _permissive?: boolean | cdktf.IResolvable; 
  public get permissive() {
    return this.getBooleanAttribute('permissive');
  }
  public set permissive(value: boolean | cdktf.IResolvable) {
    this._permissive = value;
  }
  public resetPermissive() {
    this._permissive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissiveInput() {
    return this._permissive;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_profiles_operator_x_k8s_io_selinux_profile_v1alpha2_manifest k8s_security_profiles_operator_x_k8s_io_selinux_profile_v1alpha2_manifest}
*/
export class DataK8SSecurityProfilesOperatorXK8SIoSelinuxProfileV1Alpha2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_security_profiles_operator_x_k8s_io_selinux_profile_v1alpha2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSecurityProfilesOperatorXK8SIoSelinuxProfileV1Alpha2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSecurityProfilesOperatorXK8SIoSelinuxProfileV1Alpha2Manifest to import
  * @param importFromId The id of the existing DataK8SSecurityProfilesOperatorXK8SIoSelinuxProfileV1Alpha2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_profiles_operator_x_k8s_io_selinux_profile_v1alpha2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSecurityProfilesOperatorXK8SIoSelinuxProfileV1Alpha2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_security_profiles_operator_x_k8s_io_selinux_profile_v1alpha2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_profiles_operator_x_k8s_io_selinux_profile_v1alpha2_manifest k8s_security_profiles_operator_x_k8s_io_selinux_profile_v1alpha2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSecurityProfilesOperatorXK8SIoSelinuxProfileV1Alpha2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSecurityProfilesOperatorXK8SIoSelinuxProfileV1Alpha2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_security_profiles_operator_x_k8s_io_selinux_profile_v1alpha2_manifest',
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
  private _metadata = new DataK8SSecurityProfilesOperatorXK8SIoSelinuxProfileV1Alpha2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSecurityProfilesOperatorXK8SIoSelinuxProfileV1Alpha2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SSecurityProfilesOperatorXK8SIoSelinuxProfileV1Alpha2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSecurityProfilesOperatorXK8SIoSelinuxProfileV1Alpha2ManifestSpec) {
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
      metadata: dataK8SSecurityProfilesOperatorXK8SIoSelinuxProfileV1Alpha2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSecurityProfilesOperatorXK8SIoSelinuxProfileV1Alpha2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSecurityProfilesOperatorXK8SIoSelinuxProfileV1Alpha2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSecurityProfilesOperatorXK8SIoSelinuxProfileV1Alpha2ManifestMetadata",
      },
      spec: {
        value: dataK8SSecurityProfilesOperatorXK8SIoSelinuxProfileV1Alpha2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSecurityProfilesOperatorXK8SIoSelinuxProfileV1Alpha2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
