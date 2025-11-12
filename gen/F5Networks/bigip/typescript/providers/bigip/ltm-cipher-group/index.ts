// https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_cipher_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LtmCipherGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the configuration of the allowed groups of ciphers. You can select a cipher rule from the Available Cipher Rules list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_cipher_group#allow LtmCipherGroup#allow}
  */
  readonly allow?: string[];
  /**
  * Specifies descriptive text that identifies the cipher rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_cipher_group#description LtmCipherGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_cipher_group#id LtmCipherGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the cipher group,name should be in pattern ``partition` + `cipher group name``
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_cipher_group#name LtmCipherGroup#name}
  */
  readonly name: string;
  /**
  * Controls the order of the Cipher String list in the Cipher Audit section. Options are Default, Speed, Strength, FIPS, and Hardware. The rules are processed in the order listed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_cipher_group#ordering LtmCipherGroup#ordering}
  */
  readonly ordering?: string;
  /**
  * Specifies the configuration of the restrict groups of ciphers. You can select a cipher rule from the Available Cipher Rules list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_cipher_group#require LtmCipherGroup#require}
  */
  readonly require?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_cipher_group bigip_ltm_cipher_group}
*/
export class LtmCipherGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigip_ltm_cipher_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LtmCipherGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LtmCipherGroup to import
  * @param importFromId The id of the existing LtmCipherGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_cipher_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LtmCipherGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigip_ltm_cipher_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_cipher_group bigip_ltm_cipher_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LtmCipherGroupConfig
  */
  public constructor(scope: Construct, id: string, config: LtmCipherGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'bigip_ltm_cipher_group',
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
    this._allow = config.allow;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._ordering = config.ordering;
    this._require = config.require;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow - computed: false, optional: true, required: false
  private _allow?: string[]; 
  public get allow() {
    return cdktf.Fn.tolist(this.getListAttribute('allow'));
  }
  public set allow(value: string[]) {
    this._allow = value;
  }
  public resetAllow() {
    this._allow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow;
  }

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

  // ordering - computed: false, optional: true, required: false
  private _ordering?: string; 
  public get ordering() {
    return this.getStringAttribute('ordering');
  }
  public set ordering(value: string) {
    this._ordering = value;
  }
  public resetOrdering() {
    this._ordering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderingInput() {
    return this._ordering;
  }

  // require - computed: false, optional: true, required: false
  private _require?: string[]; 
  public get require() {
    return cdktf.Fn.tolist(this.getListAttribute('require'));
  }
  public set require(value: string[]) {
    this._require = value;
  }
  public resetRequire() {
    this._require = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireInput() {
    return this._require;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allow),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      ordering: cdktf.stringToTerraform(this._ordering),
      require: cdktf.listMapper(cdktf.stringToTerraform, false)(this._require),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allow),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ordering: {
        value: cdktf.stringToHclTerraform(this._ordering),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      require: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._require),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
