// https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/iploadbalancing_udp_frontend
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IploadbalancingUdpFrontendConfig extends cdktf.TerraformMetaArguments {
  /**
  * Only attach frontend on these ip. No restriction if null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/iploadbalancing_udp_frontend#dedicated_ipfo IploadbalancingUdpFrontend#dedicated_ipfo}
  */
  readonly dedicatedIpfo?: string[];
  /**
  * Default UDP Farm of your frontend
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/iploadbalancing_udp_frontend#default_farm_id IploadbalancingUdpFrontend#default_farm_id}
  */
  readonly defaultFarmId?: number;
  /**
  * Disable your frontend. Default: 'false'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/iploadbalancing_udp_frontend#disabled IploadbalancingUdpFrontend#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Human readable name for your frontend, this field is for you
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/iploadbalancing_udp_frontend#display_name IploadbalancingUdpFrontend#display_name}
  */
  readonly displayName?: string;
  /**
  * Port(s) attached to your frontend. Supports single port (numerical value), range (2 dash-delimited increasing ports) and comma-separated list of 'single port' and/or 'range'. Each port must be in the [1;49151] range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/iploadbalancing_udp_frontend#port IploadbalancingUdpFrontend#port}
  */
  readonly port: string;
  /**
  * The internal name of your IP load balancing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/iploadbalancing_udp_frontend#service_name IploadbalancingUdpFrontend#service_name}
  */
  readonly serviceName: string;
  /**
  * Zone of your frontend. Use "all" for all owned zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/iploadbalancing_udp_frontend#zone IploadbalancingUdpFrontend#zone}
  */
  readonly zone: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/iploadbalancing_udp_frontend ovh_iploadbalancing_udp_frontend}
*/
export class IploadbalancingUdpFrontend extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_iploadbalancing_udp_frontend";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IploadbalancingUdpFrontend resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IploadbalancingUdpFrontend to import
  * @param importFromId The id of the existing IploadbalancingUdpFrontend that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/iploadbalancing_udp_frontend#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IploadbalancingUdpFrontend to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_iploadbalancing_udp_frontend", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/iploadbalancing_udp_frontend ovh_iploadbalancing_udp_frontend} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IploadbalancingUdpFrontendConfig
  */
  public constructor(scope: Construct, id: string, config: IploadbalancingUdpFrontendConfig) {
    super(scope, id, {
      terraformResourceType: 'ovh_iploadbalancing_udp_frontend',
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
    this._dedicatedIpfo = config.dedicatedIpfo;
    this._defaultFarmId = config.defaultFarmId;
    this._disabled = config.disabled;
    this._displayName = config.displayName;
    this._port = config.port;
    this._serviceName = config.serviceName;
    this._zone = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dedicated_ipfo - computed: false, optional: true, required: false
  private _dedicatedIpfo?: string[]; 
  public get dedicatedIpfo() {
    return this.getListAttribute('dedicated_ipfo');
  }
  public set dedicatedIpfo(value: string[]) {
    this._dedicatedIpfo = value;
  }
  public resetDedicatedIpfo() {
    this._dedicatedIpfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedIpfoInput() {
    return this._dedicatedIpfo;
  }

  // default_farm_id - computed: false, optional: true, required: false
  private _defaultFarmId?: number; 
  public get defaultFarmId() {
    return this.getNumberAttribute('default_farm_id');
  }
  public set defaultFarmId(value: number) {
    this._defaultFarmId = value;
  }
  public resetDefaultFarmId() {
    this._defaultFarmId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultFarmIdInput() {
    return this._defaultFarmId;
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
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

  // frontend_id - computed: true, optional: false, required: false
  public get frontendId() {
    return this.getNumberAttribute('frontend_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
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

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dedicated_ipfo: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dedicatedIpfo),
      default_farm_id: cdktf.numberToTerraform(this._defaultFarmId),
      disabled: cdktf.booleanToTerraform(this._disabled),
      display_name: cdktf.stringToTerraform(this._displayName),
      port: cdktf.stringToTerraform(this._port),
      service_name: cdktf.stringToTerraform(this._serviceName),
      zone: cdktf.stringToTerraform(this._zone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dedicated_ipfo: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dedicatedIpfo),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      default_farm_id: {
        value: cdktf.numberToHclTerraform(this._defaultFarmId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.stringToHclTerraform(this._port),
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
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
