// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/efs_services_k8s_aws_mount_target_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/efs_services_k8s_aws_mount_target_v1alpha1_manifest#metadata DataK8SEfsServicesK8SAwsMountTargetV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestMetadata;
  /**
  * MountTargetSpec defines the desired state of MountTarget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/efs_services_k8s_aws_mount_target_v1alpha1_manifest#spec DataK8SEfsServicesK8SAwsMountTargetV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpec;
}
export interface DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/efs_services_k8s_aws_mount_target_v1alpha1_manifest#annotations DataK8SEfsServicesK8SAwsMountTargetV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/efs_services_k8s_aws_mount_target_v1alpha1_manifest#labels DataK8SEfsServicesK8SAwsMountTargetV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/efs_services_k8s_aws_mount_target_v1alpha1_manifest#name DataK8SEfsServicesK8SAwsMountTargetV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/efs_services_k8s_aws_mount_target_v1alpha1_manifest#namespace DataK8SEfsServicesK8SAwsMountTargetV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecFileSystemRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/efs_services_k8s_aws_mount_target_v1alpha1_manifest#name DataK8SEfsServicesK8SAwsMountTargetV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/efs_services_k8s_aws_mount_target_v1alpha1_manifest#namespace DataK8SEfsServicesK8SAwsMountTargetV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecFileSystemRefFromToTerraform(struct?: DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecFileSystemRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecFileSystemRefFromToHclTerraform(struct?: DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecFileSystemRefFrom | cdktf.IResolvable): any {
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

export class DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecFileSystemRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecFileSystemRefFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecFileSystemRefFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._namespace = value.namespace;
    }
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecFileSystemRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/efs_services_k8s_aws_mount_target_v1alpha1_manifest#from DataK8SEfsServicesK8SAwsMountTargetV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecFileSystemRefFrom;
}

export function dataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecFileSystemRefToTerraform(struct?: DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecFileSystemRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecFileSystemRefFromToTerraform(struct!.from),
  }
}


export function dataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecFileSystemRefToHclTerraform(struct?: DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecFileSystemRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecFileSystemRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecFileSystemRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecFileSystemRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecFileSystemRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecFileSystemRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from.internalValue = value.from;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from = new DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecFileSystemRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecFileSystemRefFrom) {
    this._from.internalValue = value;
  }
  public resetFrom() {
    this._from.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from.internalValue;
  }
}
export interface DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecSecurityGroupRefsFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/efs_services_k8s_aws_mount_target_v1alpha1_manifest#name DataK8SEfsServicesK8SAwsMountTargetV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/efs_services_k8s_aws_mount_target_v1alpha1_manifest#namespace DataK8SEfsServicesK8SAwsMountTargetV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecSecurityGroupRefsFromToTerraform(struct?: DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecSecurityGroupRefsFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecSecurityGroupRefsFromToHclTerraform(struct?: DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecSecurityGroupRefsFrom | cdktf.IResolvable): any {
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

export class DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecSecurityGroupRefsFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecSecurityGroupRefsFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecSecurityGroupRefsFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._namespace = value.namespace;
    }
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecSecurityGroupRefs {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/efs_services_k8s_aws_mount_target_v1alpha1_manifest#from DataK8SEfsServicesK8SAwsMountTargetV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecSecurityGroupRefsFrom;
}

export function dataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecSecurityGroupRefsToTerraform(struct?: DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecSecurityGroupRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecSecurityGroupRefsFromToTerraform(struct!.from),
  }
}


export function dataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecSecurityGroupRefsToHclTerraform(struct?: DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecSecurityGroupRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecSecurityGroupRefsFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecSecurityGroupRefsFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecSecurityGroupRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecSecurityGroupRefs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecSecurityGroupRefs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from.internalValue = value.from;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from = new DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecSecurityGroupRefsFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecSecurityGroupRefsFrom) {
    this._from.internalValue = value;
  }
  public resetFrom() {
    this._from.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from.internalValue;
  }
}

export class DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecSecurityGroupRefsList extends cdktf.ComplexList {
  public internalValue? : DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecSecurityGroupRefs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecSecurityGroupRefsOutputReference {
    return new DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecSecurityGroupRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecSubnetRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/efs_services_k8s_aws_mount_target_v1alpha1_manifest#name DataK8SEfsServicesK8SAwsMountTargetV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/efs_services_k8s_aws_mount_target_v1alpha1_manifest#namespace DataK8SEfsServicesK8SAwsMountTargetV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecSubnetRefFromToTerraform(struct?: DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecSubnetRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecSubnetRefFromToHclTerraform(struct?: DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecSubnetRefFrom | cdktf.IResolvable): any {
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

export class DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecSubnetRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecSubnetRefFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecSubnetRefFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._namespace = value.namespace;
    }
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecSubnetRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/efs_services_k8s_aws_mount_target_v1alpha1_manifest#from DataK8SEfsServicesK8SAwsMountTargetV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecSubnetRefFrom;
}

export function dataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecSubnetRefToTerraform(struct?: DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecSubnetRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecSubnetRefFromToTerraform(struct!.from),
  }
}


export function dataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecSubnetRefToHclTerraform(struct?: DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecSubnetRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecSubnetRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecSubnetRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecSubnetRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecSubnetRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecSubnetRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from.internalValue = value.from;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from = new DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecSubnetRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecSubnetRefFrom) {
    this._from.internalValue = value;
  }
  public resetFrom() {
    this._from.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from.internalValue;
  }
}
export interface DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpec {
  /**
  * The ID of the file system for which to create the mount target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/efs_services_k8s_aws_mount_target_v1alpha1_manifest#file_system_id DataK8SEfsServicesK8SAwsMountTargetV1Alpha1Manifest#file_system_id}
  */
  readonly fileSystemId?: string;
  /**
  * AWSResourceReferenceWrapper provides a wrapper around *AWSResourceReference type to provide more user friendly syntax for references using 'from' field Ex: APIIDRef: from: name: my-api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/efs_services_k8s_aws_mount_target_v1alpha1_manifest#file_system_ref DataK8SEfsServicesK8SAwsMountTargetV1Alpha1Manifest#file_system_ref}
  */
  readonly fileSystemRef?: DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecFileSystemRef;
  /**
  * Valid IPv4 address within the address range of the specified subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/efs_services_k8s_aws_mount_target_v1alpha1_manifest#ip_address DataK8SEfsServicesK8SAwsMountTargetV1Alpha1Manifest#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/efs_services_k8s_aws_mount_target_v1alpha1_manifest#security_group_refs DataK8SEfsServicesK8SAwsMountTargetV1Alpha1Manifest#security_group_refs}
  */
  readonly securityGroupRefs?: DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecSecurityGroupRefs[] | cdktf.IResolvable;
  /**
  * Up to five VPC security group IDs, of the form sg-xxxxxxxx. These must be for the same VPC as subnet specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/efs_services_k8s_aws_mount_target_v1alpha1_manifest#security_groups DataK8SEfsServicesK8SAwsMountTargetV1Alpha1Manifest#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * The ID of the subnet to add the mount target in. For One Zone file systems, use the subnet that is associated with the file system's Availability Zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/efs_services_k8s_aws_mount_target_v1alpha1_manifest#subnet_id DataK8SEfsServicesK8SAwsMountTargetV1Alpha1Manifest#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * AWSResourceReferenceWrapper provides a wrapper around *AWSResourceReference type to provide more user friendly syntax for references using 'from' field Ex: APIIDRef: from: name: my-api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/efs_services_k8s_aws_mount_target_v1alpha1_manifest#subnet_ref DataK8SEfsServicesK8SAwsMountTargetV1Alpha1Manifest#subnet_ref}
  */
  readonly subnetRef?: DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecSubnetRef;
}

