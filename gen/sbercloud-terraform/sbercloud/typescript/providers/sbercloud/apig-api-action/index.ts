// https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/apig_api_action
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApigApiActionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The operation on the API will be performed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/apig_api_action#action ApigApiAction#action}
  */
  readonly action: string;
  /**
  * The ID of the API to be published.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/apig_api_action#api_id ApigApiAction#api_id}
  */
  readonly apiId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/apig_api_action#enable_force_new ApigApiAction#enable_force_new}
  */
  readonly enableForceNew?: string;
  /**
  * The ID of the environment to which the API will be published.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/apig_api_action#env_id ApigApiAction#env_id}
  */
  readonly envId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/apig_api_action#id ApigApiAction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the dedicated instance to which the API belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/apig_api_action#instance_id ApigApiAction#instance_id}
  */
  readonly instanceId: string;
  /**
  * The region where the APIG instance to which the API belongs is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/apig_api_action#region ApigApiAction#region}
  */
  readonly region?: string;
  /**
  * The description of the publish action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/apig_api_action#remark ApigApiAction#remark}
  */
  readonly remark?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/apig_api_action sbercloud_apig_api_action}
*/
export class ApigApiAction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sbercloud_apig_api_action";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApigApiAction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApigApiAction to import
  * @param importFromId The id of the existing ApigApiAction that should be imported. Refer to the {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/apig_api_action#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApigApiAction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sbercloud_apig_api_action", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/apig_api_action sbercloud_apig_api_action} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApigApiActionConfig
  */
  public constructor(scope: Construct, id: string, config: ApigApiActionConfig) {
    super(scope, id, {
      terraformResourceType: 'sbercloud_apig_api_action',
      terraformGeneratorMetadata: {
        providerName: 'sbercloud',
        providerVersion: '1.12.14'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._apiId = config.apiId;
    this._enableForceNew = config.enableForceNew;
    this._envId = config.envId;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._region = config.region;
    this._remark = config.remark;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // api_id - computed: false, optional: false, required: true
  private _apiId?: string; 
  public get apiId() {
    return this.getStringAttribute('api_id');
  }
  public set apiId(value: string) {
    this._apiId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiIdInput() {
    return this._apiId;
  }

  // api_name - computed: true, optional: false, required: false
  public get apiName() {
    return this.getStringAttribute('api_name');
  }

  // enable_force_new - computed: false, optional: true, required: false
  private _enableForceNew?: string; 
  public get enableForceNew() {
    return this.getStringAttribute('enable_force_new');
  }
  public set enableForceNew(value: string) {
    this._enableForceNew = value;
  }
  public resetEnableForceNew() {
    this._enableForceNew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableForceNewInput() {
    return this._enableForceNew;
  }

  // env_id - computed: false, optional: false, required: true
  private _envId?: string; 
  public get envId() {
    return this.getStringAttribute('env_id');
  }
  public set envId(value: string) {
    this._envId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get envIdInput() {
    return this._envId;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // publish_id - computed: true, optional: false, required: false
  public get publishId() {
    return this.getStringAttribute('publish_id');
  }

  // publish_time - computed: true, optional: false, required: false
  public get publishTime() {
    return this.getStringAttribute('publish_time');
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // remark - computed: false, optional: true, required: false
  private _remark?: string; 
  public get remark() {
    return this.getStringAttribute('remark');
  }
  public set remark(value: string) {
    this._remark = value;
  }
  public resetRemark() {
    this._remark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remarkInput() {
    return this._remark;
  }

  // version_id - computed: true, optional: false, required: false
  public get versionId() {
    return this.getStringAttribute('version_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      api_id: cdktf.stringToTerraform(this._apiId),
      enable_force_new: cdktf.stringToTerraform(this._enableForceNew),
      env_id: cdktf.stringToTerraform(this._envId),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      region: cdktf.stringToTerraform(this._region),
      remark: cdktf.stringToTerraform(this._remark),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_id: {
        value: cdktf.stringToHclTerraform(this._apiId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_force_new: {
        value: cdktf.stringToHclTerraform(this._enableForceNew),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      env_id: {
        value: cdktf.stringToHclTerraform(this._envId),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remark: {
        value: cdktf.stringToHclTerraform(this._remark),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
