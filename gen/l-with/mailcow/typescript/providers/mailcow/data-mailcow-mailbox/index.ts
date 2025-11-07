// https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/data-sources/mailbox
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMailcowMailboxConfig extends cdktf.TerraformMetaArguments {
  /**
  * e-mail address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/data-sources/mailbox#address DataMailcowMailbox#address}
  */
  readonly address: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/data-sources/mailbox#id DataMailcowMailbox#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/data-sources/mailbox mailcow_mailbox}
*/
export class DataMailcowMailbox extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mailcow_mailbox";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMailcowMailbox resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMailcowMailbox to import
  * @param importFromId The id of the existing DataMailcowMailbox that should be imported. Refer to the {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/data-sources/mailbox#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMailcowMailbox to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mailcow_mailbox", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/data-sources/mailbox mailcow_mailbox} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMailcowMailboxConfig
  */
  public constructor(scope: Construct, id: string, config: DataMailcowMailboxConfig) {
    super(scope, id, {
      terraformResourceType: 'mailcow_mailbox',
      terraformGeneratorMetadata: {
        providerName: 'mailcow',
        providerVersion: '0.10.2'
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getBooleanAttribute('active');
  }

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

  // authsource - computed: true, optional: false, required: false
  public get authsource() {
    return this.getStringAttribute('authsource');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // force_pw_update - computed: true, optional: false, required: false
  public get forcePwUpdate() {
    return this.getBooleanAttribute('force_pw_update');
  }

  // full_name - computed: true, optional: false, required: false
  public get fullName() {
    return this.getStringAttribute('full_name');
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

  // imap_access - computed: true, optional: false, required: false
  public get imapAccess() {
    return this.getBooleanAttribute('imap_access');
  }

  // local_part - computed: true, optional: false, required: false
  public get localPart() {
    return this.getStringAttribute('local_part');
  }

  // pop3_access - computed: true, optional: false, required: false
  public get pop3Access() {
    return this.getBooleanAttribute('pop3_access');
  }

  // quota - computed: true, optional: false, required: false
  public get quota() {
    return this.getNumberAttribute('quota');
  }

  // sieve_access - computed: true, optional: false, required: false
  public get sieveAccess() {
    return this.getBooleanAttribute('sieve_access');
  }

  // smtp_access - computed: true, optional: false, required: false
  public get smtpAccess() {
    return this.getBooleanAttribute('smtp_access');
  }

  // sogo_access - computed: true, optional: false, required: false
  public get sogoAccess() {
    return this.getBooleanAttribute('sogo_access');
  }

  // tls_enforce_in - computed: true, optional: false, required: false
  public get tlsEnforceIn() {
    return this.getBooleanAttribute('tls_enforce_in');
  }

  // tls_enforce_out - computed: true, optional: false, required: false
  public get tlsEnforceOut() {
    return this.getBooleanAttribute('tls_enforce_out');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      id: cdktf.stringToTerraform(this._id),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
