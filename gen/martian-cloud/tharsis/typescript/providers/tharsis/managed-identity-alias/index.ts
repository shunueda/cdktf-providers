// https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs/resources/managed_identity_alias
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagedIdentityAliasConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the managed identity being aliased.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs/resources/managed_identity_alias#alias_source_id ManagedIdentityAlias#alias_source_id}
  */
  readonly aliasSourceId?: string;
  /**
  * Full path of the managed identity being aliased.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs/resources/managed_identity_alias#alias_source_path ManagedIdentityAlias#alias_source_path}
  */
  readonly aliasSourcePath?: string;
  /**
  * Full path of the group where alias will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs/resources/managed_identity_alias#group_path ManagedIdentityAlias#group_path}
  */
  readonly groupPath: string;
  /**
  * The name of the managed identity alias.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs/resources/managed_identity_alias#name ManagedIdentityAlias#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs/resources/managed_identity_alias tharsis_managed_identity_alias}
*/
export class ManagedIdentityAlias extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tharsis_managed_identity_alias";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagedIdentityAlias resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagedIdentityAlias to import
  * @param importFromId The id of the existing ManagedIdentityAlias that should be imported. Refer to the {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs/resources/managed_identity_alias#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagedIdentityAlias to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tharsis_managed_identity_alias", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs/resources/managed_identity_alias tharsis_managed_identity_alias} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagedIdentityAliasConfig
  */
  public constructor(scope: Construct, id: string, config: ManagedIdentityAliasConfig) {
    super(scope, id, {
      terraformResourceType: 'tharsis_managed_identity_alias',
      terraformGeneratorMetadata: {
        providerName: 'tharsis',
        providerVersion: '0.14.1',
        providerVersionConstraint: '0.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aliasSourceId = config.aliasSourceId;
    this._aliasSourcePath = config.aliasSourcePath;
    this._groupPath = config.groupPath;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias_source_id - computed: true, optional: true, required: false
  private _aliasSourceId?: string; 
  public get aliasSourceId() {
    return this.getStringAttribute('alias_source_id');
  }
  public set aliasSourceId(value: string) {
    this._aliasSourceId = value;
  }
  public resetAliasSourceId() {
    this._aliasSourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasSourceIdInput() {
    return this._aliasSourceId;
  }

  // alias_source_path - computed: false, optional: true, required: false
  private _aliasSourcePath?: string; 
  public get aliasSourcePath() {
    return this.getStringAttribute('alias_source_path');
  }
  public set aliasSourcePath(value: string) {
    this._aliasSourcePath = value;
  }
  public resetAliasSourcePath() {
    this._aliasSourcePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasSourcePathInput() {
    return this._aliasSourcePath;
  }

  // group_path - computed: false, optional: false, required: true
  private _groupPath?: string; 
  public get groupPath() {
    return this.getStringAttribute('group_path');
  }
  public set groupPath(value: string) {
    this._groupPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupPathInput() {
    return this._groupPath;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // resource_path - computed: true, optional: false, required: false
  public get resourcePath() {
    return this.getStringAttribute('resource_path');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias_source_id: cdktf.stringToTerraform(this._aliasSourceId),
      alias_source_path: cdktf.stringToTerraform(this._aliasSourcePath),
      group_path: cdktf.stringToTerraform(this._groupPath),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alias_source_id: {
        value: cdktf.stringToHclTerraform(this._aliasSourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias_source_path: {
        value: cdktf.stringToHclTerraform(this._aliasSourcePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_path: {
        value: cdktf.stringToHclTerraform(this._groupPath),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
