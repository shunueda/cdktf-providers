// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/anywhere_eks_amazonaws_com_nutanix_datacenter_config_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/anywhere_eks_amazonaws_com_nutanix_datacenter_config_v1alpha1_manifest#metadata DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestMetadata;
  /**
  * NutanixDatacenterConfigSpec defines the desired state of NutanixDatacenterConfig.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/anywhere_eks_amazonaws_com_nutanix_datacenter_config_v1alpha1_manifest#spec DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpec;
}
export interface DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/anywhere_eks_amazonaws_com_nutanix_datacenter_config_v1alpha1_manifest#annotations DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/anywhere_eks_amazonaws_com_nutanix_datacenter_config_v1alpha1_manifest#labels DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/anywhere_eks_amazonaws_com_nutanix_datacenter_config_v1alpha1_manifest#name DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/anywhere_eks_amazonaws_com_nutanix_datacenter_config_v1alpha1_manifest#namespace DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpecCredentialRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/anywhere_eks_amazonaws_com_nutanix_datacenter_config_v1alpha1_manifest#kind DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/anywhere_eks_amazonaws_com_nutanix_datacenter_config_v1alpha1_manifest#name DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpecCredentialRefToTerraform(struct?: DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpecCredentialRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpecCredentialRefToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpecCredentialRef | cdktf.IResolvable): any {
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

export class DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpecCredentialRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpecCredentialRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpecCredentialRef | cdktf.IResolvable | undefined) {
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
}
export interface DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpecFailureDomainsCluster {
  /**
  * name is the resource name in the PC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/anywhere_eks_amazonaws_com_nutanix_datacenter_config_v1alpha1_manifest#name DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Type is the identifier type to use for this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/anywhere_eks_amazonaws_com_nutanix_datacenter_config_v1alpha1_manifest#type DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1Manifest#type}
  */
  readonly type: string;
  /**
  * uuid is the UUID of the resource in the PC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/anywhere_eks_amazonaws_com_nutanix_datacenter_config_v1alpha1_manifest#uuid DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1Manifest#uuid}
  */
  readonly uuid?: string;
}

export function dataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpecFailureDomainsClusterToTerraform(struct?: DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpecFailureDomainsCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function dataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpecFailureDomainsClusterToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpecFailureDomainsCluster | cdktf.IResolvable): any {
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpecFailureDomainsClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpecFailureDomainsCluster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpecFailureDomainsCluster | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
      this._uuid = value.uuid;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // uuid - computed: false, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpecFailureDomainsSubnets {
  /**
  * name is the resource name in the PC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/anywhere_eks_amazonaws_com_nutanix_datacenter_config_v1alpha1_manifest#name DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Type is the identifier type to use for this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/anywhere_eks_amazonaws_com_nutanix_datacenter_config_v1alpha1_manifest#type DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1Manifest#type}
  */
  readonly type: string;
  /**
  * uuid is the UUID of the resource in the PC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/anywhere_eks_amazonaws_com_nutanix_datacenter_config_v1alpha1_manifest#uuid DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1Manifest#uuid}
  */
  readonly uuid?: string;
}

export function dataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpecFailureDomainsSubnetsToTerraform(struct?: DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpecFailureDomainsSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function dataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpecFailureDomainsSubnetsToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpecFailureDomainsSubnets | cdktf.IResolvable): any {
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpecFailureDomainsSubnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpecFailureDomainsSubnets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpecFailureDomainsSubnets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
      this._uuid = value.uuid;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // uuid - computed: false, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

export class DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpecFailureDomainsSubnetsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpecFailureDomainsSubnets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpecFailureDomainsSubnetsOutputReference {
    return new DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpecFailureDomainsSubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpecFailureDomains {
  /**
  * Cluster is the Prism Element cluster name or uuid that is connected to the Prism Central.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/anywhere_eks_amazonaws_com_nutanix_datacenter_config_v1alpha1_manifest#cluster DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1Manifest#cluster}
  */
  readonly cluster?: DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpecFailureDomainsCluster;
  /**
  * Name is the unique name of the failure domain. Name must be between 1 and 64 characters long. It must consist of only lower case alphanumeric characters and hyphens (-). It must start and end with an alphanumeric character.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/anywhere_eks_amazonaws_com_nutanix_datacenter_config_v1alpha1_manifest#name DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Subnets holds the list of subnets identifiers cluster's network subnets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/anywhere_eks_amazonaws_com_nutanix_datacenter_config_v1alpha1_manifest#subnets DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1Manifest#subnets}
  */
  readonly subnets?: DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpecFailureDomainsSubnets[] | cdktf.IResolvable;
  /**
  * Worker Machine Groups holds the list of worker machine group names that will use this failure domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/anywhere_eks_amazonaws_com_nutanix_datacenter_config_v1alpha1_manifest#worker_machine_groups DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1Manifest#worker_machine_groups}
  */
  readonly workerMachineGroups?: string[];
}

export function dataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpecFailureDomainsToTerraform(struct?: DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpecFailureDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster: dataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpecFailureDomainsClusterToTerraform(struct!.cluster),
    name: cdktf.stringToTerraform(struct!.name),
    subnets: cdktf.listMapper(dataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpecFailureDomainsSubnetsToTerraform, false)(struct!.subnets),
    worker_machine_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.workerMachineGroups),
  }
}


