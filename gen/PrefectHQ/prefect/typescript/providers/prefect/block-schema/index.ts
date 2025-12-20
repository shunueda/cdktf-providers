// https://registry.terraform.io/providers/prefecthq/prefect/2.92.1/docs/resources/block_schema
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BlockSchemaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account ID (UUID) where the Block is located
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.1/docs/resources/block_schema#account_id BlockSchema#account_id}
  */
  readonly accountId?: string;
  /**
  * The ID of the block type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.1/docs/resources/block_schema#block_type_id BlockSchema#block_type_id}
  */
  readonly blockTypeId: string;
  /**
  * The capabilities of the block schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.1/docs/resources/block_schema#capabilities BlockSchema#capabilities}
  */
  readonly capabilities?: string[];
  /**
  * The fields of the block schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.1/docs/resources/block_schema#fields BlockSchema#fields}
  */
  readonly fields?: string;
  /**
  * The version of the block schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.1/docs/resources/block_schema#version BlockSchema#version}
  */
  readonly version?: string;
  /**
  * Workspace ID (UUID) where the Block is located. In Prefect Cloud, either the `prefect_block` resource or the provider's `workspace_id` must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.1/docs/resources/block_schema#workspace_id BlockSchema#workspace_id}
  */
  readonly workspaceId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.1/docs/resources/block_schema prefect_block_schema}
*/
export class BlockSchema extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prefect_block_schema";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BlockSchema resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BlockSchema to import
  * @param importFromId The id of the existing BlockSchema that should be imported. Refer to the {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.1/docs/resources/block_schema#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BlockSchema to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prefect_block_schema", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.1/docs/resources/block_schema prefect_block_schema} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BlockSchemaConfig
  */
  public constructor(scope: Construct, id: string, config: BlockSchemaConfig) {
    super(scope, id, {
      terraformResourceType: 'prefect_block_schema',
      terraformGeneratorMetadata: {
        providerName: 'prefect',
        providerVersion: '2.92.1',
        providerVersionConstraint: '2.92.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._blockTypeId = config.blockTypeId;
    this._capabilities = config.capabilities;
    this._fields = config.fields;
    this._version = config.version;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // block_type - computed: true, optional: false, required: false
  public get blockType() {
    return this.getStringAttribute('block_type');
  }

  // block_type_id - computed: false, optional: false, required: true
  private _blockTypeId?: string; 
  public get blockTypeId() {
    return this.getStringAttribute('block_type_id');
  }
  public set blockTypeId(value: string) {
    this._blockTypeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blockTypeIdInput() {
    return this._blockTypeId;
  }

  // capabilities - computed: false, optional: true, required: false
  private _capabilities?: string[]; 
  public get capabilities() {
    return this.getListAttribute('capabilities');
  }
  public set capabilities(value: string[]) {
    this._capabilities = value;
  }
  public resetCapabilities() {
    this._capabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities;
  }

  // checksum - computed: true, optional: false, required: false
  public get checksum() {
    return this.getStringAttribute('checksum');
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // fields - computed: false, optional: true, required: false
  private _fields?: string; 
  public get fields() {
    return this.getStringAttribute('fields');
  }
  public set fields(value: string) {
    this._fields = value;
  }
  public resetFields() {
    this._fields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // updated - computed: true, optional: false, required: false
  public get updated() {
    return this.getStringAttribute('updated');
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // workspace_id - computed: false, optional: true, required: false
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  public resetWorkspaceId() {
    this._workspaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      block_type_id: cdktf.stringToTerraform(this._blockTypeId),
      capabilities: cdktf.listMapper(cdktf.stringToTerraform, false)(this._capabilities),
      fields: cdktf.stringToTerraform(this._fields),
      version: cdktf.stringToTerraform(this._version),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      block_type_id: {
        value: cdktf.stringToHclTerraform(this._blockTypeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capabilities: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._capabilities),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      fields: {
        value: cdktf.stringToHclTerraform(this._fields),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
