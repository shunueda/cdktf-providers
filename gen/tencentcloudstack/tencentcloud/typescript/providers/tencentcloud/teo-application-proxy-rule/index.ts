// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_application_proxy_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeoApplicationProxyRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Passes the client IP. Default value is `OFF`. When Proto is TCP, valid values: `TOA`: Pass the client IP via TOA; `PPV1`: Pass the client IP via Proxy Protocol V1; `PPV2`: Pass the client IP via Proxy Protocol V2; `OFF`: Do not pass the client IP. When Proto=UDP, valid values: `PPV2`: Pass the client IP via Proxy Protocol V2; `OFF`: Do not pass the client IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_application_proxy_rule#forward_client_ip TeoApplicationProxyRule#forward_client_ip}
  */
  readonly forwardClientIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_application_proxy_rule#id TeoApplicationProxyRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Origin port, supported formats: single port: 80; Port segment: 81-90, 81 to 90 ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_application_proxy_rule#origin_port TeoApplicationProxyRule#origin_port}
  */
  readonly originPort: string;
  /**
  * Origin server type. Valid values: `custom`: Specified origins; `origins`: An origin group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_application_proxy_rule#origin_type TeoApplicationProxyRule#origin_type}
  */
  readonly originType: string;
  /**
  * Origin site information: When `OriginType` is `custom`, it indicates one or more origin sites, such as `['8.8.8.8', '9.9.9.9']` or `OriginValue=['test.com']`; When `OriginType` is `origins`, there is required to be one and only one element, representing the origin site group ID, such as `['origin-537f5b41-162a-11ed-abaa-525400c5da15']`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_application_proxy_rule#origin_value TeoApplicationProxyRule#origin_value}
  */
  readonly originValue: string[];
  /**
  * Valid values: `80` means port 80; `81-90` means port range 81-90.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_application_proxy_rule#port TeoApplicationProxyRule#port}
  */
  readonly port: string[];
  /**
  * Protocol. Valid values: `TCP`, `UDP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_application_proxy_rule#proto TeoApplicationProxyRule#proto}
  */
  readonly proto: string;
  /**
  * Proxy ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_application_proxy_rule#proxy_id TeoApplicationProxyRule#proxy_id}
  */
  readonly proxyId: string;
  /**
  * Specifies whether to enable session persistence. Default value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_application_proxy_rule#session_persist TeoApplicationProxyRule#session_persist}
  */
  readonly sessionPersist?: boolean | cdktf.IResolvable;
  /**
  * Status, the values are: `online`: enabled; `offline`: deactivated; `progress`: being deployed; `stopping`: being deactivated; `fail`: deployment failure/deactivation failure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_application_proxy_rule#status TeoApplicationProxyRule#status}
  */
  readonly status?: string;
  /**
  * Site ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_application_proxy_rule#zone_id TeoApplicationProxyRule#zone_id}
  */
  readonly zoneId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_application_proxy_rule tencentcloud_teo_application_proxy_rule}
*/
export class TeoApplicationProxyRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_teo_application_proxy_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TeoApplicationProxyRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TeoApplicationProxyRule to import
  * @param importFromId The id of the existing TeoApplicationProxyRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_application_proxy_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TeoApplicationProxyRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_teo_application_proxy_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/teo_application_proxy_rule tencentcloud_teo_application_proxy_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeoApplicationProxyRuleConfig
  */
  public constructor(scope: Construct, id: string, config: TeoApplicationProxyRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_teo_application_proxy_rule',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.36',
        providerVersionConstraint: '1.82.36'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._forwardClientIp = config.forwardClientIp;
    this._id = config.id;
    this._originPort = config.originPort;
    this._originType = config.originType;
    this._originValue = config.originValue;
    this._port = config.port;
    this._proto = config.proto;
    this._proxyId = config.proxyId;
    this._sessionPersist = config.sessionPersist;
    this._status = config.status;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // forward_client_ip - computed: true, optional: true, required: false
  private _forwardClientIp?: string; 
  public get forwardClientIp() {
    return this.getStringAttribute('forward_client_ip');
  }
  public set forwardClientIp(value: string) {
    this._forwardClientIp = value;
  }
  public resetForwardClientIp() {
    this._forwardClientIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardClientIpInput() {
    return this._forwardClientIp;
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

  // origin_port - computed: false, optional: false, required: true
  private _originPort?: string; 
  public get originPort() {
    return this.getStringAttribute('origin_port');
  }
  public set originPort(value: string) {
    this._originPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originPortInput() {
    return this._originPort;
  }

  // origin_type - computed: false, optional: false, required: true
  private _originType?: string; 
  public get originType() {
    return this.getStringAttribute('origin_type');
  }
  public set originType(value: string) {
    this._originType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originTypeInput() {
    return this._originType;
  }

  // origin_value - computed: false, optional: false, required: true
  private _originValue?: string[]; 
  public get originValue() {
    return cdktf.Fn.tolist(this.getListAttribute('origin_value'));
  }
  public set originValue(value: string[]) {
    this._originValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originValueInput() {
    return this._originValue;
  }

  // port - computed: false, optional: false, required: true
  private _port?: string[]; 
  public get port() {
    return cdktf.Fn.tolist(this.getListAttribute('port'));
  }
  public set port(value: string[]) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // proto - computed: false, optional: false, required: true
  private _proto?: string; 
  public get proto() {
    return this.getStringAttribute('proto');
  }
  public set proto(value: string) {
    this._proto = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protoInput() {
    return this._proto;
  }

  // proxy_id - computed: false, optional: false, required: true
  private _proxyId?: string; 
  public get proxyId() {
    return this.getStringAttribute('proxy_id');
  }
  public set proxyId(value: string) {
    this._proxyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyIdInput() {
    return this._proxyId;
  }

  // rule_id - computed: true, optional: false, required: false
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }

  // session_persist - computed: true, optional: true, required: false
  private _sessionPersist?: boolean | cdktf.IResolvable; 
  public get sessionPersist() {
    return this.getBooleanAttribute('session_persist');
  }
  public set sessionPersist(value: boolean | cdktf.IResolvable) {
    this._sessionPersist = value;
  }
  public resetSessionPersist() {
    this._sessionPersist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionPersistInput() {
    return this._sessionPersist;
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

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      forward_client_ip: cdktf.stringToTerraform(this._forwardClientIp),
      id: cdktf.stringToTerraform(this._id),
      origin_port: cdktf.stringToTerraform(this._originPort),
      origin_type: cdktf.stringToTerraform(this._originType),
      origin_value: cdktf.listMapper(cdktf.stringToTerraform, false)(this._originValue),
      port: cdktf.listMapper(cdktf.stringToTerraform, false)(this._port),
      proto: cdktf.stringToTerraform(this._proto),
      proxy_id: cdktf.stringToTerraform(this._proxyId),
      session_persist: cdktf.booleanToTerraform(this._sessionPersist),
      status: cdktf.stringToTerraform(this._status),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      forward_client_ip: {
        value: cdktf.stringToHclTerraform(this._forwardClientIp),
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
      origin_port: {
        value: cdktf.stringToHclTerraform(this._originPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      origin_type: {
        value: cdktf.stringToHclTerraform(this._originType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      origin_value: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._originValue),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      port: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._port),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      proto: {
        value: cdktf.stringToHclTerraform(this._proto),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_id: {
        value: cdktf.stringToHclTerraform(this._proxyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_persist: {
        value: cdktf.booleanToHclTerraform(this._sessionPersist),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
