// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_label_length_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplateDnsLabelLengthFilterAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Dns_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_label_length_filter#dns_name SlbTemplateDnsLabelLengthFilterA#dns_name}
  */
  readonly dnsName: string;
  /**
  * enable the log when hit the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_label_length_filter#drop_log_enable SlbTemplateDnsLabelLengthFilterA#drop_log_enable}
  */
  readonly dropLogEnable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_label_length_filter#id SlbTemplateDnsLabelLengthFilterA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'drop': drop; 'ignore': ignore;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_label_length_filter#label_length_filter_action SlbTemplateDnsLabelLengthFilterA#label_length_filter_action}
  */
  readonly labelLengthFilterAction?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_label_length_filter#uuid SlbTemplateDnsLabelLengthFilterA#uuid}
  */
  readonly uuid?: string;
  /**
  * fqdn_label_length block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_label_length_filter#fqdn_label_length SlbTemplateDnsLabelLengthFilterA#fqdn_label_length}
  */
  readonly fqdnLabelLength?: SlbTemplateDnsLabelLengthFilterFqdnLabelLengthA[] | cdktf.IResolvable;
}
export interface SlbTemplateDnsLabelLengthFilterFqdnLabelLengthA {
  /**
  * fqdn label length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_label_length_filter#length SlbTemplateDnsLabelLengthFilterA#length}
  */
  readonly length?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_label_length_filter#suffix SlbTemplateDnsLabelLengthFilterA#suffix}
  */
  readonly suffix?: number;
}

export function slbTemplateDnsLabelLengthFilterFqdnLabelLengthAToTerraform(struct?: SlbTemplateDnsLabelLengthFilterFqdnLabelLengthA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    length: cdktf.numberToTerraform(struct!.length),
    suffix: cdktf.numberToTerraform(struct!.suffix),
  }
}


export function slbTemplateDnsLabelLengthFilterFqdnLabelLengthAToHclTerraform(struct?: SlbTemplateDnsLabelLengthFilterFqdnLabelLengthA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    length: {
      value: cdktf.numberToHclTerraform(struct!.length),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    suffix: {
      value: cdktf.numberToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateDnsLabelLengthFilterFqdnLabelLengthAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateDnsLabelLengthFilterFqdnLabelLengthA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._length !== undefined) {
      hasAnyValues = true;
      internalValueResult.length = this._length;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateDnsLabelLengthFilterFqdnLabelLengthA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._length = undefined;
      this._suffix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._length = value.length;
      this._suffix = value.suffix;
    }
  }

  // length - computed: false, optional: true, required: false
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  public resetLength() {
    this._length = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: number; 
  public get suffix() {
    return this.getNumberAttribute('suffix');
  }
  public set suffix(value: number) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }
}

export class SlbTemplateDnsLabelLengthFilterFqdnLabelLengthAList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateDnsLabelLengthFilterFqdnLabelLengthA[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateDnsLabelLengthFilterFqdnLabelLengthAOutputReference {
    return new SlbTemplateDnsLabelLengthFilterFqdnLabelLengthAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_label_length_filter thunder_slb_template_dns_label_length_filter}
*/
export class SlbTemplateDnsLabelLengthFilterA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_dns_label_length_filter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTemplateDnsLabelLengthFilterA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTemplateDnsLabelLengthFilterA to import
  * @param importFromId The id of the existing SlbTemplateDnsLabelLengthFilterA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_label_length_filter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplateDnsLabelLengthFilterA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_dns_label_length_filter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_label_length_filter thunder_slb_template_dns_label_length_filter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTemplateDnsLabelLengthFilterAConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTemplateDnsLabelLengthFilterAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_dns_label_length_filter',
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
    this._dnsName = config.dnsName;
    this._dropLogEnable = config.dropLogEnable;
    this._id = config.id;
    this._labelLengthFilterAction = config.labelLengthFilterAction;
    this._uuid = config.uuid;
    this._fqdnLabelLength.internalValue = config.fqdnLabelLength;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dns_name - computed: false, optional: false, required: true
  private _dnsName?: string; 
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }
  public set dnsName(value: string) {
    this._dnsName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNameInput() {
    return this._dnsName;
  }

  // drop_log_enable - computed: false, optional: true, required: false
  private _dropLogEnable?: number; 
  public get dropLogEnable() {
    return this.getNumberAttribute('drop_log_enable');
  }
  public set dropLogEnable(value: number) {
    this._dropLogEnable = value;
  }
  public resetDropLogEnable() {
    this._dropLogEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropLogEnableInput() {
    return this._dropLogEnable;
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

  // label_length_filter_action - computed: false, optional: true, required: false
  private _labelLengthFilterAction?: string; 
  public get labelLengthFilterAction() {
    return this.getStringAttribute('label_length_filter_action');
  }
  public set labelLengthFilterAction(value: string) {
    this._labelLengthFilterAction = value;
  }
  public resetLabelLengthFilterAction() {
    this._labelLengthFilterAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelLengthFilterActionInput() {
    return this._labelLengthFilterAction;
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

  // fqdn_label_length - computed: false, optional: true, required: false
  private _fqdnLabelLength = new SlbTemplateDnsLabelLengthFilterFqdnLabelLengthAList(this, "fqdn_label_length", false);
  public get fqdnLabelLength() {
    return this._fqdnLabelLength;
  }
  public putFqdnLabelLength(value: SlbTemplateDnsLabelLengthFilterFqdnLabelLengthA[] | cdktf.IResolvable) {
    this._fqdnLabelLength.internalValue = value;
  }
  public resetFqdnLabelLength() {
    this._fqdnLabelLength.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnLabelLengthInput() {
    return this._fqdnLabelLength.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dns_name: cdktf.stringToTerraform(this._dnsName),
      drop_log_enable: cdktf.numberToTerraform(this._dropLogEnable),
      id: cdktf.stringToTerraform(this._id),
      label_length_filter_action: cdktf.stringToTerraform(this._labelLengthFilterAction),
      uuid: cdktf.stringToTerraform(this._uuid),
      fqdn_label_length: cdktf.listMapper(slbTemplateDnsLabelLengthFilterFqdnLabelLengthAToTerraform, true)(this._fqdnLabelLength.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dns_name: {
        value: cdktf.stringToHclTerraform(this._dnsName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      drop_log_enable: {
        value: cdktf.numberToHclTerraform(this._dropLogEnable),
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
      label_length_filter_action: {
        value: cdktf.stringToHclTerraform(this._labelLengthFilterAction),
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
      fqdn_label_length: {
        value: cdktf.listMapperHcl(slbTemplateDnsLabelLengthFilterFqdnLabelLengthAToHclTerraform, true)(this._fqdnLabelLength.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateDnsLabelLengthFilterFqdnLabelLengthAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
