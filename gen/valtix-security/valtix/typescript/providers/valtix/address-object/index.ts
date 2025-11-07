// https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/address_object
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AddressObjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/address_object#address_group_ids AddressObject#address_group_ids}
  */
  readonly addressGroupIds?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/address_object#application_security_group_id AddressObject#application_security_group_id}
  */
  readonly applicationSecurityGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/address_object#backend_address AddressObject#backend_address}
  */
  readonly backendAddress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/address_object#csp_account_name AddressObject#csp_account_name}
  */
  readonly cspAccountName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/address_object#description AddressObject#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/address_object#excluded_address_group_ids AddressObject#excluded_address_group_ids}
  */
  readonly excludedAddressGroupIds?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/address_object#id AddressObject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/address_object#instance_id AddressObject#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/address_object#match_xff AddressObject#match_xff}
  */
  readonly matchXff?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/address_object#name AddressObject#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/address_object#origin AddressObject#origin}
  */
  readonly origin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/address_object#region AddressObject#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/address_object#resource_group AddressObject#resource_group}
  */
  readonly resourceGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/address_object#saas_type AddressObject#saas_type}
  */
  readonly saasType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/address_object#security_group_id AddressObject#security_group_id}
  */
  readonly securityGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/address_object#service_endpoint_name AddressObject#service_endpoint_name}
  */
  readonly serviceEndpointName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/address_object#subnet_id AddressObject#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/address_object#tag_key AddressObject#tag_key}
  */
  readonly tagKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/address_object#tag_value AddressObject#tag_value}
  */
  readonly tagValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/address_object#type AddressObject#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/address_object#value AddressObject#value}
  */
  readonly value?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/address_object#vpc_id AddressObject#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * tag_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/address_object#tag_list AddressObject#tag_list}
  */
  readonly tagList?: AddressObjectTagListStruct[] | cdktf.IResolvable;
}
export interface AddressObjectTagListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/address_object#resource_type AddressObject#resource_type}
  */
  readonly resourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/address_object#tag_key AddressObject#tag_key}
  */
  readonly tagKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/address_object#tag_value AddressObject#tag_value}
  */
  readonly tagValue?: string;
}

export function addressObjectTagListStructToTerraform(struct?: AddressObjectTagListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
    tag_key: cdktf.stringToTerraform(struct!.tagKey),
    tag_value: cdktf.stringToTerraform(struct!.tagValue),
  }
}


