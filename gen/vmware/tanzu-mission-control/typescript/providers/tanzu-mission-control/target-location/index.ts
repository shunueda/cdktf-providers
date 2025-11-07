// https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/target_location
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TargetLocationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/target_location#id TargetLocation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the target location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/target_location#name TargetLocation#name}
  */
  readonly name: string;
  /**
  * meta block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/target_location#meta TargetLocation#meta}
  */
  readonly meta?: TargetLocationMeta;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/target_location#spec TargetLocation#spec}
  */
  readonly spec: TargetLocationSpec;
}
export interface TargetLocationMeta {
  /**
  * Annotations for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/target_location#annotations TargetLocation#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Description of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/target_location#description TargetLocation#description}
  */
  readonly description?: string;
  /**
  * Labels for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/target_location#labels TargetLocation#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function targetLocationMetaToTerraform(struct?: TargetLocationMetaOutputReference | TargetLocationMeta): any {
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


export function targetLocationMetaToHclTerraform(struct?: TargetLocationMetaOutputReference | TargetLocationMeta): any {
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

export class TargetLocationMetaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TargetLocationMeta | undefined {
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

  public set internalValue(value: TargetLocationMeta | undefined) {
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
export interface TargetLocationSpecAssignedGroupsCluster {
  /**
  * Management cluster name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/target_location#management_cluster_name TargetLocation#management_cluster_name}
  */
  readonly managementClusterName: string;
  /**
  * Cluster name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/target_location#name TargetLocation#name}
  */
  readonly name: string;
  /**
  * Cluster provisioner name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/target_location#provisioner_name TargetLocation#provisioner_name}
  */
  readonly provisionerName: string;
}

export function targetLocationSpecAssignedGroupsClusterToTerraform(struct?: TargetLocationSpecAssignedGroupsCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    management_cluster_name: cdktf.stringToTerraform(struct!.managementClusterName),
    name: cdktf.stringToTerraform(struct!.name),
    provisioner_name: cdktf.stringToTerraform(struct!.provisionerName),
  }
}


