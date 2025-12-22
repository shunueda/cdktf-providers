// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCiliumIoCiliumNodeV2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#metadata DataK8SCiliumIoCiliumNodeV2Manifest#metadata}
  */
  readonly metadata: DataK8SCiliumIoCiliumNodeV2ManifestMetadata;
  /**
  * Spec defines the desired specification/configuration of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#spec DataK8SCiliumIoCiliumNodeV2Manifest#spec}
  */
  readonly spec: DataK8SCiliumIoCiliumNodeV2ManifestSpec;
}
export interface DataK8SCiliumIoCiliumNodeV2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#annotations DataK8SCiliumIoCiliumNodeV2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#labels DataK8SCiliumIoCiliumNodeV2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#name DataK8SCiliumIoCiliumNodeV2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SCiliumIoCiliumNodeV2ManifestMetadataToTerraform(struct?: DataK8SCiliumIoCiliumNodeV2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SCiliumIoCiliumNodeV2ManifestMetadataToHclTerraform(struct?: DataK8SCiliumIoCiliumNodeV2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SCiliumIoCiliumNodeV2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNodeV2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCiliumIoCiliumNodeV2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SCiliumIoCiliumNodeV2ManifestSpecAddresses {
  /**
  * IP is an IP of a node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#ip DataK8SCiliumIoCiliumNodeV2Manifest#ip}
  */
  readonly ip?: string;
  /**
  * Type is the type of the node address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#type DataK8SCiliumIoCiliumNodeV2Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SCiliumIoCiliumNodeV2ManifestSpecAddressesToTerraform(struct?: DataK8SCiliumIoCiliumNodeV2ManifestSpecAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SCiliumIoCiliumNodeV2ManifestSpecAddressesToHclTerraform(struct?: DataK8SCiliumIoCiliumNodeV2ManifestSpecAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNodeV2ManifestSpecAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNodeV2ManifestSpecAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNodeV2ManifestSpecAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
      this._type = value.type;
    }
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DataK8SCiliumIoCiliumNodeV2ManifestSpecAddressesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNodeV2ManifestSpecAddresses[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNodeV2ManifestSpecAddressesOutputReference {
    return new DataK8SCiliumIoCiliumNodeV2ManifestSpecAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNodeV2ManifestSpecAlibabaCloud {
  /**
  * AvailabilityZone is the availability zone to use when allocating ENIs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#availability_zone DataK8SCiliumIoCiliumNodeV2Manifest#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * CIDRBlock is vpc ipv4 CIDR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#cidr_block DataK8SCiliumIoCiliumNodeV2Manifest#cidr_block}
  */
  readonly cidrBlock?: string;
  /**
  * InstanceType is the ECS instance type, e.g. 'ecs.g6.2xlarge'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#instance_type DataK8SCiliumIoCiliumNodeV2Manifest#instance_type}
  */
  readonly instanceType?: string;
  /**
  * SecurityGroupTags is the list of tags to use when evaluating which security groups to use for the ENI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#security_group_tags DataK8SCiliumIoCiliumNodeV2Manifest#security_group_tags}
  */
  readonly securityGroupTags?: { [key: string]: string };
  /**
  * SecurityGroups is the list of security groups to attach to any ENI that is created and attached to the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#security_groups DataK8SCiliumIoCiliumNodeV2Manifest#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * VPCID is the VPC ID to use when allocating ENIs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#vpc_id DataK8SCiliumIoCiliumNodeV2Manifest#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * VSwitchTags is the list of tags to use when evaluating which vSwitch to use for the ENI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#vswitch_tags DataK8SCiliumIoCiliumNodeV2Manifest#vswitch_tags}
  */
  readonly vswitchTags?: { [key: string]: string };
  /**
  * VSwitches is the ID of vSwitch available for ENI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#vswitches DataK8SCiliumIoCiliumNodeV2Manifest#vswitches}
  */
  readonly vswitches?: string[];
}

export function dataK8SCiliumIoCiliumNodeV2ManifestSpecAlibabaCloudToTerraform(struct?: DataK8SCiliumIoCiliumNodeV2ManifestSpecAlibabaCloud | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_zone: cdktf.stringToTerraform(struct!.availabilityZone),
    cidr_block: cdktf.stringToTerraform(struct!.cidrBlock),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    security_group_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.securityGroupTags),
    security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroups),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
    vswitch_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.vswitchTags),
    vswitches: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vswitches),
  }
}


