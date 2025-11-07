// https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/group#cn Group#cn}
  */
  readonly cn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/group#description Group#description}
  */
  readonly description?: string;
  /**
  * Allow adding external non-IPA members from trusted domains
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/group#external Group#external}
  */
  readonly external?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/group#gidnumber Group#gidnumber}
  */
  readonly gidnumber?: number;
  /**
  * Create as a non-POSIX group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/group#nonposix Group#nonposix}
  */
  readonly nonposix?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/group freeipa_group}
*/
export class Group extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "freeipa_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Group resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Group to import
  * @param importFromId The id of the existing Group that should be imported. Refer to the {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Group to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "freeipa_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/group freeipa_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupConfig
  */
  public constructor(scope: Construct, id: string, config: GroupConfig) {
    super(scope, id, {
      terraformResourceType: 'freeipa_group',
      terraformGeneratorMetadata: {
        providerName: 'freeipa',
        providerVersion: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cn = config.cn;
    this._description = config.description;
    this._external = config.external;
    this._gidnumber = config.gidnumber;
    this._nonposix = config.nonposix;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cn - computed: false, optional: false, required: true
  private _cn?: string; 
  public get cn() {
    return this.getStringAttribute('cn');
  }
  public set cn(value: string) {
    this._cn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cnInput() {
    return this._cn;
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

  // external - computed: false, optional: true, required: false
  private _external?: boolean | cdktf.IResolvable; 
  public get external() {
    return this.getBooleanAttribute('external');
  }
  public set external(value: boolean | cdktf.IResolvable) {
    this._external = value;
  }
  public resetExternal() {
    this._external = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalInput() {
    return this._external;
  }

  // gidnumber - computed: false, optional: true, required: false
  private _gidnumber?: number; 
  public get gidnumber() {
    return this.getNumberAttribute('gidnumber');
  }
  public set gidnumber(value: number) {
    this._gidnumber = value;
  }
  public resetGidnumber() {
    this._gidnumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gidnumberInput() {
    return this._gidnumber;
  }

  // nonposix - computed: false, optional: true, required: false
  private _nonposix?: boolean | cdktf.IResolvable; 
  public get nonposix() {
    return this.getBooleanAttribute('nonposix');
  }
  public set nonposix(value: boolean | cdktf.IResolvable) {
    this._nonposix = value;
  }
  public resetNonposix() {
    this._nonposix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonposixInput() {
    return this._nonposix;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cn: cdktf.stringToTerraform(this._cn),
      description: cdktf.stringToTerraform(this._description),
      external: cdktf.booleanToTerraform(this._external),
      gidnumber: cdktf.numberToTerraform(this._gidnumber),
      nonposix: cdktf.booleanToTerraform(this._nonposix),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cn: {
        value: cdktf.stringToHclTerraform(this._cn),
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
      external: {
        value: cdktf.booleanToHclTerraform(this._external),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      gidnumber: {
        value: cdktf.numberToHclTerraform(this._gidnumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nonposix: {
        value: cdktf.booleanToHclTerraform(this._nonposix),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
