// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/config_inspection_diagnosis_request
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSamsungcloudplatformConfigInspectionDiagnosisRequestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Access Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/config_inspection_diagnosis_request#access_key DataSamsungcloudplatformConfigInspectionDiagnosisRequest#access_key}
  */
  readonly accessKey: string;
  /**
  * Diagnosis Check Type (either 'BP' or 'SSI')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/config_inspection_diagnosis_request#diagnosis_check_type DataSamsungcloudplatformConfigInspectionDiagnosisRequest#diagnosis_check_type}
  */
  readonly diagnosisCheckType: string;
  /**
  * Diagnosis ID (obtained through Config Inspection List)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/config_inspection_diagnosis_request#diagnosis_id DataSamsungcloudplatformConfigInspectionDiagnosisRequest#diagnosis_id}
  */
  readonly diagnosisId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/config_inspection_diagnosis_request#id DataSamsungcloudplatformConfigInspectionDiagnosisRequest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Project ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/config_inspection_diagnosis_request#project_id DataSamsungcloudplatformConfigInspectionDiagnosisRequest#project_id}
  */
  readonly projectId: string;
  /**
  * Secret Key (optional)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/config_inspection_diagnosis_request#secret_key DataSamsungcloudplatformConfigInspectionDiagnosisRequest#secret_key}
  */
  readonly secretKey?: string;
  /**
  * Tenant ID (Azure, optional)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/config_inspection_diagnosis_request#tenant_id DataSamsungcloudplatformConfigInspectionDiagnosisRequest#tenant_id}
  */
  readonly tenantId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/config_inspection_diagnosis_request samsungcloudplatform_config_inspection_diagnosis_request}
*/
export class DataSamsungcloudplatformConfigInspectionDiagnosisRequest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_config_inspection_diagnosis_request";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSamsungcloudplatformConfigInspectionDiagnosisRequest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSamsungcloudplatformConfigInspectionDiagnosisRequest to import
  * @param importFromId The id of the existing DataSamsungcloudplatformConfigInspectionDiagnosisRequest that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/config_inspection_diagnosis_request#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSamsungcloudplatformConfigInspectionDiagnosisRequest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_config_inspection_diagnosis_request", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/config_inspection_diagnosis_request samsungcloudplatform_config_inspection_diagnosis_request} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSamsungcloudplatformConfigInspectionDiagnosisRequestConfig
  */
  public constructor(scope: Construct, id: string, config: DataSamsungcloudplatformConfigInspectionDiagnosisRequestConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_config_inspection_diagnosis_request',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.16.0',
        providerVersionConstraint: '3.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessKey = config.accessKey;
    this._diagnosisCheckType = config.diagnosisCheckType;
    this._diagnosisId = config.diagnosisId;
    this._id = config.id;
    this._projectId = config.projectId;
    this._secretKey = config.secretKey;
    this._tenantId = config.tenantId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_key - computed: false, optional: false, required: true
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // diagnosis_check_type - computed: false, optional: false, required: true
  private _diagnosisCheckType?: string; 
  public get diagnosisCheckType() {
    return this.getStringAttribute('diagnosis_check_type');
  }
  public set diagnosisCheckType(value: string) {
    this._diagnosisCheckType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diagnosisCheckTypeInput() {
    return this._diagnosisCheckType;
  }

  // diagnosis_id - computed: false, optional: false, required: true
  private _diagnosisId?: string; 
  public get diagnosisId() {
    return this.getStringAttribute('diagnosis_id');
  }
  public set diagnosisId(value: string) {
    this._diagnosisId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diagnosisIdInput() {
    return this._diagnosisId;
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

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getBooleanAttribute('result');
  }

  // secret_key - computed: false, optional: true, required: false
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_key: cdktf.stringToTerraform(this._accessKey),
      diagnosis_check_type: cdktf.stringToTerraform(this._diagnosisCheckType),
      diagnosis_id: cdktf.stringToTerraform(this._diagnosisId),
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
      secret_key: cdktf.stringToTerraform(this._secretKey),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_key: {
        value: cdktf.stringToHclTerraform(this._accessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      diagnosis_check_type: {
        value: cdktf.stringToHclTerraform(this._diagnosisCheckType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      diagnosis_id: {
        value: cdktf.stringToHclTerraform(this._diagnosisId),
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
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_key: {
        value: cdktf.stringToHclTerraform(this._secretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
