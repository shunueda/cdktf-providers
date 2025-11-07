// https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/data-sources/compliance_standard
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPrismacloudComplianceStandardConfig extends cdktf.TerraformMetaArguments {
  /**
  * Compliance standard ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/data-sources/compliance_standard#cs_id DataPrismacloudComplianceStandard#cs_id}
  */
  readonly csId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/data-sources/compliance_standard#id DataPrismacloudComplianceStandard#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Compliance standard name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/data-sources/compliance_standard#name DataPrismacloudComplianceStandard#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/data-sources/compliance_standard prismacloud_compliance_standard}
*/
export class DataPrismacloudComplianceStandard extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prismacloud_compliance_standard";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPrismacloudComplianceStandard resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPrismacloudComplianceStandard to import
  * @param importFromId The id of the existing DataPrismacloudComplianceStandard that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/data-sources/compliance_standard#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPrismacloudComplianceStandard to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prismacloud_compliance_standard", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/data-sources/compliance_standard prismacloud_compliance_standard} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPrismacloudComplianceStandardConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPrismacloudComplianceStandardConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'prismacloud_compliance_standard',
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
    this._csId = config.csId;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_types - computed: true, optional: false, required: false
  public get cloudTypes() {
    return this.getListAttribute('cloud_types');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getNumberAttribute('created_on');
  }

  // cs_id - computed: true, optional: true, required: false
  private _csId?: string; 
  public get csId() {
    return this.getStringAttribute('cs_id');
  }
  public set csId(value: string) {
    this._csId = value;
  }
  public resetCsId() {
    this._csId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csIdInput() {
    return this._csId;
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

  // last_modified_by - computed: true, optional: false, required: false
  public get lastModifiedBy() {
    return this.getStringAttribute('last_modified_by');
  }

  // last_modified_on - computed: true, optional: false, required: false
  public get lastModifiedOn() {
    return this.getNumberAttribute('last_modified_on');
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

  // policies_assigned_count - computed: true, optional: false, required: false
  public get policiesAssignedCount() {
    return this.getNumberAttribute('policies_assigned_count');
  }

  // system_default - computed: true, optional: false, required: false
  public get systemDefault() {
    return this.getBooleanAttribute('system_default');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cs_id: cdktf.stringToTerraform(this._csId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
