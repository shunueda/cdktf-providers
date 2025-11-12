// https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/servercluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServerclusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of Admin tenant. Users of this tenant will be permitted to edit this unit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/servercluster#adminid Servercluster#adminid}
  */
  readonly adminid: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/servercluster#id Servercluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * User assigned name of ServerCluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/servercluster#name Servercluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/servercluster#servers Servercluster#servers}
  */
  readonly servers: number[];
  /**
  * The site ID where this ServerCluster belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/servercluster#siteid Servercluster#siteid}
  */
  readonly siteid: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/servercluster#tags Servercluster#tags}
  */
  readonly tags?: string[];
  /**
  * ID of Server Cluster Template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/servercluster#templateid Servercluster#templateid}
  */
  readonly templateid: number;
  /**
  * ID of VPC. If not specified, a new VPC will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/servercluster#vpcid Servercluster#vpcid}
  */
  readonly vpcid?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/servercluster netris_servercluster}
*/
export class Servercluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netris_servercluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Servercluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Servercluster to import
  * @param importFromId The id of the existing Servercluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/servercluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Servercluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netris_servercluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/servercluster netris_servercluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServerclusterConfig
  */
  public constructor(scope: Construct, id: string, config: ServerclusterConfig) {
    super(scope, id, {
      terraformResourceType: 'netris_servercluster',
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
    this._adminid = config.adminid;
    this._id = config.id;
    this._name = config.name;
    this._servers = config.servers;
    this._siteid = config.siteid;
    this._tags = config.tags;
    this._templateid = config.templateid;
    this._vpcid = config.vpcid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adminid - computed: false, optional: false, required: true
  private _adminid?: number; 
  public get adminid() {
    return this.getNumberAttribute('adminid');
  }
  public set adminid(value: number) {
    this._adminid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminidInput() {
    return this._adminid;
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

  // servers - computed: false, optional: false, required: true
  private _servers?: number[]; 
  public get servers() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('servers')));
  }
  public set servers(value: number[]) {
    this._servers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serversInput() {
    return this._servers;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // templateid - computed: false, optional: false, required: true
  private _templateid?: number; 
  public get templateid() {
    return this.getNumberAttribute('templateid');
  }
  public set templateid(value: number) {
    this._templateid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateidInput() {
    return this._templateid;
  }

  // vpcid - computed: true, optional: true, required: false
  private _vpcid?: number; 
  public get vpcid() {
    return this.getNumberAttribute('vpcid');
  }
  public set vpcid(value: number) {
    this._vpcid = value;
  }
  public resetVpcid() {
    this._vpcid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcidInput() {
    return this._vpcid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adminid: cdktf.numberToTerraform(this._adminid),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      servers: cdktf.listMapper(cdktf.numberToTerraform, false)(this._servers),
      siteid: cdktf.numberToTerraform(this._siteid),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      templateid: cdktf.numberToTerraform(this._templateid),
      vpcid: cdktf.numberToTerraform(this._vpcid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adminid: {
        value: cdktf.numberToHclTerraform(this._adminid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      servers: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._servers),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      siteid: {
        value: cdktf.numberToHclTerraform(this._siteid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      templateid: {
        value: cdktf.numberToHclTerraform(this._templateid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vpcid: {
        value: cdktf.numberToHclTerraform(this._vpcid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
