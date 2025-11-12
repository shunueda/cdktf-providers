// https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/dnsview
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsviewConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/dnsview#id Dnsview#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/dnsview#name Dnsview#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/dnsview#networks Dnsview#networks}
  */
  readonly networks?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/dnsview#preference Dnsview#preference}
  */
  readonly preference?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/dnsview#read_acls Dnsview#read_acls}
  */
  readonly readAcls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/dnsview#update_acls Dnsview#update_acls}
  */
  readonly updateAcls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/dnsview#zones Dnsview#zones}
  */
  readonly zones?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/dnsview ns1_dnsview}
*/
export class Dnsview extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ns1_dnsview";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Dnsview resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Dnsview to import
  * @param importFromId The id of the existing Dnsview that should be imported. Refer to the {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/dnsview#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Dnsview to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ns1_dnsview", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/dnsview ns1_dnsview} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsviewConfig
  */
  public constructor(scope: Construct, id: string, config: DnsviewConfig) {
    super(scope, id, {
      terraformResourceType: 'ns1_dnsview',
      terraformGeneratorMetadata: {
        providerName: 'ns1',
        providerVersion: '2.7.2',
        providerVersionConstraint: '2.7.2'
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
    this._networks = config.networks;
    this._preference = config.preference;
    this._readAcls = config.readAcls;
    this._updateAcls = config.updateAcls;
    this._zones = config.zones;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getNumberAttribute('created_at');
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

  // networks - computed: false, optional: true, required: false
  private _networks?: number[]; 
  public get networks() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('networks')));
  }
  public set networks(value: number[]) {
    this._networks = value;
  }
  public resetNetworks() {
    this._networks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks;
  }

  // preference - computed: true, optional: true, required: false
  private _preference?: number; 
  public get preference() {
    return this.getNumberAttribute('preference');
  }
  public set preference(value: number) {
    this._preference = value;
  }
  public resetPreference() {
    this._preference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferenceInput() {
    return this._preference;
  }

  // read_acls - computed: false, optional: true, required: false
  private _readAcls?: string[]; 
  public get readAcls() {
    return this.getListAttribute('read_acls');
  }
  public set readAcls(value: string[]) {
    this._readAcls = value;
  }
  public resetReadAcls() {
    this._readAcls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readAclsInput() {
    return this._readAcls;
  }

  // update_acls - computed: false, optional: true, required: false
  private _updateAcls?: string[]; 
  public get updateAcls() {
    return this.getListAttribute('update_acls');
  }
  public set updateAcls(value: string[]) {
    this._updateAcls = value;
  }
  public resetUpdateAcls() {
    this._updateAcls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateAclsInput() {
    return this._updateAcls;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getNumberAttribute('updated_at');
  }

  // zones - computed: false, optional: true, required: false
  private _zones?: string[]; 
  public get zones() {
    return cdktf.Fn.tolist(this.getListAttribute('zones'));
  }
  public set zones(value: string[]) {
    this._zones = value;
  }
  public resetZones() {
    this._zones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      networks: cdktf.listMapper(cdktf.numberToTerraform, false)(this._networks),
      preference: cdktf.numberToTerraform(this._preference),
      read_acls: cdktf.listMapper(cdktf.stringToTerraform, false)(this._readAcls),
      update_acls: cdktf.listMapper(cdktf.stringToTerraform, false)(this._updateAcls),
      zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._zones),
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
      networks: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._networks),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      preference: {
        value: cdktf.numberToHclTerraform(this._preference),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      read_acls: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._readAcls),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      update_acls: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._updateAcls),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      zones: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._zones),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
