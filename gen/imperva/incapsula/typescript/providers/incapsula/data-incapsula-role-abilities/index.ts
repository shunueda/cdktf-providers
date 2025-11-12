// https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/data-sources/role_abilities
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIncapsulaRoleAbilitiesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/data-sources/role_abilities#id DataIncapsulaRoleAbilities#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/data-sources/role_abilities incapsula_role_abilities}
*/
export class DataIncapsulaRoleAbilities extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "incapsula_role_abilities";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIncapsulaRoleAbilities resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIncapsulaRoleAbilities to import
  * @param importFromId The id of the existing DataIncapsulaRoleAbilities that should be imported. Refer to the {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/data-sources/role_abilities#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIncapsulaRoleAbilities to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "incapsula_role_abilities", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/data-sources/role_abilities incapsula_role_abilities} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIncapsulaRoleAbilitiesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIncapsulaRoleAbilitiesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'incapsula_role_abilities',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // can_add_domain - computed: true, optional: false, required: false
  public get canAddDomain() {
    return this.getStringAttribute('can_add_domain');
  }

  // can_add_policy - computed: true, optional: false, required: false
  public get canAddPolicy() {
    return this.getStringAttribute('can_add_policy');
  }

  // can_add_policy_exception - computed: true, optional: false, required: false
  public get canAddPolicyException() {
    return this.getStringAttribute('can_add_policy_exception');
  }

  // can_add_site - computed: true, optional: false, required: false
  public get canAddSite() {
    return this.getStringAttribute('can_add_site');
  }

  // can_add_user - computed: true, optional: false, required: false
  public get canAddUser() {
    return this.getStringAttribute('can_add_user');
  }

  // can_apply_policy_to_assets - computed: true, optional: false, required: false
  public get canApplyPolicyToAssets() {
    return this.getStringAttribute('can_apply_policy_to_assets');
  }

  // can_assign_client_certificates - computed: true, optional: false, required: false
  public get canAssignClientCertificates() {
    return this.getStringAttribute('can_assign_client_certificates');
  }

  // can_delete_policy - computed: true, optional: false, required: false
  public get canDeletePolicy() {
    return this.getStringAttribute('can_delete_policy');
  }

  // can_delete_policy_exception - computed: true, optional: false, required: false
  public get canDeletePolicyException() {
    return this.getStringAttribute('can_delete_policy_exception');
  }

  // can_edit_account - computed: true, optional: false, required: false
  public get canEditAccount() {
    return this.getStringAttribute('can_edit_account');
  }

  // can_edit_client_certificates - computed: true, optional: false, required: false
  public get canEditClientCertificates() {
    return this.getStringAttribute('can_edit_client_certificates');
  }

  // can_edit_domain - computed: true, optional: false, required: false
  public get canEditDomain() {
    return this.getStringAttribute('can_edit_domain');
  }

  // can_edit_policy - computed: true, optional: false, required: false
  public get canEditPolicy() {
    return this.getStringAttribute('can_edit_policy');
  }

  // can_edit_policy_exception - computed: true, optional: false, required: false
  public get canEditPolicyException() {
    return this.getStringAttribute('can_edit_policy_exception');
  }

  // can_edit_roles - computed: true, optional: false, required: false
  public get canEditRoles() {
    return this.getStringAttribute('can_edit_roles');
  }

  // can_edit_single_ip - computed: true, optional: false, required: false
  public get canEditSingleIp() {
    return this.getStringAttribute('can_edit_single_ip');
  }

  // can_edit_site - computed: true, optional: false, required: false
  public get canEditSite() {
    return this.getStringAttribute('can_edit_site');
  }

  // can_manage_account_sub_accounts - computed: true, optional: false, required: false
  public get canManageAccountSubAccounts() {
    return this.getStringAttribute('can_manage_account_sub_accounts');
  }

  // can_manage_api_key - computed: true, optional: false, required: false
  public get canManageApiKey() {
    return this.getStringAttribute('can_manage_api_key');
  }

  // can_purge_cache - computed: true, optional: false, required: false
  public get canPurgeCache() {
    return this.getStringAttribute('can_purge_cache');
  }

  // can_run_connectivity_reports - computed: true, optional: false, required: false
  public get canRunConnectivityReports() {
    return this.getStringAttribute('can_run_connectivity_reports');
  }

  // can_view_audit_trail - computed: true, optional: false, required: false
  public get canViewAuditTrail() {
    return this.getStringAttribute('can_view_audit_trail');
  }

  // can_view_client_certificates - computed: true, optional: false, required: false
  public get canViewClientCertificates() {
    return this.getStringAttribute('can_view_client_certificates');
  }

  // can_view_infra_protect_setting - computed: true, optional: false, required: false
  public get canViewInfraProtectSetting() {
    return this.getStringAttribute('can_view_infra_protect_setting');
  }

  // can_view_policy - computed: true, optional: false, required: false
  public get canViewPolicy() {
    return this.getStringAttribute('can_view_policy');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
