// https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/block_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BlockTypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account ID (UUID) where the Block is located
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/block_type#account_id BlockType#account_id}
  */
  readonly accountId?: string;
  /**
  * A code snippet demonstrating use of the corresponding block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/block_type#code_example BlockType#code_example}
  */
  readonly codeExample?: string;
  /**
  * A short blurb about the corresponding block's intended use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/block_type#description BlockType#description}
  */
  readonly description?: string;
  /**
  * Web URL for the block type's documentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/block_type#documentation_url BlockType#documentation_url}
  */
  readonly documentationUrl?: string;
  /**
  * Web URL for the block type's logo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/block_type#logo_url BlockType#logo_url}
  */
  readonly logoUrl?: string;
  /**
  * The name of the block type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/block_type#name BlockType#name}
  */
  readonly name: string;
  /**
  * The slug of the block type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/block_type#slug BlockType#slug}
  */
  readonly slug: string;
  /**
  * Workspace ID (UUID) where the Block is located. In Prefect Cloud, either the `prefect_block` resource or the provider's `workspace_id` must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/block_type#workspace_id BlockType#workspace_id}
  */
  readonly workspaceId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/block_type prefect_block_type}
*/
export class BlockType extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prefect_block_type";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BlockType resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BlockType to import
  * @param importFromId The id of the existing BlockType that should be imported. Refer to the {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/block_type#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BlockType to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prefect_block_type", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/block_type prefect_block_type} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BlockTypeConfig
  */
  public constructor(scope: Construct, id: string, config: BlockTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'prefect_block_type',
      terraformGeneratorMetadata: {
        providerName: 'prefect',
        providerVersion: '2.92.0',
        providerVersionConstraint: '2.92.0'
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
    this._codeExample = config.codeExample;
    this._description = config.description;
    this._documentationUrl = config.documentationUrl;
    this._logoUrl = config.logoUrl;
    this._name = config.name;
    this._slug = config.slug;
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

  // code_example - computed: false, optional: true, required: false
  private _codeExample?: string; 
  public get codeExample() {
    return this.getStringAttribute('code_example');
  }
  public set codeExample(value: string) {
    this._codeExample = value;
  }
  public resetCodeExample() {
    this._codeExample = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeExampleInput() {
    return this._codeExample;
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // documentation_url - computed: false, optional: true, required: false
  private _documentationUrl?: string; 
  public get documentationUrl() {
    return this.getStringAttribute('documentation_url');
  }
  public set documentationUrl(value: string) {
    this._documentationUrl = value;
  }
  public resetDocumentationUrl() {
    this._documentationUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentationUrlInput() {
    return this._documentationUrl;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_protected - computed: true, optional: false, required: false
  public get isProtected() {
    return this.getBooleanAttribute('is_protected');
  }

  // logo_url - computed: false, optional: true, required: false
  private _logoUrl?: string; 
  public get logoUrl() {
    return this.getStringAttribute('logo_url');
  }
  public set logoUrl(value: string) {
    this._logoUrl = value;
  }
  public resetLogoUrl() {
    this._logoUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoUrlInput() {
    return this._logoUrl;
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

  // slug - computed: false, optional: false, required: true
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
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
      code_example: cdktf.stringToTerraform(this._codeExample),
      description: cdktf.stringToTerraform(this._description),
      documentation_url: cdktf.stringToTerraform(this._documentationUrl),
      logo_url: cdktf.stringToTerraform(this._logoUrl),
      name: cdktf.stringToTerraform(this._name),
      slug: cdktf.stringToTerraform(this._slug),
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
      code_example: {
        value: cdktf.stringToHclTerraform(this._codeExample),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      documentation_url: {
        value: cdktf.stringToHclTerraform(this._documentationUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logo_url: {
        value: cdktf.stringToHclTerraform(this._logoUrl),
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
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
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
