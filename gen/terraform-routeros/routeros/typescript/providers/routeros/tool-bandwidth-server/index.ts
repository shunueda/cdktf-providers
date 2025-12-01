// https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/tool_bandwidth_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ToolBandwidthServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/tool_bandwidth_server#___path___ ToolBandwidthServer#___path___}
  */
  readonly path?: string;
  /**
  * Beginning of UDP port range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/tool_bandwidth_server#allocate_udp_ports_from ToolBandwidthServer#allocate_udp_ports_from}
  */
  readonly allocateUdpPortsFrom?: number;
  /**
  * IPv4 allowed networks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/tool_bandwidth_server#allowed_addresses4 ToolBandwidthServer#allowed_addresses4}
  */
  readonly allowedAddresses4?: string[];
  /**
  * Ipv6 allowed networks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/tool_bandwidth_server#allowed_addresses6 ToolBandwidthServer#allowed_addresses6}
  */
  readonly allowedAddresses6?: string[];
  /**
  * Communicate only with authenticated clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/tool_bandwidth_server#authenticate ToolBandwidthServer#authenticate}
  */
  readonly authenticate?: boolean | cdktf.IResolvable;
  /**
  * Defines whether bandwidth server is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/tool_bandwidth_server#enabled ToolBandwidthServer#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/tool_bandwidth_server#id ToolBandwidthServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Maximal simultaneous test count.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/tool_bandwidth_server#max_sessions ToolBandwidthServer#max_sessions}
  */
  readonly maxSessions?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/tool_bandwidth_server routeros_tool_bandwidth_server}
*/
export class ToolBandwidthServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_tool_bandwidth_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ToolBandwidthServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ToolBandwidthServer to import
  * @param importFromId The id of the existing ToolBandwidthServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/tool_bandwidth_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ToolBandwidthServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_tool_bandwidth_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/tool_bandwidth_server routeros_tool_bandwidth_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ToolBandwidthServerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ToolBandwidthServerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'routeros_tool_bandwidth_server',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.95.0',
        providerVersionConstraint: '1.95.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._allocateUdpPortsFrom = config.allocateUdpPortsFrom;
    this._allowedAddresses4 = config.allowedAddresses4;
    this._allowedAddresses6 = config.allowedAddresses6;
    this._authenticate = config.authenticate;
    this._enabled = config.enabled;
    this._id = config.id;
    this._maxSessions = config.maxSessions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // allocate_udp_ports_from - computed: false, optional: true, required: false
  private _allocateUdpPortsFrom?: number; 
  public get allocateUdpPortsFrom() {
    return this.getNumberAttribute('allocate_udp_ports_from');
  }
  public set allocateUdpPortsFrom(value: number) {
    this._allocateUdpPortsFrom = value;
  }
  public resetAllocateUdpPortsFrom() {
    this._allocateUdpPortsFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocateUdpPortsFromInput() {
    return this._allocateUdpPortsFrom;
  }

  // allowed_addresses4 - computed: false, optional: true, required: false
  private _allowedAddresses4?: string[]; 
  public get allowedAddresses4() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_addresses4'));
  }
  public set allowedAddresses4(value: string[]) {
    this._allowedAddresses4 = value;
  }
  public resetAllowedAddresses4() {
    this._allowedAddresses4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedAddresses4Input() {
    return this._allowedAddresses4;
  }

  // allowed_addresses6 - computed: false, optional: true, required: false
  private _allowedAddresses6?: string[]; 
  public get allowedAddresses6() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_addresses6'));
  }
  public set allowedAddresses6(value: string[]) {
    this._allowedAddresses6 = value;
  }
  public resetAllowedAddresses6() {
    this._allowedAddresses6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedAddresses6Input() {
    return this._allowedAddresses6;
  }

  // authenticate - computed: false, optional: true, required: false
  private _authenticate?: boolean | cdktf.IResolvable; 
  public get authenticate() {
    return this.getBooleanAttribute('authenticate');
  }
  public set authenticate(value: boolean | cdktf.IResolvable) {
    this._authenticate = value;
  }
  public resetAuthenticate() {
    this._authenticate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticateInput() {
    return this._authenticate;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // max_sessions - computed: false, optional: true, required: false
  private _maxSessions?: number; 
  public get maxSessions() {
    return this.getNumberAttribute('max_sessions');
  }
  public set maxSessions(value: number) {
    this._maxSessions = value;
  }
  public resetMaxSessions() {
    this._maxSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSessionsInput() {
    return this._maxSessions;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      allocate_udp_ports_from: cdktf.numberToTerraform(this._allocateUdpPortsFrom),
      allowed_addresses4: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedAddresses4),
      allowed_addresses6: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedAddresses6),
      authenticate: cdktf.booleanToTerraform(this._authenticate),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      max_sessions: cdktf.numberToTerraform(this._maxSessions),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allocate_udp_ports_from: {
        value: cdktf.numberToHclTerraform(this._allocateUdpPortsFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      allowed_addresses4: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedAddresses4),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      allowed_addresses6: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedAddresses6),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      authenticate: {
        value: cdktf.booleanToHclTerraform(this._authenticate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_sessions: {
        value: cdktf.numberToHclTerraform(this._maxSessions),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
