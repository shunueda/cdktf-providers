// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vpc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of Assistant CIDR, NOTE: Only `NORMAL` typed CIDRs included, check the Docker CIDR by readonly `assistant_docker_cidrs`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vpc#assistant_cidrs Vpc#assistant_cidrs}
  */
  readonly assistantCidrs?: string[];
  /**
  * A network address block which should be a subnet of the three internal network segments (10.0.0.0/16, 172.16.0.0/12 and 192.168.0.0/16).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vpc#cidr_block Vpc#cidr_block}
  */
  readonly cidrBlock: string;
  /**
  * The DNS server list of the VPC. And you can specify 0 to 5 servers to this list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vpc#dns_servers Vpc#dns_servers}
  */
  readonly dnsServers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vpc#id Vpc#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Indicates whether VPC multicast is enabled. The default value is 'true'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vpc#is_multicast Vpc#is_multicast}
  */
  readonly isMulticast?: boolean | cdktf.IResolvable;
  /**
  * The name of the VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vpc#name Vpc#name}
  */
  readonly name: string;
  /**
  * Tags of the VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vpc#tags Vpc#tags}
  */
  readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vpc tencentcloud_vpc}
*/
export class Vpc extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_vpc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Vpc resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Vpc to import
  * @param importFromId The id of the existing Vpc that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vpc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Vpc to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_vpc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/vpc tencentcloud_vpc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcConfig
  */
  public constructor(scope: Construct, id: string, config: VpcConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_vpc',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._assistantCidrs = config.assistantCidrs;
    this._cidrBlock = config.cidrBlock;
    this._dnsServers = config.dnsServers;
    this._id = config.id;
    this._isMulticast = config.isMulticast;
    this._name = config.name;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assistant_cidrs - computed: true, optional: true, required: false
  private _assistantCidrs?: string[]; 
  public get assistantCidrs() {
    return cdktf.Fn.tolist(this.getListAttribute('assistant_cidrs'));
  }
  public set assistantCidrs(value: string[]) {
    this._assistantCidrs = value;
  }
  public resetAssistantCidrs() {
    this._assistantCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assistantCidrsInput() {
    return this._assistantCidrs;
  }

  // cidr_block - computed: false, optional: false, required: true
  private _cidrBlock?: string; 
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }
  public set cidrBlock(value: string) {
    this._cidrBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlockInput() {
    return this._cidrBlock;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // default_route_table_id - computed: true, optional: false, required: false
  public get defaultRouteTableId() {
    return this.getStringAttribute('default_route_table_id');
  }

  // dns_servers - computed: true, optional: true, required: false
  private _dnsServers?: string[]; 
  public get dnsServers() {
    return cdktf.Fn.tolist(this.getListAttribute('dns_servers'));
  }
  public set dnsServers(value: string[]) {
    this._dnsServers = value;
  }
  public resetDnsServers() {
    this._dnsServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServersInput() {
    return this._dnsServers;
  }

  // docker_assistant_cidrs - computed: true, optional: false, required: false
  public get dockerAssistantCidrs() {
    return this.getListAttribute('docker_assistant_cidrs');
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

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }

  // is_multicast - computed: false, optional: true, required: false
  private _isMulticast?: boolean | cdktf.IResolvable; 
  public get isMulticast() {
    return this.getBooleanAttribute('is_multicast');
  }
  public set isMulticast(value: boolean | cdktf.IResolvable) {
    this._isMulticast = value;
  }
  public resetIsMulticast() {
    this._isMulticast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMulticastInput() {
    return this._isMulticast;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      assistant_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._assistantCidrs),
      cidr_block: cdktf.stringToTerraform(this._cidrBlock),
      dns_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsServers),
      id: cdktf.stringToTerraform(this._id),
      is_multicast: cdktf.booleanToTerraform(this._isMulticast),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assistant_cidrs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._assistantCidrs),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      cidr_block: {
        value: cdktf.stringToHclTerraform(this._cidrBlock),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsServers),
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
      is_multicast: {
        value: cdktf.booleanToHclTerraform(this._isMulticast),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
