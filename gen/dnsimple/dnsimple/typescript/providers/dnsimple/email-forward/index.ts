// https://registry.terraform.io/providers/dnsimple/dnsimple/2.0.0/docs/resources/email_forward
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EmailForwardConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/2.0.0/docs/resources/email_forward#alias_name EmailForward#alias_name}
  */
  readonly aliasName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/2.0.0/docs/resources/email_forward#destination_email EmailForward#destination_email}
  */
  readonly destinationEmail: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/2.0.0/docs/resources/email_forward#domain EmailForward#domain}
  */
  readonly domain: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dnsimple/dnsimple/2.0.0/docs/resources/email_forward dnsimple_email_forward}
*/
export class EmailForward extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnsimple_email_forward";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EmailForward resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EmailForward to import
  * @param importFromId The id of the existing EmailForward that should be imported. Refer to the {@link https://registry.terraform.io/providers/dnsimple/dnsimple/2.0.0/docs/resources/email_forward#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EmailForward to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnsimple_email_forward", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dnsimple/dnsimple/2.0.0/docs/resources/email_forward dnsimple_email_forward} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EmailForwardConfig
  */
  public constructor(scope: Construct, id: string, config: EmailForwardConfig) {
    super(scope, id, {
      terraformResourceType: 'dnsimple_email_forward',
      terraformGeneratorMetadata: {
        providerName: 'dnsimple',
        providerVersion: '2.0.0',
        providerVersionConstraint: '2.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aliasName = config.aliasName;
    this._destinationEmail = config.destinationEmail;
    this._domain = config.domain;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias_email - computed: true, optional: false, required: false
  public get aliasEmail() {
    return this.getStringAttribute('alias_email');
  }

  // alias_name - computed: false, optional: false, required: true
  private _aliasName?: string; 
  public get aliasName() {
    return this.getStringAttribute('alias_name');
  }
  public set aliasName(value: string) {
    this._aliasName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasNameInput() {
    return this._aliasName;
  }

  // destination_email - computed: false, optional: false, required: true
  private _destinationEmail?: string; 
  public get destinationEmail() {
    return this.getStringAttribute('destination_email');
  }
  public set destinationEmail(value: string) {
    this._destinationEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationEmailInput() {
    return this._destinationEmail;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias_name: cdktf.stringToTerraform(this._aliasName),
      destination_email: cdktf.stringToTerraform(this._destinationEmail),
      domain: cdktf.stringToTerraform(this._domain),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alias_name: {
        value: cdktf.stringToHclTerraform(this._aliasName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_email: {
        value: cdktf.stringToHclTerraform(this._destinationEmail),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
