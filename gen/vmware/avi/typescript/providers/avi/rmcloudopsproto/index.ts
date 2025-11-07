// https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/rmcloudopsproto
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RmcloudopsprotoConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/rmcloudopsproto#id Rmcloudopsproto#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/rmcloudopsproto#last_queried_se_creation_limit Rmcloudopsproto#last_queried_se_creation_limit}
  */
  readonly lastQueriedSeCreationLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/rmcloudopsproto#name Rmcloudopsproto#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/rmcloudopsproto#pending_se_creation_count Rmcloudopsproto#pending_se_creation_count}
  */
  readonly pendingSeCreationCount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/rmcloudopsproto#pending_vnic_op_count Rmcloudopsproto#pending_vnic_op_count}
  */
  readonly pendingVnicOpCount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/rmcloudopsproto#uuid Rmcloudopsproto#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/rmcloudopsproto avi_rmcloudopsproto}
*/
export class Rmcloudopsproto extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_rmcloudopsproto";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Rmcloudopsproto resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Rmcloudopsproto to import
  * @param importFromId The id of the existing Rmcloudopsproto that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/rmcloudopsproto#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Rmcloudopsproto to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_rmcloudopsproto", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/rmcloudopsproto avi_rmcloudopsproto} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RmcloudopsprotoConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RmcloudopsprotoConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'avi_rmcloudopsproto',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '31.1.1'
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
    this._lastQueriedSeCreationLimit = config.lastQueriedSeCreationLimit;
    this._name = config.name;
    this._pendingSeCreationCount = config.pendingSeCreationCount;
    this._pendingVnicOpCount = config.pendingVnicOpCount;
    this._uuid = config.uuid;
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

  // last_queried_se_creation_limit - computed: true, optional: true, required: false
  private _lastQueriedSeCreationLimit?: string; 
  public get lastQueriedSeCreationLimit() {
    return this.getStringAttribute('last_queried_se_creation_limit');
  }
  public set lastQueriedSeCreationLimit(value: string) {
    this._lastQueriedSeCreationLimit = value;
  }
  public resetLastQueriedSeCreationLimit() {
    this._lastQueriedSeCreationLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastQueriedSeCreationLimitInput() {
    return this._lastQueriedSeCreationLimit;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // pending_se_creation_count - computed: true, optional: true, required: false
  private _pendingSeCreationCount?: string; 
  public get pendingSeCreationCount() {
    return this.getStringAttribute('pending_se_creation_count');
  }
  public set pendingSeCreationCount(value: string) {
    this._pendingSeCreationCount = value;
  }
  public resetPendingSeCreationCount() {
    this._pendingSeCreationCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pendingSeCreationCountInput() {
    return this._pendingSeCreationCount;
  }

  // pending_vnic_op_count - computed: true, optional: true, required: false
  private _pendingVnicOpCount?: string; 
  public get pendingVnicOpCount() {
    return this.getStringAttribute('pending_vnic_op_count');
  }
  public set pendingVnicOpCount(value: string) {
    this._pendingVnicOpCount = value;
  }
  public resetPendingVnicOpCount() {
    this._pendingVnicOpCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pendingVnicOpCountInput() {
    return this._pendingVnicOpCount;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      last_queried_se_creation_limit: cdktf.stringToTerraform(this._lastQueriedSeCreationLimit),
      name: cdktf.stringToTerraform(this._name),
      pending_se_creation_count: cdktf.stringToTerraform(this._pendingSeCreationCount),
      pending_vnic_op_count: cdktf.stringToTerraform(this._pendingVnicOpCount),
      uuid: cdktf.stringToTerraform(this._uuid),
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
      last_queried_se_creation_limit: {
        value: cdktf.stringToHclTerraform(this._lastQueriedSeCreationLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pending_se_creation_count: {
        value: cdktf.stringToHclTerraform(this._pendingSeCreationCount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pending_vnic_op_count: {
        value: cdktf.stringToHclTerraform(this._pendingVnicOpCount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
