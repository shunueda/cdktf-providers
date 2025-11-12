// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/fmupdate_fwmsetting_upgradetimeout
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FmupdateFwmsettingUpgradetimeoutConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/fmupdate_fwmsetting_upgradetimeout#check_status_timeout FmupdateFwmsettingUpgradetimeout#check_status_timeout}
  */
  readonly checkStatusTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/fmupdate_fwmsetting_upgradetimeout#ctrl_check_status_timeout FmupdateFwmsettingUpgradetimeout#ctrl_check_status_timeout}
  */
  readonly ctrlCheckStatusTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/fmupdate_fwmsetting_upgradetimeout#ctrl_put_image_by_fds_timeout FmupdateFwmsettingUpgradetimeout#ctrl_put_image_by_fds_timeout}
  */
  readonly ctrlPutImageByFdsTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/fmupdate_fwmsetting_upgradetimeout#ha_sync_timeout FmupdateFwmsettingUpgradetimeout#ha_sync_timeout}
  */
  readonly haSyncTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/fmupdate_fwmsetting_upgradetimeout#health_check_timeout FmupdateFwmsettingUpgradetimeout#health_check_timeout}
  */
  readonly healthCheckTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/fmupdate_fwmsetting_upgradetimeout#id FmupdateFwmsettingUpgradetimeout#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/fmupdate_fwmsetting_upgradetimeout#license_check_timeout FmupdateFwmsettingUpgradetimeout#license_check_timeout}
  */
  readonly licenseCheckTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/fmupdate_fwmsetting_upgradetimeout#prepare_image_timeout FmupdateFwmsettingUpgradetimeout#prepare_image_timeout}
  */
  readonly prepareImageTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/fmupdate_fwmsetting_upgradetimeout#put_image_by_fds_timeout FmupdateFwmsettingUpgradetimeout#put_image_by_fds_timeout}
  */
  readonly putImageByFdsTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/fmupdate_fwmsetting_upgradetimeout#put_image_timeout FmupdateFwmsettingUpgradetimeout#put_image_timeout}
  */
  readonly putImageTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/fmupdate_fwmsetting_upgradetimeout#reboot_of_fsck_timeout FmupdateFwmsettingUpgradetimeout#reboot_of_fsck_timeout}
  */
  readonly rebootOfFsckTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/fmupdate_fwmsetting_upgradetimeout#reboot_of_upgrade_timeout FmupdateFwmsettingUpgradetimeout#reboot_of_upgrade_timeout}
  */
  readonly rebootOfUpgradeTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/fmupdate_fwmsetting_upgradetimeout#retrieve_timeout FmupdateFwmsettingUpgradetimeout#retrieve_timeout}
  */
  readonly retrieveTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/fmupdate_fwmsetting_upgradetimeout#rpc_timeout FmupdateFwmsettingUpgradetimeout#rpc_timeout}
  */
  readonly rpcTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/fmupdate_fwmsetting_upgradetimeout#total_timeout FmupdateFwmsettingUpgradetimeout#total_timeout}
  */
  readonly totalTimeout?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/fmupdate_fwmsetting_upgradetimeout fortimanager_fmupdate_fwmsetting_upgradetimeout}
