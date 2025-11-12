// https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_authorize_dbserver
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NdbAuthorizeDbserverConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_authorize_dbserver#dbservers_id NdbAuthorizeDbserver#dbservers_id}
  */
  readonly dbserversId?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_authorize_dbserver#id NdbAuthorizeDbserver#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_authorize_dbserver#time_machine_id NdbAuthorizeDbserver#time_machine_id}
  */
  readonly timeMachineId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_authorize_dbserver#time_machine_name NdbAuthorizeDbserver#time_machine_name}
  */
  readonly timeMachineName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_authorize_dbserver nutanix_ndb_authorize_dbserver}
*/
export class NdbAuthorizeDbserver extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_ndb_authorize_dbserver";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NdbAuthorizeDbserver resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NdbAuthorizeDbserver to import
  * @param importFromId The id of the existing NdbAuthorizeDbserver that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_authorize_dbserver#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NdbAuthorizeDbserver to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_ndb_authorize_dbserver", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ndb_authorize_dbserver nutanix_ndb_authorize_dbserver} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NdbAuthorizeDbserverConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NdbAuthorizeDbserverConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nutanix_ndb_authorize_dbserver',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.3',
        providerVersionConstraint: '2.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dbserversId = config.dbserversId;
    this._id = config.id;
    this._timeMachineId = config.timeMachineId;
    this._timeMachineName = config.timeMachineName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dbservers_id - computed: false, optional: true, required: false
  private _dbserversId?: string[]; 
  public get dbserversId() {
    return this.getListAttribute('dbservers_id');
  }
  public set dbserversId(value: string[]) {
    this._dbserversId = value;
  }
  public resetDbserversId() {
    this._dbserversId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbserversIdInput() {
    return this._dbserversId;
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

  // time_machine_id - computed: false, optional: true, required: false
  private _timeMachineId?: string; 
  public get timeMachineId() {
    return this.getStringAttribute('time_machine_id');
  }
  public set timeMachineId(value: string) {
    this._timeMachineId = value;
  }
  public resetTimeMachineId() {
    this._timeMachineId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeMachineIdInput() {
    return this._timeMachineId;
  }

  // time_machine_name - computed: false, optional: true, required: false
  private _timeMachineName?: string; 
  public get timeMachineName() {
    return this.getStringAttribute('time_machine_name');
  }
  public set timeMachineName(value: string) {
    this._timeMachineName = value;
  }
  public resetTimeMachineName() {
    this._timeMachineName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeMachineNameInput() {
    return this._timeMachineName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dbservers_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dbserversId),
      id: cdktf.stringToTerraform(this._id),
      time_machine_id: cdktf.stringToTerraform(this._timeMachineId),
      time_machine_name: cdktf.stringToTerraform(this._timeMachineName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dbservers_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dbserversId),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_machine_id: {
        value: cdktf.stringToHclTerraform(this._timeMachineId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_machine_name: {
        value: cdktf.stringToHclTerraform(this._timeMachineName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
