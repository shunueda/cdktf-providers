// https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/vanity_nameserver
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VanityNameserverConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/vanity_nameserver#id VanityNameserver#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/vanity_nameserver#is_default VanityNameserver#is_default}
  */
  readonly isDefault?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/vanity_nameserver#is_public VanityNameserver#is_public}
  */
  readonly isPublic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/vanity_nameserver#name VanityNameserver#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/vanity_nameserver#nameserver_group VanityNameserver#nameserver_group}
  */
  readonly nameserverGroup: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/vanity_nameserver#nameserver_group_name VanityNameserver#nameserver_group_name}
  */
  readonly nameserverGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/vanity_nameserver#nameserver_list_string VanityNameserver#nameserver_list_string}
  */
  readonly nameserverListString: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/vanity_nameserver constellix_vanity_nameserver}
*/
export class VanityNameserver extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "constellix_vanity_nameserver";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VanityNameserver resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VanityNameserver to import
  * @param importFromId The id of the existing VanityNameserver that should be imported. Refer to the {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/vanity_nameserver#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VanityNameserver to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "constellix_vanity_nameserver", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/vanity_nameserver constellix_vanity_nameserver} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VanityNameserverConfig
  */
  public constructor(scope: Construct, id: string, config: VanityNameserverConfig) {
    super(scope, id, {
      terraformResourceType: 'constellix_vanity_nameserver',
      terraformGeneratorMetadata: {
        providerName: 'constellix',
        providerVersion: '0.4.6',
        providerVersionConstraint: '0.4.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._isDefault = config.isDefault;
    this._isPublic = config.isPublic;
    this._name = config.name;
    this._nameserverGroup = config.nameserverGroup;
    this._nameserverGroupName = config.nameserverGroupName;
    this._nameserverListString = config.nameserverListString;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // is_default - computed: true, optional: true, required: false
  private _isDefault?: boolean | cdktf.IResolvable; 
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }
  public set isDefault(value: boolean | cdktf.IResolvable) {
    this._isDefault = value;
  }
  public resetIsDefault() {
    this._isDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultInput() {
    return this._isDefault;
  }

  // is_public - computed: true, optional: true, required: false
  private _isPublic?: boolean | cdktf.IResolvable; 
  public get isPublic() {
    return this.getBooleanAttribute('is_public');
  }
  public set isPublic(value: boolean | cdktf.IResolvable) {
    this._isPublic = value;
  }
  public resetIsPublic() {
    this._isPublic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPublicInput() {
    return this._isPublic;
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

  // nameserver_group - computed: false, optional: false, required: true
  private _nameserverGroup?: number; 
  public get nameserverGroup() {
    return this.getNumberAttribute('nameserver_group');
  }
  public set nameserverGroup(value: number) {
    this._nameserverGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameserverGroupInput() {
    return this._nameserverGroup;
  }

  // nameserver_group_name - computed: true, optional: true, required: false
  private _nameserverGroupName?: string; 
  public get nameserverGroupName() {
    return this.getStringAttribute('nameserver_group_name');
  }
  public set nameserverGroupName(value: string) {
    this._nameserverGroupName = value;
  }
  public resetNameserverGroupName() {
    this._nameserverGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameserverGroupNameInput() {
    return this._nameserverGroupName;
  }

  // nameserver_list_string - computed: false, optional: false, required: true
  private _nameserverListString?: string; 
  public get nameserverListString() {
    return this.getStringAttribute('nameserver_list_string');
  }
  public set nameserverListString(value: string) {
    this._nameserverListString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameserverListStringInput() {
    return this._nameserverListString;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      is_default: cdktf.booleanToTerraform(this._isDefault),
      is_public: cdktf.booleanToTerraform(this._isPublic),
      name: cdktf.stringToTerraform(this._name),
      nameserver_group: cdktf.numberToTerraform(this._nameserverGroup),
      nameserver_group_name: cdktf.stringToTerraform(this._nameserverGroupName),
      nameserver_list_string: cdktf.stringToTerraform(this._nameserverListString),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_default: {
        value: cdktf.booleanToHclTerraform(this._isDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_public: {
        value: cdktf.booleanToHclTerraform(this._isPublic),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nameserver_group: {
        value: cdktf.numberToHclTerraform(this._nameserverGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nameserver_group_name: {
        value: cdktf.stringToHclTerraform(this._nameserverGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nameserver_list_string: {
        value: cdktf.stringToHclTerraform(this._nameserverListString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
