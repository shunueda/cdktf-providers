// https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs/data-sources/notification_target
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCriblioNotificationTargetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique ID to GET
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs/data-sources/notification_target#id DataCriblioNotificationTarget#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs/data-sources/notification_target criblio_notification_target}
*/
export class DataCriblioNotificationTarget extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "criblio_notification_target";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCriblioNotificationTarget resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCriblioNotificationTarget to import
  * @param importFromId The id of the existing DataCriblioNotificationTarget that should be imported. Refer to the {@link https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs/data-sources/notification_target#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCriblioNotificationTarget to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "criblio_notification_target", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs/data-sources/notification_target criblio_notification_target} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCriblioNotificationTargetConfig
  */
  public constructor(scope: Construct, id: string, config: DataCriblioNotificationTargetConfig) {
    super(scope, id, {
      terraformResourceType: 'criblio_notification_target',
      terraformGeneratorMetadata: {
        providerName: 'criblio',
        providerVersion: '1.20.64',
        providerVersionConstraint: '1.20.64'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // items - computed: true, optional: false, required: false
  private _items = new cdktf.StringMapList(this, "items", false);
  public get items() {
    return this._items;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
