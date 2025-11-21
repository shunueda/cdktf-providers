// https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KvstoreInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#auto_renew KvstoreInstance#auto_renew}
  */
  readonly autoRenew?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#auto_renew_period KvstoreInstance#auto_renew_period}
  */
  readonly autoRenewPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#auto_use_coupon KvstoreInstance#auto_use_coupon}
  */
  readonly autoUseCoupon?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#availability_zone KvstoreInstance#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#backup_id KvstoreInstance#backup_id}
  */
  readonly backupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#backup_period KvstoreInstance#backup_period}
  */
  readonly backupPeriod?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#backup_time KvstoreInstance#backup_time}
  */
  readonly backupTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#bandwidth KvstoreInstance#bandwidth}
  */
  readonly bandwidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#business_info KvstoreInstance#business_info}
  */
  readonly businessInfo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#capacity KvstoreInstance#capacity}
  */
  readonly capacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#config KvstoreInstance#config}
  */
  readonly config?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#connection_string_prefix KvstoreInstance#connection_string_prefix}
  */
  readonly connectionStringPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#coupon_no KvstoreInstance#coupon_no}
  */
  readonly couponNo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#db_instance_name KvstoreInstance#db_instance_name}
  */
  readonly dbInstanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#dedicated_host_group_id KvstoreInstance#dedicated_host_group_id}
  */
  readonly dedicatedHostGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#dry_run KvstoreInstance#dry_run}
  */
  readonly dryRun?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#effective_time KvstoreInstance#effective_time}
  */
  readonly effectiveTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#enable_backup_log KvstoreInstance#enable_backup_log}
  */
  readonly enableBackupLog?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#enable_public KvstoreInstance#enable_public}
  */
  readonly enablePublic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#encryption_key KvstoreInstance#encryption_key}
  */
  readonly encryptionKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#encryption_name KvstoreInstance#encryption_name}
  */
  readonly encryptionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#engine_version KvstoreInstance#engine_version}
  */
  readonly engineVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#force_upgrade KvstoreInstance#force_upgrade}
  */
  readonly forceUpgrade?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#global_instance KvstoreInstance#global_instance}
  */
  readonly globalInstance?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#global_instance_id KvstoreInstance#global_instance_id}
  */
  readonly globalInstanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#id KvstoreInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#instance_charge_type KvstoreInstance#instance_charge_type}
  */
  readonly instanceChargeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#instance_class KvstoreInstance#instance_class}
  */
  readonly instanceClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#instance_name KvstoreInstance#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#instance_release_protection KvstoreInstance#instance_release_protection}
  */
  readonly instanceReleaseProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#instance_type KvstoreInstance#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#is_auto_upgrade_open KvstoreInstance#is_auto_upgrade_open}
  */
  readonly isAutoUpgradeOpen?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#kms_encrypted_password KvstoreInstance#kms_encrypted_password}
  */
  readonly kmsEncryptedPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#kms_encryption_context KvstoreInstance#kms_encryption_context}
  */
  readonly kmsEncryptionContext?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#maintain_end_time KvstoreInstance#maintain_end_time}
  */
  readonly maintainEndTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#maintain_start_time KvstoreInstance#maintain_start_time}
  */
  readonly maintainStartTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#modify_mode KvstoreInstance#modify_mode}
  */
  readonly modifyMode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#node_type KvstoreInstance#node_type}
  */
  readonly nodeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#order_type KvstoreInstance#order_type}
  */
  readonly orderType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#password KvstoreInstance#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#payment_type KvstoreInstance#payment_type}
  */
  readonly paymentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#period KvstoreInstance#period}
  */
  readonly period?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#port KvstoreInstance#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#private_connection_port KvstoreInstance#private_connection_port}
  */
  readonly privateConnectionPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#private_connection_prefix KvstoreInstance#private_connection_prefix}
  */
  readonly privateConnectionPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#private_ip KvstoreInstance#private_ip}
  */
  readonly privateIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#read_only_count KvstoreInstance#read_only_count}
  */
  readonly readOnlyCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#resource_group_id KvstoreInstance#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#restore_time KvstoreInstance#restore_time}
  */
  readonly restoreTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#role_arn KvstoreInstance#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#secondary_zone_id KvstoreInstance#secondary_zone_id}
  */
  readonly secondaryZoneId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#security_group_id KvstoreInstance#security_group_id}
  */
  readonly securityGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#security_ip_group_attribute KvstoreInstance#security_ip_group_attribute}
  */
  readonly securityIpGroupAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#security_ip_group_name KvstoreInstance#security_ip_group_name}
  */
  readonly securityIpGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#security_ips KvstoreInstance#security_ips}
  */
  readonly securityIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#shard_count KvstoreInstance#shard_count}
  */
  readonly shardCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#slave_read_only_count KvstoreInstance#slave_read_only_count}
  */
  readonly slaveReadOnlyCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#srcdb_instance_id KvstoreInstance#srcdb_instance_id}
  */
  readonly srcdbInstanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#ssl_enable KvstoreInstance#ssl_enable}
  */
  readonly sslEnable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#tags KvstoreInstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#tde_status KvstoreInstance#tde_status}
  */
  readonly tdeStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#vpc_auth_mode KvstoreInstance#vpc_auth_mode}
  */
  readonly vpcAuthMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#vswitch_id KvstoreInstance#vswitch_id}
  */
  readonly vswitchId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#zone_id KvstoreInstance#zone_id}
  */
  readonly zoneId?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#parameters KvstoreInstance#parameters}
  */
  readonly parameters?: KvstoreInstanceParameters[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#timeouts KvstoreInstance#timeouts}
  */
  readonly timeouts?: KvstoreInstanceTimeouts;
}
export interface KvstoreInstanceParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#name KvstoreInstance#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#value KvstoreInstance#value}
  */
  readonly value?: string;
}

