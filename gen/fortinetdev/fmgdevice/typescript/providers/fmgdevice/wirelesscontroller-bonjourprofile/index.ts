// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_bonjourprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelesscontrollerBonjourprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_bonjourprofile#comment WirelesscontrollerBonjourprofile#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_bonjourprofile#device_name WirelesscontrollerBonjourprofile#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_bonjourprofile#device_vdom WirelesscontrollerBonjourprofile#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_bonjourprofile#dynamic_sort_subtable WirelesscontrollerBonjourprofile#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_bonjourprofile#id WirelesscontrollerBonjourprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_bonjourprofile#micro_location WirelesscontrollerBonjourprofile#micro_location}
  */
  readonly microLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_bonjourprofile#name WirelesscontrollerBonjourprofile#name}
  */
  readonly name?: string;
  /**
  * policy_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_bonjourprofile#policy_list WirelesscontrollerBonjourprofile#policy_list}
  */
  readonly policyList?: WirelesscontrollerBonjourprofilePolicyListStruct[] | cdktf.IResolvable;
}
export interface WirelesscontrollerBonjourprofilePolicyListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_bonjourprofile#description WirelesscontrollerBonjourprofile#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_bonjourprofile#from_vlan WirelesscontrollerBonjourprofile#from_vlan}
  */
  readonly fromVlan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_bonjourprofile#policy_id WirelesscontrollerBonjourprofile#policy_id}
  */
  readonly policyId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_bonjourprofile#services WirelesscontrollerBonjourprofile#services}
  */
  readonly services?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_bonjourprofile#to_vlan WirelesscontrollerBonjourprofile#to_vlan}
  */
  readonly toVlan?: string;
}

export function wirelesscontrollerBonjourprofilePolicyListStructToTerraform(struct?: WirelesscontrollerBonjourprofilePolicyListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    from_vlan: cdktf.stringToTerraform(struct!.fromVlan),
    policy_id: cdktf.numberToTerraform(struct!.policyId),
    services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.services),
    to_vlan: cdktf.stringToTerraform(struct!.toVlan),
  }
}


export function wirelesscontrollerBonjourprofilePolicyListStructToHclTerraform(struct?: WirelesscontrollerBonjourprofilePolicyListStruct | cdktf.IResolvable): any {
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
    from_vlan: {
      value: cdktf.stringToHclTerraform(struct!.fromVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_id: {
      value: cdktf.numberToHclTerraform(struct!.policyId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    services: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.services),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    to_vlan: {
      value: cdktf.stringToHclTerraform(struct!.toVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelesscontrollerBonjourprofilePolicyListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelesscontrollerBonjourprofilePolicyListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._fromVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromVlan = this._fromVlan;
    }
    if (this._policyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyId = this._policyId;
    }
    if (this._services !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services;
    }
    if (this._toVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.toVlan = this._toVlan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelesscontrollerBonjourprofilePolicyListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._fromVlan = undefined;
      this._policyId = undefined;
      this._services = undefined;
      this._toVlan = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._fromVlan = value.fromVlan;
      this._policyId = value.policyId;
      this._services = value.services;
      this._toVlan = value.toVlan;
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

  // from_vlan - computed: true, optional: true, required: false
  private _fromVlan?: string; 
  public get fromVlan() {
    return this.getStringAttribute('from_vlan');
  }
  public set fromVlan(value: string) {
    this._fromVlan = value;
  }
  public resetFromVlan() {
    this._fromVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromVlanInput() {
    return this._fromVlan;
  }

  // policy_id - computed: false, optional: true, required: false
  private _policyId?: number; 
  public get policyId() {
    return this.getNumberAttribute('policy_id');
  }
  public set policyId(value: number) {
    this._policyId = value;
  }
  public resetPolicyId() {
    this._policyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // services - computed: true, optional: true, required: false
  private _services?: string[]; 
  public get services() {
    return cdktf.Fn.tolist(this.getListAttribute('services'));
  }
  public set services(value: string[]) {
    this._services = value;
  }
  public resetServices() {
    this._services = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services;
  }

  // to_vlan - computed: true, optional: true, required: false
  private _toVlan?: string; 
  public get toVlan() {
    return this.getStringAttribute('to_vlan');
  }
  public set toVlan(value: string) {
    this._toVlan = value;
  }
  public resetToVlan() {
    this._toVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toVlanInput() {
    return this._toVlan;
  }
}

export class WirelesscontrollerBonjourprofilePolicyListStructList extends cdktf.ComplexList {
  public internalValue? : WirelesscontrollerBonjourprofilePolicyListStruct[] | cdktf.IResolvable

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
  public get(index: number): WirelesscontrollerBonjourprofilePolicyListStructOutputReference {
    return new WirelesscontrollerBonjourprofilePolicyListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_bonjourprofile fmgdevice_wirelesscontroller_bonjourprofile}
*/
export class WirelesscontrollerBonjourprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_wirelesscontroller_bonjourprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelesscontrollerBonjourprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelesscontrollerBonjourprofile to import
  * @param importFromId The id of the existing WirelesscontrollerBonjourprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_bonjourprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelesscontrollerBonjourprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_wirelesscontroller_bonjourprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_bonjourprofile fmgdevice_wirelesscontroller_bonjourprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelesscontrollerBonjourprofileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: WirelesscontrollerBonjourprofileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_wirelesscontroller_bonjourprofile',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comment = config.comment;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._id = config.id;
    this._microLocation = config.microLocation;
    this._name = config.name;
    this._policyList.internalValue = config.policyList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // device_vdom - computed: true, optional: true, required: false
  private _deviceVdom?: string; 
  public get deviceVdom() {
    return this.getStringAttribute('device_vdom');
  }
  public set deviceVdom(value: string) {
    this._deviceVdom = value;
  }
  public resetDeviceVdom() {
    this._deviceVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVdomInput() {
    return this._deviceVdom;
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

  // micro_location - computed: true, optional: true, required: false
  private _microLocation?: string; 
  public get microLocation() {
    return this.getStringAttribute('micro_location');
  }
  public set microLocation(value: string) {
    this._microLocation = value;
  }
  public resetMicroLocation() {
    this._microLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microLocationInput() {
    return this._microLocation;
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

  // policy_list - computed: false, optional: true, required: false
  private _policyList = new WirelesscontrollerBonjourprofilePolicyListStructList(this, "policy_list", false);
  public get policyList() {
    return this._policyList;
  }
  public putPolicyList(value: WirelesscontrollerBonjourprofilePolicyListStruct[] | cdktf.IResolvable) {
    this._policyList.internalValue = value;
  }
  public resetPolicyList() {
    this._policyList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyListInput() {
    return this._policyList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      id: cdktf.stringToTerraform(this._id),
      micro_location: cdktf.stringToTerraform(this._microLocation),
      name: cdktf.stringToTerraform(this._name),
      policy_list: cdktf.listMapper(wirelesscontrollerBonjourprofilePolicyListStructToTerraform, true)(this._policyList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_vdom: {
        value: cdktf.stringToHclTerraform(this._deviceVdom),
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
      micro_location: {
        value: cdktf.stringToHclTerraform(this._microLocation),
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
      policy_list: {
        value: cdktf.listMapperHcl(wirelesscontrollerBonjourprofilePolicyListStructToHclTerraform, true)(this._policyList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WirelesscontrollerBonjourprofilePolicyListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
