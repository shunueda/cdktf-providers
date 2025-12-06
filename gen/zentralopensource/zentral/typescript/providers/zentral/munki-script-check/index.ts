// https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/munki_script_check
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MunkiScriptCheckConfig extends cdktf.TerraformMetaArguments {
  /**
  * If `true`, this Munki script check will be scheduled on Intel machines. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/munki_script_check#arch_amd64 MunkiScriptCheck#arch_amd64}
  */
  readonly archAmd64?: boolean | cdktf.IResolvable;
  /**
  * If `true`, this Munki script check will be scheduled on Apple Silicon machines. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/munki_script_check#arch_arm64 MunkiScriptCheck#arch_arm64}
  */
  readonly archArm64?: boolean | cdktf.IResolvable;
  /**
  * Description of the Munki script check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/munki_script_check#description MunkiScriptCheck#description}
  */
  readonly description?: string;
  /**
  * The IDs of the tags this Munki script check is not scoped to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/munki_script_check#excluded_tag_ids MunkiScriptCheck#excluded_tag_ids}
  */
  readonly excludedTagIds?: number[];
  /**
  * Expected result of the Munki script check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/munki_script_check#expected_result MunkiScriptCheck#expected_result}
  */
  readonly expectedResult: string;
  /**
  * This Munki script check will be scheduled on machines with an OS version lower than this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/munki_script_check#max_os_version MunkiScriptCheck#max_os_version}
  */
  readonly maxOsVersion?: string;
  /**
  * This Munki script check will be scheduled on machines with an OS version higher or equal to this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/munki_script_check#min_os_version MunkiScriptCheck#min_os_version}
  */
  readonly minOsVersion?: string;
  /**
  * Name of the Munki script check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/munki_script_check#name MunkiScriptCheck#name}
  */
  readonly name: string;
  /**
  * Source of the Munki script check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/munki_script_check#source MunkiScriptCheck#source}
  */
  readonly source: string;
  /**
  * The IDs of the tags this Munki script check is restricted to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/munki_script_check#tag_ids MunkiScriptCheck#tag_ids}
  */
  readonly tagIds?: number[];
  /**
  * Type of the script check. Can be `ZSH_STR`, `ZSH_INT` or `ZSH_BOOL`. Defaults to `ZSH_STR`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/munki_script_check#type MunkiScriptCheck#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/munki_script_check zentral_munki_script_check}
*/
export class MunkiScriptCheck extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zentral_munki_script_check";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MunkiScriptCheck resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MunkiScriptCheck to import
  * @param importFromId The id of the existing MunkiScriptCheck that should be imported. Refer to the {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/munki_script_check#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MunkiScriptCheck to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zentral_munki_script_check", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/munki_script_check zentral_munki_script_check} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MunkiScriptCheckConfig
  */
  public constructor(scope: Construct, id: string, config: MunkiScriptCheckConfig) {
    super(scope, id, {
      terraformResourceType: 'zentral_munki_script_check',
      terraformGeneratorMetadata: {
        providerName: 'zentral',
        providerVersion: '0.1.67',
        providerVersionConstraint: '0.1.67'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._archAmd64 = config.archAmd64;
    this._archArm64 = config.archArm64;
    this._description = config.description;
    this._excludedTagIds = config.excludedTagIds;
    this._expectedResult = config.expectedResult;
    this._maxOsVersion = config.maxOsVersion;
    this._minOsVersion = config.minOsVersion;
    this._name = config.name;
    this._source = config.source;
    this._tagIds = config.tagIds;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arch_amd64 - computed: true, optional: true, required: false
  private _archAmd64?: boolean | cdktf.IResolvable; 
  public get archAmd64() {
    return this.getBooleanAttribute('arch_amd64');
  }
  public set archAmd64(value: boolean | cdktf.IResolvable) {
    this._archAmd64 = value;
  }
  public resetArchAmd64() {
    this._archAmd64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archAmd64Input() {
    return this._archAmd64;
  }

  // arch_arm64 - computed: true, optional: true, required: false
  private _archArm64?: boolean | cdktf.IResolvable; 
  public get archArm64() {
    return this.getBooleanAttribute('arch_arm64');
  }
  public set archArm64(value: boolean | cdktf.IResolvable) {
    this._archArm64 = value;
  }
  public resetArchArm64() {
    this._archArm64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archArm64Input() {
    return this._archArm64;
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

  // excluded_tag_ids - computed: true, optional: true, required: false
  private _excludedTagIds?: number[]; 
  public get excludedTagIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('excluded_tag_ids')));
  }
  public set excludedTagIds(value: number[]) {
    this._excludedTagIds = value;
  }
  public resetExcludedTagIds() {
    this._excludedTagIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedTagIdsInput() {
    return this._excludedTagIds;
  }

  // expected_result - computed: false, optional: false, required: true
  private _expectedResult?: string; 
  public get expectedResult() {
    return this.getStringAttribute('expected_result');
  }
  public set expectedResult(value: string) {
    this._expectedResult = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedResultInput() {
    return this._expectedResult;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // max_os_version - computed: true, optional: true, required: false
  private _maxOsVersion?: string; 
  public get maxOsVersion() {
    return this.getStringAttribute('max_os_version');
  }
  public set maxOsVersion(value: string) {
    this._maxOsVersion = value;
  }
  public resetMaxOsVersion() {
    this._maxOsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxOsVersionInput() {
    return this._maxOsVersion;
  }

  // min_os_version - computed: true, optional: true, required: false
  private _minOsVersion?: string; 
  public get minOsVersion() {
    return this.getStringAttribute('min_os_version');
  }
  public set minOsVersion(value: string) {
    this._minOsVersion = value;
  }
  public resetMinOsVersion() {
    this._minOsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minOsVersionInput() {
    return this._minOsVersion;
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

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // tag_ids - computed: true, optional: true, required: false
  private _tagIds?: number[]; 
  public get tagIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('tag_ids')));
  }
  public set tagIds(value: number[]) {
    this._tagIds = value;
  }
  public resetTagIds() {
    this._tagIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagIdsInput() {
    return this._tagIds;
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

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      arch_amd64: cdktf.booleanToTerraform(this._archAmd64),
      arch_arm64: cdktf.booleanToTerraform(this._archArm64),
      description: cdktf.stringToTerraform(this._description),
      excluded_tag_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._excludedTagIds),
      expected_result: cdktf.stringToTerraform(this._expectedResult),
      max_os_version: cdktf.stringToTerraform(this._maxOsVersion),
      min_os_version: cdktf.stringToTerraform(this._minOsVersion),
      name: cdktf.stringToTerraform(this._name),
      source: cdktf.stringToTerraform(this._source),
      tag_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tagIds),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      arch_amd64: {
        value: cdktf.booleanToHclTerraform(this._archAmd64),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      arch_arm64: {
        value: cdktf.booleanToHclTerraform(this._archArm64),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      excluded_tag_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._excludedTagIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      expected_result: {
        value: cdktf.stringToHclTerraform(this._expectedResult),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_os_version: {
        value: cdktf.stringToHclTerraform(this._maxOsVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_os_version: {
        value: cdktf.stringToHclTerraform(this._minOsVersion),
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
      source: {
        value: cdktf.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._tagIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
