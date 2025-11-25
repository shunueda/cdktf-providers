// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cam_role_sso
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CamRoleSsoConfig extends cdktf.TerraformMetaArguments {
  /**
  * Client ids.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cam_role_sso#client_ids CamRoleSso#client_ids}
  */
  readonly clientIds: string[];
  /**
  * The description of resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cam_role_sso#description CamRoleSso#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cam_role_sso#id CamRoleSso#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Sign the public key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cam_role_sso#identity_key CamRoleSso#identity_key}
  */
  readonly identityKey: string;
  /**
  * Identity provider URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cam_role_sso#identity_url CamRoleSso#identity_url}
  */
  readonly identityUrl: string;
  /**
  * The name of resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cam_role_sso#name CamRoleSso#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cam_role_sso tencentcloud_cam_role_sso}
*/
export class CamRoleSso extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cam_role_sso";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CamRoleSso resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CamRoleSso to import
  * @param importFromId The id of the existing CamRoleSso that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cam_role_sso#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CamRoleSso to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cam_role_sso", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cam_role_sso tencentcloud_cam_role_sso} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CamRoleSsoConfig
  */
  public constructor(scope: Construct, id: string, config: CamRoleSsoConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cam_role_sso',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.38',
        providerVersionConstraint: '1.82.38'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clientIds = config.clientIds;
    this._description = config.description;
    this._id = config.id;
    this._identityKey = config.identityKey;
    this._identityUrl = config.identityUrl;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_ids - computed: false, optional: false, required: true
  private _clientIds?: string[]; 
  public get clientIds() {
    return cdktf.Fn.tolist(this.getListAttribute('client_ids'));
  }
  public set clientIds(value: string[]) {
    this._clientIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdsInput() {
    return this._clientIds;
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

  // identity_key - computed: false, optional: false, required: true
  private _identityKey?: string; 
  public get identityKey() {
    return this.getStringAttribute('identity_key');
  }
  public set identityKey(value: string) {
    this._identityKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityKeyInput() {
    return this._identityKey;
  }

  // identity_url - computed: false, optional: false, required: true
  private _identityUrl?: string; 
  public get identityUrl() {
    return this.getStringAttribute('identity_url');
  }
  public set identityUrl(value: string) {
    this._identityUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityUrlInput() {
    return this._identityUrl;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._clientIds),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      identity_key: cdktf.stringToTerraform(this._identityKey),
      identity_url: cdktf.stringToTerraform(this._identityUrl),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._clientIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      identity_key: {
        value: cdktf.stringToHclTerraform(this._identityKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity_url: {
        value: cdktf.stringToHclTerraform(this._identityUrl),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
