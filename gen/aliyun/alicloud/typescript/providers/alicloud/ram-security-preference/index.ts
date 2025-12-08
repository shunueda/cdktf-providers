// https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ram_security_preference
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RamSecurityPreferenceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ram_security_preference#allow_user_to_change_password RamSecurityPreference#allow_user_to_change_password}
  */
  readonly allowUserToChangePassword?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ram_security_preference#allow_user_to_login_with_passkey RamSecurityPreference#allow_user_to_login_with_passkey}
  */
  readonly allowUserToLoginWithPasskey?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ram_security_preference#allow_user_to_manage_access_keys RamSecurityPreference#allow_user_to_manage_access_keys}
  */
  readonly allowUserToManageAccessKeys?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ram_security_preference#allow_user_to_manage_mfa_devices RamSecurityPreference#allow_user_to_manage_mfa_devices}
  */
  readonly allowUserToManageMfaDevices?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ram_security_preference#allow_user_to_manage_personal_ding_talk RamSecurityPreference#allow_user_to_manage_personal_ding_talk}
  */
  readonly allowUserToManagePersonalDingTalk?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ram_security_preference#enable_save_mfa_ticket RamSecurityPreference#enable_save_mfa_ticket}
  */
  readonly enableSaveMfaTicket?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ram_security_preference#enforce_mfa_for_login RamSecurityPreference#enforce_mfa_for_login}
  */
  readonly enforceMfaForLogin?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ram_security_preference#id RamSecurityPreference#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ram_security_preference#login_network_masks RamSecurityPreference#login_network_masks}
  */
  readonly loginNetworkMasks?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ram_security_preference#login_session_duration RamSecurityPreference#login_session_duration}
  */
  readonly loginSessionDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ram_security_preference#mfa_operation_for_login RamSecurityPreference#mfa_operation_for_login}
  */
  readonly mfaOperationForLogin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ram_security_preference#operation_for_risk_login RamSecurityPreference#operation_for_risk_login}
  */
  readonly operationForRiskLogin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ram_security_preference#verification_types RamSecurityPreference#verification_types}
  */
  readonly verificationTypes?: string[];
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ram_security_preference#timeouts RamSecurityPreference#timeouts}
  */
  readonly timeouts?: RamSecurityPreferenceTimeouts;
}
export interface RamSecurityPreferenceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ram_security_preference#create RamSecurityPreference#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ram_security_preference#delete RamSecurityPreference#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ram_security_preference#update RamSecurityPreference#update}
  */
  readonly update?: string;
}

