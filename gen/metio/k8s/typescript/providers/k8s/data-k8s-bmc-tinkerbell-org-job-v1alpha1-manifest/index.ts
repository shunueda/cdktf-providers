// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_job_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SBmcTinkerbellOrgJobV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_job_v1alpha1_manifest#metadata DataK8SBmcTinkerbellOrgJobV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SBmcTinkerbellOrgJobV1Alpha1ManifestMetadata;
  /**
  * JobSpec defines the desired state of Job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_job_v1alpha1_manifest#spec DataK8SBmcTinkerbellOrgJobV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpec;
}
export interface DataK8SBmcTinkerbellOrgJobV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_job_v1alpha1_manifest#annotations DataK8SBmcTinkerbellOrgJobV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_job_v1alpha1_manifest#labels DataK8SBmcTinkerbellOrgJobV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_job_v1alpha1_manifest#name DataK8SBmcTinkerbellOrgJobV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_job_v1alpha1_manifest#namespace DataK8SBmcTinkerbellOrgJobV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SBmcTinkerbellOrgJobV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SBmcTinkerbellOrgJobV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SBmcTinkerbellOrgJobV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SBmcTinkerbellOrgJobV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SBmcTinkerbellOrgJobV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SBmcTinkerbellOrgJobV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SBmcTinkerbellOrgJobV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpecMachineRef {
  /**
  * Name of the Machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_job_v1alpha1_manifest#name DataK8SBmcTinkerbellOrgJobV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace the Machine resides in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_job_v1alpha1_manifest#namespace DataK8SBmcTinkerbellOrgJobV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpecMachineRefToTerraform(struct?: DataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpecMachineRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpecMachineRefToHclTerraform(struct?: DataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpecMachineRef | cdktf.IResolvable): any {
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

export class DataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpecMachineRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpecMachineRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpecMachineRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpecTasksOneTimeBootDeviceAction {
  /**
  * Devices represents the boot devices, in order for setting one time boot. Currently only the first device in the slice is used to set one time boot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_job_v1alpha1_manifest#device DataK8SBmcTinkerbellOrgJobV1Alpha1Manifest#device}
  */
  readonly device: string[];
  /**
  * EFIBoot instructs the machine to use EFI boot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_job_v1alpha1_manifest#efi_boot DataK8SBmcTinkerbellOrgJobV1Alpha1Manifest#efi_boot}
  */
  readonly efiBoot?: boolean | cdktf.IResolvable;
}

export function dataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpecTasksOneTimeBootDeviceActionToTerraform(struct?: DataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpecTasksOneTimeBootDeviceAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.device),
    efi_boot: cdktf.booleanToTerraform(struct!.efiBoot),
  }
}


export function dataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpecTasksOneTimeBootDeviceActionToHclTerraform(struct?: DataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpecTasksOneTimeBootDeviceAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.device),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    efi_boot: {
      value: cdktf.booleanToHclTerraform(struct!.efiBoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpecTasksOneTimeBootDeviceActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpecTasksOneTimeBootDeviceAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._efiBoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.efiBoot = this._efiBoot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpecTasksOneTimeBootDeviceAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._device = undefined;
      this._efiBoot = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._device = value.device;
      this._efiBoot = value.efiBoot;
    }
  }

  // device - computed: false, optional: false, required: true
  private _device?: string[]; 
  public get device() {
    return this.getListAttribute('device');
  }
  public set device(value: string[]) {
    this._device = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // efi_boot - computed: false, optional: true, required: false
  private _efiBoot?: boolean | cdktf.IResolvable; 
  public get efiBoot() {
    return this.getBooleanAttribute('efi_boot');
  }
  public set efiBoot(value: boolean | cdktf.IResolvable) {
    this._efiBoot = value;
  }
  public resetEfiBoot() {
    this._efiBoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get efiBootInput() {
    return this._efiBoot;
  }
}
export interface DataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpecTasksVirtualMediaAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_job_v1alpha1_manifest#kind DataK8SBmcTinkerbellOrgJobV1Alpha1Manifest#kind}
  */
  readonly kind: string;
  /**
  * mediaURL represents the URL of the image to be inserted into the virtual media, or empty to eject media.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_job_v1alpha1_manifest#media_url DataK8SBmcTinkerbellOrgJobV1Alpha1Manifest#media_url}
  */
  readonly mediaUrl?: string;
}

