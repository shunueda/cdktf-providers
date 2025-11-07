// https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/organizationmanager_os_login_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationmanagerOsLoginSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/organizationmanager_os_login_settings#id OrganizationmanagerOsLoginSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The organization to manage it's OsLogin Settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/organizationmanager_os_login_settings#organization_id OrganizationmanagerOsLoginSettings#organization_id}
  */
  readonly organizationId: string;
  /**
  * ssh_certificate_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/organizationmanager_os_login_settings#ssh_certificate_settings OrganizationmanagerOsLoginSettings#ssh_certificate_settings}
  */
  readonly sshCertificateSettings?: OrganizationmanagerOsLoginSettingsSshCertificateSettings;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/organizationmanager_os_login_settings#timeouts OrganizationmanagerOsLoginSettings#timeouts}
  */
  readonly timeouts?: OrganizationmanagerOsLoginSettingsTimeouts;
  /**
  * user_ssh_key_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/organizationmanager_os_login_settings#user_ssh_key_settings OrganizationmanagerOsLoginSettings#user_ssh_key_settings}
  */
  readonly userSshKeySettings?: OrganizationmanagerOsLoginSettingsUserSshKeySettings;
}
export interface OrganizationmanagerOsLoginSettingsSshCertificateSettings {
  /**
  * Enables or disables usage of SSH certificates signed by trusted Certification Authority (CA).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/organizationmanager_os_login_settings#enabled OrganizationmanagerOsLoginSettings#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function organizationmanagerOsLoginSettingsSshCertificateSettingsToTerraform(struct?: OrganizationmanagerOsLoginSettingsSshCertificateSettingsOutputReference | OrganizationmanagerOsLoginSettingsSshCertificateSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function organizationmanagerOsLoginSettingsSshCertificateSettingsToHclTerraform(struct?: OrganizationmanagerOsLoginSettingsSshCertificateSettingsOutputReference | OrganizationmanagerOsLoginSettingsSshCertificateSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationmanagerOsLoginSettingsSshCertificateSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrganizationmanagerOsLoginSettingsSshCertificateSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationmanagerOsLoginSettingsSshCertificateSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface OrganizationmanagerOsLoginSettingsTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/organizationmanager_os_login_settings#create OrganizationmanagerOsLoginSettings#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/organizationmanager_os_login_settings#delete OrganizationmanagerOsLoginSettings#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/organizationmanager_os_login_settings#read OrganizationmanagerOsLoginSettings#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/organizationmanager_os_login_settings#update OrganizationmanagerOsLoginSettings#update}
  */
  readonly update?: string;
}

