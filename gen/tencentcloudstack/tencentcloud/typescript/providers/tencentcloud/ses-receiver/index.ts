// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/ses_receiver
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SesReceiverConfig extends cdktf.TerraformMetaArguments {
  /**
  * Recipient group description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/ses_receiver#desc SesReceiver#desc}
  */
  readonly desc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/ses_receiver#id SesReceiver#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Recipient group name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/ses_receiver#receivers_name SesReceiver#receivers_name}
  */
  readonly receiversName: string;
  /**
  * data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/ses_receiver#data SesReceiver#data}
  */
  readonly data: SesReceiverData[] | cdktf.IResolvable;
}
export interface SesReceiverData {
  /**
  * Recipient email addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/ses_receiver#email SesReceiver#email}
  */
  readonly email: string;
  /**
  * Variable parameters in the template, please use json.dump to format the JSON object as a string type. The object is a set of key-value pairs, where each key represents a variable in the template, and the variables in the template are represented by {{key}}, and the corresponding values will be replaced with {{value}} when sent.Note: Parameter values cannot be complex data such as HTML. The total length of TemplateData (the entire JSON structure) should be less than 800 bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/ses_receiver#template_data SesReceiver#template_data}
  */
  readonly templateData?: string;
}

export function sesReceiverDataToTerraform(struct?: SesReceiverData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    template_data: cdktf.stringToTerraform(struct!.templateData),
  }
}


export function sesReceiverDataToHclTerraform(struct?: SesReceiverData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_data: {
      value: cdktf.stringToHclTerraform(struct!.templateData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesReceiverDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SesReceiverData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._templateData !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateData = this._templateData;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesReceiverData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email = undefined;
      this._templateData = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email = value.email;
      this._templateData = value.templateData;
    }
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // template_data - computed: false, optional: true, required: false
  private _templateData?: string; 
  public get templateData() {
    return this.getStringAttribute('template_data');
  }
  public set templateData(value: string) {
    this._templateData = value;
  }
  public resetTemplateData() {
    this._templateData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateDataInput() {
    return this._templateData;
  }
}

export class SesReceiverDataList extends cdktf.ComplexList {
  public internalValue? : SesReceiverData[] | cdktf.IResolvable

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
  public get(index: number): SesReceiverDataOutputReference {
    return new SesReceiverDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/ses_receiver tencentcloud_ses_receiver}
*/
export class SesReceiver extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_ses_receiver";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SesReceiver resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SesReceiver to import
  * @param importFromId The id of the existing SesReceiver that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/ses_receiver#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SesReceiver to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_ses_receiver", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/ses_receiver tencentcloud_ses_receiver} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SesReceiverConfig
  */
  public constructor(scope: Construct, id: string, config: SesReceiverConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_ses_receiver',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.44',
        providerVersionConstraint: '1.82.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._desc = config.desc;
    this._id = config.id;
    this._receiversName = config.receiversName;
    this._data.internalValue = config.data;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // desc - computed: false, optional: true, required: false
  private _desc?: string; 
  public get desc() {
    return this.getStringAttribute('desc');
  }
  public set desc(value: string) {
    this._desc = value;
  }
  public resetDesc() {
    this._desc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descInput() {
    return this._desc;
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

  // receivers_name - computed: false, optional: false, required: true
  private _receiversName?: string; 
  public get receiversName() {
    return this.getStringAttribute('receivers_name');
  }
  public set receiversName(value: string) {
    this._receiversName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get receiversNameInput() {
    return this._receiversName;
  }

  // data - computed: false, optional: false, required: true
  private _data = new SesReceiverDataList(this, "data", true);
  public get data() {
    return this._data;
  }
  public putData(value: SesReceiverData[] | cdktf.IResolvable) {
    this._data.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      desc: cdktf.stringToTerraform(this._desc),
      id: cdktf.stringToTerraform(this._id),
      receivers_name: cdktf.stringToTerraform(this._receiversName),
      data: cdktf.listMapper(sesReceiverDataToTerraform, true)(this._data.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      desc: {
        value: cdktf.stringToHclTerraform(this._desc),
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
      receivers_name: {
        value: cdktf.stringToHclTerraform(this._receiversName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data: {
        value: cdktf.listMapperHcl(sesReceiverDataToHclTerraform, true)(this._data.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SesReceiverDataList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
