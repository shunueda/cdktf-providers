// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/route53_services_k8s_aws_hosted_zone_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/route53_services_k8s_aws_hosted_zone_v1alpha1_manifest#metadata DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestMetadata;
  /**
  * HostedZoneSpec defines the desired state of HostedZone. A complex type that contains general information about the hosted zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/route53_services_k8s_aws_hosted_zone_v1alpha1_manifest#spec DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestSpec;
}
export interface DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/route53_services_k8s_aws_hosted_zone_v1alpha1_manifest#annotations DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/route53_services_k8s_aws_hosted_zone_v1alpha1_manifest#labels DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/route53_services_k8s_aws_hosted_zone_v1alpha1_manifest#name DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/route53_services_k8s_aws_hosted_zone_v1alpha1_manifest#namespace DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestSpecHostedZoneConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/route53_services_k8s_aws_hosted_zone_v1alpha1_manifest#comment DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1Manifest#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/route53_services_k8s_aws_hosted_zone_v1alpha1_manifest#private_zone DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1Manifest#private_zone}
  */
  readonly privateZone?: boolean | cdktf.IResolvable;
}

export function dataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestSpecHostedZoneConfigToTerraform(struct?: DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestSpecHostedZoneConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    private_zone: cdktf.booleanToTerraform(struct!.privateZone),
  }
}


