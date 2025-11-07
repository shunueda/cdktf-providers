// https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/organization_instance_groups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationInstanceGroupsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/organization_instance_groups#id OrganizationInstanceGroups#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/organization_instance_groups#instance_groups_id OrganizationInstanceGroups#instance_groups_id}
  */
  readonly instanceGroupsId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/organization_instance_groups#organization_id OrganizationInstanceGroups#organization_id}
  */
  readonly organizationId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/organization_instance_groups awx_organization_instance_groups}
*/
export class OrganizationInstanceGroups extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awx_organization_instance_groups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrganizationInstanceGroups resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationInstanceGroups to import
  * @param importFromId The id of the existing OrganizationInstanceGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/organization_instance_groups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationInstanceGroups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "awx_organization_instance_groups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/organization_instance_groups awx_organization_instance_groups} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationInstanceGroupsConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationInstanceGroupsConfig) {
    super(scope, id, {
      terraformResourceType: 'awx_organization_instance_groups',
      terraformGeneratorMetadata: {
        providerName: 'awx',
        providerVersion: '1.7.5'
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
    this._instanceGroupsId = config.instanceGroupsId;
    this._organizationId = config.organizationId;
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

  // instance_groups_id - computed: false, optional: false, required: true
  private _instanceGroupsId?: number; 
  public get instanceGroupsId() {
    return this.getNumberAttribute('instance_groups_id');
  }
  public set instanceGroupsId(value: number) {
    this._instanceGroupsId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceGroupsIdInput() {
    return this._instanceGroupsId;
  }

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: number; 
  public get organizationId() {
    return this.getNumberAttribute('organization_id');
  }
  public set organizationId(value: number) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_groups_id: cdktf.numberToTerraform(this._instanceGroupsId),
      organization_id: cdktf.numberToTerraform(this._organizationId),
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
      instance_groups_id: {
        value: cdktf.numberToHclTerraform(this._instanceGroupsId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      organization_id: {
        value: cdktf.numberToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