export function organizationmanagerOsLoginSettingsTimeoutsToTerraform(struct?: OrganizationmanagerOsLoginSettingsTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function organizationmanagerOsLoginSettingsTimeoutsToHclTerraform(struct?: OrganizationmanagerOsLoginSettingsTimeouts | cdktf.IResolvable): any {
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
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

export class OrganizationmanagerOsLoginSettingsTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrganizationmanagerOsLoginSettingsTimeouts | cdktf.IResolvable | undefined {
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
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationmanagerOsLoginSettingsTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._read = value.read;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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
export interface OrganizationmanagerOsLoginSettingsUserSshKeySettings {
  /**
  * If set to true subject is allowed to manage own ssh keys without having to be assigned specific permissions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/organizationmanager_os_login_settings#allow_manage_own_keys OrganizationmanagerOsLoginSettings#allow_manage_own_keys}
  */
  readonly allowManageOwnKeys?: boolean | cdktf.IResolvable;
  /**
  * Enables or disables usage of ssh keys assigned to a specific subject.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/organizationmanager_os_login_settings#enabled OrganizationmanagerOsLoginSettings#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function organizationmanagerOsLoginSettingsUserSshKeySettingsToTerraform(struct?: OrganizationmanagerOsLoginSettingsUserSshKeySettingsOutputReference | OrganizationmanagerOsLoginSettingsUserSshKeySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_manage_own_keys: cdktf.booleanToTerraform(struct!.allowManageOwnKeys),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function organizationmanagerOsLoginSettingsUserSshKeySettingsToHclTerraform(struct?: OrganizationmanagerOsLoginSettingsUserSshKeySettingsOutputReference | OrganizationmanagerOsLoginSettingsUserSshKeySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_manage_own_keys: {
      value: cdktf.booleanToHclTerraform(struct!.allowManageOwnKeys),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationmanagerOsLoginSettingsUserSshKeySettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrganizationmanagerOsLoginSettingsUserSshKeySettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowManageOwnKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowManageOwnKeys = this._allowManageOwnKeys;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationmanagerOsLoginSettingsUserSshKeySettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowManageOwnKeys = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowManageOwnKeys = value.allowManageOwnKeys;
      this._enabled = value.enabled;
    }
  }

  // allow_manage_own_keys - computed: false, optional: true, required: false
  private _allowManageOwnKeys?: boolean | cdktf.IResolvable; 
  public get allowManageOwnKeys() {
    return this.getBooleanAttribute('allow_manage_own_keys');
  }
  public set allowManageOwnKeys(value: boolean | cdktf.IResolvable) {
    this._allowManageOwnKeys = value;
  }
  public resetAllowManageOwnKeys() {
    this._allowManageOwnKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowManageOwnKeysInput() {
    return this._allowManageOwnKeys;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/organizationmanager_os_login_settings yandex_organizationmanager_os_login_settings}
*/
export class OrganizationmanagerOsLoginSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_organizationmanager_os_login_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrganizationmanagerOsLoginSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationmanagerOsLoginSettings to import
  * @param importFromId The id of the existing OrganizationmanagerOsLoginSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/organizationmanager_os_login_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationmanagerOsLoginSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_organizationmanager_os_login_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/organizationmanager_os_login_settings yandex_organizationmanager_os_login_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationmanagerOsLoginSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationmanagerOsLoginSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_organizationmanager_os_login_settings',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.169.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._organizationId = config.organizationId;
    this._sshCertificateSettings.internalValue = config.sshCertificateSettings;
    this._timeouts.internalValue = config.timeouts;
    this._userSshKeySettings.internalValue = config.userSshKeySettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // ssh_certificate_settings - computed: false, optional: true, required: false
  private _sshCertificateSettings = new OrganizationmanagerOsLoginSettingsSshCertificateSettingsOutputReference(this, "ssh_certificate_settings");
  public get sshCertificateSettings() {
    return this._sshCertificateSettings;
  }
  public putSshCertificateSettings(value: OrganizationmanagerOsLoginSettingsSshCertificateSettings) {
    this._sshCertificateSettings.internalValue = value;
  }
  public resetSshCertificateSettings() {
    this._sshCertificateSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshCertificateSettingsInput() {
    return this._sshCertificateSettings.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OrganizationmanagerOsLoginSettingsTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OrganizationmanagerOsLoginSettingsTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // user_ssh_key_settings - computed: false, optional: true, required: false
  private _userSshKeySettings = new OrganizationmanagerOsLoginSettingsUserSshKeySettingsOutputReference(this, "user_ssh_key_settings");
  public get userSshKeySettings() {
    return this._userSshKeySettings;
  }
  public putUserSshKeySettings(value: OrganizationmanagerOsLoginSettingsUserSshKeySettings) {
    this._userSshKeySettings.internalValue = value;
  }
  public resetUserSshKeySettings() {
    this._userSshKeySettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSshKeySettingsInput() {
    return this._userSshKeySettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      ssh_certificate_settings: organizationmanagerOsLoginSettingsSshCertificateSettingsToTerraform(this._sshCertificateSettings.internalValue),
      timeouts: organizationmanagerOsLoginSettingsTimeoutsToTerraform(this._timeouts.internalValue),
      user_ssh_key_settings: organizationmanagerOsLoginSettingsUserSshKeySettingsToTerraform(this._userSshKeySettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_certificate_settings: {
        value: organizationmanagerOsLoginSettingsSshCertificateSettingsToHclTerraform(this._sshCertificateSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OrganizationmanagerOsLoginSettingsSshCertificateSettingsList",
      },
      timeouts: {
        value: organizationmanagerOsLoginSettingsTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrganizationmanagerOsLoginSettingsTimeouts",
      },
      user_ssh_key_settings: {
        value: organizationmanagerOsLoginSettingsUserSshKeySettingsToHclTerraform(this._userSshKeySettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OrganizationmanagerOsLoginSettingsUserSshKeySettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
