// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_vlan_to_ssid
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FabricVlanToSsidConfig extends cdktf.TerraformMetaArguments {
  /**
  * Fabric ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_vlan_to_ssid#fabric_id FabricVlanToSsid#fabric_id}
  */
  readonly fabricId: string;
  /**
  * List of VLAN to SSID mappings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_vlan_to_ssid#mappings FabricVlanToSsid#mappings}
  */
  readonly mappings: FabricVlanToSsidMappings[] | cdktf.IResolvable;
}
export interface FabricVlanToSsidMappingsSsidDetails {
  /**
  * Name of the SSID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_vlan_to_ssid#name FabricVlanToSsid#name}
  */
  readonly name: string;
  /**
  * Represents the name of the Security Group. Example: Auditors, BYOD, Developers, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_vlan_to_ssid#security_group_tag FabricVlanToSsid#security_group_tag}
  */
  readonly securityGroupTag?: string;
}

export function fabricVlanToSsidMappingsSsidDetailsToTerraform(struct?: FabricVlanToSsidMappingsSsidDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    security_group_tag: cdktf.stringToTerraform(struct!.securityGroupTag),
  }
}


export function fabricVlanToSsidMappingsSsidDetailsToHclTerraform(struct?: FabricVlanToSsidMappingsSsidDetails | cdktf.IResolvable): any {
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
    security_group_tag: {
      value: cdktf.stringToHclTerraform(struct!.securityGroupTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricVlanToSsidMappingsSsidDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FabricVlanToSsidMappingsSsidDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._securityGroupTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupTag = this._securityGroupTag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricVlanToSsidMappingsSsidDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._securityGroupTag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._securityGroupTag = value.securityGroupTag;
    }
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

  // security_group_tag - computed: false, optional: true, required: false
  private _securityGroupTag?: string; 
  public get securityGroupTag() {
    return this.getStringAttribute('security_group_tag');
  }
  public set securityGroupTag(value: string) {
    this._securityGroupTag = value;
  }
  public resetSecurityGroupTag() {
    this._securityGroupTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupTagInput() {
    return this._securityGroupTag;
  }
}

export class FabricVlanToSsidMappingsSsidDetailsList extends cdktf.ComplexList {
  public internalValue? : FabricVlanToSsidMappingsSsidDetails[] | cdktf.IResolvable

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
  public get(index: number): FabricVlanToSsidMappingsSsidDetailsOutputReference {
    return new FabricVlanToSsidMappingsSsidDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FabricVlanToSsidMappings {
  /**
  * SSID Details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_vlan_to_ssid#ssid_details FabricVlanToSsid#ssid_details}
  */
  readonly ssidDetails?: FabricVlanToSsidMappingsSsidDetails[] | cdktf.IResolvable;
  /**
  * VLAN Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_vlan_to_ssid#vlan_name FabricVlanToSsid#vlan_name}
  */
  readonly vlanName?: string;
}

export function fabricVlanToSsidMappingsToTerraform(struct?: FabricVlanToSsidMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ssid_details: cdktf.listMapper(fabricVlanToSsidMappingsSsidDetailsToTerraform, false)(struct!.ssidDetails),
    vlan_name: cdktf.stringToTerraform(struct!.vlanName),
  }
}


export function fabricVlanToSsidMappingsToHclTerraform(struct?: FabricVlanToSsidMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ssid_details: {
      value: cdktf.listMapperHcl(fabricVlanToSsidMappingsSsidDetailsToHclTerraform, false)(struct!.ssidDetails),
      isBlock: true,
      type: "set",
      storageClassType: "FabricVlanToSsidMappingsSsidDetailsList",
    },
    vlan_name: {
      value: cdktf.stringToHclTerraform(struct!.vlanName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricVlanToSsidMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FabricVlanToSsidMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ssidDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssidDetails = this._ssidDetails?.internalValue;
    }
    if (this._vlanName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanName = this._vlanName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricVlanToSsidMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ssidDetails.internalValue = undefined;
      this._vlanName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ssidDetails.internalValue = value.ssidDetails;
      this._vlanName = value.vlanName;
    }
  }

  // ssid_details - computed: false, optional: true, required: false
  private _ssidDetails = new FabricVlanToSsidMappingsSsidDetailsList(this, "ssid_details", true);
  public get ssidDetails() {
    return this._ssidDetails;
  }
  public putSsidDetails(value: FabricVlanToSsidMappingsSsidDetails[] | cdktf.IResolvable) {
    this._ssidDetails.internalValue = value;
  }
  public resetSsidDetails() {
    this._ssidDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssidDetailsInput() {
    return this._ssidDetails.internalValue;
  }

  // vlan_name - computed: false, optional: true, required: false
  private _vlanName?: string; 
  public get vlanName() {
    return this.getStringAttribute('vlan_name');
  }
  public set vlanName(value: string) {
    this._vlanName = value;
  }
  public resetVlanName() {
    this._vlanName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanNameInput() {
    return this._vlanName;
  }
}

export class FabricVlanToSsidMappingsList extends cdktf.ComplexList {
  public internalValue? : FabricVlanToSsidMappings[] | cdktf.IResolvable

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
  public get(index: number): FabricVlanToSsidMappingsOutputReference {
    return new FabricVlanToSsidMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_vlan_to_ssid catalystcenter_fabric_vlan_to_ssid}
*/
export class FabricVlanToSsid extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_fabric_vlan_to_ssid";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FabricVlanToSsid resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FabricVlanToSsid to import
  * @param importFromId The id of the existing FabricVlanToSsid that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_vlan_to_ssid#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FabricVlanToSsid to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_fabric_vlan_to_ssid", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_vlan_to_ssid catalystcenter_fabric_vlan_to_ssid} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FabricVlanToSsidConfig
  */
  public constructor(scope: Construct, id: string, config: FabricVlanToSsidConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_fabric_vlan_to_ssid',
      terraformGeneratorMetadata: {
        providerName: 'catalystcenter',
        providerVersion: '0.4.4',
        providerVersionConstraint: '0.4.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fabricId = config.fabricId;
    this._mappings.internalValue = config.mappings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // fabric_id - computed: false, optional: false, required: true
  private _fabricId?: string; 
  public get fabricId() {
    return this.getStringAttribute('fabric_id');
  }
  public set fabricId(value: string) {
    this._fabricId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricIdInput() {
    return this._fabricId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mappings - computed: false, optional: false, required: true
  private _mappings = new FabricVlanToSsidMappingsList(this, "mappings", true);
  public get mappings() {
    return this._mappings;
  }
  public putMappings(value: FabricVlanToSsidMappings[] | cdktf.IResolvable) {
    this._mappings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingsInput() {
    return this._mappings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fabric_id: cdktf.stringToTerraform(this._fabricId),
      mappings: cdktf.listMapper(fabricVlanToSsidMappingsToTerraform, false)(this._mappings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fabric_id: {
        value: cdktf.stringToHclTerraform(this._fabricId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mappings: {
        value: cdktf.listMapperHcl(fabricVlanToSsidMappingsToHclTerraform, false)(this._mappings.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FabricVlanToSsidMappingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
