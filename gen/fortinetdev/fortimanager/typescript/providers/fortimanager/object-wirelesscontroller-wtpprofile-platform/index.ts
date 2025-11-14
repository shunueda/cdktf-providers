// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_wtpprofile_platform
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectWirelesscontrollerWtpprofilePlatformAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_wtpprofile_platform#_local_platform_str ObjectWirelesscontrollerWtpprofilePlatformA#_local_platform_str}
  */
  readonly localPlatformStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_wtpprofile_platform#adom ObjectWirelesscontrollerWtpprofilePlatformA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_wtpprofile_platform#ddscan ObjectWirelesscontrollerWtpprofilePlatformA#ddscan}
  */
  readonly ddscan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_wtpprofile_platform#id ObjectWirelesscontrollerWtpprofilePlatformA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_wtpprofile_platform#mode ObjectWirelesscontrollerWtpprofilePlatformA#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_wtpprofile_platform#scopetype ObjectWirelesscontrollerWtpprofilePlatformA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_wtpprofile_platform#type ObjectWirelesscontrollerWtpprofilePlatformA#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_wtpprofile_platform#wtp_profile ObjectWirelesscontrollerWtpprofilePlatformA#wtp_profile}
  */
  readonly wtpProfile: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_wtpprofile_platform fortimanager_object_wirelesscontroller_wtpprofile_platform}
*/
export class ObjectWirelesscontrollerWtpprofilePlatformA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_wirelesscontroller_wtpprofile_platform";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectWirelesscontrollerWtpprofilePlatformA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectWirelesscontrollerWtpprofilePlatformA to import
  * @param importFromId The id of the existing ObjectWirelesscontrollerWtpprofilePlatformA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_wtpprofile_platform#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectWirelesscontrollerWtpprofilePlatformA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_wirelesscontroller_wtpprofile_platform", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_wtpprofile_platform fortimanager_object_wirelesscontroller_wtpprofile_platform} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectWirelesscontrollerWtpprofilePlatformAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectWirelesscontrollerWtpprofilePlatformAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_wirelesscontroller_wtpprofile_platform',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._localPlatformStr = config.localPlatformStr;
    this._adom = config.adom;
    this._ddscan = config.ddscan;
    this._id = config.id;
    this._mode = config.mode;
    this._scopetype = config.scopetype;
    this._type = config.type;
    this._wtpProfile = config.wtpProfile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // _local_platform_str - computed: false, optional: true, required: false
  private _localPlatformStr?: string; 
  public get localPlatformStr() {
    return this.getStringAttribute('_local_platform_str');
  }
  public set localPlatformStr(value: string) {
    this._localPlatformStr = value;
  }
  public resetLocalPlatformStr() {
    this._localPlatformStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPlatformStrInput() {
    return this._localPlatformStr;
  }

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // ddscan - computed: true, optional: true, required: false
  private _ddscan?: string; 
  public get ddscan() {
    return this.getStringAttribute('ddscan');
  }
  public set ddscan(value: string) {
    this._ddscan = value;
  }
  public resetDdscan() {
    this._ddscan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddscanInput() {
    return this._ddscan;
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

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // type - computed: true, optional: true, required: false
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

  // wtp_profile - computed: false, optional: false, required: true
  private _wtpProfile?: string; 
  public get wtpProfile() {
    return this.getStringAttribute('wtp_profile');
  }
  public set wtpProfile(value: string) {
    this._wtpProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wtpProfileInput() {
    return this._wtpProfile;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      _local_platform_str: cdktf.stringToTerraform(this._localPlatformStr),
      adom: cdktf.stringToTerraform(this._adom),
      ddscan: cdktf.stringToTerraform(this._ddscan),
      id: cdktf.stringToTerraform(this._id),
      mode: cdktf.stringToTerraform(this._mode),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      type: cdktf.stringToTerraform(this._type),
      wtp_profile: cdktf.stringToTerraform(this._wtpProfile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      _local_platform_str: {
        value: cdktf.stringToHclTerraform(this._localPlatformStr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddscan: {
        value: cdktf.stringToHclTerraform(this._ddscan),
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
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
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
      wtp_profile: {
        value: cdktf.stringToHclTerraform(this._wtpProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
