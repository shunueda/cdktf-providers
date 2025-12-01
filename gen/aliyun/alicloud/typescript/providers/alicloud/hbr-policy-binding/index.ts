// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/hbr_policy_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HbrPolicyBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/hbr_policy_binding#cross_account_role_name HbrPolicyBinding#cross_account_role_name}
  */
  readonly crossAccountRoleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/hbr_policy_binding#cross_account_type HbrPolicyBinding#cross_account_type}
  */
  readonly crossAccountType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/hbr_policy_binding#cross_account_user_id HbrPolicyBinding#cross_account_user_id}
  */
  readonly crossAccountUserId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/hbr_policy_binding#data_source_id HbrPolicyBinding#data_source_id}
  */
  readonly dataSourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/hbr_policy_binding#disabled HbrPolicyBinding#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/hbr_policy_binding#exclude HbrPolicyBinding#exclude}
  */
  readonly exclude?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/hbr_policy_binding#id HbrPolicyBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/hbr_policy_binding#include HbrPolicyBinding#include}
  */
  readonly include?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/hbr_policy_binding#policy_binding_description HbrPolicyBinding#policy_binding_description}
  */
  readonly policyBindingDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/hbr_policy_binding#policy_id HbrPolicyBinding#policy_id}
  */
  readonly policyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/hbr_policy_binding#source HbrPolicyBinding#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/hbr_policy_binding#source_type HbrPolicyBinding#source_type}
  */
  readonly sourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/hbr_policy_binding#speed_limit HbrPolicyBinding#speed_limit}
  */
  readonly speedLimit?: string;
  /**
  * advanced_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/hbr_policy_binding#advanced_options HbrPolicyBinding#advanced_options}
  */
  readonly advancedOptions?: HbrPolicyBindingAdvancedOptions;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/hbr_policy_binding#timeouts HbrPolicyBinding#timeouts}
  */
  readonly timeouts?: HbrPolicyBindingTimeouts;
}
export interface HbrPolicyBindingAdvancedOptionsUdmDetail {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/hbr_policy_binding#destination_kms_key_id HbrPolicyBinding#destination_kms_key_id}
  */
  readonly destinationKmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/hbr_policy_binding#disk_id_list HbrPolicyBinding#disk_id_list}
  */
  readonly diskIdList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/hbr_policy_binding#exclude_disk_id_list HbrPolicyBinding#exclude_disk_id_list}
  */
  readonly excludeDiskIdList?: string[];
}

export function hbrPolicyBindingAdvancedOptionsUdmDetailToTerraform(struct?: HbrPolicyBindingAdvancedOptionsUdmDetailOutputReference | HbrPolicyBindingAdvancedOptionsUdmDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_kms_key_id: cdktf.stringToTerraform(struct!.destinationKmsKeyId),
    disk_id_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.diskIdList),
    exclude_disk_id_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeDiskIdList),
  }
}


