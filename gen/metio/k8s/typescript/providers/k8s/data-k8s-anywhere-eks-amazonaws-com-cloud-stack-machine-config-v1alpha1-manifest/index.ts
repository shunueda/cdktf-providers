// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/anywhere_eks_amazonaws_com_cloud_stack_machine_config_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/anywhere_eks_amazonaws_com_cloud_stack_machine_config_v1alpha1_manifest#metadata DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestMetadata;
  /**
  * CloudStackMachineConfigSpec defines the desired state of CloudStackMachineConfig.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/anywhere_eks_amazonaws_com_cloud_stack_machine_config_v1alpha1_manifest#spec DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpec;
}
export interface DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/anywhere_eks_amazonaws_com_cloud_stack_machine_config_v1alpha1_manifest#annotations DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/anywhere_eks_amazonaws_com_cloud_stack_machine_config_v1alpha1_manifest#labels DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/anywhere_eks_amazonaws_com_cloud_stack_machine_config_v1alpha1_manifest#name DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/anywhere_eks_amazonaws_com_cloud_stack_machine_config_v1alpha1_manifest#namespace DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpecComputeOffering {
  /**
  * Id of a resource in the CloudStack environment. Mutually exclusive with Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/anywhere_eks_amazonaws_com_cloud_stack_machine_config_v1alpha1_manifest#id DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of a resource in the CloudStack environment. Mutually exclusive with Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/anywhere_eks_amazonaws_com_cloud_stack_machine_config_v1alpha1_manifest#name DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpecComputeOfferingToTerraform(struct?: DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpecComputeOffering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpecComputeOfferingToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpecComputeOffering | cdktf.IResolvable): any {
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

export class DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpecComputeOfferingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpecComputeOffering | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpecComputeOffering | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
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
export interface DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpecDiskOffering {
  /**
  * disk size in GB, > 0 for customized disk offering; = 0 for non-customized disk offering
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/anywhere_eks_amazonaws_com_cloud_stack_machine_config_v1alpha1_manifest#custom_size_in_gb DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1Manifest#custom_size_in_gb}
  */
  readonly customSizeInGb?: number;
  /**
  * device name of the disk offering in VM, shows up in lsblk command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/anywhere_eks_amazonaws_com_cloud_stack_machine_config_v1alpha1_manifest#device DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1Manifest#device}
  */
  readonly device: string;
  /**
  * filesystem used to mkfs in disk offering partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/anywhere_eks_amazonaws_com_cloud_stack_machine_config_v1alpha1_manifest#filesystem DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1Manifest#filesystem}
  */
  readonly filesystem: string;
  /**
  * Id of a resource in the CloudStack environment. Mutually exclusive with Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/anywhere_eks_amazonaws_com_cloud_stack_machine_config_v1alpha1_manifest#id DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * disk label used to label disk partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/anywhere_eks_amazonaws_com_cloud_stack_machine_config_v1alpha1_manifest#label DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1Manifest#label}
  */
  readonly label: string;
  /**
  * path the filesystem will use to mount in VM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/anywhere_eks_amazonaws_com_cloud_stack_machine_config_v1alpha1_manifest#mount_path DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1Manifest#mount_path}
  */
  readonly mountPath: string;
  /**
  * Name of a resource in the CloudStack environment. Mutually exclusive with Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/anywhere_eks_amazonaws_com_cloud_stack_machine_config_v1alpha1_manifest#name DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpecDiskOfferingToTerraform(struct?: DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpecDiskOffering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_size_in_gb: cdktf.numberToTerraform(struct!.customSizeInGb),
    device: cdktf.stringToTerraform(struct!.device),
    filesystem: cdktf.stringToTerraform(struct!.filesystem),
    id: cdktf.stringToTerraform(struct!.id),
    label: cdktf.stringToTerraform(struct!.label),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpecDiskOfferingToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpecDiskOffering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_size_in_gb: {
      value: cdktf.numberToHclTerraform(struct!.customSizeInGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    device: {
      value: cdktf.stringToHclTerraform(struct!.device),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filesystem: {
      value: cdktf.stringToHclTerraform(struct!.filesystem),
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
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
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

export class DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpecDiskOfferingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpecDiskOffering | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customSizeInGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSizeInGb = this._customSizeInGb;
    }
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._filesystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.filesystem = this._filesystem;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpecDiskOffering | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customSizeInGb = undefined;
      this._device = undefined;
      this._filesystem = undefined;
      this._id = undefined;
      this._label = undefined;
      this._mountPath = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customSizeInGb = value.customSizeInGb;
      this._device = value.device;
      this._filesystem = value.filesystem;
      this._id = value.id;
      this._label = value.label;
      this._mountPath = value.mountPath;
      this._name = value.name;
    }
  }

  // custom_size_in_gb - computed: false, optional: true, required: false
  private _customSizeInGb?: number; 
  public get customSizeInGb() {
    return this.getNumberAttribute('custom_size_in_gb');
  }
  public set customSizeInGb(value: number) {
    this._customSizeInGb = value;
  }
  public resetCustomSizeInGb() {
    this._customSizeInGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSizeInGbInput() {
    return this._customSizeInGb;
  }

  // device - computed: false, optional: false, required: true
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // filesystem - computed: false, optional: false, required: true
  private _filesystem?: string; 
  public get filesystem() {
    return this.getStringAttribute('filesystem');
  }
  public set filesystem(value: string) {
    this._filesystem = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filesystemInput() {
    return this._filesystem;
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

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // mount_path - computed: false, optional: false, required: true
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
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
export interface DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpecTemplate {
  /**
  * Id of a resource in the CloudStack environment. Mutually exclusive with Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/anywhere_eks_amazonaws_com_cloud_stack_machine_config_v1alpha1_manifest#id DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of a resource in the CloudStack environment. Mutually exclusive with Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/anywhere_eks_amazonaws_com_cloud_stack_machine_config_v1alpha1_manifest#name DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpecTemplateToTerraform(struct?: DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpecTemplateToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpecTemplate | cdktf.IResolvable): any {
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

export class DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpecTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpecTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpecTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
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
export interface DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpecUsers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/anywhere_eks_amazonaws_com_cloud_stack_machine_config_v1alpha1_manifest#name DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/anywhere_eks_amazonaws_com_cloud_stack_machine_config_v1alpha1_manifest#ssh_authorized_keys DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1Manifest#ssh_authorized_keys}
  */
  readonly sshAuthorizedKeys: string[];
}

