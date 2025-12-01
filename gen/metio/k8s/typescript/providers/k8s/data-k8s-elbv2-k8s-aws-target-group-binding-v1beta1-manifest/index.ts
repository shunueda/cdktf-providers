// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elbv2_k8s_aws_target_group_binding_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elbv2_k8s_aws_target_group_binding_v1beta1_manifest#metadata DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestMetadata;
  /**
  * TargetGroupBindingSpec defines the desired state of TargetGroupBinding
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elbv2_k8s_aws_target_group_binding_v1beta1_manifest#spec DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpec;
}
export interface DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elbv2_k8s_aws_target_group_binding_v1beta1_manifest#annotations DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elbv2_k8s_aws_target_group_binding_v1beta1_manifest#labels DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elbv2_k8s_aws_target_group_binding_v1beta1_manifest#name DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elbv2_k8s_aws_target_group_binding_v1beta1_manifest#namespace DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestMetadataToTerraform(struct?: DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressFromIpBlock {
  /**
  * CIDR is the network CIDR. Both IPV4 or IPV6 CIDR are accepted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elbv2_k8s_aws_target_group_binding_v1beta1_manifest#cidr DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1Manifest#cidr}
  */
  readonly cidr: string;
}

export function dataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressFromIpBlockToTerraform(struct?: DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressFromIpBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
  }
}


export function dataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressFromIpBlockToHclTerraform(struct?: DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressFromIpBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr: {
      value: cdktf.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressFromIpBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressFromIpBlock | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressFromIpBlock | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidr = value.cidr;
    }
  }

  // cidr - computed: false, optional: false, required: true
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }
}
export interface DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressFromSecurityGroup {
  /**
  * GroupID is the EC2 SecurityGroupID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elbv2_k8s_aws_target_group_binding_v1beta1_manifest#group_id DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1Manifest#group_id}
  */
  readonly groupId: string;
}

export function dataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressFromSecurityGroupToTerraform(struct?: DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressFromSecurityGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_id: cdktf.stringToTerraform(struct!.groupId),
  }
}


export function dataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressFromSecurityGroupToHclTerraform(struct?: DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressFromSecurityGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_id: {
      value: cdktf.stringToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressFromSecurityGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressFromSecurityGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressFromSecurityGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupId = value.groupId;
    }
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }
}
export interface DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressFrom {
  /**
  * IPBlock defines an IPBlock peer. If specified, none of the other fields can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elbv2_k8s_aws_target_group_binding_v1beta1_manifest#ip_block DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1Manifest#ip_block}
  */
  readonly ipBlock?: DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressFromIpBlock;
  /**
  * SecurityGroup defines a SecurityGroup peer. If specified, none of the other fields can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elbv2_k8s_aws_target_group_binding_v1beta1_manifest#security_group DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1Manifest#security_group}
  */
  readonly securityGroup?: DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressFromSecurityGroup;
}

export function dataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressFromToTerraform(struct?: DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_block: dataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressFromIpBlockToTerraform(struct!.ipBlock),
    security_group: dataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressFromSecurityGroupToTerraform(struct!.securityGroup),
  }
}


