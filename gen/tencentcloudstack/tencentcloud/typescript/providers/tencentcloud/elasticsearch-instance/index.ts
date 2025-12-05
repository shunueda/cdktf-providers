// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/elasticsearch_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElasticsearchInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Availability zone. When create multi-az es, this parameter must be the primary availability zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/elasticsearch_instance#availability_zone ElasticsearchInstance#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Whether to enable X-Pack security authentication in Basic Edition 6.8 and above. Valid values are `1` and `2`. `1` is disabled, `2` is enabled, and default value is `1`. Notice: this parameter is only take effect on `basic` license.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/elasticsearch_instance#basic_security_type ElasticsearchInstance#basic_security_type}
  */
  readonly basicSecurityType?: number;
  /**
  * The tenancy of the prepaid instance, and uint is month. NOTE: it only works when charge_type is set to `PREPAID`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/elasticsearch_instance#charge_period ElasticsearchInstance#charge_period}
  */
  readonly chargePeriod?: number;
  /**
  * The charge type of instance. Valid values are `PREPAID` and `POSTPAID_BY_HOUR`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/elasticsearch_instance#charge_type ElasticsearchInstance#charge_type}
  */
  readonly chargeType?: string;
  /**
  * Cluster deployment mode. Valid values are `0` and `1`. `0` is single-AZ deployment, and `1` is multi-AZ deployment. Default value is `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/elasticsearch_instance#deploy_mode ElasticsearchInstance#deploy_mode}
  */
  readonly deployMode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/elasticsearch_instance#id ElasticsearchInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the instance, which can contain 1 to 50 English letters, Chinese characters, digits, dashes(-), or underscores(_).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/elasticsearch_instance#instance_name ElasticsearchInstance#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Kibana private network access status. Valid values are `OPEN` and `CLOSE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/elasticsearch_instance#kibana_private_access ElasticsearchInstance#kibana_private_access}
  */
  readonly kibanaPrivateAccess?: string;
  /**
  * Kibana public network access status. Valid values are `OPEN` and `CLOSE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/elasticsearch_instance#kibana_public_access ElasticsearchInstance#kibana_public_access}
  */
  readonly kibanaPublicAccess?: string;
  /**
  * License type. Valid values are `oss`, `basic` and `platinum`. The default value is `platinum`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/elasticsearch_instance#license_type ElasticsearchInstance#license_type}
  */
  readonly licenseType?: string;
  /**
  * Password to an instance, the password needs to be 8 to 16 characters, including at least two items ([a-z,A-Z], [0-9] and [-!@#$%&^*+=_:;,.?] special symbols.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/elasticsearch_instance#password ElasticsearchInstance#password}
  */
  readonly password: string;
  /**
  * Create an https cluster, default is http.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/elasticsearch_instance#protocol ElasticsearchInstance#protocol}
  */
  readonly protocol?: string;
  /**
  * ES cluster public network access status. Valid values are `OPEN` and `CLOSE`. Cannot be changed at the same time as `es_acl`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/elasticsearch_instance#public_access ElasticsearchInstance#public_access}
  */
  readonly publicAccess?: string;
  /**
  * When enabled, the instance will be renew automatically when it reach the end of the prepaid tenancy. Valid values are `RENEW_FLAG_AUTO` and `RENEW_FLAG_MANUAL`. NOTE: it only works when charge_type is set to `PREPAID`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/elasticsearch_instance#renew_flag ElasticsearchInstance#renew_flag}
  */
  readonly renewFlag?: string;
  /**
  * The ID of a VPC subnetwork. When create multi-az es, this parameter must be the subnet in the primary availability zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/elasticsearch_instance#subnet_id ElasticsearchInstance#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * A mapping of tags to assign to the instance. For tag limits, please refer to [Use Limits](https://intl.cloud.tencent.com/document/product/651/13354).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/elasticsearch_instance#tags ElasticsearchInstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Version of the instance. Valid values are `5.6.4`, `6.4.3`, `6.8.2`, `7.5.1` and `7.10.1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/elasticsearch_instance#version ElasticsearchInstance#version}
  */
  readonly version: string;
  /**
  * The ID of a VPC network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/elasticsearch_instance#vpc_id ElasticsearchInstance#vpc_id}
  */
  readonly vpcId: string;
  /**
  * cos_backup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/elasticsearch_instance#cos_backup ElasticsearchInstance#cos_backup}
  */
  readonly cosBackup?: ElasticsearchInstanceCosBackup;
  /**
  * es_acl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/elasticsearch_instance#es_acl ElasticsearchInstance#es_acl}
  */
  readonly esAcl?: ElasticsearchInstanceEsAcl;
  /**
  * es_public_acl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/elasticsearch_instance#es_public_acl ElasticsearchInstance#es_public_acl}
  */
  readonly esPublicAcl?: ElasticsearchInstanceEsPublicAcl;
  /**
  * multi_zone_infos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/elasticsearch_instance#multi_zone_infos ElasticsearchInstance#multi_zone_infos}
  */
  readonly multiZoneInfos?: ElasticsearchInstanceMultiZoneInfos[] | cdktf.IResolvable;
  /**
  * node_info_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/elasticsearch_instance#node_info_list ElasticsearchInstance#node_info_list}
  */
  readonly nodeInfoList?: ElasticsearchInstanceNodeInfoListStruct[] | cdktf.IResolvable;
  /**
  * web_node_type_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/elasticsearch_instance#web_node_type_info ElasticsearchInstance#web_node_type_info}
  */
  readonly webNodeTypeInfo?: ElasticsearchInstanceWebNodeTypeInfo[] | cdktf.IResolvable;
}
export interface ElasticsearchInstanceCosBackup {
  /**
  * Automatic backup execution time (accurate to the hour), e.g. `22:00`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/elasticsearch_instance#backup_time ElasticsearchInstance#backup_time}
  */
  readonly backupTime: string;
  /**
  * Whether to enable automatic backup of cos.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/elasticsearch_instance#is_auto_backup ElasticsearchInstance#is_auto_backup}
  */
  readonly isAutoBackup: boolean | cdktf.IResolvable;
}