export function hbrPolicyBindingAdvancedOptionsUdmDetailToHclTerraform(struct?: HbrPolicyBindingAdvancedOptionsUdmDetailOutputReference | HbrPolicyBindingAdvancedOptionsUdmDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.destinationKmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_id_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.diskIdList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exclude_disk_id_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeDiskIdList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HbrPolicyBindingAdvancedOptionsUdmDetailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HbrPolicyBindingAdvancedOptionsUdmDetail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationKmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationKmsKeyId = this._destinationKmsKeyId;
    }
    if (this._diskIdList !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskIdList = this._diskIdList;
    }
    if (this._excludeDiskIdList !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeDiskIdList = this._excludeDiskIdList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HbrPolicyBindingAdvancedOptionsUdmDetail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destinationKmsKeyId = undefined;
      this._diskIdList = undefined;
      this._excludeDiskIdList = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destinationKmsKeyId = value.destinationKmsKeyId;
      this._diskIdList = value.diskIdList;
      this._excludeDiskIdList = value.excludeDiskIdList;
    }
  }

  // destination_kms_key_id - computed: false, optional: true, required: false
  private _destinationKmsKeyId?: string; 
  public get destinationKmsKeyId() {
    return this.getStringAttribute('destination_kms_key_id');
  }
  public set destinationKmsKeyId(value: string) {
    this._destinationKmsKeyId = value;
  }
  public resetDestinationKmsKeyId() {
    this._destinationKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationKmsKeyIdInput() {
    return this._destinationKmsKeyId;
  }

  // disk_id_list - computed: false, optional: true, required: false
  private _diskIdList?: string[]; 
  public get diskIdList() {
    return this.getListAttribute('disk_id_list');
  }
  public set diskIdList(value: string[]) {
    this._diskIdList = value;
  }
  public resetDiskIdList() {
    this._diskIdList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskIdListInput() {
    return this._diskIdList;
  }

  // exclude_disk_id_list - computed: false, optional: true, required: false
  private _excludeDiskIdList?: string[]; 
  public get excludeDiskIdList() {
    return this.getListAttribute('exclude_disk_id_list');
  }
  public set excludeDiskIdList(value: string[]) {
    this._excludeDiskIdList = value;
  }
  public resetExcludeDiskIdList() {
    this._excludeDiskIdList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeDiskIdListInput() {
    return this._excludeDiskIdList;
  }
}
export interface HbrPolicyBindingAdvancedOptions {
  /**
  * udm_detail block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/hbr_policy_binding#udm_detail HbrPolicyBinding#udm_detail}
  */
  readonly udmDetail?: HbrPolicyBindingAdvancedOptionsUdmDetail;
}

export function hbrPolicyBindingAdvancedOptionsToTerraform(struct?: HbrPolicyBindingAdvancedOptionsOutputReference | HbrPolicyBindingAdvancedOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    udm_detail: hbrPolicyBindingAdvancedOptionsUdmDetailToTerraform(struct!.udmDetail),
  }
}


export function hbrPolicyBindingAdvancedOptionsToHclTerraform(struct?: HbrPolicyBindingAdvancedOptionsOutputReference | HbrPolicyBindingAdvancedOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    udm_detail: {
      value: hbrPolicyBindingAdvancedOptionsUdmDetailToHclTerraform(struct!.udmDetail),
      isBlock: true,
      type: "list",
      storageClassType: "HbrPolicyBindingAdvancedOptionsUdmDetailList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HbrPolicyBindingAdvancedOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HbrPolicyBindingAdvancedOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._udmDetail?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.udmDetail = this._udmDetail?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HbrPolicyBindingAdvancedOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._udmDetail.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._udmDetail.internalValue = value.udmDetail;
    }
  }

  // udm_detail - computed: false, optional: true, required: false
  private _udmDetail = new HbrPolicyBindingAdvancedOptionsUdmDetailOutputReference(this, "udm_detail");
  public get udmDetail() {
    return this._udmDetail;
  }
  public putUdmDetail(value: HbrPolicyBindingAdvancedOptionsUdmDetail) {
    this._udmDetail.internalValue = value;
  }
  public resetUdmDetail() {
    this._udmDetail.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udmDetailInput() {
    return this._udmDetail.internalValue;
  }
}
export interface HbrPolicyBindingTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/hbr_policy_binding#create HbrPolicyBinding#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/hbr_policy_binding#delete HbrPolicyBinding#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/hbr_policy_binding#update HbrPolicyBinding#update}
  */
  readonly update?: string;
}

