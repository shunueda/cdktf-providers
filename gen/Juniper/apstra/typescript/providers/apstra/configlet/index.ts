// https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/configlet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfigletConfig extends cdktf.TerraformMetaArguments {
  /**
  * Generators organized by Network OS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/configlet#generators Configlet#generators}
  */
  readonly generators: ConfigletGenerators[] | cdktf.IResolvable;
  /**
  * Configlet name displayed in the Apstra web UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/configlet#name Configlet#name}
  */
  readonly name: string;
}
export interface ConfigletGenerators {
  /**
  * Specifies the switch platform, must be one of 'cumulus', 'eos', 'junos', 'nxos', 'sonic'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/configlet#config_style Configlet#config_style}
  */
  readonly configStyle: string;
  /**
  * FileName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/configlet#filename Configlet#filename}
  */
  readonly filename?: string;
  /**
  * Negation Template Text
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/configlet#negation_template_text Configlet#negation_template_text}
  */
  readonly negationTemplateText?: string;
  /**
  * Specifies where in the target device the configlet should be  applied. Varies by network OS:
  * 
  *   | **Config Style**  | **Valid Sections** |
  *   |---|---|
  *   |cumulus|file, frr, interface, ospf, system|
  *   |eos|interface, ospf, system, system_top|
  *   |junos|interface_level_hierarchical, interface_level_delete, interface_level_set, top_level_hierarchical, top_level_set_delete|
  *   |nxos|system, interface, system_top, ospf|
  *   |sonic|file, frr, ospf, system|
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/configlet#section Configlet#section}
  */
  readonly section: string;
  /**
  * Template Text
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/configlet#template_text Configlet#template_text}
  */
  readonly templateText: string;
}

export function configletGeneratorsToTerraform(struct?: ConfigletGenerators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_style: cdktf.stringToTerraform(struct!.configStyle),
    filename: cdktf.stringToTerraform(struct!.filename),
    negation_template_text: cdktf.stringToTerraform(struct!.negationTemplateText),
    section: cdktf.stringToTerraform(struct!.section),
    template_text: cdktf.stringToTerraform(struct!.templateText),
  }
}


export function configletGeneratorsToHclTerraform(struct?: ConfigletGenerators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_style: {
      value: cdktf.stringToHclTerraform(struct!.configStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filename: {
      value: cdktf.stringToHclTerraform(struct!.filename),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    negation_template_text: {
      value: cdktf.stringToHclTerraform(struct!.negationTemplateText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    section: {
      value: cdktf.stringToHclTerraform(struct!.section),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_text: {
      value: cdktf.stringToHclTerraform(struct!.templateText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigletGeneratorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ConfigletGenerators | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.configStyle = this._configStyle;
    }
    if (this._filename !== undefined) {
      hasAnyValues = true;
      internalValueResult.filename = this._filename;
    }
    if (this._negationTemplateText !== undefined) {
      hasAnyValues = true;
      internalValueResult.negationTemplateText = this._negationTemplateText;
    }
    if (this._section !== undefined) {
      hasAnyValues = true;
      internalValueResult.section = this._section;
    }
    if (this._templateText !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateText = this._templateText;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigletGenerators | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configStyle = undefined;
      this._filename = undefined;
      this._negationTemplateText = undefined;
      this._section = undefined;
      this._templateText = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configStyle = value.configStyle;
      this._filename = value.filename;
      this._negationTemplateText = value.negationTemplateText;
      this._section = value.section;
      this._templateText = value.templateText;
    }
  }

  // config_style - computed: false, optional: false, required: true
  private _configStyle?: string; 
  public get configStyle() {
    return this.getStringAttribute('config_style');
  }
  public set configStyle(value: string) {
    this._configStyle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configStyleInput() {
    return this._configStyle;
  }

  // filename - computed: false, optional: true, required: false
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  public resetFilename() {
    this._filename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename;
  }

  // negation_template_text - computed: false, optional: true, required: false
  private _negationTemplateText?: string; 
  public get negationTemplateText() {
    return this.getStringAttribute('negation_template_text');
  }
  public set negationTemplateText(value: string) {
    this._negationTemplateText = value;
  }
  public resetNegationTemplateText() {
    this._negationTemplateText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negationTemplateTextInput() {
    return this._negationTemplateText;
  }

  // section - computed: false, optional: false, required: true
  private _section?: string; 
  public get section() {
    return this.getStringAttribute('section');
  }
  public set section(value: string) {
    this._section = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sectionInput() {
    return this._section;
  }

  // template_text - computed: false, optional: false, required: true
  private _templateText?: string; 
  public get templateText() {
    return this.getStringAttribute('template_text');
  }
  public set templateText(value: string) {
    this._templateText = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateTextInput() {
    return this._templateText;
  }
}

export class ConfigletGeneratorsList extends cdktf.ComplexList {
  public internalValue? : ConfigletGenerators[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ConfigletGeneratorsOutputReference {
    return new ConfigletGeneratorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/configlet apstra_configlet}
*/
export class Configlet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_configlet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Configlet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Configlet to import
  * @param importFromId The id of the existing Configlet that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/configlet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Configlet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_configlet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/configlet apstra_configlet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigletConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigletConfig) {
    super(scope, id, {
      terraformResourceType: 'apstra_configlet',
      terraformGeneratorMetadata: {
        providerName: 'apstra',
        providerVersion: '0.95.1',
        providerVersionConstraint: '0.95.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._generators.internalValue = config.generators;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // generators - computed: false, optional: false, required: true
  private _generators = new ConfigletGeneratorsList(this, "generators", false);
  public get generators() {
    return this._generators;
  }
  public putGenerators(value: ConfigletGenerators[] | cdktf.IResolvable) {
    this._generators.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get generatorsInput() {
    return this._generators.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      generators: cdktf.listMapper(configletGeneratorsToTerraform, false)(this._generators.internalValue),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      generators: {
        value: cdktf.listMapperHcl(configletGeneratorsToHclTerraform, false)(this._generators.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConfigletGeneratorsList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
