// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group_dynamic_mapping_match
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectUserGroupDynamicMappingMatchAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group_dynamic_mapping_match#_gui_meta ObjectUserGroupDynamicMappingMatchA#_gui_meta}
  */
  readonly guiMeta?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group_dynamic_mapping_match#adom ObjectUserGroupDynamicMappingMatchA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group_dynamic_mapping_match#dynamic_mapping_name ObjectUserGroupDynamicMappingMatchA#dynamic_mapping_name}
  */
  readonly dynamicMappingName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group_dynamic_mapping_match#dynamic_mapping_vdom ObjectUserGroupDynamicMappingMatchA#dynamic_mapping_vdom}
  */
  readonly dynamicMappingVdom: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group_dynamic_mapping_match#fosid ObjectUserGroupDynamicMappingMatchA#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group_dynamic_mapping_match#group ObjectUserGroupDynamicMappingMatchA#group}
  */
  readonly group: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group_dynamic_mapping_match#group_name ObjectUserGroupDynamicMappingMatchA#group_name}
  */
  readonly groupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group_dynamic_mapping_match#id ObjectUserGroupDynamicMappingMatchA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group_dynamic_mapping_match#scopetype ObjectUserGroupDynamicMappingMatchA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group_dynamic_mapping_match#server_name ObjectUserGroupDynamicMappingMatchA#server_name}
  */
  readonly serverName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group_dynamic_mapping_match fortimanager_object_user_group_dynamic_mapping_match}
*/
export class ObjectUserGroupDynamicMappingMatchA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_user_group_dynamic_mapping_match";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectUserGroupDynamicMappingMatchA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectUserGroupDynamicMappingMatchA to import
  * @param importFromId The id of the existing ObjectUserGroupDynamicMappingMatchA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group_dynamic_mapping_match#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectUserGroupDynamicMappingMatchA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_user_group_dynamic_mapping_match", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group_dynamic_mapping_match fortimanager_object_user_group_dynamic_mapping_match} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectUserGroupDynamicMappingMatchAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectUserGroupDynamicMappingMatchAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_user_group_dynamic_mapping_match',
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
    this._guiMeta = config.guiMeta;
    this._adom = config.adom;
    this._dynamicMappingName = config.dynamicMappingName;
    this._dynamicMappingVdom = config.dynamicMappingVdom;
    this._fosid = config.fosid;
    this._group = config.group;
    this._groupName = config.groupName;
    this._id = config.id;
    this._scopetype = config.scopetype;
    this._serverName = config.serverName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // _gui_meta - computed: false, optional: true, required: false
  private _guiMeta?: string; 
  public get guiMeta() {
    return this.getStringAttribute('_gui_meta');
  }
  public set guiMeta(value: string) {
    this._guiMeta = value;
  }
  public resetGuiMeta() {
    this._guiMeta = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiMetaInput() {
    return this._guiMeta;
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

  // dynamic_mapping_name - computed: false, optional: false, required: true
  private _dynamicMappingName?: string; 
  public get dynamicMappingName() {
    return this.getStringAttribute('dynamic_mapping_name');
  }
  public set dynamicMappingName(value: string) {
    this._dynamicMappingName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicMappingNameInput() {
    return this._dynamicMappingName;
  }

  // dynamic_mapping_vdom - computed: false, optional: false, required: true
  private _dynamicMappingVdom?: string; 
  public get dynamicMappingVdom() {
    return this.getStringAttribute('dynamic_mapping_vdom');
  }
  public set dynamicMappingVdom(value: string) {
    this._dynamicMappingVdom = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicMappingVdomInput() {
    return this._dynamicMappingVdom;
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

  // group - computed: false, optional: false, required: true
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // group_name - computed: false, optional: true, required: false
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  public resetGroupName() {
    this._groupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
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

  // server_name - computed: false, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      _gui_meta: cdktf.stringToTerraform(this._guiMeta),
      adom: cdktf.stringToTerraform(this._adom),
      dynamic_mapping_name: cdktf.stringToTerraform(this._dynamicMappingName),
      dynamic_mapping_vdom: cdktf.stringToTerraform(this._dynamicMappingVdom),
      fosid: cdktf.numberToTerraform(this._fosid),
      group: cdktf.stringToTerraform(this._group),
      group_name: cdktf.stringToTerraform(this._groupName),
      id: cdktf.stringToTerraform(this._id),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      server_name: cdktf.stringToTerraform(this._serverName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      _gui_meta: {
        value: cdktf.stringToHclTerraform(this._guiMeta),
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
      dynamic_mapping_name: {
        value: cdktf.stringToHclTerraform(this._dynamicMappingName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_mapping_vdom: {
        value: cdktf.stringToHclTerraform(this._dynamicMappingVdom),
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
      group: {
        value: cdktf.stringToHclTerraform(this._group),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_name: {
        value: cdktf.stringToHclTerraform(this._groupName),
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
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_name: {
        value: cdktf.stringToHclTerraform(this._serverName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
