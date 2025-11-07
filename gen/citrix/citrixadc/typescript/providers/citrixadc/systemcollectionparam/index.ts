// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/systemcollectionparam
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemcollectionparamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/systemcollectionparam#communityname Systemcollectionparam#communityname}
  */
  readonly communityname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/systemcollectionparam#datapath Systemcollectionparam#datapath}
  */
  readonly datapath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/systemcollectionparam#id Systemcollectionparam#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/systemcollectionparam#loglevel Systemcollectionparam#loglevel}
  */
  readonly loglevel?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/systemcollectionparam citrixadc_systemcollectionparam}
*/
export class Systemcollectionparam extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_systemcollectionparam";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Systemcollectionparam resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Systemcollectionparam to import
  * @param importFromId The id of the existing Systemcollectionparam that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/systemcollectionparam#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Systemcollectionparam to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_systemcollectionparam", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/systemcollectionparam citrixadc_systemcollectionparam} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemcollectionparamConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemcollectionparamConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_systemcollectionparam',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '1.45.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._communityname = config.communityname;
    this._datapath = config.datapath;
    this._id = config.id;
    this._loglevel = config.loglevel;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // communityname - computed: true, optional: true, required: false
  private _communityname?: string; 
  public get communityname() {
    return this.getStringAttribute('communityname');
  }
  public set communityname(value: string) {
    this._communityname = value;
  }
  public resetCommunityname() {
    this._communityname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communitynameInput() {
    return this._communityname;
  }

  // datapath - computed: true, optional: true, required: false
  private _datapath?: string; 
  public get datapath() {
    return this.getStringAttribute('datapath');
  }
  public set datapath(value: string) {
    this._datapath = value;
  }
  public resetDatapath() {
    this._datapath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datapathInput() {
    return this._datapath;
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

  // loglevel - computed: true, optional: true, required: false
  private _loglevel?: string; 
  public get loglevel() {
    return this.getStringAttribute('loglevel');
  }
  public set loglevel(value: string) {
    this._loglevel = value;
  }
  public resetLoglevel() {
    this._loglevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loglevelInput() {
    return this._loglevel;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      communityname: cdktf.stringToTerraform(this._communityname),
      datapath: cdktf.stringToTerraform(this._datapath),
      id: cdktf.stringToTerraform(this._id),
      loglevel: cdktf.stringToTerraform(this._loglevel),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      communityname: {
        value: cdktf.stringToHclTerraform(this._communityname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      datapath: {
        value: cdktf.stringToHclTerraform(this._datapath),
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
      loglevel: {
        value: cdktf.stringToHclTerraform(this._loglevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
