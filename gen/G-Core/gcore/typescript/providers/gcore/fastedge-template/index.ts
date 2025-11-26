// https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/fastedge_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FastedgeTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * WebAssembly binary id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/fastedge_template#binary FastedgeTemplate#binary}
  */
  readonly binary: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/fastedge_template#id FastedgeTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instruction how to configure the template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/fastedge_template#long_descr FastedgeTemplate#long_descr}
  */
  readonly longDescr?: string;
  /**
  * Template name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/fastedge_template#name FastedgeTemplate#name}
  */
  readonly name: string;
  /**
  * Short description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/fastedge_template#short_descr FastedgeTemplate#short_descr}
  */
  readonly shortDescr?: string;
  /**
  * param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/fastedge_template#param FastedgeTemplate#param}
  */
  readonly param?: FastedgeTemplateParam[] | cdktf.IResolvable;
}
export interface FastedgeTemplateParam {
  /**
  * Parameter description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/fastedge_template#descr FastedgeTemplate#descr}
  */
  readonly descr?: string;
  /**
  * Is parameter mandatory, true/false (false by default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/fastedge_template#mandatory FastedgeTemplate#mandatory}
  */
  readonly mandatory?: boolean | cdktf.IResolvable;
  /**
  * Parameter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/fastedge_template#name FastedgeTemplate#name}
  */
  readonly name: string;
  /**
  * Parameter type. Possible values are: string, number, date, time, secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/fastedge_template#type FastedgeTemplate#type}
  */
  readonly type: string;
}

export function fastedgeTemplateParamToTerraform(struct?: FastedgeTemplateParam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    descr: cdktf.stringToTerraform(struct!.descr),
    mandatory: cdktf.booleanToTerraform(struct!.mandatory),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function fastedgeTemplateParamToHclTerraform(struct?: FastedgeTemplateParam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    descr: {
      value: cdktf.stringToHclTerraform(struct!.descr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mandatory: {
      value: cdktf.booleanToHclTerraform(struct!.mandatory),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FastedgeTemplateParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FastedgeTemplateParam | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._descr !== undefined) {
      hasAnyValues = true;
      internalValueResult.descr = this._descr;
    }
    if (this._mandatory !== undefined) {
      hasAnyValues = true;
      internalValueResult.mandatory = this._mandatory;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FastedgeTemplateParam | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._descr = undefined;
      this._mandatory = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._descr = value.descr;
      this._mandatory = value.mandatory;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // descr - computed: false, optional: true, required: false
  private _descr?: string; 
  public get descr() {
    return this.getStringAttribute('descr');
  }
  public set descr(value: string) {
    this._descr = value;
  }
  public resetDescr() {
    this._descr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descrInput() {
    return this._descr;
  }

  // mandatory - computed: false, optional: true, required: false
  private _mandatory?: boolean | cdktf.IResolvable; 
  public get mandatory() {
    return this.getBooleanAttribute('mandatory');
  }
  public set mandatory(value: boolean | cdktf.IResolvable) {
    this._mandatory = value;
  }
  public resetMandatory() {
    this._mandatory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mandatoryInput() {
    return this._mandatory;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class FastedgeTemplateParamList extends cdktf.ComplexList {
  public internalValue? : FastedgeTemplateParam[] | cdktf.IResolvable

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
  public get(index: number): FastedgeTemplateParamOutputReference {
    return new FastedgeTemplateParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/fastedge_template gcore_fastedge_template}
*/
export class FastedgeTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gcore_fastedge_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FastedgeTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FastedgeTemplate to import
  * @param importFromId The id of the existing FastedgeTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/fastedge_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FastedgeTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gcore_fastedge_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/fastedge_template gcore_fastedge_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FastedgeTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: FastedgeTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'gcore_fastedge_template',
      terraformGeneratorMetadata: {
        providerName: 'gcore',
        providerVersion: '0.32.1',
        providerVersionConstraint: '0.32.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._binary = config.binary;
    this._id = config.id;
    this._longDescr = config.longDescr;
    this._name = config.name;
    this._shortDescr = config.shortDescr;
    this._param.internalValue = config.param;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // binary - computed: false, optional: false, required: true
  private _binary?: number; 
  public get binary() {
    return this.getNumberAttribute('binary');
  }
  public set binary(value: number) {
    this._binary = value;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryInput() {
    return this._binary;
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

  // long_descr - computed: false, optional: true, required: false
  private _longDescr?: string; 
  public get longDescr() {
    return this.getStringAttribute('long_descr');
  }
  public set longDescr(value: string) {
    this._longDescr = value;
  }
  public resetLongDescr() {
    this._longDescr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longDescrInput() {
    return this._longDescr;
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

  // short_descr - computed: false, optional: true, required: false
  private _shortDescr?: string; 
  public get shortDescr() {
    return this.getStringAttribute('short_descr');
  }
  public set shortDescr(value: string) {
    this._shortDescr = value;
  }
  public resetShortDescr() {
    this._shortDescr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shortDescrInput() {
    return this._shortDescr;
  }

  // param - computed: false, optional: true, required: false
  private _param = new FastedgeTemplateParamList(this, "param", true);
  public get param() {
    return this._param;
  }
  public putParam(value: FastedgeTemplateParam[] | cdktf.IResolvable) {
    this._param.internalValue = value;
  }
  public resetParam() {
    this._param.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramInput() {
    return this._param.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      binary: cdktf.numberToTerraform(this._binary),
      id: cdktf.stringToTerraform(this._id),
      long_descr: cdktf.stringToTerraform(this._longDescr),
      name: cdktf.stringToTerraform(this._name),
      short_descr: cdktf.stringToTerraform(this._shortDescr),
      param: cdktf.listMapper(fastedgeTemplateParamToTerraform, true)(this._param.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      binary: {
        value: cdktf.numberToHclTerraform(this._binary),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      long_descr: {
        value: cdktf.stringToHclTerraform(this._longDescr),
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
      short_descr: {
        value: cdktf.stringToHclTerraform(this._shortDescr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      param: {
        value: cdktf.listMapperHcl(fastedgeTemplateParamToHclTerraform, true)(this._param.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FastedgeTemplateParamList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
