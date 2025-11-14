// https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/self_service_app_recovery_point
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SelfServiceAppRecoveryPointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/self_service_app_recovery_point#action_name SelfServiceAppRecoveryPoint#action_name}
  */
  readonly actionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/self_service_app_recovery_point#app_name SelfServiceAppRecoveryPoint#app_name}
  */
  readonly appName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/self_service_app_recovery_point#app_uuid SelfServiceAppRecoveryPoint#app_uuid}
  */
  readonly appUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/self_service_app_recovery_point#id SelfServiceAppRecoveryPoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/self_service_app_recovery_point#recovery_point_name SelfServiceAppRecoveryPoint#recovery_point_name}
  */
  readonly recoveryPointName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/self_service_app_recovery_point nutanix_self_service_app_recovery_point}
*/
export class SelfServiceAppRecoveryPoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_self_service_app_recovery_point";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SelfServiceAppRecoveryPoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SelfServiceAppRecoveryPoint to import
  * @param importFromId The id of the existing SelfServiceAppRecoveryPoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/self_service_app_recovery_point#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SelfServiceAppRecoveryPoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_self_service_app_recovery_point", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/self_service_app_recovery_point nutanix_self_service_app_recovery_point} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SelfServiceAppRecoveryPointConfig
  */
  public constructor(scope: Construct, id: string, config: SelfServiceAppRecoveryPointConfig) {
    super(scope, id, {
      terraformResourceType: 'nutanix_self_service_app_recovery_point',
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
    this._actionName = config.actionName;
    this._appName = config.appName;
    this._appUuid = config.appUuid;
    this._id = config.id;
    this._recoveryPointName = config.recoveryPointName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_name - computed: false, optional: false, required: true
  private _actionName?: string; 
  public get actionName() {
    return this.getStringAttribute('action_name');
  }
  public set actionName(value: string) {
    this._actionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionNameInput() {
    return this._actionName;
  }

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

  // recovery_point_name - computed: false, optional: true, required: false
  private _recoveryPointName?: string; 
  public get recoveryPointName() {
    return this.getStringAttribute('recovery_point_name');
  }
  public set recoveryPointName(value: string) {
    this._recoveryPointName = value;
  }
  public resetRecoveryPointName() {
    this._recoveryPointName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryPointNameInput() {
    return this._recoveryPointName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action_name: cdktf.stringToTerraform(this._actionName),
      app_name: cdktf.stringToTerraform(this._appName),
      app_uuid: cdktf.stringToTerraform(this._appUuid),
      id: cdktf.stringToTerraform(this._id),
      recovery_point_name: cdktf.stringToTerraform(this._recoveryPointName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action_name: {
        value: cdktf.stringToHclTerraform(this._actionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      recovery_point_name: {
        value: cdktf.stringToHclTerraform(this._recoveryPointName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
