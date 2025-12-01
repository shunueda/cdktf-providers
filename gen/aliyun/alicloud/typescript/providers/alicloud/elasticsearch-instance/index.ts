// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/elasticsearch_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElasticsearchInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/elasticsearch_instance#auto_renew_duration ElasticsearchInstance#auto_renew_duration}
  */
  readonly autoRenewDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/elasticsearch_instance#client_node_amount ElasticsearchInstance#client_node_amount}
  */
  readonly clientNodeAmount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/elasticsearch_instance#client_node_spec ElasticsearchInstance#client_node_spec}
  */
  readonly clientNodeSpec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/elasticsearch_instance#data_node_amount ElasticsearchInstance#data_node_amount}
  */
  readonly dataNodeAmount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/elasticsearch_instance#data_node_disk_encrypted ElasticsearchInstance#data_node_disk_encrypted}
  */
  readonly dataNodeDiskEncrypted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/elasticsearch_instance#data_node_disk_performance_level ElasticsearchInstance#data_node_disk_performance_level}
  */
  readonly dataNodeDiskPerformanceLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/elasticsearch_instance#data_node_disk_size ElasticsearchInstance#data_node_disk_size}
  */
  readonly dataNodeDiskSize: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/elasticsearch_instance#data_node_disk_type ElasticsearchInstance#data_node_disk_type}
  */
  readonly dataNodeDiskType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/elasticsearch_instance#data_node_spec ElasticsearchInstance#data_node_spec}
  */
  readonly dataNodeSpec: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/elasticsearch_instance#description ElasticsearchInstance#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/elasticsearch_instance#enable_kibana_private_network ElasticsearchInstance#enable_kibana_private_network}
  */
  readonly enableKibanaPrivateNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/elasticsearch_instance#enable_kibana_public_network ElasticsearchInstance#enable_kibana_public_network}
  */
  readonly enableKibanaPublicNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/elasticsearch_instance#enable_public ElasticsearchInstance#enable_public}
  */
  readonly enablePublic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/elasticsearch_instance#id ElasticsearchInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/elasticsearch_instance#instance_charge_type ElasticsearchInstance#instance_charge_type}
  */
  readonly instanceChargeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/elasticsearch_instance#kibana_node_spec ElasticsearchInstance#kibana_node_spec}
  */
  readonly kibanaNodeSpec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/elasticsearch_instance#kibana_private_security_group_id ElasticsearchInstance#kibana_private_security_group_id}
  */
  readonly kibanaPrivateSecurityGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/elasticsearch_instance#kibana_private_whitelist ElasticsearchInstance#kibana_private_whitelist}
  */
  readonly kibanaPrivateWhitelist?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/elasticsearch_instance#kibana_whitelist ElasticsearchInstance#kibana_whitelist}
  */
  readonly kibanaWhitelist?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/elasticsearch_instance#kms_encrypted_password ElasticsearchInstance#kms_encrypted_password}
  */
  readonly kmsEncryptedPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/elasticsearch_instance#kms_encryption_context ElasticsearchInstance#kms_encryption_context}
  */
  readonly kmsEncryptionContext?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/elasticsearch_instance#master_node_disk_type ElasticsearchInstance#master_node_disk_type}
  */
  readonly masterNodeDiskType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/elasticsearch_instance#master_node_spec ElasticsearchInstance#master_node_spec}
  */
  readonly masterNodeSpec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/elasticsearch_instance#password ElasticsearchInstance#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/elasticsearch_instance#period ElasticsearchInstance#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/elasticsearch_instance#private_whitelist ElasticsearchInstance#private_whitelist}
  */
  readonly privateWhitelist?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/elasticsearch_instance#protocol ElasticsearchInstance#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/elasticsearch_instance#public_whitelist ElasticsearchInstance#public_whitelist}
  */
  readonly publicWhitelist?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/elasticsearch_instance#renew_status ElasticsearchInstance#renew_status}
  */
  readonly renewStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/elasticsearch_instance#renewal_duration_unit ElasticsearchInstance#renewal_duration_unit}
  */
  readonly renewalDurationUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/elasticsearch_instance#resource_group_id ElasticsearchInstance#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/elasticsearch_instance#setting_config ElasticsearchInstance#setting_config}
  */
  readonly settingConfig?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/elasticsearch_instance#tags ElasticsearchInstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/elasticsearch_instance#version ElasticsearchInstance#version}
  */
  readonly version: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/elasticsearch_instance#vswitch_id ElasticsearchInstance#vswitch_id}
  */
  readonly vswitchId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/elasticsearch_instance#warm_node_amount ElasticsearchInstance#warm_node_amount}
  */
  readonly warmNodeAmount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/elasticsearch_instance#warm_node_disk_encrypted ElasticsearchInstance#warm_node_disk_encrypted}
  */
  readonly warmNodeDiskEncrypted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/elasticsearch_instance#warm_node_disk_size ElasticsearchInstance#warm_node_disk_size}
  */
  readonly warmNodeDiskSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/elasticsearch_instance#warm_node_disk_type ElasticsearchInstance#warm_node_disk_type}
  */
  readonly warmNodeDiskType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/elasticsearch_instance#warm_node_spec ElasticsearchInstance#warm_node_spec}
  */
  readonly warmNodeSpec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/elasticsearch_instance#zone_count ElasticsearchInstance#zone_count}
  */
  readonly zoneCount?: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/elasticsearch_instance#timeouts ElasticsearchInstance#timeouts}
  */
  readonly timeouts?: ElasticsearchInstanceTimeouts;
}
export interface ElasticsearchInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/elasticsearch_instance#create ElasticsearchInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/elasticsearch_instance#delete ElasticsearchInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/elasticsearch_instance#update ElasticsearchInstance#update}
  */
  readonly update?: string;
}

