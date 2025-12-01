// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiGatewayV2CertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_certificate#cert_type ApiGatewayV2Certificate#cert_type}
  */
  readonly certType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_certificate#certificate_name ApiGatewayV2Certificate#certificate_name}
  */
  readonly certificateName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_certificate#certificates ApiGatewayV2Certificate#certificates}
  */
  readonly certificates: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_certificate#id ApiGatewayV2Certificate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_certificate#instance_id ApiGatewayV2Certificate#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_certificate#private_key ApiGatewayV2Certificate#private_key}
  */
  readonly privateKey?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_certificate alibabacloudstack_api_gateway_v2_certificate}
*/
export class ApiGatewayV2Certificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_api_gateway_v2_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiGatewayV2Certificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiGatewayV2Certificate to import
  * @param importFromId The id of the existing ApiGatewayV2Certificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiGatewayV2Certificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_api_gateway_v2_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_certificate alibabacloudstack_api_gateway_v2_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiGatewayV2CertificateConfig
  */
  public constructor(scope: Construct, id: string, config: ApiGatewayV2CertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_api_gateway_v2_certificate',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.20',
        providerVersionConstraint: '3.18.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certType = config.certType;
    this._certificateName = config.certificateName;
    this._certificates = config.certificates;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._privateKey = config.privateKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cert_type - computed: false, optional: false, required: true
  private _certType?: string; 
  public get certType() {
    return this.getStringAttribute('cert_type');
  }
  public set certType(value: string) {
    this._certType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certTypeInput() {
    return this._certType;
  }

  // certificate_id - computed: true, optional: false, required: false
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }

  // certificate_name - computed: false, optional: false, required: true
  private _certificateName?: string; 
  public get certificateName() {
    return this.getStringAttribute('certificate_name');
  }
  public set certificateName(value: string) {
    this._certificateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateNameInput() {
    return this._certificateName;
  }

  // certificates - computed: false, optional: false, required: true
  private _certificates?: string; 
  public get certificates() {
    return this.getStringAttribute('certificates');
  }
  public set certificates(value: string) {
    this._certificates = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatesInput() {
    return this._certificates;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // expire_time - computed: true, optional: false, required: false
  public get expireTime() {
    return this.getStringAttribute('expire_time');
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cert_type: cdktf.stringToTerraform(this._certType),
      certificate_name: cdktf.stringToTerraform(this._certificateName),
      certificates: cdktf.stringToTerraform(this._certificates),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      private_key: cdktf.stringToTerraform(this._privateKey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cert_type: {
        value: cdktf.stringToHclTerraform(this._certType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_name: {
        value: cdktf.stringToHclTerraform(this._certificateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificates: {
        value: cdktf.stringToHclTerraform(this._certificates),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_key: {
        value: cdktf.stringToHclTerraform(this._privateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
