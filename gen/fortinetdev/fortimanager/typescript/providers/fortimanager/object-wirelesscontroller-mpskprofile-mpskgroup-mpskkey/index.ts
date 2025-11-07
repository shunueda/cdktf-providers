// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_mpskprofile_mpskgroup_mpskkey
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectWirelesscontrollerMpskprofileMpskgroupMpskkeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_mpskprofile_mpskgroup_mpskkey#adom ObjectWirelesscontrollerMpskprofileMpskgroupMpskkey#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_mpskprofile_mpskgroup_mpskkey#comment ObjectWirelesscontrollerMpskprofileMpskgroupMpskkey#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_mpskprofile_mpskgroup_mpskkey#concurrent_client_limit_type ObjectWirelesscontrollerMpskprofileMpskgroupMpskkey#concurrent_client_limit_type}
  */
  readonly concurrentClientLimitType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_mpskprofile_mpskgroup_mpskkey#concurrent_clients ObjectWirelesscontrollerMpskprofileMpskgroupMpskkey#concurrent_clients}
  */
  readonly concurrentClients?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_mpskprofile_mpskgroup_mpskkey#id ObjectWirelesscontrollerMpskprofileMpskgroupMpskkey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_mpskprofile_mpskgroup_mpskkey#mac ObjectWirelesscontrollerMpskprofileMpskgroupMpskkey#mac}
  */
  readonly mac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_mpskprofile_mpskgroup_mpskkey#mpsk_group ObjectWirelesscontrollerMpskprofileMpskgroupMpskkey#mpsk_group}
  */
  readonly mpskGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_mpskprofile_mpskgroup_mpskkey#mpsk_profile ObjectWirelesscontrollerMpskprofileMpskgroupMpskkey#mpsk_profile}
  */
  readonly mpskProfile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_mpskprofile_mpskgroup_mpskkey#mpsk_schedules ObjectWirelesscontrollerMpskprofileMpskgroupMpskkey#mpsk_schedules}
  */
  readonly mpskSchedules?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_mpskprofile_mpskgroup_mpskkey#name ObjectWirelesscontrollerMpskprofileMpskgroupMpskkey#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_mpskprofile_mpskgroup_mpskkey#passphrase ObjectWirelesscontrollerMpskprofileMpskgroupMpskkey#passphrase}
  */
  readonly passphrase?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_mpskprofile_mpskgroup_mpskkey#pmk ObjectWirelesscontrollerMpskprofileMpskgroupMpskkey#pmk}
  */
  readonly pmk?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_mpskprofile_mpskgroup_mpskkey#scopetype ObjectWirelesscontrollerMpskprofileMpskgroupMpskkey#scopetype}
  */
  readonly scopetype?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_mpskprofile_mpskgroup_mpskkey fortimanager_object_wirelesscontroller_mpskprofile_mpskgroup_mpskkey}
