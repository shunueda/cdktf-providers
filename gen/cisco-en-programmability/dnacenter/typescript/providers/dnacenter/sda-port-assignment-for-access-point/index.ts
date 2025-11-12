// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_port_assignment_for_access_point
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SdaPortAssignmentForAccessPointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_port_assignment_for_access_point#id SdaPortAssignmentForAccessPoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_port_assignment_for_access_point#parameters SdaPortAssignmentForAccessPoint#parameters}
  */
  readonly parameters?: SdaPortAssignmentForAccessPointParameters[] | cdktf.IResolvable;
}
export interface SdaPortAssignmentForAccessPointItem {
}

export function sdaPortAssignmentForAccessPointItemToTerraform(struct?: SdaPortAssignmentForAccessPointItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sdaPortAssignmentForAccessPointItemToHclTerraform(struct?: SdaPortAssignmentForAccessPointItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SdaPortAssignmentForAccessPointItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SdaPortAssignmentForAccessPointItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SdaPortAssignmentForAccessPointItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authenticate_template_name - computed: true, optional: false, required: false
  public get authenticateTemplateName() {
    return this.getStringAttribute('authenticate_template_name');
  }

  // data_ip_address_pool_name - computed: true, optional: false, required: false
  public get dataIpAddressPoolName() {
    return this.getStringAttribute('data_ip_address_pool_name');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // device_management_ip_address - computed: true, optional: false, required: false
  public get deviceManagementIpAddress() {
    return this.getStringAttribute('device_management_ip_address');
  }

  // interface_name - computed: true, optional: false, required: false
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }

  // scalable_group_name - computed: true, optional: false, required: false
  public get scalableGroupName() {
    return this.getStringAttribute('scalable_group_name');
  }

  // site_name_hierarchy - computed: true, optional: false, required: false
  public get siteNameHierarchy() {
    return this.getStringAttribute('site_name_hierarchy');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // voice_ip_address_pool_name - computed: true, optional: false, required: false
  public get voiceIpAddressPoolName() {
    return this.getStringAttribute('voice_ip_address_pool_name');
  }
}

export class SdaPortAssignmentForAccessPointItemList extends cdktf.ComplexList {

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
  public get(index: number): SdaPortAssignmentForAccessPointItemOutputReference {
    return new SdaPortAssignmentForAccessPointItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SdaPortAssignmentForAccessPointParameters {
  /**
  * Authenticate TemplateName associated to Fabric Site
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_port_assignment_for_access_point#authenticate_template_name SdaPortAssignmentForAccessPoint#authenticate_template_name}
  */
  readonly authenticateTemplateName?: string;
  /**
  * Ip Pool Name, that is assigned to INFRA_VN  
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_port_assignment_for_access_point#data_ip_address_pool_name SdaPortAssignmentForAccessPoint#data_ip_address_pool_name}
  */
  readonly dataIpAddressPoolName?: string;
  /**
  * Management Ip Address of the edge device 
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_port_assignment_for_access_point#device_management_ip_address SdaPortAssignmentForAccessPoint#device_management_ip_address}
  */
  readonly deviceManagementIpAddress?: string;
  /**
  * Details or note of interface port assignment
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_port_assignment_for_access_point#interface_description SdaPortAssignmentForAccessPoint#interface_description}
  */
  readonly interfaceDescription?: string;
  /**
  * Interface Name of the edge device 
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_port_assignment_for_access_point#interface_name SdaPortAssignmentForAccessPoint#interface_name}
  */
  readonly interfaceName?: string;
  /**
  * Path of sda Fabric Site
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_port_assignment_for_access_point#site_name_hierarchy SdaPortAssignmentForAccessPoint#site_name_hierarchy}
  */
  readonly siteNameHierarchy?: string;
}

export function sdaPortAssignmentForAccessPointParametersToTerraform(struct?: SdaPortAssignmentForAccessPointParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authenticate_template_name: cdktf.stringToTerraform(struct!.authenticateTemplateName),
    data_ip_address_pool_name: cdktf.stringToTerraform(struct!.dataIpAddressPoolName),
    device_management_ip_address: cdktf.stringToTerraform(struct!.deviceManagementIpAddress),
    interface_description: cdktf.stringToTerraform(struct!.interfaceDescription),
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
    site_name_hierarchy: cdktf.stringToTerraform(struct!.siteNameHierarchy),
  }
}


export function sdaPortAssignmentForAccessPointParametersToHclTerraform(struct?: SdaPortAssignmentForAccessPointParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authenticate_template_name: {
      value: cdktf.stringToHclTerraform(struct!.authenticateTemplateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_ip_address_pool_name: {
      value: cdktf.stringToHclTerraform(struct!.dataIpAddressPoolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_management_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.deviceManagementIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_description: {
      value: cdktf.stringToHclTerraform(struct!.interfaceDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_name: {
      value: cdktf.stringToHclTerraform(struct!.interfaceName),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SdaPortAssignmentForAccessPointParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SdaPortAssignmentForAccessPointParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticateTemplateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticateTemplateName = this._authenticateTemplateName;
    }
    if (this._dataIpAddressPoolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataIpAddressPoolName = this._dataIpAddressPoolName;
    }
    if (this._deviceManagementIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceManagementIpAddress = this._deviceManagementIpAddress;
    }
    if (this._interfaceDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceDescription = this._interfaceDescription;
    }
    if (this._interfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceName = this._interfaceName;
    }
    if (this._siteNameHierarchy !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteNameHierarchy = this._siteNameHierarchy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SdaPortAssignmentForAccessPointParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticateTemplateName = undefined;
      this._dataIpAddressPoolName = undefined;
      this._deviceManagementIpAddress = undefined;
      this._interfaceDescription = undefined;
      this._interfaceName = undefined;
      this._siteNameHierarchy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticateTemplateName = value.authenticateTemplateName;
      this._dataIpAddressPoolName = value.dataIpAddressPoolName;
      this._deviceManagementIpAddress = value.deviceManagementIpAddress;
      this._interfaceDescription = value.interfaceDescription;
      this._interfaceName = value.interfaceName;
      this._siteNameHierarchy = value.siteNameHierarchy;
    }
  }

  // authenticate_template_name - computed: true, optional: true, required: false
  private _authenticateTemplateName?: string; 
  public get authenticateTemplateName() {
    return this.getStringAttribute('authenticate_template_name');
  }
  public set authenticateTemplateName(value: string) {
    this._authenticateTemplateName = value;
  }
  public resetAuthenticateTemplateName() {
    this._authenticateTemplateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticateTemplateNameInput() {
    return this._authenticateTemplateName;
  }

  // data_ip_address_pool_name - computed: true, optional: true, required: false
  private _dataIpAddressPoolName?: string; 
  public get dataIpAddressPoolName() {
    return this.getStringAttribute('data_ip_address_pool_name');
  }
  public set dataIpAddressPoolName(value: string) {
    this._dataIpAddressPoolName = value;
  }
  public resetDataIpAddressPoolName() {
    this._dataIpAddressPoolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataIpAddressPoolNameInput() {
    return this._dataIpAddressPoolName;
  }

  // device_management_ip_address - computed: false, optional: true, required: false
  private _deviceManagementIpAddress?: string; 
  public get deviceManagementIpAddress() {
    return this.getStringAttribute('device_management_ip_address');
  }
  public set deviceManagementIpAddress(value: string) {
    this._deviceManagementIpAddress = value;
  }
  public resetDeviceManagementIpAddress() {
    this._deviceManagementIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceManagementIpAddressInput() {
    return this._deviceManagementIpAddress;
  }

  // interface_description - computed: true, optional: true, required: false
  private _interfaceDescription?: string; 
  public get interfaceDescription() {
    return this.getStringAttribute('interface_description');
  }
  public set interfaceDescription(value: string) {
    this._interfaceDescription = value;
  }
  public resetInterfaceDescription() {
    this._interfaceDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceDescriptionInput() {
    return this._interfaceDescription;
  }

  // interface_name - computed: false, optional: true, required: false
  private _interfaceName?: string; 
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
  public set interfaceName(value: string) {
    this._interfaceName = value;
  }
  public resetInterfaceName() {
    this._interfaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameInput() {
    return this._interfaceName;
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
}

export class SdaPortAssignmentForAccessPointParametersList extends cdktf.ComplexList {
  public internalValue? : SdaPortAssignmentForAccessPointParameters[] | cdktf.IResolvable

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
  public get(index: number): SdaPortAssignmentForAccessPointParametersOutputReference {
    return new SdaPortAssignmentForAccessPointParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_port_assignment_for_access_point dnacenter_sda_port_assignment_for_access_point}
*/
export class SdaPortAssignmentForAccessPoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_sda_port_assignment_for_access_point";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SdaPortAssignmentForAccessPoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SdaPortAssignmentForAccessPoint to import
  * @param importFromId The id of the existing SdaPortAssignmentForAccessPoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_port_assignment_for_access_point#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SdaPortAssignmentForAccessPoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_sda_port_assignment_for_access_point", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_port_assignment_for_access_point dnacenter_sda_port_assignment_for_access_point} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SdaPortAssignmentForAccessPointConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SdaPortAssignmentForAccessPointConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_sda_port_assignment_for_access_point',
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
  private _item = new SdaPortAssignmentForAccessPointItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new SdaPortAssignmentForAccessPointParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: SdaPortAssignmentForAccessPointParameters[] | cdktf.IResolvable) {
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
      parameters: cdktf.listMapper(sdaPortAssignmentForAccessPointParametersToTerraform, true)(this._parameters.internalValue),
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
        value: cdktf.listMapperHcl(sdaPortAssignmentForAccessPointParametersToHclTerraform, true)(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SdaPortAssignmentForAccessPointParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
