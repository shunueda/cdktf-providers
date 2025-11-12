// https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/iam_permissions_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOvhIamPermissionsGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/iam_permissions_group#allow DataOvhIamPermissionsGroup#allow}
  */
  readonly allow?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/iam_permissions_group#deny DataOvhIamPermissionsGroup#deny}
  */
  readonly deny?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/iam_permissions_group#description DataOvhIamPermissionsGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/iam_permissions_group#except DataOvhIamPermissionsGroup#except}
  */
  readonly except?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/iam_permissions_group#updated_at DataOvhIamPermissionsGroup#updated_at}
  */
  readonly updatedAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/iam_permissions_group#urn DataOvhIamPermissionsGroup#urn}
  */
  readonly urn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/iam_permissions_group ovh_iam_permissions_group}
*/
export class DataOvhIamPermissionsGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_iam_permissions_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOvhIamPermissionsGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOvhIamPermissionsGroup to import
  * @param importFromId The id of the existing DataOvhIamPermissionsGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/iam_permissions_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOvhIamPermissionsGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_iam_permissions_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/iam_permissions_group ovh_iam_permissions_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOvhIamPermissionsGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataOvhIamPermissionsGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'ovh_iam_permissions_group',
      terraformGeneratorMetadata: {
        providerName: 'ovh',
        providerVersion: '2.9.0',
        providerVersionConstraint: '2.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allow = config.allow;
    this._deny = config.deny;
    this._description = config.description;
    this._except = config.except;
    this._updatedAt = config.updatedAt;
    this._urn = config.urn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow - computed: false, optional: true, required: false
  private _allow?: string[]; 
  public get allow() {
    return cdktf.Fn.tolist(this.getListAttribute('allow'));
  }
  public set allow(value: string[]) {
    this._allow = value;
  }
  public resetAllow() {
    this._allow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // deny - computed: false, optional: true, required: false
  private _deny?: string[]; 
  public get deny() {
    return cdktf.Fn.tolist(this.getListAttribute('deny'));
  }
  public set deny(value: string[]) {
    this._deny = value;
  }
  public resetDeny() {
    this._deny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyInput() {
    return this._deny;
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

  // except - computed: false, optional: true, required: false
  private _except?: string[]; 
  public get except() {
    return cdktf.Fn.tolist(this.getListAttribute('except'));
  }
  public set except(value: string[]) {
    this._except = value;
  }
  public resetExcept() {
    this._except = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptInput() {
    return this._except;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // updated_at - computed: true, optional: true, required: false
  private _updatedAt?: string; 
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
  public set updatedAt(value: string) {
    this._updatedAt = value;
  }
  public resetUpdatedAt() {
    this._updatedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedAtInput() {
    return this._updatedAt;
  }

  // urn - computed: false, optional: false, required: true
  private _urn?: string; 
  public get urn() {
    return this.getStringAttribute('urn');
  }
  public set urn(value: string) {
    this._urn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urnInput() {
    return this._urn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allow),
      deny: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deny),
      description: cdktf.stringToTerraform(this._description),
      except: cdktf.listMapper(cdktf.stringToTerraform, false)(this._except),
      updated_at: cdktf.stringToTerraform(this._updatedAt),
      urn: cdktf.stringToTerraform(this._urn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allow),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      deny: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._deny),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      except: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._except),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      updated_at: {
        value: cdktf.stringToHclTerraform(this._updatedAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      urn: {
        value: cdktf.stringToHclTerraform(this._urn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
