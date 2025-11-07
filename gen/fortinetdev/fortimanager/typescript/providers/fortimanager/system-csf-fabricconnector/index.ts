// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_csf_fabricconnector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemCsfFabricconnectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_csf_fabricconnector#accprofile SystemCsfFabricconnector#accprofile}
  */
  readonly accprofile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_csf_fabricconnector#configuration_write_access SystemCsfFabricconnector#configuration_write_access}
  */
  readonly configurationWriteAccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_csf_fabricconnector#id SystemCsfFabricconnector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_csf_fabricconnector#serial SystemCsfFabricconnector#serial}
  */
  readonly serial?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_csf_fabricconnector fortimanager_system_csf_fabricconnector}
*/
export class SystemCsfFabricconnector extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_system_csf_fabricconnector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemCsfFabricconnector resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemCsfFabricconnector to import
  * @param importFromId The id of the existing SystemCsfFabricconnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_csf_fabricconnector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemCsfFabricconnector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_system_csf_fabricconnector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_csf_fabricconnector fortimanager_system_csf_fabricconnector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemCsfFabricconnectorConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemCsfFabricconnectorConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_system_csf_fabricconnector',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accprofile = config.accprofile;
    this._configurationWriteAccess = config.configurationWriteAccess;
    this._id = config.id;
    this._serial = config.serial;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accprofile - computed: false, optional: true, required: false
  private _accprofile?: string; 
  public get accprofile() {
    return this.getStringAttribute('accprofile');
  }
  public set accprofile(value: string) {
    this._accprofile = value;
  }
  public resetAccprofile() {
    this._accprofile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accprofileInput() {
    return this._accprofile;
  }

  // configuration_write_access - computed: true, optional: true, required: false
  private _configurationWriteAccess?: string; 
  public get configurationWriteAccess() {
    return this.getStringAttribute('configuration_write_access');
  }
  public set configurationWriteAccess(value: string) {
    this._configurationWriteAccess = value;
  }
  public resetConfigurationWriteAccess() {
    this._configurationWriteAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationWriteAccessInput() {
    return this._configurationWriteAccess;
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

  // serial - computed: false, optional: true, required: false
  private _serial?: string; 
  public get serial() {
    return this.getStringAttribute('serial');
  }
  public set serial(value: string) {
    this._serial = value;
  }
  public resetSerial() {
    this._serial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialInput() {
    return this._serial;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accprofile: cdktf.stringToTerraform(this._accprofile),
      configuration_write_access: cdktf.stringToTerraform(this._configurationWriteAccess),
      id: cdktf.stringToTerraform(this._id),
      serial: cdktf.stringToTerraform(this._serial),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accprofile: {
        value: cdktf.stringToHclTerraform(this._accprofile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration_write_access: {
        value: cdktf.stringToHclTerraform(this._configurationWriteAccess),
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
      serial: {
        value: cdktf.stringToHclTerraform(this._serial),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
