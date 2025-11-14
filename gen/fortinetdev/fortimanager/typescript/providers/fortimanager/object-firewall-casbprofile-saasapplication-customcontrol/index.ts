// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_casbprofile_saasapplication_customcontrol
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectFirewallCasbprofileSaasapplicationCustomcontrolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_casbprofile_saasapplication_customcontrol#adom ObjectFirewallCasbprofileSaasapplicationCustomcontrol#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_casbprofile_saasapplication_customcontrol#casb_profile ObjectFirewallCasbprofileSaasapplicationCustomcontrol#casb_profile}
  */
  readonly casbProfile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_casbprofile_saasapplication_customcontrol#dynamic_sort_subtable ObjectFirewallCasbprofileSaasapplicationCustomcontrol#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_casbprofile_saasapplication_customcontrol#id ObjectFirewallCasbprofileSaasapplicationCustomcontrol#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_casbprofile_saasapplication_customcontrol#name ObjectFirewallCasbprofileSaasapplicationCustomcontrol#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_casbprofile_saasapplication_customcontrol#saas_application ObjectFirewallCasbprofileSaasapplicationCustomcontrol#saas_application}
  */
  readonly saasApplication: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_casbprofile_saasapplication_customcontrol#scopetype ObjectFirewallCasbprofileSaasapplicationCustomcontrol#scopetype}
  */
  readonly scopetype?: string;
  /**
  * option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_casbprofile_saasapplication_customcontrol#option ObjectFirewallCasbprofileSaasapplicationCustomcontrol#option}
  */
  readonly option?: ObjectFirewallCasbprofileSaasapplicationCustomcontrolOption[] | cdktf.IResolvable;
}
export interface ObjectFirewallCasbprofileSaasapplicationCustomcontrolOption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_casbprofile_saasapplication_customcontrol#name ObjectFirewallCasbprofileSaasapplicationCustomcontrol#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_casbprofile_saasapplication_customcontrol#user_input ObjectFirewallCasbprofileSaasapplicationCustomcontrol#user_input}
  */
  readonly userInput?: string[];
}

export function objectFirewallCasbprofileSaasapplicationCustomcontrolOptionToTerraform(struct?: ObjectFirewallCasbprofileSaasapplicationCustomcontrolOption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    user_input: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.userInput),
  }
}


export function objectFirewallCasbprofileSaasapplicationCustomcontrolOptionToHclTerraform(struct?: ObjectFirewallCasbprofileSaasapplicationCustomcontrolOption | cdktf.IResolvable): any {
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
    user_input: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.userInput),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFirewallCasbprofileSaasapplicationCustomcontrolOptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFirewallCasbprofileSaasapplicationCustomcontrolOption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._userInput !== undefined) {
      hasAnyValues = true;
      internalValueResult.userInput = this._userInput;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFirewallCasbprofileSaasapplicationCustomcontrolOption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._userInput = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._userInput = value.userInput;
    }
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

  // user_input - computed: true, optional: true, required: false
  private _userInput?: string[]; 
  public get userInput() {
    return cdktf.Fn.tolist(this.getListAttribute('user_input'));
  }
  public set userInput(value: string[]) {
    this._userInput = value;
  }
  public resetUserInput() {
    this._userInput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInputInput() {
    return this._userInput;
  }
}

export class ObjectFirewallCasbprofileSaasapplicationCustomcontrolOptionList extends cdktf.ComplexList {
  public internalValue? : ObjectFirewallCasbprofileSaasapplicationCustomcontrolOption[] | cdktf.IResolvable

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
  public get(index: number): ObjectFirewallCasbprofileSaasapplicationCustomcontrolOptionOutputReference {
    return new ObjectFirewallCasbprofileSaasapplicationCustomcontrolOptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_casbprofile_saasapplication_customcontrol fortimanager_object_firewall_casbprofile_saasapplication_customcontrol}
*/
export class ObjectFirewallCasbprofileSaasapplicationCustomcontrol extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_firewall_casbprofile_saasapplication_customcontrol";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectFirewallCasbprofileSaasapplicationCustomcontrol resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectFirewallCasbprofileSaasapplicationCustomcontrol to import
  * @param importFromId The id of the existing ObjectFirewallCasbprofileSaasapplicationCustomcontrol that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_casbprofile_saasapplication_customcontrol#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectFirewallCasbprofileSaasapplicationCustomcontrol to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_firewall_casbprofile_saasapplication_customcontrol", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_casbprofile_saasapplication_customcontrol fortimanager_object_firewall_casbprofile_saasapplication_customcontrol} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectFirewallCasbprofileSaasapplicationCustomcontrolConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectFirewallCasbprofileSaasapplicationCustomcontrolConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_firewall_casbprofile_saasapplication_customcontrol',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._casbProfile = config.casbProfile;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._id = config.id;
    this._name = config.name;
    this._saasApplication = config.saasApplication;
    this._scopetype = config.scopetype;
    this._option.internalValue = config.option;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // casb_profile - computed: false, optional: false, required: true
  private _casbProfile?: string; 
  public get casbProfile() {
    return this.getStringAttribute('casb_profile');
  }
  public set casbProfile(value: string) {
    this._casbProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get casbProfileInput() {
    return this._casbProfile;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
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

  // saas_application - computed: false, optional: false, required: true
  private _saasApplication?: string; 
  public get saasApplication() {
    return this.getStringAttribute('saas_application');
  }
  public set saasApplication(value: string) {
    this._saasApplication = value;
  }
  // Temporarily expose input value. Use with caution.
  public get saasApplicationInput() {
    return this._saasApplication;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // option - computed: false, optional: true, required: false
  private _option = new ObjectFirewallCasbprofileSaasapplicationCustomcontrolOptionList(this, "option", false);
  public get option() {
    return this._option;
  }
  public putOption(value: ObjectFirewallCasbprofileSaasapplicationCustomcontrolOption[] | cdktf.IResolvable) {
    this._option.internalValue = value;
  }
  public resetOption() {
    this._option.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionInput() {
    return this._option.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      casb_profile: cdktf.stringToTerraform(this._casbProfile),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      saas_application: cdktf.stringToTerraform(this._saasApplication),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      option: cdktf.listMapper(objectFirewallCasbprofileSaasapplicationCustomcontrolOptionToTerraform, true)(this._option.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      casb_profile: {
        value: cdktf.stringToHclTerraform(this._casbProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
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
      saas_application: {
        value: cdktf.stringToHclTerraform(this._saasApplication),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      option: {
        value: cdktf.listMapperHcl(objectFirewallCasbprofileSaasapplicationCustomcontrolOptionToHclTerraform, true)(this._option.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFirewallCasbprofileSaasapplicationCustomcontrolOptionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
