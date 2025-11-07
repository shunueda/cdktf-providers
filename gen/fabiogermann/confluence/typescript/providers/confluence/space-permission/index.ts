// https://registry.terraform.io/providers/fabiogermann/confluence/0.2.16/docs/resources/space_permission
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SpacePermissionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The group that is allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fabiogermann/confluence/0.2.16/docs/resources/space_permission#group SpacePermission#group}
  */
  readonly group: string;
  /**
  * The space key of the confluence space (all caps)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fabiogermann/confluence/0.2.16/docs/resources/space_permission#key SpacePermission#key}
  */
  readonly key: string;
  /**
  * The operation's ids for the group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fabiogermann/confluence/0.2.16/docs/resources/space_permission#operation_ids SpacePermission#operation_ids}
  */
  readonly operationIds?: { [key: string]: string };
  /**
  * The operations allowed for the group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fabiogermann/confluence/0.2.16/docs/resources/space_permission#operations SpacePermission#operations}
  */
  readonly operations: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/fabiogermann/confluence/0.2.16/docs/resources/space_permission confluence_space_permission}
*/
export class SpacePermission extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "confluence_space_permission";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SpacePermission resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SpacePermission to import
  * @param importFromId The id of the existing SpacePermission that should be imported. Refer to the {@link https://registry.terraform.io/providers/fabiogermann/confluence/0.2.16/docs/resources/space_permission#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SpacePermission to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "confluence_space_permission", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fabiogermann/confluence/0.2.16/docs/resources/space_permission confluence_space_permission} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SpacePermissionConfig
  */
  public constructor(scope: Construct, id: string, config: SpacePermissionConfig) {
    super(scope, id, {
      terraformResourceType: 'confluence_space_permission',
      terraformGeneratorMetadata: {
        providerName: 'confluence',
        providerVersion: '0.2.16'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._group = config.group;
    this._key = config.key;
    this._operationIds = config.operationIds;
    this._operations = config.operations;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operation_ids - computed: true, optional: true, required: false
  private _operationIds?: { [key: string]: string }; 
  public get operationIds() {
    return this.getStringMapAttribute('operation_ids');
  }
  public set operationIds(value: { [key: string]: string }) {
    this._operationIds = value;
  }
  public resetOperationIds() {
    this._operationIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationIdsInput() {
    return this._operationIds;
  }

  // operations - computed: false, optional: false, required: true
  private _operations?: string[]; 
  public get operations() {
    return this.getListAttribute('operations');
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group: cdktf.stringToTerraform(this._group),
      key: cdktf.stringToTerraform(this._key),
      operation_ids: cdktf.hashMapper(cdktf.stringToTerraform)(this._operationIds),
      operations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._operations),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group: {
        value: cdktf.stringToHclTerraform(this._group),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      operation_ids: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._operationIds),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      operations: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._operations),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