export function dataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpecUsersToTerraform(struct?: DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpecUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    ssh_authorized_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sshAuthorizedKeys),
  }
}


export function dataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpecUsersToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpecUsers | cdktf.IResolvable): any {
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
    ssh_authorized_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sshAuthorizedKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpecUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpecUsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sshAuthorizedKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshAuthorizedKeys = this._sshAuthorizedKeys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpecUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._sshAuthorizedKeys = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._sshAuthorizedKeys = value.sshAuthorizedKeys;
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

  // ssh_authorized_keys - computed: false, optional: false, required: true
  private _sshAuthorizedKeys?: string[]; 
  public get sshAuthorizedKeys() {
    return this.getListAttribute('ssh_authorized_keys');
  }
  public set sshAuthorizedKeys(value: string[]) {
    this._sshAuthorizedKeys = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sshAuthorizedKeysInput() {
    return this._sshAuthorizedKeys;
  }
}

export class DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpecUsersList extends cdktf.ComplexList {
  public internalValue? : DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpecUsers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpecUsersOutputReference {
    return new DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpecUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpec {
  /**
  * Defaults to 'no'. Can be 'pro' or 'anti'. If set to 'pro' or 'anti', will create an affinity group per machine set of the corresponding type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/anywhere_eks_amazonaws_com_cloud_stack_machine_config_v1alpha1_manifest#affinity DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1Manifest#affinity}
  */
  readonly affinity?: string;
  /**
  * AffinityGroupIds allows users to pass in a list of UUIDs for previously-created Affinity Groups. Any VM’s created with this spec will be added to the affinity group, which will dictate which physical host(s) they can be placed on. Affinity groups can be type “affinity” or “anti-affinity” in CloudStack. If they are type “anti-affinity”, all VM’s in the group must be on separate physical hosts for high availability. If they are type “affinity”, all VM’s in the group must be on the same physical host for improved performance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/anywhere_eks_amazonaws_com_cloud_stack_machine_config_v1alpha1_manifest#affinity_group_ids DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1Manifest#affinity_group_ids}
  */
  readonly affinityGroupIds?: string[];
  /**
  * ComputeOffering refers to a compute offering which has been previously registered in CloudStack. It represents a VM’s instance size including number of CPU’s, memory, and CPU speed. It can either be specified as a UUID or name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/anywhere_eks_amazonaws_com_cloud_stack_machine_config_v1alpha1_manifest#compute_offering DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1Manifest#compute_offering}
  */
  readonly computeOffering: DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpecComputeOffering;
  /**
  * DiskOffering refers to a disk offering which has been previously registered in CloudStack. It represents a disk offering with pre-defined size or custom specified disk size. It can either be specified as a UUID or name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/anywhere_eks_amazonaws_com_cloud_stack_machine_config_v1alpha1_manifest#disk_offering DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1Manifest#disk_offering}
  */
  readonly diskOffering?: DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpecDiskOffering;
  /**
  * Symlinks create soft symbolic links folders. One use case is to use data disk to store logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/anywhere_eks_amazonaws_com_cloud_stack_machine_config_v1alpha1_manifest#symlinks DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1Manifest#symlinks}
  */
  readonly symlinks?: { [key: string]: string };
  /**
  * Template refers to a VM image template which has been previously registered in CloudStack. It can either be specified as a UUID or name. When using a template name it must include the Kubernetes version(s). For example, a template used for Kubernetes 1.27 could be ubuntu-2204-1.27.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/anywhere_eks_amazonaws_com_cloud_stack_machine_config_v1alpha1_manifest#template DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1Manifest#template}
  */
  readonly template: DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpecTemplate;
  /**
  * UserCustomDetails allows users to pass in non-standard key value inputs, outside those defined [here](https://github.com/shapeblue/cloudstack/blob/main/api/src/main/java/com/cloud/vm/VmDetailConstants.java)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/anywhere_eks_amazonaws_com_cloud_stack_machine_config_v1alpha1_manifest#user_custom_details DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1Manifest#user_custom_details}
  */
  readonly userCustomDetails?: { [key: string]: string };
  /**
  * Users consists of an array of objects containing the username, as well as a list of their public keys. These users will be authorized to ssh into the machines
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/anywhere_eks_amazonaws_com_cloud_stack_machine_config_v1alpha1_manifest#users DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1Manifest#users}
  */
  readonly users?: DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpecUsers[] | cdktf.IResolvable;
}

export function dataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpecToTerraform(struct?: DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: cdktf.stringToTerraform(struct!.affinity),
    affinity_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.affinityGroupIds),
    compute_offering: dataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpecComputeOfferingToTerraform(struct!.computeOffering),
    disk_offering: dataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpecDiskOfferingToTerraform(struct!.diskOffering),
    symlinks: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.symlinks),
    template: dataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpecTemplateToTerraform(struct!.template),
    user_custom_details: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.userCustomDetails),
    users: cdktf.listMapper(dataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpecUsersToTerraform, false)(struct!.users),
  }
}