export function dataK8SCiliumIoCiliumNodeV2ManifestSpecAlibabaCloudToHclTerraform(struct?: DataK8SCiliumIoCiliumNodeV2ManifestSpecAlibabaCloud | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_zone: {
      value: cdktf.stringToHclTerraform(struct!.availabilityZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.cidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.securityGroupTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    security_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vswitch_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.vswitchTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    vswitches: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vswitches),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNodeV2ManifestSpecAlibabaCloudOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNodeV2ManifestSpecAlibabaCloud | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZone = this._availabilityZone;
    }
    if (this._cidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrBlock = this._cidrBlock;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._securityGroupTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupTags = this._securityGroupTags;
    }
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    if (this._vswitchTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.vswitchTags = this._vswitchTags;
    }
    if (this._vswitches !== undefined) {
      hasAnyValues = true;
      internalValueResult.vswitches = this._vswitches;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNodeV2ManifestSpecAlibabaCloud | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availabilityZone = undefined;
      this._cidrBlock = undefined;
      this._instanceType = undefined;
      this._securityGroupTags = undefined;
      this._securityGroups = undefined;
      this._vpcId = undefined;
      this._vswitchTags = undefined;
      this._vswitches = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availabilityZone = value.availabilityZone;
      this._cidrBlock = value.cidrBlock;
      this._instanceType = value.instanceType;
      this._securityGroupTags = value.securityGroupTags;
      this._securityGroups = value.securityGroups;
      this._vpcId = value.vpcId;
      this._vswitchTags = value.vswitchTags;
      this._vswitches = value.vswitches;
    }
  }

  // availability_zone - computed: false, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // cidr_block - computed: false, optional: true, required: false
  private _cidrBlock?: string; 
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }
  public set cidrBlock(value: string) {
    this._cidrBlock = value;
  }
  public resetCidrBlock() {
    this._cidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlockInput() {
    return this._cidrBlock;
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // security_group_tags - computed: false, optional: true, required: false
  private _securityGroupTags?: { [key: string]: string }; 
  public get securityGroupTags() {
    return this.getStringMapAttribute('security_group_tags');
  }
  public set securityGroupTags(value: { [key: string]: string }) {
    this._securityGroupTags = value;
  }
  public resetSecurityGroupTags() {
    this._securityGroupTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupTagsInput() {
    return this._securityGroupTags;
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

  // vswitch_tags - computed: false, optional: true, required: false
  private _vswitchTags?: { [key: string]: string }; 
  public get vswitchTags() {
    return this.getStringMapAttribute('vswitch_tags');
  }
  public set vswitchTags(value: { [key: string]: string }) {
    this._vswitchTags = value;
  }
  public resetVswitchTags() {
    this._vswitchTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchTagsInput() {
    return this._vswitchTags;
  }

  // vswitches - computed: false, optional: true, required: false
  private _vswitches?: string[]; 
  public get vswitches() {
    return this.getListAttribute('vswitches');
  }
  public set vswitches(value: string[]) {
    this._vswitches = value;
  }
  public resetVswitches() {
    this._vswitches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchesInput() {
    return this._vswitches;
  }
}
export interface DataK8SCiliumIoCiliumNodeV2ManifestSpecAzure {
  /**
  * InterfaceName is the name of the interface the cilium-operator will use to allocate all the IPs on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#interface_name DataK8SCiliumIoCiliumNodeV2Manifest#interface_name}
  */
  readonly interfaceName?: string;
}

export function dataK8SCiliumIoCiliumNodeV2ManifestSpecAzureToTerraform(struct?: DataK8SCiliumIoCiliumNodeV2ManifestSpecAzure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
  }
}


export function dataK8SCiliumIoCiliumNodeV2ManifestSpecAzureToHclTerraform(struct?: DataK8SCiliumIoCiliumNodeV2ManifestSpecAzure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_name: {
      value: cdktf.stringToHclTerraform(struct!.interfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNodeV2ManifestSpecAzureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNodeV2ManifestSpecAzure | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceName = this._interfaceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNodeV2ManifestSpecAzure | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interfaceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interfaceName = value.interfaceName;
    }
  }

  // interface_name - computed: false, optional: true, required: false
  private _interfaceName?: string; 
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
  public set interfaceName(value: string) {
    this._interfaceName = value;
  }
  public resetInterfaceName() {
    this._interfaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameInput() {
    return this._interfaceName;
  }
}
export interface DataK8SCiliumIoCiliumNodeV2ManifestSpecEncryption {
  /**
  * Key is the index to the key to use for encryption or 0 if encryption is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#key DataK8SCiliumIoCiliumNodeV2Manifest#key}
  */
  readonly key?: number;
}

export function dataK8SCiliumIoCiliumNodeV2ManifestSpecEncryptionToTerraform(struct?: DataK8SCiliumIoCiliumNodeV2ManifestSpecEncryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.numberToTerraform(struct!.key),
  }
}


export function dataK8SCiliumIoCiliumNodeV2ManifestSpecEncryptionToHclTerraform(struct?: DataK8SCiliumIoCiliumNodeV2ManifestSpecEncryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.numberToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNodeV2ManifestSpecEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNodeV2ManifestSpecEncryption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNodeV2ManifestSpecEncryption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: number; 
  public get key() {
    return this.getNumberAttribute('key');
  }
  public set key(value: number) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}
export interface DataK8SCiliumIoCiliumNodeV2ManifestSpecEni {
  /**
  * AvailabilityZone is the availability zone to use when allocating ENIs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#availability_zone DataK8SCiliumIoCiliumNodeV2Manifest#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * DeleteOnTermination defines that the ENI should be deleted when the associated instance is terminated. If the parameter is not set the default behavior is to delete the ENI on instance termination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#delete_on_termination DataK8SCiliumIoCiliumNodeV2Manifest#delete_on_termination}
  */
  readonly deleteOnTermination?: boolean | cdktf.IResolvable;
  /**
  * DisablePrefixDelegation determines whether ENI prefix delegation should be disabled on this node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#disable_prefix_delegation DataK8SCiliumIoCiliumNodeV2Manifest#disable_prefix_delegation}
  */
  readonly disablePrefixDelegation?: boolean | cdktf.IResolvable;
  /**
  * ExcludeInterfaceTags is the list of tags to use when excluding ENIs for Cilium IP allocation. Any interface matching this set of tags will not be managed by Cilium.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#exclude_interface_tags DataK8SCiliumIoCiliumNodeV2Manifest#exclude_interface_tags}
  */
  readonly excludeInterfaceTags?: { [key: string]: string };
  /**
  * FirstInterfaceIndex is the index of the first ENI to use for IP allocation, e.g. if the node has eth0, eth1, eth2 and FirstInterfaceIndex is set to 1, then only eth1 and eth2 will be used for IP allocation, eth0 will be ignored for PodIP allocation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#first_interface_index DataK8SCiliumIoCiliumNodeV2Manifest#first_interface_index}
  */
  readonly firstInterfaceIndex?: number;
  /**
  * InstanceID is the AWS InstanceId of the node. The InstanceID is used to retrieve AWS metadata for the node. OBSOLETE: This field is obsolete, please use Spec.InstanceID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#instance_id DataK8SCiliumIoCiliumNodeV2Manifest#instance_id}
  */
  readonly instanceId?: string;
  /**
  * InstanceType is the AWS EC2 instance type, e.g. 'm5.large'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#instance_type DataK8SCiliumIoCiliumNodeV2Manifest#instance_type}
  */
  readonly instanceType?: string;
  /**
  * MaxAboveWatermark is the maximum number of addresses to allocate beyond the addresses needed to reach the PreAllocate watermark. Going above the watermark can help reduce the number of API calls to allocate IPs, e.g. when a new ENI is allocated, as many secondary IPs as possible are allocated. Limiting the amount can help reduce waste of IPs. OBSOLETE: This field is obsolete, please use Spec.IPAM.MaxAboveWatermark
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#max_above_watermark DataK8SCiliumIoCiliumNodeV2Manifest#max_above_watermark}
  */
  readonly maxAboveWatermark?: number;
  /**
  * MinAllocate is the minimum number of IPs that must be allocated when the node is first bootstrapped. It defines the minimum base socket of addresses that must be available. After reaching this watermark, the PreAllocate and MaxAboveWatermark logic takes over to continue allocating IPs. OBSOLETE: This field is obsolete, please use Spec.IPAM.MinAllocate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#min_allocate DataK8SCiliumIoCiliumNodeV2Manifest#min_allocate}
  */
  readonly minAllocate?: number;
  /**
  * NodeSubnetID is the subnet of the primary ENI the instance was brought up with. It is used as a sensible default subnet to create ENIs in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#node_subnet_id DataK8SCiliumIoCiliumNodeV2Manifest#node_subnet_id}
  */
  readonly nodeSubnetId?: string;
  /**
  * PreAllocate defines the number of IP addresses that must be available for allocation in the IPAMspec. It defines the buffer of addresses available immediately without requiring cilium-operator to get involved. OBSOLETE: This field is obsolete, please use Spec.IPAM.PreAllocate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#pre_allocate DataK8SCiliumIoCiliumNodeV2Manifest#pre_allocate}
  */
  readonly preAllocate?: number;
  /**
  * SecurityGroupTags is the list of tags to use when evaliating what AWS security groups to use for the ENI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#security_group_tags DataK8SCiliumIoCiliumNodeV2Manifest#security_group_tags}
  */
  readonly securityGroupTags?: { [key: string]: string };
  /**
  * SecurityGroups is the list of security groups to attach to any ENI that is created and attached to the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#security_groups DataK8SCiliumIoCiliumNodeV2Manifest#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * SubnetIDs is the list of subnet ids to use when evaluating what AWS subnets to use for ENI and IP allocation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#subnet_ids DataK8SCiliumIoCiliumNodeV2Manifest#subnet_ids}
  */
  readonly subnetIds?: string[];
  /**
  * SubnetTags is the list of tags to use when evaluating what AWS subnets to use for ENI and IP allocation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#subnet_tags DataK8SCiliumIoCiliumNodeV2Manifest#subnet_tags}
  */
  readonly subnetTags?: { [key: string]: string };
  /**
  * UsePrimaryAddress determines whether an ENI's primary address should be available for allocations on the node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#use_primary_address DataK8SCiliumIoCiliumNodeV2Manifest#use_primary_address}
  */
  readonly usePrimaryAddress?: boolean | cdktf.IResolvable;
  /**
  * VpcID is the VPC ID to use when allocating ENIs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#vpc_id DataK8SCiliumIoCiliumNodeV2Manifest#vpc_id}
  */
  readonly vpcId?: string;
}

export function dataK8SCiliumIoCiliumNodeV2ManifestSpecEniToTerraform(struct?: DataK8SCiliumIoCiliumNodeV2ManifestSpecEni | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_zone: cdktf.stringToTerraform(struct!.availabilityZone),
    delete_on_termination: cdktf.booleanToTerraform(struct!.deleteOnTermination),
    disable_prefix_delegation: cdktf.booleanToTerraform(struct!.disablePrefixDelegation),
    exclude_interface_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.excludeInterfaceTags),
    first_interface_index: cdktf.numberToTerraform(struct!.firstInterfaceIndex),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    max_above_watermark: cdktf.numberToTerraform(struct!.maxAboveWatermark),
    min_allocate: cdktf.numberToTerraform(struct!.minAllocate),
    node_subnet_id: cdktf.stringToTerraform(struct!.nodeSubnetId),
    pre_allocate: cdktf.numberToTerraform(struct!.preAllocate),
    security_group_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.securityGroupTags),
    security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroups),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnetIds),
    subnet_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.subnetTags),
    use_primary_address: cdktf.booleanToTerraform(struct!.usePrimaryAddress),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function dataK8SCiliumIoCiliumNodeV2ManifestSpecEniToHclTerraform(struct?: DataK8SCiliumIoCiliumNodeV2ManifestSpecEni | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_zone: {
      value: cdktf.stringToHclTerraform(struct!.availabilityZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete_on_termination: {
      value: cdktf.booleanToHclTerraform(struct!.deleteOnTermination),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_prefix_delegation: {
      value: cdktf.booleanToHclTerraform(struct!.disablePrefixDelegation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exclude_interface_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.excludeInterfaceTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    first_interface_index: {
      value: cdktf.numberToHclTerraform(struct!.firstInterfaceIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_above_watermark: {
      value: cdktf.numberToHclTerraform(struct!.maxAboveWatermark),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_allocate: {
      value: cdktf.numberToHclTerraform(struct!.minAllocate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.nodeSubnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pre_allocate: {
      value: cdktf.numberToHclTerraform(struct!.preAllocate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    security_group_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.securityGroupTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    security_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subnet_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnetIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subnet_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.subnetTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    use_primary_address: {
      value: cdktf.booleanToHclTerraform(struct!.usePrimaryAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class DataK8SCiliumIoCiliumNodeV2ManifestSpecEniOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNodeV2ManifestSpecEni | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZone = this._availabilityZone;
    }
    if (this._deleteOnTermination !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteOnTermination = this._deleteOnTermination;
    }
    if (this._disablePrefixDelegation !== undefined) {
      hasAnyValues = true;
      internalValueResult.disablePrefixDelegation = this._disablePrefixDelegation;
    }
    if (this._excludeInterfaceTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeInterfaceTags = this._excludeInterfaceTags;
    }
    if (this._firstInterfaceIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstInterfaceIndex = this._firstInterfaceIndex;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._maxAboveWatermark !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAboveWatermark = this._maxAboveWatermark;
    }
    if (this._minAllocate !== undefined) {
      hasAnyValues = true;
      internalValueResult.minAllocate = this._minAllocate;
    }
    if (this._nodeSubnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSubnetId = this._nodeSubnetId;
    }
    if (this._preAllocate !== undefined) {
      hasAnyValues = true;
      internalValueResult.preAllocate = this._preAllocate;
    }
    if (this._securityGroupTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupTags = this._securityGroupTags;
    }
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    if (this._subnetTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetTags = this._subnetTags;
    }
    if (this._usePrimaryAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePrimaryAddress = this._usePrimaryAddress;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNodeV2ManifestSpecEni | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availabilityZone = undefined;
      this._deleteOnTermination = undefined;
      this._disablePrefixDelegation = undefined;
      this._excludeInterfaceTags = undefined;
      this._firstInterfaceIndex = undefined;
      this._instanceId = undefined;
      this._instanceType = undefined;
      this._maxAboveWatermark = undefined;
      this._minAllocate = undefined;
      this._nodeSubnetId = undefined;
      this._preAllocate = undefined;
      this._securityGroupTags = undefined;
      this._securityGroups = undefined;
      this._subnetIds = undefined;
      this._subnetTags = undefined;
      this._usePrimaryAddress = undefined;
      this._vpcId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availabilityZone = value.availabilityZone;
      this._deleteOnTermination = value.deleteOnTermination;
      this._disablePrefixDelegation = value.disablePrefixDelegation;
      this._excludeInterfaceTags = value.excludeInterfaceTags;
      this._firstInterfaceIndex = value.firstInterfaceIndex;
      this._instanceId = value.instanceId;
      this._instanceType = value.instanceType;
      this._maxAboveWatermark = value.maxAboveWatermark;
      this._minAllocate = value.minAllocate;
      this._nodeSubnetId = value.nodeSubnetId;
      this._preAllocate = value.preAllocate;
      this._securityGroupTags = value.securityGroupTags;
      this._securityGroups = value.securityGroups;
      this._subnetIds = value.subnetIds;
      this._subnetTags = value.subnetTags;
      this._usePrimaryAddress = value.usePrimaryAddress;
      this._vpcId = value.vpcId;
    }
  }

  // availability_zone - computed: false, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // delete_on_termination - computed: false, optional: true, required: false
  private _deleteOnTermination?: boolean | cdktf.IResolvable; 
  public get deleteOnTermination() {
    return this.getBooleanAttribute('delete_on_termination');
  }
  public set deleteOnTermination(value: boolean | cdktf.IResolvable) {
    this._deleteOnTermination = value;
  }
  public resetDeleteOnTermination() {
    this._deleteOnTermination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteOnTerminationInput() {
    return this._deleteOnTermination;
  }

  // disable_prefix_delegation - computed: false, optional: true, required: false
  private _disablePrefixDelegation?: boolean | cdktf.IResolvable; 
  public get disablePrefixDelegation() {
    return this.getBooleanAttribute('disable_prefix_delegation');
  }
  public set disablePrefixDelegation(value: boolean | cdktf.IResolvable) {
    this._disablePrefixDelegation = value;
  }
  public resetDisablePrefixDelegation() {
    this._disablePrefixDelegation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePrefixDelegationInput() {
    return this._disablePrefixDelegation;
  }

  // exclude_interface_tags - computed: false, optional: true, required: false
  private _excludeInterfaceTags?: { [key: string]: string }; 
  public get excludeInterfaceTags() {
    return this.getStringMapAttribute('exclude_interface_tags');
  }
  public set excludeInterfaceTags(value: { [key: string]: string }) {
    this._excludeInterfaceTags = value;
  }
  public resetExcludeInterfaceTags() {
    this._excludeInterfaceTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInterfaceTagsInput() {
    return this._excludeInterfaceTags;
  }

  // first_interface_index - computed: false, optional: true, required: false
  private _firstInterfaceIndex?: number; 
  public get firstInterfaceIndex() {
    return this.getNumberAttribute('first_interface_index');
  }
  public set firstInterfaceIndex(value: number) {
    this._firstInterfaceIndex = value;
  }
  public resetFirstInterfaceIndex() {
    this._firstInterfaceIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstInterfaceIndexInput() {
    return this._firstInterfaceIndex;
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // max_above_watermark - computed: false, optional: true, required: false
  private _maxAboveWatermark?: number; 
  public get maxAboveWatermark() {
    return this.getNumberAttribute('max_above_watermark');
  }
  public set maxAboveWatermark(value: number) {
    this._maxAboveWatermark = value;
  }
  public resetMaxAboveWatermark() {
    this._maxAboveWatermark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAboveWatermarkInput() {
    return this._maxAboveWatermark;
  }

  // min_allocate - computed: false, optional: true, required: false
  private _minAllocate?: number; 
  public get minAllocate() {
    return this.getNumberAttribute('min_allocate');
  }
  public set minAllocate(value: number) {
    this._minAllocate = value;
  }
  public resetMinAllocate() {
    this._minAllocate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minAllocateInput() {
    return this._minAllocate;
  }

  // node_subnet_id - computed: false, optional: true, required: false
  private _nodeSubnetId?: string; 
  public get nodeSubnetId() {
    return this.getStringAttribute('node_subnet_id');
  }
  public set nodeSubnetId(value: string) {
    this._nodeSubnetId = value;
  }
  public resetNodeSubnetId() {
    this._nodeSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSubnetIdInput() {
    return this._nodeSubnetId;
  }

  // pre_allocate - computed: false, optional: true, required: false
  private _preAllocate?: number; 
  public get preAllocate() {
    return this.getNumberAttribute('pre_allocate');
  }
  public set preAllocate(value: number) {
    this._preAllocate = value;
  }
  public resetPreAllocate() {
    this._preAllocate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preAllocateInput() {
    return this._preAllocate;
  }

  // security_group_tags - computed: false, optional: true, required: false
  private _securityGroupTags?: { [key: string]: string }; 
  public get securityGroupTags() {
    return this.getStringMapAttribute('security_group_tags');
  }
  public set securityGroupTags(value: { [key: string]: string }) {
    this._securityGroupTags = value;
  }
  public resetSecurityGroupTags() {
    this._securityGroupTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupTagsInput() {
    return this._securityGroupTags;
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

  // subnet_ids - computed: false, optional: true, required: false
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  public resetSubnetIds() {
    this._subnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }

  // subnet_tags - computed: false, optional: true, required: false
  private _subnetTags?: { [key: string]: string }; 
  public get subnetTags() {
    return this.getStringMapAttribute('subnet_tags');
  }
  public set subnetTags(value: { [key: string]: string }) {
    this._subnetTags = value;
  }
  public resetSubnetTags() {
    this._subnetTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetTagsInput() {
    return this._subnetTags;
  }

  // use_primary_address - computed: false, optional: true, required: false
  private _usePrimaryAddress?: boolean | cdktf.IResolvable; 
  public get usePrimaryAddress() {
    return this.getBooleanAttribute('use_primary_address');
  }
  public set usePrimaryAddress(value: boolean | cdktf.IResolvable) {
    this._usePrimaryAddress = value;
  }
  public resetUsePrimaryAddress() {
    this._usePrimaryAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePrimaryAddressInput() {
    return this._usePrimaryAddress;
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
export interface DataK8SCiliumIoCiliumNodeV2ManifestSpecHealth {
  /**
  * IPv4 is the IPv4 address of the IPv4 health endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#ipv4 DataK8SCiliumIoCiliumNodeV2Manifest#ipv4}
  */
  readonly ipv4?: string;
  /**
  * IPv6 is the IPv6 address of the IPv4 health endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#ipv6 DataK8SCiliumIoCiliumNodeV2Manifest#ipv6}
  */
  readonly ipv6?: string;
}

export function dataK8SCiliumIoCiliumNodeV2ManifestSpecHealthToTerraform(struct?: DataK8SCiliumIoCiliumNodeV2ManifestSpecHealth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
  }
}


export function dataK8SCiliumIoCiliumNodeV2ManifestSpecHealthToHclTerraform(struct?: DataK8SCiliumIoCiliumNodeV2ManifestSpecHealth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.stringToHclTerraform(struct!.ipv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNodeV2ManifestSpecHealthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNodeV2ManifestSpecHealth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNodeV2ManifestSpecHealth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4 = undefined;
      this._ipv6 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4 = value.ipv4;
      this._ipv6 = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4?: string; 
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }
  public set ipv4(value: string) {
    this._ipv4 = value;
  }
  public resetIpv4() {
    this._ipv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }
}
export interface DataK8SCiliumIoCiliumNodeV2ManifestSpecIngress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#ipv4 DataK8SCiliumIoCiliumNodeV2Manifest#ipv4}
  */
  readonly ipv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#ipv6 DataK8SCiliumIoCiliumNodeV2Manifest#ipv6}
  */
  readonly ipv6?: string;
}

export function dataK8SCiliumIoCiliumNodeV2ManifestSpecIngressToTerraform(struct?: DataK8SCiliumIoCiliumNodeV2ManifestSpecIngress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
  }
}


export function dataK8SCiliumIoCiliumNodeV2ManifestSpecIngressToHclTerraform(struct?: DataK8SCiliumIoCiliumNodeV2ManifestSpecIngress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.stringToHclTerraform(struct!.ipv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNodeV2ManifestSpecIngressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNodeV2ManifestSpecIngress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNodeV2ManifestSpecIngress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4 = undefined;
      this._ipv6 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4 = value.ipv4;
      this._ipv6 = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4?: string; 
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }
  public set ipv4(value: string) {
    this._ipv4 = value;
  }
  public resetIpv4() {
    this._ipv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }
}
export interface DataK8SCiliumIoCiliumNodeV2ManifestSpecIpamIpv6Pool {
  /**
  * Owner is the owner of the IP. This field is set if the IP has been allocated. It will be set to the pod name or another identifier representing the usage of the IP The owner field is left blank for an entry in Spec.IPAM.Pool and filled out as the IP is used and also added to Status.IPAM.Used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#owner DataK8SCiliumIoCiliumNodeV2Manifest#owner}
  */
  readonly owner?: string;
  /**
  * Resource is set for both available and allocated IPs, it represents what resource the IP is associated with, e.g. in combination with AWS ENI, this will refer to the ID of the ENI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#resource DataK8SCiliumIoCiliumNodeV2Manifest#resource}
  */
  readonly resource?: string;
}

export function dataK8SCiliumIoCiliumNodeV2ManifestSpecIpamIpv6PoolToTerraform(struct?: DataK8SCiliumIoCiliumNodeV2ManifestSpecIpamIpv6Pool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    owner: cdktf.stringToTerraform(struct!.owner),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}


export function dataK8SCiliumIoCiliumNodeV2ManifestSpecIpamIpv6PoolToHclTerraform(struct?: DataK8SCiliumIoCiliumNodeV2ManifestSpecIpamIpv6Pool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    owner: {
      value: cdktf.stringToHclTerraform(struct!.owner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNodeV2ManifestSpecIpamIpv6PoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNodeV2ManifestSpecIpamIpv6Pool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._owner !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNodeV2ManifestSpecIpamIpv6Pool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._owner = undefined;
      this._resource = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._owner = value.owner;
      this._resource = value.resource;
    }
  }

  // owner - computed: false, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // resource - computed: false, optional: true, required: false
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  public resetResource() {
    this._resource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }
}
export interface DataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPool {
  /**
  * Owner is the owner of the IP. This field is set if the IP has been allocated. It will be set to the pod name or another identifier representing the usage of the IP The owner field is left blank for an entry in Spec.IPAM.Pool and filled out as the IP is used and also added to Status.IPAM.Used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#owner DataK8SCiliumIoCiliumNodeV2Manifest#owner}
  */
  readonly owner?: string;
  /**
  * Resource is set for both available and allocated IPs, it represents what resource the IP is associated with, e.g. in combination with AWS ENI, this will refer to the ID of the ENI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#resource DataK8SCiliumIoCiliumNodeV2Manifest#resource}
  */
  readonly resource?: string;
}

export function dataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPoolToTerraform(struct?: DataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    owner: cdktf.stringToTerraform(struct!.owner),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}


export function dataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPoolToHclTerraform(struct?: DataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    owner: {
      value: cdktf.stringToHclTerraform(struct!.owner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._owner !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._owner = undefined;
      this._resource = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._owner = value.owner;
      this._resource = value.resource;
    }
  }

  // owner - computed: false, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // resource - computed: false, optional: true, required: false
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  public resetResource() {
    this._resource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }
}
export interface DataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPoolsAllocated {
  /**
  * CIDRs contains a list of pod CIDRs currently allocated from this pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#cidrs DataK8SCiliumIoCiliumNodeV2Manifest#cidrs}
  */
  readonly cidrs?: string[];
  /**
  * Pool is the name of the IPAM pool backing this allocation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#pool DataK8SCiliumIoCiliumNodeV2Manifest#pool}
  */
  readonly pool: string;
}

export function dataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPoolsAllocatedToTerraform(struct?: DataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPoolsAllocated | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cidrs),
    pool: cdktf.stringToTerraform(struct!.pool),
  }
}


export function dataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPoolsAllocatedToHclTerraform(struct?: DataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPoolsAllocated | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cidrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pool: {
      value: cdktf.stringToHclTerraform(struct!.pool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPoolsAllocatedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPoolsAllocated | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrs = this._cidrs;
    }
    if (this._pool !== undefined) {
      hasAnyValues = true;
      internalValueResult.pool = this._pool;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPoolsAllocated | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidrs = undefined;
      this._pool = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidrs = value.cidrs;
      this._pool = value.pool;
    }
  }

  // cidrs - computed: false, optional: true, required: false
  private _cidrs?: string[]; 
  public get cidrs() {
    return this.getListAttribute('cidrs');
  }
  public set cidrs(value: string[]) {
    this._cidrs = value;
  }
  public resetCidrs() {
    this._cidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrsInput() {
    return this._cidrs;
  }

  // pool - computed: false, optional: false, required: true
  private _pool?: string; 
  public get pool() {
    return this.getStringAttribute('pool');
  }
  public set pool(value: string) {
    this._pool = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool;
  }
}

export class DataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPoolsAllocatedList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPoolsAllocated[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPoolsAllocatedOutputReference {
    return new DataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPoolsAllocatedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPoolsRequestedNeeded {
  /**
  * IPv4Addrs contains the number of requested IPv4 addresses out of a given pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#ipv4_addrs DataK8SCiliumIoCiliumNodeV2Manifest#ipv4_addrs}
  */
  readonly ipv4Addrs?: number;
  /**
  * IPv6Addrs contains the number of requested IPv6 addresses out of a given pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#ipv6_addrs DataK8SCiliumIoCiliumNodeV2Manifest#ipv6_addrs}
  */
  readonly ipv6Addrs?: number;
}

export function dataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPoolsRequestedNeededToTerraform(struct?: DataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPoolsRequestedNeeded | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_addrs: cdktf.numberToTerraform(struct!.ipv4Addrs),
    ipv6_addrs: cdktf.numberToTerraform(struct!.ipv6Addrs),
  }
}


export function dataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPoolsRequestedNeededToHclTerraform(struct?: DataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPoolsRequestedNeeded | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_addrs: {
      value: cdktf.numberToHclTerraform(struct!.ipv4Addrs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_addrs: {
      value: cdktf.numberToHclTerraform(struct!.ipv6Addrs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPoolsRequestedNeededOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPoolsRequestedNeeded | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Addrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Addrs = this._ipv4Addrs;
    }
    if (this._ipv6Addrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Addrs = this._ipv6Addrs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPoolsRequestedNeeded | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4Addrs = undefined;
      this._ipv6Addrs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4Addrs = value.ipv4Addrs;
      this._ipv6Addrs = value.ipv6Addrs;
    }
  }

  // ipv4_addrs - computed: false, optional: true, required: false
  private _ipv4Addrs?: number; 
  public get ipv4Addrs() {
    return this.getNumberAttribute('ipv4_addrs');
  }
  public set ipv4Addrs(value: number) {
    this._ipv4Addrs = value;
  }
  public resetIpv4Addrs() {
    this._ipv4Addrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddrsInput() {
    return this._ipv4Addrs;
  }

  // ipv6_addrs - computed: false, optional: true, required: false
  private _ipv6Addrs?: number; 
  public get ipv6Addrs() {
    return this.getNumberAttribute('ipv6_addrs');
  }
  public set ipv6Addrs(value: number) {
    this._ipv6Addrs = value;
  }
  public resetIpv6Addrs() {
    this._ipv6Addrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddrsInput() {
    return this._ipv6Addrs;
  }
}
export interface DataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPoolsRequested {
  /**
  * Needed indicates how many IPs out of the above Pool this node requests from the operator. The operator runs a reconciliation loop to ensure each node always has enough PodCIDRs allocated in each pool to fulfill the requested number of IPs here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#needed DataK8SCiliumIoCiliumNodeV2Manifest#needed}
  */
  readonly needed?: DataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPoolsRequestedNeeded;
  /**
  * Pool is the name of the IPAM pool backing this request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#pool DataK8SCiliumIoCiliumNodeV2Manifest#pool}
  */
  readonly pool: string;
}

export function dataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPoolsRequestedToTerraform(struct?: DataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPoolsRequested | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    needed: dataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPoolsRequestedNeededToTerraform(struct!.needed),
    pool: cdktf.stringToTerraform(struct!.pool),
  }
}


export function dataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPoolsRequestedToHclTerraform(struct?: DataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPoolsRequested | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    needed: {
      value: dataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPoolsRequestedNeededToHclTerraform(struct!.needed),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPoolsRequestedNeeded",
    },
    pool: {
      value: cdktf.stringToHclTerraform(struct!.pool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPoolsRequestedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPoolsRequested | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._needed?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.needed = this._needed?.internalValue;
    }
    if (this._pool !== undefined) {
      hasAnyValues = true;
      internalValueResult.pool = this._pool;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPoolsRequested | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._needed.internalValue = undefined;
      this._pool = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._needed.internalValue = value.needed;
      this._pool = value.pool;
    }
  }

  // needed - computed: false, optional: true, required: false
  private _needed = new DataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPoolsRequestedNeededOutputReference(this, "needed");
  public get needed() {
    return this._needed;
  }
  public putNeeded(value: DataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPoolsRequestedNeeded) {
    this._needed.internalValue = value;
  }
  public resetNeeded() {
    this._needed.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neededInput() {
    return this._needed.internalValue;
  }

  // pool - computed: false, optional: false, required: true
  private _pool?: string; 
  public get pool() {
    return this.getStringAttribute('pool');
  }
  public set pool(value: string) {
    this._pool = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool;
  }
}

export class DataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPoolsRequestedList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPoolsRequested[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPoolsRequestedOutputReference {
    return new DataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPoolsRequestedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPools {
  /**
  * Allocated contains the list of pooled CIDR assigned to this node. The operator will add new pod CIDRs to this field, whereas the agent will remove CIDRs it has released.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#allocated DataK8SCiliumIoCiliumNodeV2Manifest#allocated}
  */
  readonly allocated?: DataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPoolsAllocated[] | cdktf.IResolvable;
  /**
  * Requested contains a list of IPAM pool requests, i.e. indicates how many addresses this node requests out of each pool listed here. This field is owned and written to by cilium-agent and read by the operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#requested DataK8SCiliumIoCiliumNodeV2Manifest#requested}
  */
  readonly requested?: DataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPoolsRequested[] | cdktf.IResolvable;
}

export function dataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPoolsToTerraform(struct?: DataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocated: cdktf.listMapper(dataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPoolsAllocatedToTerraform, false)(struct!.allocated),
    requested: cdktf.listMapper(dataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPoolsRequestedToTerraform, false)(struct!.requested),
  }
}


export function dataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPoolsToHclTerraform(struct?: DataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allocated: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPoolsAllocatedToHclTerraform, false)(struct!.allocated),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPoolsAllocatedList",
    },
    requested: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPoolsRequestedToHclTerraform, false)(struct!.requested),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPoolsRequestedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPoolsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocated?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocated = this._allocated?.internalValue;
    }
    if (this._requested?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requested = this._requested?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allocated.internalValue = undefined;
      this._requested.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allocated.internalValue = value.allocated;
      this._requested.internalValue = value.requested;
    }
  }

  // allocated - computed: false, optional: true, required: false
  private _allocated = new DataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPoolsAllocatedList(this, "allocated", false);
  public get allocated() {
    return this._allocated;
  }
  public putAllocated(value: DataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPoolsAllocated[] | cdktf.IResolvable) {
    this._allocated.internalValue = value;
  }
  public resetAllocated() {
    this._allocated.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocatedInput() {
    return this._allocated.internalValue;
  }

  // requested - computed: false, optional: true, required: false
  private _requested = new DataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPoolsRequestedList(this, "requested", false);
  public get requested() {
    return this._requested;
  }
  public putRequested(value: DataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPoolsRequested[] | cdktf.IResolvable) {
    this._requested.internalValue = value;
  }
  public resetRequested() {
    this._requested.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestedInput() {
    return this._requested.internalValue;
  }
}
export interface DataK8SCiliumIoCiliumNodeV2ManifestSpecIpam {
  /**
  * IPv6Pool is the list of IPv6 addresses available to the node for allocation. When an IPv6 address is used, it will remain on this list but will be added to Status.IPAM.IPv6Used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#ipv6_pool DataK8SCiliumIoCiliumNodeV2Manifest#ipv6_pool}
  */
  readonly ipv6Pool?: DataK8SCiliumIoCiliumNodeV2ManifestSpecIpamIpv6Pool;
  /**
  * MaxAboveWatermark is the maximum number of addresses to allocate beyond the addresses needed to reach the PreAllocate watermark. Going above the watermark can help reduce the number of API calls to allocate IPs, e.g. when a new ENI is allocated, as many secondary IPs as possible are allocated. Limiting the amount can help reduce waste of IPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#max_above_watermark DataK8SCiliumIoCiliumNodeV2Manifest#max_above_watermark}
  */
  readonly maxAboveWatermark?: number;
  /**
  * MaxAllocate is the maximum number of IPs that can be allocated to the node. When the current amount of allocated IPs will approach this value, the considered value for PreAllocate will decrease down to 0 in order to not attempt to allocate more addresses than defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#max_allocate DataK8SCiliumIoCiliumNodeV2Manifest#max_allocate}
  */
  readonly maxAllocate?: number;
  /**
  * MinAllocate is the minimum number of IPs that must be allocated when the node is first bootstrapped. It defines the minimum base socket of addresses that must be available. After reaching this watermark, the PreAllocate and MaxAboveWatermark logic takes over to continue allocating IPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#min_allocate DataK8SCiliumIoCiliumNodeV2Manifest#min_allocate}
  */
  readonly minAllocate?: number;
  /**
  * PodCIDRs is the list of CIDRs available to the node for allocation. When an IP is used, the IP will be added to Status.IPAM.Used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#pod_cidrs DataK8SCiliumIoCiliumNodeV2Manifest#pod_cidrs}
  */
  readonly podCidrs?: string[];
  /**
  * Pool is the list of IPv4 addresses available to the node for allocation. When an IPv4 address is used, it will remain on this list but will be added to Status.IPAM.Used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#pool DataK8SCiliumIoCiliumNodeV2Manifest#pool}
  */
  readonly pool?: DataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPool;
  /**
  * Pools contains the list of assigned IPAM pools for this node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#pools DataK8SCiliumIoCiliumNodeV2Manifest#pools}
  */
  readonly pools?: DataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPools;
  /**
  * PreAllocate defines the number of IP addresses that must be available for allocation in the IPAMspec. It defines the buffer of addresses available immediately without requiring cilium-operator to get involved.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#pre_allocate DataK8SCiliumIoCiliumNodeV2Manifest#pre_allocate}
  */
  readonly preAllocate?: number;
  /**
  * StaticIPTags are used to determine the pool of IPs from which to attribute a static IP to the node. For example in AWS this is used to filter Elastic IP Addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#static_ip_tags DataK8SCiliumIoCiliumNodeV2Manifest#static_ip_tags}
  */
  readonly staticIpTags?: { [key: string]: string };
}

export function dataK8SCiliumIoCiliumNodeV2ManifestSpecIpamToTerraform(struct?: DataK8SCiliumIoCiliumNodeV2ManifestSpecIpam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_pool: dataK8SCiliumIoCiliumNodeV2ManifestSpecIpamIpv6PoolToTerraform(struct!.ipv6Pool),
    max_above_watermark: cdktf.numberToTerraform(struct!.maxAboveWatermark),
    max_allocate: cdktf.numberToTerraform(struct!.maxAllocate),
    min_allocate: cdktf.numberToTerraform(struct!.minAllocate),
    pod_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.podCidrs),
    pool: dataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPoolToTerraform(struct!.pool),
    pools: dataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPoolsToTerraform(struct!.pools),
    pre_allocate: cdktf.numberToTerraform(struct!.preAllocate),
    static_ip_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.staticIpTags),
  }
}


export function dataK8SCiliumIoCiliumNodeV2ManifestSpecIpamToHclTerraform(struct?: DataK8SCiliumIoCiliumNodeV2ManifestSpecIpam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6_pool: {
      value: dataK8SCiliumIoCiliumNodeV2ManifestSpecIpamIpv6PoolToHclTerraform(struct!.ipv6Pool),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNodeV2ManifestSpecIpamIpv6Pool",
    },
    max_above_watermark: {
      value: cdktf.numberToHclTerraform(struct!.maxAboveWatermark),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_allocate: {
      value: cdktf.numberToHclTerraform(struct!.maxAllocate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_allocate: {
      value: cdktf.numberToHclTerraform(struct!.minAllocate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pod_cidrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.podCidrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pool: {
      value: dataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPoolToHclTerraform(struct!.pool),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPool",
    },
    pools: {
      value: dataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPoolsToHclTerraform(struct!.pools),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPools",
    },
    pre_allocate: {
      value: cdktf.numberToHclTerraform(struct!.preAllocate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    static_ip_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.staticIpTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNodeV2ManifestSpecIpamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNodeV2ManifestSpecIpam | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6Pool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Pool = this._ipv6Pool?.internalValue;
    }
    if (this._maxAboveWatermark !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAboveWatermark = this._maxAboveWatermark;
    }
    if (this._maxAllocate !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAllocate = this._maxAllocate;
    }
    if (this._minAllocate !== undefined) {
      hasAnyValues = true;
      internalValueResult.minAllocate = this._minAllocate;
    }
    if (this._podCidrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.podCidrs = this._podCidrs;
    }
    if (this._pool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pool = this._pool?.internalValue;
    }
    if (this._pools?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pools = this._pools?.internalValue;
    }
    if (this._preAllocate !== undefined) {
      hasAnyValues = true;
      internalValueResult.preAllocate = this._preAllocate;
    }
    if (this._staticIpTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIpTags = this._staticIpTags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNodeV2ManifestSpecIpam | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv6Pool.internalValue = undefined;
      this._maxAboveWatermark = undefined;
      this._maxAllocate = undefined;
      this._minAllocate = undefined;
      this._podCidrs = undefined;
      this._pool.internalValue = undefined;
      this._pools.internalValue = undefined;
      this._preAllocate = undefined;
      this._staticIpTags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv6Pool.internalValue = value.ipv6Pool;
      this._maxAboveWatermark = value.maxAboveWatermark;
      this._maxAllocate = value.maxAllocate;
      this._minAllocate = value.minAllocate;
      this._podCidrs = value.podCidrs;
      this._pool.internalValue = value.pool;
      this._pools.internalValue = value.pools;
      this._preAllocate = value.preAllocate;
      this._staticIpTags = value.staticIpTags;
    }
  }

  // ipv6_pool - computed: false, optional: true, required: false
  private _ipv6Pool = new DataK8SCiliumIoCiliumNodeV2ManifestSpecIpamIpv6PoolOutputReference(this, "ipv6_pool");
  public get ipv6Pool() {
    return this._ipv6Pool;
  }
  public putIpv6Pool(value: DataK8SCiliumIoCiliumNodeV2ManifestSpecIpamIpv6Pool) {
    this._ipv6Pool.internalValue = value;
  }
  public resetIpv6Pool() {
    this._ipv6Pool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PoolInput() {
    return this._ipv6Pool.internalValue;
  }

  // max_above_watermark - computed: false, optional: true, required: false
  private _maxAboveWatermark?: number; 
  public get maxAboveWatermark() {
    return this.getNumberAttribute('max_above_watermark');
  }
  public set maxAboveWatermark(value: number) {
    this._maxAboveWatermark = value;
  }
  public resetMaxAboveWatermark() {
    this._maxAboveWatermark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAboveWatermarkInput() {
    return this._maxAboveWatermark;
  }

  // max_allocate - computed: false, optional: true, required: false
  private _maxAllocate?: number; 
  public get maxAllocate() {
    return this.getNumberAttribute('max_allocate');
  }
  public set maxAllocate(value: number) {
    this._maxAllocate = value;
  }
  public resetMaxAllocate() {
    this._maxAllocate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAllocateInput() {
    return this._maxAllocate;
  }

  // min_allocate - computed: false, optional: true, required: false
  private _minAllocate?: number; 
  public get minAllocate() {
    return this.getNumberAttribute('min_allocate');
  }
  public set minAllocate(value: number) {
    this._minAllocate = value;
  }
  public resetMinAllocate() {
    this._minAllocate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minAllocateInput() {
    return this._minAllocate;
  }

  // pod_cidrs - computed: false, optional: true, required: false
  private _podCidrs?: string[]; 
  public get podCidrs() {
    return this.getListAttribute('pod_cidrs');
  }
  public set podCidrs(value: string[]) {
    this._podCidrs = value;
  }
  public resetPodCidrs() {
    this._podCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podCidrsInput() {
    return this._podCidrs;
  }

  // pool - computed: false, optional: true, required: false
  private _pool = new DataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPoolOutputReference(this, "pool");
  public get pool() {
    return this._pool;
  }
  public putPool(value: DataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPool) {
    this._pool.internalValue = value;
  }
  public resetPool() {
    this._pool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool.internalValue;
  }

  // pools - computed: false, optional: true, required: false
  private _pools = new DataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPoolsOutputReference(this, "pools");
  public get pools() {
    return this._pools;
  }
  public putPools(value: DataK8SCiliumIoCiliumNodeV2ManifestSpecIpamPools) {
    this._pools.internalValue = value;
  }
  public resetPools() {
    this._pools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolsInput() {
    return this._pools.internalValue;
  }

  // pre_allocate - computed: false, optional: true, required: false
  private _preAllocate?: number; 
  public get preAllocate() {
    return this.getNumberAttribute('pre_allocate');
  }
  public set preAllocate(value: number) {
    this._preAllocate = value;
  }
  public resetPreAllocate() {
    this._preAllocate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preAllocateInput() {
    return this._preAllocate;
  }

  // static_ip_tags - computed: false, optional: true, required: false
  private _staticIpTags?: { [key: string]: string }; 
  public get staticIpTags() {
    return this.getStringMapAttribute('static_ip_tags');
  }
  public set staticIpTags(value: { [key: string]: string }) {
    this._staticIpTags = value;
  }
  public resetStaticIpTags() {
    this._staticIpTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpTagsInput() {
    return this._staticIpTags;
  }
}
export interface DataK8SCiliumIoCiliumNodeV2ManifestSpec {
  /**
  * Addresses is the list of all node addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#addresses DataK8SCiliumIoCiliumNodeV2Manifest#addresses}
  */
  readonly addresses?: DataK8SCiliumIoCiliumNodeV2ManifestSpecAddresses[] | cdktf.IResolvable;
  /**
  * AlibabaCloud is the AlibabaCloud IPAM specific configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#alibaba_cloud DataK8SCiliumIoCiliumNodeV2Manifest#alibaba_cloud}
  */
  readonly alibabaCloud?: DataK8SCiliumIoCiliumNodeV2ManifestSpecAlibabaCloud;
  /**
  * Azure is the Azure IPAM specific configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#azure DataK8SCiliumIoCiliumNodeV2Manifest#azure}
  */
  readonly azure?: DataK8SCiliumIoCiliumNodeV2ManifestSpecAzure;
  /**
  * BootID is a unique node identifier generated on boot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#bootid DataK8SCiliumIoCiliumNodeV2Manifest#bootid}
  */
  readonly bootid?: string;
  /**
  * Encryption is the encryption configuration of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#encryption DataK8SCiliumIoCiliumNodeV2Manifest#encryption}
  */
  readonly encryption?: DataK8SCiliumIoCiliumNodeV2ManifestSpecEncryption;
  /**
  * ENI is the AWS ENI specific configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#eni DataK8SCiliumIoCiliumNodeV2Manifest#eni}
  */
  readonly eni?: DataK8SCiliumIoCiliumNodeV2ManifestSpecEni;
  /**
  * HealthAddressing is the addressing information for health connectivity checking.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#health DataK8SCiliumIoCiliumNodeV2Manifest#health}
  */
  readonly health?: DataK8SCiliumIoCiliumNodeV2ManifestSpecHealth;
  /**
  * IngressAddressing is the addressing information for Ingress listener.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#ingress DataK8SCiliumIoCiliumNodeV2Manifest#ingress}
  */
  readonly ingress?: DataK8SCiliumIoCiliumNodeV2ManifestSpecIngress;
  /**
  * InstanceID is the identifier of the node. This is different from the node name which is typically the FQDN of the node. The InstanceID typically refers to the identifier used by the cloud provider or some other means of identification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#instance_id DataK8SCiliumIoCiliumNodeV2Manifest#instance_id}
  */
  readonly instanceId?: string;
  /**
  * IPAM is the address management specification. This section can be populated by a user or it can be automatically populated by an IPAM operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#ipam DataK8SCiliumIoCiliumNodeV2Manifest#ipam}
  */
  readonly ipam?: DataK8SCiliumIoCiliumNodeV2ManifestSpecIpam;
  /**
  * NodeIdentity is the Cilium numeric identity allocated for the node, if any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#nodeidentity DataK8SCiliumIoCiliumNodeV2Manifest#nodeidentity}
  */
  readonly nodeidentity?: number;
}

export function dataK8SCiliumIoCiliumNodeV2ManifestSpecToTerraform(struct?: DataK8SCiliumIoCiliumNodeV2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addresses: cdktf.listMapper(dataK8SCiliumIoCiliumNodeV2ManifestSpecAddressesToTerraform, false)(struct!.addresses),
    alibaba_cloud: dataK8SCiliumIoCiliumNodeV2ManifestSpecAlibabaCloudToTerraform(struct!.alibabaCloud),
    azure: dataK8SCiliumIoCiliumNodeV2ManifestSpecAzureToTerraform(struct!.azure),
    bootid: cdktf.stringToTerraform(struct!.bootid),
    encryption: dataK8SCiliumIoCiliumNodeV2ManifestSpecEncryptionToTerraform(struct!.encryption),
    eni: dataK8SCiliumIoCiliumNodeV2ManifestSpecEniToTerraform(struct!.eni),
    health: dataK8SCiliumIoCiliumNodeV2ManifestSpecHealthToTerraform(struct!.health),
    ingress: dataK8SCiliumIoCiliumNodeV2ManifestSpecIngressToTerraform(struct!.ingress),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    ipam: dataK8SCiliumIoCiliumNodeV2ManifestSpecIpamToTerraform(struct!.ipam),
    nodeidentity: cdktf.numberToTerraform(struct!.nodeidentity),
  }
}


export function dataK8SCiliumIoCiliumNodeV2ManifestSpecToHclTerraform(struct?: DataK8SCiliumIoCiliumNodeV2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addresses: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNodeV2ManifestSpecAddressesToHclTerraform, false)(struct!.addresses),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNodeV2ManifestSpecAddressesList",
    },
    alibaba_cloud: {
      value: dataK8SCiliumIoCiliumNodeV2ManifestSpecAlibabaCloudToHclTerraform(struct!.alibabaCloud),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNodeV2ManifestSpecAlibabaCloud",
    },
    azure: {
      value: dataK8SCiliumIoCiliumNodeV2ManifestSpecAzureToHclTerraform(struct!.azure),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNodeV2ManifestSpecAzure",
    },
    bootid: {
      value: cdktf.stringToHclTerraform(struct!.bootid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption: {
      value: dataK8SCiliumIoCiliumNodeV2ManifestSpecEncryptionToHclTerraform(struct!.encryption),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNodeV2ManifestSpecEncryption",
    },
    eni: {
      value: dataK8SCiliumIoCiliumNodeV2ManifestSpecEniToHclTerraform(struct!.eni),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNodeV2ManifestSpecEni",
    },
    health: {
      value: dataK8SCiliumIoCiliumNodeV2ManifestSpecHealthToHclTerraform(struct!.health),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNodeV2ManifestSpecHealth",
    },
    ingress: {
      value: dataK8SCiliumIoCiliumNodeV2ManifestSpecIngressToHclTerraform(struct!.ingress),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNodeV2ManifestSpecIngress",
    },
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipam: {
      value: dataK8SCiliumIoCiliumNodeV2ManifestSpecIpamToHclTerraform(struct!.ipam),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNodeV2ManifestSpecIpam",
    },
    nodeidentity: {
      value: cdktf.numberToHclTerraform(struct!.nodeidentity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNodeV2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNodeV2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addresses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addresses = this._addresses?.internalValue;
    }
    if (this._alibabaCloud?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alibabaCloud = this._alibabaCloud?.internalValue;
    }
    if (this._azure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azure = this._azure?.internalValue;
    }
    if (this._bootid !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootid = this._bootid;
    }
    if (this._encryption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryption = this._encryption?.internalValue;
    }
    if (this._eni?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eni = this._eni?.internalValue;
    }
    if (this._health?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.health = this._health?.internalValue;
    }
    if (this._ingress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingress = this._ingress?.internalValue;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._ipam?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipam = this._ipam?.internalValue;
    }
    if (this._nodeidentity !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeidentity = this._nodeidentity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNodeV2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addresses.internalValue = undefined;
      this._alibabaCloud.internalValue = undefined;
      this._azure.internalValue = undefined;
      this._bootid = undefined;
      this._encryption.internalValue = undefined;
      this._eni.internalValue = undefined;
      this._health.internalValue = undefined;
      this._ingress.internalValue = undefined;
      this._instanceId = undefined;
      this._ipam.internalValue = undefined;
      this._nodeidentity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addresses.internalValue = value.addresses;
      this._alibabaCloud.internalValue = value.alibabaCloud;
      this._azure.internalValue = value.azure;
      this._bootid = value.bootid;
      this._encryption.internalValue = value.encryption;
      this._eni.internalValue = value.eni;
      this._health.internalValue = value.health;
      this._ingress.internalValue = value.ingress;
      this._instanceId = value.instanceId;
      this._ipam.internalValue = value.ipam;
      this._nodeidentity = value.nodeidentity;
    }
  }

  // addresses - computed: false, optional: true, required: false
  private _addresses = new DataK8SCiliumIoCiliumNodeV2ManifestSpecAddressesList(this, "addresses", false);
  public get addresses() {
    return this._addresses;
  }
  public putAddresses(value: DataK8SCiliumIoCiliumNodeV2ManifestSpecAddresses[] | cdktf.IResolvable) {
    this._addresses.internalValue = value;
  }
  public resetAddresses() {
    this._addresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressesInput() {
    return this._addresses.internalValue;
  }

  // alibaba_cloud - computed: false, optional: true, required: false
  private _alibabaCloud = new DataK8SCiliumIoCiliumNodeV2ManifestSpecAlibabaCloudOutputReference(this, "alibaba_cloud");
  public get alibabaCloud() {
    return this._alibabaCloud;
  }
  public putAlibabaCloud(value: DataK8SCiliumIoCiliumNodeV2ManifestSpecAlibabaCloud) {
    this._alibabaCloud.internalValue = value;
  }
  public resetAlibabaCloud() {
    this._alibabaCloud.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alibabaCloudInput() {
    return this._alibabaCloud.internalValue;
  }

  // azure - computed: false, optional: true, required: false
  private _azure = new DataK8SCiliumIoCiliumNodeV2ManifestSpecAzureOutputReference(this, "azure");
  public get azure() {
    return this._azure;
  }
  public putAzure(value: DataK8SCiliumIoCiliumNodeV2ManifestSpecAzure) {
    this._azure.internalValue = value;
  }
  public resetAzure() {
    this._azure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureInput() {
    return this._azure.internalValue;
  }

  // bootid - computed: false, optional: true, required: false
  private _bootid?: string; 
  public get bootid() {
    return this.getStringAttribute('bootid');
  }
  public set bootid(value: string) {
    this._bootid = value;
  }
  public resetBootid() {
    this._bootid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootidInput() {
    return this._bootid;
  }

  // encryption - computed: false, optional: true, required: false
  private _encryption = new DataK8SCiliumIoCiliumNodeV2ManifestSpecEncryptionOutputReference(this, "encryption");
  public get encryption() {
    return this._encryption;
  }
  public putEncryption(value: DataK8SCiliumIoCiliumNodeV2ManifestSpecEncryption) {
    this._encryption.internalValue = value;
  }
  public resetEncryption() {
    this._encryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption.internalValue;
  }

  // eni - computed: false, optional: true, required: false
  private _eni = new DataK8SCiliumIoCiliumNodeV2ManifestSpecEniOutputReference(this, "eni");
  public get eni() {
    return this._eni;
  }
  public putEni(value: DataK8SCiliumIoCiliumNodeV2ManifestSpecEni) {
    this._eni.internalValue = value;
  }
  public resetEni() {
    this._eni.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eniInput() {
    return this._eni.internalValue;
  }

  // health - computed: false, optional: true, required: false
  private _health = new DataK8SCiliumIoCiliumNodeV2ManifestSpecHealthOutputReference(this, "health");
  public get health() {
    return this._health;
  }
  public putHealth(value: DataK8SCiliumIoCiliumNodeV2ManifestSpecHealth) {
    this._health.internalValue = value;
  }
  public resetHealth() {
    this._health.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthInput() {
    return this._health.internalValue;
  }

  // ingress - computed: false, optional: true, required: false
  private _ingress = new DataK8SCiliumIoCiliumNodeV2ManifestSpecIngressOutputReference(this, "ingress");
  public get ingress() {
    return this._ingress;
  }
  public putIngress(value: DataK8SCiliumIoCiliumNodeV2ManifestSpecIngress) {
    this._ingress.internalValue = value;
  }
  public resetIngress() {
    this._ingress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressInput() {
    return this._ingress.internalValue;
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // ipam - computed: false, optional: true, required: false
  private _ipam = new DataK8SCiliumIoCiliumNodeV2ManifestSpecIpamOutputReference(this, "ipam");
  public get ipam() {
    return this._ipam;
  }
  public putIpam(value: DataK8SCiliumIoCiliumNodeV2ManifestSpecIpam) {
    this._ipam.internalValue = value;
  }
  public resetIpam() {
    this._ipam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipamInput() {
    return this._ipam.internalValue;
  }

  // nodeidentity - computed: false, optional: true, required: false
  private _nodeidentity?: number; 
  public get nodeidentity() {
    return this.getNumberAttribute('nodeidentity');
  }
  public set nodeidentity(value: number) {
    this._nodeidentity = value;
  }
  public resetNodeidentity() {
    this._nodeidentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeidentityInput() {
    return this._nodeidentity;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest k8s_cilium_io_cilium_node_v2_manifest}
*/
export class DataK8SCiliumIoCiliumNodeV2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_cilium_io_cilium_node_v2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCiliumIoCiliumNodeV2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCiliumIoCiliumNodeV2Manifest to import
  * @param importFromId The id of the existing DataK8SCiliumIoCiliumNodeV2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCiliumIoCiliumNodeV2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_cilium_io_cilium_node_v2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_node_v2_manifest k8s_cilium_io_cilium_node_v2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCiliumIoCiliumNodeV2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCiliumIoCiliumNodeV2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_cilium_io_cilium_node_v2_manifest',
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
  private _metadata = new DataK8SCiliumIoCiliumNodeV2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCiliumIoCiliumNodeV2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SCiliumIoCiliumNodeV2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCiliumIoCiliumNodeV2ManifestSpec) {
    this._spec.internalValue = value;
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
      metadata: dataK8SCiliumIoCiliumNodeV2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SCiliumIoCiliumNodeV2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SCiliumIoCiliumNodeV2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCiliumIoCiliumNodeV2ManifestMetadata",
      },
      spec: {
        value: dataK8SCiliumIoCiliumNodeV2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCiliumIoCiliumNodeV2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
