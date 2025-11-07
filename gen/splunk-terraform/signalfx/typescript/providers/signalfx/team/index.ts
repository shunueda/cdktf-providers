// https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/team
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the team (Optional)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/team#description Team#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/team#id Team#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Members of team
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/team#members Team#members}
  */
  readonly members?: string[];
  /**
  * Name of the team
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/team#name Team#name}
  */
  readonly name: string;
  /**
  * List of notification destinations to use for the critical alerts category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/team#notifications_critical Team#notifications_critical}
  */
  readonly notificationsCritical?: string[];
  /**
  * List of notification destinations to use for the default alerts category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/team#notifications_default Team#notifications_default}
  */
  readonly notificationsDefault?: string[];
  /**
  * List of notification destinations to use for the info alerts category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/team#notifications_info Team#notifications_info}
  */
  readonly notificationsInfo?: string[];
  /**
  * List of notification destinations to use for the major alerts category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/team#notifications_major Team#notifications_major}
  */
  readonly notificationsMajor?: string[];
  /**
  * List of notification destinations to use for the minor alerts category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/team#notifications_minor Team#notifications_minor}
  */
  readonly notificationsMinor?: string[];
  /**
  * List of notification destinations to use for the warning alerts category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/team#notifications_warning Team#notifications_warning}
  */
  readonly notificationsWarning?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/team signalfx_team}
*/
export class Team extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "signalfx_team";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Team resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Team to import
  * @param importFromId The id of the existing Team that should be imported. Refer to the {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/team#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Team to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "signalfx_team", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/team signalfx_team} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeamConfig
  */
  public constructor(scope: Construct, id: string, config: TeamConfig) {
    super(scope, id, {
      terraformResourceType: 'signalfx_team',
      terraformGeneratorMetadata: {
        providerName: 'signalfx',
        providerVersion: '9.22.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._members = config.members;
    this._name = config.name;
    this._notificationsCritical = config.notificationsCritical;
    this._notificationsDefault = config.notificationsDefault;
    this._notificationsInfo = config.notificationsInfo;
    this._notificationsMajor = config.notificationsMajor;
    this._notificationsMinor = config.notificationsMinor;
    this._notificationsWarning = config.notificationsWarning;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // members - computed: false, optional: true, required: false
  private _members?: string[]; 
  public get members() {
    return cdktf.Fn.tolist(this.getListAttribute('members'));
  }
  public set members(value: string[]) {
    this._members = value;
  }
  public resetMembers() {
    this._members = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // notifications_critical - computed: false, optional: true, required: false
  private _notificationsCritical?: string[]; 
  public get notificationsCritical() {
    return this.getListAttribute('notifications_critical');
  }
  public set notificationsCritical(value: string[]) {
    this._notificationsCritical = value;
  }
  public resetNotificationsCritical() {
    this._notificationsCritical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsCriticalInput() {
    return this._notificationsCritical;
  }

  // notifications_default - computed: false, optional: true, required: false
  private _notificationsDefault?: string[]; 
  public get notificationsDefault() {
    return this.getListAttribute('notifications_default');
  }
  public set notificationsDefault(value: string[]) {
    this._notificationsDefault = value;
  }
  public resetNotificationsDefault() {
    this._notificationsDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsDefaultInput() {
    return this._notificationsDefault;
  }

  // notifications_info - computed: false, optional: true, required: false
  private _notificationsInfo?: string[]; 
  public get notificationsInfo() {
    return this.getListAttribute('notifications_info');
  }
  public set notificationsInfo(value: string[]) {
    this._notificationsInfo = value;
  }
  public resetNotificationsInfo() {
    this._notificationsInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsInfoInput() {
    return this._notificationsInfo;
  }

  // notifications_major - computed: false, optional: true, required: false
  private _notificationsMajor?: string[]; 
  public get notificationsMajor() {
    return this.getListAttribute('notifications_major');
  }
  public set notificationsMajor(value: string[]) {
    this._notificationsMajor = value;
  }
  public resetNotificationsMajor() {
    this._notificationsMajor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsMajorInput() {
    return this._notificationsMajor;
  }

  // notifications_minor - computed: false, optional: true, required: false
  private _notificationsMinor?: string[]; 
  public get notificationsMinor() {
    return this.getListAttribute('notifications_minor');
  }
  public set notificationsMinor(value: string[]) {
    this._notificationsMinor = value;
  }
  public resetNotificationsMinor() {
    this._notificationsMinor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsMinorInput() {
    return this._notificationsMinor;
  }

  // notifications_warning - computed: false, optional: true, required: false
  private _notificationsWarning?: string[]; 
  public get notificationsWarning() {
    return this.getListAttribute('notifications_warning');
  }
  public set notificationsWarning(value: string[]) {
    this._notificationsWarning = value;
  }
  public resetNotificationsWarning() {
    this._notificationsWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsWarningInput() {
    return this._notificationsWarning;
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
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      members: cdktf.listMapper(cdktf.stringToTerraform, false)(this._members),
      name: cdktf.stringToTerraform(this._name),
      notifications_critical: cdktf.listMapper(cdktf.stringToTerraform, false)(this._notificationsCritical),
      notifications_default: cdktf.listMapper(cdktf.stringToTerraform, false)(this._notificationsDefault),
      notifications_info: cdktf.listMapper(cdktf.stringToTerraform, false)(this._notificationsInfo),
      notifications_major: cdktf.listMapper(cdktf.stringToTerraform, false)(this._notificationsMajor),
      notifications_minor: cdktf.listMapper(cdktf.stringToTerraform, false)(this._notificationsMinor),
      notifications_warning: cdktf.listMapper(cdktf.stringToTerraform, false)(this._notificationsWarning),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      members: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._members),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notifications_critical: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._notificationsCritical),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      notifications_default: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._notificationsDefault),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      notifications_info: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._notificationsInfo),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      notifications_major: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._notificationsMajor),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      notifications_minor: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._notificationsMinor),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      notifications_warning: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._notificationsWarning),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
