// https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_keeper_fill
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataKeeperEnforcementsKeeperFillAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Keeper Fill auto-fill
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_keeper_fill#keeper_fill_auto_fill DataKeeperEnforcementsKeeperFillA#keeper_fill_auto_fill}
  */
  readonly keeperFillAutoFill?: string;
  /**
  * Keeper Fill auto-submit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_keeper_fill#keeper_fill_auto_submit DataKeeperEnforcementsKeeperFillA#keeper_fill_auto_submit}
  */
  readonly keeperFillAutoSubmit?: string;
  /**
  * Keeper auto-fill suggestion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_keeper_fill#keeper_fill_auto_suggest DataKeeperEnforcementsKeeperFillA#keeper_fill_auto_suggest}
  */
  readonly keeperFillAutoSuggest?: string;
  /**
  * Keeper Fill hover locks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_keeper_fill#keeper_fill_hover_locks DataKeeperEnforcementsKeeperFillA#keeper_fill_hover_locks}
  */
  readonly keeperFillHoverLocks?: string;
  /**
  * Keeper Fill subdomains to match on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_keeper_fill#keeper_fill_match_on_subdomain DataKeeperEnforcementsKeeperFillA#keeper_fill_match_on_subdomain}
  */
  readonly keeperFillMatchOnSubdomain?: string;
  /**
  * Master password re-entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_keeper_fill#master_password_reentry DataKeeperEnforcementsKeeperFillA#master_password_reentry}
  */
  readonly masterPasswordReentry?: string;
  /**
  * Restrict auto-fill
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_keeper_fill#restrict_auto_fill DataKeeperEnforcementsKeeperFillA#restrict_auto_fill}
  */
  readonly restrictAutoFill?: boolean | cdktf.IResolvable;
  /**
  * Restrict auto-submit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_keeper_fill#restrict_auto_submit DataKeeperEnforcementsKeeperFillA#restrict_auto_submit}
  */
  readonly restrictAutoSubmit?: boolean | cdktf.IResolvable;
  /**
  * Restrict access to domain(s)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_keeper_fill#restrict_domain_access DataKeeperEnforcementsKeeperFillA#restrict_domain_access}
  */
  readonly restrictDomainAccess?: string;
  /**
  * Restrict creation of new records for domain(s)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_keeper_fill#restrict_domain_create DataKeeperEnforcementsKeeperFillA#restrict_domain_create}
  */
  readonly restrictDomainCreate?: string;
  /**
  * Restrict hover-locks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_keeper_fill#restrict_hover_locks DataKeeperEnforcementsKeeperFillA#restrict_hover_locks}
  */
  readonly restrictHoverLocks?: boolean | cdktf.IResolvable;
  /**
  * Restrict HTTP fill warning
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_keeper_fill#restrict_http_fill_warning DataKeeperEnforcementsKeeperFillA#restrict_http_fill_warning}
  */
  readonly restrictHttpFillWarning?: boolean | cdktf.IResolvable;
  /**
  * Restrict prompt to change
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_keeper_fill#restrict_prompt_to_change DataKeeperEnforcementsKeeperFillA#restrict_prompt_to_change}
  */
  readonly restrictPromptToChange?: boolean | cdktf.IResolvable;
  /**
  * Restrict prompt to disable Keeper Fill
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_keeper_fill#restrict_prompt_to_disable DataKeeperEnforcementsKeeperFillA#restrict_prompt_to_disable}
  */
  readonly restrictPromptToDisable?: boolean | cdktf.IResolvable;
  /**
  * Restrict prompt to fill
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_keeper_fill#restrict_prompt_to_fill DataKeeperEnforcementsKeeperFillA#restrict_prompt_to_fill}
  */
  readonly restrictPromptToFill?: boolean | cdktf.IResolvable;
  /**
  * Restrict prompt to login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_keeper_fill#restrict_prompt_to_login DataKeeperEnforcementsKeeperFillA#restrict_prompt_to_login}
  */
  readonly restrictPromptToLogin?: boolean | cdktf.IResolvable;
  /**
  * Restrict prompt to save
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_keeper_fill#restrict_prompt_to_save DataKeeperEnforcementsKeeperFillA#restrict_prompt_to_save}
  */
  readonly restrictPromptToSave?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_keeper_fill keeper_enforcements_keeper_fill}
