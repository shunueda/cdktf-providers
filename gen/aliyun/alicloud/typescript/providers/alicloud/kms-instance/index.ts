// https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/kms_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KmsInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/kms_instance#force_delete_without_backup KmsInstance#force_delete_without_backup}
  */
  readonly forceDeleteWithoutBackup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/kms_instance#id KmsInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/kms_instance#instance_name KmsInstance#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/kms_instance#key_num KmsInstance#key_num}
  */
  readonly keyNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/kms_instance#log KmsInstance#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/kms_instance#log_storage KmsInstance#log_storage}
  */
  readonly logStorage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/kms_instance#payment_type KmsInstance#payment_type}
  */
  readonly paymentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/kms_instance#period KmsInstance#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/kms_instance#product_version KmsInstance#product_version}
  */
  readonly productVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/kms_instance#renew_period KmsInstance#renew_period}
  */
  readonly renewPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/kms_instance#renew_status KmsInstance#renew_status}
  */
  readonly renewStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/kms_instance#renewal_period_unit KmsInstance#renewal_period_unit}
  */
  readonly renewalPeriodUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/kms_instance#secret_num KmsInstance#secret_num}
  */
  readonly secretNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/kms_instance#spec KmsInstance#spec}
  */
  readonly spec?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/kms_instance#tags KmsInstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/kms_instance#vpc_id KmsInstance#vpc_id}
  */
  readonly vpcId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/kms_instance#vpc_num KmsInstance#vpc_num}
  */
  readonly vpcNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/kms_instance#vswitch_ids KmsInstance#vswitch_ids}
  */
  readonly vswitchIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/kms_instance#zone_ids KmsInstance#zone_ids}
  */
  readonly zoneIds: string[];
  /**
  * bind_vpcs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/kms_instance#bind_vpcs KmsInstance#bind_vpcs}
  */
  readonly bindVpcs?: KmsInstanceBindVpcs[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/kms_instance#timeouts KmsInstance#timeouts}
  */
  readonly timeouts?: KmsInstanceTimeouts;
}
export interface KmsInstanceBindVpcs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/kms_instance#region_id KmsInstance#region_id}
  */
  readonly regionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/kms_instance#vpc_id KmsInstance#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/kms_instance#vpc_owner_id KmsInstance#vpc_owner_id}
  */
  readonly vpcOwnerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/kms_instance#vswitch_id KmsInstance#vswitch_id}
  */
  readonly vswitchId?: string;
}

export function kmsInstanceBindVpcsToTerraform(struct?: KmsInstanceBindVpcs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    region_id: cdktf.stringToTerraform(struct!.regionId),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
    vpc_owner_id: cdktf.stringToTerraform(struct!.vpcOwnerId),
    vswitch_id: cdktf.stringToTerraform(struct!.vswitchId),
  }
}


