// https://registry.terraform.io/providers/criblio/criblio/1.20.32/docs/data-sources/notification_targets
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCriblioNotificationTargetsConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/criblio/criblio/1.20.32/docs/data-sources/notification_targets criblio_notification_targets}
*/
export class DataCriblioNotificationTargets extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "criblio_notification_targets";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCriblioNotificationTargets resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCriblioNotificationTargets to import
  * @param importFromId The id of the existing DataCriblioNotificationTargets that should be imported. Refer to the {@link https://registry.terraform.io/providers/criblio/criblio/1.20.32/docs/data-sources/notification_targets#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCriblioNotificationTargets to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "criblio_notification_targets", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/criblio/criblio/1.20.32/docs/data-sources/notification_targets criblio_notification_targets} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCriblioNotificationTargetsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCriblioNotificationTargetsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'criblio_notification_targets',
      terraformGeneratorMetadata: {
        providerName: 'criblio',
        providerVersion: '1.20.32',
        providerVersionConstraint: '1.20.32'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
