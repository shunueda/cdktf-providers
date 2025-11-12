// https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/compute_acl_entries
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeAclEntriesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Manages entries for a Fastly Compute Access Control List (ACL). To import, use the format <compute_acl_id>/entries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/compute_acl_entries#compute_acl_id ComputeAclEntries#compute_acl_id}
  */
  readonly computeAclId: string;
  /**
  * A map representing the entries in the Compute ACL, where the keys are the prefixes and the values are the actions (ALLOW or BLOCK).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/compute_acl_entries#entries ComputeAclEntries#entries}
  */
  readonly entries: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/compute_acl_entries#id ComputeAclEntries#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Manage the ACL entries in Terraform (default: false). If true, Terraform will ensure that the ACL's entries match the entries in the Terraform configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/compute_acl_entries#manage_entries ComputeAclEntries#manage_entries}
  */
  readonly manageEntries?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/compute_acl_entries fastly_compute_acl_entries}
*/
export class ComputeAclEntries extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fastly_compute_acl_entries";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ComputeAclEntries resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComputeAclEntries to import
  * @param importFromId The id of the existing ComputeAclEntries that should be imported. Refer to the {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/compute_acl_entries#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComputeAclEntries to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fastly_compute_acl_entries", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/compute_acl_entries fastly_compute_acl_entries} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeAclEntriesConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeAclEntriesConfig) {
    super(scope, id, {
      terraformResourceType: 'fastly_compute_acl_entries',
      terraformGeneratorMetadata: {
        providerName: 'fastly',
        providerVersion: '8.4.0',
        providerVersionConstraint: '8.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._computeAclId = config.computeAclId;
    this._entries = config.entries;
    this._id = config.id;
    this._manageEntries = config.manageEntries;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compute_acl_id - computed: false, optional: false, required: true
  private _computeAclId?: string; 
  public get computeAclId() {
    return this.getStringAttribute('compute_acl_id');
  }
  public set computeAclId(value: string) {
    this._computeAclId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeAclIdInput() {
    return this._computeAclId;
  }

  // entries - computed: false, optional: false, required: true
  private _entries?: { [key: string]: string }; 
  public get entries() {
    return this.getStringMapAttribute('entries');
  }
  public set entries(value: { [key: string]: string }) {
    this._entries = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entriesInput() {
    return this._entries;
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

  // manage_entries - computed: false, optional: true, required: false
  private _manageEntries?: boolean | cdktf.IResolvable; 
  public get manageEntries() {
    return this.getBooleanAttribute('manage_entries');
  }
  public set manageEntries(value: boolean | cdktf.IResolvable) {
    this._manageEntries = value;
  }
  public resetManageEntries() {
    this._manageEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageEntriesInput() {
    return this._manageEntries;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compute_acl_id: cdktf.stringToTerraform(this._computeAclId),
      entries: cdktf.hashMapper(cdktf.stringToTerraform)(this._entries),
      id: cdktf.stringToTerraform(this._id),
      manage_entries: cdktf.booleanToTerraform(this._manageEntries),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compute_acl_id: {
        value: cdktf.stringToHclTerraform(this._computeAclId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entries: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._entries),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      manage_entries: {
        value: cdktf.booleanToHclTerraform(this._manageEntries),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
