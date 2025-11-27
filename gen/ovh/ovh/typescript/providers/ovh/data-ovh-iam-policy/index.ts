// https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/iam_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOvhIamPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/iam_policy#allow DataOvhIamPolicy#allow}
  */
  readonly allow?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/iam_policy#deny DataOvhIamPolicy#deny}
  */
  readonly deny?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/iam_policy#description DataOvhIamPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/iam_policy#except DataOvhIamPolicy#except}
  */
  readonly except?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/iam_policy#id DataOvhIamPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/iam_policy#permissions_groups DataOvhIamPolicy#permissions_groups}
  */
  readonly permissionsGroups?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/iam_policy ovh_iam_policy}
*/
export class DataOvhIamPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_iam_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOvhIamPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOvhIamPolicy to import
  * @param importFromId The id of the existing DataOvhIamPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/iam_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOvhIamPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_iam_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/iam_policy ovh_iam_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOvhIamPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataOvhIamPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'ovh_iam_policy',
      terraformGeneratorMetadata: {
        providerName: 'ovh',
        providerVersion: '2.10.0',
        providerVersionConstraint: '2.10.0'
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
    this._id = config.id;
    this._permissionsGroups = config.permissionsGroups;
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

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // identities - computed: true, optional: false, required: false
  public get identities() {
    return cdktf.Fn.tolist(this.getListAttribute('identities'));
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // permissions_groups - computed: false, optional: true, required: false
  private _permissionsGroups?: string[]; 
  public get permissionsGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('permissions_groups'));
  }
  public set permissionsGroups(value: string[]) {
    this._permissionsGroups = value;
  }
  public resetPermissionsGroups() {
    this._permissionsGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsGroupsInput() {
    return this._permissionsGroups;
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // resources - computed: true, optional: false, required: false
  public get resources() {
    return cdktf.Fn.tolist(this.getListAttribute('resources'));
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
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
      id: cdktf.stringToTerraform(this._id),
      permissions_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._permissionsGroups),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permissions_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._permissionsGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
