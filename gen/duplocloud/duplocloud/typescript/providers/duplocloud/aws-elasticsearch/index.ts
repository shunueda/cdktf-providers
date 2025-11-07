// https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_elasticsearch
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsElasticsearchConfig extends cdktf.TerraformMetaArguments {
  /**
  * The version of the ElasticSearch instance. Defaults to `7.9`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_elasticsearch#elasticsearch_version AwsElasticsearch#elasticsearch_version}
  */
  readonly elasticsearchVersion?: string;
  /**
  * Whether or not to use the enable node-to-node encryption for this ElasticSearch instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_elasticsearch#enable_node_to_node_encryption AwsElasticsearch#enable_node_to_node_encryption}
  */
  readonly enableNodeToNodeEncryption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_elasticsearch#id AwsElasticsearch#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The short name of the ElasticSearch instance.  Duplo will add a prefix to the name.  You can retrieve the full name from the `domain_name` attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_elasticsearch#name AwsElasticsearch#name}
  */
  readonly name: string;
  /**
  * Whether or not to require SSL for accessing this ElasticSearch instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_elasticsearch#require_ssl AwsElasticsearch#require_ssl}
  */
  readonly requireSsl?: boolean | cdktf.IResolvable;
  /**
  * The numerical index of the zone to launch this ElasticSearch instance in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_elasticsearch#selected_zone AwsElasticsearch#selected_zone}
  */
  readonly selectedZone?: number;
  /**
  * The storage volume size, in GB, for the ElasticSearch instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_elasticsearch#storage_size AwsElasticsearch#storage_size}
  */
  readonly storageSize?: number;
  /**
  * The GUID of the tenant that the ElasticSearch instance will be created in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_elasticsearch#tenant_id AwsElasticsearch#tenant_id}
  */
  readonly tenantId: string;
  /**
  * Whether or not to use the latest TLS cipher for this ElasticSearch instance. For govcloud environments this should be set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_elasticsearch#use_latest_tls_cipher AwsElasticsearch#use_latest_tls_cipher}
  */
  readonly useLatestTlsCipher?: boolean | cdktf.IResolvable;
  /**
  * cluster_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_elasticsearch#cluster_config AwsElasticsearch#cluster_config}
  */
  readonly clusterConfig?: AwsElasticsearchClusterConfig;
  /**
  * encrypt_at_rest block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_elasticsearch#encrypt_at_rest AwsElasticsearch#encrypt_at_rest}
  */
  readonly encryptAtRest?: AwsElasticsearchEncryptAtRest;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_elasticsearch#timeouts AwsElasticsearch#timeouts}
  */
  readonly timeouts?: AwsElasticsearchTimeouts;
  /**
  * vpc_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_elasticsearch#vpc_options AwsElasticsearch#vpc_options}
  */
  readonly vpcOptions?: AwsElasticsearchVpcOptions[] | cdktf.IResolvable;
}
export interface AwsElasticsearchEbsOptions {
}

