// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy_apigateway6_sslciphersuites
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectFirewallAccessproxyApigateway6SslciphersuitesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy_apigateway6_sslciphersuites#access_proxy ObjectFirewallAccessproxyApigateway6Sslciphersuites#access_proxy}
  */
  readonly accessProxy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy_apigateway6_sslciphersuites#adom ObjectFirewallAccessproxyApigateway6Sslciphersuites#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy_apigateway6_sslciphersuites#api_gateway6 ObjectFirewallAccessproxyApigateway6Sslciphersuites#api_gateway6}
  */
  readonly apiGateway6: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy_apigateway6_sslciphersuites#cipher ObjectFirewallAccessproxyApigateway6Sslciphersuites#cipher}
  */
  readonly cipher?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy_apigateway6_sslciphersuites#id ObjectFirewallAccessproxyApigateway6Sslciphersuites#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy_apigateway6_sslciphersuites#priority ObjectFirewallAccessproxyApigateway6Sslciphersuites#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy_apigateway6_sslciphersuites#scopetype ObjectFirewallAccessproxyApigateway6Sslciphersuites#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy_apigateway6_sslciphersuites#versions ObjectFirewallAccessproxyApigateway6Sslciphersuites#versions}
  */
  readonly versions?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy_apigateway6_sslciphersuites fortimanager_object_firewall_accessproxy_apigateway6_sslciphersuites}
*/
export class ObjectFirewallAccessproxyApigateway6Sslciphersuites extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_firewall_accessproxy_apigateway6_sslciphersuites";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectFirewallAccessproxyApigateway6Sslciphersuites resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectFirewallAccessproxyApigateway6Sslciphersuites to import
  * @param importFromId The id of the existing ObjectFirewallAccessproxyApigateway6Sslciphersuites that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy_apigateway6_sslciphersuites#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectFirewallAccessproxyApigateway6Sslciphersuites to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_firewall_accessproxy_apigateway6_sslciphersuites", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy_apigateway6_sslciphersuites fortimanager_object_firewall_accessproxy_apigateway6_sslciphersuites} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectFirewallAccessproxyApigateway6SslciphersuitesConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectFirewallAccessproxyApigateway6SslciphersuitesConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_firewall_accessproxy_apigateway6_sslciphersuites',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessProxy = config.accessProxy;
    this._adom = config.adom;
    this._apiGateway6 = config.apiGateway6;
    this._cipher = config.cipher;
    this._id = config.id;
    this._priority = config.priority;
    this._scopetype = config.scopetype;
    this._versions = config.versions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_proxy - computed: false, optional: false, required: true
  private _accessProxy?: string; 
  public get accessProxy() {
    return this.getStringAttribute('access_proxy');
  }
  public set accessProxy(value: string) {
    this._accessProxy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessProxyInput() {
    return this._accessProxy;
  }

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // api_gateway6 - computed: false, optional: false, required: true
  private _apiGateway6?: string; 
  public get apiGateway6() {
    return this.getStringAttribute('api_gateway6');
  }
  public set apiGateway6(value: string) {
    this._apiGateway6 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGateway6Input() {
    return this._apiGateway6;
  }

  // cipher - computed: false, optional: true, required: false
  private _cipher?: string; 
  public get cipher() {
    return this.getStringAttribute('cipher');
  }
  public set cipher(value: string) {
    this._cipher = value;
  }
  public resetCipher() {
    this._cipher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherInput() {
    return this._cipher;
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

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // versions - computed: true, optional: true, required: false
  private _versions?: string[]; 
  public get versions() {
    return cdktf.Fn.tolist(this.getListAttribute('versions'));
  }
  public set versions(value: string[]) {
    this._versions = value;
  }
  public resetVersions() {
    this._versions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionsInput() {
    return this._versions;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_proxy: cdktf.stringToTerraform(this._accessProxy),
      adom: cdktf.stringToTerraform(this._adom),
      api_gateway6: cdktf.stringToTerraform(this._apiGateway6),
      cipher: cdktf.stringToTerraform(this._cipher),
      id: cdktf.stringToTerraform(this._id),
      priority: cdktf.numberToTerraform(this._priority),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      versions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._versions),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_proxy: {
        value: cdktf.stringToHclTerraform(this._accessProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_gateway6: {
        value: cdktf.stringToHclTerraform(this._apiGateway6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cipher: {
        value: cdktf.stringToHclTerraform(this._cipher),
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
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      versions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._versions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
