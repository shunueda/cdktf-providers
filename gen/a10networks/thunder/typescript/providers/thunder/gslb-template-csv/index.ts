// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_template_csv
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GslbTemplateCsvConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify name of csv template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_template_csv#csv_name GslbTemplateCsv#csv_name}
  */
  readonly csvName: string;
  /**
  * enter a delimiter character, default ","
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_template_csv#delim_char GslbTemplateCsv#delim_char}
  */
  readonly delimChar?: string;
  /**
  * enter a delimiter number, default 44 (",")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_template_csv#delim_num GslbTemplateCsv#delim_num}
  */
  readonly delimNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_template_csv#id GslbTemplateCsv#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Support IPv6 IP ranges
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_template_csv#ipv6_enable GslbTemplateCsv#ipv6_enable}
  */
  readonly ipv6Enable?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_template_csv#user_tag GslbTemplateCsv#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_template_csv#uuid GslbTemplateCsv#uuid}
  */
  readonly uuid?: string;
  /**
  * multiple_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_template_csv#multiple_fields GslbTemplateCsv#multiple_fields}
  */
  readonly multipleFields?: GslbTemplateCsvMultipleFields[] | cdktf.IResolvable;
}
export interface GslbTemplateCsvMultipleFields {
  /**
  * 'ip-from': Beginning address of IP range or subnet; 'ip-to-mask': Ending address of IP range or Mask; 'continent': Continent; 'country': Country; 'state': State or province; 'city': City; 'ASN': Autonomous System Number;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_template_csv#csv_type GslbTemplateCsv#csv_type}
  */
  readonly csvType?: string;
  /**
  * Field index number (Index of Field)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_template_csv#field GslbTemplateCsv#field}
  */
  readonly field?: number;
}

export function gslbTemplateCsvMultipleFieldsToTerraform(struct?: GslbTemplateCsvMultipleFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    csv_type: cdktf.stringToTerraform(struct!.csvType),
    field: cdktf.numberToTerraform(struct!.field),
  }
}


export function gslbTemplateCsvMultipleFieldsToHclTerraform(struct?: GslbTemplateCsvMultipleFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    csv_type: {
      value: cdktf.stringToHclTerraform(struct!.csvType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field: {
      value: cdktf.numberToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbTemplateCsvMultipleFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbTemplateCsvMultipleFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._csvType !== undefined) {
      hasAnyValues = true;
      internalValueResult.csvType = this._csvType;
    }
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbTemplateCsvMultipleFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._csvType = undefined;
      this._field = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._csvType = value.csvType;
      this._field = value.field;
    }
  }

  // csv_type - computed: false, optional: true, required: false
  private _csvType?: string; 
  public get csvType() {
    return this.getStringAttribute('csv_type');
  }
  public set csvType(value: string) {
    this._csvType = value;
  }
  public resetCsvType() {
    this._csvType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csvTypeInput() {
    return this._csvType;
  }

  // field - computed: false, optional: true, required: false
  private _field?: number; 
  public get field() {
    return this.getNumberAttribute('field');
  }
  public set field(value: number) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }
}

export class GslbTemplateCsvMultipleFieldsList extends cdktf.ComplexList {
  public internalValue? : GslbTemplateCsvMultipleFields[] | cdktf.IResolvable

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
  public get(index: number): GslbTemplateCsvMultipleFieldsOutputReference {
    return new GslbTemplateCsvMultipleFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_template_csv thunder_gslb_template_csv}
*/
export class GslbTemplateCsv extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_gslb_template_csv";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GslbTemplateCsv resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GslbTemplateCsv to import
  * @param importFromId The id of the existing GslbTemplateCsv that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_template_csv#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GslbTemplateCsv to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_gslb_template_csv", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_template_csv thunder_gslb_template_csv} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GslbTemplateCsvConfig
  */
  public constructor(scope: Construct, id: string, config: GslbTemplateCsvConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_gslb_template_csv',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._csvName = config.csvName;
    this._delimChar = config.delimChar;
    this._delimNum = config.delimNum;
    this._id = config.id;
    this._ipv6Enable = config.ipv6Enable;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._multipleFields.internalValue = config.multipleFields;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // csv_name - computed: false, optional: false, required: true
  private _csvName?: string; 
  public get csvName() {
    return this.getStringAttribute('csv_name');
  }
  public set csvName(value: string) {
    this._csvName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get csvNameInput() {
    return this._csvName;
  }

  // delim_char - computed: false, optional: true, required: false
  private _delimChar?: string; 
  public get delimChar() {
    return this.getStringAttribute('delim_char');
  }
  public set delimChar(value: string) {
    this._delimChar = value;
  }
  public resetDelimChar() {
    this._delimChar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delimCharInput() {
    return this._delimChar;
  }

  // delim_num - computed: false, optional: true, required: false
  private _delimNum?: number; 
  public get delimNum() {
    return this.getNumberAttribute('delim_num');
  }
  public set delimNum(value: number) {
    this._delimNum = value;
  }
  public resetDelimNum() {
    this._delimNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delimNumInput() {
    return this._delimNum;
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

  // ipv6_enable - computed: false, optional: true, required: false
  private _ipv6Enable?: number; 
  public get ipv6Enable() {
    return this.getNumberAttribute('ipv6_enable');
  }
  public set ipv6Enable(value: number) {
    this._ipv6Enable = value;
  }
  public resetIpv6Enable() {
    this._ipv6Enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6EnableInput() {
    return this._ipv6Enable;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // multiple_fields - computed: false, optional: true, required: false
  private _multipleFields = new GslbTemplateCsvMultipleFieldsList(this, "multiple_fields", false);
  public get multipleFields() {
    return this._multipleFields;
  }
  public putMultipleFields(value: GslbTemplateCsvMultipleFields[] | cdktf.IResolvable) {
    this._multipleFields.internalValue = value;
  }
  public resetMultipleFields() {
    this._multipleFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipleFieldsInput() {
    return this._multipleFields.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      csv_name: cdktf.stringToTerraform(this._csvName),
      delim_char: cdktf.stringToTerraform(this._delimChar),
      delim_num: cdktf.numberToTerraform(this._delimNum),
      id: cdktf.stringToTerraform(this._id),
      ipv6_enable: cdktf.numberToTerraform(this._ipv6Enable),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      multiple_fields: cdktf.listMapper(gslbTemplateCsvMultipleFieldsToTerraform, true)(this._multipleFields.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      csv_name: {
        value: cdktf.stringToHclTerraform(this._csvName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delim_char: {
        value: cdktf.stringToHclTerraform(this._delimChar),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delim_num: {
        value: cdktf.numberToHclTerraform(this._delimNum),
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
      ipv6_enable: {
        value: cdktf.numberToHclTerraform(this._ipv6Enable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multiple_fields: {
        value: cdktf.listMapperHcl(gslbTemplateCsvMultipleFieldsToHclTerraform, true)(this._multipleFields.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GslbTemplateCsvMultipleFieldsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
