// https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.0/docs/resources/org_unit
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrgUnitConfig extends cdktf.TerraformMetaArguments {
  /**
  * Defaults to `false`. Determines if a sub-organizational unit can inherit the settings of the parent organization. False means a sub-organizational unit inherits the settings of the nearest parent organizational unit. For more information on inheritance and users in an organization structure, see the [administration help center](https://support.google.com/a/answer/4352075).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.0/docs/resources/org_unit#block_inheritance OrgUnit#block_inheritance}
  */
  readonly blockInheritance?: boolean | cdktf.IResolvable;
  /**
  * Description of the organizational unit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.0/docs/resources/org_unit#description OrgUnit#description}
  */
  readonly description?: string;
  /**
  * The organizational unit's path name. For example, an organizational unit's name within the /corp/support/sales_support parent path is sales_support.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.0/docs/resources/org_unit#name OrgUnit#name}
  */
  readonly name: string;
  /**
  * The unique ID of the parent organizational unit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.0/docs/resources/org_unit#parent_org_unit_id OrgUnit#parent_org_unit_id}
  */
  readonly parentOrgUnitId?: string;
  /**
  * The organizational unit's parent path. For example, /corp/sales is the parent path for /corp/sales/sales_support organizational unit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.0/docs/resources/org_unit#parent_org_unit_path OrgUnit#parent_org_unit_path}
  */
  readonly parentOrgUnitPath?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.0/docs/resources/org_unit googleworkspace_org_unit}
*/
export class OrgUnit extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "googleworkspace_org_unit";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrgUnit resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrgUnit to import
  * @param importFromId The id of the existing OrgUnit that should be imported. Refer to the {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.0/docs/resources/org_unit#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrgUnit to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "googleworkspace_org_unit", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.0/docs/resources/org_unit googleworkspace_org_unit} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrgUnitConfig
  */
  public constructor(scope: Construct, id: string, config: OrgUnitConfig) {
    super(scope, id, {
      terraformResourceType: 'googleworkspace_org_unit',
      terraformGeneratorMetadata: {
        providerName: 'googleworkspace',
        providerVersion: '0.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._blockInheritance = config.blockInheritance;
    this._description = config.description;
    this._name = config.name;
    this._parentOrgUnitId = config.parentOrgUnitId;
    this._parentOrgUnitPath = config.parentOrgUnitPath;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // block_inheritance - computed: false, optional: true, required: false
  private _blockInheritance?: boolean | cdktf.IResolvable; 
  public get blockInheritance() {
    return this.getBooleanAttribute('block_inheritance');
  }
  public set blockInheritance(value: boolean | cdktf.IResolvable) {
    this._blockInheritance = value;
  }
  public resetBlockInheritance() {
    this._blockInheritance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockInheritanceInput() {
    return this._blockInheritance;
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

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
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

  // org_unit_id - computed: true, optional: false, required: false
  public get orgUnitId() {
    return this.getStringAttribute('org_unit_id');
  }

  // org_unit_path - computed: true, optional: false, required: false
  public get orgUnitPath() {
    return this.getStringAttribute('org_unit_path');
  }

  // parent_org_unit_id - computed: true, optional: true, required: false
  private _parentOrgUnitId?: string; 
  public get parentOrgUnitId() {
    return this.getStringAttribute('parent_org_unit_id');
  }
  public set parentOrgUnitId(value: string) {
    this._parentOrgUnitId = value;
  }
  public resetParentOrgUnitId() {
    this._parentOrgUnitId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentOrgUnitIdInput() {
    return this._parentOrgUnitId;
  }

  // parent_org_unit_path - computed: true, optional: true, required: false
  private _parentOrgUnitPath?: string; 
  public get parentOrgUnitPath() {
    return this.getStringAttribute('parent_org_unit_path');
  }
  public set parentOrgUnitPath(value: string) {
    this._parentOrgUnitPath = value;
  }
  public resetParentOrgUnitPath() {
    this._parentOrgUnitPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentOrgUnitPathInput() {
    return this._parentOrgUnitPath;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      block_inheritance: cdktf.booleanToTerraform(this._blockInheritance),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      parent_org_unit_id: cdktf.stringToTerraform(this._parentOrgUnitId),
      parent_org_unit_path: cdktf.stringToTerraform(this._parentOrgUnitPath),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      block_inheritance: {
        value: cdktf.booleanToHclTerraform(this._blockInheritance),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
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
      parent_org_unit_id: {
        value: cdktf.stringToHclTerraform(this._parentOrgUnitId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_org_unit_path: {
        value: cdktf.stringToHclTerraform(this._parentOrgUnitPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