export function dataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpec | cdktf.IResolvable): any {
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
    affinity_group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.affinityGroupIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    compute_offering: {
      value: dataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpecComputeOfferingToHclTerraform(struct!.computeOffering),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpecComputeOffering",
    },
    disk_offering: {
      value: dataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpecDiskOfferingToHclTerraform(struct!.diskOffering),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpecDiskOffering",
    },
    symlinks: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.symlinks),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    template: {
      value: dataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpecTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpecTemplate",
    },
    user_custom_details: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.userCustomDetails),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    users: {
      value: cdktf.listMapperHcl(dataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpecUsersToHclTerraform, false)(struct!.users),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpecUsersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._affinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity;
    }
    if (this._affinityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinityGroupIds = this._affinityGroupIds;
    }
    if (this._computeOffering?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeOffering = this._computeOffering?.internalValue;
    }
    if (this._diskOffering?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskOffering = this._diskOffering?.internalValue;
    }
    if (this._symlinks !== undefined) {
      hasAnyValues = true;
      internalValueResult.symlinks = this._symlinks;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    if (this._userCustomDetails !== undefined) {
      hasAnyValues = true;
      internalValueResult.userCustomDetails = this._userCustomDetails;
    }
    if (this._users?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinity = undefined;
      this._affinityGroupIds = undefined;
      this._computeOffering.internalValue = undefined;
      this._diskOffering.internalValue = undefined;
      this._symlinks = undefined;
      this._template.internalValue = undefined;
      this._userCustomDetails = undefined;
      this._users.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._affinity = value.affinity;
      this._affinityGroupIds = value.affinityGroupIds;
      this._computeOffering.internalValue = value.computeOffering;
      this._diskOffering.internalValue = value.diskOffering;
      this._symlinks = value.symlinks;
      this._template.internalValue = value.template;
      this._userCustomDetails = value.userCustomDetails;
      this._users.internalValue = value.users;
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

  // affinity_group_ids - computed: false, optional: true, required: false
  private _affinityGroupIds?: string[]; 
  public get affinityGroupIds() {
    return this.getListAttribute('affinity_group_ids');
  }
  public set affinityGroupIds(value: string[]) {
    this._affinityGroupIds = value;
  }
  public resetAffinityGroupIds() {
    this._affinityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityGroupIdsInput() {
    return this._affinityGroupIds;
  }

  // compute_offering - computed: false, optional: false, required: true
  private _computeOffering = new DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpecComputeOfferingOutputReference(this, "compute_offering");
  public get computeOffering() {
    return this._computeOffering;
  }
  public putComputeOffering(value: DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpecComputeOffering) {
    this._computeOffering.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeOfferingInput() {
    return this._computeOffering.internalValue;
  }

  // disk_offering - computed: false, optional: true, required: false
  private _diskOffering = new DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpecDiskOfferingOutputReference(this, "disk_offering");
  public get diskOffering() {
    return this._diskOffering;
  }
  public putDiskOffering(value: DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpecDiskOffering) {
    this._diskOffering.internalValue = value;
  }
  public resetDiskOffering() {
    this._diskOffering.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskOfferingInput() {
    return this._diskOffering.internalValue;
  }

  // symlinks - computed: false, optional: true, required: false
  private _symlinks?: { [key: string]: string }; 
  public get symlinks() {
    return this.getStringMapAttribute('symlinks');
  }
  public set symlinks(value: { [key: string]: string }) {
    this._symlinks = value;
  }
  public resetSymlinks() {
    this._symlinks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get symlinksInput() {
    return this._symlinks;
  }

  // template - computed: false, optional: false, required: true
  private _template = new DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpecTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpecTemplate) {
    this._template.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }

  // user_custom_details - computed: false, optional: true, required: false
  private _userCustomDetails?: { [key: string]: string }; 
  public get userCustomDetails() {
    return this.getStringMapAttribute('user_custom_details');
  }
  public set userCustomDetails(value: { [key: string]: string }) {
    this._userCustomDetails = value;
  }
  public resetUserCustomDetails() {
    this._userCustomDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userCustomDetailsInput() {
    return this._userCustomDetails;
  }

  // users - computed: false, optional: true, required: false
  private _users = new DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpecUsersList(this, "users", false);
  public get users() {
    return this._users;
  }
  public putUsers(value: DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpecUsers[] | cdktf.IResolvable) {
    this._users.internalValue = value;
  }
  public resetUsers() {
    this._users.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/anywhere_eks_amazonaws_com_cloud_stack_machine_config_v1alpha1_manifest k8s_anywhere_eks_amazonaws_com_cloud_stack_machine_config_v1alpha1_manifest}
*/
export class DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_anywhere_eks_amazonaws_com_cloud_stack_machine_config_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/anywhere_eks_amazonaws_com_cloud_stack_machine_config_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_anywhere_eks_amazonaws_com_cloud_stack_machine_config_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/anywhere_eks_amazonaws_com_cloud_stack_machine_config_v1alpha1_manifest k8s_anywhere_eks_amazonaws_com_cloud_stack_machine_config_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_anywhere_eks_amazonaws_com_cloud_stack_machine_config_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.3'
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
  private _metadata = new DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpec) {
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
      metadata: dataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAnywhereEksAmazonawsComCloudStackMachineConfigV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
