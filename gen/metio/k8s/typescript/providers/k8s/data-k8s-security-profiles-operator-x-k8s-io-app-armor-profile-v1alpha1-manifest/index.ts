// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_profiles_operator_x_k8s_io_app_armor_profile_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_profiles_operator_x_k8s_io_app_armor_profile_v1alpha1_manifest#metadata DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestMetadata;
  /**
  * AppArmorProfileSpec defines the desired state of AppArmorProfile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_profiles_operator_x_k8s_io_app_armor_profile_v1alpha1_manifest#spec DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpec;
}
export interface DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_profiles_operator_x_k8s_io_app_armor_profile_v1alpha1_manifest#annotations DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_profiles_operator_x_k8s_io_app_armor_profile_v1alpha1_manifest#labels DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_profiles_operator_x_k8s_io_app_armor_profile_v1alpha1_manifest#name DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_profiles_operator_x_k8s_io_app_armor_profile_v1alpha1_manifest#namespace DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractCapability {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_profiles_operator_x_k8s_io_app_armor_profile_v1alpha1_manifest#allowed_capabilities DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1Manifest#allowed_capabilities}
  */
  readonly allowedCapabilities?: string[];
}

export function dataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractCapabilityToTerraform(struct?: DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractCapability | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_capabilities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedCapabilities),
  }
}


export function dataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractCapabilityToHclTerraform(struct?: DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractCapability | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_capabilities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedCapabilities),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractCapabilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractCapability | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedCapabilities !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedCapabilities = this._allowedCapabilities;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractCapability | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedCapabilities = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedCapabilities = value.allowedCapabilities;
    }
  }

  // allowed_capabilities - computed: false, optional: true, required: false
  private _allowedCapabilities?: string[]; 
  public get allowedCapabilities() {
    return this.getListAttribute('allowed_capabilities');
  }
  public set allowedCapabilities(value: string[]) {
    this._allowedCapabilities = value;
  }
  public resetAllowedCapabilities() {
    this._allowedCapabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedCapabilitiesInput() {
    return this._allowedCapabilities;
  }
}
export interface DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractExecutable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_profiles_operator_x_k8s_io_app_armor_profile_v1alpha1_manifest#allowed_executables DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1Manifest#allowed_executables}
  */
  readonly allowedExecutables?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_profiles_operator_x_k8s_io_app_armor_profile_v1alpha1_manifest#allowed_libraries DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1Manifest#allowed_libraries}
  */
  readonly allowedLibraries?: string[];
}

export function dataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractExecutableToTerraform(struct?: DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractExecutable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_executables: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedExecutables),
    allowed_libraries: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedLibraries),
  }
}


export function dataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractExecutableToHclTerraform(struct?: DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractExecutable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_executables: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedExecutables),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_libraries: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedLibraries),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractExecutableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractExecutable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedExecutables !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedExecutables = this._allowedExecutables;
    }
    if (this._allowedLibraries !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedLibraries = this._allowedLibraries;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractExecutable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedExecutables = undefined;
      this._allowedLibraries = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedExecutables = value.allowedExecutables;
      this._allowedLibraries = value.allowedLibraries;
    }
  }

  // allowed_executables - computed: false, optional: true, required: false
  private _allowedExecutables?: string[]; 
  public get allowedExecutables() {
    return this.getListAttribute('allowed_executables');
  }
  public set allowedExecutables(value: string[]) {
    this._allowedExecutables = value;
  }
  public resetAllowedExecutables() {
    this._allowedExecutables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedExecutablesInput() {
    return this._allowedExecutables;
  }

  // allowed_libraries - computed: false, optional: true, required: false
  private _allowedLibraries?: string[]; 
  public get allowedLibraries() {
    return this.getListAttribute('allowed_libraries');
  }
  public set allowedLibraries(value: string[]) {
    this._allowedLibraries = value;
  }
  public resetAllowedLibraries() {
    this._allowedLibraries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedLibrariesInput() {
    return this._allowedLibraries;
  }
}
export interface DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractFilesystem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_profiles_operator_x_k8s_io_app_armor_profile_v1alpha1_manifest#read_only_paths DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1Manifest#read_only_paths}
  */
  readonly readOnlyPaths?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_profiles_operator_x_k8s_io_app_armor_profile_v1alpha1_manifest#read_write_paths DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1Manifest#read_write_paths}
  */
  readonly readWritePaths?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_profiles_operator_x_k8s_io_app_armor_profile_v1alpha1_manifest#write_only_paths DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1Manifest#write_only_paths}
  */
  readonly writeOnlyPaths?: string[];
}

