// https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/volumegroup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VolumegroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description for the volume group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/volumegroup#description Volumegroup#description}
  */
  readonly description?: string;
  /**
  * Determines whether snapshot sets of the group will be write order consistent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/volumegroup#is_write_order_consistent Volumegroup#is_write_order_consistent}
  */
  readonly isWriteOrderConsistent?: boolean | cdktf.IResolvable;
  /**
  * Name of the volume group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/volumegroup#name Volumegroup#name}
  */
  readonly name: string;
  /**
  * Unique identifier of the protection policy assigned to the volume group. Give empty string to remove policy. Conflicts with `protection_policy_name`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/volumegroup#protection_policy_id Volumegroup#protection_policy_id}
  */
  readonly protectionPolicyId?: string;
  /**
  * Unique name of the protection policy assigned to the volume group. Conflicts with `protection_policy_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/volumegroup#protection_policy_name Volumegroup#protection_policy_name}
  */
  readonly protectionPolicyName?: string;
  /**
  * A list of identifiers of existing volumes that should be added to the volume group. Conflicts with `volume_names`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/volumegroup#volume_ids Volumegroup#volume_ids}
  */
  readonly volumeIds?: string[];
  /**
  * A list of names of existing volumes that should be added to the volume group. Conflicts with `volume_ids`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/volumegroup#volume_names Volumegroup#volume_names}
  */
  readonly volumeNames?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/volumegroup powerstore_volumegroup}
*/
export class Volumegroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerstore_volumegroup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Volumegroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Volumegroup to import
  * @param importFromId The id of the existing Volumegroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/volumegroup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Volumegroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerstore_volumegroup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/volumegroup powerstore_volumegroup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VolumegroupConfig
  */
  public constructor(scope: Construct, id: string, config: VolumegroupConfig) {
    super(scope, id, {
      terraformResourceType: 'powerstore_volumegroup',
      terraformGeneratorMetadata: {
        providerName: 'powerstore',
        providerVersion: '1.2.1',
        providerVersionConstraint: '1.2.1'
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
    this._isWriteOrderConsistent = config.isWriteOrderConsistent;
    this._name = config.name;
    this._protectionPolicyId = config.protectionPolicyId;
    this._protectionPolicyName = config.protectionPolicyName;
    this._volumeIds = config.volumeIds;
    this._volumeNames = config.volumeNames;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: true, required: false
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_write_order_consistent - computed: true, optional: true, required: false
  private _isWriteOrderConsistent?: boolean | cdktf.IResolvable; 
  public get isWriteOrderConsistent() {
    return this.getBooleanAttribute('is_write_order_consistent');
  }
  public set isWriteOrderConsistent(value: boolean | cdktf.IResolvable) {
    this._isWriteOrderConsistent = value;
  }
  public resetIsWriteOrderConsistent() {
    this._isWriteOrderConsistent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isWriteOrderConsistentInput() {
    return this._isWriteOrderConsistent;
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

  // protection_policy_id - computed: true, optional: true, required: false
  private _protectionPolicyId?: string; 
  public get protectionPolicyId() {
    return this.getStringAttribute('protection_policy_id');
  }
  public set protectionPolicyId(value: string) {
    this._protectionPolicyId = value;
  }
  public resetProtectionPolicyId() {
    this._protectionPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionPolicyIdInput() {
    return this._protectionPolicyId;
  }

  // protection_policy_name - computed: false, optional: true, required: false
  private _protectionPolicyName?: string; 
  public get protectionPolicyName() {
    return this.getStringAttribute('protection_policy_name');
  }
  public set protectionPolicyName(value: string) {
    this._protectionPolicyName = value;
  }
  public resetProtectionPolicyName() {
    this._protectionPolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionPolicyNameInput() {
    return this._protectionPolicyName;
  }

  // volume_ids - computed: true, optional: true, required: false
  private _volumeIds?: string[]; 
  public get volumeIds() {
    return cdktf.Fn.tolist(this.getListAttribute('volume_ids'));
  }
  public set volumeIds(value: string[]) {
    this._volumeIds = value;
  }
  public resetVolumeIds() {
    this._volumeIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdsInput() {
    return this._volumeIds;
  }

  // volume_names - computed: true, optional: true, required: false
  private _volumeNames?: string[]; 
  public get volumeNames() {
    return cdktf.Fn.tolist(this.getListAttribute('volume_names'));
  }
  public set volumeNames(value: string[]) {
    this._volumeNames = value;
  }
  public resetVolumeNames() {
    this._volumeNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNamesInput() {
    return this._volumeNames;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      is_write_order_consistent: cdktf.booleanToTerraform(this._isWriteOrderConsistent),
      name: cdktf.stringToTerraform(this._name),
      protection_policy_id: cdktf.stringToTerraform(this._protectionPolicyId),
      protection_policy_name: cdktf.stringToTerraform(this._protectionPolicyName),
      volume_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._volumeIds),
      volume_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._volumeNames),
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
      is_write_order_consistent: {
        value: cdktf.booleanToHclTerraform(this._isWriteOrderConsistent),
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
      protection_policy_id: {
        value: cdktf.stringToHclTerraform(this._protectionPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protection_policy_name: {
        value: cdktf.stringToHclTerraform(this._protectionPolicyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      volume_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._volumeIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      volume_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._volumeNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
