// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/ssl_update_certificate_record_rollback_operation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SslUpdateCertificateRecordRollbackOperationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Deployment record ID to be rolled back.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/ssl_update_certificate_record_rollback_operation#deploy_record_id SslUpdateCertificateRecordRollbackOperation#deploy_record_id}
  */
  readonly deployRecordId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/ssl_update_certificate_record_rollback_operation#id SslUpdateCertificateRecordRollbackOperation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/ssl_update_certificate_record_rollback_operation tencentcloud_ssl_update_certificate_record_rollback_operation}
*/
export class SslUpdateCertificateRecordRollbackOperation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_ssl_update_certificate_record_rollback_operation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SslUpdateCertificateRecordRollbackOperation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SslUpdateCertificateRecordRollbackOperation to import
  * @param importFromId The id of the existing SslUpdateCertificateRecordRollbackOperation that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/ssl_update_certificate_record_rollback_operation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SslUpdateCertificateRecordRollbackOperation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_ssl_update_certificate_record_rollback_operation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/ssl_update_certificate_record_rollback_operation tencentcloud_ssl_update_certificate_record_rollback_operation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SslUpdateCertificateRecordRollbackOperationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SslUpdateCertificateRecordRollbackOperationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_ssl_update_certificate_record_rollback_operation',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.39',
        providerVersionConstraint: '1.82.39'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deployRecordId = config.deployRecordId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deploy_record_id - computed: false, optional: true, required: false
  private _deployRecordId?: string; 
  public get deployRecordId() {
    return this.getStringAttribute('deploy_record_id');
  }
  public set deployRecordId(value: string) {
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
      deploy_record_id: cdktf.stringToTerraform(this._deployRecordId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deploy_record_id: {
        value: cdktf.stringToHclTerraform(this._deployRecordId),
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
