// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_set_default_administrator_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementSetDefaultAdministratorSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Authentication method for new administrator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_set_default_administrator_settings#authentication_method ManagementSetDefaultAdministratorSettings#authentication_method}
  */
  readonly authenticationMethod?: string;
  /**
  * Number of days in advanced to show 'about to expire' indication in administrator view.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_set_default_administrator_settings#days_to_indicate_expiration_in_admin_view ManagementSetDefaultAdministratorSettings#days_to_indicate_expiration_in_admin_view}
  */
  readonly daysToIndicateExpirationInAdminView?: number;
  /**
  * Number of days in advanced to notify administrator about expiration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_set_default_administrator_settings#days_to_notify_expiration_to_admin ManagementSetDefaultAdministratorSettings#days_to_notify_expiration_to_admin}
  */
  readonly daysToNotifyExpirationToAdmin?: number;
  /**
  * Expiration date for new administrator in YYYY-MM-DD format. <font color="red">Required only when</font> 'expiration-type' is set to 'expiration date'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_set_default_administrator_settings#expiration_date ManagementSetDefaultAdministratorSettings#expiration_date}
  */
  readonly expirationDate?: string;
  /**
  * Expiration period for new administrator. <font color="red">Required only when</font> 'expiration-type' is set to 'expiration period'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_set_default_administrator_settings#expiration_period ManagementSetDefaultAdministratorSettings#expiration_period}
  */
  readonly expirationPeriod?: number;
  /**
  * Expiration period time units for new administrator. <font color="red">Required only when</font> 'expiration-type' is set to 'expiration period'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_set_default_administrator_settings#expiration_period_time_units ManagementSetDefaultAdministratorSettings#expiration_period_time_units}
  */
  readonly expirationPeriodTimeUnits?: string;
  /**
  * Expiration type for new administrator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_set_default_administrator_settings#expiration_type ManagementSetDefaultAdministratorSettings#expiration_type}
  */
  readonly expirationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_set_default_administrator_settings#id ManagementSetDefaultAdministratorSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Indicates whether to notify administrator about expiration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_set_default_administrator_settings#indicate_expiration_in_admin_view ManagementSetDefaultAdministratorSettings#indicate_expiration_in_admin_view}
  */
  readonly indicateExpirationInAdminView?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether to show 'about to expire' indication in administrator view.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_set_default_administrator_settings#notify_expiration_to_admin ManagementSetDefaultAdministratorSettings#notify_expiration_to_admin}
  */
  readonly notifyExpirationToAdmin?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_set_default_administrator_settings checkpoint_management_set_default_administrator_settings}