export function addressObjectTagListStructToHclTerraform(struct?: AddressObjectTagListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_type: {
      value: cdktf.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_key: {
      value: cdktf.stringToHclTerraform(struct!.tagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_value: {
      value: cdktf.stringToHclTerraform(struct!.tagValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AddressObjectTagListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AddressObjectTagListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    if (this._tagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagKey = this._tagKey;
    }
    if (this._tagValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValue = this._tagValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AddressObjectTagListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceType = undefined;
      this._tagKey = undefined;
      this._tagValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceType = value.resourceType;
      this._tagKey = value.tagKey;
      this._tagValue = value.tagValue;
    }
  }

  // resource_type - computed: false, optional: true, required: false
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // tag_key - computed: false, optional: false, required: true
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
  }

  // tag_value - computed: false, optional: true, required: false
  private _tagValue?: string; 
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
  public set tagValue(value: string) {
    this._tagValue = value;
  }
  public resetTagValue() {
    this._tagValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueInput() {
    return this._tagValue;
  }
}

export class AddressObjectTagListStructList extends cdktf.ComplexList {
  public internalValue? : AddressObjectTagListStruct[] | cdktf.IResolvable

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
  public get(index: number): AddressObjectTagListStructOutputReference {
    return new AddressObjectTagListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/address_object valtix_address_object}
*/
export class AddressObject extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "valtix_address_object";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AddressObject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AddressObject to import
  * @param importFromId The id of the existing AddressObject that should be imported. Refer to the {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/address_object#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AddressObject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "valtix_address_object", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/address_object valtix_address_object} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AddressObjectConfig
  */
  public constructor(scope: Construct, id: string, config: AddressObjectConfig) {
    super(scope, id, {
      terraformResourceType: 'valtix_address_object',
      terraformGeneratorMetadata: {
        providerName: 'valtix',
        providerVersion: '25.9.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addressGroupIds = config.addressGroupIds;
    this._applicationSecurityGroupId = config.applicationSecurityGroupId;
    this._backendAddress = config.backendAddress;
    this._cspAccountName = config.cspAccountName;
    this._description = config.description;
    this._excludedAddressGroupIds = config.excludedAddressGroupIds;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._matchXff = config.matchXff;
    this._name = config.name;
    this._origin = config.origin;
    this._region = config.region;
    this._resourceGroup = config.resourceGroup;
    this._saasType = config.saasType;
    this._securityGroupId = config.securityGroupId;
    this._serviceEndpointName = config.serviceEndpointName;
    this._subnetId = config.subnetId;
    this._tagKey = config.tagKey;
    this._tagValue = config.tagValue;
    this._type = config.type;
    this._value = config.value;
    this._vpcId = config.vpcId;
    this._tagList.internalValue = config.tagList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_group_ids - computed: false, optional: true, required: false
  private _addressGroupIds?: number[]; 
  public get addressGroupIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('address_group_ids')));
  }
  public set addressGroupIds(value: number[]) {
    this._addressGroupIds = value;
  }
  public resetAddressGroupIds() {
    this._addressGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressGroupIdsInput() {
    return this._addressGroupIds;
  }

  // address_id - computed: true, optional: false, required: false
  public get addressId() {
    return this.getNumberAttribute('address_id');
  }

  // application_security_group_id - computed: false, optional: true, required: false
  private _applicationSecurityGroupId?: string; 
  public get applicationSecurityGroupId() {
    return this.getStringAttribute('application_security_group_id');
  }
  public set applicationSecurityGroupId(value: string) {
    this._applicationSecurityGroupId = value;
  }
  public resetApplicationSecurityGroupId() {
    this._applicationSecurityGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationSecurityGroupIdInput() {
    return this._applicationSecurityGroupId;
  }

  // backend_address - computed: false, optional: true, required: false
  private _backendAddress?: boolean | cdktf.IResolvable; 
  public get backendAddress() {
    return this.getBooleanAttribute('backend_address');
  }
  public set backendAddress(value: boolean | cdktf.IResolvable) {
    this._backendAddress = value;
  }
  public resetBackendAddress() {
    this._backendAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendAddressInput() {
    return this._backendAddress;
  }

  // csp_account_name - computed: false, optional: true, required: false
  private _cspAccountName?: string; 
  public get cspAccountName() {
    return this.getStringAttribute('csp_account_name');
  }
  public set cspAccountName(value: string) {
    this._cspAccountName = value;
  }
  public resetCspAccountName() {
    this._cspAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cspAccountNameInput() {
    return this._cspAccountName;
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

  // excluded_address_group_ids - computed: false, optional: true, required: false
  private _excludedAddressGroupIds?: number[]; 
  public get excludedAddressGroupIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('excluded_address_group_ids')));
  }
  public set excludedAddressGroupIds(value: number[]) {
    this._excludedAddressGroupIds = value;
  }
  public resetExcludedAddressGroupIds() {
    this._excludedAddressGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedAddressGroupIdsInput() {
    return this._excludedAddressGroupIds;
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

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // match_xff - computed: false, optional: true, required: false
  private _matchXff?: boolean | cdktf.IResolvable; 
  public get matchXff() {
    return this.getBooleanAttribute('match_xff');
  }
  public set matchXff(value: boolean | cdktf.IResolvable) {
    this._matchXff = value;
  }
  public resetMatchXff() {
    this._matchXff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchXffInput() {
    return this._matchXff;
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

  // origin - computed: false, optional: true, required: false
  private _origin?: string; 
  public get origin() {
    return this.getStringAttribute('origin');
  }
  public set origin(value: string) {
    this._origin = value;
  }
  public resetOrigin() {
    this._origin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // resource_group - computed: false, optional: true, required: false
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  public resetResourceGroup() {
    this._resourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // saas_type - computed: false, optional: true, required: false
  private _saasType?: string; 
  public get saasType() {
    return this.getStringAttribute('saas_type');
  }
  public set saasType(value: string) {
    this._saasType = value;
  }
  public resetSaasType() {
    this._saasType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saasTypeInput() {
    return this._saasType;
  }

  // security_group_id - computed: false, optional: true, required: false
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  public resetSecurityGroupId() {
    this._securityGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId;
  }

  // service_endpoint_name - computed: false, optional: true, required: false
  private _serviceEndpointName?: string; 
  public get serviceEndpointName() {
    return this.getStringAttribute('service_endpoint_name');
  }
  public set serviceEndpointName(value: string) {
    this._serviceEndpointName = value;
  }
  public resetServiceEndpointName() {
    this._serviceEndpointName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceEndpointNameInput() {
    return this._serviceEndpointName;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // tag_key - computed: false, optional: true, required: false
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  public resetTagKey() {
    this._tagKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
  }

  // tag_value - computed: false, optional: true, required: false
  private _tagValue?: string; 
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
  public set tagValue(value: string) {
    this._tagValue = value;
  }
  public resetTagValue() {
    this._tagValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueInput() {
    return this._tagValue;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string[]; 
  public get value() {
    return cdktf.Fn.tolist(this.getListAttribute('value'));
  }
  public set value(value: string[]) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // vpc_id - computed: false, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // tag_list - computed: false, optional: true, required: false
  private _tagList = new AddressObjectTagListStructList(this, "tag_list", false);
  public get tagList() {
    return this._tagList;
  }
  public putTagList(value: AddressObjectTagListStruct[] | cdktf.IResolvable) {
    this._tagList.internalValue = value;
  }
  public resetTagList() {
    this._tagList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagListInput() {
    return this._tagList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address_group_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._addressGroupIds),
      application_security_group_id: cdktf.stringToTerraform(this._applicationSecurityGroupId),
      backend_address: cdktf.booleanToTerraform(this._backendAddress),
      csp_account_name: cdktf.stringToTerraform(this._cspAccountName),
      description: cdktf.stringToTerraform(this._description),
      excluded_address_group_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._excludedAddressGroupIds),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      match_xff: cdktf.booleanToTerraform(this._matchXff),
      name: cdktf.stringToTerraform(this._name),
      origin: cdktf.stringToTerraform(this._origin),
      region: cdktf.stringToTerraform(this._region),
      resource_group: cdktf.stringToTerraform(this._resourceGroup),
      saas_type: cdktf.stringToTerraform(this._saasType),
      security_group_id: cdktf.stringToTerraform(this._securityGroupId),
      service_endpoint_name: cdktf.stringToTerraform(this._serviceEndpointName),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tag_key: cdktf.stringToTerraform(this._tagKey),
      tag_value: cdktf.stringToTerraform(this._tagValue),
      type: cdktf.stringToTerraform(this._type),
      value: cdktf.listMapper(cdktf.stringToTerraform, false)(this._value),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      tag_list: cdktf.listMapper(addressObjectTagListStructToTerraform, true)(this._tagList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address_group_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._addressGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      application_security_group_id: {
        value: cdktf.stringToHclTerraform(this._applicationSecurityGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backend_address: {
        value: cdktf.booleanToHclTerraform(this._backendAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      csp_account_name: {
        value: cdktf.stringToHclTerraform(this._cspAccountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      excluded_address_group_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._excludedAddressGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_xff: {
        value: cdktf.booleanToHclTerraform(this._matchXff),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      origin: {
        value: cdktf.stringToHclTerraform(this._origin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group: {
        value: cdktf.stringToHclTerraform(this._resourceGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saas_type: {
        value: cdktf.stringToHclTerraform(this._saasType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group_id: {
        value: cdktf.stringToHclTerraform(this._securityGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_endpoint_name: {
        value: cdktf.stringToHclTerraform(this._serviceEndpointName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_key: {
        value: cdktf.stringToHclTerraform(this._tagKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_value: {
        value: cdktf.stringToHclTerraform(this._tagValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._value),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_list: {
        value: cdktf.listMapperHcl(addressObjectTagListStructToHclTerraform, true)(this._tagList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AddressObjectTagListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
