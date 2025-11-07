// https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Is true if the server has been built with an encrypted disk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/server#disk_encrypted Server#disk_encrypted}
  */
  readonly diskEncrypted?: boolean | cdktf.IResolvable;
  /**
  * Disk size in megabytes for server types with variable block storage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/server#disk_size Server#disk_size}
  */
  readonly diskSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/server#id Server#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Image used to create the server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/server#image Server#image}
  */
  readonly image?: string;
  /**
  * Is true if resource has been set as locked and cannot be deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/server#locked Server#locked}
  */
  readonly locked?: boolean | cdktf.IResolvable;
  /**
  * Editable user label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/server#name Server#name}
  */
  readonly name?: string;
  /**
  * List of server groups to add server to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/server#server_groups Server#server_groups}
  */
  readonly serverGroups?: string[];
  /**
  * Keep this number of scheduled snapshots. Keep all if unset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/server#snapshots_retention Server#snapshots_retention}
  */
  readonly snapshotsRetention?: string;
  /**
  * Crontab pattern for scheduled snapshots. Must be at least hourly
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/server#snapshots_schedule Server#snapshots_schedule}
  */
  readonly snapshotsSchedule?: string;
  /**
  * Server type of the server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/server#type Server#type}
  */
  readonly type?: string;
  /**
  * Data made available to Cloud Init
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/server#user_data Server#user_data}
  */
  readonly userData?: string;
  /**
  * Base64 encoded data made available to Cloud Init
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/server#user_data_base64 Server#user_data_base64}
  */
  readonly userDataBase64?: string;
  /**
  * Volume used to boot the server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/server#volume Server#volume}
  */
  readonly volume?: string;
  /**
  * Zone where server is located
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/server#zone Server#zone}
  */
  readonly zone?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/server#timeouts Server#timeouts}
  */
  readonly timeouts?: ServerTimeouts;
}
export interface ServerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/server#create Server#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/server#delete Server#delete}
  */
  readonly delete?: string;
}

