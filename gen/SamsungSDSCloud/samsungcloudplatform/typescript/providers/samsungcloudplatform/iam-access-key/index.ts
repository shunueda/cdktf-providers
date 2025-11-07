// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/iam_access_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamAccessKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Access key activation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/iam_access_key#access_key_activated IamAccessKey#access_key_activated}
  */
  readonly accessKeyActivated?: boolean | cdktf.IResolvable;
  /**
  * Expiration time (days), set to zero to get permanent key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/iam_access_key#duration_days IamAccessKey#duration_days}
  */
  readonly durationDays: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/iam_access_key#id IamAccessKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Project ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/iam_access_key#project_id IamAccessKey#project_id}
  */
  readonly projectId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/iam_access_key samsungcloudplatform_iam_access_key}
*/
export class IamAccessKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_iam_access_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IamAccessKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IamAccessKey to import
  * @param importFromId The id of the existing IamAccessKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/iam_access_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IamAccessKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_iam_access_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/iam_access_key samsungcloudplatform_iam_access_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IamAccessKeyConfig
  */
  public constructor(scope: Construct, id: string, config: IamAccessKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_iam_access_key',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessKeyActivated = config.accessKeyActivated;
    this._durationDays = config.durationDays;
    this._id = config.id;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_key - computed: true, optional: false, required: false
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }

  // access_key_activated - computed: true, optional: true, required: false
  private _accessKeyActivated?: boolean | cdktf.IResolvable; 
  public get accessKeyActivated() {
    return this.getBooleanAttribute('access_key_activated');
  }
  public set accessKeyActivated(value: boolean | cdktf.IResolvable) {
    this._accessKeyActivated = value;
  }
  public resetAccessKeyActivated() {
    this._accessKeyActivated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyActivatedInput() {
    return this._accessKeyActivated;
  }

  // access_key_id - computed: true, optional: false, required: false
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }

  // access_key_state - computed: true, optional: false, required: false
  public get accessKeyState() {
    return this.getStringAttribute('access_key_state');
  }

  // access_secret_key - computed: true, optional: false, required: false
  public get accessSecretKey() {
    return this.getStringAttribute('access_secret_key');
  }

  // duration_days - computed: false, optional: false, required: true
  private _durationDays?: number; 
  public get durationDays() {
    return this.getNumberAttribute('duration_days');
  }
  public set durationDays(value: number) {
    this._durationDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationDaysInput() {
    return this._durationDays;
  }

  // expired_dt - computed: true, optional: false, required: false
  public get expiredDt() {
    return this.getStringAttribute('expired_dt');
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

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // project_name - computed: true, optional: false, required: false
  public get projectName() {
    return this.getStringAttribute('project_name');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_key_activated: cdktf.booleanToTerraform(this._accessKeyActivated),
      duration_days: cdktf.numberToTerraform(this._durationDays),
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_key_activated: {
        value: cdktf.booleanToHclTerraform(this._accessKeyActivated),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      duration_days: {
        value: cdktf.numberToHclTerraform(this._durationDays),
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
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
