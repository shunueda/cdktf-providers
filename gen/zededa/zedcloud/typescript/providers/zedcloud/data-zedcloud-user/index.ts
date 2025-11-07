// https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZedcloudUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Custom user parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/user#custom_user_input DataZedcloudUser#custom_user_input}
  */
  readonly customUserInput?: { [key: string]: string };
  /**
  * Email of the user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/user#email DataZedcloudUser#email}
  */
  readonly email: string;
  /**
  * First name of the user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/user#first_name DataZedcloudUser#first_name}
  */
  readonly firstName?: string;
  /**
  * Full name of the user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/user#full_name DataZedcloudUser#full_name}
  */
  readonly fullName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/user#hubspot_id DataZedcloudUser#hubspot_id}
  */
  readonly hubspotId?: string;
  /**
  * Last login time of the user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/user#last_login_time DataZedcloudUser#last_login_time}
  */
  readonly lastLoginTime?: string;
  /**
  * Last logout time of the user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/user#last_logout_time DataZedcloudUser#last_logout_time}
  */
  readonly lastLogoutTime?: string;
  /**
  * Locale of the user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/user#locale DataZedcloudUser#locale}
  */
  readonly locale?: string;
  /**
  * Notification preference of the user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/user#notify_pref DataZedcloudUser#notify_pref}
  */
  readonly notifyPref?: string;
  /**
  * Phone number of the user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/user#phone DataZedcloudUser#phone}
  */
  readonly phone?: string;
  /**
  * Role associated with the user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/user#role_id DataZedcloudUser#role_id}
  */
  readonly roleId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/user#sfdc_id DataZedcloudUser#sfdc_id}
  */
  readonly sfdcId?: string;
  /**
  * Preferred time zone of the user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/user#time_zone DataZedcloudUser#time_zone}
  */
  readonly timeZone?: string;
  /**
  * Type of the user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/user#type DataZedcloudUser#type}
  */
  readonly type?: string;
  /**
  * User defined name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/user#username DataZedcloudUser#username}
  */
  readonly username: string;
  /**
  * allowed_enterprises block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/user#allowed_enterprises DataZedcloudUser#allowed_enterprises}
  */
  readonly allowedEnterprises?: DataZedcloudUserAllowedEnterprises[] | cdktf.IResolvable;
}
export interface DataZedcloudUserRevision {
}

export function dataZedcloudUserRevisionToTerraform(struct?: DataZedcloudUserRevision): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudUserRevisionToHclTerraform(struct?: DataZedcloudUserRevision): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudUserRevisionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudUserRevision | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudUserRevision | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // curr - computed: true, optional: false, required: false
  public get curr() {
    return this.getStringAttribute('curr');
  }

  // prev - computed: true, optional: false, required: false
  public get prev() {
    return this.getStringAttribute('prev');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }
}

export class DataZedcloudUserRevisionList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudUserRevisionOutputReference {
    return new DataZedcloudUserRevisionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudUserAllowedEnterprises {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/user#name DataZedcloudUser#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/user#role_id DataZedcloudUser#role_id}
  */
  readonly roleId?: string;
}

export function dataZedcloudUserAllowedEnterprisesToTerraform(struct?: DataZedcloudUserAllowedEnterprises | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    role_id: cdktf.stringToTerraform(struct!.roleId),
  }
}


