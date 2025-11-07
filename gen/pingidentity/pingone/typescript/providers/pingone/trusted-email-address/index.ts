// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/trusted_email_address
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TrustedEmailAddressConfig extends cdktf.TerraformMetaArguments {
  /**
  * The trusted email address, for example `john.smith@bxretail.org`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/trusted_email_address#email_address TrustedEmailAddress#email_address}
  */
  readonly emailAddress: string;
  /**
  * The ID of the email domain to associate the trusted email address with.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/trusted_email_address#email_domain_id TrustedEmailAddress#email_domain_id}
  */
  readonly emailDomainId: string;
  /**
  * The ID of the environment to associate the trusted email address with.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/trusted_email_address#environment_id TrustedEmailAddress#environment_id}
  */
  readonly environmentId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/trusted_email_address pingone_trusted_email_address}
*/
export class TrustedEmailAddress extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_trusted_email_address";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TrustedEmailAddress resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TrustedEmailAddress to import
  * @param importFromId The id of the existing TrustedEmailAddress that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/trusted_email_address#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TrustedEmailAddress to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_trusted_email_address", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/trusted_email_address pingone_trusted_email_address} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TrustedEmailAddressConfig
  */
  public constructor(scope: Construct, id: string, config: TrustedEmailAddressConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_trusted_email_address',
      terraformGeneratorMetadata: {
        providerName: 'pingone',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._emailAddress = config.emailAddress;
    this._emailDomainId = config.emailDomainId;
    this._environmentId = config.environmentId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // email_address - computed: false, optional: false, required: true
  private _emailAddress?: string; 
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }
  public set emailAddress(value: string) {
    this._emailAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressInput() {
    return this._emailAddress;
  }

  // email_domain_id - computed: false, optional: false, required: true
  private _emailDomainId?: string; 
  public get emailDomainId() {
    return this.getStringAttribute('email_domain_id');
  }
  public set emailDomainId(value: string) {
    this._emailDomainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailDomainIdInput() {
    return this._emailDomainId;
  }

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      email_address: cdktf.stringToTerraform(this._emailAddress),
      email_domain_id: cdktf.stringToTerraform(this._emailDomainId),
      environment_id: cdktf.stringToTerraform(this._environmentId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      email_address: {
        value: cdktf.stringToHclTerraform(this._emailAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_domain_id: {
        value: cdktf.stringToHclTerraform(this._emailDomainId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
