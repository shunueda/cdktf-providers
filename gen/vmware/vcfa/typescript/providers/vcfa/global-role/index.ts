// https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/global_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlobalRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Global Role description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/global_role#description GlobalRole#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/global_role#id GlobalRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the Global Role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/global_role#name GlobalRole#name}
  */
  readonly name: string;
  /**
  * List of IDs of Organizations to which this Global Role is published
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/global_role#org_ids GlobalRole#org_ids}
  */
  readonly orgIds?: string[];
  /**
  * When true, publishes the Global Role to all Organizations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/global_role#publish_to_all_orgs GlobalRole#publish_to_all_orgs}
  */
  readonly publishToAllOrgs: boolean | cdktf.IResolvable;
  /**
  * List of Rights assigned to this Global Role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/global_role#rights GlobalRole#rights}
  */
  readonly rights?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/global_role vcfa_global_role}
*/
export class GlobalRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcfa_global_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GlobalRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GlobalRole to import
  * @param importFromId The id of the existing GlobalRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/global_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GlobalRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcfa_global_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/global_role vcfa_global_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlobalRoleConfig
  */
  public constructor(scope: Construct, id: string, config: GlobalRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'vcfa_global_role',
      terraformGeneratorMetadata: {
        providerName: 'vcfa',
        providerVersion: '1.0.0',
        providerVersionConstraint: '1.0.0'
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
    this._id = config.id;
    this._name = config.name;
    this._orgIds = config.orgIds;
    this._publishToAllOrgs = config.publishToAllOrgs;
    this._rights = config.rights;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bundle_key - computed: true, optional: false, required: false
  public get bundleKey() {
    return this.getStringAttribute('bundle_key');
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // org_ids - computed: true, optional: true, required: false
  private _orgIds?: string[]; 
  public get orgIds() {
    return cdktf.Fn.tolist(this.getListAttribute('org_ids'));
  }
  public set orgIds(value: string[]) {
    this._orgIds = value;
  }
  public resetOrgIds() {
    this._orgIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdsInput() {
    return this._orgIds;
  }

  // publish_to_all_orgs - computed: false, optional: false, required: true
  private _publishToAllOrgs?: boolean | cdktf.IResolvable; 
  public get publishToAllOrgs() {
    return this.getBooleanAttribute('publish_to_all_orgs');
  }
  public set publishToAllOrgs(value: boolean | cdktf.IResolvable) {
    this._publishToAllOrgs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publishToAllOrgsInput() {
    return this._publishToAllOrgs;
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // rights - computed: false, optional: true, required: false
  private _rights?: string[]; 
  public get rights() {
    return cdktf.Fn.tolist(this.getListAttribute('rights'));
  }
  public set rights(value: string[]) {
    this._rights = value;
  }
  public resetRights() {
    this._rights = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rightsInput() {
    return this._rights;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      org_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._orgIds),
      publish_to_all_orgs: cdktf.booleanToTerraform(this._publishToAllOrgs),
      rights: cdktf.listMapper(cdktf.stringToTerraform, false)(this._rights),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      org_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._orgIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      publish_to_all_orgs: {
        value: cdktf.booleanToHclTerraform(this._publishToAllOrgs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rights: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._rights),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
