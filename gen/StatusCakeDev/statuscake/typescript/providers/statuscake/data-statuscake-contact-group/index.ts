// https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/data-sources/contact_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataStatuscakeContactGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Contact group ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/data-sources/contact_group#id DataStatuscakeContactGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/data-sources/contact_group statuscake_contact_group}
*/
export class DataStatuscakeContactGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "statuscake_contact_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataStatuscakeContactGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataStatuscakeContactGroup to import
  * @param importFromId The id of the existing DataStatuscakeContactGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/data-sources/contact_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataStatuscakeContactGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "statuscake_contact_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/data-sources/contact_group statuscake_contact_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataStatuscakeContactGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataStatuscakeContactGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'statuscake_contact_group',
      terraformGeneratorMetadata: {
        providerName: 'statuscake',
        providerVersion: '2.2.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // email_addresses - computed: true, optional: false, required: false
  public get emailAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('email_addresses'));
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // integrations - computed: true, optional: false, required: false
  public get integrations() {
    return cdktf.Fn.tolist(this.getListAttribute('integrations'));
  }

  // mobile_numbers - computed: true, optional: false, required: false
  public get mobileNumbers() {
    return cdktf.Fn.tolist(this.getListAttribute('mobile_numbers'));
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // ping_url - computed: true, optional: false, required: false
  public get pingUrl() {
    return this.getStringAttribute('ping_url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
