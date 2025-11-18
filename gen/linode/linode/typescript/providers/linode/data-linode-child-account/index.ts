// https://registry.terraform.io/providers/linode/linode/3.6.0/docs/data-sources/child_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLinodeChildAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique ID of this Account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/data-sources/child_account#euuid DataLinodeChildAccount#euuid}
  */
  readonly euuid: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/data-sources/child_account linode_child_account}
*/
export class DataLinodeChildAccount extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "linode_child_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLinodeChildAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLinodeChildAccount to import
  * @param importFromId The id of the existing DataLinodeChildAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/data-sources/child_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLinodeChildAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "linode_child_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/data-sources/child_account linode_child_account} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLinodeChildAccountConfig
  */
  public constructor(scope: Construct, id: string, config: DataLinodeChildAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'linode_child_account',
      terraformGeneratorMetadata: {
        providerName: 'linode',
        providerVersion: '3.6.0',
        providerVersionConstraint: '3.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._euuid = config.euuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_since - computed: true, optional: false, required: false
  public get activeSince() {
    return this.getStringAttribute('active_since');
  }

  // address_1 - computed: true, optional: false, required: false
  public get address1() {
    return this.getStringAttribute('address_1');
  }

  // address_2 - computed: true, optional: false, required: false
  public get address2() {
    return this.getStringAttribute('address_2');
  }

  // balance - computed: true, optional: false, required: false
  public get balance() {
    return this.getNumberAttribute('balance');
  }

  // capabilities - computed: true, optional: false, required: false
  public get capabilities() {
    return cdktf.Fn.tolist(this.getListAttribute('capabilities'));
  }

  // city - computed: true, optional: false, required: false
  public get city() {
    return this.getStringAttribute('city');
  }

  // company - computed: true, optional: false, required: false
  public get company() {
    return this.getStringAttribute('company');
  }

  // country - computed: true, optional: false, required: false
  public get country() {
    return this.getStringAttribute('country');
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // euuid - computed: false, optional: false, required: true
  private _euuid?: string; 
  public get euuid() {
    return this.getStringAttribute('euuid');
  }
  public set euuid(value: string) {
    this._euuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get euuidInput() {
    return this._euuid;
  }

  // first_name - computed: true, optional: false, required: false
  public get firstName() {
    return this.getStringAttribute('first_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_name - computed: true, optional: false, required: false
  public get lastName() {
    return this.getStringAttribute('last_name');
  }

  // phone - computed: true, optional: false, required: false
  public get phone() {
    return this.getStringAttribute('phone');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // zip - computed: true, optional: false, required: false
  public get zip() {
    return this.getStringAttribute('zip');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      euuid: cdktf.stringToTerraform(this._euuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      euuid: {
        value: cdktf.stringToHclTerraform(this._euuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
