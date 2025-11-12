// https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/data-sources/cloud
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAviCloudConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/data-sources/cloud#id DataAviCloud#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/data-sources/cloud#name DataAviCloud#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/data-sources/cloud#tenant_ref DataAviCloud#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/data-sources/cloud#uuid DataAviCloud#uuid}
  */
  readonly uuid?: string;
}
export interface DataAviCloudAwsConfigurationEbsEncryption {
}

export function dataAviCloudAwsConfigurationEbsEncryptionToTerraform(struct?: DataAviCloudAwsConfigurationEbsEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudAwsConfigurationEbsEncryptionToHclTerraform(struct?: DataAviCloudAwsConfigurationEbsEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudAwsConfigurationEbsEncryptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudAwsConfigurationEbsEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudAwsConfigurationEbsEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // master_key - computed: true, optional: false, required: false
  public get masterKey() {
    return this.getStringAttribute('master_key');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }
}

export class DataAviCloudAwsConfigurationEbsEncryptionList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudAwsConfigurationEbsEncryptionOutputReference {
    return new DataAviCloudAwsConfigurationEbsEncryptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudAwsConfigurationS3Encryption {
}

export function dataAviCloudAwsConfigurationS3EncryptionToTerraform(struct?: DataAviCloudAwsConfigurationS3Encryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudAwsConfigurationS3EncryptionToHclTerraform(struct?: DataAviCloudAwsConfigurationS3Encryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudAwsConfigurationS3EncryptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudAwsConfigurationS3Encryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudAwsConfigurationS3Encryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // master_key - computed: true, optional: false, required: false
  public get masterKey() {
    return this.getStringAttribute('master_key');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }
}

export class DataAviCloudAwsConfigurationS3EncryptionList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudAwsConfigurationS3EncryptionOutputReference {
    return new DataAviCloudAwsConfigurationS3EncryptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudAwsConfigurationSqsEncryption {
}

export function dataAviCloudAwsConfigurationSqsEncryptionToTerraform(struct?: DataAviCloudAwsConfigurationSqsEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudAwsConfigurationSqsEncryptionToHclTerraform(struct?: DataAviCloudAwsConfigurationSqsEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudAwsConfigurationSqsEncryptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudAwsConfigurationSqsEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudAwsConfigurationSqsEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // master_key - computed: true, optional: false, required: false
  public get masterKey() {
    return this.getStringAttribute('master_key');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }
}

export class DataAviCloudAwsConfigurationSqsEncryptionList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudAwsConfigurationSqsEncryptionOutputReference {
    return new DataAviCloudAwsConfigurationSqsEncryptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudAwsConfigurationZones {
}

export function dataAviCloudAwsConfigurationZonesToTerraform(struct?: DataAviCloudAwsConfigurationZones): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudAwsConfigurationZonesToHclTerraform(struct?: DataAviCloudAwsConfigurationZones): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudAwsConfigurationZonesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudAwsConfigurationZones | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudAwsConfigurationZones | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // mgmt_network_name - computed: true, optional: false, required: false
  public get mgmtNetworkName() {
    return this.getStringAttribute('mgmt_network_name');
  }

  // mgmt_network_uuid - computed: true, optional: false, required: false
  public get mgmtNetworkUuid() {
    return this.getStringAttribute('mgmt_network_uuid');
  }
}

export class DataAviCloudAwsConfigurationZonesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudAwsConfigurationZonesOutputReference {
    return new DataAviCloudAwsConfigurationZonesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudAwsConfiguration {
}

export function dataAviCloudAwsConfigurationToTerraform(struct?: DataAviCloudAwsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudAwsConfigurationToHclTerraform(struct?: DataAviCloudAwsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudAwsConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudAwsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudAwsConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_key_id - computed: true, optional: false, required: false
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }

  // asg_poll_interval - computed: true, optional: false, required: false
  public get asgPollInterval() {
    return this.getStringAttribute('asg_poll_interval');
  }

  // ebs_encryption - computed: true, optional: false, required: false
  private _ebsEncryption = new DataAviCloudAwsConfigurationEbsEncryptionList(this, "ebs_encryption", true);
  public get ebsEncryption() {
    return this._ebsEncryption;
  }

  // free_elasticips - computed: true, optional: false, required: false
  public get freeElasticips() {
    return this.getStringAttribute('free_elasticips');
  }

  // iam_assume_role - computed: true, optional: false, required: false
  public get iamAssumeRole() {
    return this.getStringAttribute('iam_assume_role');
  }

  // publish_vip_to_public_zone - computed: true, optional: false, required: false
  public get publishVipToPublicZone() {
    return this.getStringAttribute('publish_vip_to_public_zone');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // route53_integration - computed: true, optional: false, required: false
  public get route53Integration() {
    return this.getStringAttribute('route53_integration');
  }

  // s3_encryption - computed: true, optional: false, required: false
  private _s3Encryption = new DataAviCloudAwsConfigurationS3EncryptionList(this, "s3_encryption", true);
  public get s3Encryption() {
    return this._s3Encryption;
  }

  // secret_access_key - computed: true, optional: false, required: false
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }

  // sqs_encryption - computed: true, optional: false, required: false
  private _sqsEncryption = new DataAviCloudAwsConfigurationSqsEncryptionList(this, "sqs_encryption", true);
  public get sqsEncryption() {
    return this._sqsEncryption;
  }

  // ttl - computed: true, optional: false, required: false
  public get ttl() {
    return this.getStringAttribute('ttl');
  }

  // use_iam_roles - computed: true, optional: false, required: false
  public get useIamRoles() {
    return this.getStringAttribute('use_iam_roles');
  }

  // use_sns_sqs - computed: true, optional: false, required: false
  public get useSnsSqs() {
    return this.getStringAttribute('use_sns_sqs');
  }

  // vpc - computed: true, optional: false, required: false
  public get vpc() {
    return this.getStringAttribute('vpc');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // zones - computed: true, optional: false, required: false
  private _zones = new DataAviCloudAwsConfigurationZonesList(this, "zones", false);
  public get zones() {
    return this._zones;
  }
}

export class DataAviCloudAwsConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudAwsConfigurationOutputReference {
    return new DataAviCloudAwsConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudAzureConfigurationNetworkInfo {
}

export function dataAviCloudAzureConfigurationNetworkInfoToTerraform(struct?: DataAviCloudAzureConfigurationNetworkInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudAzureConfigurationNetworkInfoToHclTerraform(struct?: DataAviCloudAzureConfigurationNetworkInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudAzureConfigurationNetworkInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudAzureConfigurationNetworkInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudAzureConfigurationNetworkInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // management_network_id - computed: true, optional: false, required: false
  public get managementNetworkId() {
    return this.getStringAttribute('management_network_id');
  }

  // se_network_id - computed: true, optional: false, required: false
  public get seNetworkId() {
    return this.getStringAttribute('se_network_id');
  }

  // virtual_network_id - computed: true, optional: false, required: false
  public get virtualNetworkId() {
    return this.getStringAttribute('virtual_network_id');
  }
}

export class DataAviCloudAzureConfigurationNetworkInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudAzureConfigurationNetworkInfoOutputReference {
    return new DataAviCloudAzureConfigurationNetworkInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudAzureConfiguration {
}

export function dataAviCloudAzureConfigurationToTerraform(struct?: DataAviCloudAzureConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudAzureConfigurationToHclTerraform(struct?: DataAviCloudAzureConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudAzureConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudAzureConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudAzureConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_zones - computed: true, optional: false, required: false
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }

  // cloud_credentials_ref - computed: true, optional: false, required: false
  public get cloudCredentialsRef() {
    return this.getStringAttribute('cloud_credentials_ref');
  }

  // des_id - computed: true, optional: false, required: false
  public get desId() {
    return this.getStringAttribute('des_id');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // network_info - computed: true, optional: false, required: false
  private _networkInfo = new DataAviCloudAzureConfigurationNetworkInfoList(this, "network_info", false);
  public get networkInfo() {
    return this._networkInfo;
  }

  // resource_group - computed: true, optional: false, required: false
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }

  // se_storage_account - computed: true, optional: false, required: false
  public get seStorageAccount() {
    return this.getStringAttribute('se_storage_account');
  }

  // subscription_id - computed: true, optional: false, required: false
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }

  // use_azure_dns - computed: true, optional: false, required: false
  public get useAzureDns() {
    return this.getStringAttribute('use_azure_dns');
  }

  // use_enhanced_ha - computed: true, optional: false, required: false
  public get useEnhancedHa() {
    return this.getStringAttribute('use_enhanced_ha');
  }

  // use_managed_disks - computed: true, optional: false, required: false
  public get useManagedDisks() {
    return this.getStringAttribute('use_managed_disks');
  }

  // use_standard_alb - computed: true, optional: false, required: false
  public get useStandardAlb() {
    return this.getStringAttribute('use_standard_alb');
  }
}

export class DataAviCloudAzureConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudAzureConfigurationOutputReference {
    return new DataAviCloudAzureConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudCloudstackConfiguration {
}

export function dataAviCloudCloudstackConfigurationToTerraform(struct?: DataAviCloudCloudstackConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudCloudstackConfigurationToHclTerraform(struct?: DataAviCloudCloudstackConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudCloudstackConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudCloudstackConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudCloudstackConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_key_id - computed: true, optional: false, required: false
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }

  // api_url - computed: true, optional: false, required: false
  public get apiUrl() {
    return this.getStringAttribute('api_url');
  }

  // cntr_public_ip - computed: true, optional: false, required: false
  public get cntrPublicIp() {
    return this.getStringAttribute('cntr_public_ip');
  }

  // hypervisor - computed: true, optional: false, required: false
  public get hypervisor() {
    return this.getStringAttribute('hypervisor');
  }

  // mgmt_network_name - computed: true, optional: false, required: false
  public get mgmtNetworkName() {
    return this.getStringAttribute('mgmt_network_name');
  }

  // mgmt_network_uuid - computed: true, optional: false, required: false
  public get mgmtNetworkUuid() {
    return this.getStringAttribute('mgmt_network_uuid');
  }

  // secret_access_key - computed: true, optional: false, required: false
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }
}

export class DataAviCloudCloudstackConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudCloudstackConfigurationOutputReference {
    return new DataAviCloudCloudstackConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudConfigpbAttributes {
}

export function dataAviCloudConfigpbAttributesToTerraform(struct?: DataAviCloudConfigpbAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudConfigpbAttributesToHclTerraform(struct?: DataAviCloudConfigpbAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudConfigpbAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudConfigpbAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataAviCloudConfigpbAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudConfigpbAttributesOutputReference {
    return new DataAviCloudConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudCustomTags {
}

export function dataAviCloudCustomTagsToTerraform(struct?: DataAviCloudCustomTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudCustomTagsToHclTerraform(struct?: DataAviCloudCustomTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudCustomTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudCustomTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudCustomTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tag_key - computed: true, optional: false, required: false
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }

  // tag_val - computed: true, optional: false, required: false
  public get tagVal() {
    return this.getStringAttribute('tag_val');
  }
}

export class DataAviCloudCustomTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudCustomTagsOutputReference {
    return new DataAviCloudCustomTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudDnsResolversNameserverIps {
}

export function dataAviCloudDnsResolversNameserverIpsToTerraform(struct?: DataAviCloudDnsResolversNameserverIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudDnsResolversNameserverIpsToHclTerraform(struct?: DataAviCloudDnsResolversNameserverIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudDnsResolversNameserverIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudDnsResolversNameserverIps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudDnsResolversNameserverIps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // addr - computed: true, optional: false, required: false
  public get addr() {
    return this.getStringAttribute('addr');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviCloudDnsResolversNameserverIpsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudDnsResolversNameserverIpsOutputReference {
    return new DataAviCloudDnsResolversNameserverIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudDnsResolvers {
}

export function dataAviCloudDnsResolversToTerraform(struct?: DataAviCloudDnsResolvers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudDnsResolversToHclTerraform(struct?: DataAviCloudDnsResolvers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudDnsResolversOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudDnsResolvers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudDnsResolvers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fixed_ttl - computed: true, optional: false, required: false
  public get fixedTtl() {
    return this.getStringAttribute('fixed_ttl');
  }

  // min_ttl - computed: true, optional: false, required: false
  public get minTtl() {
    return this.getStringAttribute('min_ttl');
  }

  // nameserver_ips - computed: true, optional: false, required: false
  private _nameserverIps = new DataAviCloudDnsResolversNameserverIpsList(this, "nameserver_ips", false);
  public get nameserverIps() {
    return this._nameserverIps;
  }

  // resolver_name - computed: true, optional: false, required: false
  public get resolverName() {
    return this.getStringAttribute('resolver_name');
  }

  // use_mgmt - computed: true, optional: false, required: false
  public get useMgmt() {
    return this.getStringAttribute('use_mgmt');
  }
}

export class DataAviCloudDnsResolversList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudDnsResolversOutputReference {
    return new DataAviCloudDnsResolversOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudDockerConfigurationDockerRegistrySeOshiftRegistryRegistryVip {
}

export function dataAviCloudDockerConfigurationDockerRegistrySeOshiftRegistryRegistryVipToTerraform(struct?: DataAviCloudDockerConfigurationDockerRegistrySeOshiftRegistryRegistryVip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudDockerConfigurationDockerRegistrySeOshiftRegistryRegistryVipToHclTerraform(struct?: DataAviCloudDockerConfigurationDockerRegistrySeOshiftRegistryRegistryVip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudDockerConfigurationDockerRegistrySeOshiftRegistryRegistryVipOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudDockerConfigurationDockerRegistrySeOshiftRegistryRegistryVip | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudDockerConfigurationDockerRegistrySeOshiftRegistryRegistryVip | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // addr - computed: true, optional: false, required: false
  public get addr() {
    return this.getStringAttribute('addr');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviCloudDockerConfigurationDockerRegistrySeOshiftRegistryRegistryVipList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudDockerConfigurationDockerRegistrySeOshiftRegistryRegistryVipOutputReference {
    return new DataAviCloudDockerConfigurationDockerRegistrySeOshiftRegistryRegistryVipOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudDockerConfigurationDockerRegistrySeOshiftRegistry {
}

export function dataAviCloudDockerConfigurationDockerRegistrySeOshiftRegistryToTerraform(struct?: DataAviCloudDockerConfigurationDockerRegistrySeOshiftRegistry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudDockerConfigurationDockerRegistrySeOshiftRegistryToHclTerraform(struct?: DataAviCloudDockerConfigurationDockerRegistrySeOshiftRegistry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudDockerConfigurationDockerRegistrySeOshiftRegistryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudDockerConfigurationDockerRegistrySeOshiftRegistry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudDockerConfigurationDockerRegistrySeOshiftRegistry | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // registry_namespace - computed: true, optional: false, required: false
  public get registryNamespace() {
    return this.getStringAttribute('registry_namespace');
  }

  // registry_service - computed: true, optional: false, required: false
  public get registryService() {
    return this.getStringAttribute('registry_service');
  }

  // registry_vip - computed: true, optional: false, required: false
  private _registryVip = new DataAviCloudDockerConfigurationDockerRegistrySeOshiftRegistryRegistryVipList(this, "registry_vip", true);
  public get registryVip() {
    return this._registryVip;
  }
}

export class DataAviCloudDockerConfigurationDockerRegistrySeOshiftRegistryList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudDockerConfigurationDockerRegistrySeOshiftRegistryOutputReference {
    return new DataAviCloudDockerConfigurationDockerRegistrySeOshiftRegistryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudDockerConfigurationDockerRegistrySe {
}

export function dataAviCloudDockerConfigurationDockerRegistrySeToTerraform(struct?: DataAviCloudDockerConfigurationDockerRegistrySe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudDockerConfigurationDockerRegistrySeToHclTerraform(struct?: DataAviCloudDockerConfigurationDockerRegistrySe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudDockerConfigurationDockerRegistrySeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudDockerConfigurationDockerRegistrySe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudDockerConfigurationDockerRegistrySe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // oshift_registry - computed: true, optional: false, required: false
  private _oshiftRegistry = new DataAviCloudDockerConfigurationDockerRegistrySeOshiftRegistryList(this, "oshift_registry", true);
  public get oshiftRegistry() {
    return this._oshiftRegistry;
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // private - computed: true, optional: false, required: false
  public get private() {
    return this.getStringAttribute('private');
  }

  // registry - computed: true, optional: false, required: false
  public get registry() {
    return this.getStringAttribute('registry');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataAviCloudDockerConfigurationDockerRegistrySeList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudDockerConfigurationDockerRegistrySeOutputReference {
    return new DataAviCloudDockerConfigurationDockerRegistrySeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudDockerConfigurationEastWestPlacementSubnetIpAddr {
}

export function dataAviCloudDockerConfigurationEastWestPlacementSubnetIpAddrToTerraform(struct?: DataAviCloudDockerConfigurationEastWestPlacementSubnetIpAddr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudDockerConfigurationEastWestPlacementSubnetIpAddrToHclTerraform(struct?: DataAviCloudDockerConfigurationEastWestPlacementSubnetIpAddr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudDockerConfigurationEastWestPlacementSubnetIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudDockerConfigurationEastWestPlacementSubnetIpAddr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudDockerConfigurationEastWestPlacementSubnetIpAddr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // addr - computed: true, optional: false, required: false
  public get addr() {
    return this.getStringAttribute('addr');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviCloudDockerConfigurationEastWestPlacementSubnetIpAddrList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudDockerConfigurationEastWestPlacementSubnetIpAddrOutputReference {
    return new DataAviCloudDockerConfigurationEastWestPlacementSubnetIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudDockerConfigurationEastWestPlacementSubnet {
}

export function dataAviCloudDockerConfigurationEastWestPlacementSubnetToTerraform(struct?: DataAviCloudDockerConfigurationEastWestPlacementSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudDockerConfigurationEastWestPlacementSubnetToHclTerraform(struct?: DataAviCloudDockerConfigurationEastWestPlacementSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudDockerConfigurationEastWestPlacementSubnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudDockerConfigurationEastWestPlacementSubnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudDockerConfigurationEastWestPlacementSubnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_addr - computed: true, optional: false, required: false
  private _ipAddr = new DataAviCloudDockerConfigurationEastWestPlacementSubnetIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }

  // mask - computed: true, optional: false, required: false
  public get mask() {
    return this.getStringAttribute('mask');
  }
}

export class DataAviCloudDockerConfigurationEastWestPlacementSubnetList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudDockerConfigurationEastWestPlacementSubnetOutputReference {
    return new DataAviCloudDockerConfigurationEastWestPlacementSubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudDockerConfigurationSeExcludeAttributes {
}

export function dataAviCloudDockerConfigurationSeExcludeAttributesToTerraform(struct?: DataAviCloudDockerConfigurationSeExcludeAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudDockerConfigurationSeExcludeAttributesToHclTerraform(struct?: DataAviCloudDockerConfigurationSeExcludeAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudDockerConfigurationSeExcludeAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudDockerConfigurationSeExcludeAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudDockerConfigurationSeExcludeAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute - computed: true, optional: false, required: false
  public get attribute() {
    return this.getStringAttribute('attribute');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAviCloudDockerConfigurationSeExcludeAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudDockerConfigurationSeExcludeAttributesOutputReference {
    return new DataAviCloudDockerConfigurationSeExcludeAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudDockerConfigurationSeIncludeAttributes {
}

export function dataAviCloudDockerConfigurationSeIncludeAttributesToTerraform(struct?: DataAviCloudDockerConfigurationSeIncludeAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudDockerConfigurationSeIncludeAttributesToHclTerraform(struct?: DataAviCloudDockerConfigurationSeIncludeAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudDockerConfigurationSeIncludeAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudDockerConfigurationSeIncludeAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudDockerConfigurationSeIncludeAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute - computed: true, optional: false, required: false
  public get attribute() {
    return this.getStringAttribute('attribute');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAviCloudDockerConfigurationSeIncludeAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudDockerConfigurationSeIncludeAttributesOutputReference {
    return new DataAviCloudDockerConfigurationSeIncludeAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudDockerConfiguration {
}

export function dataAviCloudDockerConfigurationToTerraform(struct?: DataAviCloudDockerConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudDockerConfigurationToHclTerraform(struct?: DataAviCloudDockerConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudDockerConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudDockerConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudDockerConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_sync_frequency - computed: true, optional: false, required: false
  public get appSyncFrequency() {
    return this.getStringAttribute('app_sync_frequency');
  }

  // ca_tls_key_and_certificate_ref - computed: true, optional: false, required: false
  public get caTlsKeyAndCertificateRef() {
    return this.getStringAttribute('ca_tls_key_and_certificate_ref');
  }

  // client_tls_key_and_certificate_ref - computed: true, optional: false, required: false
  public get clientTlsKeyAndCertificateRef() {
    return this.getStringAttribute('client_tls_key_and_certificate_ref');
  }

  // container_port_match_http_service - computed: true, optional: false, required: false
  public get containerPortMatchHttpService() {
    return this.getStringAttribute('container_port_match_http_service');
  }

  // coredump_directory - computed: true, optional: false, required: false
  public get coredumpDirectory() {
    return this.getStringAttribute('coredump_directory');
  }

  // disable_auto_backend_service_sync - computed: true, optional: false, required: false
  public get disableAutoBackendServiceSync() {
    return this.getStringAttribute('disable_auto_backend_service_sync');
  }

  // disable_auto_frontend_service_sync - computed: true, optional: false, required: false
  public get disableAutoFrontendServiceSync() {
    return this.getStringAttribute('disable_auto_frontend_service_sync');
  }

  // disable_auto_se_creation - computed: true, optional: false, required: false
  public get disableAutoSeCreation() {
    return this.getStringAttribute('disable_auto_se_creation');
  }

  // docker_registry_se - computed: true, optional: false, required: false
  private _dockerRegistrySe = new DataAviCloudDockerConfigurationDockerRegistrySeList(this, "docker_registry_se", true);
  public get dockerRegistrySe() {
    return this._dockerRegistrySe;
  }

  // east_west_placement_subnet - computed: true, optional: false, required: false
  private _eastWestPlacementSubnet = new DataAviCloudDockerConfigurationEastWestPlacementSubnetList(this, "east_west_placement_subnet", true);
  public get eastWestPlacementSubnet() {
    return this._eastWestPlacementSubnet;
  }

  // enable_event_subscription - computed: true, optional: false, required: false
  public get enableEventSubscription() {
    return this.getStringAttribute('enable_event_subscription');
  }

  // feproxy_container_port_as_service - computed: true, optional: false, required: false
  public get feproxyContainerPortAsService() {
    return this.getStringAttribute('feproxy_container_port_as_service');
  }

  // feproxy_vips_enable_proxy_arp - computed: true, optional: false, required: false
  public get feproxyVipsEnableProxyArp() {
    return this.getStringAttribute('feproxy_vips_enable_proxy_arp');
  }

  // fleet_endpoint - computed: true, optional: false, required: false
  public get fleetEndpoint() {
    return this.getStringAttribute('fleet_endpoint');
  }

  // http_container_ports - computed: true, optional: false, required: false
  public get httpContainerPorts() {
    return this.getNumberListAttribute('http_container_ports');
  }

  // se_deployment_method - computed: true, optional: false, required: false
  public get seDeploymentMethod() {
    return this.getStringAttribute('se_deployment_method');
  }

  // se_exclude_attributes - computed: true, optional: false, required: false
  private _seExcludeAttributes = new DataAviCloudDockerConfigurationSeExcludeAttributesList(this, "se_exclude_attributes", false);
  public get seExcludeAttributes() {
    return this._seExcludeAttributes;
  }

  // se_include_attributes - computed: true, optional: false, required: false
  private _seIncludeAttributes = new DataAviCloudDockerConfigurationSeIncludeAttributesList(this, "se_include_attributes", false);
  public get seIncludeAttributes() {
    return this._seIncludeAttributes;
  }

  // se_spawn_rate - computed: true, optional: false, required: false
  public get seSpawnRate() {
    return this.getStringAttribute('se_spawn_rate');
  }

  // se_volume - computed: true, optional: false, required: false
  public get seVolume() {
    return this.getStringAttribute('se_volume');
  }

  // services_accessible_all_interfaces - computed: true, optional: false, required: false
  public get servicesAccessibleAllInterfaces() {
    return this.getStringAttribute('services_accessible_all_interfaces');
  }

  // ssh_user_ref - computed: true, optional: false, required: false
  public get sshUserRef() {
    return this.getStringAttribute('ssh_user_ref');
  }

  // ucp_nodes - computed: true, optional: false, required: false
  public get ucpNodes() {
    return this.getListAttribute('ucp_nodes');
  }

  // use_container_ip_port - computed: true, optional: false, required: false
  public get useContainerIpPort() {
    return this.getStringAttribute('use_container_ip_port');
  }

  // use_controller_image - computed: true, optional: false, required: false
  public get useControllerImage() {
    return this.getStringAttribute('use_controller_image');
  }
}

export class DataAviCloudDockerConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudDockerConfigurationOutputReference {
    return new DataAviCloudDockerConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudGcpConfigurationEncryptionKeys {
}

export function dataAviCloudGcpConfigurationEncryptionKeysToTerraform(struct?: DataAviCloudGcpConfigurationEncryptionKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudGcpConfigurationEncryptionKeysToHclTerraform(struct?: DataAviCloudGcpConfigurationEncryptionKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudGcpConfigurationEncryptionKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudGcpConfigurationEncryptionKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudGcpConfigurationEncryptionKeys | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gcs_bucket_kms_key_id - computed: true, optional: false, required: false
  public get gcsBucketKmsKeyId() {
    return this.getStringAttribute('gcs_bucket_kms_key_id');
  }

  // gcs_objects_kms_key_id - computed: true, optional: false, required: false
  public get gcsObjectsKmsKeyId() {
    return this.getStringAttribute('gcs_objects_kms_key_id');
  }

  // se_disk_kms_key_id - computed: true, optional: false, required: false
  public get seDiskKmsKeyId() {
    return this.getStringAttribute('se_disk_kms_key_id');
  }

  // se_image_kms_key_id - computed: true, optional: false, required: false
  public get seImageKmsKeyId() {
    return this.getStringAttribute('se_image_kms_key_id');
  }
}

export class DataAviCloudGcpConfigurationEncryptionKeysList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudGcpConfigurationEncryptionKeysOutputReference {
    return new DataAviCloudGcpConfigurationEncryptionKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudGcpConfigurationNetworkConfigInband {
}

export function dataAviCloudGcpConfigurationNetworkConfigInbandToTerraform(struct?: DataAviCloudGcpConfigurationNetworkConfigInband): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudGcpConfigurationNetworkConfigInbandToHclTerraform(struct?: DataAviCloudGcpConfigurationNetworkConfigInband): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudGcpConfigurationNetworkConfigInbandOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudGcpConfigurationNetworkConfigInband | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudGcpConfigurationNetworkConfigInband | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // vpc_network_name - computed: true, optional: false, required: false
  public get vpcNetworkName() {
    return this.getStringAttribute('vpc_network_name');
  }

  // vpc_project_id - computed: true, optional: false, required: false
  public get vpcProjectId() {
    return this.getStringAttribute('vpc_project_id');
  }

  // vpc_subnet_name - computed: true, optional: false, required: false
  public get vpcSubnetName() {
    return this.getStringAttribute('vpc_subnet_name');
  }
}

export class DataAviCloudGcpConfigurationNetworkConfigInbandList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudGcpConfigurationNetworkConfigInbandOutputReference {
    return new DataAviCloudGcpConfigurationNetworkConfigInbandOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudGcpConfigurationNetworkConfigOneArm {
}

export function dataAviCloudGcpConfigurationNetworkConfigOneArmToTerraform(struct?: DataAviCloudGcpConfigurationNetworkConfigOneArm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudGcpConfigurationNetworkConfigOneArmToHclTerraform(struct?: DataAviCloudGcpConfigurationNetworkConfigOneArm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudGcpConfigurationNetworkConfigOneArmOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudGcpConfigurationNetworkConfigOneArm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudGcpConfigurationNetworkConfigOneArm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_vpc_network_name - computed: true, optional: false, required: false
  public get dataVpcNetworkName() {
    return this.getStringAttribute('data_vpc_network_name');
  }

  // data_vpc_project_id - computed: true, optional: false, required: false
  public get dataVpcProjectId() {
    return this.getStringAttribute('data_vpc_project_id');
  }

  // data_vpc_subnet_name - computed: true, optional: false, required: false
  public get dataVpcSubnetName() {
    return this.getStringAttribute('data_vpc_subnet_name');
  }

  // management_vpc_network_name - computed: true, optional: false, required: false
  public get managementVpcNetworkName() {
    return this.getStringAttribute('management_vpc_network_name');
  }

  // management_vpc_project_id - computed: true, optional: false, required: false
  public get managementVpcProjectId() {
    return this.getStringAttribute('management_vpc_project_id');
  }

  // management_vpc_subnet_name - computed: true, optional: false, required: false
  public get managementVpcSubnetName() {
    return this.getStringAttribute('management_vpc_subnet_name');
  }
}

export class DataAviCloudGcpConfigurationNetworkConfigOneArmList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudGcpConfigurationNetworkConfigOneArmOutputReference {
    return new DataAviCloudGcpConfigurationNetworkConfigOneArmOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudGcpConfigurationNetworkConfigTwoArm {
}

export function dataAviCloudGcpConfigurationNetworkConfigTwoArmToTerraform(struct?: DataAviCloudGcpConfigurationNetworkConfigTwoArm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudGcpConfigurationNetworkConfigTwoArmToHclTerraform(struct?: DataAviCloudGcpConfigurationNetworkConfigTwoArm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudGcpConfigurationNetworkConfigTwoArmOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudGcpConfigurationNetworkConfigTwoArm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudGcpConfigurationNetworkConfigTwoArm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backend_data_vpc_network_name - computed: true, optional: false, required: false
  public get backendDataVpcNetworkName() {
    return this.getStringAttribute('backend_data_vpc_network_name');
  }

  // backend_data_vpc_project_id - computed: true, optional: false, required: false
  public get backendDataVpcProjectId() {
    return this.getStringAttribute('backend_data_vpc_project_id');
  }

  // backend_data_vpc_subnet_name - computed: true, optional: false, required: false
  public get backendDataVpcSubnetName() {
    return this.getStringAttribute('backend_data_vpc_subnet_name');
  }

  // frontend_data_vpc_network_name - computed: true, optional: false, required: false
  public get frontendDataVpcNetworkName() {
    return this.getStringAttribute('frontend_data_vpc_network_name');
  }

  // frontend_data_vpc_project_id - computed: true, optional: false, required: false
  public get frontendDataVpcProjectId() {
    return this.getStringAttribute('frontend_data_vpc_project_id');
  }

  // frontend_data_vpc_subnet_name - computed: true, optional: false, required: false
  public get frontendDataVpcSubnetName() {
    return this.getStringAttribute('frontend_data_vpc_subnet_name');
  }

  // management_vpc_network_name - computed: true, optional: false, required: false
  public get managementVpcNetworkName() {
    return this.getStringAttribute('management_vpc_network_name');
  }

  // management_vpc_project_id - computed: true, optional: false, required: false
  public get managementVpcProjectId() {
    return this.getStringAttribute('management_vpc_project_id');
  }

  // management_vpc_subnet_name - computed: true, optional: false, required: false
  public get managementVpcSubnetName() {
    return this.getStringAttribute('management_vpc_subnet_name');
  }
}

export class DataAviCloudGcpConfigurationNetworkConfigTwoArmList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudGcpConfigurationNetworkConfigTwoArmOutputReference {
    return new DataAviCloudGcpConfigurationNetworkConfigTwoArmOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudGcpConfigurationNetworkConfig {
}

export function dataAviCloudGcpConfigurationNetworkConfigToTerraform(struct?: DataAviCloudGcpConfigurationNetworkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudGcpConfigurationNetworkConfigToHclTerraform(struct?: DataAviCloudGcpConfigurationNetworkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudGcpConfigurationNetworkConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudGcpConfigurationNetworkConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudGcpConfigurationNetworkConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config - computed: true, optional: false, required: false
  public get config() {
    return this.getStringAttribute('config');
  }

  // inband - computed: true, optional: false, required: false
  private _inband = new DataAviCloudGcpConfigurationNetworkConfigInbandList(this, "inband", true);
  public get inband() {
    return this._inband;
  }

  // one_arm - computed: true, optional: false, required: false
  private _oneArm = new DataAviCloudGcpConfigurationNetworkConfigOneArmList(this, "one_arm", true);
  public get oneArm() {
    return this._oneArm;
  }

  // two_arm - computed: true, optional: false, required: false
  private _twoArm = new DataAviCloudGcpConfigurationNetworkConfigTwoArmList(this, "two_arm", true);
  public get twoArm() {
    return this._twoArm;
  }
}

export class DataAviCloudGcpConfigurationNetworkConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudGcpConfigurationNetworkConfigOutputReference {
    return new DataAviCloudGcpConfigurationNetworkConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudGcpConfigurationVipAllocationStrategyIlb {
}

export function dataAviCloudGcpConfigurationVipAllocationStrategyIlbToTerraform(struct?: DataAviCloudGcpConfigurationVipAllocationStrategyIlb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudGcpConfigurationVipAllocationStrategyIlbToHclTerraform(struct?: DataAviCloudGcpConfigurationVipAllocationStrategyIlb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudGcpConfigurationVipAllocationStrategyIlbOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudGcpConfigurationVipAllocationStrategyIlb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudGcpConfigurationVipAllocationStrategyIlb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloud_router_names - computed: true, optional: false, required: false
  public get cloudRouterNames() {
    return this.getListAttribute('cloud_router_names');
  }
}

export class DataAviCloudGcpConfigurationVipAllocationStrategyIlbList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudGcpConfigurationVipAllocationStrategyIlbOutputReference {
    return new DataAviCloudGcpConfigurationVipAllocationStrategyIlbOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudGcpConfigurationVipAllocationStrategyRoutes {
}

export function dataAviCloudGcpConfigurationVipAllocationStrategyRoutesToTerraform(struct?: DataAviCloudGcpConfigurationVipAllocationStrategyRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudGcpConfigurationVipAllocationStrategyRoutesToHclTerraform(struct?: DataAviCloudGcpConfigurationVipAllocationStrategyRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudGcpConfigurationVipAllocationStrategyRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudGcpConfigurationVipAllocationStrategyRoutes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudGcpConfigurationVipAllocationStrategyRoutes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // match_se_group_subnet - computed: true, optional: false, required: false
  public get matchSeGroupSubnet() {
    return this.getStringAttribute('match_se_group_subnet');
  }

  // route_priority - computed: true, optional: false, required: false
  public get routePriority() {
    return this.getStringAttribute('route_priority');
  }
}

export class DataAviCloudGcpConfigurationVipAllocationStrategyRoutesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudGcpConfigurationVipAllocationStrategyRoutesOutputReference {
    return new DataAviCloudGcpConfigurationVipAllocationStrategyRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudGcpConfigurationVipAllocationStrategy {
}

export function dataAviCloudGcpConfigurationVipAllocationStrategyToTerraform(struct?: DataAviCloudGcpConfigurationVipAllocationStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudGcpConfigurationVipAllocationStrategyToHclTerraform(struct?: DataAviCloudGcpConfigurationVipAllocationStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudGcpConfigurationVipAllocationStrategyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudGcpConfigurationVipAllocationStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudGcpConfigurationVipAllocationStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ilb - computed: true, optional: false, required: false
  private _ilb = new DataAviCloudGcpConfigurationVipAllocationStrategyIlbList(this, "ilb", true);
  public get ilb() {
    return this._ilb;
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // routes - computed: true, optional: false, required: false
  private _routes = new DataAviCloudGcpConfigurationVipAllocationStrategyRoutesList(this, "routes", true);
  public get routes() {
    return this._routes;
  }
}

export class DataAviCloudGcpConfigurationVipAllocationStrategyList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudGcpConfigurationVipAllocationStrategyOutputReference {
    return new DataAviCloudGcpConfigurationVipAllocationStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudGcpConfiguration {
}

export function dataAviCloudGcpConfigurationToTerraform(struct?: DataAviCloudGcpConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudGcpConfigurationToHclTerraform(struct?: DataAviCloudGcpConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudGcpConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudGcpConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudGcpConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloud_credentials_ref - computed: true, optional: false, required: false
  public get cloudCredentialsRef() {
    return this.getStringAttribute('cloud_credentials_ref');
  }

  // encryption_keys - computed: true, optional: false, required: false
  private _encryptionKeys = new DataAviCloudGcpConfigurationEncryptionKeysList(this, "encryption_keys", true);
  public get encryptionKeys() {
    return this._encryptionKeys;
  }

  // firewall_target_tags - computed: true, optional: false, required: false
  public get firewallTargetTags() {
    return this.getListAttribute('firewall_target_tags');
  }

  // gcp_service_account_email - computed: true, optional: false, required: false
  public get gcpServiceAccountEmail() {
    return this.getStringAttribute('gcp_service_account_email');
  }

  // gcs_bucket_name - computed: true, optional: false, required: false
  public get gcsBucketName() {
    return this.getStringAttribute('gcs_bucket_name');
  }

  // gcs_project_id - computed: true, optional: false, required: false
  public get gcsProjectId() {
    return this.getStringAttribute('gcs_project_id');
  }

  // network_config - computed: true, optional: false, required: false
  private _networkConfig = new DataAviCloudGcpConfigurationNetworkConfigList(this, "network_config", true);
  public get networkConfig() {
    return this._networkConfig;
  }

  // region_name - computed: true, optional: false, required: false
  public get regionName() {
    return this.getStringAttribute('region_name');
  }

  // se_project_id - computed: true, optional: false, required: false
  public get seProjectId() {
    return this.getStringAttribute('se_project_id');
  }

  // vip_allocation_strategy - computed: true, optional: false, required: false
  private _vipAllocationStrategy = new DataAviCloudGcpConfigurationVipAllocationStrategyList(this, "vip_allocation_strategy", true);
  public get vipAllocationStrategy() {
    return this._vipAllocationStrategy;
  }

  // zones - computed: true, optional: false, required: false
  public get zones() {
    return this.getListAttribute('zones');
  }
}

export class DataAviCloudGcpConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudGcpConfigurationOutputReference {
    return new DataAviCloudGcpConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudLinuxserverConfigurationHostsHostAttr {
}

export function dataAviCloudLinuxserverConfigurationHostsHostAttrToTerraform(struct?: DataAviCloudLinuxserverConfigurationHostsHostAttr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudLinuxserverConfigurationHostsHostAttrToHclTerraform(struct?: DataAviCloudLinuxserverConfigurationHostsHostAttr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudLinuxserverConfigurationHostsHostAttrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudLinuxserverConfigurationHostsHostAttr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudLinuxserverConfigurationHostsHostAttr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attr_key - computed: true, optional: false, required: false
  public get attrKey() {
    return this.getStringAttribute('attr_key');
  }

  // attr_val - computed: true, optional: false, required: false
  public get attrVal() {
    return this.getStringAttribute('attr_val');
  }
}

export class DataAviCloudLinuxserverConfigurationHostsHostAttrList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudLinuxserverConfigurationHostsHostAttrOutputReference {
    return new DataAviCloudLinuxserverConfigurationHostsHostAttrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudLinuxserverConfigurationHostsHostIp {
}

export function dataAviCloudLinuxserverConfigurationHostsHostIpToTerraform(struct?: DataAviCloudLinuxserverConfigurationHostsHostIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudLinuxserverConfigurationHostsHostIpToHclTerraform(struct?: DataAviCloudLinuxserverConfigurationHostsHostIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudLinuxserverConfigurationHostsHostIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudLinuxserverConfigurationHostsHostIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudLinuxserverConfigurationHostsHostIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // addr - computed: true, optional: false, required: false
  public get addr() {
    return this.getStringAttribute('addr');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviCloudLinuxserverConfigurationHostsHostIpList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudLinuxserverConfigurationHostsHostIpOutputReference {
    return new DataAviCloudLinuxserverConfigurationHostsHostIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudLinuxserverConfigurationHosts {
}

export function dataAviCloudLinuxserverConfigurationHostsToTerraform(struct?: DataAviCloudLinuxserverConfigurationHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudLinuxserverConfigurationHostsToHclTerraform(struct?: DataAviCloudLinuxserverConfigurationHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudLinuxserverConfigurationHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudLinuxserverConfigurationHosts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudLinuxserverConfigurationHosts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host_attr - computed: true, optional: false, required: false
  private _hostAttr = new DataAviCloudLinuxserverConfigurationHostsHostAttrList(this, "host_attr", false);
  public get hostAttr() {
    return this._hostAttr;
  }

  // host_ip - computed: true, optional: false, required: false
  private _hostIp = new DataAviCloudLinuxserverConfigurationHostsHostIpList(this, "host_ip", true);
  public get hostIp() {
    return this._hostIp;
  }

  // node_availability_zone - computed: true, optional: false, required: false
  public get nodeAvailabilityZone() {
    return this.getStringAttribute('node_availability_zone');
  }

  // se_group_ref - computed: true, optional: false, required: false
  public get seGroupRef() {
    return this.getStringAttribute('se_group_ref');
  }
}

export class DataAviCloudLinuxserverConfigurationHostsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudLinuxserverConfigurationHostsOutputReference {
    return new DataAviCloudLinuxserverConfigurationHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudLinuxserverConfiguration {
}

export function dataAviCloudLinuxserverConfigurationToTerraform(struct?: DataAviCloudLinuxserverConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudLinuxserverConfigurationToHclTerraform(struct?: DataAviCloudLinuxserverConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudLinuxserverConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudLinuxserverConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudLinuxserverConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hosts - computed: true, optional: false, required: false
  private _hosts = new DataAviCloudLinuxserverConfigurationHostsList(this, "hosts", false);
  public get hosts() {
    return this._hosts;
  }

  // se_inband_mgmt - computed: true, optional: false, required: false
  public get seInbandMgmt() {
    return this.getStringAttribute('se_inband_mgmt');
  }

  // se_log_disk_path - computed: true, optional: false, required: false
  public get seLogDiskPath() {
    return this.getStringAttribute('se_log_disk_path');
  }

  // se_log_disk_size_gb - computed: true, optional: false, required: false
  public get seLogDiskSizeGb() {
    return this.getStringAttribute('se_log_disk_size_gb');
  }

  // se_sys_disk_path - computed: true, optional: false, required: false
  public get seSysDiskPath() {
    return this.getStringAttribute('se_sys_disk_path');
  }

  // se_sys_disk_size_gb - computed: true, optional: false, required: false
  public get seSysDiskSizeGb() {
    return this.getStringAttribute('se_sys_disk_size_gb');
  }

  // ssh_user_ref - computed: true, optional: false, required: false
  public get sshUserRef() {
    return this.getStringAttribute('ssh_user_ref');
  }
}

export class DataAviCloudLinuxserverConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudLinuxserverConfigurationOutputReference {
    return new DataAviCloudLinuxserverConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudMarkers {
}

export function dataAviCloudMarkersToTerraform(struct?: DataAviCloudMarkers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudMarkersToHclTerraform(struct?: DataAviCloudMarkers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudMarkersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudMarkers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudMarkers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataAviCloudMarkersList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudMarkersOutputReference {
    return new DataAviCloudMarkersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticNsxtSegmentSubnetIpAddr {
}

export function dataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticNsxtSegmentSubnetIpAddrToTerraform(struct?: DataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticNsxtSegmentSubnetIpAddr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticNsxtSegmentSubnetIpAddrToHclTerraform(struct?: DataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticNsxtSegmentSubnetIpAddr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticNsxtSegmentSubnetIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticNsxtSegmentSubnetIpAddr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticNsxtSegmentSubnetIpAddr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // addr - computed: true, optional: false, required: false
  public get addr() {
    return this.getStringAttribute('addr');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticNsxtSegmentSubnetIpAddrList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticNsxtSegmentSubnetIpAddrOutputReference {
    return new DataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticNsxtSegmentSubnetIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticNsxtSegmentSubnet {
}

export function dataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticNsxtSegmentSubnetToTerraform(struct?: DataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticNsxtSegmentSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticNsxtSegmentSubnetToHclTerraform(struct?: DataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticNsxtSegmentSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticNsxtSegmentSubnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticNsxtSegmentSubnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticNsxtSegmentSubnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_addr - computed: true, optional: false, required: false
  private _ipAddr = new DataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticNsxtSegmentSubnetIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }

  // mask - computed: true, optional: false, required: false
  public get mask() {
    return this.getStringAttribute('mask');
  }
}

export class DataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticNsxtSegmentSubnetList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticNsxtSegmentSubnetOutputReference {
    return new DataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticNsxtSegmentSubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomatic {
}

export function dataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticToTerraform(struct?: DataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomatic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticToHclTerraform(struct?: DataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomatic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomatic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomatic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // nsxt_segment_subnet - computed: true, optional: false, required: false
  private _nsxtSegmentSubnet = new DataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticNsxtSegmentSubnetList(this, "nsxt_segment_subnet", true);
  public get nsxtSegmentSubnet() {
    return this._nsxtSegmentSubnet;
  }

  // num_se_per_segment - computed: true, optional: false, required: false
  public get numSePerSegment() {
    return this.getStringAttribute('num_se_per_segment');
  }

  // tier1_lr_ids - computed: true, optional: false, required: false
  public get tier1LrIds() {
    return this.getListAttribute('tier1_lr_ids');
  }
}

export class DataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticOutputReference {
    return new DataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigManualTier1Lrs {
}

export function dataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigManualTier1LrsToTerraform(struct?: DataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigManualTier1Lrs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigManualTier1LrsToHclTerraform(struct?: DataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigManualTier1Lrs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigManualTier1LrsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigManualTier1Lrs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigManualTier1Lrs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // locale_service - computed: true, optional: false, required: false
  public get localeService() {
    return this.getStringAttribute('locale_service');
  }

  // segment_id - computed: true, optional: false, required: false
  public get segmentId() {
    return this.getStringAttribute('segment_id');
  }

  // tier1_lr_id - computed: true, optional: false, required: false
  public get tier1LrId() {
    return this.getStringAttribute('tier1_lr_id');
  }
}

export class DataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigManualTier1LrsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigManualTier1LrsOutputReference {
    return new DataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigManualTier1LrsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigManual {
}

export function dataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigManualToTerraform(struct?: DataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigManual): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigManualToHclTerraform(struct?: DataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigManual): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigManualOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigManual | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigManual | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tier1_lrs - computed: true, optional: false, required: false
  private _tier1Lrs = new DataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigManualTier1LrsList(this, "tier1_lrs", false);
  public get tier1Lrs() {
    return this._tier1Lrs;
  }
}

export class DataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigManualList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigManualOutputReference {
    return new DataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigManualOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfig {
}

export function dataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigToTerraform(struct?: DataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigToHclTerraform(struct?: DataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // automatic - computed: true, optional: false, required: false
  private _automatic = new DataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigAutomaticList(this, "automatic", true);
  public get automatic() {
    return this._automatic;
  }

  // manual - computed: true, optional: false, required: false
  private _manual = new DataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigManualList(this, "manual", true);
  public get manual() {
    return this._manual;
  }

  // segment_config_mode - computed: true, optional: false, required: false
  public get segmentConfigMode() {
    return this.getStringAttribute('segment_config_mode');
  }
}

export class DataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigOutputReference {
    return new DataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudNsxtConfigurationDataNetworkConfig {
}

export function dataAviCloudNsxtConfigurationDataNetworkConfigToTerraform(struct?: DataAviCloudNsxtConfigurationDataNetworkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudNsxtConfigurationDataNetworkConfigToHclTerraform(struct?: DataAviCloudNsxtConfigurationDataNetworkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudNsxtConfigurationDataNetworkConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudNsxtConfigurationDataNetworkConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudNsxtConfigurationDataNetworkConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tier1_segment_config - computed: true, optional: false, required: false
  private _tier1SegmentConfig = new DataAviCloudNsxtConfigurationDataNetworkConfigTier1SegmentConfigList(this, "tier1_segment_config", true);
  public get tier1SegmentConfig() {
    return this._tier1SegmentConfig;
  }

  // transport_zone - computed: true, optional: false, required: false
  public get transportZone() {
    return this.getStringAttribute('transport_zone');
  }

  // tz_type - computed: true, optional: false, required: false
  public get tzType() {
    return this.getStringAttribute('tz_type');
  }

  // vlan_segments - computed: true, optional: false, required: false
  public get vlanSegments() {
    return this.getListAttribute('vlan_segments');
  }
}

export class DataAviCloudNsxtConfigurationDataNetworkConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudNsxtConfigurationDataNetworkConfigOutputReference {
    return new DataAviCloudNsxtConfigurationDataNetworkConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudNsxtConfigurationManagementNetworkConfigOverlaySegment {
}

export function dataAviCloudNsxtConfigurationManagementNetworkConfigOverlaySegmentToTerraform(struct?: DataAviCloudNsxtConfigurationManagementNetworkConfigOverlaySegment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudNsxtConfigurationManagementNetworkConfigOverlaySegmentToHclTerraform(struct?: DataAviCloudNsxtConfigurationManagementNetworkConfigOverlaySegment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudNsxtConfigurationManagementNetworkConfigOverlaySegmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudNsxtConfigurationManagementNetworkConfigOverlaySegment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudNsxtConfigurationManagementNetworkConfigOverlaySegment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // locale_service - computed: true, optional: false, required: false
  public get localeService() {
    return this.getStringAttribute('locale_service');
  }

  // segment_id - computed: true, optional: false, required: false
  public get segmentId() {
    return this.getStringAttribute('segment_id');
  }

  // tier1_lr_id - computed: true, optional: false, required: false
  public get tier1LrId() {
    return this.getStringAttribute('tier1_lr_id');
  }
}

export class DataAviCloudNsxtConfigurationManagementNetworkConfigOverlaySegmentList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudNsxtConfigurationManagementNetworkConfigOverlaySegmentOutputReference {
    return new DataAviCloudNsxtConfigurationManagementNetworkConfigOverlaySegmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudNsxtConfigurationManagementNetworkConfig {
}

export function dataAviCloudNsxtConfigurationManagementNetworkConfigToTerraform(struct?: DataAviCloudNsxtConfigurationManagementNetworkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudNsxtConfigurationManagementNetworkConfigToHclTerraform(struct?: DataAviCloudNsxtConfigurationManagementNetworkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudNsxtConfigurationManagementNetworkConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudNsxtConfigurationManagementNetworkConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudNsxtConfigurationManagementNetworkConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // overlay_segment - computed: true, optional: false, required: false
  private _overlaySegment = new DataAviCloudNsxtConfigurationManagementNetworkConfigOverlaySegmentList(this, "overlay_segment", true);
  public get overlaySegment() {
    return this._overlaySegment;
  }

  // transport_zone - computed: true, optional: false, required: false
  public get transportZone() {
    return this.getStringAttribute('transport_zone');
  }

  // tz_type - computed: true, optional: false, required: false
  public get tzType() {
    return this.getStringAttribute('tz_type');
  }

  // vlan_segment - computed: true, optional: false, required: false
  public get vlanSegment() {
    return this.getStringAttribute('vlan_segment');
  }
}

export class DataAviCloudNsxtConfigurationManagementNetworkConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudNsxtConfigurationManagementNetworkConfigOutputReference {
    return new DataAviCloudNsxtConfigurationManagementNetworkConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudNsxtConfiguration {
}

export function dataAviCloudNsxtConfigurationToTerraform(struct?: DataAviCloudNsxtConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudNsxtConfigurationToHclTerraform(struct?: DataAviCloudNsxtConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudNsxtConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudNsxtConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudNsxtConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // automate_dfw_objects - computed: true, optional: false, required: false
  public get automateDfwObjects() {
    return this.getStringAttribute('automate_dfw_objects');
  }

  // automate_dfw_rules - computed: true, optional: false, required: false
  public get automateDfwRules() {
    return this.getStringAttribute('automate_dfw_rules');
  }

  // data_network_config - computed: true, optional: false, required: false
  private _dataNetworkConfig = new DataAviCloudNsxtConfigurationDataNetworkConfigList(this, "data_network_config", true);
  public get dataNetworkConfig() {
    return this._dataNetworkConfig;
  }

  // domain_id - computed: true, optional: false, required: false
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }

  // enforcementpoint_id - computed: true, optional: false, required: false
  public get enforcementpointId() {
    return this.getStringAttribute('enforcementpoint_id');
  }

  // management_network_config - computed: true, optional: false, required: false
  private _managementNetworkConfig = new DataAviCloudNsxtConfigurationManagementNetworkConfigList(this, "management_network_config", true);
  public get managementNetworkConfig() {
    return this._managementNetworkConfig;
  }

  // nsxt_credentials_ref - computed: true, optional: false, required: false
  public get nsxtCredentialsRef() {
    return this.getStringAttribute('nsxt_credentials_ref');
  }

  // nsxt_url - computed: true, optional: false, required: false
  public get nsxtUrl() {
    return this.getStringAttribute('nsxt_url');
  }

  // site_id - computed: true, optional: false, required: false
  public get siteId() {
    return this.getStringAttribute('site_id');
  }

  // vmc_mode - computed: true, optional: false, required: false
  public get vmcMode() {
    return this.getStringAttribute('vmc_mode');
  }

  // vpc_mode - computed: true, optional: false, required: false
  public get vpcMode() {
    return this.getStringAttribute('vpc_mode');
  }
}

export class DataAviCloudNsxtConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudNsxtConfigurationOutputReference {
    return new DataAviCloudNsxtConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudNtpConfigurationNtpAuthenticationKeys {
}

export function dataAviCloudNtpConfigurationNtpAuthenticationKeysToTerraform(struct?: DataAviCloudNtpConfigurationNtpAuthenticationKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudNtpConfigurationNtpAuthenticationKeysToHclTerraform(struct?: DataAviCloudNtpConfigurationNtpAuthenticationKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudNtpConfigurationNtpAuthenticationKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudNtpConfigurationNtpAuthenticationKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudNtpConfigurationNtpAuthenticationKeys | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // key_number - computed: true, optional: false, required: false
  public get keyNumber() {
    return this.getStringAttribute('key_number');
  }
}

export class DataAviCloudNtpConfigurationNtpAuthenticationKeysList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudNtpConfigurationNtpAuthenticationKeysOutputReference {
    return new DataAviCloudNtpConfigurationNtpAuthenticationKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudNtpConfigurationNtpServerListStruct {
}

export function dataAviCloudNtpConfigurationNtpServerListStructToTerraform(struct?: DataAviCloudNtpConfigurationNtpServerListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudNtpConfigurationNtpServerListStructToHclTerraform(struct?: DataAviCloudNtpConfigurationNtpServerListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudNtpConfigurationNtpServerListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudNtpConfigurationNtpServerListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudNtpConfigurationNtpServerListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // addr - computed: true, optional: false, required: false
  public get addr() {
    return this.getStringAttribute('addr');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviCloudNtpConfigurationNtpServerListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudNtpConfigurationNtpServerListStructOutputReference {
    return new DataAviCloudNtpConfigurationNtpServerListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudNtpConfigurationNtpServersServer {
}

export function dataAviCloudNtpConfigurationNtpServersServerToTerraform(struct?: DataAviCloudNtpConfigurationNtpServersServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudNtpConfigurationNtpServersServerToHclTerraform(struct?: DataAviCloudNtpConfigurationNtpServersServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudNtpConfigurationNtpServersServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudNtpConfigurationNtpServersServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudNtpConfigurationNtpServersServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // addr - computed: true, optional: false, required: false
  public get addr() {
    return this.getStringAttribute('addr');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviCloudNtpConfigurationNtpServersServerList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudNtpConfigurationNtpServersServerOutputReference {
    return new DataAviCloudNtpConfigurationNtpServersServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudNtpConfigurationNtpServers {
}

export function dataAviCloudNtpConfigurationNtpServersToTerraform(struct?: DataAviCloudNtpConfigurationNtpServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudNtpConfigurationNtpServersToHclTerraform(struct?: DataAviCloudNtpConfigurationNtpServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudNtpConfigurationNtpServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudNtpConfigurationNtpServers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudNtpConfigurationNtpServers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key_number - computed: true, optional: false, required: false
  public get keyNumber() {
    return this.getStringAttribute('key_number');
  }

  // server - computed: true, optional: false, required: false
  private _server = new DataAviCloudNtpConfigurationNtpServersServerList(this, "server", true);
  public get server() {
    return this._server;
  }
}

export class DataAviCloudNtpConfigurationNtpServersList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudNtpConfigurationNtpServersOutputReference {
    return new DataAviCloudNtpConfigurationNtpServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudNtpConfiguration {
}

export function dataAviCloudNtpConfigurationToTerraform(struct?: DataAviCloudNtpConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudNtpConfigurationToHclTerraform(struct?: DataAviCloudNtpConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudNtpConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudNtpConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudNtpConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ntp_authentication_keys - computed: true, optional: false, required: false
  private _ntpAuthenticationKeys = new DataAviCloudNtpConfigurationNtpAuthenticationKeysList(this, "ntp_authentication_keys", false);
  public get ntpAuthenticationKeys() {
    return this._ntpAuthenticationKeys;
  }

  // ntp_server_list - computed: true, optional: false, required: false
  private _ntpServerList = new DataAviCloudNtpConfigurationNtpServerListStructList(this, "ntp_server_list", false);
  public get ntpServerList() {
    return this._ntpServerList;
  }

  // ntp_servers - computed: true, optional: false, required: false
  private _ntpServers = new DataAviCloudNtpConfigurationNtpServersList(this, "ntp_servers", false);
  public get ntpServers() {
    return this._ntpServers;
  }
}

export class DataAviCloudNtpConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudNtpConfigurationOutputReference {
    return new DataAviCloudNtpConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudOpenstackConfigurationCustomSeImageProperties {
}

export function dataAviCloudOpenstackConfigurationCustomSeImagePropertiesToTerraform(struct?: DataAviCloudOpenstackConfigurationCustomSeImageProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudOpenstackConfigurationCustomSeImagePropertiesToHclTerraform(struct?: DataAviCloudOpenstackConfigurationCustomSeImageProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudOpenstackConfigurationCustomSeImagePropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudOpenstackConfigurationCustomSeImageProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudOpenstackConfigurationCustomSeImageProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAviCloudOpenstackConfigurationCustomSeImagePropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudOpenstackConfigurationCustomSeImagePropertiesOutputReference {
    return new DataAviCloudOpenstackConfigurationCustomSeImagePropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudOpenstackConfigurationHypervisorPropertiesImageProperties {
}

export function dataAviCloudOpenstackConfigurationHypervisorPropertiesImagePropertiesToTerraform(struct?: DataAviCloudOpenstackConfigurationHypervisorPropertiesImageProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudOpenstackConfigurationHypervisorPropertiesImagePropertiesToHclTerraform(struct?: DataAviCloudOpenstackConfigurationHypervisorPropertiesImageProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudOpenstackConfigurationHypervisorPropertiesImagePropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudOpenstackConfigurationHypervisorPropertiesImageProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudOpenstackConfigurationHypervisorPropertiesImageProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAviCloudOpenstackConfigurationHypervisorPropertiesImagePropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudOpenstackConfigurationHypervisorPropertiesImagePropertiesOutputReference {
    return new DataAviCloudOpenstackConfigurationHypervisorPropertiesImagePropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudOpenstackConfigurationHypervisorProperties {
}

export function dataAviCloudOpenstackConfigurationHypervisorPropertiesToTerraform(struct?: DataAviCloudOpenstackConfigurationHypervisorProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudOpenstackConfigurationHypervisorPropertiesToHclTerraform(struct?: DataAviCloudOpenstackConfigurationHypervisorProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudOpenstackConfigurationHypervisorPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudOpenstackConfigurationHypervisorProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudOpenstackConfigurationHypervisorProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hypervisor - computed: true, optional: false, required: false
  public get hypervisor() {
    return this.getStringAttribute('hypervisor');
  }

  // image_properties - computed: true, optional: false, required: false
  private _imageProperties = new DataAviCloudOpenstackConfigurationHypervisorPropertiesImagePropertiesList(this, "image_properties", false);
  public get imageProperties() {
    return this._imageProperties;
  }
}

export class DataAviCloudOpenstackConfigurationHypervisorPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudOpenstackConfigurationHypervisorPropertiesOutputReference {
    return new DataAviCloudOpenstackConfigurationHypervisorPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudOpenstackConfigurationProviderVipNetworks {
}

export function dataAviCloudOpenstackConfigurationProviderVipNetworksToTerraform(struct?: DataAviCloudOpenstackConfigurationProviderVipNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudOpenstackConfigurationProviderVipNetworksToHclTerraform(struct?: DataAviCloudOpenstackConfigurationProviderVipNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudOpenstackConfigurationProviderVipNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudOpenstackConfigurationProviderVipNetworks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudOpenstackConfigurationProviderVipNetworks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // os_network_uuid - computed: true, optional: false, required: false
  public get osNetworkUuid() {
    return this.getStringAttribute('os_network_uuid');
  }

  // os_tenant_uuids - computed: true, optional: false, required: false
  public get osTenantUuids() {
    return this.getListAttribute('os_tenant_uuids');
  }
}

export class DataAviCloudOpenstackConfigurationProviderVipNetworksList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudOpenstackConfigurationProviderVipNetworksOutputReference {
    return new DataAviCloudOpenstackConfigurationProviderVipNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudOpenstackConfigurationRoleMapping {
}

export function dataAviCloudOpenstackConfigurationRoleMappingToTerraform(struct?: DataAviCloudOpenstackConfigurationRoleMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudOpenstackConfigurationRoleMappingToHclTerraform(struct?: DataAviCloudOpenstackConfigurationRoleMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudOpenstackConfigurationRoleMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudOpenstackConfigurationRoleMapping | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudOpenstackConfigurationRoleMapping | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // avi_role - computed: true, optional: false, required: false
  public get aviRole() {
    return this.getStringAttribute('avi_role');
  }

  // os_role - computed: true, optional: false, required: false
  public get osRole() {
    return this.getStringAttribute('os_role');
  }
}

export class DataAviCloudOpenstackConfigurationRoleMappingList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudOpenstackConfigurationRoleMappingOutputReference {
    return new DataAviCloudOpenstackConfigurationRoleMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudOpenstackConfiguration {
}

export function dataAviCloudOpenstackConfigurationToTerraform(struct?: DataAviCloudOpenstackConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudOpenstackConfigurationToHclTerraform(struct?: DataAviCloudOpenstackConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudOpenstackConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudOpenstackConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudOpenstackConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin_tenant - computed: true, optional: false, required: false
  public get adminTenant() {
    return this.getStringAttribute('admin_tenant');
  }

  // admin_tenant_uuid - computed: true, optional: false, required: false
  public get adminTenantUuid() {
    return this.getStringAttribute('admin_tenant_uuid');
  }

  // allowed_address_pairs - computed: true, optional: false, required: false
  public get allowedAddressPairs() {
    return this.getStringAttribute('allowed_address_pairs');
  }

  // anti_affinity - computed: true, optional: false, required: false
  public get antiAffinity() {
    return this.getStringAttribute('anti_affinity');
  }

  // auth_url - computed: true, optional: false, required: false
  public get authUrl() {
    return this.getStringAttribute('auth_url');
  }

  // config_drive - computed: true, optional: false, required: false
  public get configDrive() {
    return this.getStringAttribute('config_drive');
  }

  // contrail_disable_policy - computed: true, optional: false, required: false
  public get contrailDisablePolicy() {
    return this.getStringAttribute('contrail_disable_policy');
  }

  // contrail_endpoint - computed: true, optional: false, required: false
  public get contrailEndpoint() {
    return this.getStringAttribute('contrail_endpoint');
  }

  // contrail_plugin - computed: true, optional: false, required: false
  public get contrailPlugin() {
    return this.getStringAttribute('contrail_plugin');
  }

  // custom_se_image_properties - computed: true, optional: false, required: false
  private _customSeImageProperties = new DataAviCloudOpenstackConfigurationCustomSeImagePropertiesList(this, "custom_se_image_properties", false);
  public get customSeImageProperties() {
    return this._customSeImageProperties;
  }

  // enable_os_object_caching - computed: true, optional: false, required: false
  public get enableOsObjectCaching() {
    return this.getStringAttribute('enable_os_object_caching');
  }

  // enable_tagging - computed: true, optional: false, required: false
  public get enableTagging() {
    return this.getStringAttribute('enable_tagging');
  }

  // external_networks - computed: true, optional: false, required: false
  public get externalNetworks() {
    return this.getStringAttribute('external_networks');
  }

  // free_floatingips - computed: true, optional: false, required: false
  public get freeFloatingips() {
    return this.getStringAttribute('free_floatingips');
  }

  // hypervisor - computed: true, optional: false, required: false
  public get hypervisor() {
    return this.getStringAttribute('hypervisor');
  }

  // hypervisor_properties - computed: true, optional: false, required: false
  private _hypervisorProperties = new DataAviCloudOpenstackConfigurationHypervisorPropertiesList(this, "hypervisor_properties", false);
  public get hypervisorProperties() {
    return this._hypervisorProperties;
  }

  // img_format - computed: true, optional: false, required: false
  public get imgFormat() {
    return this.getStringAttribute('img_format');
  }

  // import_keystone_tenants - computed: true, optional: false, required: false
  public get importKeystoneTenants() {
    return this.getStringAttribute('import_keystone_tenants');
  }

  // insecure - computed: true, optional: false, required: false
  public get insecure() {
    return this.getStringAttribute('insecure');
  }

  // keystone_host - computed: true, optional: false, required: false
  public get keystoneHost() {
    return this.getStringAttribute('keystone_host');
  }

  // map_admin_to_cloudadmin - computed: true, optional: false, required: false
  public get mapAdminToCloudadmin() {
    return this.getStringAttribute('map_admin_to_cloudadmin');
  }

  // mgmt_network_name - computed: true, optional: false, required: false
  public get mgmtNetworkName() {
    return this.getStringAttribute('mgmt_network_name');
  }

  // mgmt_network_uuid - computed: true, optional: false, required: false
  public get mgmtNetworkUuid() {
    return this.getStringAttribute('mgmt_network_uuid');
  }

  // name_owner - computed: true, optional: false, required: false
  public get nameOwner() {
    return this.getStringAttribute('name_owner');
  }

  // neutron_rbac - computed: true, optional: false, required: false
  public get neutronRbac() {
    return this.getStringAttribute('neutron_rbac');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // privilege - computed: true, optional: false, required: false
  public get privilege() {
    return this.getStringAttribute('privilege');
  }

  // prov_name - computed: true, optional: false, required: false
  public get provName() {
    return this.getListAttribute('prov_name');
  }

  // provider_vip_networks - computed: true, optional: false, required: false
  private _providerVipNetworks = new DataAviCloudOpenstackConfigurationProviderVipNetworksList(this, "provider_vip_networks", false);
  public get providerVipNetworks() {
    return this._providerVipNetworks;
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // role_mapping - computed: true, optional: false, required: false
  private _roleMapping = new DataAviCloudOpenstackConfigurationRoleMappingList(this, "role_mapping", false);
  public get roleMapping() {
    return this._roleMapping;
  }

  // security_groups - computed: true, optional: false, required: false
  public get securityGroups() {
    return this.getStringAttribute('security_groups');
  }

  // tenant_se - computed: true, optional: false, required: false
  public get tenantSe() {
    return this.getStringAttribute('tenant_se');
  }

  // use_admin_url - computed: true, optional: false, required: false
  public get useAdminUrl() {
    return this.getStringAttribute('use_admin_url');
  }

  // use_internal_endpoints - computed: true, optional: false, required: false
  public get useInternalEndpoints() {
    return this.getStringAttribute('use_internal_endpoints');
  }

  // use_keystone_auth - computed: true, optional: false, required: false
  public get useKeystoneAuth() {
    return this.getStringAttribute('use_keystone_auth');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // vip_port_in_admin_tenant - computed: true, optional: false, required: false
  public get vipPortInAdminTenant() {
    return this.getStringAttribute('vip_port_in_admin_tenant');
  }
}

export class DataAviCloudOpenstackConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudOpenstackConfigurationOutputReference {
    return new DataAviCloudOpenstackConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudProxyConfiguration {
}

export function dataAviCloudProxyConfigurationToTerraform(struct?: DataAviCloudProxyConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudProxyConfigurationToHclTerraform(struct?: DataAviCloudProxyConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudProxyConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudProxyConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudProxyConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataAviCloudProxyConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudProxyConfigurationOutputReference {
    return new DataAviCloudProxyConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudRancherConfigurationDockerRegistrySeOshiftRegistryRegistryVip {
}

export function dataAviCloudRancherConfigurationDockerRegistrySeOshiftRegistryRegistryVipToTerraform(struct?: DataAviCloudRancherConfigurationDockerRegistrySeOshiftRegistryRegistryVip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudRancherConfigurationDockerRegistrySeOshiftRegistryRegistryVipToHclTerraform(struct?: DataAviCloudRancherConfigurationDockerRegistrySeOshiftRegistryRegistryVip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudRancherConfigurationDockerRegistrySeOshiftRegistryRegistryVipOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudRancherConfigurationDockerRegistrySeOshiftRegistryRegistryVip | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudRancherConfigurationDockerRegistrySeOshiftRegistryRegistryVip | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // addr - computed: true, optional: false, required: false
  public get addr() {
    return this.getStringAttribute('addr');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviCloudRancherConfigurationDockerRegistrySeOshiftRegistryRegistryVipList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudRancherConfigurationDockerRegistrySeOshiftRegistryRegistryVipOutputReference {
    return new DataAviCloudRancherConfigurationDockerRegistrySeOshiftRegistryRegistryVipOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudRancherConfigurationDockerRegistrySeOshiftRegistry {
}

export function dataAviCloudRancherConfigurationDockerRegistrySeOshiftRegistryToTerraform(struct?: DataAviCloudRancherConfigurationDockerRegistrySeOshiftRegistry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudRancherConfigurationDockerRegistrySeOshiftRegistryToHclTerraform(struct?: DataAviCloudRancherConfigurationDockerRegistrySeOshiftRegistry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudRancherConfigurationDockerRegistrySeOshiftRegistryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudRancherConfigurationDockerRegistrySeOshiftRegistry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudRancherConfigurationDockerRegistrySeOshiftRegistry | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // registry_namespace - computed: true, optional: false, required: false
  public get registryNamespace() {
    return this.getStringAttribute('registry_namespace');
  }

  // registry_service - computed: true, optional: false, required: false
  public get registryService() {
    return this.getStringAttribute('registry_service');
  }

  // registry_vip - computed: true, optional: false, required: false
  private _registryVip = new DataAviCloudRancherConfigurationDockerRegistrySeOshiftRegistryRegistryVipList(this, "registry_vip", true);
  public get registryVip() {
    return this._registryVip;
  }
}

export class DataAviCloudRancherConfigurationDockerRegistrySeOshiftRegistryList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudRancherConfigurationDockerRegistrySeOshiftRegistryOutputReference {
    return new DataAviCloudRancherConfigurationDockerRegistrySeOshiftRegistryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudRancherConfigurationDockerRegistrySe {
}

export function dataAviCloudRancherConfigurationDockerRegistrySeToTerraform(struct?: DataAviCloudRancherConfigurationDockerRegistrySe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudRancherConfigurationDockerRegistrySeToHclTerraform(struct?: DataAviCloudRancherConfigurationDockerRegistrySe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudRancherConfigurationDockerRegistrySeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudRancherConfigurationDockerRegistrySe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudRancherConfigurationDockerRegistrySe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // oshift_registry - computed: true, optional: false, required: false
  private _oshiftRegistry = new DataAviCloudRancherConfigurationDockerRegistrySeOshiftRegistryList(this, "oshift_registry", true);
  public get oshiftRegistry() {
    return this._oshiftRegistry;
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // private - computed: true, optional: false, required: false
  public get private() {
    return this.getStringAttribute('private');
  }

  // registry - computed: true, optional: false, required: false
  public get registry() {
    return this.getStringAttribute('registry');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataAviCloudRancherConfigurationDockerRegistrySeList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudRancherConfigurationDockerRegistrySeOutputReference {
    return new DataAviCloudRancherConfigurationDockerRegistrySeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudRancherConfigurationEastWestPlacementSubnetIpAddr {
}

export function dataAviCloudRancherConfigurationEastWestPlacementSubnetIpAddrToTerraform(struct?: DataAviCloudRancherConfigurationEastWestPlacementSubnetIpAddr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudRancherConfigurationEastWestPlacementSubnetIpAddrToHclTerraform(struct?: DataAviCloudRancherConfigurationEastWestPlacementSubnetIpAddr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudRancherConfigurationEastWestPlacementSubnetIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudRancherConfigurationEastWestPlacementSubnetIpAddr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudRancherConfigurationEastWestPlacementSubnetIpAddr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // addr - computed: true, optional: false, required: false
  public get addr() {
    return this.getStringAttribute('addr');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviCloudRancherConfigurationEastWestPlacementSubnetIpAddrList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudRancherConfigurationEastWestPlacementSubnetIpAddrOutputReference {
    return new DataAviCloudRancherConfigurationEastWestPlacementSubnetIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudRancherConfigurationEastWestPlacementSubnet {
}

export function dataAviCloudRancherConfigurationEastWestPlacementSubnetToTerraform(struct?: DataAviCloudRancherConfigurationEastWestPlacementSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudRancherConfigurationEastWestPlacementSubnetToHclTerraform(struct?: DataAviCloudRancherConfigurationEastWestPlacementSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudRancherConfigurationEastWestPlacementSubnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudRancherConfigurationEastWestPlacementSubnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudRancherConfigurationEastWestPlacementSubnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_addr - computed: true, optional: false, required: false
  private _ipAddr = new DataAviCloudRancherConfigurationEastWestPlacementSubnetIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }

  // mask - computed: true, optional: false, required: false
  public get mask() {
    return this.getStringAttribute('mask');
  }
}

export class DataAviCloudRancherConfigurationEastWestPlacementSubnetList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudRancherConfigurationEastWestPlacementSubnetOutputReference {
    return new DataAviCloudRancherConfigurationEastWestPlacementSubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudRancherConfigurationNuageController {
}

export function dataAviCloudRancherConfigurationNuageControllerToTerraform(struct?: DataAviCloudRancherConfigurationNuageController): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudRancherConfigurationNuageControllerToHclTerraform(struct?: DataAviCloudRancherConfigurationNuageController): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudRancherConfigurationNuageControllerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudRancherConfigurationNuageController | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudRancherConfigurationNuageController | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // nuage_organization - computed: true, optional: false, required: false
  public get nuageOrganization() {
    return this.getStringAttribute('nuage_organization');
  }

  // nuage_password - computed: true, optional: false, required: false
  public get nuagePassword() {
    return this.getStringAttribute('nuage_password');
  }

  // nuage_port - computed: true, optional: false, required: false
  public get nuagePort() {
    return this.getStringAttribute('nuage_port');
  }

  // nuage_username - computed: true, optional: false, required: false
  public get nuageUsername() {
    return this.getStringAttribute('nuage_username');
  }

  // nuage_vsd_host - computed: true, optional: false, required: false
  public get nuageVsdHost() {
    return this.getStringAttribute('nuage_vsd_host');
  }

  // se_domain - computed: true, optional: false, required: false
  public get seDomain() {
    return this.getStringAttribute('se_domain');
  }

  // se_enterprise - computed: true, optional: false, required: false
  public get seEnterprise() {
    return this.getStringAttribute('se_enterprise');
  }

  // se_network - computed: true, optional: false, required: false
  public get seNetwork() {
    return this.getStringAttribute('se_network');
  }

  // se_policy_group - computed: true, optional: false, required: false
  public get sePolicyGroup() {
    return this.getStringAttribute('se_policy_group');
  }

  // se_user - computed: true, optional: false, required: false
  public get seUser() {
    return this.getStringAttribute('se_user');
  }

  // se_zone - computed: true, optional: false, required: false
  public get seZone() {
    return this.getStringAttribute('se_zone');
  }
}

export class DataAviCloudRancherConfigurationNuageControllerList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudRancherConfigurationNuageControllerOutputReference {
    return new DataAviCloudRancherConfigurationNuageControllerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudRancherConfigurationSeExcludeAttributes {
}

export function dataAviCloudRancherConfigurationSeExcludeAttributesToTerraform(struct?: DataAviCloudRancherConfigurationSeExcludeAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudRancherConfigurationSeExcludeAttributesToHclTerraform(struct?: DataAviCloudRancherConfigurationSeExcludeAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudRancherConfigurationSeExcludeAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudRancherConfigurationSeExcludeAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudRancherConfigurationSeExcludeAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute - computed: true, optional: false, required: false
  public get attribute() {
    return this.getStringAttribute('attribute');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAviCloudRancherConfigurationSeExcludeAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudRancherConfigurationSeExcludeAttributesOutputReference {
    return new DataAviCloudRancherConfigurationSeExcludeAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudRancherConfigurationSeIncludeAttributes {
}

export function dataAviCloudRancherConfigurationSeIncludeAttributesToTerraform(struct?: DataAviCloudRancherConfigurationSeIncludeAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudRancherConfigurationSeIncludeAttributesToHclTerraform(struct?: DataAviCloudRancherConfigurationSeIncludeAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudRancherConfigurationSeIncludeAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudRancherConfigurationSeIncludeAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudRancherConfigurationSeIncludeAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute - computed: true, optional: false, required: false
  public get attribute() {
    return this.getStringAttribute('attribute');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAviCloudRancherConfigurationSeIncludeAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudRancherConfigurationSeIncludeAttributesOutputReference {
    return new DataAviCloudRancherConfigurationSeIncludeAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudRancherConfiguration {
}

export function dataAviCloudRancherConfigurationToTerraform(struct?: DataAviCloudRancherConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudRancherConfigurationToHclTerraform(struct?: DataAviCloudRancherConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudRancherConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudRancherConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudRancherConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_key - computed: true, optional: false, required: false
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }

  // app_sync_frequency - computed: true, optional: false, required: false
  public get appSyncFrequency() {
    return this.getStringAttribute('app_sync_frequency');
  }

  // container_port_match_http_service - computed: true, optional: false, required: false
  public get containerPortMatchHttpService() {
    return this.getStringAttribute('container_port_match_http_service');
  }

  // coredump_directory - computed: true, optional: false, required: false
  public get coredumpDirectory() {
    return this.getStringAttribute('coredump_directory');
  }

  // disable_auto_backend_service_sync - computed: true, optional: false, required: false
  public get disableAutoBackendServiceSync() {
    return this.getStringAttribute('disable_auto_backend_service_sync');
  }

  // disable_auto_frontend_service_sync - computed: true, optional: false, required: false
  public get disableAutoFrontendServiceSync() {
    return this.getStringAttribute('disable_auto_frontend_service_sync');
  }

  // disable_auto_se_creation - computed: true, optional: false, required: false
  public get disableAutoSeCreation() {
    return this.getStringAttribute('disable_auto_se_creation');
  }

  // docker_registry_se - computed: true, optional: false, required: false
  private _dockerRegistrySe = new DataAviCloudRancherConfigurationDockerRegistrySeList(this, "docker_registry_se", true);
  public get dockerRegistrySe() {
    return this._dockerRegistrySe;
  }

  // east_west_placement_subnet - computed: true, optional: false, required: false
  private _eastWestPlacementSubnet = new DataAviCloudRancherConfigurationEastWestPlacementSubnetList(this, "east_west_placement_subnet", true);
  public get eastWestPlacementSubnet() {
    return this._eastWestPlacementSubnet;
  }

  // enable_event_subscription - computed: true, optional: false, required: false
  public get enableEventSubscription() {
    return this.getStringAttribute('enable_event_subscription');
  }

  // feproxy_container_port_as_service - computed: true, optional: false, required: false
  public get feproxyContainerPortAsService() {
    return this.getStringAttribute('feproxy_container_port_as_service');
  }

  // feproxy_vips_enable_proxy_arp - computed: true, optional: false, required: false
  public get feproxyVipsEnableProxyArp() {
    return this.getStringAttribute('feproxy_vips_enable_proxy_arp');
  }

  // fleet_endpoint - computed: true, optional: false, required: false
  public get fleetEndpoint() {
    return this.getStringAttribute('fleet_endpoint');
  }

  // http_container_ports - computed: true, optional: false, required: false
  public get httpContainerPorts() {
    return this.getNumberListAttribute('http_container_ports');
  }

  // nuage_controller - computed: true, optional: false, required: false
  private _nuageController = new DataAviCloudRancherConfigurationNuageControllerList(this, "nuage_controller", true);
  public get nuageController() {
    return this._nuageController;
  }

  // rancher_servers - computed: true, optional: false, required: false
  public get rancherServers() {
    return this.getListAttribute('rancher_servers');
  }

  // se_deployment_method - computed: true, optional: false, required: false
  public get seDeploymentMethod() {
    return this.getStringAttribute('se_deployment_method');
  }

  // se_exclude_attributes - computed: true, optional: false, required: false
  private _seExcludeAttributes = new DataAviCloudRancherConfigurationSeExcludeAttributesList(this, "se_exclude_attributes", false);
  public get seExcludeAttributes() {
    return this._seExcludeAttributes;
  }

  // se_include_attributes - computed: true, optional: false, required: false
  private _seIncludeAttributes = new DataAviCloudRancherConfigurationSeIncludeAttributesList(this, "se_include_attributes", false);
  public get seIncludeAttributes() {
    return this._seIncludeAttributes;
  }

  // se_spawn_rate - computed: true, optional: false, required: false
  public get seSpawnRate() {
    return this.getStringAttribute('se_spawn_rate');
  }

  // se_volume - computed: true, optional: false, required: false
  public get seVolume() {
    return this.getStringAttribute('se_volume');
  }

  // secret_key - computed: true, optional: false, required: false
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }

  // services_accessible_all_interfaces - computed: true, optional: false, required: false
  public get servicesAccessibleAllInterfaces() {
    return this.getStringAttribute('services_accessible_all_interfaces');
  }

  // ssh_user_ref - computed: true, optional: false, required: false
  public get sshUserRef() {
    return this.getStringAttribute('ssh_user_ref');
  }

  // use_container_ip_port - computed: true, optional: false, required: false
  public get useContainerIpPort() {
    return this.getStringAttribute('use_container_ip_port');
  }

  // use_controller_image - computed: true, optional: false, required: false
  public get useControllerImage() {
    return this.getStringAttribute('use_controller_image');
  }
}

export class DataAviCloudRancherConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudRancherConfigurationOutputReference {
    return new DataAviCloudRancherConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudVcaConfiguration {
}

export function dataAviCloudVcaConfigurationToTerraform(struct?: DataAviCloudVcaConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudVcaConfigurationToHclTerraform(struct?: DataAviCloudVcaConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudVcaConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudVcaConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudVcaConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // privilege - computed: true, optional: false, required: false
  public get privilege() {
    return this.getStringAttribute('privilege');
  }

  // vca_host - computed: true, optional: false, required: false
  public get vcaHost() {
    return this.getStringAttribute('vca_host');
  }

  // vca_instance - computed: true, optional: false, required: false
  public get vcaInstance() {
    return this.getStringAttribute('vca_instance');
  }

  // vca_mgmt_network - computed: true, optional: false, required: false
  public get vcaMgmtNetwork() {
    return this.getStringAttribute('vca_mgmt_network');
  }

  // vca_orgnization - computed: true, optional: false, required: false
  public get vcaOrgnization() {
    return this.getStringAttribute('vca_orgnization');
  }

  // vca_password - computed: true, optional: false, required: false
  public get vcaPassword() {
    return this.getStringAttribute('vca_password');
  }

  // vca_username - computed: true, optional: false, required: false
  public get vcaUsername() {
    return this.getStringAttribute('vca_username');
  }

  // vca_vdc - computed: true, optional: false, required: false
  public get vcaVdc() {
    return this.getStringAttribute('vca_vdc');
  }
}

export class DataAviCloudVcaConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudVcaConfigurationOutputReference {
    return new DataAviCloudVcaConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudVcenterConfigurationContentLib {
}

export function dataAviCloudVcenterConfigurationContentLibToTerraform(struct?: DataAviCloudVcenterConfigurationContentLib): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudVcenterConfigurationContentLibToHclTerraform(struct?: DataAviCloudVcenterConfigurationContentLib): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudVcenterConfigurationContentLibOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudVcenterConfigurationContentLib | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudVcenterConfigurationContentLib | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataAviCloudVcenterConfigurationContentLibList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudVcenterConfigurationContentLibOutputReference {
    return new DataAviCloudVcenterConfigurationContentLibOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudVcenterConfigurationManagementIpSubnetIpAddr {
}

export function dataAviCloudVcenterConfigurationManagementIpSubnetIpAddrToTerraform(struct?: DataAviCloudVcenterConfigurationManagementIpSubnetIpAddr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudVcenterConfigurationManagementIpSubnetIpAddrToHclTerraform(struct?: DataAviCloudVcenterConfigurationManagementIpSubnetIpAddr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudVcenterConfigurationManagementIpSubnetIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudVcenterConfigurationManagementIpSubnetIpAddr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudVcenterConfigurationManagementIpSubnetIpAddr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // addr - computed: true, optional: false, required: false
  public get addr() {
    return this.getStringAttribute('addr');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviCloudVcenterConfigurationManagementIpSubnetIpAddrList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudVcenterConfigurationManagementIpSubnetIpAddrOutputReference {
    return new DataAviCloudVcenterConfigurationManagementIpSubnetIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudVcenterConfigurationManagementIpSubnet {
}

export function dataAviCloudVcenterConfigurationManagementIpSubnetToTerraform(struct?: DataAviCloudVcenterConfigurationManagementIpSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudVcenterConfigurationManagementIpSubnetToHclTerraform(struct?: DataAviCloudVcenterConfigurationManagementIpSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudVcenterConfigurationManagementIpSubnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudVcenterConfigurationManagementIpSubnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudVcenterConfigurationManagementIpSubnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_addr - computed: true, optional: false, required: false
  private _ipAddr = new DataAviCloudVcenterConfigurationManagementIpSubnetIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }

  // mask - computed: true, optional: false, required: false
  public get mask() {
    return this.getStringAttribute('mask');
  }
}

export class DataAviCloudVcenterConfigurationManagementIpSubnetList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudVcenterConfigurationManagementIpSubnetOutputReference {
    return new DataAviCloudVcenterConfigurationManagementIpSubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviCloudVcenterConfiguration {
}

export function dataAviCloudVcenterConfigurationToTerraform(struct?: DataAviCloudVcenterConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviCloudVcenterConfigurationToHclTerraform(struct?: DataAviCloudVcenterConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviCloudVcenterConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviCloudVcenterConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviCloudVcenterConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_lib - computed: true, optional: false, required: false
  private _contentLib = new DataAviCloudVcenterConfigurationContentLibList(this, "content_lib", true);
  public get contentLib() {
    return this._contentLib;
  }

  // datacenter - computed: true, optional: false, required: false
  public get datacenter() {
    return this.getStringAttribute('datacenter');
  }

  // datacenter_managed_object_id - computed: true, optional: false, required: false
  public get datacenterManagedObjectId() {
    return this.getStringAttribute('datacenter_managed_object_id');
  }

  // is_nsx_environment - computed: true, optional: false, required: false
  public get isNsxEnvironment() {
    return this.getStringAttribute('is_nsx_environment');
  }

  // management_ip_subnet - computed: true, optional: false, required: false
  private _managementIpSubnet = new DataAviCloudVcenterConfigurationManagementIpSubnetList(this, "management_ip_subnet", true);
  public get managementIpSubnet() {
    return this._managementIpSubnet;
  }

  // management_network - computed: true, optional: false, required: false
  public get managementNetwork() {
    return this.getStringAttribute('management_network');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // privilege - computed: true, optional: false, required: false
  public get privilege() {
    return this.getStringAttribute('privilege');
  }

  // use_content_lib - computed: true, optional: false, required: false
  public get useContentLib() {
    return this.getStringAttribute('use_content_lib');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // vcenter_template_se_location - computed: true, optional: false, required: false
  public get vcenterTemplateSeLocation() {
    return this.getStringAttribute('vcenter_template_se_location');
  }

  // vcenter_url - computed: true, optional: false, required: false
  public get vcenterUrl() {
    return this.getStringAttribute('vcenter_url');
  }
}

export class DataAviCloudVcenterConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAviCloudVcenterConfigurationOutputReference {
    return new DataAviCloudVcenterConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/data-sources/cloud avi_cloud}
*/
export class DataAviCloud extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_cloud";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAviCloud resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAviCloud to import
  * @param importFromId The id of the existing DataAviCloud that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/data-sources/cloud#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAviCloud to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_cloud", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/data-sources/cloud avi_cloud} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAviCloudConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAviCloudConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'avi_cloud',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '30.2.5',
        providerVersionConstraint: '30.2.5'
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
    this._tenantRef = config.tenantRef;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autoscale_polling_interval - computed: true, optional: false, required: false
  public get autoscalePollingInterval() {
    return this.getStringAttribute('autoscale_polling_interval');
  }

  // aws_configuration - computed: true, optional: false, required: false
  private _awsConfiguration = new DataAviCloudAwsConfigurationList(this, "aws_configuration", true);
  public get awsConfiguration() {
    return this._awsConfiguration;
  }

  // azure_configuration - computed: true, optional: false, required: false
  private _azureConfiguration = new DataAviCloudAzureConfigurationList(this, "azure_configuration", true);
  public get azureConfiguration() {
    return this._azureConfiguration;
  }

  // cloudstack_configuration - computed: true, optional: false, required: false
  private _cloudstackConfiguration = new DataAviCloudCloudstackConfigurationList(this, "cloudstack_configuration", true);
  public get cloudstackConfiguration() {
    return this._cloudstackConfiguration;
  }

  // configpb_attributes - computed: true, optional: false, required: false
  private _configpbAttributes = new DataAviCloudConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }

  // custom_tags - computed: true, optional: false, required: false
  private _customTags = new DataAviCloudCustomTagsList(this, "custom_tags", false);
  public get customTags() {
    return this._customTags;
  }

  // dhcp_enabled - computed: true, optional: false, required: false
  public get dhcpEnabled() {
    return this.getStringAttribute('dhcp_enabled');
  }

  // dns_provider_ref - computed: true, optional: false, required: false
  public get dnsProviderRef() {
    return this.getStringAttribute('dns_provider_ref');
  }

  // dns_resolution_on_se - computed: true, optional: false, required: false
  public get dnsResolutionOnSe() {
    return this.getStringAttribute('dns_resolution_on_se');
  }

  // dns_resolvers - computed: true, optional: false, required: false
  private _dnsResolvers = new DataAviCloudDnsResolversList(this, "dns_resolvers", false);
  public get dnsResolvers() {
    return this._dnsResolvers;
  }

  // docker_configuration - computed: true, optional: false, required: false
  private _dockerConfiguration = new DataAviCloudDockerConfigurationList(this, "docker_configuration", true);
  public get dockerConfiguration() {
    return this._dockerConfiguration;
  }

  // east_west_dns_provider_ref - computed: true, optional: false, required: false
  public get eastWestDnsProviderRef() {
    return this.getStringAttribute('east_west_dns_provider_ref');
  }

  // east_west_ipam_provider_ref - computed: true, optional: false, required: false
  public get eastWestIpamProviderRef() {
    return this.getStringAttribute('east_west_ipam_provider_ref');
  }

  // enable_vip_on_all_interfaces - computed: true, optional: false, required: false
  public get enableVipOnAllInterfaces() {
    return this.getStringAttribute('enable_vip_on_all_interfaces');
  }

  // enable_vip_static_routes - computed: true, optional: false, required: false
  public get enableVipStaticRoutes() {
    return this.getStringAttribute('enable_vip_static_routes');
  }

  // gcp_configuration - computed: true, optional: false, required: false
  private _gcpConfiguration = new DataAviCloudGcpConfigurationList(this, "gcp_configuration", true);
  public get gcpConfiguration() {
    return this._gcpConfiguration;
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

  // ip6_autocfg_enabled - computed: true, optional: false, required: false
  public get ip6AutocfgEnabled() {
    return this.getStringAttribute('ip6_autocfg_enabled');
  }

  // ipam_provider_ref - computed: true, optional: false, required: false
  public get ipamProviderRef() {
    return this.getStringAttribute('ipam_provider_ref');
  }

  // license_tier - computed: true, optional: false, required: false
  public get licenseTier() {
    return this.getStringAttribute('license_tier');
  }

  // license_type - computed: true, optional: false, required: false
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }

  // linuxserver_configuration - computed: true, optional: false, required: false
  private _linuxserverConfiguration = new DataAviCloudLinuxserverConfigurationList(this, "linuxserver_configuration", true);
  public get linuxserverConfiguration() {
    return this._linuxserverConfiguration;
  }

  // maintenance_mode - computed: true, optional: false, required: false
  public get maintenanceMode() {
    return this.getStringAttribute('maintenance_mode');
  }

  // markers - computed: true, optional: false, required: false
  private _markers = new DataAviCloudMarkersList(this, "markers", false);
  public get markers() {
    return this._markers;
  }

  // metrics_polling_interval - computed: true, optional: false, required: false
  public get metricsPollingInterval() {
    return this.getStringAttribute('metrics_polling_interval');
  }

  // mgmt_ip_v4_enabled - computed: true, optional: false, required: false
  public get mgmtIpV4Enabled() {
    return this.getStringAttribute('mgmt_ip_v4_enabled');
  }

  // mgmt_ip_v6_enabled - computed: true, optional: false, required: false
  public get mgmtIpV6Enabled() {
    return this.getStringAttribute('mgmt_ip_v6_enabled');
  }

  // mtu - computed: true, optional: false, required: false
  public get mtu() {
    return this.getStringAttribute('mtu');
  }

  // name - computed: true, optional: true, required: false
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

  // nsxt_configuration - computed: true, optional: false, required: false
  private _nsxtConfiguration = new DataAviCloudNsxtConfigurationList(this, "nsxt_configuration", true);
  public get nsxtConfiguration() {
    return this._nsxtConfiguration;
  }

  // ntp_configuration - computed: true, optional: false, required: false
  private _ntpConfiguration = new DataAviCloudNtpConfigurationList(this, "ntp_configuration", true);
  public get ntpConfiguration() {
    return this._ntpConfiguration;
  }

  // obj_name_prefix - computed: true, optional: false, required: false
  public get objNamePrefix() {
    return this.getStringAttribute('obj_name_prefix');
  }

  // openstack_configuration - computed: true, optional: false, required: false
  private _openstackConfiguration = new DataAviCloudOpenstackConfigurationList(this, "openstack_configuration", true);
  public get openstackConfiguration() {
    return this._openstackConfiguration;
  }

  // prefer_static_routes - computed: true, optional: false, required: false
  public get preferStaticRoutes() {
    return this.getStringAttribute('prefer_static_routes');
  }

  // proxy_configuration - computed: true, optional: false, required: false
  private _proxyConfiguration = new DataAviCloudProxyConfigurationList(this, "proxy_configuration", true);
  public get proxyConfiguration() {
    return this._proxyConfiguration;
  }

  // rancher_configuration - computed: true, optional: false, required: false
  private _rancherConfiguration = new DataAviCloudRancherConfigurationList(this, "rancher_configuration", true);
  public get rancherConfiguration() {
    return this._rancherConfiguration;
  }

  // resolve_fqdn_to_ipv6 - computed: true, optional: false, required: false
  public get resolveFqdnToIpv6() {
    return this.getStringAttribute('resolve_fqdn_to_ipv6');
  }

  // se_group_template_ref - computed: true, optional: false, required: false
  public get seGroupTemplateRef() {
    return this.getStringAttribute('se_group_template_ref');
  }

  // state_based_dns_registration - computed: true, optional: false, required: false
  public get stateBasedDnsRegistration() {
    return this.getStringAttribute('state_based_dns_registration');
  }

  // tenant_ref - computed: true, optional: true, required: false
  private _tenantRef?: string; 
  public get tenantRef() {
    return this.getStringAttribute('tenant_ref');
  }
  public set tenantRef(value: string) {
    this._tenantRef = value;
  }
  public resetTenantRef() {
    this._tenantRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantRefInput() {
    return this._tenantRef;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // vca_configuration - computed: true, optional: false, required: false
  private _vcaConfiguration = new DataAviCloudVcaConfigurationList(this, "vca_configuration", true);
  public get vcaConfiguration() {
    return this._vcaConfiguration;
  }

  // vcenter_configuration - computed: true, optional: false, required: false
  private _vcenterConfiguration = new DataAviCloudVcenterConfigurationList(this, "vcenter_configuration", true);
  public get vcenterConfiguration() {
    return this._vcenterConfiguration;
  }

  // vmc_deployment - computed: true, optional: false, required: false
  public get vmcDeployment() {
    return this.getStringAttribute('vmc_deployment');
  }

  // vtype - computed: true, optional: false, required: false
  public get vtype() {
    return this.getStringAttribute('vtype');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      uuid: cdktf.stringToTerraform(this._uuid),
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
      tenant_ref: {
        value: cdktf.stringToHclTerraform(this._tenantRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
