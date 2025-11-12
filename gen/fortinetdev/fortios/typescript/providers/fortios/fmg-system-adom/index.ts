// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_adom
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FmgSystemAdomConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_adom#action_when_conflicts_occur_during_policy_check FmgSystemAdom#action_when_conflicts_occur_during_policy_check}
  */
  readonly actionWhenConflictsOccurDuringPolicyCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_adom#auto_push_policy_packages_when_device_back_online FmgSystemAdom#auto_push_policy_packages_when_device_back_online}
  */
  readonly autoPushPolicyPackagesWhenDeviceBackOnline?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_adom#central_management_fortiap FmgSystemAdom#central_management_fortiap}
  */
  readonly centralManagementFortiap?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_adom#central_management_sdwan FmgSystemAdom#central_management_sdwan}
  */
  readonly centralManagementSdwan?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_adom#central_management_vpn FmgSystemAdom#central_management_vpn}
  */
  readonly centralManagementVpn?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_adom#id FmgSystemAdom#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_adom#mode FmgSystemAdom#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_adom#name FmgSystemAdom#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_adom#perform_policy_check_before_every_install FmgSystemAdom#perform_policy_check_before_every_install}
  */
  readonly performPolicyCheckBeforeEveryInstall?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_adom#status FmgSystemAdom#status}
  */
  readonly status?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_adom#type FmgSystemAdom#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_adom fortios_fmg_system_adom}