export function elasticsearchInstanceCosBackupToTerraform(struct?: ElasticsearchInstanceCosBackupOutputReference | ElasticsearchInstanceCosBackup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_time: cdktf.stringToTerraform(struct!.backupTime),
    is_auto_backup: cdktf.booleanToTerraform(struct!.isAutoBackup),
  }
}


export function elasticsearchInstanceCosBackupToHclTerraform(struct?: ElasticsearchInstanceCosBackupOutputReference | ElasticsearchInstanceCosBackup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_time: {
      value: cdktf.stringToHclTerraform(struct!.backupTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_auto_backup: {
      value: cdktf.booleanToHclTerraform(struct!.isAutoBackup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchInstanceCosBackupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElasticsearchInstanceCosBackup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupTime = this._backupTime;
    }
    if (this._isAutoBackup !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAutoBackup = this._isAutoBackup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchInstanceCosBackup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backupTime = undefined;
      this._isAutoBackup = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backupTime = value.backupTime;
      this._isAutoBackup = value.isAutoBackup;
    }
  }

  // backup_time - computed: false, optional: false, required: true
  private _backupTime?: string; 
  public get backupTime() {
    return this.getStringAttribute('backup_time');
  }
  public set backupTime(value: string) {
    this._backupTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupTimeInput() {
    return this._backupTime;
  }

  // is_auto_backup - computed: false, optional: false, required: true
  private _isAutoBackup?: boolean | cdktf.IResolvable; 
  public get isAutoBackup() {
    return this.getBooleanAttribute('is_auto_backup');
  }
  public set isAutoBackup(value: boolean | cdktf.IResolvable) {
    this._isAutoBackup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isAutoBackupInput() {
    return this._isAutoBackup;
  }
}
export interface ElasticsearchInstanceEsAcl {
  /**
  * Blacklist of kibana access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/elasticsearch_instance#black_list ElasticsearchInstance#black_list}
  */
  readonly blackList?: string[];
  /**
  * Whitelist of kibana access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/elasticsearch_instance#white_list ElasticsearchInstance#white_list}
  */
  readonly whiteList?: string[];
}

export function elasticsearchInstanceEsAclToTerraform(struct?: ElasticsearchInstanceEsAclOutputReference | ElasticsearchInstanceEsAcl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    black_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.blackList),
    white_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.whiteList),
  }
}


export function elasticsearchInstanceEsAclToHclTerraform(struct?: ElasticsearchInstanceEsAclOutputReference | ElasticsearchInstanceEsAcl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    black_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.blackList),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    white_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.whiteList),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchInstanceEsAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElasticsearchInstanceEsAcl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blackList !== undefined) {
      hasAnyValues = true;
      internalValueResult.blackList = this._blackList;
    }
    if (this._whiteList !== undefined) {
      hasAnyValues = true;
      internalValueResult.whiteList = this._whiteList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchInstanceEsAcl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blackList = undefined;
      this._whiteList = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blackList = value.blackList;
      this._whiteList = value.whiteList;
    }
  }

  // black_list - computed: true, optional: true, required: false
  private _blackList?: string[]; 
  public get blackList() {
    return cdktf.Fn.tolist(this.getListAttribute('black_list'));
  }
  public set blackList(value: string[]) {
    this._blackList = value;
  }
  public resetBlackList() {
    this._blackList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blackListInput() {
    return this._blackList;
  }

  // white_list - computed: true, optional: true, required: false
  private _whiteList?: string[]; 
  public get whiteList() {
    return cdktf.Fn.tolist(this.getListAttribute('white_list'));
  }
  public set whiteList(value: string[]) {
    this._whiteList = value;
  }
  public resetWhiteList() {
    this._whiteList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whiteListInput() {
    return this._whiteList;
  }
}
export interface ElasticsearchInstanceEsPublicAcl {
  /**
  * Access Whitelist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/elasticsearch_instance#white_ip_list ElasticsearchInstance#white_ip_list}
  */
  readonly whiteIpList?: string[];
}

export function elasticsearchInstanceEsPublicAclToTerraform(struct?: ElasticsearchInstanceEsPublicAclOutputReference | ElasticsearchInstanceEsPublicAcl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    white_ip_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.whiteIpList),
  }
}


