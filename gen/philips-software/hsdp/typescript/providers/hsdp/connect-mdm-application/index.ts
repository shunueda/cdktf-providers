// https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectMdmApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_application#default_group_guid ConnectMdmApplication#default_group_guid}
  */
  readonly defaultGroupGuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_application#description ConnectMdmApplication#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_application#global_reference_id ConnectMdmApplication#global_reference_id}
  */
  readonly globalReferenceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_application#id ConnectMdmApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_application#name ConnectMdmApplication#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_application#proposition_id ConnectMdmApplication#proposition_id}
  */
  readonly propositionId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_application hsdp_connect_mdm_application}
*/
export class ConnectMdmApplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hsdp_connect_mdm_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConnectMdmApplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConnectMdmApplication to import
  * @param importFromId The id of the existing ConnectMdmApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConnectMdmApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hsdp_connect_mdm_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_application hsdp_connect_mdm_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectMdmApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectMdmApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'hsdp_connect_mdm_application',
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
    this._defaultGroupGuid = config.defaultGroupGuid;
    this._description = config.description;
    this._globalReferenceId = config.globalReferenceId;
    this._id = config.id;
    this._name = config.name;
    this._propositionId = config.propositionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_guid_system - computed: true, optional: false, required: false
  public get applicationGuidSystem() {
    return this.getStringAttribute('application_guid_system');
  }

  // application_guid_value - computed: true, optional: false, required: false
  public get applicationGuidValue() {
    return this.getStringAttribute('application_guid_value');
  }

  // default_group_guid - computed: false, optional: true, required: false
  private _defaultGroupGuid?: string; 
  public get defaultGroupGuid() {
    return this.getStringAttribute('default_group_guid');
  }
  public set defaultGroupGuid(value: string) {
    this._defaultGroupGuid = value;
  }
  public resetDefaultGroupGuid() {
    this._defaultGroupGuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGroupGuidInput() {
    return this._defaultGroupGuid;
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

  // guid - computed: true, optional: false, required: false
  public get guid() {
    return this.getStringAttribute('guid');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_group_guid: cdktf.stringToTerraform(this._defaultGroupGuid),
      description: cdktf.stringToTerraform(this._description),
      global_reference_id: cdktf.stringToTerraform(this._globalReferenceId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      proposition_id: cdktf.stringToTerraform(this._propositionId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_group_guid: {
        value: cdktf.stringToHclTerraform(this._defaultGroupGuid),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
