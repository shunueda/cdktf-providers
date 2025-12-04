// https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_dnsregistration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformDnsregistrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The environment of the DNS registration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_dnsregistration#environment PlatformDnsregistration#environment}
  */
  readonly environment: string;
  /**
  * The subdomain of the DNS registration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_dnsregistration#subdomain PlatformDnsregistration#subdomain}
  */
  readonly subdomain: string;
  /**
  * The zone of the DNS registration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_dnsregistration#zone PlatformDnsregistration#zone}
  */
  readonly zone: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_dnsregistration kaleido_platform_dnsregistration}
*/
export class PlatformDnsregistration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kaleido_platform_dnsregistration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformDnsregistration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformDnsregistration to import
  * @param importFromId The id of the existing PlatformDnsregistration that should be imported. Refer to the {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_dnsregistration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformDnsregistration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kaleido_platform_dnsregistration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_dnsregistration kaleido_platform_dnsregistration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformDnsregistrationConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformDnsregistrationConfig) {
    super(scope, id, {
      terraformResourceType: 'kaleido_platform_dnsregistration',
      terraformGeneratorMetadata: {
        providerName: 'kaleido',
        providerVersion: '1.2.0',
        providerVersionConstraint: '1.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._environment = config.environment;
    this._subdomain = config.subdomain;
    this._zone = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // environment - computed: false, optional: false, required: true
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // registered_hosts - computed: true, optional: false, required: false
  public get registeredHosts() {
    return this.getListAttribute('registered_hosts');
  }

  // runtime - computed: true, optional: false, required: false
  public get runtime() {
    return this.getStringAttribute('runtime');
  }

  // subdomain - computed: false, optional: false, required: true
  private _subdomain?: string; 
  public get subdomain() {
    return this.getStringAttribute('subdomain');
  }
  public set subdomain(value: string) {
    this._subdomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subdomainInput() {
    return this._subdomain;
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
      environment: cdktf.stringToTerraform(this._environment),
      subdomain: cdktf.stringToTerraform(this._subdomain),
      zone: cdktf.stringToTerraform(this._zone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      environment: {
        value: cdktf.stringToHclTerraform(this._environment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subdomain: {
        value: cdktf.stringToHclTerraform(this._subdomain),
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