*/
export class DataKeeperEnforcementsKeeperFillA extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keeper_enforcements_keeper_fill";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataKeeperEnforcementsKeeperFillA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataKeeperEnforcementsKeeperFillA to import
  * @param importFromId The id of the existing DataKeeperEnforcementsKeeperFillA that should be imported. Refer to the {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_keeper_fill#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataKeeperEnforcementsKeeperFillA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keeper_enforcements_keeper_fill", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_keeper_fill keeper_enforcements_keeper_fill} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataKeeperEnforcementsKeeperFillAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataKeeperEnforcementsKeeperFillAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'keeper_enforcements_keeper_fill',
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
    this._keeperFillAutoFill = config.keeperFillAutoFill;
    this._keeperFillAutoSubmit = config.keeperFillAutoSubmit;
    this._keeperFillAutoSuggest = config.keeperFillAutoSuggest;
    this._keeperFillHoverLocks = config.keeperFillHoverLocks;
    this._keeperFillMatchOnSubdomain = config.keeperFillMatchOnSubdomain;
    this._masterPasswordReentry = config.masterPasswordReentry;
    this._restrictAutoFill = config.restrictAutoFill;
    this._restrictAutoSubmit = config.restrictAutoSubmit;
    this._restrictDomainAccess = config.restrictDomainAccess;
    this._restrictDomainCreate = config.restrictDomainCreate;
    this._restrictHoverLocks = config.restrictHoverLocks;
    this._restrictHttpFillWarning = config.restrictHttpFillWarning;
    this._restrictPromptToChange = config.restrictPromptToChange;
    this._restrictPromptToDisable = config.restrictPromptToDisable;
    this._restrictPromptToFill = config.restrictPromptToFill;
    this._restrictPromptToLogin = config.restrictPromptToLogin;
    this._restrictPromptToSave = config.restrictPromptToSave;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // keeper_fill_auto_fill - computed: false, optional: true, required: false
  private _keeperFillAutoFill?: string; 
  public get keeperFillAutoFill() {
    return this.getStringAttribute('keeper_fill_auto_fill');
  }
  public set keeperFillAutoFill(value: string) {
    this._keeperFillAutoFill = value;
  }
  public resetKeeperFillAutoFill() {
    this._keeperFillAutoFill = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keeperFillAutoFillInput() {
    return this._keeperFillAutoFill;
  }

  // keeper_fill_auto_submit - computed: false, optional: true, required: false
  private _keeperFillAutoSubmit?: string; 
  public get keeperFillAutoSubmit() {
    return this.getStringAttribute('keeper_fill_auto_submit');
  }
  public set keeperFillAutoSubmit(value: string) {
    this._keeperFillAutoSubmit = value;
  }
  public resetKeeperFillAutoSubmit() {
    this._keeperFillAutoSubmit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keeperFillAutoSubmitInput() {
    return this._keeperFillAutoSubmit;
  }

  // keeper_fill_auto_suggest - computed: false, optional: true, required: false
  private _keeperFillAutoSuggest?: string; 
  public get keeperFillAutoSuggest() {
    return this.getStringAttribute('keeper_fill_auto_suggest');
  }
  public set keeperFillAutoSuggest(value: string) {
    this._keeperFillAutoSuggest = value;
  }
  public resetKeeperFillAutoSuggest() {
    this._keeperFillAutoSuggest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keeperFillAutoSuggestInput() {
    return this._keeperFillAutoSuggest;
  }

  // keeper_fill_hover_locks - computed: false, optional: true, required: false
  private _keeperFillHoverLocks?: string; 
  public get keeperFillHoverLocks() {
    return this.getStringAttribute('keeper_fill_hover_locks');
  }
  public set keeperFillHoverLocks(value: string) {
    this._keeperFillHoverLocks = value;
  }
  public resetKeeperFillHoverLocks() {
    this._keeperFillHoverLocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keeperFillHoverLocksInput() {
    return this._keeperFillHoverLocks;
  }

  // keeper_fill_match_on_subdomain - computed: false, optional: true, required: false
  private _keeperFillMatchOnSubdomain?: string; 
  public get keeperFillMatchOnSubdomain() {
    return this.getStringAttribute('keeper_fill_match_on_subdomain');
  }
  public set keeperFillMatchOnSubdomain(value: string) {
    this._keeperFillMatchOnSubdomain = value;
  }
  public resetKeeperFillMatchOnSubdomain() {
    this._keeperFillMatchOnSubdomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keeperFillMatchOnSubdomainInput() {
    return this._keeperFillMatchOnSubdomain;
  }

  // master_password_reentry - computed: false, optional: true, required: false
  private _masterPasswordReentry?: string; 
  public get masterPasswordReentry() {
    return this.getStringAttribute('master_password_reentry');
  }
  public set masterPasswordReentry(value: string) {
    this._masterPasswordReentry = value;
  }
  public resetMasterPasswordReentry() {
    this._masterPasswordReentry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterPasswordReentryInput() {
    return this._masterPasswordReentry;
  }

  // restrict_auto_fill - computed: false, optional: true, required: false
  private _restrictAutoFill?: boolean | cdktf.IResolvable; 
  public get restrictAutoFill() {
    return this.getBooleanAttribute('restrict_auto_fill');
  }
  public set restrictAutoFill(value: boolean | cdktf.IResolvable) {
    this._restrictAutoFill = value;
  }
  public resetRestrictAutoFill() {
    this._restrictAutoFill = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictAutoFillInput() {
    return this._restrictAutoFill;
  }

  // restrict_auto_submit - computed: false, optional: true, required: false
  private _restrictAutoSubmit?: boolean | cdktf.IResolvable; 
  public get restrictAutoSubmit() {
    return this.getBooleanAttribute('restrict_auto_submit');
  }
  public set restrictAutoSubmit(value: boolean | cdktf.IResolvable) {
    this._restrictAutoSubmit = value;
  }
  public resetRestrictAutoSubmit() {
    this._restrictAutoSubmit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictAutoSubmitInput() {
    return this._restrictAutoSubmit;
  }

  // restrict_domain_access - computed: false, optional: true, required: false
  private _restrictDomainAccess?: string; 
  public get restrictDomainAccess() {
    return this.getStringAttribute('restrict_domain_access');
  }
  public set restrictDomainAccess(value: string) {
    this._restrictDomainAccess = value;
  }
  public resetRestrictDomainAccess() {
    this._restrictDomainAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictDomainAccessInput() {
    return this._restrictDomainAccess;
  }

  // restrict_domain_create - computed: false, optional: true, required: false
  private _restrictDomainCreate?: string; 
  public get restrictDomainCreate() {
    return this.getStringAttribute('restrict_domain_create');
  }
  public set restrictDomainCreate(value: string) {
    this._restrictDomainCreate = value;
  }
  public resetRestrictDomainCreate() {
    this._restrictDomainCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictDomainCreateInput() {
    return this._restrictDomainCreate;
  }

  // restrict_hover_locks - computed: false, optional: true, required: false
  private _restrictHoverLocks?: boolean | cdktf.IResolvable; 
  public get restrictHoverLocks() {
    return this.getBooleanAttribute('restrict_hover_locks');
  }
  public set restrictHoverLocks(value: boolean | cdktf.IResolvable) {
    this._restrictHoverLocks = value;
  }
  public resetRestrictHoverLocks() {
    this._restrictHoverLocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictHoverLocksInput() {
    return this._restrictHoverLocks;
  }

  // restrict_http_fill_warning - computed: false, optional: true, required: false
  private _restrictHttpFillWarning?: boolean | cdktf.IResolvable; 
  public get restrictHttpFillWarning() {
    return this.getBooleanAttribute('restrict_http_fill_warning');
  }
  public set restrictHttpFillWarning(value: boolean | cdktf.IResolvable) {
    this._restrictHttpFillWarning = value;
  }
  public resetRestrictHttpFillWarning() {
    this._restrictHttpFillWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictHttpFillWarningInput() {
    return this._restrictHttpFillWarning;
  }

  // restrict_prompt_to_change - computed: false, optional: true, required: false
  private _restrictPromptToChange?: boolean | cdktf.IResolvable; 
  public get restrictPromptToChange() {
    return this.getBooleanAttribute('restrict_prompt_to_change');
  }
  public set restrictPromptToChange(value: boolean | cdktf.IResolvable) {
    this._restrictPromptToChange = value;
  }
  public resetRestrictPromptToChange() {
    this._restrictPromptToChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictPromptToChangeInput() {
    return this._restrictPromptToChange;
  }

  // restrict_prompt_to_disable - computed: false, optional: true, required: false
  private _restrictPromptToDisable?: boolean | cdktf.IResolvable; 
  public get restrictPromptToDisable() {
    return this.getBooleanAttribute('restrict_prompt_to_disable');
  }
  public set restrictPromptToDisable(value: boolean | cdktf.IResolvable) {
    this._restrictPromptToDisable = value;
  }
  public resetRestrictPromptToDisable() {
    this._restrictPromptToDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictPromptToDisableInput() {
    return this._restrictPromptToDisable;
  }

  // restrict_prompt_to_fill - computed: false, optional: true, required: false
  private _restrictPromptToFill?: boolean | cdktf.IResolvable; 
  public get restrictPromptToFill() {
    return this.getBooleanAttribute('restrict_prompt_to_fill');
  }
  public set restrictPromptToFill(value: boolean | cdktf.IResolvable) {
    this._restrictPromptToFill = value;
  }
  public resetRestrictPromptToFill() {
    this._restrictPromptToFill = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictPromptToFillInput() {
    return this._restrictPromptToFill;
  }

  // restrict_prompt_to_login - computed: false, optional: true, required: false
  private _restrictPromptToLogin?: boolean | cdktf.IResolvable; 
  public get restrictPromptToLogin() {
    return this.getBooleanAttribute('restrict_prompt_to_login');
  }
  public set restrictPromptToLogin(value: boolean | cdktf.IResolvable) {
    this._restrictPromptToLogin = value;
  }
  public resetRestrictPromptToLogin() {
    this._restrictPromptToLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictPromptToLoginInput() {
    return this._restrictPromptToLogin;
  }

  // restrict_prompt_to_save - computed: false, optional: true, required: false
  private _restrictPromptToSave?: boolean | cdktf.IResolvable; 
  public get restrictPromptToSave() {
    return this.getBooleanAttribute('restrict_prompt_to_save');
  }
  public set restrictPromptToSave(value: boolean | cdktf.IResolvable) {
    this._restrictPromptToSave = value;
  }
  public resetRestrictPromptToSave() {
    this._restrictPromptToSave = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictPromptToSaveInput() {
    return this._restrictPromptToSave;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      keeper_fill_auto_fill: cdktf.stringToTerraform(this._keeperFillAutoFill),
      keeper_fill_auto_submit: cdktf.stringToTerraform(this._keeperFillAutoSubmit),
      keeper_fill_auto_suggest: cdktf.stringToTerraform(this._keeperFillAutoSuggest),
      keeper_fill_hover_locks: cdktf.stringToTerraform(this._keeperFillHoverLocks),
      keeper_fill_match_on_subdomain: cdktf.stringToTerraform(this._keeperFillMatchOnSubdomain),
      master_password_reentry: cdktf.stringToTerraform(this._masterPasswordReentry),
      restrict_auto_fill: cdktf.booleanToTerraform(this._restrictAutoFill),
      restrict_auto_submit: cdktf.booleanToTerraform(this._restrictAutoSubmit),
      restrict_domain_access: cdktf.stringToTerraform(this._restrictDomainAccess),
      restrict_domain_create: cdktf.stringToTerraform(this._restrictDomainCreate),
      restrict_hover_locks: cdktf.booleanToTerraform(this._restrictHoverLocks),
      restrict_http_fill_warning: cdktf.booleanToTerraform(this._restrictHttpFillWarning),
      restrict_prompt_to_change: cdktf.booleanToTerraform(this._restrictPromptToChange),
      restrict_prompt_to_disable: cdktf.booleanToTerraform(this._restrictPromptToDisable),
      restrict_prompt_to_fill: cdktf.booleanToTerraform(this._restrictPromptToFill),
      restrict_prompt_to_login: cdktf.booleanToTerraform(this._restrictPromptToLogin),
      restrict_prompt_to_save: cdktf.booleanToTerraform(this._restrictPromptToSave),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      keeper_fill_auto_fill: {
        value: cdktf.stringToHclTerraform(this._keeperFillAutoFill),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keeper_fill_auto_submit: {
        value: cdktf.stringToHclTerraform(this._keeperFillAutoSubmit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keeper_fill_auto_suggest: {
        value: cdktf.stringToHclTerraform(this._keeperFillAutoSuggest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keeper_fill_hover_locks: {
        value: cdktf.stringToHclTerraform(this._keeperFillHoverLocks),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keeper_fill_match_on_subdomain: {
        value: cdktf.stringToHclTerraform(this._keeperFillMatchOnSubdomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      master_password_reentry: {
        value: cdktf.stringToHclTerraform(this._masterPasswordReentry),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restrict_auto_fill: {
        value: cdktf.booleanToHclTerraform(this._restrictAutoFill),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restrict_auto_submit: {
        value: cdktf.booleanToHclTerraform(this._restrictAutoSubmit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restrict_domain_access: {
        value: cdktf.stringToHclTerraform(this._restrictDomainAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restrict_domain_create: {
        value: cdktf.stringToHclTerraform(this._restrictDomainCreate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restrict_hover_locks: {
        value: cdktf.booleanToHclTerraform(this._restrictHoverLocks),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restrict_http_fill_warning: {
        value: cdktf.booleanToHclTerraform(this._restrictHttpFillWarning),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restrict_prompt_to_change: {
        value: cdktf.booleanToHclTerraform(this._restrictPromptToChange),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restrict_prompt_to_disable: {
        value: cdktf.booleanToHclTerraform(this._restrictPromptToDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restrict_prompt_to_fill: {
        value: cdktf.booleanToHclTerraform(this._restrictPromptToFill),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restrict_prompt_to_login: {
        value: cdktf.booleanToHclTerraform(this._restrictPromptToLogin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restrict_prompt_to_save: {
        value: cdktf.booleanToHclTerraform(this._restrictPromptToSave),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