*/
export class FmgSystemAdom extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_fmg_system_adom";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FmgSystemAdom resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FmgSystemAdom to import
  * @param importFromId The id of the existing FmgSystemAdom that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_adom#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FmgSystemAdom to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_fmg_system_adom", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_adom fortios_fmg_system_adom} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FmgSystemAdomConfig
  */
  public constructor(scope: Construct, id: string, config: FmgSystemAdomConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_fmg_system_adom',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0',
        providerVersionConstraint: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._actionWhenConflictsOccurDuringPolicyCheck = config.actionWhenConflictsOccurDuringPolicyCheck;
    this._autoPushPolicyPackagesWhenDeviceBackOnline = config.autoPushPolicyPackagesWhenDeviceBackOnline;
    this._centralManagementFortiap = config.centralManagementFortiap;
    this._centralManagementSdwan = config.centralManagementSdwan;
    this._centralManagementVpn = config.centralManagementVpn;
    this._id = config.id;
    this._mode = config.mode;
    this._name = config.name;
    this._performPolicyCheckBeforeEveryInstall = config.performPolicyCheckBeforeEveryInstall;
    this._status = config.status;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_when_conflicts_occur_during_policy_check - computed: false, optional: true, required: false
  private _actionWhenConflictsOccurDuringPolicyCheck?: string; 
  public get actionWhenConflictsOccurDuringPolicyCheck() {
    return this.getStringAttribute('action_when_conflicts_occur_during_policy_check');
  }
  public set actionWhenConflictsOccurDuringPolicyCheck(value: string) {
    this._actionWhenConflictsOccurDuringPolicyCheck = value;
  }
  public resetActionWhenConflictsOccurDuringPolicyCheck() {
    this._actionWhenConflictsOccurDuringPolicyCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionWhenConflictsOccurDuringPolicyCheckInput() {
    return this._actionWhenConflictsOccurDuringPolicyCheck;
  }

  // auto_push_policy_packages_when_device_back_online - computed: false, optional: true, required: false
  private _autoPushPolicyPackagesWhenDeviceBackOnline?: string; 
  public get autoPushPolicyPackagesWhenDeviceBackOnline() {
    return this.getStringAttribute('auto_push_policy_packages_when_device_back_online');
  }
  public set autoPushPolicyPackagesWhenDeviceBackOnline(value: string) {
    this._autoPushPolicyPackagesWhenDeviceBackOnline = value;
  }
  public resetAutoPushPolicyPackagesWhenDeviceBackOnline() {
    this._autoPushPolicyPackagesWhenDeviceBackOnline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPushPolicyPackagesWhenDeviceBackOnlineInput() {
    return this._autoPushPolicyPackagesWhenDeviceBackOnline;
  }

  // central_management_fortiap - computed: false, optional: true, required: false
  private _centralManagementFortiap?: boolean | cdktf.IResolvable; 
  public get centralManagementFortiap() {
    return this.getBooleanAttribute('central_management_fortiap');
  }
  public set centralManagementFortiap(value: boolean | cdktf.IResolvable) {
    this._centralManagementFortiap = value;
  }
  public resetCentralManagementFortiap() {
    this._centralManagementFortiap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get centralManagementFortiapInput() {
    return this._centralManagementFortiap;
  }

  // central_management_sdwan - computed: false, optional: true, required: false
  private _centralManagementSdwan?: boolean | cdktf.IResolvable; 
  public get centralManagementSdwan() {
    return this.getBooleanAttribute('central_management_sdwan');
  }
  public set centralManagementSdwan(value: boolean | cdktf.IResolvable) {
    this._centralManagementSdwan = value;
  }
  public resetCentralManagementSdwan() {
    this._centralManagementSdwan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get centralManagementSdwanInput() {
    return this._centralManagementSdwan;
  }

  // central_management_vpn - computed: false, optional: true, required: false
  private _centralManagementVpn?: boolean | cdktf.IResolvable; 
  public get centralManagementVpn() {
    return this.getBooleanAttribute('central_management_vpn');
  }
  public set centralManagementVpn(value: boolean | cdktf.IResolvable) {
    this._centralManagementVpn = value;
  }
  public resetCentralManagementVpn() {
    this._centralManagementVpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get centralManagementVpnInput() {
    return this._centralManagementVpn;
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

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // perform_policy_check_before_every_install - computed: false, optional: true, required: false
  private _performPolicyCheckBeforeEveryInstall?: boolean | cdktf.IResolvable; 
  public get performPolicyCheckBeforeEveryInstall() {
    return this.getBooleanAttribute('perform_policy_check_before_every_install');
  }
  public set performPolicyCheckBeforeEveryInstall(value: boolean | cdktf.IResolvable) {
    this._performPolicyCheckBeforeEveryInstall = value;
  }
  public resetPerformPolicyCheckBeforeEveryInstall() {
    this._performPolicyCheckBeforeEveryInstall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performPolicyCheckBeforeEveryInstallInput() {
    return this._performPolicyCheckBeforeEveryInstall;
  }

  // status - computed: false, optional: true, required: false
  private _status?: number; 
  public get status() {
    return this.getNumberAttribute('status');
  }
  public set status(value: number) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action_when_conflicts_occur_during_policy_check: cdktf.stringToTerraform(this._actionWhenConflictsOccurDuringPolicyCheck),
      auto_push_policy_packages_when_device_back_online: cdktf.stringToTerraform(this._autoPushPolicyPackagesWhenDeviceBackOnline),
      central_management_fortiap: cdktf.booleanToTerraform(this._centralManagementFortiap),
      central_management_sdwan: cdktf.booleanToTerraform(this._centralManagementSdwan),
      central_management_vpn: cdktf.booleanToTerraform(this._centralManagementVpn),
      id: cdktf.stringToTerraform(this._id),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      perform_policy_check_before_every_install: cdktf.booleanToTerraform(this._performPolicyCheckBeforeEveryInstall),
      status: cdktf.numberToTerraform(this._status),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action_when_conflicts_occur_during_policy_check: {
        value: cdktf.stringToHclTerraform(this._actionWhenConflictsOccurDuringPolicyCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_push_policy_packages_when_device_back_online: {
        value: cdktf.stringToHclTerraform(this._autoPushPolicyPackagesWhenDeviceBackOnline),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      central_management_fortiap: {
        value: cdktf.booleanToHclTerraform(this._centralManagementFortiap),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      central_management_sdwan: {
        value: cdktf.booleanToHclTerraform(this._centralManagementSdwan),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      central_management_vpn: {
        value: cdktf.booleanToHclTerraform(this._centralManagementVpn),
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
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      perform_policy_check_before_every_install: {
        value: cdktf.booleanToHclTerraform(this._performPolicyCheckBeforeEveryInstall),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      status: {
        value: cdktf.numberToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
