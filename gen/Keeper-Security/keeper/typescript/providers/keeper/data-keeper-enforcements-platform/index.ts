// https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_platform
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataKeeperEnforcementsPlatformAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Restrict access to Keeper Chat for desktop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_platform#restrict_chat_desktop_access DataKeeperEnforcementsPlatformA#restrict_chat_desktop_access}
  */
  readonly restrictChatDesktopAccess?: boolean | cdktf.IResolvable;
  /**
  * Restrict access to Keeper Chat for mobile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_platform#restrict_chat_mobile_access DataKeeperEnforcementsPlatformA#restrict_chat_mobile_access}
  */
  readonly restrictChatMobileAccess?: boolean | cdktf.IResolvable;
  /**
  * Restrict access to Keeper Commander
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_platform#restrict_commander_access DataKeeperEnforcementsPlatformA#restrict_commander_access}
  */
  readonly restrictCommanderAccess?: boolean | cdktf.IResolvable;
  /**
  * Restrict access to Keeper Vault for desktop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_platform#restrict_desktop_access DataKeeperEnforcementsPlatformA#restrict_desktop_access}
  */
  readonly restrictDesktopAccess?: boolean | cdktf.IResolvable;
  /**
  * Restrict access to Keeper Desktop for MacOS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_platform#restrict_desktop_mac_access DataKeeperEnforcementsPlatformA#restrict_desktop_mac_access}
  */
  readonly restrictDesktopMacAccess?: boolean | cdktf.IResolvable;
  /**
  * Restrict access to Keeper Desktop for Windows
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_platform#restrict_desktop_win_access DataKeeperEnforcementsPlatformA#restrict_desktop_win_access}
  */
  readonly restrictDesktopWinAccess?: boolean | cdktf.IResolvable;
  /**
  * Restrict access to Keeper browser extensions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_platform#restrict_extensions_access DataKeeperEnforcementsPlatformA#restrict_extensions_access}
  */
  readonly restrictExtensionsAccess?: boolean | cdktf.IResolvable;
  /**
  * Restrict access to Keeper Vault for mobile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_platform#restrict_mobile_access DataKeeperEnforcementsPlatformA#restrict_mobile_access}
  */
  readonly restrictMobileAccess?: boolean | cdktf.IResolvable;
  /**
  * Restrict access to Keeper Vault for Android
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_platform#restrict_mobile_android_access DataKeeperEnforcementsPlatformA#restrict_mobile_android_access}
  */
  readonly restrictMobileAndroidAccess?: boolean | cdktf.IResolvable;
  /**
  * Restrict access to Keeper Vault for iOS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_platform#restrict_mobile_ios_access DataKeeperEnforcementsPlatformA#restrict_mobile_ios_access}
  */
  readonly restrictMobileIosAccess?: boolean | cdktf.IResolvable;
  /**
  * Restrict access to Keeper Vault for Windows mobile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_platform#restrict_mobile_windows_phone_access DataKeeperEnforcementsPlatformA#restrict_mobile_windows_phone_access}
  */
  readonly restrictMobileWindowsPhoneAccess?: boolean | cdktf.IResolvable;
  /**
  * Restrict access to Keeper Vault for web
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_platform#restrict_web_vault_access DataKeeperEnforcementsPlatformA#restrict_web_vault_access}
  */
  readonly restrictWebVaultAccess?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_platform keeper_enforcements_platform}