export function dataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpecTasksVirtualMediaActionToTerraform(struct?: DataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpecTasksVirtualMediaAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    media_url: cdktf.stringToTerraform(struct!.mediaUrl),
  }
}


export function dataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpecTasksVirtualMediaActionToHclTerraform(struct?: DataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpecTasksVirtualMediaAction | cdktf.IResolvable): any {
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
    media_url: {
      value: cdktf.stringToHclTerraform(struct!.mediaUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpecTasksVirtualMediaActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpecTasksVirtualMediaAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._mediaUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediaUrl = this._mediaUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpecTasksVirtualMediaAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._mediaUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kind = value.kind;
      this._mediaUrl = value.mediaUrl;
    }
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

  // media_url - computed: false, optional: true, required: false
  private _mediaUrl?: string; 
  public get mediaUrl() {
    return this.getStringAttribute('media_url');
  }
  public set mediaUrl(value: string) {
    this._mediaUrl = value;
  }
  public resetMediaUrl() {
    this._mediaUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaUrlInput() {
    return this._mediaUrl;
  }
}
export interface DataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpecTasks {
  /**
  * OneTimeBootDeviceAction represents a baseboard management one time set boot device operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_job_v1alpha1_manifest#one_time_boot_device_action DataK8SBmcTinkerbellOrgJobV1Alpha1Manifest#one_time_boot_device_action}
  */
  readonly oneTimeBootDeviceAction?: DataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpecTasksOneTimeBootDeviceAction;
  /**
  * PowerAction represents a baseboard management power operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_job_v1alpha1_manifest#power_action DataK8SBmcTinkerbellOrgJobV1Alpha1Manifest#power_action}
  */
  readonly powerAction?: string;
  /**
  * VirtualMediaAction represents a baseboard management virtual media insert/eject.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_job_v1alpha1_manifest#virtual_media_action DataK8SBmcTinkerbellOrgJobV1Alpha1Manifest#virtual_media_action}
  */
  readonly virtualMediaAction?: DataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpecTasksVirtualMediaAction;
}

export function dataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpecTasksToTerraform(struct?: DataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpecTasks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    one_time_boot_device_action: dataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpecTasksOneTimeBootDeviceActionToTerraform(struct!.oneTimeBootDeviceAction),
    power_action: cdktf.stringToTerraform(struct!.powerAction),
    virtual_media_action: dataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpecTasksVirtualMediaActionToTerraform(struct!.virtualMediaAction),
  }
}


export function dataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpecTasksToHclTerraform(struct?: DataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpecTasks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    one_time_boot_device_action: {
      value: dataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpecTasksOneTimeBootDeviceActionToHclTerraform(struct!.oneTimeBootDeviceAction),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpecTasksOneTimeBootDeviceAction",
    },
    power_action: {
      value: cdktf.stringToHclTerraform(struct!.powerAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_media_action: {
      value: dataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpecTasksVirtualMediaActionToHclTerraform(struct!.virtualMediaAction),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpecTasksVirtualMediaAction",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpecTasksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpecTasks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oneTimeBootDeviceAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oneTimeBootDeviceAction = this._oneTimeBootDeviceAction?.internalValue;
    }
    if (this._powerAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerAction = this._powerAction;
    }
    if (this._virtualMediaAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualMediaAction = this._virtualMediaAction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpecTasks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._oneTimeBootDeviceAction.internalValue = undefined;
      this._powerAction = undefined;
      this._virtualMediaAction.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._oneTimeBootDeviceAction.internalValue = value.oneTimeBootDeviceAction;
      this._powerAction = value.powerAction;
      this._virtualMediaAction.internalValue = value.virtualMediaAction;
    }
  }

  // one_time_boot_device_action - computed: false, optional: true, required: false
  private _oneTimeBootDeviceAction = new DataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpecTasksOneTimeBootDeviceActionOutputReference(this, "one_time_boot_device_action");
  public get oneTimeBootDeviceAction() {
    return this._oneTimeBootDeviceAction;
  }
  public putOneTimeBootDeviceAction(value: DataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpecTasksOneTimeBootDeviceAction) {
    this._oneTimeBootDeviceAction.internalValue = value;
  }
  public resetOneTimeBootDeviceAction() {
    this._oneTimeBootDeviceAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oneTimeBootDeviceActionInput() {
    return this._oneTimeBootDeviceAction.internalValue;
  }

  // power_action - computed: false, optional: true, required: false
  private _powerAction?: string; 
  public get powerAction() {
    return this.getStringAttribute('power_action');
  }
  public set powerAction(value: string) {
    this._powerAction = value;
  }
  public resetPowerAction() {
    this._powerAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerActionInput() {
    return this._powerAction;
  }

  // virtual_media_action - computed: false, optional: true, required: false
  private _virtualMediaAction = new DataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpecTasksVirtualMediaActionOutputReference(this, "virtual_media_action");
  public get virtualMediaAction() {
    return this._virtualMediaAction;
  }
  public putVirtualMediaAction(value: DataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpecTasksVirtualMediaAction) {
    this._virtualMediaAction.internalValue = value;
  }
  public resetVirtualMediaAction() {
    this._virtualMediaAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMediaActionInput() {
    return this._virtualMediaAction.internalValue;
  }
}

export class DataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpecTasksList extends cdktf.ComplexList {
  public internalValue? : DataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpecTasks[] | cdktf.IResolvable

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
  public get(index: number): DataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpecTasksOutputReference {
    return new DataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpecTasksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpec {
  /**
  * MachineRef represents the Machine resource to execute the job. All the tasks in the job are executed for the same Machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_job_v1alpha1_manifest#machine_ref DataK8SBmcTinkerbellOrgJobV1Alpha1Manifest#machine_ref}
  */
  readonly machineRef: DataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpecMachineRef;
  /**
  * Tasks represents a list of baseboard management actions to be executed. The tasks are executed sequentially. Controller waits for one task to complete before executing the next. If a single task fails, job execution stops and sets condition Failed. Condition Completed is set only if all the tasks were successful.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_job_v1alpha1_manifest#tasks DataK8SBmcTinkerbellOrgJobV1Alpha1Manifest#tasks}
  */
  readonly tasks: DataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpecTasks[] | cdktf.IResolvable;
}

export function dataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpecToTerraform(struct?: DataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    machine_ref: dataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpecMachineRefToTerraform(struct!.machineRef),
    tasks: cdktf.listMapper(dataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpecTasksToTerraform, false)(struct!.tasks),
  }
}


export function dataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    machine_ref: {
      value: dataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpecMachineRefToHclTerraform(struct!.machineRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpecMachineRef",
    },
    tasks: {
      value: cdktf.listMapperHcl(dataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpecTasksToHclTerraform, false)(struct!.tasks),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpecTasksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._machineRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineRef = this._machineRef?.internalValue;
    }
    if (this._tasks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tasks = this._tasks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._machineRef.internalValue = undefined;
      this._tasks.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._machineRef.internalValue = value.machineRef;
      this._tasks.internalValue = value.tasks;
    }
  }

  // machine_ref - computed: false, optional: false, required: true
  private _machineRef = new DataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpecMachineRefOutputReference(this, "machine_ref");
  public get machineRef() {
    return this._machineRef;
  }
  public putMachineRef(value: DataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpecMachineRef) {
    this._machineRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machineRefInput() {
    return this._machineRef.internalValue;
  }

  // tasks - computed: false, optional: false, required: true
  private _tasks = new DataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpecTasksList(this, "tasks", false);
  public get tasks() {
    return this._tasks;
  }
  public putTasks(value: DataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpecTasks[] | cdktf.IResolvable) {
    this._tasks.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tasksInput() {
    return this._tasks.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_job_v1alpha1_manifest k8s_bmc_tinkerbell_org_job_v1alpha1_manifest}
*/
export class DataK8SBmcTinkerbellOrgJobV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_bmc_tinkerbell_org_job_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SBmcTinkerbellOrgJobV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SBmcTinkerbellOrgJobV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SBmcTinkerbellOrgJobV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_job_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SBmcTinkerbellOrgJobV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_bmc_tinkerbell_org_job_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/bmc_tinkerbell_org_job_v1alpha1_manifest k8s_bmc_tinkerbell_org_job_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SBmcTinkerbellOrgJobV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SBmcTinkerbellOrgJobV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_bmc_tinkerbell_org_job_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.24',
        providerVersionConstraint: '2025.11.24'
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
  private _metadata = new DataK8SBmcTinkerbellOrgJobV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SBmcTinkerbellOrgJobV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpec) {
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
      metadata: dataK8SBmcTinkerbellOrgJobV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SBmcTinkerbellOrgJobV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SBmcTinkerbellOrgJobV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SBmcTinkerbellOrgJobV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
