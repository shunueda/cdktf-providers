// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8STinkerbellOrgHardwareV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#metadata DataK8STinkerbellOrgHardwareV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8STinkerbellOrgHardwareV1Alpha1ManifestMetadata;
  /**
  * HardwareSpec defines the desired state of Hardware.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#spec DataK8STinkerbellOrgHardwareV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpec;
}
export interface DataK8STinkerbellOrgHardwareV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#annotations DataK8STinkerbellOrgHardwareV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#labels DataK8STinkerbellOrgHardwareV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#name DataK8STinkerbellOrgHardwareV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#namespace DataK8STinkerbellOrgHardwareV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8STinkerbellOrgHardwareV1Alpha1ManifestMetadataToTerraform(struct?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8STinkerbellOrgHardwareV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8STinkerbellOrgHardwareV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STinkerbellOrgHardwareV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STinkerbellOrgHardwareV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecBmcRef {
  /**
  * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#api_group DataK8STinkerbellOrgHardwareV1Alpha1Manifest#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Kind is the type of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#kind DataK8STinkerbellOrgHardwareV1Alpha1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#name DataK8STinkerbellOrgHardwareV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecBmcRefToTerraform(struct?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecBmcRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecBmcRefToHclTerraform(struct?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecBmcRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_group: {
      value: cdktf.stringToHclTerraform(struct!.apiGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecBmcRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecBmcRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroup = this._apiGroup;
    }
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

  public set internalValue(value: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecBmcRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiGroup = undefined;
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
      this._apiGroup = value.apiGroup;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // api_group - computed: false, optional: true, required: false
  private _apiGroup?: string; 
  public get apiGroup() {
    return this.getStringAttribute('api_group');
  }
  public set apiGroup(value: string) {
    this._apiGroup = value;
  }
  public resetApiGroup() {
    this._apiGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupInput() {
    return this._apiGroup;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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
export interface DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecDisks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#device DataK8STinkerbellOrgHardwareV1Alpha1Manifest#device}
  */
  readonly device?: string;
}

export function dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecDisksToTerraform(struct?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device: cdktf.stringToTerraform(struct!.device),
  }
}


export function dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecDisksToHclTerraform(struct?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device: {
      value: cdktf.stringToHclTerraform(struct!.device),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecDisks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecDisks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._device = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._device = value.device;
    }
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }
}

export class DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecDisksList extends cdktf.ComplexList {
  public internalValue? : DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecDisks[] | cdktf.IResolvable

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
  public get(index: number): DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecDisksOutputReference {
    return new DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesDhcpIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#address DataK8STinkerbellOrgHardwareV1Alpha1Manifest#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#family DataK8STinkerbellOrgHardwareV1Alpha1Manifest#family}
  */
  readonly family?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#gateway DataK8STinkerbellOrgHardwareV1Alpha1Manifest#gateway}
  */
  readonly gateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#netmask DataK8STinkerbellOrgHardwareV1Alpha1Manifest#netmask}
  */
  readonly netmask?: string;
}

export function dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesDhcpIpToTerraform(struct?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesDhcpIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    family: cdktf.numberToTerraform(struct!.family),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    netmask: cdktf.stringToTerraform(struct!.netmask),
  }
}


