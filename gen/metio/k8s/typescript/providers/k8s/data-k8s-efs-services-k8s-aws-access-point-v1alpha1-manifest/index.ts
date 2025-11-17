// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/efs_services_k8s_aws_access_point_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/efs_services_k8s_aws_access_point_v1alpha1_manifest#metadata DataK8SEfsServicesK8SAwsAccessPointV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestMetadata;
  /**
  * AccessPointSpec defines the desired state of AccessPoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/efs_services_k8s_aws_access_point_v1alpha1_manifest#spec DataK8SEfsServicesK8SAwsAccessPointV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpec;
}
export interface DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/efs_services_k8s_aws_access_point_v1alpha1_manifest#annotations DataK8SEfsServicesK8SAwsAccessPointV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/efs_services_k8s_aws_access_point_v1alpha1_manifest#labels DataK8SEfsServicesK8SAwsAccessPointV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/efs_services_k8s_aws_access_point_v1alpha1_manifest#name DataK8SEfsServicesK8SAwsAccessPointV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/efs_services_k8s_aws_access_point_v1alpha1_manifest#namespace DataK8SEfsServicesK8SAwsAccessPointV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecFileSystemRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/efs_services_k8s_aws_access_point_v1alpha1_manifest#name DataK8SEfsServicesK8SAwsAccessPointV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/efs_services_k8s_aws_access_point_v1alpha1_manifest#namespace DataK8SEfsServicesK8SAwsAccessPointV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecFileSystemRefFromToTerraform(struct?: DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecFileSystemRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecFileSystemRefFromToHclTerraform(struct?: DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecFileSystemRefFrom | cdktf.IResolvable): any {
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

export class DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecFileSystemRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecFileSystemRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecFileSystemRefFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecFileSystemRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/efs_services_k8s_aws_access_point_v1alpha1_manifest#from DataK8SEfsServicesK8SAwsAccessPointV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecFileSystemRefFrom;
}

export function dataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecFileSystemRefToTerraform(struct?: DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecFileSystemRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecFileSystemRefFromToTerraform(struct!.from),
  }
}


export function dataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecFileSystemRefToHclTerraform(struct?: DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecFileSystemRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecFileSystemRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecFileSystemRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecFileSystemRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecFileSystemRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecFileSystemRef | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecFileSystemRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecFileSystemRefFrom) {
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
export interface DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecPosixUser {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/efs_services_k8s_aws_access_point_v1alpha1_manifest#gid DataK8SEfsServicesK8SAwsAccessPointV1Alpha1Manifest#gid}
  */
  readonly gid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/efs_services_k8s_aws_access_point_v1alpha1_manifest#secondary_gi_ds DataK8SEfsServicesK8SAwsAccessPointV1Alpha1Manifest#secondary_gi_ds}
  */
  readonly secondaryGiDs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/efs_services_k8s_aws_access_point_v1alpha1_manifest#uid DataK8SEfsServicesK8SAwsAccessPointV1Alpha1Manifest#uid}
  */
  readonly uid?: number;
}

export function dataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecPosixUserToTerraform(struct?: DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecPosixUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gid: cdktf.numberToTerraform(struct!.gid),
    secondary_gi_ds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.secondaryGiDs),
    uid: cdktf.numberToTerraform(struct!.uid),
  }
}


