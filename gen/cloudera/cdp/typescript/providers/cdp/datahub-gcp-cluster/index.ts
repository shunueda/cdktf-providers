// https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datahub_gcp_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatahubGcpClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the cluster definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datahub_gcp_cluster#cluster_definition_name DatahubGcpCluster#cluster_definition_name}
  */
  readonly clusterDefinitionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datahub_gcp_cluster#cluster_extension DatahubGcpCluster#cluster_extension}
  */
  readonly clusterExtension?: DatahubGcpClusterClusterExtension;
  /**
  * The name of the cluster template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datahub_gcp_cluster#cluster_template_name DatahubGcpCluster#cluster_template_name}
  */
  readonly clusterTemplateName?: string;
  /**
  * The name of the custom configurations to use for cluster creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datahub_gcp_cluster#custom_configurations_name DatahubGcpCluster#custom_configurations_name}
  */
  readonly customConfigurationsName?: string;
  /**
  * Database type for datahub. Currently supported values: NONE, NON_HA, HA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datahub_gcp_cluster#datahub_database DatahubGcpCluster#datahub_database}
  */
  readonly datahubDatabase?: string;
  /**
  * Cluster deletion options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datahub_gcp_cluster#destroy_options DatahubGcpCluster#destroy_options}
  */
  readonly destroyOptions?: DatahubGcpClusterDestroyOptions;
  /**
  * The name of the environment where the cluster will belong to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datahub_gcp_cluster#environment_name DatahubGcpCluster#environment_name}
  */
  readonly environmentName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datahub_gcp_cluster#image DatahubGcpCluster#image}
  */
  readonly image?: DatahubGcpClusterImage;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datahub_gcp_cluster#instance_group DatahubGcpCluster#instance_group}
  */
  readonly instanceGroup?: DatahubGcpClusterInstanceGroup[] | cdktf.IResolvable;
  /**
  * Configure the major version of Java on the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datahub_gcp_cluster#java_version DatahubGcpCluster#java_version}
  */
  readonly javaVersion?: number;
  /**
  * The name of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datahub_gcp_cluster#name DatahubGcpCluster#name}
  */
  readonly name: string;
  /**
  * Polling related configuration options that could specify various values that will be used during CDP resource creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datahub_gcp_cluster#polling_options DatahubGcpCluster#polling_options}
  */
  readonly pollingOptions?: DatahubGcpClusterPollingOptions;
  /**
  * JSON  template  to  use for cluster creation. This is different from cluster template and would be removed in the future.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datahub_gcp_cluster#request_template DatahubGcpCluster#request_template}
  */
  readonly requestTemplate?: string;
  /**
  * The subnet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datahub_gcp_cluster#subnet_name DatahubGcpCluster#subnet_name}
  */
  readonly subnetName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datahub_gcp_cluster#tags DatahubGcpCluster#tags}
  */
  readonly tags?: { [key: string]: string };
}
export interface DatahubGcpClusterClusterExtension {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datahub_gcp_cluster#custom_properties DatahubGcpCluster#custom_properties}
  */
  readonly customProperties?: string;
}

export function datahubGcpClusterClusterExtensionToTerraform(struct?: DatahubGcpClusterClusterExtension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_properties: cdktf.stringToTerraform(struct!.customProperties),
  }
}


export function datahubGcpClusterClusterExtensionToHclTerraform(struct?: DatahubGcpClusterClusterExtension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_properties: {
      value: cdktf.stringToHclTerraform(struct!.customProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatahubGcpClusterClusterExtensionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatahubGcpClusterClusterExtension | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProperties = this._customProperties;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatahubGcpClusterClusterExtension | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customProperties = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customProperties = value.customProperties;
    }
  }

  // custom_properties - computed: false, optional: true, required: false
  private _customProperties?: string; 
  public get customProperties() {
    return this.getStringAttribute('custom_properties');
  }
  public set customProperties(value: string) {
    this._customProperties = value;
  }
  public resetCustomProperties() {
    this._customProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPropertiesInput() {
    return this._customProperties;
  }
}
export interface DatahubGcpClusterDestroyOptions {
  /**
  * An indicator that will take place once the cluster termination will be performed. If it is true, that means if something would go sideways during termination, the operation will proceed, however in such a case no notification would come thus it is advisable to check the cloud provider if there are no leftover resources once the destroy is finished.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datahub_gcp_cluster#force_delete_cluster DatahubGcpCluster#force_delete_cluster}
  */
  readonly forceDeleteCluster?: boolean | cdktf.IResolvable;
}

export function datahubGcpClusterDestroyOptionsToTerraform(struct?: DatahubGcpClusterDestroyOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    force_delete_cluster: cdktf.booleanToTerraform(struct!.forceDeleteCluster),
  }
}


