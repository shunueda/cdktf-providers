// https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/data-sources/compliance_standard_requirement_sections
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPrismacloudComplianceStandardRequirementSectionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Compliance standard requirement ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/data-sources/compliance_standard_requirement_sections#csr_id DataPrismacloudComplianceStandardRequirementSections#csr_id}
  */
  readonly csrId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/data-sources/compliance_standard_requirement_sections#id DataPrismacloudComplianceStandardRequirementSections#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataPrismacloudComplianceStandardRequirementSectionsListing {
}

export function dataPrismacloudComplianceStandardRequirementSectionsListingToTerraform(struct?: DataPrismacloudComplianceStandardRequirementSectionsListing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPrismacloudComplianceStandardRequirementSectionsListingToHclTerraform(struct?: DataPrismacloudComplianceStandardRequirementSectionsListing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPrismacloudComplianceStandardRequirementSectionsListingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataPrismacloudComplianceStandardRequirementSectionsListing | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPrismacloudComplianceStandardRequirementSectionsListing | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

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

  // csrs_id - computed: true, optional: false, required: false
  public get csrsId() {
    return this.getStringAttribute('csrs_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // section_id - computed: true, optional: false, required: false
  public get sectionId() {
    return this.getStringAttribute('section_id');
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
}

export class DataPrismacloudComplianceStandardRequirementSectionsListingList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataPrismacloudComplianceStandardRequirementSectionsListingOutputReference {
    return new DataPrismacloudComplianceStandardRequirementSectionsListingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/data-sources/compliance_standard_requirement_sections prismacloud_compliance_standard_requirement_sections}
*/
export class DataPrismacloudComplianceStandardRequirementSections extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prismacloud_compliance_standard_requirement_sections";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPrismacloudComplianceStandardRequirementSections resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPrismacloudComplianceStandardRequirementSections to import
  * @param importFromId The id of the existing DataPrismacloudComplianceStandardRequirementSections that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/data-sources/compliance_standard_requirement_sections#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPrismacloudComplianceStandardRequirementSections to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prismacloud_compliance_standard_requirement_sections", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/data-sources/compliance_standard_requirement_sections prismacloud_compliance_standard_requirement_sections} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPrismacloudComplianceStandardRequirementSectionsConfig
  */
  public constructor(scope: Construct, id: string, config: DataPrismacloudComplianceStandardRequirementSectionsConfig) {
    super(scope, id, {
      terraformResourceType: 'prismacloud_compliance_standard_requirement_sections',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // listing - computed: true, optional: false, required: false
  private _listing = new DataPrismacloudComplianceStandardRequirementSectionsListingList(this, "listing", false);
  public get listing() {
    return this._listing;
  }

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getNumberAttribute('total');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      csr_id: cdktf.stringToTerraform(this._csrId),
      id: cdktf.stringToTerraform(this._id),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