export function dataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecPosixUserToHclTerraform(struct?: DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecPosixUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gid: {
      value: cdktf.numberToHclTerraform(struct!.gid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secondary_gi_ds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.secondaryGiDs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    uid: {
      value: cdktf.numberToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecPosixUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecPosixUser | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gid !== undefined) {
      hasAnyValues = true;
      internalValueResult.gid = this._gid;
    }
    if (this._secondaryGiDs !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryGiDs = this._secondaryGiDs;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecPosixUser | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gid = undefined;
      this._secondaryGiDs = undefined;
      this._uid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gid = value.gid;
      this._secondaryGiDs = value.secondaryGiDs;
      this._uid = value.uid;
    }
  }

  // gid - computed: false, optional: true, required: false
  private _gid?: number; 
  public get gid() {
    return this.getNumberAttribute('gid');
  }
  public set gid(value: number) {
    this._gid = value;
  }
  public resetGid() {
    this._gid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gidInput() {
    return this._gid;
  }

  // secondary_gi_ds - computed: false, optional: true, required: false
  private _secondaryGiDs?: string[]; 
  public get secondaryGiDs() {
    return this.getListAttribute('secondary_gi_ds');
  }
  public set secondaryGiDs(value: string[]) {
    this._secondaryGiDs = value;
  }
  public resetSecondaryGiDs() {
    this._secondaryGiDs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryGiDsInput() {
    return this._secondaryGiDs;
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: number; 
  public get uid() {
    return this.getNumberAttribute('uid');
  }
  public set uid(value: number) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }
}
export interface DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecRootDirectoryCreationInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/efs_services_k8s_aws_access_point_v1alpha1_manifest#owner_gid DataK8SEfsServicesK8SAwsAccessPointV1Alpha1Manifest#owner_gid}
  */
  readonly ownerGid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/efs_services_k8s_aws_access_point_v1alpha1_manifest#owner_uid DataK8SEfsServicesK8SAwsAccessPointV1Alpha1Manifest#owner_uid}
  */
  readonly ownerUid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/efs_services_k8s_aws_access_point_v1alpha1_manifest#permissions DataK8SEfsServicesK8SAwsAccessPointV1Alpha1Manifest#permissions}
  */
  readonly permissions?: string;
}

export function dataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecRootDirectoryCreationInfoToTerraform(struct?: DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecRootDirectoryCreationInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    owner_gid: cdktf.numberToTerraform(struct!.ownerGid),
    owner_uid: cdktf.numberToTerraform(struct!.ownerUid),
    permissions: cdktf.stringToTerraform(struct!.permissions),
  }
}


export function dataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecRootDirectoryCreationInfoToHclTerraform(struct?: DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecRootDirectoryCreationInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    owner_gid: {
      value: cdktf.numberToHclTerraform(struct!.ownerGid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    owner_uid: {
      value: cdktf.numberToHclTerraform(struct!.ownerUid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    permissions: {
      value: cdktf.stringToHclTerraform(struct!.permissions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecRootDirectoryCreationInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecRootDirectoryCreationInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ownerGid !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownerGid = this._ownerGid;
    }
    if (this._ownerUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownerUid = this._ownerUid;
    }
    if (this._permissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecRootDirectoryCreationInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ownerGid = undefined;
      this._ownerUid = undefined;
      this._permissions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ownerGid = value.ownerGid;
      this._ownerUid = value.ownerUid;
      this._permissions = value.permissions;
    }
  }

  // owner_gid - computed: false, optional: true, required: false
  private _ownerGid?: number; 
  public get ownerGid() {
    return this.getNumberAttribute('owner_gid');
  }
  public set ownerGid(value: number) {
    this._ownerGid = value;
  }
  public resetOwnerGid() {
    this._ownerGid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerGidInput() {
    return this._ownerGid;
  }

  // owner_uid - computed: false, optional: true, required: false
  private _ownerUid?: number; 
  public get ownerUid() {
    return this.getNumberAttribute('owner_uid');
  }
  public set ownerUid(value: number) {
    this._ownerUid = value;
  }
  public resetOwnerUid() {
    this._ownerUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerUidInput() {
    return this._ownerUid;
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions?: string; 
  public get permissions() {
    return this.getStringAttribute('permissions');
  }
  public set permissions(value: string) {
    this._permissions = value;
  }
  public resetPermissions() {
    this._permissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }
}
export interface DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecRootDirectory {
  /**
  * Required if the RootDirectory > Path specified does not exist. Specifies the POSIX IDs and permissions to apply to the access point's RootDirectory > Path. If the access point root directory does not exist, EFS creates it with these settings when a client connects to the access point. When specifying CreationInfo, you must include values for all properties. Amazon EFS creates a root directory only if you have provided the CreationInfo: OwnUid, OwnGID, and permissions for the directory. If you do not provide this information, Amazon EFS does not create the root directory. If the root directory does not exist, attempts to mount using the access point will fail. If you do not provide CreationInfo and the specified RootDirectory does not exist, attempts to mount the file system using the access point will fail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/efs_services_k8s_aws_access_point_v1alpha1_manifest#creation_info DataK8SEfsServicesK8SAwsAccessPointV1Alpha1Manifest#creation_info}
  */
  readonly creationInfo?: DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecRootDirectoryCreationInfo;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/efs_services_k8s_aws_access_point_v1alpha1_manifest#path DataK8SEfsServicesK8SAwsAccessPointV1Alpha1Manifest#path}
  */
  readonly path?: string;
}

export function dataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecRootDirectoryToTerraform(struct?: DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecRootDirectory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    creation_info: dataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecRootDirectoryCreationInfoToTerraform(struct!.creationInfo),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecRootDirectoryToHclTerraform(struct?: DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecRootDirectory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    creation_info: {
      value: dataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecRootDirectoryCreationInfoToHclTerraform(struct!.creationInfo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecRootDirectoryCreationInfo",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecRootDirectoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecRootDirectory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._creationInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.creationInfo = this._creationInfo?.internalValue;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecRootDirectory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._creationInfo.internalValue = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._creationInfo.internalValue = value.creationInfo;
      this._path = value.path;
    }
  }

  // creation_info - computed: false, optional: true, required: false
  private _creationInfo = new DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecRootDirectoryCreationInfoOutputReference(this, "creation_info");
  public get creationInfo() {
    return this._creationInfo;
  }
  public putCreationInfo(value: DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecRootDirectoryCreationInfo) {
    this._creationInfo.internalValue = value;
  }
  public resetCreationInfo() {
    this._creationInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creationInfoInput() {
    return this._creationInfo.internalValue;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/efs_services_k8s_aws_access_point_v1alpha1_manifest#key DataK8SEfsServicesK8SAwsAccessPointV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/efs_services_k8s_aws_access_point_v1alpha1_manifest#value DataK8SEfsServicesK8SAwsAccessPointV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecTagsToTerraform(struct?: DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecTagsToHclTerraform(struct?: DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
}

export class DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecTagsList extends cdktf.ComplexList {
  public internalValue? : DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecTags[] | cdktf.IResolvable

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
  public get(index: number): DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecTagsOutputReference {
    return new DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpec {
  /**
  * The ID of the EFS file system that the access point provides access to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/efs_services_k8s_aws_access_point_v1alpha1_manifest#file_system_id DataK8SEfsServicesK8SAwsAccessPointV1Alpha1Manifest#file_system_id}
  */
  readonly fileSystemId?: string;
  /**
  * AWSResourceReferenceWrapper provides a wrapper around *AWSResourceReference type to provide more user friendly syntax for references using 'from' field Ex: APIIDRef: from: name: my-api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/efs_services_k8s_aws_access_point_v1alpha1_manifest#file_system_ref DataK8SEfsServicesK8SAwsAccessPointV1Alpha1Manifest#file_system_ref}
  */
  readonly fileSystemRef?: DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecFileSystemRef;
  /**
  * The operating system user and group applied to all file system requests made using the access point.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/efs_services_k8s_aws_access_point_v1alpha1_manifest#posix_user DataK8SEfsServicesK8SAwsAccessPointV1Alpha1Manifest#posix_user}
  */
  readonly posixUser?: DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecPosixUser;
  /**
  * Specifies the directory on the EFS file system that the access point exposes as the root directory of your file system to NFS clients using the access point. The clients using the access point can only access the root directory and below. If the RootDirectory > Path specified does not exist, Amazon EFS creates it and applies the CreationInfo settings when a client connects to an access point. When specifying a RootDirectory, you must provide the Path, and the CreationInfo. Amazon EFS creates a root directory only if you have provided the CreationInfo: OwnUid, OwnGID, and permissions for the directory. If you do not provide this information, Amazon EFS does not create the root directory. If the root directory does not exist, attempts to mount using the access point will fail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/efs_services_k8s_aws_access_point_v1alpha1_manifest#root_directory DataK8SEfsServicesK8SAwsAccessPointV1Alpha1Manifest#root_directory}
  */
  readonly rootDirectory?: DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecRootDirectory;
  /**
  * Creates tags associated with the access point. Each tag is a key-value pair, each key must be unique. For more information, see Tagging Amazon Web Services resources (https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in the Amazon Web Services General Reference Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/efs_services_k8s_aws_access_point_v1alpha1_manifest#tags DataK8SEfsServicesK8SAwsAccessPointV1Alpha1Manifest#tags}
  */
  readonly tags?: DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecTags[] | cdktf.IResolvable;
}

export function dataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecToTerraform(struct?: DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_system_id: cdktf.stringToTerraform(struct!.fileSystemId),
    file_system_ref: dataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecFileSystemRefToTerraform(struct!.fileSystemRef),
    posix_user: dataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecPosixUserToTerraform(struct!.posixUser),
    root_directory: dataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecRootDirectoryToTerraform(struct!.rootDirectory),
    tags: cdktf.listMapper(dataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecTagsToTerraform, false)(struct!.tags),
  }
}


export function dataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpec | cdktf.IResolvable): any {
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
      value: dataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecFileSystemRefToHclTerraform(struct!.fileSystemRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecFileSystemRef",
    },
    posix_user: {
      value: dataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecPosixUserToHclTerraform(struct!.posixUser),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecPosixUser",
    },
    root_directory: {
      value: dataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecRootDirectoryToHclTerraform(struct!.rootDirectory),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecRootDirectory",
    },
    tags: {
      value: cdktf.listMapperHcl(dataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
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
    if (this._posixUser?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.posixUser = this._posixUser?.internalValue;
    }
    if (this._rootDirectory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootDirectory = this._rootDirectory?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileSystemId = undefined;
      this._fileSystemRef.internalValue = undefined;
      this._posixUser.internalValue = undefined;
      this._rootDirectory.internalValue = undefined;
      this._tags.internalValue = undefined;
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
      this._posixUser.internalValue = value.posixUser;
      this._rootDirectory.internalValue = value.rootDirectory;
      this._tags.internalValue = value.tags;
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
  private _fileSystemRef = new DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecFileSystemRefOutputReference(this, "file_system_ref");
  public get fileSystemRef() {
    return this._fileSystemRef;
  }
  public putFileSystemRef(value: DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecFileSystemRef) {
    this._fileSystemRef.internalValue = value;
  }
  public resetFileSystemRef() {
    this._fileSystemRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemRefInput() {
    return this._fileSystemRef.internalValue;
  }

  // posix_user - computed: false, optional: true, required: false
  private _posixUser = new DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecPosixUserOutputReference(this, "posix_user");
  public get posixUser() {
    return this._posixUser;
  }
  public putPosixUser(value: DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecPosixUser) {
    this._posixUser.internalValue = value;
  }
  public resetPosixUser() {
    this._posixUser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get posixUserInput() {
    return this._posixUser.internalValue;
  }

  // root_directory - computed: false, optional: true, required: false
  private _rootDirectory = new DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecRootDirectoryOutputReference(this, "root_directory");
  public get rootDirectory() {
    return this._rootDirectory;
  }
  public putRootDirectory(value: DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecRootDirectory) {
    this._rootDirectory.internalValue = value;
  }
  public resetRootDirectory() {
    this._rootDirectory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootDirectoryInput() {
    return this._rootDirectory.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/efs_services_k8s_aws_access_point_v1alpha1_manifest k8s_efs_services_k8s_aws_access_point_v1alpha1_manifest}
*/
export class DataK8SEfsServicesK8SAwsAccessPointV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_efs_services_k8s_aws_access_point_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SEfsServicesK8SAwsAccessPointV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SEfsServicesK8SAwsAccessPointV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SEfsServicesK8SAwsAccessPointV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/efs_services_k8s_aws_access_point_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SEfsServicesK8SAwsAccessPointV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_efs_services_k8s_aws_access_point_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/efs_services_k8s_aws_access_point_v1alpha1_manifest k8s_efs_services_k8s_aws_access_point_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_efs_services_k8s_aws_access_point_v1alpha1_manifest',
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
  private _metadata = new DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpec) {
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
      metadata: dataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SEfsServicesK8SAwsAccessPointV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
