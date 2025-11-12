// https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/data-sources/device_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetscalersdxDeviceGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/data-sources/device_group#id DataNetscalersdxDeviceGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Device Group Name. Maximum length =  255
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/data-sources/device_group#name DataNetscalersdxDeviceGroup#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/data-sources/device_group netscalersdx_device_group}
*/
export class DataNetscalersdxDeviceGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netscalersdx_device_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetscalersdxDeviceGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetscalersdxDeviceGroup to import
  * @param importFromId The id of the existing DataNetscalersdxDeviceGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/data-sources/device_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetscalersdxDeviceGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netscalersdx_device_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/data-sources/device_group netscalersdx_device_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetscalersdxDeviceGroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNetscalersdxDeviceGroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'netscalersdx_device_group',
      terraformGeneratorMetadata: {
        providerName: 'netscalersdx',
        providerVersion: '0.7.2',
        providerVersionConstraint: '0.7.2'
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // criteria_condn - computed: true, optional: false, required: false
  public get criteriaCondn() {
    return this.getStringAttribute('criteria_condn');
  }

  // criteria_type - computed: true, optional: false, required: false
  public get criteriaType() {
    return this.getStringAttribute('criteria_type');
  }

  // criteria_value - computed: true, optional: false, required: false
  public get criteriaValue() {
    return this.getStringAttribute('criteria_value');
  }

  // device_family - computed: true, optional: false, required: false
  public get deviceFamily() {
    return this.getStringAttribute('device_family');
  }

  // disable_upgrade - computed: true, optional: false, required: false
  public get disableUpgrade() {
    return this.getBooleanAttribute('disable_upgrade');
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getNumberAttribute('duration');
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

  // lock_acquire_time - computed: true, optional: false, required: false
  public get lockAcquireTime() {
    return this.getStringAttribute('lock_acquire_time');
  }

  // lock_acquiring_device - computed: true, optional: false, required: false
  public get lockAcquiringDevice() {
    return this.getStringAttribute('lock_acquiring_device');
  }

  // maintenance_window_start - computed: true, optional: false, required: false
  public get maintenanceWindowStart() {
    return this.getStringAttribute('maintenance_window_start');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // static_device_list - computed: true, optional: false, required: false
  public get staticDeviceList() {
    return this.getStringAttribute('static_device_list');
  }

  // static_device_list_arr - computed: true, optional: false, required: false
  public get staticDeviceListArr() {
    return cdktf.Fn.tolist(this.getListAttribute('static_device_list_arr'));
  }

  // upgrade_lock - computed: true, optional: false, required: false
  public get upgradeLock() {
    return this.getBooleanAttribute('upgrade_lock');
  }

  // upgrade_version - computed: true, optional: false, required: false
  public get upgradeVersion() {
    return this.getStringAttribute('upgrade_version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
