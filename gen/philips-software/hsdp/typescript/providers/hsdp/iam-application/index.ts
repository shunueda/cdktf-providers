// https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/iam_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/iam_application#description IamApplication#description}
  */
  readonly description: string;
  /**
  * Reference identifier defined by the provisioning user. Recommend to not set this and let Terraform generate a UUID for you.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/iam_application#global_reference_id IamApplication#global_reference_id}
  */
  readonly globalReferenceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/iam_application#id IamApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/iam_application#name IamApplication#name}
  */
  readonly name: string;
  /**
  * The proposition ID (GUID) to attach this a application to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/iam_application#proposition_id IamApplication#proposition_id}
  */
  readonly propositionId: string;
  /**
  * Blocks until the application delete has completed. Default: false. The application delete process can take some time as all its associated resources like services and clients are removed recursively. This option is useful for ephemeral environments where the same application might be recreated shortly after a destroy operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/iam_application#wait_for_delete IamApplication#wait_for_delete}
  */
  readonly waitForDelete?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/iam_application hsdp_iam_application}
*/
export class IamApplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hsdp_iam_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IamApplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IamApplication to import
  * @param importFromId The id of the existing IamApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/iam_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IamApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hsdp_iam_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/iam_application hsdp_iam_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IamApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: IamApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'hsdp_iam_application',
      terraformGeneratorMetadata: {
        providerName: 'hsdp',
        providerVersion: '1.0.0',
        providerVersionConstraint: '1.0.0'
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
    this._globalReferenceId = config.globalReferenceId;
    this._id = config.id;
    this._name = config.name;
    this._propositionId = config.propositionId;
    this._waitForDelete = config.waitForDelete;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // global_reference_id - computed: false, optional: true, required: false
  private _globalReferenceId?: string; 
  public get globalReferenceId() {
    return this.getStringAttribute('global_reference_id');
  }
  public set globalReferenceId(value: string) {
    this._globalReferenceId = value;
  }
  public resetGlobalReferenceId() {
    this._globalReferenceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalReferenceIdInput() {
    return this._globalReferenceId;
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

  // proposition_id - computed: false, optional: false, required: true
  private _propositionId?: string; 
  public get propositionId() {
    return this.getStringAttribute('proposition_id');
  }
  public set propositionId(value: string) {
    this._propositionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propositionIdInput() {
    return this._propositionId;
  }

  // wait_for_delete - computed: false, optional: true, required: false
  private _waitForDelete?: boolean | cdktf.IResolvable; 
  public get waitForDelete() {
    return this.getBooleanAttribute('wait_for_delete');
  }
  public set waitForDelete(value: boolean | cdktf.IResolvable) {
    this._waitForDelete = value;
  }
  public resetWaitForDelete() {
    this._waitForDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForDeleteInput() {
    return this._waitForDelete;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      global_reference_id: cdktf.stringToTerraform(this._globalReferenceId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      proposition_id: cdktf.stringToTerraform(this._propositionId),
      wait_for_delete: cdktf.booleanToTerraform(this._waitForDelete),
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
      global_reference_id: {
        value: cdktf.stringToHclTerraform(this._globalReferenceId),
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
      proposition_id: {
        value: cdktf.stringToHclTerraform(this._propositionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_for_delete: {
        value: cdktf.booleanToHclTerraform(this._waitForDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