export function targetLocationSpecAssignedGroupsClusterToHclTerraform(struct?: TargetLocationSpecAssignedGroupsCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    management_cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.managementClusterName),
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
    provisioner_name: {
      value: cdktf.stringToHclTerraform(struct!.provisionerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TargetLocationSpecAssignedGroupsClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TargetLocationSpecAssignedGroupsCluster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._managementClusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementClusterName = this._managementClusterName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._provisionerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionerName = this._provisionerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TargetLocationSpecAssignedGroupsCluster | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._managementClusterName = undefined;
      this._name = undefined;
      this._provisionerName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._managementClusterName = value.managementClusterName;
      this._name = value.name;
      this._provisionerName = value.provisionerName;
    }
  }

  // management_cluster_name - computed: false, optional: false, required: true
  private _managementClusterName?: string; 
  public get managementClusterName() {
    return this.getStringAttribute('management_cluster_name');
  }
  public set managementClusterName(value: string) {
    this._managementClusterName = value;
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

  // provisioner_name - computed: false, optional: false, required: true
  private _provisionerName?: string; 
  public get provisionerName() {
    return this.getStringAttribute('provisioner_name');
  }
  public set provisionerName(value: string) {
    this._provisionerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionerNameInput() {
    return this._provisionerName;
  }
}

export class TargetLocationSpecAssignedGroupsClusterList extends cdktf.ComplexList {
  public internalValue? : TargetLocationSpecAssignedGroupsCluster[] | cdktf.IResolvable

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
  public get(index: number): TargetLocationSpecAssignedGroupsClusterOutputReference {
    return new TargetLocationSpecAssignedGroupsClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TargetLocationSpecAssignedGroups {
  /**
  * Cluster group names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/target_location#cluster_groups TargetLocation#cluster_groups}
  */
  readonly clusterGroups?: string[];
  /**
  * cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/target_location#cluster TargetLocation#cluster}
  */
  readonly cluster?: TargetLocationSpecAssignedGroupsCluster[] | cdktf.IResolvable;
}

export function targetLocationSpecAssignedGroupsToTerraform(struct?: TargetLocationSpecAssignedGroupsOutputReference | TargetLocationSpecAssignedGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clusterGroups),
    cluster: cdktf.listMapper(targetLocationSpecAssignedGroupsClusterToTerraform, true)(struct!.cluster),
  }
}


export function targetLocationSpecAssignedGroupsToHclTerraform(struct?: TargetLocationSpecAssignedGroupsOutputReference | TargetLocationSpecAssignedGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clusterGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cluster: {
      value: cdktf.listMapperHcl(targetLocationSpecAssignedGroupsClusterToHclTerraform, true)(struct!.cluster),
      isBlock: true,
      type: "list",
      storageClassType: "TargetLocationSpecAssignedGroupsClusterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TargetLocationSpecAssignedGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TargetLocationSpecAssignedGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterGroups = this._clusterGroups;
    }
    if (this._cluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TargetLocationSpecAssignedGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterGroups = undefined;
      this._cluster.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterGroups = value.clusterGroups;
      this._cluster.internalValue = value.cluster;
    }
  }

  // cluster_groups - computed: false, optional: true, required: false
  private _clusterGroups?: string[]; 
  public get clusterGroups() {
    return this.getListAttribute('cluster_groups');
  }
  public set clusterGroups(value: string[]) {
    this._clusterGroups = value;
  }
  public resetClusterGroups() {
    this._clusterGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterGroupsInput() {
    return this._clusterGroups;
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster = new TargetLocationSpecAssignedGroupsClusterList(this, "cluster", false);
  public get cluster() {
    return this._cluster;
  }
  public putCluster(value: TargetLocationSpecAssignedGroupsCluster[] | cdktf.IResolvable) {
    this._cluster.internalValue = value;
  }
  public resetCluster() {
    this._cluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster.internalValue;
  }
}
export interface TargetLocationSpecConfigAws {
  /**
  * The service endpoint for non-AWS S3 storage solution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/target_location#s3_bucket_url TargetLocation#s3_bucket_url}
  */
  readonly s3BucketUrl?: string;
  /**
  * A flag for whether to force path style URLs for S3 objects.
  * It is default to false and set it to true when using local storage service like Minio.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/target_location#s3_force_path_style TargetLocation#s3_force_path_style}
  */
  readonly s3ForcePathStyle?: boolean | cdktf.IResolvable;
  /**
  * The service endpoint used for generating download URLs. This field is primarily for local storage services like Minio.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/target_location#s3_public_url TargetLocation#s3_public_url}
  */
  readonly s3PublicUrl?: string;
}

export function targetLocationSpecConfigAwsToTerraform(struct?: TargetLocationSpecConfigAwsOutputReference | TargetLocationSpecConfigAws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_bucket_url: cdktf.stringToTerraform(struct!.s3BucketUrl),
    s3_force_path_style: cdktf.booleanToTerraform(struct!.s3ForcePathStyle),
    s3_public_url: cdktf.stringToTerraform(struct!.s3PublicUrl),
  }
}


export function targetLocationSpecConfigAwsToHclTerraform(struct?: TargetLocationSpecConfigAwsOutputReference | TargetLocationSpecConfigAws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    s3_bucket_url: {
      value: cdktf.stringToHclTerraform(struct!.s3BucketUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_force_path_style: {
      value: cdktf.booleanToHclTerraform(struct!.s3ForcePathStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    s3_public_url: {
      value: cdktf.stringToHclTerraform(struct!.s3PublicUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TargetLocationSpecConfigAwsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TargetLocationSpecConfigAws | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3BucketUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BucketUrl = this._s3BucketUrl;
    }
    if (this._s3ForcePathStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3ForcePathStyle = this._s3ForcePathStyle;
    }
    if (this._s3PublicUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3PublicUrl = this._s3PublicUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TargetLocationSpecConfigAws | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3BucketUrl = undefined;
      this._s3ForcePathStyle = undefined;
      this._s3PublicUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3BucketUrl = value.s3BucketUrl;
      this._s3ForcePathStyle = value.s3ForcePathStyle;
      this._s3PublicUrl = value.s3PublicUrl;
    }
  }

  // s3_bucket_url - computed: false, optional: true, required: false
  private _s3BucketUrl?: string; 
  public get s3BucketUrl() {
    return this.getStringAttribute('s3_bucket_url');
  }
  public set s3BucketUrl(value: string) {
    this._s3BucketUrl = value;
  }
  public resetS3BucketUrl() {
    this._s3BucketUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketUrlInput() {
    return this._s3BucketUrl;
  }

  // s3_force_path_style - computed: false, optional: true, required: false
  private _s3ForcePathStyle?: boolean | cdktf.IResolvable; 
  public get s3ForcePathStyle() {
    return this.getBooleanAttribute('s3_force_path_style');
  }
  public set s3ForcePathStyle(value: boolean | cdktf.IResolvable) {
    this._s3ForcePathStyle = value;
  }
  public resetS3ForcePathStyle() {
    this._s3ForcePathStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ForcePathStyleInput() {
    return this._s3ForcePathStyle;
  }

  // s3_public_url - computed: false, optional: true, required: false
  private _s3PublicUrl?: string; 
  public get s3PublicUrl() {
    return this.getStringAttribute('s3_public_url');
  }
  public set s3PublicUrl(value: string) {
    this._s3PublicUrl = value;
  }
  public resetS3PublicUrl() {
    this._s3PublicUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3PublicUrlInput() {
    return this._s3PublicUrl;
  }
}
export interface TargetLocationSpecConfigAzure {
  /**
  * Name of the resource group containing the storage account for this backup storage location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/target_location#resource_group TargetLocation#resource_group}
  */
  readonly resourceGroup?: string;
  /**
  * Subscription ID under which all the resources are being managed in azure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/target_location#storage_account TargetLocation#storage_account}
  */
  readonly storageAccount?: string;
  /**
  * Name of the storage account for this backup storage location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/target_location#subscription_id TargetLocation#subscription_id}
  */
  readonly subscriptionId?: string;
}

export function targetLocationSpecConfigAzureToTerraform(struct?: TargetLocationSpecConfigAzureOutputReference | TargetLocationSpecConfigAzure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
    storage_account: cdktf.stringToTerraform(struct!.storageAccount),
    subscription_id: cdktf.stringToTerraform(struct!.subscriptionId),
  }
}


export function targetLocationSpecConfigAzureToHclTerraform(struct?: TargetLocationSpecConfigAzureOutputReference | TargetLocationSpecConfigAzure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_group: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_account: {
      value: cdktf.stringToHclTerraform(struct!.storageAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscription_id: {
      value: cdktf.stringToHclTerraform(struct!.subscriptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TargetLocationSpecConfigAzureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TargetLocationSpecConfigAzure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    if (this._storageAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccount = this._storageAccount;
    }
    if (this._subscriptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionId = this._subscriptionId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TargetLocationSpecConfigAzure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceGroup = undefined;
      this._storageAccount = undefined;
      this._subscriptionId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceGroup = value.resourceGroup;
      this._storageAccount = value.storageAccount;
      this._subscriptionId = value.subscriptionId;
    }
  }

  // resource_group - computed: false, optional: true, required: false
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  public resetResourceGroup() {
    this._resourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // storage_account - computed: false, optional: true, required: false
  private _storageAccount?: string; 
  public get storageAccount() {
    return this.getStringAttribute('storage_account');
  }
  public set storageAccount(value: string) {
    this._storageAccount = value;
  }
  public resetStorageAccount() {
    this._storageAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountInput() {
    return this._storageAccount;
  }

  // subscription_id - computed: false, optional: true, required: false
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  public resetSubscriptionId() {
    this._subscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }
}
export interface TargetLocationSpecConfig {
  /**
  * aws block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/target_location#aws TargetLocation#aws}
  */
  readonly aws?: TargetLocationSpecConfigAws;
  /**
  * azure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/target_location#azure TargetLocation#azure}
  */
  readonly azure?: TargetLocationSpecConfigAzure;
}

export function targetLocationSpecConfigToTerraform(struct?: TargetLocationSpecConfigOutputReference | TargetLocationSpecConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws: targetLocationSpecConfigAwsToTerraform(struct!.aws),
    azure: targetLocationSpecConfigAzureToTerraform(struct!.azure),
  }
}


export function targetLocationSpecConfigToHclTerraform(struct?: TargetLocationSpecConfigOutputReference | TargetLocationSpecConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws: {
      value: targetLocationSpecConfigAwsToHclTerraform(struct!.aws),
      isBlock: true,
      type: "list",
      storageClassType: "TargetLocationSpecConfigAwsList",
    },
    azure: {
      value: targetLocationSpecConfigAzureToHclTerraform(struct!.azure),
      isBlock: true,
      type: "list",
      storageClassType: "TargetLocationSpecConfigAzureList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TargetLocationSpecConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TargetLocationSpecConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aws?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aws = this._aws?.internalValue;
    }
    if (this._azure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azure = this._azure?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TargetLocationSpecConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aws.internalValue = undefined;
      this._azure.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aws.internalValue = value.aws;
      this._azure.internalValue = value.azure;
    }
  }

  // aws - computed: false, optional: true, required: false
  private _aws = new TargetLocationSpecConfigAwsOutputReference(this, "aws");
  public get aws() {
    return this._aws;
  }
  public putAws(value: TargetLocationSpecConfigAws) {
    this._aws.internalValue = value;
  }
  public resetAws() {
    this._aws.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsInput() {
    return this._aws.internalValue;
  }

  // azure - computed: false, optional: true, required: false
  private _azure = new TargetLocationSpecConfigAzureOutputReference(this, "azure");
  public get azure() {
    return this._azure;
  }
  public putAzure(value: TargetLocationSpecConfigAzure) {
    this._azure.internalValue = value;
  }
  public resetAzure() {
    this._azure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureInput() {
    return this._azure.internalValue;
  }
}
export interface TargetLocationSpec {
  /**
  * The bucket to use for object storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/target_location#bucket TargetLocation#bucket}
  */
  readonly bucket?: string;
  /**
  * A PEM-encoded certificate bundle to trust while connecting to the storage backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/target_location#ca_cert TargetLocation#ca_cert}
  */
  readonly caCert?: string;
  /**
  * Credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/target_location#credential TargetLocation#credential}
  */
  readonly credential: { [key: string]: string };
  /**
  * The region of the bucket origin.
  * Required only when target location is AWS Self Managed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/target_location#region TargetLocation#region}
  */
  readonly region?: string;
  /**
  * The target provider of the backup storage.
  * Valid values are (AWS, AZURE)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/target_location#target_provider TargetLocation#target_provider}
  */
  readonly targetProvider: string;
  /**
  * assigned_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/target_location#assigned_groups TargetLocation#assigned_groups}
  */
  readonly assignedGroups?: TargetLocationSpecAssignedGroups;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/target_location#config TargetLocation#config}
  */
  readonly config?: TargetLocationSpecConfig;
}

export function targetLocationSpecToTerraform(struct?: TargetLocationSpecOutputReference | TargetLocationSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    ca_cert: cdktf.stringToTerraform(struct!.caCert),
    credential: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.credential),
    region: cdktf.stringToTerraform(struct!.region),
    target_provider: cdktf.stringToTerraform(struct!.targetProvider),
    assigned_groups: targetLocationSpecAssignedGroupsToTerraform(struct!.assignedGroups),
    config: targetLocationSpecConfigToTerraform(struct!.config),
  }
}


export function targetLocationSpecToHclTerraform(struct?: TargetLocationSpecOutputReference | TargetLocationSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_cert: {
      value: cdktf.stringToHclTerraform(struct!.caCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credential: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.credential),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_provider: {
      value: cdktf.stringToHclTerraform(struct!.targetProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    assigned_groups: {
      value: targetLocationSpecAssignedGroupsToHclTerraform(struct!.assignedGroups),
      isBlock: true,
      type: "list",
      storageClassType: "TargetLocationSpecAssignedGroupsList",
    },
    config: {
      value: targetLocationSpecConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "TargetLocationSpecConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TargetLocationSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TargetLocationSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._caCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCert = this._caCert;
    }
    if (this._credential !== undefined) {
      hasAnyValues = true;
      internalValueResult.credential = this._credential;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._targetProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetProvider = this._targetProvider;
    }
    if (this._assignedGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignedGroups = this._assignedGroups?.internalValue;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TargetLocationSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._caCert = undefined;
      this._credential = undefined;
      this._region = undefined;
      this._targetProvider = undefined;
      this._assignedGroups.internalValue = undefined;
      this._config.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._caCert = value.caCert;
      this._credential = value.credential;
      this._region = value.region;
      this._targetProvider = value.targetProvider;
      this._assignedGroups.internalValue = value.assignedGroups;
      this._config.internalValue = value.config;
    }
  }

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // ca_cert - computed: false, optional: true, required: false
  private _caCert?: string; 
  public get caCert() {
    return this.getStringAttribute('ca_cert');
  }
  public set caCert(value: string) {
    this._caCert = value;
  }
  public resetCaCert() {
    this._caCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert;
  }

  // credential - computed: false, optional: false, required: true
  private _credential?: { [key: string]: string }; 
  public get credential() {
    return this.getStringMapAttribute('credential');
  }
  public set credential(value: { [key: string]: string }) {
    this._credential = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialInput() {
    return this._credential;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // sys_bucket_key - computed: true, optional: false, required: false
  public get sysBucketKey() {
    return this.getStringAttribute('sys_bucket_key');
  }

  // sys_region_key - computed: true, optional: false, required: false
  public get sysRegionKey() {
    return this.getStringAttribute('sys_region_key');
  }

  // target_provider - computed: false, optional: false, required: true
  private _targetProvider?: string; 
  public get targetProvider() {
    return this.getStringAttribute('target_provider');
  }
  public set targetProvider(value: string) {
    this._targetProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetProviderInput() {
    return this._targetProvider;
  }

  // assigned_groups - computed: false, optional: true, required: false
  private _assignedGroups = new TargetLocationSpecAssignedGroupsOutputReference(this, "assigned_groups");
  public get assignedGroups() {
    return this._assignedGroups;
  }
  public putAssignedGroups(value: TargetLocationSpecAssignedGroups) {
    this._assignedGroups.internalValue = value;
  }
  public resetAssignedGroups() {
    this._assignedGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignedGroupsInput() {
    return this._assignedGroups.internalValue;
  }

  // config - computed: false, optional: true, required: false
  private _config = new TargetLocationSpecConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: TargetLocationSpecConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/target_location tanzu-mission-control_target_location}
*/
export class TargetLocation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tanzu-mission-control_target_location";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TargetLocation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TargetLocation to import
  * @param importFromId The id of the existing TargetLocation that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/target_location#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TargetLocation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tanzu-mission-control_target_location", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/target_location tanzu-mission-control_target_location} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TargetLocationConfig
  */
  public constructor(scope: Construct, id: string, config: TargetLocationConfig) {
    super(scope, id, {
      terraformResourceType: 'tanzu-mission-control_target_location',
      terraformGeneratorMetadata: {
        providerName: 'tanzu-mission-control',
        providerVersion: '1.4.9'
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
    this._name = config.name;
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

  // meta - computed: false, optional: true, required: false
  private _meta = new TargetLocationMetaOutputReference(this, "meta");
  public get meta() {
    return this._meta;
  }
  public putMeta(value: TargetLocationMeta) {
    this._meta.internalValue = value;
  }
  public resetMeta() {
    this._meta.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaInput() {
    return this._meta.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new TargetLocationSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: TargetLocationSpec) {
    this._spec.internalValue = value;
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
      name: cdktf.stringToTerraform(this._name),
      meta: targetLocationMetaToTerraform(this._meta.internalValue),
      spec: targetLocationSpecToTerraform(this._spec.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      meta: {
        value: targetLocationMetaToHclTerraform(this._meta.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TargetLocationMetaList",
      },
      spec: {
        value: targetLocationSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TargetLocationSpecList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
