// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_third_party_device
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudL4L7ThirdPartyDeviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_third_party_device#aaa_domain_dn CloudL4L7ThirdPartyDevice#aaa_domain_dn}
  */
  readonly aaaDomainDn?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_third_party_device#active_active CloudL4L7ThirdPartyDevice#active_active}
  */
  readonly activeActive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_third_party_device#annotation CloudL4L7ThirdPartyDevice#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_third_party_device#context_aware CloudL4L7ThirdPartyDevice#context_aware}
  */
  readonly contextAware?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_third_party_device#custom_resource_group CloudL4L7ThirdPartyDevice#custom_resource_group}
  */
  readonly customResourceGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_third_party_device#device_type CloudL4L7ThirdPartyDevice#device_type}
  */
  readonly deviceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_third_party_device#function_type CloudL4L7ThirdPartyDevice#function_type}
  */
  readonly functionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_third_party_device#id CloudL4L7ThirdPartyDevice#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_third_party_device#instance_count CloudL4L7ThirdPartyDevice#instance_count}
  */
  readonly instanceCount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_third_party_device#is_copy CloudL4L7ThirdPartyDevice#is_copy}
  */
  readonly isCopy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_third_party_device#is_instantiation CloudL4L7ThirdPartyDevice#is_instantiation}
  */
  readonly isInstantiation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_third_party_device#l4l7_device_application_security_group CloudL4L7ThirdPartyDevice#l4l7_device_application_security_group}
  */
  readonly l4L7DeviceApplicationSecurityGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_third_party_device#l4l7_third_party_device CloudL4L7ThirdPartyDevice#l4l7_third_party_device}
  */
  readonly l4L7ThirdPartyDevice?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_third_party_device#managed CloudL4L7ThirdPartyDevice#managed}
  */
  readonly managed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_third_party_device#name CloudL4L7ThirdPartyDevice#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_third_party_device#name_alias CloudL4L7ThirdPartyDevice#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_third_party_device#package_model CloudL4L7ThirdPartyDevice#package_model}
  */
  readonly packageModel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_third_party_device#promiscuous_mode CloudL4L7ThirdPartyDevice#promiscuous_mode}
  */
  readonly promiscuousMode?: string;
  /**
  * Create relation to fv:Ctx
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_third_party_device#relation_cloud_rs_ldev_to_ctx CloudL4L7ThirdPartyDevice#relation_cloud_rs_ldev_to_ctx}
  */
  readonly relationCloudRsLdevToCtx: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_third_party_device#service_type CloudL4L7ThirdPartyDevice#service_type}
  */
  readonly serviceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_third_party_device#target_mode CloudL4L7ThirdPartyDevice#target_mode}
  */
  readonly targetMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_third_party_device#tenant_dn CloudL4L7ThirdPartyDevice#tenant_dn}
  */
  readonly tenantDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_third_party_device#trunking CloudL4L7ThirdPartyDevice#trunking}
  */
  readonly trunking?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_third_party_device#version CloudL4L7ThirdPartyDevice#version}
  */
  readonly version?: string;
  /**
  * interface_selectors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_third_party_device#interface_selectors CloudL4L7ThirdPartyDevice#interface_selectors}
  */
  readonly interfaceSelectors?: CloudL4L7ThirdPartyDeviceInterfaceSelectors[] | cdktf.IResolvable;
}
export interface CloudL4L7ThirdPartyDeviceInterfaceSelectorsEndPointSelectors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_third_party_device#match_expression CloudL4L7ThirdPartyDevice#match_expression}
  */
  readonly matchExpression: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_third_party_device#name CloudL4L7ThirdPartyDevice#name}
  */
  readonly name: string;
}

