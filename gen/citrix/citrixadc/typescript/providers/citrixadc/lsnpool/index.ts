// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lsnpool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LsnpoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lsnpool#id Lsnpool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lsnpool#maxportrealloctmq Lsnpool#maxportrealloctmq}
  */
  readonly maxportrealloctmq?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lsnpool#nattype Lsnpool#nattype}
  */
  readonly nattype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lsnpool#poolname Lsnpool#poolname}
  */
  readonly poolname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lsnpool#portblockallocation Lsnpool#portblockallocation}
  */
  readonly portblockallocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lsnpool#portrealloctimeout Lsnpool#portrealloctimeout}
  */
  readonly portrealloctimeout?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lsnpool citrixadc_lsnpool}
*/
export class Lsnpool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_lsnpool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Lsnpool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Lsnpool to import
  * @param importFromId The id of the existing Lsnpool that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lsnpool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Lsnpool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_lsnpool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lsnpool citrixadc_lsnpool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LsnpoolConfig
  */
  public constructor(scope: Construct, id: string, config: LsnpoolConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_lsnpool',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.1.0',
        providerVersionConstraint: '2.1.0'
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
    this._maxportrealloctmq = config.maxportrealloctmq;
    this._nattype = config.nattype;
    this._poolname = config.poolname;
    this._portblockallocation = config.portblockallocation;
    this._portrealloctimeout = config.portrealloctimeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // maxportrealloctmq - computed: true, optional: true, required: false
  private _maxportrealloctmq?: string; 
  public get maxportrealloctmq() {
    return this.getStringAttribute('maxportrealloctmq');
  }
  public set maxportrealloctmq(value: string) {
    this._maxportrealloctmq = value;
  }
  public resetMaxportrealloctmq() {
    this._maxportrealloctmq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxportrealloctmqInput() {
    return this._maxportrealloctmq;
  }

  // nattype - computed: false, optional: true, required: false
  private _nattype?: string; 
  public get nattype() {
    return this.getStringAttribute('nattype');
  }
  public set nattype(value: string) {
    this._nattype = value;
  }
  public resetNattype() {
    this._nattype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nattypeInput() {
    return this._nattype;
  }

  // poolname - computed: false, optional: false, required: true
  private _poolname?: string; 
  public get poolname() {
    return this.getStringAttribute('poolname');
  }
  public set poolname(value: string) {
    this._poolname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolnameInput() {
    return this._poolname;
  }

  // portblockallocation - computed: false, optional: true, required: false
  private _portblockallocation?: string; 
  public get portblockallocation() {
    return this.getStringAttribute('portblockallocation');
  }
  public set portblockallocation(value: string) {
    this._portblockallocation = value;
  }
  public resetPortblockallocation() {
    this._portblockallocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portblockallocationInput() {
    return this._portblockallocation;
  }

  // portrealloctimeout - computed: true, optional: true, required: false
  private _portrealloctimeout?: number; 
  public get portrealloctimeout() {
    return this.getNumberAttribute('portrealloctimeout');
  }
  public set portrealloctimeout(value: number) {
    this._portrealloctimeout = value;
  }
  public resetPortrealloctimeout() {
    this._portrealloctimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portrealloctimeoutInput() {
    return this._portrealloctimeout;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      maxportrealloctmq: cdktf.stringToTerraform(this._maxportrealloctmq),
      nattype: cdktf.stringToTerraform(this._nattype),
      poolname: cdktf.stringToTerraform(this._poolname),
      portblockallocation: cdktf.stringToTerraform(this._portblockallocation),
      portrealloctimeout: cdktf.numberToTerraform(this._portrealloctimeout),
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
      maxportrealloctmq: {
        value: cdktf.stringToHclTerraform(this._maxportrealloctmq),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nattype: {
        value: cdktf.stringToHclTerraform(this._nattype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      poolname: {
        value: cdktf.stringToHclTerraform(this._poolname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      portblockallocation: {
        value: cdktf.stringToHclTerraform(this._portblockallocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      portrealloctimeout: {
        value: cdktf.numberToHclTerraform(this._portrealloctimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
