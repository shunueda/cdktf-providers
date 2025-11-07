// https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_aws
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CvoAwsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_aws#assume_role_arn CvoAws#assume_role_arn}
  */
  readonly assumeRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_aws#aws_encryption_kms_key_arn CvoAws#aws_encryption_kms_key_arn}
  */
  readonly awsEncryptionKmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_aws#aws_encryption_kms_key_id CvoAws#aws_encryption_kms_key_id}
  */
  readonly awsEncryptionKmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_aws#backup_volumes_to_cbs CvoAws#backup_volumes_to_cbs}
  */
  readonly backupVolumesToCbs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_aws#capacity_package_name CvoAws#capacity_package_name}
  */
  readonly capacityPackageName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_aws#capacity_tier CvoAws#capacity_tier}
  */
  readonly capacityTier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_aws#client_id CvoAws#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_aws#cloud_provider_account CvoAws#cloud_provider_account}
  */
  readonly cloudProviderAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_aws#cluster_floating_ip CvoAws#cluster_floating_ip}
  */
  readonly clusterFloatingIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_aws#cluster_key_pair_name CvoAws#cluster_key_pair_name}
  */
  readonly clusterKeyPairName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_aws#data_encryption_type CvoAws#data_encryption_type}
  */
  readonly dataEncryptionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_aws#data_floating_ip CvoAws#data_floating_ip}
  */
  readonly dataFloatingIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_aws#data_floating_ip2 CvoAws#data_floating_ip2}
  */
  readonly dataFloatingIp2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_aws#ebs_volume_size CvoAws#ebs_volume_size}
  */
  readonly ebsVolumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_aws#ebs_volume_size_unit CvoAws#ebs_volume_size_unit}
  */
  readonly ebsVolumeSizeUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_aws#ebs_volume_type CvoAws#ebs_volume_type}
  */
  readonly ebsVolumeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_aws#enable_compliance CvoAws#enable_compliance}
  */
  readonly enableCompliance?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_aws#enable_monitoring CvoAws#enable_monitoring}
  */
  readonly enableMonitoring?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_aws#failover_mode CvoAws#failover_mode}
  */
  readonly failoverMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_aws#id CvoAws#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_aws#instance_profile_name CvoAws#instance_profile_name}
  */
  readonly instanceProfileName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_aws#instance_tenancy CvoAws#instance_tenancy}
  */
  readonly instanceTenancy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_aws#instance_type CvoAws#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_aws#iops CvoAws#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_aws#is_ha CvoAws#is_ha}
  */
  readonly isHa?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_aws#license_type CvoAws#license_type}
  */
  readonly licenseType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_aws#mediator_assign_public_ip CvoAws#mediator_assign_public_ip}
  */
  readonly mediatorAssignPublicIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_aws#mediator_instance_profile_name CvoAws#mediator_instance_profile_name}
  */
  readonly mediatorInstanceProfileName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_aws#mediator_key_pair_name CvoAws#mediator_key_pair_name}
  */
  readonly mediatorKeyPairName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_aws#mediator_security_group_id CvoAws#mediator_security_group_id}
  */
  readonly mediatorSecurityGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_aws#mediator_subnet_id CvoAws#mediator_subnet_id}
  */
  readonly mediatorSubnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_aws#name CvoAws#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_aws#node1_subnet_id CvoAws#node1_subnet_id}
  */
  readonly node1SubnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_aws#node2_subnet_id CvoAws#node2_subnet_id}
  */
  readonly node2SubnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_aws#nss_account CvoAws#nss_account}
  */
  readonly nssAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_aws#ontap_version CvoAws#ontap_version}
  */
  readonly ontapVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_aws#open_security_group CvoAws#open_security_group}
  */
  readonly openSecurityGroup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_aws#optimized_network_utilization CvoAws#optimized_network_utilization}
  */
  readonly optimizedNetworkUtilization?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_aws#platform_serial_number CvoAws#platform_serial_number}
  */
  readonly platformSerialNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_aws#platform_serial_number_node1 CvoAws#platform_serial_number_node1}
  */
  readonly platformSerialNumberNode1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_aws#platform_serial_number_node2 CvoAws#platform_serial_number_node2}
  */
  readonly platformSerialNumberNode2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_aws#provided_license CvoAws#provided_license}
  */
  readonly providedLicense?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_aws#region CvoAws#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_aws#retries CvoAws#retries}
  */
  readonly retries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_aws#route_table_ids CvoAws#route_table_ids}
  */
  readonly routeTableIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_aws#saas_subscription_id CvoAws#saas_subscription_id}
  */
  readonly saasSubscriptionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_aws#security_group_id CvoAws#security_group_id}
  */
  readonly securityGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_aws#subnet_id CvoAws#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_aws#svm_floating_ip CvoAws#svm_floating_ip}
  */
  readonly svmFloatingIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_aws#svm_name CvoAws#svm_name}
  */
  readonly svmName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_aws#svm_password CvoAws#svm_password}
  */
  readonly svmPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_aws#throughput CvoAws#throughput}
  */
  readonly throughput?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_aws#tier_level CvoAws#tier_level}
  */
  readonly tierLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_aws#upgrade_ontap_version CvoAws#upgrade_ontap_version}
  */
  readonly upgradeOntapVersion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_aws#use_latest_version CvoAws#use_latest_version}
  */
  readonly useLatestVersion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_aws#vpc_id CvoAws#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_aws#workspace_id CvoAws#workspace_id}
  */
  readonly workspaceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_aws#worm_retention_period_length CvoAws#worm_retention_period_length}
  */
  readonly wormRetentionPeriodLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_aws#worm_retention_period_unit CvoAws#worm_retention_period_unit}
  */
  readonly wormRetentionPeriodUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_aws#writing_speed_state CvoAws#writing_speed_state}
  */
  readonly writingSpeedState?: string;
  /**
  * aws_tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_aws#aws_tag CvoAws#aws_tag}
  */
  readonly awsTag?: CvoAwsAwsTag[] | cdktf.IResolvable;
}
export interface CvoAwsAwsTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_aws#tag_key CvoAws#tag_key}
  */
  readonly tagKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_aws#tag_value CvoAws#tag_value}
  */
  readonly tagValue?: string;
}

