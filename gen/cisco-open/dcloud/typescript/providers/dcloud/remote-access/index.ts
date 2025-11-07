// https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/remote_access
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RemoteAccessConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/remote_access#any_connect_enabled RemoteAccess#any_connect_enabled}
  */
  readonly anyConnectEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/remote_access#endpoint_kit_enabled RemoteAccess#endpoint_kit_enabled}
  */
  readonly endpointKitEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/remote_access#id RemoteAccess#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/remote_access#topology_uid RemoteAccess#topology_uid}
  */
  readonly topologyUid: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/remote_access dcloud_remote_access}
*/
export class RemoteAccess extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dcloud_remote_access";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RemoteAccess resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RemoteAccess to import
  * @param importFromId The id of the existing RemoteAccess that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/remote_access#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RemoteAccess to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dcloud_remote_access", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/remote_access dcloud_remote_access} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RemoteAccessConfig
  */
  public constructor(scope: Construct, id: string, config: RemoteAccessConfig) {
    super(scope, id, {
      terraformResourceType: 'dcloud_remote_access',
      terraformGeneratorMetadata: {
        providerName: 'dcloud',
        providerVersion: '0.1.29'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._anyConnectEnabled = config.anyConnectEnabled;
    this._endpointKitEnabled = config.endpointKitEnabled;
    this._id = config.id;
    this._topologyUid = config.topologyUid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // any_connect_enabled - computed: false, optional: false, required: true
  private _anyConnectEnabled?: boolean | cdktf.IResolvable; 
  public get anyConnectEnabled() {
    return this.getBooleanAttribute('any_connect_enabled');
  }
  public set anyConnectEnabled(value: boolean | cdktf.IResolvable) {
    this._anyConnectEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get anyConnectEnabledInput() {
    return this._anyConnectEnabled;
  }

  // endpoint_kit_enabled - computed: false, optional: false, required: true
  private _endpointKitEnabled?: boolean | cdktf.IResolvable; 
  public get endpointKitEnabled() {
    return this.getBooleanAttribute('endpoint_kit_enabled');
  }
  public set endpointKitEnabled(value: boolean | cdktf.IResolvable) {
    this._endpointKitEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointKitEnabledInput() {
    return this._endpointKitEnabled;
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

  // topology_uid - computed: false, optional: false, required: true
  private _topologyUid?: string; 
  public get topologyUid() {
    return this.getStringAttribute('topology_uid');
  }
  public set topologyUid(value: string) {
    this._topologyUid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyUidInput() {
    return this._topologyUid;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      any_connect_enabled: cdktf.booleanToTerraform(this._anyConnectEnabled),
      endpoint_kit_enabled: cdktf.booleanToTerraform(this._endpointKitEnabled),
      id: cdktf.stringToTerraform(this._id),
      topology_uid: cdktf.stringToTerraform(this._topologyUid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      any_connect_enabled: {
        value: cdktf.booleanToHclTerraform(this._anyConnectEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      endpoint_kit_enabled: {
        value: cdktf.booleanToHclTerraform(this._endpointKitEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      topology_uid: {
        value: cdktf.stringToHclTerraform(this._topologyUid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
