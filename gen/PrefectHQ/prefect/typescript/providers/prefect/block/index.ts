// https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/block
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BlockConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account ID (UUID) where the Block is located
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/block#account_id Block#account_id}
  */
  readonly accountId?: string;
  /**
  * The user-inputted Block payload, as a JSON string. Use `jsonencode` on the provided value to satisfy the underlying JSON type. The value's schema will depend on the selected `type` slug. Use `prefect block type inspect <slug>` to view the data schema for a given Block type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/block#data Block#data}
  */
  readonly data?: string;
  /**
  * The user-inputted Block payload, as a JSON string. Use `jsonencode` on the provided value to satisfy the underlying JSON type. The value's schema will depend on the selected `type` slug. Use `prefect block type inspect <slug>` to view the data schema for a given Block type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/block#data_wo Block#data_wo}
  */
  readonly dataWo?: string;
  /**
  * The version of the `data_wo` attribute. This is used to track changes to the `data_wo` attribute and trigger updates when the value changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/block#data_wo_version Block#data_wo_version}
  */
  readonly dataWoVersion?: number;
  /**
  * Unique name of the Block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/block#name Block#name}
  */
  readonly name: string;
  /**
  * Block Type slug, which determines the schema of the `data` JSON attribute. Use `prefect block type ls` to view all available Block type slugs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/block#type_slug Block#type_slug}
  */
  readonly typeSlug: string;
  /**
  * Workspace ID (UUID) where the Block is located. In Prefect Cloud, either the `prefect_block` resource or the provider's `workspace_id` must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/block#workspace_id Block#workspace_id}
  */
  readonly workspaceId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/block prefect_block}
*/
export class Block extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prefect_block";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Block resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Block to import
  * @param importFromId The id of the existing Block that should be imported. Refer to the {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/block#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Block to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prefect_block", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/block prefect_block} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BlockConfig
  */
  public constructor(scope: Construct, id: string, config: BlockConfig) {
    super(scope, id, {
      terraformResourceType: 'prefect_block',
      terraformGeneratorMetadata: {
        providerName: 'prefect',
        providerVersion: '2.90.4',
        providerVersionConstraint: '2.90.4'
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
    this._data = config.data;
    this._dataWo = config.dataWo;
    this._dataWoVersion = config.dataWoVersion;
    this._name = config.name;
    this._typeSlug = config.typeSlug;
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

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // data - computed: false, optional: true, required: false
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // data_wo - computed: false, optional: true, required: false
  private _dataWo?: string; 
  public get dataWo() {
    return this.getStringAttribute('data_wo');
  }
  public set dataWo(value: string) {
    this._dataWo = value;
  }
  public resetDataWo() {
    this._dataWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataWoInput() {
    return this._dataWo;
  }

  // data_wo_version - computed: false, optional: true, required: false
  private _dataWoVersion?: number; 
  public get dataWoVersion() {
    return this.getNumberAttribute('data_wo_version');
  }
  public set dataWoVersion(value: number) {
    this._dataWoVersion = value;
  }
  public resetDataWoVersion() {
    this._dataWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataWoVersionInput() {
    return this._dataWoVersion;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // type_slug - computed: false, optional: false, required: true
  private _typeSlug?: string; 
  public get typeSlug() {
    return this.getStringAttribute('type_slug');
  }
  public set typeSlug(value: string) {
    this._typeSlug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeSlugInput() {
    return this._typeSlug;
  }

  // updated - computed: true, optional: false, required: false
  public get updated() {
    return this.getStringAttribute('updated');
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
      data: cdktf.stringToTerraform(this._data),
      data_wo: cdktf.stringToTerraform(this._dataWo),
      data_wo_version: cdktf.numberToTerraform(this._dataWoVersion),
      name: cdktf.stringToTerraform(this._name),
      type_slug: cdktf.stringToTerraform(this._typeSlug),
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
      data: {
        value: cdktf.stringToHclTerraform(this._data),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_wo: {
        value: cdktf.stringToHclTerraform(this._dataWo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_wo_version: {
        value: cdktf.numberToHclTerraform(this._dataWoVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type_slug: {
        value: cdktf.stringToHclTerraform(this._typeSlug),
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
