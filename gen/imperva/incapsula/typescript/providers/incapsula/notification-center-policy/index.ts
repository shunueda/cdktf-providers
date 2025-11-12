// https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/notification_center_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NotificationCenterPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/notification_center_policy#account_id NotificationCenterPolicy#account_id}
  */
  readonly accountId: number;
  /**
  * If value is ‘TRUE’, all newly onboarded assets are automatically added to the notification policy's assets list.
  * Default value is no
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/notification_center_policy#apply_to_new_assets NotificationCenterPolicy#apply_to_new_assets}
  */
  readonly applyToNewAssets?: string;
  /**
  * If value is ‘TRUE’, all newly onboarded sub accounts are automatically added to the notification policy's sub account list.
  * Default value is no
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/notification_center_policy#apply_to_new_sub_accounts NotificationCenterPolicy#apply_to_new_sub_accounts}
  */
  readonly applyToNewSubAccounts?: string;
  /**
  * List of external email to get the notifications (not Imperva users)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/notification_center_policy#emailchannel_external_recipient_list NotificationCenterPolicy#emailchannel_external_recipient_list}
  */
  readonly emailchannelExternalRecipientList?: string[];
  /**
  * List of Imperva users id to get the notifications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/notification_center_policy#emailchannel_user_recipient_list NotificationCenterPolicy#emailchannel_user_recipient_list}
  */
  readonly emailchannelUserRecipientList?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/notification_center_policy#id NotificationCenterPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/notification_center_policy#policy_name NotificationCenterPolicy#policy_name}
  */
  readonly policyName: string;
  /**
  * If value is ‘ACCOUNT’, the policy will apply only to the current account. 
  * If the value is 'SUB_ACCOUNT' the policy applies to the sub accounts only. 
  *  The parent account will receive notifications for activity in the sub accounts that are specified in the subAccountList parameter.
  * This parameter is available only in accounts that can contain sub accounts.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/notification_center_policy#policy_type NotificationCenterPolicy#policy_type}
  */
  readonly policyType?: string;
  /**
  * Indicates whether policy is enabled or disabled. Default value is ENABLE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/notification_center_policy#status NotificationCenterPolicy#status}
  */
  readonly status?: string;
  /**
  * The policy ID. During update must be equal to the updated policy ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/notification_center_policy#sub_account_list NotificationCenterPolicy#sub_account_list}
  */
  readonly subAccountList?: number[];
  /**
  * Subtype of notification policy. Example values include: ‘account_notifications’; ‘website_notifications’; ‘certificate_management_notifications’
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/notification_center_policy#sub_category NotificationCenterPolicy#sub_category}
  */
  readonly subCategory: string;
  /**
  * asset block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/notification_center_policy#asset NotificationCenterPolicy#asset}
  */
  readonly asset?: NotificationCenterPolicyAsset[] | cdktf.IResolvable;
}
export interface NotificationCenterPolicyAsset {
  /**
  * The asset id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/notification_center_policy#asset_id NotificationCenterPolicy#asset_id}
  */
  readonly assetId?: number;
  /**
  * The asset type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/notification_center_policy#asset_type NotificationCenterPolicy#asset_type}
  */
  readonly assetType: string;
}

export function notificationCenterPolicyAssetToTerraform(struct?: NotificationCenterPolicyAsset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asset_id: cdktf.numberToTerraform(struct!.assetId),
    asset_type: cdktf.stringToTerraform(struct!.assetType),
  }
}


