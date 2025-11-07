// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/solution_add_on_instance_publish
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SolutionAddOnInstancePublishConfig extends cdktf.TerraformMetaArguments {
  /**
  * Solution Add-On Instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/solution_add_on_instance_publish#add_on_instance_id SolutionAddOnInstancePublish#add_on_instance_id}
  */
  readonly addOnInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/solution_add_on_instance_publish#id SolutionAddOnInstancePublish#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A set of Organization IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/solution_add_on_instance_publish#org_ids SolutionAddOnInstancePublish#org_ids}
  */
  readonly orgIds?: string[];
  /**
  * Publish Solution Add-On Instance to all tenants
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/solution_add_on_instance_publish#publish_to_all_tenants SolutionAddOnInstancePublish#publish_to_all_tenants}
  */
  readonly publishToAllTenants?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/solution_add_on_instance_publish vcd_solution_add_on_instance_publish}
*/
export class SolutionAddOnInstancePublish extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_solution_add_on_instance_publish";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SolutionAddOnInstancePublish resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SolutionAddOnInstancePublish to import
  * @param importFromId The id of the existing SolutionAddOnInstancePublish that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/solution_add_on_instance_publish#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SolutionAddOnInstancePublish to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_solution_add_on_instance_publish", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/solution_add_on_instance_publish vcd_solution_add_on_instance_publish} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SolutionAddOnInstancePublishConfig
  */
  public constructor(scope: Construct, id: string, config: SolutionAddOnInstancePublishConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_solution_add_on_instance_publish',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addOnInstanceId = config.addOnInstanceId;
    this._id = config.id;
    this._orgIds = config.orgIds;
    this._publishToAllTenants = config.publishToAllTenants;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // add_on_instance_id - computed: false, optional: false, required: true
  private _addOnInstanceId?: string; 
  public get addOnInstanceId() {
    return this.getStringAttribute('add_on_instance_id');
  }
  public set addOnInstanceId(value: string) {
    this._addOnInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addOnInstanceIdInput() {
    return this._addOnInstanceId;
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

  // org_ids - computed: false, optional: true, required: false
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

  // publish_to_all_tenants - computed: false, optional: true, required: false
  private _publishToAllTenants?: boolean | cdktf.IResolvable; 
  public get publishToAllTenants() {
    return this.getBooleanAttribute('publish_to_all_tenants');
  }
  public set publishToAllTenants(value: boolean | cdktf.IResolvable) {
    this._publishToAllTenants = value;
  }
  public resetPublishToAllTenants() {
    this._publishToAllTenants = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishToAllTenantsInput() {
    return this._publishToAllTenants;
  }

  // rde_state - computed: true, optional: false, required: false
  public get rdeState() {
    return this.getStringAttribute('rde_state');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      add_on_instance_id: cdktf.stringToTerraform(this._addOnInstanceId),
      id: cdktf.stringToTerraform(this._id),
      org_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._orgIds),
      publish_to_all_tenants: cdktf.booleanToTerraform(this._publishToAllTenants),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      add_on_instance_id: {
        value: cdktf.stringToHclTerraform(this._addOnInstanceId),
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
      org_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._orgIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      publish_to_all_tenants: {
        value: cdktf.booleanToHclTerraform(this._publishToAllTenants),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
