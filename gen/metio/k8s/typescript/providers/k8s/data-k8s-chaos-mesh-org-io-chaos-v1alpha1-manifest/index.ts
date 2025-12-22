// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_io_chaos_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_io_chaos_v1alpha1_manifest#metadata DataK8SChaosMeshOrgIoChaosV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestMetadata;
  /**
  * IOChaosSpec defines the desired state of IOChaos
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_io_chaos_v1alpha1_manifest#spec DataK8SChaosMeshOrgIoChaosV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpec;
}
export interface DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_io_chaos_v1alpha1_manifest#annotations DataK8SChaosMeshOrgIoChaosV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_io_chaos_v1alpha1_manifest#labels DataK8SChaosMeshOrgIoChaosV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_io_chaos_v1alpha1_manifest#name DataK8SChaosMeshOrgIoChaosV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_io_chaos_v1alpha1_manifest#namespace DataK8SChaosMeshOrgIoChaosV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SChaosMeshOrgIoChaosV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SChaosMeshOrgIoChaosV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecAttrAtime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_io_chaos_v1alpha1_manifest#nsec DataK8SChaosMeshOrgIoChaosV1Alpha1Manifest#nsec}
  */
  readonly nsec: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_io_chaos_v1alpha1_manifest#sec DataK8SChaosMeshOrgIoChaosV1Alpha1Manifest#sec}
  */
  readonly sec: number;
}

export function dataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecAttrAtimeToTerraform(struct?: DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecAttrAtime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nsec: cdktf.numberToTerraform(struct!.nsec),
    sec: cdktf.numberToTerraform(struct!.sec),
  }
}


