// https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/unbound_host_alias
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UnboundHostAliasConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional description here for your reference (not parsed).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/unbound_host_alias#description UnboundHostAlias#description}
  */
  readonly description?: string;
  /**
  * Domain of the host, e.g. example.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/unbound_host_alias#domain UnboundHostAlias#domain}
  */
  readonly domain: string;
  /**
  * Enable this alias for the selected host. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/unbound_host_alias#enabled UnboundHostAlias#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the host, without the domain part. Use `*` to create a wildcard entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/unbound_host_alias#hostname UnboundHostAlias#hostname}
  */
  readonly hostname: string;
  /**
  * The associated host override to apply this alias on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/unbound_host_alias#override UnboundHostAlias#override}
  */
  readonly override: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/unbound_host_alias opnsense_unbound_host_alias}
*/
export class UnboundHostAlias extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opnsense_unbound_host_alias";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UnboundHostAlias resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UnboundHostAlias to import
  * @param importFromId The id of the existing UnboundHostAlias that should be imported. Refer to the {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/unbound_host_alias#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UnboundHostAlias to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opnsense_unbound_host_alias", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/unbound_host_alias opnsense_unbound_host_alias} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UnboundHostAliasConfig
  */
  public constructor(scope: Construct, id: string, config: UnboundHostAliasConfig) {
    super(scope, id, {
      terraformResourceType: 'opnsense_unbound_host_alias',
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
    this._override = config.override;
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

  // override - computed: false, optional: false, required: true
  private _override?: string; 
  public get override() {
    return this.getStringAttribute('override');
  }
  public set override(value: string) {
    this._override = value;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override;
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
      override: cdktf.stringToTerraform(this._override),
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
      override: {
        value: cdktf.stringToHclTerraform(this._override),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
