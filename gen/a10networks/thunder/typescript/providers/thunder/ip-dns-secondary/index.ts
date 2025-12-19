// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_dns_secondary
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpDnsSecondaryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_dns_secondary#id IpDnsSecondary#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * DNS server address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_dns_secondary#ip_v4_addr IpDnsSecondary#ip_v4_addr}
  */
  readonly ipV4Addr?: string;
  /**
  * DNS server address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_dns_secondary#ip_v6_addr IpDnsSecondary#ip_v6_addr}
  */
  readonly ipV6Addr?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_dns_secondary#uuid IpDnsSecondary#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_dns_secondary thunder_ip_dns_secondary}
*/
export class IpDnsSecondary extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ip_dns_secondary";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpDnsSecondary resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpDnsSecondary to import
  * @param importFromId The id of the existing IpDnsSecondary that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_dns_secondary#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpDnsSecondary to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ip_dns_secondary", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_dns_secondary thunder_ip_dns_secondary} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpDnsSecondaryConfig = {}
  */
  public constructor(scope: Construct, id: string, config: IpDnsSecondaryConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ip_dns_secondary',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
    this._ipV4Addr = config.ipV4Addr;
    this._ipV6Addr = config.ipV6Addr;
    this._uuid = config.uuid;
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

  // ip_v4_addr - computed: false, optional: true, required: false
  private _ipV4Addr?: string; 
  public get ipV4Addr() {
    return this.getStringAttribute('ip_v4_addr');
  }
  public set ipV4Addr(value: string) {
    this._ipV4Addr = value;
  }
  public resetIpV4Addr() {
    this._ipV4Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipV4AddrInput() {
    return this._ipV4Addr;
  }

  // ip_v6_addr - computed: false, optional: true, required: false
  private _ipV6Addr?: string; 
  public get ipV6Addr() {
    return this.getStringAttribute('ip_v6_addr');
  }
  public set ipV6Addr(value: string) {
    this._ipV6Addr = value;
  }
  public resetIpV6Addr() {
    this._ipV6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipV6AddrInput() {
    return this._ipV6Addr;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ip_v4_addr: cdktf.stringToTerraform(this._ipV4Addr),
      ip_v6_addr: cdktf.stringToTerraform(this._ipV6Addr),
      uuid: cdktf.stringToTerraform(this._uuid),
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
      ip_v4_addr: {
        value: cdktf.stringToHclTerraform(this._ipV4Addr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_v6_addr: {
        value: cdktf.stringToHclTerraform(this._ipV6Addr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