export function dataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecAttrAtimeToHclTerraform(struct?: DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecAttrAtime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nsec: {
      value: cdktf.numberToHclTerraform(struct!.nsec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sec: {
      value: cdktf.numberToHclTerraform(struct!.sec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecAttrAtimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecAttrAtime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nsec !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsec = this._nsec;
    }
    if (this._sec !== undefined) {
      hasAnyValues = true;
      internalValueResult.sec = this._sec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecAttrAtime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nsec = undefined;
      this._sec = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nsec = value.nsec;
      this._sec = value.sec;
    }
  }

  // nsec - computed: false, optional: false, required: true
  private _nsec?: number; 
  public get nsec() {
    return this.getNumberAttribute('nsec');
  }
  public set nsec(value: number) {
    this._nsec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nsecInput() {
    return this._nsec;
  }

  // sec - computed: false, optional: false, required: true
  private _sec?: number; 
  public get sec() {
    return this.getNumberAttribute('sec');
  }
  public set sec(value: number) {
    this._sec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secInput() {
    return this._sec;
  }
}
export interface DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecAttrCtime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_io_chaos_v1alpha1_manifest#nsec DataK8SChaosMeshOrgIoChaosV1Alpha1Manifest#nsec}
  */
  readonly nsec: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_io_chaos_v1alpha1_manifest#sec DataK8SChaosMeshOrgIoChaosV1Alpha1Manifest#sec}
  */
  readonly sec: number;
}

export function dataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecAttrCtimeToTerraform(struct?: DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecAttrCtime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nsec: cdktf.numberToTerraform(struct!.nsec),
    sec: cdktf.numberToTerraform(struct!.sec),
  }
}


export function dataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecAttrCtimeToHclTerraform(struct?: DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecAttrCtime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nsec: {
      value: cdktf.numberToHclTerraform(struct!.nsec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sec: {
      value: cdktf.numberToHclTerraform(struct!.sec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecAttrCtimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecAttrCtime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nsec !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsec = this._nsec;
    }
    if (this._sec !== undefined) {
      hasAnyValues = true;
      internalValueResult.sec = this._sec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecAttrCtime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nsec = undefined;
      this._sec = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nsec = value.nsec;
      this._sec = value.sec;
    }
  }

  // nsec - computed: false, optional: false, required: true
  private _nsec?: number; 
  public get nsec() {
    return this.getNumberAttribute('nsec');
  }
  public set nsec(value: number) {
    this._nsec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nsecInput() {
    return this._nsec;
  }

  // sec - computed: false, optional: false, required: true
  private _sec?: number; 
  public get sec() {
    return this.getNumberAttribute('sec');
  }
  public set sec(value: number) {
    this._sec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secInput() {
    return this._sec;
  }
}
export interface DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecAttrMtime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_io_chaos_v1alpha1_manifest#nsec DataK8SChaosMeshOrgIoChaosV1Alpha1Manifest#nsec}
  */
  readonly nsec: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_io_chaos_v1alpha1_manifest#sec DataK8SChaosMeshOrgIoChaosV1Alpha1Manifest#sec}
  */
  readonly sec: number;
}

export function dataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecAttrMtimeToTerraform(struct?: DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecAttrMtime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nsec: cdktf.numberToTerraform(struct!.nsec),
    sec: cdktf.numberToTerraform(struct!.sec),
  }
}


export function dataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecAttrMtimeToHclTerraform(struct?: DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecAttrMtime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nsec: {
      value: cdktf.numberToHclTerraform(struct!.nsec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sec: {
      value: cdktf.numberToHclTerraform(struct!.sec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecAttrMtimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecAttrMtime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nsec !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsec = this._nsec;
    }
    if (this._sec !== undefined) {
      hasAnyValues = true;
      internalValueResult.sec = this._sec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecAttrMtime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nsec = undefined;
      this._sec = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nsec = value.nsec;
      this._sec = value.sec;
    }
  }

  // nsec - computed: false, optional: false, required: true
  private _nsec?: number; 
  public get nsec() {
    return this.getNumberAttribute('nsec');
  }
  public set nsec(value: number) {
    this._nsec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nsecInput() {
    return this._nsec;
  }

  // sec - computed: false, optional: false, required: true
  private _sec?: number; 
  public get sec() {
    return this.getNumberAttribute('sec');
  }
  public set sec(value: number) {
    this._sec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secInput() {
    return this._sec;
  }
}
export interface DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecAttr {
  /**
  * Timespec represents a time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_io_chaos_v1alpha1_manifest#atime DataK8SChaosMeshOrgIoChaosV1Alpha1Manifest#atime}
  */
  readonly atime?: DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecAttrAtime;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_io_chaos_v1alpha1_manifest#blocks DataK8SChaosMeshOrgIoChaosV1Alpha1Manifest#blocks}
  */
  readonly blocks?: number;
  /**
  * Timespec represents a time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_io_chaos_v1alpha1_manifest#ctime DataK8SChaosMeshOrgIoChaosV1Alpha1Manifest#ctime}
  */
  readonly ctime?: DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecAttrCtime;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_io_chaos_v1alpha1_manifest#gid DataK8SChaosMeshOrgIoChaosV1Alpha1Manifest#gid}
  */
  readonly gid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_io_chaos_v1alpha1_manifest#ino DataK8SChaosMeshOrgIoChaosV1Alpha1Manifest#ino}
  */
  readonly ino?: number;
  /**
  * FileType represents type of file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_io_chaos_v1alpha1_manifest#kind DataK8SChaosMeshOrgIoChaosV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Timespec represents a time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_io_chaos_v1alpha1_manifest#mtime DataK8SChaosMeshOrgIoChaosV1Alpha1Manifest#mtime}
  */
  readonly mtime?: DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecAttrMtime;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_io_chaos_v1alpha1_manifest#nlink DataK8SChaosMeshOrgIoChaosV1Alpha1Manifest#nlink}
  */
  readonly nlink?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_io_chaos_v1alpha1_manifest#perm DataK8SChaosMeshOrgIoChaosV1Alpha1Manifest#perm}
  */
  readonly perm?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_io_chaos_v1alpha1_manifest#rdev DataK8SChaosMeshOrgIoChaosV1Alpha1Manifest#rdev}
  */
  readonly rdev?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_io_chaos_v1alpha1_manifest#size DataK8SChaosMeshOrgIoChaosV1Alpha1Manifest#size}
  */
  readonly size?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_io_chaos_v1alpha1_manifest#uid DataK8SChaosMeshOrgIoChaosV1Alpha1Manifest#uid}
  */
  readonly uid?: number;
}

export function dataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecAttrToTerraform(struct?: DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecAttr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    atime: dataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecAttrAtimeToTerraform(struct!.atime),
    blocks: cdktf.numberToTerraform(struct!.blocks),
    ctime: dataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecAttrCtimeToTerraform(struct!.ctime),
    gid: cdktf.numberToTerraform(struct!.gid),
    ino: cdktf.numberToTerraform(struct!.ino),
    kind: cdktf.stringToTerraform(struct!.kind),
    mtime: dataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecAttrMtimeToTerraform(struct!.mtime),
    nlink: cdktf.numberToTerraform(struct!.nlink),
    perm: cdktf.numberToTerraform(struct!.perm),
    rdev: cdktf.numberToTerraform(struct!.rdev),
    size: cdktf.numberToTerraform(struct!.size),
    uid: cdktf.numberToTerraform(struct!.uid),
  }
}


export function dataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecAttrToHclTerraform(struct?: DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecAttr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    atime: {
      value: dataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecAttrAtimeToHclTerraform(struct!.atime),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecAttrAtime",
    },
    blocks: {
      value: cdktf.numberToHclTerraform(struct!.blocks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ctime: {
      value: dataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecAttrCtimeToHclTerraform(struct!.ctime),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecAttrCtime",
    },
    gid: {
      value: cdktf.numberToHclTerraform(struct!.gid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ino: {
      value: cdktf.numberToHclTerraform(struct!.ino),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtime: {
      value: dataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecAttrMtimeToHclTerraform(struct!.mtime),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecAttrMtime",
    },
    nlink: {
      value: cdktf.numberToHclTerraform(struct!.nlink),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    perm: {
      value: cdktf.numberToHclTerraform(struct!.perm),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rdev: {
      value: cdktf.numberToHclTerraform(struct!.rdev),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecAttrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecAttr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._atime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.atime = this._atime?.internalValue;
    }
    if (this._blocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.blocks = this._blocks;
    }
    if (this._ctime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ctime = this._ctime?.internalValue;
    }
    if (this._gid !== undefined) {
      hasAnyValues = true;
      internalValueResult.gid = this._gid;
    }
    if (this._ino !== undefined) {
      hasAnyValues = true;
      internalValueResult.ino = this._ino;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._mtime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtime = this._mtime?.internalValue;
    }
    if (this._nlink !== undefined) {
      hasAnyValues = true;
      internalValueResult.nlink = this._nlink;
    }
    if (this._perm !== undefined) {
      hasAnyValues = true;
      internalValueResult.perm = this._perm;
    }
    if (this._rdev !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdev = this._rdev;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecAttr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._atime.internalValue = undefined;
      this._blocks = undefined;
      this._ctime.internalValue = undefined;
      this._gid = undefined;
      this._ino = undefined;
      this._kind = undefined;
      this._mtime.internalValue = undefined;
      this._nlink = undefined;
      this._perm = undefined;
      this._rdev = undefined;
      this._size = undefined;
      this._uid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._atime.internalValue = value.atime;
      this._blocks = value.blocks;
      this._ctime.internalValue = value.ctime;
      this._gid = value.gid;
      this._ino = value.ino;
      this._kind = value.kind;
      this._mtime.internalValue = value.mtime;
      this._nlink = value.nlink;
      this._perm = value.perm;
      this._rdev = value.rdev;
      this._size = value.size;
      this._uid = value.uid;
    }
  }

  // atime - computed: false, optional: true, required: false
  private _atime = new DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecAttrAtimeOutputReference(this, "atime");
  public get atime() {
    return this._atime;
  }
  public putAtime(value: DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecAttrAtime) {
    this._atime.internalValue = value;
  }
  public resetAtime() {
    this._atime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atimeInput() {
    return this._atime.internalValue;
  }

  // blocks - computed: false, optional: true, required: false
  private _blocks?: number; 
  public get blocks() {
    return this.getNumberAttribute('blocks');
  }
  public set blocks(value: number) {
    this._blocks = value;
  }
  public resetBlocks() {
    this._blocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blocksInput() {
    return this._blocks;
  }

  // ctime - computed: false, optional: true, required: false
  private _ctime = new DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecAttrCtimeOutputReference(this, "ctime");
  public get ctime() {
    return this._ctime;
  }
  public putCtime(value: DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecAttrCtime) {
    this._ctime.internalValue = value;
  }
  public resetCtime() {
    this._ctime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ctimeInput() {
    return this._ctime.internalValue;
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

  // ino - computed: false, optional: true, required: false
  private _ino?: number; 
  public get ino() {
    return this.getNumberAttribute('ino');
  }
  public set ino(value: number) {
    this._ino = value;
  }
  public resetIno() {
    this._ino = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inoInput() {
    return this._ino;
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

  // mtime - computed: false, optional: true, required: false
  private _mtime = new DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecAttrMtimeOutputReference(this, "mtime");
  public get mtime() {
    return this._mtime;
  }
  public putMtime(value: DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecAttrMtime) {
    this._mtime.internalValue = value;
  }
  public resetMtime() {
    this._mtime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtimeInput() {
    return this._mtime.internalValue;
  }

  // nlink - computed: false, optional: true, required: false
  private _nlink?: number; 
  public get nlink() {
    return this.getNumberAttribute('nlink');
  }
  public set nlink(value: number) {
    this._nlink = value;
  }
  public resetNlink() {
    this._nlink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nlinkInput() {
    return this._nlink;
  }

  // perm - computed: false, optional: true, required: false
  private _perm?: number; 
  public get perm() {
    return this.getNumberAttribute('perm');
  }
  public set perm(value: number) {
    this._perm = value;
  }
  public resetPerm() {
    this._perm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permInput() {
    return this._perm;
  }

  // rdev - computed: false, optional: true, required: false
  private _rdev?: number; 
  public get rdev() {
    return this.getNumberAttribute('rdev');
  }
  public set rdev(value: number) {
    this._rdev = value;
  }
  public resetRdev() {
    this._rdev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdevInput() {
    return this._rdev;
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
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
export interface DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecMistake {
  /**
  * Filling determines what is filled in the mistake data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_io_chaos_v1alpha1_manifest#filling DataK8SChaosMeshOrgIoChaosV1Alpha1Manifest#filling}
  */
  readonly filling?: string;
  /**
  * Max length of each wrong data segment in bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_io_chaos_v1alpha1_manifest#max_length DataK8SChaosMeshOrgIoChaosV1Alpha1Manifest#max_length}
  */
  readonly maxLength?: number;
  /**
  * There will be [1, MaxOccurrences] segments of wrong data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_io_chaos_v1alpha1_manifest#max_occurrences DataK8SChaosMeshOrgIoChaosV1Alpha1Manifest#max_occurrences}
  */
  readonly maxOccurrences?: number;
}

export function dataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecMistakeToTerraform(struct?: DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecMistake | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filling: cdktf.stringToTerraform(struct!.filling),
    max_length: cdktf.numberToTerraform(struct!.maxLength),
    max_occurrences: cdktf.numberToTerraform(struct!.maxOccurrences),
  }
}


export function dataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecMistakeToHclTerraform(struct?: DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecMistake | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filling: {
      value: cdktf.stringToHclTerraform(struct!.filling),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_length: {
      value: cdktf.numberToHclTerraform(struct!.maxLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_occurrences: {
      value: cdktf.numberToHclTerraform(struct!.maxOccurrences),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecMistakeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecMistake | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filling !== undefined) {
      hasAnyValues = true;
      internalValueResult.filling = this._filling;
    }
    if (this._maxLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLength = this._maxLength;
    }
    if (this._maxOccurrences !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxOccurrences = this._maxOccurrences;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecMistake | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filling = undefined;
      this._maxLength = undefined;
      this._maxOccurrences = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filling = value.filling;
      this._maxLength = value.maxLength;
      this._maxOccurrences = value.maxOccurrences;
    }
  }

  // filling - computed: false, optional: true, required: false
  private _filling?: string; 
  public get filling() {
    return this.getStringAttribute('filling');
  }
  public set filling(value: string) {
    this._filling = value;
  }
  public resetFilling() {
    this._filling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fillingInput() {
    return this._filling;
  }

  // max_length - computed: false, optional: true, required: false
  private _maxLength?: number; 
  public get maxLength() {
    return this.getNumberAttribute('max_length');
  }
  public set maxLength(value: number) {
    this._maxLength = value;
  }
  public resetMaxLength() {
    this._maxLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLengthInput() {
    return this._maxLength;
  }

  // max_occurrences - computed: false, optional: true, required: false
  private _maxOccurrences?: number; 
  public get maxOccurrences() {
    return this.getNumberAttribute('max_occurrences');
  }
  public set maxOccurrences(value: number) {
    this._maxOccurrences = value;
  }
  public resetMaxOccurrences() {
    this._maxOccurrences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxOccurrencesInput() {
    return this._maxOccurrences;
  }
}
export interface DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecSelectorExpressionSelectors {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_io_chaos_v1alpha1_manifest#key DataK8SChaosMeshOrgIoChaosV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_io_chaos_v1alpha1_manifest#operator DataK8SChaosMeshOrgIoChaosV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_io_chaos_v1alpha1_manifest#values DataK8SChaosMeshOrgIoChaosV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecSelectorExpressionSelectorsToTerraform(struct?: DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecSelectorExpressionSelectors | cdktf.IResolvable): any {
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


export function dataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecSelectorExpressionSelectorsToHclTerraform(struct?: DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecSelectorExpressionSelectors | cdktf.IResolvable): any {
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

export class DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecSelectorExpressionSelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecSelectorExpressionSelectors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecSelectorExpressionSelectors | cdktf.IResolvable | undefined) {
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

export class DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecSelectorExpressionSelectorsList extends cdktf.ComplexList {
  public internalValue? : DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecSelectorExpressionSelectors[] | cdktf.IResolvable

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
  public get(index: number): DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecSelectorExpressionSelectorsOutputReference {
    return new DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecSelectorExpressionSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecSelector {
  /**
  * Map of string keys and values that can be used to select objects. A selector based on annotations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_io_chaos_v1alpha1_manifest#annotation_selectors DataK8SChaosMeshOrgIoChaosV1Alpha1Manifest#annotation_selectors}
  */
  readonly annotationSelectors?: { [key: string]: string };
  /**
  * a slice of label selector expressions that can be used to select objects. A list of selectors based on set-based label expressions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_io_chaos_v1alpha1_manifest#expression_selectors DataK8SChaosMeshOrgIoChaosV1Alpha1Manifest#expression_selectors}
  */
  readonly expressionSelectors?: DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecSelectorExpressionSelectors[] | cdktf.IResolvable;
  /**
  * Map of string keys and values that can be used to select objects. A selector based on fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_io_chaos_v1alpha1_manifest#field_selectors DataK8SChaosMeshOrgIoChaosV1Alpha1Manifest#field_selectors}
  */
  readonly fieldSelectors?: { [key: string]: string };
  /**
  * Map of string keys and values that can be used to select objects. A selector based on labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_io_chaos_v1alpha1_manifest#label_selectors DataK8SChaosMeshOrgIoChaosV1Alpha1Manifest#label_selectors}
  */
  readonly labelSelectors?: { [key: string]: string };
  /**
  * Namespaces is a set of namespace to which objects belong.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_io_chaos_v1alpha1_manifest#namespaces DataK8SChaosMeshOrgIoChaosV1Alpha1Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Map of string keys and values that can be used to select nodes. Selector which must match a node's labels, and objects must belong to these selected nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_io_chaos_v1alpha1_manifest#node_selectors DataK8SChaosMeshOrgIoChaosV1Alpha1Manifest#node_selectors}
  */
  readonly nodeSelectors?: { [key: string]: string };
  /**
  * Nodes is a set of node name and objects must belong to these nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_io_chaos_v1alpha1_manifest#nodes DataK8SChaosMeshOrgIoChaosV1Alpha1Manifest#nodes}
  */
  readonly nodes?: string[];
  /**
  * PodPhaseSelectors is a set of condition of a pod at the current time. supported value: Pending / Running / Succeeded / Failed / Unknown
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_io_chaos_v1alpha1_manifest#pod_phase_selectors DataK8SChaosMeshOrgIoChaosV1Alpha1Manifest#pod_phase_selectors}
  */
  readonly podPhaseSelectors?: string[];
  /**
  * Pods is a map of string keys and a set values that used to select pods. The key defines the namespace which pods belong, and the each values is a set of pod names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_io_chaos_v1alpha1_manifest#pods DataK8SChaosMeshOrgIoChaosV1Alpha1Manifest#pods}
  */
  readonly pods?: { [key: string]: string[] } | cdktf.IResolvable;
}

export function dataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecSelectorToTerraform(struct?: DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation_selectors: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotationSelectors),
    expression_selectors: cdktf.listMapper(dataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecSelectorExpressionSelectorsToTerraform, false)(struct!.expressionSelectors),
    field_selectors: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.fieldSelectors),
    label_selectors: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labelSelectors),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    node_selectors: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelectors),
    nodes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nodes),
    pod_phase_selectors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.podPhaseSelectors),
    pods: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.pods),
  }
}


export function dataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecSelectorToHclTerraform(struct?: DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotation_selectors: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotationSelectors),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    expression_selectors: {
      value: cdktf.listMapperHcl(dataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecSelectorExpressionSelectorsToHclTerraform, false)(struct!.expressionSelectors),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecSelectorExpressionSelectorsList",
    },
    field_selectors: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.fieldSelectors),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    label_selectors: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labelSelectors),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    node_selectors: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelectors),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    nodes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nodes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pod_phase_selectors: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.podPhaseSelectors),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pods: {
      value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct!.pods),
      isBlock: false,
      type: "map",
      storageClassType: "stringListMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotationSelectors !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotationSelectors = this._annotationSelectors;
    }
    if (this._expressionSelectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressionSelectors = this._expressionSelectors?.internalValue;
    }
    if (this._fieldSelectors !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldSelectors = this._fieldSelectors;
    }
    if (this._labelSelectors !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelectors = this._labelSelectors;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._nodeSelectors !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelectors = this._nodeSelectors;
    }
    if (this._nodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodes = this._nodes;
    }
    if (this._podPhaseSelectors !== undefined) {
      hasAnyValues = true;
      internalValueResult.podPhaseSelectors = this._podPhaseSelectors;
    }
    if (this._pods !== undefined) {
      hasAnyValues = true;
      internalValueResult.pods = this._pods;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotationSelectors = undefined;
      this._expressionSelectors.internalValue = undefined;
      this._fieldSelectors = undefined;
      this._labelSelectors = undefined;
      this._namespaces = undefined;
      this._nodeSelectors = undefined;
      this._nodes = undefined;
      this._podPhaseSelectors = undefined;
      this._pods = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotationSelectors = value.annotationSelectors;
      this._expressionSelectors.internalValue = value.expressionSelectors;
      this._fieldSelectors = value.fieldSelectors;
      this._labelSelectors = value.labelSelectors;
      this._namespaces = value.namespaces;
      this._nodeSelectors = value.nodeSelectors;
      this._nodes = value.nodes;
      this._podPhaseSelectors = value.podPhaseSelectors;
      this._pods = value.pods;
    }
  }

  // annotation_selectors - computed: false, optional: true, required: false
  private _annotationSelectors?: { [key: string]: string }; 
  public get annotationSelectors() {
    return this.getStringMapAttribute('annotation_selectors');
  }
  public set annotationSelectors(value: { [key: string]: string }) {
    this._annotationSelectors = value;
  }
  public resetAnnotationSelectors() {
    this._annotationSelectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationSelectorsInput() {
    return this._annotationSelectors;
  }

  // expression_selectors - computed: false, optional: true, required: false
  private _expressionSelectors = new DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecSelectorExpressionSelectorsList(this, "expression_selectors", false);
  public get expressionSelectors() {
    return this._expressionSelectors;
  }
  public putExpressionSelectors(value: DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecSelectorExpressionSelectors[] | cdktf.IResolvable) {
    this._expressionSelectors.internalValue = value;
  }
  public resetExpressionSelectors() {
    this._expressionSelectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionSelectorsInput() {
    return this._expressionSelectors.internalValue;
  }

  // field_selectors - computed: false, optional: true, required: false
  private _fieldSelectors?: { [key: string]: string }; 
  public get fieldSelectors() {
    return this.getStringMapAttribute('field_selectors');
  }
  public set fieldSelectors(value: { [key: string]: string }) {
    this._fieldSelectors = value;
  }
  public resetFieldSelectors() {
    this._fieldSelectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldSelectorsInput() {
    return this._fieldSelectors;
  }

  // label_selectors - computed: false, optional: true, required: false
  private _labelSelectors?: { [key: string]: string }; 
  public get labelSelectors() {
    return this.getStringMapAttribute('label_selectors');
  }
  public set labelSelectors(value: { [key: string]: string }) {
    this._labelSelectors = value;
  }
  public resetLabelSelectors() {
    this._labelSelectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorsInput() {
    return this._labelSelectors;
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

  // node_selectors - computed: false, optional: true, required: false
  private _nodeSelectors?: { [key: string]: string }; 
  public get nodeSelectors() {
    return this.getStringMapAttribute('node_selectors');
  }
  public set nodeSelectors(value: { [key: string]: string }) {
    this._nodeSelectors = value;
  }
  public resetNodeSelectors() {
    this._nodeSelectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorsInput() {
    return this._nodeSelectors;
  }

  // nodes - computed: false, optional: true, required: false
  private _nodes?: string[]; 
  public get nodes() {
    return this.getListAttribute('nodes');
  }
  public set nodes(value: string[]) {
    this._nodes = value;
  }
  public resetNodes() {
    this._nodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes;
  }

  // pod_phase_selectors - computed: false, optional: true, required: false
  private _podPhaseSelectors?: string[]; 
  public get podPhaseSelectors() {
    return this.getListAttribute('pod_phase_selectors');
  }
  public set podPhaseSelectors(value: string[]) {
    this._podPhaseSelectors = value;
  }
  public resetPodPhaseSelectors() {
    this._podPhaseSelectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podPhaseSelectorsInput() {
    return this._podPhaseSelectors;
  }

  // pods - computed: false, optional: true, required: false
  private _pods?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get pods() {
    return this.interpolationForAttribute('pods');
  }
  public set pods(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._pods = value;
  }
  public resetPods() {
    this._pods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podsInput() {
    return this._pods;
  }
}
export interface DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpec {
  /**
  * Action defines the specific pod chaos action. Supported action: latency / fault / attrOverride / mistake
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_io_chaos_v1alpha1_manifest#action DataK8SChaosMeshOrgIoChaosV1Alpha1Manifest#action}
  */
  readonly action: string;
  /**
  * Attr defines the overrided attribution
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_io_chaos_v1alpha1_manifest#attr DataK8SChaosMeshOrgIoChaosV1Alpha1Manifest#attr}
  */
  readonly attr?: DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecAttr;
  /**
  * ContainerNames indicates list of the name of affected container. If not set, the first container will be injected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_io_chaos_v1alpha1_manifest#container_names DataK8SChaosMeshOrgIoChaosV1Alpha1Manifest#container_names}
  */
  readonly containerNames?: string[];
  /**
  * Delay defines the value of I/O chaos action delay. A delay string is a possibly signed sequence of decimal numbers, each with optional fraction and a unit suffix, such as '300ms'. Valid time units are 'ns', 'us' (or 'µs'), 'ms', 's', 'm', 'h'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_io_chaos_v1alpha1_manifest#delay DataK8SChaosMeshOrgIoChaosV1Alpha1Manifest#delay}
  */
  readonly delay?: string;
  /**
  * Duration represents the duration of the chaos action. It is required when the action is 'PodFailureAction'. A duration string is a possibly signed sequence of decimal numbers, each with optional fraction and a unit suffix, such as '300ms', '-1.5h' or '2h45m'. Valid time units are 'ns', 'us' (or 'µs'), 'ms', 's', 'm', 'h'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_io_chaos_v1alpha1_manifest#duration DataK8SChaosMeshOrgIoChaosV1Alpha1Manifest#duration}
  */
  readonly duration?: string;
  /**
  * Errno defines the error code that returned by I/O action. refer to: https://www-numi.fnal.gov/offline_software/srt_public_context/WebDocs/Errors/unix_system_errors.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_io_chaos_v1alpha1_manifest#errno DataK8SChaosMeshOrgIoChaosV1Alpha1Manifest#errno}
  */
  readonly errno?: number;
  /**
  * Methods defines the I/O methods for injecting I/O chaos action. default: all I/O methods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_io_chaos_v1alpha1_manifest#methods DataK8SChaosMeshOrgIoChaosV1Alpha1Manifest#methods}
  */
  readonly methods?: string[];
  /**
  * Mistake defines what types of incorrectness are injected to IO operations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_io_chaos_v1alpha1_manifest#mistake DataK8SChaosMeshOrgIoChaosV1Alpha1Manifest#mistake}
  */
  readonly mistake?: DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecMistake;
  /**
  * Mode defines the mode to run chaos action. Supported mode: one / all / fixed / fixed-percent / random-max-percent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_io_chaos_v1alpha1_manifest#mode DataK8SChaosMeshOrgIoChaosV1Alpha1Manifest#mode}
  */
  readonly mode: string;
  /**
  * Path defines the path of files for injecting I/O chaos action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_io_chaos_v1alpha1_manifest#path DataK8SChaosMeshOrgIoChaosV1Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * Percent defines the percentage of injection errors and provides a number from 0-100. default: 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_io_chaos_v1alpha1_manifest#percent DataK8SChaosMeshOrgIoChaosV1Alpha1Manifest#percent}
  */
  readonly percent?: number;
  /**
  * RemoteCluster represents the remote cluster where the chaos will be deployed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_io_chaos_v1alpha1_manifest#remote_cluster DataK8SChaosMeshOrgIoChaosV1Alpha1Manifest#remote_cluster}
  */
  readonly remoteCluster?: string;
  /**
  * Selector is used to select pods that are used to inject chaos action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_io_chaos_v1alpha1_manifest#selector DataK8SChaosMeshOrgIoChaosV1Alpha1Manifest#selector}
  */
  readonly selector: DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecSelector;
  /**
  * Value is required when the mode is set to 'FixedMode' / 'FixedPercentMode' / 'RandomMaxPercentMode'. If 'FixedMode', provide an integer of pods to do chaos action. If 'FixedPercentMode', provide a number from 0-100 to specify the percent of pods the server can do chaos action. IF 'RandomMaxPercentMode', provide a number from 0-100 to specify the max percent of pods to do chaos action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_io_chaos_v1alpha1_manifest#value DataK8SChaosMeshOrgIoChaosV1Alpha1Manifest#value}
  */
  readonly value?: string;
  /**
  * VolumePath represents the mount path of injected volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_io_chaos_v1alpha1_manifest#volume_path DataK8SChaosMeshOrgIoChaosV1Alpha1Manifest#volume_path}
  */
  readonly volumePath: string;
}

export function dataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecToTerraform(struct?: DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    attr: dataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecAttrToTerraform(struct!.attr),
    container_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.containerNames),
    delay: cdktf.stringToTerraform(struct!.delay),
    duration: cdktf.stringToTerraform(struct!.duration),
    errno: cdktf.numberToTerraform(struct!.errno),
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
    mistake: dataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecMistakeToTerraform(struct!.mistake),
    mode: cdktf.stringToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
    percent: cdktf.numberToTerraform(struct!.percent),
    remote_cluster: cdktf.stringToTerraform(struct!.remoteCluster),
    selector: dataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecSelectorToTerraform(struct!.selector),
    value: cdktf.stringToTerraform(struct!.value),
    volume_path: cdktf.stringToTerraform(struct!.volumePath),
  }
}


export function dataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attr: {
      value: dataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecAttrToHclTerraform(struct!.attr),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecAttr",
    },
    container_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.containerNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    delay: {
      value: cdktf.stringToHclTerraform(struct!.delay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    errno: {
      value: cdktf.numberToHclTerraform(struct!.errno),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.methods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mistake: {
      value: dataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecMistakeToHclTerraform(struct!.mistake),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecMistake",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    percent: {
      value: cdktf.numberToHclTerraform(struct!.percent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    remote_cluster: {
      value: cdktf.stringToHclTerraform(struct!.remoteCluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: dataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecSelector",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_path: {
      value: cdktf.stringToHclTerraform(struct!.volumePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._attr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attr = this._attr?.internalValue;
    }
    if (this._containerNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerNames = this._containerNames;
    }
    if (this._delay !== undefined) {
      hasAnyValues = true;
      internalValueResult.delay = this._delay;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._errno !== undefined) {
      hasAnyValues = true;
      internalValueResult.errno = this._errno;
    }
    if (this._methods !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods;
    }
    if (this._mistake?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mistake = this._mistake?.internalValue;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._percent !== undefined) {
      hasAnyValues = true;
      internalValueResult.percent = this._percent;
    }
    if (this._remoteCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteCluster = this._remoteCluster;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._volumePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumePath = this._volumePath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._attr.internalValue = undefined;
      this._containerNames = undefined;
      this._delay = undefined;
      this._duration = undefined;
      this._errno = undefined;
      this._methods = undefined;
      this._mistake.internalValue = undefined;
      this._mode = undefined;
      this._path = undefined;
      this._percent = undefined;
      this._remoteCluster = undefined;
      this._selector.internalValue = undefined;
      this._value = undefined;
      this._volumePath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._attr.internalValue = value.attr;
      this._containerNames = value.containerNames;
      this._delay = value.delay;
      this._duration = value.duration;
      this._errno = value.errno;
      this._methods = value.methods;
      this._mistake.internalValue = value.mistake;
      this._mode = value.mode;
      this._path = value.path;
      this._percent = value.percent;
      this._remoteCluster = value.remoteCluster;
      this._selector.internalValue = value.selector;
      this._value = value.value;
      this._volumePath = value.volumePath;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // attr - computed: false, optional: true, required: false
  private _attr = new DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecAttrOutputReference(this, "attr");
  public get attr() {
    return this._attr;
  }
  public putAttr(value: DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecAttr) {
    this._attr.internalValue = value;
  }
  public resetAttr() {
    this._attr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrInput() {
    return this._attr.internalValue;
  }

  // container_names - computed: false, optional: true, required: false
  private _containerNames?: string[]; 
  public get containerNames() {
    return this.getListAttribute('container_names');
  }
  public set containerNames(value: string[]) {
    this._containerNames = value;
  }
  public resetContainerNames() {
    this._containerNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNamesInput() {
    return this._containerNames;
  }

  // delay - computed: false, optional: true, required: false
  private _delay?: string; 
  public get delay() {
    return this.getStringAttribute('delay');
  }
  public set delay(value: string) {
    this._delay = value;
  }
  public resetDelay() {
    this._delay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay;
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // errno - computed: false, optional: true, required: false
  private _errno?: number; 
  public get errno() {
    return this.getNumberAttribute('errno');
  }
  public set errno(value: number) {
    this._errno = value;
  }
  public resetErrno() {
    this._errno = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errnoInput() {
    return this._errno;
  }

  // methods - computed: false, optional: true, required: false
  private _methods?: string[]; 
  public get methods() {
    return this.getListAttribute('methods');
  }
  public set methods(value: string[]) {
    this._methods = value;
  }
  public resetMethods() {
    this._methods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods;
  }

  // mistake - computed: false, optional: true, required: false
  private _mistake = new DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecMistakeOutputReference(this, "mistake");
  public get mistake() {
    return this._mistake;
  }
  public putMistake(value: DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecMistake) {
    this._mistake.internalValue = value;
  }
  public resetMistake() {
    this._mistake.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mistakeInput() {
    return this._mistake.internalValue;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // percent - computed: false, optional: true, required: false
  private _percent?: number; 
  public get percent() {
    return this.getNumberAttribute('percent');
  }
  public set percent(value: number) {
    this._percent = value;
  }
  public resetPercent() {
    this._percent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentInput() {
    return this._percent;
  }

  // remote_cluster - computed: false, optional: true, required: false
  private _remoteCluster?: string; 
  public get remoteCluster() {
    return this.getStringAttribute('remote_cluster');
  }
  public set remoteCluster(value: string) {
    this._remoteCluster = value;
  }
  public resetRemoteCluster() {
    this._remoteCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteClusterInput() {
    return this._remoteCluster;
  }

  // selector - computed: false, optional: false, required: true
  private _selector = new DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecSelector) {
    this._selector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
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

  // volume_path - computed: false, optional: false, required: true
  private _volumePath?: string; 
  public get volumePath() {
    return this.getStringAttribute('volume_path');
  }
  public set volumePath(value: string) {
    this._volumePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumePathInput() {
    return this._volumePath;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_io_chaos_v1alpha1_manifest k8s_chaos_mesh_org_io_chaos_v1alpha1_manifest}
*/
export class DataK8SChaosMeshOrgIoChaosV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_chaos_mesh_org_io_chaos_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SChaosMeshOrgIoChaosV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SChaosMeshOrgIoChaosV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SChaosMeshOrgIoChaosV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_io_chaos_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SChaosMeshOrgIoChaosV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_chaos_mesh_org_io_chaos_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/chaos_mesh_org_io_chaos_v1alpha1_manifest k8s_chaos_mesh_org_io_chaos_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_chaos_mesh_org_io_chaos_v1alpha1_manifest',
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
  private _metadata = new DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpec) {
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
      metadata: dataK8SChaosMeshOrgIoChaosV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SChaosMeshOrgIoChaosV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SChaosMeshOrgIoChaosV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