export function dataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestSpecHostedZoneConfigToHclTerraform(struct?: DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestSpecHostedZoneConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_zone: {
      value: cdktf.booleanToHclTerraform(struct!.privateZone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestSpecHostedZoneConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestSpecHostedZoneConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._privateZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateZone = this._privateZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestSpecHostedZoneConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
      this._privateZone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comment = value.comment;
      this._privateZone = value.privateZone;
    }
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // private_zone - computed: false, optional: true, required: false
  private _privateZone?: boolean | cdktf.IResolvable; 
  public get privateZone() {
    return this.getBooleanAttribute('private_zone');
  }
  public set privateZone(value: boolean | cdktf.IResolvable) {
    this._privateZone = value;
  }
  public resetPrivateZone() {
    this._privateZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateZoneInput() {
    return this._privateZone;
  }
}
export interface DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestSpecTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/route53_services_k8s_aws_hosted_zone_v1alpha1_manifest#key DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/route53_services_k8s_aws_hosted_zone_v1alpha1_manifest#value DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestSpecTagsToTerraform(struct?: DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestSpecTagsToHclTerraform(struct?: DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
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

export class DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestSpecTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined) {
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

export class DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestSpecTagsList extends cdktf.ComplexList {
  public internalValue? : DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestSpecTags[] | cdktf.IResolvable

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
  public get(index: number): DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestSpecTagsOutputReference {
    return new DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestSpecTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestSpecVpc {
  /**
  * (Private hosted zones only) The ID of an Amazon VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/route53_services_k8s_aws_hosted_zone_v1alpha1_manifest#vpc_id DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1Manifest#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/route53_services_k8s_aws_hosted_zone_v1alpha1_manifest#vpc_region DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1Manifest#vpc_region}
  */
  readonly vpcRegion?: string;
}

export function dataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestSpecVpcToTerraform(struct?: DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestSpecVpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
    vpc_region: cdktf.stringToTerraform(struct!.vpcRegion),
  }
}


export function dataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestSpecVpcToHclTerraform(struct?: DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestSpecVpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_region: {
      value: cdktf.stringToHclTerraform(struct!.vpcRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestSpecVpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestSpecVpc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    if (this._vpcRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcRegion = this._vpcRegion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestSpecVpc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vpcId = undefined;
      this._vpcRegion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vpcId = value.vpcId;
      this._vpcRegion = value.vpcRegion;
    }
  }

  // vpc_id - computed: false, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // vpc_region - computed: false, optional: true, required: false
  private _vpcRegion?: string; 
  public get vpcRegion() {
    return this.getStringAttribute('vpc_region');
  }
  public set vpcRegion(value: string) {
    this._vpcRegion = value;
  }
  public resetVpcRegion() {
    this._vpcRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcRegionInput() {
    return this._vpcRegion;
  }
}
export interface DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestSpec {
  /**
  * If you want to associate a reusable delegation set with this hosted zone, the ID that Amazon Route 53 assigned to the reusable delegation set when you created it. For more information about reusable delegation sets, see CreateReusableDelegationSet (https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateReusableDelegationSet.html). If you are using a reusable delegation set to create a public hosted zone for a subdomain, make sure that the parent hosted zone doesn't use one or more of the same name servers. If you have overlapping nameservers, the operation will cause a ConflictingDomainsExist error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/route53_services_k8s_aws_hosted_zone_v1alpha1_manifest#delegation_set_id DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1Manifest#delegation_set_id}
  */
  readonly delegationSetId?: string;
  /**
  * (Optional) A complex type that contains the following optional values: * For public and private hosted zones, an optional comment * For private hosted zones, an optional PrivateZone element If you don't specify a comment or the PrivateZone element, omit HostedZoneConfig and the other elements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/route53_services_k8s_aws_hosted_zone_v1alpha1_manifest#hosted_zone_config DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1Manifest#hosted_zone_config}
  */
  readonly hostedZoneConfig?: DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestSpecHostedZoneConfig;
  /**
  * The name of the domain. Specify a fully qualified domain name, for example, www.example.com. The trailing dot is optional; Amazon Route 53 assumes that the domain name is fully qualified. This means that Route 53 treats www.example.com (without a trailing dot) and www.example.com. (with a trailing dot) as identical. If you're creating a public hosted zone, this is the name you have registered with your DNS registrar. If your domain name is registered with a registrar other than Route 53, change the name servers for your domain to the set of NameServers that CreateHostedZone returns in DelegationSet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/route53_services_k8s_aws_hosted_zone_v1alpha1_manifest#name DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * A complex type that contains a list of the tags that you want to add to the specified health check or hosted zone and/or the tags that you want to edit Value for. You can add a maximum of 10 tags to a health check or a hosted zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/route53_services_k8s_aws_hosted_zone_v1alpha1_manifest#tags DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1Manifest#tags}
  */
  readonly tags?: DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestSpecTags[] | cdktf.IResolvable;
  /**
  * (Private hosted zones only) A complex type that contains information about the Amazon VPC that you're associating with this hosted zone. You can specify only one Amazon VPC when you create a private hosted zone. If you are associating a VPC with a hosted zone with this request, the paramaters VPCId and VPCRegion are also required. To associate additional Amazon VPCs with the hosted zone, use AssociateVPCWithHostedZone (https://docs.aws.amazon.com/Route53/latest/APIReference/API_AssociateVPCWithHostedZone.html) after you create a hosted zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/route53_services_k8s_aws_hosted_zone_v1alpha1_manifest#vpc DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1Manifest#vpc}
  */
  readonly vpc?: DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestSpecVpc;
}

export function dataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestSpecToTerraform(struct?: DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delegation_set_id: cdktf.stringToTerraform(struct!.delegationSetId),
    hosted_zone_config: dataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestSpecHostedZoneConfigToTerraform(struct!.hostedZoneConfig),
    name: cdktf.stringToTerraform(struct!.name),
    tags: cdktf.listMapper(dataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestSpecTagsToTerraform, false)(struct!.tags),
    vpc: dataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestSpecVpcToTerraform(struct!.vpc),
  }
}


export function dataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delegation_set_id: {
      value: cdktf.stringToHclTerraform(struct!.delegationSetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hosted_zone_config: {
      value: dataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestSpecHostedZoneConfigToHclTerraform(struct!.hostedZoneConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestSpecHostedZoneConfig",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(dataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestSpecTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestSpecTagsList",
    },
    vpc: {
      value: dataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestSpecVpcToHclTerraform(struct!.vpc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestSpecVpc",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delegationSetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.delegationSetId = this._delegationSetId;
    }
    if (this._hostedZoneConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostedZoneConfig = this._hostedZoneConfig?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    if (this._vpc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpc = this._vpc?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delegationSetId = undefined;
      this._hostedZoneConfig.internalValue = undefined;
      this._name = undefined;
      this._tags.internalValue = undefined;
      this._vpc.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delegationSetId = value.delegationSetId;
      this._hostedZoneConfig.internalValue = value.hostedZoneConfig;
      this._name = value.name;
      this._tags.internalValue = value.tags;
      this._vpc.internalValue = value.vpc;
    }
  }

  // delegation_set_id - computed: false, optional: true, required: false
  private _delegationSetId?: string; 
  public get delegationSetId() {
    return this.getStringAttribute('delegation_set_id');
  }
  public set delegationSetId(value: string) {
    this._delegationSetId = value;
  }
  public resetDelegationSetId() {
    this._delegationSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegationSetIdInput() {
    return this._delegationSetId;
  }

  // hosted_zone_config - computed: false, optional: true, required: false
  private _hostedZoneConfig = new DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestSpecHostedZoneConfigOutputReference(this, "hosted_zone_config");
  public get hostedZoneConfig() {
    return this._hostedZoneConfig;
  }
  public putHostedZoneConfig(value: DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestSpecHostedZoneConfig) {
    this._hostedZoneConfig.internalValue = value;
  }
  public resetHostedZoneConfig() {
    this._hostedZoneConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostedZoneConfigInput() {
    return this._hostedZoneConfig.internalValue;
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

  // tags - computed: false, optional: true, required: false
  private _tags = new DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestSpecTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestSpecTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // vpc - computed: false, optional: true, required: false
  private _vpc = new DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestSpecVpcOutputReference(this, "vpc");
  public get vpc() {
    return this._vpc;
  }
  public putVpc(value: DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestSpecVpc) {
    this._vpc.internalValue = value;
  }
  public resetVpc() {
    this._vpc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcInput() {
    return this._vpc.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/route53_services_k8s_aws_hosted_zone_v1alpha1_manifest k8s_route53_services_k8s_aws_hosted_zone_v1alpha1_manifest}
*/
export class DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_route53_services_k8s_aws_hosted_zone_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/route53_services_k8s_aws_hosted_zone_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_route53_services_k8s_aws_hosted_zone_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/route53_services_k8s_aws_hosted_zone_v1alpha1_manifest k8s_route53_services_k8s_aws_hosted_zone_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_route53_services_k8s_aws_hosted_zone_v1alpha1_manifest',
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
  private _metadata = new DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestSpec) {
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
      metadata: dataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SRoute53ServicesK8SAwsHostedZoneV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
