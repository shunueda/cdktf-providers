// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/dns_private_line
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsPrivateLineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/dns_private_line#id DnsPrivateLine#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/dns_private_line#name DnsPrivateLine#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/dns_private_line#v4_addresses DnsPrivateLine#v4_addresses}
  */
  readonly v4Addresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/dns_private_line#v6_addresses DnsPrivateLine#v6_addresses}
  */
  readonly v6Addresses?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/dns_private_line alibabacloudstack_dns_private_line}
*/
export class DnsPrivateLine extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_dns_private_line";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsPrivateLine resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsPrivateLine to import
  * @param importFromId The id of the existing DnsPrivateLine that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/dns_private_line#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsPrivateLine to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_dns_private_line", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/dns_private_line alibabacloudstack_dns_private_line} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsPrivateLineConfig
  */
  public constructor(scope: Construct, id: string, config: DnsPrivateLineConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_dns_private_line',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.21',
        providerVersionConstraint: '3.18.21'
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
    this._name = config.name;
    this._v4Addresses = config.v4Addresses;
    this._v6Addresses = config.v6Addresses;
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

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // v4_addresses - computed: false, optional: true, required: false
  private _v4Addresses?: string[]; 
  public get v4Addresses() {
    return cdktf.Fn.tolist(this.getListAttribute('v4_addresses'));
  }
  public set v4Addresses(value: string[]) {
    this._v4Addresses = value;
  }
  public resetV4Addresses() {
    this._v4Addresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v4AddressesInput() {
    return this._v4Addresses;
  }

  // v6_addresses - computed: false, optional: true, required: false
  private _v6Addresses?: string[]; 
  public get v6Addresses() {
    return cdktf.Fn.tolist(this.getListAttribute('v6_addresses'));
  }
  public set v6Addresses(value: string[]) {
    this._v6Addresses = value;
  }
  public resetV6Addresses() {
    this._v6Addresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6AddressesInput() {
    return this._v6Addresses;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      v4_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._v4Addresses),
      v6_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._v6Addresses),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      v4_addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._v4Addresses),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      v6_addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._v6Addresses),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