*/
export class ManagementSetDefaultAdministratorSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_set_default_administrator_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementSetDefaultAdministratorSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementSetDefaultAdministratorSettings to import
  * @param importFromId The id of the existing ManagementSetDefaultAdministratorSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_set_default_administrator_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementSetDefaultAdministratorSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_set_default_administrator_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_set_default_administrator_settings checkpoint_management_set_default_administrator_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementSetDefaultAdministratorSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ManagementSetDefaultAdministratorSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_set_default_administrator_settings',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.12.0',
        providerVersionConstraint: '2.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authenticationMethod = config.authenticationMethod;
    this._daysToIndicateExpirationInAdminView = config.daysToIndicateExpirationInAdminView;
    this._daysToNotifyExpirationToAdmin = config.daysToNotifyExpirationToAdmin;
    this._expirationDate = config.expirationDate;
    this._expirationPeriod = config.expirationPeriod;
    this._expirationPeriodTimeUnits = config.expirationPeriodTimeUnits;
    this._expirationType = config.expirationType;
    this._id = config.id;
    this._indicateExpirationInAdminView = config.indicateExpirationInAdminView;
    this._notifyExpirationToAdmin = config.notifyExpirationToAdmin;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_method - computed: false, optional: true, required: false
  private _authenticationMethod?: string; 
  public get authenticationMethod() {
    return this.getStringAttribute('authentication_method');
  }
  public set authenticationMethod(value: string) {
    this._authenticationMethod = value;
  }
  public resetAuthenticationMethod() {
    this._authenticationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationMethodInput() {
    return this._authenticationMethod;
  }

  // days_to_indicate_expiration_in_admin_view - computed: false, optional: true, required: false
  private _daysToIndicateExpirationInAdminView?: number; 
  public get daysToIndicateExpirationInAdminView() {
    return this.getNumberAttribute('days_to_indicate_expiration_in_admin_view');
  }
  public set daysToIndicateExpirationInAdminView(value: number) {
    this._daysToIndicateExpirationInAdminView = value;
  }
  public resetDaysToIndicateExpirationInAdminView() {
    this._daysToIndicateExpirationInAdminView = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysToIndicateExpirationInAdminViewInput() {
    return this._daysToIndicateExpirationInAdminView;
  }

  // days_to_notify_expiration_to_admin - computed: false, optional: true, required: false
  private _daysToNotifyExpirationToAdmin?: number; 
  public get daysToNotifyExpirationToAdmin() {
    return this.getNumberAttribute('days_to_notify_expiration_to_admin');
  }
  public set daysToNotifyExpirationToAdmin(value: number) {
    this._daysToNotifyExpirationToAdmin = value;
  }
  public resetDaysToNotifyExpirationToAdmin() {
    this._daysToNotifyExpirationToAdmin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysToNotifyExpirationToAdminInput() {
    return this._daysToNotifyExpirationToAdmin;
  }

  // expiration_date - computed: false, optional: true, required: false
  private _expirationDate?: string; 
  public get expirationDate() {
    return this.getStringAttribute('expiration_date');
  }
  public set expirationDate(value: string) {
    this._expirationDate = value;
  }
  public resetExpirationDate() {
    this._expirationDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationDateInput() {
    return this._expirationDate;
  }

  // expiration_period - computed: false, optional: true, required: false
  private _expirationPeriod?: number; 
  public get expirationPeriod() {
    return this.getNumberAttribute('expiration_period');
  }
  public set expirationPeriod(value: number) {
    this._expirationPeriod = value;
  }
  public resetExpirationPeriod() {
    this._expirationPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationPeriodInput() {
    return this._expirationPeriod;
  }

  // expiration_period_time_units - computed: false, optional: true, required: false
  private _expirationPeriodTimeUnits?: string; 
  public get expirationPeriodTimeUnits() {
    return this.getStringAttribute('expiration_period_time_units');
  }
  public set expirationPeriodTimeUnits(value: string) {
    this._expirationPeriodTimeUnits = value;
  }
  public resetExpirationPeriodTimeUnits() {
    this._expirationPeriodTimeUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationPeriodTimeUnitsInput() {
    return this._expirationPeriodTimeUnits;
  }

  // expiration_type - computed: false, optional: true, required: false
  private _expirationType?: string; 
  public get expirationType() {
    return this.getStringAttribute('expiration_type');
  }
  public set expirationType(value: string) {
    this._expirationType = value;
  }
  public resetExpirationType() {
    this._expirationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationTypeInput() {
    return this._expirationType;
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

  // indicate_expiration_in_admin_view - computed: false, optional: true, required: false
  private _indicateExpirationInAdminView?: boolean | cdktf.IResolvable; 
  public get indicateExpirationInAdminView() {
    return this.getBooleanAttribute('indicate_expiration_in_admin_view');
  }
  public set indicateExpirationInAdminView(value: boolean | cdktf.IResolvable) {
    this._indicateExpirationInAdminView = value;
  }
  public resetIndicateExpirationInAdminView() {
    this._indicateExpirationInAdminView = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicateExpirationInAdminViewInput() {
    return this._indicateExpirationInAdminView;
  }

  // notify_expiration_to_admin - computed: false, optional: true, required: false
  private _notifyExpirationToAdmin?: boolean | cdktf.IResolvable; 
  public get notifyExpirationToAdmin() {
    return this.getBooleanAttribute('notify_expiration_to_admin');
  }
  public set notifyExpirationToAdmin(value: boolean | cdktf.IResolvable) {
    this._notifyExpirationToAdmin = value;
  }
  public resetNotifyExpirationToAdmin() {
    this._notifyExpirationToAdmin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyExpirationToAdminInput() {
    return this._notifyExpirationToAdmin;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication_method: cdktf.stringToTerraform(this._authenticationMethod),
      days_to_indicate_expiration_in_admin_view: cdktf.numberToTerraform(this._daysToIndicateExpirationInAdminView),
      days_to_notify_expiration_to_admin: cdktf.numberToTerraform(this._daysToNotifyExpirationToAdmin),
      expiration_date: cdktf.stringToTerraform(this._expirationDate),
      expiration_period: cdktf.numberToTerraform(this._expirationPeriod),
      expiration_period_time_units: cdktf.stringToTerraform(this._expirationPeriodTimeUnits),
      expiration_type: cdktf.stringToTerraform(this._expirationType),
      id: cdktf.stringToTerraform(this._id),
      indicate_expiration_in_admin_view: cdktf.booleanToTerraform(this._indicateExpirationInAdminView),
      notify_expiration_to_admin: cdktf.booleanToTerraform(this._notifyExpirationToAdmin),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication_method: {
        value: cdktf.stringToHclTerraform(this._authenticationMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      days_to_indicate_expiration_in_admin_view: {
        value: cdktf.numberToHclTerraform(this._daysToIndicateExpirationInAdminView),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      days_to_notify_expiration_to_admin: {
        value: cdktf.numberToHclTerraform(this._daysToNotifyExpirationToAdmin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      expiration_date: {
        value: cdktf.stringToHclTerraform(this._expirationDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expiration_period: {
        value: cdktf.numberToHclTerraform(this._expirationPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      expiration_period_time_units: {
        value: cdktf.stringToHclTerraform(this._expirationPeriodTimeUnits),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expiration_type: {
        value: cdktf.stringToHclTerraform(this._expirationType),
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
      indicate_expiration_in_admin_view: {
        value: cdktf.booleanToHclTerraform(this._indicateExpirationInAdminView),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      notify_expiration_to_admin: {
        value: cdktf.booleanToHclTerraform(this._notifyExpirationToAdmin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
