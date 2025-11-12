// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/capsule_clastix_io_capsule_configuration_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCapsuleClastixIoCapsuleConfigurationV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/capsule_clastix_io_capsule_configuration_v1alpha1_manifest#metadata DataK8SCapsuleClastixIoCapsuleConfigurationV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SCapsuleClastixIoCapsuleConfigurationV1Alpha1ManifestMetadata;
  /**
  * CapsuleConfigurationSpec defines the Capsule configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/capsule_clastix_io_capsule_configuration_v1alpha1_manifest#spec DataK8SCapsuleClastixIoCapsuleConfigurationV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SCapsuleClastixIoCapsuleConfigurationV1Alpha1ManifestSpec;
}
export interface DataK8SCapsuleClastixIoCapsuleConfigurationV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/capsule_clastix_io_capsule_configuration_v1alpha1_manifest#annotations DataK8SCapsuleClastixIoCapsuleConfigurationV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/capsule_clastix_io_capsule_configuration_v1alpha1_manifest#labels DataK8SCapsuleClastixIoCapsuleConfigurationV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/capsule_clastix_io_capsule_configuration_v1alpha1_manifest#name DataK8SCapsuleClastixIoCapsuleConfigurationV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SCapsuleClastixIoCapsuleConfigurationV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SCapsuleClastixIoCapsuleConfigurationV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SCapsuleClastixIoCapsuleConfigurationV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SCapsuleClastixIoCapsuleConfigurationV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SCapsuleClastixIoCapsuleConfigurationV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoCapsuleConfigurationV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoCapsuleConfigurationV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SCapsuleClastixIoCapsuleConfigurationV1Alpha1ManifestSpec {
  /**
  * Enforces the Tenant owner, during Namespace creation, to name it using the selected Tenant name as prefix, separated by a dash. This is useful to avoid Namespace name collision in a public CaaS environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/capsule_clastix_io_capsule_configuration_v1alpha1_manifest#force_tenant_prefix DataK8SCapsuleClastixIoCapsuleConfigurationV1Alpha1Manifest#force_tenant_prefix}
  */
  readonly forceTenantPrefix?: boolean | cdktf.IResolvable;
  /**
  * Disallow creation of namespaces, whose name matches this regexp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/capsule_clastix_io_capsule_configuration_v1alpha1_manifest#protected_namespace_regex DataK8SCapsuleClastixIoCapsuleConfigurationV1Alpha1Manifest#protected_namespace_regex}
  */
  readonly protectedNamespaceRegex?: string;
  /**
  * Names of the groups for Capsule users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/capsule_clastix_io_capsule_configuration_v1alpha1_manifest#user_groups DataK8SCapsuleClastixIoCapsuleConfigurationV1Alpha1Manifest#user_groups}
  */
  readonly userGroups?: string[];
}

export function dataK8SCapsuleClastixIoCapsuleConfigurationV1Alpha1ManifestSpecToTerraform(struct?: DataK8SCapsuleClastixIoCapsuleConfigurationV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    force_tenant_prefix: cdktf.booleanToTerraform(struct!.forceTenantPrefix),
    protected_namespace_regex: cdktf.stringToTerraform(struct!.protectedNamespaceRegex),
    user_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.userGroups),
  }
}


export function dataK8SCapsuleClastixIoCapsuleConfigurationV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SCapsuleClastixIoCapsuleConfigurationV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    force_tenant_prefix: {
      value: cdktf.booleanToHclTerraform(struct!.forceTenantPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    protected_namespace_regex: {
      value: cdktf.stringToHclTerraform(struct!.protectedNamespaceRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.userGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapsuleClastixIoCapsuleConfigurationV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoCapsuleConfigurationV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forceTenantPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceTenantPrefix = this._forceTenantPrefix;
    }
    if (this._protectedNamespaceRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectedNamespaceRegex = this._protectedNamespaceRegex;
    }
    if (this._userGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.userGroups = this._userGroups;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapsuleClastixIoCapsuleConfigurationV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._forceTenantPrefix = undefined;
      this._protectedNamespaceRegex = undefined;
      this._userGroups = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._forceTenantPrefix = value.forceTenantPrefix;
      this._protectedNamespaceRegex = value.protectedNamespaceRegex;
      this._userGroups = value.userGroups;
    }
  }

  // force_tenant_prefix - computed: false, optional: true, required: false
  private _forceTenantPrefix?: boolean | cdktf.IResolvable; 
  public get forceTenantPrefix() {
    return this.getBooleanAttribute('force_tenant_prefix');
  }
  public set forceTenantPrefix(value: boolean | cdktf.IResolvable) {
    this._forceTenantPrefix = value;
  }
  public resetForceTenantPrefix() {
    this._forceTenantPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceTenantPrefixInput() {
    return this._forceTenantPrefix;
  }

  // protected_namespace_regex - computed: false, optional: true, required: false
  private _protectedNamespaceRegex?: string; 
  public get protectedNamespaceRegex() {
    return this.getStringAttribute('protected_namespace_regex');
  }
  public set protectedNamespaceRegex(value: string) {
    this._protectedNamespaceRegex = value;
  }
  public resetProtectedNamespaceRegex() {
    this._protectedNamespaceRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedNamespaceRegexInput() {
    return this._protectedNamespaceRegex;
  }

  // user_groups - computed: false, optional: true, required: false
  private _userGroups?: string[]; 
  public get userGroups() {
    return this.getListAttribute('user_groups');
  }
  public set userGroups(value: string[]) {
    this._userGroups = value;
  }
  public resetUserGroups() {
    this._userGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupsInput() {
    return this._userGroups;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/capsule_clastix_io_capsule_configuration_v1alpha1_manifest k8s_capsule_clastix_io_capsule_configuration_v1alpha1_manifest}
*/
export class DataK8SCapsuleClastixIoCapsuleConfigurationV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_capsule_clastix_io_capsule_configuration_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCapsuleClastixIoCapsuleConfigurationV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCapsuleClastixIoCapsuleConfigurationV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SCapsuleClastixIoCapsuleConfigurationV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/capsule_clastix_io_capsule_configuration_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCapsuleClastixIoCapsuleConfigurationV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_capsule_clastix_io_capsule_configuration_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/capsule_clastix_io_capsule_configuration_v1alpha1_manifest k8s_capsule_clastix_io_capsule_configuration_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCapsuleClastixIoCapsuleConfigurationV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCapsuleClastixIoCapsuleConfigurationV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_capsule_clastix_io_capsule_configuration_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.3',
        providerVersionConstraint: '2025.11.3'
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
  private _metadata = new DataK8SCapsuleClastixIoCapsuleConfigurationV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCapsuleClastixIoCapsuleConfigurationV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SCapsuleClastixIoCapsuleConfigurationV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCapsuleClastixIoCapsuleConfigurationV1Alpha1ManifestSpec) {
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
      metadata: dataK8SCapsuleClastixIoCapsuleConfigurationV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SCapsuleClastixIoCapsuleConfigurationV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SCapsuleClastixIoCapsuleConfigurationV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCapsuleClastixIoCapsuleConfigurationV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SCapsuleClastixIoCapsuleConfigurationV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCapsuleClastixIoCapsuleConfigurationV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