export function serverTimeoutsToTerraform(struct?: ServerTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function serverTimeoutsToHclTerraform(struct?: ServerTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServerTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/server brightbox_server}
*/
export class Server extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "brightbox_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Server resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Server to import
  * @param importFromId The id of the existing Server that should be imported. Refer to the {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Server to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "brightbox_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/server brightbox_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ServerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'brightbox_server',
      terraformGeneratorMetadata: {
        providerName: 'brightbox',
        providerVersion: '3.4.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._diskEncrypted = config.diskEncrypted;
    this._diskSize = config.diskSize;
    this._id = config.id;
    this._image = config.image;
    this._locked = config.locked;
    this._name = config.name;
    this._serverGroups = config.serverGroups;
    this._snapshotsRetention = config.snapshotsRetention;
    this._snapshotsSchedule = config.snapshotsSchedule;
    this._type = config.type;
    this._userData = config.userData;
    this._userDataBase64 = config.userDataBase64;
    this._volume = config.volume;
    this._zone = config.zone;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_volumes - computed: true, optional: false, required: false
  public get dataVolumes() {
    return cdktf.Fn.tolist(this.getListAttribute('data_volumes'));
  }

  // disk_encrypted - computed: true, optional: true, required: false
  private _diskEncrypted?: boolean | cdktf.IResolvable; 
  public get diskEncrypted() {
    return this.getBooleanAttribute('disk_encrypted');
  }
  public set diskEncrypted(value: boolean | cdktf.IResolvable) {
    this._diskEncrypted = value;
  }
  public resetDiskEncrypted() {
    this._diskEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptedInput() {
    return this._diskEncrypted;
  }

  // disk_size - computed: true, optional: true, required: false
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  public resetDiskSize() {
    this._diskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
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

  // image - computed: true, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return this.getStringAttribute('interface');
  }

  // ipv4_address - computed: true, optional: false, required: false
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }

  // ipv4_address_private - computed: true, optional: false, required: false
  public get ipv4AddressPrivate() {
    return this.getStringAttribute('ipv4_address_private');
  }

  // ipv6_address - computed: true, optional: false, required: false
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }

  // ipv6_hostname - computed: true, optional: false, required: false
  public get ipv6Hostname() {
    return this.getStringAttribute('ipv6_hostname');
  }

  // locked - computed: false, optional: true, required: false
  private _locked?: boolean | cdktf.IResolvable; 
  public get locked() {
    return this.getBooleanAttribute('locked');
  }
  public set locked(value: boolean | cdktf.IResolvable) {
    this._locked = value;
  }
  public resetLocked() {
    this._locked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockedInput() {
    return this._locked;
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

  // public_hostname - computed: true, optional: false, required: false
  public get publicHostname() {
    return this.getStringAttribute('public_hostname');
  }

  // server_groups - computed: true, optional: true, required: false
  private _serverGroups?: string[]; 
  public get serverGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('server_groups'));
  }
  public set serverGroups(value: string[]) {
    this._serverGroups = value;
  }
  public resetServerGroups() {
    this._serverGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverGroupsInput() {
    return this._serverGroups;
  }

  // snapshots_retention - computed: true, optional: true, required: false
  private _snapshotsRetention?: string; 
  public get snapshotsRetention() {
    return this.getStringAttribute('snapshots_retention');
  }
  public set snapshotsRetention(value: string) {
    this._snapshotsRetention = value;
  }
  public resetSnapshotsRetention() {
    this._snapshotsRetention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotsRetentionInput() {
    return this._snapshotsRetention;
  }

  // snapshots_schedule - computed: true, optional: true, required: false
  private _snapshotsSchedule?: string; 
  public get snapshotsSchedule() {
    return this.getStringAttribute('snapshots_schedule');
  }
  public set snapshotsSchedule(value: string) {
    this._snapshotsSchedule = value;
  }
  public resetSnapshotsSchedule() {
    this._snapshotsSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotsScheduleInput() {
    return this._snapshotsSchedule;
  }

  // snapshots_schedule_next_at - computed: true, optional: false, required: false
  public get snapshotsScheduleNextAt() {
    return this.getStringAttribute('snapshots_schedule_next_at');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // user_data - computed: false, optional: true, required: false
  private _userData?: string; 
  public get userData() {
    return this.getStringAttribute('user_data');
  }
  public set userData(value: string) {
    this._userData = value;
  }
  public resetUserData() {
    this._userData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataInput() {
    return this._userData;
  }

  // user_data_base64 - computed: false, optional: true, required: false
  private _userDataBase64?: string; 
  public get userDataBase64() {
    return this.getStringAttribute('user_data_base64');
  }
  public set userDataBase64(value: string) {
    this._userDataBase64 = value;
  }
  public resetUserDataBase64() {
    this._userDataBase64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataBase64Input() {
    return this._userDataBase64;
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // volume - computed: true, optional: true, required: false
  private _volume?: string; 
  public get volume() {
    return this.getStringAttribute('volume');
  }
  public set volume(value: string) {
    this._volume = value;
  }
  public resetVolume() {
    this._volume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume;
  }

  // zone - computed: true, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ServerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ServerTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disk_encrypted: cdktf.booleanToTerraform(this._diskEncrypted),
      disk_size: cdktf.numberToTerraform(this._diskSize),
      id: cdktf.stringToTerraform(this._id),
      image: cdktf.stringToTerraform(this._image),
      locked: cdktf.booleanToTerraform(this._locked),
      name: cdktf.stringToTerraform(this._name),
      server_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serverGroups),
      snapshots_retention: cdktf.stringToTerraform(this._snapshotsRetention),
      snapshots_schedule: cdktf.stringToTerraform(this._snapshotsSchedule),
      type: cdktf.stringToTerraform(this._type),
      user_data: cdktf.stringToTerraform(this._userData),
      user_data_base64: cdktf.stringToTerraform(this._userDataBase64),
      volume: cdktf.stringToTerraform(this._volume),
      zone: cdktf.stringToTerraform(this._zone),
      timeouts: serverTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disk_encrypted: {
        value: cdktf.booleanToHclTerraform(this._diskEncrypted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disk_size: {
        value: cdktf.numberToHclTerraform(this._diskSize),
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
      image: {
        value: cdktf.stringToHclTerraform(this._image),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      locked: {
        value: cdktf.booleanToHclTerraform(this._locked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._serverGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      snapshots_retention: {
        value: cdktf.stringToHclTerraform(this._snapshotsRetention),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snapshots_schedule: {
        value: cdktf.stringToHclTerraform(this._snapshotsSchedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_data: {
        value: cdktf.stringToHclTerraform(this._userData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_data_base64: {
        value: cdktf.stringToHclTerraform(this._userDataBase64),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      volume: {
        value: cdktf.stringToHclTerraform(this._volume),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: serverTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ServerTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
