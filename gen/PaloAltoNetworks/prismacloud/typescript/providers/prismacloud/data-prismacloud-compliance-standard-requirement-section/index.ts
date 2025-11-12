// https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/data-sources/compliance_standard_requirement_section
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPrismacloudComplianceStandardRequirementSectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Compliance standard requirement ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/data-sources/compliance_standard_requirement_section#csr_id DataPrismacloudComplianceStandardRequirementSection#csr_id}
  */
  readonly csrId: string;
  /**
  * Compliance standard requirement section ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/data-sources/compliance_standard_requirement_section#csrs_id DataPrismacloudComplianceStandardRequirementSection#csrs_id}
  */
  readonly csrsId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/data-sources/compliance_standard_requirement_section#id DataPrismacloudComplianceStandardRequirementSection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Compliance section ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/data-sources/compliance_standard_requirement_section#section_id DataPrismacloudComplianceStandardRequirementSection#section_id}
  */
  readonly sectionId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/data-sources/compliance_standard_requirement_section prismacloud_compliance_standard_requirement_section}
*/
export class DataPrismacloudComplianceStandardRequirementSection extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prismacloud_compliance_standard_requirement_section";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPrismacloudComplianceStandardRequirementSection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPrismacloudComplianceStandardRequirementSection to import
  * @param importFromId The id of the existing DataPrismacloudComplianceStandardRequirementSection that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/data-sources/compliance_standard_requirement_section#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPrismacloudComplianceStandardRequirementSection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prismacloud_compliance_standard_requirement_section", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/data-sources/compliance_standard_requirement_section prismacloud_compliance_standard_requirement_section} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPrismacloudComplianceStandardRequirementSectionConfig
  */
  public constructor(scope: Construct, id: string, config: DataPrismacloudComplianceStandardRequirementSectionConfig) {
    super(scope, id, {
      terraformResourceType: 'prismacloud_compliance_standard_requirement_section',
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
    this._csrId = config.csrId;
    this._csrsId = config.csrsId;
    this._id = config.id;
    this._sectionId = config.sectionId;
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

  // csrs_id - computed: true, optional: true, required: false
  private _csrsId?: string; 
  public get csrsId() {
    return this.getStringAttribute('csrs_id');
  }
  public set csrsId(value: string) {
    this._csrsId = value;
  }
  public resetCsrsId() {
    this._csrsId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csrsIdInput() {
    return this._csrsId;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
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

  // section_count - computed: true, optional: false, required: false
  public get sectionCount() {
    return this.getNumberAttribute('section_count');
  }

  // section_id - computed: true, optional: true, required: false
  private _sectionId?: string; 
  public get sectionId() {
    return this.getStringAttribute('section_id');
  }
  public set sectionId(value: string) {
    this._sectionId = value;
  }
  public resetSectionId() {
    this._sectionId = undefined;
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

  // view_order - computed: true, optional: false, required: false
  public get viewOrder() {
    return this.getNumberAttribute('view_order');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      csr_id: cdktf.stringToTerraform(this._csrId),
      csrs_id: cdktf.stringToTerraform(this._csrsId),
      id: cdktf.stringToTerraform(this._id),
      section_id: cdktf.stringToTerraform(this._sectionId),
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
      csrs_id: {
        value: cdktf.stringToHclTerraform(this._csrsId),
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
      section_id: {
        value: cdktf.stringToHclTerraform(this._sectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