export function dataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractFilesystemToTerraform(struct?: DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractFilesystem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read_only_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.readOnlyPaths),
    read_write_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.readWritePaths),
    write_only_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.writeOnlyPaths),
  }
}


export function dataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractFilesystemToHclTerraform(struct?: DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractFilesystem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read_only_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.readOnlyPaths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    read_write_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.readWritePaths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    write_only_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.writeOnlyPaths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractFilesystemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractFilesystem | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._readOnlyPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnlyPaths = this._readOnlyPaths;
    }
    if (this._readWritePaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.readWritePaths = this._readWritePaths;
    }
    if (this._writeOnlyPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeOnlyPaths = this._writeOnlyPaths;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractFilesystem | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._readOnlyPaths = undefined;
      this._readWritePaths = undefined;
      this._writeOnlyPaths = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._readOnlyPaths = value.readOnlyPaths;
      this._readWritePaths = value.readWritePaths;
      this._writeOnlyPaths = value.writeOnlyPaths;
    }
  }

  // read_only_paths - computed: false, optional: true, required: false
  private _readOnlyPaths?: string[]; 
  public get readOnlyPaths() {
    return this.getListAttribute('read_only_paths');
  }
  public set readOnlyPaths(value: string[]) {
    this._readOnlyPaths = value;
  }
  public resetReadOnlyPaths() {
    this._readOnlyPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyPathsInput() {
    return this._readOnlyPaths;
  }

  // read_write_paths - computed: false, optional: true, required: false
  private _readWritePaths?: string[]; 
  public get readWritePaths() {
    return this.getListAttribute('read_write_paths');
  }
  public set readWritePaths(value: string[]) {
    this._readWritePaths = value;
  }
  public resetReadWritePaths() {
    this._readWritePaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readWritePathsInput() {
    return this._readWritePaths;
  }

  // write_only_paths - computed: false, optional: true, required: false
  private _writeOnlyPaths?: string[]; 
  public get writeOnlyPaths() {
    return this.getListAttribute('write_only_paths');
  }
  public set writeOnlyPaths(value: string[]) {
    this._writeOnlyPaths = value;
  }
  public resetWriteOnlyPaths() {
    this._writeOnlyPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeOnlyPathsInput() {
    return this._writeOnlyPaths;
  }
}
export interface DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractNetworkAllowedProtocols {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_profiles_operator_x_k8s_io_app_armor_profile_v1alpha1_manifest#allow_tcp DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1Manifest#allow_tcp}
  */
  readonly allowTcp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_profiles_operator_x_k8s_io_app_armor_profile_v1alpha1_manifest#allow_udp DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1Manifest#allow_udp}
  */
  readonly allowUdp?: boolean | cdktf.IResolvable;
}

export function dataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractNetworkAllowedProtocolsToTerraform(struct?: DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractNetworkAllowedProtocols | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_tcp: cdktf.booleanToTerraform(struct!.allowTcp),
    allow_udp: cdktf.booleanToTerraform(struct!.allowUdp),
  }
}


export function dataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractNetworkAllowedProtocolsToHclTerraform(struct?: DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractNetworkAllowedProtocols | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_tcp: {
      value: cdktf.booleanToHclTerraform(struct!.allowTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_udp: {
      value: cdktf.booleanToHclTerraform(struct!.allowUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractNetworkAllowedProtocolsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractNetworkAllowedProtocols | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowTcp = this._allowTcp;
    }
    if (this._allowUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowUdp = this._allowUdp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractNetworkAllowedProtocols | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowTcp = undefined;
      this._allowUdp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowTcp = value.allowTcp;
      this._allowUdp = value.allowUdp;
    }
  }

  // allow_tcp - computed: false, optional: true, required: false
  private _allowTcp?: boolean | cdktf.IResolvable; 
  public get allowTcp() {
    return this.getBooleanAttribute('allow_tcp');
  }
  public set allowTcp(value: boolean | cdktf.IResolvable) {
    this._allowTcp = value;
  }
  public resetAllowTcp() {
    this._allowTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowTcpInput() {
    return this._allowTcp;
  }

  // allow_udp - computed: false, optional: true, required: false
  private _allowUdp?: boolean | cdktf.IResolvable; 
  public get allowUdp() {
    return this.getBooleanAttribute('allow_udp');
  }
  public set allowUdp(value: boolean | cdktf.IResolvable) {
    this._allowUdp = value;
  }
  public resetAllowUdp() {
    this._allowUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUdpInput() {
    return this._allowUdp;
  }
}
export interface DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_profiles_operator_x_k8s_io_app_armor_profile_v1alpha1_manifest#allow_raw DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1Manifest#allow_raw}
  */
  readonly allowRaw?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_profiles_operator_x_k8s_io_app_armor_profile_v1alpha1_manifest#allowed_protocols DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1Manifest#allowed_protocols}
  */
  readonly allowedProtocols?: DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractNetworkAllowedProtocols;
}

export function dataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractNetworkToTerraform(struct?: DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_raw: cdktf.booleanToTerraform(struct!.allowRaw),
    allowed_protocols: dataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractNetworkAllowedProtocolsToTerraform(struct!.allowedProtocols),
  }
}


export function dataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractNetworkToHclTerraform(struct?: DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_raw: {
      value: cdktf.booleanToHclTerraform(struct!.allowRaw),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allowed_protocols: {
      value: dataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractNetworkAllowedProtocolsToHclTerraform(struct!.allowedProtocols),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractNetworkAllowedProtocols",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowRaw !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowRaw = this._allowRaw;
    }
    if (this._allowedProtocols?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedProtocols = this._allowedProtocols?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowRaw = undefined;
      this._allowedProtocols.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowRaw = value.allowRaw;
      this._allowedProtocols.internalValue = value.allowedProtocols;
    }
  }

  // allow_raw - computed: false, optional: true, required: false
  private _allowRaw?: boolean | cdktf.IResolvable; 
  public get allowRaw() {
    return this.getBooleanAttribute('allow_raw');
  }
  public set allowRaw(value: boolean | cdktf.IResolvable) {
    this._allowRaw = value;
  }
  public resetAllowRaw() {
    this._allowRaw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRawInput() {
    return this._allowRaw;
  }

  // allowed_protocols - computed: false, optional: true, required: false
  private _allowedProtocols = new DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractNetworkAllowedProtocolsOutputReference(this, "allowed_protocols");
  public get allowedProtocols() {
    return this._allowedProtocols;
  }
  public putAllowedProtocols(value: DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractNetworkAllowedProtocols) {
    this._allowedProtocols.internalValue = value;
  }
  public resetAllowedProtocols() {
    this._allowedProtocols.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedProtocolsInput() {
    return this._allowedProtocols.internalValue;
  }
}
export interface DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstract {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_profiles_operator_x_k8s_io_app_armor_profile_v1alpha1_manifest#capability DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1Manifest#capability}
  */
  readonly capability?: DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractCapability;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_profiles_operator_x_k8s_io_app_armor_profile_v1alpha1_manifest#executable DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1Manifest#executable}
  */
  readonly executable?: DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractExecutable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_profiles_operator_x_k8s_io_app_armor_profile_v1alpha1_manifest#filesystem DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1Manifest#filesystem}
  */
  readonly filesystem?: DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractFilesystem;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_profiles_operator_x_k8s_io_app_armor_profile_v1alpha1_manifest#network DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1Manifest#network}
  */
  readonly network?: DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractNetwork;
}

export function dataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractToTerraform(struct?: DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstract | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capability: dataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractCapabilityToTerraform(struct!.capability),
    executable: dataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractExecutableToTerraform(struct!.executable),
    filesystem: dataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractFilesystemToTerraform(struct!.filesystem),
    network: dataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractNetworkToTerraform(struct!.network),
  }
}


export function dataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractToHclTerraform(struct?: DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstract | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capability: {
      value: dataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractCapabilityToHclTerraform(struct!.capability),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractCapability",
    },
    executable: {
      value: dataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractExecutableToHclTerraform(struct!.executable),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractExecutable",
    },
    filesystem: {
      value: dataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractFilesystemToHclTerraform(struct!.filesystem),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractFilesystem",
    },
    network: {
      value: dataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractNetworkToHclTerraform(struct!.network),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractNetwork",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstract | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capability?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.capability = this._capability?.internalValue;
    }
    if (this._executable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.executable = this._executable?.internalValue;
    }
    if (this._filesystem?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filesystem = this._filesystem?.internalValue;
    }
    if (this._network?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstract | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capability.internalValue = undefined;
      this._executable.internalValue = undefined;
      this._filesystem.internalValue = undefined;
      this._network.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capability.internalValue = value.capability;
      this._executable.internalValue = value.executable;
      this._filesystem.internalValue = value.filesystem;
      this._network.internalValue = value.network;
    }
  }

  // capability - computed: false, optional: true, required: false
  private _capability = new DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractCapabilityOutputReference(this, "capability");
  public get capability() {
    return this._capability;
  }
  public putCapability(value: DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractCapability) {
    this._capability.internalValue = value;
  }
  public resetCapability() {
    this._capability.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilityInput() {
    return this._capability.internalValue;
  }

  // executable - computed: false, optional: true, required: false
  private _executable = new DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractExecutableOutputReference(this, "executable");
  public get executable() {
    return this._executable;
  }
  public putExecutable(value: DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractExecutable) {
    this._executable.internalValue = value;
  }
  public resetExecutable() {
    this._executable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executableInput() {
    return this._executable.internalValue;
  }

  // filesystem - computed: false, optional: true, required: false
  private _filesystem = new DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractFilesystemOutputReference(this, "filesystem");
  public get filesystem() {
    return this._filesystem;
  }
  public putFilesystem(value: DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractFilesystem) {
    this._filesystem.internalValue = value;
  }
  public resetFilesystem() {
    this._filesystem.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesystemInput() {
    return this._filesystem.internalValue;
  }

  // network - computed: false, optional: true, required: false
  private _network = new DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractNetwork) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }
}
export interface DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_profiles_operator_x_k8s_io_app_armor_profile_v1alpha1_manifest#abstract DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1Manifest#abstract}
  */
  readonly abstract?: DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstract;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_profiles_operator_x_k8s_io_app_armor_profile_v1alpha1_manifest#policy DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1Manifest#policy}
  */
  readonly policy?: string;
}

export function dataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecToTerraform(struct?: DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abstract: dataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractToTerraform(struct!.abstract),
    policy: cdktf.stringToTerraform(struct!.policy),
  }
}


export function dataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abstract: {
      value: dataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractToHclTerraform(struct!.abstract),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstract",
    },
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._abstract?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.abstract = this._abstract?.internalValue;
    }
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._abstract.internalValue = undefined;
      this._policy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._abstract.internalValue = value.abstract;
      this._policy = value.policy;
    }
  }

  // abstract - computed: false, optional: true, required: false
  private _abstract = new DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstractOutputReference(this, "abstract");
  public get abstract() {
    return this._abstract;
  }
  public putAbstract(value: DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecAbstract) {
    this._abstract.internalValue = value;
  }
  public resetAbstract() {
    this._abstract.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abstractInput() {
    return this._abstract.internalValue;
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_profiles_operator_x_k8s_io_app_armor_profile_v1alpha1_manifest k8s_security_profiles_operator_x_k8s_io_app_armor_profile_v1alpha1_manifest}
*/
export class DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_security_profiles_operator_x_k8s_io_app_armor_profile_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_profiles_operator_x_k8s_io_app_armor_profile_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_security_profiles_operator_x_k8s_io_app_armor_profile_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/security_profiles_operator_x_k8s_io_app_armor_profile_v1alpha1_manifest k8s_security_profiles_operator_x_k8s_io_app_armor_profile_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_security_profiles_operator_x_k8s_io_app_armor_profile_v1alpha1_manifest',
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
  private _metadata = new DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpec) {
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
      metadata: dataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSecurityProfilesOperatorXK8SIoAppArmorProfileV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
