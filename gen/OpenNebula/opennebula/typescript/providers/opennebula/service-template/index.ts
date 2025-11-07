// https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/service_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the group that will own the Service Template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/service_template#gid ServiceTemplate#gid}
  */
  readonly gid?: number;
  /**
  * Name of the group that will own the Service Template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/service_template#gname ServiceTemplate#gname}
  */
  readonly gname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/service_template#id ServiceTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the Service Template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/service_template#name ServiceTemplate#name}
  */
  readonly name?: string;
  /**
  * Permissions for the Service Template (in Unix format, owner-group-other, use-manage-admin)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/service_template#permissions ServiceTemplate#permissions}
  */
  readonly permissions?: string;
  /**
  * Service Template body in json format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/service_template#template ServiceTemplate#template}
  */
  readonly template: string;
  /**
  * ID of the user that will own the Service Template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/service_template#uid ServiceTemplate#uid}
  */
  readonly uid?: number;
  /**
  * Name of the user that will own the Service Template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/service_template#uname ServiceTemplate#uname}
  */
  readonly uname?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/service_template opennebula_service_template}
*/
export class ServiceTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opennebula_service_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceTemplate to import
  * @param importFromId The id of the existing ServiceTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/service_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opennebula_service_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/service_template opennebula_service_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'opennebula_service_template',
      terraformGeneratorMetadata: {
        providerName: 'opennebula',
        providerVersion: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._gid = config.gid;
    this._gname = config.gname;
    this._id = config.id;
    this._name = config.name;
    this._permissions = config.permissions;
    this._template = config.template;
    this._uid = config.uid;
    this._uname = config.uname;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // gid - computed: true, optional: true, required: false
  private _gid?: number; 
  public get gid() {
    return this.getNumberAttribute('gid');
  }
  public set gid(value: number) {
    this._gid = value;
  }
  public resetGid() {
    this._gid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gidInput() {
    return this._gid;
  }

  // gname - computed: true, optional: true, required: false
  private _gname?: string; 
  public get gname() {
    return this.getStringAttribute('gname');
  }
  public set gname(value: string) {
    this._gname = value;
  }
  public resetGname() {
    this._gname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gnameInput() {
    return this._gname;
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

  // permissions - computed: true, optional: true, required: false
  private _permissions?: string; 
  public get permissions() {
    return this.getStringAttribute('permissions');
  }
  public set permissions(value: string) {
    this._permissions = value;
  }
  public resetPermissions() {
    this._permissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }

  // template - computed: false, optional: false, required: true
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // uid - computed: true, optional: true, required: false
  private _uid?: number; 
  public get uid() {
    return this.getNumberAttribute('uid');
  }
  public set uid(value: number) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }

  // uname - computed: true, optional: true, required: false
  private _uname?: string; 
  public get uname() {
    return this.getStringAttribute('uname');
  }
  public set uname(value: string) {
    this._uname = value;
  }
  public resetUname() {
    this._uname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unameInput() {
    return this._uname;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      gid: cdktf.numberToTerraform(this._gid),
      gname: cdktf.stringToTerraform(this._gname),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      permissions: cdktf.stringToTerraform(this._permissions),
      template: cdktf.stringToTerraform(this._template),
      uid: cdktf.numberToTerraform(this._uid),
      uname: cdktf.stringToTerraform(this._uname),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      gid: {
        value: cdktf.numberToHclTerraform(this._gid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gname: {
        value: cdktf.stringToHclTerraform(this._gname),
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
      permissions: {
        value: cdktf.stringToHclTerraform(this._permissions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template: {
        value: cdktf.stringToHclTerraform(this._template),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uid: {
        value: cdktf.numberToHclTerraform(this._uid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uname: {
        value: cdktf.stringToHclTerraform(this._uname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
