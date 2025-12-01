// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/nas_accessrule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NasAccessruleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/nas_accessrule#access_group_name NasAccessrule#access_group_name}
  */
  readonly accessGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/nas_accessrule#id NasAccessrule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/nas_accessrule#priority NasAccessrule#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/nas_accessrule#rw_access_type NasAccessrule#rw_access_type}
  */
  readonly rwAccessType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/nas_accessrule#source_cidr_ip NasAccessrule#source_cidr_ip}
  */
  readonly sourceCidrIp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/nas_accessrule#user_access_type NasAccessrule#user_access_type}
  */
  readonly userAccessType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/nas_accessrule alibabacloudstack_nas_accessrule}
*/
export class NasAccessrule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_nas_accessrule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NasAccessrule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NasAccessrule to import
  * @param importFromId The id of the existing NasAccessrule that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/nas_accessrule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NasAccessrule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_nas_accessrule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/nas_accessrule alibabacloudstack_nas_accessrule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NasAccessruleConfig
  */
  public constructor(scope: Construct, id: string, config: NasAccessruleConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_nas_accessrule',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.20',
        providerVersionConstraint: '3.18.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessGroupName = config.accessGroupName;
    this._id = config.id;
    this._priority = config.priority;
    this._rwAccessType = config.rwAccessType;
    this._sourceCidrIp = config.sourceCidrIp;
    this._userAccessType = config.userAccessType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_group_name - computed: false, optional: false, required: true
  private _accessGroupName?: string; 
  public get accessGroupName() {
    return this.getStringAttribute('access_group_name');
  }
  public set accessGroupName(value: string) {
    this._accessGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessGroupNameInput() {
    return this._accessGroupName;
  }

  // access_rule_id - computed: true, optional: false, required: false
  public get accessRuleId() {
    return this.getStringAttribute('access_rule_id');
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

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // rw_access_type - computed: false, optional: true, required: false
  private _rwAccessType?: string; 
  public get rwAccessType() {
    return this.getStringAttribute('rw_access_type');
  }
  public set rwAccessType(value: string) {
    this._rwAccessType = value;
  }
  public resetRwAccessType() {
    this._rwAccessType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rwAccessTypeInput() {
    return this._rwAccessType;
  }

  // source_cidr_ip - computed: false, optional: false, required: true
  private _sourceCidrIp?: string; 
  public get sourceCidrIp() {
    return this.getStringAttribute('source_cidr_ip');
  }
  public set sourceCidrIp(value: string) {
    this._sourceCidrIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceCidrIpInput() {
    return this._sourceCidrIp;
  }

  // user_access_type - computed: false, optional: true, required: false
  private _userAccessType?: string; 
  public get userAccessType() {
    return this.getStringAttribute('user_access_type');
  }
  public set userAccessType(value: string) {
    this._userAccessType = value;
  }
  public resetUserAccessType() {
    this._userAccessType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAccessTypeInput() {
    return this._userAccessType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_group_name: cdktf.stringToTerraform(this._accessGroupName),
      id: cdktf.stringToTerraform(this._id),
      priority: cdktf.numberToTerraform(this._priority),
      rw_access_type: cdktf.stringToTerraform(this._rwAccessType),
      source_cidr_ip: cdktf.stringToTerraform(this._sourceCidrIp),
      user_access_type: cdktf.stringToTerraform(this._userAccessType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_group_name: {
        value: cdktf.stringToHclTerraform(this._accessGroupName),
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
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rw_access_type: {
        value: cdktf.stringToHclTerraform(this._rwAccessType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_cidr_ip: {
        value: cdktf.stringToHclTerraform(this._sourceCidrIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_access_type: {
        value: cdktf.stringToHclTerraform(this._userAccessType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
