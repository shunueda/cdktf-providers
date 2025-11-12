// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/crd_projectcalico_org_ipam_block_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCrdProjectcalicoOrgIpamBlockV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/crd_projectcalico_org_ipam_block_v1_manifest#metadata DataK8SCrdProjectcalicoOrgIpamBlockV1Manifest#metadata}
  */
  readonly metadata: DataK8SCrdProjectcalicoOrgIpamBlockV1ManifestMetadata;
  /**
  * IPAMBlockSpec contains the specification for an IPAMBlock resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/crd_projectcalico_org_ipam_block_v1_manifest#spec DataK8SCrdProjectcalicoOrgIpamBlockV1Manifest#spec}
  */
  readonly spec?: DataK8SCrdProjectcalicoOrgIpamBlockV1ManifestSpec;
}
export interface DataK8SCrdProjectcalicoOrgIpamBlockV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/crd_projectcalico_org_ipam_block_v1_manifest#annotations DataK8SCrdProjectcalicoOrgIpamBlockV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/crd_projectcalico_org_ipam_block_v1_manifest#labels DataK8SCrdProjectcalicoOrgIpamBlockV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/crd_projectcalico_org_ipam_block_v1_manifest#name DataK8SCrdProjectcalicoOrgIpamBlockV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SCrdProjectcalicoOrgIpamBlockV1ManifestMetadataToTerraform(struct?: DataK8SCrdProjectcalicoOrgIpamBlockV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SCrdProjectcalicoOrgIpamBlockV1ManifestMetadataToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgIpamBlockV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SCrdProjectcalicoOrgIpamBlockV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCrdProjectcalicoOrgIpamBlockV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCrdProjectcalicoOrgIpamBlockV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SCrdProjectcalicoOrgIpamBlockV1ManifestSpecAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/crd_projectcalico_org_ipam_block_v1_manifest#handle_id DataK8SCrdProjectcalicoOrgIpamBlockV1Manifest#handle_id}
  */
  readonly handleId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/crd_projectcalico_org_ipam_block_v1_manifest#secondary DataK8SCrdProjectcalicoOrgIpamBlockV1Manifest#secondary}
  */
  readonly secondary?: { [key: string]: string };
}

export function dataK8SCrdProjectcalicoOrgIpamBlockV1ManifestSpecAttributesToTerraform(struct?: DataK8SCrdProjectcalicoOrgIpamBlockV1ManifestSpecAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    handle_id: cdktf.stringToTerraform(struct!.handleId),
    secondary: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.secondary),
  }
}


