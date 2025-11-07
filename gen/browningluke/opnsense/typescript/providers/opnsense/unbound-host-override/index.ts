// https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/unbound_host_override
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UnboundHostOverrideConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional description here for your reference (not parsed).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/unbound_host_override#description UnboundHostOverride#description}
  */
  readonly description?: string;
  /**
  * Domain of the host, e.g. example.com
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/unbound_host_override#domain UnboundHostOverride#domain}
  */
  readonly domain: string;
  /**
  * Enable the override for this host. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/unbound_host_override#enabled UnboundHostOverride#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the host, without the domain part. Use `*` to create a wildcard entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/unbound_host_override#hostname UnboundHostOverride#hostname}
  */
  readonly hostname: string;
  /**
  * Host name of MX host, e.g. mail.example.com. Must be set when `type` is `MX`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/unbound_host_override#mx_host UnboundHostOverride#mx_host}
  */
  readonly mxHost?: string;
  /**
  * Priority of MX record, e.g. 10. Must be set when `type` is `MX`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/unbound_host_override#mx_priority UnboundHostOverride#mx_priority}
  */
  readonly mxPriority?: number;
  /**
  * IP address of the host, e.g. 192.168.100.100 or fd00:abcd::1. Must be set when `type` is `A` or `AAAA`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/unbound_host_override#server UnboundHostOverride#server}
  */
  readonly server?: string;
  /**
  * Type of resource record. Available values: `A`, `AAAA`, `MX`. Defaults to `A`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/unbound_host_override#type UnboundHostOverride#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/unbound_host_override opnsense_unbound_host_override}
*/
export class UnboundHostOverride extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opnsense_unbound_host_override";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UnboundHostOverride resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UnboundHostOverride to import
  * @param importFromId The id of the existing UnboundHostOverride that should be imported. Refer to the {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/unbound_host_override#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UnboundHostOverride to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opnsense_unbound_host_override", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/unbound_host_override opnsense_unbound_host_override} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UnboundHostOverrideConfig
  */
  public constructor(scope: Construct, id: string, config: UnboundHostOverrideConfig) {
    super(scope, id, {
      terraformResourceType: 'opnsense_unbound_host_override',
      terraformGeneratorMetadata: {
        providerName: 'opnsense',
        providerVersion: '0.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._domain = config.domain;
    this._enabled = config.enabled;
    this._hostname = config.hostname;
    this._mxHost = config.mxHost;
    this._mxPriority = config.mxPriority;
    this._server = config.server;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // enabled - computed: true, optional: true, required: false
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

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mx_host - computed: true, optional: true, required: false
  private _mxHost?: string; 
  public get mxHost() {
    return this.getStringAttribute('mx_host');
  }
  public set mxHost(value: string) {
    this._mxHost = value;
  }
  public resetMxHost() {
    this._mxHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mxHostInput() {
    return this._mxHost;
  }

  // mx_priority - computed: true, optional: true, required: false
  private _mxPriority?: number; 
  public get mxPriority() {
    return this.getNumberAttribute('mx_priority');
  }
  public set mxPriority(value: number) {
    this._mxPriority = value;
  }
  public resetMxPriority() {
    this._mxPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mxPriorityInput() {
    return this._mxPriority;
  }

  // server - computed: true, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      domain: cdktf.stringToTerraform(this._domain),
      enabled: cdktf.booleanToTerraform(this._enabled),
      hostname: cdktf.stringToTerraform(this._hostname),
      mx_host: cdktf.stringToTerraform(this._mxHost),
      mx_priority: cdktf.numberToTerraform(this._mxPriority),
      server: cdktf.stringToTerraform(this._server),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mx_host: {
        value: cdktf.stringToHclTerraform(this._mxHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mx_priority: {
        value: cdktf.numberToHclTerraform(this._mxPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server: {
        value: cdktf.stringToHclTerraform(this._server),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