export function kvstoreInstanceParametersToTerraform(struct?: KvstoreInstanceParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function kvstoreInstanceParametersToHclTerraform(struct?: KvstoreInstanceParameters | cdktf.IResolvable): any {
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

export class KvstoreInstanceParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KvstoreInstanceParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KvstoreInstanceParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class KvstoreInstanceParametersList extends cdktf.ComplexList {
  public internalValue? : KvstoreInstanceParameters[] | cdktf.IResolvable

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
  public get(index: number): KvstoreInstanceParametersOutputReference {
    return new KvstoreInstanceParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KvstoreInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#create KvstoreInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#delete KvstoreInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#update KvstoreInstance#update}
  */
  readonly update?: string;
}

export function kvstoreInstanceTimeoutsToTerraform(struct?: KvstoreInstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function kvstoreInstanceTimeoutsToHclTerraform(struct?: KvstoreInstanceTimeouts | cdktf.IResolvable): any {
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
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KvstoreInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KvstoreInstanceTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KvstoreInstanceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
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
      this._update = value.update;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance alicloud_kvstore_instance}
*/
export class KvstoreInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_kvstore_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KvstoreInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KvstoreInstance to import
  * @param importFromId The id of the existing KvstoreInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KvstoreInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_kvstore_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/kvstore_instance alicloud_kvstore_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KvstoreInstanceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: KvstoreInstanceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_kvstore_instance',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.263.0',
        providerVersionConstraint: '1.263.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoRenew = config.autoRenew;
    this._autoRenewPeriod = config.autoRenewPeriod;
    this._autoUseCoupon = config.autoUseCoupon;
    this._availabilityZone = config.availabilityZone;
    this._backupId = config.backupId;
    this._backupPeriod = config.backupPeriod;
    this._backupTime = config.backupTime;
    this._bandwidth = config.bandwidth;
    this._businessInfo = config.businessInfo;
    this._capacity = config.capacity;
    this._config = config.config;
    this._connectionStringPrefix = config.connectionStringPrefix;
    this._couponNo = config.couponNo;
    this._dbInstanceName = config.dbInstanceName;
    this._dedicatedHostGroupId = config.dedicatedHostGroupId;
    this._dryRun = config.dryRun;
    this._effectiveTime = config.effectiveTime;
    this._enableBackupLog = config.enableBackupLog;
    this._enablePublic = config.enablePublic;
    this._encryptionKey = config.encryptionKey;
    this._encryptionName = config.encryptionName;
    this._engineVersion = config.engineVersion;
    this._forceUpgrade = config.forceUpgrade;
    this._globalInstance = config.globalInstance;
    this._globalInstanceId = config.globalInstanceId;
    this._id = config.id;
    this._instanceChargeType = config.instanceChargeType;
    this._instanceClass = config.instanceClass;
    this._instanceName = config.instanceName;
    this._instanceReleaseProtection = config.instanceReleaseProtection;
    this._instanceType = config.instanceType;
    this._isAutoUpgradeOpen = config.isAutoUpgradeOpen;
    this._kmsEncryptedPassword = config.kmsEncryptedPassword;
    this._kmsEncryptionContext = config.kmsEncryptionContext;
    this._maintainEndTime = config.maintainEndTime;
    this._maintainStartTime = config.maintainStartTime;
    this._modifyMode = config.modifyMode;
    this._nodeType = config.nodeType;
    this._orderType = config.orderType;
    this._password = config.password;
    this._paymentType = config.paymentType;
    this._period = config.period;
    this._port = config.port;
    this._privateConnectionPort = config.privateConnectionPort;
    this._privateConnectionPrefix = config.privateConnectionPrefix;
    this._privateIp = config.privateIp;
    this._readOnlyCount = config.readOnlyCount;
    this._resourceGroupId = config.resourceGroupId;
    this._restoreTime = config.restoreTime;
    this._roleArn = config.roleArn;
    this._secondaryZoneId = config.secondaryZoneId;
    this._securityGroupId = config.securityGroupId;
    this._securityIpGroupAttribute = config.securityIpGroupAttribute;
    this._securityIpGroupName = config.securityIpGroupName;
    this._securityIps = config.securityIps;
    this._shardCount = config.shardCount;
    this._slaveReadOnlyCount = config.slaveReadOnlyCount;
    this._srcdbInstanceId = config.srcdbInstanceId;
    this._sslEnable = config.sslEnable;
    this._tags = config.tags;
    this._tdeStatus = config.tdeStatus;
    this._vpcAuthMode = config.vpcAuthMode;
    this._vswitchId = config.vswitchId;
    this._zoneId = config.zoneId;
    this._parameters.internalValue = config.parameters;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_renew - computed: false, optional: true, required: false
  private _autoRenew?: boolean | cdktf.IResolvable; 
  public get autoRenew() {
    return this.getBooleanAttribute('auto_renew');
  }
  public set autoRenew(value: boolean | cdktf.IResolvable) {
    this._autoRenew = value;
  }
  public resetAutoRenew() {
    this._autoRenew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewInput() {
    return this._autoRenew;
  }

  // auto_renew_period - computed: false, optional: true, required: false
  private _autoRenewPeriod?: number; 
  public get autoRenewPeriod() {
    return this.getNumberAttribute('auto_renew_period');
  }
  public set autoRenewPeriod(value: number) {
    this._autoRenewPeriod = value;
  }
  public resetAutoRenewPeriod() {
    this._autoRenewPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewPeriodInput() {
    return this._autoRenewPeriod;
  }

  // auto_use_coupon - computed: false, optional: true, required: false
  private _autoUseCoupon?: boolean | cdktf.IResolvable; 
  public get autoUseCoupon() {
    return this.getBooleanAttribute('auto_use_coupon');
  }
  public set autoUseCoupon(value: boolean | cdktf.IResolvable) {
    this._autoUseCoupon = value;
  }
  public resetAutoUseCoupon() {
    this._autoUseCoupon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUseCouponInput() {
    return this._autoUseCoupon;
  }

  // availability_zone - computed: true, optional: true, required: false
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

  // backup_id - computed: false, optional: true, required: false
  private _backupId?: string; 
  public get backupId() {
    return this.getStringAttribute('backup_id');
  }
  public set backupId(value: string) {
    this._backupId = value;
  }
  public resetBackupId() {
    this._backupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupIdInput() {
    return this._backupId;
  }

  // backup_period - computed: true, optional: true, required: false
  private _backupPeriod?: string[]; 
  public get backupPeriod() {
    return cdktf.Fn.tolist(this.getListAttribute('backup_period'));
  }
  public set backupPeriod(value: string[]) {
    this._backupPeriod = value;
  }
  public resetBackupPeriod() {
    this._backupPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPeriodInput() {
    return this._backupPeriod;
  }

  // backup_time - computed: true, optional: true, required: false
  private _backupTime?: string; 
  public get backupTime() {
    return this.getStringAttribute('backup_time');
  }
  public set backupTime(value: string) {
    this._backupTime = value;
  }
  public resetBackupTime() {
    this._backupTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupTimeInput() {
    return this._backupTime;
  }

  // bandwidth - computed: true, optional: true, required: false
  private _bandwidth?: number; 
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }
  public set bandwidth(value: number) {
    this._bandwidth = value;
  }
  public resetBandwidth() {
    this._bandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // business_info - computed: false, optional: true, required: false
  private _businessInfo?: string; 
  public get businessInfo() {
    return this.getStringAttribute('business_info');
  }
  public set businessInfo(value: string) {
    this._businessInfo = value;
  }
  public resetBusinessInfo() {
    this._businessInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get businessInfoInput() {
    return this._businessInfo;
  }

  // capacity - computed: true, optional: true, required: false
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

  // config - computed: true, optional: true, required: false
  private _config?: { [key: string]: string }; 
  public get config() {
    return this.getStringMapAttribute('config');
  }
  public set config(value: { [key: string]: string }) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // connection_domain - computed: true, optional: false, required: false
  public get connectionDomain() {
    return this.getStringAttribute('connection_domain');
  }

  // connection_string - computed: true, optional: false, required: false
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }

  // connection_string_prefix - computed: false, optional: true, required: false
  private _connectionStringPrefix?: string; 
  public get connectionStringPrefix() {
    return this.getStringAttribute('connection_string_prefix');
  }
  public set connectionStringPrefix(value: string) {
    this._connectionStringPrefix = value;
  }
  public resetConnectionStringPrefix() {
    this._connectionStringPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionStringPrefixInput() {
    return this._connectionStringPrefix;
  }

  // coupon_no - computed: false, optional: true, required: false
  private _couponNo?: string; 
  public get couponNo() {
    return this.getStringAttribute('coupon_no');
  }
  public set couponNo(value: string) {
    this._couponNo = value;
  }
  public resetCouponNo() {
    this._couponNo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get couponNoInput() {
    return this._couponNo;
  }

  // db_instance_name - computed: true, optional: true, required: false
  private _dbInstanceName?: string; 
  public get dbInstanceName() {
    return this.getStringAttribute('db_instance_name');
  }
  public set dbInstanceName(value: string) {
    this._dbInstanceName = value;
  }
  public resetDbInstanceName() {
    this._dbInstanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceNameInput() {
    return this._dbInstanceName;
  }

  // dedicated_host_group_id - computed: false, optional: true, required: false
  private _dedicatedHostGroupId?: string; 
  public get dedicatedHostGroupId() {
    return this.getStringAttribute('dedicated_host_group_id');
  }
  public set dedicatedHostGroupId(value: string) {
    this._dedicatedHostGroupId = value;
  }
  public resetDedicatedHostGroupId() {
    this._dedicatedHostGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedHostGroupIdInput() {
    return this._dedicatedHostGroupId;
  }

  // dry_run - computed: false, optional: true, required: false
  private _dryRun?: boolean | cdktf.IResolvable; 
  public get dryRun() {
    return this.getBooleanAttribute('dry_run');
  }
  public set dryRun(value: boolean | cdktf.IResolvable) {
    this._dryRun = value;
  }
  public resetDryRun() {
    this._dryRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dryRunInput() {
    return this._dryRun;
  }

  // effective_time - computed: false, optional: true, required: false
  private _effectiveTime?: string; 
  public get effectiveTime() {
    return this.getStringAttribute('effective_time');
  }
  public set effectiveTime(value: string) {
    this._effectiveTime = value;
  }
  public resetEffectiveTime() {
    this._effectiveTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectiveTimeInput() {
    return this._effectiveTime;
  }

  // enable_backup_log - computed: false, optional: true, required: false
  private _enableBackupLog?: number; 
  public get enableBackupLog() {
    return this.getNumberAttribute('enable_backup_log');
  }
  public set enableBackupLog(value: number) {
    this._enableBackupLog = value;
  }
  public resetEnableBackupLog() {
    this._enableBackupLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBackupLogInput() {
    return this._enableBackupLog;
  }

  // enable_public - computed: true, optional: true, required: false
  private _enablePublic?: boolean | cdktf.IResolvable; 
  public get enablePublic() {
    return this.getBooleanAttribute('enable_public');
  }
  public set enablePublic(value: boolean | cdktf.IResolvable) {
    this._enablePublic = value;
  }
  public resetEnablePublic() {
    this._enablePublic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePublicInput() {
    return this._enablePublic;
  }

  // encryption_key - computed: true, optional: true, required: false
  private _encryptionKey?: string; 
  public get encryptionKey() {
    return this.getStringAttribute('encryption_key');
  }
  public set encryptionKey(value: string) {
    this._encryptionKey = value;
  }
  public resetEncryptionKey() {
    this._encryptionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyInput() {
    return this._encryptionKey;
  }

  // encryption_name - computed: true, optional: true, required: false
  private _encryptionName?: string; 
  public get encryptionName() {
    return this.getStringAttribute('encryption_name');
  }
  public set encryptionName(value: string) {
    this._encryptionName = value;
  }
  public resetEncryptionName() {
    this._encryptionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionNameInput() {
    return this._encryptionName;
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // engine_version - computed: true, optional: true, required: false
  private _engineVersion?: string; 
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }
  public set engineVersion(value: string) {
    this._engineVersion = value;
  }
  public resetEngineVersion() {
    this._engineVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineVersionInput() {
    return this._engineVersion;
  }

  // force_upgrade - computed: false, optional: true, required: false
  private _forceUpgrade?: boolean | cdktf.IResolvable; 
  public get forceUpgrade() {
    return this.getBooleanAttribute('force_upgrade');
  }
  public set forceUpgrade(value: boolean | cdktf.IResolvable) {
    this._forceUpgrade = value;
  }
  public resetForceUpgrade() {
    this._forceUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceUpgradeInput() {
    return this._forceUpgrade;
  }

  // global_instance - computed: false, optional: true, required: false
  private _globalInstance?: boolean | cdktf.IResolvable; 
  public get globalInstance() {
    return this.getBooleanAttribute('global_instance');
  }
  public set globalInstance(value: boolean | cdktf.IResolvable) {
    this._globalInstance = value;
  }
  public resetGlobalInstance() {
    this._globalInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalInstanceInput() {
    return this._globalInstance;
  }

  // global_instance_id - computed: false, optional: true, required: false
  private _globalInstanceId?: string; 
  public get globalInstanceId() {
    return this.getStringAttribute('global_instance_id');
  }
  public set globalInstanceId(value: string) {
    this._globalInstanceId = value;
  }
  public resetGlobalInstanceId() {
    this._globalInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalInstanceIdInput() {
    return this._globalInstanceId;
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

  // instance_charge_type - computed: true, optional: true, required: false
  private _instanceChargeType?: string; 
  public get instanceChargeType() {
    return this.getStringAttribute('instance_charge_type');
  }
  public set instanceChargeType(value: string) {
    this._instanceChargeType = value;
  }
  public resetInstanceChargeType() {
    this._instanceChargeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceChargeTypeInput() {
    return this._instanceChargeType;
  }

  // instance_class - computed: false, optional: true, required: false
  private _instanceClass?: string; 
  public get instanceClass() {
    return this.getStringAttribute('instance_class');
  }
  public set instanceClass(value: string) {
    this._instanceClass = value;
  }
  public resetInstanceClass() {
    this._instanceClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceClassInput() {
    return this._instanceClass;
  }

  // instance_name - computed: true, optional: true, required: false
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

  // instance_release_protection - computed: false, optional: true, required: false
  private _instanceReleaseProtection?: boolean | cdktf.IResolvable; 
  public get instanceReleaseProtection() {
    return this.getBooleanAttribute('instance_release_protection');
  }
  public set instanceReleaseProtection(value: boolean | cdktf.IResolvable) {
    this._instanceReleaseProtection = value;
  }
  public resetInstanceReleaseProtection() {
    this._instanceReleaseProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceReleaseProtectionInput() {
    return this._instanceReleaseProtection;
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

  // is_auto_upgrade_open - computed: true, optional: true, required: false
  private _isAutoUpgradeOpen?: string; 
  public get isAutoUpgradeOpen() {
    return this.getStringAttribute('is_auto_upgrade_open');
  }
  public set isAutoUpgradeOpen(value: string) {
    this._isAutoUpgradeOpen = value;
  }
  public resetIsAutoUpgradeOpen() {
    this._isAutoUpgradeOpen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAutoUpgradeOpenInput() {
    return this._isAutoUpgradeOpen;
  }

  // kms_encrypted_password - computed: false, optional: true, required: false
  private _kmsEncryptedPassword?: string; 
  public get kmsEncryptedPassword() {
    return this.getStringAttribute('kms_encrypted_password');
  }
  public set kmsEncryptedPassword(value: string) {
    this._kmsEncryptedPassword = value;
  }
  public resetKmsEncryptedPassword() {
    this._kmsEncryptedPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsEncryptedPasswordInput() {
    return this._kmsEncryptedPassword;
  }

  // kms_encryption_context - computed: false, optional: true, required: false
  private _kmsEncryptionContext?: { [key: string]: string }; 
  public get kmsEncryptionContext() {
    return this.getStringMapAttribute('kms_encryption_context');
  }
  public set kmsEncryptionContext(value: { [key: string]: string }) {
    this._kmsEncryptionContext = value;
  }
  public resetKmsEncryptionContext() {
    this._kmsEncryptionContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsEncryptionContextInput() {
    return this._kmsEncryptionContext;
  }

  // maintain_end_time - computed: true, optional: true, required: false
  private _maintainEndTime?: string; 
  public get maintainEndTime() {
    return this.getStringAttribute('maintain_end_time');
  }
  public set maintainEndTime(value: string) {
    this._maintainEndTime = value;
  }
  public resetMaintainEndTime() {
    this._maintainEndTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintainEndTimeInput() {
    return this._maintainEndTime;
  }

  // maintain_start_time - computed: true, optional: true, required: false
  private _maintainStartTime?: string; 
  public get maintainStartTime() {
    return this.getStringAttribute('maintain_start_time');
  }
  public set maintainStartTime(value: string) {
    this._maintainStartTime = value;
  }
  public resetMaintainStartTime() {
    this._maintainStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintainStartTimeInput() {
    return this._maintainStartTime;
  }

  // modify_mode - computed: false, optional: true, required: false
  private _modifyMode?: number; 
  public get modifyMode() {
    return this.getNumberAttribute('modify_mode');
  }
  public set modifyMode(value: number) {
    this._modifyMode = value;
  }
  public resetModifyMode() {
    this._modifyMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyModeInput() {
    return this._modifyMode;
  }

  // node_type - computed: true, optional: true, required: false
  private _nodeType?: string; 
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }
  public set nodeType(value: string) {
    this._nodeType = value;
  }
  public resetNodeType() {
    this._nodeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeInput() {
    return this._nodeType;
  }

  // order_type - computed: false, optional: true, required: false
  private _orderType?: string; 
  public get orderType() {
    return this.getStringAttribute('order_type');
  }
  public set orderType(value: string) {
    this._orderType = value;
  }
  public resetOrderType() {
    this._orderType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderTypeInput() {
    return this._orderType;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // payment_type - computed: true, optional: true, required: false
  private _paymentType?: string; 
  public get paymentType() {
    return this.getStringAttribute('payment_type');
  }
  public set paymentType(value: string) {
    this._paymentType = value;
  }
  public resetPaymentType() {
    this._paymentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paymentTypeInput() {
    return this._paymentType;
  }

  // period - computed: false, optional: true, required: false
  private _period?: string; 
  public get period() {
    return this.getStringAttribute('period');
  }
  public set period(value: string) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // private_connection_port - computed: true, optional: true, required: false
  private _privateConnectionPort?: string; 
  public get privateConnectionPort() {
    return this.getStringAttribute('private_connection_port');
  }
  public set privateConnectionPort(value: string) {
    this._privateConnectionPort = value;
  }
  public resetPrivateConnectionPort() {
    this._privateConnectionPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateConnectionPortInput() {
    return this._privateConnectionPort;
  }

  // private_connection_prefix - computed: false, optional: true, required: false
  private _privateConnectionPrefix?: string; 
  public get privateConnectionPrefix() {
    return this.getStringAttribute('private_connection_prefix');
  }
  public set privateConnectionPrefix(value: string) {
    this._privateConnectionPrefix = value;
  }
  public resetPrivateConnectionPrefix() {
    this._privateConnectionPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateConnectionPrefixInput() {
    return this._privateConnectionPrefix;
  }

  // private_ip - computed: true, optional: true, required: false
  private _privateIp?: string; 
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }
  public set privateIp(value: string) {
    this._privateIp = value;
  }
  public resetPrivateIp() {
    this._privateIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpInput() {
    return this._privateIp;
  }

  // qps - computed: true, optional: false, required: false
  public get qps() {
    return this.getNumberAttribute('qps');
  }

  // read_only_count - computed: false, optional: true, required: false
  private _readOnlyCount?: number; 
  public get readOnlyCount() {
    return this.getNumberAttribute('read_only_count');
  }
  public set readOnlyCount(value: number) {
    this._readOnlyCount = value;
  }
  public resetReadOnlyCount() {
    this._readOnlyCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyCountInput() {
    return this._readOnlyCount;
  }

  // resource_group_id - computed: true, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // restore_time - computed: false, optional: true, required: false
  private _restoreTime?: string; 
  public get restoreTime() {
    return this.getStringAttribute('restore_time');
  }
  public set restoreTime(value: string) {
    this._restoreTime = value;
  }
  public resetRestoreTime() {
    this._restoreTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreTimeInput() {
    return this._restoreTime;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // secondary_zone_id - computed: false, optional: true, required: false
  private _secondaryZoneId?: string; 
  public get secondaryZoneId() {
    return this.getStringAttribute('secondary_zone_id');
  }
  public set secondaryZoneId(value: string) {
    this._secondaryZoneId = value;
  }
  public resetSecondaryZoneId() {
    this._secondaryZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryZoneIdInput() {
    return this._secondaryZoneId;
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

  // security_ip_group_attribute - computed: false, optional: true, required: false
  private _securityIpGroupAttribute?: string; 
  public get securityIpGroupAttribute() {
    return this.getStringAttribute('security_ip_group_attribute');
  }
  public set securityIpGroupAttribute(value: string) {
    this._securityIpGroupAttribute = value;
  }
  public resetSecurityIpGroupAttribute() {
    this._securityIpGroupAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityIpGroupAttributeInput() {
    return this._securityIpGroupAttribute;
  }

  // security_ip_group_name - computed: true, optional: true, required: false
  private _securityIpGroupName?: string; 
  public get securityIpGroupName() {
    return this.getStringAttribute('security_ip_group_name');
  }
  public set securityIpGroupName(value: string) {
    this._securityIpGroupName = value;
  }
  public resetSecurityIpGroupName() {
    this._securityIpGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityIpGroupNameInput() {
    return this._securityIpGroupName;
  }

  // security_ips - computed: true, optional: true, required: false
  private _securityIps?: string[]; 
  public get securityIps() {
    return cdktf.Fn.tolist(this.getListAttribute('security_ips'));
  }
  public set securityIps(value: string[]) {
    this._securityIps = value;
  }
  public resetSecurityIps() {
    this._securityIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityIpsInput() {
    return this._securityIps;
  }

  // shard_count - computed: true, optional: true, required: false
  private _shardCount?: number; 
  public get shardCount() {
    return this.getNumberAttribute('shard_count');
  }
  public set shardCount(value: number) {
    this._shardCount = value;
  }
  public resetShardCount() {
    this._shardCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardCountInput() {
    return this._shardCount;
  }

  // slave_read_only_count - computed: false, optional: true, required: false
  private _slaveReadOnlyCount?: number; 
  public get slaveReadOnlyCount() {
    return this.getNumberAttribute('slave_read_only_count');
  }
  public set slaveReadOnlyCount(value: number) {
    this._slaveReadOnlyCount = value;
  }
  public resetSlaveReadOnlyCount() {
    this._slaveReadOnlyCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaveReadOnlyCountInput() {
    return this._slaveReadOnlyCount;
  }

  // srcdb_instance_id - computed: false, optional: true, required: false
  private _srcdbInstanceId?: string; 
  public get srcdbInstanceId() {
    return this.getStringAttribute('srcdb_instance_id');
  }
  public set srcdbInstanceId(value: string) {
    this._srcdbInstanceId = value;
  }
  public resetSrcdbInstanceId() {
    this._srcdbInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcdbInstanceIdInput() {
    return this._srcdbInstanceId;
  }

  // ssl_enable - computed: true, optional: true, required: false
  private _sslEnable?: string; 
  public get sslEnable() {
    return this.getStringAttribute('ssl_enable');
  }
  public set sslEnable(value: string) {
    this._sslEnable = value;
  }
  public resetSslEnable() {
    this._sslEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslEnableInput() {
    return this._sslEnable;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // tde_status - computed: true, optional: true, required: false
  private _tdeStatus?: string; 
  public get tdeStatus() {
    return this.getStringAttribute('tde_status');
  }
  public set tdeStatus(value: string) {
    this._tdeStatus = value;
  }
  public resetTdeStatus() {
    this._tdeStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tdeStatusInput() {
    return this._tdeStatus;
  }

  // vpc_auth_mode - computed: false, optional: true, required: false
  private _vpcAuthMode?: string; 
  public get vpcAuthMode() {
    return this.getStringAttribute('vpc_auth_mode');
  }
  public set vpcAuthMode(value: string) {
    this._vpcAuthMode = value;
  }
  public resetVpcAuthMode() {
    this._vpcAuthMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcAuthModeInput() {
    return this._vpcAuthMode;
  }

  // vswitch_id - computed: false, optional: true, required: false
  private _vswitchId?: string; 
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }
  public set vswitchId(value: string) {
    this._vswitchId = value;
  }
  public resetVswitchId() {
    this._vswitchId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdInput() {
    return this._vswitchId;
  }

  // zone_id - computed: true, optional: true, required: false
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new KvstoreInstanceParametersList(this, "parameters", true);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: KvstoreInstanceParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new KvstoreInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KvstoreInstanceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_renew: cdktf.booleanToTerraform(this._autoRenew),
      auto_renew_period: cdktf.numberToTerraform(this._autoRenewPeriod),
      auto_use_coupon: cdktf.booleanToTerraform(this._autoUseCoupon),
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      backup_id: cdktf.stringToTerraform(this._backupId),
      backup_period: cdktf.listMapper(cdktf.stringToTerraform, false)(this._backupPeriod),
      backup_time: cdktf.stringToTerraform(this._backupTime),
      bandwidth: cdktf.numberToTerraform(this._bandwidth),
      business_info: cdktf.stringToTerraform(this._businessInfo),
      capacity: cdktf.numberToTerraform(this._capacity),
      config: cdktf.hashMapper(cdktf.stringToTerraform)(this._config),
      connection_string_prefix: cdktf.stringToTerraform(this._connectionStringPrefix),
      coupon_no: cdktf.stringToTerraform(this._couponNo),
      db_instance_name: cdktf.stringToTerraform(this._dbInstanceName),
      dedicated_host_group_id: cdktf.stringToTerraform(this._dedicatedHostGroupId),
      dry_run: cdktf.booleanToTerraform(this._dryRun),
      effective_time: cdktf.stringToTerraform(this._effectiveTime),
      enable_backup_log: cdktf.numberToTerraform(this._enableBackupLog),
      enable_public: cdktf.booleanToTerraform(this._enablePublic),
      encryption_key: cdktf.stringToTerraform(this._encryptionKey),
      encryption_name: cdktf.stringToTerraform(this._encryptionName),
      engine_version: cdktf.stringToTerraform(this._engineVersion),
      force_upgrade: cdktf.booleanToTerraform(this._forceUpgrade),
      global_instance: cdktf.booleanToTerraform(this._globalInstance),
      global_instance_id: cdktf.stringToTerraform(this._globalInstanceId),
      id: cdktf.stringToTerraform(this._id),
      instance_charge_type: cdktf.stringToTerraform(this._instanceChargeType),
      instance_class: cdktf.stringToTerraform(this._instanceClass),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      instance_release_protection: cdktf.booleanToTerraform(this._instanceReleaseProtection),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      is_auto_upgrade_open: cdktf.stringToTerraform(this._isAutoUpgradeOpen),
      kms_encrypted_password: cdktf.stringToTerraform(this._kmsEncryptedPassword),
      kms_encryption_context: cdktf.hashMapper(cdktf.stringToTerraform)(this._kmsEncryptionContext),
      maintain_end_time: cdktf.stringToTerraform(this._maintainEndTime),
      maintain_start_time: cdktf.stringToTerraform(this._maintainStartTime),
      modify_mode: cdktf.numberToTerraform(this._modifyMode),
      node_type: cdktf.stringToTerraform(this._nodeType),
      order_type: cdktf.stringToTerraform(this._orderType),
      password: cdktf.stringToTerraform(this._password),
      payment_type: cdktf.stringToTerraform(this._paymentType),
      period: cdktf.stringToTerraform(this._period),
      port: cdktf.numberToTerraform(this._port),
      private_connection_port: cdktf.stringToTerraform(this._privateConnectionPort),
      private_connection_prefix: cdktf.stringToTerraform(this._privateConnectionPrefix),
      private_ip: cdktf.stringToTerraform(this._privateIp),
      read_only_count: cdktf.numberToTerraform(this._readOnlyCount),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      restore_time: cdktf.stringToTerraform(this._restoreTime),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      secondary_zone_id: cdktf.stringToTerraform(this._secondaryZoneId),
      security_group_id: cdktf.stringToTerraform(this._securityGroupId),
      security_ip_group_attribute: cdktf.stringToTerraform(this._securityIpGroupAttribute),
      security_ip_group_name: cdktf.stringToTerraform(this._securityIpGroupName),
      security_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityIps),
      shard_count: cdktf.numberToTerraform(this._shardCount),
      slave_read_only_count: cdktf.numberToTerraform(this._slaveReadOnlyCount),
      srcdb_instance_id: cdktf.stringToTerraform(this._srcdbInstanceId),
      ssl_enable: cdktf.stringToTerraform(this._sslEnable),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tde_status: cdktf.stringToTerraform(this._tdeStatus),
      vpc_auth_mode: cdktf.stringToTerraform(this._vpcAuthMode),
      vswitch_id: cdktf.stringToTerraform(this._vswitchId),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      parameters: cdktf.listMapper(kvstoreInstanceParametersToTerraform, true)(this._parameters.internalValue),
      timeouts: kvstoreInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_renew: {
        value: cdktf.booleanToHclTerraform(this._autoRenew),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_renew_period: {
        value: cdktf.numberToHclTerraform(this._autoRenewPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_use_coupon: {
        value: cdktf.booleanToHclTerraform(this._autoUseCoupon),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      availability_zone: {
        value: cdktf.stringToHclTerraform(this._availabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_id: {
        value: cdktf.stringToHclTerraform(this._backupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_period: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._backupPeriod),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      backup_time: {
        value: cdktf.stringToHclTerraform(this._backupTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bandwidth: {
        value: cdktf.numberToHclTerraform(this._bandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      business_info: {
        value: cdktf.stringToHclTerraform(this._businessInfo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capacity: {
        value: cdktf.numberToHclTerraform(this._capacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      config: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._config),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      connection_string_prefix: {
        value: cdktf.stringToHclTerraform(this._connectionStringPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      coupon_no: {
        value: cdktf.stringToHclTerraform(this._couponNo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_instance_name: {
        value: cdktf.stringToHclTerraform(this._dbInstanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dedicated_host_group_id: {
        value: cdktf.stringToHclTerraform(this._dedicatedHostGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dry_run: {
        value: cdktf.booleanToHclTerraform(this._dryRun),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      effective_time: {
        value: cdktf.stringToHclTerraform(this._effectiveTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_backup_log: {
        value: cdktf.numberToHclTerraform(this._enableBackupLog),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_public: {
        value: cdktf.booleanToHclTerraform(this._enablePublic),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encryption_key: {
        value: cdktf.stringToHclTerraform(this._encryptionKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption_name: {
        value: cdktf.stringToHclTerraform(this._encryptionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_version: {
        value: cdktf.stringToHclTerraform(this._engineVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_upgrade: {
        value: cdktf.booleanToHclTerraform(this._forceUpgrade),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      global_instance: {
        value: cdktf.booleanToHclTerraform(this._globalInstance),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      global_instance_id: {
        value: cdktf.stringToHclTerraform(this._globalInstanceId),
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
      instance_charge_type: {
        value: cdktf.stringToHclTerraform(this._instanceChargeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_class: {
        value: cdktf.stringToHclTerraform(this._instanceClass),
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
      instance_release_protection: {
        value: cdktf.booleanToHclTerraform(this._instanceReleaseProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      instance_type: {
        value: cdktf.stringToHclTerraform(this._instanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_auto_upgrade_open: {
        value: cdktf.stringToHclTerraform(this._isAutoUpgradeOpen),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_encrypted_password: {
        value: cdktf.stringToHclTerraform(this._kmsEncryptedPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_encryption_context: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._kmsEncryptionContext),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      maintain_end_time: {
        value: cdktf.stringToHclTerraform(this._maintainEndTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintain_start_time: {
        value: cdktf.stringToHclTerraform(this._maintainStartTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      modify_mode: {
        value: cdktf.numberToHclTerraform(this._modifyMode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      node_type: {
        value: cdktf.stringToHclTerraform(this._nodeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      order_type: {
        value: cdktf.stringToHclTerraform(this._orderType),
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
      payment_type: {
        value: cdktf.stringToHclTerraform(this._paymentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      period: {
        value: cdktf.stringToHclTerraform(this._period),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      private_connection_port: {
        value: cdktf.stringToHclTerraform(this._privateConnectionPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_connection_prefix: {
        value: cdktf.stringToHclTerraform(this._privateConnectionPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_ip: {
        value: cdktf.stringToHclTerraform(this._privateIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      read_only_count: {
        value: cdktf.numberToHclTerraform(this._readOnlyCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restore_time: {
        value: cdktf.stringToHclTerraform(this._restoreTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_arn: {
        value: cdktf.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_zone_id: {
        value: cdktf.stringToHclTerraform(this._secondaryZoneId),
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
      security_ip_group_attribute: {
        value: cdktf.stringToHclTerraform(this._securityIpGroupAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_ip_group_name: {
        value: cdktf.stringToHclTerraform(this._securityIpGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityIps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      shard_count: {
        value: cdktf.numberToHclTerraform(this._shardCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      slave_read_only_count: {
        value: cdktf.numberToHclTerraform(this._slaveReadOnlyCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      srcdb_instance_id: {
        value: cdktf.stringToHclTerraform(this._srcdbInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_enable: {
        value: cdktf.stringToHclTerraform(this._sslEnable),
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
      tde_status: {
        value: cdktf.stringToHclTerraform(this._tdeStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_auth_mode: {
        value: cdktf.stringToHclTerraform(this._vpcAuthMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vswitch_id: {
        value: cdktf.stringToHclTerraform(this._vswitchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parameters: {
        value: cdktf.listMapperHcl(kvstoreInstanceParametersToHclTerraform, true)(this._parameters.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "KvstoreInstanceParametersList",
      },
      timeouts: {
        value: kvstoreInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KvstoreInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
