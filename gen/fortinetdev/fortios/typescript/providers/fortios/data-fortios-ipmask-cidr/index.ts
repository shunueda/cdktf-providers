// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/ipmask_cidr
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortiosIpmaskCidrConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/ipmask_cidr#id DataFortiosIpmaskCidr#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/ipmask_cidr#ipmask DataFortiosIpmaskCidr#ipmask}
  */
  readonly ipmask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/ipmask_cidr#ipmasklist DataFortiosIpmaskCidr#ipmasklist}
  */
  readonly ipmasklist?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/ipmask_cidr fortios_ipmask_cidr}
*/
export class DataFortiosIpmaskCidr extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_ipmask_cidr";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortiosIpmaskCidr resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortiosIpmaskCidr to import
  * @param importFromId The id of the existing DataFortiosIpmaskCidr that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/ipmask_cidr#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortiosIpmaskCidr to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_ipmask_cidr", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/ipmask_cidr fortios_ipmask_cidr} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortiosIpmaskCidrConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataFortiosIpmaskCidrConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_ipmask_cidr',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
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
    this._ipmask = config.ipmask;
    this._ipmasklist = config.ipmasklist;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cidr - computed: true, optional: false, required: false
  public get cidr() {
    return this.getStringAttribute('cidr');
  }

  // cidrlist - computed: true, optional: false, required: false
  public get cidrlist() {
    return this.getListAttribute('cidrlist');
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

  // ipmask - computed: false, optional: true, required: false
  private _ipmask?: string; 
  public get ipmask() {
    return this.getStringAttribute('ipmask');
  }
  public set ipmask(value: string) {
    this._ipmask = value;
  }
  public resetIpmask() {
    this._ipmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipmaskInput() {
    return this._ipmask;
  }

  // ipmasklist - computed: false, optional: true, required: false
  private _ipmasklist?: string[]; 
  public get ipmasklist() {
    return this.getListAttribute('ipmasklist');
  }
  public set ipmasklist(value: string[]) {
    this._ipmasklist = value;
  }
  public resetIpmasklist() {
    this._ipmasklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipmasklistInput() {
    return this._ipmasklist;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ipmask: cdktf.stringToTerraform(this._ipmask),
      ipmasklist: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipmasklist),
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
      ipmask: {
        value: cdktf.stringToHclTerraform(this._ipmask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipmasklist: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipmasklist),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
