// https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.38/docs/resources/group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of this IAM group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.38/docs/resources/group#description Group#description}
  */
  readonly description?: string;
  /**
  * Name of this IAM group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.38/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * Parent IAM group of this group. If not set, this group is assumed to be a root group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.38/docs/resources/group#parent_id Group#parent_id}
  */
  readonly parentId?: string;
  /**
  * Whether the organization has been verified by a Chainguardian. Only applicable to root groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.38/docs/resources/group#verified Group#verified}
  */
  readonly verified?: boolean | cdktf.IResolvable;
  /**
  * Prevent the group from being unverified through Terraform. Null is treated as true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.38/docs/resources/group#verified_protection Group#verified_protection}
  */
  readonly verifiedProtection?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.38/docs/resources/group chainguard_group}
*/
export class Group extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "chainguard_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Group resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Group to import
  * @param importFromId The id of the existing Group that should be imported. Refer to the {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.38/docs/resources/group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Group to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "chainguard_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.38/docs/resources/group chainguard_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupConfig
  */
  public constructor(scope: Construct, id: string, config: GroupConfig) {
    super(scope, id, {
      terraformResourceType: 'chainguard_group',
      terraformGeneratorMetadata: {
        providerName: 'chainguard',
        providerVersion: '0.1.38',
        providerVersionConstraint: '0.1.38'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._name = config.name;
    this._parentId = config.parentId;
    this._verified = config.verified;
    this._verifiedProtection = config.verifiedProtection;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // parent_id - computed: false, optional: true, required: false
  private _parentId?: string; 
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }
  public set parentId(value: string) {
    this._parentId = value;
  }
  public resetParentId() {
    this._parentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIdInput() {
    return this._parentId;
  }

  // verified - computed: false, optional: true, required: false
  private _verified?: boolean | cdktf.IResolvable; 
  public get verified() {
    return this.getBooleanAttribute('verified');
  }
  public set verified(value: boolean | cdktf.IResolvable) {
    this._verified = value;
  }
  public resetVerified() {
    this._verified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifiedInput() {
    return this._verified;
  }

  // verified_protection - computed: false, optional: true, required: false
  private _verifiedProtection?: boolean | cdktf.IResolvable; 
  public get verifiedProtection() {
    return this.getBooleanAttribute('verified_protection');
  }
  public set verifiedProtection(value: boolean | cdktf.IResolvable) {
    this._verifiedProtection = value;
  }
  public resetVerifiedProtection() {
    this._verifiedProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifiedProtectionInput() {
    return this._verifiedProtection;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      parent_id: cdktf.stringToTerraform(this._parentId),
      verified: cdktf.booleanToTerraform(this._verified),
      verified_protection: cdktf.booleanToTerraform(this._verifiedProtection),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      parent_id: {
        value: cdktf.stringToHclTerraform(this._parentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      verified: {
        value: cdktf.booleanToHclTerraform(this._verified),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      verified_protection: {
        value: cdktf.booleanToHclTerraform(this._verifiedProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
