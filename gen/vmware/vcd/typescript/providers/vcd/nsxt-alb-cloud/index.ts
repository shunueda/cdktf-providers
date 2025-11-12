// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_cloud
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NsxtAlbCloudConfig extends cdktf.TerraformMetaArguments {
  /**
  * NSX-T ALB Controller ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_cloud#controller_id NsxtAlbCloud#controller_id}
  */
  readonly controllerId: string;
  /**
  * NSX-T ALB Cloud description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_cloud#description NsxtAlbCloud#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_cloud#id NsxtAlbCloud#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * NSX-T ALB Importable Cloud ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_cloud#importable_cloud_id NsxtAlbCloud#importable_cloud_id}
  */
  readonly importableCloudId: string;
  /**
  * NSX-T ALB Cloud name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_cloud#name NsxtAlbCloud#name}
  */
  readonly name: string;
  /**
  * Network pool ID for NSX-T ALB Importable Cloud
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_cloud#network_pool_id NsxtAlbCloud#network_pool_id}
  */
  readonly networkPoolId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_cloud vcd_nsxt_alb_cloud}
*/
export class NsxtAlbCloud extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_nsxt_alb_cloud";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NsxtAlbCloud resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NsxtAlbCloud to import
  * @param importFromId The id of the existing NsxtAlbCloud that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_cloud#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NsxtAlbCloud to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_nsxt_alb_cloud", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_alb_cloud vcd_nsxt_alb_cloud} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NsxtAlbCloudConfig
  */
  public constructor(scope: Construct, id: string, config: NsxtAlbCloudConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_nsxt_alb_cloud',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1',
        providerVersionConstraint: '3.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._controllerId = config.controllerId;
    this._description = config.description;
    this._id = config.id;
    this._importableCloudId = config.importableCloudId;
    this._name = config.name;
    this._networkPoolId = config.networkPoolId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // controller_id - computed: false, optional: false, required: true
  private _controllerId?: string; 
  public get controllerId() {
    return this.getStringAttribute('controller_id');
  }
  public set controllerId(value: string) {
    this._controllerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerIdInput() {
    return this._controllerId;
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

  // health_message - computed: true, optional: false, required: false
  public get healthMessage() {
    return this.getStringAttribute('health_message');
  }

  // health_status - computed: true, optional: false, required: false
  public get healthStatus() {
    return this.getStringAttribute('health_status');
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

  // importable_cloud_id - computed: false, optional: false, required: true
  private _importableCloudId?: string; 
  public get importableCloudId() {
    return this.getStringAttribute('importable_cloud_id');
  }
  public set importableCloudId(value: string) {
    this._importableCloudId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get importableCloudIdInput() {
    return this._importableCloudId;
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

  // network_pool_id - computed: false, optional: false, required: true
  private _networkPoolId?: string; 
  public get networkPoolId() {
    return this.getStringAttribute('network_pool_id');
  }
  public set networkPoolId(value: string) {
    this._networkPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPoolIdInput() {
    return this._networkPoolId;
  }

  // network_pool_name - computed: true, optional: false, required: false
  public get networkPoolName() {
    return this.getStringAttribute('network_pool_name');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      controller_id: cdktf.stringToTerraform(this._controllerId),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      importable_cloud_id: cdktf.stringToTerraform(this._importableCloudId),
      name: cdktf.stringToTerraform(this._name),
      network_pool_id: cdktf.stringToTerraform(this._networkPoolId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      controller_id: {
        value: cdktf.stringToHclTerraform(this._controllerId),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      importable_cloud_id: {
        value: cdktf.stringToHclTerraform(this._importableCloudId),
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
      network_pool_id: {
        value: cdktf.stringToHclTerraform(this._networkPoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
