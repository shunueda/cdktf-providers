// https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/inference_secret
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InferenceSecretConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/inference_secret#data_aws_access_key_id InferenceSecret#data_aws_access_key_id}
  */
  readonly dataAwsAccessKeyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/inference_secret#data_aws_secret_access_key InferenceSecret#data_aws_secret_access_key}
  */
  readonly dataAwsSecretAccessKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/inference_secret#id InferenceSecret#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/inference_secret#name InferenceSecret#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/inference_secret#project_id InferenceSecret#project_id}
  */
  readonly projectId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/inference_secret#project_name InferenceSecret#project_name}
  */
  readonly projectName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/inference_secret gcore_inference_secret}
*/
export class InferenceSecret extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gcore_inference_secret";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InferenceSecret resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InferenceSecret to import
  * @param importFromId The id of the existing InferenceSecret that should be imported. Refer to the {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/inference_secret#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InferenceSecret to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gcore_inference_secret", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/inference_secret gcore_inference_secret} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InferenceSecretConfig
  */
  public constructor(scope: Construct, id: string, config: InferenceSecretConfig) {
    super(scope, id, {
      terraformResourceType: 'gcore_inference_secret',
      terraformGeneratorMetadata: {
        providerName: 'gcore',
        providerVersion: '0.32.1',
        providerVersionConstraint: '0.32.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dataAwsAccessKeyId = config.dataAwsAccessKeyId;
    this._dataAwsSecretAccessKey = config.dataAwsSecretAccessKey;
    this._id = config.id;
    this._name = config.name;
    this._projectId = config.projectId;
    this._projectName = config.projectName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_aws_access_key_id - computed: false, optional: false, required: true
  private _dataAwsAccessKeyId?: string; 
  public get dataAwsAccessKeyId() {
    return this.getStringAttribute('data_aws_access_key_id');
  }
  public set dataAwsAccessKeyId(value: string) {
    this._dataAwsAccessKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataAwsAccessKeyIdInput() {
    return this._dataAwsAccessKeyId;
  }

  // data_aws_secret_access_key - computed: false, optional: false, required: true
  private _dataAwsSecretAccessKey?: string; 
  public get dataAwsSecretAccessKey() {
    return this.getStringAttribute('data_aws_secret_access_key');
  }
  public set dataAwsSecretAccessKey(value: string) {
    this._dataAwsSecretAccessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataAwsSecretAccessKeyInput() {
    return this._dataAwsSecretAccessKey;
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

  // project_id - computed: false, optional: true, required: false
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // project_name - computed: false, optional: true, required: false
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  public resetProjectName() {
    this._projectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_aws_access_key_id: cdktf.stringToTerraform(this._dataAwsAccessKeyId),
      data_aws_secret_access_key: cdktf.stringToTerraform(this._dataAwsSecretAccessKey),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.numberToTerraform(this._projectId),
      project_name: cdktf.stringToTerraform(this._projectName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_aws_access_key_id: {
        value: cdktf.stringToHclTerraform(this._dataAwsAccessKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_aws_secret_access_key: {
        value: cdktf.stringToHclTerraform(this._dataAwsSecretAccessKey),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_name: {
        value: cdktf.stringToHclTerraform(this._projectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
