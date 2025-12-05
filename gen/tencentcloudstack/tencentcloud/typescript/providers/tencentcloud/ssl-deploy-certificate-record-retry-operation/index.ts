// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/ssl_deploy_certificate_record_retry_operation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SslDeployCertificateRecordRetryOperationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Deployment record details ID to be retried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/ssl_deploy_certificate_record_retry_operation#deploy_record_detail_id SslDeployCertificateRecordRetryOperation#deploy_record_detail_id}
  */
  readonly deployRecordDetailId?: number;
  /**
  * Deployment record ID to be retried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/ssl_deploy_certificate_record_retry_operation#deploy_record_id SslDeployCertificateRecordRetryOperation#deploy_record_id}
  */
  readonly deployRecordId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/ssl_deploy_certificate_record_retry_operation#id SslDeployCertificateRecordRetryOperation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/ssl_deploy_certificate_record_retry_operation tencentcloud_ssl_deploy_certificate_record_retry_operation}
*/
export class SslDeployCertificateRecordRetryOperation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_ssl_deploy_certificate_record_retry_operation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SslDeployCertificateRecordRetryOperation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SslDeployCertificateRecordRetryOperation to import
  * @param importFromId The id of the existing SslDeployCertificateRecordRetryOperation that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/ssl_deploy_certificate_record_retry_operation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SslDeployCertificateRecordRetryOperation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_ssl_deploy_certificate_record_retry_operation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/ssl_deploy_certificate_record_retry_operation tencentcloud_ssl_deploy_certificate_record_retry_operation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SslDeployCertificateRecordRetryOperationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SslDeployCertificateRecordRetryOperationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_ssl_deploy_certificate_record_retry_operation',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.42',
        providerVersionConstraint: '1.82.42'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deployRecordDetailId = config.deployRecordDetailId;
    this._deployRecordId = config.deployRecordId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deploy_record_detail_id - computed: false, optional: true, required: false
  private _deployRecordDetailId?: number; 
  public get deployRecordDetailId() {
    return this.getNumberAttribute('deploy_record_detail_id');
  }
  public set deployRecordDetailId(value: number) {
    this._deployRecordDetailId = value;
  }
  public resetDeployRecordDetailId() {
    this._deployRecordDetailId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployRecordDetailIdInput() {
    return this._deployRecordDetailId;
  }

  // deploy_record_id - computed: false, optional: true, required: false
  private _deployRecordId?: number; 
  public get deployRecordId() {
    return this.getNumberAttribute('deploy_record_id');
  }
  public set deployRecordId(value: number) {
    this._deployRecordId = value;
  }
  public resetDeployRecordId() {
    this._deployRecordId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployRecordIdInput() {
    return this._deployRecordId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deploy_record_detail_id: cdktf.numberToTerraform(this._deployRecordDetailId),
      deploy_record_id: cdktf.numberToTerraform(this._deployRecordId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deploy_record_detail_id: {
        value: cdktf.numberToHclTerraform(this._deployRecordDetailId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      deploy_record_id: {
        value: cdktf.numberToHclTerraform(this._deployRecordId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