export function dataK8SCrdProjectcalicoOrgIpamBlockV1ManifestSpecAttributesToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgIpamBlockV1ManifestSpecAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    handle_id: {
      value: cdktf.stringToHclTerraform(struct!.handleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.secondary),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCrdProjectcalicoOrgIpamBlockV1ManifestSpecAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCrdProjectcalicoOrgIpamBlockV1ManifestSpecAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._handleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.handleId = this._handleId;
    }
    if (this._secondary !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondary = this._secondary;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCrdProjectcalicoOrgIpamBlockV1ManifestSpecAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._handleId = undefined;
      this._secondary = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._handleId = value.handleId;
      this._secondary = value.secondary;
    }
  }

  // handle_id - computed: false, optional: true, required: false
  private _handleId?: string; 
  public get handleId() {
    return this.getStringAttribute('handle_id');
  }
  public set handleId(value: string) {
    this._handleId = value;
  }
  public resetHandleId() {
    this._handleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handleIdInput() {
    return this._handleId;
  }

  // secondary - computed: false, optional: true, required: false
  private _secondary?: { [key: string]: string }; 
  public get secondary() {
    return this.getStringMapAttribute('secondary');
  }
  public set secondary(value: { [key: string]: string }) {
    this._secondary = value;
  }
  public resetSecondary() {
    this._secondary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryInput() {
    return this._secondary;
  }
}

export class DataK8SCrdProjectcalicoOrgIpamBlockV1ManifestSpecAttributesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCrdProjectcalicoOrgIpamBlockV1ManifestSpecAttributes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCrdProjectcalicoOrgIpamBlockV1ManifestSpecAttributesOutputReference {
    return new DataK8SCrdProjectcalicoOrgIpamBlockV1ManifestSpecAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCrdProjectcalicoOrgIpamBlockV1ManifestSpec {
  /**
  * Affinity of the block, if this block has one. If set, it will be of the form 'host:<hostname>'. If not set, this block is not affine to a host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/crd_projectcalico_org_ipam_block_v1_manifest#affinity DataK8SCrdProjectcalicoOrgIpamBlockV1Manifest#affinity}
  */
  readonly affinity?: string;
  /**
  * Array of allocations in-use within this block. nil entries mean the allocation is free. For non-nil entries at index i, the index is the ordinal of the allocation within this block and the value is the index of the associated attributes in the Attributes array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/crd_projectcalico_org_ipam_block_v1_manifest#allocations DataK8SCrdProjectcalicoOrgIpamBlockV1Manifest#allocations}
  */
  readonly allocations: string[];
  /**
  * Attributes is an array of arbitrary metadata associated with allocations in the block. To find attributes for a given allocation, use the value of the allocation's entry in the Allocations array as the index of the element in this array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/crd_projectcalico_org_ipam_block_v1_manifest#attributes DataK8SCrdProjectcalicoOrgIpamBlockV1Manifest#attributes}
  */
  readonly attributes: DataK8SCrdProjectcalicoOrgIpamBlockV1ManifestSpecAttributes[] | cdktf.IResolvable;
  /**
  * The block's CIDR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/crd_projectcalico_org_ipam_block_v1_manifest#cidr DataK8SCrdProjectcalicoOrgIpamBlockV1Manifest#cidr}
  */
  readonly cidr: string;
  /**
  * Deleted is an internal boolean used to workaround a limitation in the Kubernetes API whereby deletion will not return a conflict error if the block has been updated. It should not be set manually.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/crd_projectcalico_org_ipam_block_v1_manifest#deleted DataK8SCrdProjectcalicoOrgIpamBlockV1Manifest#deleted}
  */
  readonly deleted?: boolean | cdktf.IResolvable;
  /**
  * We store a sequence number that is updated each time the block is written. Each allocation will also store the sequence number of the block at the time of its creation. When releasing an IP, passing the sequence number associated with the allocation allows us to protect against a race condition and ensure the IP hasn't been released and re-allocated since the release request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/crd_projectcalico_org_ipam_block_v1_manifest#sequence_number DataK8SCrdProjectcalicoOrgIpamBlockV1Manifest#sequence_number}
  */
  readonly sequenceNumber?: number;
  /**
  * Map of allocated ordinal within the block to sequence number of the block at the time of allocation. Kubernetes does not allow numerical keys for maps, so the key is cast to a string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/crd_projectcalico_org_ipam_block_v1_manifest#sequence_number_for_allocation DataK8SCrdProjectcalicoOrgIpamBlockV1Manifest#sequence_number_for_allocation}
  */
  readonly sequenceNumberForAllocation?: { [key: string]: string };
  /**
  * StrictAffinity on the IPAMBlock is deprecated and no longer used by the code. Use IPAMConfig StrictAffinity instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/crd_projectcalico_org_ipam_block_v1_manifest#strict_affinity DataK8SCrdProjectcalicoOrgIpamBlockV1Manifest#strict_affinity}
  */
  readonly strictAffinity: boolean | cdktf.IResolvable;
  /**
  * Unallocated is an ordered list of allocations which are free in the block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/crd_projectcalico_org_ipam_block_v1_manifest#unallocated DataK8SCrdProjectcalicoOrgIpamBlockV1Manifest#unallocated}
  */
  readonly unallocated: string[];
}

export function dataK8SCrdProjectcalicoOrgIpamBlockV1ManifestSpecToTerraform(struct?: DataK8SCrdProjectcalicoOrgIpamBlockV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: cdktf.stringToTerraform(struct!.affinity),
    allocations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allocations),
    attributes: cdktf.listMapper(dataK8SCrdProjectcalicoOrgIpamBlockV1ManifestSpecAttributesToTerraform, false)(struct!.attributes),
    cidr: cdktf.stringToTerraform(struct!.cidr),
    deleted: cdktf.booleanToTerraform(struct!.deleted),
    sequence_number: cdktf.numberToTerraform(struct!.sequenceNumber),
    sequence_number_for_allocation: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.sequenceNumberForAllocation),
    strict_affinity: cdktf.booleanToTerraform(struct!.strictAffinity),
    unallocated: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.unallocated),
  }
}


