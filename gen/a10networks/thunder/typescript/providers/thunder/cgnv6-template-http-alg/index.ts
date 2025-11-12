// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_http_alg
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Cgnv6TemplateHttpAlgConfig extends cdktf.TerraformMetaArguments {
  /**
  * Header name (default: X-Forwarded-For)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_http_alg#header_name_client_ip Cgnv6TemplateHttpAlg#header_name_client_ip}
  */
  readonly headerNameClientIp?: string;
  /**
  * Header name (default: X-MSISDN)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_http_alg#header_name_msisdn Cgnv6TemplateHttpAlg#header_name_msisdn}
  */
  readonly headerNameMsisdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_http_alg#id Cgnv6TemplateHttpAlg#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Include the tunnel IP (applies to DS-Lite and 6RD-NAT64 sessions)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_http_alg#include_tunnel_ip Cgnv6TemplateHttpAlg#include_tunnel_ip}
  */
  readonly includeTunnelIp?: number;
  /**
  * 'append': Append if there is already a header (default); 'replace': Replace if there is already a header;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_http_alg#method Cgnv6TemplateHttpAlg#method}
  */
  readonly method?: string;
  /**
  * HTTP-ALG template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_http_alg#name Cgnv6TemplateHttpAlg#name}
  */
  readonly name: string;
  /**
  * Insert Client IP into HTTP request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_http_alg#request_insert_client_ip Cgnv6TemplateHttpAlg#request_insert_client_ip}
  */
  readonly requestInsertClientIp?: number;
  /**
  * Insert MSISDN into HTTP request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_http_alg#request_insert_msisdn Cgnv6TemplateHttpAlg#request_insert_msisdn}
  */
  readonly requestInsertMsisdn?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_http_alg#user_tag Cgnv6TemplateHttpAlg#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_http_alg#uuid Cgnv6TemplateHttpAlg#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_http_alg thunder_cgnv6_template_http_alg}
*/
export class Cgnv6TemplateHttpAlg extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_template_http_alg";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cgnv6TemplateHttpAlg resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cgnv6TemplateHttpAlg to import
  * @param importFromId The id of the existing Cgnv6TemplateHttpAlg that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_http_alg#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cgnv6TemplateHttpAlg to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_template_http_alg", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_http_alg thunder_cgnv6_template_http_alg} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Cgnv6TemplateHttpAlgConfig
  */
  public constructor(scope: Construct, id: string, config: Cgnv6TemplateHttpAlgConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_template_http_alg',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._headerNameClientIp = config.headerNameClientIp;
    this._headerNameMsisdn = config.headerNameMsisdn;
    this._id = config.id;
    this._includeTunnelIp = config.includeTunnelIp;
    this._method = config.method;
    this._name = config.name;
    this._requestInsertClientIp = config.requestInsertClientIp;
    this._requestInsertMsisdn = config.requestInsertMsisdn;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // header_name_client_ip - computed: false, optional: true, required: false
  private _headerNameClientIp?: string; 
  public get headerNameClientIp() {
    return this.getStringAttribute('header_name_client_ip');
  }
  public set headerNameClientIp(value: string) {
    this._headerNameClientIp = value;
  }
  public resetHeaderNameClientIp() {
    this._headerNameClientIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameClientIpInput() {
    return this._headerNameClientIp;
  }

  // header_name_msisdn - computed: false, optional: true, required: false
  private _headerNameMsisdn?: string; 
  public get headerNameMsisdn() {
    return this.getStringAttribute('header_name_msisdn');
  }
  public set headerNameMsisdn(value: string) {
    this._headerNameMsisdn = value;
  }
  public resetHeaderNameMsisdn() {
    this._headerNameMsisdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameMsisdnInput() {
    return this._headerNameMsisdn;
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

  // include_tunnel_ip - computed: false, optional: true, required: false
  private _includeTunnelIp?: number; 
  public get includeTunnelIp() {
    return this.getNumberAttribute('include_tunnel_ip');
  }
  public set includeTunnelIp(value: number) {
    this._includeTunnelIp = value;
  }
  public resetIncludeTunnelIp() {
    this._includeTunnelIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeTunnelIpInput() {
    return this._includeTunnelIp;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // request_insert_client_ip - computed: false, optional: true, required: false
  private _requestInsertClientIp?: number; 
  public get requestInsertClientIp() {
    return this.getNumberAttribute('request_insert_client_ip');
  }
  public set requestInsertClientIp(value: number) {
    this._requestInsertClientIp = value;
  }
  public resetRequestInsertClientIp() {
    this._requestInsertClientIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInsertClientIpInput() {
    return this._requestInsertClientIp;
  }

  // request_insert_msisdn - computed: false, optional: true, required: false
  private _requestInsertMsisdn?: number; 
  public get requestInsertMsisdn() {
    return this.getNumberAttribute('request_insert_msisdn');
  }
  public set requestInsertMsisdn(value: number) {
    this._requestInsertMsisdn = value;
  }
  public resetRequestInsertMsisdn() {
    this._requestInsertMsisdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInsertMsisdnInput() {
    return this._requestInsertMsisdn;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
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
      header_name_client_ip: cdktf.stringToTerraform(this._headerNameClientIp),
      header_name_msisdn: cdktf.stringToTerraform(this._headerNameMsisdn),
      id: cdktf.stringToTerraform(this._id),
      include_tunnel_ip: cdktf.numberToTerraform(this._includeTunnelIp),
      method: cdktf.stringToTerraform(this._method),
      name: cdktf.stringToTerraform(this._name),
      request_insert_client_ip: cdktf.numberToTerraform(this._requestInsertClientIp),
      request_insert_msisdn: cdktf.numberToTerraform(this._requestInsertMsisdn),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      header_name_client_ip: {
        value: cdktf.stringToHclTerraform(this._headerNameClientIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      header_name_msisdn: {
        value: cdktf.stringToHclTerraform(this._headerNameMsisdn),
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
      include_tunnel_ip: {
        value: cdktf.numberToHclTerraform(this._includeTunnelIp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      method: {
        value: cdktf.stringToHclTerraform(this._method),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_insert_client_ip: {
        value: cdktf.numberToHclTerraform(this._requestInsertClientIp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      request_insert_msisdn: {
        value: cdktf.numberToHclTerraform(this._requestInsertMsisdn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
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
