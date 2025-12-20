// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/flow
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FlowConfig extends cdktf.TerraformMetaArguments {
  /**
  * YAML file path for flow configuration. Note: Changing the flow name will result in the creation of a new flow with a new GUID, while the original flow will persist in your org.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/flow#filepath Flow#filepath}
  */
  readonly filepath: string;
  /**
  * Will perform a force unlock on an architect flow before beginning the publication process.  NOTE: The force unlock publishes the 'draft'
  * 				              architect flow and then publishes the flow named in this resource. This mirrors the behavior found in the archy CLI tool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/flow#force_unlock Flow#force_unlock}
  */
  readonly forceUnlock?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/flow#id Flow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Flow Name used for export purposes. Note: The 'substitutions' block should be used to set/change 'name' and any other fields in the yaml file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/flow#name Flow#name}
  */
  readonly name?: string;
  /**
  * A substitution is a key value pair where the key is the value you want to replace, and the value is the value to substitute in its place.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/flow#substitutions Flow#substitutions}
  */
  readonly substitutions?: { [key: string]: string };
  /**
  * Flow Type used for export purposes. Note: The 'substitutions' block should be used to set/change 'type' and any other fields in the yaml file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/flow#type Flow#type}
  */
  readonly type?: string;
  /**
  * A hash value used to trigger resource updates. When this value changes, the resource will be refreshed. Use this to hash external values such as environment variables, outputs from other resources, or timestamps that should initiate an update. By default, `file_content_hash` hashes the content of the file specified by the filepath field to trigger updates. This field can be used as an alternative for greater control over the update triggers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/flow#update_trigger_hash Flow#update_trigger_hash}
  */
  readonly updateTriggerHash?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/flow genesyscloud_flow}
*/
export class Flow extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_flow";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Flow resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Flow to import
  * @param importFromId The id of the existing Flow that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/flow#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Flow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_flow", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/flow genesyscloud_flow} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FlowConfig
  */
  public constructor(scope: Construct, id: string, config: FlowConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_flow',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.73.0',
        providerVersionConstraint: '1.73.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filepath = config.filepath;
    this._forceUnlock = config.forceUnlock;
    this._id = config.id;
    this._name = config.name;
    this._substitutions = config.substitutions;
    this._type = config.type;
    this._updateTriggerHash = config.updateTriggerHash;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // file_content_hash - computed: true, optional: false, required: false
  public get fileContentHash() {
    return this.getStringAttribute('file_content_hash');
  }

  // filepath - computed: false, optional: false, required: true
  private _filepath?: string; 
  public get filepath() {
    return this.getStringAttribute('filepath');
  }
  public set filepath(value: string) {
    this._filepath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filepathInput() {
    return this._filepath;
  }

  // force_unlock - computed: false, optional: true, required: false
  private _forceUnlock?: boolean | cdktf.IResolvable; 
  public get forceUnlock() {
    return this.getBooleanAttribute('force_unlock');
  }
  public set forceUnlock(value: boolean | cdktf.IResolvable) {
    this._forceUnlock = value;
  }
  public resetForceUnlock() {
    this._forceUnlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceUnlockInput() {
    return this._forceUnlock;
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // substitutions - computed: false, optional: true, required: false
  private _substitutions?: { [key: string]: string }; 
  public get substitutions() {
    return this.getStringMapAttribute('substitutions');
  }
  public set substitutions(value: { [key: string]: string }) {
    this._substitutions = value;
  }
  public resetSubstitutions() {
    this._substitutions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get substitutionsInput() {
    return this._substitutions;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // update_trigger_hash - computed: false, optional: true, required: false
  private _updateTriggerHash?: string; 
  public get updateTriggerHash() {
    return this.getStringAttribute('update_trigger_hash');
  }
  public set updateTriggerHash(value: string) {
    this._updateTriggerHash = value;
  }
  public resetUpdateTriggerHash() {
    this._updateTriggerHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateTriggerHashInput() {
    return this._updateTriggerHash;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filepath: cdktf.stringToTerraform(this._filepath),
      force_unlock: cdktf.booleanToTerraform(this._forceUnlock),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      substitutions: cdktf.hashMapper(cdktf.stringToTerraform)(this._substitutions),
      type: cdktf.stringToTerraform(this._type),
      update_trigger_hash: cdktf.stringToTerraform(this._updateTriggerHash),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filepath: {
        value: cdktf.stringToHclTerraform(this._filepath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_unlock: {
        value: cdktf.booleanToHclTerraform(this._forceUnlock),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      substitutions: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._substitutions),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_trigger_hash: {
        value: cdktf.stringToHclTerraform(this._updateTriggerHash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