export function dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesDhcpIpToHclTerraform(struct?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesDhcpIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    family: {
      value: cdktf.numberToHclTerraform(struct!.family),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    netmask: {
      value: cdktf.stringToHclTerraform(struct!.netmask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesDhcpIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesDhcpIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._family !== undefined) {
      hasAnyValues = true;
      internalValueResult.family = this._family;
    }
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._netmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.netmask = this._netmask;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesDhcpIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._family = undefined;
      this._gateway = undefined;
      this._netmask = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._family = value.family;
      this._gateway = value.gateway;
      this._netmask = value.netmask;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // family - computed: false, optional: true, required: false
  private _family?: number; 
  public get family() {
    return this.getNumberAttribute('family');
  }
  public set family(value: number) {
    this._family = value;
  }
  public resetFamily() {
    this._family = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInput() {
    return this._family;
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // netmask - computed: false, optional: true, required: false
  private _netmask?: string; 
  public get netmask() {
    return this.getStringAttribute('netmask');
  }
  public set netmask(value: string) {
    this._netmask = value;
  }
  public resetNetmask() {
    this._netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netmaskInput() {
    return this._netmask;
  }
}
export interface DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesDhcp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#arch DataK8STinkerbellOrgHardwareV1Alpha1Manifest#arch}
  */
  readonly arch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#hostname DataK8STinkerbellOrgHardwareV1Alpha1Manifest#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#iface_name DataK8STinkerbellOrgHardwareV1Alpha1Manifest#iface_name}
  */
  readonly ifaceName?: string;
  /**
  * IP configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#ip DataK8STinkerbellOrgHardwareV1Alpha1Manifest#ip}
  */
  readonly ip?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesDhcpIp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#lease_time DataK8STinkerbellOrgHardwareV1Alpha1Manifest#lease_time}
  */
  readonly leaseTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#mac DataK8STinkerbellOrgHardwareV1Alpha1Manifest#mac}
  */
  readonly mac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#name_servers DataK8STinkerbellOrgHardwareV1Alpha1Manifest#name_servers}
  */
  readonly nameServers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#time_servers DataK8STinkerbellOrgHardwareV1Alpha1Manifest#time_servers}
  */
  readonly timeServers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#uefi DataK8STinkerbellOrgHardwareV1Alpha1Manifest#uefi}
  */
  readonly uefi?: boolean | cdktf.IResolvable;
  /**
  * validation pattern for VLANDID is a string number between 0-4096
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#vlan_id DataK8STinkerbellOrgHardwareV1Alpha1Manifest#vlan_id}
  */
  readonly vlanId?: string;
}

export function dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesDhcpToTerraform(struct?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesDhcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arch: cdktf.stringToTerraform(struct!.arch),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    iface_name: cdktf.stringToTerraform(struct!.ifaceName),
    ip: dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesDhcpIpToTerraform(struct!.ip),
    lease_time: cdktf.numberToTerraform(struct!.leaseTime),
    mac: cdktf.stringToTerraform(struct!.mac),
    name_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nameServers),
    time_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.timeServers),
    uefi: cdktf.booleanToTerraform(struct!.uefi),
    vlan_id: cdktf.stringToTerraform(struct!.vlanId),
  }
}


export function dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesDhcpToHclTerraform(struct?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesDhcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arch: {
      value: cdktf.stringToHclTerraform(struct!.arch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iface_name: {
      value: cdktf.stringToHclTerraform(struct!.ifaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesDhcpIpToHclTerraform(struct!.ip),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesDhcpIp",
    },
    lease_time: {
      value: cdktf.numberToHclTerraform(struct!.leaseTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac: {
      value: cdktf.stringToHclTerraform(struct!.mac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nameServers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    time_servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.timeServers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    uefi: {
      value: cdktf.booleanToHclTerraform(struct!.uefi),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vlan_id: {
      value: cdktf.stringToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesDhcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesDhcp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arch !== undefined) {
      hasAnyValues = true;
      internalValueResult.arch = this._arch;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._ifaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifaceName = this._ifaceName;
    }
    if (this._ip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip?.internalValue;
    }
    if (this._leaseTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.leaseTime = this._leaseTime;
    }
    if (this._mac !== undefined) {
      hasAnyValues = true;
      internalValueResult.mac = this._mac;
    }
    if (this._nameServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameServers = this._nameServers;
    }
    if (this._timeServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeServers = this._timeServers;
    }
    if (this._uefi !== undefined) {
      hasAnyValues = true;
      internalValueResult.uefi = this._uefi;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesDhcp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arch = undefined;
      this._hostname = undefined;
      this._ifaceName = undefined;
      this._ip.internalValue = undefined;
      this._leaseTime = undefined;
      this._mac = undefined;
      this._nameServers = undefined;
      this._timeServers = undefined;
      this._uefi = undefined;
      this._vlanId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arch = value.arch;
      this._hostname = value.hostname;
      this._ifaceName = value.ifaceName;
      this._ip.internalValue = value.ip;
      this._leaseTime = value.leaseTime;
      this._mac = value.mac;
      this._nameServers = value.nameServers;
      this._timeServers = value.timeServers;
      this._uefi = value.uefi;
      this._vlanId = value.vlanId;
    }
  }

  // arch - computed: false, optional: true, required: false
  private _arch?: string; 
  public get arch() {
    return this.getStringAttribute('arch');
  }
  public set arch(value: string) {
    this._arch = value;
  }
  public resetArch() {
    this._arch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archInput() {
    return this._arch;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // iface_name - computed: false, optional: true, required: false
  private _ifaceName?: string; 
  public get ifaceName() {
    return this.getStringAttribute('iface_name');
  }
  public set ifaceName(value: string) {
    this._ifaceName = value;
  }
  public resetIfaceName() {
    this._ifaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifaceNameInput() {
    return this._ifaceName;
  }

  // ip - computed: false, optional: true, required: false
  private _ip = new DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesDhcpIpOutputReference(this, "ip");
  public get ip() {
    return this._ip;
  }
  public putIp(value: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesDhcpIp) {
    this._ip.internalValue = value;
  }
  public resetIp() {
    this._ip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }

  // lease_time - computed: false, optional: true, required: false
  private _leaseTime?: number; 
  public get leaseTime() {
    return this.getNumberAttribute('lease_time');
  }
  public set leaseTime(value: number) {
    this._leaseTime = value;
  }
  public resetLeaseTime() {
    this._leaseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaseTimeInput() {
    return this._leaseTime;
  }

  // mac - computed: false, optional: true, required: false
  private _mac?: string; 
  public get mac() {
    return this.getStringAttribute('mac');
  }
  public set mac(value: string) {
    this._mac = value;
  }
  public resetMac() {
    this._mac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macInput() {
    return this._mac;
  }

  // name_servers - computed: false, optional: true, required: false
  private _nameServers?: string[]; 
  public get nameServers() {
    return this.getListAttribute('name_servers');
  }
  public set nameServers(value: string[]) {
    this._nameServers = value;
  }
  public resetNameServers() {
    this._nameServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameServersInput() {
    return this._nameServers;
  }

  // time_servers - computed: false, optional: true, required: false
  private _timeServers?: string[]; 
  public get timeServers() {
    return this.getListAttribute('time_servers');
  }
  public set timeServers(value: string[]) {
    this._timeServers = value;
  }
  public resetTimeServers() {
    this._timeServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeServersInput() {
    return this._timeServers;
  }

  // uefi - computed: false, optional: true, required: false
  private _uefi?: boolean | cdktf.IResolvable; 
  public get uefi() {
    return this.getBooleanAttribute('uefi');
  }
  public set uefi(value: boolean | cdktf.IResolvable) {
    this._uefi = value;
  }
  public resetUefi() {
    this._uefi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uefiInput() {
    return this._uefi;
  }

  // vlan_id - computed: false, optional: true, required: false
  private _vlanId?: string; 
  public get vlanId() {
    return this.getStringAttribute('vlan_id');
  }
  public set vlanId(value: string) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }
}
export interface DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesNetbootIpxe {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#contents DataK8STinkerbellOrgHardwareV1Alpha1Manifest#contents}
  */
  readonly contents?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#url DataK8STinkerbellOrgHardwareV1Alpha1Manifest#url}
  */
  readonly url?: string;
}

export function dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesNetbootIpxeToTerraform(struct?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesNetbootIpxe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contents: cdktf.stringToTerraform(struct!.contents),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesNetbootIpxeToHclTerraform(struct?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesNetbootIpxe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contents: {
      value: cdktf.stringToHclTerraform(struct!.contents),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesNetbootIpxeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesNetbootIpxe | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contents !== undefined) {
      hasAnyValues = true;
      internalValueResult.contents = this._contents;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesNetbootIpxe | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contents = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contents = value.contents;
      this._url = value.url;
    }
  }

  // contents - computed: false, optional: true, required: false
  private _contents?: string; 
  public get contents() {
    return this.getStringAttribute('contents');
  }
  public set contents(value: string) {
    this._contents = value;
  }
  public resetContents() {
    this._contents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentsInput() {
    return this._contents;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesNetbootOsie {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#base_url DataK8STinkerbellOrgHardwareV1Alpha1Manifest#base_url}
  */
  readonly baseUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#initrd DataK8STinkerbellOrgHardwareV1Alpha1Manifest#initrd}
  */
  readonly initrd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#kernel DataK8STinkerbellOrgHardwareV1Alpha1Manifest#kernel}
  */
  readonly kernel?: string;
}

export function dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesNetbootOsieToTerraform(struct?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesNetbootOsie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_url: cdktf.stringToTerraform(struct!.baseUrl),
    initrd: cdktf.stringToTerraform(struct!.initrd),
    kernel: cdktf.stringToTerraform(struct!.kernel),
  }
}


export function dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesNetbootOsieToHclTerraform(struct?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesNetbootOsie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_url: {
      value: cdktf.stringToHclTerraform(struct!.baseUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initrd: {
      value: cdktf.stringToHclTerraform(struct!.initrd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kernel: {
      value: cdktf.stringToHclTerraform(struct!.kernel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesNetbootOsieOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesNetbootOsie | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseUrl = this._baseUrl;
    }
    if (this._initrd !== undefined) {
      hasAnyValues = true;
      internalValueResult.initrd = this._initrd;
    }
    if (this._kernel !== undefined) {
      hasAnyValues = true;
      internalValueResult.kernel = this._kernel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesNetbootOsie | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseUrl = undefined;
      this._initrd = undefined;
      this._kernel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseUrl = value.baseUrl;
      this._initrd = value.initrd;
      this._kernel = value.kernel;
    }
  }

  // base_url - computed: false, optional: true, required: false
  private _baseUrl?: string; 
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }
  public set baseUrl(value: string) {
    this._baseUrl = value;
  }
  public resetBaseUrl() {
    this._baseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
  }

  // initrd - computed: false, optional: true, required: false
  private _initrd?: string; 
  public get initrd() {
    return this.getStringAttribute('initrd');
  }
  public set initrd(value: string) {
    this._initrd = value;
  }
  public resetInitrd() {
    this._initrd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initrdInput() {
    return this._initrd;
  }

  // kernel - computed: false, optional: true, required: false
  private _kernel?: string; 
  public get kernel() {
    return this.getStringAttribute('kernel');
  }
  public set kernel(value: string) {
    this._kernel = value;
  }
  public resetKernel() {
    this._kernel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kernelInput() {
    return this._kernel;
  }
}
export interface DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesNetboot {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#allow_pxe DataK8STinkerbellOrgHardwareV1Alpha1Manifest#allow_pxe}
  */
  readonly allowPxe?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#allow_workflow DataK8STinkerbellOrgHardwareV1Alpha1Manifest#allow_workflow}
  */
  readonly allowWorkflow?: boolean | cdktf.IResolvable;
  /**
  * IPXE configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#ipxe DataK8STinkerbellOrgHardwareV1Alpha1Manifest#ipxe}
  */
  readonly ipxe?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesNetbootIpxe;
  /**
  * OSIE configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#osie DataK8STinkerbellOrgHardwareV1Alpha1Manifest#osie}
  */
  readonly osie?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesNetbootOsie;
}

export function dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesNetbootToTerraform(struct?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesNetboot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_pxe: cdktf.booleanToTerraform(struct!.allowPxe),
    allow_workflow: cdktf.booleanToTerraform(struct!.allowWorkflow),
    ipxe: dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesNetbootIpxeToTerraform(struct!.ipxe),
    osie: dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesNetbootOsieToTerraform(struct!.osie),
  }
}


export function dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesNetbootToHclTerraform(struct?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesNetboot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_pxe: {
      value: cdktf.booleanToHclTerraform(struct!.allowPxe),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_workflow: {
      value: cdktf.booleanToHclTerraform(struct!.allowWorkflow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ipxe: {
      value: dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesNetbootIpxeToHclTerraform(struct!.ipxe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesNetbootIpxe",
    },
    osie: {
      value: dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesNetbootOsieToHclTerraform(struct!.osie),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesNetbootOsie",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesNetbootOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesNetboot | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowPxe !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowPxe = this._allowPxe;
    }
    if (this._allowWorkflow !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowWorkflow = this._allowWorkflow;
    }
    if (this._ipxe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipxe = this._ipxe?.internalValue;
    }
    if (this._osie?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.osie = this._osie?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesNetboot | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowPxe = undefined;
      this._allowWorkflow = undefined;
      this._ipxe.internalValue = undefined;
      this._osie.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowPxe = value.allowPxe;
      this._allowWorkflow = value.allowWorkflow;
      this._ipxe.internalValue = value.ipxe;
      this._osie.internalValue = value.osie;
    }
  }

  // allow_pxe - computed: false, optional: true, required: false
  private _allowPxe?: boolean | cdktf.IResolvable; 
  public get allowPxe() {
    return this.getBooleanAttribute('allow_pxe');
  }
  public set allowPxe(value: boolean | cdktf.IResolvable) {
    this._allowPxe = value;
  }
  public resetAllowPxe() {
    this._allowPxe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPxeInput() {
    return this._allowPxe;
  }

  // allow_workflow - computed: false, optional: true, required: false
  private _allowWorkflow?: boolean | cdktf.IResolvable; 
  public get allowWorkflow() {
    return this.getBooleanAttribute('allow_workflow');
  }
  public set allowWorkflow(value: boolean | cdktf.IResolvable) {
    this._allowWorkflow = value;
  }
  public resetAllowWorkflow() {
    this._allowWorkflow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowWorkflowInput() {
    return this._allowWorkflow;
  }

  // ipxe - computed: false, optional: true, required: false
  private _ipxe = new DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesNetbootIpxeOutputReference(this, "ipxe");
  public get ipxe() {
    return this._ipxe;
  }
  public putIpxe(value: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesNetbootIpxe) {
    this._ipxe.internalValue = value;
  }
  public resetIpxe() {
    this._ipxe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipxeInput() {
    return this._ipxe.internalValue;
  }

  // osie - computed: false, optional: true, required: false
  private _osie = new DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesNetbootOsieOutputReference(this, "osie");
  public get osie() {
    return this._osie;
  }
  public putOsie(value: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesNetbootOsie) {
    this._osie.internalValue = value;
  }
  public resetOsie() {
    this._osie.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osieInput() {
    return this._osie.internalValue;
  }
}
export interface DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfaces {
  /**
  * DHCP configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#dhcp DataK8STinkerbellOrgHardwareV1Alpha1Manifest#dhcp}
  */
  readonly dhcp?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesDhcp;
  /**
  * Netboot configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#netboot DataK8STinkerbellOrgHardwareV1Alpha1Manifest#netboot}
  */
  readonly netboot?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesNetboot;
}

export function dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesToTerraform(struct?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dhcp: dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesDhcpToTerraform(struct!.dhcp),
    netboot: dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesNetbootToTerraform(struct!.netboot),
  }
}


export function dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesToHclTerraform(struct?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dhcp: {
      value: dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesDhcpToHclTerraform(struct!.dhcp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesDhcp",
    },
    netboot: {
      value: dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesNetbootToHclTerraform(struct!.netboot),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesNetboot",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dhcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp = this._dhcp?.internalValue;
    }
    if (this._netboot?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.netboot = this._netboot?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dhcp.internalValue = undefined;
      this._netboot.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dhcp.internalValue = value.dhcp;
      this._netboot.internalValue = value.netboot;
    }
  }

  // dhcp - computed: false, optional: true, required: false
  private _dhcp = new DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesDhcpOutputReference(this, "dhcp");
  public get dhcp() {
    return this._dhcp;
  }
  public putDhcp(value: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesDhcp) {
    this._dhcp.internalValue = value;
  }
  public resetDhcp() {
    this._dhcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpInput() {
    return this._dhcp.internalValue;
  }

  // netboot - computed: false, optional: true, required: false
  private _netboot = new DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesNetbootOutputReference(this, "netboot");
  public get netboot() {
    return this._netboot;
  }
  public putNetboot(value: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesNetboot) {
    this._netboot.internalValue = value;
  }
  public resetNetboot() {
    this._netboot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netbootInput() {
    return this._netboot.internalValue;
  }
}

export class DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesList extends cdktf.ComplexList {
  public internalValue? : DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfaces[] | cdktf.IResolvable

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
  public get(index: number): DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesOutputReference {
    return new DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataCustomPreinstalledOperatingSystemVersion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#distro DataK8STinkerbellOrgHardwareV1Alpha1Manifest#distro}
  */
  readonly distro?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#image_tag DataK8STinkerbellOrgHardwareV1Alpha1Manifest#image_tag}
  */
  readonly imageTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#os_slug DataK8STinkerbellOrgHardwareV1Alpha1Manifest#os_slug}
  */
  readonly osSlug?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#slug DataK8STinkerbellOrgHardwareV1Alpha1Manifest#slug}
  */
  readonly slug?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#version DataK8STinkerbellOrgHardwareV1Alpha1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataCustomPreinstalledOperatingSystemVersionToTerraform(struct?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataCustomPreinstalledOperatingSystemVersion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distro: cdktf.stringToTerraform(struct!.distro),
    image_tag: cdktf.stringToTerraform(struct!.imageTag),
    os_slug: cdktf.stringToTerraform(struct!.osSlug),
    slug: cdktf.stringToTerraform(struct!.slug),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataCustomPreinstalledOperatingSystemVersionToHclTerraform(struct?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataCustomPreinstalledOperatingSystemVersion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    distro: {
      value: cdktf.stringToHclTerraform(struct!.distro),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_tag: {
      value: cdktf.stringToHclTerraform(struct!.imageTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    os_slug: {
      value: cdktf.stringToHclTerraform(struct!.osSlug),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slug: {
      value: cdktf.stringToHclTerraform(struct!.slug),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataCustomPreinstalledOperatingSystemVersionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataCustomPreinstalledOperatingSystemVersion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._distro !== undefined) {
      hasAnyValues = true;
      internalValueResult.distro = this._distro;
    }
    if (this._imageTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageTag = this._imageTag;
    }
    if (this._osSlug !== undefined) {
      hasAnyValues = true;
      internalValueResult.osSlug = this._osSlug;
    }
    if (this._slug !== undefined) {
      hasAnyValues = true;
      internalValueResult.slug = this._slug;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataCustomPreinstalledOperatingSystemVersion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._distro = undefined;
      this._imageTag = undefined;
      this._osSlug = undefined;
      this._slug = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._distro = value.distro;
      this._imageTag = value.imageTag;
      this._osSlug = value.osSlug;
      this._slug = value.slug;
      this._version = value.version;
    }
  }

  // distro - computed: false, optional: true, required: false
  private _distro?: string; 
  public get distro() {
    return this.getStringAttribute('distro');
  }
  public set distro(value: string) {
    this._distro = value;
  }
  public resetDistro() {
    this._distro = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distroInput() {
    return this._distro;
  }

  // image_tag - computed: false, optional: true, required: false
  private _imageTag?: string; 
  public get imageTag() {
    return this.getStringAttribute('image_tag');
  }
  public set imageTag(value: string) {
    this._imageTag = value;
  }
  public resetImageTag() {
    this._imageTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTagInput() {
    return this._imageTag;
  }

  // os_slug - computed: false, optional: true, required: false
  private _osSlug?: string; 
  public get osSlug() {
    return this.getStringAttribute('os_slug');
  }
  public set osSlug(value: string) {
    this._osSlug = value;
  }
  public resetOsSlug() {
    this._osSlug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osSlugInput() {
    return this._osSlug;
  }

  // slug - computed: false, optional: true, required: false
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  public resetSlug() {
    this._slug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataCustom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#preinstalled_operating_system_version DataK8STinkerbellOrgHardwareV1Alpha1Manifest#preinstalled_operating_system_version}
  */
  readonly preinstalledOperatingSystemVersion?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataCustomPreinstalledOperatingSystemVersion;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#private_subnets DataK8STinkerbellOrgHardwareV1Alpha1Manifest#private_subnets}
  */
  readonly privateSubnets?: string[];
}

export function dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataCustomToTerraform(struct?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preinstalled_operating_system_version: dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataCustomPreinstalledOperatingSystemVersionToTerraform(struct!.preinstalledOperatingSystemVersion),
    private_subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.privateSubnets),
  }
}


export function dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataCustomToHclTerraform(struct?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preinstalled_operating_system_version: {
      value: dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataCustomPreinstalledOperatingSystemVersionToHclTerraform(struct!.preinstalledOperatingSystemVersion),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataCustomPreinstalledOperatingSystemVersion",
    },
    private_subnets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.privateSubnets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataCustom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preinstalledOperatingSystemVersion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preinstalledOperatingSystemVersion = this._preinstalledOperatingSystemVersion?.internalValue;
    }
    if (this._privateSubnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateSubnets = this._privateSubnets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataCustom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preinstalledOperatingSystemVersion.internalValue = undefined;
      this._privateSubnets = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preinstalledOperatingSystemVersion.internalValue = value.preinstalledOperatingSystemVersion;
      this._privateSubnets = value.privateSubnets;
    }
  }

  // preinstalled_operating_system_version - computed: false, optional: true, required: false
  private _preinstalledOperatingSystemVersion = new DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataCustomPreinstalledOperatingSystemVersionOutputReference(this, "preinstalled_operating_system_version");
  public get preinstalledOperatingSystemVersion() {
    return this._preinstalledOperatingSystemVersion;
  }
  public putPreinstalledOperatingSystemVersion(value: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataCustomPreinstalledOperatingSystemVersion) {
    this._preinstalledOperatingSystemVersion.internalValue = value;
  }
  public resetPreinstalledOperatingSystemVersion() {
    this._preinstalledOperatingSystemVersion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preinstalledOperatingSystemVersionInput() {
    return this._preinstalledOperatingSystemVersion.internalValue;
  }

  // private_subnets - computed: false, optional: true, required: false
  private _privateSubnets?: string[]; 
  public get privateSubnets() {
    return this.getListAttribute('private_subnets');
  }
  public set privateSubnets(value: string[]) {
    this._privateSubnets = value;
  }
  public resetPrivateSubnets() {
    this._privateSubnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateSubnetsInput() {
    return this._privateSubnets;
  }
}
export interface DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataFacility {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#facility_code DataK8STinkerbellOrgHardwareV1Alpha1Manifest#facility_code}
  */
  readonly facilityCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#plan_slug DataK8STinkerbellOrgHardwareV1Alpha1Manifest#plan_slug}
  */
  readonly planSlug?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#plan_version_slug DataK8STinkerbellOrgHardwareV1Alpha1Manifest#plan_version_slug}
  */
  readonly planVersionSlug?: string;
}

export function dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataFacilityToTerraform(struct?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataFacility | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    facility_code: cdktf.stringToTerraform(struct!.facilityCode),
    plan_slug: cdktf.stringToTerraform(struct!.planSlug),
    plan_version_slug: cdktf.stringToTerraform(struct!.planVersionSlug),
  }
}


export function dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataFacilityToHclTerraform(struct?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataFacility | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    facility_code: {
      value: cdktf.stringToHclTerraform(struct!.facilityCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    plan_slug: {
      value: cdktf.stringToHclTerraform(struct!.planSlug),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    plan_version_slug: {
      value: cdktf.stringToHclTerraform(struct!.planVersionSlug),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataFacilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataFacility | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._facilityCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.facilityCode = this._facilityCode;
    }
    if (this._planSlug !== undefined) {
      hasAnyValues = true;
      internalValueResult.planSlug = this._planSlug;
    }
    if (this._planVersionSlug !== undefined) {
      hasAnyValues = true;
      internalValueResult.planVersionSlug = this._planVersionSlug;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataFacility | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._facilityCode = undefined;
      this._planSlug = undefined;
      this._planVersionSlug = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._facilityCode = value.facilityCode;
      this._planSlug = value.planSlug;
      this._planVersionSlug = value.planVersionSlug;
    }
  }

  // facility_code - computed: false, optional: true, required: false
  private _facilityCode?: string; 
  public get facilityCode() {
    return this.getStringAttribute('facility_code');
  }
  public set facilityCode(value: string) {
    this._facilityCode = value;
  }
  public resetFacilityCode() {
    this._facilityCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facilityCodeInput() {
    return this._facilityCode;
  }

  // plan_slug - computed: false, optional: true, required: false
  private _planSlug?: string; 
  public get planSlug() {
    return this.getStringAttribute('plan_slug');
  }
  public set planSlug(value: string) {
    this._planSlug = value;
  }
  public resetPlanSlug() {
    this._planSlug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planSlugInput() {
    return this._planSlug;
  }

  // plan_version_slug - computed: false, optional: true, required: false
  private _planVersionSlug?: string; 
  public get planVersionSlug() {
    return this.getStringAttribute('plan_version_slug');
  }
  public set planVersionSlug(value: string) {
    this._planVersionSlug = value;
  }
  public resetPlanVersionSlug() {
    this._planVersionSlug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planVersionSlugInput() {
    return this._planVersionSlug;
  }
}
export interface DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceIps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#address DataK8STinkerbellOrgHardwareV1Alpha1Manifest#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#family DataK8STinkerbellOrgHardwareV1Alpha1Manifest#family}
  */
  readonly family?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#gateway DataK8STinkerbellOrgHardwareV1Alpha1Manifest#gateway}
  */
  readonly gateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#management DataK8STinkerbellOrgHardwareV1Alpha1Manifest#management}
  */
  readonly management?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#netmask DataK8STinkerbellOrgHardwareV1Alpha1Manifest#netmask}
  */
  readonly netmask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#public DataK8STinkerbellOrgHardwareV1Alpha1Manifest#public}
  */
  readonly public?: boolean | cdktf.IResolvable;
}

export function dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceIpsToTerraform(struct?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    family: cdktf.numberToTerraform(struct!.family),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    management: cdktf.booleanToTerraform(struct!.management),
    netmask: cdktf.stringToTerraform(struct!.netmask),
    public: cdktf.booleanToTerraform(struct!.public),
  }
}


export function dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceIpsToHclTerraform(struct?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    family: {
      value: cdktf.numberToHclTerraform(struct!.family),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    management: {
      value: cdktf.booleanToHclTerraform(struct!.management),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    netmask: {
      value: cdktf.stringToHclTerraform(struct!.netmask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public: {
      value: cdktf.booleanToHclTerraform(struct!.public),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceIps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._family !== undefined) {
      hasAnyValues = true;
      internalValueResult.family = this._family;
    }
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._management !== undefined) {
      hasAnyValues = true;
      internalValueResult.management = this._management;
    }
    if (this._netmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.netmask = this._netmask;
    }
    if (this._public !== undefined) {
      hasAnyValues = true;
      internalValueResult.public = this._public;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceIps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._family = undefined;
      this._gateway = undefined;
      this._management = undefined;
      this._netmask = undefined;
      this._public = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._family = value.family;
      this._gateway = value.gateway;
      this._management = value.management;
      this._netmask = value.netmask;
      this._public = value.public;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // family - computed: false, optional: true, required: false
  private _family?: number; 
  public get family() {
    return this.getNumberAttribute('family');
  }
  public set family(value: number) {
    this._family = value;
  }
  public resetFamily() {
    this._family = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInput() {
    return this._family;
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // management - computed: false, optional: true, required: false
  private _management?: boolean | cdktf.IResolvable; 
  public get management() {
    return this.getBooleanAttribute('management');
  }
  public set management(value: boolean | cdktf.IResolvable) {
    this._management = value;
  }
  public resetManagement() {
    this._management = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementInput() {
    return this._management;
  }

  // netmask - computed: false, optional: true, required: false
  private _netmask?: string; 
  public get netmask() {
    return this.getStringAttribute('netmask');
  }
  public set netmask(value: string) {
    this._netmask = value;
  }
  public resetNetmask() {
    this._netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netmaskInput() {
    return this._netmask;
  }

  // public - computed: false, optional: true, required: false
  private _public?: boolean | cdktf.IResolvable; 
  public get public() {
    return this.getBooleanAttribute('public');
  }
  public set public(value: boolean | cdktf.IResolvable) {
    this._public = value;
  }
  public resetPublic() {
    this._public = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicInput() {
    return this._public;
  }
}

export class DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceIpsList extends cdktf.ComplexList {
  public internalValue? : DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceIps[] | cdktf.IResolvable

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
  public get(index: number): DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceIpsOutputReference {
    return new DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceOperatingSystem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#distro DataK8STinkerbellOrgHardwareV1Alpha1Manifest#distro}
  */
  readonly distro?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#image_tag DataK8STinkerbellOrgHardwareV1Alpha1Manifest#image_tag}
  */
  readonly imageTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#os_slug DataK8STinkerbellOrgHardwareV1Alpha1Manifest#os_slug}
  */
  readonly osSlug?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#slug DataK8STinkerbellOrgHardwareV1Alpha1Manifest#slug}
  */
  readonly slug?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#version DataK8STinkerbellOrgHardwareV1Alpha1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceOperatingSystemToTerraform(struct?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceOperatingSystem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distro: cdktf.stringToTerraform(struct!.distro),
    image_tag: cdktf.stringToTerraform(struct!.imageTag),
    os_slug: cdktf.stringToTerraform(struct!.osSlug),
    slug: cdktf.stringToTerraform(struct!.slug),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceOperatingSystemToHclTerraform(struct?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceOperatingSystem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    distro: {
      value: cdktf.stringToHclTerraform(struct!.distro),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_tag: {
      value: cdktf.stringToHclTerraform(struct!.imageTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    os_slug: {
      value: cdktf.stringToHclTerraform(struct!.osSlug),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slug: {
      value: cdktf.stringToHclTerraform(struct!.slug),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceOperatingSystemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceOperatingSystem | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._distro !== undefined) {
      hasAnyValues = true;
      internalValueResult.distro = this._distro;
    }
    if (this._imageTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageTag = this._imageTag;
    }
    if (this._osSlug !== undefined) {
      hasAnyValues = true;
      internalValueResult.osSlug = this._osSlug;
    }
    if (this._slug !== undefined) {
      hasAnyValues = true;
      internalValueResult.slug = this._slug;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceOperatingSystem | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._distro = undefined;
      this._imageTag = undefined;
      this._osSlug = undefined;
      this._slug = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._distro = value.distro;
      this._imageTag = value.imageTag;
      this._osSlug = value.osSlug;
      this._slug = value.slug;
      this._version = value.version;
    }
  }

  // distro - computed: false, optional: true, required: false
  private _distro?: string; 
  public get distro() {
    return this.getStringAttribute('distro');
  }
  public set distro(value: string) {
    this._distro = value;
  }
  public resetDistro() {
    this._distro = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distroInput() {
    return this._distro;
  }

  // image_tag - computed: false, optional: true, required: false
  private _imageTag?: string; 
  public get imageTag() {
    return this.getStringAttribute('image_tag');
  }
  public set imageTag(value: string) {
    this._imageTag = value;
  }
  public resetImageTag() {
    this._imageTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTagInput() {
    return this._imageTag;
  }

  // os_slug - computed: false, optional: true, required: false
  private _osSlug?: string; 
  public get osSlug() {
    return this.getStringAttribute('os_slug');
  }
  public set osSlug(value: string) {
    this._osSlug = value;
  }
  public resetOsSlug() {
    this._osSlug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osSlugInput() {
    return this._osSlug;
  }

  // slug - computed: false, optional: true, required: false
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  public resetSlug() {
    this._slug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageDisksPartitions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#label DataK8STinkerbellOrgHardwareV1Alpha1Manifest#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#number DataK8STinkerbellOrgHardwareV1Alpha1Manifest#number}
  */
  readonly number?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#size DataK8STinkerbellOrgHardwareV1Alpha1Manifest#size}
  */
  readonly size?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#start DataK8STinkerbellOrgHardwareV1Alpha1Manifest#start}
  */
  readonly start?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#type_guid DataK8STinkerbellOrgHardwareV1Alpha1Manifest#type_guid}
  */
  readonly typeGuid?: string;
}

export function dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageDisksPartitionsToTerraform(struct?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageDisksPartitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    number: cdktf.numberToTerraform(struct!.number),
    size: cdktf.numberToTerraform(struct!.size),
    start: cdktf.numberToTerraform(struct!.start),
    type_guid: cdktf.stringToTerraform(struct!.typeGuid),
  }
}


export function dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageDisksPartitionsToHclTerraform(struct?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageDisksPartitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number: {
      value: cdktf.numberToHclTerraform(struct!.number),
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
    start: {
      value: cdktf.numberToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type_guid: {
      value: cdktf.stringToHclTerraform(struct!.typeGuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageDisksPartitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageDisksPartitions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    if (this._typeGuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeGuid = this._typeGuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageDisksPartitions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._label = undefined;
      this._number = undefined;
      this._size = undefined;
      this._start = undefined;
      this._typeGuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._label = value.label;
      this._number = value.number;
      this._size = value.size;
      this._start = value.start;
      this._typeGuid = value.typeGuid;
    }
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // number - computed: false, optional: true, required: false
  private _number?: number; 
  public get number() {
    return this.getNumberAttribute('number');
  }
  public set number(value: number) {
    this._number = value;
  }
  public resetNumber() {
    this._number = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
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

  // start - computed: false, optional: true, required: false
  private _start?: number; 
  public get start() {
    return this.getNumberAttribute('start');
  }
  public set start(value: number) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }

  // type_guid - computed: false, optional: true, required: false
  private _typeGuid?: string; 
  public get typeGuid() {
    return this.getStringAttribute('type_guid');
  }
  public set typeGuid(value: string) {
    this._typeGuid = value;
  }
  public resetTypeGuid() {
    this._typeGuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeGuidInput() {
    return this._typeGuid;
  }
}

export class DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageDisksPartitionsList extends cdktf.ComplexList {
  public internalValue? : DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageDisksPartitions[] | cdktf.IResolvable

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
  public get(index: number): DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageDisksPartitionsOutputReference {
    return new DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageDisksPartitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageDisks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#device DataK8STinkerbellOrgHardwareV1Alpha1Manifest#device}
  */
  readonly device?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#partitions DataK8STinkerbellOrgHardwareV1Alpha1Manifest#partitions}
  */
  readonly partitions?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageDisksPartitions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#wipe_table DataK8STinkerbellOrgHardwareV1Alpha1Manifest#wipe_table}
  */
  readonly wipeTable?: boolean | cdktf.IResolvable;
}

export function dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageDisksToTerraform(struct?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device: cdktf.stringToTerraform(struct!.device),
    partitions: cdktf.listMapper(dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageDisksPartitionsToTerraform, false)(struct!.partitions),
    wipe_table: cdktf.booleanToTerraform(struct!.wipeTable),
  }
}


export function dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageDisksToHclTerraform(struct?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device: {
      value: cdktf.stringToHclTerraform(struct!.device),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partitions: {
      value: cdktf.listMapperHcl(dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageDisksPartitionsToHclTerraform, false)(struct!.partitions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageDisksPartitionsList",
    },
    wipe_table: {
      value: cdktf.booleanToHclTerraform(struct!.wipeTable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageDisks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._partitions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitions = this._partitions?.internalValue;
    }
    if (this._wipeTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.wipeTable = this._wipeTable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageDisks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._device = undefined;
      this._partitions.internalValue = undefined;
      this._wipeTable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._device = value.device;
      this._partitions.internalValue = value.partitions;
      this._wipeTable = value.wipeTable;
    }
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // partitions - computed: false, optional: true, required: false
  private _partitions = new DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageDisksPartitionsList(this, "partitions", false);
  public get partitions() {
    return this._partitions;
  }
  public putPartitions(value: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageDisksPartitions[] | cdktf.IResolvable) {
    this._partitions.internalValue = value;
  }
  public resetPartitions() {
    this._partitions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionsInput() {
    return this._partitions.internalValue;
  }

  // wipe_table - computed: false, optional: true, required: false
  private _wipeTable?: boolean | cdktf.IResolvable; 
  public get wipeTable() {
    return this.getBooleanAttribute('wipe_table');
  }
  public set wipeTable(value: boolean | cdktf.IResolvable) {
    this._wipeTable = value;
  }
  public resetWipeTable() {
    this._wipeTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wipeTableInput() {
    return this._wipeTable;
  }
}

export class DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageDisksList extends cdktf.ComplexList {
  public internalValue? : DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageDisks[] | cdktf.IResolvable

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
  public get(index: number): DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageDisksOutputReference {
    return new DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageFilesystemsMountCreate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#force DataK8STinkerbellOrgHardwareV1Alpha1Manifest#force}
  */
  readonly force?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#options DataK8STinkerbellOrgHardwareV1Alpha1Manifest#options}
  */
  readonly options?: string[];
}

export function dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageFilesystemsMountCreateToTerraform(struct?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageFilesystemsMountCreate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    force: cdktf.booleanToTerraform(struct!.force),
    options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.options),
  }
}


export function dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageFilesystemsMountCreateToHclTerraform(struct?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageFilesystemsMountCreate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    force: {
      value: cdktf.booleanToHclTerraform(struct!.force),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.options),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageFilesystemsMountCreateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageFilesystemsMountCreate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._force !== undefined) {
      hasAnyValues = true;
      internalValueResult.force = this._force;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageFilesystemsMountCreate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._force = undefined;
      this._options = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._force = value.force;
      this._options = value.options;
    }
  }

  // force - computed: false, optional: true, required: false
  private _force?: boolean | cdktf.IResolvable; 
  public get force() {
    return this.getBooleanAttribute('force');
  }
  public set force(value: boolean | cdktf.IResolvable) {
    this._force = value;
  }
  public resetForce() {
    this._force = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceInput() {
    return this._force;
  }

  // options - computed: false, optional: true, required: false
  private _options?: string[]; 
  public get options() {
    return this.getListAttribute('options');
  }
  public set options(value: string[]) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }
}
export interface DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageFilesystemsMountFiles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#contents DataK8STinkerbellOrgHardwareV1Alpha1Manifest#contents}
  */
  readonly contents?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#gid DataK8STinkerbellOrgHardwareV1Alpha1Manifest#gid}
  */
  readonly gid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#mode DataK8STinkerbellOrgHardwareV1Alpha1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#path DataK8STinkerbellOrgHardwareV1Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#uid DataK8STinkerbellOrgHardwareV1Alpha1Manifest#uid}
  */
  readonly uid?: number;
}

export function dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageFilesystemsMountFilesToTerraform(struct?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageFilesystemsMountFiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contents: cdktf.stringToTerraform(struct!.contents),
    gid: cdktf.numberToTerraform(struct!.gid),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
    uid: cdktf.numberToTerraform(struct!.uid),
  }
}


export function dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageFilesystemsMountFilesToHclTerraform(struct?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageFilesystemsMountFiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contents: {
      value: cdktf.stringToHclTerraform(struct!.contents),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gid: {
      value: cdktf.numberToHclTerraform(struct!.gid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageFilesystemsMountFilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageFilesystemsMountFiles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contents !== undefined) {
      hasAnyValues = true;
      internalValueResult.contents = this._contents;
    }
    if (this._gid !== undefined) {
      hasAnyValues = true;
      internalValueResult.gid = this._gid;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageFilesystemsMountFiles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contents = undefined;
      this._gid = undefined;
      this._mode = undefined;
      this._path = undefined;
      this._uid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contents = value.contents;
      this._gid = value.gid;
      this._mode = value.mode;
      this._path = value.path;
      this._uid = value.uid;
    }
  }

  // contents - computed: false, optional: true, required: false
  private _contents?: string; 
  public get contents() {
    return this.getStringAttribute('contents');
  }
  public set contents(value: string) {
    this._contents = value;
  }
  public resetContents() {
    this._contents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentsInput() {
    return this._contents;
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

  // mode - computed: false, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
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

export class DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageFilesystemsMountFilesList extends cdktf.ComplexList {
  public internalValue? : DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageFilesystemsMountFiles[] | cdktf.IResolvable

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
  public get(index: number): DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageFilesystemsMountFilesOutputReference {
    return new DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageFilesystemsMountFilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageFilesystemsMount {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#create DataK8STinkerbellOrgHardwareV1Alpha1Manifest#create}
  */
  readonly create?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageFilesystemsMountCreate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#device DataK8STinkerbellOrgHardwareV1Alpha1Manifest#device}
  */
  readonly device?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#files DataK8STinkerbellOrgHardwareV1Alpha1Manifest#files}
  */
  readonly files?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageFilesystemsMountFiles[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#format DataK8STinkerbellOrgHardwareV1Alpha1Manifest#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#point DataK8STinkerbellOrgHardwareV1Alpha1Manifest#point}
  */
  readonly point?: string;
}

export function dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageFilesystemsMountToTerraform(struct?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageFilesystemsMount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageFilesystemsMountCreateToTerraform(struct!.create),
    device: cdktf.stringToTerraform(struct!.device),
    files: cdktf.listMapper(dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageFilesystemsMountFilesToTerraform, false)(struct!.files),
    format: cdktf.stringToTerraform(struct!.format),
    point: cdktf.stringToTerraform(struct!.point),
  }
}


export function dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageFilesystemsMountToHclTerraform(struct?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageFilesystemsMount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageFilesystemsMountCreateToHclTerraform(struct!.create),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageFilesystemsMountCreate",
    },
    device: {
      value: cdktf.stringToHclTerraform(struct!.device),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    files: {
      value: cdktf.listMapperHcl(dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageFilesystemsMountFilesToHclTerraform, false)(struct!.files),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageFilesystemsMountFilesList",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    point: {
      value: cdktf.stringToHclTerraform(struct!.point),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageFilesystemsMountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageFilesystemsMount | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create?.internalValue;
    }
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._files?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.files = this._files?.internalValue;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._point !== undefined) {
      hasAnyValues = true;
      internalValueResult.point = this._point;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageFilesystemsMount | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create.internalValue = undefined;
      this._device = undefined;
      this._files.internalValue = undefined;
      this._format = undefined;
      this._point = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create.internalValue = value.create;
      this._device = value.device;
      this._files.internalValue = value.files;
      this._format = value.format;
      this._point = value.point;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create = new DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageFilesystemsMountCreateOutputReference(this, "create");
  public get create() {
    return this._create;
  }
  public putCreate(value: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageFilesystemsMountCreate) {
    this._create.internalValue = value;
  }
  public resetCreate() {
    this._create.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create.internalValue;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // files - computed: false, optional: true, required: false
  private _files = new DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageFilesystemsMountFilesList(this, "files", false);
  public get files() {
    return this._files;
  }
  public putFiles(value: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageFilesystemsMountFiles[] | cdktf.IResolvable) {
    this._files.internalValue = value;
  }
  public resetFiles() {
    this._files.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesInput() {
    return this._files.internalValue;
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // point - computed: false, optional: true, required: false
  private _point?: string; 
  public get point() {
    return this.getStringAttribute('point');
  }
  public set point(value: string) {
    this._point = value;
  }
  public resetPoint() {
    this._point = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pointInput() {
    return this._point;
  }
}
export interface DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageFilesystems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#mount DataK8STinkerbellOrgHardwareV1Alpha1Manifest#mount}
  */
  readonly mount?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageFilesystemsMount;
}

export function dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageFilesystemsToTerraform(struct?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageFilesystems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount: dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageFilesystemsMountToTerraform(struct!.mount),
  }
}


export function dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageFilesystemsToHclTerraform(struct?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageFilesystems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount: {
      value: dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageFilesystemsMountToHclTerraform(struct!.mount),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageFilesystemsMount",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageFilesystemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageFilesystems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mount = this._mount?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageFilesystems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mount.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mount.internalValue = value.mount;
    }
  }

  // mount - computed: false, optional: true, required: false
  private _mount = new DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageFilesystemsMountOutputReference(this, "mount");
  public get mount() {
    return this._mount;
  }
  public putMount(value: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageFilesystemsMount) {
    this._mount.internalValue = value;
  }
  public resetMount() {
    this._mount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountInput() {
    return this._mount.internalValue;
  }
}

export class DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageFilesystemsList extends cdktf.ComplexList {
  public internalValue? : DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageFilesystems[] | cdktf.IResolvable

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
  public get(index: number): DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageFilesystemsOutputReference {
    return new DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageFilesystemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageRaid {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#devices DataK8STinkerbellOrgHardwareV1Alpha1Manifest#devices}
  */
  readonly devices?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#level DataK8STinkerbellOrgHardwareV1Alpha1Manifest#level}
  */
  readonly level?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#name DataK8STinkerbellOrgHardwareV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#spare DataK8STinkerbellOrgHardwareV1Alpha1Manifest#spare}
  */
  readonly spare?: number;
}

export function dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageRaidToTerraform(struct?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageRaid | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    devices: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.devices),
    level: cdktf.stringToTerraform(struct!.level),
    name: cdktf.stringToTerraform(struct!.name),
    spare: cdktf.numberToTerraform(struct!.spare),
  }
}


export function dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageRaidToHclTerraform(struct?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageRaid | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    devices: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.devices),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
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
    spare: {
      value: cdktf.numberToHclTerraform(struct!.spare),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageRaidOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageRaid | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._devices !== undefined) {
      hasAnyValues = true;
      internalValueResult.devices = this._devices;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._spare !== undefined) {
      hasAnyValues = true;
      internalValueResult.spare = this._spare;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageRaid | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._devices = undefined;
      this._level = undefined;
      this._name = undefined;
      this._spare = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._devices = value.devices;
      this._level = value.level;
      this._name = value.name;
      this._spare = value.spare;
    }
  }

  // devices - computed: false, optional: true, required: false
  private _devices?: string[]; 
  public get devices() {
    return this.getListAttribute('devices');
  }
  public set devices(value: string[]) {
    this._devices = value;
  }
  public resetDevices() {
    this._devices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesInput() {
    return this._devices;
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
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

  // spare - computed: false, optional: true, required: false
  private _spare?: number; 
  public get spare() {
    return this.getNumberAttribute('spare');
  }
  public set spare(value: number) {
    this._spare = value;
  }
  public resetSpare() {
    this._spare = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spareInput() {
    return this._spare;
  }
}

export class DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageRaidList extends cdktf.ComplexList {
  public internalValue? : DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageRaid[] | cdktf.IResolvable

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
  public get(index: number): DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageRaidOutputReference {
    return new DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageRaidOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#disks DataK8STinkerbellOrgHardwareV1Alpha1Manifest#disks}
  */
  readonly disks?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageDisks[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#filesystems DataK8STinkerbellOrgHardwareV1Alpha1Manifest#filesystems}
  */
  readonly filesystems?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageFilesystems[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#raid DataK8STinkerbellOrgHardwareV1Alpha1Manifest#raid}
  */
  readonly raid?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageRaid[] | cdktf.IResolvable;
}

export function dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageToTerraform(struct?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disks: cdktf.listMapper(dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageDisksToTerraform, false)(struct!.disks),
    filesystems: cdktf.listMapper(dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageFilesystemsToTerraform, false)(struct!.filesystems),
    raid: cdktf.listMapper(dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageRaidToTerraform, false)(struct!.raid),
  }
}


export function dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageToHclTerraform(struct?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disks: {
      value: cdktf.listMapperHcl(dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageDisksToHclTerraform, false)(struct!.disks),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageDisksList",
    },
    filesystems: {
      value: cdktf.listMapperHcl(dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageFilesystemsToHclTerraform, false)(struct!.filesystems),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageFilesystemsList",
    },
    raid: {
      value: cdktf.listMapperHcl(dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageRaidToHclTerraform, false)(struct!.raid),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageRaidList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disks = this._disks?.internalValue;
    }
    if (this._filesystems?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filesystems = this._filesystems?.internalValue;
    }
    if (this._raid?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.raid = this._raid?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disks.internalValue = undefined;
      this._filesystems.internalValue = undefined;
      this._raid.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disks.internalValue = value.disks;
      this._filesystems.internalValue = value.filesystems;
      this._raid.internalValue = value.raid;
    }
  }

  // disks - computed: false, optional: true, required: false
  private _disks = new DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageDisksList(this, "disks", false);
  public get disks() {
    return this._disks;
  }
  public putDisks(value: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageDisks[] | cdktf.IResolvable) {
    this._disks.internalValue = value;
  }
  public resetDisks() {
    this._disks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disksInput() {
    return this._disks.internalValue;
  }

  // filesystems - computed: false, optional: true, required: false
  private _filesystems = new DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageFilesystemsList(this, "filesystems", false);
  public get filesystems() {
    return this._filesystems;
  }
  public putFilesystems(value: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageFilesystems[] | cdktf.IResolvable) {
    this._filesystems.internalValue = value;
  }
  public resetFilesystems() {
    this._filesystems.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesystemsInput() {
    return this._filesystems.internalValue;
  }

  // raid - computed: false, optional: true, required: false
  private _raid = new DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageRaidList(this, "raid", false);
  public get raid() {
    return this._raid;
  }
  public putRaid(value: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageRaid[] | cdktf.IResolvable) {
    this._raid.internalValue = value;
  }
  public resetRaid() {
    this._raid.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get raidInput() {
    return this._raid.internalValue;
  }
}
export interface DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstance {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#allow_pxe DataK8STinkerbellOrgHardwareV1Alpha1Manifest#allow_pxe}
  */
  readonly allowPxe?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#always_pxe DataK8STinkerbellOrgHardwareV1Alpha1Manifest#always_pxe}
  */
  readonly alwaysPxe?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#crypted_root_password DataK8STinkerbellOrgHardwareV1Alpha1Manifest#crypted_root_password}
  */
  readonly cryptedRootPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#hostname DataK8STinkerbellOrgHardwareV1Alpha1Manifest#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#id DataK8STinkerbellOrgHardwareV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#ips DataK8STinkerbellOrgHardwareV1Alpha1Manifest#ips}
  */
  readonly ips?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceIps[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#ipxe_script_url DataK8STinkerbellOrgHardwareV1Alpha1Manifest#ipxe_script_url}
  */
  readonly ipxeScriptUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#network_ready DataK8STinkerbellOrgHardwareV1Alpha1Manifest#network_ready}
  */
  readonly networkReady?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#operating_system DataK8STinkerbellOrgHardwareV1Alpha1Manifest#operating_system}
  */
  readonly operatingSystem?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceOperatingSystem;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#rescue DataK8STinkerbellOrgHardwareV1Alpha1Manifest#rescue}
  */
  readonly rescue?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#ssh_keys DataK8STinkerbellOrgHardwareV1Alpha1Manifest#ssh_keys}
  */
  readonly sshKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#state DataK8STinkerbellOrgHardwareV1Alpha1Manifest#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#storage DataK8STinkerbellOrgHardwareV1Alpha1Manifest#storage}
  */
  readonly storage?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorage;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#tags DataK8STinkerbellOrgHardwareV1Alpha1Manifest#tags}
  */
  readonly tags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#userdata DataK8STinkerbellOrgHardwareV1Alpha1Manifest#userdata}
  */
  readonly userdata?: string;
}

export function dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceToTerraform(struct?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_pxe: cdktf.booleanToTerraform(struct!.allowPxe),
    always_pxe: cdktf.booleanToTerraform(struct!.alwaysPxe),
    crypted_root_password: cdktf.stringToTerraform(struct!.cryptedRootPassword),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    id: cdktf.stringToTerraform(struct!.id),
    ips: cdktf.listMapper(dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceIpsToTerraform, false)(struct!.ips),
    ipxe_script_url: cdktf.stringToTerraform(struct!.ipxeScriptUrl),
    network_ready: cdktf.booleanToTerraform(struct!.networkReady),
    operating_system: dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceOperatingSystemToTerraform(struct!.operatingSystem),
    rescue: cdktf.booleanToTerraform(struct!.rescue),
    ssh_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sshKeys),
    state: cdktf.stringToTerraform(struct!.state),
    storage: dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageToTerraform(struct!.storage),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    userdata: cdktf.stringToTerraform(struct!.userdata),
  }
}


export function dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceToHclTerraform(struct?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_pxe: {
      value: cdktf.booleanToHclTerraform(struct!.allowPxe),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    always_pxe: {
      value: cdktf.booleanToHclTerraform(struct!.alwaysPxe),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    crypted_root_password: {
      value: cdktf.stringToHclTerraform(struct!.cryptedRootPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ips: {
      value: cdktf.listMapperHcl(dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceIpsToHclTerraform, false)(struct!.ips),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceIpsList",
    },
    ipxe_script_url: {
      value: cdktf.stringToHclTerraform(struct!.ipxeScriptUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_ready: {
      value: cdktf.booleanToHclTerraform(struct!.networkReady),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operating_system: {
      value: dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceOperatingSystemToHclTerraform(struct!.operatingSystem),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceOperatingSystem",
    },
    rescue: {
      value: cdktf.booleanToHclTerraform(struct!.rescue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ssh_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sshKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage: {
      value: dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageToHclTerraform(struct!.storage),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorage",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    userdata: {
      value: cdktf.stringToHclTerraform(struct!.userdata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstance | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowPxe !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowPxe = this._allowPxe;
    }
    if (this._alwaysPxe !== undefined) {
      hasAnyValues = true;
      internalValueResult.alwaysPxe = this._alwaysPxe;
    }
    if (this._cryptedRootPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptedRootPassword = this._cryptedRootPassword;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ips?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ips = this._ips?.internalValue;
    }
    if (this._ipxeScriptUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipxeScriptUrl = this._ipxeScriptUrl;
    }
    if (this._networkReady !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkReady = this._networkReady;
    }
    if (this._operatingSystem?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operatingSystem = this._operatingSystem?.internalValue;
    }
    if (this._rescue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rescue = this._rescue;
    }
    if (this._sshKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKeys = this._sshKeys;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._storage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage?.internalValue;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._userdata !== undefined) {
      hasAnyValues = true;
      internalValueResult.userdata = this._userdata;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstance | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowPxe = undefined;
      this._alwaysPxe = undefined;
      this._cryptedRootPassword = undefined;
      this._hostname = undefined;
      this._id = undefined;
      this._ips.internalValue = undefined;
      this._ipxeScriptUrl = undefined;
      this._networkReady = undefined;
      this._operatingSystem.internalValue = undefined;
      this._rescue = undefined;
      this._sshKeys = undefined;
      this._state = undefined;
      this._storage.internalValue = undefined;
      this._tags = undefined;
      this._userdata = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowPxe = value.allowPxe;
      this._alwaysPxe = value.alwaysPxe;
      this._cryptedRootPassword = value.cryptedRootPassword;
      this._hostname = value.hostname;
      this._id = value.id;
      this._ips.internalValue = value.ips;
      this._ipxeScriptUrl = value.ipxeScriptUrl;
      this._networkReady = value.networkReady;
      this._operatingSystem.internalValue = value.operatingSystem;
      this._rescue = value.rescue;
      this._sshKeys = value.sshKeys;
      this._state = value.state;
      this._storage.internalValue = value.storage;
      this._tags = value.tags;
      this._userdata = value.userdata;
    }
  }

  // allow_pxe - computed: false, optional: true, required: false
  private _allowPxe?: boolean | cdktf.IResolvable; 
  public get allowPxe() {
    return this.getBooleanAttribute('allow_pxe');
  }
  public set allowPxe(value: boolean | cdktf.IResolvable) {
    this._allowPxe = value;
  }
  public resetAllowPxe() {
    this._allowPxe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPxeInput() {
    return this._allowPxe;
  }

  // always_pxe - computed: false, optional: true, required: false
  private _alwaysPxe?: boolean | cdktf.IResolvable; 
  public get alwaysPxe() {
    return this.getBooleanAttribute('always_pxe');
  }
  public set alwaysPxe(value: boolean | cdktf.IResolvable) {
    this._alwaysPxe = value;
  }
  public resetAlwaysPxe() {
    this._alwaysPxe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysPxeInput() {
    return this._alwaysPxe;
  }

  // crypted_root_password - computed: false, optional: true, required: false
  private _cryptedRootPassword?: string; 
  public get cryptedRootPassword() {
    return this.getStringAttribute('crypted_root_password');
  }
  public set cryptedRootPassword(value: string) {
    this._cryptedRootPassword = value;
  }
  public resetCryptedRootPassword() {
    this._cryptedRootPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptedRootPasswordInput() {
    return this._cryptedRootPassword;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ips - computed: false, optional: true, required: false
  private _ips = new DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceIpsList(this, "ips", false);
  public get ips() {
    return this._ips;
  }
  public putIps(value: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceIps[] | cdktf.IResolvable) {
    this._ips.internalValue = value;
  }
  public resetIps() {
    this._ips.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsInput() {
    return this._ips.internalValue;
  }

  // ipxe_script_url - computed: false, optional: true, required: false
  private _ipxeScriptUrl?: string; 
  public get ipxeScriptUrl() {
    return this.getStringAttribute('ipxe_script_url');
  }
  public set ipxeScriptUrl(value: string) {
    this._ipxeScriptUrl = value;
  }
  public resetIpxeScriptUrl() {
    this._ipxeScriptUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipxeScriptUrlInput() {
    return this._ipxeScriptUrl;
  }

  // network_ready - computed: false, optional: true, required: false
  private _networkReady?: boolean | cdktf.IResolvable; 
  public get networkReady() {
    return this.getBooleanAttribute('network_ready');
  }
  public set networkReady(value: boolean | cdktf.IResolvable) {
    this._networkReady = value;
  }
  public resetNetworkReady() {
    this._networkReady = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkReadyInput() {
    return this._networkReady;
  }

  // operating_system - computed: false, optional: true, required: false
  private _operatingSystem = new DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceOperatingSystemOutputReference(this, "operating_system");
  public get operatingSystem() {
    return this._operatingSystem;
  }
  public putOperatingSystem(value: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceOperatingSystem) {
    this._operatingSystem.internalValue = value;
  }
  public resetOperatingSystem() {
    this._operatingSystem.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingSystemInput() {
    return this._operatingSystem.internalValue;
  }

  // rescue - computed: false, optional: true, required: false
  private _rescue?: boolean | cdktf.IResolvable; 
  public get rescue() {
    return this.getBooleanAttribute('rescue');
  }
  public set rescue(value: boolean | cdktf.IResolvable) {
    this._rescue = value;
  }
  public resetRescue() {
    this._rescue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rescueInput() {
    return this._rescue;
  }

  // ssh_keys - computed: false, optional: true, required: false
  private _sshKeys?: string[]; 
  public get sshKeys() {
    return this.getListAttribute('ssh_keys');
  }
  public set sshKeys(value: string[]) {
    this._sshKeys = value;
  }
  public resetSshKeys() {
    this._sshKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeysInput() {
    return this._sshKeys;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // storage - computed: false, optional: true, required: false
  private _storage = new DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceStorage) {
    this._storage.internalValue = value;
  }
  public resetStorage() {
    this._storage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // userdata - computed: false, optional: true, required: false
  private _userdata?: string; 
  public get userdata() {
    return this.getStringAttribute('userdata');
  }
  public set userdata(value: string) {
    this._userdata = value;
  }
  public resetUserdata() {
    this._userdata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userdataInput() {
    return this._userdata;
  }
}
export interface DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataManufacturer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#id DataK8STinkerbellOrgHardwareV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#slug DataK8STinkerbellOrgHardwareV1Alpha1Manifest#slug}
  */
  readonly slug?: string;
}

export function dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataManufacturerToTerraform(struct?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataManufacturer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    slug: cdktf.stringToTerraform(struct!.slug),
  }
}


export function dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataManufacturerToHclTerraform(struct?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataManufacturer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slug: {
      value: cdktf.stringToHclTerraform(struct!.slug),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataManufacturerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataManufacturer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._slug !== undefined) {
      hasAnyValues = true;
      internalValueResult.slug = this._slug;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataManufacturer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._slug = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._slug = value.slug;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // slug - computed: false, optional: true, required: false
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  public resetSlug() {
    this._slug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }
}
export interface DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#bonding_mode DataK8STinkerbellOrgHardwareV1Alpha1Manifest#bonding_mode}
  */
  readonly bondingMode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#custom DataK8STinkerbellOrgHardwareV1Alpha1Manifest#custom}
  */
  readonly custom?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataCustom;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#facility DataK8STinkerbellOrgHardwareV1Alpha1Manifest#facility}
  */
  readonly facility?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataFacility;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#instance DataK8STinkerbellOrgHardwareV1Alpha1Manifest#instance}
  */
  readonly instance?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstance;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#manufacturer DataK8STinkerbellOrgHardwareV1Alpha1Manifest#manufacturer}
  */
  readonly manufacturer?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataManufacturer;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#state DataK8STinkerbellOrgHardwareV1Alpha1Manifest#state}
  */
  readonly state?: string;
}

export function dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataToTerraform(struct?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bonding_mode: cdktf.numberToTerraform(struct!.bondingMode),
    custom: dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataCustomToTerraform(struct!.custom),
    facility: dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataFacilityToTerraform(struct!.facility),
    instance: dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceToTerraform(struct!.instance),
    manufacturer: dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataManufacturerToTerraform(struct!.manufacturer),
    state: cdktf.stringToTerraform(struct!.state),
  }
}


export function dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataToHclTerraform(struct?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bonding_mode: {
      value: cdktf.numberToHclTerraform(struct!.bondingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom: {
      value: dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataCustomToHclTerraform(struct!.custom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataCustom",
    },
    facility: {
      value: dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataFacilityToHclTerraform(struct!.facility),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataFacility",
    },
    instance: {
      value: dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceToHclTerraform(struct!.instance),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstance",
    },
    manufacturer: {
      value: dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataManufacturerToHclTerraform(struct!.manufacturer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataManufacturer",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bondingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.bondingMode = this._bondingMode;
    }
    if (this._custom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom?.internalValue;
    }
    if (this._facility?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.facility = this._facility?.internalValue;
    }
    if (this._instance?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instance = this._instance?.internalValue;
    }
    if (this._manufacturer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.manufacturer = this._manufacturer?.internalValue;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bondingMode = undefined;
      this._custom.internalValue = undefined;
      this._facility.internalValue = undefined;
      this._instance.internalValue = undefined;
      this._manufacturer.internalValue = undefined;
      this._state = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bondingMode = value.bondingMode;
      this._custom.internalValue = value.custom;
      this._facility.internalValue = value.facility;
      this._instance.internalValue = value.instance;
      this._manufacturer.internalValue = value.manufacturer;
      this._state = value.state;
    }
  }

  // bonding_mode - computed: false, optional: true, required: false
  private _bondingMode?: number; 
  public get bondingMode() {
    return this.getNumberAttribute('bonding_mode');
  }
  public set bondingMode(value: number) {
    this._bondingMode = value;
  }
  public resetBondingMode() {
    this._bondingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bondingModeInput() {
    return this._bondingMode;
  }

  // custom - computed: false, optional: true, required: false
  private _custom = new DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataCustom) {
    this._custom.internalValue = value;
  }
  public resetCustom() {
    this._custom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom.internalValue;
  }

  // facility - computed: false, optional: true, required: false
  private _facility = new DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataFacilityOutputReference(this, "facility");
  public get facility() {
    return this._facility;
  }
  public putFacility(value: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataFacility) {
    this._facility.internalValue = value;
  }
  public resetFacility() {
    this._facility.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facilityInput() {
    return this._facility.internalValue;
  }

  // instance - computed: false, optional: true, required: false
  private _instance = new DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstanceOutputReference(this, "instance");
  public get instance() {
    return this._instance;
  }
  public putInstance(value: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataInstance) {
    this._instance.internalValue = value;
  }
  public resetInstance() {
    this._instance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance.internalValue;
  }

  // manufacturer - computed: false, optional: true, required: false
  private _manufacturer = new DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataManufacturerOutputReference(this, "manufacturer");
  public get manufacturer() {
    return this._manufacturer;
  }
  public putManufacturer(value: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataManufacturer) {
    this._manufacturer.internalValue = value;
  }
  public resetManufacturer() {
    this._manufacturer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manufacturerInput() {
    return this._manufacturer.internalValue;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}
export interface DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpec {
  /**
  * BMCRef contains a relation to a BMC state management type in the same namespace as the Hardware. This may be used for BMC management by orchestrators.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#bmc_ref DataK8STinkerbellOrgHardwareV1Alpha1Manifest#bmc_ref}
  */
  readonly bmcRef?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecBmcRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#disks DataK8STinkerbellOrgHardwareV1Alpha1Manifest#disks}
  */
  readonly disks?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecDisks[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#interfaces DataK8STinkerbellOrgHardwareV1Alpha1Manifest#interfaces}
  */
  readonly interfaces?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfaces[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#metadata DataK8STinkerbellOrgHardwareV1Alpha1Manifest#metadata}
  */
  readonly metadata?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadata;
  /**
  * Resources represents known resources that are available on a machine. Resources may be used for scheduling by orchestrators.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#resources DataK8STinkerbellOrgHardwareV1Alpha1Manifest#resources}
  */
  readonly resources?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#tink_version DataK8STinkerbellOrgHardwareV1Alpha1Manifest#tink_version}
  */
  readonly tinkVersion?: number;
  /**
  * UserData is the user data to configure in the hardware's metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#user_data DataK8STinkerbellOrgHardwareV1Alpha1Manifest#user_data}
  */
  readonly userData?: string;
  /**
  * VendorData is the vendor data to configure in the hardware's metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#vendor_data DataK8STinkerbellOrgHardwareV1Alpha1Manifest#vendor_data}
  */
  readonly vendorData?: string;
}

export function dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecToTerraform(struct?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bmc_ref: dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecBmcRefToTerraform(struct!.bmcRef),
    disks: cdktf.listMapper(dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecDisksToTerraform, false)(struct!.disks),
    interfaces: cdktf.listMapper(dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesToTerraform, false)(struct!.interfaces),
    metadata: dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataToTerraform(struct!.metadata),
    resources: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.resources),
    tink_version: cdktf.numberToTerraform(struct!.tinkVersion),
    user_data: cdktf.stringToTerraform(struct!.userData),
    vendor_data: cdktf.stringToTerraform(struct!.vendorData),
  }
}


export function dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bmc_ref: {
      value: dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecBmcRefToHclTerraform(struct!.bmcRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecBmcRef",
    },
    disks: {
      value: cdktf.listMapperHcl(dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecDisksToHclTerraform, false)(struct!.disks),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecDisksList",
    },
    interfaces: {
      value: cdktf.listMapperHcl(dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesToHclTerraform, false)(struct!.interfaces),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesList",
    },
    metadata: {
      value: dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadata",
    },
    resources: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.resources),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    tink_version: {
      value: cdktf.numberToHclTerraform(struct!.tinkVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_data: {
      value: cdktf.stringToHclTerraform(struct!.userData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vendor_data: {
      value: cdktf.stringToHclTerraform(struct!.vendorData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bmcRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bmcRef = this._bmcRef?.internalValue;
    }
    if (this._disks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disks = this._disks?.internalValue;
    }
    if (this._interfaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaces = this._interfaces?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    if (this._tinkVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.tinkVersion = this._tinkVersion;
    }
    if (this._userData !== undefined) {
      hasAnyValues = true;
      internalValueResult.userData = this._userData;
    }
    if (this._vendorData !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendorData = this._vendorData;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bmcRef.internalValue = undefined;
      this._disks.internalValue = undefined;
      this._interfaces.internalValue = undefined;
      this._metadata.internalValue = undefined;
      this._resources = undefined;
      this._tinkVersion = undefined;
      this._userData = undefined;
      this._vendorData = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bmcRef.internalValue = value.bmcRef;
      this._disks.internalValue = value.disks;
      this._interfaces.internalValue = value.interfaces;
      this._metadata.internalValue = value.metadata;
      this._resources = value.resources;
      this._tinkVersion = value.tinkVersion;
      this._userData = value.userData;
      this._vendorData = value.vendorData;
    }
  }

  // bmc_ref - computed: false, optional: true, required: false
  private _bmcRef = new DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecBmcRefOutputReference(this, "bmc_ref");
  public get bmcRef() {
    return this._bmcRef;
  }
  public putBmcRef(value: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecBmcRef) {
    this._bmcRef.internalValue = value;
  }
  public resetBmcRef() {
    this._bmcRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bmcRefInput() {
    return this._bmcRef.internalValue;
  }

  // disks - computed: false, optional: true, required: false
  private _disks = new DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecDisksList(this, "disks", false);
  public get disks() {
    return this._disks;
  }
  public putDisks(value: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecDisks[] | cdktf.IResolvable) {
    this._disks.internalValue = value;
  }
  public resetDisks() {
    this._disks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disksInput() {
    return this._disks.internalValue;
  }

  // interfaces - computed: false, optional: true, required: false
  private _interfaces = new DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  public resetInterfaces() {
    this._interfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: { [key: string]: string }; 
  public get resources() {
    return this.getStringMapAttribute('resources');
  }
  public set resources(value: { [key: string]: string }) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }

  // tink_version - computed: false, optional: true, required: false
  private _tinkVersion?: number; 
  public get tinkVersion() {
    return this.getNumberAttribute('tink_version');
  }
  public set tinkVersion(value: number) {
    this._tinkVersion = value;
  }
  public resetTinkVersion() {
    this._tinkVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tinkVersionInput() {
    return this._tinkVersion;
  }

  // user_data - computed: false, optional: true, required: false
  private _userData?: string; 
  public get userData() {
    return this.getStringAttribute('user_data');
  }
  public set userData(value: string) {
    this._userData = value;
  }
  public resetUserData() {
    this._userData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataInput() {
    return this._userData;
  }

  // vendor_data - computed: false, optional: true, required: false
  private _vendorData?: string; 
  public get vendorData() {
    return this.getStringAttribute('vendor_data');
  }
  public set vendorData(value: string) {
    this._vendorData = value;
  }
  public resetVendorData() {
    this._vendorData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorDataInput() {
    return this._vendorData;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest k8s_tinkerbell_org_hardware_v1alpha1_manifest}
*/
export class DataK8STinkerbellOrgHardwareV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_tinkerbell_org_hardware_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8STinkerbellOrgHardwareV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8STinkerbellOrgHardwareV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8STinkerbellOrgHardwareV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8STinkerbellOrgHardwareV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_tinkerbell_org_hardware_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/tinkerbell_org_hardware_v1alpha1_manifest k8s_tinkerbell_org_hardware_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8STinkerbellOrgHardwareV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8STinkerbellOrgHardwareV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_tinkerbell_org_hardware_v1alpha1_manifest',
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
  private _metadata = new DataK8STinkerbellOrgHardwareV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8STinkerbellOrgHardwareV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpec) {
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
      metadata: dataK8STinkerbellOrgHardwareV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8STinkerbellOrgHardwareV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8STinkerbellOrgHardwareV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8STinkerbellOrgHardwareV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8STinkerbellOrgHardwareV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
