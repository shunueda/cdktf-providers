// https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/compliance_standard_requirement
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComplianceStandardRequirementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Compliance standard ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/compliance_standard_requirement#cs_id ComplianceStandardRequirement#cs_id}
  */
  readonly csId: string;
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/compliance_standard_requirement#description ComplianceStandardRequirement#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/compliance_standard_requirement#id ComplianceStandardRequirement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Compliance requirement name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/compliance_standard_requirement#name ComplianceStandardRequirement#name}
  */
  readonly name: string;
  /**
  * Compliance requirement number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/compliance_standard_requirement#requirement_id ComplianceStandardRequirement#requirement_id}
  */
  readonly requirementId?: string;
  /**
  * View order
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/compliance_standard_requirement#view_order ComplianceStandardRequirement#view_order}
  */
  readonly viewOrder?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/compliance_standard_requirement prismacloud_compliance_standard_requirement}
*/
export class ComplianceStandardRequirement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prismacloud_compliance_standard_requirement";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ComplianceStandardRequirement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComplianceStandardRequirement to import
  * @param importFromId The id of the existing ComplianceStandardRequirement that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/compliance_standard_requirement#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComplianceStandardRequirement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prismacloud_compliance_standard_requirement", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/compliance_standard_requirement prismacloud_compliance_standard_requirement} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComplianceStandardRequirementConfig
  */
  public constructor(scope: Construct, id: string, config: ComplianceStandardRequirementConfig) {
    super(scope, id, {
      terraformResourceType: 'prismacloud_compliance_standard_requirement',
      terraformGeneratorMetadata: {
        providerName: 'prismacloud',
        providerVersion: '1.7.0',
        providerVersionConstraint: '1.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._csId = config.csId;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._requirementId = config.requirementId;
    this._viewOrder = config.viewOrder;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getNumberAttribute('created_on');
  }

  // cs_id - computed: false, optional: false, required: true
  private _csId?: string; 
  public get csId() {
    return this.getStringAttribute('cs_id');
  }
  public set csId(value: string) {
    this._csId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get csIdInput() {
    return this._csId;
  }

  // csr_id - computed: true, optional: false, required: false
  public get csrId() {
    return this.getStringAttribute('csr_id');
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

  // last_modified_by - computed: true, optional: false, required: false
  public get lastModifiedBy() {
    return this.getStringAttribute('last_modified_by');
  }

  // last_modified_on - computed: true, optional: false, required: false
  public get lastModifiedOn() {
    return this.getNumberAttribute('last_modified_on');
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

  // policies_assigned_count - computed: true, optional: false, required: false
  public get policiesAssignedCount() {
    return this.getNumberAttribute('policies_assigned_count');
  }

  // requirement_id - computed: false, optional: true, required: false
  private _requirementId?: string; 
  public get requirementId() {
    return this.getStringAttribute('requirement_id');
  }
  public set requirementId(value: string) {
    this._requirementId = value;
  }
  public resetRequirementId() {
    this._requirementId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requirementIdInput() {
    return this._requirementId;
  }

  // standard_name - computed: true, optional: false, required: false
  public get standardName() {
    return this.getStringAttribute('standard_name');
  }

  // system_default - computed: true, optional: false, required: false
  public get systemDefault() {
    return this.getBooleanAttribute('system_default');
  }

  // view_order - computed: true, optional: true, required: false
  private _viewOrder?: number; 
  public get viewOrder() {
    return this.getNumberAttribute('view_order');
  }
  public set viewOrder(value: number) {
    this._viewOrder = value;
  }
  public resetViewOrder() {
    this._viewOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewOrderInput() {
    return this._viewOrder;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cs_id: cdktf.stringToTerraform(this._csId),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      requirement_id: cdktf.stringToTerraform(this._requirementId),
      view_order: cdktf.numberToTerraform(this._viewOrder),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cs_id: {
        value: cdktf.stringToHclTerraform(this._csId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      requirement_id: {
        value: cdktf.stringToHclTerraform(this._requirementId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      view_order: {
        value: cdktf.numberToHclTerraform(this._viewOrder),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
