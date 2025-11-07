// https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/certificate_push_akv
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CertificatePushAkvConfig extends cdktf.TerraformMetaArguments {
  /**
  * JSON string containing all certificate and key vault configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/certificate_push_akv#field_info CertificatePushAkv#field_info}
  */
  readonly fieldInfo: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/certificate_push_akv#id CertificatePushAkv#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The workflow name to execute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/certificate_push_akv#workflow_name CertificatePushAkv#workflow_name}
  */
  readonly workflowName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/certificate_push_akv appviewx_certificate_push_akv}
*/
export class CertificatePushAkv extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "appviewx_certificate_push_akv";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CertificatePushAkv resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CertificatePushAkv to import
  * @param importFromId The id of the existing CertificatePushAkv that should be imported. Refer to the {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/certificate_push_akv#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CertificatePushAkv to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "appviewx_certificate_push_akv", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/certificate_push_akv appviewx_certificate_push_akv} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CertificatePushAkvConfig
  */
  public constructor(scope: Construct, id: string, config: CertificatePushAkvConfig) {
    super(scope, id, {
      terraformResourceType: 'appviewx_certificate_push_akv',
      terraformGeneratorMetadata: {
        providerName: 'appviewx',
        providerVersion: '1.0.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fieldInfo = config.fieldInfo;
    this._id = config.id;
    this._workflowName = config.workflowName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_common_name - computed: true, optional: false, required: false
  public get certificateCommonName() {
    return this.getStringAttribute('certificate_common_name');
  }

  // field_info - computed: false, optional: false, required: true
  private _fieldInfo?: string; 
  public get fieldInfo() {
    return this.getStringAttribute('field_info');
  }
  public set fieldInfo(value: string) {
    this._fieldInfo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInfoInput() {
    return this._fieldInfo;
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

  // status_code - computed: true, optional: false, required: false
  public get statusCode() {
    return this.getNumberAttribute('status_code');
  }

  // success - computed: true, optional: false, required: false
  public get success() {
    return this.getBooleanAttribute('success');
  }

  // workflow_id - computed: true, optional: false, required: false
  public get workflowId() {
    return this.getStringAttribute('workflow_id');
  }

  // workflow_name - computed: false, optional: false, required: true
  private _workflowName?: string; 
  public get workflowName() {
    return this.getStringAttribute('workflow_name');
  }
  public set workflowName(value: string) {
    this._workflowName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowNameInput() {
    return this._workflowName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      field_info: cdktf.stringToTerraform(this._fieldInfo),
      id: cdktf.stringToTerraform(this._id),
      workflow_name: cdktf.stringToTerraform(this._workflowName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      field_info: {
        value: cdktf.stringToHclTerraform(this._fieldInfo),
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
      workflow_name: {
        value: cdktf.stringToHclTerraform(this._workflowName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