export function elasticsearchInstanceEsPublicAclToHclTerraform(struct?: ElasticsearchInstanceEsPublicAclOutputReference | ElasticsearchInstanceEsPublicAcl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    white_ip_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.whiteIpList),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchInstanceEsPublicAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElasticsearchInstanceEsPublicAcl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._whiteIpList !== undefined) {
      hasAnyValues = true;
      internalValueResult.whiteIpList = this._whiteIpList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchInstanceEsPublicAcl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._whiteIpList = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._whiteIpList = value.whiteIpList;
    }
  }

  // white_ip_list - computed: true, optional: true, required: false
  private _whiteIpList?: string[]; 
  public get whiteIpList() {
    return cdktf.Fn.tolist(this.getListAttribute('white_ip_list'));
  }
  public set whiteIpList(value: string[]) {
    this._whiteIpList = value;
  }
  public resetWhiteIpList() {
    this._whiteIpList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whiteIpListInput() {
    return this._whiteIpList;
  }
}
export interface ElasticsearchInstanceMultiZoneInfos {
  /**
  * Availability zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/elasticsearch_instance#availability_zone ElasticsearchInstance#availability_zone}
  */
  readonly availabilityZone: string;
  /**
  * The ID of a VPC subnetwork.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/elasticsearch_instance#subnet_id ElasticsearchInstance#subnet_id}
  */
  readonly subnetId: string;
}

export function elasticsearchInstanceMultiZoneInfosToTerraform(struct?: ElasticsearchInstanceMultiZoneInfos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_zone: cdktf.stringToTerraform(struct!.availabilityZone),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


export function elasticsearchInstanceMultiZoneInfosToHclTerraform(struct?: ElasticsearchInstanceMultiZoneInfos | cdktf.IResolvable): any {
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

export class ElasticsearchInstanceMultiZoneInfosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElasticsearchInstanceMultiZoneInfos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZone = this._availabilityZone;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchInstanceMultiZoneInfos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availabilityZone = undefined;
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
      this._subnetId = value.subnetId;
    }
  }

  // availability_zone - computed: false, optional: false, required: true
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
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
}

