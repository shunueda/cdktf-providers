// https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/zia_cloud_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZiaCloudConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/zia_cloud_config#id ZiaCloudConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ZIA cloud domain (without .net suffix). Valid values: zscaler, zscloud, zscalerone, zscalertwo, zscalerthree, zscalerbeta, zscalergov, zscalerten, zspreview
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/zia_cloud_config#zia_cloud_domain ZiaCloudConfig#zia_cloud_domain}
  */
  readonly ziaCloudDomain: string;
  /**
  * ZIA cloud service API key (write-only, not returned by API)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/zia_cloud_config#zia_cloud_service_api_key ZiaCloudConfig#zia_cloud_service_api_key}
  */
  readonly ziaCloudServiceApiKey: string;
  /**
  * ZIA password (write-only, not returned by API)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/zia_cloud_config#zia_password ZiaCloudConfig#zia_password}
  */
  readonly ziaPassword: string;
  /**
  * ZIA sandbox API token (write-only, not returned by API)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/zia_cloud_config#zia_sandbox_api_token ZiaCloudConfig#zia_sandbox_api_token}
  */
  readonly ziaSandboxApiToken: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/zia_cloud_config#zia_username ZiaCloudConfig#zia_username}
  */
  readonly ziaUsername: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/zia_cloud_config zpa_zia_cloud_config}
*/
export class ZiaCloudConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zpa_zia_cloud_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZiaCloudConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZiaCloudConfig to import
  * @param importFromId The id of the existing ZiaCloudConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/zia_cloud_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZiaCloudConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zpa_zia_cloud_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/zia_cloud_config zpa_zia_cloud_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZiaCloudConfigConfig
  */
  public constructor(scope: Construct, id: string, config: ZiaCloudConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'zpa_zia_cloud_config',
      terraformGeneratorMetadata: {
        providerName: 'zpa',
        providerVersion: '4.3.5',
        providerVersionConstraint: '4.3.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._ziaCloudDomain = config.ziaCloudDomain;
    this._ziaCloudServiceApiKey = config.ziaCloudServiceApiKey;
    this._ziaPassword = config.ziaPassword;
    this._ziaSandboxApiToken = config.ziaSandboxApiToken;
    this._ziaUsername = config.ziaUsername;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // zia_cloud_domain - computed: false, optional: false, required: true
  private _ziaCloudDomain?: string; 
  public get ziaCloudDomain() {
    return this.getStringAttribute('zia_cloud_domain');
  }
  public set ziaCloudDomain(value: string) {
    this._ziaCloudDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ziaCloudDomainInput() {
    return this._ziaCloudDomain;
  }

  // zia_cloud_service_api_key - computed: false, optional: false, required: true
  private _ziaCloudServiceApiKey?: string; 
  public get ziaCloudServiceApiKey() {
    return this.getStringAttribute('zia_cloud_service_api_key');
  }
  public set ziaCloudServiceApiKey(value: string) {
    this._ziaCloudServiceApiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ziaCloudServiceApiKeyInput() {
    return this._ziaCloudServiceApiKey;
  }

  // zia_password - computed: false, optional: false, required: true
  private _ziaPassword?: string; 
  public get ziaPassword() {
    return this.getStringAttribute('zia_password');
  }
  public set ziaPassword(value: string) {
    this._ziaPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ziaPasswordInput() {
    return this._ziaPassword;
  }

  // zia_sandbox_api_token - computed: false, optional: false, required: true
  private _ziaSandboxApiToken?: string; 
  public get ziaSandboxApiToken() {
    return this.getStringAttribute('zia_sandbox_api_token');
  }
  public set ziaSandboxApiToken(value: string) {
    this._ziaSandboxApiToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ziaSandboxApiTokenInput() {
    return this._ziaSandboxApiToken;
  }

  // zia_username - computed: false, optional: false, required: true
  private _ziaUsername?: string; 
  public get ziaUsername() {
    return this.getStringAttribute('zia_username');
  }
  public set ziaUsername(value: string) {
    this._ziaUsername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ziaUsernameInput() {
    return this._ziaUsername;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      zia_cloud_domain: cdktf.stringToTerraform(this._ziaCloudDomain),
      zia_cloud_service_api_key: cdktf.stringToTerraform(this._ziaCloudServiceApiKey),
      zia_password: cdktf.stringToTerraform(this._ziaPassword),
      zia_sandbox_api_token: cdktf.stringToTerraform(this._ziaSandboxApiToken),
      zia_username: cdktf.stringToTerraform(this._ziaUsername),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zia_cloud_domain: {
        value: cdktf.stringToHclTerraform(this._ziaCloudDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zia_cloud_service_api_key: {
        value: cdktf.stringToHclTerraform(this._ziaCloudServiceApiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zia_password: {
        value: cdktf.stringToHclTerraform(this._ziaPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zia_sandbox_api_token: {
        value: cdktf.stringToHclTerraform(this._ziaSandboxApiToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zia_username: {
        value: cdktf.stringToHclTerraform(this._ziaUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
