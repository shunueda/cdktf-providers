// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_ha_mgmt_update
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemHaMgmtUpdateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_ha_mgmt_update#id SystemHaMgmtUpdate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_ha_mgmt_update#mgmt_interface SystemHaMgmtUpdate#mgmt_interface}
  */
  readonly mgmtInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_ha_mgmt_update#mgmt_ip SystemHaMgmtUpdate#mgmt_ip}
  */
  readonly mgmtIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_ha_mgmt_update#mgmt_ip_allowaccess SystemHaMgmtUpdate#mgmt_ip_allowaccess}
  */
  readonly mgmtIpAllowaccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_ha_mgmt_update#mgmt_status SystemHaMgmtUpdate#mgmt_status}
  */
  readonly mgmtStatus: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_ha_mgmt_update fortiadc_system_ha_mgmt_update}
*/
export class SystemHaMgmtUpdate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_system_ha_mgmt_update";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemHaMgmtUpdate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemHaMgmtUpdate to import
  * @param importFromId The id of the existing SystemHaMgmtUpdate that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_ha_mgmt_update#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemHaMgmtUpdate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_system_ha_mgmt_update", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_ha_mgmt_update fortiadc_system_ha_mgmt_update} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemHaMgmtUpdateConfig
  */
  public constructor(scope: Construct, id: string, config: SystemHaMgmtUpdateConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_system_ha_mgmt_update',
      terraformGeneratorMetadata: {
        providerName: 'fortiadc',
        providerVersion: '1.3.1',
        providerVersionConstraint: '1.3.1'
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
    this._mgmtInterface = config.mgmtInterface;
    this._mgmtIp = config.mgmtIp;
    this._mgmtIpAllowaccess = config.mgmtIpAllowaccess;
    this._mgmtStatus = config.mgmtStatus;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // mgmt_interface - computed: true, optional: true, required: false
  private _mgmtInterface?: string; 
  public get mgmtInterface() {
    return this.getStringAttribute('mgmt_interface');
  }
  public set mgmtInterface(value: string) {
    this._mgmtInterface = value;
  }
  public resetMgmtInterface() {
    this._mgmtInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtInterfaceInput() {
    return this._mgmtInterface;
  }

  // mgmt_ip - computed: true, optional: true, required: false
  private _mgmtIp?: string; 
  public get mgmtIp() {
    return this.getStringAttribute('mgmt_ip');
  }
  public set mgmtIp(value: string) {
    this._mgmtIp = value;
  }
  public resetMgmtIp() {
    this._mgmtIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtIpInput() {
    return this._mgmtIp;
  }

  // mgmt_ip_allowaccess - computed: true, optional: true, required: false
  private _mgmtIpAllowaccess?: string; 
  public get mgmtIpAllowaccess() {
    return this.getStringAttribute('mgmt_ip_allowaccess');
  }
  public set mgmtIpAllowaccess(value: string) {
    this._mgmtIpAllowaccess = value;
  }
  public resetMgmtIpAllowaccess() {
    this._mgmtIpAllowaccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtIpAllowaccessInput() {
    return this._mgmtIpAllowaccess;
  }

  // mgmt_status - computed: false, optional: false, required: true
  private _mgmtStatus?: string; 
  public get mgmtStatus() {
    return this.getStringAttribute('mgmt_status');
  }
  public set mgmtStatus(value: string) {
    this._mgmtStatus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtStatusInput() {
    return this._mgmtStatus;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      mgmt_interface: cdktf.stringToTerraform(this._mgmtInterface),
      mgmt_ip: cdktf.stringToTerraform(this._mgmtIp),
      mgmt_ip_allowaccess: cdktf.stringToTerraform(this._mgmtIpAllowaccess),
      mgmt_status: cdktf.stringToTerraform(this._mgmtStatus),
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
      mgmt_interface: {
        value: cdktf.stringToHclTerraform(this._mgmtInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mgmt_ip: {
        value: cdktf.stringToHclTerraform(this._mgmtIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mgmt_ip_allowaccess: {
        value: cdktf.stringToHclTerraform(this._mgmtIpAllowaccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mgmt_status: {
        value: cdktf.stringToHclTerraform(this._mgmtStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
