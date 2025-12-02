// https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/resources/stack
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StackConfig extends cdktf.TerraformMetaArguments {
  /**
  * The canonical of a stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/resources/stack#canonical Stack#canonical}
  */
  readonly canonical: string;
  /**
  * The organization of the stack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/resources/stack#organization_canonical Stack#organization_canonical}
  */
  readonly organizationCanonical: string;
  /**
  * Assign a team as maintainer of a stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/resources/stack#team Stack#team}
  */
  readonly team?: string;
  /**
  * Change the visibility of a stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/resources/stack#visibility Stack#visibility}
  */
  readonly visibility?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/resources/stack cycloid_stack}
*/
export class Stack extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cycloid_stack";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Stack resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Stack to import
  * @param importFromId The id of the existing Stack that should be imported. Refer to the {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/resources/stack#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Stack to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cycloid_stack", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.24/docs/resources/stack cycloid_stack} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StackConfig
  */
  public constructor(scope: Construct, id: string, config: StackConfig) {
    super(scope, id, {
      terraformResourceType: 'cycloid_stack',
      terraformGeneratorMetadata: {
        providerName: 'cycloid',
        providerVersion: '0.0.24',
        providerVersionConstraint: '0.0.24'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._canonical = config.canonical;
    this._organizationCanonical = config.organizationCanonical;
    this._team = config.team;
    this._visibility = config.visibility;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // canonical - computed: false, optional: false, required: true
  private _canonical?: string; 
  public get canonical() {
    return this.getStringAttribute('canonical');
  }
  public set canonical(value: string) {
    this._canonical = value;
  }
  // Temporarily expose input value. Use with caution.
  public get canonicalInput() {
    return this._canonical;
  }

  // organization_canonical - computed: false, optional: false, required: true
  private _organizationCanonical?: string; 
  public get organizationCanonical() {
    return this.getStringAttribute('organization_canonical');
  }
  public set organizationCanonical(value: string) {
    this._organizationCanonical = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationCanonicalInput() {
    return this._organizationCanonical;
  }

  // team - computed: true, optional: true, required: false
  private _team?: string; 
  public get team() {
    return this.getStringAttribute('team');
  }
  public set team(value: string) {
    this._team = value;
  }
  public resetTeam() {
    this._team = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamInput() {
    return this._team;
  }

  // visibility - computed: true, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      canonical: cdktf.stringToTerraform(this._canonical),
      organization_canonical: cdktf.stringToTerraform(this._organizationCanonical),
      team: cdktf.stringToTerraform(this._team),
      visibility: cdktf.stringToTerraform(this._visibility),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      canonical: {
        value: cdktf.stringToHclTerraform(this._canonical),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_canonical: {
        value: cdktf.stringToHclTerraform(this._organizationCanonical),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      team: {
        value: cdktf.stringToHclTerraform(this._team),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      visibility: {
        value: cdktf.stringToHclTerraform(this._visibility),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