export function dataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpecFailureDomainsToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpecFailureDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster: {
      value: dataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpecFailureDomainsClusterToHclTerraform(struct!.cluster),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpecFailureDomainsCluster",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnets: {
      value: cdktf.listMapperHcl(dataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpecFailureDomainsSubnetsToHclTerraform, false)(struct!.subnets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpecFailureDomainsSubnetsList",
    },
    worker_machine_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.workerMachineGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpecFailureDomainsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpecFailureDomains | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._subnets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets?.internalValue;
    }
    if (this._workerMachineGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerMachineGroups = this._workerMachineGroups;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpecFailureDomains | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cluster.internalValue = undefined;
      this._name = undefined;
      this._subnets.internalValue = undefined;
      this._workerMachineGroups = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cluster.internalValue = value.cluster;
      this._name = value.name;
      this._subnets.internalValue = value.subnets;
      this._workerMachineGroups = value.workerMachineGroups;
    }
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster = new DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpecFailureDomainsClusterOutputReference(this, "cluster");
  public get cluster() {
    return this._cluster;
  }
  public putCluster(value: DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpecFailureDomainsCluster) {
    this._cluster.internalValue = value;
  }
  public resetCluster() {
    this._cluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster.internalValue;
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

  // subnets - computed: false, optional: true, required: false
  private _subnets = new DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpecFailureDomainsSubnetsList(this, "subnets", false);
  public get subnets() {
    return this._subnets;
  }
  public putSubnets(value: DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpecFailureDomainsSubnets[] | cdktf.IResolvable) {
    this._subnets.internalValue = value;
  }
  public resetSubnets() {
    this._subnets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets.internalValue;
  }

  // worker_machine_groups - computed: false, optional: true, required: false
  private _workerMachineGroups?: string[]; 
  public get workerMachineGroups() {
    return this.getListAttribute('worker_machine_groups');
  }
  public set workerMachineGroups(value: string[]) {
    this._workerMachineGroups = value;
  }
  public resetWorkerMachineGroups() {
    this._workerMachineGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerMachineGroupsInput() {
    return this._workerMachineGroups;
  }
}

export class DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpecFailureDomainsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpecFailureDomains[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpecFailureDomainsOutputReference {
    return new DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpecFailureDomainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpec {
  /**
  * AdditionalTrustBundle is the optional PEM-encoded certificate bundle for users that configured their Prism Central with certificates from non-publicly trusted CAs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/anywhere_eks_amazonaws_com_nutanix_datacenter_config_v1alpha1_manifest#additional_trust_bundle DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1Manifest#additional_trust_bundle}
  */
  readonly additionalTrustBundle?: string;
  /**
  * CredentialRef is the reference to the secret name that contains the credentials for the Nutanix Prism Central. The namespace for the secret is assumed to be a constant i.e. eksa-system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/anywhere_eks_amazonaws_com_nutanix_datacenter_config_v1alpha1_manifest#credential_ref DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1Manifest#credential_ref}
  */
  readonly credentialRef?: DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpecCredentialRef;
  /**
  * Endpoint is the Endpoint of Nutanix Prism Central
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/anywhere_eks_amazonaws_com_nutanix_datacenter_config_v1alpha1_manifest#endpoint DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1Manifest#endpoint}
  */
  readonly endpoint: string;
  /**
  * FailureDomains is the optional list of failure domains for the Nutanix Datacenter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/anywhere_eks_amazonaws_com_nutanix_datacenter_config_v1alpha1_manifest#failure_domains DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1Manifest#failure_domains}
  */
  readonly failureDomains?: DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpecFailureDomains[] | cdktf.IResolvable;
  /**
  * Insecure is the optional flag to skip TLS verification. Nutanix Prism Central installation by default ships with a self-signed certificate that will fail TLS verification because the certificate is not issued by a public CA and does not have the IP SANs with the Prism Central endpoint. To accommodate the scenario where the user has not changed the default Certificate that ships with Prism Central, we allow the user to skip TLS verification. This is not recommended for production use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/anywhere_eks_amazonaws_com_nutanix_datacenter_config_v1alpha1_manifest#insecure DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1Manifest#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * Port is the Port of Nutanix Prism Central
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/anywhere_eks_amazonaws_com_nutanix_datacenter_config_v1alpha1_manifest#port DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1Manifest#port}
  */
  readonly port: number;
}

export function dataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpecToTerraform(struct?: DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_trust_bundle: cdktf.stringToTerraform(struct!.additionalTrustBundle),
    credential_ref: dataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpecCredentialRefToTerraform(struct!.credentialRef),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    failure_domains: cdktf.listMapper(dataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpecFailureDomainsToTerraform, false)(struct!.failureDomains),
    insecure: cdktf.booleanToTerraform(struct!.insecure),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function dataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_trust_bundle: {
      value: cdktf.stringToHclTerraform(struct!.additionalTrustBundle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credential_ref: {
      value: dataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpecCredentialRefToHclTerraform(struct!.credentialRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpecCredentialRef",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    failure_domains: {
      value: cdktf.listMapperHcl(dataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpecFailureDomainsToHclTerraform, false)(struct!.failureDomains),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpecFailureDomainsList",
    },
    insecure: {
      value: cdktf.booleanToHclTerraform(struct!.insecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalTrustBundle !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalTrustBundle = this._additionalTrustBundle;
    }
    if (this._credentialRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialRef = this._credentialRef?.internalValue;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._failureDomains?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureDomains = this._failureDomains?.internalValue;
    }
    if (this._insecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecure = this._insecure;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalTrustBundle = undefined;
      this._credentialRef.internalValue = undefined;
      this._endpoint = undefined;
      this._failureDomains.internalValue = undefined;
      this._insecure = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalTrustBundle = value.additionalTrustBundle;
      this._credentialRef.internalValue = value.credentialRef;
      this._endpoint = value.endpoint;
      this._failureDomains.internalValue = value.failureDomains;
      this._insecure = value.insecure;
      this._port = value.port;
    }
  }

  // additional_trust_bundle - computed: false, optional: true, required: false
  private _additionalTrustBundle?: string; 
  public get additionalTrustBundle() {
    return this.getStringAttribute('additional_trust_bundle');
  }
  public set additionalTrustBundle(value: string) {
    this._additionalTrustBundle = value;
  }
  public resetAdditionalTrustBundle() {
    this._additionalTrustBundle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalTrustBundleInput() {
    return this._additionalTrustBundle;
  }

  // credential_ref - computed: false, optional: true, required: false
  private _credentialRef = new DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpecCredentialRefOutputReference(this, "credential_ref");
  public get credentialRef() {
    return this._credentialRef;
  }
  public putCredentialRef(value: DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpecCredentialRef) {
    this._credentialRef.internalValue = value;
  }
  public resetCredentialRef() {
    this._credentialRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialRefInput() {
    return this._credentialRef.internalValue;
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // failure_domains - computed: false, optional: true, required: false
  private _failureDomains = new DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpecFailureDomainsList(this, "failure_domains", false);
  public get failureDomains() {
    return this._failureDomains;
  }
  public putFailureDomains(value: DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpecFailureDomains[] | cdktf.IResolvable) {
    this._failureDomains.internalValue = value;
  }
  public resetFailureDomains() {
    this._failureDomains.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureDomainsInput() {
    return this._failureDomains.internalValue;
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this.getBooleanAttribute('insecure');
  }
  public set insecure(value: boolean | cdktf.IResolvable) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/anywhere_eks_amazonaws_com_nutanix_datacenter_config_v1alpha1_manifest k8s_anywhere_eks_amazonaws_com_nutanix_datacenter_config_v1alpha1_manifest}
*/
export class DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_anywhere_eks_amazonaws_com_nutanix_datacenter_config_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/anywhere_eks_amazonaws_com_nutanix_datacenter_config_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_anywhere_eks_amazonaws_com_nutanix_datacenter_config_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/anywhere_eks_amazonaws_com_nutanix_datacenter_config_v1alpha1_manifest k8s_anywhere_eks_amazonaws_com_nutanix_datacenter_config_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_anywhere_eks_amazonaws_com_nutanix_datacenter_config_v1alpha1_manifest',
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
  private _metadata = new DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpec) {
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
      metadata: dataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAnywhereEksAmazonawsComNutanixDatacenterConfigV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
