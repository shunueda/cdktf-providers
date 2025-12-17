// https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cvo_azure
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CvoAzureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cvo_azure#allow_deploy_in_existing_rg CvoAzure#allow_deploy_in_existing_rg}
  */
  readonly allowDeployInExistingRg?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cvo_azure#availability_zone CvoAzure#availability_zone}
  */
  readonly availabilityZone?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cvo_azure#availability_zone_node1 CvoAzure#availability_zone_node1}
  */
  readonly availabilityZoneNode1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cvo_azure#availability_zone_node2 CvoAzure#availability_zone_node2}
  */
  readonly availabilityZoneNode2?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cvo_azure#backup_volumes_to_cbs CvoAzure#backup_volumes_to_cbs}
  */
  readonly backupVolumesToCbs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cvo_azure#capacity_package_name CvoAzure#capacity_package_name}
  */
  readonly capacityPackageName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cvo_azure#capacity_tier CvoAzure#capacity_tier}
  */
  readonly capacityTier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cvo_azure#cidr CvoAzure#cidr}
  */
  readonly cidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cvo_azure#client_id CvoAzure#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cvo_azure#cloud_provider_account CvoAzure#cloud_provider_account}
  */
  readonly cloudProviderAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cvo_azure#data_encryption_type CvoAzure#data_encryption_type}
  */
  readonly dataEncryptionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cvo_azure#disk_size CvoAzure#disk_size}
  */
  readonly diskSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cvo_azure#disk_size_unit CvoAzure#disk_size_unit}
  */
  readonly diskSizeUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cvo_azure#enable_compliance CvoAzure#enable_compliance}
  */
  readonly enableCompliance?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cvo_azure#enable_monitoring CvoAzure#enable_monitoring}
  */
  readonly enableMonitoring?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cvo_azure#ha_enable_https CvoAzure#ha_enable_https}
  */
  readonly haEnableHttps?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cvo_azure#id CvoAzure#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cvo_azure#instance_type CvoAzure#instance_type}
  */
  readonly instanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cvo_azure#is_ha CvoAzure#is_ha}
  */
  readonly isHa?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cvo_azure#license_type CvoAzure#license_type}
  */
  readonly licenseType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cvo_azure#location CvoAzure#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cvo_azure#name CvoAzure#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cvo_azure#nss_account CvoAzure#nss_account}
  */
  readonly nssAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cvo_azure#ontap_version CvoAzure#ontap_version}
  */
  readonly ontapVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cvo_azure#open_security_group CvoAzure#open_security_group}
  */
  readonly openSecurityGroup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cvo_azure#platform_serial_number_node1 CvoAzure#platform_serial_number_node1}
  */
  readonly platformSerialNumberNode1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cvo_azure#platform_serial_number_node2 CvoAzure#platform_serial_number_node2}
  */
  readonly platformSerialNumberNode2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cvo_azure#provided_license CvoAzure#provided_license}
  */
  readonly providedLicense?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cvo_azure#resource_group CvoAzure#resource_group}
  */
  readonly resourceGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cvo_azure#retries CvoAzure#retries}
  */
  readonly retries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cvo_azure#saas_subscription_id CvoAzure#saas_subscription_id}
  */
  readonly saasSubscriptionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cvo_azure#security_group_id CvoAzure#security_group_id}
  */
  readonly securityGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cvo_azure#serial_number CvoAzure#serial_number}
  */
  readonly serialNumber?: string;
  /**
  * Controls network access for the storage account. Accepted values: Enabled, Disabled, SecuredByPerimeter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cvo_azure#storage_account_network_access CvoAzure#storage_account_network_access}
  */
  readonly storageAccountNetworkAccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cvo_azure#storage_type CvoAzure#storage_type}
  */
  readonly storageType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cvo_azure#subnet_id CvoAzure#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cvo_azure#subscription_id CvoAzure#subscription_id}
  */
  readonly subscriptionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cvo_azure#svm_name CvoAzure#svm_name}
  */
  readonly svmName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cvo_azure#svm_password CvoAzure#svm_password}
  */
  readonly svmPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cvo_azure#tier_level CvoAzure#tier_level}
  */
  readonly tierLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cvo_azure#upgrade_ontap_version CvoAzure#upgrade_ontap_version}
  */
  readonly upgradeOntapVersion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cvo_azure#use_latest_version CvoAzure#use_latest_version}
  */
  readonly useLatestVersion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cvo_azure#vnet_id CvoAzure#vnet_id}
  */
  readonly vnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cvo_azure#vnet_resource_group CvoAzure#vnet_resource_group}
  */
  readonly vnetResourceGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cvo_azure#workspace_id CvoAzure#workspace_id}
  */
  readonly workspaceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cvo_azure#worm_retention_period_length CvoAzure#worm_retention_period_length}
  */
  readonly wormRetentionPeriodLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cvo_azure#worm_retention_period_unit CvoAzure#worm_retention_period_unit}
  */
  readonly wormRetentionPeriodUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cvo_azure#writing_speed_state CvoAzure#writing_speed_state}
  */
  readonly writingSpeedState?: string;
  /**
  * azure_encryption_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cvo_azure#azure_encryption_parameters CvoAzure#azure_encryption_parameters}
  */
  readonly azureEncryptionParameters?: CvoAzureAzureEncryptionParameters;
  /**
  * azure_tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cvo_azure#azure_tag CvoAzure#azure_tag}
  */
  readonly azureTag?: CvoAzureAzureTag[] | cdktf.IResolvable;
  /**
  * svm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cvo_azure#svm CvoAzure#svm}
  */
  readonly svm?: CvoAzureSvm[] | cdktf.IResolvable;
}
export interface CvoAzureAzureEncryptionParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cvo_azure#key CvoAzure#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cvo_azure#user_assigned_identity CvoAzure#user_assigned_identity}
  */
  readonly userAssignedIdentity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cvo_azure#vault_name CvoAzure#vault_name}
  */
  readonly vaultName: string;
}

