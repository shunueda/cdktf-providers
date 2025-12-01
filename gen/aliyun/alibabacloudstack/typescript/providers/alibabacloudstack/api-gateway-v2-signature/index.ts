// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_signature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiGatewayV2SignatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_signature#cascade_link_ids ApiGatewayV2Signature#cascade_link_ids}
  */
  readonly cascadeLinkIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_signature#gw_instance_id ApiGatewayV2Signature#gw_instance_id}
  */
  readonly gwInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_signature#id ApiGatewayV2Signature#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_signature#sig_alg ApiGatewayV2Signature#sig_alg}
  */
  readonly sigAlg: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_signature#sig_scheme_name ApiGatewayV2Signature#sig_scheme_name}
  */
  readonly sigSchemeName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_signature#status ApiGatewayV2Signature#status}
  */
  readonly status?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_signature alibabacloudstack_api_gateway_v2_signature}
*/
export class ApiGatewayV2Signature extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_api_gateway_v2_signature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiGatewayV2Signature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiGatewayV2Signature to import
  * @param importFromId The id of the existing ApiGatewayV2Signature that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_signature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiGatewayV2Signature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_api_gateway_v2_signature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/api_gateway_v2_signature alibabacloudstack_api_gateway_v2_signature} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiGatewayV2SignatureConfig
  */
  public constructor(scope: Construct, id: string, config: ApiGatewayV2SignatureConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_api_gateway_v2_signature',
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
    this._cascadeLinkIds = config.cascadeLinkIds;
    this._gwInstanceId = config.gwInstanceId;
    this._id = config.id;
    this._sigAlg = config.sigAlg;
    this._sigSchemeName = config.sigSchemeName;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cascade_link_ids - computed: false, optional: true, required: false
  private _cascadeLinkIds?: string[]; 
  public get cascadeLinkIds() {
    return cdktf.Fn.tolist(this.getListAttribute('cascade_link_ids'));
  }
  public set cascadeLinkIds(value: string[]) {
    this._cascadeLinkIds = value;
  }
  public resetCascadeLinkIds() {
    this._cascadeLinkIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cascadeLinkIdsInput() {
    return this._cascadeLinkIds;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // gw_instance_id - computed: false, optional: false, required: true
  private _gwInstanceId?: string; 
  public get gwInstanceId() {
    return this.getStringAttribute('gw_instance_id');
  }
  public set gwInstanceId(value: string) {
    this._gwInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gwInstanceIdInput() {
    return this._gwInstanceId;
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

  // secret_key - computed: true, optional: false, required: false
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }

  // sig_alg - computed: false, optional: false, required: true
  private _sigAlg?: string; 
  public get sigAlg() {
    return this.getStringAttribute('sig_alg');
  }
  public set sigAlg(value: string) {
    this._sigAlg = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sigAlgInput() {
    return this._sigAlg;
  }

  // sig_scheme_id - computed: true, optional: false, required: false
  public get sigSchemeId() {
    return this.getStringAttribute('sig_scheme_id');
  }

  // sig_scheme_name - computed: false, optional: false, required: true
  private _sigSchemeName?: string; 
  public get sigSchemeName() {
    return this.getStringAttribute('sig_scheme_name');
  }
  public set sigSchemeName(value: string) {
    this._sigSchemeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sigSchemeNameInput() {
    return this._sigSchemeName;
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

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cascade_link_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cascadeLinkIds),
      gw_instance_id: cdktf.stringToTerraform(this._gwInstanceId),
      id: cdktf.stringToTerraform(this._id),
      sig_alg: cdktf.stringToTerraform(this._sigAlg),
      sig_scheme_name: cdktf.stringToTerraform(this._sigSchemeName),
      status: cdktf.stringToTerraform(this._status),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cascade_link_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cascadeLinkIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      gw_instance_id: {
        value: cdktf.stringToHclTerraform(this._gwInstanceId),
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
      sig_alg: {
        value: cdktf.stringToHclTerraform(this._sigAlg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sig_scheme_name: {
        value: cdktf.stringToHclTerraform(this._sigSchemeName),
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