export function dataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecToTerraform(struct?: DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_system_id: cdktf.stringToTerraform(struct!.fileSystemId),
    file_system_ref: dataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecFileSystemRefToTerraform(struct!.fileSystemRef),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    security_group_refs: cdktf.listMapper(dataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecSecurityGroupRefsToTerraform, false)(struct!.securityGroupRefs),
    security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroups),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    subnet_ref: dataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecSubnetRefToTerraform(struct!.subnetRef),
  }
}


export function dataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_system_id: {
      value: cdktf.stringToHclTerraform(struct!.fileSystemId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_system_ref: {
      value: dataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecFileSystemRefToHclTerraform(struct!.fileSystemRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecFileSystemRef",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group_refs: {
      value: cdktf.listMapperHcl(dataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecSecurityGroupRefsToHclTerraform, false)(struct!.securityGroupRefs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecSecurityGroupRefsList",
    },
    security_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_ref: {
      value: dataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecSubnetRefToHclTerraform(struct!.subnetRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecSubnetRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileSystemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemId = this._fileSystemId;
    }
    if (this._fileSystemRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemRef = this._fileSystemRef?.internalValue;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._securityGroupRefs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupRefs = this._securityGroupRefs?.internalValue;
    }
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._subnetRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetRef = this._subnetRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileSystemId = undefined;
      this._fileSystemRef.internalValue = undefined;
      this._ipAddress = undefined;
      this._securityGroupRefs.internalValue = undefined;
      this._securityGroups = undefined;
      this._subnetId = undefined;
      this._subnetRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileSystemId = value.fileSystemId;
      this._fileSystemRef.internalValue = value.fileSystemRef;
      this._ipAddress = value.ipAddress;
      this._securityGroupRefs.internalValue = value.securityGroupRefs;
      this._securityGroups = value.securityGroups;
      this._subnetId = value.subnetId;
      this._subnetRef.internalValue = value.subnetRef;
    }
  }

  // file_system_id - computed: false, optional: true, required: false
  private _fileSystemId?: string; 
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }
  public set fileSystemId(value: string) {
    this._fileSystemId = value;
  }
  public resetFileSystemId() {
    this._fileSystemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemIdInput() {
    return this._fileSystemId;
  }

  // file_system_ref - computed: false, optional: true, required: false
  private _fileSystemRef = new DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecFileSystemRefOutputReference(this, "file_system_ref");
  public get fileSystemRef() {
    return this._fileSystemRef;
  }
  public putFileSystemRef(value: DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecFileSystemRef) {
    this._fileSystemRef.internalValue = value;
  }
  public resetFileSystemRef() {
    this._fileSystemRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemRefInput() {
    return this._fileSystemRef.internalValue;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // security_group_refs - computed: false, optional: true, required: false
  private _securityGroupRefs = new DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecSecurityGroupRefsList(this, "security_group_refs", false);
  public get securityGroupRefs() {
    return this._securityGroupRefs;
  }
  public putSecurityGroupRefs(value: DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecSecurityGroupRefs[] | cdktf.IResolvable) {
    this._securityGroupRefs.internalValue = value;
  }
  public resetSecurityGroupRefs() {
    this._securityGroupRefs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupRefsInput() {
    return this._securityGroupRefs.internalValue;
  }

  // security_groups - computed: false, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // subnet_ref - computed: false, optional: true, required: false
  private _subnetRef = new DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecSubnetRefOutputReference(this, "subnet_ref");
  public get subnetRef() {
    return this._subnetRef;
  }
  public putSubnetRef(value: DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecSubnetRef) {
    this._subnetRef.internalValue = value;
  }
  public resetSubnetRef() {
    this._subnetRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetRefInput() {
    return this._subnetRef.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/efs_services_k8s_aws_mount_target_v1alpha1_manifest k8s_efs_services_k8s_aws_mount_target_v1alpha1_manifest}
*/
export class DataK8SEfsServicesK8SAwsMountTargetV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_efs_services_k8s_aws_mount_target_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SEfsServicesK8SAwsMountTargetV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SEfsServicesK8SAwsMountTargetV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SEfsServicesK8SAwsMountTargetV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/efs_services_k8s_aws_mount_target_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SEfsServicesK8SAwsMountTargetV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_efs_services_k8s_aws_mount_target_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/efs_services_k8s_aws_mount_target_v1alpha1_manifest k8s_efs_services_k8s_aws_mount_target_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_efs_services_k8s_aws_mount_target_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.15',
        providerVersionConstraint: '2025.12.15'
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
  private _metadata = new DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpec) {
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
      metadata: dataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SEfsServicesK8SAwsMountTargetV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
