// https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/self_service_app_restore
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SelfServiceAppRestoreConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/self_service_app_restore#app_name SelfServiceAppRestore#app_name}
  */
  readonly appName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/self_service_app_restore#app_uuid SelfServiceAppRestore#app_uuid}
  */
  readonly appUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/self_service_app_restore#id SelfServiceAppRestore#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/self_service_app_restore#restore_action_name SelfServiceAppRestore#restore_action_name}
  */
  readonly restoreActionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/self_service_app_restore#snapshot_uuid SelfServiceAppRestore#snapshot_uuid}
  */
  readonly snapshotUuid: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/self_service_app_restore nutanix_self_service_app_restore}
*/
export class SelfServiceAppRestore extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_self_service_app_restore";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SelfServiceAppRestore resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SelfServiceAppRestore to import
  * @param importFromId The id of the existing SelfServiceAppRestore that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/self_service_app_restore#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SelfServiceAppRestore to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_self_service_app_restore", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/self_service_app_restore nutanix_self_service_app_restore} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SelfServiceAppRestoreConfig
  */
  public constructor(scope: Construct, id: string, config: SelfServiceAppRestoreConfig) {
    super(scope, id, {
      terraformResourceType: 'nutanix_self_service_app_restore',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.4',
        providerVersionConstraint: '2.3.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appName = config.appName;
    this._appUuid = config.appUuid;
    this._id = config.id;
    this._restoreActionName = config.restoreActionName;
    this._snapshotUuid = config.snapshotUuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_name - computed: false, optional: true, required: false
  private _appName?: string; 
  public get appName() {
    return this.getStringAttribute('app_name');
  }
  public set appName(value: string) {
    this._appName = value;
  }
  public resetAppName() {
    this._appName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appNameInput() {
    return this._appName;
  }

  // app_uuid - computed: false, optional: true, required: false
  private _appUuid?: string; 
  public get appUuid() {
    return this.getStringAttribute('app_uuid');
  }
  public set appUuid(value: string) {
    this._appUuid = value;
  }
  public resetAppUuid() {
    this._appUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appUuidInput() {
    return this._appUuid;
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

  // restore_action_name - computed: false, optional: false, required: true
  private _restoreActionName?: string; 
  public get restoreActionName() {
    return this.getStringAttribute('restore_action_name');
  }
  public set restoreActionName(value: string) {
    this._restoreActionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreActionNameInput() {
    return this._restoreActionName;
  }

  // snapshot_uuid - computed: false, optional: false, required: true
  private _snapshotUuid?: string; 
  public get snapshotUuid() {
    return this.getStringAttribute('snapshot_uuid');
  }
  public set snapshotUuid(value: string) {
    this._snapshotUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotUuidInput() {
    return this._snapshotUuid;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_name: cdktf.stringToTerraform(this._appName),
      app_uuid: cdktf.stringToTerraform(this._appUuid),
      id: cdktf.stringToTerraform(this._id),
      restore_action_name: cdktf.stringToTerraform(this._restoreActionName),
      snapshot_uuid: cdktf.stringToTerraform(this._snapshotUuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_name: {
        value: cdktf.stringToHclTerraform(this._appName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_uuid: {
        value: cdktf.stringToHclTerraform(this._appUuid),
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
      restore_action_name: {
        value: cdktf.stringToHclTerraform(this._restoreActionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snapshot_uuid: {
        value: cdktf.stringToHclTerraform(this._snapshotUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
