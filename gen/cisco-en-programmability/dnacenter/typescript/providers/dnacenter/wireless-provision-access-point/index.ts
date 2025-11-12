// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_provision_access_point
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelessProvisionAccessPointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_provision_access_point#id WirelessProvisionAccessPoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_provision_access_point#parameters WirelessProvisionAccessPoint#parameters}
  */
  readonly parameters: WirelessProvisionAccessPointParameters;
}
export interface WirelessProvisionAccessPointItem {
}

export function wirelessProvisionAccessPointItemToTerraform(struct?: WirelessProvisionAccessPointItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function wirelessProvisionAccessPointItemToHclTerraform(struct?: WirelessProvisionAccessPointItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class WirelessProvisionAccessPointItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelessProvisionAccessPointItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelessProvisionAccessPointItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // execution_id - computed: true, optional: false, required: false
  public get executionId() {
    return this.getStringAttribute('execution_id');
  }

  // execution_url - computed: true, optional: false, required: false
  public get executionUrl() {
    return this.getStringAttribute('execution_url');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class WirelessProvisionAccessPointItemList extends cdktf.ComplexList {

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
  public get(index: number): WirelessProvisionAccessPointItemOutputReference {
    return new WirelessProvisionAccessPointItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WirelessProvisionAccessPointParametersItems {
}

export function wirelessProvisionAccessPointParametersItemsToTerraform(struct?: WirelessProvisionAccessPointParametersItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function wirelessProvisionAccessPointParametersItemsToHclTerraform(struct?: WirelessProvisionAccessPointParametersItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class WirelessProvisionAccessPointParametersItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelessProvisionAccessPointParametersItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelessProvisionAccessPointParametersItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // execution_id - computed: true, optional: false, required: false
  public get executionId() {
    return this.getStringAttribute('execution_id');
  }

  // execution_url - computed: true, optional: false, required: false
  public get executionUrl() {
    return this.getStringAttribute('execution_url');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class WirelessProvisionAccessPointParametersItemsList extends cdktf.ComplexList {

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
  public get(index: number): WirelessProvisionAccessPointParametersItemsOutputReference {
    return new WirelessProvisionAccessPointParametersItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WirelessProvisionAccessPointParametersPayload {
  /**
  * Custom AP group name
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_provision_access_point#custom_ap_group_name WirelessProvisionAccessPoint#custom_ap_group_name}
  */
  readonly customApGroupName?: string;
  /**
  * ["Custom flex group name"]
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_provision_access_point#custom_flex_group_name WirelessProvisionAccessPoint#custom_flex_group_name}
  */
  readonly customFlexGroupName?: string[];
  /**
  * Device name
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_provision_access_point#device_name WirelessProvisionAccessPoint#device_name}
  */
  readonly deviceName?: string;
  /**
  * persistbapioutput
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_provision_access_point#persistbapioutput WirelessProvisionAccessPoint#persistbapioutput}
  */
  readonly persistbapioutput?: string;
  /**
  * Radio frequency profile name
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_provision_access_point#rf_profile WirelessProvisionAccessPoint#rf_profile}
  */
  readonly rfProfile?: string;
  /**
  * Site name hierarchy(ex: Global/...)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_provision_access_point#site_id WirelessProvisionAccessPoint#site_id}
  */
  readonly siteId?: string;
  /**
  * Site name hierarchy(ex: Global/...)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_provision_access_point#site_name_hierarchy WirelessProvisionAccessPoint#site_name_hierarchy}
  */
  readonly siteNameHierarchy?: string;
  /**
  * ApWirelessConfiguration
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_provision_access_point#type WirelessProvisionAccessPoint#type}
  */
  readonly type?: string;
}

export function wirelessProvisionAccessPointParametersPayloadToTerraform(struct?: WirelessProvisionAccessPointParametersPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_ap_group_name: cdktf.stringToTerraform(struct!.customApGroupName),
    custom_flex_group_name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.customFlexGroupName),
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    persistbapioutput: cdktf.stringToTerraform(struct!.persistbapioutput),
    rf_profile: cdktf.stringToTerraform(struct!.rfProfile),
    site_id: cdktf.stringToTerraform(struct!.siteId),
    site_name_hierarchy: cdktf.stringToTerraform(struct!.siteNameHierarchy),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function wirelessProvisionAccessPointParametersPayloadToHclTerraform(struct?: WirelessProvisionAccessPointParametersPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_ap_group_name: {
      value: cdktf.stringToHclTerraform(struct!.customApGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_flex_group_name: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.customFlexGroupName),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    device_name: {
      value: cdktf.stringToHclTerraform(struct!.deviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    persistbapioutput: {
      value: cdktf.stringToHclTerraform(struct!.persistbapioutput),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rf_profile: {
      value: cdktf.stringToHclTerraform(struct!.rfProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site_id: {
      value: cdktf.stringToHclTerraform(struct!.siteId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site_name_hierarchy: {
      value: cdktf.stringToHclTerraform(struct!.siteNameHierarchy),
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

export class WirelessProvisionAccessPointParametersPayloadOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelessProvisionAccessPointParametersPayload | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customApGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.customApGroupName = this._customApGroupName;
    }
    if (this._customFlexGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.customFlexGroupName = this._customFlexGroupName;
    }
    if (this._deviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceName = this._deviceName;
    }
    if (this._persistbapioutput !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistbapioutput = this._persistbapioutput;
    }
    if (this._rfProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.rfProfile = this._rfProfile;
    }
    if (this._siteId !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteId = this._siteId;
    }
    if (this._siteNameHierarchy !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteNameHierarchy = this._siteNameHierarchy;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelessProvisionAccessPointParametersPayload | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customApGroupName = undefined;
      this._customFlexGroupName = undefined;
      this._deviceName = undefined;
      this._persistbapioutput = undefined;
      this._rfProfile = undefined;
      this._siteId = undefined;
      this._siteNameHierarchy = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customApGroupName = value.customApGroupName;
      this._customFlexGroupName = value.customFlexGroupName;
      this._deviceName = value.deviceName;
      this._persistbapioutput = value.persistbapioutput;
      this._rfProfile = value.rfProfile;
      this._siteId = value.siteId;
      this._siteNameHierarchy = value.siteNameHierarchy;
      this._type = value.type;
    }
  }

  // custom_ap_group_name - computed: true, optional: true, required: false
  private _customApGroupName?: string; 
  public get customApGroupName() {
    return this.getStringAttribute('custom_ap_group_name');
  }
  public set customApGroupName(value: string) {
    this._customApGroupName = value;
  }
  public resetCustomApGroupName() {
    this._customApGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customApGroupNameInput() {
    return this._customApGroupName;
  }

  // custom_flex_group_name - computed: true, optional: true, required: false
  private _customFlexGroupName?: string[]; 
  public get customFlexGroupName() {
    return this.getListAttribute('custom_flex_group_name');
  }
  public set customFlexGroupName(value: string[]) {
    this._customFlexGroupName = value;
  }
  public resetCustomFlexGroupName() {
    this._customFlexGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFlexGroupNameInput() {
    return this._customFlexGroupName;
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

  // persistbapioutput - computed: false, optional: true, required: false
  private _persistbapioutput?: string; 
  public get persistbapioutput() {
    return this.getStringAttribute('persistbapioutput');
  }
  public set persistbapioutput(value: string) {
    this._persistbapioutput = value;
  }
  public resetPersistbapioutput() {
    this._persistbapioutput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistbapioutputInput() {
    return this._persistbapioutput;
  }

  // rf_profile - computed: true, optional: true, required: false
  private _rfProfile?: string; 
  public get rfProfile() {
    return this.getStringAttribute('rf_profile');
  }
  public set rfProfile(value: string) {
    this._rfProfile = value;
  }
  public resetRfProfile() {
    this._rfProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rfProfileInput() {
    return this._rfProfile;
  }

  // site_id - computed: true, optional: true, required: false
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  public resetSiteId() {
    this._siteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // site_name_hierarchy - computed: true, optional: true, required: false
  private _siteNameHierarchy?: string; 
  public get siteNameHierarchy() {
    return this.getStringAttribute('site_name_hierarchy');
  }
  public set siteNameHierarchy(value: string) {
    this._siteNameHierarchy = value;
  }
  public resetSiteNameHierarchy() {
    this._siteNameHierarchy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteNameHierarchyInput() {
    return this._siteNameHierarchy;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class WirelessProvisionAccessPointParametersPayloadList extends cdktf.ComplexList {
  public internalValue? : WirelessProvisionAccessPointParametersPayload[] | cdktf.IResolvable

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
  public get(index: number): WirelessProvisionAccessPointParametersPayloadOutputReference {
    return new WirelessProvisionAccessPointParametersPayloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WirelessProvisionAccessPointParameters {
  /**
  * payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_provision_access_point#payload WirelessProvisionAccessPoint#payload}
  */
  readonly payload?: WirelessProvisionAccessPointParametersPayload[] | cdktf.IResolvable;
}

export function wirelessProvisionAccessPointParametersToTerraform(struct?: WirelessProvisionAccessPointParametersOutputReference | WirelessProvisionAccessPointParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    payload: cdktf.listMapper(wirelessProvisionAccessPointParametersPayloadToTerraform, true)(struct!.payload),
  }
}


export function wirelessProvisionAccessPointParametersToHclTerraform(struct?: WirelessProvisionAccessPointParametersOutputReference | WirelessProvisionAccessPointParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    payload: {
      value: cdktf.listMapperHcl(wirelessProvisionAccessPointParametersPayloadToHclTerraform, true)(struct!.payload),
      isBlock: true,
      type: "list",
      storageClassType: "WirelessProvisionAccessPointParametersPayloadList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelessProvisionAccessPointParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WirelessProvisionAccessPointParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._payload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelessProvisionAccessPointParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._payload.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._payload.internalValue = value.payload;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new WirelessProvisionAccessPointParametersItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // payload - computed: false, optional: true, required: false
  private _payload = new WirelessProvisionAccessPointParametersPayloadList(this, "payload", false);
  public get payload() {
    return this._payload;
  }
  public putPayload(value: WirelessProvisionAccessPointParametersPayload[] | cdktf.IResolvable) {
    this._payload.internalValue = value;
  }
  public resetPayload() {
    this._payload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_provision_access_point dnacenter_wireless_provision_access_point}
*/
export class WirelessProvisionAccessPoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_wireless_provision_access_point";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelessProvisionAccessPoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelessProvisionAccessPoint to import
  * @param importFromId The id of the existing WirelessProvisionAccessPoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_provision_access_point#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelessProvisionAccessPoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_wireless_provision_access_point", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_provision_access_point dnacenter_wireless_provision_access_point} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelessProvisionAccessPointConfig
  */
  public constructor(scope: Construct, id: string, config: WirelessProvisionAccessPointConfig) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_wireless_provision_access_point',
      terraformGeneratorMetadata: {
        providerName: 'dnacenter',
        providerVersion: '1.1.21',
        providerVersionConstraint: '1.1.21'
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
  private _item = new WirelessProvisionAccessPointItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // parameters - computed: false, optional: false, required: true
  private _parameters = new WirelessProvisionAccessPointParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: WirelessProvisionAccessPointParameters) {
    this._parameters.internalValue = value;
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
      parameters: wirelessProvisionAccessPointParametersToTerraform(this._parameters.internalValue),
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
        value: wirelessProvisionAccessPointParametersToHclTerraform(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WirelessProvisionAccessPointParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
