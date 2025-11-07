// https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/compliance_standard_requirement_section
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComplianceStandardRequirementSectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Compliance standard requirement ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/compliance_standard_requirement_section#csr_id ComplianceStandardRequirementSection#csr_id}
  */
  readonly csrId: string;
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/compliance_standard_requirement_section#description ComplianceStandardRequirementSection#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/compliance_standard_requirement_section#id ComplianceStandardRequirementSection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Section label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/compliance_standard_requirement_section#label ComplianceStandardRequirementSection#label}
  */
  readonly label?: string;
  /**
  * Compliance section ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/compliance_standard_requirement_section#section_id ComplianceStandardRequirementSection#section_id}
  */
  readonly sectionId: string;
  /**
  * View order
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/compliance_standard_requirement_section#view_order ComplianceStandardRequirementSection#view_order}
  */
  readonly viewOrder?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/compliance_standard_requirement_section prismacloud_compliance_standard_requirement_section}
*/
export class ComplianceStandardRequirementSection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prismacloud_compliance_standard_requirement_section";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ComplianceStandardRequirementSection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComplianceStandardRequirementSection to import
  * @param importFromId The id of the existing ComplianceStandardRequirementSection that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/compliance_standard_requirement_section#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComplianceStandardRequirementSection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prismacloud_compliance_standard_requirement_section", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/compliance_standard_requirement_section prismacloud_compliance_standard_requirement_section} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComplianceStandardRequirementSectionConfig
  */
  public constructor(scope: Construct, id: string, config: ComplianceStandardRequirementSectionConfig) {
    super(scope, id, {
      terraformResourceType: 'prismacloud_compliance_standard_requirement_section',
      terraformGeneratorMetadata: {
        providerName: 'prismacloud',
        providerVersion: '1.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._csrId = config.csrId;
    this._description = config.description;
    this._id = config.id;
    this._label = config.label;
    this._sectionId = config.sectionId;
    this._viewOrder = config.viewOrder;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // associated_policy_ids - computed: true, optional: false, required: false
  public get associatedPolicyIds() {
    return this.getListAttribute('associated_policy_ids');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getNumberAttribute('created_on');
  }

  // csr_id - computed: false, optional: false, required: true
  private _csrId?: string; 
  public get csrId() {
    return this.getStringAttribute('csr_id');
  }
  public set csrId(value: string) {
    this._csrId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get csrIdInput() {
    return this._csrId;
  }

  // csrs_id - computed: true, optional: false, required: false
  public get csrsId() {
    return this.getStringAttribute('csrs_id');
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

  // label - computed: true, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // last_modified_by - computed: true, optional: false, required: false
  public get lastModifiedBy() {
    return this.getStringAttribute('last_modified_by');
  }

  // last_modified_on - computed: true, optional: false, required: false
  public get lastModifiedOn() {
    return this.getNumberAttribute('last_modified_on');
  }

  // policies_assigned_count - computed: true, optional: false, required: false
  public get policiesAssignedCount() {
    return this.getNumberAttribute('policies_assigned_count');
  }

  // requirement_name - computed: true, optional: false, required: false
  public get requirementName() {
    return this.getStringAttribute('requirement_name');
  }

  // section_id - computed: false, optional: false, required: true
  private _sectionId?: string; 
  public get sectionId() {
    return this.getStringAttribute('section_id');
  }
  public set sectionId(value: string) {
    this._sectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sectionIdInput() {
    return this._sectionId;
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
      csr_id: cdktf.stringToTerraform(this._csrId),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      label: cdktf.stringToTerraform(this._label),
      section_id: cdktf.stringToTerraform(this._sectionId),
      view_order: cdktf.numberToTerraform(this._viewOrder),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      csr_id: {
        value: cdktf.stringToHclTerraform(this._csrId),
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
      label: {
        value: cdktf.stringToHclTerraform(this._label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      section_id: {
        value: cdktf.stringToHclTerraform(this._sectionId),
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