export function notificationCenterPolicyAssetToHclTerraform(struct?: NotificationCenterPolicyAsset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asset_id: {
      value: cdktf.numberToHclTerraform(struct!.assetId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    asset_type: {
      value: cdktf.stringToHclTerraform(struct!.assetType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationCenterPolicyAssetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationCenterPolicyAsset | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.assetId = this._assetId;
    }
    if (this._assetType !== undefined) {
      hasAnyValues = true;
      internalValueResult.assetType = this._assetType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationCenterPolicyAsset | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assetId = undefined;
      this._assetType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assetId = value.assetId;
      this._assetType = value.assetType;
    }
  }

  // asset_id - computed: false, optional: true, required: false
  private _assetId?: number; 
  public get assetId() {
    return this.getNumberAttribute('asset_id');
  }
  public set assetId(value: number) {
    this._assetId = value;
  }
  public resetAssetId() {
    this._assetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetIdInput() {
    return this._assetId;
  }

  // asset_type - computed: false, optional: false, required: true
  private _assetType?: string; 
  public get assetType() {
    return this.getStringAttribute('asset_type');
  }
  public set assetType(value: string) {
    this._assetType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assetTypeInput() {
    return this._assetType;
  }
}

export class NotificationCenterPolicyAssetList extends cdktf.ComplexList {
  public internalValue? : NotificationCenterPolicyAsset[] | cdktf.IResolvable

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
  public get(index: number): NotificationCenterPolicyAssetOutputReference {
    return new NotificationCenterPolicyAssetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/notification_center_policy incapsula_notification_center_policy}
*/
export class NotificationCenterPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "incapsula_notification_center_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NotificationCenterPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NotificationCenterPolicy to import
  * @param importFromId The id of the existing NotificationCenterPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/notification_center_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NotificationCenterPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "incapsula_notification_center_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/notification_center_policy incapsula_notification_center_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NotificationCenterPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: NotificationCenterPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'incapsula_notification_center_policy',
      terraformGeneratorMetadata: {
        providerName: 'incapsula',
        providerVersion: '3.35.1',
        providerVersionConstraint: '3.35.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._applyToNewAssets = config.applyToNewAssets;
    this._applyToNewSubAccounts = config.applyToNewSubAccounts;
    this._emailchannelExternalRecipientList = config.emailchannelExternalRecipientList;
    this._emailchannelUserRecipientList = config.emailchannelUserRecipientList;
    this._id = config.id;
    this._policyName = config.policyName;
    this._policyType = config.policyType;
    this._status = config.status;
    this._subAccountList = config.subAccountList;
    this._subCategory = config.subCategory;
    this._asset.internalValue = config.asset;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: number; 
  public get accountId() {
    return this.getNumberAttribute('account_id');
  }
  public set accountId(value: number) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // apply_to_new_assets - computed: false, optional: true, required: false
  private _applyToNewAssets?: string; 
  public get applyToNewAssets() {
    return this.getStringAttribute('apply_to_new_assets');
  }
  public set applyToNewAssets(value: string) {
    this._applyToNewAssets = value;
  }
  public resetApplyToNewAssets() {
    this._applyToNewAssets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyToNewAssetsInput() {
    return this._applyToNewAssets;
  }

  // apply_to_new_sub_accounts - computed: false, optional: true, required: false
  private _applyToNewSubAccounts?: string; 
  public get applyToNewSubAccounts() {
    return this.getStringAttribute('apply_to_new_sub_accounts');
  }
  public set applyToNewSubAccounts(value: string) {
    this._applyToNewSubAccounts = value;
  }
  public resetApplyToNewSubAccounts() {
    this._applyToNewSubAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyToNewSubAccountsInput() {
    return this._applyToNewSubAccounts;
  }

  // emailchannel_external_recipient_list - computed: false, optional: true, required: false
  private _emailchannelExternalRecipientList?: string[]; 
  public get emailchannelExternalRecipientList() {
    return this.getListAttribute('emailchannel_external_recipient_list');
  }
  public set emailchannelExternalRecipientList(value: string[]) {
    this._emailchannelExternalRecipientList = value;
  }
  public resetEmailchannelExternalRecipientList() {
    this._emailchannelExternalRecipientList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailchannelExternalRecipientListInput() {
    return this._emailchannelExternalRecipientList;
  }

  // emailchannel_user_recipient_list - computed: false, optional: true, required: false
  private _emailchannelUserRecipientList?: number[]; 
  public get emailchannelUserRecipientList() {
    return this.getNumberListAttribute('emailchannel_user_recipient_list');
  }
  public set emailchannelUserRecipientList(value: number[]) {
    this._emailchannelUserRecipientList = value;
  }
  public resetEmailchannelUserRecipientList() {
    this._emailchannelUserRecipientList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailchannelUserRecipientListInput() {
    return this._emailchannelUserRecipientList;
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

  // policy_name - computed: false, optional: false, required: true
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }

  // policy_type - computed: false, optional: true, required: false
  private _policyType?: string; 
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }
  public set policyType(value: string) {
    this._policyType = value;
  }
  public resetPolicyType() {
    this._policyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTypeInput() {
    return this._policyType;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // sub_account_list - computed: false, optional: true, required: false
  private _subAccountList?: number[]; 
  public get subAccountList() {
    return this.getNumberListAttribute('sub_account_list');
  }
  public set subAccountList(value: number[]) {
    this._subAccountList = value;
  }
  public resetSubAccountList() {
    this._subAccountList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subAccountListInput() {
    return this._subAccountList;
  }

  // sub_category - computed: false, optional: false, required: true
  private _subCategory?: string; 
  public get subCategory() {
    return this.getStringAttribute('sub_category');
  }
  public set subCategory(value: string) {
    this._subCategory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subCategoryInput() {
    return this._subCategory;
  }

  // asset - computed: false, optional: true, required: false
  private _asset = new NotificationCenterPolicyAssetList(this, "asset", true);
  public get asset() {
    return this._asset;
  }
  public putAsset(value: NotificationCenterPolicyAsset[] | cdktf.IResolvable) {
    this._asset.internalValue = value;
  }
  public resetAsset() {
    this._asset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetInput() {
    return this._asset.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.numberToTerraform(this._accountId),
      apply_to_new_assets: cdktf.stringToTerraform(this._applyToNewAssets),
      apply_to_new_sub_accounts: cdktf.stringToTerraform(this._applyToNewSubAccounts),
      emailchannel_external_recipient_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._emailchannelExternalRecipientList),
      emailchannel_user_recipient_list: cdktf.listMapper(cdktf.numberToTerraform, false)(this._emailchannelUserRecipientList),
      id: cdktf.stringToTerraform(this._id),
      policy_name: cdktf.stringToTerraform(this._policyName),
      policy_type: cdktf.stringToTerraform(this._policyType),
      status: cdktf.stringToTerraform(this._status),
      sub_account_list: cdktf.listMapper(cdktf.numberToTerraform, false)(this._subAccountList),
      sub_category: cdktf.stringToTerraform(this._subCategory),
      asset: cdktf.listMapper(notificationCenterPolicyAssetToTerraform, true)(this._asset.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.numberToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      apply_to_new_assets: {
        value: cdktf.stringToHclTerraform(this._applyToNewAssets),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      apply_to_new_sub_accounts: {
        value: cdktf.stringToHclTerraform(this._applyToNewSubAccounts),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      emailchannel_external_recipient_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._emailchannelExternalRecipientList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      emailchannel_user_recipient_list: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._emailchannelUserRecipientList),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_name: {
        value: cdktf.stringToHclTerraform(this._policyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_type: {
        value: cdktf.stringToHclTerraform(this._policyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sub_account_list: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._subAccountList),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      sub_category: {
        value: cdktf.stringToHclTerraform(this._subCategory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      asset: {
        value: cdktf.listMapperHcl(notificationCenterPolicyAssetToHclTerraform, true)(this._asset.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NotificationCenterPolicyAssetList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
