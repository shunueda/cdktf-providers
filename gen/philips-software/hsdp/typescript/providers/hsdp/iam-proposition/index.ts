// https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/iam_proposition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamPropositionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/iam_proposition#description IamProposition#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/iam_proposition#global_reference_id IamProposition#global_reference_id}
  */
  readonly globalReferenceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/iam_proposition#id IamProposition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/iam_proposition#name IamProposition#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/iam_proposition#organization_id IamProposition#organization_id}
  */
  readonly organizationId: string;
  /**
  * Blocks until the proposition delete has completed. Default: false. The proposition delete process can take some time as all its associated resources like applications and services are removed recursively. This option is useful for ephemeral environments where the same proposition might be recreated shortly after a destroy operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/iam_proposition#wait_for_delete IamProposition#wait_for_delete}
  */
  readonly waitForDelete?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/iam_proposition hsdp_iam_proposition}
*/
export class IamProposition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hsdp_iam_proposition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IamProposition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IamProposition to import
  * @param importFromId The id of the existing IamProposition that should be imported. Refer to the {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/iam_proposition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IamProposition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hsdp_iam_proposition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/iam_proposition hsdp_iam_proposition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IamPropositionConfig
  */
  public constructor(scope: Construct, id: string, config: IamPropositionConfig) {
    super(scope, id, {
      terraformResourceType: 'hsdp_iam_proposition',
      terraformGeneratorMetadata: {
        providerName: 'hsdp',
        providerVersion: '0.71.0',
        providerVersionConstraint: '0.71.0'
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
    this._organizationId = config.organizationId;
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

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
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
      organization_id: cdktf.stringToTerraform(this._organizationId),
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
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
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
