// https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/organizationmanager_os_login_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataYandexOrganizationmanagerOsLoginSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/organizationmanager_os_login_settings#id DataYandexOrganizationmanagerOsLoginSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/organizationmanager_os_login_settings#organization_id DataYandexOrganizationmanagerOsLoginSettings#organization_id}
  */
  readonly organizationId?: string;
  /**
  * ssh_certificate_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/organizationmanager_os_login_settings#ssh_certificate_settings DataYandexOrganizationmanagerOsLoginSettings#ssh_certificate_settings}
  */
  readonly sshCertificateSettings?: DataYandexOrganizationmanagerOsLoginSettingsSshCertificateSettings;
  /**
  * user_ssh_key_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/organizationmanager_os_login_settings#user_ssh_key_settings DataYandexOrganizationmanagerOsLoginSettings#user_ssh_key_settings}
  */
  readonly userSshKeySettings?: DataYandexOrganizationmanagerOsLoginSettingsUserSshKeySettings;
}
export interface DataYandexOrganizationmanagerOsLoginSettingsSshCertificateSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/organizationmanager_os_login_settings#enabled DataYandexOrganizationmanagerOsLoginSettings#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataYandexOrganizationmanagerOsLoginSettingsSshCertificateSettingsToTerraform(struct?: DataYandexOrganizationmanagerOsLoginSettingsSshCertificateSettingsOutputReference | DataYandexOrganizationmanagerOsLoginSettingsSshCertificateSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataYandexOrganizationmanagerOsLoginSettingsSshCertificateSettingsToHclTerraform(struct?: DataYandexOrganizationmanagerOsLoginSettingsSshCertificateSettingsOutputReference | DataYandexOrganizationmanagerOsLoginSettingsSshCertificateSettings): any {
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

export class DataYandexOrganizationmanagerOsLoginSettingsSshCertificateSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexOrganizationmanagerOsLoginSettingsSshCertificateSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexOrganizationmanagerOsLoginSettingsSshCertificateSettings | undefined) {
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
export interface DataYandexOrganizationmanagerOsLoginSettingsUserSshKeySettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/organizationmanager_os_login_settings#allow_manage_own_keys DataYandexOrganizationmanagerOsLoginSettings#allow_manage_own_keys}
  */
  readonly allowManageOwnKeys?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/organizationmanager_os_login_settings#enabled DataYandexOrganizationmanagerOsLoginSettings#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataYandexOrganizationmanagerOsLoginSettingsUserSshKeySettingsToTerraform(struct?: DataYandexOrganizationmanagerOsLoginSettingsUserSshKeySettingsOutputReference | DataYandexOrganizationmanagerOsLoginSettingsUserSshKeySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_manage_own_keys: cdktf.booleanToTerraform(struct!.allowManageOwnKeys),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataYandexOrganizationmanagerOsLoginSettingsUserSshKeySettingsToHclTerraform(struct?: DataYandexOrganizationmanagerOsLoginSettingsUserSshKeySettingsOutputReference | DataYandexOrganizationmanagerOsLoginSettingsUserSshKeySettings): any {
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

export class DataYandexOrganizationmanagerOsLoginSettingsUserSshKeySettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexOrganizationmanagerOsLoginSettingsUserSshKeySettings | undefined {
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

  public set internalValue(value: DataYandexOrganizationmanagerOsLoginSettingsUserSshKeySettings | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/organizationmanager_os_login_settings yandex_organizationmanager_os_login_settings}
*/
export class DataYandexOrganizationmanagerOsLoginSettings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_organizationmanager_os_login_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataYandexOrganizationmanagerOsLoginSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataYandexOrganizationmanagerOsLoginSettings to import
  * @param importFromId The id of the existing DataYandexOrganizationmanagerOsLoginSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/organizationmanager_os_login_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataYandexOrganizationmanagerOsLoginSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_organizationmanager_os_login_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/organizationmanager_os_login_settings yandex_organizationmanager_os_login_settings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataYandexOrganizationmanagerOsLoginSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataYandexOrganizationmanagerOsLoginSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'yandex_organizationmanager_os_login_settings',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.176.0',
        providerVersionConstraint: '0.176.0'
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

  // organization_id - computed: true, optional: true, required: false
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  public resetOrganizationId() {
    this._organizationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // ssh_certificate_settings - computed: false, optional: true, required: false
  private _sshCertificateSettings = new DataYandexOrganizationmanagerOsLoginSettingsSshCertificateSettingsOutputReference(this, "ssh_certificate_settings");
  public get sshCertificateSettings() {
    return this._sshCertificateSettings;
  }
  public putSshCertificateSettings(value: DataYandexOrganizationmanagerOsLoginSettingsSshCertificateSettings) {
    this._sshCertificateSettings.internalValue = value;
  }
  public resetSshCertificateSettings() {
    this._sshCertificateSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshCertificateSettingsInput() {
    return this._sshCertificateSettings.internalValue;
  }

  // user_ssh_key_settings - computed: false, optional: true, required: false
  private _userSshKeySettings = new DataYandexOrganizationmanagerOsLoginSettingsUserSshKeySettingsOutputReference(this, "user_ssh_key_settings");
  public get userSshKeySettings() {
    return this._userSshKeySettings;
  }
  public putUserSshKeySettings(value: DataYandexOrganizationmanagerOsLoginSettingsUserSshKeySettings) {
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
      ssh_certificate_settings: dataYandexOrganizationmanagerOsLoginSettingsSshCertificateSettingsToTerraform(this._sshCertificateSettings.internalValue),
      user_ssh_key_settings: dataYandexOrganizationmanagerOsLoginSettingsUserSshKeySettingsToTerraform(this._userSshKeySettings.internalValue),
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
        value: dataYandexOrganizationmanagerOsLoginSettingsSshCertificateSettingsToHclTerraform(this._sshCertificateSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataYandexOrganizationmanagerOsLoginSettingsSshCertificateSettingsList",
      },
      user_ssh_key_settings: {
        value: dataYandexOrganizationmanagerOsLoginSettingsUserSshKeySettingsToHclTerraform(this._userSshKeySettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataYandexOrganizationmanagerOsLoginSettingsUserSshKeySettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
