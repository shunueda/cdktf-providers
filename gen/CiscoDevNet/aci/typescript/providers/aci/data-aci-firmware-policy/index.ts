// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/firmware_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAciFirmwarePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/firmware_policy#annotation DataAciFirmwarePolicy#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/firmware_policy#description DataAciFirmwarePolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/firmware_policy#effective_on_reboot DataAciFirmwarePolicy#effective_on_reboot}
  */
  readonly effectiveOnReboot?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/firmware_policy#id DataAciFirmwarePolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/firmware_policy#ignore_compat DataAciFirmwarePolicy#ignore_compat}
  */
  readonly ignoreCompat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/firmware_policy#internal_label DataAciFirmwarePolicy#internal_label}
  */
  readonly internalLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/firmware_policy#name DataAciFirmwarePolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/firmware_policy#name_alias DataAciFirmwarePolicy#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/firmware_policy#version DataAciFirmwarePolicy#version}
  */
  readonly version?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/firmware_policy#version_check_override DataAciFirmwarePolicy#version_check_override}
  */
  readonly versionCheckOverride?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/firmware_policy aci_firmware_policy}
*/
export class DataAciFirmwarePolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_firmware_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAciFirmwarePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAciFirmwarePolicy to import
  * @param importFromId The id of the existing DataAciFirmwarePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/firmware_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAciFirmwarePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_firmware_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/firmware_policy aci_firmware_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAciFirmwarePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataAciFirmwarePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_firmware_policy',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotation = config.annotation;
    this._description = config.description;
    this._effectiveOnReboot = config.effectiveOnReboot;
    this._id = config.id;
    this._ignoreCompat = config.ignoreCompat;
    this._internalLabel = config.internalLabel;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._version = config.version;
    this._versionCheckOverride = config.versionCheckOverride;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

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

  // effective_on_reboot - computed: true, optional: true, required: false
  private _effectiveOnReboot?: string; 
  public get effectiveOnReboot() {
    return this.getStringAttribute('effective_on_reboot');
  }
  public set effectiveOnReboot(value: string) {
    this._effectiveOnReboot = value;
  }
  public resetEffectiveOnReboot() {
    this._effectiveOnReboot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectiveOnRebootInput() {
    return this._effectiveOnReboot;
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

  // ignore_compat - computed: true, optional: true, required: false
  private _ignoreCompat?: string; 
  public get ignoreCompat() {
    return this.getStringAttribute('ignore_compat');
  }
  public set ignoreCompat(value: string) {
    this._ignoreCompat = value;
  }
  public resetIgnoreCompat() {
    this._ignoreCompat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCompatInput() {
    return this._ignoreCompat;
  }

  // internal_label - computed: true, optional: true, required: false
  private _internalLabel?: string; 
  public get internalLabel() {
    return this.getStringAttribute('internal_label');
  }
  public set internalLabel(value: string) {
    this._internalLabel = value;
  }
  public resetInternalLabel() {
    this._internalLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalLabelInput() {
    return this._internalLabel;
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

  // name_alias - computed: true, optional: true, required: false
  private _nameAlias?: string; 
  public get nameAlias() {
    return this.getStringAttribute('name_alias');
  }
  public set nameAlias(value: string) {
    this._nameAlias = value;
  }
  public resetNameAlias() {
    this._nameAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAliasInput() {
    return this._nameAlias;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // version_check_override - computed: true, optional: true, required: false
  private _versionCheckOverride?: string; 
  public get versionCheckOverride() {
    return this.getStringAttribute('version_check_override');
  }
  public set versionCheckOverride(value: string) {
    this._versionCheckOverride = value;
  }
  public resetVersionCheckOverride() {
    this._versionCheckOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionCheckOverrideInput() {
    return this._versionCheckOverride;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      description: cdktf.stringToTerraform(this._description),
      effective_on_reboot: cdktf.stringToTerraform(this._effectiveOnReboot),
      id: cdktf.stringToTerraform(this._id),
      ignore_compat: cdktf.stringToTerraform(this._ignoreCompat),
      internal_label: cdktf.stringToTerraform(this._internalLabel),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      version: cdktf.stringToTerraform(this._version),
      version_check_override: cdktf.stringToTerraform(this._versionCheckOverride),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotation: {
        value: cdktf.stringToHclTerraform(this._annotation),
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
      effective_on_reboot: {
        value: cdktf.stringToHclTerraform(this._effectiveOnReboot),
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
      ignore_compat: {
        value: cdktf.stringToHclTerraform(this._ignoreCompat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internal_label: {
        value: cdktf.stringToHclTerraform(this._internalLabel),
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
      name_alias: {
        value: cdktf.stringToHclTerraform(this._nameAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version_check_override: {
        value: cdktf.stringToHclTerraform(this._versionCheckOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
