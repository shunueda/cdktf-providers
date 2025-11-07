// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/cloud_l4_l7_third_party_device
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAciCloudL4L7ThirdPartyDeviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/cloud_l4_l7_third_party_device#id DataAciCloudL4L7ThirdPartyDevice#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/cloud_l4_l7_third_party_device#name DataAciCloudL4L7ThirdPartyDevice#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/cloud_l4_l7_third_party_device#name_alias DataAciCloudL4L7ThirdPartyDevice#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/cloud_l4_l7_third_party_device#tenant_dn DataAciCloudL4L7ThirdPartyDevice#tenant_dn}
  */
  readonly tenantDn: string;
}
export interface DataAciCloudL4L7ThirdPartyDeviceInterfaceSelectorsEndPointSelectors {
}

export function dataAciCloudL4L7ThirdPartyDeviceInterfaceSelectorsEndPointSelectorsToTerraform(struct?: DataAciCloudL4L7ThirdPartyDeviceInterfaceSelectorsEndPointSelectors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciCloudL4L7ThirdPartyDeviceInterfaceSelectorsEndPointSelectorsToHclTerraform(struct?: DataAciCloudL4L7ThirdPartyDeviceInterfaceSelectorsEndPointSelectors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciCloudL4L7ThirdPartyDeviceInterfaceSelectorsEndPointSelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciCloudL4L7ThirdPartyDeviceInterfaceSelectorsEndPointSelectors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciCloudL4L7ThirdPartyDeviceInterfaceSelectorsEndPointSelectors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // match_expression - computed: true, optional: false, required: false
  public get matchExpression() {
    return this.getStringAttribute('match_expression');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataAciCloudL4L7ThirdPartyDeviceInterfaceSelectorsEndPointSelectorsList extends cdktf.ComplexList {

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
  public get(index: number): DataAciCloudL4L7ThirdPartyDeviceInterfaceSelectorsEndPointSelectorsOutputReference {
    return new DataAciCloudL4L7ThirdPartyDeviceInterfaceSelectorsEndPointSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAciCloudL4L7ThirdPartyDeviceInterfaceSelectors {
}

export function dataAciCloudL4L7ThirdPartyDeviceInterfaceSelectorsToTerraform(struct?: DataAciCloudL4L7ThirdPartyDeviceInterfaceSelectors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciCloudL4L7ThirdPartyDeviceInterfaceSelectorsToHclTerraform(struct?: DataAciCloudL4L7ThirdPartyDeviceInterfaceSelectors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciCloudL4L7ThirdPartyDeviceInterfaceSelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciCloudL4L7ThirdPartyDeviceInterfaceSelectors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciCloudL4L7ThirdPartyDeviceInterfaceSelectors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_all - computed: true, optional: false, required: false
  public get allowAll() {
    return this.getStringAttribute('allow_all');
  }

  // end_point_selectors - computed: true, optional: false, required: false
  private _endPointSelectors = new DataAciCloudL4L7ThirdPartyDeviceInterfaceSelectorsEndPointSelectorsList(this, "end_point_selectors", true);
  public get endPointSelectors() {
    return this._endPointSelectors;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataAciCloudL4L7ThirdPartyDeviceInterfaceSelectorsList extends cdktf.ComplexList {

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
  public get(index: number): DataAciCloudL4L7ThirdPartyDeviceInterfaceSelectorsOutputReference {
    return new DataAciCloudL4L7ThirdPartyDeviceInterfaceSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/cloud_l4_l7_third_party_device aci_cloud_l4_l7_third_party_device}
*/
export class DataAciCloudL4L7ThirdPartyDevice extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_cloud_l4_l7_third_party_device";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAciCloudL4L7ThirdPartyDevice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAciCloudL4L7ThirdPartyDevice to import
  * @param importFromId The id of the existing DataAciCloudL4L7ThirdPartyDevice that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/cloud_l4_l7_third_party_device#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAciCloudL4L7ThirdPartyDevice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_cloud_l4_l7_third_party_device", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/cloud_l4_l7_third_party_device aci_cloud_l4_l7_third_party_device} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAciCloudL4L7ThirdPartyDeviceConfig
  */
  public constructor(scope: Construct, id: string, config: DataAciCloudL4L7ThirdPartyDeviceConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_cloud_l4_l7_third_party_device',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.18.0'
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
    this._nameAlias = config.nameAlias;
    this._tenantDn = config.tenantDn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aaa_domain_dn - computed: true, optional: false, required: false
  public get aaaDomainDn() {
    return cdktf.Fn.tolist(this.getListAttribute('aaa_domain_dn'));
  }

  // active_active - computed: true, optional: false, required: false
  public get activeActive() {
    return this.getStringAttribute('active_active');
  }

  // annotation - computed: true, optional: false, required: false
  public get annotation() {
    return this.getStringAttribute('annotation');
  }

  // context_aware - computed: true, optional: false, required: false
  public get contextAware() {
    return this.getStringAttribute('context_aware');
  }

  // custom_resource_group - computed: true, optional: false, required: false
  public get customResourceGroup() {
    return this.getStringAttribute('custom_resource_group');
  }

  // device_type - computed: true, optional: false, required: false
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }

  // function_type - computed: true, optional: false, required: false
  public get functionType() {
    return this.getStringAttribute('function_type');
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

  // instance_count - computed: true, optional: false, required: false
  public get instanceCount() {
    return this.getStringAttribute('instance_count');
  }

  // interface_selectors - computed: true, optional: false, required: false
  private _interfaceSelectors = new DataAciCloudL4L7ThirdPartyDeviceInterfaceSelectorsList(this, "interface_selectors", true);
  public get interfaceSelectors() {
    return this._interfaceSelectors;
  }

  // is_copy - computed: true, optional: false, required: false
  public get isCopy() {
    return this.getStringAttribute('is_copy');
  }

  // is_instantiation - computed: true, optional: false, required: false
  public get isInstantiation() {
    return this.getStringAttribute('is_instantiation');
  }

  // l4l7_device_application_security_group - computed: true, optional: false, required: false
  public get l4L7DeviceApplicationSecurityGroup() {
    return this.getStringAttribute('l4l7_device_application_security_group');
  }

  // l4l7_third_party_device - computed: true, optional: false, required: false
  public get l4L7ThirdPartyDevice() {
    return this.getStringAttribute('l4l7_third_party_device');
  }

  // managed - computed: true, optional: false, required: false
  public get managed() {
    return this.getStringAttribute('managed');
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

  // package_model - computed: true, optional: false, required: false
  public get packageModel() {
    return this.getStringAttribute('package_model');
  }

  // promiscuous_mode - computed: true, optional: false, required: false
  public get promiscuousMode() {
    return this.getStringAttribute('promiscuous_mode');
  }

  // relation_cloud_rs_ldev_to_ctx - computed: true, optional: false, required: false
  public get relationCloudRsLdevToCtx() {
    return this.getStringAttribute('relation_cloud_rs_ldev_to_ctx');
  }

  // service_type - computed: true, optional: false, required: false
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }

  // target_mode - computed: true, optional: false, required: false
  public get targetMode() {
    return this.getStringAttribute('target_mode');
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

  // trunking - computed: true, optional: false, required: false
  public get trunking() {
    return this.getStringAttribute('trunking');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      tenant_dn: cdktf.stringToTerraform(this._tenantDn),
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
      name_alias: {
        value: cdktf.stringToHclTerraform(this._nameAlias),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
