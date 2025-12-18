// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/data-sources/hanode
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCitrixadcHanodeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/data-sources/hanode#hanode_id DataCitrixadcHanode#hanode_id}
  */
  readonly hanodeId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/data-sources/hanode#id DataCitrixadcHanode#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/data-sources/hanode citrixadc_hanode}
*/
export class DataCitrixadcHanode extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_hanode";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCitrixadcHanode resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCitrixadcHanode to import
  * @param importFromId The id of the existing DataCitrixadcHanode that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/data-sources/hanode#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCitrixadcHanode to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_hanode", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/data-sources/hanode citrixadc_hanode} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCitrixadcHanodeConfig
  */
  public constructor(scope: Construct, id: string, config: DataCitrixadcHanodeConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_hanode',
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
    this._hanodeId = config.hanodeId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // completedfliptime - computed: true, optional: false, required: false
  public get completedfliptime() {
    return this.getNumberAttribute('completedfliptime');
  }

  // curflips - computed: true, optional: false, required: false
  public get curflips() {
    return this.getNumberAttribute('curflips');
  }

  // deadinterval - computed: true, optional: false, required: false
  public get deadinterval() {
    return this.getNumberAttribute('deadinterval');
  }

  // enaifaces - computed: true, optional: false, required: false
  public get enaifaces() {
    return this.getNumberAttribute('enaifaces');
  }

  // failsafe - computed: true, optional: false, required: false
  public get failsafe() {
    return this.getStringAttribute('failsafe');
  }

  // hanode_id - computed: false, optional: false, required: true
  private _hanodeId?: number; 
  public get hanodeId() {
    return this.getNumberAttribute('hanode_id');
  }
  public set hanodeId(value: number) {
    this._hanodeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hanodeIdInput() {
    return this._hanodeId;
  }

  // haprop - computed: true, optional: false, required: false
  public get haprop() {
    return this.getStringAttribute('haprop');
  }

  // hastatus - computed: true, optional: false, required: false
  public get hastatus() {
    return this.getStringAttribute('hastatus');
  }

  // hasync - computed: true, optional: false, required: false
  public get hasync() {
    return this.getStringAttribute('hasync');
  }

  // hellointerval - computed: true, optional: false, required: false
  public get hellointerval() {
    return this.getNumberAttribute('hellointerval');
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

  // inc - computed: true, optional: false, required: false
  public get inc() {
    return this.getStringAttribute('inc');
  }

  // ipaddress - computed: true, optional: false, required: false
  public get ipaddress() {
    return this.getStringAttribute('ipaddress');
  }

  // masterstatetime - computed: true, optional: false, required: false
  public get masterstatetime() {
    return this.getNumberAttribute('masterstatetime');
  }

  // maxflips - computed: true, optional: false, required: false
  public get maxflips() {
    return this.getNumberAttribute('maxflips');
  }

  // maxfliptime - computed: true, optional: false, required: false
  public get maxfliptime() {
    return this.getNumberAttribute('maxfliptime');
  }

  // netmask - computed: true, optional: false, required: false
  public get netmask() {
    return this.getStringAttribute('netmask');
  }

  // routemonitor - computed: true, optional: false, required: false
  public get routemonitor() {
    return this.getStringAttribute('routemonitor');
  }

  // routemonitorstate - computed: true, optional: false, required: false
  public get routemonitorstate() {
    return this.getStringAttribute('routemonitorstate');
  }

  // ssl2 - computed: true, optional: false, required: false
  public get ssl2() {
    return this.getStringAttribute('ssl2');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // syncstatusstrictmode - computed: true, optional: false, required: false
  public get syncstatusstrictmode() {
    return this.getStringAttribute('syncstatusstrictmode');
  }

  // syncvlan - computed: true, optional: false, required: false
  public get syncvlan() {
    return this.getNumberAttribute('syncvlan');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      hanode_id: cdktf.numberToTerraform(this._hanodeId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      hanode_id: {
        value: cdktf.numberToHclTerraform(this._hanodeId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
