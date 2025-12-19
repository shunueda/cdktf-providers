// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_apn_imsi_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TemplateGtpApnImsiListConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'permit': Create a whitelist to permit the packets that match APN IMSI filters; 'deny': Create a blacklist to deny the packets that match APN IMSI filters (default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_apn_imsi_list#action TemplateGtpApnImsiList#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_apn_imsi_list#id TemplateGtpApnImsiList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify name of the GTP APN IMSI list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_apn_imsi_list#name TemplateGtpApnImsiList#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_apn_imsi_list#user_tag TemplateGtpApnImsiList#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_apn_imsi_list#uuid TemplateGtpApnImsiList#uuid}
  */
  readonly uuid?: string;
  /**
  * str_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_apn_imsi_list#str_list TemplateGtpApnImsiList#str_list}
  */
  readonly strList?: TemplateGtpApnImsiListStrListStruct[] | cdktf.IResolvable;
}
export interface TemplateGtpApnImsiListStrListStruct {
  /**
  * Specify the APN filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_apn_imsi_list#apn TemplateGtpApnImsiList#apn}
  */
  readonly apn?: string;
  /**
  * Specify the IMSI filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_apn_imsi_list#imsi TemplateGtpApnImsiList#imsi}
  */
  readonly imsi?: string;
  /**
  * Specify the IMSI filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_apn_imsi_list#imsi_selection TemplateGtpApnImsiList#imsi_selection}
  */
  readonly imsiSelection?: string;
  /**
  * 'mobilestation': MS provided APN, subscription not verified; 'network': Network provided APN, subscription not verified; 'verified': MS or Network provided APN, subscription verified;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_apn_imsi_list#selection_mode TemplateGtpApnImsiList#selection_mode}
  */
  readonly selectionMode?: string;
}

export function templateGtpApnImsiListStrListStructToTerraform(struct?: TemplateGtpApnImsiListStrListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apn: cdktf.stringToTerraform(struct!.apn),
    imsi: cdktf.stringToTerraform(struct!.imsi),
    imsi_selection: cdktf.stringToTerraform(struct!.imsiSelection),
    selection_mode: cdktf.stringToTerraform(struct!.selectionMode),
  }
}


export function templateGtpApnImsiListStrListStructToHclTerraform(struct?: TemplateGtpApnImsiListStrListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apn: {
      value: cdktf.stringToHclTerraform(struct!.apn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    imsi: {
      value: cdktf.stringToHclTerraform(struct!.imsi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    imsi_selection: {
      value: cdktf.stringToHclTerraform(struct!.imsiSelection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selection_mode: {
      value: cdktf.stringToHclTerraform(struct!.selectionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateGtpApnImsiListStrListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateGtpApnImsiListStrListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apn !== undefined) {
      hasAnyValues = true;
      internalValueResult.apn = this._apn;
    }
    if (this._imsi !== undefined) {
      hasAnyValues = true;
      internalValueResult.imsi = this._imsi;
    }
    if (this._imsiSelection !== undefined) {
      hasAnyValues = true;
      internalValueResult.imsiSelection = this._imsiSelection;
    }
    if (this._selectionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectionMode = this._selectionMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateGtpApnImsiListStrListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apn = undefined;
      this._imsi = undefined;
      this._imsiSelection = undefined;
      this._selectionMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apn = value.apn;
      this._imsi = value.imsi;
      this._imsiSelection = value.imsiSelection;
      this._selectionMode = value.selectionMode;
    }
  }

  // apn - computed: false, optional: true, required: false
  private _apn?: string; 
  public get apn() {
    return this.getStringAttribute('apn');
  }
  public set apn(value: string) {
    this._apn = value;
  }
  public resetApn() {
    this._apn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apnInput() {
    return this._apn;
  }

  // imsi - computed: false, optional: true, required: false
  private _imsi?: string; 
  public get imsi() {
    return this.getStringAttribute('imsi');
  }
  public set imsi(value: string) {
    this._imsi = value;
  }
  public resetImsi() {
    this._imsi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imsiInput() {
    return this._imsi;
  }

  // imsi_selection - computed: false, optional: true, required: false
  private _imsiSelection?: string; 
  public get imsiSelection() {
    return this.getStringAttribute('imsi_selection');
  }
  public set imsiSelection(value: string) {
    this._imsiSelection = value;
  }
  public resetImsiSelection() {
    this._imsiSelection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imsiSelectionInput() {
    return this._imsiSelection;
  }

  // selection_mode - computed: false, optional: true, required: false
  private _selectionMode?: string; 
  public get selectionMode() {
    return this.getStringAttribute('selection_mode');
  }
  public set selectionMode(value: string) {
    this._selectionMode = value;
  }
  public resetSelectionMode() {
    this._selectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectionModeInput() {
    return this._selectionMode;
  }
}

export class TemplateGtpApnImsiListStrListStructList extends cdktf.ComplexList {
  public internalValue? : TemplateGtpApnImsiListStrListStruct[] | cdktf.IResolvable

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
  public get(index: number): TemplateGtpApnImsiListStrListStructOutputReference {
    return new TemplateGtpApnImsiListStrListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_apn_imsi_list thunder_template_gtp_apn_imsi_list}
*/
export class TemplateGtpApnImsiList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_template_gtp_apn_imsi_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TemplateGtpApnImsiList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TemplateGtpApnImsiList to import
  * @param importFromId The id of the existing TemplateGtpApnImsiList that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_apn_imsi_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TemplateGtpApnImsiList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_template_gtp_apn_imsi_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_apn_imsi_list thunder_template_gtp_apn_imsi_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TemplateGtpApnImsiListConfig
  */
  public constructor(scope: Construct, id: string, config: TemplateGtpApnImsiListConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_template_gtp_apn_imsi_list',
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
    this._action = config.action;
    this._id = config.id;
    this._name = config.name;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._strList.internalValue = config.strList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // str_list - computed: false, optional: true, required: false
  private _strList = new TemplateGtpApnImsiListStrListStructList(this, "str_list", false);
  public get strList() {
    return this._strList;
  }
  public putStrList(value: TemplateGtpApnImsiListStrListStruct[] | cdktf.IResolvable) {
    this._strList.internalValue = value;
  }
  public resetStrList() {
    this._strList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strListInput() {
    return this._strList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      str_list: cdktf.listMapper(templateGtpApnImsiListStrListStructToTerraform, true)(this._strList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
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
      str_list: {
        value: cdktf.listMapperHcl(templateGtpApnImsiListStrListStructToHclTerraform, true)(this._strList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TemplateGtpApnImsiListStrListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
