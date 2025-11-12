// https://registry.terraform.io/providers/nikolalohinski/jinja/2.4.3/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface JinjaProviderConfig {
  /**
  * Set to `true` leading spaces and tabs are stripped from the start of a line to a block for all templates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nikolalohinski/jinja/2.4.3/docs#left_strip_blocks JinjaProvider#left_strip_blocks}
  */
  readonly leftStripBlocks?: boolean | cdktf.IResolvable;
  /**
  * Set to `true` to fail on missing items and attribute for all templates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nikolalohinski/jinja/2.4.3/docs#strict_undefined JinjaProvider#strict_undefined}
  */
  readonly strictUndefined?: boolean | cdktf.IResolvable;
  /**
  * Set to `true` the first newline after a block is removed for all templates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nikolalohinski/jinja/2.4.3/docs#trim_blocks JinjaProvider#trim_blocks}
  */
  readonly trimBlocks?: boolean | cdktf.IResolvable;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nikolalohinski/jinja/2.4.3/docs#alias JinjaProvider#alias}
  */
  readonly alias?: string;
  /**
  * delimiters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nikolalohinski/jinja/2.4.3/docs#delimiters JinjaProvider#delimiters}
  */
  readonly delimiters?: JinjaProviderDelimiters;
}
export interface JinjaProviderDelimiters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nikolalohinski/jinja/2.4.3/docs#block_end JinjaProvider#block_end}
  */
  readonly blockEnd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nikolalohinski/jinja/2.4.3/docs#block_start JinjaProvider#block_start}
  */
  readonly blockStart?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nikolalohinski/jinja/2.4.3/docs#comment_end JinjaProvider#comment_end}
  */
  readonly commentEnd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nikolalohinski/jinja/2.4.3/docs#comment_start JinjaProvider#comment_start}
  */
  readonly commentStart?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nikolalohinski/jinja/2.4.3/docs#variable_end JinjaProvider#variable_end}
  */
  readonly variableEnd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nikolalohinski/jinja/2.4.3/docs#variable_start JinjaProvider#variable_start}
  */
  readonly variableStart?: string;
}

export function jinjaProviderDelimitersToTerraform(struct?: JinjaProviderDelimiters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_end: cdktf.stringToTerraform(struct!.blockEnd),
    block_start: cdktf.stringToTerraform(struct!.blockStart),
    comment_end: cdktf.stringToTerraform(struct!.commentEnd),
    comment_start: cdktf.stringToTerraform(struct!.commentStart),
    variable_end: cdktf.stringToTerraform(struct!.variableEnd),
    variable_start: cdktf.stringToTerraform(struct!.variableStart),
  }
}


export function jinjaProviderDelimitersToHclTerraform(struct?: JinjaProviderDelimiters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_end: {
      value: cdktf.stringToHclTerraform(struct!.blockEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_start: {
      value: cdktf.stringToHclTerraform(struct!.blockStart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comment_end: {
      value: cdktf.stringToHclTerraform(struct!.commentEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comment_start: {
      value: cdktf.stringToHclTerraform(struct!.commentStart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variable_end: {
      value: cdktf.stringToHclTerraform(struct!.variableEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variable_start: {
      value: cdktf.stringToHclTerraform(struct!.variableStart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/nikolalohinski/jinja/2.4.3/docs jinja}
*/
export class JinjaProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "jinja";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a JinjaProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the JinjaProvider to import
  * @param importFromId The id of the existing JinjaProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/nikolalohinski/jinja/2.4.3/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the JinjaProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "jinja", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nikolalohinski/jinja/2.4.3/docs jinja} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options JinjaProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: JinjaProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'jinja',
      terraformGeneratorMetadata: {
        providerName: 'jinja',
        providerVersion: '2.4.3',
        providerVersionConstraint: '2.4.3'
      },
      terraformProviderSource: 'NikolaLohinski/jinja'
    });
    this._leftStripBlocks = config.leftStripBlocks;
    this._strictUndefined = config.strictUndefined;
    this._trimBlocks = config.trimBlocks;
    this._alias = config.alias;
    this._delimiters = config.delimiters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // left_strip_blocks - computed: false, optional: true, required: false
  private _leftStripBlocks?: boolean | cdktf.IResolvable; 
  public get leftStripBlocks() {
    return this._leftStripBlocks;
  }
  public set leftStripBlocks(value: boolean | cdktf.IResolvable | undefined) {
    this._leftStripBlocks = value;
  }
  public resetLeftStripBlocks() {
    this._leftStripBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leftStripBlocksInput() {
    return this._leftStripBlocks;
  }

  // strict_undefined - computed: false, optional: true, required: false
  private _strictUndefined?: boolean | cdktf.IResolvable; 
  public get strictUndefined() {
    return this._strictUndefined;
  }
  public set strictUndefined(value: boolean | cdktf.IResolvable | undefined) {
    this._strictUndefined = value;
  }
  public resetStrictUndefined() {
    this._strictUndefined = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictUndefinedInput() {
    return this._strictUndefined;
  }

  // trim_blocks - computed: false, optional: true, required: false
  private _trimBlocks?: boolean | cdktf.IResolvable; 
  public get trimBlocks() {
    return this._trimBlocks;
  }
  public set trimBlocks(value: boolean | cdktf.IResolvable | undefined) {
    this._trimBlocks = value;
  }
  public resetTrimBlocks() {
    this._trimBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trimBlocksInput() {
    return this._trimBlocks;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // delimiters - computed: false, optional: true, required: false
  private _delimiters?: JinjaProviderDelimiters; 
  public get delimiters() {
    return this._delimiters;
  }
  public set delimiters(value: JinjaProviderDelimiters | undefined) {
    this._delimiters = value;
  }
  public resetDelimiters() {
    this._delimiters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delimitersInput() {
    return this._delimiters;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      left_strip_blocks: cdktf.booleanToTerraform(this._leftStripBlocks),
      strict_undefined: cdktf.booleanToTerraform(this._strictUndefined),
      trim_blocks: cdktf.booleanToTerraform(this._trimBlocks),
      alias: cdktf.stringToTerraform(this._alias),
      delimiters: jinjaProviderDelimitersToTerraform(this._delimiters),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      left_strip_blocks: {
        value: cdktf.booleanToHclTerraform(this._leftStripBlocks),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      strict_undefined: {
        value: cdktf.booleanToHclTerraform(this._strictUndefined),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      trim_blocks: {
        value: cdktf.booleanToHclTerraform(this._trimBlocks),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delimiters: {
        value: jinjaProviderDelimitersToHclTerraform(this._delimiters),
        isBlock: true,
        type: "struct",
        storageClassType: "JinjaProviderDelimiters",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
