// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/mongodb_serverless_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MongodbServerlessInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/mongodb_serverless_instance#account_password MongodbServerlessInstance#account_password}
  */
  readonly accountPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/mongodb_serverless_instance#auto_renew MongodbServerlessInstance#auto_renew}
  */
  readonly autoRenew?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/mongodb_serverless_instance#capacity_unit MongodbServerlessInstance#capacity_unit}
  */
  readonly capacityUnit: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/mongodb_serverless_instance#db_instance_description MongodbServerlessInstance#db_instance_description}
  */
  readonly dbInstanceDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/mongodb_serverless_instance#db_instance_storage MongodbServerlessInstance#db_instance_storage}
  */
  readonly dbInstanceStorage: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/mongodb_serverless_instance#engine MongodbServerlessInstance#engine}
  */
  readonly engine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/mongodb_serverless_instance#engine_version MongodbServerlessInstance#engine_version}
  */
  readonly engineVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/mongodb_serverless_instance#id MongodbServerlessInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/mongodb_serverless_instance#maintain_end_time MongodbServerlessInstance#maintain_end_time}
  */
  readonly maintainEndTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/mongodb_serverless_instance#maintain_start_time MongodbServerlessInstance#maintain_start_time}
  */
  readonly maintainStartTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/mongodb_serverless_instance#period MongodbServerlessInstance#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/mongodb_serverless_instance#period_price_type MongodbServerlessInstance#period_price_type}
  */
  readonly periodPriceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/mongodb_serverless_instance#resource_group_id MongodbServerlessInstance#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/mongodb_serverless_instance#storage_engine MongodbServerlessInstance#storage_engine}
  */
  readonly storageEngine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/mongodb_serverless_instance#tags MongodbServerlessInstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/mongodb_serverless_instance#vpc_id MongodbServerlessInstance#vpc_id}
  */
  readonly vpcId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/mongodb_serverless_instance#vswitch_id MongodbServerlessInstance#vswitch_id}
  */
  readonly vswitchId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/mongodb_serverless_instance#zone_id MongodbServerlessInstance#zone_id}
  */
  readonly zoneId: string;
  /**
  * security_ip_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/mongodb_serverless_instance#security_ip_groups MongodbServerlessInstance#security_ip_groups}
  */
  readonly securityIpGroups?: MongodbServerlessInstanceSecurityIpGroups[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/mongodb_serverless_instance#timeouts MongodbServerlessInstance#timeouts}
  */
  readonly timeouts?: MongodbServerlessInstanceTimeouts;
}
export interface MongodbServerlessInstanceSecurityIpGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/mongodb_serverless_instance#security_ip_group_attribute MongodbServerlessInstance#security_ip_group_attribute}
  */
  readonly securityIpGroupAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/mongodb_serverless_instance#security_ip_group_name MongodbServerlessInstance#security_ip_group_name}
  */
  readonly securityIpGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/mongodb_serverless_instance#security_ip_list MongodbServerlessInstance#security_ip_list}
  */
  readonly securityIpList?: string;
}

export function mongodbServerlessInstanceSecurityIpGroupsToTerraform(struct?: MongodbServerlessInstanceSecurityIpGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    security_ip_group_attribute: cdktf.stringToTerraform(struct!.securityIpGroupAttribute),
    security_ip_group_name: cdktf.stringToTerraform(struct!.securityIpGroupName),
    security_ip_list: cdktf.stringToTerraform(struct!.securityIpList),
  }
}