export function datahubGcpClusterDestroyOptionsToHclTerraform(struct?: DatahubGcpClusterDestroyOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    force_delete_cluster: {
      value: cdktf.booleanToHclTerraform(struct!.forceDeleteCluster),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatahubGcpClusterDestroyOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatahubGcpClusterDestroyOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forceDeleteCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceDeleteCluster = this._forceDeleteCluster;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatahubGcpClusterDestroyOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._forceDeleteCluster = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._forceDeleteCluster = value.forceDeleteCluster;
    }
  }

  // force_delete_cluster - computed: true, optional: true, required: false
  private _forceDeleteCluster?: boolean | cdktf.IResolvable; 
  public get forceDeleteCluster() {
    return this.getBooleanAttribute('force_delete_cluster');
  }
  public set forceDeleteCluster(value: boolean | cdktf.IResolvable) {
    this._forceDeleteCluster = value;
  }
  public resetForceDeleteCluster() {
    this._forceDeleteCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteClusterInput() {
    return this._forceDeleteCluster;
  }
}
export interface DatahubGcpClusterImage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datahub_gcp_cluster#catalog DatahubGcpCluster#catalog}
  */
  readonly catalog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datahub_gcp_cluster#id DatahubGcpCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datahub_gcp_cluster#os DatahubGcpCluster#os}
  */
  readonly os?: string;
}

export function datahubGcpClusterImageToTerraform(struct?: DatahubGcpClusterImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog: cdktf.stringToTerraform(struct!.catalog),
    id: cdktf.stringToTerraform(struct!.id),
    os: cdktf.stringToTerraform(struct!.os),
  }
}


