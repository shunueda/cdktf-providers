// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_virtual_network_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SdaVirtualNetworkV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_virtual_network_v2#id SdaVirtualNetworkV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_virtual_network_v2#parameters SdaVirtualNetworkV2#parameters}
  */
  readonly parameters?: SdaVirtualNetworkV2Parameters[] | cdktf.IResolvable;
}
export interface SdaVirtualNetworkV2Item {
}

export function sdaVirtualNetworkV2ItemToTerraform(struct?: SdaVirtualNetworkV2Item): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sdaVirtualNetworkV2ItemToHclTerraform(struct?: SdaVirtualNetworkV2Item): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SdaVirtualNetworkV2ItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SdaVirtualNetworkV2Item | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SdaVirtualNetworkV2Item | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // is_guest_virtual_network - computed: true, optional: false, required: false
  public get isGuestVirtualNetwork() {
    return this.getStringAttribute('is_guest_virtual_network');
  }

  // scalable_group_names - computed: true, optional: false, required: false
  public get scalableGroupNames() {
    return this.getListAttribute('scalable_group_names');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // v_manage_vpn_id - computed: true, optional: false, required: false
  public get vManageVpnId() {
    return this.getStringAttribute('v_manage_vpn_id');
  }

  // virtual_network_name - computed: true, optional: false, required: false
  public get virtualNetworkName() {
    return this.getStringAttribute('virtual_network_name');
  }
}

export class SdaVirtualNetworkV2ItemList extends cdktf.ComplexList {

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
  public get(index: number): SdaVirtualNetworkV2ItemOutputReference {
    return new SdaVirtualNetworkV2ItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SdaVirtualNetworkV2Parameters {
  /**
  * Guest Virtual Network enablement flag, default value is False.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_virtual_network_v2#is_guest_virtual_network SdaVirtualNetworkV2#is_guest_virtual_network}
  */
  readonly isGuestVirtualNetwork?: string;
  /**
  * Scalable Group to be associated to virtual network
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_virtual_network_v2#scalable_group_names SdaVirtualNetworkV2#scalable_group_names}
  */
  readonly scalableGroupNames?: string[];
  /**
  * vManage vpn id for SD-WAN
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_virtual_network_v2#v_manage_vpn_id SdaVirtualNetworkV2#v_manage_vpn_id}
  */
  readonly vManageVpnId?: string;
  /**
  * Virtual Network Name to be assigned at global level
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_virtual_network_v2#virtual_network_name SdaVirtualNetworkV2#virtual_network_name}
  */
  readonly virtualNetworkName?: string;
}

export function sdaVirtualNetworkV2ParametersToTerraform(struct?: SdaVirtualNetworkV2Parameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_guest_virtual_network: cdktf.stringToTerraform(struct!.isGuestVirtualNetwork),
    scalable_group_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scalableGroupNames),
    v_manage_vpn_id: cdktf.stringToTerraform(struct!.vManageVpnId),
    virtual_network_name: cdktf.stringToTerraform(struct!.virtualNetworkName),
  }
}


