// https://registry.terraform.io/providers/glesys/glesys/0.16.0/docs/resources/loadbalancer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoadbalancerConfig extends cdktf.TerraformMetaArguments {
  /**
  * **DEPRECATED** Use blocklist instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.16.0/docs/resources/loadbalancer#blacklist Loadbalancer#blacklist}
  */
  readonly blacklist?: string[];
  /**
  * LoadBalancer blocklist. List of IPs: `["a.b.c.d","x.y.z.w"]`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.16.0/docs/resources/loadbalancer#blocklist Loadbalancer#blocklist}
  */
  readonly blocklist?: string[];
  /**
  * LoadBalancer datacenter. `Falkenberg`, `Stockholm`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.16.0/docs/resources/loadbalancer#datacenter Loadbalancer#datacenter}
  */
  readonly datacenter: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.16.0/docs/resources/loadbalancer#id Loadbalancer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * LoadBalancer name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.16.0/docs/resources/loadbalancer#name Loadbalancer#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/glesys/glesys/0.16.0/docs/resources/loadbalancer glesys_loadbalancer}
*/
export class Loadbalancer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "glesys_loadbalancer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Loadbalancer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Loadbalancer to import
  * @param importFromId The id of the existing Loadbalancer that should be imported. Refer to the {@link https://registry.terraform.io/providers/glesys/glesys/0.16.0/docs/resources/loadbalancer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Loadbalancer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "glesys_loadbalancer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/glesys/glesys/0.16.0/docs/resources/loadbalancer glesys_loadbalancer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoadbalancerConfig
  */
  public constructor(scope: Construct, id: string, config: LoadbalancerConfig) {
    super(scope, id, {
      terraformResourceType: 'glesys_loadbalancer',
      terraformGeneratorMetadata: {
        providerName: 'glesys',
        providerVersion: '0.16.0',
        providerVersionConstraint: '0.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._blacklist = config.blacklist;
    this._blocklist = config.blocklist;
    this._datacenter = config.datacenter;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blacklist - computed: false, optional: true, required: false
  private _blacklist?: string[]; 
  public get blacklist() {
    return this.getListAttribute('blacklist');
  }
  public set blacklist(value: string[]) {
    this._blacklist = value;
  }
  public resetBlacklist() {
    this._blacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blacklistInput() {
    return this._blacklist;
  }

  // blocklist - computed: false, optional: true, required: false
  private _blocklist?: string[]; 
  public get blocklist() {
    return this.getListAttribute('blocklist');
  }
  public set blocklist(value: string[]) {
    this._blocklist = value;
  }
  public resetBlocklist() {
    this._blocklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blocklistInput() {
    return this._blocklist;
  }

  // datacenter - computed: false, optional: false, required: true
  private _datacenter?: string; 
  public get datacenter() {
    return this.getStringAttribute('datacenter');
  }
  public set datacenter(value: string) {
    this._datacenter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterInput() {
    return this._datacenter;
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

  // iplist - computed: true, optional: false, required: false
  public get iplist() {
    return this.getListAttribute('iplist');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      blacklist: cdktf.listMapper(cdktf.stringToTerraform, false)(this._blacklist),
      blocklist: cdktf.listMapper(cdktf.stringToTerraform, false)(this._blocklist),
      datacenter: cdktf.stringToTerraform(this._datacenter),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      blacklist: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._blacklist),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      blocklist: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._blocklist),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      datacenter: {
        value: cdktf.stringToHclTerraform(this._datacenter),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
