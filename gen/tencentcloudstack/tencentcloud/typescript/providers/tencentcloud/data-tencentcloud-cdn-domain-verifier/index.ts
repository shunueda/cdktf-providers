// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/cdn_domain_verifier
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudCdnDomainVerifierConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify whether to keep first create result instead of re-create again.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/cdn_domain_verifier#auto_verify DataTencentcloudCdnDomainVerifier#auto_verify}
  */
  readonly autoVerify?: boolean | cdktf.IResolvable;
  /**
  * Specify domain name, e.g. `www.examplexxx123.com`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/cdn_domain_verifier#domain DataTencentcloudCdnDomainVerifier#domain}
  */
  readonly domain: string;
  /**
  * Indicates failed reason of verification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/cdn_domain_verifier#failed_reason DataTencentcloudCdnDomainVerifier#failed_reason}
  */
  readonly failedReason?: string;
  /**
  * Specify whether the verification record needs to be freeze instead of refresh every 8 hours, this used for domain verification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/cdn_domain_verifier#freeze_record DataTencentcloudCdnDomainVerifier#freeze_record}
  */
  readonly freezeRecord?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/cdn_domain_verifier#id DataTencentcloudCdnDomainVerifier#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Used for save result json.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/cdn_domain_verifier#result_output_file DataTencentcloudCdnDomainVerifier#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Specify verify type, values: `dns` (default), `file`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/cdn_domain_verifier#verify_type DataTencentcloudCdnDomainVerifier#verify_type}
  */
  readonly verifyType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/cdn_domain_verifier tencentcloud_cdn_domain_verifier}
*/
export class DataTencentcloudCdnDomainVerifier extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cdn_domain_verifier";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudCdnDomainVerifier resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudCdnDomainVerifier to import
  * @param importFromId The id of the existing DataTencentcloudCdnDomainVerifier that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/cdn_domain_verifier#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudCdnDomainVerifier to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cdn_domain_verifier", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/cdn_domain_verifier tencentcloud_cdn_domain_verifier} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudCdnDomainVerifierConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudCdnDomainVerifierConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cdn_domain_verifier',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.45',
        providerVersionConstraint: '1.82.45'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoVerify = config.autoVerify;
    this._domain = config.domain;
    this._failedReason = config.failedReason;
    this._freezeRecord = config.freezeRecord;
    this._id = config.id;
    this._resultOutputFile = config.resultOutputFile;
    this._verifyType = config.verifyType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_verify - computed: false, optional: true, required: false
  private _autoVerify?: boolean | cdktf.IResolvable; 
  public get autoVerify() {
    return this.getBooleanAttribute('auto_verify');
  }
  public set autoVerify(value: boolean | cdktf.IResolvable) {
    this._autoVerify = value;
  }
  public resetAutoVerify() {
    this._autoVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoVerifyInput() {
    return this._autoVerify;
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // failed_reason - computed: false, optional: true, required: false
  private _failedReason?: string; 
  public get failedReason() {
    return this.getStringAttribute('failed_reason');
  }
  public set failedReason(value: string) {
    this._failedReason = value;
  }
  public resetFailedReason() {
    this._failedReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedReasonInput() {
    return this._failedReason;
  }

  // file_verify_domains - computed: true, optional: false, required: false
  public get fileVerifyDomains() {
    return this.getListAttribute('file_verify_domains');
  }

  // file_verify_name - computed: true, optional: false, required: false
  public get fileVerifyName() {
    return this.getStringAttribute('file_verify_name');
  }

  // file_verify_url - computed: true, optional: false, required: false
  public get fileVerifyUrl() {
    return this.getStringAttribute('file_verify_url');
  }

  // freeze_record - computed: false, optional: true, required: false
  private _freezeRecord?: boolean | cdktf.IResolvable; 
  public get freezeRecord() {
    return this.getBooleanAttribute('freeze_record');
  }
  public set freezeRecord(value: boolean | cdktf.IResolvable) {
    this._freezeRecord = value;
  }
  public resetFreezeRecord() {
    this._freezeRecord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freezeRecordInput() {
    return this._freezeRecord;
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

  // record - computed: true, optional: false, required: false
  public get record() {
    return this.getStringAttribute('record');
  }

  // record_type - computed: true, optional: false, required: false
  public get recordType() {
    return this.getStringAttribute('record_type');
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

  // sub_domain - computed: true, optional: false, required: false
  public get subDomain() {
    return this.getStringAttribute('sub_domain');
  }

  // verify_result - computed: true, optional: false, required: false
  public get verifyResult() {
    return this.getBooleanAttribute('verify_result');
  }

  // verify_type - computed: false, optional: true, required: false
  private _verifyType?: string; 
  public get verifyType() {
    return this.getStringAttribute('verify_type');
  }
  public set verifyType(value: string) {
    this._verifyType = value;
  }
  public resetVerifyType() {
    this._verifyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyTypeInput() {
    return this._verifyType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_verify: cdktf.booleanToTerraform(this._autoVerify),
      domain: cdktf.stringToTerraform(this._domain),
      failed_reason: cdktf.stringToTerraform(this._failedReason),
      freeze_record: cdktf.booleanToTerraform(this._freezeRecord),
      id: cdktf.stringToTerraform(this._id),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      verify_type: cdktf.stringToTerraform(this._verifyType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_verify: {
        value: cdktf.booleanToHclTerraform(this._autoVerify),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      failed_reason: {
        value: cdktf.stringToHclTerraform(this._failedReason),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeze_record: {
        value: cdktf.booleanToHclTerraform(this._freezeRecord),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      verify_type: {
        value: cdktf.stringToHclTerraform(this._verifyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
