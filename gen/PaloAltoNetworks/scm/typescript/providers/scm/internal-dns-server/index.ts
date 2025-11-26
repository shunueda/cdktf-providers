// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/internal_dns_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InternalDnsServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The DNS domain name(s)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/internal_dns_server#domain_name InternalDnsServer#domain_name}
  */
  readonly domainName: string[];
  /**
  * The name of the internet DNS server resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/internal_dns_server#name InternalDnsServer#name}
  */
  readonly name: string;
  /**
  * The IP address of the primary DNS server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/internal_dns_server#primary InternalDnsServer#primary}
  */
  readonly primary: string;
  /**
  * The IP address of the secondary DNS server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/internal_dns_server#secondary InternalDnsServer#secondary}
  */
  readonly secondary?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/internal_dns_server scm_internal_dns_server}
*/
export class InternalDnsServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_internal_dns_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InternalDnsServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InternalDnsServer to import
  * @param importFromId The id of the existing InternalDnsServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/internal_dns_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InternalDnsServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_internal_dns_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/internal_dns_server scm_internal_dns_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InternalDnsServerConfig
  */
  public constructor(scope: Construct, id: string, config: InternalDnsServerConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_internal_dns_server',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.5',
        providerVersionConstraint: '1.0.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domainName = config.domainName;
    this._name = config.name;
    this._primary = config.primary;
    this._secondary = config.secondary;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string[]; 
  public get domainName() {
    return this.getListAttribute('domain_name');
  }
  public set domainName(value: string[]) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // primary - computed: false, optional: false, required: true
  private _primary?: string; 
  public get primary() {
    return this.getStringAttribute('primary');
  }
  public set primary(value: string) {
    this._primary = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary;
  }

  // secondary - computed: false, optional: true, required: false
  private _secondary?: string; 
  public get secondary() {
    return this.getStringAttribute('secondary');
  }
  public set secondary(value: string) {
    this._secondary = value;
  }
  public resetSecondary() {
    this._secondary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryInput() {
    return this._secondary;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domainName),
      name: cdktf.stringToTerraform(this._name),
      primary: cdktf.stringToTerraform(this._primary),
      secondary: cdktf.stringToTerraform(this._secondary),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._domainName),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary: {
        value: cdktf.stringToHclTerraform(this._primary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary: {
        value: cdktf.stringToHclTerraform(this._secondary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
