// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/ssl_deploy_certificate_instance_operation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SslDeployCertificateInstanceOperationConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the certificate to be deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/ssl_deploy_certificate_instance_operation#certificate_id SslDeployCertificateInstanceOperation#certificate_id}
  */
  readonly certificateId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/ssl_deploy_certificate_instance_operation#id SslDeployCertificateInstanceOperation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Need to deploy instance list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/ssl_deploy_certificate_instance_operation#instance_id_list SslDeployCertificateInstanceOperation#instance_id_list}
  */
  readonly instanceIdList: string[];
  /**
  * Deployed cloud resource type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/ssl_deploy_certificate_instance_operation#resource_type SslDeployCertificateInstanceOperation#resource_type}
  */
  readonly resourceType?: string;
  /**
  * Deployment cloud resource status: Live: -1: The domain name is not associated with a certificate.1:  Domain name https is enabled.0:  Domain name https is closed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/ssl_deploy_certificate_instance_operation#status SslDeployCertificateInstanceOperation#status}
  */
  readonly status?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/ssl_deploy_certificate_instance_operation tencentcloud_ssl_deploy_certificate_instance_operation}
*/
export class SslDeployCertificateInstanceOperation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_ssl_deploy_certificate_instance_operation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SslDeployCertificateInstanceOperation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SslDeployCertificateInstanceOperation to import
  * @param importFromId The id of the existing SslDeployCertificateInstanceOperation that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/ssl_deploy_certificate_instance_operation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SslDeployCertificateInstanceOperation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_ssl_deploy_certificate_instance_operation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/ssl_deploy_certificate_instance_operation tencentcloud_ssl_deploy_certificate_instance_operation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SslDeployCertificateInstanceOperationConfig
  */
  public constructor(scope: Construct, id: string, config: SslDeployCertificateInstanceOperationConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_ssl_deploy_certificate_instance_operation',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.41',
        providerVersionConstraint: '1.82.41'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certificateId = config.certificateId;
    this._id = config.id;
    this._instanceIdList = config.instanceIdList;
    this._resourceType = config.resourceType;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_id - computed: false, optional: false, required: true
  private _certificateId?: string; 
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }
  public set certificateId(value: string) {
    this._certificateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdInput() {
    return this._certificateId;
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

  // instance_id_list - computed: false, optional: false, required: true
  private _instanceIdList?: string[]; 
  public get instanceIdList() {
    return cdktf.Fn.tolist(this.getListAttribute('instance_id_list'));
  }
  public set instanceIdList(value: string[]) {
    this._instanceIdList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdListInput() {
    return this._instanceIdList;
  }

  // resource_type - computed: false, optional: true, required: false
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // status - computed: false, optional: true, required: false
  private _status?: number; 
  public get status() {
    return this.getNumberAttribute('status');
  }
  public set status(value: number) {
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
      certificate_id: cdktf.stringToTerraform(this._certificateId),
      id: cdktf.stringToTerraform(this._id),
      instance_id_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._instanceIdList),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      status: cdktf.numberToTerraform(this._status),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certificate_id: {
        value: cdktf.stringToHclTerraform(this._certificateId),
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
      instance_id_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._instanceIdList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.numberToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
