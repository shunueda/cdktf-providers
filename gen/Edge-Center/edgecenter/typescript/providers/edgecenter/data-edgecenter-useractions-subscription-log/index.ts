// https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/data-sources/useractions_subscription_log
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataEdgecenterUseractionsSubscriptionLogConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/data-sources/useractions_subscription_log#id DataEdgecenterUseractionsSubscriptionLog#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/data-sources/useractions_subscription_log edgecenter_useractions_subscription_log}
*/
export class DataEdgecenterUseractionsSubscriptionLog extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "edgecenter_useractions_subscription_log";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataEdgecenterUseractionsSubscriptionLog resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataEdgecenterUseractionsSubscriptionLog to import
  * @param importFromId The id of the existing DataEdgecenterUseractionsSubscriptionLog that should be imported. Refer to the {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/data-sources/useractions_subscription_log#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataEdgecenterUseractionsSubscriptionLog to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "edgecenter_useractions_subscription_log", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/data-sources/useractions_subscription_log edgecenter_useractions_subscription_log} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataEdgecenterUseractionsSubscriptionLogConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataEdgecenterUseractionsSubscriptionLogConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'edgecenter_useractions_subscription_log',
      terraformGeneratorMetadata: {
        providerName: 'edgecenter',
        providerVersion: '0.10.4'
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

  // auth_header_name - computed: true, optional: false, required: false
  public get authHeaderName() {
    return this.getStringAttribute('auth_header_name');
  }

  // auth_header_value - computed: true, optional: false, required: false
  public get authHeaderValue() {
    return this.getStringAttribute('auth_header_value');
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

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
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
