// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_template_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrgVdcTemplateInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * If this flag is set to 'true', it forcefully deletes the VDC, only when delete_instantiated_vdc_on_removal=true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_template_instance#delete_force OrgVdcTemplateInstance#delete_force}
  */
  readonly deleteForce?: boolean | cdktf.IResolvable;
  /**
  * If this flag is set to 'true', removing this resource will attempt to delete the instantiated VDC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_template_instance#delete_instantiated_vdc_on_removal OrgVdcTemplateInstance#delete_instantiated_vdc_on_removal}
  */
  readonly deleteInstantiatedVdcOnRemoval: boolean | cdktf.IResolvable;
  /**
  * If this flag is set to 'true', it recursively deletes the VDC, only when delete_instantiated_vdc_on_removal=true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_template_instance#delete_recursive OrgVdcTemplateInstance#delete_recursive}
  */
  readonly deleteRecursive?: boolean | cdktf.IResolvable;
  /**
  * Description of the VDC to be instantiated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_template_instance#description OrgVdcTemplateInstance#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_template_instance#id OrgVdcTemplateInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the VDC to be instantiated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_template_instance#name OrgVdcTemplateInstance#name}
  */
  readonly name: string;
  /**
  * ID of the Organization where the VDC will be instantiated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_template_instance#org_id OrgVdcTemplateInstance#org_id}
  */
  readonly orgId: string;
  /**
  * ID of the VDC template to instantiate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_template_instance#org_vdc_template_id OrgVdcTemplateInstance#org_vdc_template_id}
  */
  readonly orgVdcTemplateId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_template_instance vcd_org_vdc_template_instance}
*/
export class OrgVdcTemplateInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_org_vdc_template_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrgVdcTemplateInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrgVdcTemplateInstance to import
  * @param importFromId The id of the existing OrgVdcTemplateInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_template_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrgVdcTemplateInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_org_vdc_template_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_template_instance vcd_org_vdc_template_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrgVdcTemplateInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: OrgVdcTemplateInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_org_vdc_template_instance',
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
    this._deleteForce = config.deleteForce;
    this._deleteInstantiatedVdcOnRemoval = config.deleteInstantiatedVdcOnRemoval;
    this._deleteRecursive = config.deleteRecursive;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._orgId = config.orgId;
    this._orgVdcTemplateId = config.orgVdcTemplateId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delete_force - computed: false, optional: true, required: false
  private _deleteForce?: boolean | cdktf.IResolvable; 
  public get deleteForce() {
    return this.getBooleanAttribute('delete_force');
  }
  public set deleteForce(value: boolean | cdktf.IResolvable) {
    this._deleteForce = value;
  }
  public resetDeleteForce() {
    this._deleteForce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteForceInput() {
    return this._deleteForce;
  }

  // delete_instantiated_vdc_on_removal - computed: false, optional: false, required: true
  private _deleteInstantiatedVdcOnRemoval?: boolean | cdktf.IResolvable; 
  public get deleteInstantiatedVdcOnRemoval() {
    return this.getBooleanAttribute('delete_instantiated_vdc_on_removal');
  }
  public set deleteInstantiatedVdcOnRemoval(value: boolean | cdktf.IResolvable) {
    this._deleteInstantiatedVdcOnRemoval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInstantiatedVdcOnRemovalInput() {
    return this._deleteInstantiatedVdcOnRemoval;
  }

  // delete_recursive - computed: false, optional: true, required: false
  private _deleteRecursive?: boolean | cdktf.IResolvable; 
  public get deleteRecursive() {
    return this.getBooleanAttribute('delete_recursive');
  }
  public set deleteRecursive(value: boolean | cdktf.IResolvable) {
    this._deleteRecursive = value;
  }
  public resetDeleteRecursive() {
    this._deleteRecursive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteRecursiveInput() {
    return this._deleteRecursive;
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

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // org_vdc_template_id - computed: false, optional: false, required: true
  private _orgVdcTemplateId?: string; 
  public get orgVdcTemplateId() {
    return this.getStringAttribute('org_vdc_template_id');
  }
  public set orgVdcTemplateId(value: string) {
    this._orgVdcTemplateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgVdcTemplateIdInput() {
    return this._orgVdcTemplateId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete_force: cdktf.booleanToTerraform(this._deleteForce),
      delete_instantiated_vdc_on_removal: cdktf.booleanToTerraform(this._deleteInstantiatedVdcOnRemoval),
      delete_recursive: cdktf.booleanToTerraform(this._deleteRecursive),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      org_vdc_template_id: cdktf.stringToTerraform(this._orgVdcTemplateId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delete_force: {
        value: cdktf.booleanToHclTerraform(this._deleteForce),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delete_instantiated_vdc_on_removal: {
        value: cdktf.booleanToHclTerraform(this._deleteInstantiatedVdcOnRemoval),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delete_recursive: {
        value: cdktf.booleanToHclTerraform(this._deleteRecursive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_vdc_template_id: {
        value: cdktf.stringToHclTerraform(this._orgVdcTemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
