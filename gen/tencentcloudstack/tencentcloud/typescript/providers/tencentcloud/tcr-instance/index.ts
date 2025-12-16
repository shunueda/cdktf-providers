// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tcr_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TcrInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicate to delete the COS bucket which is auto-created with the instance or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tcr_instance#delete_bucket TcrInstance#delete_bucket}
  */
  readonly deleteBucket?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tcr_instance#id TcrInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Length of time to purchase an instance (in month). Must set when registry_charge_type is prepaid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tcr_instance#instance_charge_type_prepaid_period TcrInstance#instance_charge_type_prepaid_period}
  */
  readonly instanceChargeTypePrepaidPeriod?: number;
  /**
  * Auto renewal flag. 1: manual renewal, 2: automatic renewal, 3: no renewal and no notification. Must set when registry_charge_type is prepaid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tcr_instance#instance_charge_type_prepaid_renew_flag TcrInstance#instance_charge_type_prepaid_renew_flag}
  */
  readonly instanceChargeTypePrepaidRenewFlag?: number;
  /**
  * TCR types. Valid values are: `standard`, `basic`, `premium`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tcr_instance#instance_type TcrInstance#instance_type}
  */
  readonly instanceType: string;
  /**
  * Name of the TCR instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tcr_instance#name TcrInstance#name}
  */
  readonly name: string;
  /**
  * Control public network access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tcr_instance#open_public_operation TcrInstance#open_public_operation}
  */
  readonly openPublicOperation?: boolean | cdktf.IResolvable;
  /**
  * Charge type of instance. 1: postpaid; 2: prepaid. Default is postpaid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tcr_instance#registry_charge_type TcrInstance#registry_charge_type}
  */
  readonly registryChargeType?: number;
  /**
  * The available tags within this TCR instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tcr_instance#tags TcrInstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * replications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tcr_instance#replications TcrInstance#replications}
  */
  readonly replications?: TcrInstanceReplications[] | cdktf.IResolvable;
  /**
  * security_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tcr_instance#security_policy TcrInstance#security_policy}
  */
  readonly securityPolicy?: TcrInstanceSecurityPolicy[] | cdktf.IResolvable;
}
export interface TcrInstanceReplications {
  /**
  * Replication region ID, check the example at the top of page to find out id of region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tcr_instance#region_id TcrInstance#region_id}
  */
  readonly regionId?: number;
  /**
  * Replication region name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tcr_instance#region_name TcrInstance#region_name}
  */
  readonly regionName?: string;
  /**
  * Specify whether to sync TCR cloud tags to COS Bucket. NOTE: You have to specify when adding, modifying will be ignored for now.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tcr_instance#syn_tag TcrInstance#syn_tag}
  */
  readonly synTag?: boolean | cdktf.IResolvable;
}

export function tcrInstanceReplicationsToTerraform(struct?: TcrInstanceReplications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    region_id: cdktf.numberToTerraform(struct!.regionId),
    region_name: cdktf.stringToTerraform(struct!.regionName),
    syn_tag: cdktf.booleanToTerraform(struct!.synTag),
  }
}


