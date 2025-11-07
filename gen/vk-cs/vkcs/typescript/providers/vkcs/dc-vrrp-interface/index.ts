// https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dc_vrrp_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DcVrrpInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * DC Interface ID to attach. Changing this creates a new resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dc_vrrp_interface#dc_interface_id DcVrrpInterface#dc_interface_id}
  */
  readonly dcInterfaceId: string;
  /**
  * VRRP ID to attach. Changing this creates a new resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dc_vrrp_interface#dc_vrrp_id DcVrrpInterface#dc_vrrp_id}
  */
  readonly dcVrrpId: string;
  /**
  * Description of the VRRP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dc_vrrp_interface#description DcVrrpInterface#description}
  */
  readonly description?: string;
  /**
  * Start VRRP instance on interface as VRRP Master. Default is false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dc_vrrp_interface#master DcVrrpInterface#master}
  */
  readonly master?: boolean | cdktf.IResolvable;
  /**
  * Name of the VRRP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dc_vrrp_interface#name DcVrrpInterface#name}
  */
  readonly name?: string;
  /**
  * VRRP interface preempt behavior. Default is true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dc_vrrp_interface#preempt DcVrrpInterface#preempt}
  */
  readonly preempt?: boolean | cdktf.IResolvable;
  /**
  * VRRP interface priority. Default is 100
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dc_vrrp_interface#priority DcVrrpInterface#priority}
  */
  readonly priority?: number;
  /**
  * The `region` to fetch availability zones from, defaults to the provider's `region`. Changing this creates a new vrrp_interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dc_vrrp_interface#region DcVrrpInterface#region}
  */
  readonly region?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dc_vrrp_interface vkcs_dc_vrrp_interface}
*/
export class DcVrrpInterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vkcs_dc_vrrp_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DcVrrpInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DcVrrpInterface to import
  * @param importFromId The id of the existing DcVrrpInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dc_vrrp_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DcVrrpInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vkcs_dc_vrrp_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dc_vrrp_interface vkcs_dc_vrrp_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DcVrrpInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: DcVrrpInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'vkcs_dc_vrrp_interface',
      terraformGeneratorMetadata: {
        providerName: 'vkcs',
        providerVersion: '0.13.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dcInterfaceId = config.dcInterfaceId;
    this._dcVrrpId = config.dcVrrpId;
    this._description = config.description;
    this._master = config.master;
    this._name = config.name;
    this._preempt = config.preempt;
    this._priority = config.priority;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // dc_interface_id - computed: false, optional: false, required: true
  private _dcInterfaceId?: string; 
  public get dcInterfaceId() {
    return this.getStringAttribute('dc_interface_id');
  }
  public set dcInterfaceId(value: string) {
    this._dcInterfaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dcInterfaceIdInput() {
    return this._dcInterfaceId;
  }

  // dc_vrrp_id - computed: false, optional: false, required: true
  private _dcVrrpId?: string; 
  public get dcVrrpId() {
    return this.getStringAttribute('dc_vrrp_id');
  }
  public set dcVrrpId(value: string) {
    this._dcVrrpId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dcVrrpIdInput() {
    return this._dcVrrpId;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // master - computed: true, optional: true, required: false
  private _master?: boolean | cdktf.IResolvable; 
  public get master() {
    return this.getBooleanAttribute('master');
  }
  public set master(value: boolean | cdktf.IResolvable) {
    this._master = value;
  }
  public resetMaster() {
    this._master = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterInput() {
    return this._master;
  }

  // name - computed: true, optional: true, required: false
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

  // preempt - computed: true, optional: true, required: false
  private _preempt?: boolean | cdktf.IResolvable; 
  public get preempt() {
    return this.getBooleanAttribute('preempt');
  }
  public set preempt(value: boolean | cdktf.IResolvable) {
    this._preempt = value;
  }
  public resetPreempt() {
    this._preempt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptInput() {
    return this._preempt;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
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
      dc_interface_id: cdktf.stringToTerraform(this._dcInterfaceId),
      dc_vrrp_id: cdktf.stringToTerraform(this._dcVrrpId),
      description: cdktf.stringToTerraform(this._description),
      master: cdktf.booleanToTerraform(this._master),
      name: cdktf.stringToTerraform(this._name),
      preempt: cdktf.booleanToTerraform(this._preempt),
      priority: cdktf.numberToTerraform(this._priority),
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dc_interface_id: {
        value: cdktf.stringToHclTerraform(this._dcInterfaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dc_vrrp_id: {
        value: cdktf.stringToHclTerraform(this._dcVrrpId),
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
      master: {
        value: cdktf.booleanToHclTerraform(this._master),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preempt: {
        value: cdktf.booleanToHclTerraform(this._preempt),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
