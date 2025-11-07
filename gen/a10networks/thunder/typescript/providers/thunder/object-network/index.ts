// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the object instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_network#description ObjectNetwork#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_network#id ObjectNetwork#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IPV4 Host address end
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_network#ip_range_end ObjectNetwork#ip_range_end}
  */
  readonly ipRangeEnd?: string;
  /**
  * IPv4 Host Address start
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_network#ip_range_start ObjectNetwork#ip_range_start}
  */
  readonly ipRangeStart?: string;
  /**
  * IPV6 Host address end
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_network#ipv6_range_end ObjectNetwork#ipv6_range_end}
  */
  readonly ipv6RangeEnd?: string;
  /**
  * IPv6 Host Address start
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_network#ipv6_range_start ObjectNetwork#ipv6_range_start}
  */
  readonly ipv6RangeStart?: string;
  /**
  * IPv6 Network Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_network#ipv6_subnet ObjectNetwork#ipv6_subnet}
  */
  readonly ipv6Subnet?: string;
  /**
  * Network Object Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_network#net_name ObjectNetwork#net_name}
  */
  readonly netName: string;
  /**
  * IPv4 Network Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_network#subnet ObjectNetwork#subnet}
  */
  readonly subnet?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_network#user_tag ObjectNetwork#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_network#uuid ObjectNetwork#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_network thunder_object_network}
*/
export class ObjectNetwork extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_object_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectNetwork resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectNetwork to import
  * @param importFromId The id of the existing ObjectNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectNetwork to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_object_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_network thunder_object_network} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectNetworkConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_object_network',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._ipRangeEnd = config.ipRangeEnd;
    this._ipRangeStart = config.ipRangeStart;
    this._ipv6RangeEnd = config.ipv6RangeEnd;
    this._ipv6RangeStart = config.ipv6RangeStart;
    this._ipv6Subnet = config.ipv6Subnet;
    this._netName = config.netName;
    this._subnet = config.subnet;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // ip_range_end - computed: false, optional: true, required: false
  private _ipRangeEnd?: string; 
  public get ipRangeEnd() {
    return this.getStringAttribute('ip_range_end');
  }
  public set ipRangeEnd(value: string) {
    this._ipRangeEnd = value;
  }
  public resetIpRangeEnd() {
    this._ipRangeEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangeEndInput() {
    return this._ipRangeEnd;
  }

  // ip_range_start - computed: false, optional: true, required: false
  private _ipRangeStart?: string; 
  public get ipRangeStart() {
    return this.getStringAttribute('ip_range_start');
  }
  public set ipRangeStart(value: string) {
    this._ipRangeStart = value;
  }
  public resetIpRangeStart() {
    this._ipRangeStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangeStartInput() {
    return this._ipRangeStart;
  }

  // ipv6_range_end - computed: false, optional: true, required: false
  private _ipv6RangeEnd?: string; 
  public get ipv6RangeEnd() {
    return this.getStringAttribute('ipv6_range_end');
  }
  public set ipv6RangeEnd(value: string) {
    this._ipv6RangeEnd = value;
  }
  public resetIpv6RangeEnd() {
    this._ipv6RangeEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6RangeEndInput() {
    return this._ipv6RangeEnd;
  }

  // ipv6_range_start - computed: false, optional: true, required: false
  private _ipv6RangeStart?: string; 
  public get ipv6RangeStart() {
    return this.getStringAttribute('ipv6_range_start');
  }
  public set ipv6RangeStart(value: string) {
    this._ipv6RangeStart = value;
  }
  public resetIpv6RangeStart() {
    this._ipv6RangeStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6RangeStartInput() {
    return this._ipv6RangeStart;
  }

  // ipv6_subnet - computed: false, optional: true, required: false
  private _ipv6Subnet?: string; 
  public get ipv6Subnet() {
    return this.getStringAttribute('ipv6_subnet');
  }
  public set ipv6Subnet(value: string) {
    this._ipv6Subnet = value;
  }
  public resetIpv6Subnet() {
    this._ipv6Subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6SubnetInput() {
    return this._ipv6Subnet;
  }

  // net_name - computed: false, optional: false, required: true
  private _netName?: string; 
  public get netName() {
    return this.getStringAttribute('net_name');
  }
  public set netName(value: string) {
    this._netName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get netNameInput() {
    return this._netName;
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  public resetSubnet() {
    this._subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
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
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      ip_range_end: cdktf.stringToTerraform(this._ipRangeEnd),
      ip_range_start: cdktf.stringToTerraform(this._ipRangeStart),
      ipv6_range_end: cdktf.stringToTerraform(this._ipv6RangeEnd),
      ipv6_range_start: cdktf.stringToTerraform(this._ipv6RangeStart),
      ipv6_subnet: cdktf.stringToTerraform(this._ipv6Subnet),
      net_name: cdktf.stringToTerraform(this._netName),
      subnet: cdktf.stringToTerraform(this._subnet),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      ip_range_end: {
        value: cdktf.stringToHclTerraform(this._ipRangeEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_range_start: {
        value: cdktf.stringToHclTerraform(this._ipRangeStart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_range_end: {
        value: cdktf.stringToHclTerraform(this._ipv6RangeEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_range_start: {
        value: cdktf.stringToHclTerraform(this._ipv6RangeStart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_subnet: {
        value: cdktf.stringToHclTerraform(this._ipv6Subnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      net_name: {
        value: cdktf.stringToHclTerraform(this._netName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet: {
        value: cdktf.stringToHclTerraform(this._subnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
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
