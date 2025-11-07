// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_interface_http_health_check
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosInterfaceHttpHealthCheckConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'http-redirect': http-redirect; 'javascript': javascript;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_interface_http_health_check#challenge_method DdosInterfaceHttpHealthCheck#challenge_method}
  */
  readonly challengeMethod?: string;
  /**
  * '302': 302 Found; '307': 307 Temporary Redirect;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_interface_http_health_check#challenge_redirect_code DdosInterfaceHttpHealthCheck#challenge_redirect_code}
  */
  readonly challengeRedirectCode?: string;
  /**
  * Encode the challenge phrase in uri instead of in http cookie. Default encoded in http cookie
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_interface_http_health_check#challenge_uri_encode DdosInterfaceHttpHealthCheck#challenge_uri_encode}
  */
  readonly challengeUriEncode?: number;
  /**
  * 'enable': enable;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_interface_http_health_check#enable DdosInterfaceHttpHealthCheck#enable}
  */
  readonly enable: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_interface_http_health_check#id DdosInterfaceHttpHealthCheck#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_interface_http_health_check#uuid DdosInterfaceHttpHealthCheck#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_interface_http_health_check thunder_ddos_interface_http_health_check}
*/
export class DdosInterfaceHttpHealthCheck extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_interface_http_health_check";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosInterfaceHttpHealthCheck resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosInterfaceHttpHealthCheck to import
  * @param importFromId The id of the existing DdosInterfaceHttpHealthCheck that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_interface_http_health_check#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosInterfaceHttpHealthCheck to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_interface_http_health_check", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_interface_http_health_check thunder_ddos_interface_http_health_check} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosInterfaceHttpHealthCheckConfig
  */
  public constructor(scope: Construct, id: string, config: DdosInterfaceHttpHealthCheckConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_interface_http_health_check',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._challengeMethod = config.challengeMethod;
    this._challengeRedirectCode = config.challengeRedirectCode;
    this._challengeUriEncode = config.challengeUriEncode;
    this._enable = config.enable;
    this._id = config.id;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // challenge_method - computed: false, optional: true, required: false
  private _challengeMethod?: string; 
  public get challengeMethod() {
    return this.getStringAttribute('challenge_method');
  }
  public set challengeMethod(value: string) {
    this._challengeMethod = value;
  }
  public resetChallengeMethod() {
    this._challengeMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengeMethodInput() {
    return this._challengeMethod;
  }

  // challenge_redirect_code - computed: false, optional: true, required: false
  private _challengeRedirectCode?: string; 
  public get challengeRedirectCode() {
    return this.getStringAttribute('challenge_redirect_code');
  }
  public set challengeRedirectCode(value: string) {
    this._challengeRedirectCode = value;
  }
  public resetChallengeRedirectCode() {
    this._challengeRedirectCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengeRedirectCodeInput() {
    return this._challengeRedirectCode;
  }

  // challenge_uri_encode - computed: false, optional: true, required: false
  private _challengeUriEncode?: number; 
  public get challengeUriEncode() {
    return this.getNumberAttribute('challenge_uri_encode');
  }
  public set challengeUriEncode(value: number) {
    this._challengeUriEncode = value;
  }
  public resetChallengeUriEncode() {
    this._challengeUriEncode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengeUriEncodeInput() {
    return this._challengeUriEncode;
  }

  // enable - computed: false, optional: false, required: true
  private _enable?: string; 
  public get enable() {
    return this.getStringAttribute('enable');
  }
  public set enable(value: string) {
    this._enable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
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

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      challenge_method: cdktf.stringToTerraform(this._challengeMethod),
      challenge_redirect_code: cdktf.stringToTerraform(this._challengeRedirectCode),
      challenge_uri_encode: cdktf.numberToTerraform(this._challengeUriEncode),
      enable: cdktf.stringToTerraform(this._enable),
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      challenge_method: {
        value: cdktf.stringToHclTerraform(this._challengeMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      challenge_redirect_code: {
        value: cdktf.stringToHclTerraform(this._challengeRedirectCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      challenge_uri_encode: {
        value: cdktf.numberToHclTerraform(this._challengeUriEncode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable: {
        value: cdktf.stringToHclTerraform(this._enable),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
