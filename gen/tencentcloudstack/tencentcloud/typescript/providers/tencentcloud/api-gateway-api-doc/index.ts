// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/api_gateway_api_doc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiGatewayApiDocConfig extends cdktf.TerraformMetaArguments {
  /**
  * Api Document name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/api_gateway_api_doc#api_doc_name ApiGatewayApiDoc#api_doc_name}
  */
  readonly apiDocName: string;
  /**
  * List of APIs for generating documents.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/api_gateway_api_doc#api_ids ApiGatewayApiDoc#api_ids}
  */
  readonly apiIds: string[];
  /**
  * Env name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/api_gateway_api_doc#environment ApiGatewayApiDoc#environment}
  */
  readonly environment: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/api_gateway_api_doc#id ApiGatewayApiDoc#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Service name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/api_gateway_api_doc#service_id ApiGatewayApiDoc#service_id}
  */
  readonly serviceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/api_gateway_api_doc tencentcloud_api_gateway_api_doc}
*/
export class ApiGatewayApiDoc extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_api_gateway_api_doc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiGatewayApiDoc resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiGatewayApiDoc to import
  * @param importFromId The id of the existing ApiGatewayApiDoc that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/api_gateway_api_doc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiGatewayApiDoc to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_api_gateway_api_doc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/api_gateway_api_doc tencentcloud_api_gateway_api_doc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiGatewayApiDocConfig
  */
  public constructor(scope: Construct, id: string, config: ApiGatewayApiDocConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_api_gateway_api_doc',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.43',
        providerVersionConstraint: '1.82.43'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiDocName = config.apiDocName;
    this._apiIds = config.apiIds;
    this._environment = config.environment;
    this._id = config.id;
    this._serviceId = config.serviceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_count - computed: true, optional: false, required: false
  public get apiCount() {
    return this.getNumberAttribute('api_count');
  }

  // api_doc_id - computed: true, optional: false, required: false
  public get apiDocId() {
    return this.getStringAttribute('api_doc_id');
  }

  // api_doc_name - computed: false, optional: false, required: true
  private _apiDocName?: string; 
  public get apiDocName() {
    return this.getStringAttribute('api_doc_name');
  }
  public set apiDocName(value: string) {
    this._apiDocName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiDocNameInput() {
    return this._apiDocName;
  }

  // api_doc_status - computed: true, optional: false, required: false
  public get apiDocStatus() {
    return this.getStringAttribute('api_doc_status');
  }

  // api_doc_uri - computed: true, optional: false, required: false
  public get apiDocUri() {
    return this.getStringAttribute('api_doc_uri');
  }

  // api_ids - computed: false, optional: false, required: true
  private _apiIds?: string[]; 
  public get apiIds() {
    return cdktf.Fn.tolist(this.getListAttribute('api_ids'));
  }
  public set apiIds(value: string[]) {
    this._apiIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiIdsInput() {
    return this._apiIds;
  }

  // api_names - computed: true, optional: false, required: false
  public get apiNames() {
    return cdktf.Fn.tolist(this.getListAttribute('api_names'));
  }

  // environment - computed: false, optional: false, required: true
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
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

  // release_count - computed: true, optional: false, required: false
  public get releaseCount() {
    return this.getNumberAttribute('release_count');
  }

  // service_id - computed: false, optional: false, required: true
  private _serviceId?: string; 
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }
  public set serviceId(value: string) {
    this._serviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }

  // service_name - computed: true, optional: false, required: false
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }

  // share_password - computed: true, optional: false, required: false
  public get sharePassword() {
    return this.getStringAttribute('share_password');
  }

  // updated_time - computed: true, optional: false, required: false
  public get updatedTime() {
    return this.getStringAttribute('updated_time');
  }

  // view_count - computed: true, optional: false, required: false
  public get viewCount() {
    return this.getNumberAttribute('view_count');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_doc_name: cdktf.stringToTerraform(this._apiDocName),
      api_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._apiIds),
      environment: cdktf.stringToTerraform(this._environment),
      id: cdktf.stringToTerraform(this._id),
      service_id: cdktf.stringToTerraform(this._serviceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_doc_name: {
        value: cdktf.stringToHclTerraform(this._apiDocName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._apiIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      environment: {
        value: cdktf.stringToHclTerraform(this._environment),
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
      service_id: {
        value: cdktf.stringToHclTerraform(this._serviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
