// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_edas_application_scale
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApsarastackEdasApplicationScaleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_edas_application_scale#app_id ApsarastackEdasApplicationScale#app_id}
  */
  readonly appId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_edas_application_scale#deploy_group ApsarastackEdasApplicationScale#deploy_group}
  */
  readonly deployGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_edas_application_scale#ecu_info ApsarastackEdasApplicationScale#ecu_info}
  */
  readonly ecuInfo: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_edas_application_scale#force_status ApsarastackEdasApplicationScale#force_status}
  */
  readonly forceStatus?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_edas_application_scale#id ApsarastackEdasApplicationScale#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_edas_application_scale apsarastack_edas_application_scale}
*/
export class ApsarastackEdasApplicationScale extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_edas_application_scale";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApsarastackEdasApplicationScale resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsarastackEdasApplicationScale to import
  * @param importFromId The id of the existing ApsarastackEdasApplicationScale that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_edas_application_scale#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsarastackEdasApplicationScale to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_edas_application_scale", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_edas_application_scale apsarastack_edas_application_scale} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsarastackEdasApplicationScaleConfig
  */
  public constructor(scope: Construct, id: string, config: ApsarastackEdasApplicationScaleConfig) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_edas_application_scale',
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
    this._appId = config.appId;
    this._deployGroup = config.deployGroup;
    this._ecuInfo = config.ecuInfo;
    this._forceStatus = config.forceStatus;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_id - computed: false, optional: false, required: true
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
  }

  // deploy_group - computed: false, optional: false, required: true
  private _deployGroup?: string; 
  public get deployGroup() {
    return this.getStringAttribute('deploy_group');
  }
  public set deployGroup(value: string) {
    this._deployGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deployGroupInput() {
    return this._deployGroup;
  }

  // ecc_info - computed: true, optional: false, required: false
  public get eccInfo() {
    return this.getStringAttribute('ecc_info');
  }

  // ecu_info - computed: false, optional: false, required: true
  private _ecuInfo?: string[]; 
  public get ecuInfo() {
    return this.getListAttribute('ecu_info');
  }
  public set ecuInfo(value: string[]) {
    this._ecuInfo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ecuInfoInput() {
    return this._ecuInfo;
  }

  // force_status - computed: false, optional: true, required: false
  private _forceStatus?: boolean | cdktf.IResolvable; 
  public get forceStatus() {
    return this.getBooleanAttribute('force_status');
  }
  public set forceStatus(value: boolean | cdktf.IResolvable) {
    this._forceStatus = value;
  }
  public resetForceStatus() {
    this._forceStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceStatusInput() {
    return this._forceStatus;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_id: cdktf.stringToTerraform(this._appId),
      deploy_group: cdktf.stringToTerraform(this._deployGroup),
      ecu_info: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ecuInfo),
      force_status: cdktf.booleanToTerraform(this._forceStatus),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_id: {
        value: cdktf.stringToHclTerraform(this._appId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deploy_group: {
        value: cdktf.stringToHclTerraform(this._deployGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ecu_info: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ecuInfo),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      force_status: {
        value: cdktf.booleanToHclTerraform(this._forceStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
