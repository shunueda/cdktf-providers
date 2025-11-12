// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_adom_options
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectAdomOptionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_adom_options#adom ObjectAdomOptions#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_adom_options#assign_excluded ObjectAdomOptions#assign_excluded}
  */
  readonly assignExcluded?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_adom_options#assign_name ObjectAdomOptions#assign_name}
  */
  readonly assignName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_adom_options#id ObjectAdomOptions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_adom_options#scopetype ObjectAdomOptions#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_adom_options#specify_assign_pkg_list ObjectAdomOptions#specify_assign_pkg_list}
  */
  readonly specifyAssignPkgList?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_adom_options fortimanager_object_adom_options}
*/
export class ObjectAdomOptions extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_adom_options";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectAdomOptions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectAdomOptions to import
  * @param importFromId The id of the existing ObjectAdomOptions that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_adom_options#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectAdomOptions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_adom_options", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_adom_options fortimanager_object_adom_options} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectAdomOptionsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectAdomOptionsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_adom_options',
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
    this._adom = config.adom;
    this._assignExcluded = config.assignExcluded;
    this._assignName = config.assignName;
    this._id = config.id;
    this._scopetype = config.scopetype;
    this._specifyAssignPkgList = config.specifyAssignPkgList;
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

  // assign_excluded - computed: false, optional: true, required: false
  private _assignExcluded?: string; 
  public get assignExcluded() {
    return this.getStringAttribute('assign_excluded');
  }
  public set assignExcluded(value: string) {
    this._assignExcluded = value;
  }
  public resetAssignExcluded() {
    this._assignExcluded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignExcludedInput() {
    return this._assignExcluded;
  }

  // assign_name - computed: false, optional: true, required: false
  private _assignName?: string; 
  public get assignName() {
    return this.getStringAttribute('assign_name');
  }
  public set assignName(value: string) {
    this._assignName = value;
  }
  public resetAssignName() {
    this._assignName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignNameInput() {
    return this._assignName;
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

  // specify_assign_pkg_list - computed: false, optional: true, required: false
  private _specifyAssignPkgList?: string; 
  public get specifyAssignPkgList() {
    return this.getStringAttribute('specify_assign_pkg_list');
  }
  public set specifyAssignPkgList(value: string) {
    this._specifyAssignPkgList = value;
  }
  public resetSpecifyAssignPkgList() {
    this._specifyAssignPkgList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specifyAssignPkgListInput() {
    return this._specifyAssignPkgList;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      assign_excluded: cdktf.stringToTerraform(this._assignExcluded),
      assign_name: cdktf.stringToTerraform(this._assignName),
      id: cdktf.stringToTerraform(this._id),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      specify_assign_pkg_list: cdktf.stringToTerraform(this._specifyAssignPkgList),
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
      assign_excluded: {
        value: cdktf.stringToHclTerraform(this._assignExcluded),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      assign_name: {
        value: cdktf.stringToHclTerraform(this._assignName),
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
      specify_assign_pkg_list: {
        value: cdktf.stringToHclTerraform(this._specifyAssignPkgList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
