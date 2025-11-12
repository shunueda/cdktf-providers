// https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#id Cluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the management cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#management_cluster_name Cluster#management_cluster_name}
  */
  readonly managementClusterName?: string;
  /**
  * Name of this cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#name Cluster#name}
  */
  readonly name: string;
  /**
  * Provisioner of the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#provisioner_name Cluster#provisioner_name}
  */
  readonly provisionerName?: string;
  /**
  * Wait timeout duration until cluster resource reaches READY state. Accepted timeout duration values like 5s, 45m, or 3h, higher than zero. Should be set to 0 in case of simple attach cluster where kubeconfig input is not provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#ready_wait_timeout Cluster#ready_wait_timeout}
  */
  readonly readyWaitTimeout?: string;
  /**
  * attach_k8s_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#attach_k8s_cluster Cluster#attach_k8s_cluster}
  */
  readonly attachK8SCluster?: ClusterAttachK8SCluster;
  /**
  * meta block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#meta Cluster#meta}
  */
  readonly meta?: ClusterMeta;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#spec Cluster#spec}
  */
  readonly spec?: ClusterSpec;
}
export interface ClusterAttachK8SCluster {
  /**
  * Attach cluster description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#description Cluster#description}
  */
  readonly description?: string;
  /**
  * Attach cluster KUBECONFIG path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#kubeconfig_file Cluster#kubeconfig_file}
  */
  readonly kubeconfigFile?: string;
  /**
  * Attach cluster KUBECONFIG
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#kubeconfig_raw Cluster#kubeconfig_raw}
  */
  readonly kubeconfigRaw?: string;
}

