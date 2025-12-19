// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_user_group_assignment_template_v6_assignment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ScaleoutUserGroupAssignmentTemplateV6AssignmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * User group assignment prefix length, default is 128
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_user_group_assignment_template_v6_assignment#assignment_prefix_length ScaleoutUserGroupAssignmentTemplateV6Assignment#assignment_prefix_length}
  */
  readonly assignmentPrefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_user_group_assignment_template_v6_assignment#id ScaleoutUserGroupAssignmentTemplateV6Assignment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IPv6 prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_user_group_assignment_template_v6_assignment#ipv6_prefix ScaleoutUserGroupAssignmentTemplateV6Assignment#ipv6_prefix}
  */
  readonly ipv6Prefix: string;
  /**
  * Configure a scaleout service config template to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_user_group_assignment_template_v6_assignment#service_config_template ScaleoutUserGroupAssignmentTemplateV6Assignment#service_config_template}
  */
  readonly serviceConfigTemplate?: string;
  /**
  * User_group_assignment_template_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_user_group_assignment_template_v6_assignment#user_group_assignment_template_name ScaleoutUserGroupAssignmentTemplateV6Assignment#user_group_assignment_template_name}
  */
  readonly userGroupAssignmentTemplateName: string;
  /**
  * User group range end
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_user_group_assignment_template_v6_assignment#user_group_range_end ScaleoutUserGroupAssignmentTemplateV6Assignment#user_group_range_end}
  */
  readonly userGroupRangeEnd?: number;
  /**
  * User group range start
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_user_group_assignment_template_v6_assignment#user_group_range_start ScaleoutUserGroupAssignmentTemplateV6Assignment#user_group_range_start}
  */
  readonly userGroupRangeStart?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_user_group_assignment_template_v6_assignment#uuid ScaleoutUserGroupAssignmentTemplateV6Assignment#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_user_group_assignment_template_v6_assignment thunder_scaleout_user_group_assignment_template_v6_assignment}
*/
export class ScaleoutUserGroupAssignmentTemplateV6Assignment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_scaleout_user_group_assignment_template_v6_assignment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ScaleoutUserGroupAssignmentTemplateV6Assignment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ScaleoutUserGroupAssignmentTemplateV6Assignment to import
  * @param importFromId The id of the existing ScaleoutUserGroupAssignmentTemplateV6Assignment that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_user_group_assignment_template_v6_assignment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ScaleoutUserGroupAssignmentTemplateV6Assignment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_scaleout_user_group_assignment_template_v6_assignment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_user_group_assignment_template_v6_assignment thunder_scaleout_user_group_assignment_template_v6_assignment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ScaleoutUserGroupAssignmentTemplateV6AssignmentConfig
  */
  public constructor(scope: Construct, id: string, config: ScaleoutUserGroupAssignmentTemplateV6AssignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_scaleout_user_group_assignment_template_v6_assignment',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._assignmentPrefixLength = config.assignmentPrefixLength;
    this._id = config.id;
    this._ipv6Prefix = config.ipv6Prefix;
    this._serviceConfigTemplate = config.serviceConfigTemplate;
    this._userGroupAssignmentTemplateName = config.userGroupAssignmentTemplateName;
    this._userGroupRangeEnd = config.userGroupRangeEnd;
    this._userGroupRangeStart = config.userGroupRangeStart;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assignment_prefix_length - computed: false, optional: true, required: false
  private _assignmentPrefixLength?: number; 
  public get assignmentPrefixLength() {
    return this.getNumberAttribute('assignment_prefix_length');
  }
  public set assignmentPrefixLength(value: number) {
    this._assignmentPrefixLength = value;
  }
  public resetAssignmentPrefixLength() {
    this._assignmentPrefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignmentPrefixLengthInput() {
    return this._assignmentPrefixLength;
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

  // ipv6_prefix - computed: false, optional: false, required: true
  private _ipv6Prefix?: string; 
  public get ipv6Prefix() {
    return this.getStringAttribute('ipv6_prefix');
  }
  public set ipv6Prefix(value: string) {
    this._ipv6Prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixInput() {
    return this._ipv6Prefix;
  }

  // service_config_template - computed: false, optional: true, required: false
  private _serviceConfigTemplate?: string; 
  public get serviceConfigTemplate() {
    return this.getStringAttribute('service_config_template');
  }
  public set serviceConfigTemplate(value: string) {
    this._serviceConfigTemplate = value;
  }
  public resetServiceConfigTemplate() {
    this._serviceConfigTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceConfigTemplateInput() {
    return this._serviceConfigTemplate;
  }

  // user_group_assignment_template_name - computed: false, optional: false, required: true
  private _userGroupAssignmentTemplateName?: string; 
  public get userGroupAssignmentTemplateName() {
    return this.getStringAttribute('user_group_assignment_template_name');
  }
  public set userGroupAssignmentTemplateName(value: string) {
    this._userGroupAssignmentTemplateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupAssignmentTemplateNameInput() {
    return this._userGroupAssignmentTemplateName;
  }

  // user_group_range_end - computed: false, optional: true, required: false
  private _userGroupRangeEnd?: number; 
  public get userGroupRangeEnd() {
    return this.getNumberAttribute('user_group_range_end');
  }
  public set userGroupRangeEnd(value: number) {
    this._userGroupRangeEnd = value;
  }
  public resetUserGroupRangeEnd() {
    this._userGroupRangeEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupRangeEndInput() {
    return this._userGroupRangeEnd;
  }

  // user_group_range_start - computed: false, optional: true, required: false
  private _userGroupRangeStart?: number; 
  public get userGroupRangeStart() {
    return this.getNumberAttribute('user_group_range_start');
  }
  public set userGroupRangeStart(value: number) {
    this._userGroupRangeStart = value;
  }
  public resetUserGroupRangeStart() {
    this._userGroupRangeStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupRangeStartInput() {
    return this._userGroupRangeStart;
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
      assignment_prefix_length: cdktf.numberToTerraform(this._assignmentPrefixLength),
      id: cdktf.stringToTerraform(this._id),
      ipv6_prefix: cdktf.stringToTerraform(this._ipv6Prefix),
      service_config_template: cdktf.stringToTerraform(this._serviceConfigTemplate),
      user_group_assignment_template_name: cdktf.stringToTerraform(this._userGroupAssignmentTemplateName),
      user_group_range_end: cdktf.numberToTerraform(this._userGroupRangeEnd),
      user_group_range_start: cdktf.numberToTerraform(this._userGroupRangeStart),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assignment_prefix_length: {
        value: cdktf.numberToHclTerraform(this._assignmentPrefixLength),
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
      ipv6_prefix: {
        value: cdktf.stringToHclTerraform(this._ipv6Prefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_config_template: {
        value: cdktf.stringToHclTerraform(this._serviceConfigTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_group_assignment_template_name: {
        value: cdktf.stringToHclTerraform(this._userGroupAssignmentTemplateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_group_range_end: {
        value: cdktf.numberToHclTerraform(this._userGroupRangeEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_group_range_start: {
        value: cdktf.numberToHclTerraform(this._userGroupRangeStart),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