export function mongodbServerlessInstanceSecurityIpGroupsToHclTerraform(struct?: MongodbServerlessInstanceSecurityIpGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    security_ip_group_attribute: {
      value: cdktf.stringToHclTerraform(struct!.securityIpGroupAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_ip_group_name: {
      value: cdktf.stringToHclTerraform(struct!.securityIpGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_ip_list: {
      value: cdktf.stringToHclTerraform(struct!.securityIpList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MongodbServerlessInstanceSecurityIpGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MongodbServerlessInstanceSecurityIpGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityIpGroupAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityIpGroupAttribute = this._securityIpGroupAttribute;
    }
    if (this._securityIpGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityIpGroupName = this._securityIpGroupName;
    }
    if (this._securityIpList !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityIpList = this._securityIpList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MongodbServerlessInstanceSecurityIpGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._securityIpGroupAttribute = undefined;
      this._securityIpGroupName = undefined;
      this._securityIpList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._securityIpGroupAttribute = value.securityIpGroupAttribute;
      this._securityIpGroupName = value.securityIpGroupName;
      this._securityIpList = value.securityIpList;
    }
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

  // security_ip_group_name - computed: false, optional: true, required: false
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

  // security_ip_list - computed: false, optional: true, required: false
  private _securityIpList?: string; 
  public get securityIpList() {
    return this.getStringAttribute('security_ip_list');
  }
  public set securityIpList(value: string) {
    this._securityIpList = value;
  }
  public resetSecurityIpList() {
    this._securityIpList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityIpListInput() {
    return this._securityIpList;
  }
}

export class MongodbServerlessInstanceSecurityIpGroupsList extends cdktf.ComplexList {
  public internalValue? : MongodbServerlessInstanceSecurityIpGroups[] | cdktf.IResolvable

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
  public get(index: number): MongodbServerlessInstanceSecurityIpGroupsOutputReference {
    return new MongodbServerlessInstanceSecurityIpGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MongodbServerlessInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/mongodb_serverless_instance#create MongodbServerlessInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/mongodb_serverless_instance#update MongodbServerlessInstance#update}
  */
  readonly update?: string;
}

export function mongodbServerlessInstanceTimeoutsToTerraform(struct?: MongodbServerlessInstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function mongodbServerlessInstanceTimeoutsToHclTerraform(struct?: MongodbServerlessInstanceTimeouts | cdktf.IResolvable): any {
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

export class MongodbServerlessInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MongodbServerlessInstanceTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MongodbServerlessInstanceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/mongodb_serverless_instance alicloud_mongodb_serverless_instance}
*/
export class MongodbServerlessInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_mongodb_serverless_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MongodbServerlessInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MongodbServerlessInstance to import
  * @param importFromId The id of the existing MongodbServerlessInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/mongodb_serverless_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MongodbServerlessInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_mongodb_serverless_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/mongodb_serverless_instance alicloud_mongodb_serverless_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MongodbServerlessInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: MongodbServerlessInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_mongodb_serverless_instance',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountPassword = config.accountPassword;
    this._autoRenew = config.autoRenew;
    this._capacityUnit = config.capacityUnit;
    this._dbInstanceDescription = config.dbInstanceDescription;
    this._dbInstanceStorage = config.dbInstanceStorage;
    this._engine = config.engine;
    this._engineVersion = config.engineVersion;
    this._id = config.id;
    this._maintainEndTime = config.maintainEndTime;
    this._maintainStartTime = config.maintainStartTime;
    this._period = config.period;
    this._periodPriceType = config.periodPriceType;
    this._resourceGroupId = config.resourceGroupId;
    this._storageEngine = config.storageEngine;
    this._tags = config.tags;
    this._vpcId = config.vpcId;
    this._vswitchId = config.vswitchId;
    this._zoneId = config.zoneId;
    this._securityIpGroups.internalValue = config.securityIpGroups;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_password - computed: false, optional: false, required: true
  private _accountPassword?: string; 
  public get accountPassword() {
    return this.getStringAttribute('account_password');
  }
  public set accountPassword(value: string) {
    this._accountPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountPasswordInput() {
    return this._accountPassword;
  }

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

  // capacity_unit - computed: false, optional: false, required: true
  private _capacityUnit?: number; 
  public get capacityUnit() {
    return this.getNumberAttribute('capacity_unit');
  }
  public set capacityUnit(value: number) {
    this._capacityUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityUnitInput() {
    return this._capacityUnit;
  }

  // db_instance_description - computed: false, optional: true, required: false
  private _dbInstanceDescription?: string; 
  public get dbInstanceDescription() {
    return this.getStringAttribute('db_instance_description');
  }
  public set dbInstanceDescription(value: string) {
    this._dbInstanceDescription = value;
  }
  public resetDbInstanceDescription() {
    this._dbInstanceDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceDescriptionInput() {
    return this._dbInstanceDescription;
  }

  // db_instance_storage - computed: false, optional: false, required: true
  private _dbInstanceStorage?: number; 
  public get dbInstanceStorage() {
    return this.getNumberAttribute('db_instance_storage');
  }
  public set dbInstanceStorage(value: number) {
    this._dbInstanceStorage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceStorageInput() {
    return this._dbInstanceStorage;
  }

  // engine - computed: true, optional: true, required: false
  private _engine?: string; 
  public get engine() {
    return this.getStringAttribute('engine');
  }
  public set engine(value: string) {
    this._engine = value;
  }
  public resetEngine() {
    this._engine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineInput() {
    return this._engine;
  }

  // engine_version - computed: false, optional: false, required: true
  private _engineVersion?: string; 
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }
  public set engineVersion(value: string) {
    this._engineVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineVersionInput() {
    return this._engineVersion;
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

  // period_price_type - computed: false, optional: true, required: false
  private _periodPriceType?: string; 
  public get periodPriceType() {
    return this.getStringAttribute('period_price_type');
  }
  public set periodPriceType(value: string) {
    this._periodPriceType = value;
  }
  public resetPeriodPriceType() {
    this._periodPriceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodPriceTypeInput() {
    return this._periodPriceType;
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // storage_engine - computed: true, optional: true, required: false
  private _storageEngine?: string; 
  public get storageEngine() {
    return this.getStringAttribute('storage_engine');
  }
  public set storageEngine(value: string) {
    this._storageEngine = value;
  }
  public resetStorageEngine() {
    this._storageEngine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageEngineInput() {
    return this._storageEngine;
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

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // security_ip_groups - computed: false, optional: true, required: false
  private _securityIpGroups = new MongodbServerlessInstanceSecurityIpGroupsList(this, "security_ip_groups", true);
  public get securityIpGroups() {
    return this._securityIpGroups;
  }
  public putSecurityIpGroups(value: MongodbServerlessInstanceSecurityIpGroups[] | cdktf.IResolvable) {
    this._securityIpGroups.internalValue = value;
  }
  public resetSecurityIpGroups() {
    this._securityIpGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityIpGroupsInput() {
    return this._securityIpGroups.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MongodbServerlessInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MongodbServerlessInstanceTimeouts) {
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
      account_password: cdktf.stringToTerraform(this._accountPassword),
      auto_renew: cdktf.booleanToTerraform(this._autoRenew),
      capacity_unit: cdktf.numberToTerraform(this._capacityUnit),
      db_instance_description: cdktf.stringToTerraform(this._dbInstanceDescription),
      db_instance_storage: cdktf.numberToTerraform(this._dbInstanceStorage),
      engine: cdktf.stringToTerraform(this._engine),
      engine_version: cdktf.stringToTerraform(this._engineVersion),
      id: cdktf.stringToTerraform(this._id),
      maintain_end_time: cdktf.stringToTerraform(this._maintainEndTime),
      maintain_start_time: cdktf.stringToTerraform(this._maintainStartTime),
      period: cdktf.numberToTerraform(this._period),
      period_price_type: cdktf.stringToTerraform(this._periodPriceType),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      storage_engine: cdktf.stringToTerraform(this._storageEngine),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      vswitch_id: cdktf.stringToTerraform(this._vswitchId),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      security_ip_groups: cdktf.listMapper(mongodbServerlessInstanceSecurityIpGroupsToTerraform, true)(this._securityIpGroups.internalValue),
      timeouts: mongodbServerlessInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_password: {
        value: cdktf.stringToHclTerraform(this._accountPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_renew: {
        value: cdktf.booleanToHclTerraform(this._autoRenew),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      capacity_unit: {
        value: cdktf.numberToHclTerraform(this._capacityUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      db_instance_description: {
        value: cdktf.stringToHclTerraform(this._dbInstanceDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_instance_storage: {
        value: cdktf.numberToHclTerraform(this._dbInstanceStorage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      engine: {
        value: cdktf.stringToHclTerraform(this._engine),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      period: {
        value: cdktf.numberToHclTerraform(this._period),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      period_price_type: {
        value: cdktf.stringToHclTerraform(this._periodPriceType),
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
      storage_engine: {
        value: cdktf.stringToHclTerraform(this._storageEngine),
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
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
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
      security_ip_groups: {
        value: cdktf.listMapperHcl(mongodbServerlessInstanceSecurityIpGroupsToHclTerraform, true)(this._securityIpGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MongodbServerlessInstanceSecurityIpGroupsList",
      },
      timeouts: {
        value: mongodbServerlessInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MongodbServerlessInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