export function kmsInstanceBindVpcsToHclTerraform(struct?: KmsInstanceBindVpcs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    region_id: {
      value: cdktf.stringToHclTerraform(struct!.regionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_owner_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcOwnerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vswitch_id: {
      value: cdktf.stringToHclTerraform(struct!.vswitchId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KmsInstanceBindVpcsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KmsInstanceBindVpcs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionId = this._regionId;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    if (this._vpcOwnerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcOwnerId = this._vpcOwnerId;
    }
    if (this._vswitchId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vswitchId = this._vswitchId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KmsInstanceBindVpcs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._regionId = undefined;
      this._vpcId = undefined;
      this._vpcOwnerId = undefined;
      this._vswitchId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._regionId = value.regionId;
      this._vpcId = value.vpcId;
      this._vpcOwnerId = value.vpcOwnerId;
      this._vswitchId = value.vswitchId;
    }
  }

  // region_id - computed: false, optional: true, required: false
  private _regionId?: string; 
  public get regionId() {
    return this.getStringAttribute('region_id');
  }
  public set regionId(value: string) {
    this._regionId = value;
  }
  public resetRegionId() {
    this._regionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
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

  // vpc_owner_id - computed: false, optional: true, required: false
  private _vpcOwnerId?: string; 
  public get vpcOwnerId() {
    return this.getStringAttribute('vpc_owner_id');
  }
  public set vpcOwnerId(value: string) {
    this._vpcOwnerId = value;
  }
  public resetVpcOwnerId() {
    this._vpcOwnerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcOwnerIdInput() {
    return this._vpcOwnerId;
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
}

export class KmsInstanceBindVpcsList extends cdktf.ComplexList {
  public internalValue? : KmsInstanceBindVpcs[] | cdktf.IResolvable

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
  public get(index: number): KmsInstanceBindVpcsOutputReference {
    return new KmsInstanceBindVpcsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KmsInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/kms_instance#create KmsInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/kms_instance#delete KmsInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/kms_instance#update KmsInstance#update}
  */
  readonly update?: string;
}

export function kmsInstanceTimeoutsToTerraform(struct?: KmsInstanceTimeouts | cdktf.IResolvable): any {
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


export function kmsInstanceTimeoutsToHclTerraform(struct?: KmsInstanceTimeouts | cdktf.IResolvable): any {
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

export class KmsInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KmsInstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KmsInstanceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/kms_instance alicloud_kms_instance}
*/
export class KmsInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_kms_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KmsInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KmsInstance to import
  * @param importFromId The id of the existing KmsInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/kms_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KmsInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_kms_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/kms_instance alicloud_kms_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KmsInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: KmsInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_kms_instance',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.265.0',
        providerVersionConstraint: '1.265.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._forceDeleteWithoutBackup = config.forceDeleteWithoutBackup;
    this._id = config.id;
    this._instanceName = config.instanceName;
    this._keyNum = config.keyNum;
    this._log = config.log;
    this._logStorage = config.logStorage;
    this._paymentType = config.paymentType;
    this._period = config.period;
    this._productVersion = config.productVersion;
    this._renewPeriod = config.renewPeriod;
    this._renewStatus = config.renewStatus;
    this._renewalPeriodUnit = config.renewalPeriodUnit;
    this._secretNum = config.secretNum;
    this._spec = config.spec;
    this._tags = config.tags;
    this._vpcId = config.vpcId;
    this._vpcNum = config.vpcNum;
    this._vswitchIds = config.vswitchIds;
    this._zoneIds = config.zoneIds;
    this._bindVpcs.internalValue = config.bindVpcs;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ca_certificate_chain_pem - computed: true, optional: false, required: false
  public get caCertificateChainPem() {
    return this.getStringAttribute('ca_certificate_chain_pem');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // end_date - computed: true, optional: false, required: false
  public get endDate() {
    return this.getStringAttribute('end_date');
  }

  // force_delete_without_backup - computed: false, optional: true, required: false
  private _forceDeleteWithoutBackup?: string; 
  public get forceDeleteWithoutBackup() {
    return this.getStringAttribute('force_delete_without_backup');
  }
  public set forceDeleteWithoutBackup(value: string) {
    this._forceDeleteWithoutBackup = value;
  }
  public resetForceDeleteWithoutBackup() {
    this._forceDeleteWithoutBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteWithoutBackupInput() {
    return this._forceDeleteWithoutBackup;
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

  // key_num - computed: false, optional: true, required: false
  private _keyNum?: number; 
  public get keyNum() {
    return this.getNumberAttribute('key_num');
  }
  public set keyNum(value: number) {
    this._keyNum = value;
  }
  public resetKeyNum() {
    this._keyNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNumInput() {
    return this._keyNum;
  }

  // log - computed: true, optional: true, required: false
  private _log?: string; 
  public get log() {
    return this.getStringAttribute('log');
  }
  public set log(value: string) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }

  // log_storage - computed: true, optional: true, required: false
  private _logStorage?: number; 
  public get logStorage() {
    return this.getNumberAttribute('log_storage');
  }
  public set logStorage(value: number) {
    this._logStorage = value;
  }
  public resetLogStorage() {
    this._logStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStorageInput() {
    return this._logStorage;
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

  // product_version - computed: true, optional: true, required: false
  private _productVersion?: string; 
  public get productVersion() {
    return this.getStringAttribute('product_version');
  }
  public set productVersion(value: string) {
    this._productVersion = value;
  }
  public resetProductVersion() {
    this._productVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productVersionInput() {
    return this._productVersion;
  }

  // renew_period - computed: false, optional: true, required: false
  private _renewPeriod?: number; 
  public get renewPeriod() {
    return this.getNumberAttribute('renew_period');
  }
  public set renewPeriod(value: number) {
    this._renewPeriod = value;
  }
  public resetRenewPeriod() {
    this._renewPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewPeriodInput() {
    return this._renewPeriod;
  }

  // renew_status - computed: true, optional: true, required: false
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

  // renewal_period_unit - computed: false, optional: true, required: false
  private _renewalPeriodUnit?: string; 
  public get renewalPeriodUnit() {
    return this.getStringAttribute('renewal_period_unit');
  }
  public set renewalPeriodUnit(value: string) {
    this._renewalPeriodUnit = value;
  }
  public resetRenewalPeriodUnit() {
    this._renewalPeriodUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewalPeriodUnitInput() {
    return this._renewalPeriodUnit;
  }

  // secret_num - computed: false, optional: true, required: false
  private _secretNum?: number; 
  public get secretNum() {
    return this.getNumberAttribute('secret_num');
  }
  public set secretNum(value: number) {
    this._secretNum = value;
  }
  public resetSecretNum() {
    this._secretNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNumInput() {
    return this._secretNum;
  }

  // spec - computed: false, optional: true, required: false
  private _spec?: number; 
  public get spec() {
    return this.getNumberAttribute('spec');
  }
  public set spec(value: number) {
    this._spec = value;
  }
  public resetSpec() {
    this._spec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec;
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

  // vpc_num - computed: false, optional: true, required: false
  private _vpcNum?: number; 
  public get vpcNum() {
    return this.getNumberAttribute('vpc_num');
  }
  public set vpcNum(value: number) {
    this._vpcNum = value;
  }
  public resetVpcNum() {
    this._vpcNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcNumInput() {
    return this._vpcNum;
  }

  // vswitch_ids - computed: false, optional: false, required: true
  private _vswitchIds?: string[]; 
  public get vswitchIds() {
    return cdktf.Fn.tolist(this.getListAttribute('vswitch_ids'));
  }
  public set vswitchIds(value: string[]) {
    this._vswitchIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdsInput() {
    return this._vswitchIds;
  }

  // zone_ids - computed: false, optional: false, required: true
  private _zoneIds?: string[]; 
  public get zoneIds() {
    return cdktf.Fn.tolist(this.getListAttribute('zone_ids'));
  }
  public set zoneIds(value: string[]) {
    this._zoneIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdsInput() {
    return this._zoneIds;
  }

  // bind_vpcs - computed: false, optional: true, required: false
  private _bindVpcs = new KmsInstanceBindVpcsList(this, "bind_vpcs", true);
  public get bindVpcs() {
    return this._bindVpcs;
  }
  public putBindVpcs(value: KmsInstanceBindVpcs[] | cdktf.IResolvable) {
    this._bindVpcs.internalValue = value;
  }
  public resetBindVpcs() {
    this._bindVpcs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindVpcsInput() {
    return this._bindVpcs.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new KmsInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KmsInstanceTimeouts) {
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
      force_delete_without_backup: cdktf.stringToTerraform(this._forceDeleteWithoutBackup),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      key_num: cdktf.numberToTerraform(this._keyNum),
      log: cdktf.stringToTerraform(this._log),
      log_storage: cdktf.numberToTerraform(this._logStorage),
      payment_type: cdktf.stringToTerraform(this._paymentType),
      period: cdktf.numberToTerraform(this._period),
      product_version: cdktf.stringToTerraform(this._productVersion),
      renew_period: cdktf.numberToTerraform(this._renewPeriod),
      renew_status: cdktf.stringToTerraform(this._renewStatus),
      renewal_period_unit: cdktf.stringToTerraform(this._renewalPeriodUnit),
      secret_num: cdktf.numberToTerraform(this._secretNum),
      spec: cdktf.numberToTerraform(this._spec),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      vpc_num: cdktf.numberToTerraform(this._vpcNum),
      vswitch_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vswitchIds),
      zone_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._zoneIds),
      bind_vpcs: cdktf.listMapper(kmsInstanceBindVpcsToTerraform, true)(this._bindVpcs.internalValue),
      timeouts: kmsInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      force_delete_without_backup: {
        value: cdktf.stringToHclTerraform(this._forceDeleteWithoutBackup),
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
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_num: {
        value: cdktf.numberToHclTerraform(this._keyNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log: {
        value: cdktf.stringToHclTerraform(this._log),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_storage: {
        value: cdktf.numberToHclTerraform(this._logStorage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      payment_type: {
        value: cdktf.stringToHclTerraform(this._paymentType),
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
      product_version: {
        value: cdktf.stringToHclTerraform(this._productVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      renew_period: {
        value: cdktf.numberToHclTerraform(this._renewPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      renew_status: {
        value: cdktf.stringToHclTerraform(this._renewStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      renewal_period_unit: {
        value: cdktf.stringToHclTerraform(this._renewalPeriodUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_num: {
        value: cdktf.numberToHclTerraform(this._secretNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      spec: {
        value: cdktf.numberToHclTerraform(this._spec),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      vpc_num: {
        value: cdktf.numberToHclTerraform(this._vpcNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vswitch_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vswitchIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      zone_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._zoneIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bind_vpcs: {
        value: cdktf.listMapperHcl(kmsInstanceBindVpcsToHclTerraform, true)(this._bindVpcs.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "KmsInstanceBindVpcsList",
      },
      timeouts: {
        value: kmsInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KmsInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
