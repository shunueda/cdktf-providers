// https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTanzuMissionControlClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#id DataTanzuMissionControlCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the management cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#management_cluster_name DataTanzuMissionControlCluster#management_cluster_name}
  */
  readonly managementClusterName?: string;
  /**
  * Name of this cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#name DataTanzuMissionControlCluster#name}
  */
  readonly name: string;
  /**
  * Provisioner of the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#provisioner_name DataTanzuMissionControlCluster#provisioner_name}
  */
  readonly provisionerName?: string;
  /**
  * Wait timeout duration until cluster resource reaches READY state. Accepted timeout duration values like 5s, 45m, or 3h, higher than zero. Should be set to 0 in case of simple attach cluster where kubeconfig input is not provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#ready_wait_timeout DataTanzuMissionControlCluster#ready_wait_timeout}
  */
  readonly readyWaitTimeout?: string;
  /**
  * attach_k8s_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#attach_k8s_cluster DataTanzuMissionControlCluster#attach_k8s_cluster}
  */
  readonly attachK8SCluster?: DataTanzuMissionControlClusterAttachK8SCluster;
  /**
  * meta block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#meta DataTanzuMissionControlCluster#meta}
  */
  readonly meta?: DataTanzuMissionControlClusterMeta;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#spec DataTanzuMissionControlCluster#spec}
  */
  readonly spec?: DataTanzuMissionControlClusterSpec;
}
export interface DataTanzuMissionControlClusterAttachK8SCluster {
  /**
  * Attach cluster description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#description DataTanzuMissionControlCluster#description}
  */
  readonly description?: string;
  /**
  * Attach cluster KUBECONFIG path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#kubeconfig_file DataTanzuMissionControlCluster#kubeconfig_file}
  */
  readonly kubeconfigFile?: string;
  /**
  * Attach cluster KUBECONFIG
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#kubeconfig_raw DataTanzuMissionControlCluster#kubeconfig_raw}
  */
  readonly kubeconfigRaw?: string;
}

export function dataTanzuMissionControlClusterAttachK8SClusterToTerraform(struct?: DataTanzuMissionControlClusterAttachK8SClusterOutputReference | DataTanzuMissionControlClusterAttachK8SCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    kubeconfig_file: cdktf.stringToTerraform(struct!.kubeconfigFile),
    kubeconfig_raw: cdktf.stringToTerraform(struct!.kubeconfigRaw),
  }
}


