// https://registry.terraform.io/providers/linode/linode/3.5.1/docs/resources/account_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccountSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account-wide backups default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.1/docs/resources/account_settings#backups_enabled AccountSettings#backups_enabled}
  */
  readonly backupsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Type of interfaces for new Linode instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.1/docs/resources/account_settings#interfaces_for_new_linodes AccountSettings#interfaces_for_new_linodes}
  */
  readonly interfacesForNewLinodes?: string;
  /**
  * The Longview Pro tier you are currently subscribed to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.1/docs/resources/account_settings#longview_subscription AccountSettings#longview_subscription}
  */
  readonly longviewSubscription?: string;
  /**
  * The default Maintenance Policy for this account. If not provided, the default policy (linode/migrate) will be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.1/docs/resources/account_settings#maintenance_policy AccountSettings#maintenance_policy}
  */
  readonly maintenancePolicy?: string;
  /**
  * Enables network helper across all users by default for new Linodes and Linode Configs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.1/docs/resources/account_settings#network_helper AccountSettings#network_helper}
  */
  readonly networkHelper?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/linode/linode/3.5.1/docs/resources/account_settings linode_account_settings}
*/
export class AccountSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "linode_account_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AccountSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccountSettings to import
  * @param importFromId The id of the existing AccountSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/linode/linode/3.5.1/docs/resources/account_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccountSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "linode_account_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/linode/linode/3.5.1/docs/resources/account_settings linode_account_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccountSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AccountSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'linode_account_settings',
      terraformGeneratorMetadata: {
        providerName: 'linode',
        providerVersion: '3.5.1',
        providerVersionConstraint: '3.5.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backupsEnabled = config.backupsEnabled;
    this._interfacesForNewLinodes = config.interfacesForNewLinodes;
    this._longviewSubscription = config.longviewSubscription;
    this._maintenancePolicy = config.maintenancePolicy;
    this._networkHelper = config.networkHelper;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backups_enabled - computed: true, optional: true, required: false
  private _backupsEnabled?: boolean | cdktf.IResolvable; 
  public get backupsEnabled() {
    return this.getBooleanAttribute('backups_enabled');
  }
  public set backupsEnabled(value: boolean | cdktf.IResolvable) {
    this._backupsEnabled = value;
  }
  public resetBackupsEnabled() {
    this._backupsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupsEnabledInput() {
    return this._backupsEnabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interfaces_for_new_linodes - computed: true, optional: true, required: false
  private _interfacesForNewLinodes?: string; 
  public get interfacesForNewLinodes() {
    return this.getStringAttribute('interfaces_for_new_linodes');
  }
  public set interfacesForNewLinodes(value: string) {
    this._interfacesForNewLinodes = value;
  }
  public resetInterfacesForNewLinodes() {
    this._interfacesForNewLinodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesForNewLinodesInput() {
    return this._interfacesForNewLinodes;
  }

  // longview_subscription - computed: true, optional: true, required: false
  private _longviewSubscription?: string; 
  public get longviewSubscription() {
    return this.getStringAttribute('longview_subscription');
  }
  public set longviewSubscription(value: string) {
    this._longviewSubscription = value;
  }
  public resetLongviewSubscription() {
    this._longviewSubscription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longviewSubscriptionInput() {
    return this._longviewSubscription;
  }

  // maintenance_policy - computed: true, optional: true, required: false
  private _maintenancePolicy?: string; 
  public get maintenancePolicy() {
    return this.getStringAttribute('maintenance_policy');
  }
  public set maintenancePolicy(value: string) {
    this._maintenancePolicy = value;
  }
  public resetMaintenancePolicy() {
    this._maintenancePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenancePolicyInput() {
    return this._maintenancePolicy;
  }

  // managed - computed: true, optional: false, required: false
  public get managed() {
    return this.getBooleanAttribute('managed');
  }

  // network_helper - computed: true, optional: true, required: false
  private _networkHelper?: boolean | cdktf.IResolvable; 
  public get networkHelper() {
    return this.getBooleanAttribute('network_helper');
  }
  public set networkHelper(value: boolean | cdktf.IResolvable) {
    this._networkHelper = value;
  }
  public resetNetworkHelper() {
    this._networkHelper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkHelperInput() {
    return this._networkHelper;
  }

  // object_storage - computed: true, optional: false, required: false
  public get objectStorage() {
    return this.getStringAttribute('object_storage');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backups_enabled: cdktf.booleanToTerraform(this._backupsEnabled),
      interfaces_for_new_linodes: cdktf.stringToTerraform(this._interfacesForNewLinodes),
      longview_subscription: cdktf.stringToTerraform(this._longviewSubscription),
      maintenance_policy: cdktf.stringToTerraform(this._maintenancePolicy),
      network_helper: cdktf.booleanToTerraform(this._networkHelper),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backups_enabled: {
        value: cdktf.booleanToHclTerraform(this._backupsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      interfaces_for_new_linodes: {
        value: cdktf.stringToHclTerraform(this._interfacesForNewLinodes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      longview_subscription: {
        value: cdktf.stringToHclTerraform(this._longviewSubscription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintenance_policy: {
        value: cdktf.stringToHclTerraform(this._maintenancePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_helper: {
        value: cdktf.booleanToHclTerraform(this._networkHelper),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
