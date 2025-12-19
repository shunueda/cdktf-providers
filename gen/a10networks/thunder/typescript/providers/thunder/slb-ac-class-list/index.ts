// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_ac_class_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbAcClassListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_ac_class_list#id SlbAcClassList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify name of the class list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_ac_class_list#name SlbAcClassList#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_ac_class_list#user_tag SlbAcClassList#user_tag}
  */
  readonly userTag?: string;
  /**
  * ac_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_ac_class_list#ac_list SlbAcClassList#ac_list}
  */
  readonly acList?: SlbAcClassListAcListStruct[] | cdktf.IResolvable;
}
export interface SlbAcClassListAcListStruct {
  /**
  * Specify key string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_ac_class_list#ac_key_string SlbAcClassList#ac_key_string}
  */
  readonly acKeyString?: string;
  /**
  * Specify value string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_ac_class_list#ac_key_value SlbAcClassList#ac_key_value}
  */
  readonly acKeyValue?: string;
  /**
  * 'contains': String contains another string; 'ends-with': String ends with another string; 'equals': String equals another string; 'starts-with': String starts with another string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_ac_class_list#ac_match_type SlbAcClassList#ac_match_type}
  */
  readonly acMatchType?: string;
  /**
  * 'add': Add the entry; 'delete': Delete the entry;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_ac_class_list#action SlbAcClassList#action}
  */
  readonly action?: string;
}

export function slbAcClassListAcListStructToTerraform(struct?: SlbAcClassListAcListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ac_key_string: cdktf.stringToTerraform(struct!.acKeyString),
    ac_key_value: cdktf.stringToTerraform(struct!.acKeyValue),
    ac_match_type: cdktf.stringToTerraform(struct!.acMatchType),
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function slbAcClassListAcListStructToHclTerraform(struct?: SlbAcClassListAcListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ac_key_string: {
      value: cdktf.stringToHclTerraform(struct!.acKeyString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ac_key_value: {
      value: cdktf.stringToHclTerraform(struct!.acKeyValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ac_match_type: {
      value: cdktf.stringToHclTerraform(struct!.acMatchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbAcClassListAcListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbAcClassListAcListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acKeyString !== undefined) {
      hasAnyValues = true;
      internalValueResult.acKeyString = this._acKeyString;
    }
    if (this._acKeyValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.acKeyValue = this._acKeyValue;
    }
    if (this._acMatchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.acMatchType = this._acMatchType;
    }
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbAcClassListAcListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acKeyString = undefined;
      this._acKeyValue = undefined;
      this._acMatchType = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acKeyString = value.acKeyString;
      this._acKeyValue = value.acKeyValue;
      this._acMatchType = value.acMatchType;
      this._action = value.action;
    }
  }

  // ac_key_string - computed: false, optional: true, required: false
  private _acKeyString?: string; 
  public get acKeyString() {
    return this.getStringAttribute('ac_key_string');
  }
  public set acKeyString(value: string) {
    this._acKeyString = value;
  }
  public resetAcKeyString() {
    this._acKeyString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acKeyStringInput() {
    return this._acKeyString;
  }

  // ac_key_value - computed: false, optional: true, required: false
  private _acKeyValue?: string; 
  public get acKeyValue() {
    return this.getStringAttribute('ac_key_value');
  }
  public set acKeyValue(value: string) {
    this._acKeyValue = value;
  }
  public resetAcKeyValue() {
    this._acKeyValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acKeyValueInput() {
    return this._acKeyValue;
  }

  // ac_match_type - computed: false, optional: true, required: false
  private _acMatchType?: string; 
  public get acMatchType() {
    return this.getStringAttribute('ac_match_type');
  }
  public set acMatchType(value: string) {
    this._acMatchType = value;
  }
  public resetAcMatchType() {
    this._acMatchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acMatchTypeInput() {
    return this._acMatchType;
  }

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
}

export class SlbAcClassListAcListStructList extends cdktf.ComplexList {
  public internalValue? : SlbAcClassListAcListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbAcClassListAcListStructOutputReference {
    return new SlbAcClassListAcListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_ac_class_list thunder_slb_ac_class_list}
*/
export class SlbAcClassList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_ac_class_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbAcClassList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbAcClassList to import
  * @param importFromId The id of the existing SlbAcClassList that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_ac_class_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbAcClassList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_ac_class_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_ac_class_list thunder_slb_ac_class_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbAcClassListConfig
  */
  public constructor(scope: Construct, id: string, config: SlbAcClassListConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_ac_class_list',
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
    this._id = config.id;
    this._name = config.name;
    this._userTag = config.userTag;
    this._acList.internalValue = config.acList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ac_list - computed: false, optional: true, required: false
  private _acList = new SlbAcClassListAcListStructList(this, "ac_list", false);
  public get acList() {
    return this._acList;
  }
  public putAcList(value: SlbAcClassListAcListStruct[] | cdktf.IResolvable) {
    this._acList.internalValue = value;
  }
  public resetAcList() {
    this._acList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acListInput() {
    return this._acList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      user_tag: cdktf.stringToTerraform(this._userTag),
      ac_list: cdktf.listMapper(slbAcClassListAcListStructToTerraform, true)(this._acList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      ac_list: {
        value: cdktf.listMapperHcl(slbAcClassListAcListStructToHclTerraform, true)(this._acList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbAcClassListAcListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