export function datahubGcpClusterImageToHclTerraform(struct?: DatahubGcpClusterImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    catalog: {
      value: cdktf.stringToHclTerraform(struct!.catalog),
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
    os: {
      value: cdktf.stringToHclTerraform(struct!.os),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatahubGcpClusterImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatahubGcpClusterImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalog !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalog = this._catalog;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._os !== undefined) {
      hasAnyValues = true;
      internalValueResult.os = this._os;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatahubGcpClusterImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._catalog = undefined;
      this._id = undefined;
      this._os = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._catalog = value.catalog;
      this._id = value.id;
      this._os = value.os;
    }
  }

  // catalog - computed: false, optional: true, required: false
  private _catalog?: string; 
  public get catalog() {
    return this.getStringAttribute('catalog');
  }
  public set catalog(value: string) {
    this._catalog = value;
  }
  public resetCatalog() {
    this._catalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // os - computed: false, optional: true, required: false
  private _os?: string; 
  public get os() {
    return this.getStringAttribute('os');
  }
  public set os(value: string) {
    this._os = value;
  }
  public resetOs() {
    this._os = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osInput() {
    return this._os;
  }
}
export interface DatahubGcpClusterInstanceGroupAttachedVolumeConfiguration {
  /**
  * The number of volumes to be attached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datahub_gcp_cluster#volume_count DatahubGcpCluster#volume_count}
  */
  readonly volumeCount: number;
  /**
  * The size of the volume in GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datahub_gcp_cluster#volume_size DatahubGcpCluster#volume_size}
  */
  readonly volumeSize: number;
  /**
  * The - cloud provider - type of the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datahub_gcp_cluster#volume_type DatahubGcpCluster#volume_type}
  */
  readonly volumeType: string;
}

export function datahubGcpClusterInstanceGroupAttachedVolumeConfigurationToTerraform(struct?: DatahubGcpClusterInstanceGroupAttachedVolumeConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    volume_count: cdktf.numberToTerraform(struct!.volumeCount),
    volume_size: cdktf.numberToTerraform(struct!.volumeSize),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
  }
}


export function datahubGcpClusterInstanceGroupAttachedVolumeConfigurationToHclTerraform(struct?: DatahubGcpClusterInstanceGroupAttachedVolumeConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    volume_count: {
      value: cdktf.numberToHclTerraform(struct!.volumeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volume_size: {
      value: cdktf.numberToHclTerraform(struct!.volumeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volume_type: {
      value: cdktf.stringToHclTerraform(struct!.volumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatahubGcpClusterInstanceGroupAttachedVolumeConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatahubGcpClusterInstanceGroupAttachedVolumeConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._volumeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeCount = this._volumeCount;
    }
    if (this._volumeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSize = this._volumeSize;
    }
    if (this._volumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeType = this._volumeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatahubGcpClusterInstanceGroupAttachedVolumeConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._volumeCount = undefined;
      this._volumeSize = undefined;
      this._volumeType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._volumeCount = value.volumeCount;
      this._volumeSize = value.volumeSize;
      this._volumeType = value.volumeType;
    }
  }

  // volume_count - computed: false, optional: false, required: true
  private _volumeCount?: number; 
  public get volumeCount() {
    return this.getNumberAttribute('volume_count');
  }
  public set volumeCount(value: number) {
    this._volumeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeCountInput() {
    return this._volumeCount;
  }

  // volume_size - computed: false, optional: false, required: true
  private _volumeSize?: number; 
  public get volumeSize() {
    return this.getNumberAttribute('volume_size');
  }
  public set volumeSize(value: number) {
    this._volumeSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSizeInput() {
    return this._volumeSize;
  }

  // volume_type - computed: false, optional: false, required: true
  private _volumeType?: string; 
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
  public set volumeType(value: string) {
    this._volumeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTypeInput() {
    return this._volumeType;
  }
}

export class DatahubGcpClusterInstanceGroupAttachedVolumeConfigurationList extends cdktf.ComplexList {
  public internalValue? : DatahubGcpClusterInstanceGroupAttachedVolumeConfiguration[] | cdktf.IResolvable

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
  public get(index: number): DatahubGcpClusterInstanceGroupAttachedVolumeConfigurationOutputReference {
    return new DatahubGcpClusterInstanceGroupAttachedVolumeConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatahubGcpClusterInstanceGroup {
  /**
  * Configuration regarding the attached volume to the specific instance group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datahub_gcp_cluster#attached_volume_configuration DatahubGcpCluster#attached_volume_configuration}
  */
  readonly attachedVolumeConfiguration: DatahubGcpClusterInstanceGroupAttachedVolumeConfiguration[] | cdktf.IResolvable;
  /**
  * List of availability zones that this instance group is associated with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datahub_gcp_cluster#availability_zones DatahubGcpCluster#availability_zones}
  */
  readonly availabilityZones?: string[];
  /**
  * The name of the instance group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datahub_gcp_cluster#instance_group_name DatahubGcpCluster#instance_group_name}
  */
  readonly instanceGroupName: string;
  /**
  * The type of the instance group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datahub_gcp_cluster#instance_group_type DatahubGcpCluster#instance_group_type}
  */
  readonly instanceGroupType: string;
  /**
  * The cloud provider-side instance type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datahub_gcp_cluster#instance_type DatahubGcpCluster#instance_type}
  */
  readonly instanceType: string;
  /**
  * The cluster node count. Has to be greater or equal than 0 and less than 100,000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datahub_gcp_cluster#node_count DatahubGcpCluster#node_count}
  */
  readonly nodeCount: number;
  /**
  * The set of recipe names that are going to be applied on the given instance group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datahub_gcp_cluster#recipes DatahubGcpCluster#recipes}
  */
  readonly recipes?: string[];
  /**
  * The type of the recovery mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datahub_gcp_cluster#recovery_mode DatahubGcpCluster#recovery_mode}
  */
  readonly recoveryMode: string;
  /**
  * The size of the root volume in GB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datahub_gcp_cluster#root_volume_size DatahubGcpCluster#root_volume_size}
  */
  readonly rootVolumeSize: number;
}

export function datahubGcpClusterInstanceGroupToTerraform(struct?: DatahubGcpClusterInstanceGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attached_volume_configuration: cdktf.listMapper(datahubGcpClusterInstanceGroupAttachedVolumeConfigurationToTerraform, false)(struct!.attachedVolumeConfiguration),
    availability_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.availabilityZones),
    instance_group_name: cdktf.stringToTerraform(struct!.instanceGroupName),
    instance_group_type: cdktf.stringToTerraform(struct!.instanceGroupType),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    node_count: cdktf.numberToTerraform(struct!.nodeCount),
    recipes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.recipes),
    recovery_mode: cdktf.stringToTerraform(struct!.recoveryMode),
    root_volume_size: cdktf.numberToTerraform(struct!.rootVolumeSize),
  }
}


export function datahubGcpClusterInstanceGroupToHclTerraform(struct?: DatahubGcpClusterInstanceGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attached_volume_configuration: {
      value: cdktf.listMapperHcl(datahubGcpClusterInstanceGroupAttachedVolumeConfigurationToHclTerraform, false)(struct!.attachedVolumeConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "DatahubGcpClusterInstanceGroupAttachedVolumeConfigurationList",
    },
    availability_zones: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.availabilityZones),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    instance_group_name: {
      value: cdktf.stringToHclTerraform(struct!.instanceGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_group_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceGroupType),
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
    node_count: {
      value: cdktf.numberToHclTerraform(struct!.nodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recipes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.recipes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    recovery_mode: {
      value: cdktf.stringToHclTerraform(struct!.recoveryMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_volume_size: {
      value: cdktf.numberToHclTerraform(struct!.rootVolumeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatahubGcpClusterInstanceGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatahubGcpClusterInstanceGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attachedVolumeConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attachedVolumeConfiguration = this._attachedVolumeConfiguration?.internalValue;
    }
    if (this._availabilityZones !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZones = this._availabilityZones;
    }
    if (this._instanceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceGroupName = this._instanceGroupName;
    }
    if (this._instanceGroupType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceGroupType = this._instanceGroupType;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._nodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeCount = this._nodeCount;
    }
    if (this._recipes !== undefined) {
      hasAnyValues = true;
      internalValueResult.recipes = this._recipes;
    }
    if (this._recoveryMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoveryMode = this._recoveryMode;
    }
    if (this._rootVolumeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootVolumeSize = this._rootVolumeSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatahubGcpClusterInstanceGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attachedVolumeConfiguration.internalValue = undefined;
      this._availabilityZones = undefined;
      this._instanceGroupName = undefined;
      this._instanceGroupType = undefined;
      this._instanceType = undefined;
      this._nodeCount = undefined;
      this._recipes = undefined;
      this._recoveryMode = undefined;
      this._rootVolumeSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attachedVolumeConfiguration.internalValue = value.attachedVolumeConfiguration;
      this._availabilityZones = value.availabilityZones;
      this._instanceGroupName = value.instanceGroupName;
      this._instanceGroupType = value.instanceGroupType;
      this._instanceType = value.instanceType;
      this._nodeCount = value.nodeCount;
      this._recipes = value.recipes;
      this._recoveryMode = value.recoveryMode;
      this._rootVolumeSize = value.rootVolumeSize;
    }
  }

  // attached_volume_configuration - computed: false, optional: false, required: true
  private _attachedVolumeConfiguration = new DatahubGcpClusterInstanceGroupAttachedVolumeConfigurationList(this, "attached_volume_configuration", false);
  public get attachedVolumeConfiguration() {
    return this._attachedVolumeConfiguration;
  }
  public putAttachedVolumeConfiguration(value: DatahubGcpClusterInstanceGroupAttachedVolumeConfiguration[] | cdktf.IResolvable) {
    this._attachedVolumeConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attachedVolumeConfigurationInput() {
    return this._attachedVolumeConfiguration.internalValue;
  }

  // availability_zones - computed: false, optional: true, required: false
  private _availabilityZones?: string[]; 
  public get availabilityZones() {
    return cdktf.Fn.tolist(this.getListAttribute('availability_zones'));
  }
  public set availabilityZones(value: string[]) {
    this._availabilityZones = value;
  }
  public resetAvailabilityZones() {
    this._availabilityZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZonesInput() {
    return this._availabilityZones;
  }

  // instance_group_name - computed: false, optional: false, required: true
  private _instanceGroupName?: string; 
  public get instanceGroupName() {
    return this.getStringAttribute('instance_group_name');
  }
  public set instanceGroupName(value: string) {
    this._instanceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceGroupNameInput() {
    return this._instanceGroupName;
  }

  // instance_group_type - computed: false, optional: false, required: true
  private _instanceGroupType?: string; 
  public get instanceGroupType() {
    return this.getStringAttribute('instance_group_type');
  }
  public set instanceGroupType(value: string) {
    this._instanceGroupType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceGroupTypeInput() {
    return this._instanceGroupType;
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

  // node_count - computed: false, optional: false, required: true
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }

  // recipes - computed: false, optional: true, required: false
  private _recipes?: string[]; 
  public get recipes() {
    return cdktf.Fn.tolist(this.getListAttribute('recipes'));
  }
  public set recipes(value: string[]) {
    this._recipes = value;
  }
  public resetRecipes() {
    this._recipes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recipesInput() {
    return this._recipes;
  }

  // recovery_mode - computed: false, optional: false, required: true
  private _recoveryMode?: string; 
  public get recoveryMode() {
    return this.getStringAttribute('recovery_mode');
  }
  public set recoveryMode(value: string) {
    this._recoveryMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryModeInput() {
    return this._recoveryMode;
  }

  // root_volume_size - computed: false, optional: false, required: true
  private _rootVolumeSize?: number; 
  public get rootVolumeSize() {
    return this.getNumberAttribute('root_volume_size');
  }
  public set rootVolumeSize(value: number) {
    this._rootVolumeSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rootVolumeSizeInput() {
    return this._rootVolumeSize;
  }
}

export class DatahubGcpClusterInstanceGroupList extends cdktf.ComplexList {
  public internalValue? : DatahubGcpClusterInstanceGroup[] | cdktf.IResolvable

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
  public get(index: number): DatahubGcpClusterInstanceGroupOutputReference {
    return new DatahubGcpClusterInstanceGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatahubGcpClusterPollingOptions {
  /**
  * Threshold value that specifies how many times should a single call failure happen before giving up the polling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datahub_gcp_cluster#call_failure_threshold DatahubGcpCluster#call_failure_threshold}
  */
  readonly callFailureThreshold?: number;
  /**
  * Timeout value in minutes that specifies for how long should the polling go for resource creation/deletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datahub_gcp_cluster#polling_timeout DatahubGcpCluster#polling_timeout}
  */
  readonly pollingTimeout?: number;
}

export function datahubGcpClusterPollingOptionsToTerraform(struct?: DatahubGcpClusterPollingOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    call_failure_threshold: cdktf.numberToTerraform(struct!.callFailureThreshold),
    polling_timeout: cdktf.numberToTerraform(struct!.pollingTimeout),
  }
}


export function datahubGcpClusterPollingOptionsToHclTerraform(struct?: DatahubGcpClusterPollingOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    call_failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.callFailureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    polling_timeout: {
      value: cdktf.numberToHclTerraform(struct!.pollingTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatahubGcpClusterPollingOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatahubGcpClusterPollingOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._callFailureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.callFailureThreshold = this._callFailureThreshold;
    }
    if (this._pollingTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.pollingTimeout = this._pollingTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatahubGcpClusterPollingOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._callFailureThreshold = undefined;
      this._pollingTimeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._callFailureThreshold = value.callFailureThreshold;
      this._pollingTimeout = value.pollingTimeout;
    }
  }

  // call_failure_threshold - computed: true, optional: true, required: false
  private _callFailureThreshold?: number; 
  public get callFailureThreshold() {
    return this.getNumberAttribute('call_failure_threshold');
  }
  public set callFailureThreshold(value: number) {
    this._callFailureThreshold = value;
  }
  public resetCallFailureThreshold() {
    this._callFailureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callFailureThresholdInput() {
    return this._callFailureThreshold;
  }

  // polling_timeout - computed: true, optional: true, required: false
  private _pollingTimeout?: number; 
  public get pollingTimeout() {
    return this.getNumberAttribute('polling_timeout');
  }
  public set pollingTimeout(value: number) {
    this._pollingTimeout = value;
  }
  public resetPollingTimeout() {
    this._pollingTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollingTimeoutInput() {
    return this._pollingTimeout;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datahub_gcp_cluster cdp_datahub_gcp_cluster}
*/
export class DatahubGcpCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cdp_datahub_gcp_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatahubGcpCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatahubGcpCluster to import
  * @param importFromId The id of the existing DatahubGcpCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datahub_gcp_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatahubGcpCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cdp_datahub_gcp_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/datahub_gcp_cluster cdp_datahub_gcp_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatahubGcpClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DatahubGcpClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'cdp_datahub_gcp_cluster',
      terraformGeneratorMetadata: {
        providerName: 'cdp',
        providerVersion: '0.10.8',
        providerVersionConstraint: '0.10.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterDefinitionName = config.clusterDefinitionName;
    this._clusterExtension.internalValue = config.clusterExtension;
    this._clusterTemplateName = config.clusterTemplateName;
    this._customConfigurationsName = config.customConfigurationsName;
    this._datahubDatabase = config.datahubDatabase;
    this._destroyOptions.internalValue = config.destroyOptions;
    this._environmentName = config.environmentName;
    this._image.internalValue = config.image;
    this._instanceGroup.internalValue = config.instanceGroup;
    this._javaVersion = config.javaVersion;
    this._name = config.name;
    this._pollingOptions.internalValue = config.pollingOptions;
    this._requestTemplate = config.requestTemplate;
    this._subnetName = config.subnetName;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_definition_name - computed: false, optional: true, required: false
  private _clusterDefinitionName?: string; 
  public get clusterDefinitionName() {
    return this.getStringAttribute('cluster_definition_name');
  }
  public set clusterDefinitionName(value: string) {
    this._clusterDefinitionName = value;
  }
  public resetClusterDefinitionName() {
    this._clusterDefinitionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDefinitionNameInput() {
    return this._clusterDefinitionName;
  }

  // cluster_extension - computed: false, optional: true, required: false
  private _clusterExtension = new DatahubGcpClusterClusterExtensionOutputReference(this, "cluster_extension");
  public get clusterExtension() {
    return this._clusterExtension;
  }
  public putClusterExtension(value: DatahubGcpClusterClusterExtension) {
    this._clusterExtension.internalValue = value;
  }
  public resetClusterExtension() {
    this._clusterExtension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterExtensionInput() {
    return this._clusterExtension.internalValue;
  }

  // cluster_template_name - computed: false, optional: true, required: false
  private _clusterTemplateName?: string; 
  public get clusterTemplateName() {
    return this.getStringAttribute('cluster_template_name');
  }
  public set clusterTemplateName(value: string) {
    this._clusterTemplateName = value;
  }
  public resetClusterTemplateName() {
    this._clusterTemplateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTemplateNameInput() {
    return this._clusterTemplateName;
  }

  // crn - computed: true, optional: false, required: false
  public get crn() {
    return this.getStringAttribute('crn');
  }

  // custom_configurations_name - computed: false, optional: true, required: false
  private _customConfigurationsName?: string; 
  public get customConfigurationsName() {
    return this.getStringAttribute('custom_configurations_name');
  }
  public set customConfigurationsName(value: string) {
    this._customConfigurationsName = value;
  }
  public resetCustomConfigurationsName() {
    this._customConfigurationsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customConfigurationsNameInput() {
    return this._customConfigurationsName;
  }

  // datahub_database - computed: false, optional: true, required: false
  private _datahubDatabase?: string; 
  public get datahubDatabase() {
    return this.getStringAttribute('datahub_database');
  }
  public set datahubDatabase(value: string) {
    this._datahubDatabase = value;
  }
  public resetDatahubDatabase() {
    this._datahubDatabase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datahubDatabaseInput() {
    return this._datahubDatabase;
  }

  // destroy_options - computed: false, optional: true, required: false
  private _destroyOptions = new DatahubGcpClusterDestroyOptionsOutputReference(this, "destroy_options");
  public get destroyOptions() {
    return this._destroyOptions;
  }
  public putDestroyOptions(value: DatahubGcpClusterDestroyOptions) {
    this._destroyOptions.internalValue = value;
  }
  public resetDestroyOptions() {
    this._destroyOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destroyOptionsInput() {
    return this._destroyOptions.internalValue;
  }

  // environment_name - computed: false, optional: false, required: true
  private _environmentName?: string; 
  public get environmentName() {
    return this.getStringAttribute('environment_name');
  }
  public set environmentName(value: string) {
    this._environmentName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentNameInput() {
    return this._environmentName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image - computed: false, optional: true, required: false
  private _image = new DatahubGcpClusterImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }
  public putImage(value: DatahubGcpClusterImage) {
    this._image.internalValue = value;
  }
  public resetImage() {
    this._image.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }

  // instance_group - computed: false, optional: true, required: false
  private _instanceGroup = new DatahubGcpClusterInstanceGroupList(this, "instance_group", false);
  public get instanceGroup() {
    return this._instanceGroup;
  }
  public putInstanceGroup(value: DatahubGcpClusterInstanceGroup[] | cdktf.IResolvable) {
    this._instanceGroup.internalValue = value;
  }
  public resetInstanceGroup() {
    this._instanceGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceGroupInput() {
    return this._instanceGroup.internalValue;
  }

  // java_version - computed: false, optional: true, required: false
  private _javaVersion?: number; 
  public get javaVersion() {
    return this.getNumberAttribute('java_version');
  }
  public set javaVersion(value: number) {
    this._javaVersion = value;
  }
  public resetJavaVersion() {
    this._javaVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javaVersionInput() {
    return this._javaVersion;
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

  // polling_options - computed: false, optional: true, required: false
  private _pollingOptions = new DatahubGcpClusterPollingOptionsOutputReference(this, "polling_options");
  public get pollingOptions() {
    return this._pollingOptions;
  }
  public putPollingOptions(value: DatahubGcpClusterPollingOptions) {
    this._pollingOptions.internalValue = value;
  }
  public resetPollingOptions() {
    this._pollingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollingOptionsInput() {
    return this._pollingOptions.internalValue;
  }

  // request_template - computed: false, optional: true, required: false
  private _requestTemplate?: string; 
  public get requestTemplate() {
    return this.getStringAttribute('request_template');
  }
  public set requestTemplate(value: string) {
    this._requestTemplate = value;
  }
  public resetRequestTemplate() {
    this._requestTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTemplateInput() {
    return this._requestTemplate;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnet_name - computed: false, optional: true, required: false
  private _subnetName?: string; 
  public get subnetName() {
    return this.getStringAttribute('subnet_name');
  }
  public set subnetName(value: string) {
    this._subnetName = value;
  }
  public resetSubnetName() {
    this._subnetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetNameInput() {
    return this._subnetName;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_definition_name: cdktf.stringToTerraform(this._clusterDefinitionName),
      cluster_extension: datahubGcpClusterClusterExtensionToTerraform(this._clusterExtension.internalValue),
      cluster_template_name: cdktf.stringToTerraform(this._clusterTemplateName),
      custom_configurations_name: cdktf.stringToTerraform(this._customConfigurationsName),
      datahub_database: cdktf.stringToTerraform(this._datahubDatabase),
      destroy_options: datahubGcpClusterDestroyOptionsToTerraform(this._destroyOptions.internalValue),
      environment_name: cdktf.stringToTerraform(this._environmentName),
      image: datahubGcpClusterImageToTerraform(this._image.internalValue),
      instance_group: cdktf.listMapper(datahubGcpClusterInstanceGroupToTerraform, false)(this._instanceGroup.internalValue),
      java_version: cdktf.numberToTerraform(this._javaVersion),
      name: cdktf.stringToTerraform(this._name),
      polling_options: datahubGcpClusterPollingOptionsToTerraform(this._pollingOptions.internalValue),
      request_template: cdktf.stringToTerraform(this._requestTemplate),
      subnet_name: cdktf.stringToTerraform(this._subnetName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_definition_name: {
        value: cdktf.stringToHclTerraform(this._clusterDefinitionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_extension: {
        value: datahubGcpClusterClusterExtensionToHclTerraform(this._clusterExtension.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatahubGcpClusterClusterExtension",
      },
      cluster_template_name: {
        value: cdktf.stringToHclTerraform(this._clusterTemplateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_configurations_name: {
        value: cdktf.stringToHclTerraform(this._customConfigurationsName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      datahub_database: {
        value: cdktf.stringToHclTerraform(this._datahubDatabase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destroy_options: {
        value: datahubGcpClusterDestroyOptionsToHclTerraform(this._destroyOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatahubGcpClusterDestroyOptions",
      },
      environment_name: {
        value: cdktf.stringToHclTerraform(this._environmentName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image: {
        value: datahubGcpClusterImageToHclTerraform(this._image.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatahubGcpClusterImage",
      },
      instance_group: {
        value: cdktf.listMapperHcl(datahubGcpClusterInstanceGroupToHclTerraform, false)(this._instanceGroup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatahubGcpClusterInstanceGroupList",
      },
      java_version: {
        value: cdktf.numberToHclTerraform(this._javaVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      polling_options: {
        value: datahubGcpClusterPollingOptionsToHclTerraform(this._pollingOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatahubGcpClusterPollingOptions",
      },
      request_template: {
        value: cdktf.stringToHclTerraform(this._requestTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_name: {
        value: cdktf.stringToHclTerraform(this._subnetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