*/
export class DataKeeperEnforcementsPlatformA extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keeper_enforcements_platform";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataKeeperEnforcementsPlatformA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataKeeperEnforcementsPlatformA to import
  * @param importFromId The id of the existing DataKeeperEnforcementsPlatformA that should be imported. Refer to the {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_platform#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataKeeperEnforcementsPlatformA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keeper_enforcements_platform", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_platform keeper_enforcements_platform} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataKeeperEnforcementsPlatformAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataKeeperEnforcementsPlatformAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'keeper_enforcements_platform',
      terraformGeneratorMetadata: {
        providerName: 'keeper',
        providerVersion: '1.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._restrictChatDesktopAccess = config.restrictChatDesktopAccess;
    this._restrictChatMobileAccess = config.restrictChatMobileAccess;
    this._restrictCommanderAccess = config.restrictCommanderAccess;
    this._restrictDesktopAccess = config.restrictDesktopAccess;
    this._restrictDesktopMacAccess = config.restrictDesktopMacAccess;
    this._restrictDesktopWinAccess = config.restrictDesktopWinAccess;
    this._restrictExtensionsAccess = config.restrictExtensionsAccess;
    this._restrictMobileAccess = config.restrictMobileAccess;
    this._restrictMobileAndroidAccess = config.restrictMobileAndroidAccess;
    this._restrictMobileIosAccess = config.restrictMobileIosAccess;
    this._restrictMobileWindowsPhoneAccess = config.restrictMobileWindowsPhoneAccess;
    this._restrictWebVaultAccess = config.restrictWebVaultAccess;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // restrict_chat_desktop_access - computed: false, optional: true, required: false
  private _restrictChatDesktopAccess?: boolean | cdktf.IResolvable; 
  public get restrictChatDesktopAccess() {
    return this.getBooleanAttribute('restrict_chat_desktop_access');
  }
  public set restrictChatDesktopAccess(value: boolean | cdktf.IResolvable) {
    this._restrictChatDesktopAccess = value;
  }
  public resetRestrictChatDesktopAccess() {
    this._restrictChatDesktopAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictChatDesktopAccessInput() {
    return this._restrictChatDesktopAccess;
  }

  // restrict_chat_mobile_access - computed: false, optional: true, required: false
  private _restrictChatMobileAccess?: boolean | cdktf.IResolvable; 
  public get restrictChatMobileAccess() {
    return this.getBooleanAttribute('restrict_chat_mobile_access');
  }
  public set restrictChatMobileAccess(value: boolean | cdktf.IResolvable) {
    this._restrictChatMobileAccess = value;
  }
  public resetRestrictChatMobileAccess() {
    this._restrictChatMobileAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictChatMobileAccessInput() {
    return this._restrictChatMobileAccess;
  }

  // restrict_commander_access - computed: false, optional: true, required: false
  private _restrictCommanderAccess?: boolean | cdktf.IResolvable; 
  public get restrictCommanderAccess() {
    return this.getBooleanAttribute('restrict_commander_access');
  }
  public set restrictCommanderAccess(value: boolean | cdktf.IResolvable) {
    this._restrictCommanderAccess = value;
  }
  public resetRestrictCommanderAccess() {
    this._restrictCommanderAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictCommanderAccessInput() {
    return this._restrictCommanderAccess;
  }

  // restrict_desktop_access - computed: false, optional: true, required: false
  private _restrictDesktopAccess?: boolean | cdktf.IResolvable; 
  public get restrictDesktopAccess() {
    return this.getBooleanAttribute('restrict_desktop_access');
  }
  public set restrictDesktopAccess(value: boolean | cdktf.IResolvable) {
    this._restrictDesktopAccess = value;
  }
  public resetRestrictDesktopAccess() {
    this._restrictDesktopAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictDesktopAccessInput() {
    return this._restrictDesktopAccess;
  }

  // restrict_desktop_mac_access - computed: false, optional: true, required: false
  private _restrictDesktopMacAccess?: boolean | cdktf.IResolvable; 
  public get restrictDesktopMacAccess() {
    return this.getBooleanAttribute('restrict_desktop_mac_access');
  }
  public set restrictDesktopMacAccess(value: boolean | cdktf.IResolvable) {
    this._restrictDesktopMacAccess = value;
  }
  public resetRestrictDesktopMacAccess() {
    this._restrictDesktopMacAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictDesktopMacAccessInput() {
    return this._restrictDesktopMacAccess;
  }

  // restrict_desktop_win_access - computed: false, optional: true, required: false
  private _restrictDesktopWinAccess?: boolean | cdktf.IResolvable; 
  public get restrictDesktopWinAccess() {
    return this.getBooleanAttribute('restrict_desktop_win_access');
  }
  public set restrictDesktopWinAccess(value: boolean | cdktf.IResolvable) {
    this._restrictDesktopWinAccess = value;
  }
  public resetRestrictDesktopWinAccess() {
    this._restrictDesktopWinAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictDesktopWinAccessInput() {
    return this._restrictDesktopWinAccess;
  }

  // restrict_extensions_access - computed: false, optional: true, required: false
  private _restrictExtensionsAccess?: boolean | cdktf.IResolvable; 
  public get restrictExtensionsAccess() {
    return this.getBooleanAttribute('restrict_extensions_access');
  }
  public set restrictExtensionsAccess(value: boolean | cdktf.IResolvable) {
    this._restrictExtensionsAccess = value;
  }
  public resetRestrictExtensionsAccess() {
    this._restrictExtensionsAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictExtensionsAccessInput() {
    return this._restrictExtensionsAccess;
  }

  // restrict_mobile_access - computed: false, optional: true, required: false
  private _restrictMobileAccess?: boolean | cdktf.IResolvable; 
  public get restrictMobileAccess() {
    return this.getBooleanAttribute('restrict_mobile_access');
  }
  public set restrictMobileAccess(value: boolean | cdktf.IResolvable) {
    this._restrictMobileAccess = value;
  }
  public resetRestrictMobileAccess() {
    this._restrictMobileAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictMobileAccessInput() {
    return this._restrictMobileAccess;
  }

  // restrict_mobile_android_access - computed: false, optional: true, required: false
  private _restrictMobileAndroidAccess?: boolean | cdktf.IResolvable; 
  public get restrictMobileAndroidAccess() {
    return this.getBooleanAttribute('restrict_mobile_android_access');
  }
  public set restrictMobileAndroidAccess(value: boolean | cdktf.IResolvable) {
    this._restrictMobileAndroidAccess = value;
  }
  public resetRestrictMobileAndroidAccess() {
    this._restrictMobileAndroidAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictMobileAndroidAccessInput() {
    return this._restrictMobileAndroidAccess;
  }

  // restrict_mobile_ios_access - computed: false, optional: true, required: false
  private _restrictMobileIosAccess?: boolean | cdktf.IResolvable; 
  public get restrictMobileIosAccess() {
    return this.getBooleanAttribute('restrict_mobile_ios_access');
  }
  public set restrictMobileIosAccess(value: boolean | cdktf.IResolvable) {
    this._restrictMobileIosAccess = value;
  }
  public resetRestrictMobileIosAccess() {
    this._restrictMobileIosAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictMobileIosAccessInput() {
    return this._restrictMobileIosAccess;
  }

  // restrict_mobile_windows_phone_access - computed: false, optional: true, required: false
  private _restrictMobileWindowsPhoneAccess?: boolean | cdktf.IResolvable; 
  public get restrictMobileWindowsPhoneAccess() {
    return this.getBooleanAttribute('restrict_mobile_windows_phone_access');
  }
  public set restrictMobileWindowsPhoneAccess(value: boolean | cdktf.IResolvable) {
    this._restrictMobileWindowsPhoneAccess = value;
  }
  public resetRestrictMobileWindowsPhoneAccess() {
    this._restrictMobileWindowsPhoneAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictMobileWindowsPhoneAccessInput() {
    return this._restrictMobileWindowsPhoneAccess;
  }

  // restrict_web_vault_access - computed: false, optional: true, required: false
  private _restrictWebVaultAccess?: boolean | cdktf.IResolvable; 
  public get restrictWebVaultAccess() {
    return this.getBooleanAttribute('restrict_web_vault_access');
  }
  public set restrictWebVaultAccess(value: boolean | cdktf.IResolvable) {
    this._restrictWebVaultAccess = value;
  }
  public resetRestrictWebVaultAccess() {
    this._restrictWebVaultAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictWebVaultAccessInput() {
    return this._restrictWebVaultAccess;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      restrict_chat_desktop_access: cdktf.booleanToTerraform(this._restrictChatDesktopAccess),
      restrict_chat_mobile_access: cdktf.booleanToTerraform(this._restrictChatMobileAccess),
      restrict_commander_access: cdktf.booleanToTerraform(this._restrictCommanderAccess),
      restrict_desktop_access: cdktf.booleanToTerraform(this._restrictDesktopAccess),
      restrict_desktop_mac_access: cdktf.booleanToTerraform(this._restrictDesktopMacAccess),
      restrict_desktop_win_access: cdktf.booleanToTerraform(this._restrictDesktopWinAccess),
      restrict_extensions_access: cdktf.booleanToTerraform(this._restrictExtensionsAccess),
      restrict_mobile_access: cdktf.booleanToTerraform(this._restrictMobileAccess),
      restrict_mobile_android_access: cdktf.booleanToTerraform(this._restrictMobileAndroidAccess),
      restrict_mobile_ios_access: cdktf.booleanToTerraform(this._restrictMobileIosAccess),
      restrict_mobile_windows_phone_access: cdktf.booleanToTerraform(this._restrictMobileWindowsPhoneAccess),
      restrict_web_vault_access: cdktf.booleanToTerraform(this._restrictWebVaultAccess),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      restrict_chat_desktop_access: {
        value: cdktf.booleanToHclTerraform(this._restrictChatDesktopAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restrict_chat_mobile_access: {
        value: cdktf.booleanToHclTerraform(this._restrictChatMobileAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restrict_commander_access: {
        value: cdktf.booleanToHclTerraform(this._restrictCommanderAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restrict_desktop_access: {
        value: cdktf.booleanToHclTerraform(this._restrictDesktopAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restrict_desktop_mac_access: {
        value: cdktf.booleanToHclTerraform(this._restrictDesktopMacAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restrict_desktop_win_access: {
        value: cdktf.booleanToHclTerraform(this._restrictDesktopWinAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restrict_extensions_access: {
        value: cdktf.booleanToHclTerraform(this._restrictExtensionsAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restrict_mobile_access: {
        value: cdktf.booleanToHclTerraform(this._restrictMobileAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restrict_mobile_android_access: {
        value: cdktf.booleanToHclTerraform(this._restrictMobileAndroidAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restrict_mobile_ios_access: {
        value: cdktf.booleanToHclTerraform(this._restrictMobileIosAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restrict_mobile_windows_phone_access: {
        value: cdktf.booleanToHclTerraform(this._restrictMobileWindowsPhoneAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restrict_web_vault_access: {
        value: cdktf.booleanToHclTerraform(this._restrictWebVaultAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
