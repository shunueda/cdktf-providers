// https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_configlet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatacenterConfigletConfig extends cdktf.TerraformMetaArguments {
  /**
  * Apstra Blueprint ID. Used to identify the Blueprint that the Configlet belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_configlet#blueprint_id DatacenterConfiglet#blueprint_id}
  */
  readonly blueprintId: string;
  /**
  * Id of the catalog configlet to be imported. This is an alternative to specifying the `generators` attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_configlet#catalog_configlet_id DatacenterConfiglet#catalog_configlet_id}
  */
  readonly catalogConfigletId?: string;
  /**
  * Condition determines where the Configlet is applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_configlet#condition DatacenterConfiglet#condition}
  */
  readonly condition: string;
  /**
  * Ordered list of Generators. This is an alternative to specifying the `catalog_configlet_id` attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_configlet#generators DatacenterConfiglet#generators}
  */
  readonly generators?: DatacenterConfigletGenerators[] | cdktf.IResolvable;
  /**
  * Configlet name. When omitted, the name found in the catalog configlet will be used. Required when the `generators` attribute is specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_configlet#name DatacenterConfiglet#name}
  */
  readonly name?: string;
}
export interface DatacenterConfigletGenerators {
  /**
  * Specifies the switch platform, must be one of 'cumulus', 'eos', 'junos', 'nxos', 'sonic'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_configlet#config_style DatacenterConfiglet#config_style}
  */
  readonly configStyle: string;
  /**
  * FileName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_configlet#filename DatacenterConfiglet#filename}
  */
  readonly filename?: string;
  /**
  * Negation Template Text
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_configlet#negation_template_text DatacenterConfiglet#negation_template_text}
  */
  readonly negationTemplateText?: string;
  /**
  * Specifies where in the target device the configlet should be applied. Varies by network OS:
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_configlet#section DatacenterConfiglet#section}
  */
  readonly section: string;
  /**
  * Used to select interfaces where configlets should be applied, e.g. `role in ["spine_leaf"]`. Only applies to configlets for sections `interface`, `set_based_interface` and `delete_based_interface`. See references to *Advanced Condition Editor* in the [Apstra User Guide](https://www.juniper.net/documentation/us/en/software/apstra5.0/apstra-user-guide/topics/task/configlet-import-blueprint.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_configlet#section_condition DatacenterConfiglet#section_condition}
  */
  readonly sectionCondition?: string;
  /**
  * Template Text
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_configlet#template_text DatacenterConfiglet#template_text}
  */
  readonly templateText: string;
}

export function datacenterConfigletGeneratorsToTerraform(struct?: DatacenterConfigletGenerators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_style: cdktf.stringToTerraform(struct!.configStyle),
    filename: cdktf.stringToTerraform(struct!.filename),
    negation_template_text: cdktf.stringToTerraform(struct!.negationTemplateText),
    section: cdktf.stringToTerraform(struct!.section),
    section_condition: cdktf.stringToTerraform(struct!.sectionCondition),
    template_text: cdktf.stringToTerraform(struct!.templateText),
  }
}


export function datacenterConfigletGeneratorsToHclTerraform(struct?: DatacenterConfigletGenerators | cdktf.IResolvable): any {
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
    section_condition: {
      value: cdktf.stringToHclTerraform(struct!.sectionCondition),
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

export class DatacenterConfigletGeneratorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatacenterConfigletGenerators | cdktf.IResolvable | undefined {
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
    if (this._sectionCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.sectionCondition = this._sectionCondition;
    }
    if (this._templateText !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateText = this._templateText;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatacenterConfigletGenerators | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configStyle = undefined;
      this._filename = undefined;
      this._negationTemplateText = undefined;
      this._section = undefined;
      this._sectionCondition = undefined;
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
      this._sectionCondition = value.sectionCondition;
      this._templateText = value.templateText;
    }
  }

  // config_style - computed: true, optional: false, required: true
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

  // filename - computed: true, optional: true, required: false
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

  // negation_template_text - computed: true, optional: true, required: false
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

  // section - computed: true, optional: false, required: true
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

  // section_condition - computed: true, optional: true, required: false
  private _sectionCondition?: string; 
  public get sectionCondition() {
    return this.getStringAttribute('section_condition');
  }
  public set sectionCondition(value: string) {
    this._sectionCondition = value;
  }
  public resetSectionCondition() {
    this._sectionCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sectionConditionInput() {
    return this._sectionCondition;
  }

  // template_text - computed: true, optional: false, required: true
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

export class DatacenterConfigletGeneratorsList extends cdktf.ComplexList {
  public internalValue? : DatacenterConfigletGenerators[] | cdktf.IResolvable

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
  public get(index: number): DatacenterConfigletGeneratorsOutputReference {
    return new DatacenterConfigletGeneratorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_configlet apstra_datacenter_configlet}
*/
export class DatacenterConfiglet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_datacenter_configlet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatacenterConfiglet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatacenterConfiglet to import
  * @param importFromId The id of the existing DatacenterConfiglet that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_configlet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatacenterConfiglet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_datacenter_configlet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_configlet apstra_datacenter_configlet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatacenterConfigletConfig
  */
  public constructor(scope: Construct, id: string, config: DatacenterConfigletConfig) {
    super(scope, id, {
      terraformResourceType: 'apstra_datacenter_configlet',
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
    this._blueprintId = config.blueprintId;
    this._catalogConfigletId = config.catalogConfigletId;
    this._condition = config.condition;
    this._generators.internalValue = config.generators;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blueprint_id - computed: false, optional: false, required: true
  private _blueprintId?: string; 
  public get blueprintId() {
    return this.getStringAttribute('blueprint_id');
  }
  public set blueprintId(value: string) {
    this._blueprintId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintIdInput() {
    return this._blueprintId;
  }

  // catalog_configlet_id - computed: false, optional: true, required: false
  private _catalogConfigletId?: string; 
  public get catalogConfigletId() {
    return this.getStringAttribute('catalog_configlet_id');
  }
  public set catalogConfigletId(value: string) {
    this._catalogConfigletId = value;
  }
  public resetCatalogConfigletId() {
    this._catalogConfigletId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogConfigletIdInput() {
    return this._catalogConfigletId;
  }

  // condition - computed: false, optional: false, required: true
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // generators - computed: true, optional: true, required: false
  private _generators = new DatacenterConfigletGeneratorsList(this, "generators", false);
  public get generators() {
    return this._generators;
  }
  public putGenerators(value: DatacenterConfigletGenerators[] | cdktf.IResolvable) {
    this._generators.internalValue = value;
  }
  public resetGenerators() {
    this._generators.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generatorsInput() {
    return this._generators.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      blueprint_id: cdktf.stringToTerraform(this._blueprintId),
      catalog_configlet_id: cdktf.stringToTerraform(this._catalogConfigletId),
      condition: cdktf.stringToTerraform(this._condition),
      generators: cdktf.listMapper(datacenterConfigletGeneratorsToTerraform, false)(this._generators.internalValue),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      blueprint_id: {
        value: cdktf.stringToHclTerraform(this._blueprintId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      catalog_configlet_id: {
        value: cdktf.stringToHclTerraform(this._catalogConfigletId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      condition: {
        value: cdktf.stringToHclTerraform(this._condition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      generators: {
        value: cdktf.listMapperHcl(datacenterConfigletGeneratorsToHclTerraform, false)(this._generators.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatacenterConfigletGeneratorsList",
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
