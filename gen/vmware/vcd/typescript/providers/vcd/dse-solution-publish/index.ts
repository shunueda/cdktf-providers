// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/dse_solution_publish
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DseSolutionPublishConfig extends cdktf.TerraformMetaArguments {
  /**
  * Only for 'Confluent Platform'. Required if 'confluent_license_type = With License'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/dse_solution_publish#confluent_license_key DseSolutionPublish#confluent_license_key}
  */
  readonly confluentLicenseKey?: string;
  /**
  * Only for 'Confluent Platform'. One of 'No License' or 'With License'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/dse_solution_publish#confluent_license_type DseSolutionPublish#confluent_license_type}
  */
  readonly confluentLicenseType?: string;
  /**
  * The ID of Data Solution
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/dse_solution_publish#data_solution_id DseSolutionPublish#data_solution_id}
  */
  readonly dataSolutionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/dse_solution_publish#id DseSolutionPublish#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A tenant ID that will get the Data Solution Published
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/dse_solution_publish#org_id DseSolutionPublish#org_id}
  */
  readonly orgId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/dse_solution_publish vcd_dse_solution_publish}
*/
export class DseSolutionPublish extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_dse_solution_publish";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DseSolutionPublish resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DseSolutionPublish to import
  * @param importFromId The id of the existing DseSolutionPublish that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/dse_solution_publish#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DseSolutionPublish to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_dse_solution_publish", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/dse_solution_publish vcd_dse_solution_publish} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DseSolutionPublishConfig
  */
  public constructor(scope: Construct, id: string, config: DseSolutionPublishConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_dse_solution_publish',
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
    this._confluentLicenseKey = config.confluentLicenseKey;
    this._confluentLicenseType = config.confluentLicenseType;
    this._dataSolutionId = config.dataSolutionId;
    this._id = config.id;
    this._orgId = config.orgId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // confluent_license_key - computed: false, optional: true, required: false
  private _confluentLicenseKey?: string; 
  public get confluentLicenseKey() {
    return this.getStringAttribute('confluent_license_key');
  }
  public set confluentLicenseKey(value: string) {
    this._confluentLicenseKey = value;
  }
  public resetConfluentLicenseKey() {
    this._confluentLicenseKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confluentLicenseKeyInput() {
    return this._confluentLicenseKey;
  }

  // confluent_license_type - computed: false, optional: true, required: false
  private _confluentLicenseType?: string; 
  public get confluentLicenseType() {
    return this.getStringAttribute('confluent_license_type');
  }
  public set confluentLicenseType(value: string) {
    this._confluentLicenseType = value;
  }
  public resetConfluentLicenseType() {
    this._confluentLicenseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confluentLicenseTypeInput() {
    return this._confluentLicenseType;
  }

  // data_solution_id - computed: false, optional: false, required: true
  private _dataSolutionId?: string; 
  public get dataSolutionId() {
    return this.getStringAttribute('data_solution_id');
  }
  public set dataSolutionId(value: string) {
    this._dataSolutionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSolutionIdInput() {
    return this._dataSolutionId;
  }

  // ds_org_config_id - computed: true, optional: false, required: false
  public get dsOrgConfigId() {
    return this.getStringAttribute('ds_org_config_id');
  }

  // dso_acl_id - computed: true, optional: false, required: false
  public get dsoAclId() {
    return this.getStringAttribute('dso_acl_id');
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

  // template_acl_ids - computed: true, optional: false, required: false
  public get templateAclIds() {
    return cdktf.Fn.tolist(this.getListAttribute('template_acl_ids'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      confluent_license_key: cdktf.stringToTerraform(this._confluentLicenseKey),
      confluent_license_type: cdktf.stringToTerraform(this._confluentLicenseType),
      data_solution_id: cdktf.stringToTerraform(this._dataSolutionId),
      id: cdktf.stringToTerraform(this._id),
      org_id: cdktf.stringToTerraform(this._orgId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      confluent_license_key: {
        value: cdktf.stringToHclTerraform(this._confluentLicenseKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      confluent_license_type: {
        value: cdktf.stringToHclTerraform(this._confluentLicenseType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_solution_id: {
        value: cdktf.stringToHclTerraform(this._dataSolutionId),
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
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