export function dataTanzuMissionControlClusterAttachK8SClusterToHclTerraform(struct?: DataTanzuMissionControlClusterAttachK8SClusterOutputReference | DataTanzuMissionControlClusterAttachK8SCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubeconfig_file: {
      value: cdktf.stringToHclTerraform(struct!.kubeconfigFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubeconfig_raw: {
      value: cdktf.stringToHclTerraform(struct!.kubeconfigRaw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlClusterAttachK8SClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlClusterAttachK8SCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._kubeconfigFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeconfigFile = this._kubeconfigFile;
    }
    if (this._kubeconfigRaw !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeconfigRaw = this._kubeconfigRaw;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlClusterAttachK8SCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._kubeconfigFile = undefined;
      this._kubeconfigRaw = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._kubeconfigFile = value.kubeconfigFile;
      this._kubeconfigRaw = value.kubeconfigRaw;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // kubeconfig_file - computed: false, optional: true, required: false
  private _kubeconfigFile?: string; 
  public get kubeconfigFile() {
    return this.getStringAttribute('kubeconfig_file');
  }
  public set kubeconfigFile(value: string) {
    this._kubeconfigFile = value;
  }
  public resetKubeconfigFile() {
    this._kubeconfigFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeconfigFileInput() {
    return this._kubeconfigFile;
  }

  // kubeconfig_raw - computed: false, optional: true, required: false
  private _kubeconfigRaw?: string; 
  public get kubeconfigRaw() {
    return this.getStringAttribute('kubeconfig_raw');
  }
  public set kubeconfigRaw(value: string) {
    this._kubeconfigRaw = value;
  }
  public resetKubeconfigRaw() {
    this._kubeconfigRaw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeconfigRawInput() {
    return this._kubeconfigRaw;
  }
}
export interface DataTanzuMissionControlClusterMeta {
  /**
  * Annotations for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#annotations DataTanzuMissionControlCluster#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Description of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#description DataTanzuMissionControlCluster#description}
  */
  readonly description?: string;
  /**
  * Labels for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#labels DataTanzuMissionControlCluster#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataTanzuMissionControlClusterMetaToTerraform(struct?: DataTanzuMissionControlClusterMetaOutputReference | DataTanzuMissionControlClusterMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    description: cdktf.stringToTerraform(struct!.description),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataTanzuMissionControlClusterMetaToHclTerraform(struct?: DataTanzuMissionControlClusterMetaOutputReference | DataTanzuMissionControlClusterMeta): any {
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
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlClusterMetaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlClusterMeta | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlClusterMeta | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._description = undefined;
      this._labels = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotations = value.annotations;
      this._description = value.description;
      this._labels = value.labels;
    }
  }

  // annotations - computed: true, optional: true, required: false
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

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // resource_version - computed: true, optional: false, required: false
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}
export interface DataTanzuMissionControlClusterSpecTkgAwsAdvancedConfigs {
  /**
  * The key of the advanced configuration parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#key DataTanzuMissionControlCluster#key}
  */
  readonly key: string;
  /**
  * The value of the advanced configuration parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#value DataTanzuMissionControlCluster#value}
  */
  readonly value: string;
}

export function dataTanzuMissionControlClusterSpecTkgAwsAdvancedConfigsToTerraform(struct?: DataTanzuMissionControlClusterSpecTkgAwsAdvancedConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataTanzuMissionControlClusterSpecTkgAwsAdvancedConfigsToHclTerraform(struct?: DataTanzuMissionControlClusterSpecTkgAwsAdvancedConfigs | cdktf.IResolvable): any {
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

export class DataTanzuMissionControlClusterSpecTkgAwsAdvancedConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTanzuMissionControlClusterSpecTkgAwsAdvancedConfigs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataTanzuMissionControlClusterSpecTkgAwsAdvancedConfigs | cdktf.IResolvable | undefined) {
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataTanzuMissionControlClusterSpecTkgAwsAdvancedConfigsList extends cdktf.ComplexList {
  public internalValue? : DataTanzuMissionControlClusterSpecTkgAwsAdvancedConfigs[] | cdktf.IResolvable

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
  public get(index: number): DataTanzuMissionControlClusterSpecTkgAwsAdvancedConfigsOutputReference {
    return new DataTanzuMissionControlClusterSpecTkgAwsAdvancedConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTanzuMissionControlClusterSpecTkgAwsDistribution {
  /**
  * Arch of the OS used for the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#os_arch DataTanzuMissionControlCluster#os_arch}
  */
  readonly osArch?: string;
  /**
  * Name of the OS used for the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#os_name DataTanzuMissionControlCluster#os_name}
  */
  readonly osName?: string;
  /**
  * Version of the OS used for the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#os_version DataTanzuMissionControlCluster#os_version}
  */
  readonly osVersion?: string;
  /**
  * Specifies name of the account in which to create the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#provisioner_credential_name DataTanzuMissionControlCluster#provisioner_credential_name}
  */
  readonly provisionerCredentialName?: string;
  /**
  * Specifies region of the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#region DataTanzuMissionControlCluster#region}
  */
  readonly region: string;
  /**
  * Specifies version of the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#version DataTanzuMissionControlCluster#version}
  */
  readonly version: string;
}

export function dataTanzuMissionControlClusterSpecTkgAwsDistributionToTerraform(struct?: DataTanzuMissionControlClusterSpecTkgAwsDistributionOutputReference | DataTanzuMissionControlClusterSpecTkgAwsDistribution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    os_arch: cdktf.stringToTerraform(struct!.osArch),
    os_name: cdktf.stringToTerraform(struct!.osName),
    os_version: cdktf.stringToTerraform(struct!.osVersion),
    provisioner_credential_name: cdktf.stringToTerraform(struct!.provisionerCredentialName),
    region: cdktf.stringToTerraform(struct!.region),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataTanzuMissionControlClusterSpecTkgAwsDistributionToHclTerraform(struct?: DataTanzuMissionControlClusterSpecTkgAwsDistributionOutputReference | DataTanzuMissionControlClusterSpecTkgAwsDistribution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    os_arch: {
      value: cdktf.stringToHclTerraform(struct!.osArch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    os_name: {
      value: cdktf.stringToHclTerraform(struct!.osName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    os_version: {
      value: cdktf.stringToHclTerraform(struct!.osVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provisioner_credential_name: {
      value: cdktf.stringToHclTerraform(struct!.provisionerCredentialName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
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

export class DataTanzuMissionControlClusterSpecTkgAwsDistributionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlClusterSpecTkgAwsDistribution | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._osArch !== undefined) {
      hasAnyValues = true;
      internalValueResult.osArch = this._osArch;
    }
    if (this._osName !== undefined) {
      hasAnyValues = true;
      internalValueResult.osName = this._osName;
    }
    if (this._osVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.osVersion = this._osVersion;
    }
    if (this._provisionerCredentialName !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionerCredentialName = this._provisionerCredentialName;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlClusterSpecTkgAwsDistribution | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._osArch = undefined;
      this._osName = undefined;
      this._osVersion = undefined;
      this._provisionerCredentialName = undefined;
      this._region = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._osArch = value.osArch;
      this._osName = value.osName;
      this._osVersion = value.osVersion;
      this._provisionerCredentialName = value.provisionerCredentialName;
      this._region = value.region;
      this._version = value.version;
    }
  }

  // os_arch - computed: true, optional: true, required: false
  private _osArch?: string; 
  public get osArch() {
    return this.getStringAttribute('os_arch');
  }
  public set osArch(value: string) {
    this._osArch = value;
  }
  public resetOsArch() {
    this._osArch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osArchInput() {
    return this._osArch;
  }

  // os_name - computed: true, optional: true, required: false
  private _osName?: string; 
  public get osName() {
    return this.getStringAttribute('os_name');
  }
  public set osName(value: string) {
    this._osName = value;
  }
  public resetOsName() {
    this._osName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osNameInput() {
    return this._osName;
  }

  // os_version - computed: true, optional: true, required: false
  private _osVersion?: string; 
  public get osVersion() {
    return this.getStringAttribute('os_version');
  }
  public set osVersion(value: string) {
    this._osVersion = value;
  }
  public resetOsVersion() {
    this._osVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osVersionInput() {
    return this._osVersion;
  }

  // provisioner_credential_name - computed: false, optional: true, required: false
  private _provisionerCredentialName?: string; 
  public get provisionerCredentialName() {
    return this.getStringAttribute('provisioner_credential_name');
  }
  public set provisionerCredentialName(value: string) {
    this._provisionerCredentialName = value;
  }
  public resetProvisionerCredentialName() {
    this._provisionerCredentialName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionerCredentialNameInput() {
    return this._provisionerCredentialName;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkClusterPods {
  /**
  * CIDRBlocks specifies one or more of IP address ranges
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#cidr_blocks DataTanzuMissionControlCluster#cidr_blocks}
  */
  readonly cidrBlocks: string;
}

export function dataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkClusterPodsToTerraform(struct?: DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkClusterPods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_blocks: cdktf.stringToTerraform(struct!.cidrBlocks),
  }
}


export function dataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkClusterPodsToHclTerraform(struct?: DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkClusterPods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr_blocks: {
      value: cdktf.stringToHclTerraform(struct!.cidrBlocks),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkClusterPodsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkClusterPods | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrBlocks = this._cidrBlocks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkClusterPods | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidrBlocks = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidrBlocks = value.cidrBlocks;
    }
  }

  // cidr_blocks - computed: false, optional: false, required: true
  private _cidrBlocks?: string; 
  public get cidrBlocks() {
    return this.getStringAttribute('cidr_blocks');
  }
  public set cidrBlocks(value: string) {
    this._cidrBlocks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlocksInput() {
    return this._cidrBlocks;
  }
}

export class DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkClusterPodsList extends cdktf.ComplexList {
  public internalValue? : DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkClusterPods[] | cdktf.IResolvable

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
  public get(index: number): DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkClusterPodsOutputReference {
    return new DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkClusterPodsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkClusterServices {
  /**
  * CIDRBlocks specifies one or more of IP address ranges
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#cidr_blocks DataTanzuMissionControlCluster#cidr_blocks}
  */
  readonly cidrBlocks: string;
}

export function dataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkClusterServicesToTerraform(struct?: DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkClusterServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_blocks: cdktf.stringToTerraform(struct!.cidrBlocks),
  }
}


export function dataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkClusterServicesToHclTerraform(struct?: DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkClusterServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr_blocks: {
      value: cdktf.stringToHclTerraform(struct!.cidrBlocks),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkClusterServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkClusterServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrBlocks = this._cidrBlocks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkClusterServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidrBlocks = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidrBlocks = value.cidrBlocks;
    }
  }

  // cidr_blocks - computed: false, optional: false, required: true
  private _cidrBlocks?: string; 
  public get cidrBlocks() {
    return this.getStringAttribute('cidr_blocks');
  }
  public set cidrBlocks(value: string) {
    this._cidrBlocks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlocksInput() {
    return this._cidrBlocks;
  }
}

export class DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkClusterServicesList extends cdktf.ComplexList {
  public internalValue? : DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkClusterServices[] | cdktf.IResolvable

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
  public get(index: number): DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkClusterServicesOutputReference {
    return new DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkClusterServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkCluster {
  /**
  * APIServerPort specifies the port address for the cluster that defaults to 6443.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#api_server_port DataTanzuMissionControlCluster#api_server_port}
  */
  readonly apiServerPort?: number;
  /**
  * pods block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#pods DataTanzuMissionControlCluster#pods}
  */
  readonly pods: DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkClusterPods[] | cdktf.IResolvable;
  /**
  * services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#services DataTanzuMissionControlCluster#services}
  */
  readonly services: DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkClusterServices[] | cdktf.IResolvable;
}

export function dataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkClusterToTerraform(struct?: DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkClusterOutputReference | DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_server_port: cdktf.numberToTerraform(struct!.apiServerPort),
    pods: cdktf.listMapper(dataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkClusterPodsToTerraform, true)(struct!.pods),
    services: cdktf.listMapper(dataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkClusterServicesToTerraform, true)(struct!.services),
  }
}


export function dataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkClusterToHclTerraform(struct?: DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkClusterOutputReference | DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_server_port: {
      value: cdktf.numberToHclTerraform(struct!.apiServerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pods: {
      value: cdktf.listMapperHcl(dataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkClusterPodsToHclTerraform, true)(struct!.pods),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkClusterPodsList",
    },
    services: {
      value: cdktf.listMapperHcl(dataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkClusterServicesToHclTerraform, true)(struct!.services),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkClusterServicesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiServerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiServerPort = this._apiServerPort;
    }
    if (this._pods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pods = this._pods?.internalValue;
    }
    if (this._services?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiServerPort = undefined;
      this._pods.internalValue = undefined;
      this._services.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiServerPort = value.apiServerPort;
      this._pods.internalValue = value.pods;
      this._services.internalValue = value.services;
    }
  }

  // api_server_port - computed: false, optional: true, required: false
  private _apiServerPort?: number; 
  public get apiServerPort() {
    return this.getNumberAttribute('api_server_port');
  }
  public set apiServerPort(value: number) {
    this._apiServerPort = value;
  }
  public resetApiServerPort() {
    this._apiServerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiServerPortInput() {
    return this._apiServerPort;
  }

  // pods - computed: false, optional: false, required: true
  private _pods = new DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkClusterPodsList(this, "pods", false);
  public get pods() {
    return this._pods;
  }
  public putPods(value: DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkClusterPods[] | cdktf.IResolvable) {
    this._pods.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podsInput() {
    return this._pods.internalValue;
  }

  // services - computed: false, optional: false, required: true
  private _services = new DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkClusterServicesList(this, "services", false);
  public get services() {
    return this._services;
  }
  public putServices(value: DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkClusterServices[] | cdktf.IResolvable) {
    this._services.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services.internalValue;
  }
}
export interface DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkProviderSubnets {
  /**
  * AWS availability zone e.g. us-west-2a
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#availability_zone DataTanzuMissionControlCluster#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * CIDR for AWS subnet which must be in the range of AWS VPC CIDR block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#cidr_block_subnet DataTanzuMissionControlCluster#cidr_block_subnet}
  */
  readonly cidrBlockSubnet?: string;
  /**
  * Describes if it is public subnet or private subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#is_public DataTanzuMissionControlCluster#is_public}
  */
  readonly isPublic?: boolean | cdktf.IResolvable;
  /**
  * This is the subnet ID of AWS. The rest of the fields are ignored if this field is specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#subnet_id DataTanzuMissionControlCluster#subnet_id}
  */
  readonly subnetId?: string;
}

export function dataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkProviderSubnetsToTerraform(struct?: DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkProviderSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_zone: cdktf.stringToTerraform(struct!.availabilityZone),
    cidr_block_subnet: cdktf.stringToTerraform(struct!.cidrBlockSubnet),
    is_public: cdktf.booleanToTerraform(struct!.isPublic),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


export function dataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkProviderSubnetsToHclTerraform(struct?: DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkProviderSubnets | cdktf.IResolvable): any {
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
    cidr_block_subnet: {
      value: cdktf.stringToHclTerraform(struct!.cidrBlockSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_public: {
      value: cdktf.booleanToHclTerraform(struct!.isPublic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkProviderSubnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkProviderSubnets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZone = this._availabilityZone;
    }
    if (this._cidrBlockSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrBlockSubnet = this._cidrBlockSubnet;
    }
    if (this._isPublic !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPublic = this._isPublic;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkProviderSubnets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availabilityZone = undefined;
      this._cidrBlockSubnet = undefined;
      this._isPublic = undefined;
      this._subnetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availabilityZone = value.availabilityZone;
      this._cidrBlockSubnet = value.cidrBlockSubnet;
      this._isPublic = value.isPublic;
      this._subnetId = value.subnetId;
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

  // cidr_block_subnet - computed: false, optional: true, required: false
  private _cidrBlockSubnet?: string; 
  public get cidrBlockSubnet() {
    return this.getStringAttribute('cidr_block_subnet');
  }
  public set cidrBlockSubnet(value: string) {
    this._cidrBlockSubnet = value;
  }
  public resetCidrBlockSubnet() {
    this._cidrBlockSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlockSubnetInput() {
    return this._cidrBlockSubnet;
  }

  // is_public - computed: false, optional: true, required: false
  private _isPublic?: boolean | cdktf.IResolvable; 
  public get isPublic() {
    return this.getBooleanAttribute('is_public');
  }
  public set isPublic(value: boolean | cdktf.IResolvable) {
    this._isPublic = value;
  }
  public resetIsPublic() {
    this._isPublic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPublicInput() {
    return this._isPublic;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }
}

export class DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkProviderSubnetsList extends cdktf.ComplexList {
  public internalValue? : DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkProviderSubnets[] | cdktf.IResolvable

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
  public get(index: number): DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkProviderSubnetsOutputReference {
    return new DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkProviderSubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkProviderVpc {
  /**
  * CIDR for AWS VPC. A valid example is 10.0.0.0/16
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#cidr_block_vpc DataTanzuMissionControlCluster#cidr_block_vpc}
  */
  readonly cidrBlockVpc?: string;
  /**
  * AWS VPC ID. The rest of the fields are ignored if this field is specified. Kindly add the VPC ID to the terraform script in case of existing VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#vpc_id DataTanzuMissionControlCluster#vpc_id}
  */
  readonly vpcId?: string;
}

export function dataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkProviderVpcToTerraform(struct?: DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkProviderVpcOutputReference | DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkProviderVpc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_block_vpc: cdktf.stringToTerraform(struct!.cidrBlockVpc),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function dataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkProviderVpcToHclTerraform(struct?: DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkProviderVpcOutputReference | DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkProviderVpc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr_block_vpc: {
      value: cdktf.stringToHclTerraform(struct!.cidrBlockVpc),
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

export class DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkProviderVpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkProviderVpc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrBlockVpc !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrBlockVpc = this._cidrBlockVpc;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkProviderVpc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cidrBlockVpc = undefined;
      this._vpcId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cidrBlockVpc = value.cidrBlockVpc;
      this._vpcId = value.vpcId;
    }
  }

  // cidr_block_vpc - computed: true, optional: true, required: false
  private _cidrBlockVpc?: string; 
  public get cidrBlockVpc() {
    return this.getStringAttribute('cidr_block_vpc');
  }
  public set cidrBlockVpc(value: string) {
    this._cidrBlockVpc = value;
  }
  public resetCidrBlockVpc() {
    this._cidrBlockVpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlockVpcInput() {
    return this._cidrBlockVpc;
  }

  // vpc_id - computed: true, optional: true, required: false
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
export interface DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkProvider {
  /**
  * subnets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#subnets DataTanzuMissionControlCluster#subnets}
  */
  readonly subnets?: DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkProviderSubnets[] | cdktf.IResolvable;
  /**
  * vpc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#vpc DataTanzuMissionControlCluster#vpc}
  */
  readonly vpc: DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkProviderVpc;
}

export function dataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkProviderToTerraform(struct?: DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnets: cdktf.listMapper(dataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkProviderSubnetsToTerraform, true)(struct!.subnets),
    vpc: dataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkProviderVpcToTerraform(struct!.vpc),
  }
}


export function dataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkProviderToHclTerraform(struct?: DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subnets: {
      value: cdktf.listMapperHcl(dataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkProviderSubnetsToHclTerraform, true)(struct!.subnets),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkProviderSubnetsList",
    },
    vpc: {
      value: dataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkProviderVpcToHclTerraform(struct!.vpc),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkProviderVpcList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkProviderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkProvider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets?.internalValue;
    }
    if (this._vpc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpc = this._vpc?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkProvider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._subnets.internalValue = undefined;
      this._vpc.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._subnets.internalValue = value.subnets;
      this._vpc.internalValue = value.vpc;
    }
  }

  // subnets - computed: false, optional: true, required: false
  private _subnets = new DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkProviderSubnetsList(this, "subnets", false);
  public get subnets() {
    return this._subnets;
  }
  public putSubnets(value: DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkProviderSubnets[] | cdktf.IResolvable) {
    this._subnets.internalValue = value;
  }
  public resetSubnets() {
    this._subnets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets.internalValue;
  }

  // vpc - computed: false, optional: false, required: true
  private _vpc = new DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkProviderVpcOutputReference(this, "vpc");
  public get vpc() {
    return this._vpc;
  }
  public putVpc(value: DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkProviderVpc) {
    this._vpc.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcInput() {
    return this._vpc.internalValue;
  }
}

export class DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkProviderList extends cdktf.ComplexList {
  public internalValue? : DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkProvider[] | cdktf.IResolvable

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
  public get(index: number): DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkProviderOutputReference {
    return new DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkProviderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTanzuMissionControlClusterSpecTkgAwsSettingsNetwork {
  /**
  * cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#cluster DataTanzuMissionControlCluster#cluster}
  */
  readonly cluster: DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkCluster;
  /**
  * provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#provider DataTanzuMissionControlCluster#provider}
  */
  readonly provider: DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkProvider[] | cdktf.IResolvable;
}

export function dataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkToTerraform(struct?: DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkOutputReference | DataTanzuMissionControlClusterSpecTkgAwsSettingsNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster: dataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkClusterToTerraform(struct!.cluster),
    provider: cdktf.listMapper(dataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkProviderToTerraform, true)(struct!.provider),
  }
}


export function dataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkToHclTerraform(struct?: DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkOutputReference | DataTanzuMissionControlClusterSpecTkgAwsSettingsNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster: {
      value: dataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkClusterToHclTerraform(struct!.cluster),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkClusterList",
    },
    provider: {
      value: cdktf.listMapperHcl(dataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkProviderToHclTerraform, true)(struct!.provider),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkProviderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlClusterSpecTkgAwsSettingsNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster?.internalValue;
    }
    if (this._provider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlClusterSpecTkgAwsSettingsNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cluster.internalValue = undefined;
      this._provider.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cluster.internalValue = value.cluster;
      this._provider.internalValue = value.provider;
    }
  }

  // cluster - computed: false, optional: false, required: true
  private _cluster = new DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkClusterOutputReference(this, "cluster");
  public get cluster() {
    return this._cluster;
  }
  public putCluster(value: DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkCluster) {
    this._cluster.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster.internalValue;
  }

  // provider - computed: false, optional: false, required: true
  private _provider = new DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkProviderList(this, "provider", false);
  public get provider() {
    return this._provider;
  }
  public putProvider(value: DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkProvider[] | cdktf.IResolvable) {
    this._provider.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider.internalValue;
  }
}
export interface DataTanzuMissionControlClusterSpecTkgAwsSettingsSecurity {
  /**
  * SSH key for provisioning and accessing the cluster VMs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#ssh_key DataTanzuMissionControlCluster#ssh_key}
  */
  readonly sshKey: string;
}

export function dataTanzuMissionControlClusterSpecTkgAwsSettingsSecurityToTerraform(struct?: DataTanzuMissionControlClusterSpecTkgAwsSettingsSecurityOutputReference | DataTanzuMissionControlClusterSpecTkgAwsSettingsSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ssh_key: cdktf.stringToTerraform(struct!.sshKey),
  }
}


export function dataTanzuMissionControlClusterSpecTkgAwsSettingsSecurityToHclTerraform(struct?: DataTanzuMissionControlClusterSpecTkgAwsSettingsSecurityOutputReference | DataTanzuMissionControlClusterSpecTkgAwsSettingsSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ssh_key: {
      value: cdktf.stringToHclTerraform(struct!.sshKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlClusterSpecTkgAwsSettingsSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlClusterSpecTkgAwsSettingsSecurity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sshKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKey = this._sshKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlClusterSpecTkgAwsSettingsSecurity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sshKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sshKey = value.sshKey;
    }
  }

  // ssh_key - computed: false, optional: false, required: true
  private _sshKey?: string; 
  public get sshKey() {
    return this.getStringAttribute('ssh_key');
  }
  public set sshKey(value: string) {
    this._sshKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyInput() {
    return this._sshKey;
  }
}
export interface DataTanzuMissionControlClusterSpecTkgAwsSettings {
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#network DataTanzuMissionControlCluster#network}
  */
  readonly network: DataTanzuMissionControlClusterSpecTkgAwsSettingsNetwork;
  /**
  * security block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#security DataTanzuMissionControlCluster#security}
  */
  readonly security: DataTanzuMissionControlClusterSpecTkgAwsSettingsSecurity;
}

export function dataTanzuMissionControlClusterSpecTkgAwsSettingsToTerraform(struct?: DataTanzuMissionControlClusterSpecTkgAwsSettingsOutputReference | DataTanzuMissionControlClusterSpecTkgAwsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network: dataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkToTerraform(struct!.network),
    security: dataTanzuMissionControlClusterSpecTkgAwsSettingsSecurityToTerraform(struct!.security),
  }
}


export function dataTanzuMissionControlClusterSpecTkgAwsSettingsToHclTerraform(struct?: DataTanzuMissionControlClusterSpecTkgAwsSettingsOutputReference | DataTanzuMissionControlClusterSpecTkgAwsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network: {
      value: dataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkToHclTerraform(struct!.network),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkList",
    },
    security: {
      value: dataTanzuMissionControlClusterSpecTkgAwsSettingsSecurityToHclTerraform(struct!.security),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlClusterSpecTkgAwsSettingsSecurityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlClusterSpecTkgAwsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlClusterSpecTkgAwsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._network?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network?.internalValue;
    }
    if (this._security?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.security = this._security?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlClusterSpecTkgAwsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._network.internalValue = undefined;
      this._security.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._network.internalValue = value.network;
      this._security.internalValue = value.security;
    }
  }

  // network - computed: false, optional: false, required: true
  private _network = new DataTanzuMissionControlClusterSpecTkgAwsSettingsNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: DataTanzuMissionControlClusterSpecTkgAwsSettingsNetwork) {
    this._network.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // security - computed: false, optional: false, required: true
  private _security = new DataTanzuMissionControlClusterSpecTkgAwsSettingsSecurityOutputReference(this, "security");
  public get security() {
    return this._security;
  }
  public putSecurity(value: DataTanzuMissionControlClusterSpecTkgAwsSettingsSecurity) {
    this._security.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security.internalValue;
  }
}
export interface DataTanzuMissionControlClusterSpecTkgAwsTopologyControlPlane {
  /**
  * List of availability zones for the control plane nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#availability_zones DataTanzuMissionControlCluster#availability_zones}
  */
  readonly availabilityZones: string[];
  /**
  * Flag which controls if the cluster needs to be highly available. HA cluster creates three controlplane machines, and non HA creates just one
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#high_availability DataTanzuMissionControlCluster#high_availability}
  */
  readonly highAvailability?: boolean | cdktf.IResolvable;
  /**
  * Control plane instance type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#instance_type DataTanzuMissionControlCluster#instance_type}
  */
  readonly instanceType: string;
}

export function dataTanzuMissionControlClusterSpecTkgAwsTopologyControlPlaneToTerraform(struct?: DataTanzuMissionControlClusterSpecTkgAwsTopologyControlPlaneOutputReference | DataTanzuMissionControlClusterSpecTkgAwsTopologyControlPlane): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.availabilityZones),
    high_availability: cdktf.booleanToTerraform(struct!.highAvailability),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
  }
}


export function dataTanzuMissionControlClusterSpecTkgAwsTopologyControlPlaneToHclTerraform(struct?: DataTanzuMissionControlClusterSpecTkgAwsTopologyControlPlaneOutputReference | DataTanzuMissionControlClusterSpecTkgAwsTopologyControlPlane): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_zones: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.availabilityZones),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    high_availability: {
      value: cdktf.booleanToHclTerraform(struct!.highAvailability),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlClusterSpecTkgAwsTopologyControlPlaneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlClusterSpecTkgAwsTopologyControlPlane | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityZones !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZones = this._availabilityZones;
    }
    if (this._highAvailability !== undefined) {
      hasAnyValues = true;
      internalValueResult.highAvailability = this._highAvailability;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlClusterSpecTkgAwsTopologyControlPlane | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availabilityZones = undefined;
      this._highAvailability = undefined;
      this._instanceType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availabilityZones = value.availabilityZones;
      this._highAvailability = value.highAvailability;
      this._instanceType = value.instanceType;
    }
  }

  // availability_zones - computed: false, optional: false, required: true
  private _availabilityZones?: string[]; 
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }
  public set availabilityZones(value: string[]) {
    this._availabilityZones = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZonesInput() {
    return this._availabilityZones;
  }

  // high_availability - computed: false, optional: true, required: false
  private _highAvailability?: boolean | cdktf.IResolvable; 
  public get highAvailability() {
    return this.getBooleanAttribute('high_availability');
  }
  public set highAvailability(value: boolean | cdktf.IResolvable) {
    this._highAvailability = value;
  }
  public resetHighAvailability() {
    this._highAvailability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highAvailabilityInput() {
    return this._highAvailability;
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }
}
export interface DataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsInfo {
  /**
  * Description of the nodepool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#description DataTanzuMissionControlCluster#description}
  */
  readonly description?: string;
  /**
  * Name of the nodepool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#name DataTanzuMissionControlCluster#name}
  */
  readonly name: string;
}

export function dataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsInfoToTerraform(struct?: DataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsInfoOutputReference | DataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsInfoToHclTerraform(struct?: DataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsInfoOutputReference | DataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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

export class DataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._name = value.name;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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
export interface DataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsSpecTkgAwsNodePlacement {
  /**
  * The Availability Zone where the AWS nodes are placed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#aws_availability_zone DataTanzuMissionControlCluster#aws_availability_zone}
  */
  readonly awsAvailabilityZone: string;
}

export function dataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsSpecTkgAwsNodePlacementToTerraform(struct?: DataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsSpecTkgAwsNodePlacementOutputReference | DataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsSpecTkgAwsNodePlacement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_availability_zone: cdktf.stringToTerraform(struct!.awsAvailabilityZone),
  }
}


export function dataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsSpecTkgAwsNodePlacementToHclTerraform(struct?: DataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsSpecTkgAwsNodePlacementOutputReference | DataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsSpecTkgAwsNodePlacement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_availability_zone: {
      value: cdktf.stringToHclTerraform(struct!.awsAvailabilityZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsSpecTkgAwsNodePlacementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsSpecTkgAwsNodePlacement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsAvailabilityZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAvailabilityZone = this._awsAvailabilityZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsSpecTkgAwsNodePlacement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsAvailabilityZone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsAvailabilityZone = value.awsAvailabilityZone;
    }
  }

  // aws_availability_zone - computed: false, optional: false, required: true
  private _awsAvailabilityZone?: string; 
  public get awsAvailabilityZone() {
    return this.getStringAttribute('aws_availability_zone');
  }
  public set awsAvailabilityZone(value: string) {
    this._awsAvailabilityZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAvailabilityZoneInput() {
    return this._awsAvailabilityZone;
  }
}
export interface DataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsSpecTkgAws {
  /**
  * Availability zone for the nodepool that is to be used when you are creating a nodepool for cluster in TMC hosted AWS solution
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#availability_zone DataTanzuMissionControlCluster#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Nodepool instance type whose potential values could be found using cluster:options api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#instance_type DataTanzuMissionControlCluster#instance_type}
  */
  readonly instanceType: string;
  /**
  * Kubernetes version of the node pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#version DataTanzuMissionControlCluster#version}
  */
  readonly version: string;
  /**
  * node_placement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#node_placement DataTanzuMissionControlCluster#node_placement}
  */
  readonly nodePlacement: DataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsSpecTkgAwsNodePlacement;
}

export function dataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsSpecTkgAwsToTerraform(struct?: DataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsSpecTkgAwsOutputReference | DataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsSpecTkgAws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_zone: cdktf.stringToTerraform(struct!.availabilityZone),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    version: cdktf.stringToTerraform(struct!.version),
    node_placement: dataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsSpecTkgAwsNodePlacementToTerraform(struct!.nodePlacement),
  }
}


export function dataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsSpecTkgAwsToHclTerraform(struct?: DataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsSpecTkgAwsOutputReference | DataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsSpecTkgAws): any {
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
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
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
    node_placement: {
      value: dataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsSpecTkgAwsNodePlacementToHclTerraform(struct!.nodePlacement),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsSpecTkgAwsNodePlacementList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsSpecTkgAwsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsSpecTkgAws | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZone = this._availabilityZone;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._nodePlacement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePlacement = this._nodePlacement?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsSpecTkgAws | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availabilityZone = undefined;
      this._instanceType = undefined;
      this._version = undefined;
      this._nodePlacement.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availabilityZone = value.availabilityZone;
      this._instanceType = value.instanceType;
      this._version = value.version;
      this._nodePlacement.internalValue = value.nodePlacement;
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

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // nodepool_subnet_id - computed: true, optional: false, required: false
  public get nodepoolSubnetId() {
    return this.getStringAttribute('nodepool_subnet_id');
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // node_placement - computed: false, optional: false, required: true
  private _nodePlacement = new DataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsSpecTkgAwsNodePlacementOutputReference(this, "node_placement");
  public get nodePlacement() {
    return this._nodePlacement;
  }
  public putNodePlacement(value: DataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsSpecTkgAwsNodePlacement) {
    this._nodePlacement.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePlacementInput() {
    return this._nodePlacement.internalValue;
  }
}
export interface DataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsSpec {
  /**
  * Count is the number of nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#worker_node_count DataTanzuMissionControlCluster#worker_node_count}
  */
  readonly workerNodeCount?: string;
  /**
  * tkg_aws block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#tkg_aws DataTanzuMissionControlCluster#tkg_aws}
  */
  readonly tkgAws?: DataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsSpecTkgAws;
}

export function dataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsSpecToTerraform(struct?: DataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsSpecOutputReference | DataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    worker_node_count: cdktf.stringToTerraform(struct!.workerNodeCount),
    tkg_aws: dataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsSpecTkgAwsToTerraform(struct!.tkgAws),
  }
}


export function dataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsSpecToHclTerraform(struct?: DataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsSpecOutputReference | DataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    worker_node_count: {
      value: cdktf.stringToHclTerraform(struct!.workerNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tkg_aws: {
      value: dataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsSpecTkgAwsToHclTerraform(struct!.tkgAws),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsSpecTkgAwsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workerNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerNodeCount = this._workerNodeCount;
    }
    if (this._tkgAws?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tkgAws = this._tkgAws?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._workerNodeCount = undefined;
      this._tkgAws.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._workerNodeCount = value.workerNodeCount;
      this._tkgAws.internalValue = value.tkgAws;
    }
  }

  // worker_node_count - computed: false, optional: true, required: false
  private _workerNodeCount?: string; 
  public get workerNodeCount() {
    return this.getStringAttribute('worker_node_count');
  }
  public set workerNodeCount(value: string) {
    this._workerNodeCount = value;
  }
  public resetWorkerNodeCount() {
    this._workerNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerNodeCountInput() {
    return this._workerNodeCount;
  }

  // tkg_aws - computed: false, optional: true, required: false
  private _tkgAws = new DataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsSpecTkgAwsOutputReference(this, "tkg_aws");
  public get tkgAws() {
    return this._tkgAws;
  }
  public putTkgAws(value: DataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsSpecTkgAws) {
    this._tkgAws.internalValue = value;
  }
  public resetTkgAws() {
    this._tkgAws.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tkgAwsInput() {
    return this._tkgAws.internalValue;
  }
}
export interface DataTanzuMissionControlClusterSpecTkgAwsTopologyNodePools {
  /**
  * info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#info DataTanzuMissionControlCluster#info}
  */
  readonly info: DataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsInfo;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#spec DataTanzuMissionControlCluster#spec}
  */
  readonly spec?: DataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsSpec;
}

export function dataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsToTerraform(struct?: DataTanzuMissionControlClusterSpecTkgAwsTopologyNodePools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    info: dataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsInfoToTerraform(struct!.info),
    spec: dataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsSpecToTerraform(struct!.spec),
  }
}


export function dataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsToHclTerraform(struct?: DataTanzuMissionControlClusterSpecTkgAwsTopologyNodePools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    info: {
      value: dataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsInfoToHclTerraform(struct!.info),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsInfoList",
    },
    spec: {
      value: dataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTanzuMissionControlClusterSpecTkgAwsTopologyNodePools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._info?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.info = this._info?.internalValue;
    }
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlClusterSpecTkgAwsTopologyNodePools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._info.internalValue = undefined;
      this._spec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._info.internalValue = value.info;
      this._spec.internalValue = value.spec;
    }
  }

  // info - computed: false, optional: false, required: true
  private _info = new DataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsInfoOutputReference(this, "info");
  public get info() {
    return this._info;
  }
  public putInfo(value: DataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsInfo) {
    this._info.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infoInput() {
    return this._info.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}

export class DataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsList extends cdktf.ComplexList {
  public internalValue? : DataTanzuMissionControlClusterSpecTkgAwsTopologyNodePools[] | cdktf.IResolvable

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
  public get(index: number): DataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsOutputReference {
    return new DataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTanzuMissionControlClusterSpecTkgAwsTopology {
  /**
  * control_plane block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#control_plane DataTanzuMissionControlCluster#control_plane}
  */
  readonly controlPlane: DataTanzuMissionControlClusterSpecTkgAwsTopologyControlPlane;
  /**
  * node_pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#node_pools DataTanzuMissionControlCluster#node_pools}
  */
  readonly nodePools?: DataTanzuMissionControlClusterSpecTkgAwsTopologyNodePools[] | cdktf.IResolvable;
}

export function dataTanzuMissionControlClusterSpecTkgAwsTopologyToTerraform(struct?: DataTanzuMissionControlClusterSpecTkgAwsTopologyOutputReference | DataTanzuMissionControlClusterSpecTkgAwsTopology): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    control_plane: dataTanzuMissionControlClusterSpecTkgAwsTopologyControlPlaneToTerraform(struct!.controlPlane),
    node_pools: cdktf.listMapper(dataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsToTerraform, true)(struct!.nodePools),
  }
}


export function dataTanzuMissionControlClusterSpecTkgAwsTopologyToHclTerraform(struct?: DataTanzuMissionControlClusterSpecTkgAwsTopologyOutputReference | DataTanzuMissionControlClusterSpecTkgAwsTopology): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    control_plane: {
      value: dataTanzuMissionControlClusterSpecTkgAwsTopologyControlPlaneToHclTerraform(struct!.controlPlane),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlClusterSpecTkgAwsTopologyControlPlaneList",
    },
    node_pools: {
      value: cdktf.listMapperHcl(dataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsToHclTerraform, true)(struct!.nodePools),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlClusterSpecTkgAwsTopologyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlClusterSpecTkgAwsTopology | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controlPlane?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlane = this._controlPlane?.internalValue;
    }
    if (this._nodePools?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePools = this._nodePools?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlClusterSpecTkgAwsTopology | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._controlPlane.internalValue = undefined;
      this._nodePools.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._controlPlane.internalValue = value.controlPlane;
      this._nodePools.internalValue = value.nodePools;
    }
  }

  // control_plane - computed: false, optional: false, required: true
  private _controlPlane = new DataTanzuMissionControlClusterSpecTkgAwsTopologyControlPlaneOutputReference(this, "control_plane");
  public get controlPlane() {
    return this._controlPlane;
  }
  public putControlPlane(value: DataTanzuMissionControlClusterSpecTkgAwsTopologyControlPlane) {
    this._controlPlane.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneInput() {
    return this._controlPlane.internalValue;
  }

  // node_pools - computed: false, optional: true, required: false
  private _nodePools = new DataTanzuMissionControlClusterSpecTkgAwsTopologyNodePoolsList(this, "node_pools", false);
  public get nodePools() {
    return this._nodePools;
  }
  public putNodePools(value: DataTanzuMissionControlClusterSpecTkgAwsTopologyNodePools[] | cdktf.IResolvable) {
    this._nodePools.internalValue = value;
  }
  public resetNodePools() {
    this._nodePools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolsInput() {
    return this._nodePools.internalValue;
  }
}
export interface DataTanzuMissionControlClusterSpecTkgAws {
  /**
  * advanced_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#advanced_configs DataTanzuMissionControlCluster#advanced_configs}
  */
  readonly advancedConfigs?: DataTanzuMissionControlClusterSpecTkgAwsAdvancedConfigs[] | cdktf.IResolvable;
  /**
  * distribution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#distribution DataTanzuMissionControlCluster#distribution}
  */
  readonly distribution: DataTanzuMissionControlClusterSpecTkgAwsDistribution;
  /**
  * settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#settings DataTanzuMissionControlCluster#settings}
  */
  readonly settings: DataTanzuMissionControlClusterSpecTkgAwsSettings;
  /**
  * topology block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#topology DataTanzuMissionControlCluster#topology}
  */
  readonly topology: DataTanzuMissionControlClusterSpecTkgAwsTopology;
}

export function dataTanzuMissionControlClusterSpecTkgAwsToTerraform(struct?: DataTanzuMissionControlClusterSpecTkgAwsOutputReference | DataTanzuMissionControlClusterSpecTkgAws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advanced_configs: cdktf.listMapper(dataTanzuMissionControlClusterSpecTkgAwsAdvancedConfigsToTerraform, true)(struct!.advancedConfigs),
    distribution: dataTanzuMissionControlClusterSpecTkgAwsDistributionToTerraform(struct!.distribution),
    settings: dataTanzuMissionControlClusterSpecTkgAwsSettingsToTerraform(struct!.settings),
    topology: dataTanzuMissionControlClusterSpecTkgAwsTopologyToTerraform(struct!.topology),
  }
}


export function dataTanzuMissionControlClusterSpecTkgAwsToHclTerraform(struct?: DataTanzuMissionControlClusterSpecTkgAwsOutputReference | DataTanzuMissionControlClusterSpecTkgAws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advanced_configs: {
      value: cdktf.listMapperHcl(dataTanzuMissionControlClusterSpecTkgAwsAdvancedConfigsToHclTerraform, true)(struct!.advancedConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlClusterSpecTkgAwsAdvancedConfigsList",
    },
    distribution: {
      value: dataTanzuMissionControlClusterSpecTkgAwsDistributionToHclTerraform(struct!.distribution),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlClusterSpecTkgAwsDistributionList",
    },
    settings: {
      value: dataTanzuMissionControlClusterSpecTkgAwsSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlClusterSpecTkgAwsSettingsList",
    },
    topology: {
      value: dataTanzuMissionControlClusterSpecTkgAwsTopologyToHclTerraform(struct!.topology),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlClusterSpecTkgAwsTopologyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlClusterSpecTkgAwsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlClusterSpecTkgAws | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advancedConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedConfigs = this._advancedConfigs?.internalValue;
    }
    if (this._distribution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.distribution = this._distribution?.internalValue;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    if (this._topology?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topology = this._topology?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlClusterSpecTkgAws | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._advancedConfigs.internalValue = undefined;
      this._distribution.internalValue = undefined;
      this._settings.internalValue = undefined;
      this._topology.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._advancedConfigs.internalValue = value.advancedConfigs;
      this._distribution.internalValue = value.distribution;
      this._settings.internalValue = value.settings;
      this._topology.internalValue = value.topology;
    }
  }

  // advanced_configs - computed: false, optional: true, required: false
  private _advancedConfigs = new DataTanzuMissionControlClusterSpecTkgAwsAdvancedConfigsList(this, "advanced_configs", false);
  public get advancedConfigs() {
    return this._advancedConfigs;
  }
  public putAdvancedConfigs(value: DataTanzuMissionControlClusterSpecTkgAwsAdvancedConfigs[] | cdktf.IResolvable) {
    this._advancedConfigs.internalValue = value;
  }
  public resetAdvancedConfigs() {
    this._advancedConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedConfigsInput() {
    return this._advancedConfigs.internalValue;
  }

  // distribution - computed: false, optional: false, required: true
  private _distribution = new DataTanzuMissionControlClusterSpecTkgAwsDistributionOutputReference(this, "distribution");
  public get distribution() {
    return this._distribution;
  }
  public putDistribution(value: DataTanzuMissionControlClusterSpecTkgAwsDistribution) {
    this._distribution.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionInput() {
    return this._distribution.internalValue;
  }

  // settings - computed: false, optional: false, required: true
  private _settings = new DataTanzuMissionControlClusterSpecTkgAwsSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: DataTanzuMissionControlClusterSpecTkgAwsSettings) {
    this._settings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // topology - computed: false, optional: false, required: true
  private _topology = new DataTanzuMissionControlClusterSpecTkgAwsTopologyOutputReference(this, "topology");
  public get topology() {
    return this._topology;
  }
  public putTopology(value: DataTanzuMissionControlClusterSpecTkgAwsTopology) {
    this._topology.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyInput() {
    return this._topology.internalValue;
  }
}
export interface DataTanzuMissionControlClusterSpecTkgServiceVsphereDistribution {
  /**
  * Arch of the OS used for the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#os_arch DataTanzuMissionControlCluster#os_arch}
  */
  readonly osArch?: string;
  /**
  * Name of the OS used for the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#os_name DataTanzuMissionControlCluster#os_name}
  */
  readonly osName?: string;
  /**
  * Version of the OS used for the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#os_version DataTanzuMissionControlCluster#os_version}
  */
  readonly osVersion?: string;
  /**
  * Version of the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#version DataTanzuMissionControlCluster#version}
  */
  readonly version: string;
}

export function dataTanzuMissionControlClusterSpecTkgServiceVsphereDistributionToTerraform(struct?: DataTanzuMissionControlClusterSpecTkgServiceVsphereDistributionOutputReference | DataTanzuMissionControlClusterSpecTkgServiceVsphereDistribution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    os_arch: cdktf.stringToTerraform(struct!.osArch),
    os_name: cdktf.stringToTerraform(struct!.osName),
    os_version: cdktf.stringToTerraform(struct!.osVersion),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataTanzuMissionControlClusterSpecTkgServiceVsphereDistributionToHclTerraform(struct?: DataTanzuMissionControlClusterSpecTkgServiceVsphereDistributionOutputReference | DataTanzuMissionControlClusterSpecTkgServiceVsphereDistribution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    os_arch: {
      value: cdktf.stringToHclTerraform(struct!.osArch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    os_name: {
      value: cdktf.stringToHclTerraform(struct!.osName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    os_version: {
      value: cdktf.stringToHclTerraform(struct!.osVersion),
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

export class DataTanzuMissionControlClusterSpecTkgServiceVsphereDistributionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlClusterSpecTkgServiceVsphereDistribution | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._osArch !== undefined) {
      hasAnyValues = true;
      internalValueResult.osArch = this._osArch;
    }
    if (this._osName !== undefined) {
      hasAnyValues = true;
      internalValueResult.osName = this._osName;
    }
    if (this._osVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.osVersion = this._osVersion;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlClusterSpecTkgServiceVsphereDistribution | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._osArch = undefined;
      this._osName = undefined;
      this._osVersion = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._osArch = value.osArch;
      this._osName = value.osName;
      this._osVersion = value.osVersion;
      this._version = value.version;
    }
  }

  // os_arch - computed: true, optional: true, required: false
  private _osArch?: string; 
  public get osArch() {
    return this.getStringAttribute('os_arch');
  }
  public set osArch(value: string) {
    this._osArch = value;
  }
  public resetOsArch() {
    this._osArch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osArchInput() {
    return this._osArch;
  }

  // os_name - computed: true, optional: true, required: false
  private _osName?: string; 
  public get osName() {
    return this.getStringAttribute('os_name');
  }
  public set osName(value: string) {
    this._osName = value;
  }
  public resetOsName() {
    this._osName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osNameInput() {
    return this._osName;
  }

  // os_version - computed: true, optional: true, required: false
  private _osVersion?: string; 
  public get osVersion() {
    return this.getStringAttribute('os_version');
  }
  public set osVersion(value: string) {
    this._osVersion = value;
  }
  public resetOsVersion() {
    this._osVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osVersionInput() {
    return this._osVersion;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface DataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsNetworkPods {
  /**
  * CIDRBlocks specifies one or more ranges of IP addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#cidr_blocks DataTanzuMissionControlCluster#cidr_blocks}
  */
  readonly cidrBlocks: string[];
}

export function dataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsNetworkPodsToTerraform(struct?: DataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsNetworkPods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cidrBlocks),
  }
}


export function dataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsNetworkPodsToHclTerraform(struct?: DataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsNetworkPods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr_blocks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cidrBlocks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsNetworkPodsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsNetworkPods | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrBlocks = this._cidrBlocks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsNetworkPods | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidrBlocks = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidrBlocks = value.cidrBlocks;
    }
  }

  // cidr_blocks - computed: false, optional: false, required: true
  private _cidrBlocks?: string[]; 
  public get cidrBlocks() {
    return this.getListAttribute('cidr_blocks');
  }
  public set cidrBlocks(value: string[]) {
    this._cidrBlocks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlocksInput() {
    return this._cidrBlocks;
  }
}

export class DataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsNetworkPodsList extends cdktf.ComplexList {
  public internalValue? : DataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsNetworkPods[] | cdktf.IResolvable

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
  public get(index: number): DataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsNetworkPodsOutputReference {
    return new DataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsNetworkPodsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsNetworkServices {
  /**
  * CIDRBlocks specifies one or more ranges of IP addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#cidr_blocks DataTanzuMissionControlCluster#cidr_blocks}
  */
  readonly cidrBlocks: string[];
}

export function dataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsNetworkServicesToTerraform(struct?: DataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsNetworkServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cidrBlocks),
  }
}


export function dataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsNetworkServicesToHclTerraform(struct?: DataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsNetworkServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr_blocks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cidrBlocks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsNetworkServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsNetworkServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrBlocks = this._cidrBlocks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsNetworkServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidrBlocks = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidrBlocks = value.cidrBlocks;
    }
  }

  // cidr_blocks - computed: false, optional: false, required: true
  private _cidrBlocks?: string[]; 
  public get cidrBlocks() {
    return this.getListAttribute('cidr_blocks');
  }
  public set cidrBlocks(value: string[]) {
    this._cidrBlocks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlocksInput() {
    return this._cidrBlocks;
  }
}

export class DataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsNetworkServicesList extends cdktf.ComplexList {
  public internalValue? : DataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsNetworkServices[] | cdktf.IResolvable

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
  public get(index: number): DataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsNetworkServicesOutputReference {
    return new DataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsNetworkServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsNetwork {
  /**
  * pods block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#pods DataTanzuMissionControlCluster#pods}
  */
  readonly pods: DataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsNetworkPods[] | cdktf.IResolvable;
  /**
  * services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#services DataTanzuMissionControlCluster#services}
  */
  readonly services: DataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsNetworkServices[] | cdktf.IResolvable;
}

export function dataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsNetworkToTerraform(struct?: DataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsNetworkOutputReference | DataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pods: cdktf.listMapper(dataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsNetworkPodsToTerraform, true)(struct!.pods),
    services: cdktf.listMapper(dataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsNetworkServicesToTerraform, true)(struct!.services),
  }
}


export function dataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsNetworkToHclTerraform(struct?: DataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsNetworkOutputReference | DataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pods: {
      value: cdktf.listMapperHcl(dataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsNetworkPodsToHclTerraform, true)(struct!.pods),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsNetworkPodsList",
    },
    services: {
      value: cdktf.listMapperHcl(dataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsNetworkServicesToHclTerraform, true)(struct!.services),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsNetworkServicesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pods = this._pods?.internalValue;
    }
    if (this._services?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pods.internalValue = undefined;
      this._services.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pods.internalValue = value.pods;
      this._services.internalValue = value.services;
    }
  }

  // pods - computed: false, optional: false, required: true
  private _pods = new DataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsNetworkPodsList(this, "pods", false);
  public get pods() {
    return this._pods;
  }
  public putPods(value: DataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsNetworkPods[] | cdktf.IResolvable) {
    this._pods.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podsInput() {
    return this._pods.internalValue;
  }

  // services - computed: false, optional: false, required: true
  private _services = new DataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsNetworkServicesList(this, "services", false);
  public get services() {
    return this._services;
  }
  public putServices(value: DataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsNetworkServices[] | cdktf.IResolvable) {
    this._services.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services.internalValue;
  }
}
export interface DataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsStorage {
  /**
  * Classes is a list of storage classes from the supervisor namespace to expose within a cluster. If omitted, all storage classes from the supervisor namespace will be exposed within the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#classes DataTanzuMissionControlCluster#classes}
  */
  readonly classes?: string[];
  /**
  * DefaultClass is the valid storage class name which is treated as the default storage class within a cluster. If omitted, no default storage class is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#default_class DataTanzuMissionControlCluster#default_class}
  */
  readonly defaultClass?: string;
}

export function dataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsStorageToTerraform(struct?: DataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsStorageOutputReference | DataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    classes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.classes),
    default_class: cdktf.stringToTerraform(struct!.defaultClass),
  }
}


export function dataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsStorageToHclTerraform(struct?: DataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsStorageOutputReference | DataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    classes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.classes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    default_class: {
      value: cdktf.stringToHclTerraform(struct!.defaultClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classes !== undefined) {
      hasAnyValues = true;
      internalValueResult.classes = this._classes;
    }
    if (this._defaultClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultClass = this._defaultClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._classes = undefined;
      this._defaultClass = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._classes = value.classes;
      this._defaultClass = value.defaultClass;
    }
  }

  // classes - computed: false, optional: true, required: false
  private _classes?: string[]; 
  public get classes() {
    return this.getListAttribute('classes');
  }
  public set classes(value: string[]) {
    this._classes = value;
  }
  public resetClasses() {
    this._classes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classesInput() {
    return this._classes;
  }

  // default_class - computed: false, optional: true, required: false
  private _defaultClass?: string; 
  public get defaultClass() {
    return this.getStringAttribute('default_class');
  }
  public set defaultClass(value: string) {
    this._defaultClass = value;
  }
  public resetDefaultClass() {
    this._defaultClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultClassInput() {
    return this._defaultClass;
  }
}
export interface DataTanzuMissionControlClusterSpecTkgServiceVsphereSettings {
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#network DataTanzuMissionControlCluster#network}
  */
  readonly network: DataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsNetwork;
  /**
  * storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#storage DataTanzuMissionControlCluster#storage}
  */
  readonly storage?: DataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsStorage;
}

export function dataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsToTerraform(struct?: DataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsOutputReference | DataTanzuMissionControlClusterSpecTkgServiceVsphereSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network: dataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsNetworkToTerraform(struct!.network),
    storage: dataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsStorageToTerraform(struct!.storage),
  }
}


export function dataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsToHclTerraform(struct?: DataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsOutputReference | DataTanzuMissionControlClusterSpecTkgServiceVsphereSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network: {
      value: dataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsNetworkToHclTerraform(struct!.network),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsNetworkList",
    },
    storage: {
      value: dataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsStorageToHclTerraform(struct!.storage),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsStorageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlClusterSpecTkgServiceVsphereSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._network?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network?.internalValue;
    }
    if (this._storage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlClusterSpecTkgServiceVsphereSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._network.internalValue = undefined;
      this._storage.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._network.internalValue = value.network;
      this._storage.internalValue = value.storage;
    }
  }

  // network - computed: false, optional: false, required: true
  private _network = new DataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: DataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsNetwork) {
    this._network.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // storage - computed: false, optional: true, required: false
  private _storage = new DataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: DataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsStorage) {
    this._storage.internalValue = value;
  }
  public resetStorage() {
    this._storage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }
}
export interface DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyControlPlaneVolumes {
  /**
  * Volume capacity is in gib
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#capacity DataTanzuMissionControlCluster#capacity}
  */
  readonly capacity?: number;
  /**
  * It is the directory where the volume device is to be mounted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#mount_path DataTanzuMissionControlCluster#mount_path}
  */
  readonly mountPath?: string;
  /**
  * It is the volume name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#name DataTanzuMissionControlCluster#name}
  */
  readonly name?: string;
  /**
  * This is the storage class for PVC which in case omitted, default storage class will be used for the disks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#pvc_storage_class DataTanzuMissionControlCluster#pvc_storage_class}
  */
  readonly pvcStorageClass?: string;
}

export function dataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyControlPlaneVolumesToTerraform(struct?: DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyControlPlaneVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity: cdktf.numberToTerraform(struct!.capacity),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    name: cdktf.stringToTerraform(struct!.name),
    pvc_storage_class: cdktf.stringToTerraform(struct!.pvcStorageClass),
  }
}


export function dataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyControlPlaneVolumesToHclTerraform(struct?: DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyControlPlaneVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacity: {
      value: cdktf.numberToHclTerraform(struct!.capacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    pvc_storage_class: {
      value: cdktf.stringToHclTerraform(struct!.pvcStorageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyControlPlaneVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyControlPlaneVolumes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacity = this._capacity;
    }
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pvcStorageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.pvcStorageClass = this._pvcStorageClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyControlPlaneVolumes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacity = undefined;
      this._mountPath = undefined;
      this._name = undefined;
      this._pvcStorageClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacity = value.capacity;
      this._mountPath = value.mountPath;
      this._name = value.name;
      this._pvcStorageClass = value.pvcStorageClass;
    }
  }

  // capacity - computed: false, optional: true, required: false
  private _capacity?: number; 
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }
  public set capacity(value: number) {
    this._capacity = value;
  }
  public resetCapacity() {
    this._capacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
  }

  // mount_path - computed: false, optional: true, required: false
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  public resetMountPath() {
    this._mountPath = undefined;
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

  // pvc_storage_class - computed: false, optional: true, required: false
  private _pvcStorageClass?: string; 
  public get pvcStorageClass() {
    return this.getStringAttribute('pvc_storage_class');
  }
  public set pvcStorageClass(value: string) {
    this._pvcStorageClass = value;
  }
  public resetPvcStorageClass() {
    this._pvcStorageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvcStorageClassInput() {
    return this._pvcStorageClass;
  }
}

export class DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyControlPlaneVolumesList extends cdktf.ComplexList {
  public internalValue? : DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyControlPlaneVolumes[] | cdktf.IResolvable

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
  public get(index: number): DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyControlPlaneVolumesOutputReference {
    return new DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyControlPlaneVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyControlPlane {
  /**
  * Control plane instance type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#class DataTanzuMissionControlCluster#class}
  */
  readonly class: string;
  /**
  * High Availability or Non High Availability Cluster. HA cluster creates three controlplane machines, and non HA creates just one
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#high_availability DataTanzuMissionControlCluster#high_availability}
  */
  readonly highAvailability?: boolean | cdktf.IResolvable;
  /**
  * Storage Class to be used for storage of the disks which store the root filesystems of the nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#storage_class DataTanzuMissionControlCluster#storage_class}
  */
  readonly storageClass: string;
  /**
  * volumes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#volumes DataTanzuMissionControlCluster#volumes}
  */
  readonly volumes?: DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyControlPlaneVolumes[] | cdktf.IResolvable;
}

export function dataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyControlPlaneToTerraform(struct?: DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyControlPlaneOutputReference | DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyControlPlane): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class: cdktf.stringToTerraform(struct!.class),
    high_availability: cdktf.booleanToTerraform(struct!.highAvailability),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
    volumes: cdktf.listMapper(dataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyControlPlaneVolumesToTerraform, true)(struct!.volumes),
  }
}


export function dataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyControlPlaneToHclTerraform(struct?: DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyControlPlaneOutputReference | DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyControlPlane): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class: {
      value: cdktf.stringToHclTerraform(struct!.class),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    high_availability: {
      value: cdktf.booleanToHclTerraform(struct!.highAvailability),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    storage_class: {
      value: cdktf.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volumes: {
      value: cdktf.listMapperHcl(dataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyControlPlaneVolumesToHclTerraform, true)(struct!.volumes),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyControlPlaneVolumesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyControlPlaneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyControlPlane | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._class !== undefined) {
      hasAnyValues = true;
      internalValueResult.class = this._class;
    }
    if (this._highAvailability !== undefined) {
      hasAnyValues = true;
      internalValueResult.highAvailability = this._highAvailability;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    if (this._volumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyControlPlane | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._class = undefined;
      this._highAvailability = undefined;
      this._storageClass = undefined;
      this._volumes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._class = value.class;
      this._highAvailability = value.highAvailability;
      this._storageClass = value.storageClass;
      this._volumes.internalValue = value.volumes;
    }
  }

  // class - computed: false, optional: false, required: true
  private _class?: string; 
  public get class() {
    return this.getStringAttribute('class');
  }
  public set class(value: string) {
    this._class = value;
  }
  // Temporarily expose input value. Use with caution.
  public get classInput() {
    return this._class;
  }

  // high_availability - computed: false, optional: true, required: false
  private _highAvailability?: boolean | cdktf.IResolvable; 
  public get highAvailability() {
    return this.getBooleanAttribute('high_availability');
  }
  public set highAvailability(value: boolean | cdktf.IResolvable) {
    this._highAvailability = value;
  }
  public resetHighAvailability() {
    this._highAvailability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highAvailabilityInput() {
    return this._highAvailability;
  }

  // storage_class - computed: false, optional: false, required: true
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes = new DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyControlPlaneVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyControlPlaneVolumes[] | cdktf.IResolvable) {
    this._volumes.internalValue = value;
  }
  public resetVolumes() {
    this._volumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes.internalValue;
  }
}
export interface DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsInfo {
  /**
  * Description for the nodepool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#description DataTanzuMissionControlCluster#description}
  */
  readonly description?: string;
  /**
  * Name of the nodepool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#name DataTanzuMissionControlCluster#name}
  */
  readonly name?: string;
}

export function dataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsInfoToTerraform(struct?: DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsInfoOutputReference | DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsInfoToHclTerraform(struct?: DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsInfoOutputReference | DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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

export class DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._name = value.name;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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
export interface DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsSpecTkgServiceVsphereVolumes {
  /**
  * Volume capacity is in gib
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#capacity DataTanzuMissionControlCluster#capacity}
  */
  readonly capacity?: number;
  /**
  * It is the directory where the volume device is to be mounted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#mount_path DataTanzuMissionControlCluster#mount_path}
  */
  readonly mountPath?: string;
  /**
  * It is the volume name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#name DataTanzuMissionControlCluster#name}
  */
  readonly name?: string;
  /**
  * This is the storage class for PVC which in case omitted, default storage class will be used for the disks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#pvc_storage_class DataTanzuMissionControlCluster#pvc_storage_class}
  */
  readonly pvcStorageClass?: string;
}

export function dataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsSpecTkgServiceVsphereVolumesToTerraform(struct?: DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsSpecTkgServiceVsphereVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity: cdktf.numberToTerraform(struct!.capacity),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    name: cdktf.stringToTerraform(struct!.name),
    pvc_storage_class: cdktf.stringToTerraform(struct!.pvcStorageClass),
  }
}


export function dataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsSpecTkgServiceVsphereVolumesToHclTerraform(struct?: DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsSpecTkgServiceVsphereVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacity: {
      value: cdktf.numberToHclTerraform(struct!.capacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    pvc_storage_class: {
      value: cdktf.stringToHclTerraform(struct!.pvcStorageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsSpecTkgServiceVsphereVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsSpecTkgServiceVsphereVolumes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacity = this._capacity;
    }
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pvcStorageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.pvcStorageClass = this._pvcStorageClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsSpecTkgServiceVsphereVolumes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacity = undefined;
      this._mountPath = undefined;
      this._name = undefined;
      this._pvcStorageClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacity = value.capacity;
      this._mountPath = value.mountPath;
      this._name = value.name;
      this._pvcStorageClass = value.pvcStorageClass;
    }
  }

  // capacity - computed: false, optional: true, required: false
  private _capacity?: number; 
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }
  public set capacity(value: number) {
    this._capacity = value;
  }
  public resetCapacity() {
    this._capacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
  }

  // mount_path - computed: false, optional: true, required: false
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  public resetMountPath() {
    this._mountPath = undefined;
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

  // pvc_storage_class - computed: false, optional: true, required: false
  private _pvcStorageClass?: string; 
  public get pvcStorageClass() {
    return this.getStringAttribute('pvc_storage_class');
  }
  public set pvcStorageClass(value: string) {
    this._pvcStorageClass = value;
  }
  public resetPvcStorageClass() {
    this._pvcStorageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvcStorageClassInput() {
    return this._pvcStorageClass;
  }
}

export class DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsSpecTkgServiceVsphereVolumesList extends cdktf.ComplexList {
  public internalValue? : DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsSpecTkgServiceVsphereVolumes[] | cdktf.IResolvable

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
  public get(index: number): DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsSpecTkgServiceVsphereVolumesOutputReference {
    return new DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsSpecTkgServiceVsphereVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsSpecTkgServiceVsphere {
  /**
  * Control plane instance type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#class DataTanzuMissionControlCluster#class}
  */
  readonly class: string;
  /**
  * Configure the failure domain of node pool. The potential values could be found using cluster:options api.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#failure_domain DataTanzuMissionControlCluster#failure_domain}
  */
  readonly failureDomain?: string;
  /**
  * Storage Class to be used for storage of the disks which store the root filesystems of the nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#storage_class DataTanzuMissionControlCluster#storage_class}
  */
  readonly storageClass: string;
  /**
  * volumes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#volumes DataTanzuMissionControlCluster#volumes}
  */
  readonly volumes?: DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsSpecTkgServiceVsphereVolumes[] | cdktf.IResolvable;
}

export function dataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsSpecTkgServiceVsphereToTerraform(struct?: DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsSpecTkgServiceVsphereOutputReference | DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsSpecTkgServiceVsphere): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class: cdktf.stringToTerraform(struct!.class),
    failure_domain: cdktf.stringToTerraform(struct!.failureDomain),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
    volumes: cdktf.listMapper(dataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsSpecTkgServiceVsphereVolumesToTerraform, true)(struct!.volumes),
  }
}


export function dataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsSpecTkgServiceVsphereToHclTerraform(struct?: DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsSpecTkgServiceVsphereOutputReference | DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsSpecTkgServiceVsphere): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class: {
      value: cdktf.stringToHclTerraform(struct!.class),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    failure_domain: {
      value: cdktf.stringToHclTerraform(struct!.failureDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_class: {
      value: cdktf.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volumes: {
      value: cdktf.listMapperHcl(dataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsSpecTkgServiceVsphereVolumesToHclTerraform, true)(struct!.volumes),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsSpecTkgServiceVsphereVolumesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsSpecTkgServiceVsphereOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsSpecTkgServiceVsphere | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._class !== undefined) {
      hasAnyValues = true;
      internalValueResult.class = this._class;
    }
    if (this._failureDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureDomain = this._failureDomain;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    if (this._volumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsSpecTkgServiceVsphere | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._class = undefined;
      this._failureDomain = undefined;
      this._storageClass = undefined;
      this._volumes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._class = value.class;
      this._failureDomain = value.failureDomain;
      this._storageClass = value.storageClass;
      this._volumes.internalValue = value.volumes;
    }
  }

  // class - computed: false, optional: false, required: true
  private _class?: string; 
  public get class() {
    return this.getStringAttribute('class');
  }
  public set class(value: string) {
    this._class = value;
  }
  // Temporarily expose input value. Use with caution.
  public get classInput() {
    return this._class;
  }

  // failure_domain - computed: false, optional: true, required: false
  private _failureDomain?: string; 
  public get failureDomain() {
    return this.getStringAttribute('failure_domain');
  }
  public set failureDomain(value: string) {
    this._failureDomain = value;
  }
  public resetFailureDomain() {
    this._failureDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureDomainInput() {
    return this._failureDomain;
  }

  // storage_class - computed: false, optional: false, required: true
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes = new DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsSpecTkgServiceVsphereVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsSpecTkgServiceVsphereVolumes[] | cdktf.IResolvable) {
    this._volumes.internalValue = value;
  }
  public resetVolumes() {
    this._volumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes.internalValue;
  }
}
export interface DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsSpec {
  /**
  * Cloud labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#cloud_label DataTanzuMissionControlCluster#cloud_label}
  */
  readonly cloudLabel?: { [key: string]: string };
  /**
  * Node labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#node_label DataTanzuMissionControlCluster#node_label}
  */
  readonly nodeLabel?: { [key: string]: string };
  /**
  * Count is the number of nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#worker_node_count DataTanzuMissionControlCluster#worker_node_count}
  */
  readonly workerNodeCount?: string;
  /**
  * tkg_service_vsphere block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#tkg_service_vsphere DataTanzuMissionControlCluster#tkg_service_vsphere}
  */
  readonly tkgServiceVsphere?: DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsSpecTkgServiceVsphere;
}

export function dataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsSpecToTerraform(struct?: DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsSpecOutputReference | DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_label: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.cloudLabel),
    node_label: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeLabel),
    worker_node_count: cdktf.stringToTerraform(struct!.workerNodeCount),
    tkg_service_vsphere: dataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsSpecTkgServiceVsphereToTerraform(struct!.tkgServiceVsphere),
  }
}


export function dataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsSpecToHclTerraform(struct?: DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsSpecOutputReference | DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_label: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.cloudLabel),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    node_label: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeLabel),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    worker_node_count: {
      value: cdktf.stringToHclTerraform(struct!.workerNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tkg_service_vsphere: {
      value: dataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsSpecTkgServiceVsphereToHclTerraform(struct!.tkgServiceVsphere),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsSpecTkgServiceVsphereList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudLabel = this._cloudLabel;
    }
    if (this._nodeLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeLabel = this._nodeLabel;
    }
    if (this._workerNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerNodeCount = this._workerNodeCount;
    }
    if (this._tkgServiceVsphere?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tkgServiceVsphere = this._tkgServiceVsphere?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudLabel = undefined;
      this._nodeLabel = undefined;
      this._workerNodeCount = undefined;
      this._tkgServiceVsphere.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudLabel = value.cloudLabel;
      this._nodeLabel = value.nodeLabel;
      this._workerNodeCount = value.workerNodeCount;
      this._tkgServiceVsphere.internalValue = value.tkgServiceVsphere;
    }
  }

  // cloud_label - computed: false, optional: true, required: false
  private _cloudLabel?: { [key: string]: string }; 
  public get cloudLabel() {
    return this.getStringMapAttribute('cloud_label');
  }
  public set cloudLabel(value: { [key: string]: string }) {
    this._cloudLabel = value;
  }
  public resetCloudLabel() {
    this._cloudLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudLabelInput() {
    return this._cloudLabel;
  }

  // node_label - computed: false, optional: true, required: false
  private _nodeLabel?: { [key: string]: string }; 
  public get nodeLabel() {
    return this.getStringMapAttribute('node_label');
  }
  public set nodeLabel(value: { [key: string]: string }) {
    this._nodeLabel = value;
  }
  public resetNodeLabel() {
    this._nodeLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeLabelInput() {
    return this._nodeLabel;
  }

  // worker_node_count - computed: false, optional: true, required: false
  private _workerNodeCount?: string; 
  public get workerNodeCount() {
    return this.getStringAttribute('worker_node_count');
  }
  public set workerNodeCount(value: string) {
    this._workerNodeCount = value;
  }
  public resetWorkerNodeCount() {
    this._workerNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerNodeCountInput() {
    return this._workerNodeCount;
  }

  // tkg_service_vsphere - computed: false, optional: true, required: false
  private _tkgServiceVsphere = new DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsSpecTkgServiceVsphereOutputReference(this, "tkg_service_vsphere");
  public get tkgServiceVsphere() {
    return this._tkgServiceVsphere;
  }
  public putTkgServiceVsphere(value: DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsSpecTkgServiceVsphere) {
    this._tkgServiceVsphere.internalValue = value;
  }
  public resetTkgServiceVsphere() {
    this._tkgServiceVsphere.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tkgServiceVsphereInput() {
    return this._tkgServiceVsphere.internalValue;
  }
}
export interface DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePools {
  /**
  * info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#info DataTanzuMissionControlCluster#info}
  */
  readonly info: DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsInfo;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#spec DataTanzuMissionControlCluster#spec}
  */
  readonly spec?: DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsSpec;
}

export function dataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsToTerraform(struct?: DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    info: dataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsInfoToTerraform(struct!.info),
    spec: dataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsSpecToTerraform(struct!.spec),
  }
}


export function dataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsToHclTerraform(struct?: DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    info: {
      value: dataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsInfoToHclTerraform(struct!.info),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsInfoList",
    },
    spec: {
      value: dataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._info?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.info = this._info?.internalValue;
    }
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._info.internalValue = undefined;
      this._spec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._info.internalValue = value.info;
      this._spec.internalValue = value.spec;
    }
  }

  // info - computed: false, optional: false, required: true
  private _info = new DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsInfoOutputReference(this, "info");
  public get info() {
    return this._info;
  }
  public putInfo(value: DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsInfo) {
    this._info.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infoInput() {
    return this._info.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}

export class DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsList extends cdktf.ComplexList {
  public internalValue? : DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePools[] | cdktf.IResolvable

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
  public get(index: number): DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsOutputReference {
    return new DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTanzuMissionControlClusterSpecTkgServiceVsphereTopology {
  /**
  * control_plane block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#control_plane DataTanzuMissionControlCluster#control_plane}
  */
  readonly controlPlane: DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyControlPlane;
  /**
  * node_pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#node_pools DataTanzuMissionControlCluster#node_pools}
  */
  readonly nodePools?: DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePools[] | cdktf.IResolvable;
}

export function dataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyToTerraform(struct?: DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyOutputReference | DataTanzuMissionControlClusterSpecTkgServiceVsphereTopology): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    control_plane: dataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyControlPlaneToTerraform(struct!.controlPlane),
    node_pools: cdktf.listMapper(dataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsToTerraform, true)(struct!.nodePools),
  }
}


export function dataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyToHclTerraform(struct?: DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyOutputReference | DataTanzuMissionControlClusterSpecTkgServiceVsphereTopology): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    control_plane: {
      value: dataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyControlPlaneToHclTerraform(struct!.controlPlane),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyControlPlaneList",
    },
    node_pools: {
      value: cdktf.listMapperHcl(dataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsToHclTerraform, true)(struct!.nodePools),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlClusterSpecTkgServiceVsphereTopology | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controlPlane?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlane = this._controlPlane?.internalValue;
    }
    if (this._nodePools?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePools = this._nodePools?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlClusterSpecTkgServiceVsphereTopology | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._controlPlane.internalValue = undefined;
      this._nodePools.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._controlPlane.internalValue = value.controlPlane;
      this._nodePools.internalValue = value.nodePools;
    }
  }

  // control_plane - computed: false, optional: false, required: true
  private _controlPlane = new DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyControlPlaneOutputReference(this, "control_plane");
  public get controlPlane() {
    return this._controlPlane;
  }
  public putControlPlane(value: DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyControlPlane) {
    this._controlPlane.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneInput() {
    return this._controlPlane.internalValue;
  }

  // node_pools - computed: false, optional: true, required: false
  private _nodePools = new DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePoolsList(this, "node_pools", false);
  public get nodePools() {
    return this._nodePools;
  }
  public putNodePools(value: DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyNodePools[] | cdktf.IResolvable) {
    this._nodePools.internalValue = value;
  }
  public resetNodePools() {
    this._nodePools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolsInput() {
    return this._nodePools.internalValue;
  }
}
export interface DataTanzuMissionControlClusterSpecTkgServiceVsphere {
  /**
  * distribution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#distribution DataTanzuMissionControlCluster#distribution}
  */
  readonly distribution: DataTanzuMissionControlClusterSpecTkgServiceVsphereDistribution;
  /**
  * settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#settings DataTanzuMissionControlCluster#settings}
  */
  readonly settings: DataTanzuMissionControlClusterSpecTkgServiceVsphereSettings;
  /**
  * topology block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#topology DataTanzuMissionControlCluster#topology}
  */
  readonly topology: DataTanzuMissionControlClusterSpecTkgServiceVsphereTopology;
}

export function dataTanzuMissionControlClusterSpecTkgServiceVsphereToTerraform(struct?: DataTanzuMissionControlClusterSpecTkgServiceVsphereOutputReference | DataTanzuMissionControlClusterSpecTkgServiceVsphere): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distribution: dataTanzuMissionControlClusterSpecTkgServiceVsphereDistributionToTerraform(struct!.distribution),
    settings: dataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsToTerraform(struct!.settings),
    topology: dataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyToTerraform(struct!.topology),
  }
}


export function dataTanzuMissionControlClusterSpecTkgServiceVsphereToHclTerraform(struct?: DataTanzuMissionControlClusterSpecTkgServiceVsphereOutputReference | DataTanzuMissionControlClusterSpecTkgServiceVsphere): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    distribution: {
      value: dataTanzuMissionControlClusterSpecTkgServiceVsphereDistributionToHclTerraform(struct!.distribution),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlClusterSpecTkgServiceVsphereDistributionList",
    },
    settings: {
      value: dataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsList",
    },
    topology: {
      value: dataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyToHclTerraform(struct!.topology),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlClusterSpecTkgServiceVsphereOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlClusterSpecTkgServiceVsphere | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._distribution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.distribution = this._distribution?.internalValue;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    if (this._topology?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topology = this._topology?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlClusterSpecTkgServiceVsphere | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._distribution.internalValue = undefined;
      this._settings.internalValue = undefined;
      this._topology.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._distribution.internalValue = value.distribution;
      this._settings.internalValue = value.settings;
      this._topology.internalValue = value.topology;
    }
  }

  // distribution - computed: false, optional: false, required: true
  private _distribution = new DataTanzuMissionControlClusterSpecTkgServiceVsphereDistributionOutputReference(this, "distribution");
  public get distribution() {
    return this._distribution;
  }
  public putDistribution(value: DataTanzuMissionControlClusterSpecTkgServiceVsphereDistribution) {
    this._distribution.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionInput() {
    return this._distribution.internalValue;
  }

  // settings - computed: false, optional: false, required: true
  private _settings = new DataTanzuMissionControlClusterSpecTkgServiceVsphereSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: DataTanzuMissionControlClusterSpecTkgServiceVsphereSettings) {
    this._settings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // topology - computed: false, optional: false, required: true
  private _topology = new DataTanzuMissionControlClusterSpecTkgServiceVsphereTopologyOutputReference(this, "topology");
  public get topology() {
    return this._topology;
  }
  public putTopology(value: DataTanzuMissionControlClusterSpecTkgServiceVsphereTopology) {
    this._topology.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyInput() {
    return this._topology.internalValue;
  }
}
export interface DataTanzuMissionControlClusterSpecTkgVsphereAdvancedConfigs {
  /**
  * The key of the advanced configuration parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#key DataTanzuMissionControlCluster#key}
  */
  readonly key: string;
  /**
  * The value of the advanced configuration parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#value DataTanzuMissionControlCluster#value}
  */
  readonly value: string;
}

export function dataTanzuMissionControlClusterSpecTkgVsphereAdvancedConfigsToTerraform(struct?: DataTanzuMissionControlClusterSpecTkgVsphereAdvancedConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataTanzuMissionControlClusterSpecTkgVsphereAdvancedConfigsToHclTerraform(struct?: DataTanzuMissionControlClusterSpecTkgVsphereAdvancedConfigs | cdktf.IResolvable): any {
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

export class DataTanzuMissionControlClusterSpecTkgVsphereAdvancedConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTanzuMissionControlClusterSpecTkgVsphereAdvancedConfigs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataTanzuMissionControlClusterSpecTkgVsphereAdvancedConfigs | cdktf.IResolvable | undefined) {
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataTanzuMissionControlClusterSpecTkgVsphereAdvancedConfigsList extends cdktf.ComplexList {
  public internalValue? : DataTanzuMissionControlClusterSpecTkgVsphereAdvancedConfigs[] | cdktf.IResolvable

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
  public get(index: number): DataTanzuMissionControlClusterSpecTkgVsphereAdvancedConfigsOutputReference {
    return new DataTanzuMissionControlClusterSpecTkgVsphereAdvancedConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTanzuMissionControlClusterSpecTkgVsphereDistributionWorkspace {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#datacenter DataTanzuMissionControlCluster#datacenter}
  */
  readonly datacenter: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#datastore DataTanzuMissionControlCluster#datastore}
  */
  readonly datastore: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#folder DataTanzuMissionControlCluster#folder}
  */
  readonly folder: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#resource_pool DataTanzuMissionControlCluster#resource_pool}
  */
  readonly resourcePool: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#workspace_network DataTanzuMissionControlCluster#workspace_network}
  */
  readonly workspaceNetwork: string;
}

export function dataTanzuMissionControlClusterSpecTkgVsphereDistributionWorkspaceToTerraform(struct?: DataTanzuMissionControlClusterSpecTkgVsphereDistributionWorkspaceOutputReference | DataTanzuMissionControlClusterSpecTkgVsphereDistributionWorkspace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datacenter: cdktf.stringToTerraform(struct!.datacenter),
    datastore: cdktf.stringToTerraform(struct!.datastore),
    folder: cdktf.stringToTerraform(struct!.folder),
    resource_pool: cdktf.stringToTerraform(struct!.resourcePool),
    workspace_network: cdktf.stringToTerraform(struct!.workspaceNetwork),
  }
}


export function dataTanzuMissionControlClusterSpecTkgVsphereDistributionWorkspaceToHclTerraform(struct?: DataTanzuMissionControlClusterSpecTkgVsphereDistributionWorkspaceOutputReference | DataTanzuMissionControlClusterSpecTkgVsphereDistributionWorkspace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datacenter: {
      value: cdktf.stringToHclTerraform(struct!.datacenter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datastore: {
      value: cdktf.stringToHclTerraform(struct!.datastore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    folder: {
      value: cdktf.stringToHclTerraform(struct!.folder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_pool: {
      value: cdktf.stringToHclTerraform(struct!.resourcePool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workspace_network: {
      value: cdktf.stringToHclTerraform(struct!.workspaceNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlClusterSpecTkgVsphereDistributionWorkspaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlClusterSpecTkgVsphereDistributionWorkspace | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datacenter !== undefined) {
      hasAnyValues = true;
      internalValueResult.datacenter = this._datacenter;
    }
    if (this._datastore !== undefined) {
      hasAnyValues = true;
      internalValueResult.datastore = this._datastore;
    }
    if (this._folder !== undefined) {
      hasAnyValues = true;
      internalValueResult.folder = this._folder;
    }
    if (this._resourcePool !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcePool = this._resourcePool;
    }
    if (this._workspaceNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceNetwork = this._workspaceNetwork;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlClusterSpecTkgVsphereDistributionWorkspace | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datacenter = undefined;
      this._datastore = undefined;
      this._folder = undefined;
      this._resourcePool = undefined;
      this._workspaceNetwork = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datacenter = value.datacenter;
      this._datastore = value.datastore;
      this._folder = value.folder;
      this._resourcePool = value.resourcePool;
      this._workspaceNetwork = value.workspaceNetwork;
    }
  }

  // datacenter - computed: false, optional: false, required: true
  private _datacenter?: string; 
  public get datacenter() {
    return this.getStringAttribute('datacenter');
  }
  public set datacenter(value: string) {
    this._datacenter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterInput() {
    return this._datacenter;
  }

  // datastore - computed: false, optional: false, required: true
  private _datastore?: string; 
  public get datastore() {
    return this.getStringAttribute('datastore');
  }
  public set datastore(value: string) {
    this._datastore = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreInput() {
    return this._datastore;
  }

  // folder - computed: false, optional: false, required: true
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // resource_pool - computed: false, optional: false, required: true
  private _resourcePool?: string; 
  public get resourcePool() {
    return this.getStringAttribute('resource_pool');
  }
  public set resourcePool(value: string) {
    this._resourcePool = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePoolInput() {
    return this._resourcePool;
  }

  // workspace_network - computed: false, optional: false, required: true
  private _workspaceNetwork?: string; 
  public get workspaceNetwork() {
    return this.getStringAttribute('workspace_network');
  }
  public set workspaceNetwork(value: string) {
    this._workspaceNetwork = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceNetworkInput() {
    return this._workspaceNetwork;
  }
}
export interface DataTanzuMissionControlClusterSpecTkgVsphereDistribution {
  /**
  * Arch of the OS used for the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#os_arch DataTanzuMissionControlCluster#os_arch}
  */
  readonly osArch?: string;
  /**
  * Name of the OS used for the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#os_name DataTanzuMissionControlCluster#os_name}
  */
  readonly osName?: string;
  /**
  * Version of the OS used for the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#os_version DataTanzuMissionControlCluster#os_version}
  */
  readonly osVersion?: string;
  /**
  * Version specifies the version of the Kubernetes cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#version DataTanzuMissionControlCluster#version}
  */
  readonly version: string;
  /**
  * workspace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#workspace DataTanzuMissionControlCluster#workspace}
  */
  readonly workspace: DataTanzuMissionControlClusterSpecTkgVsphereDistributionWorkspace;
}

export function dataTanzuMissionControlClusterSpecTkgVsphereDistributionToTerraform(struct?: DataTanzuMissionControlClusterSpecTkgVsphereDistributionOutputReference | DataTanzuMissionControlClusterSpecTkgVsphereDistribution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    os_arch: cdktf.stringToTerraform(struct!.osArch),
    os_name: cdktf.stringToTerraform(struct!.osName),
    os_version: cdktf.stringToTerraform(struct!.osVersion),
    version: cdktf.stringToTerraform(struct!.version),
    workspace: dataTanzuMissionControlClusterSpecTkgVsphereDistributionWorkspaceToTerraform(struct!.workspace),
  }
}


export function dataTanzuMissionControlClusterSpecTkgVsphereDistributionToHclTerraform(struct?: DataTanzuMissionControlClusterSpecTkgVsphereDistributionOutputReference | DataTanzuMissionControlClusterSpecTkgVsphereDistribution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    os_arch: {
      value: cdktf.stringToHclTerraform(struct!.osArch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    os_name: {
      value: cdktf.stringToHclTerraform(struct!.osName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    os_version: {
      value: cdktf.stringToHclTerraform(struct!.osVersion),
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
    workspace: {
      value: dataTanzuMissionControlClusterSpecTkgVsphereDistributionWorkspaceToHclTerraform(struct!.workspace),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlClusterSpecTkgVsphereDistributionWorkspaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlClusterSpecTkgVsphereDistributionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlClusterSpecTkgVsphereDistribution | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._osArch !== undefined) {
      hasAnyValues = true;
      internalValueResult.osArch = this._osArch;
    }
    if (this._osName !== undefined) {
      hasAnyValues = true;
      internalValueResult.osName = this._osName;
    }
    if (this._osVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.osVersion = this._osVersion;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._workspace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspace = this._workspace?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlClusterSpecTkgVsphereDistribution | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._osArch = undefined;
      this._osName = undefined;
      this._osVersion = undefined;
      this._version = undefined;
      this._workspace.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._osArch = value.osArch;
      this._osName = value.osName;
      this._osVersion = value.osVersion;
      this._version = value.version;
      this._workspace.internalValue = value.workspace;
    }
  }

  // os_arch - computed: true, optional: true, required: false
  private _osArch?: string; 
  public get osArch() {
    return this.getStringAttribute('os_arch');
  }
  public set osArch(value: string) {
    this._osArch = value;
  }
  public resetOsArch() {
    this._osArch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osArchInput() {
    return this._osArch;
  }

  // os_name - computed: true, optional: true, required: false
  private _osName?: string; 
  public get osName() {
    return this.getStringAttribute('os_name');
  }
  public set osName(value: string) {
    this._osName = value;
  }
  public resetOsName() {
    this._osName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osNameInput() {
    return this._osName;
  }

  // os_version - computed: true, optional: true, required: false
  private _osVersion?: string; 
  public get osVersion() {
    return this.getStringAttribute('os_version');
  }
  public set osVersion(value: string) {
    this._osVersion = value;
  }
  public resetOsVersion() {
    this._osVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osVersionInput() {
    return this._osVersion;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // workspace - computed: false, optional: false, required: true
  private _workspace = new DataTanzuMissionControlClusterSpecTkgVsphereDistributionWorkspaceOutputReference(this, "workspace");
  public get workspace() {
    return this._workspace;
  }
  public putWorkspace(value: DataTanzuMissionControlClusterSpecTkgVsphereDistributionWorkspace) {
    this._workspace.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceInput() {
    return this._workspace.internalValue;
  }
}
export interface DataTanzuMissionControlClusterSpecTkgVsphereSettingsNetworkPods {
  /**
  * CIDRBlocks specifies one or more ranges of IP addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#cidr_blocks DataTanzuMissionControlCluster#cidr_blocks}
  */
  readonly cidrBlocks: string[];
}

export function dataTanzuMissionControlClusterSpecTkgVsphereSettingsNetworkPodsToTerraform(struct?: DataTanzuMissionControlClusterSpecTkgVsphereSettingsNetworkPods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cidrBlocks),
  }
}


export function dataTanzuMissionControlClusterSpecTkgVsphereSettingsNetworkPodsToHclTerraform(struct?: DataTanzuMissionControlClusterSpecTkgVsphereSettingsNetworkPods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr_blocks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cidrBlocks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlClusterSpecTkgVsphereSettingsNetworkPodsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTanzuMissionControlClusterSpecTkgVsphereSettingsNetworkPods | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrBlocks = this._cidrBlocks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlClusterSpecTkgVsphereSettingsNetworkPods | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidrBlocks = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidrBlocks = value.cidrBlocks;
    }
  }

  // cidr_blocks - computed: false, optional: false, required: true
  private _cidrBlocks?: string[]; 
  public get cidrBlocks() {
    return this.getListAttribute('cidr_blocks');
  }
  public set cidrBlocks(value: string[]) {
    this._cidrBlocks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlocksInput() {
    return this._cidrBlocks;
  }
}

export class DataTanzuMissionControlClusterSpecTkgVsphereSettingsNetworkPodsList extends cdktf.ComplexList {
  public internalValue? : DataTanzuMissionControlClusterSpecTkgVsphereSettingsNetworkPods[] | cdktf.IResolvable

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
  public get(index: number): DataTanzuMissionControlClusterSpecTkgVsphereSettingsNetworkPodsOutputReference {
    return new DataTanzuMissionControlClusterSpecTkgVsphereSettingsNetworkPodsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTanzuMissionControlClusterSpecTkgVsphereSettingsNetworkServices {
  /**
  * CIDRBlocks specifies one or more ranges of IP addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#cidr_blocks DataTanzuMissionControlCluster#cidr_blocks}
  */
  readonly cidrBlocks: string[];
}

export function dataTanzuMissionControlClusterSpecTkgVsphereSettingsNetworkServicesToTerraform(struct?: DataTanzuMissionControlClusterSpecTkgVsphereSettingsNetworkServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cidrBlocks),
  }
}


export function dataTanzuMissionControlClusterSpecTkgVsphereSettingsNetworkServicesToHclTerraform(struct?: DataTanzuMissionControlClusterSpecTkgVsphereSettingsNetworkServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr_blocks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cidrBlocks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlClusterSpecTkgVsphereSettingsNetworkServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTanzuMissionControlClusterSpecTkgVsphereSettingsNetworkServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrBlocks = this._cidrBlocks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlClusterSpecTkgVsphereSettingsNetworkServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidrBlocks = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidrBlocks = value.cidrBlocks;
    }
  }

  // cidr_blocks - computed: false, optional: false, required: true
  private _cidrBlocks?: string[]; 
  public get cidrBlocks() {
    return this.getListAttribute('cidr_blocks');
  }
  public set cidrBlocks(value: string[]) {
    this._cidrBlocks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlocksInput() {
    return this._cidrBlocks;
  }
}

export class DataTanzuMissionControlClusterSpecTkgVsphereSettingsNetworkServicesList extends cdktf.ComplexList {
  public internalValue? : DataTanzuMissionControlClusterSpecTkgVsphereSettingsNetworkServices[] | cdktf.IResolvable

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
  public get(index: number): DataTanzuMissionControlClusterSpecTkgVsphereSettingsNetworkServicesOutputReference {
    return new DataTanzuMissionControlClusterSpecTkgVsphereSettingsNetworkServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTanzuMissionControlClusterSpecTkgVsphereSettingsNetwork {
  /**
  * APIServerPort specifies the port address for the cluster that defaults to 6443.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#api_server_port DataTanzuMissionControlCluster#api_server_port}
  */
  readonly apiServerPort?: number;
  /**
  * ControlPlaneEndpoint specifies the control plane virtual IP address. The value should be unique for every create request, else cluster creation shall fail. This field is not needed when AVI enabled while creating a legacy cluster on TKGm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#control_plane_end_point DataTanzuMissionControlCluster#control_plane_end_point}
  */
  readonly controlPlaneEndPoint?: string;
  /**
  * pods block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#pods DataTanzuMissionControlCluster#pods}
  */
  readonly pods: DataTanzuMissionControlClusterSpecTkgVsphereSettingsNetworkPods[] | cdktf.IResolvable;
  /**
  * services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#services DataTanzuMissionControlCluster#services}
  */
  readonly services: DataTanzuMissionControlClusterSpecTkgVsphereSettingsNetworkServices[] | cdktf.IResolvable;
}

export function dataTanzuMissionControlClusterSpecTkgVsphereSettingsNetworkToTerraform(struct?: DataTanzuMissionControlClusterSpecTkgVsphereSettingsNetworkOutputReference | DataTanzuMissionControlClusterSpecTkgVsphereSettingsNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_server_port: cdktf.numberToTerraform(struct!.apiServerPort),
    control_plane_end_point: cdktf.stringToTerraform(struct!.controlPlaneEndPoint),
    pods: cdktf.listMapper(dataTanzuMissionControlClusterSpecTkgVsphereSettingsNetworkPodsToTerraform, true)(struct!.pods),
    services: cdktf.listMapper(dataTanzuMissionControlClusterSpecTkgVsphereSettingsNetworkServicesToTerraform, true)(struct!.services),
  }
}


export function dataTanzuMissionControlClusterSpecTkgVsphereSettingsNetworkToHclTerraform(struct?: DataTanzuMissionControlClusterSpecTkgVsphereSettingsNetworkOutputReference | DataTanzuMissionControlClusterSpecTkgVsphereSettingsNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_server_port: {
      value: cdktf.numberToHclTerraform(struct!.apiServerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    control_plane_end_point: {
      value: cdktf.stringToHclTerraform(struct!.controlPlaneEndPoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pods: {
      value: cdktf.listMapperHcl(dataTanzuMissionControlClusterSpecTkgVsphereSettingsNetworkPodsToHclTerraform, true)(struct!.pods),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlClusterSpecTkgVsphereSettingsNetworkPodsList",
    },
    services: {
      value: cdktf.listMapperHcl(dataTanzuMissionControlClusterSpecTkgVsphereSettingsNetworkServicesToHclTerraform, true)(struct!.services),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlClusterSpecTkgVsphereSettingsNetworkServicesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlClusterSpecTkgVsphereSettingsNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlClusterSpecTkgVsphereSettingsNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiServerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiServerPort = this._apiServerPort;
    }
    if (this._controlPlaneEndPoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlaneEndPoint = this._controlPlaneEndPoint;
    }
    if (this._pods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pods = this._pods?.internalValue;
    }
    if (this._services?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlClusterSpecTkgVsphereSettingsNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiServerPort = undefined;
      this._controlPlaneEndPoint = undefined;
      this._pods.internalValue = undefined;
      this._services.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiServerPort = value.apiServerPort;
      this._controlPlaneEndPoint = value.controlPlaneEndPoint;
      this._pods.internalValue = value.pods;
      this._services.internalValue = value.services;
    }
  }

  // api_server_port - computed: false, optional: true, required: false
  private _apiServerPort?: number; 
  public get apiServerPort() {
    return this.getNumberAttribute('api_server_port');
  }
  public set apiServerPort(value: number) {
    this._apiServerPort = value;
  }
  public resetApiServerPort() {
    this._apiServerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiServerPortInput() {
    return this._apiServerPort;
  }

  // control_plane_end_point - computed: false, optional: true, required: false
  private _controlPlaneEndPoint?: string; 
  public get controlPlaneEndPoint() {
    return this.getStringAttribute('control_plane_end_point');
  }
  public set controlPlaneEndPoint(value: string) {
    this._controlPlaneEndPoint = value;
  }
  public resetControlPlaneEndPoint() {
    this._controlPlaneEndPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneEndPointInput() {
    return this._controlPlaneEndPoint;
  }

  // pods - computed: false, optional: false, required: true
  private _pods = new DataTanzuMissionControlClusterSpecTkgVsphereSettingsNetworkPodsList(this, "pods", false);
  public get pods() {
    return this._pods;
  }
  public putPods(value: DataTanzuMissionControlClusterSpecTkgVsphereSettingsNetworkPods[] | cdktf.IResolvable) {
    this._pods.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podsInput() {
    return this._pods.internalValue;
  }

  // services - computed: false, optional: false, required: true
  private _services = new DataTanzuMissionControlClusterSpecTkgVsphereSettingsNetworkServicesList(this, "services", false);
  public get services() {
    return this._services;
  }
  public putServices(value: DataTanzuMissionControlClusterSpecTkgVsphereSettingsNetworkServices[] | cdktf.IResolvable) {
    this._services.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services.internalValue;
  }
}
export interface DataTanzuMissionControlClusterSpecTkgVsphereSettingsSecurity {
  /**
  * SSH key for provisioning and accessing the cluster VMs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#ssh_key DataTanzuMissionControlCluster#ssh_key}
  */
  readonly sshKey: string;
}

export function dataTanzuMissionControlClusterSpecTkgVsphereSettingsSecurityToTerraform(struct?: DataTanzuMissionControlClusterSpecTkgVsphereSettingsSecurityOutputReference | DataTanzuMissionControlClusterSpecTkgVsphereSettingsSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ssh_key: cdktf.stringToTerraform(struct!.sshKey),
  }
}


export function dataTanzuMissionControlClusterSpecTkgVsphereSettingsSecurityToHclTerraform(struct?: DataTanzuMissionControlClusterSpecTkgVsphereSettingsSecurityOutputReference | DataTanzuMissionControlClusterSpecTkgVsphereSettingsSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ssh_key: {
      value: cdktf.stringToHclTerraform(struct!.sshKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlClusterSpecTkgVsphereSettingsSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlClusterSpecTkgVsphereSettingsSecurity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sshKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKey = this._sshKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlClusterSpecTkgVsphereSettingsSecurity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sshKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sshKey = value.sshKey;
    }
  }

  // ssh_key - computed: false, optional: false, required: true
  private _sshKey?: string; 
  public get sshKey() {
    return this.getStringAttribute('ssh_key');
  }
  public set sshKey(value: string) {
    this._sshKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyInput() {
    return this._sshKey;
  }
}
export interface DataTanzuMissionControlClusterSpecTkgVsphereSettings {
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#network DataTanzuMissionControlCluster#network}
  */
  readonly network: DataTanzuMissionControlClusterSpecTkgVsphereSettingsNetwork;
  /**
  * security block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#security DataTanzuMissionControlCluster#security}
  */
  readonly security: DataTanzuMissionControlClusterSpecTkgVsphereSettingsSecurity;
}

export function dataTanzuMissionControlClusterSpecTkgVsphereSettingsToTerraform(struct?: DataTanzuMissionControlClusterSpecTkgVsphereSettingsOutputReference | DataTanzuMissionControlClusterSpecTkgVsphereSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network: dataTanzuMissionControlClusterSpecTkgVsphereSettingsNetworkToTerraform(struct!.network),
    security: dataTanzuMissionControlClusterSpecTkgVsphereSettingsSecurityToTerraform(struct!.security),
  }
}


export function dataTanzuMissionControlClusterSpecTkgVsphereSettingsToHclTerraform(struct?: DataTanzuMissionControlClusterSpecTkgVsphereSettingsOutputReference | DataTanzuMissionControlClusterSpecTkgVsphereSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network: {
      value: dataTanzuMissionControlClusterSpecTkgVsphereSettingsNetworkToHclTerraform(struct!.network),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlClusterSpecTkgVsphereSettingsNetworkList",
    },
    security: {
      value: dataTanzuMissionControlClusterSpecTkgVsphereSettingsSecurityToHclTerraform(struct!.security),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlClusterSpecTkgVsphereSettingsSecurityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlClusterSpecTkgVsphereSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlClusterSpecTkgVsphereSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._network?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network?.internalValue;
    }
    if (this._security?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.security = this._security?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlClusterSpecTkgVsphereSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._network.internalValue = undefined;
      this._security.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._network.internalValue = value.network;
      this._security.internalValue = value.security;
    }
  }

  // network - computed: false, optional: false, required: true
  private _network = new DataTanzuMissionControlClusterSpecTkgVsphereSettingsNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: DataTanzuMissionControlClusterSpecTkgVsphereSettingsNetwork) {
    this._network.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // security - computed: false, optional: false, required: true
  private _security = new DataTanzuMissionControlClusterSpecTkgVsphereSettingsSecurityOutputReference(this, "security");
  public get security() {
    return this._security;
  }
  public putSecurity(value: DataTanzuMissionControlClusterSpecTkgVsphereSettingsSecurity) {
    this._security.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security.internalValue;
  }
}
export interface DataTanzuMissionControlClusterSpecTkgVsphereTopologyControlPlaneVmConfig {
  /**
  * Number of CPUs per node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#cpu DataTanzuMissionControlCluster#cpu}
  */
  readonly cpu?: string;
  /**
  * Root disk size in gigabytes for the VM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#disk_size DataTanzuMissionControlCluster#disk_size}
  */
  readonly diskSize?: string;
  /**
  * Memory associated with the node in megabytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#memory DataTanzuMissionControlCluster#memory}
  */
  readonly memory?: string;
}

export function dataTanzuMissionControlClusterSpecTkgVsphereTopologyControlPlaneVmConfigToTerraform(struct?: DataTanzuMissionControlClusterSpecTkgVsphereTopologyControlPlaneVmConfigOutputReference | DataTanzuMissionControlClusterSpecTkgVsphereTopologyControlPlaneVmConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.stringToTerraform(struct!.cpu),
    disk_size: cdktf.stringToTerraform(struct!.diskSize),
    memory: cdktf.stringToTerraform(struct!.memory),
  }
}


export function dataTanzuMissionControlClusterSpecTkgVsphereTopologyControlPlaneVmConfigToHclTerraform(struct?: DataTanzuMissionControlClusterSpecTkgVsphereTopologyControlPlaneVmConfigOutputReference | DataTanzuMissionControlClusterSpecTkgVsphereTopologyControlPlaneVmConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.stringToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_size: {
      value: cdktf.stringToHclTerraform(struct!.diskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory: {
      value: cdktf.stringToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlClusterSpecTkgVsphereTopologyControlPlaneVmConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlClusterSpecTkgVsphereTopologyControlPlaneVmConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlClusterSpecTkgVsphereTopologyControlPlaneVmConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpu = undefined;
      this._diskSize = undefined;
      this._memory = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpu = value.cpu;
      this._diskSize = value.diskSize;
      this._memory = value.memory;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: string; 
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // disk_size - computed: false, optional: true, required: false
  private _diskSize?: string; 
  public get diskSize() {
    return this.getStringAttribute('disk_size');
  }
  public set diskSize(value: string) {
    this._diskSize = value;
  }
  public resetDiskSize() {
    this._diskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }
}
export interface DataTanzuMissionControlClusterSpecTkgVsphereTopologyControlPlane {
  /**
  * High Availability or Non High Availability Cluster. HA cluster creates three controlplane machines, and non HA creates just one
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#high_availability DataTanzuMissionControlCluster#high_availability}
  */
  readonly highAvailability?: boolean | cdktf.IResolvable;
  /**
  * vm_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#vm_config DataTanzuMissionControlCluster#vm_config}
  */
  readonly vmConfig: DataTanzuMissionControlClusterSpecTkgVsphereTopologyControlPlaneVmConfig;
}

export function dataTanzuMissionControlClusterSpecTkgVsphereTopologyControlPlaneToTerraform(struct?: DataTanzuMissionControlClusterSpecTkgVsphereTopologyControlPlaneOutputReference | DataTanzuMissionControlClusterSpecTkgVsphereTopologyControlPlane): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    high_availability: cdktf.booleanToTerraform(struct!.highAvailability),
    vm_config: dataTanzuMissionControlClusterSpecTkgVsphereTopologyControlPlaneVmConfigToTerraform(struct!.vmConfig),
  }
}


export function dataTanzuMissionControlClusterSpecTkgVsphereTopologyControlPlaneToHclTerraform(struct?: DataTanzuMissionControlClusterSpecTkgVsphereTopologyControlPlaneOutputReference | DataTanzuMissionControlClusterSpecTkgVsphereTopologyControlPlane): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    high_availability: {
      value: cdktf.booleanToHclTerraform(struct!.highAvailability),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vm_config: {
      value: dataTanzuMissionControlClusterSpecTkgVsphereTopologyControlPlaneVmConfigToHclTerraform(struct!.vmConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlClusterSpecTkgVsphereTopologyControlPlaneVmConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlClusterSpecTkgVsphereTopologyControlPlaneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlClusterSpecTkgVsphereTopologyControlPlane | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._highAvailability !== undefined) {
      hasAnyValues = true;
      internalValueResult.highAvailability = this._highAvailability;
    }
    if (this._vmConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmConfig = this._vmConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlClusterSpecTkgVsphereTopologyControlPlane | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._highAvailability = undefined;
      this._vmConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._highAvailability = value.highAvailability;
      this._vmConfig.internalValue = value.vmConfig;
    }
  }

  // high_availability - computed: false, optional: true, required: false
  private _highAvailability?: boolean | cdktf.IResolvable; 
  public get highAvailability() {
    return this.getBooleanAttribute('high_availability');
  }
  public set highAvailability(value: boolean | cdktf.IResolvable) {
    this._highAvailability = value;
  }
  public resetHighAvailability() {
    this._highAvailability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highAvailabilityInput() {
    return this._highAvailability;
  }

  // vm_config - computed: false, optional: false, required: true
  private _vmConfig = new DataTanzuMissionControlClusterSpecTkgVsphereTopologyControlPlaneVmConfigOutputReference(this, "vm_config");
  public get vmConfig() {
    return this._vmConfig;
  }
  public putVmConfig(value: DataTanzuMissionControlClusterSpecTkgVsphereTopologyControlPlaneVmConfig) {
    this._vmConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmConfigInput() {
    return this._vmConfig.internalValue;
  }
}
export interface DataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsInfo {
  /**
  * Description of the nodepool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#description DataTanzuMissionControlCluster#description}
  */
  readonly description?: string;
  /**
  * Name of the nodepool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#name DataTanzuMissionControlCluster#name}
  */
  readonly name: string;
}

export function dataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsInfoToTerraform(struct?: DataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsInfoOutputReference | DataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsInfoToHclTerraform(struct?: DataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsInfoOutputReference | DataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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

export class DataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._name = value.name;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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
export interface DataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsSpecTkgVsphereVmConfig {
  /**
  * Number of CPUs per node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#cpu DataTanzuMissionControlCluster#cpu}
  */
  readonly cpu?: string;
  /**
  * Root disk size in gigabytes for the VM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#disk_size DataTanzuMissionControlCluster#disk_size}
  */
  readonly diskSize?: string;
  /**
  * Memory associated with the node in megabytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#memory DataTanzuMissionControlCluster#memory}
  */
  readonly memory?: string;
}

export function dataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsSpecTkgVsphereVmConfigToTerraform(struct?: DataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsSpecTkgVsphereVmConfigOutputReference | DataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsSpecTkgVsphereVmConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.stringToTerraform(struct!.cpu),
    disk_size: cdktf.stringToTerraform(struct!.diskSize),
    memory: cdktf.stringToTerraform(struct!.memory),
  }
}


export function dataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsSpecTkgVsphereVmConfigToHclTerraform(struct?: DataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsSpecTkgVsphereVmConfigOutputReference | DataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsSpecTkgVsphereVmConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.stringToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_size: {
      value: cdktf.stringToHclTerraform(struct!.diskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory: {
      value: cdktf.stringToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsSpecTkgVsphereVmConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsSpecTkgVsphereVmConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsSpecTkgVsphereVmConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpu = undefined;
      this._diskSize = undefined;
      this._memory = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpu = value.cpu;
      this._diskSize = value.diskSize;
      this._memory = value.memory;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: string; 
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // disk_size - computed: false, optional: true, required: false
  private _diskSize?: string; 
  public get diskSize() {
    return this.getStringAttribute('disk_size');
  }
  public set diskSize(value: string) {
    this._diskSize = value;
  }
  public resetDiskSize() {
    this._diskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }
}
export interface DataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsSpecTkgVsphere {
  /**
  * vm_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#vm_config DataTanzuMissionControlCluster#vm_config}
  */
  readonly vmConfig: DataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsSpecTkgVsphereVmConfig;
}

export function dataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsSpecTkgVsphereToTerraform(struct?: DataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsSpecTkgVsphereOutputReference | DataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsSpecTkgVsphere): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vm_config: dataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsSpecTkgVsphereVmConfigToTerraform(struct!.vmConfig),
  }
}


export function dataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsSpecTkgVsphereToHclTerraform(struct?: DataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsSpecTkgVsphereOutputReference | DataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsSpecTkgVsphere): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vm_config: {
      value: dataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsSpecTkgVsphereVmConfigToHclTerraform(struct!.vmConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsSpecTkgVsphereVmConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsSpecTkgVsphereOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsSpecTkgVsphere | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vmConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmConfig = this._vmConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsSpecTkgVsphere | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._vmConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._vmConfig.internalValue = value.vmConfig;
    }
  }

  // vm_config - computed: false, optional: false, required: true
  private _vmConfig = new DataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsSpecTkgVsphereVmConfigOutputReference(this, "vm_config");
  public get vmConfig() {
    return this._vmConfig;
  }
  public putVmConfig(value: DataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsSpecTkgVsphereVmConfig) {
    this._vmConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmConfigInput() {
    return this._vmConfig.internalValue;
  }
}
export interface DataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsSpec {
  /**
  * Count is the number of nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#worker_node_count DataTanzuMissionControlCluster#worker_node_count}
  */
  readonly workerNodeCount?: string;
  /**
  * tkg_vsphere block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#tkg_vsphere DataTanzuMissionControlCluster#tkg_vsphere}
  */
  readonly tkgVsphere?: DataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsSpecTkgVsphere;
}

export function dataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsSpecToTerraform(struct?: DataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsSpecOutputReference | DataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    worker_node_count: cdktf.stringToTerraform(struct!.workerNodeCount),
    tkg_vsphere: dataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsSpecTkgVsphereToTerraform(struct!.tkgVsphere),
  }
}


export function dataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsSpecToHclTerraform(struct?: DataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsSpecOutputReference | DataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    worker_node_count: {
      value: cdktf.stringToHclTerraform(struct!.workerNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tkg_vsphere: {
      value: dataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsSpecTkgVsphereToHclTerraform(struct!.tkgVsphere),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsSpecTkgVsphereList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workerNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerNodeCount = this._workerNodeCount;
    }
    if (this._tkgVsphere?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tkgVsphere = this._tkgVsphere?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._workerNodeCount = undefined;
      this._tkgVsphere.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._workerNodeCount = value.workerNodeCount;
      this._tkgVsphere.internalValue = value.tkgVsphere;
    }
  }

  // worker_node_count - computed: false, optional: true, required: false
  private _workerNodeCount?: string; 
  public get workerNodeCount() {
    return this.getStringAttribute('worker_node_count');
  }
  public set workerNodeCount(value: string) {
    this._workerNodeCount = value;
  }
  public resetWorkerNodeCount() {
    this._workerNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerNodeCountInput() {
    return this._workerNodeCount;
  }

  // tkg_vsphere - computed: false, optional: true, required: false
  private _tkgVsphere = new DataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsSpecTkgVsphereOutputReference(this, "tkg_vsphere");
  public get tkgVsphere() {
    return this._tkgVsphere;
  }
  public putTkgVsphere(value: DataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsSpecTkgVsphere) {
    this._tkgVsphere.internalValue = value;
  }
  public resetTkgVsphere() {
    this._tkgVsphere.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tkgVsphereInput() {
    return this._tkgVsphere.internalValue;
  }
}
export interface DataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePools {
  /**
  * info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#info DataTanzuMissionControlCluster#info}
  */
  readonly info: DataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsInfo;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#spec DataTanzuMissionControlCluster#spec}
  */
  readonly spec?: DataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsSpec;
}

export function dataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsToTerraform(struct?: DataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    info: dataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsInfoToTerraform(struct!.info),
    spec: dataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsSpecToTerraform(struct!.spec),
  }
}


export function dataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsToHclTerraform(struct?: DataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    info: {
      value: dataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsInfoToHclTerraform(struct!.info),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsInfoList",
    },
    spec: {
      value: dataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._info?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.info = this._info?.internalValue;
    }
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._info.internalValue = undefined;
      this._spec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._info.internalValue = value.info;
      this._spec.internalValue = value.spec;
    }
  }

  // info - computed: false, optional: false, required: true
  private _info = new DataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsInfoOutputReference(this, "info");
  public get info() {
    return this._info;
  }
  public putInfo(value: DataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsInfo) {
    this._info.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infoInput() {
    return this._info.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}

export class DataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsList extends cdktf.ComplexList {
  public internalValue? : DataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePools[] | cdktf.IResolvable

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
  public get(index: number): DataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsOutputReference {
    return new DataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTanzuMissionControlClusterSpecTkgVsphereTopology {
  /**
  * control_plane block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#control_plane DataTanzuMissionControlCluster#control_plane}
  */
  readonly controlPlane: DataTanzuMissionControlClusterSpecTkgVsphereTopologyControlPlane;
  /**
  * node_pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#node_pools DataTanzuMissionControlCluster#node_pools}
  */
  readonly nodePools?: DataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePools[] | cdktf.IResolvable;
}

export function dataTanzuMissionControlClusterSpecTkgVsphereTopologyToTerraform(struct?: DataTanzuMissionControlClusterSpecTkgVsphereTopologyOutputReference | DataTanzuMissionControlClusterSpecTkgVsphereTopology): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    control_plane: dataTanzuMissionControlClusterSpecTkgVsphereTopologyControlPlaneToTerraform(struct!.controlPlane),
    node_pools: cdktf.listMapper(dataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsToTerraform, true)(struct!.nodePools),
  }
}


export function dataTanzuMissionControlClusterSpecTkgVsphereTopologyToHclTerraform(struct?: DataTanzuMissionControlClusterSpecTkgVsphereTopologyOutputReference | DataTanzuMissionControlClusterSpecTkgVsphereTopology): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    control_plane: {
      value: dataTanzuMissionControlClusterSpecTkgVsphereTopologyControlPlaneToHclTerraform(struct!.controlPlane),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlClusterSpecTkgVsphereTopologyControlPlaneList",
    },
    node_pools: {
      value: cdktf.listMapperHcl(dataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsToHclTerraform, true)(struct!.nodePools),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlClusterSpecTkgVsphereTopologyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlClusterSpecTkgVsphereTopology | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controlPlane?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlane = this._controlPlane?.internalValue;
    }
    if (this._nodePools?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePools = this._nodePools?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlClusterSpecTkgVsphereTopology | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._controlPlane.internalValue = undefined;
      this._nodePools.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._controlPlane.internalValue = value.controlPlane;
      this._nodePools.internalValue = value.nodePools;
    }
  }

  // control_plane - computed: false, optional: false, required: true
  private _controlPlane = new DataTanzuMissionControlClusterSpecTkgVsphereTopologyControlPlaneOutputReference(this, "control_plane");
  public get controlPlane() {
    return this._controlPlane;
  }
  public putControlPlane(value: DataTanzuMissionControlClusterSpecTkgVsphereTopologyControlPlane) {
    this._controlPlane.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneInput() {
    return this._controlPlane.internalValue;
  }

  // node_pools - computed: false, optional: true, required: false
  private _nodePools = new DataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePoolsList(this, "node_pools", false);
  public get nodePools() {
    return this._nodePools;
  }
  public putNodePools(value: DataTanzuMissionControlClusterSpecTkgVsphereTopologyNodePools[] | cdktf.IResolvable) {
    this._nodePools.internalValue = value;
  }
  public resetNodePools() {
    this._nodePools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolsInput() {
    return this._nodePools.internalValue;
  }
}
export interface DataTanzuMissionControlClusterSpecTkgVsphere {
  /**
  * advanced_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#advanced_configs DataTanzuMissionControlCluster#advanced_configs}
  */
  readonly advancedConfigs?: DataTanzuMissionControlClusterSpecTkgVsphereAdvancedConfigs[] | cdktf.IResolvable;
  /**
  * distribution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#distribution DataTanzuMissionControlCluster#distribution}
  */
  readonly distribution: DataTanzuMissionControlClusterSpecTkgVsphereDistribution;
  /**
  * settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#settings DataTanzuMissionControlCluster#settings}
  */
  readonly settings: DataTanzuMissionControlClusterSpecTkgVsphereSettings;
  /**
  * topology block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#topology DataTanzuMissionControlCluster#topology}
  */
  readonly topology: DataTanzuMissionControlClusterSpecTkgVsphereTopology;
}

export function dataTanzuMissionControlClusterSpecTkgVsphereToTerraform(struct?: DataTanzuMissionControlClusterSpecTkgVsphereOutputReference | DataTanzuMissionControlClusterSpecTkgVsphere): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advanced_configs: cdktf.listMapper(dataTanzuMissionControlClusterSpecTkgVsphereAdvancedConfigsToTerraform, true)(struct!.advancedConfigs),
    distribution: dataTanzuMissionControlClusterSpecTkgVsphereDistributionToTerraform(struct!.distribution),
    settings: dataTanzuMissionControlClusterSpecTkgVsphereSettingsToTerraform(struct!.settings),
    topology: dataTanzuMissionControlClusterSpecTkgVsphereTopologyToTerraform(struct!.topology),
  }
}


export function dataTanzuMissionControlClusterSpecTkgVsphereToHclTerraform(struct?: DataTanzuMissionControlClusterSpecTkgVsphereOutputReference | DataTanzuMissionControlClusterSpecTkgVsphere): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advanced_configs: {
      value: cdktf.listMapperHcl(dataTanzuMissionControlClusterSpecTkgVsphereAdvancedConfigsToHclTerraform, true)(struct!.advancedConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlClusterSpecTkgVsphereAdvancedConfigsList",
    },
    distribution: {
      value: dataTanzuMissionControlClusterSpecTkgVsphereDistributionToHclTerraform(struct!.distribution),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlClusterSpecTkgVsphereDistributionList",
    },
    settings: {
      value: dataTanzuMissionControlClusterSpecTkgVsphereSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlClusterSpecTkgVsphereSettingsList",
    },
    topology: {
      value: dataTanzuMissionControlClusterSpecTkgVsphereTopologyToHclTerraform(struct!.topology),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlClusterSpecTkgVsphereTopologyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlClusterSpecTkgVsphereOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlClusterSpecTkgVsphere | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advancedConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedConfigs = this._advancedConfigs?.internalValue;
    }
    if (this._distribution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.distribution = this._distribution?.internalValue;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    if (this._topology?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topology = this._topology?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlClusterSpecTkgVsphere | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._advancedConfigs.internalValue = undefined;
      this._distribution.internalValue = undefined;
      this._settings.internalValue = undefined;
      this._topology.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._advancedConfigs.internalValue = value.advancedConfigs;
      this._distribution.internalValue = value.distribution;
      this._settings.internalValue = value.settings;
      this._topology.internalValue = value.topology;
    }
  }

  // advanced_configs - computed: false, optional: true, required: false
  private _advancedConfigs = new DataTanzuMissionControlClusterSpecTkgVsphereAdvancedConfigsList(this, "advanced_configs", false);
  public get advancedConfigs() {
    return this._advancedConfigs;
  }
  public putAdvancedConfigs(value: DataTanzuMissionControlClusterSpecTkgVsphereAdvancedConfigs[] | cdktf.IResolvable) {
    this._advancedConfigs.internalValue = value;
  }
  public resetAdvancedConfigs() {
    this._advancedConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedConfigsInput() {
    return this._advancedConfigs.internalValue;
  }

  // distribution - computed: false, optional: false, required: true
  private _distribution = new DataTanzuMissionControlClusterSpecTkgVsphereDistributionOutputReference(this, "distribution");
  public get distribution() {
    return this._distribution;
  }
  public putDistribution(value: DataTanzuMissionControlClusterSpecTkgVsphereDistribution) {
    this._distribution.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionInput() {
    return this._distribution.internalValue;
  }

  // settings - computed: false, optional: false, required: true
  private _settings = new DataTanzuMissionControlClusterSpecTkgVsphereSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: DataTanzuMissionControlClusterSpecTkgVsphereSettings) {
    this._settings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // topology - computed: false, optional: false, required: true
  private _topology = new DataTanzuMissionControlClusterSpecTkgVsphereTopologyOutputReference(this, "topology");
  public get topology() {
    return this._topology;
  }
  public putTopology(value: DataTanzuMissionControlClusterSpecTkgVsphereTopology) {
    this._topology.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyInput() {
    return this._topology.internalValue;
  }
}
export interface DataTanzuMissionControlClusterSpec {
  /**
  * Name of the cluster group to which this cluster belongs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#cluster_group DataTanzuMissionControlCluster#cluster_group}
  */
  readonly clusterGroup?: string;
  /**
  * Optional image registry name is the name of the image registry to be used for the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#image_registry DataTanzuMissionControlCluster#image_registry}
  */
  readonly imageRegistry?: string;
  /**
  * Optional proxy name is the name of the Proxy Config to be used for the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#proxy DataTanzuMissionControlCluster#proxy}
  */
  readonly proxy?: string;
  /**
  * tkg_aws block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#tkg_aws DataTanzuMissionControlCluster#tkg_aws}
  */
  readonly tkgAws?: DataTanzuMissionControlClusterSpecTkgAws;
  /**
  * tkg_service_vsphere block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#tkg_service_vsphere DataTanzuMissionControlCluster#tkg_service_vsphere}
  */
  readonly tkgServiceVsphere?: DataTanzuMissionControlClusterSpecTkgServiceVsphere;
  /**
  * tkg_vsphere block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#tkg_vsphere DataTanzuMissionControlCluster#tkg_vsphere}
  */
  readonly tkgVsphere?: DataTanzuMissionControlClusterSpecTkgVsphere;
}

export function dataTanzuMissionControlClusterSpecToTerraform(struct?: DataTanzuMissionControlClusterSpecOutputReference | DataTanzuMissionControlClusterSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_group: cdktf.stringToTerraform(struct!.clusterGroup),
    image_registry: cdktf.stringToTerraform(struct!.imageRegistry),
    proxy: cdktf.stringToTerraform(struct!.proxy),
    tkg_aws: dataTanzuMissionControlClusterSpecTkgAwsToTerraform(struct!.tkgAws),
    tkg_service_vsphere: dataTanzuMissionControlClusterSpecTkgServiceVsphereToTerraform(struct!.tkgServiceVsphere),
    tkg_vsphere: dataTanzuMissionControlClusterSpecTkgVsphereToTerraform(struct!.tkgVsphere),
  }
}


export function dataTanzuMissionControlClusterSpecToHclTerraform(struct?: DataTanzuMissionControlClusterSpecOutputReference | DataTanzuMissionControlClusterSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_group: {
      value: cdktf.stringToHclTerraform(struct!.clusterGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_registry: {
      value: cdktf.stringToHclTerraform(struct!.imageRegistry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy: {
      value: cdktf.stringToHclTerraform(struct!.proxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tkg_aws: {
      value: dataTanzuMissionControlClusterSpecTkgAwsToHclTerraform(struct!.tkgAws),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlClusterSpecTkgAwsList",
    },
    tkg_service_vsphere: {
      value: dataTanzuMissionControlClusterSpecTkgServiceVsphereToHclTerraform(struct!.tkgServiceVsphere),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlClusterSpecTkgServiceVsphereList",
    },
    tkg_vsphere: {
      value: dataTanzuMissionControlClusterSpecTkgVsphereToHclTerraform(struct!.tkgVsphere),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlClusterSpecTkgVsphereList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlClusterSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlClusterSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterGroup = this._clusterGroup;
    }
    if (this._imageRegistry !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageRegistry = this._imageRegistry;
    }
    if (this._proxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxy = this._proxy;
    }
    if (this._tkgAws?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tkgAws = this._tkgAws?.internalValue;
    }
    if (this._tkgServiceVsphere?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tkgServiceVsphere = this._tkgServiceVsphere?.internalValue;
    }
    if (this._tkgVsphere?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tkgVsphere = this._tkgVsphere?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlClusterSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterGroup = undefined;
      this._imageRegistry = undefined;
      this._proxy = undefined;
      this._tkgAws.internalValue = undefined;
      this._tkgServiceVsphere.internalValue = undefined;
      this._tkgVsphere.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterGroup = value.clusterGroup;
      this._imageRegistry = value.imageRegistry;
      this._proxy = value.proxy;
      this._tkgAws.internalValue = value.tkgAws;
      this._tkgServiceVsphere.internalValue = value.tkgServiceVsphere;
      this._tkgVsphere.internalValue = value.tkgVsphere;
    }
  }

  // cluster_group - computed: false, optional: true, required: false
  private _clusterGroup?: string; 
  public get clusterGroup() {
    return this.getStringAttribute('cluster_group');
  }
  public set clusterGroup(value: string) {
    this._clusterGroup = value;
  }
  public resetClusterGroup() {
    this._clusterGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterGroupInput() {
    return this._clusterGroup;
  }

  // image_registry - computed: false, optional: true, required: false
  private _imageRegistry?: string; 
  public get imageRegistry() {
    return this.getStringAttribute('image_registry');
  }
  public set imageRegistry(value: string) {
    this._imageRegistry = value;
  }
  public resetImageRegistry() {
    this._imageRegistry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageRegistryInput() {
    return this._imageRegistry;
  }

  // proxy - computed: false, optional: true, required: false
  private _proxy?: string; 
  public get proxy() {
    return this.getStringAttribute('proxy');
  }
  public set proxy(value: string) {
    this._proxy = value;
  }
  public resetProxy() {
    this._proxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy;
  }

  // tkg_aws - computed: false, optional: true, required: false
  private _tkgAws = new DataTanzuMissionControlClusterSpecTkgAwsOutputReference(this, "tkg_aws");
  public get tkgAws() {
    return this._tkgAws;
  }
  public putTkgAws(value: DataTanzuMissionControlClusterSpecTkgAws) {
    this._tkgAws.internalValue = value;
  }
  public resetTkgAws() {
    this._tkgAws.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tkgAwsInput() {
    return this._tkgAws.internalValue;
  }

  // tkg_service_vsphere - computed: false, optional: true, required: false
  private _tkgServiceVsphere = new DataTanzuMissionControlClusterSpecTkgServiceVsphereOutputReference(this, "tkg_service_vsphere");
  public get tkgServiceVsphere() {
    return this._tkgServiceVsphere;
  }
  public putTkgServiceVsphere(value: DataTanzuMissionControlClusterSpecTkgServiceVsphere) {
    this._tkgServiceVsphere.internalValue = value;
  }
  public resetTkgServiceVsphere() {
    this._tkgServiceVsphere.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tkgServiceVsphereInput() {
    return this._tkgServiceVsphere.internalValue;
  }

  // tkg_vsphere - computed: false, optional: true, required: false
  private _tkgVsphere = new DataTanzuMissionControlClusterSpecTkgVsphereOutputReference(this, "tkg_vsphere");
  public get tkgVsphere() {
    return this._tkgVsphere;
  }
  public putTkgVsphere(value: DataTanzuMissionControlClusterSpecTkgVsphere) {
    this._tkgVsphere.internalValue = value;
  }
  public resetTkgVsphere() {
    this._tkgVsphere.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tkgVsphereInput() {
    return this._tkgVsphere.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster tanzu-mission-control_cluster}
*/
export class DataTanzuMissionControlCluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tanzu-mission-control_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTanzuMissionControlCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTanzuMissionControlCluster to import
  * @param importFromId The id of the existing DataTanzuMissionControlCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTanzuMissionControlCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tanzu-mission-control_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster tanzu-mission-control_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTanzuMissionControlClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DataTanzuMissionControlClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'tanzu-mission-control_cluster',
      terraformGeneratorMetadata: {
        providerName: 'tanzu-mission-control',
        providerVersion: '1.4.9',
        providerVersionConstraint: '1.4.9'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._managementClusterName = config.managementClusterName;
    this._name = config.name;
    this._provisionerName = config.provisionerName;
    this._readyWaitTimeout = config.readyWaitTimeout;
    this._attachK8SCluster.internalValue = config.attachK8SCluster;
    this._meta.internalValue = config.meta;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
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

  // management_cluster_name - computed: false, optional: true, required: false
  private _managementClusterName?: string; 
  public get managementClusterName() {
    return this.getStringAttribute('management_cluster_name');
  }
  public set managementClusterName(value: string) {
    this._managementClusterName = value;
  }
  public resetManagementClusterName() {
    this._managementClusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementClusterNameInput() {
    return this._managementClusterName;
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

  // provisioner_name - computed: false, optional: true, required: false
  private _provisionerName?: string; 
  public get provisionerName() {
    return this.getStringAttribute('provisioner_name');
  }
  public set provisionerName(value: string) {
    this._provisionerName = value;
  }
  public resetProvisionerName() {
    this._provisionerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionerNameInput() {
    return this._provisionerName;
  }

  // ready_wait_timeout - computed: false, optional: true, required: false
  private _readyWaitTimeout?: string; 
  public get readyWaitTimeout() {
    return this.getStringAttribute('ready_wait_timeout');
  }
  public set readyWaitTimeout(value: string) {
    this._readyWaitTimeout = value;
  }
  public resetReadyWaitTimeout() {
    this._readyWaitTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readyWaitTimeoutInput() {
    return this._readyWaitTimeout;
  }

  // status - computed: true, optional: false, required: false
  private _status = new cdktf.StringMap(this, "status");
  public get status() {
    return this._status;
  }

  // attach_k8s_cluster - computed: false, optional: true, required: false
  private _attachK8SCluster = new DataTanzuMissionControlClusterAttachK8SClusterOutputReference(this, "attach_k8s_cluster");
  public get attachK8SCluster() {
    return this._attachK8SCluster;
  }
  public putAttachK8SCluster(value: DataTanzuMissionControlClusterAttachK8SCluster) {
    this._attachK8SCluster.internalValue = value;
  }
  public resetAttachK8SCluster() {
    this._attachK8SCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachK8SClusterInput() {
    return this._attachK8SCluster.internalValue;
  }

  // meta - computed: false, optional: true, required: false
  private _meta = new DataTanzuMissionControlClusterMetaOutputReference(this, "meta");
  public get meta() {
    return this._meta;
  }
  public putMeta(value: DataTanzuMissionControlClusterMeta) {
    this._meta.internalValue = value;
  }
  public resetMeta() {
    this._meta.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaInput() {
    return this._meta.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataTanzuMissionControlClusterSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataTanzuMissionControlClusterSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      management_cluster_name: cdktf.stringToTerraform(this._managementClusterName),
      name: cdktf.stringToTerraform(this._name),
      provisioner_name: cdktf.stringToTerraform(this._provisionerName),
      ready_wait_timeout: cdktf.stringToTerraform(this._readyWaitTimeout),
      attach_k8s_cluster: dataTanzuMissionControlClusterAttachK8SClusterToTerraform(this._attachK8SCluster.internalValue),
      meta: dataTanzuMissionControlClusterMetaToTerraform(this._meta.internalValue),
      spec: dataTanzuMissionControlClusterSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      management_cluster_name: {
        value: cdktf.stringToHclTerraform(this._managementClusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provisioner_name: {
        value: cdktf.stringToHclTerraform(this._provisionerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ready_wait_timeout: {
        value: cdktf.stringToHclTerraform(this._readyWaitTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attach_k8s_cluster: {
        value: dataTanzuMissionControlClusterAttachK8SClusterToHclTerraform(this._attachK8SCluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTanzuMissionControlClusterAttachK8SClusterList",
      },
      meta: {
        value: dataTanzuMissionControlClusterMetaToHclTerraform(this._meta.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTanzuMissionControlClusterMetaList",
      },
      spec: {
        value: dataTanzuMissionControlClusterSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTanzuMissionControlClusterSpecList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
