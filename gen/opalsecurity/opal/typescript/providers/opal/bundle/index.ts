// https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/bundle
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BundleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the bundle's admin owner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/bundle#admin_owner_id Bundle#admin_owner_id}
  */
  readonly adminOwnerId: string;
  /**
  * A brief description of the bundle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/bundle#description Bundle#description}
  */
  readonly description?: string;
  /**
  * The name of the bundle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/bundle#name Bundle#name}
  */
  readonly name: string;
  /**
  * The visibility level of the entity. must be one of ["GLOBAL", "LIMITED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/bundle#visibility Bundle#visibility}
  */
  readonly visibility: string;
  /**
  * Default: []
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/bundle#visibility_group_ids Bundle#visibility_group_ids}
  */
  readonly visibilityGroupIds?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/bundle opal_bundle}
*/
export class Bundle extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opal_bundle";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Bundle resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Bundle to import
  * @param importFromId The id of the existing Bundle that should be imported. Refer to the {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/bundle#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Bundle to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opal_bundle", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/bundle opal_bundle} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BundleConfig
  */
  public constructor(scope: Construct, id: string, config: BundleConfig) {
    super(scope, id, {
      terraformResourceType: 'opal_bundle',
      terraformGeneratorMetadata: {
        providerName: 'opal',
        providerVersion: '3.4.0',
        providerVersionConstraint: '3.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminOwnerId = config.adminOwnerId;
    this._description = config.description;
    this._name = config.name;
    this._visibility = config.visibility;
    this._visibilityGroupIds = config.visibilityGroupIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_owner_id - computed: false, optional: false, required: true
  private _adminOwnerId?: string; 
  public get adminOwnerId() {
    return this.getStringAttribute('admin_owner_id');
  }
  public set adminOwnerId(value: string) {
    this._adminOwnerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminOwnerIdInput() {
    return this._adminOwnerId;
  }

  // bundle_id - computed: true, optional: false, required: false
  public get bundleId() {
    return this.getStringAttribute('bundle_id');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: true, required: false
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

  // total_num_groups - computed: true, optional: false, required: false
  public get totalNumGroups() {
    return this.getNumberAttribute('total_num_groups');
  }

  // total_num_items - computed: true, optional: false, required: false
  public get totalNumItems() {
    return this.getNumberAttribute('total_num_items');
  }

  // total_num_resources - computed: true, optional: false, required: false
  public get totalNumResources() {
    return this.getNumberAttribute('total_num_resources');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // visibility - computed: false, optional: false, required: true
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }

  // visibility_group_ids - computed: true, optional: true, required: false
  private _visibilityGroupIds?: string[]; 
  public get visibilityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('visibility_group_ids'));
  }
  public set visibilityGroupIds(value: string[]) {
    this._visibilityGroupIds = value;
  }
  public resetVisibilityGroupIds() {
    this._visibilityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityGroupIdsInput() {
    return this._visibilityGroupIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_owner_id: cdktf.stringToTerraform(this._adminOwnerId),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      visibility: cdktf.stringToTerraform(this._visibility),
      visibility_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._visibilityGroupIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_owner_id: {
        value: cdktf.stringToHclTerraform(this._adminOwnerId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      visibility_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._visibilityGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