export function sdaVirtualNetworkV2ParametersToHclTerraform(struct?: SdaVirtualNetworkV2Parameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_guest_virtual_network: {
      value: cdktf.stringToHclTerraform(struct!.isGuestVirtualNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scalable_group_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scalableGroupNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    v_manage_vpn_id: {
      value: cdktf.stringToHclTerraform(struct!.vManageVpnId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_network_name: {
      value: cdktf.stringToHclTerraform(struct!.virtualNetworkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SdaVirtualNetworkV2ParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SdaVirtualNetworkV2Parameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isGuestVirtualNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.isGuestVirtualNetwork = this._isGuestVirtualNetwork;
    }
    if (this._scalableGroupNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalableGroupNames = this._scalableGroupNames;
    }
    if (this._vManageVpnId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vManageVpnId = this._vManageVpnId;
    }
    if (this._virtualNetworkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetworkName = this._virtualNetworkName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SdaVirtualNetworkV2Parameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isGuestVirtualNetwork = undefined;
      this._scalableGroupNames = undefined;
      this._vManageVpnId = undefined;
      this._virtualNetworkName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isGuestVirtualNetwork = value.isGuestVirtualNetwork;
      this._scalableGroupNames = value.scalableGroupNames;
      this._vManageVpnId = value.vManageVpnId;
      this._virtualNetworkName = value.virtualNetworkName;
    }
  }

  // is_guest_virtual_network - computed: true, optional: true, required: false
  private _isGuestVirtualNetwork?: string; 
  public get isGuestVirtualNetwork() {
    return this.getStringAttribute('is_guest_virtual_network');
  }
  public set isGuestVirtualNetwork(value: string) {
    this._isGuestVirtualNetwork = value;
  }
  public resetIsGuestVirtualNetwork() {
    this._isGuestVirtualNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isGuestVirtualNetworkInput() {
    return this._isGuestVirtualNetwork;
  }

  // scalable_group_names - computed: true, optional: true, required: false
  private _scalableGroupNames?: string[]; 
  public get scalableGroupNames() {
    return this.getListAttribute('scalable_group_names');
  }
  public set scalableGroupNames(value: string[]) {
    this._scalableGroupNames = value;
  }
  public resetScalableGroupNames() {
    this._scalableGroupNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalableGroupNamesInput() {
    return this._scalableGroupNames;
  }

  // v_manage_vpn_id - computed: true, optional: true, required: false
  private _vManageVpnId?: string; 
  public get vManageVpnId() {
    return this.getStringAttribute('v_manage_vpn_id');
  }
  public set vManageVpnId(value: string) {
    this._vManageVpnId = value;
  }
  public resetVManageVpnId() {
    this._vManageVpnId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vManageVpnIdInput() {
    return this._vManageVpnId;
  }

  // virtual_network_name - computed: true, optional: true, required: false
  private _virtualNetworkName?: string; 
  public get virtualNetworkName() {
    return this.getStringAttribute('virtual_network_name');
  }
  public set virtualNetworkName(value: string) {
    this._virtualNetworkName = value;
  }
  public resetVirtualNetworkName() {
    this._virtualNetworkName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkNameInput() {
    return this._virtualNetworkName;
  }
}

export class SdaVirtualNetworkV2ParametersList extends cdktf.ComplexList {
  public internalValue? : SdaVirtualNetworkV2Parameters[] | cdktf.IResolvable

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
  public get(index: number): SdaVirtualNetworkV2ParametersOutputReference {
    return new SdaVirtualNetworkV2ParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_virtual_network_v2 dnacenter_sda_virtual_network_v2}
*/
export class SdaVirtualNetworkV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_sda_virtual_network_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SdaVirtualNetworkV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SdaVirtualNetworkV2 to import
  * @param importFromId The id of the existing SdaVirtualNetworkV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_virtual_network_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SdaVirtualNetworkV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_sda_virtual_network_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_virtual_network_v2 dnacenter_sda_virtual_network_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SdaVirtualNetworkV2Config = {}
  */
  public constructor(scope: Construct, id: string, config: SdaVirtualNetworkV2Config = {}) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_sda_virtual_network_v2',
      terraformGeneratorMetadata: {
        providerName: 'dnacenter',
        providerVersion: '1.1.21'
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
    this._parameters.internalValue = config.parameters;
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

  // item - computed: true, optional: false, required: false
  private _item = new SdaVirtualNetworkV2ItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new SdaVirtualNetworkV2ParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: SdaVirtualNetworkV2Parameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      parameters: cdktf.listMapper(sdaVirtualNetworkV2ParametersToTerraform, true)(this._parameters.internalValue),
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
      parameters: {
        value: cdktf.listMapperHcl(sdaVirtualNetworkV2ParametersToHclTerraform, true)(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SdaVirtualNetworkV2ParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
