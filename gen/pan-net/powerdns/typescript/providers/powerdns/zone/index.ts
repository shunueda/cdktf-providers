// https://registry.terraform.io/providers/pan-net/powerdns/1.5.0/docs/resources/zone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pan-net/powerdns/1.5.0/docs/resources/zone#account Zone#account}
  */
  readonly account?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pan-net/powerdns/1.5.0/docs/resources/zone#id Zone#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pan-net/powerdns/1.5.0/docs/resources/zone#kind Zone#kind}
  */
  readonly kind: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pan-net/powerdns/1.5.0/docs/resources/zone#masters Zone#masters}
  */
  readonly masters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pan-net/powerdns/1.5.0/docs/resources/zone#name Zone#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pan-net/powerdns/1.5.0/docs/resources/zone#nameservers Zone#nameservers}
  */
  readonly nameservers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pan-net/powerdns/1.5.0/docs/resources/zone#soa_edit_api Zone#soa_edit_api}
  */
  readonly soaEditApi?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pan-net/powerdns/1.5.0/docs/resources/zone powerdns_zone}
*/
export class Zone extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerdns_zone";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Zone resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Zone to import
  * @param importFromId The id of the existing Zone that should be imported. Refer to the {@link https://registry.terraform.io/providers/pan-net/powerdns/1.5.0/docs/resources/zone#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Zone to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerdns_zone", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pan-net/powerdns/1.5.0/docs/resources/zone powerdns_zone} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZoneConfig
  */
  public constructor(scope: Construct, id: string, config: ZoneConfig) {
    super(scope, id, {
      terraformResourceType: 'powerdns_zone',
      terraformGeneratorMetadata: {
        providerName: 'powerdns',
        providerVersion: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._account = config.account;
    this._id = config.id;
    this._kind = config.kind;
    this._masters = config.masters;
    this._name = config.name;
    this._nameservers = config.nameservers;
    this._soaEditApi = config.soaEditApi;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account - computed: false, optional: true, required: false
  private _account?: string; 
  public get account() {
    return this.getStringAttribute('account');
  }
  public set account(value: string) {
    this._account = value;
  }
  public resetAccount() {
    this._account = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
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

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // masters - computed: false, optional: true, required: false
  private _masters?: string[]; 
  public get masters() {
    return cdktf.Fn.tolist(this.getListAttribute('masters'));
  }
  public set masters(value: string[]) {
    this._masters = value;
  }
  public resetMasters() {
    this._masters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mastersInput() {
    return this._masters;
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

  // nameservers - computed: false, optional: true, required: false
  private _nameservers?: string[]; 
  public get nameservers() {
    return cdktf.Fn.tolist(this.getListAttribute('nameservers'));
  }
  public set nameservers(value: string[]) {
    this._nameservers = value;
  }
  public resetNameservers() {
    this._nameservers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameserversInput() {
    return this._nameservers;
  }

  // soa_edit_api - computed: false, optional: true, required: false
  private _soaEditApi?: string; 
  public get soaEditApi() {
    return this.getStringAttribute('soa_edit_api');
  }
  public set soaEditApi(value: string) {
    this._soaEditApi = value;
  }
  public resetSoaEditApi() {
    this._soaEditApi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soaEditApiInput() {
    return this._soaEditApi;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account: cdktf.stringToTerraform(this._account),
      id: cdktf.stringToTerraform(this._id),
      kind: cdktf.stringToTerraform(this._kind),
      masters: cdktf.listMapper(cdktf.stringToTerraform, false)(this._masters),
      name: cdktf.stringToTerraform(this._name),
      nameservers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nameservers),
      soa_edit_api: cdktf.stringToTerraform(this._soaEditApi),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account: {
        value: cdktf.stringToHclTerraform(this._account),
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
      kind: {
        value: cdktf.stringToHclTerraform(this._kind),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      masters: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._masters),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nameservers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nameservers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      soa_edit_api: {
        value: cdktf.stringToHclTerraform(this._soaEditApi),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
