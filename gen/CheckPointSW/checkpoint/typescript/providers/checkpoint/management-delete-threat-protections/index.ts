// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_delete_threat_protections
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementDeleteThreatProtectionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_delete_threat_protections#id ManagementDeleteThreatProtections#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Protections package format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_delete_threat_protections#package_format ManagementDeleteThreatProtections#package_format}
  */
  readonly packageFormat?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_delete_threat_protections checkpoint_management_delete_threat_protections}
*/
export class ManagementDeleteThreatProtections extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_delete_threat_protections";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementDeleteThreatProtections resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementDeleteThreatProtections to import
  * @param importFromId The id of the existing ManagementDeleteThreatProtections that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_delete_threat_protections#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementDeleteThreatProtections to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_delete_threat_protections", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_delete_threat_protections checkpoint_management_delete_threat_protections} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementDeleteThreatProtectionsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ManagementDeleteThreatProtectionsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_delete_threat_protections',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._packageFormat = config.packageFormat;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // package_format - computed: false, optional: true, required: false
  private _packageFormat?: string; 
  public get packageFormat() {
    return this.getStringAttribute('package_format');
  }
  public set packageFormat(value: string) {
    this._packageFormat = value;
  }
  public resetPackageFormat() {
    this._packageFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageFormatInput() {
    return this._packageFormat;
  }

  // task_id - computed: true, optional: false, required: false
  public get taskId() {
    return this.getStringAttribute('task_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      package_format: cdktf.stringToTerraform(this._packageFormat),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      package_format: {
        value: cdktf.stringToHclTerraform(this._packageFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