export function elasticsearchInstanceTimeoutsToTerraform(struct?: ElasticsearchInstanceTimeouts | cdktf.IResolvable): any {
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


export function elasticsearchInstanceTimeoutsToHclTerraform(struct?: ElasticsearchInstanceTimeouts | cdktf.IResolvable): any {
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

export class ElasticsearchInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ElasticsearchInstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ElasticsearchInstanceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/elasticsearch_instance alicloud_elasticsearch_instance}
*/
export class ElasticsearchInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_elasticsearch_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ElasticsearchInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ElasticsearchInstance to import
  * @param importFromId The id of the existing ElasticsearchInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/elasticsearch_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ElasticsearchInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_elasticsearch_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/elasticsearch_instance alicloud_elasticsearch_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElasticsearchInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: ElasticsearchInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_elasticsearch_instance',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoRenewDuration = config.autoRenewDuration;
    this._clientNodeAmount = config.clientNodeAmount;
    this._clientNodeSpec = config.clientNodeSpec;
    this._dataNodeAmount = config.dataNodeAmount;
    this._dataNodeDiskEncrypted = config.dataNodeDiskEncrypted;
    this._dataNodeDiskPerformanceLevel = config.dataNodeDiskPerformanceLevel;
    this._dataNodeDiskSize = config.dataNodeDiskSize;
    this._dataNodeDiskType = config.dataNodeDiskType;
    this._dataNodeSpec = config.dataNodeSpec;
    this._description = config.description;
    this._enableKibanaPrivateNetwork = config.enableKibanaPrivateNetwork;
    this._enableKibanaPublicNetwork = config.enableKibanaPublicNetwork;
    this._enablePublic = config.enablePublic;
    this._id = config.id;
    this._instanceChargeType = config.instanceChargeType;
    this._kibanaNodeSpec = config.kibanaNodeSpec;
    this._kibanaPrivateSecurityGroupId = config.kibanaPrivateSecurityGroupId;
    this._kibanaPrivateWhitelist = config.kibanaPrivateWhitelist;
    this._kibanaWhitelist = config.kibanaWhitelist;
    this._kmsEncryptedPassword = config.kmsEncryptedPassword;
    this._kmsEncryptionContext = config.kmsEncryptionContext;
    this._masterNodeDiskType = config.masterNodeDiskType;
    this._masterNodeSpec = config.masterNodeSpec;
    this._password = config.password;
    this._period = config.period;
    this._privateWhitelist = config.privateWhitelist;
    this._protocol = config.protocol;
    this._publicWhitelist = config.publicWhitelist;
    this._renewStatus = config.renewStatus;
    this._renewalDurationUnit = config.renewalDurationUnit;
    this._resourceGroupId = config.resourceGroupId;
    this._settingConfig = config.settingConfig;
    this._tags = config.tags;
    this._version = config.version;
    this._vswitchId = config.vswitchId;
    this._warmNodeAmount = config.warmNodeAmount;
    this._warmNodeDiskEncrypted = config.warmNodeDiskEncrypted;
    this._warmNodeDiskSize = config.warmNodeDiskSize;
    this._warmNodeDiskType = config.warmNodeDiskType;
    this._warmNodeSpec = config.warmNodeSpec;
    this._zoneCount = config.zoneCount;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_renew_duration - computed: false, optional: true, required: false
  private _autoRenewDuration?: number; 
  public get autoRenewDuration() {
    return this.getNumberAttribute('auto_renew_duration');
  }
  public set autoRenewDuration(value: number) {
    this._autoRenewDuration = value;
  }
  public resetAutoRenewDuration() {
    this._autoRenewDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewDurationInput() {
    return this._autoRenewDuration;
  }

  // client_node_amount - computed: false, optional: true, required: false
  private _clientNodeAmount?: number; 
  public get clientNodeAmount() {
    return this.getNumberAttribute('client_node_amount');
  }
  public set clientNodeAmount(value: number) {
    this._clientNodeAmount = value;
  }
  public resetClientNodeAmount() {
    this._clientNodeAmount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientNodeAmountInput() {
    return this._clientNodeAmount;
  }

  // client_node_spec - computed: false, optional: true, required: false
  private _clientNodeSpec?: string; 
  public get clientNodeSpec() {
    return this.getStringAttribute('client_node_spec');
  }
  public set clientNodeSpec(value: string) {
    this._clientNodeSpec = value;
  }
  public resetClientNodeSpec() {
    this._clientNodeSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientNodeSpecInput() {
    return this._clientNodeSpec;
  }

  // data_node_amount - computed: false, optional: false, required: true
  private _dataNodeAmount?: number; 
  public get dataNodeAmount() {
    return this.getNumberAttribute('data_node_amount');
  }
  public set dataNodeAmount(value: number) {
    this._dataNodeAmount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataNodeAmountInput() {
    return this._dataNodeAmount;
  }

  // data_node_disk_encrypted - computed: false, optional: true, required: false
  private _dataNodeDiskEncrypted?: boolean | cdktf.IResolvable; 
  public get dataNodeDiskEncrypted() {
    return this.getBooleanAttribute('data_node_disk_encrypted');
  }
  public set dataNodeDiskEncrypted(value: boolean | cdktf.IResolvable) {
    this._dataNodeDiskEncrypted = value;
  }
  public resetDataNodeDiskEncrypted() {
    this._dataNodeDiskEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataNodeDiskEncryptedInput() {
    return this._dataNodeDiskEncrypted;
  }

  // data_node_disk_performance_level - computed: false, optional: true, required: false
  private _dataNodeDiskPerformanceLevel?: string; 
  public get dataNodeDiskPerformanceLevel() {
    return this.getStringAttribute('data_node_disk_performance_level');
  }
  public set dataNodeDiskPerformanceLevel(value: string) {
    this._dataNodeDiskPerformanceLevel = value;
  }
  public resetDataNodeDiskPerformanceLevel() {
    this._dataNodeDiskPerformanceLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataNodeDiskPerformanceLevelInput() {
    return this._dataNodeDiskPerformanceLevel;
  }

  // data_node_disk_size - computed: false, optional: false, required: true
  private _dataNodeDiskSize?: number; 
  public get dataNodeDiskSize() {
    return this.getNumberAttribute('data_node_disk_size');
  }
  public set dataNodeDiskSize(value: number) {
    this._dataNodeDiskSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataNodeDiskSizeInput() {
    return this._dataNodeDiskSize;
  }

  // data_node_disk_type - computed: false, optional: false, required: true
  private _dataNodeDiskType?: string; 
  public get dataNodeDiskType() {
    return this.getStringAttribute('data_node_disk_type');
  }
  public set dataNodeDiskType(value: string) {
    this._dataNodeDiskType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataNodeDiskTypeInput() {
    return this._dataNodeDiskType;
  }

  // data_node_spec - computed: false, optional: false, required: true
  private _dataNodeSpec?: string; 
  public get dataNodeSpec() {
    return this.getStringAttribute('data_node_spec');
  }
  public set dataNodeSpec(value: string) {
    this._dataNodeSpec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataNodeSpecInput() {
    return this._dataNodeSpec;
  }

  // description - computed: true, optional: true, required: false
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

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // enable_kibana_private_network - computed: false, optional: true, required: false
  private _enableKibanaPrivateNetwork?: boolean | cdktf.IResolvable; 
  public get enableKibanaPrivateNetwork() {
    return this.getBooleanAttribute('enable_kibana_private_network');
  }
  public set enableKibanaPrivateNetwork(value: boolean | cdktf.IResolvable) {
    this._enableKibanaPrivateNetwork = value;
  }
  public resetEnableKibanaPrivateNetwork() {
    this._enableKibanaPrivateNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableKibanaPrivateNetworkInput() {
    return this._enableKibanaPrivateNetwork;
  }

  // enable_kibana_public_network - computed: false, optional: true, required: false
  private _enableKibanaPublicNetwork?: boolean | cdktf.IResolvable; 
  public get enableKibanaPublicNetwork() {
    return this.getBooleanAttribute('enable_kibana_public_network');
  }
  public set enableKibanaPublicNetwork(value: boolean | cdktf.IResolvable) {
    this._enableKibanaPublicNetwork = value;
  }
  public resetEnableKibanaPublicNetwork() {
    this._enableKibanaPublicNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableKibanaPublicNetworkInput() {
    return this._enableKibanaPublicNetwork;
  }

  // enable_public - computed: false, optional: true, required: false
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

  // instance_charge_type - computed: false, optional: true, required: false
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

  // kibana_domain - computed: true, optional: false, required: false
  public get kibanaDomain() {
    return this.getStringAttribute('kibana_domain');
  }

  // kibana_node_spec - computed: true, optional: true, required: false
  private _kibanaNodeSpec?: string; 
  public get kibanaNodeSpec() {
    return this.getStringAttribute('kibana_node_spec');
  }
  public set kibanaNodeSpec(value: string) {
    this._kibanaNodeSpec = value;
  }
  public resetKibanaNodeSpec() {
    this._kibanaNodeSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kibanaNodeSpecInput() {
    return this._kibanaNodeSpec;
  }

  // kibana_port - computed: true, optional: false, required: false
  public get kibanaPort() {
    return this.getNumberAttribute('kibana_port');
  }

  // kibana_private_security_group_id - computed: false, optional: true, required: false
  private _kibanaPrivateSecurityGroupId?: string; 
  public get kibanaPrivateSecurityGroupId() {
    return this.getStringAttribute('kibana_private_security_group_id');
  }
  public set kibanaPrivateSecurityGroupId(value: string) {
    this._kibanaPrivateSecurityGroupId = value;
  }
  public resetKibanaPrivateSecurityGroupId() {
    this._kibanaPrivateSecurityGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kibanaPrivateSecurityGroupIdInput() {
    return this._kibanaPrivateSecurityGroupId;
  }

  // kibana_private_whitelist - computed: true, optional: true, required: false
  private _kibanaPrivateWhitelist?: string[]; 
  public get kibanaPrivateWhitelist() {
    return cdktf.Fn.tolist(this.getListAttribute('kibana_private_whitelist'));
  }
  public set kibanaPrivateWhitelist(value: string[]) {
    this._kibanaPrivateWhitelist = value;
  }
  public resetKibanaPrivateWhitelist() {
    this._kibanaPrivateWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kibanaPrivateWhitelistInput() {
    return this._kibanaPrivateWhitelist;
  }

  // kibana_whitelist - computed: true, optional: true, required: false
  private _kibanaWhitelist?: string[]; 
  public get kibanaWhitelist() {
    return cdktf.Fn.tolist(this.getListAttribute('kibana_whitelist'));
  }
  public set kibanaWhitelist(value: string[]) {
    this._kibanaWhitelist = value;
  }
  public resetKibanaWhitelist() {
    this._kibanaWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kibanaWhitelistInput() {
    return this._kibanaWhitelist;
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

  // master_node_disk_type - computed: false, optional: true, required: false
  private _masterNodeDiskType?: string; 
  public get masterNodeDiskType() {
    return this.getStringAttribute('master_node_disk_type');
  }
  public set masterNodeDiskType(value: string) {
    this._masterNodeDiskType = value;
  }
  public resetMasterNodeDiskType() {
    this._masterNodeDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterNodeDiskTypeInput() {
    return this._masterNodeDiskType;
  }

  // master_node_spec - computed: false, optional: true, required: false
  private _masterNodeSpec?: string; 
  public get masterNodeSpec() {
    return this.getStringAttribute('master_node_spec');
  }
  public set masterNodeSpec(value: string) {
    this._masterNodeSpec = value;
  }
  public resetMasterNodeSpec() {
    this._masterNodeSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterNodeSpecInput() {
    return this._masterNodeSpec;
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

  // period - computed: false, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // private_whitelist - computed: true, optional: true, required: false
  private _privateWhitelist?: string[]; 
  public get privateWhitelist() {
    return cdktf.Fn.tolist(this.getListAttribute('private_whitelist'));
  }
  public set privateWhitelist(value: string[]) {
    this._privateWhitelist = value;
  }
  public resetPrivateWhitelist() {
    this._privateWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateWhitelistInput() {
    return this._privateWhitelist;
  }

  // protocol - computed: false, optional: true, required: false
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

  // public_domain - computed: true, optional: false, required: false
  public get publicDomain() {
    return this.getStringAttribute('public_domain');
  }

  // public_port - computed: true, optional: false, required: false
  public get publicPort() {
    return this.getNumberAttribute('public_port');
  }

  // public_whitelist - computed: true, optional: true, required: false
  private _publicWhitelist?: string[]; 
  public get publicWhitelist() {
    return cdktf.Fn.tolist(this.getListAttribute('public_whitelist'));
  }
  public set publicWhitelist(value: string[]) {
    this._publicWhitelist = value;
  }
  public resetPublicWhitelist() {
    this._publicWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicWhitelistInput() {
    return this._publicWhitelist;
  }

  // renew_status - computed: false, optional: true, required: false
  private _renewStatus?: string; 
  public get renewStatus() {
    return this.getStringAttribute('renew_status');
  }
  public set renewStatus(value: string) {
    this._renewStatus = value;
  }
  public resetRenewStatus() {
    this._renewStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewStatusInput() {
    return this._renewStatus;
  }

  // renewal_duration_unit - computed: false, optional: true, required: false
  private _renewalDurationUnit?: string; 
  public get renewalDurationUnit() {
    return this.getStringAttribute('renewal_duration_unit');
  }
  public set renewalDurationUnit(value: string) {
    this._renewalDurationUnit = value;
  }
  public resetRenewalDurationUnit() {
    this._renewalDurationUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewalDurationUnitInput() {
    return this._renewalDurationUnit;
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

  // setting_config - computed: true, optional: true, required: false
  private _settingConfig?: { [key: string]: string }; 
  public get settingConfig() {
    return this.getStringMapAttribute('setting_config');
  }
  public set settingConfig(value: { [key: string]: string }) {
    this._settingConfig = value;
  }
  public resetSettingConfig() {
    this._settingConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingConfigInput() {
    return this._settingConfig;
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

  // vswitch_id - computed: false, optional: false, required: true
  private _vswitchId?: string; 
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }
  public set vswitchId(value: string) {
    this._vswitchId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdInput() {
    return this._vswitchId;
  }

  // warm_node_amount - computed: false, optional: true, required: false
  private _warmNodeAmount?: number; 
  public get warmNodeAmount() {
    return this.getNumberAttribute('warm_node_amount');
  }
  public set warmNodeAmount(value: number) {
    this._warmNodeAmount = value;
  }
  public resetWarmNodeAmount() {
    this._warmNodeAmount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warmNodeAmountInput() {
    return this._warmNodeAmount;
  }

  // warm_node_disk_encrypted - computed: false, optional: true, required: false
  private _warmNodeDiskEncrypted?: boolean | cdktf.IResolvable; 
  public get warmNodeDiskEncrypted() {
    return this.getBooleanAttribute('warm_node_disk_encrypted');
  }
  public set warmNodeDiskEncrypted(value: boolean | cdktf.IResolvable) {
    this._warmNodeDiskEncrypted = value;
  }
  public resetWarmNodeDiskEncrypted() {
    this._warmNodeDiskEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warmNodeDiskEncryptedInput() {
    return this._warmNodeDiskEncrypted;
  }

  // warm_node_disk_size - computed: false, optional: true, required: false
  private _warmNodeDiskSize?: number; 
  public get warmNodeDiskSize() {
    return this.getNumberAttribute('warm_node_disk_size');
  }
  public set warmNodeDiskSize(value: number) {
    this._warmNodeDiskSize = value;
  }
  public resetWarmNodeDiskSize() {
    this._warmNodeDiskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warmNodeDiskSizeInput() {
    return this._warmNodeDiskSize;
  }

  // warm_node_disk_type - computed: false, optional: true, required: false
  private _warmNodeDiskType?: string; 
  public get warmNodeDiskType() {
    return this.getStringAttribute('warm_node_disk_type');
  }
  public set warmNodeDiskType(value: string) {
    this._warmNodeDiskType = value;
  }
  public resetWarmNodeDiskType() {
    this._warmNodeDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warmNodeDiskTypeInput() {
    return this._warmNodeDiskType;
  }

  // warm_node_spec - computed: false, optional: true, required: false
  private _warmNodeSpec?: string; 
  public get warmNodeSpec() {
    return this.getStringAttribute('warm_node_spec');
  }
  public set warmNodeSpec(value: string) {
    this._warmNodeSpec = value;
  }
  public resetWarmNodeSpec() {
    this._warmNodeSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warmNodeSpecInput() {
    return this._warmNodeSpec;
  }

  // zone_count - computed: false, optional: true, required: false
  private _zoneCount?: number; 
  public get zoneCount() {
    return this.getNumberAttribute('zone_count');
  }
  public set zoneCount(value: number) {
    this._zoneCount = value;
  }
  public resetZoneCount() {
    this._zoneCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneCountInput() {
    return this._zoneCount;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ElasticsearchInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ElasticsearchInstanceTimeouts) {
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
      auto_renew_duration: cdktf.numberToTerraform(this._autoRenewDuration),
      client_node_amount: cdktf.numberToTerraform(this._clientNodeAmount),
      client_node_spec: cdktf.stringToTerraform(this._clientNodeSpec),
      data_node_amount: cdktf.numberToTerraform(this._dataNodeAmount),
      data_node_disk_encrypted: cdktf.booleanToTerraform(this._dataNodeDiskEncrypted),
      data_node_disk_performance_level: cdktf.stringToTerraform(this._dataNodeDiskPerformanceLevel),
      data_node_disk_size: cdktf.numberToTerraform(this._dataNodeDiskSize),
      data_node_disk_type: cdktf.stringToTerraform(this._dataNodeDiskType),
      data_node_spec: cdktf.stringToTerraform(this._dataNodeSpec),
      description: cdktf.stringToTerraform(this._description),
      enable_kibana_private_network: cdktf.booleanToTerraform(this._enableKibanaPrivateNetwork),
      enable_kibana_public_network: cdktf.booleanToTerraform(this._enableKibanaPublicNetwork),
      enable_public: cdktf.booleanToTerraform(this._enablePublic),
      id: cdktf.stringToTerraform(this._id),
      instance_charge_type: cdktf.stringToTerraform(this._instanceChargeType),
      kibana_node_spec: cdktf.stringToTerraform(this._kibanaNodeSpec),
      kibana_private_security_group_id: cdktf.stringToTerraform(this._kibanaPrivateSecurityGroupId),
      kibana_private_whitelist: cdktf.listMapper(cdktf.stringToTerraform, false)(this._kibanaPrivateWhitelist),
      kibana_whitelist: cdktf.listMapper(cdktf.stringToTerraform, false)(this._kibanaWhitelist),
      kms_encrypted_password: cdktf.stringToTerraform(this._kmsEncryptedPassword),
      kms_encryption_context: cdktf.hashMapper(cdktf.stringToTerraform)(this._kmsEncryptionContext),
      master_node_disk_type: cdktf.stringToTerraform(this._masterNodeDiskType),
      master_node_spec: cdktf.stringToTerraform(this._masterNodeSpec),
      password: cdktf.stringToTerraform(this._password),
      period: cdktf.numberToTerraform(this._period),
      private_whitelist: cdktf.listMapper(cdktf.stringToTerraform, false)(this._privateWhitelist),
      protocol: cdktf.stringToTerraform(this._protocol),
      public_whitelist: cdktf.listMapper(cdktf.stringToTerraform, false)(this._publicWhitelist),
      renew_status: cdktf.stringToTerraform(this._renewStatus),
      renewal_duration_unit: cdktf.stringToTerraform(this._renewalDurationUnit),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      setting_config: cdktf.hashMapper(cdktf.stringToTerraform)(this._settingConfig),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      version: cdktf.stringToTerraform(this._version),
      vswitch_id: cdktf.stringToTerraform(this._vswitchId),
      warm_node_amount: cdktf.numberToTerraform(this._warmNodeAmount),
      warm_node_disk_encrypted: cdktf.booleanToTerraform(this._warmNodeDiskEncrypted),
      warm_node_disk_size: cdktf.numberToTerraform(this._warmNodeDiskSize),
      warm_node_disk_type: cdktf.stringToTerraform(this._warmNodeDiskType),
      warm_node_spec: cdktf.stringToTerraform(this._warmNodeSpec),
      zone_count: cdktf.numberToTerraform(this._zoneCount),
      timeouts: elasticsearchInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_renew_duration: {
        value: cdktf.numberToHclTerraform(this._autoRenewDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client_node_amount: {
        value: cdktf.numberToHclTerraform(this._clientNodeAmount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client_node_spec: {
        value: cdktf.stringToHclTerraform(this._clientNodeSpec),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_node_amount: {
        value: cdktf.numberToHclTerraform(this._dataNodeAmount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      data_node_disk_encrypted: {
        value: cdktf.booleanToHclTerraform(this._dataNodeDiskEncrypted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      data_node_disk_performance_level: {
        value: cdktf.stringToHclTerraform(this._dataNodeDiskPerformanceLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_node_disk_size: {
        value: cdktf.numberToHclTerraform(this._dataNodeDiskSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      data_node_disk_type: {
        value: cdktf.stringToHclTerraform(this._dataNodeDiskType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_node_spec: {
        value: cdktf.stringToHclTerraform(this._dataNodeSpec),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_kibana_private_network: {
        value: cdktf.booleanToHclTerraform(this._enableKibanaPrivateNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_kibana_public_network: {
        value: cdktf.booleanToHclTerraform(this._enableKibanaPublicNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_public: {
        value: cdktf.booleanToHclTerraform(this._enablePublic),
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
      instance_charge_type: {
        value: cdktf.stringToHclTerraform(this._instanceChargeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kibana_node_spec: {
        value: cdktf.stringToHclTerraform(this._kibanaNodeSpec),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kibana_private_security_group_id: {
        value: cdktf.stringToHclTerraform(this._kibanaPrivateSecurityGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kibana_private_whitelist: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._kibanaPrivateWhitelist),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      kibana_whitelist: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._kibanaWhitelist),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      master_node_disk_type: {
        value: cdktf.stringToHclTerraform(this._masterNodeDiskType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      master_node_spec: {
        value: cdktf.stringToHclTerraform(this._masterNodeSpec),
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
      period: {
        value: cdktf.numberToHclTerraform(this._period),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      private_whitelist: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._privateWhitelist),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_whitelist: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._publicWhitelist),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      renew_status: {
        value: cdktf.stringToHclTerraform(this._renewStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      renewal_duration_unit: {
        value: cdktf.stringToHclTerraform(this._renewalDurationUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      setting_config: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._settingConfig),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      vswitch_id: {
        value: cdktf.stringToHclTerraform(this._vswitchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      warm_node_amount: {
        value: cdktf.numberToHclTerraform(this._warmNodeAmount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      warm_node_disk_encrypted: {
        value: cdktf.booleanToHclTerraform(this._warmNodeDiskEncrypted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      warm_node_disk_size: {
        value: cdktf.numberToHclTerraform(this._warmNodeDiskSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      warm_node_disk_type: {
        value: cdktf.stringToHclTerraform(this._warmNodeDiskType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      warm_node_spec: {
        value: cdktf.stringToHclTerraform(this._warmNodeSpec),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_count: {
        value: cdktf.numberToHclTerraform(this._zoneCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeouts: {
        value: elasticsearchInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ElasticsearchInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
