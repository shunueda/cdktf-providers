// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_vpn_interface_gre_feature_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanCiscoVpnInterfaceGreFeatureTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_vpn_interface_gre_feature_template#id DataSdwanCiscoVpnInterfaceGreFeatureTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_vpn_interface_gre_feature_template#name DataSdwanCiscoVpnInterfaceGreFeatureTemplate#name}
  */
  readonly name?: string;
}
export interface DataSdwanCiscoVpnInterfaceGreFeatureTemplateAccessLists {
}

export function dataSdwanCiscoVpnInterfaceGreFeatureTemplateAccessListsToTerraform(struct?: DataSdwanCiscoVpnInterfaceGreFeatureTemplateAccessLists): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoVpnInterfaceGreFeatureTemplateAccessListsToHclTerraform(struct?: DataSdwanCiscoVpnInterfaceGreFeatureTemplateAccessLists): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoVpnInterfaceGreFeatureTemplateAccessListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoVpnInterfaceGreFeatureTemplateAccessLists | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoVpnInterfaceGreFeatureTemplateAccessLists | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acl_name - computed: true, optional: false, required: false
  public get aclName() {
    return this.getStringAttribute('acl_name');
  }

  // acl_name_variable - computed: true, optional: false, required: false
  public get aclNameVariable() {
    return this.getStringAttribute('acl_name_variable');
  }

  // direction - computed: true, optional: false, required: false
  public get direction() {
    return this.getStringAttribute('direction');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}

export class DataSdwanCiscoVpnInterfaceGreFeatureTemplateAccessListsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoVpnInterfaceGreFeatureTemplateAccessListsOutputReference {
    return new DataSdwanCiscoVpnInterfaceGreFeatureTemplateAccessListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_vpn_interface_gre_feature_template sdwan_cisco_vpn_interface_gre_feature_template}
*/
export class DataSdwanCiscoVpnInterfaceGreFeatureTemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_cisco_vpn_interface_gre_feature_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanCiscoVpnInterfaceGreFeatureTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanCiscoVpnInterfaceGreFeatureTemplate to import
  * @param importFromId The id of the existing DataSdwanCiscoVpnInterfaceGreFeatureTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_vpn_interface_gre_feature_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanCiscoVpnInterfaceGreFeatureTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_cisco_vpn_interface_gre_feature_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_vpn_interface_gre_feature_template sdwan_cisco_vpn_interface_gre_feature_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanCiscoVpnInterfaceGreFeatureTemplateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSdwanCiscoVpnInterfaceGreFeatureTemplateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sdwan_cisco_vpn_interface_gre_feature_template',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_lists - computed: true, optional: false, required: false
  private _accessLists = new DataSdwanCiscoVpnInterfaceGreFeatureTemplateAccessListsList(this, "access_lists", false);
  public get accessLists() {
    return this._accessLists;
  }

  // application - computed: true, optional: false, required: false
  public get application() {
    return this.getStringAttribute('application');
  }

  // application_variable - computed: true, optional: false, required: false
  public get applicationVariable() {
    return this.getStringAttribute('application_variable');
  }

  // clear_dont_fragment - computed: true, optional: false, required: false
  public get clearDontFragment() {
    return this.getBooleanAttribute('clear_dont_fragment');
  }

  // clear_dont_fragment_variable - computed: true, optional: false, required: false
  public get clearDontFragmentVariable() {
    return this.getStringAttribute('clear_dont_fragment_variable');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // device_types - computed: true, optional: false, required: false
  public get deviceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('device_types'));
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

  // interface_description - computed: true, optional: false, required: false
  public get interfaceDescription() {
    return this.getStringAttribute('interface_description');
  }

  // interface_description_variable - computed: true, optional: false, required: false
  public get interfaceDescriptionVariable() {
    return this.getStringAttribute('interface_description_variable');
  }

  // interface_name - computed: true, optional: false, required: false
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }

  // interface_name_variable - computed: true, optional: false, required: false
  public get interfaceNameVariable() {
    return this.getStringAttribute('interface_name_variable');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // ip_address_variable - computed: true, optional: false, required: false
  public get ipAddressVariable() {
    return this.getStringAttribute('ip_address_variable');
  }

  // ip_mtu - computed: true, optional: false, required: false
  public get ipMtu() {
    return this.getNumberAttribute('ip_mtu');
  }

  // ip_mtu_variable - computed: true, optional: false, required: false
  public get ipMtuVariable() {
    return this.getStringAttribute('ip_mtu_variable');
  }

  // name - computed: true, optional: true, required: false
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

  // rewrite_rule - computed: true, optional: false, required: false
  public get rewriteRule() {
    return this.getStringAttribute('rewrite_rule');
  }

  // rewrite_rule_variable - computed: true, optional: false, required: false
  public get rewriteRuleVariable() {
    return this.getStringAttribute('rewrite_rule_variable');
  }

  // shutdown - computed: true, optional: false, required: false
  public get shutdown() {
    return this.getBooleanAttribute('shutdown');
  }

  // shutdown_variable - computed: true, optional: false, required: false
  public get shutdownVariable() {
    return this.getStringAttribute('shutdown_variable');
  }

  // tcp_mss_adjust - computed: true, optional: false, required: false
  public get tcpMssAdjust() {
    return this.getNumberAttribute('tcp_mss_adjust');
  }

  // tcp_mss_adjust_variable - computed: true, optional: false, required: false
  public get tcpMssAdjustVariable() {
    return this.getStringAttribute('tcp_mss_adjust_variable');
  }

  // template_type - computed: true, optional: false, required: false
  public get templateType() {
    return this.getStringAttribute('template_type');
  }

  // tracker - computed: true, optional: false, required: false
  public get tracker() {
    return cdktf.Fn.tolist(this.getListAttribute('tracker'));
  }

  // tracker_variable - computed: true, optional: false, required: false
  public get trackerVariable() {
    return this.getStringAttribute('tracker_variable');
  }

  // tunnel_destination - computed: true, optional: false, required: false
  public get tunnelDestination() {
    return this.getStringAttribute('tunnel_destination');
  }

  // tunnel_destination_variable - computed: true, optional: false, required: false
  public get tunnelDestinationVariable() {
    return this.getStringAttribute('tunnel_destination_variable');
  }

  // tunnel_route_via - computed: true, optional: false, required: false
  public get tunnelRouteVia() {
    return this.getStringAttribute('tunnel_route_via');
  }

  // tunnel_route_via_variable - computed: true, optional: false, required: false
  public get tunnelRouteViaVariable() {
    return this.getStringAttribute('tunnel_route_via_variable');
  }

  // tunnel_source - computed: true, optional: false, required: false
  public get tunnelSource() {
    return this.getStringAttribute('tunnel_source');
  }

  // tunnel_source_interface - computed: true, optional: false, required: false
  public get tunnelSourceInterface() {
    return this.getStringAttribute('tunnel_source_interface');
  }

  // tunnel_source_interface_variable - computed: true, optional: false, required: false
  public get tunnelSourceInterfaceVariable() {
    return this.getStringAttribute('tunnel_source_interface_variable');
  }

  // tunnel_source_variable - computed: true, optional: false, required: false
  public get tunnelSourceVariable() {
    return this.getStringAttribute('tunnel_source_variable');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