export function ramSecurityPreferenceTimeoutsToTerraform(struct?: RamSecurityPreferenceTimeouts | cdktf.IResolvable): any {
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


export function ramSecurityPreferenceTimeoutsToHclTerraform(struct?: RamSecurityPreferenceTimeouts | cdktf.IResolvable): any {
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

export class RamSecurityPreferenceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RamSecurityPreferenceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RamSecurityPreferenceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ram_security_preference alicloud_ram_security_preference}
*/
export class RamSecurityPreference extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_ram_security_preference";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RamSecurityPreference resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RamSecurityPreference to import
  * @param importFromId The id of the existing RamSecurityPreference that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ram_security_preference#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RamSecurityPreference to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_ram_security_preference", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ram_security_preference alicloud_ram_security_preference} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RamSecurityPreferenceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RamSecurityPreferenceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_ram_security_preference',
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
    this._allowUserToChangePassword = config.allowUserToChangePassword;
    this._allowUserToLoginWithPasskey = config.allowUserToLoginWithPasskey;
    this._allowUserToManageAccessKeys = config.allowUserToManageAccessKeys;
    this._allowUserToManageMfaDevices = config.allowUserToManageMfaDevices;
    this._allowUserToManagePersonalDingTalk = config.allowUserToManagePersonalDingTalk;
    this._enableSaveMfaTicket = config.enableSaveMfaTicket;
    this._enforceMfaForLogin = config.enforceMfaForLogin;
    this._id = config.id;
    this._loginNetworkMasks = config.loginNetworkMasks;
    this._loginSessionDuration = config.loginSessionDuration;
    this._mfaOperationForLogin = config.mfaOperationForLogin;
    this._operationForRiskLogin = config.operationForRiskLogin;
    this._verificationTypes = config.verificationTypes;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_user_to_change_password - computed: true, optional: true, required: false
  private _allowUserToChangePassword?: boolean | cdktf.IResolvable; 
  public get allowUserToChangePassword() {
    return this.getBooleanAttribute('allow_user_to_change_password');
  }
  public set allowUserToChangePassword(value: boolean | cdktf.IResolvable) {
    this._allowUserToChangePassword = value;
  }
  public resetAllowUserToChangePassword() {
    this._allowUserToChangePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUserToChangePasswordInput() {
    return this._allowUserToChangePassword;
  }

  // allow_user_to_login_with_passkey - computed: true, optional: true, required: false
  private _allowUserToLoginWithPasskey?: boolean | cdktf.IResolvable; 
  public get allowUserToLoginWithPasskey() {
    return this.getBooleanAttribute('allow_user_to_login_with_passkey');
  }
  public set allowUserToLoginWithPasskey(value: boolean | cdktf.IResolvable) {
    this._allowUserToLoginWithPasskey = value;
  }
  public resetAllowUserToLoginWithPasskey() {
    this._allowUserToLoginWithPasskey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUserToLoginWithPasskeyInput() {
    return this._allowUserToLoginWithPasskey;
  }

  // allow_user_to_manage_access_keys - computed: true, optional: true, required: false
  private _allowUserToManageAccessKeys?: boolean | cdktf.IResolvable; 
  public get allowUserToManageAccessKeys() {
    return this.getBooleanAttribute('allow_user_to_manage_access_keys');
  }
  public set allowUserToManageAccessKeys(value: boolean | cdktf.IResolvable) {
    this._allowUserToManageAccessKeys = value;
  }
  public resetAllowUserToManageAccessKeys() {
    this._allowUserToManageAccessKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUserToManageAccessKeysInput() {
    return this._allowUserToManageAccessKeys;
  }

  // allow_user_to_manage_mfa_devices - computed: true, optional: true, required: false
  private _allowUserToManageMfaDevices?: boolean | cdktf.IResolvable; 
  public get allowUserToManageMfaDevices() {
    return this.getBooleanAttribute('allow_user_to_manage_mfa_devices');
  }
  public set allowUserToManageMfaDevices(value: boolean | cdktf.IResolvable) {
    this._allowUserToManageMfaDevices = value;
  }
  public resetAllowUserToManageMfaDevices() {
    this._allowUserToManageMfaDevices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUserToManageMfaDevicesInput() {
    return this._allowUserToManageMfaDevices;
  }

  // allow_user_to_manage_personal_ding_talk - computed: true, optional: true, required: false
  private _allowUserToManagePersonalDingTalk?: boolean | cdktf.IResolvable; 
  public get allowUserToManagePersonalDingTalk() {
    return this.getBooleanAttribute('allow_user_to_manage_personal_ding_talk');
  }
  public set allowUserToManagePersonalDingTalk(value: boolean | cdktf.IResolvable) {
    this._allowUserToManagePersonalDingTalk = value;
  }
  public resetAllowUserToManagePersonalDingTalk() {
    this._allowUserToManagePersonalDingTalk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUserToManagePersonalDingTalkInput() {
    return this._allowUserToManagePersonalDingTalk;
  }

  // enable_save_mfa_ticket - computed: true, optional: true, required: false
  private _enableSaveMfaTicket?: boolean | cdktf.IResolvable; 
  public get enableSaveMfaTicket() {
    return this.getBooleanAttribute('enable_save_mfa_ticket');
  }
  public set enableSaveMfaTicket(value: boolean | cdktf.IResolvable) {
    this._enableSaveMfaTicket = value;
  }
  public resetEnableSaveMfaTicket() {
    this._enableSaveMfaTicket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSaveMfaTicketInput() {
    return this._enableSaveMfaTicket;
  }

  // enforce_mfa_for_login - computed: true, optional: true, required: false
  private _enforceMfaForLogin?: boolean | cdktf.IResolvable; 
  public get enforceMfaForLogin() {
    return this.getBooleanAttribute('enforce_mfa_for_login');
  }
  public set enforceMfaForLogin(value: boolean | cdktf.IResolvable) {
    this._enforceMfaForLogin = value;
  }
  public resetEnforceMfaForLogin() {
    this._enforceMfaForLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceMfaForLoginInput() {
    return this._enforceMfaForLogin;
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

  // login_network_masks - computed: false, optional: true, required: false
  private _loginNetworkMasks?: string; 
  public get loginNetworkMasks() {
    return this.getStringAttribute('login_network_masks');
  }
  public set loginNetworkMasks(value: string) {
    this._loginNetworkMasks = value;
  }
  public resetLoginNetworkMasks() {
    this._loginNetworkMasks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginNetworkMasksInput() {
    return this._loginNetworkMasks;
  }

  // login_session_duration - computed: true, optional: true, required: false
  private _loginSessionDuration?: number; 
  public get loginSessionDuration() {
    return this.getNumberAttribute('login_session_duration');
  }
  public set loginSessionDuration(value: number) {
    this._loginSessionDuration = value;
  }
  public resetLoginSessionDuration() {
    this._loginSessionDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginSessionDurationInput() {
    return this._loginSessionDuration;
  }

  // mfa_operation_for_login - computed: true, optional: true, required: false
  private _mfaOperationForLogin?: string; 
  public get mfaOperationForLogin() {
    return this.getStringAttribute('mfa_operation_for_login');
  }
  public set mfaOperationForLogin(value: string) {
    this._mfaOperationForLogin = value;
  }
  public resetMfaOperationForLogin() {
    this._mfaOperationForLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaOperationForLoginInput() {
    return this._mfaOperationForLogin;
  }

  // operation_for_risk_login - computed: true, optional: true, required: false
  private _operationForRiskLogin?: string; 
  public get operationForRiskLogin() {
    return this.getStringAttribute('operation_for_risk_login');
  }
  public set operationForRiskLogin(value: string) {
    this._operationForRiskLogin = value;
  }
  public resetOperationForRiskLogin() {
    this._operationForRiskLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationForRiskLoginInput() {
    return this._operationForRiskLogin;
  }

  // verification_types - computed: false, optional: true, required: false
  private _verificationTypes?: string[]; 
  public get verificationTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('verification_types'));
  }
  public set verificationTypes(value: string[]) {
    this._verificationTypes = value;
  }
  public resetVerificationTypes() {
    this._verificationTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verificationTypesInput() {
    return this._verificationTypes;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new RamSecurityPreferenceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: RamSecurityPreferenceTimeouts) {
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
      allow_user_to_change_password: cdktf.booleanToTerraform(this._allowUserToChangePassword),
      allow_user_to_login_with_passkey: cdktf.booleanToTerraform(this._allowUserToLoginWithPasskey),
      allow_user_to_manage_access_keys: cdktf.booleanToTerraform(this._allowUserToManageAccessKeys),
      allow_user_to_manage_mfa_devices: cdktf.booleanToTerraform(this._allowUserToManageMfaDevices),
      allow_user_to_manage_personal_ding_talk: cdktf.booleanToTerraform(this._allowUserToManagePersonalDingTalk),
      enable_save_mfa_ticket: cdktf.booleanToTerraform(this._enableSaveMfaTicket),
      enforce_mfa_for_login: cdktf.booleanToTerraform(this._enforceMfaForLogin),
      id: cdktf.stringToTerraform(this._id),
      login_network_masks: cdktf.stringToTerraform(this._loginNetworkMasks),
      login_session_duration: cdktf.numberToTerraform(this._loginSessionDuration),
      mfa_operation_for_login: cdktf.stringToTerraform(this._mfaOperationForLogin),
      operation_for_risk_login: cdktf.stringToTerraform(this._operationForRiskLogin),
      verification_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._verificationTypes),
      timeouts: ramSecurityPreferenceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_user_to_change_password: {
        value: cdktf.booleanToHclTerraform(this._allowUserToChangePassword),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_user_to_login_with_passkey: {
        value: cdktf.booleanToHclTerraform(this._allowUserToLoginWithPasskey),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_user_to_manage_access_keys: {
        value: cdktf.booleanToHclTerraform(this._allowUserToManageAccessKeys),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_user_to_manage_mfa_devices: {
        value: cdktf.booleanToHclTerraform(this._allowUserToManageMfaDevices),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_user_to_manage_personal_ding_talk: {
        value: cdktf.booleanToHclTerraform(this._allowUserToManagePersonalDingTalk),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_save_mfa_ticket: {
        value: cdktf.booleanToHclTerraform(this._enableSaveMfaTicket),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enforce_mfa_for_login: {
        value: cdktf.booleanToHclTerraform(this._enforceMfaForLogin),
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
      login_network_masks: {
        value: cdktf.stringToHclTerraform(this._loginNetworkMasks),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      login_session_duration: {
        value: cdktf.numberToHclTerraform(this._loginSessionDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mfa_operation_for_login: {
        value: cdktf.stringToHclTerraform(this._mfaOperationForLogin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      operation_for_risk_login: {
        value: cdktf.stringToHclTerraform(this._operationForRiskLogin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      verification_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._verificationTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      timeouts: {
        value: ramSecurityPreferenceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RamSecurityPreferenceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
