// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/data-sources/dbbrain_security_audit_log_download_urls
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudDbbrainSecurityAuditLogDownloadUrlsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Asynchronous task ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/data-sources/dbbrain_security_audit_log_download_urls#async_request_id DataTencentcloudDbbrainSecurityAuditLogDownloadUrls#async_request_id}
  */
  readonly asyncRequestId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/data-sources/dbbrain_security_audit_log_download_urls#id DataTencentcloudDbbrainSecurityAuditLogDownloadUrls#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Service product type, supported values: `mysql` - ApsaraDB for MySQL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/data-sources/dbbrain_security_audit_log_download_urls#product DataTencentcloudDbbrainSecurityAuditLogDownloadUrls#product}
  */
  readonly product: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/data-sources/dbbrain_security_audit_log_download_urls#result_output_file DataTencentcloudDbbrainSecurityAuditLogDownloadUrls#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Security audit group Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/data-sources/dbbrain_security_audit_log_download_urls#sec_audit_group_id DataTencentcloudDbbrainSecurityAuditLogDownloadUrls#sec_audit_group_id}
  */
  readonly secAuditGroupId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/data-sources/dbbrain_security_audit_log_download_urls tencentcloud_dbbrain_security_audit_log_download_urls}
*/
export class DataTencentcloudDbbrainSecurityAuditLogDownloadUrls extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dbbrain_security_audit_log_download_urls";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudDbbrainSecurityAuditLogDownloadUrls resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudDbbrainSecurityAuditLogDownloadUrls to import
  * @param importFromId The id of the existing DataTencentcloudDbbrainSecurityAuditLogDownloadUrls that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/data-sources/dbbrain_security_audit_log_download_urls#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudDbbrainSecurityAuditLogDownloadUrls to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dbbrain_security_audit_log_download_urls", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/data-sources/dbbrain_security_audit_log_download_urls tencentcloud_dbbrain_security_audit_log_download_urls} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudDbbrainSecurityAuditLogDownloadUrlsConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudDbbrainSecurityAuditLogDownloadUrlsConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dbbrain_security_audit_log_download_urls',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.46',
        providerVersionConstraint: '1.82.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._asyncRequestId = config.asyncRequestId;
    this._id = config.id;
    this._product = config.product;
    this._resultOutputFile = config.resultOutputFile;
    this._secAuditGroupId = config.secAuditGroupId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // async_request_id - computed: false, optional: false, required: true
  private _asyncRequestId?: number; 
  public get asyncRequestId() {
    return this.getNumberAttribute('async_request_id');
  }
  public set asyncRequestId(value: number) {
    this._asyncRequestId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asyncRequestIdInput() {
    return this._asyncRequestId;
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

  // product - computed: false, optional: false, required: true
  private _product?: string; 
  public get product() {
    return this.getStringAttribute('product');
  }
  public set product(value: string) {
    this._product = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productInput() {
    return this._product;
  }

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
  }

  // sec_audit_group_id - computed: false, optional: false, required: true
  private _secAuditGroupId?: string; 
  public get secAuditGroupId() {
    return this.getStringAttribute('sec_audit_group_id');
  }
  public set secAuditGroupId(value: string) {
    this._secAuditGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secAuditGroupIdInput() {
    return this._secAuditGroupId;
  }

  // urls - computed: true, optional: false, required: false
  public get urls() {
    return cdktf.Fn.tolist(this.getListAttribute('urls'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      async_request_id: cdktf.numberToTerraform(this._asyncRequestId),
      id: cdktf.stringToTerraform(this._id),
      product: cdktf.stringToTerraform(this._product),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      sec_audit_group_id: cdktf.stringToTerraform(this._secAuditGroupId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      async_request_id: {
        value: cdktf.numberToHclTerraform(this._asyncRequestId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product: {
        value: cdktf.stringToHclTerraform(this._product),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sec_audit_group_id: {
        value: cdktf.stringToHclTerraform(this._secAuditGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
