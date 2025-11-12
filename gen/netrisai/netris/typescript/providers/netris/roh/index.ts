// https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/roh
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RohConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of anycast IP addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/roh#anycastips Roh#anycastips}
  */
  readonly anycastips: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/roh#id Roh#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List of additional prefixes that the ROH server may advertise. Only when type == `hypervisor`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/roh#inboundprefixlist Roh#inboundprefixlist}
  */
  readonly inboundprefixlist?: string[];
  /**
  * Instance name. If type == `hypervisor` the name must be the same as the hypervisor's hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/roh#name Roh#name}
  */
  readonly name: string;
  /**
  * List of physical switch ports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/roh#ports Roh#ports}
  */
  readonly ports: string[];
  /**
  * Possible values: `inherit`, `default`, `default_agg`, `full_table`. Default value is `inherit`. Detailed documentation about routing profiles is available [here](https://www.netris.ai/docs/en/stable/roh.html#adding-roh-hosts)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/roh#routingprofile Roh#routingprofile}
  */
  readonly routingprofile?: string;
  /**
  * The site ID where the current ROH instance belongs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/roh#siteid Roh#siteid}
  */
  readonly siteid: number;
  /**
  * ID of tenant. Users of this tenant will be permitted to manage instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/roh#tenantid Roh#tenantid}
  */
  readonly tenantid: number;
  /**
  * Possible values: `physical` or `hypervisor` Physical Server, for all servers forming a BGP adjacency directly with the switch fabric. Hypervisor, for using the hypervisor as an interim router. Proxmox is currently the only supported hypervisor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/roh#type Roh#type}
  */
  readonly type: string;
  /**
  * List of IPv4 addresses for the loopback interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/roh#unicastips Roh#unicastips}
  */
  readonly unicastips: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/roh netris_roh}
*/
export class Roh extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netris_roh";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Roh resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Roh to import
  * @param importFromId The id of the existing Roh that should be imported. Refer to the {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/roh#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Roh to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netris_roh", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/roh netris_roh} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RohConfig
  */
  public constructor(scope: Construct, id: string, config: RohConfig) {
    super(scope, id, {
      terraformResourceType: 'netris_roh',
      terraformGeneratorMetadata: {
        providerName: 'netris',
        providerVersion: '3.6.6',
        providerVersionConstraint: '3.6.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._anycastips = config.anycastips;
    this._id = config.id;
    this._inboundprefixlist = config.inboundprefixlist;
    this._name = config.name;
    this._ports = config.ports;
    this._routingprofile = config.routingprofile;
    this._siteid = config.siteid;
    this._tenantid = config.tenantid;
    this._type = config.type;
    this._unicastips = config.unicastips;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // anycastips - computed: false, optional: false, required: true
  private _anycastips?: string[]; 
  public get anycastips() {
    return this.getListAttribute('anycastips');
  }
  public set anycastips(value: string[]) {
    this._anycastips = value;
  }
  // Temporarily expose input value. Use with caution.
  public get anycastipsInput() {
    return this._anycastips;
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

  // inboundprefixlist - computed: false, optional: true, required: false
  private _inboundprefixlist?: string[]; 
  public get inboundprefixlist() {
    return this.getListAttribute('inboundprefixlist');
  }
  public set inboundprefixlist(value: string[]) {
    this._inboundprefixlist = value;
  }
  public resetInboundprefixlist() {
    this._inboundprefixlist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundprefixlistInput() {
    return this._inboundprefixlist;
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

  // ports - computed: false, optional: false, required: true
  private _ports?: string[]; 
  public get ports() {
    return cdktf.Fn.tolist(this.getListAttribute('ports'));
  }
  public set ports(value: string[]) {
    this._ports = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // routingprofile - computed: false, optional: true, required: false
  private _routingprofile?: string; 
  public get routingprofile() {
    return this.getStringAttribute('routingprofile');
  }
  public set routingprofile(value: string) {
    this._routingprofile = value;
  }
  public resetRoutingprofile() {
    this._routingprofile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingprofileInput() {
    return this._routingprofile;
  }

  // siteid - computed: false, optional: false, required: true
  private _siteid?: number; 
  public get siteid() {
    return this.getNumberAttribute('siteid');
  }
  public set siteid(value: number) {
    this._siteid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteidInput() {
    return this._siteid;
  }

  // tenantid - computed: false, optional: false, required: true
  private _tenantid?: number; 
  public get tenantid() {
    return this.getNumberAttribute('tenantid');
  }
  public set tenantid(value: number) {
    this._tenantid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantidInput() {
    return this._tenantid;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unicastips - computed: false, optional: false, required: true
  private _unicastips?: string[]; 
  public get unicastips() {
    return this.getListAttribute('unicastips');
  }
  public set unicastips(value: string[]) {
    this._unicastips = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unicastipsInput() {
    return this._unicastips;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      anycastips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._anycastips),
      id: cdktf.stringToTerraform(this._id),
      inboundprefixlist: cdktf.listMapper(cdktf.stringToTerraform, false)(this._inboundprefixlist),
      name: cdktf.stringToTerraform(this._name),
      ports: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ports),
      routingprofile: cdktf.stringToTerraform(this._routingprofile),
      siteid: cdktf.numberToTerraform(this._siteid),
      tenantid: cdktf.numberToTerraform(this._tenantid),
      type: cdktf.stringToTerraform(this._type),
      unicastips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._unicastips),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      anycastips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._anycastips),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inboundprefixlist: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._inboundprefixlist),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ports: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ports),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      routingprofile: {
        value: cdktf.stringToHclTerraform(this._routingprofile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      siteid: {
        value: cdktf.numberToHclTerraform(this._siteid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tenantid: {
        value: cdktf.numberToHclTerraform(this._tenantid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unicastips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._unicastips),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