export function dataK8SCrdProjectcalicoOrgIpamBlockV1ManifestSpecToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgIpamBlockV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity: {
      value: cdktf.stringToHclTerraform(struct!.affinity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allocations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allocations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    attributes: {
      value: cdktf.listMapperHcl(dataK8SCrdProjectcalicoOrgIpamBlockV1ManifestSpecAttributesToHclTerraform, false)(struct!.attributes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCrdProjectcalicoOrgIpamBlockV1ManifestSpecAttributesList",
    },
    cidr: {
      value: cdktf.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deleted: {
      value: cdktf.booleanToHclTerraform(struct!.deleted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sequence_number: {
      value: cdktf.numberToHclTerraform(struct!.sequenceNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sequence_number_for_allocation: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.sequenceNumberForAllocation),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    strict_affinity: {
      value: cdktf.booleanToHclTerraform(struct!.strictAffinity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    unallocated: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.unallocated),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCrdProjectcalicoOrgIpamBlockV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCrdProjectcalicoOrgIpamBlockV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._affinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity;
    }
    if (this._allocations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocations = this._allocations;
    }
    if (this._attributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes?.internalValue;
    }
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    if (this._deleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleted = this._deleted;
    }
    if (this._sequenceNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.sequenceNumber = this._sequenceNumber;
    }
    if (this._sequenceNumberForAllocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.sequenceNumberForAllocation = this._sequenceNumberForAllocation;
    }
    if (this._strictAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.strictAffinity = this._strictAffinity;
    }
    if (this._unallocated !== undefined) {
      hasAnyValues = true;
      internalValueResult.unallocated = this._unallocated;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCrdProjectcalicoOrgIpamBlockV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinity = undefined;
      this._allocations = undefined;
      this._attributes.internalValue = undefined;
      this._cidr = undefined;
      this._deleted = undefined;
      this._sequenceNumber = undefined;
      this._sequenceNumberForAllocation = undefined;
      this._strictAffinity = undefined;
      this._unallocated = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._affinity = value.affinity;
      this._allocations = value.allocations;
      this._attributes.internalValue = value.attributes;
      this._cidr = value.cidr;
      this._deleted = value.deleted;
      this._sequenceNumber = value.sequenceNumber;
      this._sequenceNumberForAllocation = value.sequenceNumberForAllocation;
      this._strictAffinity = value.strictAffinity;
      this._unallocated = value.unallocated;
    }
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity?: string; 
  public get affinity() {
    return this.getStringAttribute('affinity');
  }
  public set affinity(value: string) {
    this._affinity = value;
  }
  public resetAffinity() {
    this._affinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity;
  }

  // allocations - computed: false, optional: false, required: true
  private _allocations?: string[]; 
  public get allocations() {
    return this.getListAttribute('allocations');
  }
  public set allocations(value: string[]) {
    this._allocations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationsInput() {
    return this._allocations;
  }

  // attributes - computed: false, optional: false, required: true
  private _attributes = new DataK8SCrdProjectcalicoOrgIpamBlockV1ManifestSpecAttributesList(this, "attributes", false);
  public get attributes() {
    return this._attributes;
  }
  public putAttributes(value: DataK8SCrdProjectcalicoOrgIpamBlockV1ManifestSpecAttributes[] | cdktf.IResolvable) {
    this._attributes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes.internalValue;
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

  // deleted - computed: false, optional: true, required: false
  private _deleted?: boolean | cdktf.IResolvable; 
  public get deleted() {
    return this.getBooleanAttribute('deleted');
  }
  public set deleted(value: boolean | cdktf.IResolvable) {
    this._deleted = value;
  }
  public resetDeleted() {
    this._deleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletedInput() {
    return this._deleted;
  }

  // sequence_number - computed: false, optional: true, required: false
  private _sequenceNumber?: number; 
  public get sequenceNumber() {
    return this.getNumberAttribute('sequence_number');
  }
  public set sequenceNumber(value: number) {
    this._sequenceNumber = value;
  }
  public resetSequenceNumber() {
    this._sequenceNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceNumberInput() {
    return this._sequenceNumber;
  }

  // sequence_number_for_allocation - computed: false, optional: true, required: false
  private _sequenceNumberForAllocation?: { [key: string]: string }; 
  public get sequenceNumberForAllocation() {
    return this.getStringMapAttribute('sequence_number_for_allocation');
  }
  public set sequenceNumberForAllocation(value: { [key: string]: string }) {
    this._sequenceNumberForAllocation = value;
  }
  public resetSequenceNumberForAllocation() {
    this._sequenceNumberForAllocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceNumberForAllocationInput() {
    return this._sequenceNumberForAllocation;
  }

  // strict_affinity - computed: false, optional: false, required: true
  private _strictAffinity?: boolean | cdktf.IResolvable; 
  public get strictAffinity() {
    return this.getBooleanAttribute('strict_affinity');
  }
  public set strictAffinity(value: boolean | cdktf.IResolvable) {
    this._strictAffinity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get strictAffinityInput() {
    return this._strictAffinity;
  }

  // unallocated - computed: false, optional: false, required: true
  private _unallocated?: string[]; 
  public get unallocated() {
    return this.getListAttribute('unallocated');
  }
  public set unallocated(value: string[]) {
    this._unallocated = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unallocatedInput() {
    return this._unallocated;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/crd_projectcalico_org_ipam_block_v1_manifest k8s_crd_projectcalico_org_ipam_block_v1_manifest}
*/
export class DataK8SCrdProjectcalicoOrgIpamBlockV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_crd_projectcalico_org_ipam_block_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCrdProjectcalicoOrgIpamBlockV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCrdProjectcalicoOrgIpamBlockV1Manifest to import
  * @param importFromId The id of the existing DataK8SCrdProjectcalicoOrgIpamBlockV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/crd_projectcalico_org_ipam_block_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCrdProjectcalicoOrgIpamBlockV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_crd_projectcalico_org_ipam_block_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/crd_projectcalico_org_ipam_block_v1_manifest k8s_crd_projectcalico_org_ipam_block_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCrdProjectcalicoOrgIpamBlockV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCrdProjectcalicoOrgIpamBlockV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_crd_projectcalico_org_ipam_block_v1_manifest',
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
  private _metadata = new DataK8SCrdProjectcalicoOrgIpamBlockV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCrdProjectcalicoOrgIpamBlockV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SCrdProjectcalicoOrgIpamBlockV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCrdProjectcalicoOrgIpamBlockV1ManifestSpec) {
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
      metadata: dataK8SCrdProjectcalicoOrgIpamBlockV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SCrdProjectcalicoOrgIpamBlockV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SCrdProjectcalicoOrgIpamBlockV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCrdProjectcalicoOrgIpamBlockV1ManifestMetadata",
      },
      spec: {
        value: dataK8SCrdProjectcalicoOrgIpamBlockV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCrdProjectcalicoOrgIpamBlockV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