export function hbrPolicyBindingTimeoutsToTerraform(struct?: HbrPolicyBindingTimeouts | cdktf.IResolvable): any {
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


export function hbrPolicyBindingTimeoutsToHclTerraform(struct?: HbrPolicyBindingTimeouts | cdktf.IResolvable): any {
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

export class HbrPolicyBindingTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HbrPolicyBindingTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HbrPolicyBindingTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/hbr_policy_binding alicloud_hbr_policy_binding}
*/
export class HbrPolicyBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_hbr_policy_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HbrPolicyBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HbrPolicyBinding to import
  * @param importFromId The id of the existing HbrPolicyBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/hbr_policy_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HbrPolicyBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_hbr_policy_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/hbr_policy_binding alicloud_hbr_policy_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HbrPolicyBindingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: HbrPolicyBindingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_hbr_policy_binding',
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
    this._crossAccountRoleName = config.crossAccountRoleName;
    this._crossAccountType = config.crossAccountType;
    this._crossAccountUserId = config.crossAccountUserId;
    this._dataSourceId = config.dataSourceId;
    this._disabled = config.disabled;
    this._exclude = config.exclude;
    this._id = config.id;
    this._include = config.include;
    this._policyBindingDescription = config.policyBindingDescription;
    this._policyId = config.policyId;
    this._source = config.source;
    this._sourceType = config.sourceType;
    this._speedLimit = config.speedLimit;
    this._advancedOptions.internalValue = config.advancedOptions;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // cross_account_role_name - computed: false, optional: true, required: false
  private _crossAccountRoleName?: string; 
  public get crossAccountRoleName() {
    return this.getStringAttribute('cross_account_role_name');
  }
  public set crossAccountRoleName(value: string) {
    this._crossAccountRoleName = value;
  }
  public resetCrossAccountRoleName() {
    this._crossAccountRoleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountRoleNameInput() {
    return this._crossAccountRoleName;
  }

  // cross_account_type - computed: true, optional: true, required: false
  private _crossAccountType?: string; 
  public get crossAccountType() {
    return this.getStringAttribute('cross_account_type');
  }
  public set crossAccountType(value: string) {
    this._crossAccountType = value;
  }
  public resetCrossAccountType() {
    this._crossAccountType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountTypeInput() {
    return this._crossAccountType;
  }

  // cross_account_user_id - computed: false, optional: true, required: false
  private _crossAccountUserId?: number; 
  public get crossAccountUserId() {
    return this.getNumberAttribute('cross_account_user_id');
  }
  public set crossAccountUserId(value: number) {
    this._crossAccountUserId = value;
  }
  public resetCrossAccountUserId() {
    this._crossAccountUserId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountUserIdInput() {
    return this._crossAccountUserId;
  }

  // data_source_id - computed: true, optional: true, required: false
  private _dataSourceId?: string; 
  public get dataSourceId() {
    return this.getStringAttribute('data_source_id');
  }
  public set dataSourceId(value: string) {
    this._dataSourceId = value;
  }
  public resetDataSourceId() {
    this._dataSourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceIdInput() {
    return this._dataSourceId;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: string; 
  public get exclude() {
    return this.getStringAttribute('exclude');
  }
  public set exclude(value: string) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
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

  // include - computed: false, optional: true, required: false
  private _include?: string; 
  public get include() {
    return this.getStringAttribute('include');
  }
  public set include(value: string) {
    this._include = value;
  }
  public resetInclude() {
    this._include = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }

  // policy_binding_description - computed: false, optional: true, required: false
  private _policyBindingDescription?: string; 
  public get policyBindingDescription() {
    return this.getStringAttribute('policy_binding_description');
  }
  public set policyBindingDescription(value: string) {
    this._policyBindingDescription = value;
  }
  public resetPolicyBindingDescription() {
    this._policyBindingDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyBindingDescriptionInput() {
    return this._policyBindingDescription;
  }

  // policy_id - computed: true, optional: true, required: false
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  public resetPolicyId() {
    this._policyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // source_type - computed: true, optional: true, required: false
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  public resetSourceType() {
    this._sourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }

  // speed_limit - computed: false, optional: true, required: false
  private _speedLimit?: string; 
  public get speedLimit() {
    return this.getStringAttribute('speed_limit');
  }
  public set speedLimit(value: string) {
    this._speedLimit = value;
  }
  public resetSpeedLimit() {
    this._speedLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speedLimitInput() {
    return this._speedLimit;
  }

  // advanced_options - computed: false, optional: true, required: false
  private _advancedOptions = new HbrPolicyBindingAdvancedOptionsOutputReference(this, "advanced_options");
  public get advancedOptions() {
    return this._advancedOptions;
  }
  public putAdvancedOptions(value: HbrPolicyBindingAdvancedOptions) {
    this._advancedOptions.internalValue = value;
  }
  public resetAdvancedOptions() {
    this._advancedOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedOptionsInput() {
    return this._advancedOptions.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new HbrPolicyBindingTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: HbrPolicyBindingTimeouts) {
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
      cross_account_role_name: cdktf.stringToTerraform(this._crossAccountRoleName),
      cross_account_type: cdktf.stringToTerraform(this._crossAccountType),
      cross_account_user_id: cdktf.numberToTerraform(this._crossAccountUserId),
      data_source_id: cdktf.stringToTerraform(this._dataSourceId),
      disabled: cdktf.booleanToTerraform(this._disabled),
      exclude: cdktf.stringToTerraform(this._exclude),
      id: cdktf.stringToTerraform(this._id),
      include: cdktf.stringToTerraform(this._include),
      policy_binding_description: cdktf.stringToTerraform(this._policyBindingDescription),
      policy_id: cdktf.stringToTerraform(this._policyId),
      source: cdktf.stringToTerraform(this._source),
      source_type: cdktf.stringToTerraform(this._sourceType),
      speed_limit: cdktf.stringToTerraform(this._speedLimit),
      advanced_options: hbrPolicyBindingAdvancedOptionsToTerraform(this._advancedOptions.internalValue),
      timeouts: hbrPolicyBindingTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cross_account_role_name: {
        value: cdktf.stringToHclTerraform(this._crossAccountRoleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cross_account_type: {
        value: cdktf.stringToHclTerraform(this._crossAccountType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cross_account_user_id: {
        value: cdktf.numberToHclTerraform(this._crossAccountUserId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      data_source_id: {
        value: cdktf.stringToHclTerraform(this._dataSourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exclude: {
        value: cdktf.stringToHclTerraform(this._exclude),
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
      include: {
        value: cdktf.stringToHclTerraform(this._include),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_binding_description: {
        value: cdktf.stringToHclTerraform(this._policyBindingDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_id: {
        value: cdktf.stringToHclTerraform(this._policyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source: {
        value: cdktf.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_type: {
        value: cdktf.stringToHclTerraform(this._sourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      speed_limit: {
        value: cdktf.stringToHclTerraform(this._speedLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      advanced_options: {
        value: hbrPolicyBindingAdvancedOptionsToHclTerraform(this._advancedOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HbrPolicyBindingAdvancedOptionsList",
      },
      timeouts: {
        value: hbrPolicyBindingTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "HbrPolicyBindingTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
