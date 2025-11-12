// https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/contact_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContactGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of email addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/contact_group#email_addresses ContactGroup#email_addresses}
  */
  readonly emailAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/contact_group#id ContactGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List of integration IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/contact_group#integrations ContactGroup#integrations}
  */
  readonly integrations?: string[];
  /**
  * List of international format mobile phone numbers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/contact_group#mobile_numbers ContactGroup#mobile_numbers}
  */
  readonly mobileNumbers?: string[];
  /**
  * Name of the contact group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/contact_group#name ContactGroup#name}
  */
  readonly name: string;
  /**
  * URL or IP address of an endpoint to push uptime events. Currently this only supports HTTP GET endpoints
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/contact_group#ping_url ContactGroup#ping_url}
  */
  readonly pingUrl?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/contact_group statuscake_contact_group}
*/
export class ContactGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "statuscake_contact_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ContactGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ContactGroup to import
  * @param importFromId The id of the existing ContactGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/contact_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ContactGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "statuscake_contact_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/contact_group statuscake_contact_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContactGroupConfig
  */
  public constructor(scope: Construct, id: string, config: ContactGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'statuscake_contact_group',
      terraformGeneratorMetadata: {
        providerName: 'statuscake',
        providerVersion: '2.2.2',
        providerVersionConstraint: '2.2.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._emailAddresses = config.emailAddresses;
    this._id = config.id;
    this._integrations = config.integrations;
    this._mobileNumbers = config.mobileNumbers;
    this._name = config.name;
    this._pingUrl = config.pingUrl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // email_addresses - computed: false, optional: true, required: false
  private _emailAddresses?: string[]; 
  public get emailAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('email_addresses'));
  }
  public set emailAddresses(value: string[]) {
    this._emailAddresses = value;
  }
  public resetEmailAddresses() {
    this._emailAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressesInput() {
    return this._emailAddresses;
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

  // integrations - computed: false, optional: true, required: false
  private _integrations?: string[]; 
  public get integrations() {
    return cdktf.Fn.tolist(this.getListAttribute('integrations'));
  }
  public set integrations(value: string[]) {
    this._integrations = value;
  }
  public resetIntegrations() {
    this._integrations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationsInput() {
    return this._integrations;
  }

  // mobile_numbers - computed: false, optional: true, required: false
  private _mobileNumbers?: string[]; 
  public get mobileNumbers() {
    return cdktf.Fn.tolist(this.getListAttribute('mobile_numbers'));
  }
  public set mobileNumbers(value: string[]) {
    this._mobileNumbers = value;
  }
  public resetMobileNumbers() {
    this._mobileNumbers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobileNumbersInput() {
    return this._mobileNumbers;
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

  // ping_url - computed: false, optional: true, required: false
  private _pingUrl?: string; 
  public get pingUrl() {
    return this.getStringAttribute('ping_url');
  }
  public set pingUrl(value: string) {
    this._pingUrl = value;
  }
  public resetPingUrl() {
    this._pingUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingUrlInput() {
    return this._pingUrl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      email_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._emailAddresses),
      id: cdktf.stringToTerraform(this._id),
      integrations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._integrations),
      mobile_numbers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._mobileNumbers),
      name: cdktf.stringToTerraform(this._name),
      ping_url: cdktf.stringToTerraform(this._pingUrl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      email_addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._emailAddresses),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      integrations: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._integrations),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      mobile_numbers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._mobileNumbers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ping_url: {
        value: cdktf.stringToHclTerraform(this._pingUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
