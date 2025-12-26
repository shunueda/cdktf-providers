// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/api_gateway_service_release
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiGatewayServiceReleaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * API gateway service environment name to be released. Valid values: `test`, `prepub`, `release`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/api_gateway_service_release#environment_name ApiGatewayServiceRelease#environment_name}
  */
  readonly environmentName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/api_gateway_service_release#id ApiGatewayServiceRelease#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * This release description of the API gateway service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/api_gateway_service_release#release_desc ApiGatewayServiceRelease#release_desc}
  */
  readonly releaseDesc: string;
  /**
  * The release version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/api_gateway_service_release#release_version ApiGatewayServiceRelease#release_version}
  */
  readonly releaseVersion?: string;
  /**
  * ID of API gateway service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/api_gateway_service_release#service_id ApiGatewayServiceRelease#service_id}
  */
  readonly serviceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/api_gateway_service_release tencentcloud_api_gateway_service_release}
*/
export class ApiGatewayServiceRelease extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_api_gateway_service_release";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiGatewayServiceRelease resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiGatewayServiceRelease to import
  * @param importFromId The id of the existing ApiGatewayServiceRelease that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/api_gateway_service_release#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiGatewayServiceRelease to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_api_gateway_service_release", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/api_gateway_service_release tencentcloud_api_gateway_service_release} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiGatewayServiceReleaseConfig
  */
  public constructor(scope: Construct, id: string, config: ApiGatewayServiceReleaseConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_api_gateway_service_release',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._environmentName = config.environmentName;
    this._id = config.id;
    this._releaseDesc = config.releaseDesc;
    this._releaseVersion = config.releaseVersion;
    this._serviceId = config.serviceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // environment_name - computed: false, optional: false, required: true
  private _environmentName?: string; 
  public get environmentName() {
    return this.getStringAttribute('environment_name');
  }
  public set environmentName(value: string) {
    this._environmentName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentNameInput() {
    return this._environmentName;
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

  // release_desc - computed: false, optional: false, required: true
  private _releaseDesc?: string; 
  public get releaseDesc() {
    return this.getStringAttribute('release_desc');
  }
  public set releaseDesc(value: string) {
    this._releaseDesc = value;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseDescInput() {
    return this._releaseDesc;
  }

  // release_version - computed: true, optional: true, required: false
  private _releaseVersion?: string; 
  public get releaseVersion() {
    return this.getStringAttribute('release_version');
  }
  public set releaseVersion(value: string) {
    this._releaseVersion = value;
  }
  public resetReleaseVersion() {
    this._releaseVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseVersionInput() {
    return this._releaseVersion;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      environment_name: cdktf.stringToTerraform(this._environmentName),
      id: cdktf.stringToTerraform(this._id),
      release_desc: cdktf.stringToTerraform(this._releaseDesc),
      release_version: cdktf.stringToTerraform(this._releaseVersion),
      service_id: cdktf.stringToTerraform(this._serviceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      environment_name: {
        value: cdktf.stringToHclTerraform(this._environmentName),
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
      release_desc: {
        value: cdktf.stringToHclTerraform(this._releaseDesc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      release_version: {
        value: cdktf.stringToHclTerraform(this._releaseVersion),
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
