// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_ascm_organization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApsarastackAscmOrganizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_ascm_organization#id ApsarastackAscmOrganization#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_ascm_organization#name ApsarastackAscmOrganization#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_ascm_organization#parent_id ApsarastackAscmOrganization#parent_id}
  */
  readonly parentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_ascm_organization#person_num ApsarastackAscmOrganization#person_num}
  */
  readonly personNum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_ascm_organization#resource_group_num ApsarastackAscmOrganization#resource_group_num}
  */
  readonly resourceGroupNum?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_ascm_organization apsarastack_ascm_organization}
*/
export class ApsarastackAscmOrganization extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_ascm_organization";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApsarastackAscmOrganization resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsarastackAscmOrganization to import
  * @param importFromId The id of the existing ApsarastackAscmOrganization that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_ascm_organization#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsarastackAscmOrganization to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_ascm_organization", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_ascm_organization apsarastack_ascm_organization} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsarastackAscmOrganizationConfig
  */
  public constructor(scope: Construct, id: string, config: ApsarastackAscmOrganizationConfig) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_ascm_organization',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.21',
        providerVersionConstraint: '3.18.21'
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
    this._name = config.name;
    this._parentId = config.parentId;
    this._personNum = config.personNum;
    this._resourceGroupNum = config.resourceGroupNum;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // org_id - computed: true, optional: false, required: false
  public get orgId() {
    return this.getStringAttribute('org_id');
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

  // person_num - computed: false, optional: true, required: false
  private _personNum?: string; 
  public get personNum() {
    return this.getStringAttribute('person_num');
  }
  public set personNum(value: string) {
    this._personNum = value;
  }
  public resetPersonNum() {
    this._personNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get personNumInput() {
    return this._personNum;
  }

  // resource_group_num - computed: false, optional: true, required: false
  private _resourceGroupNum?: string; 
  public get resourceGroupNum() {
    return this.getStringAttribute('resource_group_num');
  }
  public set resourceGroupNum(value: string) {
    this._resourceGroupNum = value;
  }
  public resetResourceGroupNum() {
    this._resourceGroupNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNumInput() {
    return this._resourceGroupNum;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      parent_id: cdktf.stringToTerraform(this._parentId),
      person_num: cdktf.stringToTerraform(this._personNum),
      resource_group_num: cdktf.stringToTerraform(this._resourceGroupNum),
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
      person_num: {
        value: cdktf.stringToHclTerraform(this._personNum),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_num: {
        value: cdktf.stringToHclTerraform(this._resourceGroupNum),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
