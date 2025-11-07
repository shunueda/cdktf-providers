// https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/security_address__book_address_ip__prefix
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityAddressBookAddressIpPrefixConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/security_address__book_address_ip__prefix#id SecurityAddressBookAddressIpPrefix#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * xpath is: config.Groups.V_address__book.V_address. Numeric IPv4 or IPv6 address with prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/security_address__book_address_ip__prefix#ip__prefix SecurityAddressBookAddressIpPrefix#ip__prefix}
  */
  readonly ipPrefix?: string;
  /**
  * xpath is: config.Groups.V_address__book
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/security_address__book_address_ip__prefix#name SecurityAddressBookAddressIpPrefix#name}
  */
  readonly name?: string;
  /**
  * xpath is: config.Groups.V_address__book.V_address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/security_address__book_address_ip__prefix#name__1 SecurityAddressBookAddressIpPrefix#name__1}
  */
  readonly name1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/security_address__book_address_ip__prefix#resource_name SecurityAddressBookAddressIpPrefix#resource_name}
  */
  readonly resourceName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/security_address__book_address_ip__prefix junos-vsrx_SecurityAddress__BookAddressIp__Prefix}
*/
export class SecurityAddressBookAddressIpPrefix extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos-vsrx_SecurityAddress__BookAddressIp__Prefix";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityAddressBookAddressIpPrefix resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityAddressBookAddressIpPrefix to import
  * @param importFromId The id of the existing SecurityAddressBookAddressIpPrefix that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/security_address__book_address_ip__prefix#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityAddressBookAddressIpPrefix to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos-vsrx_SecurityAddress__BookAddressIp__Prefix", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/security_address__book_address_ip__prefix junos-vsrx_SecurityAddress__BookAddressIp__Prefix} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityAddressBookAddressIpPrefixConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityAddressBookAddressIpPrefixConfig) {
    super(scope, id, {
      terraformResourceType: 'junos-vsrx_SecurityAddress__BookAddressIp__Prefix',
      terraformGeneratorMetadata: {
        providerName: 'junos-vsrx',
        providerVersion: '20.32.106'
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
    this._ipPrefix = config.ipPrefix;
    this._name = config.name;
    this._name1 = config.name1;
    this._resourceName = config.resourceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ip__prefix - computed: false, optional: true, required: false
  private _ipPrefix?: string; 
  public get ipPrefix() {
    return this.getStringAttribute('ip__prefix');
  }
  public set ipPrefix(value: string) {
    this._ipPrefix = value;
  }
  public resetIpPrefix() {
    this._ipPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrefixInput() {
    return this._ipPrefix;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // name__1 - computed: false, optional: true, required: false
  private _name1?: string; 
  public get name1() {
    return this.getStringAttribute('name__1');
  }
  public set name1(value: string) {
    this._name1 = value;
  }
  public resetName1() {
    this._name1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get name1Input() {
    return this._name1;
  }

  // resource_name - computed: false, optional: false, required: true
  private _resourceName?: string; 
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
  public set resourceName(value: string) {
    this._resourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameInput() {
    return this._resourceName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ip__prefix: cdktf.stringToTerraform(this._ipPrefix),
      name: cdktf.stringToTerraform(this._name),
      name__1: cdktf.stringToTerraform(this._name1),
      resource_name: cdktf.stringToTerraform(this._resourceName),
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
      ip__prefix: {
        value: cdktf.stringToHclTerraform(this._ipPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name__1: {
        value: cdktf.stringToHclTerraform(this._name1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_name: {
        value: cdktf.stringToHclTerraform(this._resourceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