export function clusterAttachK8SClusterToTerraform(struct?: ClusterAttachK8SClusterOutputReference | ClusterAttachK8SCluster): any {
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


export function clusterAttachK8SClusterToHclTerraform(struct?: ClusterAttachK8SClusterOutputReference | ClusterAttachK8SCluster): any {
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

export class ClusterAttachK8SClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterAttachK8SCluster | undefined {
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

  public set internalValue(value: ClusterAttachK8SCluster | undefined) {
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
export interface ClusterMeta {
  /**
  * Annotations for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#annotations Cluster#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Description of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#description Cluster#description}
  */
  readonly description?: string;
  /**
  * Labels for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#labels Cluster#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function clusterMetaToTerraform(struct?: ClusterMetaOutputReference | ClusterMeta): any {
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


export function clusterMetaToHclTerraform(struct?: ClusterMetaOutputReference | ClusterMeta): any {
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

export class ClusterMetaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterMeta | undefined {
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

  public set internalValue(value: ClusterMeta | undefined) {
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
export interface ClusterSpecTkgAwsAdvancedConfigs {
  /**
  * The key of the advanced configuration parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#key Cluster#key}
  */
  readonly key: string;
  /**
  * The value of the advanced configuration parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#value Cluster#value}
  */
  readonly value: string;
}

export function clusterSpecTkgAwsAdvancedConfigsToTerraform(struct?: ClusterSpecTkgAwsAdvancedConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clusterSpecTkgAwsAdvancedConfigsToHclTerraform(struct?: ClusterSpecTkgAwsAdvancedConfigs | cdktf.IResolvable): any {
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

export class ClusterSpecTkgAwsAdvancedConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterSpecTkgAwsAdvancedConfigs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterSpecTkgAwsAdvancedConfigs | cdktf.IResolvable | undefined) {
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

export class ClusterSpecTkgAwsAdvancedConfigsList extends cdktf.ComplexList {
  public internalValue? : ClusterSpecTkgAwsAdvancedConfigs[] | cdktf.IResolvable

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
  public get(index: number): ClusterSpecTkgAwsAdvancedConfigsOutputReference {
    return new ClusterSpecTkgAwsAdvancedConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterSpecTkgAwsDistribution {
  /**
  * Arch of the OS used for the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#os_arch Cluster#os_arch}
  */
  readonly osArch?: string;
  /**
  * Name of the OS used for the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#os_name Cluster#os_name}
  */
  readonly osName?: string;
  /**
  * Version of the OS used for the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#os_version Cluster#os_version}
  */
  readonly osVersion?: string;
  /**
  * Specifies name of the account in which to create the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#provisioner_credential_name Cluster#provisioner_credential_name}
  */
  readonly provisionerCredentialName?: string;
  /**
  * Specifies region of the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#region Cluster#region}
  */
  readonly region: string;
  /**
  * Specifies version of the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#version Cluster#version}
  */
  readonly version: string;
}

export function clusterSpecTkgAwsDistributionToTerraform(struct?: ClusterSpecTkgAwsDistributionOutputReference | ClusterSpecTkgAwsDistribution): any {
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


export function clusterSpecTkgAwsDistributionToHclTerraform(struct?: ClusterSpecTkgAwsDistributionOutputReference | ClusterSpecTkgAwsDistribution): any {
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

export class ClusterSpecTkgAwsDistributionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterSpecTkgAwsDistribution | undefined {
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

  public set internalValue(value: ClusterSpecTkgAwsDistribution | undefined) {
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
export interface ClusterSpecTkgAwsSettingsNetworkClusterPods {
  /**
  * CIDRBlocks specifies one or more of IP address ranges
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#cidr_blocks Cluster#cidr_blocks}
  */
  readonly cidrBlocks: string;
}

export function clusterSpecTkgAwsSettingsNetworkClusterPodsToTerraform(struct?: ClusterSpecTkgAwsSettingsNetworkClusterPods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_blocks: cdktf.stringToTerraform(struct!.cidrBlocks),
  }
}


export function clusterSpecTkgAwsSettingsNetworkClusterPodsToHclTerraform(struct?: ClusterSpecTkgAwsSettingsNetworkClusterPods | cdktf.IResolvable): any {
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

export class ClusterSpecTkgAwsSettingsNetworkClusterPodsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterSpecTkgAwsSettingsNetworkClusterPods | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterSpecTkgAwsSettingsNetworkClusterPods | cdktf.IResolvable | undefined) {
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

export class ClusterSpecTkgAwsSettingsNetworkClusterPodsList extends cdktf.ComplexList {
  public internalValue? : ClusterSpecTkgAwsSettingsNetworkClusterPods[] | cdktf.IResolvable

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
  public get(index: number): ClusterSpecTkgAwsSettingsNetworkClusterPodsOutputReference {
    return new ClusterSpecTkgAwsSettingsNetworkClusterPodsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterSpecTkgAwsSettingsNetworkClusterServices {
  /**
  * CIDRBlocks specifies one or more of IP address ranges
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#cidr_blocks Cluster#cidr_blocks}
  */
  readonly cidrBlocks: string;
}

export function clusterSpecTkgAwsSettingsNetworkClusterServicesToTerraform(struct?: ClusterSpecTkgAwsSettingsNetworkClusterServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_blocks: cdktf.stringToTerraform(struct!.cidrBlocks),
  }
}


export function clusterSpecTkgAwsSettingsNetworkClusterServicesToHclTerraform(struct?: ClusterSpecTkgAwsSettingsNetworkClusterServices | cdktf.IResolvable): any {
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

export class ClusterSpecTkgAwsSettingsNetworkClusterServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterSpecTkgAwsSettingsNetworkClusterServices | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterSpecTkgAwsSettingsNetworkClusterServices | cdktf.IResolvable | undefined) {
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

export class ClusterSpecTkgAwsSettingsNetworkClusterServicesList extends cdktf.ComplexList {
  public internalValue? : ClusterSpecTkgAwsSettingsNetworkClusterServices[] | cdktf.IResolvable

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
  public get(index: number): ClusterSpecTkgAwsSettingsNetworkClusterServicesOutputReference {
    return new ClusterSpecTkgAwsSettingsNetworkClusterServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterSpecTkgAwsSettingsNetworkCluster {
  /**
  * APIServerPort specifies the port address for the cluster that defaults to 6443.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#api_server_port Cluster#api_server_port}
  */
  readonly apiServerPort?: number;
  /**
  * pods block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#pods Cluster#pods}
  */
  readonly pods: ClusterSpecTkgAwsSettingsNetworkClusterPods[] | cdktf.IResolvable;
  /**
  * services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#services Cluster#services}
  */
  readonly services: ClusterSpecTkgAwsSettingsNetworkClusterServices[] | cdktf.IResolvable;
}

export function clusterSpecTkgAwsSettingsNetworkClusterToTerraform(struct?: ClusterSpecTkgAwsSettingsNetworkClusterOutputReference | ClusterSpecTkgAwsSettingsNetworkCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_server_port: cdktf.numberToTerraform(struct!.apiServerPort),
    pods: cdktf.listMapper(clusterSpecTkgAwsSettingsNetworkClusterPodsToTerraform, true)(struct!.pods),
    services: cdktf.listMapper(clusterSpecTkgAwsSettingsNetworkClusterServicesToTerraform, true)(struct!.services),
  }
}


export function clusterSpecTkgAwsSettingsNetworkClusterToHclTerraform(struct?: ClusterSpecTkgAwsSettingsNetworkClusterOutputReference | ClusterSpecTkgAwsSettingsNetworkCluster): any {
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
      value: cdktf.listMapperHcl(clusterSpecTkgAwsSettingsNetworkClusterPodsToHclTerraform, true)(struct!.pods),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterSpecTkgAwsSettingsNetworkClusterPodsList",
    },
    services: {
      value: cdktf.listMapperHcl(clusterSpecTkgAwsSettingsNetworkClusterServicesToHclTerraform, true)(struct!.services),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterSpecTkgAwsSettingsNetworkClusterServicesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterSpecTkgAwsSettingsNetworkClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterSpecTkgAwsSettingsNetworkCluster | undefined {
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

  public set internalValue(value: ClusterSpecTkgAwsSettingsNetworkCluster | undefined) {
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
  private _pods = new ClusterSpecTkgAwsSettingsNetworkClusterPodsList(this, "pods", false);
  public get pods() {
    return this._pods;
  }
  public putPods(value: ClusterSpecTkgAwsSettingsNetworkClusterPods[] | cdktf.IResolvable) {
    this._pods.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podsInput() {
    return this._pods.internalValue;
  }

  // services - computed: false, optional: false, required: true
  private _services = new ClusterSpecTkgAwsSettingsNetworkClusterServicesList(this, "services", false);
  public get services() {
    return this._services;
  }
  public putServices(value: ClusterSpecTkgAwsSettingsNetworkClusterServices[] | cdktf.IResolvable) {
    this._services.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services.internalValue;
  }
}
export interface ClusterSpecTkgAwsSettingsNetworkProviderSubnets {
  /**
  * AWS availability zone e.g. us-west-2a
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#availability_zone Cluster#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * CIDR for AWS subnet which must be in the range of AWS VPC CIDR block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#cidr_block_subnet Cluster#cidr_block_subnet}
  */
  readonly cidrBlockSubnet?: string;
  /**
  * Describes if it is public subnet or private subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#is_public Cluster#is_public}
  */
  readonly isPublic?: boolean | cdktf.IResolvable;
  /**
  * This is the subnet ID of AWS. The rest of the fields are ignored if this field is specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#subnet_id Cluster#subnet_id}
  */
  readonly subnetId?: string;
}

export function clusterSpecTkgAwsSettingsNetworkProviderSubnetsToTerraform(struct?: ClusterSpecTkgAwsSettingsNetworkProviderSubnets | cdktf.IResolvable): any {
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


export function clusterSpecTkgAwsSettingsNetworkProviderSubnetsToHclTerraform(struct?: ClusterSpecTkgAwsSettingsNetworkProviderSubnets | cdktf.IResolvable): any {
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

export class ClusterSpecTkgAwsSettingsNetworkProviderSubnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterSpecTkgAwsSettingsNetworkProviderSubnets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterSpecTkgAwsSettingsNetworkProviderSubnets | cdktf.IResolvable | undefined) {
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

export class ClusterSpecTkgAwsSettingsNetworkProviderSubnetsList extends cdktf.ComplexList {
  public internalValue? : ClusterSpecTkgAwsSettingsNetworkProviderSubnets[] | cdktf.IResolvable

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
  public get(index: number): ClusterSpecTkgAwsSettingsNetworkProviderSubnetsOutputReference {
    return new ClusterSpecTkgAwsSettingsNetworkProviderSubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterSpecTkgAwsSettingsNetworkProviderVpc {
  /**
  * CIDR for AWS VPC. A valid example is 10.0.0.0/16
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#cidr_block_vpc Cluster#cidr_block_vpc}
  */
  readonly cidrBlockVpc?: string;
  /**
  * AWS VPC ID. The rest of the fields are ignored if this field is specified. Kindly add the VPC ID to the terraform script in case of existing VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#vpc_id Cluster#vpc_id}
  */
  readonly vpcId?: string;
}

export function clusterSpecTkgAwsSettingsNetworkProviderVpcToTerraform(struct?: ClusterSpecTkgAwsSettingsNetworkProviderVpcOutputReference | ClusterSpecTkgAwsSettingsNetworkProviderVpc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_block_vpc: cdktf.stringToTerraform(struct!.cidrBlockVpc),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function clusterSpecTkgAwsSettingsNetworkProviderVpcToHclTerraform(struct?: ClusterSpecTkgAwsSettingsNetworkProviderVpcOutputReference | ClusterSpecTkgAwsSettingsNetworkProviderVpc): any {
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

export class ClusterSpecTkgAwsSettingsNetworkProviderVpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterSpecTkgAwsSettingsNetworkProviderVpc | undefined {
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

  public set internalValue(value: ClusterSpecTkgAwsSettingsNetworkProviderVpc | undefined) {
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
export interface ClusterSpecTkgAwsSettingsNetworkProvider {
  /**
  * subnets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#subnets Cluster#subnets}
  */
  readonly subnets?: ClusterSpecTkgAwsSettingsNetworkProviderSubnets[] | cdktf.IResolvable;
  /**
  * vpc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#vpc Cluster#vpc}
  */
  readonly vpc: ClusterSpecTkgAwsSettingsNetworkProviderVpc;
}

export function clusterSpecTkgAwsSettingsNetworkProviderToTerraform(struct?: ClusterSpecTkgAwsSettingsNetworkProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnets: cdktf.listMapper(clusterSpecTkgAwsSettingsNetworkProviderSubnetsToTerraform, true)(struct!.subnets),
    vpc: clusterSpecTkgAwsSettingsNetworkProviderVpcToTerraform(struct!.vpc),
  }
}


export function clusterSpecTkgAwsSettingsNetworkProviderToHclTerraform(struct?: ClusterSpecTkgAwsSettingsNetworkProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subnets: {
      value: cdktf.listMapperHcl(clusterSpecTkgAwsSettingsNetworkProviderSubnetsToHclTerraform, true)(struct!.subnets),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterSpecTkgAwsSettingsNetworkProviderSubnetsList",
    },
    vpc: {
      value: clusterSpecTkgAwsSettingsNetworkProviderVpcToHclTerraform(struct!.vpc),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterSpecTkgAwsSettingsNetworkProviderVpcList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterSpecTkgAwsSettingsNetworkProviderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterSpecTkgAwsSettingsNetworkProvider | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterSpecTkgAwsSettingsNetworkProvider | cdktf.IResolvable | undefined) {
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
  private _subnets = new ClusterSpecTkgAwsSettingsNetworkProviderSubnetsList(this, "subnets", false);
  public get subnets() {
    return this._subnets;
  }
  public putSubnets(value: ClusterSpecTkgAwsSettingsNetworkProviderSubnets[] | cdktf.IResolvable) {
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
  private _vpc = new ClusterSpecTkgAwsSettingsNetworkProviderVpcOutputReference(this, "vpc");
  public get vpc() {
    return this._vpc;
  }
  public putVpc(value: ClusterSpecTkgAwsSettingsNetworkProviderVpc) {
    this._vpc.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcInput() {
    return this._vpc.internalValue;
  }
}

export class ClusterSpecTkgAwsSettingsNetworkProviderList extends cdktf.ComplexList {
  public internalValue? : ClusterSpecTkgAwsSettingsNetworkProvider[] | cdktf.IResolvable

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
  public get(index: number): ClusterSpecTkgAwsSettingsNetworkProviderOutputReference {
    return new ClusterSpecTkgAwsSettingsNetworkProviderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterSpecTkgAwsSettingsNetwork {
  /**
  * cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#cluster Cluster#cluster}
  */
  readonly cluster: ClusterSpecTkgAwsSettingsNetworkCluster;
  /**
  * provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#provider Cluster#provider}
  */
  readonly provider: ClusterSpecTkgAwsSettingsNetworkProvider[] | cdktf.IResolvable;
}

export function clusterSpecTkgAwsSettingsNetworkToTerraform(struct?: ClusterSpecTkgAwsSettingsNetworkOutputReference | ClusterSpecTkgAwsSettingsNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster: clusterSpecTkgAwsSettingsNetworkClusterToTerraform(struct!.cluster),
    provider: cdktf.listMapper(clusterSpecTkgAwsSettingsNetworkProviderToTerraform, true)(struct!.provider),
  }
}


export function clusterSpecTkgAwsSettingsNetworkToHclTerraform(struct?: ClusterSpecTkgAwsSettingsNetworkOutputReference | ClusterSpecTkgAwsSettingsNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster: {
      value: clusterSpecTkgAwsSettingsNetworkClusterToHclTerraform(struct!.cluster),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterSpecTkgAwsSettingsNetworkClusterList",
    },
    provider: {
      value: cdktf.listMapperHcl(clusterSpecTkgAwsSettingsNetworkProviderToHclTerraform, true)(struct!.provider),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterSpecTkgAwsSettingsNetworkProviderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterSpecTkgAwsSettingsNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterSpecTkgAwsSettingsNetwork | undefined {
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

  public set internalValue(value: ClusterSpecTkgAwsSettingsNetwork | undefined) {
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
  private _cluster = new ClusterSpecTkgAwsSettingsNetworkClusterOutputReference(this, "cluster");
  public get cluster() {
    return this._cluster;
  }
  public putCluster(value: ClusterSpecTkgAwsSettingsNetworkCluster) {
    this._cluster.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster.internalValue;
  }

  // provider - computed: false, optional: false, required: true
  private _provider = new ClusterSpecTkgAwsSettingsNetworkProviderList(this, "provider", false);
  public get provider() {
    return this._provider;
  }
  public putProvider(value: ClusterSpecTkgAwsSettingsNetworkProvider[] | cdktf.IResolvable) {
    this._provider.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider.internalValue;
  }
}
export interface ClusterSpecTkgAwsSettingsSecurity {
  /**
  * SSH key for provisioning and accessing the cluster VMs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#ssh_key Cluster#ssh_key}
  */
  readonly sshKey: string;
}

export function clusterSpecTkgAwsSettingsSecurityToTerraform(struct?: ClusterSpecTkgAwsSettingsSecurityOutputReference | ClusterSpecTkgAwsSettingsSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ssh_key: cdktf.stringToTerraform(struct!.sshKey),
  }
}


export function clusterSpecTkgAwsSettingsSecurityToHclTerraform(struct?: ClusterSpecTkgAwsSettingsSecurityOutputReference | ClusterSpecTkgAwsSettingsSecurity): any {
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

export class ClusterSpecTkgAwsSettingsSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterSpecTkgAwsSettingsSecurity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sshKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKey = this._sshKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterSpecTkgAwsSettingsSecurity | undefined) {
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
export interface ClusterSpecTkgAwsSettings {
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#network Cluster#network}
  */
  readonly network: ClusterSpecTkgAwsSettingsNetwork;
  /**
  * security block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#security Cluster#security}
  */
  readonly security: ClusterSpecTkgAwsSettingsSecurity;
}

export function clusterSpecTkgAwsSettingsToTerraform(struct?: ClusterSpecTkgAwsSettingsOutputReference | ClusterSpecTkgAwsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network: clusterSpecTkgAwsSettingsNetworkToTerraform(struct!.network),
    security: clusterSpecTkgAwsSettingsSecurityToTerraform(struct!.security),
  }
}


export function clusterSpecTkgAwsSettingsToHclTerraform(struct?: ClusterSpecTkgAwsSettingsOutputReference | ClusterSpecTkgAwsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network: {
      value: clusterSpecTkgAwsSettingsNetworkToHclTerraform(struct!.network),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterSpecTkgAwsSettingsNetworkList",
    },
    security: {
      value: clusterSpecTkgAwsSettingsSecurityToHclTerraform(struct!.security),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterSpecTkgAwsSettingsSecurityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterSpecTkgAwsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterSpecTkgAwsSettings | undefined {
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

  public set internalValue(value: ClusterSpecTkgAwsSettings | undefined) {
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
  private _network = new ClusterSpecTkgAwsSettingsNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: ClusterSpecTkgAwsSettingsNetwork) {
    this._network.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // security - computed: false, optional: false, required: true
  private _security = new ClusterSpecTkgAwsSettingsSecurityOutputReference(this, "security");
  public get security() {
    return this._security;
  }
  public putSecurity(value: ClusterSpecTkgAwsSettingsSecurity) {
    this._security.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security.internalValue;
  }
}
export interface ClusterSpecTkgAwsTopologyControlPlane {
  /**
  * List of availability zones for the control plane nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#availability_zones Cluster#availability_zones}
  */
  readonly availabilityZones: string[];
  /**
  * Flag which controls if the cluster needs to be highly available. HA cluster creates three controlplane machines, and non HA creates just one
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#high_availability Cluster#high_availability}
  */
  readonly highAvailability?: boolean | cdktf.IResolvable;
  /**
  * Control plane instance type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#instance_type Cluster#instance_type}
  */
  readonly instanceType: string;
}

export function clusterSpecTkgAwsTopologyControlPlaneToTerraform(struct?: ClusterSpecTkgAwsTopologyControlPlaneOutputReference | ClusterSpecTkgAwsTopologyControlPlane): any {
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


export function clusterSpecTkgAwsTopologyControlPlaneToHclTerraform(struct?: ClusterSpecTkgAwsTopologyControlPlaneOutputReference | ClusterSpecTkgAwsTopologyControlPlane): any {
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

export class ClusterSpecTkgAwsTopologyControlPlaneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterSpecTkgAwsTopologyControlPlane | undefined {
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

  public set internalValue(value: ClusterSpecTkgAwsTopologyControlPlane | undefined) {
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
export interface ClusterSpecTkgAwsTopologyNodePoolsInfo {
  /**
  * Description of the nodepool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#description Cluster#description}
  */
  readonly description?: string;
  /**
  * Name of the nodepool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#name Cluster#name}
  */
  readonly name: string;
}

export function clusterSpecTkgAwsTopologyNodePoolsInfoToTerraform(struct?: ClusterSpecTkgAwsTopologyNodePoolsInfoOutputReference | ClusterSpecTkgAwsTopologyNodePoolsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function clusterSpecTkgAwsTopologyNodePoolsInfoToHclTerraform(struct?: ClusterSpecTkgAwsTopologyNodePoolsInfoOutputReference | ClusterSpecTkgAwsTopologyNodePoolsInfo): any {
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

export class ClusterSpecTkgAwsTopologyNodePoolsInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterSpecTkgAwsTopologyNodePoolsInfo | undefined {
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

  public set internalValue(value: ClusterSpecTkgAwsTopologyNodePoolsInfo | undefined) {
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
export interface ClusterSpecTkgAwsTopologyNodePoolsSpecTkgAwsNodePlacement {
  /**
  * The Availability Zone where the AWS nodes are placed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#aws_availability_zone Cluster#aws_availability_zone}
  */
  readonly awsAvailabilityZone: string;
}

export function clusterSpecTkgAwsTopologyNodePoolsSpecTkgAwsNodePlacementToTerraform(struct?: ClusterSpecTkgAwsTopologyNodePoolsSpecTkgAwsNodePlacementOutputReference | ClusterSpecTkgAwsTopologyNodePoolsSpecTkgAwsNodePlacement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_availability_zone: cdktf.stringToTerraform(struct!.awsAvailabilityZone),
  }
}


export function clusterSpecTkgAwsTopologyNodePoolsSpecTkgAwsNodePlacementToHclTerraform(struct?: ClusterSpecTkgAwsTopologyNodePoolsSpecTkgAwsNodePlacementOutputReference | ClusterSpecTkgAwsTopologyNodePoolsSpecTkgAwsNodePlacement): any {
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

export class ClusterSpecTkgAwsTopologyNodePoolsSpecTkgAwsNodePlacementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterSpecTkgAwsTopologyNodePoolsSpecTkgAwsNodePlacement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsAvailabilityZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAvailabilityZone = this._awsAvailabilityZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterSpecTkgAwsTopologyNodePoolsSpecTkgAwsNodePlacement | undefined) {
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
export interface ClusterSpecTkgAwsTopologyNodePoolsSpecTkgAws {
  /**
  * Availability zone for the nodepool that is to be used when you are creating a nodepool for cluster in TMC hosted AWS solution
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#availability_zone Cluster#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Nodepool instance type whose potential values could be found using cluster:options api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#instance_type Cluster#instance_type}
  */
  readonly instanceType: string;
  /**
  * Kubernetes version of the node pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#version Cluster#version}
  */
  readonly version: string;
  /**
  * node_placement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#node_placement Cluster#node_placement}
  */
  readonly nodePlacement: ClusterSpecTkgAwsTopologyNodePoolsSpecTkgAwsNodePlacement;
}

export function clusterSpecTkgAwsTopologyNodePoolsSpecTkgAwsToTerraform(struct?: ClusterSpecTkgAwsTopologyNodePoolsSpecTkgAwsOutputReference | ClusterSpecTkgAwsTopologyNodePoolsSpecTkgAws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_zone: cdktf.stringToTerraform(struct!.availabilityZone),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    version: cdktf.stringToTerraform(struct!.version),
    node_placement: clusterSpecTkgAwsTopologyNodePoolsSpecTkgAwsNodePlacementToTerraform(struct!.nodePlacement),
  }
}


export function clusterSpecTkgAwsTopologyNodePoolsSpecTkgAwsToHclTerraform(struct?: ClusterSpecTkgAwsTopologyNodePoolsSpecTkgAwsOutputReference | ClusterSpecTkgAwsTopologyNodePoolsSpecTkgAws): any {
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
      value: clusterSpecTkgAwsTopologyNodePoolsSpecTkgAwsNodePlacementToHclTerraform(struct!.nodePlacement),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterSpecTkgAwsTopologyNodePoolsSpecTkgAwsNodePlacementList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterSpecTkgAwsTopologyNodePoolsSpecTkgAwsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterSpecTkgAwsTopologyNodePoolsSpecTkgAws | undefined {
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

  public set internalValue(value: ClusterSpecTkgAwsTopologyNodePoolsSpecTkgAws | undefined) {
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
  private _nodePlacement = new ClusterSpecTkgAwsTopologyNodePoolsSpecTkgAwsNodePlacementOutputReference(this, "node_placement");
  public get nodePlacement() {
    return this._nodePlacement;
  }
  public putNodePlacement(value: ClusterSpecTkgAwsTopologyNodePoolsSpecTkgAwsNodePlacement) {
    this._nodePlacement.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePlacementInput() {
    return this._nodePlacement.internalValue;
  }
}
export interface ClusterSpecTkgAwsTopologyNodePoolsSpec {
  /**
  * Count is the number of nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#worker_node_count Cluster#worker_node_count}
  */
  readonly workerNodeCount?: string;
  /**
  * tkg_aws block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#tkg_aws Cluster#tkg_aws}
  */
  readonly tkgAws?: ClusterSpecTkgAwsTopologyNodePoolsSpecTkgAws;
}

export function clusterSpecTkgAwsTopologyNodePoolsSpecToTerraform(struct?: ClusterSpecTkgAwsTopologyNodePoolsSpecOutputReference | ClusterSpecTkgAwsTopologyNodePoolsSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    worker_node_count: cdktf.stringToTerraform(struct!.workerNodeCount),
    tkg_aws: clusterSpecTkgAwsTopologyNodePoolsSpecTkgAwsToTerraform(struct!.tkgAws),
  }
}


export function clusterSpecTkgAwsTopologyNodePoolsSpecToHclTerraform(struct?: ClusterSpecTkgAwsTopologyNodePoolsSpecOutputReference | ClusterSpecTkgAwsTopologyNodePoolsSpec): any {
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
      value: clusterSpecTkgAwsTopologyNodePoolsSpecTkgAwsToHclTerraform(struct!.tkgAws),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterSpecTkgAwsTopologyNodePoolsSpecTkgAwsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterSpecTkgAwsTopologyNodePoolsSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterSpecTkgAwsTopologyNodePoolsSpec | undefined {
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

  public set internalValue(value: ClusterSpecTkgAwsTopologyNodePoolsSpec | undefined) {
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
  private _tkgAws = new ClusterSpecTkgAwsTopologyNodePoolsSpecTkgAwsOutputReference(this, "tkg_aws");
  public get tkgAws() {
    return this._tkgAws;
  }
  public putTkgAws(value: ClusterSpecTkgAwsTopologyNodePoolsSpecTkgAws) {
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
export interface ClusterSpecTkgAwsTopologyNodePools {
  /**
  * info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#info Cluster#info}
  */
  readonly info: ClusterSpecTkgAwsTopologyNodePoolsInfo;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#spec Cluster#spec}
  */
  readonly spec?: ClusterSpecTkgAwsTopologyNodePoolsSpec;
}

export function clusterSpecTkgAwsTopologyNodePoolsToTerraform(struct?: ClusterSpecTkgAwsTopologyNodePools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    info: clusterSpecTkgAwsTopologyNodePoolsInfoToTerraform(struct!.info),
    spec: clusterSpecTkgAwsTopologyNodePoolsSpecToTerraform(struct!.spec),
  }
}


export function clusterSpecTkgAwsTopologyNodePoolsToHclTerraform(struct?: ClusterSpecTkgAwsTopologyNodePools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    info: {
      value: clusterSpecTkgAwsTopologyNodePoolsInfoToHclTerraform(struct!.info),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterSpecTkgAwsTopologyNodePoolsInfoList",
    },
    spec: {
      value: clusterSpecTkgAwsTopologyNodePoolsSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterSpecTkgAwsTopologyNodePoolsSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterSpecTkgAwsTopologyNodePoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterSpecTkgAwsTopologyNodePools | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterSpecTkgAwsTopologyNodePools | cdktf.IResolvable | undefined) {
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
  private _info = new ClusterSpecTkgAwsTopologyNodePoolsInfoOutputReference(this, "info");
  public get info() {
    return this._info;
  }
  public putInfo(value: ClusterSpecTkgAwsTopologyNodePoolsInfo) {
    this._info.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infoInput() {
    return this._info.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new ClusterSpecTkgAwsTopologyNodePoolsSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: ClusterSpecTkgAwsTopologyNodePoolsSpec) {
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

export class ClusterSpecTkgAwsTopologyNodePoolsList extends cdktf.ComplexList {
  public internalValue? : ClusterSpecTkgAwsTopologyNodePools[] | cdktf.IResolvable

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
  public get(index: number): ClusterSpecTkgAwsTopologyNodePoolsOutputReference {
    return new ClusterSpecTkgAwsTopologyNodePoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterSpecTkgAwsTopology {
  /**
  * control_plane block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#control_plane Cluster#control_plane}
  */
  readonly controlPlane: ClusterSpecTkgAwsTopologyControlPlane;
  /**
  * node_pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#node_pools Cluster#node_pools}
  */
  readonly nodePools?: ClusterSpecTkgAwsTopologyNodePools[] | cdktf.IResolvable;
}

export function clusterSpecTkgAwsTopologyToTerraform(struct?: ClusterSpecTkgAwsTopologyOutputReference | ClusterSpecTkgAwsTopology): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    control_plane: clusterSpecTkgAwsTopologyControlPlaneToTerraform(struct!.controlPlane),
    node_pools: cdktf.listMapper(clusterSpecTkgAwsTopologyNodePoolsToTerraform, true)(struct!.nodePools),
  }
}


export function clusterSpecTkgAwsTopologyToHclTerraform(struct?: ClusterSpecTkgAwsTopologyOutputReference | ClusterSpecTkgAwsTopology): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    control_plane: {
      value: clusterSpecTkgAwsTopologyControlPlaneToHclTerraform(struct!.controlPlane),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterSpecTkgAwsTopologyControlPlaneList",
    },
    node_pools: {
      value: cdktf.listMapperHcl(clusterSpecTkgAwsTopologyNodePoolsToHclTerraform, true)(struct!.nodePools),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterSpecTkgAwsTopologyNodePoolsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterSpecTkgAwsTopologyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterSpecTkgAwsTopology | undefined {
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

  public set internalValue(value: ClusterSpecTkgAwsTopology | undefined) {
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
  private _controlPlane = new ClusterSpecTkgAwsTopologyControlPlaneOutputReference(this, "control_plane");
  public get controlPlane() {
    return this._controlPlane;
  }
  public putControlPlane(value: ClusterSpecTkgAwsTopologyControlPlane) {
    this._controlPlane.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneInput() {
    return this._controlPlane.internalValue;
  }

  // node_pools - computed: false, optional: true, required: false
  private _nodePools = new ClusterSpecTkgAwsTopologyNodePoolsList(this, "node_pools", false);
  public get nodePools() {
    return this._nodePools;
  }
  public putNodePools(value: ClusterSpecTkgAwsTopologyNodePools[] | cdktf.IResolvable) {
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
export interface ClusterSpecTkgAws {
  /**
  * advanced_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#advanced_configs Cluster#advanced_configs}
  */
  readonly advancedConfigs?: ClusterSpecTkgAwsAdvancedConfigs[] | cdktf.IResolvable;
  /**
  * distribution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#distribution Cluster#distribution}
  */
  readonly distribution: ClusterSpecTkgAwsDistribution;
  /**
  * settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#settings Cluster#settings}
  */
  readonly settings: ClusterSpecTkgAwsSettings;
  /**
  * topology block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#topology Cluster#topology}
  */
  readonly topology: ClusterSpecTkgAwsTopology;
}

export function clusterSpecTkgAwsToTerraform(struct?: ClusterSpecTkgAwsOutputReference | ClusterSpecTkgAws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advanced_configs: cdktf.listMapper(clusterSpecTkgAwsAdvancedConfigsToTerraform, true)(struct!.advancedConfigs),
    distribution: clusterSpecTkgAwsDistributionToTerraform(struct!.distribution),
    settings: clusterSpecTkgAwsSettingsToTerraform(struct!.settings),
    topology: clusterSpecTkgAwsTopologyToTerraform(struct!.topology),
  }
}


export function clusterSpecTkgAwsToHclTerraform(struct?: ClusterSpecTkgAwsOutputReference | ClusterSpecTkgAws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advanced_configs: {
      value: cdktf.listMapperHcl(clusterSpecTkgAwsAdvancedConfigsToHclTerraform, true)(struct!.advancedConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterSpecTkgAwsAdvancedConfigsList",
    },
    distribution: {
      value: clusterSpecTkgAwsDistributionToHclTerraform(struct!.distribution),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterSpecTkgAwsDistributionList",
    },
    settings: {
      value: clusterSpecTkgAwsSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterSpecTkgAwsSettingsList",
    },
    topology: {
      value: clusterSpecTkgAwsTopologyToHclTerraform(struct!.topology),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterSpecTkgAwsTopologyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterSpecTkgAwsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterSpecTkgAws | undefined {
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

  public set internalValue(value: ClusterSpecTkgAws | undefined) {
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
  private _advancedConfigs = new ClusterSpecTkgAwsAdvancedConfigsList(this, "advanced_configs", false);
  public get advancedConfigs() {
    return this._advancedConfigs;
  }
  public putAdvancedConfigs(value: ClusterSpecTkgAwsAdvancedConfigs[] | cdktf.IResolvable) {
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
  private _distribution = new ClusterSpecTkgAwsDistributionOutputReference(this, "distribution");
  public get distribution() {
    return this._distribution;
  }
  public putDistribution(value: ClusterSpecTkgAwsDistribution) {
    this._distribution.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionInput() {
    return this._distribution.internalValue;
  }

  // settings - computed: false, optional: false, required: true
  private _settings = new ClusterSpecTkgAwsSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: ClusterSpecTkgAwsSettings) {
    this._settings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // topology - computed: false, optional: false, required: true
  private _topology = new ClusterSpecTkgAwsTopologyOutputReference(this, "topology");
  public get topology() {
    return this._topology;
  }
  public putTopology(value: ClusterSpecTkgAwsTopology) {
    this._topology.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyInput() {
    return this._topology.internalValue;
  }
}
export interface ClusterSpecTkgServiceVsphereDistribution {
  /**
  * Arch of the OS used for the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#os_arch Cluster#os_arch}
  */
  readonly osArch?: string;
  /**
  * Name of the OS used for the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#os_name Cluster#os_name}
  */
  readonly osName?: string;
  /**
  * Version of the OS used for the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#os_version Cluster#os_version}
  */
  readonly osVersion?: string;
  /**
  * Version of the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#version Cluster#version}
  */
  readonly version: string;
}

export function clusterSpecTkgServiceVsphereDistributionToTerraform(struct?: ClusterSpecTkgServiceVsphereDistributionOutputReference | ClusterSpecTkgServiceVsphereDistribution): any {
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


export function clusterSpecTkgServiceVsphereDistributionToHclTerraform(struct?: ClusterSpecTkgServiceVsphereDistributionOutputReference | ClusterSpecTkgServiceVsphereDistribution): any {
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

export class ClusterSpecTkgServiceVsphereDistributionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterSpecTkgServiceVsphereDistribution | undefined {
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

  public set internalValue(value: ClusterSpecTkgServiceVsphereDistribution | undefined) {
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
export interface ClusterSpecTkgServiceVsphereSettingsNetworkPods {
  /**
  * CIDRBlocks specifies one or more ranges of IP addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#cidr_blocks Cluster#cidr_blocks}
  */
  readonly cidrBlocks: string[];
}

export function clusterSpecTkgServiceVsphereSettingsNetworkPodsToTerraform(struct?: ClusterSpecTkgServiceVsphereSettingsNetworkPods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cidrBlocks),
  }
}


export function clusterSpecTkgServiceVsphereSettingsNetworkPodsToHclTerraform(struct?: ClusterSpecTkgServiceVsphereSettingsNetworkPods | cdktf.IResolvable): any {
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

export class ClusterSpecTkgServiceVsphereSettingsNetworkPodsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterSpecTkgServiceVsphereSettingsNetworkPods | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterSpecTkgServiceVsphereSettingsNetworkPods | cdktf.IResolvable | undefined) {
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

export class ClusterSpecTkgServiceVsphereSettingsNetworkPodsList extends cdktf.ComplexList {
  public internalValue? : ClusterSpecTkgServiceVsphereSettingsNetworkPods[] | cdktf.IResolvable

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
  public get(index: number): ClusterSpecTkgServiceVsphereSettingsNetworkPodsOutputReference {
    return new ClusterSpecTkgServiceVsphereSettingsNetworkPodsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterSpecTkgServiceVsphereSettingsNetworkServices {
  /**
  * CIDRBlocks specifies one or more ranges of IP addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#cidr_blocks Cluster#cidr_blocks}
  */
  readonly cidrBlocks: string[];
}

export function clusterSpecTkgServiceVsphereSettingsNetworkServicesToTerraform(struct?: ClusterSpecTkgServiceVsphereSettingsNetworkServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cidrBlocks),
  }
}


export function clusterSpecTkgServiceVsphereSettingsNetworkServicesToHclTerraform(struct?: ClusterSpecTkgServiceVsphereSettingsNetworkServices | cdktf.IResolvable): any {
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

export class ClusterSpecTkgServiceVsphereSettingsNetworkServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterSpecTkgServiceVsphereSettingsNetworkServices | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterSpecTkgServiceVsphereSettingsNetworkServices | cdktf.IResolvable | undefined) {
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

export class ClusterSpecTkgServiceVsphereSettingsNetworkServicesList extends cdktf.ComplexList {
  public internalValue? : ClusterSpecTkgServiceVsphereSettingsNetworkServices[] | cdktf.IResolvable

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
  public get(index: number): ClusterSpecTkgServiceVsphereSettingsNetworkServicesOutputReference {
    return new ClusterSpecTkgServiceVsphereSettingsNetworkServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterSpecTkgServiceVsphereSettingsNetwork {
  /**
  * pods block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#pods Cluster#pods}
  */
  readonly pods: ClusterSpecTkgServiceVsphereSettingsNetworkPods[] | cdktf.IResolvable;
  /**
  * services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#services Cluster#services}
  */
  readonly services: ClusterSpecTkgServiceVsphereSettingsNetworkServices[] | cdktf.IResolvable;
}

export function clusterSpecTkgServiceVsphereSettingsNetworkToTerraform(struct?: ClusterSpecTkgServiceVsphereSettingsNetworkOutputReference | ClusterSpecTkgServiceVsphereSettingsNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pods: cdktf.listMapper(clusterSpecTkgServiceVsphereSettingsNetworkPodsToTerraform, true)(struct!.pods),
    services: cdktf.listMapper(clusterSpecTkgServiceVsphereSettingsNetworkServicesToTerraform, true)(struct!.services),
  }
}


export function clusterSpecTkgServiceVsphereSettingsNetworkToHclTerraform(struct?: ClusterSpecTkgServiceVsphereSettingsNetworkOutputReference | ClusterSpecTkgServiceVsphereSettingsNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pods: {
      value: cdktf.listMapperHcl(clusterSpecTkgServiceVsphereSettingsNetworkPodsToHclTerraform, true)(struct!.pods),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterSpecTkgServiceVsphereSettingsNetworkPodsList",
    },
    services: {
      value: cdktf.listMapperHcl(clusterSpecTkgServiceVsphereSettingsNetworkServicesToHclTerraform, true)(struct!.services),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterSpecTkgServiceVsphereSettingsNetworkServicesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterSpecTkgServiceVsphereSettingsNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterSpecTkgServiceVsphereSettingsNetwork | undefined {
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

  public set internalValue(value: ClusterSpecTkgServiceVsphereSettingsNetwork | undefined) {
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
  private _pods = new ClusterSpecTkgServiceVsphereSettingsNetworkPodsList(this, "pods", false);
  public get pods() {
    return this._pods;
  }
  public putPods(value: ClusterSpecTkgServiceVsphereSettingsNetworkPods[] | cdktf.IResolvable) {
    this._pods.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podsInput() {
    return this._pods.internalValue;
  }

  // services - computed: false, optional: false, required: true
  private _services = new ClusterSpecTkgServiceVsphereSettingsNetworkServicesList(this, "services", false);
  public get services() {
    return this._services;
  }
  public putServices(value: ClusterSpecTkgServiceVsphereSettingsNetworkServices[] | cdktf.IResolvable) {
    this._services.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services.internalValue;
  }
}
export interface ClusterSpecTkgServiceVsphereSettingsStorage {
  /**
  * Classes is a list of storage classes from the supervisor namespace to expose within a cluster. If omitted, all storage classes from the supervisor namespace will be exposed within the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#classes Cluster#classes}
  */
  readonly classes?: string[];
  /**
  * DefaultClass is the valid storage class name which is treated as the default storage class within a cluster. If omitted, no default storage class is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#default_class Cluster#default_class}
  */
  readonly defaultClass?: string;
}

export function clusterSpecTkgServiceVsphereSettingsStorageToTerraform(struct?: ClusterSpecTkgServiceVsphereSettingsStorageOutputReference | ClusterSpecTkgServiceVsphereSettingsStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    classes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.classes),
    default_class: cdktf.stringToTerraform(struct!.defaultClass),
  }
}


export function clusterSpecTkgServiceVsphereSettingsStorageToHclTerraform(struct?: ClusterSpecTkgServiceVsphereSettingsStorageOutputReference | ClusterSpecTkgServiceVsphereSettingsStorage): any {
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

export class ClusterSpecTkgServiceVsphereSettingsStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterSpecTkgServiceVsphereSettingsStorage | undefined {
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

  public set internalValue(value: ClusterSpecTkgServiceVsphereSettingsStorage | undefined) {
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
export interface ClusterSpecTkgServiceVsphereSettings {
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#network Cluster#network}
  */
  readonly network: ClusterSpecTkgServiceVsphereSettingsNetwork;
  /**
  * storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#storage Cluster#storage}
  */
  readonly storage?: ClusterSpecTkgServiceVsphereSettingsStorage;
}

export function clusterSpecTkgServiceVsphereSettingsToTerraform(struct?: ClusterSpecTkgServiceVsphereSettingsOutputReference | ClusterSpecTkgServiceVsphereSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network: clusterSpecTkgServiceVsphereSettingsNetworkToTerraform(struct!.network),
    storage: clusterSpecTkgServiceVsphereSettingsStorageToTerraform(struct!.storage),
  }
}


export function clusterSpecTkgServiceVsphereSettingsToHclTerraform(struct?: ClusterSpecTkgServiceVsphereSettingsOutputReference | ClusterSpecTkgServiceVsphereSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network: {
      value: clusterSpecTkgServiceVsphereSettingsNetworkToHclTerraform(struct!.network),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterSpecTkgServiceVsphereSettingsNetworkList",
    },
    storage: {
      value: clusterSpecTkgServiceVsphereSettingsStorageToHclTerraform(struct!.storage),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterSpecTkgServiceVsphereSettingsStorageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterSpecTkgServiceVsphereSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterSpecTkgServiceVsphereSettings | undefined {
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

  public set internalValue(value: ClusterSpecTkgServiceVsphereSettings | undefined) {
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
  private _network = new ClusterSpecTkgServiceVsphereSettingsNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: ClusterSpecTkgServiceVsphereSettingsNetwork) {
    this._network.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // storage - computed: false, optional: true, required: false
  private _storage = new ClusterSpecTkgServiceVsphereSettingsStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: ClusterSpecTkgServiceVsphereSettingsStorage) {
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
export interface ClusterSpecTkgServiceVsphereTopologyControlPlaneVolumes {
  /**
  * Volume capacity is in gib
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#capacity Cluster#capacity}
  */
  readonly capacity?: number;
  /**
  * It is the directory where the volume device is to be mounted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#mount_path Cluster#mount_path}
  */
  readonly mountPath?: string;
  /**
  * It is the volume name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#name Cluster#name}
  */
  readonly name?: string;
  /**
  * This is the storage class for PVC which in case omitted, default storage class will be used for the disks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#pvc_storage_class Cluster#pvc_storage_class}
  */
  readonly pvcStorageClass?: string;
}

export function clusterSpecTkgServiceVsphereTopologyControlPlaneVolumesToTerraform(struct?: ClusterSpecTkgServiceVsphereTopologyControlPlaneVolumes | cdktf.IResolvable): any {
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


export function clusterSpecTkgServiceVsphereTopologyControlPlaneVolumesToHclTerraform(struct?: ClusterSpecTkgServiceVsphereTopologyControlPlaneVolumes | cdktf.IResolvable): any {
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

export class ClusterSpecTkgServiceVsphereTopologyControlPlaneVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterSpecTkgServiceVsphereTopologyControlPlaneVolumes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterSpecTkgServiceVsphereTopologyControlPlaneVolumes | cdktf.IResolvable | undefined) {
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

export class ClusterSpecTkgServiceVsphereTopologyControlPlaneVolumesList extends cdktf.ComplexList {
  public internalValue? : ClusterSpecTkgServiceVsphereTopologyControlPlaneVolumes[] | cdktf.IResolvable

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
  public get(index: number): ClusterSpecTkgServiceVsphereTopologyControlPlaneVolumesOutputReference {
    return new ClusterSpecTkgServiceVsphereTopologyControlPlaneVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterSpecTkgServiceVsphereTopologyControlPlane {
  /**
  * Control plane instance type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#class Cluster#class}
  */
  readonly class: string;
  /**
  * High Availability or Non High Availability Cluster. HA cluster creates three controlplane machines, and non HA creates just one
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#high_availability Cluster#high_availability}
  */
  readonly highAvailability?: boolean | cdktf.IResolvable;
  /**
  * Storage Class to be used for storage of the disks which store the root filesystems of the nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#storage_class Cluster#storage_class}
  */
  readonly storageClass: string;
  /**
  * volumes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#volumes Cluster#volumes}
  */
  readonly volumes?: ClusterSpecTkgServiceVsphereTopologyControlPlaneVolumes[] | cdktf.IResolvable;
}

export function clusterSpecTkgServiceVsphereTopologyControlPlaneToTerraform(struct?: ClusterSpecTkgServiceVsphereTopologyControlPlaneOutputReference | ClusterSpecTkgServiceVsphereTopologyControlPlane): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class: cdktf.stringToTerraform(struct!.class),
    high_availability: cdktf.booleanToTerraform(struct!.highAvailability),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
    volumes: cdktf.listMapper(clusterSpecTkgServiceVsphereTopologyControlPlaneVolumesToTerraform, true)(struct!.volumes),
  }
}


export function clusterSpecTkgServiceVsphereTopologyControlPlaneToHclTerraform(struct?: ClusterSpecTkgServiceVsphereTopologyControlPlaneOutputReference | ClusterSpecTkgServiceVsphereTopologyControlPlane): any {
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
      value: cdktf.listMapperHcl(clusterSpecTkgServiceVsphereTopologyControlPlaneVolumesToHclTerraform, true)(struct!.volumes),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterSpecTkgServiceVsphereTopologyControlPlaneVolumesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterSpecTkgServiceVsphereTopologyControlPlaneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterSpecTkgServiceVsphereTopologyControlPlane | undefined {
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

  public set internalValue(value: ClusterSpecTkgServiceVsphereTopologyControlPlane | undefined) {
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
  private _volumes = new ClusterSpecTkgServiceVsphereTopologyControlPlaneVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: ClusterSpecTkgServiceVsphereTopologyControlPlaneVolumes[] | cdktf.IResolvable) {
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
export interface ClusterSpecTkgServiceVsphereTopologyNodePoolsInfo {
  /**
  * Description for the nodepool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#description Cluster#description}
  */
  readonly description?: string;
  /**
  * Name of the nodepool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#name Cluster#name}
  */
  readonly name?: string;
}

export function clusterSpecTkgServiceVsphereTopologyNodePoolsInfoToTerraform(struct?: ClusterSpecTkgServiceVsphereTopologyNodePoolsInfoOutputReference | ClusterSpecTkgServiceVsphereTopologyNodePoolsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function clusterSpecTkgServiceVsphereTopologyNodePoolsInfoToHclTerraform(struct?: ClusterSpecTkgServiceVsphereTopologyNodePoolsInfoOutputReference | ClusterSpecTkgServiceVsphereTopologyNodePoolsInfo): any {
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

export class ClusterSpecTkgServiceVsphereTopologyNodePoolsInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterSpecTkgServiceVsphereTopologyNodePoolsInfo | undefined {
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

  public set internalValue(value: ClusterSpecTkgServiceVsphereTopologyNodePoolsInfo | undefined) {
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
export interface ClusterSpecTkgServiceVsphereTopologyNodePoolsSpecTkgServiceVsphereVolumes {
  /**
  * Volume capacity is in gib
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#capacity Cluster#capacity}
  */
  readonly capacity?: number;
  /**
  * It is the directory where the volume device is to be mounted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#mount_path Cluster#mount_path}
  */
  readonly mountPath?: string;
  /**
  * It is the volume name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#name Cluster#name}
  */
  readonly name?: string;
  /**
  * This is the storage class for PVC which in case omitted, default storage class will be used for the disks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#pvc_storage_class Cluster#pvc_storage_class}
  */
  readonly pvcStorageClass?: string;
}

export function clusterSpecTkgServiceVsphereTopologyNodePoolsSpecTkgServiceVsphereVolumesToTerraform(struct?: ClusterSpecTkgServiceVsphereTopologyNodePoolsSpecTkgServiceVsphereVolumes | cdktf.IResolvable): any {
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


export function clusterSpecTkgServiceVsphereTopologyNodePoolsSpecTkgServiceVsphereVolumesToHclTerraform(struct?: ClusterSpecTkgServiceVsphereTopologyNodePoolsSpecTkgServiceVsphereVolumes | cdktf.IResolvable): any {
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

export class ClusterSpecTkgServiceVsphereTopologyNodePoolsSpecTkgServiceVsphereVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterSpecTkgServiceVsphereTopologyNodePoolsSpecTkgServiceVsphereVolumes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterSpecTkgServiceVsphereTopologyNodePoolsSpecTkgServiceVsphereVolumes | cdktf.IResolvable | undefined) {
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

export class ClusterSpecTkgServiceVsphereTopologyNodePoolsSpecTkgServiceVsphereVolumesList extends cdktf.ComplexList {
  public internalValue? : ClusterSpecTkgServiceVsphereTopologyNodePoolsSpecTkgServiceVsphereVolumes[] | cdktf.IResolvable

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
  public get(index: number): ClusterSpecTkgServiceVsphereTopologyNodePoolsSpecTkgServiceVsphereVolumesOutputReference {
    return new ClusterSpecTkgServiceVsphereTopologyNodePoolsSpecTkgServiceVsphereVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterSpecTkgServiceVsphereTopologyNodePoolsSpecTkgServiceVsphere {
  /**
  * Control plane instance type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#class Cluster#class}
  */
  readonly class: string;
  /**
  * Configure the failure domain of node pool. The potential values could be found using cluster:options api.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#failure_domain Cluster#failure_domain}
  */
  readonly failureDomain?: string;
  /**
  * Storage Class to be used for storage of the disks which store the root filesystems of the nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#storage_class Cluster#storage_class}
  */
  readonly storageClass: string;
  /**
  * volumes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#volumes Cluster#volumes}
  */
  readonly volumes?: ClusterSpecTkgServiceVsphereTopologyNodePoolsSpecTkgServiceVsphereVolumes[] | cdktf.IResolvable;
}

export function clusterSpecTkgServiceVsphereTopologyNodePoolsSpecTkgServiceVsphereToTerraform(struct?: ClusterSpecTkgServiceVsphereTopologyNodePoolsSpecTkgServiceVsphereOutputReference | ClusterSpecTkgServiceVsphereTopologyNodePoolsSpecTkgServiceVsphere): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class: cdktf.stringToTerraform(struct!.class),
    failure_domain: cdktf.stringToTerraform(struct!.failureDomain),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
    volumes: cdktf.listMapper(clusterSpecTkgServiceVsphereTopologyNodePoolsSpecTkgServiceVsphereVolumesToTerraform, true)(struct!.volumes),
  }
}


export function clusterSpecTkgServiceVsphereTopologyNodePoolsSpecTkgServiceVsphereToHclTerraform(struct?: ClusterSpecTkgServiceVsphereTopologyNodePoolsSpecTkgServiceVsphereOutputReference | ClusterSpecTkgServiceVsphereTopologyNodePoolsSpecTkgServiceVsphere): any {
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
      value: cdktf.listMapperHcl(clusterSpecTkgServiceVsphereTopologyNodePoolsSpecTkgServiceVsphereVolumesToHclTerraform, true)(struct!.volumes),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterSpecTkgServiceVsphereTopologyNodePoolsSpecTkgServiceVsphereVolumesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterSpecTkgServiceVsphereTopologyNodePoolsSpecTkgServiceVsphereOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterSpecTkgServiceVsphereTopologyNodePoolsSpecTkgServiceVsphere | undefined {
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

  public set internalValue(value: ClusterSpecTkgServiceVsphereTopologyNodePoolsSpecTkgServiceVsphere | undefined) {
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
  private _volumes = new ClusterSpecTkgServiceVsphereTopologyNodePoolsSpecTkgServiceVsphereVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: ClusterSpecTkgServiceVsphereTopologyNodePoolsSpecTkgServiceVsphereVolumes[] | cdktf.IResolvable) {
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
export interface ClusterSpecTkgServiceVsphereTopologyNodePoolsSpec {
  /**
  * Cloud labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#cloud_label Cluster#cloud_label}
  */
  readonly cloudLabel?: { [key: string]: string };
  /**
  * Node labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#node_label Cluster#node_label}
  */
  readonly nodeLabel?: { [key: string]: string };
  /**
  * Count is the number of nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#worker_node_count Cluster#worker_node_count}
  */
  readonly workerNodeCount?: string;
  /**
  * tkg_service_vsphere block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#tkg_service_vsphere Cluster#tkg_service_vsphere}
  */
  readonly tkgServiceVsphere?: ClusterSpecTkgServiceVsphereTopologyNodePoolsSpecTkgServiceVsphere;
}

export function clusterSpecTkgServiceVsphereTopologyNodePoolsSpecToTerraform(struct?: ClusterSpecTkgServiceVsphereTopologyNodePoolsSpecOutputReference | ClusterSpecTkgServiceVsphereTopologyNodePoolsSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_label: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.cloudLabel),
    node_label: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeLabel),
    worker_node_count: cdktf.stringToTerraform(struct!.workerNodeCount),
    tkg_service_vsphere: clusterSpecTkgServiceVsphereTopologyNodePoolsSpecTkgServiceVsphereToTerraform(struct!.tkgServiceVsphere),
  }
}


export function clusterSpecTkgServiceVsphereTopologyNodePoolsSpecToHclTerraform(struct?: ClusterSpecTkgServiceVsphereTopologyNodePoolsSpecOutputReference | ClusterSpecTkgServiceVsphereTopologyNodePoolsSpec): any {
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
      value: clusterSpecTkgServiceVsphereTopologyNodePoolsSpecTkgServiceVsphereToHclTerraform(struct!.tkgServiceVsphere),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterSpecTkgServiceVsphereTopologyNodePoolsSpecTkgServiceVsphereList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterSpecTkgServiceVsphereTopologyNodePoolsSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterSpecTkgServiceVsphereTopologyNodePoolsSpec | undefined {
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

  public set internalValue(value: ClusterSpecTkgServiceVsphereTopologyNodePoolsSpec | undefined) {
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
  private _tkgServiceVsphere = new ClusterSpecTkgServiceVsphereTopologyNodePoolsSpecTkgServiceVsphereOutputReference(this, "tkg_service_vsphere");
  public get tkgServiceVsphere() {
    return this._tkgServiceVsphere;
  }
  public putTkgServiceVsphere(value: ClusterSpecTkgServiceVsphereTopologyNodePoolsSpecTkgServiceVsphere) {
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
export interface ClusterSpecTkgServiceVsphereTopologyNodePools {
  /**
  * info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#info Cluster#info}
  */
  readonly info: ClusterSpecTkgServiceVsphereTopologyNodePoolsInfo;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#spec Cluster#spec}
  */
  readonly spec?: ClusterSpecTkgServiceVsphereTopologyNodePoolsSpec;
}

export function clusterSpecTkgServiceVsphereTopologyNodePoolsToTerraform(struct?: ClusterSpecTkgServiceVsphereTopologyNodePools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    info: clusterSpecTkgServiceVsphereTopologyNodePoolsInfoToTerraform(struct!.info),
    spec: clusterSpecTkgServiceVsphereTopologyNodePoolsSpecToTerraform(struct!.spec),
  }
}


export function clusterSpecTkgServiceVsphereTopologyNodePoolsToHclTerraform(struct?: ClusterSpecTkgServiceVsphereTopologyNodePools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    info: {
      value: clusterSpecTkgServiceVsphereTopologyNodePoolsInfoToHclTerraform(struct!.info),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterSpecTkgServiceVsphereTopologyNodePoolsInfoList",
    },
    spec: {
      value: clusterSpecTkgServiceVsphereTopologyNodePoolsSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterSpecTkgServiceVsphereTopologyNodePoolsSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterSpecTkgServiceVsphereTopologyNodePoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterSpecTkgServiceVsphereTopologyNodePools | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterSpecTkgServiceVsphereTopologyNodePools | cdktf.IResolvable | undefined) {
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
  private _info = new ClusterSpecTkgServiceVsphereTopologyNodePoolsInfoOutputReference(this, "info");
  public get info() {
    return this._info;
  }
  public putInfo(value: ClusterSpecTkgServiceVsphereTopologyNodePoolsInfo) {
    this._info.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infoInput() {
    return this._info.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new ClusterSpecTkgServiceVsphereTopologyNodePoolsSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: ClusterSpecTkgServiceVsphereTopologyNodePoolsSpec) {
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

export class ClusterSpecTkgServiceVsphereTopologyNodePoolsList extends cdktf.ComplexList {
  public internalValue? : ClusterSpecTkgServiceVsphereTopologyNodePools[] | cdktf.IResolvable

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
  public get(index: number): ClusterSpecTkgServiceVsphereTopologyNodePoolsOutputReference {
    return new ClusterSpecTkgServiceVsphereTopologyNodePoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterSpecTkgServiceVsphereTopology {
  /**
  * control_plane block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#control_plane Cluster#control_plane}
  */
  readonly controlPlane: ClusterSpecTkgServiceVsphereTopologyControlPlane;
  /**
  * node_pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#node_pools Cluster#node_pools}
  */
  readonly nodePools?: ClusterSpecTkgServiceVsphereTopologyNodePools[] | cdktf.IResolvable;
}

export function clusterSpecTkgServiceVsphereTopologyToTerraform(struct?: ClusterSpecTkgServiceVsphereTopologyOutputReference | ClusterSpecTkgServiceVsphereTopology): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    control_plane: clusterSpecTkgServiceVsphereTopologyControlPlaneToTerraform(struct!.controlPlane),
    node_pools: cdktf.listMapper(clusterSpecTkgServiceVsphereTopologyNodePoolsToTerraform, true)(struct!.nodePools),
  }
}


export function clusterSpecTkgServiceVsphereTopologyToHclTerraform(struct?: ClusterSpecTkgServiceVsphereTopologyOutputReference | ClusterSpecTkgServiceVsphereTopology): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    control_plane: {
      value: clusterSpecTkgServiceVsphereTopologyControlPlaneToHclTerraform(struct!.controlPlane),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterSpecTkgServiceVsphereTopologyControlPlaneList",
    },
    node_pools: {
      value: cdktf.listMapperHcl(clusterSpecTkgServiceVsphereTopologyNodePoolsToHclTerraform, true)(struct!.nodePools),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterSpecTkgServiceVsphereTopologyNodePoolsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterSpecTkgServiceVsphereTopologyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterSpecTkgServiceVsphereTopology | undefined {
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

  public set internalValue(value: ClusterSpecTkgServiceVsphereTopology | undefined) {
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
  private _controlPlane = new ClusterSpecTkgServiceVsphereTopologyControlPlaneOutputReference(this, "control_plane");
  public get controlPlane() {
    return this._controlPlane;
  }
  public putControlPlane(value: ClusterSpecTkgServiceVsphereTopologyControlPlane) {
    this._controlPlane.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneInput() {
    return this._controlPlane.internalValue;
  }

  // node_pools - computed: false, optional: true, required: false
  private _nodePools = new ClusterSpecTkgServiceVsphereTopologyNodePoolsList(this, "node_pools", false);
  public get nodePools() {
    return this._nodePools;
  }
  public putNodePools(value: ClusterSpecTkgServiceVsphereTopologyNodePools[] | cdktf.IResolvable) {
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
export interface ClusterSpecTkgServiceVsphere {
  /**
  * distribution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#distribution Cluster#distribution}
  */
  readonly distribution: ClusterSpecTkgServiceVsphereDistribution;
  /**
  * settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#settings Cluster#settings}
  */
  readonly settings: ClusterSpecTkgServiceVsphereSettings;
  /**
  * topology block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#topology Cluster#topology}
  */
  readonly topology: ClusterSpecTkgServiceVsphereTopology;
}

export function clusterSpecTkgServiceVsphereToTerraform(struct?: ClusterSpecTkgServiceVsphereOutputReference | ClusterSpecTkgServiceVsphere): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distribution: clusterSpecTkgServiceVsphereDistributionToTerraform(struct!.distribution),
    settings: clusterSpecTkgServiceVsphereSettingsToTerraform(struct!.settings),
    topology: clusterSpecTkgServiceVsphereTopologyToTerraform(struct!.topology),
  }
}


export function clusterSpecTkgServiceVsphereToHclTerraform(struct?: ClusterSpecTkgServiceVsphereOutputReference | ClusterSpecTkgServiceVsphere): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    distribution: {
      value: clusterSpecTkgServiceVsphereDistributionToHclTerraform(struct!.distribution),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterSpecTkgServiceVsphereDistributionList",
    },
    settings: {
      value: clusterSpecTkgServiceVsphereSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterSpecTkgServiceVsphereSettingsList",
    },
    topology: {
      value: clusterSpecTkgServiceVsphereTopologyToHclTerraform(struct!.topology),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterSpecTkgServiceVsphereTopologyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterSpecTkgServiceVsphereOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterSpecTkgServiceVsphere | undefined {
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

  public set internalValue(value: ClusterSpecTkgServiceVsphere | undefined) {
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
  private _distribution = new ClusterSpecTkgServiceVsphereDistributionOutputReference(this, "distribution");
  public get distribution() {
    return this._distribution;
  }
  public putDistribution(value: ClusterSpecTkgServiceVsphereDistribution) {
    this._distribution.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionInput() {
    return this._distribution.internalValue;
  }

  // settings - computed: false, optional: false, required: true
  private _settings = new ClusterSpecTkgServiceVsphereSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: ClusterSpecTkgServiceVsphereSettings) {
    this._settings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // topology - computed: false, optional: false, required: true
  private _topology = new ClusterSpecTkgServiceVsphereTopologyOutputReference(this, "topology");
  public get topology() {
    return this._topology;
  }
  public putTopology(value: ClusterSpecTkgServiceVsphereTopology) {
    this._topology.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyInput() {
    return this._topology.internalValue;
  }
}
export interface ClusterSpecTkgVsphereAdvancedConfigs {
  /**
  * The key of the advanced configuration parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#key Cluster#key}
  */
  readonly key: string;
  /**
  * The value of the advanced configuration parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#value Cluster#value}
  */
  readonly value: string;
}

export function clusterSpecTkgVsphereAdvancedConfigsToTerraform(struct?: ClusterSpecTkgVsphereAdvancedConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clusterSpecTkgVsphereAdvancedConfigsToHclTerraform(struct?: ClusterSpecTkgVsphereAdvancedConfigs | cdktf.IResolvable): any {
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

export class ClusterSpecTkgVsphereAdvancedConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterSpecTkgVsphereAdvancedConfigs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterSpecTkgVsphereAdvancedConfigs | cdktf.IResolvable | undefined) {
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

export class ClusterSpecTkgVsphereAdvancedConfigsList extends cdktf.ComplexList {
  public internalValue? : ClusterSpecTkgVsphereAdvancedConfigs[] | cdktf.IResolvable

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
  public get(index: number): ClusterSpecTkgVsphereAdvancedConfigsOutputReference {
    return new ClusterSpecTkgVsphereAdvancedConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterSpecTkgVsphereDistributionWorkspace {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#datacenter Cluster#datacenter}
  */
  readonly datacenter: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#datastore Cluster#datastore}
  */
  readonly datastore: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#folder Cluster#folder}
  */
  readonly folder: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#resource_pool Cluster#resource_pool}
  */
  readonly resourcePool: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#workspace_network Cluster#workspace_network}
  */
  readonly workspaceNetwork: string;
}

export function clusterSpecTkgVsphereDistributionWorkspaceToTerraform(struct?: ClusterSpecTkgVsphereDistributionWorkspaceOutputReference | ClusterSpecTkgVsphereDistributionWorkspace): any {
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


export function clusterSpecTkgVsphereDistributionWorkspaceToHclTerraform(struct?: ClusterSpecTkgVsphereDistributionWorkspaceOutputReference | ClusterSpecTkgVsphereDistributionWorkspace): any {
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

export class ClusterSpecTkgVsphereDistributionWorkspaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterSpecTkgVsphereDistributionWorkspace | undefined {
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

  public set internalValue(value: ClusterSpecTkgVsphereDistributionWorkspace | undefined) {
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
export interface ClusterSpecTkgVsphereDistribution {
  /**
  * Arch of the OS used for the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#os_arch Cluster#os_arch}
  */
  readonly osArch?: string;
  /**
  * Name of the OS used for the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#os_name Cluster#os_name}
  */
  readonly osName?: string;
  /**
  * Version of the OS used for the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#os_version Cluster#os_version}
  */
  readonly osVersion?: string;
  /**
  * Version specifies the version of the Kubernetes cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#version Cluster#version}
  */
  readonly version: string;
  /**
  * workspace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#workspace Cluster#workspace}
  */
  readonly workspace: ClusterSpecTkgVsphereDistributionWorkspace;
}

export function clusterSpecTkgVsphereDistributionToTerraform(struct?: ClusterSpecTkgVsphereDistributionOutputReference | ClusterSpecTkgVsphereDistribution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    os_arch: cdktf.stringToTerraform(struct!.osArch),
    os_name: cdktf.stringToTerraform(struct!.osName),
    os_version: cdktf.stringToTerraform(struct!.osVersion),
    version: cdktf.stringToTerraform(struct!.version),
    workspace: clusterSpecTkgVsphereDistributionWorkspaceToTerraform(struct!.workspace),
  }
}


export function clusterSpecTkgVsphereDistributionToHclTerraform(struct?: ClusterSpecTkgVsphereDistributionOutputReference | ClusterSpecTkgVsphereDistribution): any {
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
      value: clusterSpecTkgVsphereDistributionWorkspaceToHclTerraform(struct!.workspace),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterSpecTkgVsphereDistributionWorkspaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterSpecTkgVsphereDistributionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterSpecTkgVsphereDistribution | undefined {
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

  public set internalValue(value: ClusterSpecTkgVsphereDistribution | undefined) {
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
  private _workspace = new ClusterSpecTkgVsphereDistributionWorkspaceOutputReference(this, "workspace");
  public get workspace() {
    return this._workspace;
  }
  public putWorkspace(value: ClusterSpecTkgVsphereDistributionWorkspace) {
    this._workspace.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceInput() {
    return this._workspace.internalValue;
  }
}
export interface ClusterSpecTkgVsphereSettingsNetworkPods {
  /**
  * CIDRBlocks specifies one or more ranges of IP addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#cidr_blocks Cluster#cidr_blocks}
  */
  readonly cidrBlocks: string[];
}

export function clusterSpecTkgVsphereSettingsNetworkPodsToTerraform(struct?: ClusterSpecTkgVsphereSettingsNetworkPods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cidrBlocks),
  }
}


export function clusterSpecTkgVsphereSettingsNetworkPodsToHclTerraform(struct?: ClusterSpecTkgVsphereSettingsNetworkPods | cdktf.IResolvable): any {
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

export class ClusterSpecTkgVsphereSettingsNetworkPodsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterSpecTkgVsphereSettingsNetworkPods | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterSpecTkgVsphereSettingsNetworkPods | cdktf.IResolvable | undefined) {
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

export class ClusterSpecTkgVsphereSettingsNetworkPodsList extends cdktf.ComplexList {
  public internalValue? : ClusterSpecTkgVsphereSettingsNetworkPods[] | cdktf.IResolvable

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
  public get(index: number): ClusterSpecTkgVsphereSettingsNetworkPodsOutputReference {
    return new ClusterSpecTkgVsphereSettingsNetworkPodsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterSpecTkgVsphereSettingsNetworkServices {
  /**
  * CIDRBlocks specifies one or more ranges of IP addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#cidr_blocks Cluster#cidr_blocks}
  */
  readonly cidrBlocks: string[];
}

export function clusterSpecTkgVsphereSettingsNetworkServicesToTerraform(struct?: ClusterSpecTkgVsphereSettingsNetworkServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cidrBlocks),
  }
}


export function clusterSpecTkgVsphereSettingsNetworkServicesToHclTerraform(struct?: ClusterSpecTkgVsphereSettingsNetworkServices | cdktf.IResolvable): any {
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

export class ClusterSpecTkgVsphereSettingsNetworkServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterSpecTkgVsphereSettingsNetworkServices | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterSpecTkgVsphereSettingsNetworkServices | cdktf.IResolvable | undefined) {
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

export class ClusterSpecTkgVsphereSettingsNetworkServicesList extends cdktf.ComplexList {
  public internalValue? : ClusterSpecTkgVsphereSettingsNetworkServices[] | cdktf.IResolvable

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
  public get(index: number): ClusterSpecTkgVsphereSettingsNetworkServicesOutputReference {
    return new ClusterSpecTkgVsphereSettingsNetworkServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterSpecTkgVsphereSettingsNetwork {
  /**
  * APIServerPort specifies the port address for the cluster that defaults to 6443.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#api_server_port Cluster#api_server_port}
  */
  readonly apiServerPort?: number;
  /**
  * ControlPlaneEndpoint specifies the control plane virtual IP address. The value should be unique for every create request, else cluster creation shall fail. This field is not needed when AVI enabled while creating a legacy cluster on TKGm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#control_plane_end_point Cluster#control_plane_end_point}
  */
  readonly controlPlaneEndPoint?: string;
  /**
  * pods block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#pods Cluster#pods}
  */
  readonly pods: ClusterSpecTkgVsphereSettingsNetworkPods[] | cdktf.IResolvable;
  /**
  * services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#services Cluster#services}
  */
  readonly services: ClusterSpecTkgVsphereSettingsNetworkServices[] | cdktf.IResolvable;
}

export function clusterSpecTkgVsphereSettingsNetworkToTerraform(struct?: ClusterSpecTkgVsphereSettingsNetworkOutputReference | ClusterSpecTkgVsphereSettingsNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_server_port: cdktf.numberToTerraform(struct!.apiServerPort),
    control_plane_end_point: cdktf.stringToTerraform(struct!.controlPlaneEndPoint),
    pods: cdktf.listMapper(clusterSpecTkgVsphereSettingsNetworkPodsToTerraform, true)(struct!.pods),
    services: cdktf.listMapper(clusterSpecTkgVsphereSettingsNetworkServicesToTerraform, true)(struct!.services),
  }
}


export function clusterSpecTkgVsphereSettingsNetworkToHclTerraform(struct?: ClusterSpecTkgVsphereSettingsNetworkOutputReference | ClusterSpecTkgVsphereSettingsNetwork): any {
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
      value: cdktf.listMapperHcl(clusterSpecTkgVsphereSettingsNetworkPodsToHclTerraform, true)(struct!.pods),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterSpecTkgVsphereSettingsNetworkPodsList",
    },
    services: {
      value: cdktf.listMapperHcl(clusterSpecTkgVsphereSettingsNetworkServicesToHclTerraform, true)(struct!.services),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterSpecTkgVsphereSettingsNetworkServicesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterSpecTkgVsphereSettingsNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterSpecTkgVsphereSettingsNetwork | undefined {
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

  public set internalValue(value: ClusterSpecTkgVsphereSettingsNetwork | undefined) {
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
  private _pods = new ClusterSpecTkgVsphereSettingsNetworkPodsList(this, "pods", false);
  public get pods() {
    return this._pods;
  }
  public putPods(value: ClusterSpecTkgVsphereSettingsNetworkPods[] | cdktf.IResolvable) {
    this._pods.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podsInput() {
    return this._pods.internalValue;
  }

  // services - computed: false, optional: false, required: true
  private _services = new ClusterSpecTkgVsphereSettingsNetworkServicesList(this, "services", false);
  public get services() {
    return this._services;
  }
  public putServices(value: ClusterSpecTkgVsphereSettingsNetworkServices[] | cdktf.IResolvable) {
    this._services.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services.internalValue;
  }
}
export interface ClusterSpecTkgVsphereSettingsSecurity {
  /**
  * SSH key for provisioning and accessing the cluster VMs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#ssh_key Cluster#ssh_key}
  */
  readonly sshKey: string;
}

export function clusterSpecTkgVsphereSettingsSecurityToTerraform(struct?: ClusterSpecTkgVsphereSettingsSecurityOutputReference | ClusterSpecTkgVsphereSettingsSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ssh_key: cdktf.stringToTerraform(struct!.sshKey),
  }
}


export function clusterSpecTkgVsphereSettingsSecurityToHclTerraform(struct?: ClusterSpecTkgVsphereSettingsSecurityOutputReference | ClusterSpecTkgVsphereSettingsSecurity): any {
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

export class ClusterSpecTkgVsphereSettingsSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterSpecTkgVsphereSettingsSecurity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sshKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKey = this._sshKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterSpecTkgVsphereSettingsSecurity | undefined) {
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
export interface ClusterSpecTkgVsphereSettings {
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#network Cluster#network}
  */
  readonly network: ClusterSpecTkgVsphereSettingsNetwork;
  /**
  * security block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#security Cluster#security}
  */
  readonly security: ClusterSpecTkgVsphereSettingsSecurity;
}

export function clusterSpecTkgVsphereSettingsToTerraform(struct?: ClusterSpecTkgVsphereSettingsOutputReference | ClusterSpecTkgVsphereSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network: clusterSpecTkgVsphereSettingsNetworkToTerraform(struct!.network),
    security: clusterSpecTkgVsphereSettingsSecurityToTerraform(struct!.security),
  }
}


export function clusterSpecTkgVsphereSettingsToHclTerraform(struct?: ClusterSpecTkgVsphereSettingsOutputReference | ClusterSpecTkgVsphereSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network: {
      value: clusterSpecTkgVsphereSettingsNetworkToHclTerraform(struct!.network),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterSpecTkgVsphereSettingsNetworkList",
    },
    security: {
      value: clusterSpecTkgVsphereSettingsSecurityToHclTerraform(struct!.security),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterSpecTkgVsphereSettingsSecurityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterSpecTkgVsphereSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterSpecTkgVsphereSettings | undefined {
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

  public set internalValue(value: ClusterSpecTkgVsphereSettings | undefined) {
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
  private _network = new ClusterSpecTkgVsphereSettingsNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: ClusterSpecTkgVsphereSettingsNetwork) {
    this._network.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // security - computed: false, optional: false, required: true
  private _security = new ClusterSpecTkgVsphereSettingsSecurityOutputReference(this, "security");
  public get security() {
    return this._security;
  }
  public putSecurity(value: ClusterSpecTkgVsphereSettingsSecurity) {
    this._security.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security.internalValue;
  }
}
export interface ClusterSpecTkgVsphereTopologyControlPlaneVmConfig {
  /**
  * Number of CPUs per node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#cpu Cluster#cpu}
  */
  readonly cpu?: string;
  /**
  * Root disk size in gigabytes for the VM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#disk_size Cluster#disk_size}
  */
  readonly diskSize?: string;
  /**
  * Memory associated with the node in megabytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#memory Cluster#memory}
  */
  readonly memory?: string;
}

export function clusterSpecTkgVsphereTopologyControlPlaneVmConfigToTerraform(struct?: ClusterSpecTkgVsphereTopologyControlPlaneVmConfigOutputReference | ClusterSpecTkgVsphereTopologyControlPlaneVmConfig): any {
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


export function clusterSpecTkgVsphereTopologyControlPlaneVmConfigToHclTerraform(struct?: ClusterSpecTkgVsphereTopologyControlPlaneVmConfigOutputReference | ClusterSpecTkgVsphereTopologyControlPlaneVmConfig): any {
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

export class ClusterSpecTkgVsphereTopologyControlPlaneVmConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterSpecTkgVsphereTopologyControlPlaneVmConfig | undefined {
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

  public set internalValue(value: ClusterSpecTkgVsphereTopologyControlPlaneVmConfig | undefined) {
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
export interface ClusterSpecTkgVsphereTopologyControlPlane {
  /**
  * High Availability or Non High Availability Cluster. HA cluster creates three controlplane machines, and non HA creates just one
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#high_availability Cluster#high_availability}
  */
  readonly highAvailability?: boolean | cdktf.IResolvable;
  /**
  * vm_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#vm_config Cluster#vm_config}
  */
  readonly vmConfig: ClusterSpecTkgVsphereTopologyControlPlaneVmConfig;
}

export function clusterSpecTkgVsphereTopologyControlPlaneToTerraform(struct?: ClusterSpecTkgVsphereTopologyControlPlaneOutputReference | ClusterSpecTkgVsphereTopologyControlPlane): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    high_availability: cdktf.booleanToTerraform(struct!.highAvailability),
    vm_config: clusterSpecTkgVsphereTopologyControlPlaneVmConfigToTerraform(struct!.vmConfig),
  }
}


export function clusterSpecTkgVsphereTopologyControlPlaneToHclTerraform(struct?: ClusterSpecTkgVsphereTopologyControlPlaneOutputReference | ClusterSpecTkgVsphereTopologyControlPlane): any {
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
      value: clusterSpecTkgVsphereTopologyControlPlaneVmConfigToHclTerraform(struct!.vmConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterSpecTkgVsphereTopologyControlPlaneVmConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterSpecTkgVsphereTopologyControlPlaneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterSpecTkgVsphereTopologyControlPlane | undefined {
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

  public set internalValue(value: ClusterSpecTkgVsphereTopologyControlPlane | undefined) {
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
  private _vmConfig = new ClusterSpecTkgVsphereTopologyControlPlaneVmConfigOutputReference(this, "vm_config");
  public get vmConfig() {
    return this._vmConfig;
  }
  public putVmConfig(value: ClusterSpecTkgVsphereTopologyControlPlaneVmConfig) {
    this._vmConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmConfigInput() {
    return this._vmConfig.internalValue;
  }
}
export interface ClusterSpecTkgVsphereTopologyNodePoolsInfo {
  /**
  * Description of the nodepool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#description Cluster#description}
  */
  readonly description?: string;
  /**
  * Name of the nodepool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#name Cluster#name}
  */
  readonly name: string;
}

export function clusterSpecTkgVsphereTopologyNodePoolsInfoToTerraform(struct?: ClusterSpecTkgVsphereTopologyNodePoolsInfoOutputReference | ClusterSpecTkgVsphereTopologyNodePoolsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function clusterSpecTkgVsphereTopologyNodePoolsInfoToHclTerraform(struct?: ClusterSpecTkgVsphereTopologyNodePoolsInfoOutputReference | ClusterSpecTkgVsphereTopologyNodePoolsInfo): any {
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

export class ClusterSpecTkgVsphereTopologyNodePoolsInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterSpecTkgVsphereTopologyNodePoolsInfo | undefined {
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

  public set internalValue(value: ClusterSpecTkgVsphereTopologyNodePoolsInfo | undefined) {
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
export interface ClusterSpecTkgVsphereTopologyNodePoolsSpecTkgVsphereVmConfig {
  /**
  * Number of CPUs per node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#cpu Cluster#cpu}
  */
  readonly cpu?: string;
  /**
  * Root disk size in gigabytes for the VM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#disk_size Cluster#disk_size}
  */
  readonly diskSize?: string;
  /**
  * Memory associated with the node in megabytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#memory Cluster#memory}
  */
  readonly memory?: string;
}

export function clusterSpecTkgVsphereTopologyNodePoolsSpecTkgVsphereVmConfigToTerraform(struct?: ClusterSpecTkgVsphereTopologyNodePoolsSpecTkgVsphereVmConfigOutputReference | ClusterSpecTkgVsphereTopologyNodePoolsSpecTkgVsphereVmConfig): any {
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


export function clusterSpecTkgVsphereTopologyNodePoolsSpecTkgVsphereVmConfigToHclTerraform(struct?: ClusterSpecTkgVsphereTopologyNodePoolsSpecTkgVsphereVmConfigOutputReference | ClusterSpecTkgVsphereTopologyNodePoolsSpecTkgVsphereVmConfig): any {
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

export class ClusterSpecTkgVsphereTopologyNodePoolsSpecTkgVsphereVmConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterSpecTkgVsphereTopologyNodePoolsSpecTkgVsphereVmConfig | undefined {
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

  public set internalValue(value: ClusterSpecTkgVsphereTopologyNodePoolsSpecTkgVsphereVmConfig | undefined) {
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
export interface ClusterSpecTkgVsphereTopologyNodePoolsSpecTkgVsphere {
  /**
  * vm_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#vm_config Cluster#vm_config}
  */
  readonly vmConfig: ClusterSpecTkgVsphereTopologyNodePoolsSpecTkgVsphereVmConfig;
}

export function clusterSpecTkgVsphereTopologyNodePoolsSpecTkgVsphereToTerraform(struct?: ClusterSpecTkgVsphereTopologyNodePoolsSpecTkgVsphereOutputReference | ClusterSpecTkgVsphereTopologyNodePoolsSpecTkgVsphere): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vm_config: clusterSpecTkgVsphereTopologyNodePoolsSpecTkgVsphereVmConfigToTerraform(struct!.vmConfig),
  }
}


export function clusterSpecTkgVsphereTopologyNodePoolsSpecTkgVsphereToHclTerraform(struct?: ClusterSpecTkgVsphereTopologyNodePoolsSpecTkgVsphereOutputReference | ClusterSpecTkgVsphereTopologyNodePoolsSpecTkgVsphere): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vm_config: {
      value: clusterSpecTkgVsphereTopologyNodePoolsSpecTkgVsphereVmConfigToHclTerraform(struct!.vmConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterSpecTkgVsphereTopologyNodePoolsSpecTkgVsphereVmConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterSpecTkgVsphereTopologyNodePoolsSpecTkgVsphereOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterSpecTkgVsphereTopologyNodePoolsSpecTkgVsphere | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vmConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmConfig = this._vmConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterSpecTkgVsphereTopologyNodePoolsSpecTkgVsphere | undefined) {
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
  private _vmConfig = new ClusterSpecTkgVsphereTopologyNodePoolsSpecTkgVsphereVmConfigOutputReference(this, "vm_config");
  public get vmConfig() {
    return this._vmConfig;
  }
  public putVmConfig(value: ClusterSpecTkgVsphereTopologyNodePoolsSpecTkgVsphereVmConfig) {
    this._vmConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmConfigInput() {
    return this._vmConfig.internalValue;
  }
}
export interface ClusterSpecTkgVsphereTopologyNodePoolsSpec {
  /**
  * Count is the number of nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#worker_node_count Cluster#worker_node_count}
  */
  readonly workerNodeCount?: string;
  /**
  * tkg_vsphere block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#tkg_vsphere Cluster#tkg_vsphere}
  */
  readonly tkgVsphere?: ClusterSpecTkgVsphereTopologyNodePoolsSpecTkgVsphere;
}

export function clusterSpecTkgVsphereTopologyNodePoolsSpecToTerraform(struct?: ClusterSpecTkgVsphereTopologyNodePoolsSpecOutputReference | ClusterSpecTkgVsphereTopologyNodePoolsSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    worker_node_count: cdktf.stringToTerraform(struct!.workerNodeCount),
    tkg_vsphere: clusterSpecTkgVsphereTopologyNodePoolsSpecTkgVsphereToTerraform(struct!.tkgVsphere),
  }
}


export function clusterSpecTkgVsphereTopologyNodePoolsSpecToHclTerraform(struct?: ClusterSpecTkgVsphereTopologyNodePoolsSpecOutputReference | ClusterSpecTkgVsphereTopologyNodePoolsSpec): any {
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
      value: clusterSpecTkgVsphereTopologyNodePoolsSpecTkgVsphereToHclTerraform(struct!.tkgVsphere),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterSpecTkgVsphereTopologyNodePoolsSpecTkgVsphereList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterSpecTkgVsphereTopologyNodePoolsSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterSpecTkgVsphereTopologyNodePoolsSpec | undefined {
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

  public set internalValue(value: ClusterSpecTkgVsphereTopologyNodePoolsSpec | undefined) {
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
  private _tkgVsphere = new ClusterSpecTkgVsphereTopologyNodePoolsSpecTkgVsphereOutputReference(this, "tkg_vsphere");
  public get tkgVsphere() {
    return this._tkgVsphere;
  }
  public putTkgVsphere(value: ClusterSpecTkgVsphereTopologyNodePoolsSpecTkgVsphere) {
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
export interface ClusterSpecTkgVsphereTopologyNodePools {
  /**
  * info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#info Cluster#info}
  */
  readonly info: ClusterSpecTkgVsphereTopologyNodePoolsInfo;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#spec Cluster#spec}
  */
  readonly spec?: ClusterSpecTkgVsphereTopologyNodePoolsSpec;
}

export function clusterSpecTkgVsphereTopologyNodePoolsToTerraform(struct?: ClusterSpecTkgVsphereTopologyNodePools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    info: clusterSpecTkgVsphereTopologyNodePoolsInfoToTerraform(struct!.info),
    spec: clusterSpecTkgVsphereTopologyNodePoolsSpecToTerraform(struct!.spec),
  }
}


export function clusterSpecTkgVsphereTopologyNodePoolsToHclTerraform(struct?: ClusterSpecTkgVsphereTopologyNodePools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    info: {
      value: clusterSpecTkgVsphereTopologyNodePoolsInfoToHclTerraform(struct!.info),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterSpecTkgVsphereTopologyNodePoolsInfoList",
    },
    spec: {
      value: clusterSpecTkgVsphereTopologyNodePoolsSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterSpecTkgVsphereTopologyNodePoolsSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterSpecTkgVsphereTopologyNodePoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterSpecTkgVsphereTopologyNodePools | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterSpecTkgVsphereTopologyNodePools | cdktf.IResolvable | undefined) {
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
  private _info = new ClusterSpecTkgVsphereTopologyNodePoolsInfoOutputReference(this, "info");
  public get info() {
    return this._info;
  }
  public putInfo(value: ClusterSpecTkgVsphereTopologyNodePoolsInfo) {
    this._info.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infoInput() {
    return this._info.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new ClusterSpecTkgVsphereTopologyNodePoolsSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: ClusterSpecTkgVsphereTopologyNodePoolsSpec) {
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

export class ClusterSpecTkgVsphereTopologyNodePoolsList extends cdktf.ComplexList {
  public internalValue? : ClusterSpecTkgVsphereTopologyNodePools[] | cdktf.IResolvable

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
  public get(index: number): ClusterSpecTkgVsphereTopologyNodePoolsOutputReference {
    return new ClusterSpecTkgVsphereTopologyNodePoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterSpecTkgVsphereTopology {
  /**
  * control_plane block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#control_plane Cluster#control_plane}
  */
  readonly controlPlane: ClusterSpecTkgVsphereTopologyControlPlane;
  /**
  * node_pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#node_pools Cluster#node_pools}
  */
  readonly nodePools?: ClusterSpecTkgVsphereTopologyNodePools[] | cdktf.IResolvable;
}

export function clusterSpecTkgVsphereTopologyToTerraform(struct?: ClusterSpecTkgVsphereTopologyOutputReference | ClusterSpecTkgVsphereTopology): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    control_plane: clusterSpecTkgVsphereTopologyControlPlaneToTerraform(struct!.controlPlane),
    node_pools: cdktf.listMapper(clusterSpecTkgVsphereTopologyNodePoolsToTerraform, true)(struct!.nodePools),
  }
}


export function clusterSpecTkgVsphereTopologyToHclTerraform(struct?: ClusterSpecTkgVsphereTopologyOutputReference | ClusterSpecTkgVsphereTopology): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    control_plane: {
      value: clusterSpecTkgVsphereTopologyControlPlaneToHclTerraform(struct!.controlPlane),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterSpecTkgVsphereTopologyControlPlaneList",
    },
    node_pools: {
      value: cdktf.listMapperHcl(clusterSpecTkgVsphereTopologyNodePoolsToHclTerraform, true)(struct!.nodePools),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterSpecTkgVsphereTopologyNodePoolsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterSpecTkgVsphereTopologyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterSpecTkgVsphereTopology | undefined {
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

  public set internalValue(value: ClusterSpecTkgVsphereTopology | undefined) {
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
  private _controlPlane = new ClusterSpecTkgVsphereTopologyControlPlaneOutputReference(this, "control_plane");
  public get controlPlane() {
    return this._controlPlane;
  }
  public putControlPlane(value: ClusterSpecTkgVsphereTopologyControlPlane) {
    this._controlPlane.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneInput() {
    return this._controlPlane.internalValue;
  }

  // node_pools - computed: false, optional: true, required: false
  private _nodePools = new ClusterSpecTkgVsphereTopologyNodePoolsList(this, "node_pools", false);
  public get nodePools() {
    return this._nodePools;
  }
  public putNodePools(value: ClusterSpecTkgVsphereTopologyNodePools[] | cdktf.IResolvable) {
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
export interface ClusterSpecTkgVsphere {
  /**
  * advanced_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#advanced_configs Cluster#advanced_configs}
  */
  readonly advancedConfigs?: ClusterSpecTkgVsphereAdvancedConfigs[] | cdktf.IResolvable;
  /**
  * distribution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#distribution Cluster#distribution}
  */
  readonly distribution: ClusterSpecTkgVsphereDistribution;
  /**
  * settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#settings Cluster#settings}
  */
  readonly settings: ClusterSpecTkgVsphereSettings;
  /**
  * topology block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#topology Cluster#topology}
  */
  readonly topology: ClusterSpecTkgVsphereTopology;
}

export function clusterSpecTkgVsphereToTerraform(struct?: ClusterSpecTkgVsphereOutputReference | ClusterSpecTkgVsphere): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advanced_configs: cdktf.listMapper(clusterSpecTkgVsphereAdvancedConfigsToTerraform, true)(struct!.advancedConfigs),
    distribution: clusterSpecTkgVsphereDistributionToTerraform(struct!.distribution),
    settings: clusterSpecTkgVsphereSettingsToTerraform(struct!.settings),
    topology: clusterSpecTkgVsphereTopologyToTerraform(struct!.topology),
  }
}


export function clusterSpecTkgVsphereToHclTerraform(struct?: ClusterSpecTkgVsphereOutputReference | ClusterSpecTkgVsphere): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advanced_configs: {
      value: cdktf.listMapperHcl(clusterSpecTkgVsphereAdvancedConfigsToHclTerraform, true)(struct!.advancedConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterSpecTkgVsphereAdvancedConfigsList",
    },
    distribution: {
      value: clusterSpecTkgVsphereDistributionToHclTerraform(struct!.distribution),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterSpecTkgVsphereDistributionList",
    },
    settings: {
      value: clusterSpecTkgVsphereSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterSpecTkgVsphereSettingsList",
    },
    topology: {
      value: clusterSpecTkgVsphereTopologyToHclTerraform(struct!.topology),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterSpecTkgVsphereTopologyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterSpecTkgVsphereOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterSpecTkgVsphere | undefined {
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

  public set internalValue(value: ClusterSpecTkgVsphere | undefined) {
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
  private _advancedConfigs = new ClusterSpecTkgVsphereAdvancedConfigsList(this, "advanced_configs", false);
  public get advancedConfigs() {
    return this._advancedConfigs;
  }
  public putAdvancedConfigs(value: ClusterSpecTkgVsphereAdvancedConfigs[] | cdktf.IResolvable) {
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
  private _distribution = new ClusterSpecTkgVsphereDistributionOutputReference(this, "distribution");
  public get distribution() {
    return this._distribution;
  }
  public putDistribution(value: ClusterSpecTkgVsphereDistribution) {
    this._distribution.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionInput() {
    return this._distribution.internalValue;
  }

  // settings - computed: false, optional: false, required: true
  private _settings = new ClusterSpecTkgVsphereSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: ClusterSpecTkgVsphereSettings) {
    this._settings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // topology - computed: false, optional: false, required: true
  private _topology = new ClusterSpecTkgVsphereTopologyOutputReference(this, "topology");
  public get topology() {
    return this._topology;
  }
  public putTopology(value: ClusterSpecTkgVsphereTopology) {
    this._topology.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyInput() {
    return this._topology.internalValue;
  }
}
export interface ClusterSpec {
  /**
  * Name of the cluster group to which this cluster belongs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#cluster_group Cluster#cluster_group}
  */
  readonly clusterGroup?: string;
  /**
  * Optional image registry name is the name of the image registry to be used for the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#image_registry Cluster#image_registry}
  */
  readonly imageRegistry?: string;
  /**
  * Optional proxy name is the name of the Proxy Config to be used for the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#proxy Cluster#proxy}
  */
  readonly proxy?: string;
  /**
  * tkg_aws block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#tkg_aws Cluster#tkg_aws}
  */
  readonly tkgAws?: ClusterSpecTkgAws;
  /**
  * tkg_service_vsphere block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#tkg_service_vsphere Cluster#tkg_service_vsphere}
  */
  readonly tkgServiceVsphere?: ClusterSpecTkgServiceVsphere;
  /**
  * tkg_vsphere block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#tkg_vsphere Cluster#tkg_vsphere}
  */
  readonly tkgVsphere?: ClusterSpecTkgVsphere;
}

export function clusterSpecToTerraform(struct?: ClusterSpecOutputReference | ClusterSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_group: cdktf.stringToTerraform(struct!.clusterGroup),
    image_registry: cdktf.stringToTerraform(struct!.imageRegistry),
    proxy: cdktf.stringToTerraform(struct!.proxy),
    tkg_aws: clusterSpecTkgAwsToTerraform(struct!.tkgAws),
    tkg_service_vsphere: clusterSpecTkgServiceVsphereToTerraform(struct!.tkgServiceVsphere),
    tkg_vsphere: clusterSpecTkgVsphereToTerraform(struct!.tkgVsphere),
  }
}


export function clusterSpecToHclTerraform(struct?: ClusterSpecOutputReference | ClusterSpec): any {
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
      value: clusterSpecTkgAwsToHclTerraform(struct!.tkgAws),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterSpecTkgAwsList",
    },
    tkg_service_vsphere: {
      value: clusterSpecTkgServiceVsphereToHclTerraform(struct!.tkgServiceVsphere),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterSpecTkgServiceVsphereList",
    },
    tkg_vsphere: {
      value: clusterSpecTkgVsphereToHclTerraform(struct!.tkgVsphere),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterSpecTkgVsphereList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterSpec | undefined {
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

  public set internalValue(value: ClusterSpec | undefined) {
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
  private _tkgAws = new ClusterSpecTkgAwsOutputReference(this, "tkg_aws");
  public get tkgAws() {
    return this._tkgAws;
  }
  public putTkgAws(value: ClusterSpecTkgAws) {
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
  private _tkgServiceVsphere = new ClusterSpecTkgServiceVsphereOutputReference(this, "tkg_service_vsphere");
  public get tkgServiceVsphere() {
    return this._tkgServiceVsphere;
  }
  public putTkgServiceVsphere(value: ClusterSpecTkgServiceVsphere) {
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
  private _tkgVsphere = new ClusterSpecTkgVsphereOutputReference(this, "tkg_vsphere");
  public get tkgVsphere() {
    return this._tkgVsphere;
  }
  public putTkgVsphere(value: ClusterSpecTkgVsphere) {
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
* Represents a {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster tanzu-mission-control_cluster}
*/
export class Cluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tanzu-mission-control_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cluster to import
  * @param importFromId The id of the existing Cluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tanzu-mission-control_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/cluster tanzu-mission-control_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterConfig
  */
  public constructor(scope: Construct, id: string, config: ClusterConfig) {
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
  private _attachK8SCluster = new ClusterAttachK8SClusterOutputReference(this, "attach_k8s_cluster");
  public get attachK8SCluster() {
    return this._attachK8SCluster;
  }
  public putAttachK8SCluster(value: ClusterAttachK8SCluster) {
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
  private _meta = new ClusterMetaOutputReference(this, "meta");
  public get meta() {
    return this._meta;
  }
  public putMeta(value: ClusterMeta) {
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
  private _spec = new ClusterSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: ClusterSpec) {
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
      attach_k8s_cluster: clusterAttachK8SClusterToTerraform(this._attachK8SCluster.internalValue),
      meta: clusterMetaToTerraform(this._meta.internalValue),
      spec: clusterSpecToTerraform(this._spec.internalValue),
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
        value: clusterAttachK8SClusterToHclTerraform(this._attachK8SCluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterAttachK8SClusterList",
      },
      meta: {
        value: clusterMetaToHclTerraform(this._meta.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterMetaList",
      },
      spec: {
        value: clusterSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterSpecList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