export function cvoAwsAwsTagToTerraform(struct?: CvoAwsAwsTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag_key: cdktf.stringToTerraform(struct!.tagKey),
    tag_value: cdktf.stringToTerraform(struct!.tagValue),
  }
}


export function cvoAwsAwsTagToHclTerraform(struct?: CvoAwsAwsTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag_key: {
      value: cdktf.stringToHclTerraform(struct!.tagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_value: {
      value: cdktf.stringToHclTerraform(struct!.tagValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CvoAwsAwsTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CvoAwsAwsTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagKey = this._tagKey;
    }
    if (this._tagValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValue = this._tagValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CvoAwsAwsTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tagKey = undefined;
      this._tagValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tagKey = value.tagKey;
      this._tagValue = value.tagValue;
    }
  }

  // tag_key - computed: false, optional: false, required: true
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
  }

  // tag_value - computed: false, optional: true, required: false
  private _tagValue?: string; 
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
  public set tagValue(value: string) {
    this._tagValue = value;
  }
  public resetTagValue() {
    this._tagValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueInput() {
    return this._tagValue;
  }
}

export class CvoAwsAwsTagList extends cdktf.ComplexList {
  public internalValue? : CvoAwsAwsTag[] | cdktf.IResolvable

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
  public get(index: number): CvoAwsAwsTagOutputReference {
    return new CvoAwsAwsTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_aws netapp-cloudmanager_cvo_aws}
*/
export class CvoAws extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-cloudmanager_cvo_aws";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CvoAws resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CvoAws to import
  * @param importFromId The id of the existing CvoAws that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_aws#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CvoAws to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-cloudmanager_cvo_aws", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvo_aws netapp-cloudmanager_cvo_aws} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CvoAwsConfig
  */
  public constructor(scope: Construct, id: string, config: CvoAwsConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-cloudmanager_cvo_aws',
      terraformGeneratorMetadata: {
        providerName: 'netapp-cloudmanager',
        providerVersion: '26.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._assumeRoleArn = config.assumeRoleArn;
    this._awsEncryptionKmsKeyArn = config.awsEncryptionKmsKeyArn;
    this._awsEncryptionKmsKeyId = config.awsEncryptionKmsKeyId;
    this._backupVolumesToCbs = config.backupVolumesToCbs;
    this._capacityPackageName = config.capacityPackageName;
    this._capacityTier = config.capacityTier;
    this._clientId = config.clientId;
    this._cloudProviderAccount = config.cloudProviderAccount;
    this._clusterFloatingIp = config.clusterFloatingIp;
    this._clusterKeyPairName = config.clusterKeyPairName;
    this._dataEncryptionType = config.dataEncryptionType;
    this._dataFloatingIp = config.dataFloatingIp;
    this._dataFloatingIp2 = config.dataFloatingIp2;
    this._ebsVolumeSize = config.ebsVolumeSize;
    this._ebsVolumeSizeUnit = config.ebsVolumeSizeUnit;
    this._ebsVolumeType = config.ebsVolumeType;
    this._enableCompliance = config.enableCompliance;
    this._enableMonitoring = config.enableMonitoring;
    this._failoverMode = config.failoverMode;
    this._id = config.id;
    this._instanceProfileName = config.instanceProfileName;
    this._instanceTenancy = config.instanceTenancy;
    this._instanceType = config.instanceType;
    this._iops = config.iops;
    this._isHa = config.isHa;
    this._licenseType = config.licenseType;
    this._mediatorAssignPublicIp = config.mediatorAssignPublicIp;
    this._mediatorInstanceProfileName = config.mediatorInstanceProfileName;
    this._mediatorKeyPairName = config.mediatorKeyPairName;
    this._mediatorSecurityGroupId = config.mediatorSecurityGroupId;
    this._mediatorSubnetId = config.mediatorSubnetId;
    this._name = config.name;
    this._node1SubnetId = config.node1SubnetId;
    this._node2SubnetId = config.node2SubnetId;
    this._nssAccount = config.nssAccount;
    this._ontapVersion = config.ontapVersion;
    this._openSecurityGroup = config.openSecurityGroup;
    this._optimizedNetworkUtilization = config.optimizedNetworkUtilization;
    this._platformSerialNumber = config.platformSerialNumber;
    this._platformSerialNumberNode1 = config.platformSerialNumberNode1;
    this._platformSerialNumberNode2 = config.platformSerialNumberNode2;
    this._providedLicense = config.providedLicense;
    this._region = config.region;
    this._retries = config.retries;
    this._routeTableIds = config.routeTableIds;
    this._saasSubscriptionId = config.saasSubscriptionId;
    this._securityGroupId = config.securityGroupId;
    this._subnetId = config.subnetId;
    this._svmFloatingIp = config.svmFloatingIp;
    this._svmName = config.svmName;
    this._svmPassword = config.svmPassword;
    this._throughput = config.throughput;
    this._tierLevel = config.tierLevel;
    this._upgradeOntapVersion = config.upgradeOntapVersion;
    this._useLatestVersion = config.useLatestVersion;
    this._vpcId = config.vpcId;
    this._workspaceId = config.workspaceId;
    this._wormRetentionPeriodLength = config.wormRetentionPeriodLength;
    this._wormRetentionPeriodUnit = config.wormRetentionPeriodUnit;
    this._writingSpeedState = config.writingSpeedState;
    this._awsTag.internalValue = config.awsTag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assume_role_arn - computed: false, optional: true, required: false
  private _assumeRoleArn?: string; 
  public get assumeRoleArn() {
    return this.getStringAttribute('assume_role_arn');
  }
  public set assumeRoleArn(value: string) {
    this._assumeRoleArn = value;
  }
  public resetAssumeRoleArn() {
    this._assumeRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assumeRoleArnInput() {
    return this._assumeRoleArn;
  }

  // aws_encryption_kms_key_arn - computed: false, optional: true, required: false
  private _awsEncryptionKmsKeyArn?: string; 
  public get awsEncryptionKmsKeyArn() {
    return this.getStringAttribute('aws_encryption_kms_key_arn');
  }
  public set awsEncryptionKmsKeyArn(value: string) {
    this._awsEncryptionKmsKeyArn = value;
  }
  public resetAwsEncryptionKmsKeyArn() {
    this._awsEncryptionKmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsEncryptionKmsKeyArnInput() {
    return this._awsEncryptionKmsKeyArn;
  }

  // aws_encryption_kms_key_id - computed: false, optional: true, required: false
  private _awsEncryptionKmsKeyId?: string; 
  public get awsEncryptionKmsKeyId() {
    return this.getStringAttribute('aws_encryption_kms_key_id');
  }
  public set awsEncryptionKmsKeyId(value: string) {
    this._awsEncryptionKmsKeyId = value;
  }
  public resetAwsEncryptionKmsKeyId() {
    this._awsEncryptionKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsEncryptionKmsKeyIdInput() {
    return this._awsEncryptionKmsKeyId;
  }

  // backup_volumes_to_cbs - computed: false, optional: true, required: false
  private _backupVolumesToCbs?: boolean | cdktf.IResolvable; 
  public get backupVolumesToCbs() {
    return this.getBooleanAttribute('backup_volumes_to_cbs');
  }
  public set backupVolumesToCbs(value: boolean | cdktf.IResolvable) {
    this._backupVolumesToCbs = value;
  }
  public resetBackupVolumesToCbs() {
    this._backupVolumesToCbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupVolumesToCbsInput() {
    return this._backupVolumesToCbs;
  }

  // capacity_package_name - computed: false, optional: true, required: false
  private _capacityPackageName?: string; 
  public get capacityPackageName() {
    return this.getStringAttribute('capacity_package_name');
  }
  public set capacityPackageName(value: string) {
    this._capacityPackageName = value;
  }
  public resetCapacityPackageName() {
    this._capacityPackageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityPackageNameInput() {
    return this._capacityPackageName;
  }

  // capacity_tier - computed: false, optional: true, required: false
  private _capacityTier?: string; 
  public get capacityTier() {
    return this.getStringAttribute('capacity_tier');
  }
  public set capacityTier(value: string) {
    this._capacityTier = value;
  }
  public resetCapacityTier() {
    this._capacityTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityTierInput() {
    return this._capacityTier;
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // cloud_provider_account - computed: false, optional: true, required: false
  private _cloudProviderAccount?: string; 
  public get cloudProviderAccount() {
    return this.getStringAttribute('cloud_provider_account');
  }
  public set cloudProviderAccount(value: string) {
    this._cloudProviderAccount = value;
  }
  public resetCloudProviderAccount() {
    this._cloudProviderAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderAccountInput() {
    return this._cloudProviderAccount;
  }

  // cluster_floating_ip - computed: false, optional: true, required: false
  private _clusterFloatingIp?: string; 
  public get clusterFloatingIp() {
    return this.getStringAttribute('cluster_floating_ip');
  }
  public set clusterFloatingIp(value: string) {
    this._clusterFloatingIp = value;
  }
  public resetClusterFloatingIp() {
    this._clusterFloatingIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterFloatingIpInput() {
    return this._clusterFloatingIp;
  }

  // cluster_key_pair_name - computed: false, optional: true, required: false
  private _clusterKeyPairName?: string; 
  public get clusterKeyPairName() {
    return this.getStringAttribute('cluster_key_pair_name');
  }
  public set clusterKeyPairName(value: string) {
    this._clusterKeyPairName = value;
  }
  public resetClusterKeyPairName() {
    this._clusterKeyPairName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterKeyPairNameInput() {
    return this._clusterKeyPairName;
  }

  // data_encryption_type - computed: false, optional: true, required: false
  private _dataEncryptionType?: string; 
  public get dataEncryptionType() {
    return this.getStringAttribute('data_encryption_type');
  }
  public set dataEncryptionType(value: string) {
    this._dataEncryptionType = value;
  }
  public resetDataEncryptionType() {
    this._dataEncryptionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataEncryptionTypeInput() {
    return this._dataEncryptionType;
  }

  // data_floating_ip - computed: false, optional: true, required: false
  private _dataFloatingIp?: string; 
  public get dataFloatingIp() {
    return this.getStringAttribute('data_floating_ip');
  }
  public set dataFloatingIp(value: string) {
    this._dataFloatingIp = value;
  }
  public resetDataFloatingIp() {
    this._dataFloatingIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFloatingIpInput() {
    return this._dataFloatingIp;
  }

  // data_floating_ip2 - computed: false, optional: true, required: false
  private _dataFloatingIp2?: string; 
  public get dataFloatingIp2() {
    return this.getStringAttribute('data_floating_ip2');
  }
  public set dataFloatingIp2(value: string) {
    this._dataFloatingIp2 = value;
  }
  public resetDataFloatingIp2() {
    this._dataFloatingIp2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFloatingIp2Input() {
    return this._dataFloatingIp2;
  }

  // ebs_volume_size - computed: false, optional: true, required: false
  private _ebsVolumeSize?: number; 
  public get ebsVolumeSize() {
    return this.getNumberAttribute('ebs_volume_size');
  }
  public set ebsVolumeSize(value: number) {
    this._ebsVolumeSize = value;
  }
  public resetEbsVolumeSize() {
    this._ebsVolumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsVolumeSizeInput() {
    return this._ebsVolumeSize;
  }

  // ebs_volume_size_unit - computed: false, optional: true, required: false
  private _ebsVolumeSizeUnit?: string; 
  public get ebsVolumeSizeUnit() {
    return this.getStringAttribute('ebs_volume_size_unit');
  }
  public set ebsVolumeSizeUnit(value: string) {
    this._ebsVolumeSizeUnit = value;
  }
  public resetEbsVolumeSizeUnit() {
    this._ebsVolumeSizeUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsVolumeSizeUnitInput() {
    return this._ebsVolumeSizeUnit;
  }

  // ebs_volume_type - computed: false, optional: true, required: false
  private _ebsVolumeType?: string; 
  public get ebsVolumeType() {
    return this.getStringAttribute('ebs_volume_type');
  }
  public set ebsVolumeType(value: string) {
    this._ebsVolumeType = value;
  }
  public resetEbsVolumeType() {
    this._ebsVolumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsVolumeTypeInput() {
    return this._ebsVolumeType;
  }

  // enable_compliance - computed: false, optional: true, required: false
  private _enableCompliance?: boolean | cdktf.IResolvable; 
  public get enableCompliance() {
    return this.getBooleanAttribute('enable_compliance');
  }
  public set enableCompliance(value: boolean | cdktf.IResolvable) {
    this._enableCompliance = value;
  }
  public resetEnableCompliance() {
    this._enableCompliance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableComplianceInput() {
    return this._enableCompliance;
  }

  // enable_monitoring - computed: false, optional: true, required: false
  private _enableMonitoring?: boolean | cdktf.IResolvable; 
  public get enableMonitoring() {
    return this.getBooleanAttribute('enable_monitoring');
  }
  public set enableMonitoring(value: boolean | cdktf.IResolvable) {
    this._enableMonitoring = value;
  }
  public resetEnableMonitoring() {
    this._enableMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMonitoringInput() {
    return this._enableMonitoring;
  }

  // failover_mode - computed: false, optional: true, required: false
  private _failoverMode?: string; 
  public get failoverMode() {
    return this.getStringAttribute('failover_mode');
  }
  public set failoverMode(value: string) {
    this._failoverMode = value;
  }
  public resetFailoverMode() {
    this._failoverMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverModeInput() {
    return this._failoverMode;
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

  // instance_profile_name - computed: false, optional: true, required: false
  private _instanceProfileName?: string; 
  public get instanceProfileName() {
    return this.getStringAttribute('instance_profile_name');
  }
  public set instanceProfileName(value: string) {
    this._instanceProfileName = value;
  }
  public resetInstanceProfileName() {
    this._instanceProfileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceProfileNameInput() {
    return this._instanceProfileName;
  }

  // instance_tenancy - computed: false, optional: true, required: false
  private _instanceTenancy?: string; 
  public get instanceTenancy() {
    return this.getStringAttribute('instance_tenancy');
  }
  public set instanceTenancy(value: string) {
    this._instanceTenancy = value;
  }
  public resetInstanceTenancy() {
    this._instanceTenancy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTenancyInput() {
    return this._instanceTenancy;
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

  // iops - computed: false, optional: true, required: false
  private _iops?: number; 
  public get iops() {
    return this.getNumberAttribute('iops');
  }
  public set iops(value: number) {
    this._iops = value;
  }
  public resetIops() {
    this._iops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsInput() {
    return this._iops;
  }

  // is_ha - computed: false, optional: true, required: false
  private _isHa?: boolean | cdktf.IResolvable; 
  public get isHa() {
    return this.getBooleanAttribute('is_ha');
  }
  public set isHa(value: boolean | cdktf.IResolvable) {
    this._isHa = value;
  }
  public resetIsHa() {
    this._isHa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isHaInput() {
    return this._isHa;
  }

  // license_type - computed: false, optional: true, required: false
  private _licenseType?: string; 
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }
  public set licenseType(value: string) {
    this._licenseType = value;
  }
  public resetLicenseType() {
    this._licenseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseTypeInput() {
    return this._licenseType;
  }

  // mediator_assign_public_ip - computed: false, optional: true, required: false
  private _mediatorAssignPublicIp?: boolean | cdktf.IResolvable; 
  public get mediatorAssignPublicIp() {
    return this.getBooleanAttribute('mediator_assign_public_ip');
  }
  public set mediatorAssignPublicIp(value: boolean | cdktf.IResolvable) {
    this._mediatorAssignPublicIp = value;
  }
  public resetMediatorAssignPublicIp() {
    this._mediatorAssignPublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediatorAssignPublicIpInput() {
    return this._mediatorAssignPublicIp;
  }

  // mediator_instance_profile_name - computed: false, optional: true, required: false
  private _mediatorInstanceProfileName?: string; 
  public get mediatorInstanceProfileName() {
    return this.getStringAttribute('mediator_instance_profile_name');
  }
  public set mediatorInstanceProfileName(value: string) {
    this._mediatorInstanceProfileName = value;
  }
  public resetMediatorInstanceProfileName() {
    this._mediatorInstanceProfileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediatorInstanceProfileNameInput() {
    return this._mediatorInstanceProfileName;
  }

  // mediator_key_pair_name - computed: false, optional: true, required: false
  private _mediatorKeyPairName?: string; 
  public get mediatorKeyPairName() {
    return this.getStringAttribute('mediator_key_pair_name');
  }
  public set mediatorKeyPairName(value: string) {
    this._mediatorKeyPairName = value;
  }
  public resetMediatorKeyPairName() {
    this._mediatorKeyPairName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediatorKeyPairNameInput() {
    return this._mediatorKeyPairName;
  }

  // mediator_security_group_id - computed: false, optional: true, required: false
  private _mediatorSecurityGroupId?: string; 
  public get mediatorSecurityGroupId() {
    return this.getStringAttribute('mediator_security_group_id');
  }
  public set mediatorSecurityGroupId(value: string) {
    this._mediatorSecurityGroupId = value;
  }
  public resetMediatorSecurityGroupId() {
    this._mediatorSecurityGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediatorSecurityGroupIdInput() {
    return this._mediatorSecurityGroupId;
  }

  // mediator_subnet_id - computed: false, optional: true, required: false
  private _mediatorSubnetId?: string; 
  public get mediatorSubnetId() {
    return this.getStringAttribute('mediator_subnet_id');
  }
  public set mediatorSubnetId(value: string) {
    this._mediatorSubnetId = value;
  }
  public resetMediatorSubnetId() {
    this._mediatorSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediatorSubnetIdInput() {
    return this._mediatorSubnetId;
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

  // node1_subnet_id - computed: false, optional: true, required: false
  private _node1SubnetId?: string; 
  public get node1SubnetId() {
    return this.getStringAttribute('node1_subnet_id');
  }
  public set node1SubnetId(value: string) {
    this._node1SubnetId = value;
  }
  public resetNode1SubnetId() {
    this._node1SubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get node1SubnetIdInput() {
    return this._node1SubnetId;
  }

  // node2_subnet_id - computed: false, optional: true, required: false
  private _node2SubnetId?: string; 
  public get node2SubnetId() {
    return this.getStringAttribute('node2_subnet_id');
  }
  public set node2SubnetId(value: string) {
    this._node2SubnetId = value;
  }
  public resetNode2SubnetId() {
    this._node2SubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get node2SubnetIdInput() {
    return this._node2SubnetId;
  }

  // nss_account - computed: false, optional: true, required: false
  private _nssAccount?: string; 
  public get nssAccount() {
    return this.getStringAttribute('nss_account');
  }
  public set nssAccount(value: string) {
    this._nssAccount = value;
  }
  public resetNssAccount() {
    this._nssAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nssAccountInput() {
    return this._nssAccount;
  }

  // ontap_version - computed: false, optional: true, required: false
  private _ontapVersion?: string; 
  public get ontapVersion() {
    return this.getStringAttribute('ontap_version');
  }
  public set ontapVersion(value: string) {
    this._ontapVersion = value;
  }
  public resetOntapVersion() {
    this._ontapVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ontapVersionInput() {
    return this._ontapVersion;
  }

  // open_security_group - computed: false, optional: true, required: false
  private _openSecurityGroup?: boolean | cdktf.IResolvable; 
  public get openSecurityGroup() {
    return this.getBooleanAttribute('open_security_group');
  }
  public set openSecurityGroup(value: boolean | cdktf.IResolvable) {
    this._openSecurityGroup = value;
  }
  public resetOpenSecurityGroup() {
    this._openSecurityGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openSecurityGroupInput() {
    return this._openSecurityGroup;
  }

  // optimized_network_utilization - computed: false, optional: true, required: false
  private _optimizedNetworkUtilization?: boolean | cdktf.IResolvable; 
  public get optimizedNetworkUtilization() {
    return this.getBooleanAttribute('optimized_network_utilization');
  }
  public set optimizedNetworkUtilization(value: boolean | cdktf.IResolvable) {
    this._optimizedNetworkUtilization = value;
  }
  public resetOptimizedNetworkUtilization() {
    this._optimizedNetworkUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optimizedNetworkUtilizationInput() {
    return this._optimizedNetworkUtilization;
  }

  // platform_serial_number - computed: false, optional: true, required: false
  private _platformSerialNumber?: string; 
  public get platformSerialNumber() {
    return this.getStringAttribute('platform_serial_number');
  }
  public set platformSerialNumber(value: string) {
    this._platformSerialNumber = value;
  }
  public resetPlatformSerialNumber() {
    this._platformSerialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformSerialNumberInput() {
    return this._platformSerialNumber;
  }

  // platform_serial_number_node1 - computed: false, optional: true, required: false
  private _platformSerialNumberNode1?: string; 
  public get platformSerialNumberNode1() {
    return this.getStringAttribute('platform_serial_number_node1');
  }
  public set platformSerialNumberNode1(value: string) {
    this._platformSerialNumberNode1 = value;
  }
  public resetPlatformSerialNumberNode1() {
    this._platformSerialNumberNode1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformSerialNumberNode1Input() {
    return this._platformSerialNumberNode1;
  }

  // platform_serial_number_node2 - computed: false, optional: true, required: false
  private _platformSerialNumberNode2?: string; 
  public get platformSerialNumberNode2() {
    return this.getStringAttribute('platform_serial_number_node2');
  }
  public set platformSerialNumberNode2(value: string) {
    this._platformSerialNumberNode2 = value;
  }
  public resetPlatformSerialNumberNode2() {
    this._platformSerialNumberNode2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformSerialNumberNode2Input() {
    return this._platformSerialNumberNode2;
  }

  // provided_license - computed: false, optional: true, required: false
  private _providedLicense?: string; 
  public get providedLicense() {
    return this.getStringAttribute('provided_license');
  }
  public set providedLicense(value: string) {
    this._providedLicense = value;
  }
  public resetProvidedLicense() {
    this._providedLicense = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providedLicenseInput() {
    return this._providedLicense;
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

  // retries - computed: false, optional: true, required: false
  private _retries?: number; 
  public get retries() {
    return this.getNumberAttribute('retries');
  }
  public set retries(value: number) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }

  // route_table_ids - computed: false, optional: true, required: false
  private _routeTableIds?: string[]; 
  public get routeTableIds() {
    return cdktf.Fn.tolist(this.getListAttribute('route_table_ids'));
  }
  public set routeTableIds(value: string[]) {
    this._routeTableIds = value;
  }
  public resetRouteTableIds() {
    this._routeTableIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTableIdsInput() {
    return this._routeTableIds;
  }

  // saas_subscription_id - computed: false, optional: true, required: false
  private _saasSubscriptionId?: string; 
  public get saasSubscriptionId() {
    return this.getStringAttribute('saas_subscription_id');
  }
  public set saasSubscriptionId(value: string) {
    this._saasSubscriptionId = value;
  }
  public resetSaasSubscriptionId() {
    this._saasSubscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saasSubscriptionIdInput() {
    return this._saasSubscriptionId;
  }

  // security_group_id - computed: false, optional: true, required: false
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  public resetSecurityGroupId() {
    this._securityGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId;
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

  // svm_floating_ip - computed: false, optional: true, required: false
  private _svmFloatingIp?: string; 
  public get svmFloatingIp() {
    return this.getStringAttribute('svm_floating_ip');
  }
  public set svmFloatingIp(value: string) {
    this._svmFloatingIp = value;
  }
  public resetSvmFloatingIp() {
    this._svmFloatingIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svmFloatingIpInput() {
    return this._svmFloatingIp;
  }

  // svm_name - computed: false, optional: true, required: false
  private _svmName?: string; 
  public get svmName() {
    return this.getStringAttribute('svm_name');
  }
  public set svmName(value: string) {
    this._svmName = value;
  }
  public resetSvmName() {
    this._svmName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svmNameInput() {
    return this._svmName;
  }

  // svm_password - computed: false, optional: false, required: true
  private _svmPassword?: string; 
  public get svmPassword() {
    return this.getStringAttribute('svm_password');
  }
  public set svmPassword(value: string) {
    this._svmPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get svmPasswordInput() {
    return this._svmPassword;
  }

  // throughput - computed: false, optional: true, required: false
  private _throughput?: number; 
  public get throughput() {
    return this.getNumberAttribute('throughput');
  }
  public set throughput(value: number) {
    this._throughput = value;
  }
  public resetThroughput() {
    this._throughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputInput() {
    return this._throughput;
  }

  // tier_level - computed: false, optional: true, required: false
  private _tierLevel?: string; 
  public get tierLevel() {
    return this.getStringAttribute('tier_level');
  }
  public set tierLevel(value: string) {
    this._tierLevel = value;
  }
  public resetTierLevel() {
    this._tierLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tierLevelInput() {
    return this._tierLevel;
  }

  // upgrade_ontap_version - computed: false, optional: true, required: false
  private _upgradeOntapVersion?: boolean | cdktf.IResolvable; 
  public get upgradeOntapVersion() {
    return this.getBooleanAttribute('upgrade_ontap_version');
  }
  public set upgradeOntapVersion(value: boolean | cdktf.IResolvable) {
    this._upgradeOntapVersion = value;
  }
  public resetUpgradeOntapVersion() {
    this._upgradeOntapVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeOntapVersionInput() {
    return this._upgradeOntapVersion;
  }

  // use_latest_version - computed: false, optional: true, required: false
  private _useLatestVersion?: boolean | cdktf.IResolvable; 
  public get useLatestVersion() {
    return this.getBooleanAttribute('use_latest_version');
  }
  public set useLatestVersion(value: boolean | cdktf.IResolvable) {
    this._useLatestVersion = value;
  }
  public resetUseLatestVersion() {
    this._useLatestVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useLatestVersionInput() {
    return this._useLatestVersion;
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

  // workspace_id - computed: false, optional: true, required: false
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  public resetWorkspaceId() {
    this._workspaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // worm_retention_period_length - computed: false, optional: true, required: false
  private _wormRetentionPeriodLength?: number; 
  public get wormRetentionPeriodLength() {
    return this.getNumberAttribute('worm_retention_period_length');
  }
  public set wormRetentionPeriodLength(value: number) {
    this._wormRetentionPeriodLength = value;
  }
  public resetWormRetentionPeriodLength() {
    this._wormRetentionPeriodLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wormRetentionPeriodLengthInput() {
    return this._wormRetentionPeriodLength;
  }

  // worm_retention_period_unit - computed: false, optional: true, required: false
  private _wormRetentionPeriodUnit?: string; 
  public get wormRetentionPeriodUnit() {
    return this.getStringAttribute('worm_retention_period_unit');
  }
  public set wormRetentionPeriodUnit(value: string) {
    this._wormRetentionPeriodUnit = value;
  }
  public resetWormRetentionPeriodUnit() {
    this._wormRetentionPeriodUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wormRetentionPeriodUnitInput() {
    return this._wormRetentionPeriodUnit;
  }

  // writing_speed_state - computed: false, optional: true, required: false
  private _writingSpeedState?: string; 
  public get writingSpeedState() {
    return this.getStringAttribute('writing_speed_state');
  }
  public set writingSpeedState(value: string) {
    this._writingSpeedState = value;
  }
  public resetWritingSpeedState() {
    this._writingSpeedState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writingSpeedStateInput() {
    return this._writingSpeedState;
  }

  // aws_tag - computed: false, optional: true, required: false
  private _awsTag = new CvoAwsAwsTagList(this, "aws_tag", true);
  public get awsTag() {
    return this._awsTag;
  }
  public putAwsTag(value: CvoAwsAwsTag[] | cdktf.IResolvable) {
    this._awsTag.internalValue = value;
  }
  public resetAwsTag() {
    this._awsTag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsTagInput() {
    return this._awsTag.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      assume_role_arn: cdktf.stringToTerraform(this._assumeRoleArn),
      aws_encryption_kms_key_arn: cdktf.stringToTerraform(this._awsEncryptionKmsKeyArn),
      aws_encryption_kms_key_id: cdktf.stringToTerraform(this._awsEncryptionKmsKeyId),
      backup_volumes_to_cbs: cdktf.booleanToTerraform(this._backupVolumesToCbs),
      capacity_package_name: cdktf.stringToTerraform(this._capacityPackageName),
      capacity_tier: cdktf.stringToTerraform(this._capacityTier),
      client_id: cdktf.stringToTerraform(this._clientId),
      cloud_provider_account: cdktf.stringToTerraform(this._cloudProviderAccount),
      cluster_floating_ip: cdktf.stringToTerraform(this._clusterFloatingIp),
      cluster_key_pair_name: cdktf.stringToTerraform(this._clusterKeyPairName),
      data_encryption_type: cdktf.stringToTerraform(this._dataEncryptionType),
      data_floating_ip: cdktf.stringToTerraform(this._dataFloatingIp),
      data_floating_ip2: cdktf.stringToTerraform(this._dataFloatingIp2),
      ebs_volume_size: cdktf.numberToTerraform(this._ebsVolumeSize),
      ebs_volume_size_unit: cdktf.stringToTerraform(this._ebsVolumeSizeUnit),
      ebs_volume_type: cdktf.stringToTerraform(this._ebsVolumeType),
      enable_compliance: cdktf.booleanToTerraform(this._enableCompliance),
      enable_monitoring: cdktf.booleanToTerraform(this._enableMonitoring),
      failover_mode: cdktf.stringToTerraform(this._failoverMode),
      id: cdktf.stringToTerraform(this._id),
      instance_profile_name: cdktf.stringToTerraform(this._instanceProfileName),
      instance_tenancy: cdktf.stringToTerraform(this._instanceTenancy),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      iops: cdktf.numberToTerraform(this._iops),
      is_ha: cdktf.booleanToTerraform(this._isHa),
      license_type: cdktf.stringToTerraform(this._licenseType),
      mediator_assign_public_ip: cdktf.booleanToTerraform(this._mediatorAssignPublicIp),
      mediator_instance_profile_name: cdktf.stringToTerraform(this._mediatorInstanceProfileName),
      mediator_key_pair_name: cdktf.stringToTerraform(this._mediatorKeyPairName),
      mediator_security_group_id: cdktf.stringToTerraform(this._mediatorSecurityGroupId),
      mediator_subnet_id: cdktf.stringToTerraform(this._mediatorSubnetId),
      name: cdktf.stringToTerraform(this._name),
      node1_subnet_id: cdktf.stringToTerraform(this._node1SubnetId),
      node2_subnet_id: cdktf.stringToTerraform(this._node2SubnetId),
      nss_account: cdktf.stringToTerraform(this._nssAccount),
      ontap_version: cdktf.stringToTerraform(this._ontapVersion),
      open_security_group: cdktf.booleanToTerraform(this._openSecurityGroup),
      optimized_network_utilization: cdktf.booleanToTerraform(this._optimizedNetworkUtilization),
      platform_serial_number: cdktf.stringToTerraform(this._platformSerialNumber),
      platform_serial_number_node1: cdktf.stringToTerraform(this._platformSerialNumberNode1),
      platform_serial_number_node2: cdktf.stringToTerraform(this._platformSerialNumberNode2),
      provided_license: cdktf.stringToTerraform(this._providedLicense),
      region: cdktf.stringToTerraform(this._region),
      retries: cdktf.numberToTerraform(this._retries),
      route_table_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._routeTableIds),
      saas_subscription_id: cdktf.stringToTerraform(this._saasSubscriptionId),
      security_group_id: cdktf.stringToTerraform(this._securityGroupId),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      svm_floating_ip: cdktf.stringToTerraform(this._svmFloatingIp),
      svm_name: cdktf.stringToTerraform(this._svmName),
      svm_password: cdktf.stringToTerraform(this._svmPassword),
      throughput: cdktf.numberToTerraform(this._throughput),
      tier_level: cdktf.stringToTerraform(this._tierLevel),
      upgrade_ontap_version: cdktf.booleanToTerraform(this._upgradeOntapVersion),
      use_latest_version: cdktf.booleanToTerraform(this._useLatestVersion),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
      worm_retention_period_length: cdktf.numberToTerraform(this._wormRetentionPeriodLength),
      worm_retention_period_unit: cdktf.stringToTerraform(this._wormRetentionPeriodUnit),
      writing_speed_state: cdktf.stringToTerraform(this._writingSpeedState),
      aws_tag: cdktf.listMapper(cvoAwsAwsTagToTerraform, true)(this._awsTag.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assume_role_arn: {
        value: cdktf.stringToHclTerraform(this._assumeRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_encryption_kms_key_arn: {
        value: cdktf.stringToHclTerraform(this._awsEncryptionKmsKeyArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_encryption_kms_key_id: {
        value: cdktf.stringToHclTerraform(this._awsEncryptionKmsKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_volumes_to_cbs: {
        value: cdktf.booleanToHclTerraform(this._backupVolumesToCbs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      capacity_package_name: {
        value: cdktf.stringToHclTerraform(this._capacityPackageName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capacity_tier: {
        value: cdktf.stringToHclTerraform(this._capacityTier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_provider_account: {
        value: cdktf.stringToHclTerraform(this._cloudProviderAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_floating_ip: {
        value: cdktf.stringToHclTerraform(this._clusterFloatingIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_key_pair_name: {
        value: cdktf.stringToHclTerraform(this._clusterKeyPairName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_encryption_type: {
        value: cdktf.stringToHclTerraform(this._dataEncryptionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_floating_ip: {
        value: cdktf.stringToHclTerraform(this._dataFloatingIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_floating_ip2: {
        value: cdktf.stringToHclTerraform(this._dataFloatingIp2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ebs_volume_size: {
        value: cdktf.numberToHclTerraform(this._ebsVolumeSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ebs_volume_size_unit: {
        value: cdktf.stringToHclTerraform(this._ebsVolumeSizeUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ebs_volume_type: {
        value: cdktf.stringToHclTerraform(this._ebsVolumeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_compliance: {
        value: cdktf.booleanToHclTerraform(this._enableCompliance),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_monitoring: {
        value: cdktf.booleanToHclTerraform(this._enableMonitoring),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      failover_mode: {
        value: cdktf.stringToHclTerraform(this._failoverMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_profile_name: {
        value: cdktf.stringToHclTerraform(this._instanceProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_tenancy: {
        value: cdktf.stringToHclTerraform(this._instanceTenancy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_type: {
        value: cdktf.stringToHclTerraform(this._instanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iops: {
        value: cdktf.numberToHclTerraform(this._iops),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      is_ha: {
        value: cdktf.booleanToHclTerraform(this._isHa),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      license_type: {
        value: cdktf.stringToHclTerraform(this._licenseType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mediator_assign_public_ip: {
        value: cdktf.booleanToHclTerraform(this._mediatorAssignPublicIp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mediator_instance_profile_name: {
        value: cdktf.stringToHclTerraform(this._mediatorInstanceProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mediator_key_pair_name: {
        value: cdktf.stringToHclTerraform(this._mediatorKeyPairName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mediator_security_group_id: {
        value: cdktf.stringToHclTerraform(this._mediatorSecurityGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mediator_subnet_id: {
        value: cdktf.stringToHclTerraform(this._mediatorSubnetId),
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
      node1_subnet_id: {
        value: cdktf.stringToHclTerraform(this._node1SubnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node2_subnet_id: {
        value: cdktf.stringToHclTerraform(this._node2SubnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nss_account: {
        value: cdktf.stringToHclTerraform(this._nssAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ontap_version: {
        value: cdktf.stringToHclTerraform(this._ontapVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      open_security_group: {
        value: cdktf.booleanToHclTerraform(this._openSecurityGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      optimized_network_utilization: {
        value: cdktf.booleanToHclTerraform(this._optimizedNetworkUtilization),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      platform_serial_number: {
        value: cdktf.stringToHclTerraform(this._platformSerialNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      platform_serial_number_node1: {
        value: cdktf.stringToHclTerraform(this._platformSerialNumberNode1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      platform_serial_number_node2: {
        value: cdktf.stringToHclTerraform(this._platformSerialNumberNode2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provided_license: {
        value: cdktf.stringToHclTerraform(this._providedLicense),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retries: {
        value: cdktf.numberToHclTerraform(this._retries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      route_table_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._routeTableIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      saas_subscription_id: {
        value: cdktf.stringToHclTerraform(this._saasSubscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group_id: {
        value: cdktf.stringToHclTerraform(this._securityGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      svm_floating_ip: {
        value: cdktf.stringToHclTerraform(this._svmFloatingIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      svm_name: {
        value: cdktf.stringToHclTerraform(this._svmName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      svm_password: {
        value: cdktf.stringToHclTerraform(this._svmPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      throughput: {
        value: cdktf.numberToHclTerraform(this._throughput),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tier_level: {
        value: cdktf.stringToHclTerraform(this._tierLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upgrade_ontap_version: {
        value: cdktf.booleanToHclTerraform(this._upgradeOntapVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_latest_version: {
        value: cdktf.booleanToHclTerraform(this._useLatestVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      worm_retention_period_length: {
        value: cdktf.numberToHclTerraform(this._wormRetentionPeriodLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      worm_retention_period_unit: {
        value: cdktf.stringToHclTerraform(this._wormRetentionPeriodUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      writing_speed_state: {
        value: cdktf.stringToHclTerraform(this._writingSpeedState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_tag: {
        value: cdktf.listMapperHcl(cvoAwsAwsTagToHclTerraform, true)(this._awsTag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CvoAwsAwsTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
