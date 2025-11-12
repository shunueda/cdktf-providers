// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/controller_access_allow_list_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ControllerAccessAllowListConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set to true to enable enforcement of the `allow_list {}`'s IPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/controller_access_allow_list_config#enable_enforce ControllerAccessAllowListConfig#enable_enforce}
  */
  readonly enableEnforce?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/controller_access_allow_list_config#id ControllerAccessAllowListConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * allow_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/controller_access_allow_list_config#allow_list ControllerAccessAllowListConfig#allow_list}
  */
  readonly allowList: ControllerAccessAllowListConfigAllowListStruct[] | cdktf.IResolvable;
}
export interface ControllerAccessAllowListConfigAllowListStruct {
  /**
  * Description of the IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/controller_access_allow_list_config#description ControllerAccessAllowListConfig#description}
  */
  readonly description?: string;
  /**
  * IP address allowed access to the Controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/controller_access_allow_list_config#ip_address ControllerAccessAllowListConfig#ip_address}
  */
  readonly ipAddress: string;
}

export function controllerAccessAllowListConfigAllowListStructToTerraform(struct?: ControllerAccessAllowListConfigAllowListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function controllerAccessAllowListConfigAllowListStructToHclTerraform(struct?: ControllerAccessAllowListConfigAllowListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ControllerAccessAllowListConfigAllowListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ControllerAccessAllowListConfigAllowListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ControllerAccessAllowListConfigAllowListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._ipAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._ipAddress = value.ipAddress;
    }
  }

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

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }
}

export class ControllerAccessAllowListConfigAllowListStructList extends cdktf.ComplexList {
  public internalValue? : ControllerAccessAllowListConfigAllowListStruct[] | cdktf.IResolvable

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
  public get(index: number): ControllerAccessAllowListConfigAllowListStructOutputReference {
    return new ControllerAccessAllowListConfigAllowListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/controller_access_allow_list_config aviatrix_controller_access_allow_list_config}
*/
export class ControllerAccessAllowListConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_controller_access_allow_list_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ControllerAccessAllowListConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ControllerAccessAllowListConfig to import
  * @param importFromId The id of the existing ControllerAccessAllowListConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/controller_access_allow_list_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ControllerAccessAllowListConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_controller_access_allow_list_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/controller_access_allow_list_config aviatrix_controller_access_allow_list_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ControllerAccessAllowListConfigConfig
  */
  public constructor(scope: Construct, id: string, config: ControllerAccessAllowListConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_controller_access_allow_list_config',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.1.10',
        providerVersionConstraint: '8.1.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enableEnforce = config.enableEnforce;
    this._id = config.id;
    this._allowList.internalValue = config.allowList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_enforce - computed: false, optional: true, required: false
  private _enableEnforce?: boolean | cdktf.IResolvable; 
  public get enableEnforce() {
    return this.getBooleanAttribute('enable_enforce');
  }
  public set enableEnforce(value: boolean | cdktf.IResolvable) {
    this._enableEnforce = value;
  }
  public resetEnableEnforce() {
    this._enableEnforce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEnforceInput() {
    return this._enableEnforce;
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

  // allow_list - computed: false, optional: false, required: true
  private _allowList = new ControllerAccessAllowListConfigAllowListStructList(this, "allow_list", true);
  public get allowList() {
    return this._allowList;
  }
  public putAllowList(value: ControllerAccessAllowListConfigAllowListStruct[] | cdktf.IResolvable) {
    this._allowList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowListInput() {
    return this._allowList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable_enforce: cdktf.booleanToTerraform(this._enableEnforce),
      id: cdktf.stringToTerraform(this._id),
      allow_list: cdktf.listMapper(controllerAccessAllowListConfigAllowListStructToTerraform, true)(this._allowList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_enforce: {
        value: cdktf.booleanToHclTerraform(this._enableEnforce),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_list: {
        value: cdktf.listMapperHcl(controllerAccessAllowListConfigAllowListStructToHclTerraform, true)(this._allowList.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ControllerAccessAllowListConfigAllowListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
