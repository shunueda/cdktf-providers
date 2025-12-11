// https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/data-sources/scim_groups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZpaScimGroupsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/data-sources/scim_groups#id DataZpaScimGroups#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/data-sources/scim_groups#idp_id DataZpaScimGroups#idp_id}
  */
  readonly idpId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/data-sources/scim_groups#idp_name DataZpaScimGroups#idp_name}
  */
  readonly idpName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/data-sources/scim_groups#name DataZpaScimGroups#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/data-sources/scim_groups zpa_scim_groups}
*/
export class DataZpaScimGroups extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zpa_scim_groups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZpaScimGroups resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZpaScimGroups to import
  * @param importFromId The id of the existing DataZpaScimGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/data-sources/scim_groups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZpaScimGroups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zpa_scim_groups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/data-sources/scim_groups zpa_scim_groups} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZpaScimGroupsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZpaScimGroupsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zpa_scim_groups',
      terraformGeneratorMetadata: {
        providerName: 'zpa',
        providerVersion: '4.3.5',
        providerVersionConstraint: '4.3.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._idpId = config.idpId;
    this._idpName = config.idpName;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getNumberAttribute('creation_time');
  }

  // id - computed: false, optional: true, required: false
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

  // idp_group_id - computed: true, optional: false, required: false
  public get idpGroupId() {
    return this.getStringAttribute('idp_group_id');
  }

  // idp_id - computed: false, optional: true, required: false
  private _idpId?: number; 
  public get idpId() {
    return this.getNumberAttribute('idp_id');
  }
  public set idpId(value: number) {
    this._idpId = value;
  }
  public resetIdpId() {
    this._idpId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpIdInput() {
    return this._idpId;
  }

  // idp_name - computed: false, optional: true, required: false
  private _idpName?: string; 
  public get idpName() {
    return this.getStringAttribute('idp_name');
  }
  public set idpName(value: string) {
    this._idpName = value;
  }
  public resetIdpName() {
    this._idpName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpNameInput() {
    return this._idpName;
  }

  // modified_time - computed: true, optional: false, required: false
  public get modifiedTime() {
    return this.getNumberAttribute('modified_time');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      idp_id: cdktf.numberToTerraform(this._idpId),
      idp_name: cdktf.stringToTerraform(this._idpName),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idp_id: {
        value: cdktf.numberToHclTerraform(this._idpId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      idp_name: {
        value: cdktf.stringToHclTerraform(this._idpName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