*/
export class ObjectWirelesscontrollerMpskprofileMpskgroupMpskkey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_wirelesscontroller_mpskprofile_mpskgroup_mpskkey";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectWirelesscontrollerMpskprofileMpskgroupMpskkey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectWirelesscontrollerMpskprofileMpskgroupMpskkey to import
  * @param importFromId The id of the existing ObjectWirelesscontrollerMpskprofileMpskgroupMpskkey that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_mpskprofile_mpskgroup_mpskkey#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectWirelesscontrollerMpskprofileMpskgroupMpskkey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_wirelesscontroller_mpskprofile_mpskgroup_mpskkey", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_mpskprofile_mpskgroup_mpskkey fortimanager_object_wirelesscontroller_mpskprofile_mpskgroup_mpskkey} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectWirelesscontrollerMpskprofileMpskgroupMpskkeyConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectWirelesscontrollerMpskprofileMpskgroupMpskkeyConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_wirelesscontroller_mpskprofile_mpskgroup_mpskkey',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
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
    this._comment = config.comment;
    this._concurrentClientLimitType = config.concurrentClientLimitType;
    this._concurrentClients = config.concurrentClients;
    this._id = config.id;
    this._mac = config.mac;
    this._mpskGroup = config.mpskGroup;
    this._mpskProfile = config.mpskProfile;
    this._mpskSchedules = config.mpskSchedules;
    this._name = config.name;
    this._passphrase = config.passphrase;
    this._pmk = config.pmk;
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

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // concurrent_client_limit_type - computed: true, optional: true, required: false
  private _concurrentClientLimitType?: string; 
  public get concurrentClientLimitType() {
    return this.getStringAttribute('concurrent_client_limit_type');
  }
  public set concurrentClientLimitType(value: string) {
    this._concurrentClientLimitType = value;
  }
  public resetConcurrentClientLimitType() {
    this._concurrentClientLimitType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentClientLimitTypeInput() {
    return this._concurrentClientLimitType;
  }

  // concurrent_clients - computed: true, optional: true, required: false
  private _concurrentClients?: number; 
  public get concurrentClients() {
    return this.getNumberAttribute('concurrent_clients');
  }
  public set concurrentClients(value: number) {
    this._concurrentClients = value;
  }
  public resetConcurrentClients() {
    this._concurrentClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentClientsInput() {
    return this._concurrentClients;
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

  // mac - computed: true, optional: true, required: false
  private _mac?: string; 
  public get mac() {
    return this.getStringAttribute('mac');
  }
  public set mac(value: string) {
    this._mac = value;
  }
  public resetMac() {
    this._mac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macInput() {
    return this._mac;
  }

  // mpsk_group - computed: false, optional: false, required: true
  private _mpskGroup?: string; 
  public get mpskGroup() {
    return this.getStringAttribute('mpsk_group');
  }
  public set mpskGroup(value: string) {
    this._mpskGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mpskGroupInput() {
    return this._mpskGroup;
  }

  // mpsk_profile - computed: false, optional: false, required: true
  private _mpskProfile?: string; 
  public get mpskProfile() {
    return this.getStringAttribute('mpsk_profile');
  }
  public set mpskProfile(value: string) {
    this._mpskProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mpskProfileInput() {
    return this._mpskProfile;
  }

  // mpsk_schedules - computed: false, optional: true, required: false
  private _mpskSchedules?: string; 
  public get mpskSchedules() {
    return this.getStringAttribute('mpsk_schedules');
  }
  public set mpskSchedules(value: string) {
    this._mpskSchedules = value;
  }
  public resetMpskSchedules() {
    this._mpskSchedules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mpskSchedulesInput() {
    return this._mpskSchedules;
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

  // passphrase - computed: true, optional: true, required: false
  private _passphrase?: string[]; 
  public get passphrase() {
    return cdktf.Fn.tolist(this.getListAttribute('passphrase'));
  }
  public set passphrase(value: string[]) {
    this._passphrase = value;
  }
  public resetPassphrase() {
    this._passphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseInput() {
    return this._passphrase;
  }

  // pmk - computed: true, optional: true, required: false
  private _pmk?: string[]; 
  public get pmk() {
    return cdktf.Fn.tolist(this.getListAttribute('pmk'));
  }
  public set pmk(value: string[]) {
    this._pmk = value;
  }
  public resetPmk() {
    this._pmk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pmkInput() {
    return this._pmk;
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
      comment: cdktf.stringToTerraform(this._comment),
      concurrent_client_limit_type: cdktf.stringToTerraform(this._concurrentClientLimitType),
      concurrent_clients: cdktf.numberToTerraform(this._concurrentClients),
      id: cdktf.stringToTerraform(this._id),
      mac: cdktf.stringToTerraform(this._mac),
      mpsk_group: cdktf.stringToTerraform(this._mpskGroup),
      mpsk_profile: cdktf.stringToTerraform(this._mpskProfile),
      mpsk_schedules: cdktf.stringToTerraform(this._mpskSchedules),
      name: cdktf.stringToTerraform(this._name),
      passphrase: cdktf.listMapper(cdktf.stringToTerraform, false)(this._passphrase),
      pmk: cdktf.listMapper(cdktf.stringToTerraform, false)(this._pmk),
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
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      concurrent_client_limit_type: {
        value: cdktf.stringToHclTerraform(this._concurrentClientLimitType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      concurrent_clients: {
        value: cdktf.numberToHclTerraform(this._concurrentClients),
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
      mac: {
        value: cdktf.stringToHclTerraform(this._mac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mpsk_group: {
        value: cdktf.stringToHclTerraform(this._mpskGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mpsk_profile: {
        value: cdktf.stringToHclTerraform(this._mpskProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mpsk_schedules: {
        value: cdktf.stringToHclTerraform(this._mpskSchedules),
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
      passphrase: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._passphrase),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      pmk: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._pmk),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