export function dataZedcloudUserAllowedEnterprisesToHclTerraform(struct?: DataZedcloudUserAllowedEnterprises | cdktf.IResolvable): any {
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
    role_id: {
      value: cdktf.stringToHclTerraform(struct!.roleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudUserAllowedEnterprisesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudUserAllowedEnterprises | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._roleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleId = this._roleId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudUserAllowedEnterprises | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._roleId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._roleId = value.roleId;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // role_id - computed: false, optional: true, required: false
  private _roleId?: string; 
  public get roleId() {
    return this.getStringAttribute('role_id');
  }
  public set roleId(value: string) {
    this._roleId = value;
  }
  public resetRoleId() {
    this._roleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdInput() {
    return this._roleId;
  }
}

export class DataZedcloudUserAllowedEnterprisesList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudUserAllowedEnterprises[] | cdktf.IResolvable

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
  public get(index: number): DataZedcloudUserAllowedEnterprisesOutputReference {
    return new DataZedcloudUserAllowedEnterprisesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/user zedcloud_user}
*/
export class DataZedcloudUser extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zedcloud_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZedcloudUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZedcloudUser to import
  * @param importFromId The id of the existing DataZedcloudUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZedcloudUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zedcloud_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/user zedcloud_user} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZedcloudUserConfig
  */
  public constructor(scope: Construct, id: string, config: DataZedcloudUserConfig) {
    super(scope, id, {
      terraformResourceType: 'zedcloud_user',
      terraformGeneratorMetadata: {
        providerName: 'zedcloud',
        providerVersion: '2.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customUserInput = config.customUserInput;
    this._email = config.email;
    this._firstName = config.firstName;
    this._fullName = config.fullName;
    this._hubspotId = config.hubspotId;
    this._lastLoginTime = config.lastLoginTime;
    this._lastLogoutTime = config.lastLogoutTime;
    this._locale = config.locale;
    this._notifyPref = config.notifyPref;
    this._phone = config.phone;
    this._roleId = config.roleId;
    this._sfdcId = config.sfdcId;
    this._timeZone = config.timeZone;
    this._type = config.type;
    this._username = config.username;
    this._allowedEnterprises.internalValue = config.allowedEnterprises;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_user_input - computed: false, optional: true, required: false
  private _customUserInput?: { [key: string]: string }; 
  public get customUserInput() {
    return this.getStringMapAttribute('custom_user_input');
  }
  public set customUserInput(value: { [key: string]: string }) {
    this._customUserInput = value;
  }
  public resetCustomUserInput() {
    this._customUserInput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customUserInputInput() {
    return this._customUserInput;
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // email_state - computed: true, optional: false, required: false
  public get emailState() {
    return this.getStringAttribute('email_state');
  }

  // enterprise_id - computed: true, optional: false, required: false
  public get enterpriseId() {
    return this.getStringAttribute('enterprise_id');
  }

  // first_name - computed: false, optional: true, required: false
  private _firstName?: string; 
  public get firstName() {
    return this.getStringAttribute('first_name');
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  public resetFirstName() {
    this._firstName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameInput() {
    return this._firstName;
  }

  // full_name - computed: false, optional: true, required: false
  private _fullName?: string; 
  public get fullName() {
    return this.getStringAttribute('full_name');
  }
  public set fullName(value: string) {
    this._fullName = value;
  }
  public resetFullName() {
    this._fullName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullNameInput() {
    return this._fullName;
  }

  // hubspot_id - computed: false, optional: true, required: false
  private _hubspotId?: string; 
  public get hubspotId() {
    return this.getStringAttribute('hubspot_id');
  }
  public set hubspotId(value: string) {
    this._hubspotId = value;
  }
  public resetHubspotId() {
    this._hubspotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hubspotIdInput() {
    return this._hubspotId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_login_time - computed: false, optional: true, required: false
  private _lastLoginTime?: string; 
  public get lastLoginTime() {
    return this.getStringAttribute('last_login_time');
  }
  public set lastLoginTime(value: string) {
    this._lastLoginTime = value;
  }
  public resetLastLoginTime() {
    this._lastLoginTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastLoginTimeInput() {
    return this._lastLoginTime;
  }

  // last_logout_time - computed: false, optional: true, required: false
  private _lastLogoutTime?: string; 
  public get lastLogoutTime() {
    return this.getStringAttribute('last_logout_time');
  }
  public set lastLogoutTime(value: string) {
    this._lastLogoutTime = value;
  }
  public resetLastLogoutTime() {
    this._lastLogoutTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastLogoutTimeInput() {
    return this._lastLogoutTime;
  }

  // locale - computed: false, optional: true, required: false
  private _locale?: string; 
  public get locale() {
    return this.getStringAttribute('locale');
  }
  public set locale(value: string) {
    this._locale = value;
  }
  public resetLocale() {
    this._locale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localeInput() {
    return this._locale;
  }

  // notify_pref - computed: false, optional: true, required: false
  private _notifyPref?: string; 
  public get notifyPref() {
    return this.getStringAttribute('notify_pref');
  }
  public set notifyPref(value: string) {
    this._notifyPref = value;
  }
  public resetNotifyPref() {
    this._notifyPref = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyPrefInput() {
    return this._notifyPref;
  }

  // phone - computed: false, optional: true, required: false
  private _phone?: string; 
  public get phone() {
    return this.getStringAttribute('phone');
  }
  public set phone(value: string) {
    this._phone = value;
  }
  public resetPhone() {
    this._phone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneInput() {
    return this._phone;
  }

  // phone_state - computed: true, optional: false, required: false
  public get phoneState() {
    return this.getStringAttribute('phone_state');
  }

  // revision - computed: true, optional: false, required: false
  private _revision = new DataZedcloudUserRevisionList(this, "revision", false);
  public get revision() {
    return this._revision;
  }

  // role_id - computed: false, optional: false, required: true
  private _roleId?: string; 
  public get roleId() {
    return this.getStringAttribute('role_id');
  }
  public set roleId(value: string) {
    this._roleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdInput() {
    return this._roleId;
  }

  // sfdc_id - computed: false, optional: true, required: false
  private _sfdcId?: string; 
  public get sfdcId() {
    return this.getStringAttribute('sfdc_id');
  }
  public set sfdcId(value: string) {
    this._sfdcId = value;
  }
  public resetSfdcId() {
    this._sfdcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sfdcIdInput() {
    return this._sfdcId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_zone - computed: false, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // totp_enabled - computed: true, optional: false, required: false
  public get totpEnabled() {
    return this.getBooleanAttribute('totp_enabled');
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

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // allowed_enterprises - computed: false, optional: true, required: false
  private _allowedEnterprises = new DataZedcloudUserAllowedEnterprisesList(this, "allowed_enterprises", false);
  public get allowedEnterprises() {
    return this._allowedEnterprises;
  }
  public putAllowedEnterprises(value: DataZedcloudUserAllowedEnterprises[] | cdktf.IResolvable) {
    this._allowedEnterprises.internalValue = value;
  }
  public resetAllowedEnterprises() {
    this._allowedEnterprises.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedEnterprisesInput() {
    return this._allowedEnterprises.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_user_input: cdktf.hashMapper(cdktf.stringToTerraform)(this._customUserInput),
      email: cdktf.stringToTerraform(this._email),
      first_name: cdktf.stringToTerraform(this._firstName),
      full_name: cdktf.stringToTerraform(this._fullName),
      hubspot_id: cdktf.stringToTerraform(this._hubspotId),
      last_login_time: cdktf.stringToTerraform(this._lastLoginTime),
      last_logout_time: cdktf.stringToTerraform(this._lastLogoutTime),
      locale: cdktf.stringToTerraform(this._locale),
      notify_pref: cdktf.stringToTerraform(this._notifyPref),
      phone: cdktf.stringToTerraform(this._phone),
      role_id: cdktf.stringToTerraform(this._roleId),
      sfdc_id: cdktf.stringToTerraform(this._sfdcId),
      time_zone: cdktf.stringToTerraform(this._timeZone),
      type: cdktf.stringToTerraform(this._type),
      username: cdktf.stringToTerraform(this._username),
      allowed_enterprises: cdktf.listMapper(dataZedcloudUserAllowedEnterprisesToTerraform, true)(this._allowedEnterprises.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_user_input: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._customUserInput),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      first_name: {
        value: cdktf.stringToHclTerraform(this._firstName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      full_name: {
        value: cdktf.stringToHclTerraform(this._fullName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hubspot_id: {
        value: cdktf.stringToHclTerraform(this._hubspotId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_login_time: {
        value: cdktf.stringToHclTerraform(this._lastLoginTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_logout_time: {
        value: cdktf.stringToHclTerraform(this._lastLogoutTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      locale: {
        value: cdktf.stringToHclTerraform(this._locale),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notify_pref: {
        value: cdktf.stringToHclTerraform(this._notifyPref),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      phone: {
        value: cdktf.stringToHclTerraform(this._phone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_id: {
        value: cdktf.stringToHclTerraform(this._roleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sfdc_id: {
        value: cdktf.stringToHclTerraform(this._sfdcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_zone: {
        value: cdktf.stringToHclTerraform(this._timeZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allowed_enterprises: {
        value: cdktf.listMapperHcl(dataZedcloudUserAllowedEnterprisesToHclTerraform, true)(this._allowedEnterprises.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataZedcloudUserAllowedEnterprisesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
