// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cam_service_linked_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CamServiceLinkedRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The custom suffix, based on the string you provide, is combined with the prefix provided by the service to form the full role name. This field is not allowed to contain the character `_`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cam_service_linked_role#custom_suffix CamServiceLinkedRole#custom_suffix}
  */
  readonly customSuffix?: string;
  /**
  * role description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cam_service_linked_role#description CamServiceLinkedRole#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cam_service_linked_role#id CamServiceLinkedRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Authorization service, the Tencent Cloud service principal with this role attached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cam_service_linked_role#qcs_service_name CamServiceLinkedRole#qcs_service_name}
  */
  readonly qcsServiceName: string[];
  /**
  * Tag description list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cam_service_linked_role#tags CamServiceLinkedRole#tags}
  */
  readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cam_service_linked_role tencentcloud_cam_service_linked_role}
*/
export class CamServiceLinkedRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cam_service_linked_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CamServiceLinkedRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CamServiceLinkedRole to import
  * @param importFromId The id of the existing CamServiceLinkedRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cam_service_linked_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CamServiceLinkedRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cam_service_linked_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cam_service_linked_role tencentcloud_cam_service_linked_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CamServiceLinkedRoleConfig
  */
  public constructor(scope: Construct, id: string, config: CamServiceLinkedRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cam_service_linked_role',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.43',
        providerVersionConstraint: '1.82.43'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customSuffix = config.customSuffix;
    this._description = config.description;
    this._id = config.id;
    this._qcsServiceName = config.qcsServiceName;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_suffix - computed: true, optional: true, required: false
  private _customSuffix?: string; 
  public get customSuffix() {
    return this.getStringAttribute('custom_suffix');
  }
  public set customSuffix(value: string) {
    this._customSuffix = value;
  }
  public resetCustomSuffix() {
    this._customSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSuffixInput() {
    return this._customSuffix;
  }

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

  // qcs_service_name - computed: false, optional: false, required: true
  private _qcsServiceName?: string[]; 
  public get qcsServiceName() {
    return cdktf.Fn.tolist(this.getListAttribute('qcs_service_name'));
  }
  public set qcsServiceName(value: string[]) {
    this._qcsServiceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get qcsServiceNameInput() {
    return this._qcsServiceName;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_suffix: cdktf.stringToTerraform(this._customSuffix),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      qcs_service_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._qcsServiceName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_suffix: {
        value: cdktf.stringToHclTerraform(this._customSuffix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      qcs_service_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._qcsServiceName),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
