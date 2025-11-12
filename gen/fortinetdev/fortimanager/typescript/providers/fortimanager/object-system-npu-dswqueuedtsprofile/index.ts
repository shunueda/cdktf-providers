// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_dswqueuedtsprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectSystemNpuDswqueuedtsprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_dswqueuedtsprofile#adom ObjectSystemNpuDswqueuedtsprofile#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_dswqueuedtsprofile#id ObjectSystemNpuDswqueuedtsprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_dswqueuedtsprofile#iport ObjectSystemNpuDswqueuedtsprofile#iport}
  */
  readonly iport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_dswqueuedtsprofile#name ObjectSystemNpuDswqueuedtsprofile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_dswqueuedtsprofile#oport ObjectSystemNpuDswqueuedtsprofile#oport}
  */
  readonly oport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_dswqueuedtsprofile#profile_id ObjectSystemNpuDswqueuedtsprofile#profile_id}
  */
  readonly profileId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_dswqueuedtsprofile#queue_select ObjectSystemNpuDswqueuedtsprofile#queue_select}
  */
  readonly queueSelect?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_dswqueuedtsprofile#scopetype ObjectSystemNpuDswqueuedtsprofile#scopetype}
  */
  readonly scopetype?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_dswqueuedtsprofile fortimanager_object_system_npu_dswqueuedtsprofile}
*/
export class ObjectSystemNpuDswqueuedtsprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_system_npu_dswqueuedtsprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectSystemNpuDswqueuedtsprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectSystemNpuDswqueuedtsprofile to import
  * @param importFromId The id of the existing ObjectSystemNpuDswqueuedtsprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_dswqueuedtsprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectSystemNpuDswqueuedtsprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_system_npu_dswqueuedtsprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_dswqueuedtsprofile fortimanager_object_system_npu_dswqueuedtsprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectSystemNpuDswqueuedtsprofileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectSystemNpuDswqueuedtsprofileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_system_npu_dswqueuedtsprofile',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._id = config.id;
    this._iport = config.iport;
    this._name = config.name;
    this._oport = config.oport;
    this._profileId = config.profileId;
    this._queueSelect = config.queueSelect;
    this._scopetype = config.scopetype;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
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

  // iport - computed: true, optional: true, required: false
  private _iport?: string; 
  public get iport() {
    return this.getStringAttribute('iport');
  }
  public set iport(value: string) {
    this._iport = value;
  }
  public resetIport() {
    this._iport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iportInput() {
    return this._iport;
  }

  // name - computed: false, optional: true, required: false
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

  // oport - computed: true, optional: true, required: false
  private _oport?: string; 
  public get oport() {
    return this.getStringAttribute('oport');
  }
  public set oport(value: string) {
    this._oport = value;
  }
  public resetOport() {
    this._oport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oportInput() {
    return this._oport;
  }

  // profile_id - computed: false, optional: true, required: false
  private _profileId?: number; 
  public get profileId() {
    return this.getNumberAttribute('profile_id');
  }
  public set profileId(value: number) {
    this._profileId = value;
  }
  public resetProfileId() {
    this._profileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileIdInput() {
    return this._profileId;
  }

  // queue_select - computed: false, optional: true, required: false
  private _queueSelect?: number; 
  public get queueSelect() {
    return this.getNumberAttribute('queue_select');
  }
  public set queueSelect(value: number) {
    this._queueSelect = value;
  }
  public resetQueueSelect() {
    this._queueSelect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueSelectInput() {
    return this._queueSelect;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      id: cdktf.stringToTerraform(this._id),
      iport: cdktf.stringToTerraform(this._iport),
      name: cdktf.stringToTerraform(this._name),
      oport: cdktf.stringToTerraform(this._oport),
      profile_id: cdktf.numberToTerraform(this._profileId),
      queue_select: cdktf.numberToTerraform(this._queueSelect),
      scopetype: cdktf.stringToTerraform(this._scopetype),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
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
      iport: {
        value: cdktf.stringToHclTerraform(this._iport),
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
      oport: {
        value: cdktf.stringToHclTerraform(this._oport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile_id: {
        value: cdktf.numberToHclTerraform(this._profileId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      queue_select: {
        value: cdktf.numberToHclTerraform(this._queueSelect),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
