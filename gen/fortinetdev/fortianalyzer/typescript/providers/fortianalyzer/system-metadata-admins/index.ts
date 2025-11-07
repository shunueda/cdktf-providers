// https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_metadata_admins
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemMetadataAdminsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_metadata_admins#fieldlength SystemMetadataAdmins#fieldlength}
  */
  readonly fieldlength?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_metadata_admins#fieldname SystemMetadataAdmins#fieldname}
  */
  readonly fieldname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_metadata_admins#id SystemMetadataAdmins#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_metadata_admins#importance SystemMetadataAdmins#importance}
  */
  readonly importance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_metadata_admins#status SystemMetadataAdmins#status}
  */
  readonly status?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_metadata_admins fortianalyzer_system_metadata_admins}
*/
export class SystemMetadataAdmins extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortianalyzer_system_metadata_admins";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemMetadataAdmins resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemMetadataAdmins to import
  * @param importFromId The id of the existing SystemMetadataAdmins that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_metadata_admins#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemMetadataAdmins to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortianalyzer_system_metadata_admins", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_metadata_admins fortianalyzer_system_metadata_admins} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemMetadataAdminsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemMetadataAdminsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortianalyzer_system_metadata_admins',
      terraformGeneratorMetadata: {
        providerName: 'fortianalyzer',
        providerVersion: '1.5.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fieldlength = config.fieldlength;
    this._fieldname = config.fieldname;
    this._id = config.id;
    this._importance = config.importance;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // fieldlength - computed: true, optional: true, required: false
  private _fieldlength?: string; 
  public get fieldlength() {
    return this.getStringAttribute('fieldlength');
  }
  public set fieldlength(value: string) {
    this._fieldlength = value;
  }
  public resetFieldlength() {
    this._fieldlength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldlengthInput() {
    return this._fieldlength;
  }

  // fieldname - computed: false, optional: true, required: false
  private _fieldname?: string; 
  public get fieldname() {
    return this.getStringAttribute('fieldname');
  }
  public set fieldname(value: string) {
    this._fieldname = value;
  }
  public resetFieldname() {
    this._fieldname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldnameInput() {
    return this._fieldname;
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

  // importance - computed: true, optional: true, required: false
  private _importance?: string; 
  public get importance() {
    return this.getStringAttribute('importance');
  }
  public set importance(value: string) {
    this._importance = value;
  }
  public resetImportance() {
    this._importance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importanceInput() {
    return this._importance;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fieldlength: cdktf.stringToTerraform(this._fieldlength),
      fieldname: cdktf.stringToTerraform(this._fieldname),
      id: cdktf.stringToTerraform(this._id),
      importance: cdktf.stringToTerraform(this._importance),
      status: cdktf.stringToTerraform(this._status),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fieldlength: {
        value: cdktf.stringToHclTerraform(this._fieldlength),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fieldname: {
        value: cdktf.stringToHclTerraform(this._fieldname),
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
      importance: {
        value: cdktf.stringToHclTerraform(this._importance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