export function dataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressFromToHclTerraform(struct?: DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_block: {
      value: dataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressFromIpBlockToHclTerraform(struct!.ipBlock),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressFromIpBlock",
    },
    security_group: {
      value: dataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressFromSecurityGroupToHclTerraform(struct!.securityGroup),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressFromSecurityGroup",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressFromOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipBlock?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipBlock = this._ipBlock?.internalValue;
    }
    if (this._securityGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroup = this._securityGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipBlock.internalValue = undefined;
      this._securityGroup.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipBlock.internalValue = value.ipBlock;
      this._securityGroup.internalValue = value.securityGroup;
    }
  }

  // ip_block - computed: false, optional: true, required: false
  private _ipBlock = new DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressFromIpBlockOutputReference(this, "ip_block");
  public get ipBlock() {
    return this._ipBlock;
  }
  public putIpBlock(value: DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressFromIpBlock) {
    this._ipBlock.internalValue = value;
  }
  public resetIpBlock() {
    this._ipBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipBlockInput() {
    return this._ipBlock.internalValue;
  }

  // security_group - computed: false, optional: true, required: false
  private _securityGroup = new DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressFromSecurityGroupOutputReference(this, "security_group");
  public get securityGroup() {
    return this._securityGroup;
  }
  public putSecurityGroup(value: DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressFromSecurityGroup) {
    this._securityGroup.internalValue = value;
  }
  public resetSecurityGroup() {
    this._securityGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupInput() {
    return this._securityGroup.internalValue;
  }
}

export class DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressFromList extends cdktf.ComplexList {
  public internalValue? : DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressFrom[] | cdktf.IResolvable

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
  public get(index: number): DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressFromOutputReference {
    return new DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressFromOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressPorts {
  /**
  * The port which traffic must match. When NodePort endpoints(instance TargetType) is used, this must be a numerical port. When Port endpoints(ip TargetType) is used, this can be either numerical or named port on pods. if port is unspecified, it defaults to all ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elbv2_k8s_aws_target_group_binding_v1beta1_manifest#port DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1Manifest#port}
  */
  readonly port?: string;
  /**
  * The protocol which traffic must match. If protocol is unspecified, it defaults to TCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elbv2_k8s_aws_target_group_binding_v1beta1_manifest#protocol DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1Manifest#protocol}
  */
  readonly protocol?: string;
}

export function dataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressPortsToTerraform(struct?: DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.stringToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function dataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressPortsToHclTerraform(struct?: DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._protocol = value.protocol;
    }
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressPortsList extends cdktf.ComplexList {
  public internalValue? : DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressPorts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressPortsOutputReference {
    return new DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngress {
  /**
  * List of peers which should be able to access the targets in TargetGroup. At least one NetworkingPeer should be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elbv2_k8s_aws_target_group_binding_v1beta1_manifest#from DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1Manifest#from}
  */
  readonly from: DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressFrom[] | cdktf.IResolvable;
  /**
  * List of ports which should be made accessible on the targets in TargetGroup. If ports is empty or unspecified, it defaults to all ports with TCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elbv2_k8s_aws_target_group_binding_v1beta1_manifest#ports DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1Manifest#ports}
  */
  readonly ports: DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressPorts[] | cdktf.IResolvable;
}

export function dataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressToTerraform(struct?: DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.listMapper(dataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressFromToTerraform, false)(struct!.from),
    ports: cdktf.listMapper(dataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressPortsToTerraform, false)(struct!.ports),
  }
}


export function dataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressToHclTerraform(struct?: DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.listMapperHcl(dataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressFromToHclTerraform, false)(struct!.from),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressFromList",
    },
    ports: {
      value: cdktf.listMapperHcl(dataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressPortsToHclTerraform, false)(struct!.ports),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressPortsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from?.internalValue;
    }
    if (this._ports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from.internalValue = undefined;
      this._ports.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from.internalValue = value.from;
      this._ports.internalValue = value.ports;
    }
  }

  // from - computed: false, optional: false, required: true
  private _from = new DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressFromList(this, "from", false);
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressFrom[] | cdktf.IResolvable) {
    this._from.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from.internalValue;
  }

  // ports - computed: false, optional: false, required: true
  private _ports = new DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressPorts[] | cdktf.IResolvable) {
    this._ports.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports.internalValue;
  }
}

export class DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressList extends cdktf.ComplexList {
  public internalValue? : DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngress[] | cdktf.IResolvable

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
  public get(index: number): DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressOutputReference {
    return new DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworking {
  /**
  * List of ingress rules to allow ELBV2 LoadBalancer to access targets in TargetGroup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elbv2_k8s_aws_target_group_binding_v1beta1_manifest#ingress DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1Manifest#ingress}
  */
  readonly ingress?: DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngress[] | cdktf.IResolvable;
}

export function dataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingToTerraform(struct?: DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworking | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ingress: cdktf.listMapper(dataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressToTerraform, false)(struct!.ingress),
  }
}


export function dataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingToHclTerraform(struct?: DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworking | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ingress: {
      value: cdktf.listMapperHcl(dataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressToHclTerraform, false)(struct!.ingress),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworking | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ingress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingress = this._ingress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworking | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ingress.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ingress.internalValue = value.ingress;
    }
  }

  // ingress - computed: false, optional: true, required: false
  private _ingress = new DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngressList(this, "ingress", false);
  public get ingress() {
    return this._ingress;
  }
  public putIngress(value: DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingIngress[] | cdktf.IResolvable) {
    this._ingress.internalValue = value;
  }
  public resetIngress() {
    this._ingress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressInput() {
    return this._ingress.internalValue;
  }
}
export interface DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNodeSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elbv2_k8s_aws_target_group_binding_v1beta1_manifest#key DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elbv2_k8s_aws_target_group_binding_v1beta1_manifest#operator DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elbv2_k8s_aws_target_group_binding_v1beta1_manifest#values DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNodeSelectorMatchExpressionsToTerraform(struct?: DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNodeSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNodeSelectorMatchExpressionsToHclTerraform(struct?: DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNodeSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNodeSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNodeSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNodeSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNodeSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNodeSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNodeSelectorMatchExpressionsOutputReference {
    return new DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNodeSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNodeSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elbv2_k8s_aws_target_group_binding_v1beta1_manifest#match_expressions DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNodeSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elbv2_k8s_aws_target_group_binding_v1beta1_manifest#match_labels DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNodeSelectorToTerraform(struct?: DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNodeSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNodeSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNodeSelectorToHclTerraform(struct?: DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNodeSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNodeSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNodeSelectorMatchExpressionsList",
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

export class DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNodeSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNodeSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNodeSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNodeSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNodeSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecServiceRef {
  /**
  * Name is the name of the Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elbv2_k8s_aws_target_group_binding_v1beta1_manifest#name DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Port is the port of the ServicePort.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elbv2_k8s_aws_target_group_binding_v1beta1_manifest#port DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1Manifest#port}
  */
  readonly port: string;
}

export function dataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecServiceRefToTerraform(struct?: DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecServiceRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.stringToTerraform(struct!.port),
  }
}


export function dataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecServiceRefToHclTerraform(struct?: DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecServiceRef | cdktf.IResolvable): any {
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
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecServiceRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecServiceRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecServiceRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._port = value.port;
    }
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

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpec {
  /**
  * ipAddressType specifies whether the target group is of type IPv4 or IPv6. If unspecified, it will be automatically inferred.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elbv2_k8s_aws_target_group_binding_v1beta1_manifest#ip_address_type DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1Manifest#ip_address_type}
  */
  readonly ipAddressType?: string;
  /**
  * networking defines the networking rules to allow ELBV2 LoadBalancer to access targets in TargetGroup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elbv2_k8s_aws_target_group_binding_v1beta1_manifest#networking DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1Manifest#networking}
  */
  readonly networking?: DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworking;
  /**
  * node selector for instance type target groups to only register certain nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elbv2_k8s_aws_target_group_binding_v1beta1_manifest#node_selector DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1Manifest#node_selector}
  */
  readonly nodeSelector?: DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNodeSelector;
  /**
  * serviceRef is a reference to a Kubernetes Service and ServicePort.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elbv2_k8s_aws_target_group_binding_v1beta1_manifest#service_ref DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1Manifest#service_ref}
  */
  readonly serviceRef: DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecServiceRef;
  /**
  * targetGroupARN is the Amazon Resource Name (ARN) for the TargetGroup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elbv2_k8s_aws_target_group_binding_v1beta1_manifest#target_group_arn DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1Manifest#target_group_arn}
  */
  readonly targetGroupArn: string;
  /**
  * targetType is the TargetType of TargetGroup. If unspecified, it will be automatically inferred.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elbv2_k8s_aws_target_group_binding_v1beta1_manifest#target_type DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1Manifest#target_type}
  */
  readonly targetType?: string;
  /**
  * VpcID is the VPC of the TargetGroup. If unspecified, it will be automatically inferred.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elbv2_k8s_aws_target_group_binding_v1beta1_manifest#vpc_id DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1Manifest#vpc_id}
  */
  readonly vpcId?: string;
}

export function dataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecToTerraform(struct?: DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address_type: cdktf.stringToTerraform(struct!.ipAddressType),
    networking: dataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingToTerraform(struct!.networking),
    node_selector: dataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNodeSelectorToTerraform(struct!.nodeSelector),
    service_ref: dataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecServiceRefToTerraform(struct!.serviceRef),
    target_group_arn: cdktf.stringToTerraform(struct!.targetGroupArn),
    target_type: cdktf.stringToTerraform(struct!.targetType),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function dataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address_type: {
      value: cdktf.stringToHclTerraform(struct!.ipAddressType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    networking: {
      value: dataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingToHclTerraform(struct!.networking),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworking",
    },
    node_selector: {
      value: dataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNodeSelectorToHclTerraform(struct!.nodeSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNodeSelector",
    },
    service_ref: {
      value: dataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecServiceRefToHclTerraform(struct!.serviceRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecServiceRef",
    },
    target_group_arn: {
      value: cdktf.stringToHclTerraform(struct!.targetGroupArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_type: {
      value: cdktf.stringToHclTerraform(struct!.targetType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddressType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressType = this._ipAddressType;
    }
    if (this._networking?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networking = this._networking?.internalValue;
    }
    if (this._nodeSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector?.internalValue;
    }
    if (this._serviceRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceRef = this._serviceRef?.internalValue;
    }
    if (this._targetGroupArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetGroupArn = this._targetGroupArn;
    }
    if (this._targetType !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetType = this._targetType;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddressType = undefined;
      this._networking.internalValue = undefined;
      this._nodeSelector.internalValue = undefined;
      this._serviceRef.internalValue = undefined;
      this._targetGroupArn = undefined;
      this._targetType = undefined;
      this._vpcId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddressType = value.ipAddressType;
      this._networking.internalValue = value.networking;
      this._nodeSelector.internalValue = value.nodeSelector;
      this._serviceRef.internalValue = value.serviceRef;
      this._targetGroupArn = value.targetGroupArn;
      this._targetType = value.targetType;
      this._vpcId = value.vpcId;
    }
  }

  // ip_address_type - computed: false, optional: true, required: false
  private _ipAddressType?: string; 
  public get ipAddressType() {
    return this.getStringAttribute('ip_address_type');
  }
  public set ipAddressType(value: string) {
    this._ipAddressType = value;
  }
  public resetIpAddressType() {
    this._ipAddressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressTypeInput() {
    return this._ipAddressType;
  }

  // networking - computed: false, optional: true, required: false
  private _networking = new DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworkingOutputReference(this, "networking");
  public get networking() {
    return this._networking;
  }
  public putNetworking(value: DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNetworking) {
    this._networking.internalValue = value;
  }
  public resetNetworking() {
    this._networking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkingInput() {
    return this._networking.internalValue;
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector = new DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNodeSelectorOutputReference(this, "node_selector");
  public get nodeSelector() {
    return this._nodeSelector;
  }
  public putNodeSelector(value: DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecNodeSelector) {
    this._nodeSelector.internalValue = value;
  }
  public resetNodeSelector() {
    this._nodeSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector.internalValue;
  }

  // service_ref - computed: false, optional: false, required: true
  private _serviceRef = new DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecServiceRefOutputReference(this, "service_ref");
  public get serviceRef() {
    return this._serviceRef;
  }
  public putServiceRef(value: DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecServiceRef) {
    this._serviceRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRefInput() {
    return this._serviceRef.internalValue;
  }

  // target_group_arn - computed: false, optional: false, required: true
  private _targetGroupArn?: string; 
  public get targetGroupArn() {
    return this.getStringAttribute('target_group_arn');
  }
  public set targetGroupArn(value: string) {
    this._targetGroupArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupArnInput() {
    return this._targetGroupArn;
  }

  // target_type - computed: false, optional: true, required: false
  private _targetType?: string; 
  public get targetType() {
    return this.getStringAttribute('target_type');
  }
  public set targetType(value: string) {
    this._targetType = value;
  }
  public resetTargetType() {
    this._targetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTypeInput() {
    return this._targetType;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elbv2_k8s_aws_target_group_binding_v1beta1_manifest k8s_elbv2_k8s_aws_target_group_binding_v1beta1_manifest}
*/
export class DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_elbv2_k8s_aws_target_group_binding_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elbv2_k8s_aws_target_group_binding_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_elbv2_k8s_aws_target_group_binding_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elbv2_k8s_aws_target_group_binding_v1beta1_manifest k8s_elbv2_k8s_aws_target_group_binding_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_elbv2_k8s_aws_target_group_binding_v1beta1_manifest',
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
  private _metadata = new DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpec) {
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
      metadata: dataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SElbv2K8SAwsTargetGroupBindingV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
