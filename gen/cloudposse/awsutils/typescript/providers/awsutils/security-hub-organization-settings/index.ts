// https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs/resources/security_hub_organization_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityHubOrganizationSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * A flag to indicate if the automatic enablement setting, should be enabled. If enabled, Security Hub begins to enable new accounts as they are added to the organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs/resources/security_hub_organization_settings#auto_enable_new_accounts SecurityHubOrganizationSettings#auto_enable_new_accounts}
  */
  readonly autoEnableNewAccounts?: boolean | cdktf.IResolvable;
  /**
  * A list of AWS Organization member accounts to associate with the Security Hub Administrator account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs/resources/security_hub_organization_settings#member_accounts SecurityHubOrganizationSettings#member_accounts}
  */
  readonly memberAccounts: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs/resources/security_hub_organization_settings awsutils_security_hub_organization_settings}
*/
export class SecurityHubOrganizationSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awsutils_security_hub_organization_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityHubOrganizationSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityHubOrganizationSettings to import
  * @param importFromId The id of the existing SecurityHubOrganizationSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs/resources/security_hub_organization_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityHubOrganizationSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "awsutils_security_hub_organization_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudposse/awsutils/0.20.1/docs/resources/security_hub_organization_settings awsutils_security_hub_organization_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityHubOrganizationSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityHubOrganizationSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'awsutils_security_hub_organization_settings',
      terraformGeneratorMetadata: {
        providerName: 'awsutils',
        providerVersion: '0.20.1',
        providerVersionConstraint: '0.20.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoEnableNewAccounts = config.autoEnableNewAccounts;
    this._memberAccounts = config.memberAccounts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_enable_new_accounts - computed: false, optional: true, required: false
  private _autoEnableNewAccounts?: boolean | cdktf.IResolvable; 
  public get autoEnableNewAccounts() {
    return this.getBooleanAttribute('auto_enable_new_accounts');
  }
  public set autoEnableNewAccounts(value: boolean | cdktf.IResolvable) {
    this._autoEnableNewAccounts = value;
  }
  public resetAutoEnableNewAccounts() {
    this._autoEnableNewAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoEnableNewAccountsInput() {
    return this._autoEnableNewAccounts;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // member_accounts - computed: false, optional: false, required: true
  private _memberAccounts?: string[]; 
  public get memberAccounts() {
    return cdktf.Fn.tolist(this.getListAttribute('member_accounts'));
  }
  public set memberAccounts(value: string[]) {
    this._memberAccounts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberAccountsInput() {
    return this._memberAccounts;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_enable_new_accounts: cdktf.booleanToTerraform(this._autoEnableNewAccounts),
      member_accounts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._memberAccounts),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_enable_new_accounts: {
        value: cdktf.booleanToHclTerraform(this._autoEnableNewAccounts),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      member_accounts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._memberAccounts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
