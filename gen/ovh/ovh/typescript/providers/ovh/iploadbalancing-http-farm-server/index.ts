// https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/iploadbalancing_http_farm_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IploadbalancingHttpFarmServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/iploadbalancing_http_farm_server#address IploadbalancingHttpFarmServer#address}
  */
  readonly address: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/iploadbalancing_http_farm_server#backup IploadbalancingHttpFarmServer#backup}
  */
  readonly backup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/iploadbalancing_http_farm_server#chain IploadbalancingHttpFarmServer#chain}
  */
  readonly chain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/iploadbalancing_http_farm_server#display_name IploadbalancingHttpFarmServer#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/iploadbalancing_http_farm_server#farm_id IploadbalancingHttpFarmServer#farm_id}
  */
  readonly farmId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/iploadbalancing_http_farm_server#id IploadbalancingHttpFarmServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/iploadbalancing_http_farm_server#on_marked_down IploadbalancingHttpFarmServer#on_marked_down}
  */
  readonly onMarkedDown?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/iploadbalancing_http_farm_server#port IploadbalancingHttpFarmServer#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/iploadbalancing_http_farm_server#probe IploadbalancingHttpFarmServer#probe}
  */
  readonly probe?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/iploadbalancing_http_farm_server#proxy_protocol_version IploadbalancingHttpFarmServer#proxy_protocol_version}
  */
  readonly proxyProtocolVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/iploadbalancing_http_farm_server#service_name IploadbalancingHttpFarmServer#service_name}
  */
  readonly serviceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/iploadbalancing_http_farm_server#ssl IploadbalancingHttpFarmServer#ssl}
  */
  readonly ssl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/iploadbalancing_http_farm_server#status IploadbalancingHttpFarmServer#status}
  */
  readonly status: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/iploadbalancing_http_farm_server#weight IploadbalancingHttpFarmServer#weight}
  */
  readonly weight?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/iploadbalancing_http_farm_server ovh_iploadbalancing_http_farm_server}
*/
export class IploadbalancingHttpFarmServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_iploadbalancing_http_farm_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IploadbalancingHttpFarmServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IploadbalancingHttpFarmServer to import
  * @param importFromId The id of the existing IploadbalancingHttpFarmServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/iploadbalancing_http_farm_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IploadbalancingHttpFarmServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_iploadbalancing_http_farm_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/iploadbalancing_http_farm_server ovh_iploadbalancing_http_farm_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IploadbalancingHttpFarmServerConfig
  */
  public constructor(scope: Construct, id: string, config: IploadbalancingHttpFarmServerConfig) {
    super(scope, id, {
      terraformResourceType: 'ovh_iploadbalancing_http_farm_server',
      terraformGeneratorMetadata: {
        providerName: 'ovh',
        providerVersion: '2.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._address = config.address;
    this._backup = config.backup;
    this._chain = config.chain;
    this._displayName = config.displayName;
    this._farmId = config.farmId;
    this._id = config.id;
    this._onMarkedDown = config.onMarkedDown;
    this._port = config.port;
    this._probe = config.probe;
    this._proxyProtocolVersion = config.proxyProtocolVersion;
    this._serviceName = config.serviceName;
    this._ssl = config.ssl;
    this._status = config.status;
    this._weight = config.weight;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // backup - computed: false, optional: true, required: false
  private _backup?: boolean | cdktf.IResolvable; 
  public get backup() {
    return this.getBooleanAttribute('backup');
  }
  public set backup(value: boolean | cdktf.IResolvable) {
    this._backup = value;
  }
  public resetBackup() {
    this._backup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupInput() {
    return this._backup;
  }

  // chain - computed: false, optional: true, required: false
  private _chain?: string; 
  public get chain() {
    return this.getStringAttribute('chain');
  }
  public set chain(value: string) {
    this._chain = value;
  }
  public resetChain() {
    this._chain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chainInput() {
    return this._chain;
  }

  // cookie - computed: true, optional: false, required: false
  public get cookie() {
    return this.getStringAttribute('cookie');
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // farm_id - computed: false, optional: false, required: true
  private _farmId?: number; 
  public get farmId() {
    return this.getNumberAttribute('farm_id');
  }
  public set farmId(value: number) {
    this._farmId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get farmIdInput() {
    return this._farmId;
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

  // on_marked_down - computed: false, optional: true, required: false
  private _onMarkedDown?: string; 
  public get onMarkedDown() {
    return this.getStringAttribute('on_marked_down');
  }
  public set onMarkedDown(value: string) {
    this._onMarkedDown = value;
  }
  public resetOnMarkedDown() {
    this._onMarkedDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onMarkedDownInput() {
    return this._onMarkedDown;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // probe - computed: false, optional: true, required: false
  private _probe?: boolean | cdktf.IResolvable; 
  public get probe() {
    return this.getBooleanAttribute('probe');
  }
  public set probe(value: boolean | cdktf.IResolvable) {
    this._probe = value;
  }
  public resetProbe() {
    this._probe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeInput() {
    return this._probe;
  }

  // proxy_protocol_version - computed: false, optional: true, required: false
  private _proxyProtocolVersion?: string; 
  public get proxyProtocolVersion() {
    return this.getStringAttribute('proxy_protocol_version');
  }
  public set proxyProtocolVersion(value: string) {
    this._proxyProtocolVersion = value;
  }
  public resetProxyProtocolVersion() {
    this._proxyProtocolVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyProtocolVersionInput() {
    return this._proxyProtocolVersion;
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // ssl - computed: false, optional: true, required: false
  private _ssl?: boolean | cdktf.IResolvable; 
  public get ssl() {
    return this.getBooleanAttribute('ssl');
  }
  public set ssl(value: boolean | cdktf.IResolvable) {
    this._ssl = value;
  }
  public resetSsl() {
    this._ssl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInput() {
    return this._ssl;
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      backup: cdktf.booleanToTerraform(this._backup),
      chain: cdktf.stringToTerraform(this._chain),
      display_name: cdktf.stringToTerraform(this._displayName),
      farm_id: cdktf.numberToTerraform(this._farmId),
      id: cdktf.stringToTerraform(this._id),
      on_marked_down: cdktf.stringToTerraform(this._onMarkedDown),
      port: cdktf.numberToTerraform(this._port),
      probe: cdktf.booleanToTerraform(this._probe),
      proxy_protocol_version: cdktf.stringToTerraform(this._proxyProtocolVersion),
      service_name: cdktf.stringToTerraform(this._serviceName),
      ssl: cdktf.booleanToTerraform(this._ssl),
      status: cdktf.stringToTerraform(this._status),
      weight: cdktf.numberToTerraform(this._weight),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address: {
        value: cdktf.stringToHclTerraform(this._address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup: {
        value: cdktf.booleanToHclTerraform(this._backup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      chain: {
        value: cdktf.stringToHclTerraform(this._chain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      farm_id: {
        value: cdktf.numberToHclTerraform(this._farmId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      on_marked_down: {
        value: cdktf.stringToHclTerraform(this._onMarkedDown),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      probe: {
        value: cdktf.booleanToHclTerraform(this._probe),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      proxy_protocol_version: {
        value: cdktf.stringToHclTerraform(this._proxyProtocolVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl: {
        value: cdktf.booleanToHclTerraform(this._ssl),
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
      weight: {
        value: cdktf.numberToHclTerraform(this._weight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
