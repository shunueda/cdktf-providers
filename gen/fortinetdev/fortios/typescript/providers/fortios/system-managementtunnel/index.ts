// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_managementtunnel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemManagementtunnelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_managementtunnel#allow_collect_statistics SystemManagementtunnel#allow_collect_statistics}
  */
  readonly allowCollectStatistics?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_managementtunnel#allow_config_restore SystemManagementtunnel#allow_config_restore}
  */
  readonly allowConfigRestore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_managementtunnel#allow_push_configuration SystemManagementtunnel#allow_push_configuration}
  */
  readonly allowPushConfiguration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_managementtunnel#allow_push_firmware SystemManagementtunnel#allow_push_firmware}
  */
  readonly allowPushFirmware?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_managementtunnel#authorized_manager_only SystemManagementtunnel#authorized_manager_only}
  */
  readonly authorizedManagerOnly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_managementtunnel#id SystemManagementtunnel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_managementtunnel#serial_number SystemManagementtunnel#serial_number}
  */
  readonly serialNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_managementtunnel#status SystemManagementtunnel#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_managementtunnel#vdomparam SystemManagementtunnel#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_managementtunnel fortios_system_managementtunnel}
*/
export class SystemManagementtunnel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_system_managementtunnel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemManagementtunnel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemManagementtunnel to import
  * @param importFromId The id of the existing SystemManagementtunnel that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_managementtunnel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemManagementtunnel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_system_managementtunnel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_managementtunnel fortios_system_managementtunnel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemManagementtunnelConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemManagementtunnelConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_system_managementtunnel',
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
    this._allowCollectStatistics = config.allowCollectStatistics;
    this._allowConfigRestore = config.allowConfigRestore;
    this._allowPushConfiguration = config.allowPushConfiguration;
    this._allowPushFirmware = config.allowPushFirmware;
    this._authorizedManagerOnly = config.authorizedManagerOnly;
    this._id = config.id;
    this._serialNumber = config.serialNumber;
    this._status = config.status;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_collect_statistics - computed: true, optional: true, required: false
  private _allowCollectStatistics?: string; 
  public get allowCollectStatistics() {
    return this.getStringAttribute('allow_collect_statistics');
  }
  public set allowCollectStatistics(value: string) {
    this._allowCollectStatistics = value;
  }
  public resetAllowCollectStatistics() {
    this._allowCollectStatistics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCollectStatisticsInput() {
    return this._allowCollectStatistics;
  }

  // allow_config_restore - computed: true, optional: true, required: false
  private _allowConfigRestore?: string; 
  public get allowConfigRestore() {
    return this.getStringAttribute('allow_config_restore');
  }
  public set allowConfigRestore(value: string) {
    this._allowConfigRestore = value;
  }
  public resetAllowConfigRestore() {
    this._allowConfigRestore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowConfigRestoreInput() {
    return this._allowConfigRestore;
  }

  // allow_push_configuration - computed: true, optional: true, required: false
  private _allowPushConfiguration?: string; 
  public get allowPushConfiguration() {
    return this.getStringAttribute('allow_push_configuration');
  }
  public set allowPushConfiguration(value: string) {
    this._allowPushConfiguration = value;
  }
  public resetAllowPushConfiguration() {
    this._allowPushConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPushConfigurationInput() {
    return this._allowPushConfiguration;
  }

  // allow_push_firmware - computed: true, optional: true, required: false
  private _allowPushFirmware?: string; 
  public get allowPushFirmware() {
    return this.getStringAttribute('allow_push_firmware');
  }
  public set allowPushFirmware(value: string) {
    this._allowPushFirmware = value;
  }
  public resetAllowPushFirmware() {
    this._allowPushFirmware = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPushFirmwareInput() {
    return this._allowPushFirmware;
  }

  // authorized_manager_only - computed: true, optional: true, required: false
  private _authorizedManagerOnly?: string; 
  public get authorizedManagerOnly() {
    return this.getStringAttribute('authorized_manager_only');
  }
  public set authorizedManagerOnly(value: string) {
    this._authorizedManagerOnly = value;
  }
  public resetAuthorizedManagerOnly() {
    this._authorizedManagerOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedManagerOnlyInput() {
    return this._authorizedManagerOnly;
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

  // serial_number - computed: false, optional: true, required: false
  private _serialNumber?: string; 
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }
  public resetSerialNumber() {
    this._serialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_collect_statistics: cdktf.stringToTerraform(this._allowCollectStatistics),
      allow_config_restore: cdktf.stringToTerraform(this._allowConfigRestore),
      allow_push_configuration: cdktf.stringToTerraform(this._allowPushConfiguration),
      allow_push_firmware: cdktf.stringToTerraform(this._allowPushFirmware),
      authorized_manager_only: cdktf.stringToTerraform(this._authorizedManagerOnly),
      id: cdktf.stringToTerraform(this._id),
      serial_number: cdktf.stringToTerraform(this._serialNumber),
      status: cdktf.stringToTerraform(this._status),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_collect_statistics: {
        value: cdktf.stringToHclTerraform(this._allowCollectStatistics),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_config_restore: {
        value: cdktf.stringToHclTerraform(this._allowConfigRestore),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_push_configuration: {
        value: cdktf.stringToHclTerraform(this._allowPushConfiguration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_push_firmware: {
        value: cdktf.stringToHclTerraform(this._allowPushFirmware),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorized_manager_only: {
        value: cdktf.stringToHclTerraform(this._authorizedManagerOnly),
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
      serial_number: {
        value: cdktf.stringToHclTerraform(this._serialNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