*/
export class FmupdateFwmsettingUpgradetimeout extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_fmupdate_fwmsetting_upgradetimeout";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FmupdateFwmsettingUpgradetimeout resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FmupdateFwmsettingUpgradetimeout to import
  * @param importFromId The id of the existing FmupdateFwmsettingUpgradetimeout that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/fmupdate_fwmsetting_upgradetimeout#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FmupdateFwmsettingUpgradetimeout to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_fmupdate_fwmsetting_upgradetimeout", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/fmupdate_fwmsetting_upgradetimeout fortimanager_fmupdate_fwmsetting_upgradetimeout} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FmupdateFwmsettingUpgradetimeoutConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FmupdateFwmsettingUpgradetimeoutConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_fmupdate_fwmsetting_upgradetimeout',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._checkStatusTimeout = config.checkStatusTimeout;
    this._ctrlCheckStatusTimeout = config.ctrlCheckStatusTimeout;
    this._ctrlPutImageByFdsTimeout = config.ctrlPutImageByFdsTimeout;
    this._haSyncTimeout = config.haSyncTimeout;
    this._healthCheckTimeout = config.healthCheckTimeout;
    this._id = config.id;
    this._licenseCheckTimeout = config.licenseCheckTimeout;
    this._prepareImageTimeout = config.prepareImageTimeout;
    this._putImageByFdsTimeout = config.putImageByFdsTimeout;
    this._putImageTimeout = config.putImageTimeout;
    this._rebootOfFsckTimeout = config.rebootOfFsckTimeout;
    this._rebootOfUpgradeTimeout = config.rebootOfUpgradeTimeout;
    this._retrieveTimeout = config.retrieveTimeout;
    this._rpcTimeout = config.rpcTimeout;
    this._totalTimeout = config.totalTimeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // check_status_timeout - computed: true, optional: true, required: false
  private _checkStatusTimeout?: number; 
  public get checkStatusTimeout() {
    return this.getNumberAttribute('check_status_timeout');
  }
  public set checkStatusTimeout(value: number) {
    this._checkStatusTimeout = value;
  }
  public resetCheckStatusTimeout() {
    this._checkStatusTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkStatusTimeoutInput() {
    return this._checkStatusTimeout;
  }

  // ctrl_check_status_timeout - computed: true, optional: true, required: false
  private _ctrlCheckStatusTimeout?: number; 
  public get ctrlCheckStatusTimeout() {
    return this.getNumberAttribute('ctrl_check_status_timeout');
  }
  public set ctrlCheckStatusTimeout(value: number) {
    this._ctrlCheckStatusTimeout = value;
  }
  public resetCtrlCheckStatusTimeout() {
    this._ctrlCheckStatusTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ctrlCheckStatusTimeoutInput() {
    return this._ctrlCheckStatusTimeout;
  }

  // ctrl_put_image_by_fds_timeout - computed: true, optional: true, required: false
  private _ctrlPutImageByFdsTimeout?: number; 
  public get ctrlPutImageByFdsTimeout() {
    return this.getNumberAttribute('ctrl_put_image_by_fds_timeout');
  }
  public set ctrlPutImageByFdsTimeout(value: number) {
    this._ctrlPutImageByFdsTimeout = value;
  }
  public resetCtrlPutImageByFdsTimeout() {
    this._ctrlPutImageByFdsTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ctrlPutImageByFdsTimeoutInput() {
    return this._ctrlPutImageByFdsTimeout;
  }

  // ha_sync_timeout - computed: true, optional: true, required: false
  private _haSyncTimeout?: number; 
  public get haSyncTimeout() {
    return this.getNumberAttribute('ha_sync_timeout');
  }
  public set haSyncTimeout(value: number) {
    this._haSyncTimeout = value;
  }
  public resetHaSyncTimeout() {
    this._haSyncTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haSyncTimeoutInput() {
    return this._haSyncTimeout;
  }

  // health_check_timeout - computed: true, optional: true, required: false
  private _healthCheckTimeout?: number; 
  public get healthCheckTimeout() {
    return this.getNumberAttribute('health_check_timeout');
  }
  public set healthCheckTimeout(value: number) {
    this._healthCheckTimeout = value;
  }
  public resetHealthCheckTimeout() {
    this._healthCheckTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckTimeoutInput() {
    return this._healthCheckTimeout;
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

  // license_check_timeout - computed: true, optional: true, required: false
  private _licenseCheckTimeout?: number; 
  public get licenseCheckTimeout() {
    return this.getNumberAttribute('license_check_timeout');
  }
  public set licenseCheckTimeout(value: number) {
    this._licenseCheckTimeout = value;
  }
  public resetLicenseCheckTimeout() {
    this._licenseCheckTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseCheckTimeoutInput() {
    return this._licenseCheckTimeout;
  }

  // prepare_image_timeout - computed: true, optional: true, required: false
  private _prepareImageTimeout?: number; 
  public get prepareImageTimeout() {
    return this.getNumberAttribute('prepare_image_timeout');
  }
  public set prepareImageTimeout(value: number) {
    this._prepareImageTimeout = value;
  }
  public resetPrepareImageTimeout() {
    this._prepareImageTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prepareImageTimeoutInput() {
    return this._prepareImageTimeout;
  }

  // put_image_by_fds_timeout - computed: true, optional: true, required: false
  private _putImageByFdsTimeout?: number; 
  public get putImageByFdsTimeout() {
    return this.getNumberAttribute('put_image_by_fds_timeout');
  }
  public set putImageByFdsTimeout(value: number) {
    this._putImageByFdsTimeout = value;
  }
  public resetPutImageByFdsTimeout() {
    this._putImageByFdsTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get putImageByFdsTimeoutInput() {
    return this._putImageByFdsTimeout;
  }

  // put_image_timeout - computed: true, optional: true, required: false
  private _putImageTimeout?: number; 
  public get putImageTimeout() {
    return this.getNumberAttribute('put_image_timeout');
  }
  public set putImageTimeout(value: number) {
    this._putImageTimeout = value;
  }
  public resetPutImageTimeout() {
    this._putImageTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get putImageTimeoutInput() {
    return this._putImageTimeout;
  }

  // reboot_of_fsck_timeout - computed: true, optional: true, required: false
  private _rebootOfFsckTimeout?: number; 
  public get rebootOfFsckTimeout() {
    return this.getNumberAttribute('reboot_of_fsck_timeout');
  }
  public set rebootOfFsckTimeout(value: number) {
    this._rebootOfFsckTimeout = value;
  }
  public resetRebootOfFsckTimeout() {
    this._rebootOfFsckTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebootOfFsckTimeoutInput() {
    return this._rebootOfFsckTimeout;
  }

  // reboot_of_upgrade_timeout - computed: true, optional: true, required: false
  private _rebootOfUpgradeTimeout?: number; 
  public get rebootOfUpgradeTimeout() {
    return this.getNumberAttribute('reboot_of_upgrade_timeout');
  }
  public set rebootOfUpgradeTimeout(value: number) {
    this._rebootOfUpgradeTimeout = value;
  }
  public resetRebootOfUpgradeTimeout() {
    this._rebootOfUpgradeTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebootOfUpgradeTimeoutInput() {
    return this._rebootOfUpgradeTimeout;
  }

  // retrieve_timeout - computed: true, optional: true, required: false
  private _retrieveTimeout?: number; 
  public get retrieveTimeout() {
    return this.getNumberAttribute('retrieve_timeout');
  }
  public set retrieveTimeout(value: number) {
    this._retrieveTimeout = value;
  }
  public resetRetrieveTimeout() {
    this._retrieveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retrieveTimeoutInput() {
    return this._retrieveTimeout;
  }

  // rpc_timeout - computed: true, optional: true, required: false
  private _rpcTimeout?: number; 
  public get rpcTimeout() {
    return this.getNumberAttribute('rpc_timeout');
  }
  public set rpcTimeout(value: number) {
    this._rpcTimeout = value;
  }
  public resetRpcTimeout() {
    this._rpcTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpcTimeoutInput() {
    return this._rpcTimeout;
  }

  // total_timeout - computed: true, optional: true, required: false
  private _totalTimeout?: number; 
  public get totalTimeout() {
    return this.getNumberAttribute('total_timeout');
  }
  public set totalTimeout(value: number) {
    this._totalTimeout = value;
  }
  public resetTotalTimeout() {
    this._totalTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalTimeoutInput() {
    return this._totalTimeout;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      check_status_timeout: cdktf.numberToTerraform(this._checkStatusTimeout),
      ctrl_check_status_timeout: cdktf.numberToTerraform(this._ctrlCheckStatusTimeout),
      ctrl_put_image_by_fds_timeout: cdktf.numberToTerraform(this._ctrlPutImageByFdsTimeout),
      ha_sync_timeout: cdktf.numberToTerraform(this._haSyncTimeout),
      health_check_timeout: cdktf.numberToTerraform(this._healthCheckTimeout),
      id: cdktf.stringToTerraform(this._id),
      license_check_timeout: cdktf.numberToTerraform(this._licenseCheckTimeout),
      prepare_image_timeout: cdktf.numberToTerraform(this._prepareImageTimeout),
      put_image_by_fds_timeout: cdktf.numberToTerraform(this._putImageByFdsTimeout),
      put_image_timeout: cdktf.numberToTerraform(this._putImageTimeout),
      reboot_of_fsck_timeout: cdktf.numberToTerraform(this._rebootOfFsckTimeout),
      reboot_of_upgrade_timeout: cdktf.numberToTerraform(this._rebootOfUpgradeTimeout),
      retrieve_timeout: cdktf.numberToTerraform(this._retrieveTimeout),
      rpc_timeout: cdktf.numberToTerraform(this._rpcTimeout),
      total_timeout: cdktf.numberToTerraform(this._totalTimeout),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      check_status_timeout: {
        value: cdktf.numberToHclTerraform(this._checkStatusTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ctrl_check_status_timeout: {
        value: cdktf.numberToHclTerraform(this._ctrlCheckStatusTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ctrl_put_image_by_fds_timeout: {
        value: cdktf.numberToHclTerraform(this._ctrlPutImageByFdsTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ha_sync_timeout: {
        value: cdktf.numberToHclTerraform(this._haSyncTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health_check_timeout: {
        value: cdktf.numberToHclTerraform(this._healthCheckTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      license_check_timeout: {
        value: cdktf.numberToHclTerraform(this._licenseCheckTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      prepare_image_timeout: {
        value: cdktf.numberToHclTerraform(this._prepareImageTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      put_image_by_fds_timeout: {
        value: cdktf.numberToHclTerraform(this._putImageByFdsTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      put_image_timeout: {
        value: cdktf.numberToHclTerraform(this._putImageTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reboot_of_fsck_timeout: {
        value: cdktf.numberToHclTerraform(this._rebootOfFsckTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reboot_of_upgrade_timeout: {
        value: cdktf.numberToHclTerraform(this._rebootOfUpgradeTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retrieve_timeout: {
        value: cdktf.numberToHclTerraform(this._retrieveTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rpc_timeout: {
        value: cdktf.numberToHclTerraform(this._rpcTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      total_timeout: {
        value: cdktf.numberToHclTerraform(this._totalTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
