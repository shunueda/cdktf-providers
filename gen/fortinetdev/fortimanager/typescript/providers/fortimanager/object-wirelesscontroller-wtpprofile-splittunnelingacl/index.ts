// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_splittunnelingacl
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectWirelesscontrollerWtpprofileSplittunnelingaclConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_splittunnelingacl#adom ObjectWirelesscontrollerWtpprofileSplittunnelingacl#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_splittunnelingacl#dest_ip ObjectWirelesscontrollerWtpprofileSplittunnelingacl#dest_ip}
  */
  readonly destIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_splittunnelingacl#fosid ObjectWirelesscontrollerWtpprofileSplittunnelingacl#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_splittunnelingacl#id ObjectWirelesscontrollerWtpprofileSplittunnelingacl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_splittunnelingacl#scopetype ObjectWirelesscontrollerWtpprofileSplittunnelingacl#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_splittunnelingacl#wtp_profile ObjectWirelesscontrollerWtpprofileSplittunnelingacl#wtp_profile}
  */
  readonly wtpProfile: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_splittunnelingacl fortimanager_object_wirelesscontroller_wtpprofile_splittunnelingacl}
*/
export class ObjectWirelesscontrollerWtpprofileSplittunnelingacl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_wirelesscontroller_wtpprofile_splittunnelingacl";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectWirelesscontrollerWtpprofileSplittunnelingacl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectWirelesscontrollerWtpprofileSplittunnelingacl to import
  * @param importFromId The id of the existing ObjectWirelesscontrollerWtpprofileSplittunnelingacl that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_splittunnelingacl#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectWirelesscontrollerWtpprofileSplittunnelingacl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_wirelesscontroller_wtpprofile_splittunnelingacl", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_wtpprofile_splittunnelingacl fortimanager_object_wirelesscontroller_wtpprofile_splittunnelingacl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectWirelesscontrollerWtpprofileSplittunnelingaclConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectWirelesscontrollerWtpprofileSplittunnelingaclConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_wirelesscontroller_wtpprofile_splittunnelingacl',
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
    this._adom = config.adom;
    this._destIp = config.destIp;
    this._fosid = config.fosid;
    this._id = config.id;
    this._scopetype = config.scopetype;
    this._wtpProfile = config.wtpProfile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // dest_ip - computed: true, optional: true, required: false
  private _destIp?: string; 
  public get destIp() {
    return this.getStringAttribute('dest_ip');
  }
  public set destIp(value: string) {
    this._destIp = value;
  }
  public resetDestIp() {
    this._destIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destIpInput() {
    return this._destIp;
  }

  // fosid - computed: false, optional: true, required: false
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
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
      adom: cdktf.stringToTerraform(this._adom),
      dest_ip: cdktf.stringToTerraform(this._destIp),
      fosid: cdktf.numberToTerraform(this._fosid),
      id: cdktf.stringToTerraform(this._id),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      wtp_profile: cdktf.stringToTerraform(this._wtpProfile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dest_ip: {
        value: cdktf.stringToHclTerraform(this._destIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
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
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
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