export function cloudL4L7ThirdPartyDeviceInterfaceSelectorsEndPointSelectorsToTerraform(struct?: CloudL4L7ThirdPartyDeviceInterfaceSelectorsEndPointSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expression: cdktf.stringToTerraform(struct!.matchExpression),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function cloudL4L7ThirdPartyDeviceInterfaceSelectorsEndPointSelectorsToHclTerraform(struct?: CloudL4L7ThirdPartyDeviceInterfaceSelectorsEndPointSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expression: {
      value: cdktf.stringToHclTerraform(struct!.matchExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudL4L7ThirdPartyDeviceInterfaceSelectorsEndPointSelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudL4L7ThirdPartyDeviceInterfaceSelectorsEndPointSelectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpression = this._matchExpression;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudL4L7ThirdPartyDeviceInterfaceSelectorsEndPointSelectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpression = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpression = value.matchExpression;
      this._name = value.name;
    }
  }

  // match_expression - computed: false, optional: false, required: true
  private _matchExpression?: string; 
  public get matchExpression() {
    return this.getStringAttribute('match_expression');
  }
  public set matchExpression(value: string) {
    this._matchExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionInput() {
    return this._matchExpression;
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
}

export class CloudL4L7ThirdPartyDeviceInterfaceSelectorsEndPointSelectorsList extends cdktf.ComplexList {
  public internalValue? : CloudL4L7ThirdPartyDeviceInterfaceSelectorsEndPointSelectors[] | cdktf.IResolvable

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
  public get(index: number): CloudL4L7ThirdPartyDeviceInterfaceSelectorsEndPointSelectorsOutputReference {
    return new CloudL4L7ThirdPartyDeviceInterfaceSelectorsEndPointSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudL4L7ThirdPartyDeviceInterfaceSelectors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_third_party_device#allow_all CloudL4L7ThirdPartyDevice#allow_all}
  */
  readonly allowAll?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_third_party_device#name CloudL4L7ThirdPartyDevice#name}
  */
  readonly name: string;
  /**
  * end_point_selectors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_third_party_device#end_point_selectors CloudL4L7ThirdPartyDevice#end_point_selectors}
  */
  readonly endPointSelectors?: CloudL4L7ThirdPartyDeviceInterfaceSelectorsEndPointSelectors[] | cdktf.IResolvable;
}

export function cloudL4L7ThirdPartyDeviceInterfaceSelectorsToTerraform(struct?: CloudL4L7ThirdPartyDeviceInterfaceSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_all: cdktf.stringToTerraform(struct!.allowAll),
    name: cdktf.stringToTerraform(struct!.name),
    end_point_selectors: cdktf.listMapper(cloudL4L7ThirdPartyDeviceInterfaceSelectorsEndPointSelectorsToTerraform, true)(struct!.endPointSelectors),
  }
}


export function cloudL4L7ThirdPartyDeviceInterfaceSelectorsToHclTerraform(struct?: CloudL4L7ThirdPartyDeviceInterfaceSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_all: {
      value: cdktf.stringToHclTerraform(struct!.allowAll),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_point_selectors: {
      value: cdktf.listMapperHcl(cloudL4L7ThirdPartyDeviceInterfaceSelectorsEndPointSelectorsToHclTerraform, true)(struct!.endPointSelectors),
      isBlock: true,
      type: "set",
      storageClassType: "CloudL4L7ThirdPartyDeviceInterfaceSelectorsEndPointSelectorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudL4L7ThirdPartyDeviceInterfaceSelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudL4L7ThirdPartyDeviceInterfaceSelectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAll = this._allowAll;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._endPointSelectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPointSelectors = this._endPointSelectors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudL4L7ThirdPartyDeviceInterfaceSelectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowAll = undefined;
      this._name = undefined;
      this._endPointSelectors.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowAll = value.allowAll;
      this._name = value.name;
      this._endPointSelectors.internalValue = value.endPointSelectors;
    }
  }

  // allow_all - computed: true, optional: true, required: false
  private _allowAll?: string; 
  public get allowAll() {
    return this.getStringAttribute('allow_all');
  }
  public set allowAll(value: string) {
    this._allowAll = value;
  }
  public resetAllowAll() {
    this._allowAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAllInput() {
    return this._allowAll;
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

  // end_point_selectors - computed: false, optional: true, required: false
  private _endPointSelectors = new CloudL4L7ThirdPartyDeviceInterfaceSelectorsEndPointSelectorsList(this, "end_point_selectors", true);
  public get endPointSelectors() {
    return this._endPointSelectors;
  }
  public putEndPointSelectors(value: CloudL4L7ThirdPartyDeviceInterfaceSelectorsEndPointSelectors[] | cdktf.IResolvable) {
    this._endPointSelectors.internalValue = value;
  }
  public resetEndPointSelectors() {
    this._endPointSelectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPointSelectorsInput() {
    return this._endPointSelectors.internalValue;
  }
}

export class CloudL4L7ThirdPartyDeviceInterfaceSelectorsList extends cdktf.ComplexList {
  public internalValue? : CloudL4L7ThirdPartyDeviceInterfaceSelectors[] | cdktf.IResolvable

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
  public get(index: number): CloudL4L7ThirdPartyDeviceInterfaceSelectorsOutputReference {
    return new CloudL4L7ThirdPartyDeviceInterfaceSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_third_party_device aci_cloud_l4_l7_third_party_device}
*/
export class CloudL4L7ThirdPartyDevice extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_cloud_l4_l7_third_party_device";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudL4L7ThirdPartyDevice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudL4L7ThirdPartyDevice to import
  * @param importFromId The id of the existing CloudL4L7ThirdPartyDevice that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_third_party_device#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudL4L7ThirdPartyDevice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_cloud_l4_l7_third_party_device", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_l4_l7_third_party_device aci_cloud_l4_l7_third_party_device} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudL4L7ThirdPartyDeviceConfig
  */
  public constructor(scope: Construct, id: string, config: CloudL4L7ThirdPartyDeviceConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_cloud_l4_l7_third_party_device',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.18.0',
        providerVersionConstraint: '2.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aaaDomainDn = config.aaaDomainDn;
    this._activeActive = config.activeActive;
    this._annotation = config.annotation;
    this._contextAware = config.contextAware;
    this._customResourceGroup = config.customResourceGroup;
    this._deviceType = config.deviceType;
    this._functionType = config.functionType;
    this._id = config.id;
    this._instanceCount = config.instanceCount;
    this._isCopy = config.isCopy;
    this._isInstantiation = config.isInstantiation;
    this._l4L7DeviceApplicationSecurityGroup = config.l4L7DeviceApplicationSecurityGroup;
    this._l4L7ThirdPartyDevice = config.l4L7ThirdPartyDevice;
    this._managed = config.managed;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._packageModel = config.packageModel;
    this._promiscuousMode = config.promiscuousMode;
    this._relationCloudRsLdevToCtx = config.relationCloudRsLdevToCtx;
    this._serviceType = config.serviceType;
    this._targetMode = config.targetMode;
    this._tenantDn = config.tenantDn;
    this._trunking = config.trunking;
    this._version = config.version;
    this._interfaceSelectors.internalValue = config.interfaceSelectors;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aaa_domain_dn - computed: true, optional: true, required: false
  private _aaaDomainDn?: string[]; 
  public get aaaDomainDn() {
    return cdktf.Fn.tolist(this.getListAttribute('aaa_domain_dn'));
  }
  public set aaaDomainDn(value: string[]) {
    this._aaaDomainDn = value;
  }
  public resetAaaDomainDn() {
    this._aaaDomainDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aaaDomainDnInput() {
    return this._aaaDomainDn;
  }

  // active_active - computed: true, optional: true, required: false
  private _activeActive?: string; 
  public get activeActive() {
    return this.getStringAttribute('active_active');
  }
  public set activeActive(value: string) {
    this._activeActive = value;
  }
  public resetActiveActive() {
    this._activeActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeActiveInput() {
    return this._activeActive;
  }

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // context_aware - computed: true, optional: true, required: false
  private _contextAware?: string; 
  public get contextAware() {
    return this.getStringAttribute('context_aware');
  }
  public set contextAware(value: string) {
    this._contextAware = value;
  }
  public resetContextAware() {
    this._contextAware = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextAwareInput() {
    return this._contextAware;
  }

  // custom_resource_group - computed: true, optional: true, required: false
  private _customResourceGroup?: string; 
  public get customResourceGroup() {
    return this.getStringAttribute('custom_resource_group');
  }
  public set customResourceGroup(value: string) {
    this._customResourceGroup = value;
  }
  public resetCustomResourceGroup() {
    this._customResourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customResourceGroupInput() {
    return this._customResourceGroup;
  }

  // device_type - computed: true, optional: true, required: false
  private _deviceType?: string; 
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }
  public set deviceType(value: string) {
    this._deviceType = value;
  }
  public resetDeviceType() {
    this._deviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypeInput() {
    return this._deviceType;
  }

  // function_type - computed: true, optional: true, required: false
  private _functionType?: string; 
  public get functionType() {
    return this.getStringAttribute('function_type');
  }
  public set functionType(value: string) {
    this._functionType = value;
  }
  public resetFunctionType() {
    this._functionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionTypeInput() {
    return this._functionType;
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

  // instance_count - computed: true, optional: true, required: false
  private _instanceCount?: string; 
  public get instanceCount() {
    return this.getStringAttribute('instance_count');
  }
  public set instanceCount(value: string) {
    this._instanceCount = value;
  }
  public resetInstanceCount() {
    this._instanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount;
  }

  // is_copy - computed: true, optional: true, required: false
  private _isCopy?: string; 
  public get isCopy() {
    return this.getStringAttribute('is_copy');
  }
  public set isCopy(value: string) {
    this._isCopy = value;
  }
  public resetIsCopy() {
    this._isCopy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCopyInput() {
    return this._isCopy;
  }

  // is_instantiation - computed: true, optional: true, required: false
  private _isInstantiation?: string; 
  public get isInstantiation() {
    return this.getStringAttribute('is_instantiation');
  }
  public set isInstantiation(value: string) {
    this._isInstantiation = value;
  }
  public resetIsInstantiation() {
    this._isInstantiation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isInstantiationInput() {
    return this._isInstantiation;
  }

  // l4l7_device_application_security_group - computed: true, optional: true, required: false
  private _l4L7DeviceApplicationSecurityGroup?: string; 
  public get l4L7DeviceApplicationSecurityGroup() {
    return this.getStringAttribute('l4l7_device_application_security_group');
  }
  public set l4L7DeviceApplicationSecurityGroup(value: string) {
    this._l4L7DeviceApplicationSecurityGroup = value;
  }
  public resetL4L7DeviceApplicationSecurityGroup() {
    this._l4L7DeviceApplicationSecurityGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4L7DeviceApplicationSecurityGroupInput() {
    return this._l4L7DeviceApplicationSecurityGroup;
  }

  // l4l7_third_party_device - computed: true, optional: true, required: false
  private _l4L7ThirdPartyDevice?: string; 
  public get l4L7ThirdPartyDevice() {
    return this.getStringAttribute('l4l7_third_party_device');
  }
  public set l4L7ThirdPartyDevice(value: string) {
    this._l4L7ThirdPartyDevice = value;
  }
  public resetL4L7ThirdPartyDevice() {
    this._l4L7ThirdPartyDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4L7ThirdPartyDeviceInput() {
    return this._l4L7ThirdPartyDevice;
  }

  // managed - computed: true, optional: true, required: false
  private _managed?: string; 
  public get managed() {
    return this.getStringAttribute('managed');
  }
  public set managed(value: string) {
    this._managed = value;
  }
  public resetManaged() {
    this._managed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInput() {
    return this._managed;
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
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

  // name_alias - computed: true, optional: true, required: false
  private _nameAlias?: string; 
  public get nameAlias() {
    return this.getStringAttribute('name_alias');
  }
  public set nameAlias(value: string) {
    this._nameAlias = value;
  }
  public resetNameAlias() {
    this._nameAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAliasInput() {
    return this._nameAlias;
  }

  // package_model - computed: true, optional: true, required: false
  private _packageModel?: string; 
  public get packageModel() {
    return this.getStringAttribute('package_model');
  }
  public set packageModel(value: string) {
    this._packageModel = value;
  }
  public resetPackageModel() {
    this._packageModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageModelInput() {
    return this._packageModel;
  }

  // promiscuous_mode - computed: true, optional: true, required: false
  private _promiscuousMode?: string; 
  public get promiscuousMode() {
    return this.getStringAttribute('promiscuous_mode');
  }
  public set promiscuousMode(value: string) {
    this._promiscuousMode = value;
  }
  public resetPromiscuousMode() {
    this._promiscuousMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promiscuousModeInput() {
    return this._promiscuousMode;
  }

  // relation_cloud_rs_ldev_to_ctx - computed: false, optional: false, required: true
  private _relationCloudRsLdevToCtx?: string; 
  public get relationCloudRsLdevToCtx() {
    return this.getStringAttribute('relation_cloud_rs_ldev_to_ctx');
  }
  public set relationCloudRsLdevToCtx(value: string) {
    this._relationCloudRsLdevToCtx = value;
  }
  // Temporarily expose input value. Use with caution.
  public get relationCloudRsLdevToCtxInput() {
    return this._relationCloudRsLdevToCtx;
  }

  // service_type - computed: true, optional: true, required: false
  private _serviceType?: string; 
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }
  public set serviceType(value: string) {
    this._serviceType = value;
  }
  public resetServiceType() {
    this._serviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeInput() {
    return this._serviceType;
  }

  // target_mode - computed: true, optional: true, required: false
  private _targetMode?: string; 
  public get targetMode() {
    return this.getStringAttribute('target_mode');
  }
  public set targetMode(value: string) {
    this._targetMode = value;
  }
  public resetTargetMode() {
    this._targetMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetModeInput() {
    return this._targetMode;
  }

  // tenant_dn - computed: false, optional: false, required: true
  private _tenantDn?: string; 
  public get tenantDn() {
    return this.getStringAttribute('tenant_dn');
  }
  public set tenantDn(value: string) {
    this._tenantDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantDnInput() {
    return this._tenantDn;
  }

  // trunking - computed: true, optional: true, required: false
  private _trunking?: string; 
  public get trunking() {
    return this.getStringAttribute('trunking');
  }
  public set trunking(value: string) {
    this._trunking = value;
  }
  public resetTrunking() {
    this._trunking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkingInput() {
    return this._trunking;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // interface_selectors - computed: false, optional: true, required: false
  private _interfaceSelectors = new CloudL4L7ThirdPartyDeviceInterfaceSelectorsList(this, "interface_selectors", true);
  public get interfaceSelectors() {
    return this._interfaceSelectors;
  }
  public putInterfaceSelectors(value: CloudL4L7ThirdPartyDeviceInterfaceSelectors[] | cdktf.IResolvable) {
    this._interfaceSelectors.internalValue = value;
  }
  public resetInterfaceSelectors() {
    this._interfaceSelectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceSelectorsInput() {
    return this._interfaceSelectors.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aaa_domain_dn: cdktf.listMapper(cdktf.stringToTerraform, false)(this._aaaDomainDn),
      active_active: cdktf.stringToTerraform(this._activeActive),
      annotation: cdktf.stringToTerraform(this._annotation),
      context_aware: cdktf.stringToTerraform(this._contextAware),
      custom_resource_group: cdktf.stringToTerraform(this._customResourceGroup),
      device_type: cdktf.stringToTerraform(this._deviceType),
      function_type: cdktf.stringToTerraform(this._functionType),
      id: cdktf.stringToTerraform(this._id),
      instance_count: cdktf.stringToTerraform(this._instanceCount),
      is_copy: cdktf.stringToTerraform(this._isCopy),
      is_instantiation: cdktf.stringToTerraform(this._isInstantiation),
      l4l7_device_application_security_group: cdktf.stringToTerraform(this._l4L7DeviceApplicationSecurityGroup),
      l4l7_third_party_device: cdktf.stringToTerraform(this._l4L7ThirdPartyDevice),
      managed: cdktf.stringToTerraform(this._managed),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      package_model: cdktf.stringToTerraform(this._packageModel),
      promiscuous_mode: cdktf.stringToTerraform(this._promiscuousMode),
      relation_cloud_rs_ldev_to_ctx: cdktf.stringToTerraform(this._relationCloudRsLdevToCtx),
      service_type: cdktf.stringToTerraform(this._serviceType),
      target_mode: cdktf.stringToTerraform(this._targetMode),
      tenant_dn: cdktf.stringToTerraform(this._tenantDn),
      trunking: cdktf.stringToTerraform(this._trunking),
      version: cdktf.stringToTerraform(this._version),
      interface_selectors: cdktf.listMapper(cloudL4L7ThirdPartyDeviceInterfaceSelectorsToTerraform, true)(this._interfaceSelectors.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aaa_domain_dn: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._aaaDomainDn),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      active_active: {
        value: cdktf.stringToHclTerraform(this._activeActive),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      annotation: {
        value: cdktf.stringToHclTerraform(this._annotation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      context_aware: {
        value: cdktf.stringToHclTerraform(this._contextAware),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_resource_group: {
        value: cdktf.stringToHclTerraform(this._customResourceGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_type: {
        value: cdktf.stringToHclTerraform(this._deviceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      function_type: {
        value: cdktf.stringToHclTerraform(this._functionType),
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
      instance_count: {
        value: cdktf.stringToHclTerraform(this._instanceCount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_copy: {
        value: cdktf.stringToHclTerraform(this._isCopy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_instantiation: {
        value: cdktf.stringToHclTerraform(this._isInstantiation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l4l7_device_application_security_group: {
        value: cdktf.stringToHclTerraform(this._l4L7DeviceApplicationSecurityGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l4l7_third_party_device: {
        value: cdktf.stringToHclTerraform(this._l4L7ThirdPartyDevice),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      managed: {
        value: cdktf.stringToHclTerraform(this._managed),
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
      name_alias: {
        value: cdktf.stringToHclTerraform(this._nameAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      package_model: {
        value: cdktf.stringToHclTerraform(this._packageModel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      promiscuous_mode: {
        value: cdktf.stringToHclTerraform(this._promiscuousMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_cloud_rs_ldev_to_ctx: {
        value: cdktf.stringToHclTerraform(this._relationCloudRsLdevToCtx),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_type: {
        value: cdktf.stringToHclTerraform(this._serviceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_mode: {
        value: cdktf.stringToHclTerraform(this._targetMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_dn: {
        value: cdktf.stringToHclTerraform(this._tenantDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trunking: {
        value: cdktf.stringToHclTerraform(this._trunking),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface_selectors: {
        value: cdktf.listMapperHcl(cloudL4L7ThirdPartyDeviceInterfaceSelectorsToHclTerraform, true)(this._interfaceSelectors.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudL4L7ThirdPartyDeviceInterfaceSelectorsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