export function tcrInstanceReplicationsToHclTerraform(struct?: TcrInstanceReplications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    region_id: {
      value: cdktf.numberToHclTerraform(struct!.regionId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    region_name: {
      value: cdktf.stringToHclTerraform(struct!.regionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    syn_tag: {
      value: cdktf.booleanToHclTerraform(struct!.synTag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TcrInstanceReplicationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TcrInstanceReplications | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionId = this._regionId;
    }
    if (this._regionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionName = this._regionName;
    }
    if (this._synTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.synTag = this._synTag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TcrInstanceReplications | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._regionId = undefined;
      this._regionName = undefined;
      this._synTag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._regionId = value.regionId;
      this._regionName = value.regionName;
      this._synTag = value.synTag;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // region_id - computed: false, optional: true, required: false
  private _regionId?: number; 
  public get regionId() {
    return this.getNumberAttribute('region_id');
  }
  public set regionId(value: number) {
    this._regionId = value;
  }
  public resetRegionId() {
    this._regionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }

  // region_name - computed: false, optional: true, required: false
  private _regionName?: string; 
  public get regionName() {
    return this.getStringAttribute('region_name');
  }
  public set regionName(value: string) {
    this._regionName = value;
  }
  public resetRegionName() {
    this._regionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionNameInput() {
    return this._regionName;
  }

  // syn_tag - computed: false, optional: true, required: false
  private _synTag?: boolean | cdktf.IResolvable; 
  public get synTag() {
    return this.getBooleanAttribute('syn_tag');
  }
  public set synTag(value: boolean | cdktf.IResolvable) {
    this._synTag = value;
  }
  public resetSynTag() {
    this._synTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synTagInput() {
    return this._synTag;
  }
}

export class TcrInstanceReplicationsList extends cdktf.ComplexList {
  public internalValue? : TcrInstanceReplications[] | cdktf.IResolvable

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
  public get(index: number): TcrInstanceReplicationsOutputReference {
    return new TcrInstanceReplicationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TcrInstanceSecurityPolicy {
  /**
  * The public network IP address of the access source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tcr_instance#cidr_block TcrInstance#cidr_block}
  */
  readonly cidrBlock?: string;
  /**
  * Remarks of policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tcr_instance#description TcrInstance#description}
  */
  readonly description?: string;
}

export function tcrInstanceSecurityPolicyToTerraform(struct?: TcrInstanceSecurityPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_block: cdktf.stringToTerraform(struct!.cidrBlock),
    description: cdktf.stringToTerraform(struct!.description),
  }
}


export function tcrInstanceSecurityPolicyToHclTerraform(struct?: TcrInstanceSecurityPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.cidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TcrInstanceSecurityPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TcrInstanceSecurityPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrBlock = this._cidrBlock;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TcrInstanceSecurityPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidrBlock = undefined;
      this._description = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidrBlock = value.cidrBlock;
      this._description = value.description;
    }
  }

  // cidr_block - computed: false, optional: true, required: false
  private _cidrBlock?: string; 
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }
  public set cidrBlock(value: string) {
    this._cidrBlock = value;
  }
  public resetCidrBlock() {
    this._cidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlockInput() {
    return this._cidrBlock;
  }

  // description - computed: false, optional: true, required: false
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

  // index - computed: true, optional: false, required: false
  public get index() {
    return this.getNumberAttribute('index');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class TcrInstanceSecurityPolicyList extends cdktf.ComplexList {
  public internalValue? : TcrInstanceSecurityPolicy[] | cdktf.IResolvable

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
  public get(index: number): TcrInstanceSecurityPolicyOutputReference {
    return new TcrInstanceSecurityPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tcr_instance tencentcloud_tcr_instance}
*/
export class TcrInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tcr_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TcrInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TcrInstance to import
  * @param importFromId The id of the existing TcrInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tcr_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TcrInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tcr_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/tcr_instance tencentcloud_tcr_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TcrInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: TcrInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tcr_instance',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.45',
        providerVersionConstraint: '1.82.45'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deleteBucket = config.deleteBucket;
    this._id = config.id;
    this._instanceChargeTypePrepaidPeriod = config.instanceChargeTypePrepaidPeriod;
    this._instanceChargeTypePrepaidRenewFlag = config.instanceChargeTypePrepaidRenewFlag;
    this._instanceType = config.instanceType;
    this._name = config.name;
    this._openPublicOperation = config.openPublicOperation;
    this._registryChargeType = config.registryChargeType;
    this._tags = config.tags;
    this._replications.internalValue = config.replications;
    this._securityPolicy.internalValue = config.securityPolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delete_bucket - computed: false, optional: true, required: false
  private _deleteBucket?: boolean | cdktf.IResolvable; 
  public get deleteBucket() {
    return this.getBooleanAttribute('delete_bucket');
  }
  public set deleteBucket(value: boolean | cdktf.IResolvable) {
    this._deleteBucket = value;
  }
  public resetDeleteBucket() {
    this._deleteBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteBucketInput() {
    return this._deleteBucket;
  }

  // expired_at - computed: true, optional: false, required: false
  public get expiredAt() {
    return this.getStringAttribute('expired_at');
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

  // instance_charge_type_prepaid_period - computed: false, optional: true, required: false
  private _instanceChargeTypePrepaidPeriod?: number; 
  public get instanceChargeTypePrepaidPeriod() {
    return this.getNumberAttribute('instance_charge_type_prepaid_period');
  }
  public set instanceChargeTypePrepaidPeriod(value: number) {
    this._instanceChargeTypePrepaidPeriod = value;
  }
  public resetInstanceChargeTypePrepaidPeriod() {
    this._instanceChargeTypePrepaidPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceChargeTypePrepaidPeriodInput() {
    return this._instanceChargeTypePrepaidPeriod;
  }

  // instance_charge_type_prepaid_renew_flag - computed: false, optional: true, required: false
  private _instanceChargeTypePrepaidRenewFlag?: number; 
  public get instanceChargeTypePrepaidRenewFlag() {
    return this.getNumberAttribute('instance_charge_type_prepaid_renew_flag');
  }
  public set instanceChargeTypePrepaidRenewFlag(value: number) {
    this._instanceChargeTypePrepaidRenewFlag = value;
  }
  public resetInstanceChargeTypePrepaidRenewFlag() {
    this._instanceChargeTypePrepaidRenewFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceChargeTypePrepaidRenewFlagInput() {
    return this._instanceChargeTypePrepaidRenewFlag;
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

  // internal_end_point - computed: true, optional: false, required: false
  public get internalEndPoint() {
    return this.getStringAttribute('internal_end_point');
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

  // open_public_operation - computed: false, optional: true, required: false
  private _openPublicOperation?: boolean | cdktf.IResolvable; 
  public get openPublicOperation() {
    return this.getBooleanAttribute('open_public_operation');
  }
  public set openPublicOperation(value: boolean | cdktf.IResolvable) {
    this._openPublicOperation = value;
  }
  public resetOpenPublicOperation() {
    this._openPublicOperation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openPublicOperationInput() {
    return this._openPublicOperation;
  }

  // public_domain - computed: true, optional: false, required: false
  public get publicDomain() {
    return this.getStringAttribute('public_domain');
  }

  // public_status - computed: true, optional: false, required: false
  public get publicStatus() {
    return this.getStringAttribute('public_status');
  }

  // registry_charge_type - computed: false, optional: true, required: false
  private _registryChargeType?: number; 
  public get registryChargeType() {
    return this.getNumberAttribute('registry_charge_type');
  }
  public set registryChargeType(value: number) {
    this._registryChargeType = value;
  }
  public resetRegistryChargeType() {
    this._registryChargeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryChargeTypeInput() {
    return this._registryChargeType;
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

  // replications - computed: false, optional: true, required: false
  private _replications = new TcrInstanceReplicationsList(this, "replications", false);
  public get replications() {
    return this._replications;
  }
  public putReplications(value: TcrInstanceReplications[] | cdktf.IResolvable) {
    this._replications.internalValue = value;
  }
  public resetReplications() {
    this._replications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationsInput() {
    return this._replications.internalValue;
  }

  // security_policy - computed: false, optional: true, required: false
  private _securityPolicy = new TcrInstanceSecurityPolicyList(this, "security_policy", true);
  public get securityPolicy() {
    return this._securityPolicy;
  }
  public putSecurityPolicy(value: TcrInstanceSecurityPolicy[] | cdktf.IResolvable) {
    this._securityPolicy.internalValue = value;
  }
  public resetSecurityPolicy() {
    this._securityPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPolicyInput() {
    return this._securityPolicy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete_bucket: cdktf.booleanToTerraform(this._deleteBucket),
      id: cdktf.stringToTerraform(this._id),
      instance_charge_type_prepaid_period: cdktf.numberToTerraform(this._instanceChargeTypePrepaidPeriod),
      instance_charge_type_prepaid_renew_flag: cdktf.numberToTerraform(this._instanceChargeTypePrepaidRenewFlag),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      name: cdktf.stringToTerraform(this._name),
      open_public_operation: cdktf.booleanToTerraform(this._openPublicOperation),
      registry_charge_type: cdktf.numberToTerraform(this._registryChargeType),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      replications: cdktf.listMapper(tcrInstanceReplicationsToTerraform, true)(this._replications.internalValue),
      security_policy: cdktf.listMapper(tcrInstanceSecurityPolicyToTerraform, true)(this._securityPolicy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delete_bucket: {
        value: cdktf.booleanToHclTerraform(this._deleteBucket),
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
      instance_charge_type_prepaid_period: {
        value: cdktf.numberToHclTerraform(this._instanceChargeTypePrepaidPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      instance_charge_type_prepaid_renew_flag: {
        value: cdktf.numberToHclTerraform(this._instanceChargeTypePrepaidRenewFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      instance_type: {
        value: cdktf.stringToHclTerraform(this._instanceType),
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
      open_public_operation: {
        value: cdktf.booleanToHclTerraform(this._openPublicOperation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      registry_charge_type: {
        value: cdktf.numberToHclTerraform(this._registryChargeType),
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
      replications: {
        value: cdktf.listMapperHcl(tcrInstanceReplicationsToHclTerraform, true)(this._replications.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TcrInstanceReplicationsList",
      },
      security_policy: {
        value: cdktf.listMapperHcl(tcrInstanceSecurityPolicyToHclTerraform, true)(this._securityPolicy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TcrInstanceSecurityPolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
