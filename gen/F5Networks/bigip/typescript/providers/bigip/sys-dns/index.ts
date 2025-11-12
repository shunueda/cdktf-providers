// https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_dns
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SysDnsConfig extends cdktf.TerraformMetaArguments {
  /**
  * User defined description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_dns#description SysDns#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_dns#id SysDns#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the name servers that the system uses to validate DNS lookups, and resolve host names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_dns#name_servers SysDns#name_servers}
  */
  readonly nameServers: string[];
  /**
  * how many DNS Servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_dns#number_of_dots SysDns#number_of_dots}
  */
  readonly numberOfDots?: number;
  /**
  * Specifies the domains that the system searches for local domain lookups, to resolve local host names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_dns#search SysDns#search}
  */
  readonly search?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_dns bigip_sys_dns}
*/
export class SysDns extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigip_sys_dns";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SysDns resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SysDns to import
  * @param importFromId The id of the existing SysDns that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_dns#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SysDns to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigip_sys_dns", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_dns bigip_sys_dns} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SysDnsConfig
  */
  public constructor(scope: Construct, id: string, config: SysDnsConfig) {
    super(scope, id, {
      terraformResourceType: 'bigip_sys_dns',
      terraformGeneratorMetadata: {
        providerName: 'bigip',
        providerVersion: '1.24.1',
        providerVersionConstraint: '1.24.1'
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
    this._nameServers = config.nameServers;
    this._numberOfDots = config.numberOfDots;
    this._search = config.search;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
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

  // name_servers - computed: false, optional: false, required: true
  private _nameServers?: string[]; 
  public get nameServers() {
    return this.getListAttribute('name_servers');
  }
  public set nameServers(value: string[]) {
    this._nameServers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameServersInput() {
    return this._nameServers;
  }

  // number_of_dots - computed: true, optional: true, required: false
  private _numberOfDots?: number; 
  public get numberOfDots() {
    return this.getNumberAttribute('number_of_dots');
  }
  public set numberOfDots(value: number) {
    this._numberOfDots = value;
  }
  public resetNumberOfDots() {
    this._numberOfDots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfDotsInput() {
    return this._numberOfDots;
  }

  // search - computed: false, optional: true, required: false
  private _search?: string[]; 
  public get search() {
    return this.getListAttribute('search');
  }
  public set search(value: string[]) {
    this._search = value;
  }
  public resetSearch() {
    this._search = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nameServers),
      number_of_dots: cdktf.numberToTerraform(this._numberOfDots),
      search: cdktf.listMapper(cdktf.stringToTerraform, false)(this._search),
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
      name_servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nameServers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      number_of_dots: {
        value: cdktf.numberToHclTerraform(this._numberOfDots),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      search: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._search),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