export function awsElasticsearchEbsOptionsToTerraform(struct?: AwsElasticsearchEbsOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function awsElasticsearchEbsOptionsToHclTerraform(struct?: AwsElasticsearchEbsOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AwsElasticsearchEbsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AwsElasticsearchEbsOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsElasticsearchEbsOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ebs_enabled - computed: true, optional: false, required: false
  public get ebsEnabled() {
    return this.getBooleanAttribute('ebs_enabled');
  }

  // iops - computed: true, optional: false, required: false
  public get iops() {
    return this.getNumberAttribute('iops');
  }

  // volume_size - computed: true, optional: false, required: false
  public get volumeSize() {
    return this.getNumberAttribute('volume_size');
  }

  // volume_type - computed: true, optional: false, required: false
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
}

export class AwsElasticsearchEbsOptionsList extends cdktf.ComplexList {

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
  public get(index: number): AwsElasticsearchEbsOptionsOutputReference {
    return new AwsElasticsearchEbsOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsElasticsearchSnapshotOptions {
}

export function awsElasticsearchSnapshotOptionsToTerraform(struct?: AwsElasticsearchSnapshotOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function awsElasticsearchSnapshotOptionsToHclTerraform(struct?: AwsElasticsearchSnapshotOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AwsElasticsearchSnapshotOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AwsElasticsearchSnapshotOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsElasticsearchSnapshotOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // automated_snapshot_start_hour - computed: true, optional: false, required: false
  public get automatedSnapshotStartHour() {
    return this.getNumberAttribute('automated_snapshot_start_hour');
  }
}

export class AwsElasticsearchSnapshotOptionsList extends cdktf.ComplexList {

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
  public get(index: number): AwsElasticsearchSnapshotOptionsOutputReference {
    return new AwsElasticsearchSnapshotOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsElasticsearchClusterConfigColdStorageOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_elasticsearch#enabled AwsElasticsearch#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function awsElasticsearchClusterConfigColdStorageOptionsToTerraform(struct?: AwsElasticsearchClusterConfigColdStorageOptionsOutputReference | AwsElasticsearchClusterConfigColdStorageOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function awsElasticsearchClusterConfigColdStorageOptionsToHclTerraform(struct?: AwsElasticsearchClusterConfigColdStorageOptionsOutputReference | AwsElasticsearchClusterConfigColdStorageOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsElasticsearchClusterConfigColdStorageOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsElasticsearchClusterConfigColdStorageOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsElasticsearchClusterConfigColdStorageOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface AwsElasticsearchClusterConfig {
  /**
  * Defaults to `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_elasticsearch#dedicated_master_count AwsElasticsearch#dedicated_master_count}
  */
  readonly dedicatedMasterCount?: number;
  /**
  * Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_elasticsearch#dedicated_master_enabled AwsElasticsearch#dedicated_master_enabled}
  */
  readonly dedicatedMasterEnabled?: boolean | cdktf.IResolvable;
  /**
  * Defaults to `t2.small.elasticsearch`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_elasticsearch#dedicated_master_type AwsElasticsearch#dedicated_master_type}
  */
  readonly dedicatedMasterType?: string;
  /**
  * Defaults to `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_elasticsearch#instance_count AwsElasticsearch#instance_count}
  */
  readonly instanceCount?: number;
  /**
  * Defaults to `t2.small.elasticsearch`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_elasticsearch#instance_type AwsElasticsearch#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_elasticsearch#multi_az_with_standby_enabled AwsElasticsearch#multi_az_with_standby_enabled}
  */
  readonly multiAzWithStandbyEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_elasticsearch#warm_count AwsElasticsearch#warm_count}
  */
  readonly warmCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_elasticsearch#warm_enabled AwsElasticsearch#warm_enabled}
  */
  readonly warmEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_elasticsearch#warm_type AwsElasticsearch#warm_type}
  */
  readonly warmType?: string;
  /**
  * cold_storage_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_elasticsearch#cold_storage_options AwsElasticsearch#cold_storage_options}
  */
  readonly coldStorageOptions?: AwsElasticsearchClusterConfigColdStorageOptions;
}

export function awsElasticsearchClusterConfigToTerraform(struct?: AwsElasticsearchClusterConfigOutputReference | AwsElasticsearchClusterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dedicated_master_count: cdktf.numberToTerraform(struct!.dedicatedMasterCount),
    dedicated_master_enabled: cdktf.booleanToTerraform(struct!.dedicatedMasterEnabled),
    dedicated_master_type: cdktf.stringToTerraform(struct!.dedicatedMasterType),
    instance_count: cdktf.numberToTerraform(struct!.instanceCount),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    multi_az_with_standby_enabled: cdktf.booleanToTerraform(struct!.multiAzWithStandbyEnabled),
    warm_count: cdktf.numberToTerraform(struct!.warmCount),
    warm_enabled: cdktf.booleanToTerraform(struct!.warmEnabled),
    warm_type: cdktf.stringToTerraform(struct!.warmType),
    cold_storage_options: awsElasticsearchClusterConfigColdStorageOptionsToTerraform(struct!.coldStorageOptions),
  }
}


export function awsElasticsearchClusterConfigToHclTerraform(struct?: AwsElasticsearchClusterConfigOutputReference | AwsElasticsearchClusterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dedicated_master_count: {
      value: cdktf.numberToHclTerraform(struct!.dedicatedMasterCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dedicated_master_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.dedicatedMasterEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dedicated_master_type: {
      value: cdktf.stringToHclTerraform(struct!.dedicatedMasterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_count: {
      value: cdktf.numberToHclTerraform(struct!.instanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multi_az_with_standby_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.multiAzWithStandbyEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    warm_count: {
      value: cdktf.numberToHclTerraform(struct!.warmCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    warm_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.warmEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    warm_type: {
      value: cdktf.stringToHclTerraform(struct!.warmType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cold_storage_options: {
      value: awsElasticsearchClusterConfigColdStorageOptionsToHclTerraform(struct!.coldStorageOptions),
      isBlock: true,
      type: "list",
      storageClassType: "AwsElasticsearchClusterConfigColdStorageOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsElasticsearchClusterConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsElasticsearchClusterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dedicatedMasterCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.dedicatedMasterCount = this._dedicatedMasterCount;
    }
    if (this._dedicatedMasterEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.dedicatedMasterEnabled = this._dedicatedMasterEnabled;
    }
    if (this._dedicatedMasterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dedicatedMasterType = this._dedicatedMasterType;
    }
    if (this._instanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceCount = this._instanceCount;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._multiAzWithStandbyEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiAzWithStandbyEnabled = this._multiAzWithStandbyEnabled;
    }
    if (this._warmCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.warmCount = this._warmCount;
    }
    if (this._warmEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.warmEnabled = this._warmEnabled;
    }
    if (this._warmType !== undefined) {
      hasAnyValues = true;
      internalValueResult.warmType = this._warmType;
    }
    if (this._coldStorageOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.coldStorageOptions = this._coldStorageOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsElasticsearchClusterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dedicatedMasterCount = undefined;
      this._dedicatedMasterEnabled = undefined;
      this._dedicatedMasterType = undefined;
      this._instanceCount = undefined;
      this._instanceType = undefined;
      this._multiAzWithStandbyEnabled = undefined;
      this._warmCount = undefined;
      this._warmEnabled = undefined;
      this._warmType = undefined;
      this._coldStorageOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dedicatedMasterCount = value.dedicatedMasterCount;
      this._dedicatedMasterEnabled = value.dedicatedMasterEnabled;
      this._dedicatedMasterType = value.dedicatedMasterType;
      this._instanceCount = value.instanceCount;
      this._instanceType = value.instanceType;
      this._multiAzWithStandbyEnabled = value.multiAzWithStandbyEnabled;
      this._warmCount = value.warmCount;
      this._warmEnabled = value.warmEnabled;
      this._warmType = value.warmType;
      this._coldStorageOptions.internalValue = value.coldStorageOptions;
    }
  }

  // dedicated_master_count - computed: false, optional: true, required: false
  private _dedicatedMasterCount?: number; 
  public get dedicatedMasterCount() {
    return this.getNumberAttribute('dedicated_master_count');
  }
  public set dedicatedMasterCount(value: number) {
    this._dedicatedMasterCount = value;
  }
  public resetDedicatedMasterCount() {
    this._dedicatedMasterCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedMasterCountInput() {
    return this._dedicatedMasterCount;
  }

  // dedicated_master_enabled - computed: false, optional: true, required: false
  private _dedicatedMasterEnabled?: boolean | cdktf.IResolvable; 
  public get dedicatedMasterEnabled() {
    return this.getBooleanAttribute('dedicated_master_enabled');
  }
  public set dedicatedMasterEnabled(value: boolean | cdktf.IResolvable) {
    this._dedicatedMasterEnabled = value;
  }
  public resetDedicatedMasterEnabled() {
    this._dedicatedMasterEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedMasterEnabledInput() {
    return this._dedicatedMasterEnabled;
  }

  // dedicated_master_type - computed: false, optional: true, required: false
  private _dedicatedMasterType?: string; 
  public get dedicatedMasterType() {
    return this.getStringAttribute('dedicated_master_type');
  }
  public set dedicatedMasterType(value: string) {
    this._dedicatedMasterType = value;
  }
  public resetDedicatedMasterType() {
    this._dedicatedMasterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedMasterTypeInput() {
    return this._dedicatedMasterType;
  }

  // instance_count - computed: false, optional: true, required: false
  private _instanceCount?: number; 
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }
  public set instanceCount(value: number) {
    this._instanceCount = value;
  }
  public resetInstanceCount() {
    this._instanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount;
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

  // multi_az_with_standby_enabled - computed: false, optional: true, required: false
  private _multiAzWithStandbyEnabled?: boolean | cdktf.IResolvable; 
  public get multiAzWithStandbyEnabled() {
    return this.getBooleanAttribute('multi_az_with_standby_enabled');
  }
  public set multiAzWithStandbyEnabled(value: boolean | cdktf.IResolvable) {
    this._multiAzWithStandbyEnabled = value;
  }
  public resetMultiAzWithStandbyEnabled() {
    this._multiAzWithStandbyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiAzWithStandbyEnabledInput() {
    return this._multiAzWithStandbyEnabled;
  }

  // warm_count - computed: false, optional: true, required: false
  private _warmCount?: number; 
  public get warmCount() {
    return this.getNumberAttribute('warm_count');
  }
  public set warmCount(value: number) {
    this._warmCount = value;
  }
  public resetWarmCount() {
    this._warmCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warmCountInput() {
    return this._warmCount;
  }

  // warm_enabled - computed: false, optional: true, required: false
  private _warmEnabled?: boolean | cdktf.IResolvable; 
  public get warmEnabled() {
    return this.getBooleanAttribute('warm_enabled');
  }
  public set warmEnabled(value: boolean | cdktf.IResolvable) {
    this._warmEnabled = value;
  }
  public resetWarmEnabled() {
    this._warmEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warmEnabledInput() {
    return this._warmEnabled;
  }

  // warm_type - computed: false, optional: true, required: false
  private _warmType?: string; 
  public get warmType() {
    return this.getStringAttribute('warm_type');
  }
  public set warmType(value: string) {
    this._warmType = value;
  }
  public resetWarmType() {
    this._warmType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warmTypeInput() {
    return this._warmType;
  }

  // cold_storage_options - computed: false, optional: true, required: false
  private _coldStorageOptions = new AwsElasticsearchClusterConfigColdStorageOptionsOutputReference(this, "cold_storage_options");
  public get coldStorageOptions() {
    return this._coldStorageOptions;
  }
  public putColdStorageOptions(value: AwsElasticsearchClusterConfigColdStorageOptions) {
    this._coldStorageOptions.internalValue = value;
  }
  public resetColdStorageOptions() {
    this._coldStorageOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coldStorageOptionsInput() {
    return this._coldStorageOptions.internalValue;
  }
}
export interface AwsElasticsearchEncryptAtRest {
  /**
  * The ID of a KMS key to use with the ElasticSearch instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_elasticsearch#kms_key_id AwsElasticsearch#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * The name of a KMS key to use with the ElasticSearch instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_elasticsearch#kms_key_name AwsElasticsearch#kms_key_name}
  */
  readonly kmsKeyName?: string;
}

export function awsElasticsearchEncryptAtRestToTerraform(struct?: AwsElasticsearchEncryptAtRestOutputReference | AwsElasticsearchEncryptAtRest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    kms_key_name: cdktf.stringToTerraform(struct!.kmsKeyName),
  }
}


export function awsElasticsearchEncryptAtRestToHclTerraform(struct?: AwsElasticsearchEncryptAtRestOutputReference | AwsElasticsearchEncryptAtRest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_name: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsElasticsearchEncryptAtRestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsElasticsearchEncryptAtRest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsElasticsearchEncryptAtRest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyId = undefined;
      this._kmsKeyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyId = value.kmsKeyId;
      this._kmsKeyName = value.kmsKeyName;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // kms_key_name - computed: true, optional: true, required: false
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  public resetKmsKeyName() {
    this._kmsKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
  }
}
export interface AwsElasticsearchTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_elasticsearch#create AwsElasticsearch#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_elasticsearch#delete AwsElasticsearch#delete}
  */
  readonly delete?: string;
}

export function awsElasticsearchTimeoutsToTerraform(struct?: AwsElasticsearchTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function awsElasticsearchTimeoutsToHclTerraform(struct?: AwsElasticsearchTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsElasticsearchTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AwsElasticsearchTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsElasticsearchTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}
export interface AwsElasticsearchVpcOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_elasticsearch#subnet_ids AwsElasticsearch#subnet_ids}
  */
  readonly subnetIds?: string[];
}

export function awsElasticsearchVpcOptionsToTerraform(struct?: AwsElasticsearchVpcOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnetIds),
  }
}


export function awsElasticsearchVpcOptionsToHclTerraform(struct?: AwsElasticsearchVpcOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subnet_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnetIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsElasticsearchVpcOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AwsElasticsearchVpcOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsElasticsearchVpcOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._subnetIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._subnetIds = value.subnetIds;
    }
  }

  // availability_zones - computed: true, optional: false, required: false
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }

  // subnet_ids - computed: true, optional: true, required: false
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

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
}

export class AwsElasticsearchVpcOptionsList extends cdktf.ComplexList {
  public internalValue? : AwsElasticsearchVpcOptions[] | cdktf.IResolvable

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
  public get(index: number): AwsElasticsearchVpcOptionsOutputReference {
    return new AwsElasticsearchVpcOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_elasticsearch duplocloud_aws_elasticsearch}
*/
export class AwsElasticsearch extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "duplocloud_aws_elasticsearch";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsElasticsearch resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsElasticsearch to import
  * @param importFromId The id of the existing AwsElasticsearch that should be imported. Refer to the {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_elasticsearch#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsElasticsearch to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "duplocloud_aws_elasticsearch", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_elasticsearch duplocloud_aws_elasticsearch} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsElasticsearchConfig
  */
  public constructor(scope: Construct, id: string, config: AwsElasticsearchConfig) {
    super(scope, id, {
      terraformResourceType: 'duplocloud_aws_elasticsearch',
      terraformGeneratorMetadata: {
        providerName: 'duplocloud',
        providerVersion: '0.11.28'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._elasticsearchVersion = config.elasticsearchVersion;
    this._enableNodeToNodeEncryption = config.enableNodeToNodeEncryption;
    this._id = config.id;
    this._name = config.name;
    this._requireSsl = config.requireSsl;
    this._selectedZone = config.selectedZone;
    this._storageSize = config.storageSize;
    this._tenantId = config.tenantId;
    this._useLatestTlsCipher = config.useLatestTlsCipher;
    this._clusterConfig.internalValue = config.clusterConfig;
    this._encryptAtRest.internalValue = config.encryptAtRest;
    this._timeouts.internalValue = config.timeouts;
    this._vpcOptions.internalValue = config.vpcOptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_policies - computed: true, optional: false, required: false
  public get accessPolicies() {
    return this.getStringAttribute('access_policies');
  }

  // advanced_options - computed: true, optional: false, required: false
  private _advancedOptions = new cdktf.StringMap(this, "advanced_options");
  public get advancedOptions() {
    return this._advancedOptions;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // domain_id - computed: true, optional: false, required: false
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // ebs_options - computed: true, optional: false, required: false
  private _ebsOptions = new AwsElasticsearchEbsOptionsList(this, "ebs_options", false);
  public get ebsOptions() {
    return this._ebsOptions;
  }

  // elasticsearch_version - computed: false, optional: true, required: false
  private _elasticsearchVersion?: string; 
  public get elasticsearchVersion() {
    return this.getStringAttribute('elasticsearch_version');
  }
  public set elasticsearchVersion(value: string) {
    this._elasticsearchVersion = value;
  }
  public resetElasticsearchVersion() {
    this._elasticsearchVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchVersionInput() {
    return this._elasticsearchVersion;
  }

  // enable_node_to_node_encryption - computed: true, optional: true, required: false
  private _enableNodeToNodeEncryption?: boolean | cdktf.IResolvable; 
  public get enableNodeToNodeEncryption() {
    return this.getBooleanAttribute('enable_node_to_node_encryption');
  }
  public set enableNodeToNodeEncryption(value: boolean | cdktf.IResolvable) {
    this._enableNodeToNodeEncryption = value;
  }
  public resetEnableNodeToNodeEncryption() {
    this._enableNodeToNodeEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNodeToNodeEncryptionInput() {
    return this._enableNodeToNodeEncryption;
  }

  // endpoints - computed: true, optional: false, required: false
  private _endpoints = new cdktf.StringMap(this, "endpoints");
  public get endpoints() {
    return this._endpoints;
  }

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

  // require_ssl - computed: true, optional: true, required: false
  private _requireSsl?: boolean | cdktf.IResolvable; 
  public get requireSsl() {
    return this.getBooleanAttribute('require_ssl');
  }
  public set requireSsl(value: boolean | cdktf.IResolvable) {
    this._requireSsl = value;
  }
  public resetRequireSsl() {
    this._requireSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireSslInput() {
    return this._requireSsl;
  }

  // selected_zone - computed: true, optional: true, required: false
  private _selectedZone?: number; 
  public get selectedZone() {
    return this.getNumberAttribute('selected_zone');
  }
  public set selectedZone(value: number) {
    this._selectedZone = value;
  }
  public resetSelectedZone() {
    this._selectedZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedZoneInput() {
    return this._selectedZone;
  }

  // snapshot_options - computed: true, optional: false, required: false
  private _snapshotOptions = new AwsElasticsearchSnapshotOptionsList(this, "snapshot_options", false);
  public get snapshotOptions() {
    return this._snapshotOptions;
  }

  // storage_size - computed: false, optional: true, required: false
  private _storageSize?: number; 
  public get storageSize() {
    return this.getNumberAttribute('storage_size');
  }
  public set storageSize(value: number) {
    this._storageSize = value;
  }
  public resetStorageSize() {
    this._storageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageSizeInput() {
    return this._storageSize;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // use_latest_tls_cipher - computed: true, optional: true, required: false
  private _useLatestTlsCipher?: boolean | cdktf.IResolvable; 
  public get useLatestTlsCipher() {
    return this.getBooleanAttribute('use_latest_tls_cipher');
  }
  public set useLatestTlsCipher(value: boolean | cdktf.IResolvable) {
    this._useLatestTlsCipher = value;
  }
  public resetUseLatestTlsCipher() {
    this._useLatestTlsCipher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useLatestTlsCipherInput() {
    return this._useLatestTlsCipher;
  }

  // cluster_config - computed: false, optional: true, required: false
  private _clusterConfig = new AwsElasticsearchClusterConfigOutputReference(this, "cluster_config");
  public get clusterConfig() {
    return this._clusterConfig;
  }
  public putClusterConfig(value: AwsElasticsearchClusterConfig) {
    this._clusterConfig.internalValue = value;
  }
  public resetClusterConfig() {
    this._clusterConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterConfigInput() {
    return this._clusterConfig.internalValue;
  }

  // encrypt_at_rest - computed: false, optional: true, required: false
  private _encryptAtRest = new AwsElasticsearchEncryptAtRestOutputReference(this, "encrypt_at_rest");
  public get encryptAtRest() {
    return this._encryptAtRest;
  }
  public putEncryptAtRest(value: AwsElasticsearchEncryptAtRest) {
    this._encryptAtRest.internalValue = value;
  }
  public resetEncryptAtRest() {
    this._encryptAtRest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptAtRestInput() {
    return this._encryptAtRest.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsElasticsearchTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsElasticsearchTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vpc_options - computed: false, optional: true, required: false
  private _vpcOptions = new AwsElasticsearchVpcOptionsList(this, "vpc_options", false);
  public get vpcOptions() {
    return this._vpcOptions;
  }
  public putVpcOptions(value: AwsElasticsearchVpcOptions[] | cdktf.IResolvable) {
    this._vpcOptions.internalValue = value;
  }
  public resetVpcOptions() {
    this._vpcOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcOptionsInput() {
    return this._vpcOptions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      elasticsearch_version: cdktf.stringToTerraform(this._elasticsearchVersion),
      enable_node_to_node_encryption: cdktf.booleanToTerraform(this._enableNodeToNodeEncryption),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      require_ssl: cdktf.booleanToTerraform(this._requireSsl),
      selected_zone: cdktf.numberToTerraform(this._selectedZone),
      storage_size: cdktf.numberToTerraform(this._storageSize),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      use_latest_tls_cipher: cdktf.booleanToTerraform(this._useLatestTlsCipher),
      cluster_config: awsElasticsearchClusterConfigToTerraform(this._clusterConfig.internalValue),
      encrypt_at_rest: awsElasticsearchEncryptAtRestToTerraform(this._encryptAtRest.internalValue),
      timeouts: awsElasticsearchTimeoutsToTerraform(this._timeouts.internalValue),
      vpc_options: cdktf.listMapper(awsElasticsearchVpcOptionsToTerraform, true)(this._vpcOptions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      elasticsearch_version: {
        value: cdktf.stringToHclTerraform(this._elasticsearchVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_node_to_node_encryption: {
        value: cdktf.booleanToHclTerraform(this._enableNodeToNodeEncryption),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
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
      require_ssl: {
        value: cdktf.booleanToHclTerraform(this._requireSsl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      selected_zone: {
        value: cdktf.numberToHclTerraform(this._selectedZone),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      storage_size: {
        value: cdktf.numberToHclTerraform(this._storageSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_latest_tls_cipher: {
        value: cdktf.booleanToHclTerraform(this._useLatestTlsCipher),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cluster_config: {
        value: awsElasticsearchClusterConfigToHclTerraform(this._clusterConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsElasticsearchClusterConfigList",
      },
      encrypt_at_rest: {
        value: awsElasticsearchEncryptAtRestToHclTerraform(this._encryptAtRest.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsElasticsearchEncryptAtRestList",
      },
      timeouts: {
        value: awsElasticsearchTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsElasticsearchTimeouts",
      },
      vpc_options: {
        value: cdktf.listMapperHcl(awsElasticsearchVpcOptionsToHclTerraform, true)(this._vpcOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsElasticsearchVpcOptionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
