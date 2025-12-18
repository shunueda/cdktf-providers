// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslcacertgroup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SslcacertgroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslcacertgroup#cacertgroupname Sslcacertgroup#cacertgroupname}
  */
  readonly cacertgroupname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslcacertgroup#id Sslcacertgroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslcacertgroup citrixadc_sslcacertgroup}
*/
export class Sslcacertgroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_sslcacertgroup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Sslcacertgroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Sslcacertgroup to import
  * @param importFromId The id of the existing Sslcacertgroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslcacertgroup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Sslcacertgroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_sslcacertgroup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/sslcacertgroup citrixadc_sslcacertgroup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SslcacertgroupConfig
  */
  public constructor(scope: Construct, id: string, config: SslcacertgroupConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_sslcacertgroup',
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
    this._cacertgroupname = config.cacertgroupname;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cacertgroupname - computed: false, optional: false, required: true
  private _cacertgroupname?: string; 
  public get cacertgroupname() {
    return this.getStringAttribute('cacertgroupname');
  }
  public set cacertgroupname(value: string) {
    this._cacertgroupname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cacertgroupnameInput() {
    return this._cacertgroupname;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cacertgroupname: cdktf.stringToTerraform(this._cacertgroupname),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cacertgroupname: {
        value: cdktf.stringToHclTerraform(this._cacertgroupname),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