export class ElasticsearchInstanceMultiZoneInfosList extends cdktf.ComplexList {
  public internalValue? : ElasticsearchInstanceMultiZoneInfos[] | cdktf.IResolvable

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
  public get(index: number): ElasticsearchInstanceMultiZoneInfosOutputReference {
    return new ElasticsearchInstanceMultiZoneInfosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElasticsearchInstanceNodeInfoListStruct {
  /**
  * Node disk size. Unit is GB, and default value is `100`. Big Data and High IO models do not support the specified disk size and have no default values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/elasticsearch_instance#disk_size ElasticsearchInstance#disk_size}
  */
  readonly diskSize?: number;
  /**
  * Node disk type. Valid values are `CLOUD_SSD`, `CLOUD_PREMIUM`, `CLOUD_HSSD`, `CLOUD_BSSD`, `CLOUD_BIGDATA` and `CLOUD_HIGHIO`. The default value is `CLOUD_SSD`. Big Data and High IO models do not support the specified disk type and have no default values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/elasticsearch_instance#disk_type ElasticsearchInstance#disk_type}
  */
  readonly diskType?: string;
  /**
  * Decides to encrypt this disk or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/elasticsearch_instance#encrypt ElasticsearchInstance#encrypt}
  */
  readonly encrypt?: boolean | cdktf.IResolvable;
  /**
  * Number of nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/elasticsearch_instance#node_num ElasticsearchInstance#node_num}
  */
  readonly nodeNum: number;
  /**
  * Node specification, and valid values refer to [document of tencentcloud](https://intl.cloud.tencent.com/document/product/845/18376).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/elasticsearch_instance#node_type ElasticsearchInstance#node_type}
  */
  readonly nodeType: string;
  /**
  * Node type. Valid values are `hotData`, `warmData` and `dedicatedMaster`. The default value is 'hotData`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/elasticsearch_instance#type ElasticsearchInstance#type}
  */
  readonly type?: string;
}

export function elasticsearchInstanceNodeInfoListStructToTerraform(struct?: ElasticsearchInstanceNodeInfoListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_size: cdktf.numberToTerraform(struct!.diskSize),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    encrypt: cdktf.booleanToTerraform(struct!.encrypt),
    node_num: cdktf.numberToTerraform(struct!.nodeNum),
    node_type: cdktf.stringToTerraform(struct!.nodeType),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function elasticsearchInstanceNodeInfoListStructToHclTerraform(struct?: ElasticsearchInstanceNodeInfoListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_size: {
      value: cdktf.numberToHclTerraform(struct!.diskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_type: {
      value: cdktf.stringToHclTerraform(struct!.diskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encrypt: {
      value: cdktf.booleanToHclTerraform(struct!.encrypt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    node_num: {
      value: cdktf.numberToHclTerraform(struct!.nodeNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_type: {
      value: cdktf.stringToHclTerraform(struct!.nodeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchInstanceNodeInfoListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElasticsearchInstanceNodeInfoListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._encrypt !== undefined) {
      hasAnyValues = true;
      internalValueResult.encrypt = this._encrypt;
    }
    if (this._nodeNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeNum = this._nodeNum;
    }
    if (this._nodeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeType = this._nodeType;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchInstanceNodeInfoListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskSize = undefined;
      this._diskType = undefined;
      this._encrypt = undefined;
      this._nodeNum = undefined;
      this._nodeType = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskSize = value.diskSize;
      this._diskType = value.diskType;
      this._encrypt = value.encrypt;
      this._nodeNum = value.nodeNum;
      this._nodeType = value.nodeType;
      this._type = value.type;
    }
  }

  // disk_size - computed: true, optional: true, required: false
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

  // disk_type - computed: true, optional: true, required: false
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  public resetDiskType() {
    this._diskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
  }

  // encrypt - computed: false, optional: true, required: false
  private _encrypt?: boolean | cdktf.IResolvable; 
  public get encrypt() {
    return this.getBooleanAttribute('encrypt');
  }
  public set encrypt(value: boolean | cdktf.IResolvable) {
    this._encrypt = value;
  }
  public resetEncrypt() {
    this._encrypt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptInput() {
    return this._encrypt;
  }

  // node_num - computed: false, optional: false, required: true
  private _nodeNum?: number; 
  public get nodeNum() {
    return this.getNumberAttribute('node_num');
  }
  public set nodeNum(value: number) {
    this._nodeNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNumInput() {
    return this._nodeNum;
  }

  // node_type - computed: false, optional: false, required: true
  private _nodeType?: string; 
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }
  public set nodeType(value: string) {
    this._nodeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeInput() {
    return this._nodeType;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ElasticsearchInstanceNodeInfoListStructList extends cdktf.ComplexList {
  public internalValue? : ElasticsearchInstanceNodeInfoListStruct[] | cdktf.IResolvable

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
  public get(index: number): ElasticsearchInstanceNodeInfoListStructOutputReference {
    return new ElasticsearchInstanceNodeInfoListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElasticsearchInstanceWebNodeTypeInfo {
  /**
  * Visual node number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/elasticsearch_instance#node_num ElasticsearchInstance#node_num}
  */
  readonly nodeNum: number;
  /**
  * Visual node specifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/elasticsearch_instance#node_type ElasticsearchInstance#node_type}
  */
  readonly nodeType: string;
}

export function elasticsearchInstanceWebNodeTypeInfoToTerraform(struct?: ElasticsearchInstanceWebNodeTypeInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_num: cdktf.numberToTerraform(struct!.nodeNum),
    node_type: cdktf.stringToTerraform(struct!.nodeType),
  }
}


export function elasticsearchInstanceWebNodeTypeInfoToHclTerraform(struct?: ElasticsearchInstanceWebNodeTypeInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_num: {
      value: cdktf.numberToHclTerraform(struct!.nodeNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_type: {
      value: cdktf.stringToHclTerraform(struct!.nodeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchInstanceWebNodeTypeInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElasticsearchInstanceWebNodeTypeInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeNum = this._nodeNum;
    }
    if (this._nodeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeType = this._nodeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchInstanceWebNodeTypeInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeNum = undefined;
      this._nodeType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeNum = value.nodeNum;
      this._nodeType = value.nodeType;
    }
  }

  // node_num - computed: false, optional: false, required: true
  private _nodeNum?: number; 
  public get nodeNum() {
    return this.getNumberAttribute('node_num');
  }
  public set nodeNum(value: number) {
    this._nodeNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNumInput() {
    return this._nodeNum;
  }

  // node_type - computed: false, optional: false, required: true
  private _nodeType?: string; 
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }
  public set nodeType(value: string) {
    this._nodeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeInput() {
    return this._nodeType;
  }
}

export class ElasticsearchInstanceWebNodeTypeInfoList extends cdktf.ComplexList {
  public internalValue? : ElasticsearchInstanceWebNodeTypeInfo[] | cdktf.IResolvable

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
  public get(index: number): ElasticsearchInstanceWebNodeTypeInfoOutputReference {
    return new ElasticsearchInstanceWebNodeTypeInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/elasticsearch_instance tencentcloud_elasticsearch_instance}
*/
export class ElasticsearchInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_elasticsearch_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ElasticsearchInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ElasticsearchInstance to import
  * @param importFromId The id of the existing ElasticsearchInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/elasticsearch_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ElasticsearchInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_elasticsearch_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/elasticsearch_instance tencentcloud_elasticsearch_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElasticsearchInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: ElasticsearchInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_elasticsearch_instance',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.42',
        providerVersionConstraint: '1.82.42'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availabilityZone = config.availabilityZone;
    this._basicSecurityType = config.basicSecurityType;
    this._chargePeriod = config.chargePeriod;
    this._chargeType = config.chargeType;
    this._deployMode = config.deployMode;
    this._id = config.id;
    this._instanceName = config.instanceName;
    this._kibanaPrivateAccess = config.kibanaPrivateAccess;
    this._kibanaPublicAccess = config.kibanaPublicAccess;
    this._licenseType = config.licenseType;
    this._password = config.password;
    this._protocol = config.protocol;
    this._publicAccess = config.publicAccess;
    this._renewFlag = config.renewFlag;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._version = config.version;
    this._vpcId = config.vpcId;
    this._cosBackup.internalValue = config.cosBackup;
    this._esAcl.internalValue = config.esAcl;
    this._esPublicAcl.internalValue = config.esPublicAcl;
    this._multiZoneInfos.internalValue = config.multiZoneInfos;
    this._nodeInfoList.internalValue = config.nodeInfoList;
    this._webNodeTypeInfo.internalValue = config.webNodeTypeInfo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // basic_security_type - computed: false, optional: true, required: false
  private _basicSecurityType?: number; 
  public get basicSecurityType() {
    return this.getNumberAttribute('basic_security_type');
  }
  public set basicSecurityType(value: number) {
    this._basicSecurityType = value;
  }
  public resetBasicSecurityType() {
    this._basicSecurityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicSecurityTypeInput() {
    return this._basicSecurityType;
  }

  // charge_period - computed: false, optional: true, required: false
  private _chargePeriod?: number; 
  public get chargePeriod() {
    return this.getNumberAttribute('charge_period');
  }
  public set chargePeriod(value: number) {
    this._chargePeriod = value;
  }
  public resetChargePeriod() {
    this._chargePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chargePeriodInput() {
    return this._chargePeriod;
  }

  // charge_type - computed: false, optional: true, required: false
  private _chargeType?: string; 
  public get chargeType() {
    return this.getStringAttribute('charge_type');
  }
  public set chargeType(value: string) {
    this._chargeType = value;
  }
  public resetChargeType() {
    this._chargeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chargeTypeInput() {
    return this._chargeType;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // deploy_mode - computed: false, optional: true, required: false
  private _deployMode?: number; 
  public get deployMode() {
    return this.getNumberAttribute('deploy_mode');
  }
  public set deployMode(value: number) {
    this._deployMode = value;
  }
  public resetDeployMode() {
    this._deployMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployModeInput() {
    return this._deployMode;
  }

  // elasticsearch_domain - computed: true, optional: false, required: false
  public get elasticsearchDomain() {
    return this.getStringAttribute('elasticsearch_domain');
  }

  // elasticsearch_port - computed: true, optional: false, required: false
  public get elasticsearchPort() {
    return this.getNumberAttribute('elasticsearch_port');
  }

  // elasticsearch_vip - computed: true, optional: false, required: false
  public get elasticsearchVip() {
    return this.getStringAttribute('elasticsearch_vip');
  }

  // es_public_url - computed: true, optional: false, required: false
  public get esPublicUrl() {
    return this.getStringAttribute('es_public_url');
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

  // instance_name - computed: false, optional: true, required: false
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  public resetInstanceName() {
    this._instanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // kibana_private_access - computed: true, optional: true, required: false
  private _kibanaPrivateAccess?: string; 
  public get kibanaPrivateAccess() {
    return this.getStringAttribute('kibana_private_access');
  }
  public set kibanaPrivateAccess(value: string) {
    this._kibanaPrivateAccess = value;
  }
  public resetKibanaPrivateAccess() {
    this._kibanaPrivateAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kibanaPrivateAccessInput() {
    return this._kibanaPrivateAccess;
  }

  // kibana_private_url - computed: true, optional: false, required: false
  public get kibanaPrivateUrl() {
    return this.getStringAttribute('kibana_private_url');
  }

  // kibana_public_access - computed: true, optional: true, required: false
  private _kibanaPublicAccess?: string; 
  public get kibanaPublicAccess() {
    return this.getStringAttribute('kibana_public_access');
  }
  public set kibanaPublicAccess(value: string) {
    this._kibanaPublicAccess = value;
  }
  public resetKibanaPublicAccess() {
    this._kibanaPublicAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kibanaPublicAccessInput() {
    return this._kibanaPublicAccess;
  }

  // kibana_url - computed: true, optional: false, required: false
  public get kibanaUrl() {
    return this.getStringAttribute('kibana_url');
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

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // public_access - computed: true, optional: true, required: false
  private _publicAccess?: string; 
  public get publicAccess() {
    return this.getStringAttribute('public_access');
  }
  public set publicAccess(value: string) {
    this._publicAccess = value;
  }
  public resetPublicAccess() {
    this._publicAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicAccessInput() {
    return this._publicAccess;
  }

  // renew_flag - computed: false, optional: true, required: false
  private _renewFlag?: string; 
  public get renewFlag() {
    return this.getStringAttribute('renew_flag');
  }
  public set renewFlag(value: string) {
    this._renewFlag = value;
  }
  public resetRenewFlag() {
    this._renewFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewFlagInput() {
    return this._renewFlag;
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

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // cos_backup - computed: false, optional: true, required: false
  private _cosBackup = new ElasticsearchInstanceCosBackupOutputReference(this, "cos_backup");
  public get cosBackup() {
    return this._cosBackup;
  }
  public putCosBackup(value: ElasticsearchInstanceCosBackup) {
    this._cosBackup.internalValue = value;
  }
  public resetCosBackup() {
    this._cosBackup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosBackupInput() {
    return this._cosBackup.internalValue;
  }

  // es_acl - computed: false, optional: true, required: false
  private _esAcl = new ElasticsearchInstanceEsAclOutputReference(this, "es_acl");
  public get esAcl() {
    return this._esAcl;
  }
  public putEsAcl(value: ElasticsearchInstanceEsAcl) {
    this._esAcl.internalValue = value;
  }
  public resetEsAcl() {
    this._esAcl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get esAclInput() {
    return this._esAcl.internalValue;
  }

  // es_public_acl - computed: false, optional: true, required: false
  private _esPublicAcl = new ElasticsearchInstanceEsPublicAclOutputReference(this, "es_public_acl");
  public get esPublicAcl() {
    return this._esPublicAcl;
  }
  public putEsPublicAcl(value: ElasticsearchInstanceEsPublicAcl) {
    this._esPublicAcl.internalValue = value;
  }
  public resetEsPublicAcl() {
    this._esPublicAcl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get esPublicAclInput() {
    return this._esPublicAcl.internalValue;
  }

  // multi_zone_infos - computed: false, optional: true, required: false
  private _multiZoneInfos = new ElasticsearchInstanceMultiZoneInfosList(this, "multi_zone_infos", false);
  public get multiZoneInfos() {
    return this._multiZoneInfos;
  }
  public putMultiZoneInfos(value: ElasticsearchInstanceMultiZoneInfos[] | cdktf.IResolvable) {
    this._multiZoneInfos.internalValue = value;
  }
  public resetMultiZoneInfos() {
    this._multiZoneInfos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiZoneInfosInput() {
    return this._multiZoneInfos.internalValue;
  }

  // node_info_list - computed: false, optional: true, required: false
  private _nodeInfoList = new ElasticsearchInstanceNodeInfoListStructList(this, "node_info_list", true);
  public get nodeInfoList() {
    return this._nodeInfoList;
  }
  public putNodeInfoList(value: ElasticsearchInstanceNodeInfoListStruct[] | cdktf.IResolvable) {
    this._nodeInfoList.internalValue = value;
  }
  public resetNodeInfoList() {
    this._nodeInfoList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeInfoListInput() {
    return this._nodeInfoList.internalValue;
  }

  // web_node_type_info - computed: false, optional: true, required: false
  private _webNodeTypeInfo = new ElasticsearchInstanceWebNodeTypeInfoList(this, "web_node_type_info", false);
  public get webNodeTypeInfo() {
    return this._webNodeTypeInfo;
  }
  public putWebNodeTypeInfo(value: ElasticsearchInstanceWebNodeTypeInfo[] | cdktf.IResolvable) {
    this._webNodeTypeInfo.internalValue = value;
  }
  public resetWebNodeTypeInfo() {
    this._webNodeTypeInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webNodeTypeInfoInput() {
    return this._webNodeTypeInfo.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      basic_security_type: cdktf.numberToTerraform(this._basicSecurityType),
      charge_period: cdktf.numberToTerraform(this._chargePeriod),
      charge_type: cdktf.stringToTerraform(this._chargeType),
      deploy_mode: cdktf.numberToTerraform(this._deployMode),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      kibana_private_access: cdktf.stringToTerraform(this._kibanaPrivateAccess),
      kibana_public_access: cdktf.stringToTerraform(this._kibanaPublicAccess),
      license_type: cdktf.stringToTerraform(this._licenseType),
      password: cdktf.stringToTerraform(this._password),
      protocol: cdktf.stringToTerraform(this._protocol),
      public_access: cdktf.stringToTerraform(this._publicAccess),
      renew_flag: cdktf.stringToTerraform(this._renewFlag),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      version: cdktf.stringToTerraform(this._version),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      cos_backup: elasticsearchInstanceCosBackupToTerraform(this._cosBackup.internalValue),
      es_acl: elasticsearchInstanceEsAclToTerraform(this._esAcl.internalValue),
      es_public_acl: elasticsearchInstanceEsPublicAclToTerraform(this._esPublicAcl.internalValue),
      multi_zone_infos: cdktf.listMapper(elasticsearchInstanceMultiZoneInfosToTerraform, true)(this._multiZoneInfos.internalValue),
      node_info_list: cdktf.listMapper(elasticsearchInstanceNodeInfoListStructToTerraform, true)(this._nodeInfoList.internalValue),
      web_node_type_info: cdktf.listMapper(elasticsearchInstanceWebNodeTypeInfoToTerraform, true)(this._webNodeTypeInfo.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_zone: {
        value: cdktf.stringToHclTerraform(this._availabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      basic_security_type: {
        value: cdktf.numberToHclTerraform(this._basicSecurityType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      charge_period: {
        value: cdktf.numberToHclTerraform(this._chargePeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      charge_type: {
        value: cdktf.stringToHclTerraform(this._chargeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deploy_mode: {
        value: cdktf.numberToHclTerraform(this._deployMode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kibana_private_access: {
        value: cdktf.stringToHclTerraform(this._kibanaPrivateAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kibana_public_access: {
        value: cdktf.stringToHclTerraform(this._kibanaPublicAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      license_type: {
        value: cdktf.stringToHclTerraform(this._licenseType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_access: {
        value: cdktf.stringToHclTerraform(this._publicAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      renew_flag: {
        value: cdktf.stringToHclTerraform(this._renewFlag),
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
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cos_backup: {
        value: elasticsearchInstanceCosBackupToHclTerraform(this._cosBackup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElasticsearchInstanceCosBackupList",
      },
      es_acl: {
        value: elasticsearchInstanceEsAclToHclTerraform(this._esAcl.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElasticsearchInstanceEsAclList",
      },
      es_public_acl: {
        value: elasticsearchInstanceEsPublicAclToHclTerraform(this._esPublicAcl.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElasticsearchInstanceEsPublicAclList",
      },
      multi_zone_infos: {
        value: cdktf.listMapperHcl(elasticsearchInstanceMultiZoneInfosToHclTerraform, true)(this._multiZoneInfos.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElasticsearchInstanceMultiZoneInfosList",
      },
      node_info_list: {
        value: cdktf.listMapperHcl(elasticsearchInstanceNodeInfoListStructToHclTerraform, true)(this._nodeInfoList.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ElasticsearchInstanceNodeInfoListStructList",
      },
      web_node_type_info: {
        value: cdktf.listMapperHcl(elasticsearchInstanceWebNodeTypeInfoToHclTerraform, true)(this._webNodeTypeInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElasticsearchInstanceWebNodeTypeInfoList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
