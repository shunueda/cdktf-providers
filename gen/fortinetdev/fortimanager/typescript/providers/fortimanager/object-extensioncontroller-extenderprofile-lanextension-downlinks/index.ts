// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_lanextension_downlinks
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectExtensioncontrollerExtenderprofileLanextensionDownlinksAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_lanextension_downlinks#adom ObjectExtensioncontrollerExtenderprofileLanextensionDownlinksA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_lanextension_downlinks#extender_profile ObjectExtensioncontrollerExtenderprofileLanextensionDownlinksA#extender_profile}
  */
  readonly extenderProfile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_lanextension_downlinks#id ObjectExtensioncontrollerExtenderprofileLanextensionDownlinksA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_lanextension_downlinks#name ObjectExtensioncontrollerExtenderprofileLanextensionDownlinksA#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_lanextension_downlinks#port ObjectExtensioncontrollerExtenderprofileLanextensionDownlinksA#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_lanextension_downlinks#pvid ObjectExtensioncontrollerExtenderprofileLanextensionDownlinksA#pvid}
  */
  readonly pvid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_lanextension_downlinks#scopetype ObjectExtensioncontrollerExtenderprofileLanextensionDownlinksA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_lanextension_downlinks#type ObjectExtensioncontrollerExtenderprofileLanextensionDownlinksA#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_lanextension_downlinks#vap ObjectExtensioncontrollerExtenderprofileLanextensionDownlinksA#vap}
  */
  readonly vap?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_lanextension_downlinks fortimanager_object_extensioncontroller_extenderprofile_lanextension_downlinks}
*/
export class ObjectExtensioncontrollerExtenderprofileLanextensionDownlinksA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_extensioncontroller_extenderprofile_lanextension_downlinks";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectExtensioncontrollerExtenderprofileLanextensionDownlinksA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectExtensioncontrollerExtenderprofileLanextensionDownlinksA to import
  * @param importFromId The id of the existing ObjectExtensioncontrollerExtenderprofileLanextensionDownlinksA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_lanextension_downlinks#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectExtensioncontrollerExtenderprofileLanextensionDownlinksA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_extensioncontroller_extenderprofile_lanextension_downlinks", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_lanextension_downlinks fortimanager_object_extensioncontroller_extenderprofile_lanextension_downlinks} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectExtensioncontrollerExtenderprofileLanextensionDownlinksAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectExtensioncontrollerExtenderprofileLanextensionDownlinksAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_extensioncontroller_extenderprofile_lanextension_downlinks',
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
    this._extenderProfile = config.extenderProfile;
    this._id = config.id;
    this._name = config.name;
    this._port = config.port;
    this._pvid = config.pvid;
    this._scopetype = config.scopetype;
    this._type = config.type;
    this._vap = config.vap;
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

  // extender_profile - computed: false, optional: false, required: true
  private _extenderProfile?: string; 
  public get extenderProfile() {
    return this.getStringAttribute('extender_profile');
  }
  public set extenderProfile(value: string) {
    this._extenderProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extenderProfileInput() {
    return this._extenderProfile;
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

  // name - computed: false, optional: true, required: false
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

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // pvid - computed: false, optional: true, required: false
  private _pvid?: number; 
  public get pvid() {
    return this.getNumberAttribute('pvid');
  }
  public set pvid(value: number) {
    this._pvid = value;
  }
  public resetPvid() {
    this._pvid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvidInput() {
    return this._pvid;
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

  // vap - computed: true, optional: true, required: false
  private _vap?: string[]; 
  public get vap() {
    return cdktf.Fn.tolist(this.getListAttribute('vap'));
  }
  public set vap(value: string[]) {
    this._vap = value;
  }
  public resetVap() {
    this._vap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vapInput() {
    return this._vap;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      extender_profile: cdktf.stringToTerraform(this._extenderProfile),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      port: cdktf.stringToTerraform(this._port),
      pvid: cdktf.numberToTerraform(this._pvid),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      type: cdktf.stringToTerraform(this._type),
      vap: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vap),
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
      extender_profile: {
        value: cdktf.stringToHclTerraform(this._extenderProfile),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.stringToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pvid: {
        value: cdktf.numberToHclTerraform(this._pvid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      vap: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vap),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
