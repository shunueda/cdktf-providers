// https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/ip6_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ip6PoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * The class associated to the IPv6 pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/ip6_pool#class Ip6Pool#class}
  */
  readonly class?: string;
  /**
  * The class parameters associated to the IPv6 pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/ip6_pool#class_parameters Ip6Pool#class_parameters}
  */
  readonly classParameters?: { [key: string]: string };
  /**
  * Specify wether to create the equivalent DHCP v6 range, or not (Default: false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/ip6_pool#dhcp_range Ip6Pool#dhcp_range}
  */
  readonly dhcpRange?: boolean | cdktf.IResolvable;
  /**
  * The IPv6 pool's higher IPv6 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/ip6_pool#end Ip6Pool#end}
  */
  readonly end: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/ip6_pool#id Ip6Pool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the IPv6 pool to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/ip6_pool#name Ip6Pool#name}
  */
  readonly name: string;
  /**
  * The name of the space into which creating the IPv6 pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/ip6_pool#space Ip6Pool#space}
  */
  readonly space: string;
  /**
  * The IPv6 pool's lower IPv6 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/ip6_pool#start Ip6Pool#start}
  */
  readonly start: string;
  /**
  * The name of the parent IP subnet into which creating the IPv6 pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/ip6_pool#subnet Ip6Pool#subnet}
  */
  readonly subnet: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/ip6_pool solidserver_ip6_pool}
*/
export class Ip6Pool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solidserver_ip6_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ip6Pool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ip6Pool to import
  * @param importFromId The id of the existing Ip6Pool that should be imported. Refer to the {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/ip6_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ip6Pool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solidserver_ip6_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/ip6_pool solidserver_ip6_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ip6PoolConfig
  */
  public constructor(scope: Construct, id: string, config: Ip6PoolConfig) {
    super(scope, id, {
      terraformResourceType: 'solidserver_ip6_pool',
      terraformGeneratorMetadata: {
        providerName: 'solidserver',
        providerVersion: '1.1.25'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._class = config.class;
    this._classParameters = config.classParameters;
    this._dhcpRange = config.dhcpRange;
    this._end = config.end;
    this._id = config.id;
    this._name = config.name;
    this._space = config.space;
    this._start = config.start;
    this._subnet = config.subnet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // class - computed: false, optional: true, required: false
  private _class?: string; 
  public get class() {
    return this.getStringAttribute('class');
  }
  public set class(value: string) {
    this._class = value;
  }
  public resetClass() {
    this._class = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classInput() {
    return this._class;
  }

  // class_parameters - computed: false, optional: true, required: false
  private _classParameters?: { [key: string]: string }; 
  public get classParameters() {
    return this.getStringMapAttribute('class_parameters');
  }
  public set classParameters(value: { [key: string]: string }) {
    this._classParameters = value;
  }
  public resetClassParameters() {
    this._classParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classParametersInput() {
    return this._classParameters;
  }

  // dhcp_range - computed: false, optional: true, required: false
  private _dhcpRange?: boolean | cdktf.IResolvable; 
  public get dhcpRange() {
    return this.getBooleanAttribute('dhcp_range');
  }
  public set dhcpRange(value: boolean | cdktf.IResolvable) {
    this._dhcpRange = value;
  }
  public resetDhcpRange() {
    this._dhcpRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpRangeInput() {
    return this._dhcpRange;
  }

  // end - computed: false, optional: false, required: true
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
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

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // prefix_size - computed: true, optional: false, required: false
  public get prefixSize() {
    return this.getNumberAttribute('prefix_size');
  }

  // space - computed: false, optional: false, required: true
  private _space?: string; 
  public get space() {
    return this.getStringAttribute('space');
  }
  public set space(value: string) {
    this._space = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceInput() {
    return this._space;
  }

  // start - computed: false, optional: false, required: true
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }

  // subnet - computed: false, optional: false, required: true
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      class: cdktf.stringToTerraform(this._class),
      class_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(this._classParameters),
      dhcp_range: cdktf.booleanToTerraform(this._dhcpRange),
      end: cdktf.stringToTerraform(this._end),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      space: cdktf.stringToTerraform(this._space),
      start: cdktf.stringToTerraform(this._start),
      subnet: cdktf.stringToTerraform(this._subnet),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      class: {
        value: cdktf.stringToHclTerraform(this._class),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      class_parameters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._classParameters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      dhcp_range: {
        value: cdktf.booleanToHclTerraform(this._dhcpRange),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      end: {
        value: cdktf.stringToHclTerraform(this._end),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      space: {
        value: cdktf.stringToHclTerraform(this._space),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start: {
        value: cdktf.stringToHclTerraform(this._start),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
