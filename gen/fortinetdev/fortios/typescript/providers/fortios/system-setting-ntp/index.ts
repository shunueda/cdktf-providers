// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_setting_ntp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemSettingNtpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_setting_ntp#id SystemSettingNtp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_setting_ntp#ntpserver SystemSettingNtp#ntpserver}
  */
  readonly ntpserver?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_setting_ntp#ntpsync SystemSettingNtp#ntpsync}
  */
  readonly ntpsync?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_setting_ntp#type SystemSettingNtp#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_setting_ntp fortios_system_setting_ntp}
*/
export class SystemSettingNtp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_system_setting_ntp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemSettingNtp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemSettingNtp to import
  * @param importFromId The id of the existing SystemSettingNtp that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_setting_ntp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemSettingNtp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_system_setting_ntp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_setting_ntp fortios_system_setting_ntp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemSettingNtpConfig
  */
  public constructor(scope: Construct, id: string, config: SystemSettingNtpConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_system_setting_ntp',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
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
    this._ntpserver = config.ntpserver;
    this._ntpsync = config.ntpsync;
    this._type = config.type;
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

  // ntpserver - computed: true, optional: true, required: false
  private _ntpserver?: string[]; 
  public get ntpserver() {
    return this.getListAttribute('ntpserver');
  }
  public set ntpserver(value: string[]) {
    this._ntpserver = value;
  }
  public resetNtpserver() {
    this._ntpserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpserverInput() {
    return this._ntpserver;
  }

  // ntpsync - computed: true, optional: true, required: false
  private _ntpsync?: string; 
  public get ntpsync() {
    return this.getStringAttribute('ntpsync');
  }
  public set ntpsync(value: string) {
    this._ntpsync = value;
  }
  public resetNtpsync() {
    this._ntpsync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpsyncInput() {
    return this._ntpsync;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
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
      id: cdktf.stringToTerraform(this._id),
      ntpserver: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ntpserver),
      ntpsync: cdktf.stringToTerraform(this._ntpsync),
      type: cdktf.stringToTerraform(this._type),
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
      ntpserver: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ntpserver),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ntpsync: {
        value: cdktf.stringToHclTerraform(this._ntpsync),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
