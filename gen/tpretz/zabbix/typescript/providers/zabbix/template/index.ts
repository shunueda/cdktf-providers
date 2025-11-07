// https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Template description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/template#description Template#description}
  */
  readonly description?: string;
  /**
  * Host Group IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/template#groups Template#groups}
  */
  readonly groups: string[];
  /**
  * Template hostname (internal name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/template#host Template#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/template#id Template#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Template Display Name (defaults to host)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/template#name Template#name}
  */
  readonly name?: string;
  /**
  * linked templates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/template#templates Template#templates}
  */
  readonly templates?: string[];
  /**
  * macro block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/template#macro Template#macro}
  */
  readonly macro?: TemplateMacro[] | cdktf.IResolvable;
}
export interface TemplateMacro {
  /**
  * Macro Name (key)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/template#name Template#name}
  */
  readonly name: string;
  /**
  * Macro Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/template#value Template#value}
  */
  readonly value: string;
}

export function templateMacroToTerraform(struct?: TemplateMacro | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function templateMacroToHclTerraform(struct?: TemplateMacro | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateMacroOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateMacro | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateMacro | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class TemplateMacroList extends cdktf.ComplexList {
  public internalValue? : TemplateMacro[] | cdktf.IResolvable

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
  public get(index: number): TemplateMacroOutputReference {
    return new TemplateMacroOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/template zabbix_template}
*/
export class Template extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zabbix_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Template resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Template to import
  * @param importFromId The id of the existing Template that should be imported. Refer to the {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Template to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zabbix_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/template zabbix_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TemplateConfig
  */
  public constructor(scope: Construct, id: string, config: TemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'zabbix_template',
      terraformGeneratorMetadata: {
        providerName: 'zabbix',
        providerVersion: '0.17.0'
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
    this._groups = config.groups;
    this._host = config.host;
    this._id = config.id;
    this._name = config.name;
    this._templates = config.templates;
    this._macro.internalValue = config.macro;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // groups - computed: false, optional: false, required: true
  private _groups?: string[]; 
  public get groups() {
    return cdktf.Fn.tolist(this.getListAttribute('groups'));
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // name - computed: false, optional: true, required: false
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

  // templates - computed: false, optional: true, required: false
  private _templates?: string[]; 
  public get templates() {
    return cdktf.Fn.tolist(this.getListAttribute('templates'));
  }
  public set templates(value: string[]) {
    this._templates = value;
  }
  public resetTemplates() {
    this._templates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templatesInput() {
    return this._templates;
  }

  // macro - computed: false, optional: true, required: false
  private _macro = new TemplateMacroList(this, "macro", false);
  public get macro() {
    return this._macro;
  }
  public putMacro(value: TemplateMacro[] | cdktf.IResolvable) {
    this._macro.internalValue = value;
  }
  public resetMacro() {
    this._macro.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macroInput() {
    return this._macro.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groups),
      host: cdktf.stringToTerraform(this._host),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      templates: cdktf.listMapper(cdktf.stringToTerraform, false)(this._templates),
      macro: cdktf.listMapper(templateMacroToTerraform, true)(this._macro.internalValue),
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
      groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
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
      templates: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._templates),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      macro: {
        value: cdktf.listMapperHcl(templateMacroToHclTerraform, true)(this._macro.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TemplateMacroList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