export function cvoAzureAzureEncryptionParametersToTerraform(struct?: CvoAzureAzureEncryptionParametersOutputReference | CvoAzureAzureEncryptionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    user_assigned_identity: cdktf.stringToTerraform(struct!.userAssignedIdentity),
    vault_name: cdktf.stringToTerraform(struct!.vaultName),
  }
}


export function cvoAzureAzureEncryptionParametersToHclTerraform(struct?: CvoAzureAzureEncryptionParametersOutputReference | CvoAzureAzureEncryptionParameters): any {
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
    user_assigned_identity: {
      value: cdktf.stringToHclTerraform(struct!.userAssignedIdentity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vault_name: {
      value: cdktf.stringToHclTerraform(struct!.vaultName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CvoAzureAzureEncryptionParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CvoAzureAzureEncryptionParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._userAssignedIdentity !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAssignedIdentity = this._userAssignedIdentity;
    }
    if (this._vaultName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultName = this._vaultName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CvoAzureAzureEncryptionParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._userAssignedIdentity = undefined;
      this._vaultName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._userAssignedIdentity = value.userAssignedIdentity;
      this._vaultName = value.vaultName;
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

  // user_assigned_identity - computed: false, optional: true, required: false
  private _userAssignedIdentity?: string; 
  public get userAssignedIdentity() {
    return this.getStringAttribute('user_assigned_identity');
  }
  public set userAssignedIdentity(value: string) {
    this._userAssignedIdentity = value;
  }
  public resetUserAssignedIdentity() {
    this._userAssignedIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAssignedIdentityInput() {
    return this._userAssignedIdentity;
  }

  // vault_name - computed: false, optional: false, required: true
  private _vaultName?: string; 
  public get vaultName() {
    return this.getStringAttribute('vault_name');
  }
  public set vaultName(value: string) {
    this._vaultName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultNameInput() {
    return this._vaultName;
  }
}
export interface CvoAzureAzureTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cvo_azure#tag_key CvoAzure#tag_key}
  */
  readonly tagKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cvo_azure#tag_value CvoAzure#tag_value}
  */
  readonly tagValue?: string;
}

export function cvoAzureAzureTagToTerraform(struct?: CvoAzureAzureTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag_key: cdktf.stringToTerraform(struct!.tagKey),
    tag_value: cdktf.stringToTerraform(struct!.tagValue),
  }
}


export function cvoAzureAzureTagToHclTerraform(struct?: CvoAzureAzureTag | cdktf.IResolvable): any {
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

export class CvoAzureAzureTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CvoAzureAzureTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CvoAzureAzureTag | cdktf.IResolvable | undefined) {
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

export class CvoAzureAzureTagList extends cdktf.ComplexList {
  public internalValue? : CvoAzureAzureTag[] | cdktf.IResolvable

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
  public get(index: number): CvoAzureAzureTagOutputReference {
    return new CvoAzureAzureTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CvoAzureSvm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cvo_azure#root_volume_aggregate CvoAzure#root_volume_aggregate}
  */
  readonly rootVolumeAggregate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cvo_azure#svm_name CvoAzure#svm_name}
  */
  readonly svmName: string;
}

export function cvoAzureSvmToTerraform(struct?: CvoAzureSvm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    root_volume_aggregate: cdktf.stringToTerraform(struct!.rootVolumeAggregate),
    svm_name: cdktf.stringToTerraform(struct!.svmName),
  }
}


export function cvoAzureSvmToHclTerraform(struct?: CvoAzureSvm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    root_volume_aggregate: {
      value: cdktf.stringToHclTerraform(struct!.rootVolumeAggregate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    svm_name: {
      value: cdktf.stringToHclTerraform(struct!.svmName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CvoAzureSvmOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CvoAzureSvm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rootVolumeAggregate !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootVolumeAggregate = this._rootVolumeAggregate;
    }
    if (this._svmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.svmName = this._svmName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CvoAzureSvm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rootVolumeAggregate = undefined;
      this._svmName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rootVolumeAggregate = value.rootVolumeAggregate;
      this._svmName = value.svmName;
    }
  }

  // root_volume_aggregate - computed: false, optional: true, required: false
  private _rootVolumeAggregate?: string; 
  public get rootVolumeAggregate() {
    return this.getStringAttribute('root_volume_aggregate');
  }
  public set rootVolumeAggregate(value: string) {
    this._rootVolumeAggregate = value;
  }
  public resetRootVolumeAggregate() {
    this._rootVolumeAggregate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootVolumeAggregateInput() {
    return this._rootVolumeAggregate;
  }

  // svm_name - computed: false, optional: false, required: true
  private _svmName?: string; 
  public get svmName() {
    return this.getStringAttribute('svm_name');
  }
  public set svmName(value: string) {
    this._svmName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get svmNameInput() {
    return this._svmName;
  }
}

export class CvoAzureSvmList extends cdktf.ComplexList {
  public internalValue? : CvoAzureSvm[] | cdktf.IResolvable

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
  public get(index: number): CvoAzureSvmOutputReference {
    return new CvoAzureSvmOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cvo_azure netapp-cloudmanager_cvo_azure}
*/
export class CvoAzure extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-cloudmanager_cvo_azure";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CvoAzure resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CvoAzure to import
  * @param importFromId The id of the existing CvoAzure that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cvo_azure#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CvoAzure to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-cloudmanager_cvo_azure", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cvo_azure netapp-cloudmanager_cvo_azure} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CvoAzureConfig
  */
  public constructor(scope: Construct, id: string, config: CvoAzureConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-cloudmanager_cvo_azure',
      terraformGeneratorMetadata: {
        providerName: 'netapp-cloudmanager',
        providerVersion: '27.0.0',
        providerVersionConstraint: '27.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowDeployInExistingRg = config.allowDeployInExistingRg;
    this._availabilityZone = config.availabilityZone;
    this._availabilityZoneNode1 = config.availabilityZoneNode1;
    this._availabilityZoneNode2 = config.availabilityZoneNode2;
    this._backupVolumesToCbs = config.backupVolumesToCbs;
    this._capacityPackageName = config.capacityPackageName;
    this._capacityTier = config.capacityTier;
    this._cidr = config.cidr;
    this._clientId = config.clientId;
    this._cloudProviderAccount = config.cloudProviderAccount;
    this._dataEncryptionType = config.dataEncryptionType;
    this._diskSize = config.diskSize;
    this._diskSizeUnit = config.diskSizeUnit;
    this._enableCompliance = config.enableCompliance;
    this._enableMonitoring = config.enableMonitoring;
    this._haEnableHttps = config.haEnableHttps;
    this._id = config.id;
    this._instanceType = config.instanceType;
    this._isHa = config.isHa;
    this._licenseType = config.licenseType;
    this._location = config.location;
    this._name = config.name;
    this._nssAccount = config.nssAccount;
    this._ontapVersion = config.ontapVersion;
    this._openSecurityGroup = config.openSecurityGroup;
    this._platformSerialNumberNode1 = config.platformSerialNumberNode1;
    this._platformSerialNumberNode2 = config.platformSerialNumberNode2;
    this._providedLicense = config.providedLicense;
    this._resourceGroup = config.resourceGroup;
    this._retries = config.retries;
    this._saasSubscriptionId = config.saasSubscriptionId;
    this._securityGroupId = config.securityGroupId;
    this._serialNumber = config.serialNumber;
    this._storageAccountNetworkAccess = config.storageAccountNetworkAccess;
    this._storageType = config.storageType;
    this._subnetId = config.subnetId;
    this._subscriptionId = config.subscriptionId;
    this._svmName = config.svmName;
    this._svmPassword = config.svmPassword;
    this._tierLevel = config.tierLevel;
    this._upgradeOntapVersion = config.upgradeOntapVersion;
    this._useLatestVersion = config.useLatestVersion;
    this._vnetId = config.vnetId;
    this._vnetResourceGroup = config.vnetResourceGroup;
    this._workspaceId = config.workspaceId;
    this._wormRetentionPeriodLength = config.wormRetentionPeriodLength;
    this._wormRetentionPeriodUnit = config.wormRetentionPeriodUnit;
    this._writingSpeedState = config.writingSpeedState;
    this._azureEncryptionParameters.internalValue = config.azureEncryptionParameters;
    this._azureTag.internalValue = config.azureTag;
    this._svm.internalValue = config.svm;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_deploy_in_existing_rg - computed: false, optional: true, required: false
  private _allowDeployInExistingRg?: boolean | cdktf.IResolvable; 
  public get allowDeployInExistingRg() {
    return this.getBooleanAttribute('allow_deploy_in_existing_rg');
  }
  public set allowDeployInExistingRg(value: boolean | cdktf.IResolvable) {
    this._allowDeployInExistingRg = value;
  }
  public resetAllowDeployInExistingRg() {
    this._allowDeployInExistingRg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDeployInExistingRgInput() {
    return this._allowDeployInExistingRg;
  }

  // availability_zone - computed: false, optional: true, required: false
  private _availabilityZone?: number; 
  public get availabilityZone() {
    return this.getNumberAttribute('availability_zone');
  }
  public set availabilityZone(value: number) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // availability_zone_node1 - computed: false, optional: true, required: false
  private _availabilityZoneNode1?: number; 
  public get availabilityZoneNode1() {
    return this.getNumberAttribute('availability_zone_node1');
  }
  public set availabilityZoneNode1(value: number) {
    this._availabilityZoneNode1 = value;
  }
  public resetAvailabilityZoneNode1() {
    this._availabilityZoneNode1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneNode1Input() {
    return this._availabilityZoneNode1;
  }

  // availability_zone_node2 - computed: false, optional: true, required: false
  private _availabilityZoneNode2?: number; 
  public get availabilityZoneNode2() {
    return this.getNumberAttribute('availability_zone_node2');
  }
  public set availabilityZoneNode2(value: number) {
    this._availabilityZoneNode2 = value;
  }
  public resetAvailabilityZoneNode2() {
    this._availabilityZoneNode2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneNode2Input() {
    return this._availabilityZoneNode2;
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

  // cidr - computed: false, optional: true, required: false
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
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

  // disk_size - computed: false, optional: true, required: false
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  public resetDiskSize() {
    this._diskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // disk_size_unit - computed: false, optional: true, required: false
  private _diskSizeUnit?: string; 
  public get diskSizeUnit() {
    return this.getStringAttribute('disk_size_unit');
  }
  public set diskSizeUnit(value: string) {
    this._diskSizeUnit = value;
  }
  public resetDiskSizeUnit() {
    this._diskSizeUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeUnitInput() {
    return this._diskSizeUnit;
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

  // ha_enable_https - computed: false, optional: true, required: false
  private _haEnableHttps?: boolean | cdktf.IResolvable; 
  public get haEnableHttps() {
    return this.getBooleanAttribute('ha_enable_https');
  }
  public set haEnableHttps(value: boolean | cdktf.IResolvable) {
    this._haEnableHttps = value;
  }
  public resetHaEnableHttps() {
    this._haEnableHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haEnableHttpsInput() {
    return this._haEnableHttps;
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

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // serial_number - computed: false, optional: true, required: false
  private _serialNumber?: string; 
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }
  public resetSerialNumber() {
    this._serialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }

  // storage_account_network_access - computed: false, optional: true, required: false
  private _storageAccountNetworkAccess?: string; 
  public get storageAccountNetworkAccess() {
    return this.getStringAttribute('storage_account_network_access');
  }
  public set storageAccountNetworkAccess(value: string) {
    this._storageAccountNetworkAccess = value;
  }
  public resetStorageAccountNetworkAccess() {
    this._storageAccountNetworkAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountNetworkAccessInput() {
    return this._storageAccountNetworkAccess;
  }

  // storage_type - computed: false, optional: true, required: false
  private _storageType?: string; 
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
  public set storageType(value: string) {
    this._storageType = value;
  }
  public resetStorageType() {
    this._storageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // subscription_id - computed: false, optional: false, required: true
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
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

  // vnet_id - computed: false, optional: false, required: true
  private _vnetId?: string; 
  public get vnetId() {
    return this.getStringAttribute('vnet_id');
  }
  public set vnetId(value: string) {
    this._vnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetIdInput() {
    return this._vnetId;
  }

  // vnet_resource_group - computed: false, optional: true, required: false
  private _vnetResourceGroup?: string; 
  public get vnetResourceGroup() {
    return this.getStringAttribute('vnet_resource_group');
  }
  public set vnetResourceGroup(value: string) {
    this._vnetResourceGroup = value;
  }
  public resetVnetResourceGroup() {
    this._vnetResourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetResourceGroupInput() {
    return this._vnetResourceGroup;
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

  // azure_encryption_parameters - computed: false, optional: true, required: false
  private _azureEncryptionParameters = new CvoAzureAzureEncryptionParametersOutputReference(this, "azure_encryption_parameters");
  public get azureEncryptionParameters() {
    return this._azureEncryptionParameters;
  }
  public putAzureEncryptionParameters(value: CvoAzureAzureEncryptionParameters) {
    this._azureEncryptionParameters.internalValue = value;
  }
  public resetAzureEncryptionParameters() {
    this._azureEncryptionParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureEncryptionParametersInput() {
    return this._azureEncryptionParameters.internalValue;
  }

  // azure_tag - computed: false, optional: true, required: false
  private _azureTag = new CvoAzureAzureTagList(this, "azure_tag", true);
  public get azureTag() {
    return this._azureTag;
  }
  public putAzureTag(value: CvoAzureAzureTag[] | cdktf.IResolvable) {
    this._azureTag.internalValue = value;
  }
  public resetAzureTag() {
    this._azureTag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureTagInput() {
    return this._azureTag.internalValue;
  }

  // svm - computed: false, optional: true, required: false
  private _svm = new CvoAzureSvmList(this, "svm", true);
  public get svm() {
    return this._svm;
  }
  public putSvm(value: CvoAzureSvm[] | cdktf.IResolvable) {
    this._svm.internalValue = value;
  }
  public resetSvm() {
    this._svm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svmInput() {
    return this._svm.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_deploy_in_existing_rg: cdktf.booleanToTerraform(this._allowDeployInExistingRg),
      availability_zone: cdktf.numberToTerraform(this._availabilityZone),
      availability_zone_node1: cdktf.numberToTerraform(this._availabilityZoneNode1),
      availability_zone_node2: cdktf.numberToTerraform(this._availabilityZoneNode2),
      backup_volumes_to_cbs: cdktf.booleanToTerraform(this._backupVolumesToCbs),
      capacity_package_name: cdktf.stringToTerraform(this._capacityPackageName),
      capacity_tier: cdktf.stringToTerraform(this._capacityTier),
      cidr: cdktf.stringToTerraform(this._cidr),
      client_id: cdktf.stringToTerraform(this._clientId),
      cloud_provider_account: cdktf.stringToTerraform(this._cloudProviderAccount),
      data_encryption_type: cdktf.stringToTerraform(this._dataEncryptionType),
      disk_size: cdktf.numberToTerraform(this._diskSize),
      disk_size_unit: cdktf.stringToTerraform(this._diskSizeUnit),
      enable_compliance: cdktf.booleanToTerraform(this._enableCompliance),
      enable_monitoring: cdktf.booleanToTerraform(this._enableMonitoring),
      ha_enable_https: cdktf.booleanToTerraform(this._haEnableHttps),
      id: cdktf.stringToTerraform(this._id),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      is_ha: cdktf.booleanToTerraform(this._isHa),
      license_type: cdktf.stringToTerraform(this._licenseType),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      nss_account: cdktf.stringToTerraform(this._nssAccount),
      ontap_version: cdktf.stringToTerraform(this._ontapVersion),
      open_security_group: cdktf.booleanToTerraform(this._openSecurityGroup),
      platform_serial_number_node1: cdktf.stringToTerraform(this._platformSerialNumberNode1),
      platform_serial_number_node2: cdktf.stringToTerraform(this._platformSerialNumberNode2),
      provided_license: cdktf.stringToTerraform(this._providedLicense),
      resource_group: cdktf.stringToTerraform(this._resourceGroup),
      retries: cdktf.numberToTerraform(this._retries),
      saas_subscription_id: cdktf.stringToTerraform(this._saasSubscriptionId),
      security_group_id: cdktf.stringToTerraform(this._securityGroupId),
      serial_number: cdktf.stringToTerraform(this._serialNumber),
      storage_account_network_access: cdktf.stringToTerraform(this._storageAccountNetworkAccess),
      storage_type: cdktf.stringToTerraform(this._storageType),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
      svm_name: cdktf.stringToTerraform(this._svmName),
      svm_password: cdktf.stringToTerraform(this._svmPassword),
      tier_level: cdktf.stringToTerraform(this._tierLevel),
      upgrade_ontap_version: cdktf.booleanToTerraform(this._upgradeOntapVersion),
      use_latest_version: cdktf.booleanToTerraform(this._useLatestVersion),
      vnet_id: cdktf.stringToTerraform(this._vnetId),
      vnet_resource_group: cdktf.stringToTerraform(this._vnetResourceGroup),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
      worm_retention_period_length: cdktf.numberToTerraform(this._wormRetentionPeriodLength),
      worm_retention_period_unit: cdktf.stringToTerraform(this._wormRetentionPeriodUnit),
      writing_speed_state: cdktf.stringToTerraform(this._writingSpeedState),
      azure_encryption_parameters: cvoAzureAzureEncryptionParametersToTerraform(this._azureEncryptionParameters.internalValue),
      azure_tag: cdktf.listMapper(cvoAzureAzureTagToTerraform, true)(this._azureTag.internalValue),
      svm: cdktf.listMapper(cvoAzureSvmToTerraform, true)(this._svm.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_deploy_in_existing_rg: {
        value: cdktf.booleanToHclTerraform(this._allowDeployInExistingRg),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      availability_zone: {
        value: cdktf.numberToHclTerraform(this._availabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      availability_zone_node1: {
        value: cdktf.numberToHclTerraform(this._availabilityZoneNode1),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      availability_zone_node2: {
        value: cdktf.numberToHclTerraform(this._availabilityZoneNode2),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      cidr: {
        value: cdktf.stringToHclTerraform(this._cidr),
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
      data_encryption_type: {
        value: cdktf.stringToHclTerraform(this._dataEncryptionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_size: {
        value: cdktf.numberToHclTerraform(this._diskSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disk_size_unit: {
        value: cdktf.stringToHclTerraform(this._diskSizeUnit),
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
      ha_enable_https: {
        value: cdktf.booleanToHclTerraform(this._haEnableHttps),
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
      instance_type: {
        value: cdktf.stringToHclTerraform(this._instanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      location: {
        value: cdktf.stringToHclTerraform(this._location),
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
      resource_group: {
        value: cdktf.stringToHclTerraform(this._resourceGroup),
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
      serial_number: {
        value: cdktf.stringToHclTerraform(this._serialNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_account_network_access: {
        value: cdktf.stringToHclTerraform(this._storageAccountNetworkAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_type: {
        value: cdktf.stringToHclTerraform(this._storageType),
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
      subscription_id: {
        value: cdktf.stringToHclTerraform(this._subscriptionId),
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
      vnet_id: {
        value: cdktf.stringToHclTerraform(this._vnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vnet_resource_group: {
        value: cdktf.stringToHclTerraform(this._vnetResourceGroup),
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
      azure_encryption_parameters: {
        value: cvoAzureAzureEncryptionParametersToHclTerraform(this._azureEncryptionParameters.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CvoAzureAzureEncryptionParametersList",
      },
      azure_tag: {
        value: cdktf.listMapperHcl(cvoAzureAzureTagToHclTerraform, true)(this._azureTag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CvoAzureAzureTagList",
      },
      svm: {
        value: cdktf.listMapperHcl(cvoAzureSvmToHclTerraform, true)(this._svm.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CvoAzureSvmList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
